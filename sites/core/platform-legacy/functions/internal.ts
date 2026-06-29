import { format, startOfYear } from "date-fns";
import { and, between, eq, getViewName, gte, inArray, lte, notInArray, or, SQL, sql, sum } from "drizzle-orm";

import { err, ok } from "neverthrow";
import { AppLoadContext } from "react-router";
import { NotFoundError } from "~/db/errors";
import {
  acctngGlaccounts,
  employeesView,
  glAccountsView,
  journalAuditView,
} from "~/db/legacy/schema";

export const getEmployeeByUsername = async (
  db: RBPICore.LegacyDatabase,
  username: string,
) => {

  const [user] = await db
    .select({
      id: employeesView.id,
      fullName: employeesView.fullName,
      username: employeesView.username,
      isActive: employeesView.isActive,
      accountIsActive: employeesView.accountIsActive,
      employmentStatus: employeesView.employmentStatus,
      isOfficer: employeesView.isOfficer.as('isofficer'),
    })
    .from(employeesView)
    .limit(1)
    .where(eq(employeesView.username, username))
    
  if (!user) {
    return err(
      new NotFoundError(
        getViewName(employeesView)
      )
    )
  }

  return ok(user)
}

export const getEmployeeById = async (
  db: RBPICore.LegacyDatabase,
  id: number
) => {

  const [user] = await db
    .select({
      id: employeesView.id,
      avatar: employeesView.avatar,
      fullName: employeesView.fullName,
      username: employeesView.username,
      isActive: employeesView.isActive,
      accountIsActive: employeesView.accountIsActive,
      employmentStatus: employeesView.employmentStatus,
      isOfficer: employeesView.isOfficer.as('isofficer'),
    })
    .from(employeesView)
    .limit(1)
    .where(eq(employeesView.id, id))
    
  if (!user) {
    return err(
      new NotFoundError(
        getViewName(employeesView)
      )
    )
  }

  return ok(user)
}

export type ComputeFinancialSummaryFiguresArgs = {
  branchIds?: number[]
  periods: Date[]
}

export interface ComputeFinancialSummaryResult {
  periods: string[]
  results: { 
    period: string
    accountingStartDate: string
    branchId: number
    financialSummary: {
      totalAssets: number
      totalLiabilities: number
      totalEquity: number
      totalIncome: number
      totalExpenses: number
      totalEquityInclNetIncome: number
      netIncome: number
      balanceCheck: number
    }
  }[]
}

