import { z } from "@hono/zod-openapi";

export const pagingQuerySchema = z.object({

  page: z
    .coerce
    .number()
    .int()
    .min(1)
    .optional()
    .default(1),

  pageSize: z
    .coerce
    .number()
    .int()
    .min(1)
    .max(500)
    .optional()
    .default(20),

  column: z.string().optional(),
  cursor: z.string().optional(),
})
  .openapi('PagingQuery')

export const pagingMetaSchema = z.object({
  total: z.number().int(),
  page: z.number().int(),
  pageSize: z.number().int(),
  nextPage: z.number().nullable().optional(),
  nextCursor: z.string().nullable().optional(),
})
  .openapi('PagingMeta')

export const createPaginatedResponseSchema = 
  <T extends z.ZodTypeAny>(itemSchema: T, refName: string) =>
    z.object({
      data: z.array(itemSchema),
      paging: pagingMetaSchema,
    })
      .openapi(refName)

export function isCursorParams(params: RBPICore.PagingTypes.PagingParams) {
  return 'cursor' in params && 'column' in params
}