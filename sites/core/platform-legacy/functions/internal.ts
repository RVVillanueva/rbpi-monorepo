import { format } from "date-fns";
import { gl } from "date-fns/locale";
import { and, asc, between, eq, getViewName, inArray, lte, notInArray, sql } from "drizzle-orm";

import { err, ok } from "neverthrow";
import { NotFoundError } from "~/db/errors";
import { acctngGlaccounts, acctngJournalIbtracker, employeesView, glAccountsView, journalAuditView } from "~/db/legacy/schema";

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

export const computeFinancialSummary = async (
  db: RBPICore.LegacyDatabase,
  periodStart: Date,
  periodEnd: Date,
  branchId?: number,
) => {

  const interbranchSubq = db
    .select({ glCode: acctngGlaccounts.glCode })
    .from(acctngGlaccounts)
    .where(
      inArray(acctngGlaccounts.glParent, [108000, 203000]),
    )

  const conditions = [
    notInArray(journalAuditView.glCode, interbranchSubq),
    between(
      journalAuditView.journalDate,
      sql`${format(periodStart, 'yyyy-MM-dd')}`,
      sql`${format(periodEnd, 'yyyy-MM-dd')}`
    ),
  ]
  
  if (branchId) {
    conditions.push(eq(journalAuditView.branchId, branchId))
  }

  const query = db
    .select({
      totalAssets: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'A' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_assets'),
      totalLiabilities: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'L' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_liabilities'),
      totalEquity: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'C' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_equity'),
      totalIncome: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'I' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_income'),
      totalExpenses: sql<number>`SUM(CASE WHEN ${ journalAuditView.glType } = 'E' THEN ${ journalAuditView.netMovement } ELSE 0 END)`.as('total_expenses'),

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
          SUM(CASE WHEN ${ journalAuditView.glType } = 'C' THEN ${ journalAuditView.netMovement } ELSE 0 END)
        )
      `.as('balance_check'),
    })
    .from(journalAuditView)
    .where(and(...conditions))

  console.log(query.toSQL())

  const [res] = await query

  return res
}

export const computeTrialBalance = async (
  db: RBPICore.LegacyDatabase,
  periodStart: Date,
  periodEnd: Date,
  branchId?: number,
) => {
  return await db.transaction(async tx => {
    const interbranchSubq = db
      .select({ glCode: acctngGlaccounts.glCode })
      .from(acctngGlaccounts)
      .where(inArray(acctngGlaccounts.glParent, [108000, 203000]))

    const joinConditions = and(
      eq(journalAuditView.glCode, acctngGlaccounts.glCode),
      between(journalAuditView.journalDate, periodStart, periodEnd),
      notInArray(journalAuditView.glCode, interbranchSubq),
      ...(branchId ? [eq(journalAuditView.branchId, branchId)] : []),
    )

    
  })
}