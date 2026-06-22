import { createRoute, z } from "@hono/zod-openapi";
import { branchesView, budgetsView, costCentersView, glAccountsView, glJournalsView, journalAuditView } from "~/db/legacy/schema";
import { createPaginatedResponseSchema } from "~/openapi/schemas/pagination";
import { computeTrialBalance } from "../functions/internal";


export const GetCostCentersResponseSchema = createPaginatedResponseSchema(
  z.custom<typeof costCentersView.$inferSelect>(),
  "GetCostCentersResponseSchema",
)

export const GetBranchesResponseSchema = createPaginatedResponseSchema(
  z.custom<typeof branchesView.$inferSelect>(),
  "GetBranchesResponseSchema",
)

export const GetBudgetsResponseSchema = createPaginatedResponseSchema(
  z.custom<typeof budgetsView.$inferSelect>(),
  "GetBudgetsResponseSchema",
)

export const GetGlAccountsResponseSchema = createPaginatedResponseSchema(
  z.custom<typeof glAccountsView.$inferSelect>(),
  "GetGlAccountsResponseSchema",
)

export const GetGlJournalsResponseSchema = createPaginatedResponseSchema(
  z.custom<typeof glJournalsView.$inferSelect>(),
  "GetGlJournalsResponseSchema",
)

export const GetAllJournalEntriesResponseSchema = createPaginatedResponseSchema(
  z.custom<typeof journalAuditView.$inferSelect>(),
  "GetAllJournalEntriesResponseSchema",
)

export const GetTrialBalanceResponseSchema = z
  .custom<Awaited<ReturnType<typeof computeTrialBalance>>>()
  .openapi("GetTrialBalanceResponseSchema")