export const  computeFinancialSummaryFigures = async (
  hono: AppLoadContext['hono'],
  args: ComputeFinancialSummaryFiguresArgs,
): Promise<ComputeFinancialSummaryResult> => {
  const db = hono.get('db')
  
  const out = await db.legacy.transaction(async tx => {
    const result: ComputeFinancialSummaryResult = {
      periods: args.periods.map(period => period.toJSON()),
      results: [],
    }

    const interbranchSubq = db.legacy
      .select({ glCode: acctngGlaccounts.glCode })
      .from(acctngGlaccounts)
      .where(inArray(acctngGlaccounts.glParent, [108000, 203000]))

    const doQuery = async (conditions: SQL<unknown>[]) => {
      const [res] = await tx
        .select({
          totalAssets: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'A' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_assets'),
          totalLiabilities: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'L' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_liabilities'),
          totalEquity: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'C' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_equity'),
          totalIncome: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'I' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_income'),
          totalExpenses: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'E' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_expenses'),

          // equity + (income - expenses)
          totalEquityInclNetIncome: sql<number>`
            SUM(CASE WHEN ${ journalAuditView.glType } = 'C' THEN ${ journalAuditView.netMovement } ELSE 0 END) +
            (
              SUM(CASE WHEN ${ journalAuditView.glType } = 'I' THEN ${ journalAuditView.netMovement } ELSE 0 END) -
              SUM(CASE WHEN ${ journalAuditView.glType } = 'E' THEN ${ journalAuditView.netMovement } ELSE 0 END)
            )
          `,

          // income - expenses
          netIncome: sql<number>`
            SUM(CASE WHEN ${ journalAuditView.glType } = 'I' THEN ${ journalAuditView.netMovement } ELSE 0 END) -
            SUM(CASE WHEN ${ journalAuditView.glType } = 'E' THEN ${ journalAuditView.netMovement } ELSE 0 END)
          `.as('net_income'),

          // assets - (liabilities + equity), should balance with netIncome!
          balanceCheck: sql<number>`
            SUM(CASE WHEN ${ journalAuditView.glType } = 'A' THEN ${ journalAuditView.netMovement } ELSE 0 END) -
            (
              SUM(CASE WHEN ${ journalAuditView.glType } = 'L' THEN ${ journalAuditView.netMovement } ELSE 0 END) +
              SUM(CASE WHEN ${ journalAuditView.glType } = 'C' THEN ${ journalAuditView.netMovement } ELSE 0 END) +
              (
                SUM(CASE WHEN ${ journalAuditView.glType } = 'I' THEN ${ journalAuditView.netMovement } ELSE 0 END) -
                SUM(CASE WHEN ${ journalAuditView.glType } = 'E' THEN ${ journalAuditView.netMovement } ELSE 0 END)
              )
            )
          `.as('balance_check'),
        })
        .from(journalAuditView)
        .where(and(...conditions))

      return {
        totalAssets:              Number(res.totalAssets),
        totalLiabilities:         Number(res.totalLiabilities),
        totalEquity:              Number(res.totalEquity),
        totalEquityInclNetIncome: Number(res.totalEquityInclNetIncome),
        totalIncome:              Number(res.totalIncome),
        totalExpenses:            Number(res.totalExpenses),
        netIncome:                Number(res.netIncome),
        balanceCheck:             Number(res.balanceCheck),
      }
    }

    for (const period of args.periods) {
      // @TODO: Relying on startOfYear will inevitably fix the accounting period to January 1, <Start year of the Period>
      let startDate: Date = startOfYear(period)

      const conditions = [
        between(
          journalAuditView.journalDate,
          sql`${format(startDate, 'yyyy-MM-dd')}`,
          sql`${format(period, 'yyyy-MM-dd')}`,
        )
      ]

      if (args.branchIds?.length) {
        for (const branch of args.branchIds) {
          if (branch === 0) continue

          const branchConditions = [
            ...conditions,
            eq(journalAuditView.branchId, branch),
          ]

          result.results.push({
            period: period.toJSON(), 
            accountingStartDate: startDate.toJSON(), 
            branchId: branch, 
            financialSummary: await doQuery(branchConditions),
          })
        }
      }

      // Internal transactions are ignored to avoid including internal
      // accounts into the computation.
      conditions.push(
        notInArray(
          journalAuditView.glCode,
          interbranchSubq,
        )
      )

      result.results.unshift({ 
        period: period.toJSON(),
        accountingStartDate: startDate.toJSON(), 
        branchId: 0, 
        financialSummary: await doQuery(conditions),
      })
    }

    return result
  })

  return out
}

export type ComputeTrialBalanceArgs = {
  branchIds?: number[]
  periods: Date[]
}

export interface TrialBalanceResult {
  parent: RBPICore.Legacy.AccountingGlAccountsView,
  accountSummary: {
    debit: number
    credit: number
    netMovement: number
    totalBalance: number
  },
  children: TrialBalanceResult[]
}

export interface ComputedFullTrialBalanceResult {
  periods: string[]
  results: {
    period: string
    branchId: number
    trialBalanceData: TrialBalanceResult[]
  }[]
}

