import { OpenAPIHono } from "@hono/zod-openapi";
import {
  getRBPIAllJournalHeaderEntriesRoute,
  getRBPIBalanceSheetRoute,
  getRBPIBranchByIdRoute,
  getRBPIBranchesRoute,
  getRBPIBudgetsRoute,
  getRBPIBudgetVsActualRoute,
  getRBPICostCenterRoute,
  getRBPICostCentersRoute,
  getRBPIFinancialSummary,
  getRBPIGlAccountByCodeRoute,
  getRBPIGlAccountJournalEntriesRoute,
  getRBPIGlAccountsRoute,
  getRBPIIncomeStatementRoute,
  getRBPIJournalAuditRoute,
  getRBPIJournalAuthorsRoute,
  getRBPIJournalEntryByIdRoute,
  getRBPIJournalsRoute,
  getRBPITrialBalanceRoute,
} from "./specs/accounting";

import { StatusCodes } from "http-status-codes";
import {
  acctngJournalTrail,
  branchesView,
  budgetsView,
  costCentersView,
  employeesView,
  glAccountsView,
  journalAuditView,
  journalHeaderView
} from "~/db/legacy/schema";
import { isCursorParams } from "~/openapi/schemas/pagination";

import { and, asc, between, count, desc, eq, ne } from "drizzle-orm";

import { startOfYear } from 'date-fns';
import {
  computeFinancialSummaryFigures,
  computeFullTrialBalanceFigures,
} from "~/platform-legacy/functions/internal";


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
          .offset((req.page-1) * req.pageSize)
          .limit(req.pageSize)
          .orderBy(asc(glAccountsView.level)),

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
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIGlAccountByCodeRoute, async ctx => {
    const code = ctx.req.param('glCode')
    const db = ctx.get('db')

    const [account] = await db.legacy
      .selectDistinct()
      .from(glAccountsView)
      .where(eq(glAccountsView.code, Number(code)))
    
    return ctx.json({ account }, StatusCodes.OK)
  })

  .openapi(getRBPIJournalEntryByIdRoute, async ctx => {

    return ctx.json({}, StatusCodes.BAD_REQUEST)
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
          .offset((req.page-1) * req.pageSize)
          .limit(req.pageSize)
          .where(eq(branchesView.branchLevel, 2)),

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
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIBranchByIdRoute, async ctx => {
    const branchId = Number(ctx.req.param('branchId'))

    const db = ctx.get('db')

    const [branch] = await db
      .legacy
      .selectDistinct()
      .from(branchesView)
      .where(eq(branchesView.id, branchId))

    return ctx.json({ branch }, StatusCodes.OK)
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
          .offset((req.page-1) * req.pageSize)
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
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
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
          .offset((req.page-1) * req.pageSize)
          .limit(req.pageSize)
          .where(
            ne(costCentersView.parent, 0),
          ),
        
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
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPICostCenterRoute, async ctx => {
    const db = ctx.get('db')
    const costCenterId = Number(ctx.req.param('costCenterId'))
    
    const [costCenter] = await db.legacy
      .select()
      .from(costCentersView)
      .where(
        eq(costCentersView.id, costCenterId)
      )

    return ctx.json({ costCenter }, StatusCodes.OK)
  })

  .openapi(getRBPIJournalsRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const conditions = [
      ...req.periods.map(
        period => {
          const startPeriod = startOfYear(period)
          return between(journalHeaderView.journalDate, startPeriod, period)
        }
      )
    ]

    const { journals } = await db.legacy.transaction(async tx => {
      const [ journals ] = await Promise.all([
        await tx
          .select()
          .from(journalHeaderView)
          .offset((req.page-1) * req.pageSize)
          .limit(req.pageSize)
          .orderBy(
            desc(journalHeaderView.journalId),
            desc(journalHeaderView.journalDate),
            desc(journalHeaderView.postingTime),
          )
          .where(
            and(...conditions),
          )
          .groupBy(
            journalHeaderView.journalId,
          )
      ])

      return { journals }
    })

    return ctx.json({
      data: journals,
      paging: {
        total: journals.length,
        page: req.page,
        pageSize: req.pageSize,
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIJournalAuthorsRoute, async ctx => {
    const req = ctx.req.valid('query')
    const journalId = Number(ctx.req.param('journalId'))

    const db = ctx.get('db')

    if (isCursorParams(req) || isNaN(journalId)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const { authors } = await db.legacy.transaction(async tx => {
      const authors = await tx
        .selectDistinct({
          makerId: acctngJournalTrail.makerid,
          makerFullName: employeesView.fullName,
          makerAvatar: employeesView.avatar,
          makerBranchName: employeesView.branchName,
          makerPositionName: employeesView.positionName,
        })
        .from(acctngJournalTrail)
        .leftJoin(
          employeesView,
          eq(employeesView.id, acctngJournalTrail.makerid)
        )
        .where(
          eq(acctngJournalTrail.journalid, journalId)
        )

      return { authors }
    })

    return ctx.json({
      data: authors!,
      paging: {
        total: authors.length,
        page: req.page,
        pageSize: req.pageSize,
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIAllJournalHeaderEntriesRoute, async ctx => {
    const req = ctx.req.valid('query')
    const db = ctx.get('db')

    if (isCursorParams(req)) {
      return ctx.json({}, StatusCodes.BAD_REQUEST)
    }

    const out = await db.legacy.transaction(async tx => {

      const [
        journalEntries,
      ] = await Promise.all([
        await tx
          .select()
          .from(journalAuditView)
          .offset((req.page-1) * req.pageSize)
          .limit(req.pageSize)
          .orderBy(desc(journalAuditView.postingTime))
          .groupBy(journalAuditView.journalId),
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
        nextPage: req.page+1,
        prevPage: req.page-1 <= 0 ? req.page : req.page-1,
      },
    }, StatusCodes.OK)
  })

  .openapi(getRBPIGlAccountJournalEntriesRoute, async ctx => {
    
    return ctx.json({}, StatusCodes.BAD_REQUEST)
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
    const res = await computeFullTrialBalanceFigures(ctx, req)
    return ctx.json(res, StatusCodes.OK)
  })

  .openapi(getRBPIFinancialSummary, async ctx => {
    const req = ctx.req.valid('query')
    const res = await computeFinancialSummaryFigures(ctx, req)
    return ctx.json(res, StatusCodes.OK)
  })

export { accountingRpc };

