import { OpenAPIHono } from "@hono/zod-openapi";
import { 
  getRBPIBalanceSheetRoute, getRBPIBudgetVsActualRoute,
  getRBPIBranchesRoute, getRBPIBudgetsRoute, getRBPICostCentersRoute, 
  getRBPIGlAccountByCodeRoute, getRBPIGlAccountJournalEntriesRoute, 
  getRBPIGlAccountsRoute, getRBPIIncomeStatementRoute, getRBPIJournalAuditRoute, 
  getRBPIJournalEntryByIdRoute, getRBPITrialBalanceRoute,
  getRBPIAllJournalEntriesRoute, getRBPIFinancialSummary,
} from "./specs/accounting";

import { StatusCodes } from "http-status-codes";
import { isCursorParams } from "~/openapi/schemas/pagination";
import { branchesView, budgetsView, costCentersView, glAccountsView, journalAuditView } from "~/db/legacy/schema";
import { asc, count, desc } from "drizzle-orm";
import { computeFinancialSummary, computeTrialBalance } from "~/platform-legacy/functions/internal";

const accountingRpc = new OpenAPIHono<HonoCloudflare>()

  .openapi(getRBPIGlAccountsRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const out = await db.legacy.transaction(async tx => {
      const [
        glAccounts,
      ] = await Promise.all([

        await tx
          .select()
          .from(glAccountsView)
          .offset(req.page)
          .limit(req.pageSize)
          .orderBy(asc(glAccountsView.level))
          .$dynamic(),

        await tx
          .select({ value: count() })
          .from(glAccountsView),

      ])

      return { glAccounts }
    })

    const { glAccounts } = out

    return ctx.json({
      data: glAccounts,
      paging: {
        total: glAccounts.length,
        page: req.page,
        pageSize: req.pageSize,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIGlAccountByCodeRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPIJournalEntryByIdRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPIBranchesRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const out = await db.legacy.transaction(async tx => {
      const [
        branches,
      ] = await Promise.all([

        await tx
          .select()
          .from(branchesView)
          .offset(req.page)
          .limit(req.pageSize)
          .$dynamic(),

        await tx
          .select({ value: count() })
          .from(branchesView),

      ])

      return { branches }
    })

    const { branches } = out

    return ctx.json({
      data: branches,
      paging: {
        total: branches.length,
        page: req.page,
        pageSize: req.pageSize,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIBudgetsRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const out = await db.legacy.transaction(async tx => {
      const [
        budgets,
      ] = await Promise.all([

        await tx
          .select()
          .from(budgetsView)
          .offset(req.page)
          .limit(req.pageSize)
          .orderBy(desc(budgetsView.budgetYear))
          .$dynamic(),

      ])


      return { budgets }
    })

    const { budgets } = out

    return ctx.json({
      data: budgets,
      paging: {
        total: budgets.length,
        page: req.page,
        pageSize: req.pageSize,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIBudgetVsActualRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPICostCentersRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const out = await db.legacy.transaction(async tx => {      
      const [
        costCenters,
      ] = await Promise.all([

        await tx
          .select()
          .from(costCentersView)
          .offset(req.page)
          .limit(req.pageSize)
          .$dynamic(),
        
      ])

      return { costCenters }
    })

    const { costCenters } = out

    return ctx.json({
      data: costCenters,
      paging: {
        total: costCenters.length,
        page: req.page,
        pageSize: req.pageSize,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIAllJournalEntriesRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const out = await db.legacy.transaction(async tx => {
      console.log(req)

      const [
        journalEntries,
      ] = await Promise.all([
        await tx
          .select()
          .from(journalAuditView)
          .offset(req.page)
          .limit(req.pageSize)
          .orderBy(desc(journalAuditView.journalDate)),
      ])

      return { journalEntries }
    })

    const { journalEntries } = out

    return ctx.json({
      data: journalEntries,
      paging: {
        total: 0,
        page: req.page,
        pageSize: req.pageSize,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIGlAccountJournalEntriesRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPIJournalAuditRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPIIncomeStatementRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPIBalanceSheetRoute, async ctx => {

    return ctx.json({}, StatusCodes.OK)
  })

  .openapi(getRBPITrialBalanceRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    const res = await computeTrialBalance(
      db.legacy,
      req.periodStart, 
      req.periodEnd,
      req.branchId,
    )

    return ctx.json(res, StatusCodes.OK)
  })

  .openapi(getRBPIFinancialSummary, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    const res = await computeFinancialSummary(
      db.legacy, 
      req.periodStart, 
      req.periodEnd,
      req.branchId,
    )

    return ctx.json({
      totalAssets: Number(res.totalAssets),
      totalLiabilities: Number(res.totalLiabilities),
      totalEquity: Number(res.totalEquity),
      totalIncome: Number(res.totalIncome),
      totalExpenses: Number(res.totalExpenses),
      netIncome: Number(res.netIncome),
      balanceCheck: Number(res.balanceCheck),
    }, StatusCodes.OK)
  })

export { accountingRpc }

