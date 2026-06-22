import { createRoute, z } from "@hono/zod-openapi";
import { pagingQuerySchema } from "~/openapi/schemas/pagination";
import { GetAllJournalEntriesResponseSchema, GetCostCentersResponseSchema, GetGlAccountsResponseSchema, GetTrialBalanceResponseSchema } from "~/platform-legacy/schemas/accounting-rpc";

export const getRBPIGlAccountsRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/accounts',
  request: {
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('GetGLAccountsResponse#Success'),
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
  request: {
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('GetGLAccountByCode#Success'),
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

export const getRBPIBranchesRoute = createRoute({
  method: 'get',
  path: '/rbpi/branches',
  request: {
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('GetBranches#Success'),
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
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('GetBudgets#Success'),
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
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: GetCostCentersResponseSchema,
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

export const getRBPIAllJournalEntriesRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/journals',
  request: {
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: GetAllJournalEntriesResponseSchema,
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

export const getRBPIGlAccountJournalEntriesRoute = createRoute({
  method: 'get',
  path: '/rbpi/ledger/accounts/{glCode}/journals',
  request: {
    query: pagingQuerySchema,
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('GetGlAccountJournalEntries#Success'),
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
          schema: z
            .object({
              
            })
            .openapi('GetJournalEntryById#Success'),
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
      periodStart: z.coerce.date(),
      periodEnd: z.coerce.date(),
      branchId: z.coerce.number().optional(),
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: GetTrialBalanceResponseSchema,
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
      periodStart: z.coerce.date(),
      periodEnd: z.coerce.date(),
      branchId: z.number().optional(),
    }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z.object({
            totalAssets: z.coerce.number(),
            totalLiabilities: z.coerce.number(),
            totalEquity: z.coerce.number(),
            totalIncome: z.coerce.number(),
            totalExpenses: z.coerce.number(),
            netIncome: z.coerce.number(),
            balanceCheck: z.coerce.number(),
          })
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