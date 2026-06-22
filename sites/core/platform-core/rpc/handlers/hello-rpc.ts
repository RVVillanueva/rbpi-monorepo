
import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { StatusCodes } from 'http-status-codes'

const helloRoute = createRoute({
  method: 'get',
  path: '/hello',
  request: {
    query: z
      .object({ 
        who: z
          .string()
          .optional()
          .describe('Who to say hello to'),
      }),
  },
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .describe('The greeting message'),
            })
            .openapi('HelloResponse'),
        },
      },
      description: 'Returns a greeting message',
    },
  },
})

const helloRpc = new OpenAPIHono<HonoCloudflare>()
  .openapi(helloRoute, async ctx => {
    const { who } = ctx.req.valid('query')
    const message = `Hello, ${who?.length ? who : 'world'}!`
    return ctx.json({ message }, StatusCodes.OK)
  })

export { helloRpc }