export const computeFullTrialBalanceFigures = async (
  hono: AppLoadContext['hono'],
  args: ComputeTrialBalanceArgs,
): Promise<ComputedFullTrialBalanceResult> => {
  
  const db = hono.get('db')

  const allAccounts = await db.legacy
    .select()
    .from(glAccountsView)

  const childsMap = new Map<number, typeof allAccounts>()

  for (const account of allAccounts) {
    if (account.level === 1) continue
    
    const siblings = childsMap.get(account.parent) ?? []
    siblings.push(account)
    childsMap.set(account.parent, siblings)
  }

  const rootAccounts = allAccounts.filter(a => a.level === 1)

  const computeForPeriodAndBranch = async (
    period: Date,
    branchId: number | null,
  ) => {
    const conditions = [
      between(
        journalAuditView.journalDate,
        sql`${format(period, 'yyyy-MM-dd')}`, // Only get the transactions made on the period.
        sql`${format(period, 'yyyy-MM-dd')}`,
      )
    ]

    if (branchId !== null) {
      conditions.push(eq(journalAuditView.branchId, branchId))
    } else {
      conditions.push(
        notInArray(
          journalAuditView.glCode,
          db.legacy
            .select({ glCode: acctngGlaccounts.glCode })
            .from(acctngGlaccounts)
            .where(inArray(acctngGlaccounts.glParent, [ 108000, 203000 ]))
        )
      )
    }

    const summaries = await db.legacy
      .select({
        glCode: journalAuditView.glCode,
        debit:  sum(journalAuditView.debit).as('total_debit'),
        credit: sum(journalAuditView.credit).as('total_credit'),
        netMovement: sum(journalAuditView.netMovement).as('net_movement'),
      })
      .from(journalAuditView)
      .where(and(...conditions))
      .groupBy(journalAuditView.glCode)

    const summaryMap = new Map(
      summaries.map(s => [s.glCode, {
        debit: Number(s.debit ?? 0), 
        credit: Number(s.credit ?? 0),
        netMovement: Number(s.netMovement ?? 0),
      }])
    )

    const balanceMap = await getAllAccumulatedGlAccountsBalances(hono, period, branchId)

    const buildTree = (accounts: typeof allAccounts): TrialBalanceResult[] => {
      return accounts.map(account => {
        const childs = childsMap.get(account.code) ?? []
        const children = childs.length ? buildTree(childs) : []

        const rolledUp = children.reduce(
          (acc, child) => ({
            debit:  acc.debit  + child.accountSummary.debit,
            credit: acc.credit + child.accountSummary.credit,
            netMovement: acc.netMovement + child.accountSummary.netMovement,
          }),
          { debit: 0, credit: 0, netMovement: 0 }
        )

        const ownSummary = childs.length === 0 ? 
          (summaryMap.get(account.code) ?? 
            { debit: 0, credit: 0, netMovement: 0 }) : 
            { debit: 0, credit: 0, netMovement: 0 }

        return {
          parent: account,
          accountSummary: {
            debit: ownSummary.debit + rolledUp.debit,
            credit: ownSummary.credit + rolledUp.credit,
            netMovement: ownSummary.netMovement + rolledUp.netMovement,
            totalBalance: balanceMap.get(account.code) ?? 0,
          },
          children,
        }
      })
    }

    return {
      period: period.toJSON(),
      branchId: branchId ?? 0,
      trialBalanceData: buildTree(rootAccounts),
    }
  }

  const tasks = []

  for (const period of args.periods) {
    tasks.push(computeForPeriodAndBranch(period, null))

    if (args.branchIds?.length) {
      for (const branchId of args.branchIds) {
        if (branchId === 0) continue
        tasks.push(computeForPeriodAndBranch(period, branchId))
      }
    }
  }

  const results = await Promise.all(tasks)

  return {
    periods: args.periods.map(period => period.toJSON()),
    results,
  }
}

const getAccumulatedGlAccountBalance = async (
  hono: AppLoadContext['hono'],
  glCode: number,
  period: Date,
  branchId: number | null,
) => {
  const db = hono.get('db')

  const conditions = [
    gte(journalAuditView.journalDate, sql`${format(startOfYear(period), 'yyyy-MM-dd')}`),
    lte(journalAuditView.journalDate, sql`${format(period, 'yyyy-MM-dd')}`),
    or(
      eq(journalAuditView.glCode, glCode),
      eq(journalAuditView.glParent, glCode),
    ),
  ]

  if (branchId !== null && branchId !== 0) {
    conditions.push(eq(journalAuditView.branchId, branchId))
  } else {
    conditions.push(
      notInArray(
        journalAuditView.glCode,
        db.legacy
          .select({ glCode: acctngGlaccounts.glCode })
          .from(acctngGlaccounts)
          .where(inArray(acctngGlaccounts.glParent, [108000, 203000]))
      )
    )
  }

  const [result] = await db.legacy
    .select({ total: sum(journalAuditView.netMovement) })
    .from(journalAuditView)
    .where(and(...conditions))

  return Number(result?.total ?? 0)
}

export const getAllAccumulatedGlAccountsBalances = async (
  hono: AppLoadContext['hono'],
  period: Date,
  branchId: number | null,
) => {
  const db = hono.get('db')

  const conditions = [
    gte(journalAuditView.journalDate, sql`${format(startOfYear(period), 'yyyy-MM-dd')}`),
    lte(journalAuditView.journalDate, sql`${format(period, 'yyyy-MM-dd')}`),
  ]

  if (branchId !== null && branchId !== 0) {
    conditions.push(eq(journalAuditView.branchId, branchId))
  } else {
    conditions.push(
      notInArray(
        journalAuditView.glCode,
        db.legacy
          .select({ glCode: acctngGlaccounts.glCode })
          .from(acctngGlaccounts)
          .where(inArray(acctngGlaccounts.glParent, [108000, 203000]))
      )
    )
  }

  const rows = await db.legacy
    .select({
      glCode: journalAuditView.glCode,
      glParent: journalAuditView.glParent,
      total: sum(journalAuditView.netMovement),
    })
    .from(journalAuditView)
    .where(and(...conditions))
    .groupBy(journalAuditView.glCode, journalAuditView.glParent)

  const balanceMap = new Map<number, number>()

  for (const row of rows) {
    const amount = Number(row.total ?? 0)

    balanceMap.set(row.glCode, (balanceMap.get(row.glCode) ?? 0) + amount)

    if (row.glParent) {
      balanceMap.set(row.glParent, (balanceMap.get(row.glParent) ?? 0) + amount)
    }
  }

  return balanceMap
}