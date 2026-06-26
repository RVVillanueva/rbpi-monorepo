import { createRoute, z } from "@hono/zod-openapi";
import { createPaginatedResponseSchema, pagingQuerySchema } from "~/openapi/schemas/pagination";
import { 
  type ComputeFinancialSummaryResult, 
  type ComputedFullTrialBalanceResult,
} from "~/platform-legacy/functions/internal";

export const getRBPIGlAccountsRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/accounts',
  request: {
    query: pagingQuerySchema.extend({
      
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<RBPICore.Legacy.AccountingGlAccountsView>(),
            "GetGlAccountsResponseSchema",
          ),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIGlAccountByCodeRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/accounts/{glCode}',
  request: {},
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z.object({
            
          }),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({
            account: z.custom<RBPICore.Legacy.AccountingGlAccountsView>()
          }),
        },
      },
      description: '',
    },
  },
})

export const getRBPIBranchesRoute = createRoute({
  method: 'get',
  path: '/rbpi/branches',
  request: {
    query: pagingQuerySchema.extend({

    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<RBPICore.Legacy.AccountingBranchesView>(),
            "GetBranchesResponseSchema",
          ),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIBudgetsRoute = createRoute({
  method: 'get',
  path: '/rbpi/budgets',
  request: {
    query: pagingQuerySchema.extend({

    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<RBPICore.Legacy.AccountingBudgetsView>(),
            "GetBudgetsResponseSchema",
          ),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIBudgetVsActualRoute = createRoute({
  method: 'get',
  path: '/rbpi/budgets/vs-actual',
  request: {},
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('GetBudgetVsActual#Success'),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'Unimplemented',
    },
  },
})

export const getRBPICostCentersRoute = createRoute({
  method: 'get',
  path: '/rbpi/costCenters',
  request: {
    query: pagingQuerySchema.extend({

    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<RBPICore.Legacy.AccountingCostCentersView>(),
            "GetCostCentersResponseSchema",
          ),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'Unimplemented',
    },
  },
})

export const getRBPIAllJournalHeaderEntriesRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/journals',
  request: {
    query: pagingQuerySchema.extend({
      periods: z
        .string()
        .transform(v => v.split(','))
        .transform(arr => arr.map((d) => new Date(d))),
      branchIds: z
        .string()
        .transform(v => v.split(','))
        .transform(ids => ids.map(d => Number(d)))
        .optional(),
    }),
  },  
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<RBPICore.Legacy.AccountingJournalAuditView>(),
            "GetRBPIAllJournalHeaderEntries",
          ),
        },
      },
      description: '',
    },
    [400]: {
      content: {
        'application/json': {
          schema: z.object({

          }),
        },
      },
      description: 'Unimplemented',
    },
  },
})

export type GetRBPIJournalsResult = z.infer<typeof getRBPIJournalsRoute.responses['200']['content']['application/json']['schema']>
export const getRBPIJournalsRouteResponseSchema = createPaginatedResponseSchema(
  z.custom<RBPICore.Legacy.AccountingJournalHeaderView>(),
  'GetRBPIJournals',
)

export const getRBPIJournalsRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/journals',
  request: {
    query: pagingQuerySchema.extend({
      periods: z
        .string()
        .transform(v => v.split(','))
        .transform(arr => arr.map((d) => new Date(d))),
      branchIds: z
        .string()
        .transform(v => v.split(','))
        .transform(ids => ids.map(d => Number(d)))
        .optional(),
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: getRBPIJournalsRouteResponseSchema,
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export type GetRBPIJournalAuthorsResult = z.infer<typeof getRBPIJournalAuthorsRoute['responses']['200']['content']['application/json']['schema']>

export const getRBPIJournalAuthorsRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/journals/{journalId}/authors',
  request: {
    param: z.object({
      journalId: z.coerce.number(),
    }),
    query: pagingQuerySchema.extend({}),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<{
              makerId: number | null,
              makerFullName: string,
              makerAvatar: Buffer<ArrayBufferLike> | null,
              makerBranchName: string | null,
              makerPositionName: string | null,
            }>(),
            'GetRBPIJournalAuthors',
          ),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIGlAccountJournalEntriesRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/accounts/{glCode}/journals',
  request: {
    query: pagingQuerySchema.extend({
      journalId: z.coerce.number(),
      periods: z
        .string()
        .transform(v => v.split(','))
        .transform(arr => arr.map((d) => new Date(d))),
      branchIds: z
        .string()
        .transform(v => v.split(','))
        .transform(ids => ids.map(d => Number(d)))
        .optional(),
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: createPaginatedResponseSchema(
            z.custom<RBPICore.Legacy.AccountingJournalAuditView>(),
            "GetRBPIGlAccountJournalEntriesRoute",
          ),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIJournalEntryByIdRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/journals/{journalId}',
  request: {},
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z.custom<RBPICore.Legacy.AccountingJournalAuditView>().openapi("GetRBPIJournalEntryByIdRoute"),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPITrialBalanceRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/trialBalance',
  request: {
    query: z.object({
      periods: z
        .string()
        .transform(v => v.split(','))
        .transform(arr => arr.map((d) => new Date(d))),
      branchIds: z
        .string()
        .transform(v => v.split(','))
        .transform(ids => ids.map(d => Number(d)))
        .optional(),
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .custom<ComputedFullTrialBalanceResult>()
            .openapi("GetTrialBalanceResponseSchema"),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIBalanceSheetRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/balanceSheet',
  request: {},
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('GetBalanceSheet#Success'),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIIncomeStatementRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/incomeStatement',
  request: {},
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('GetIncomeStatement#Success'),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIJournalAuditRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/journalAudit',
  request: {},
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('GetJournalAudit#Success'),
        },
      },
      description: '',
    },

    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})

export const getRBPIFinancialSummary = createRoute({
  method: 'get',
  path: '/rbpi/ledger/reports/financialSummary',
  request: {
    query: z.object({
      accountingStartDate: z.coerce.date().optional(),
      periods: z
        .string()
        .transform(v => v.split(','))
        .transform(arr => arr.map((d) => new Date(d))),
      branchIds: z
        .string()
        .transform(v => v.split(','))
        .transform(ids => ids.map(d => Number(d)))
        .optional(),
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z.custom<ComputeFinancialSummaryResult>()
            .openapi('ComputeFinancialSnapshot#Success')
        },
      },
      description: '',
    },
    [400]: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: '',
    },
  },
})