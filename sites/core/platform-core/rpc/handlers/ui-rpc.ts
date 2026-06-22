import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { StatusCodes } from "http-status-codes";

const patchWindowStateRoute = createRoute({
  method: 'patch',
  path: '/__ui/windows',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            windowStates: z.object({
              activeWindowId: z.number(),
              windows: z.array(
                z.object({
                  id: z.number(),
                  title: z.string(),
                  pathname: z.string(),
                  state: z.unknown(),
                }),
              ),
            }),
          }),
        },
      },
    },
  },
  
  responses: {
    [200]: {
      content: {
        'application/json': {
          schema: z.object({

          })
          .openapi('PatchWindowStateResponse'),
        },
      },
      description: 'Returns the new window state for the user.',
    },

    [403]: {
      content: {
        'application/json': {
          schema: z.object({

          })
          .openapi('PatchWindowStateResponse'),
        },
      },
      description: 'Attempting to update window state without a logged in user account',
    },
  },
})

const uiRpc = new OpenAPIHono<HonoCloudflare>()
  .openapi(patchWindowStateRoute, async ctx => {
    const { windowStates } = ctx.req.valid('json')

    const auth = ctx.get('auth')
    const res = await auth.api.getSession()

    if (!res) {
      return ctx.json({}, StatusCodes.FORBIDDEN)
    }

    const { session } = res
    const state = session.state as RBPICore.Session.StateConfig

    await auth.api.updateSession({
      body: {
        state: {
          ...state,
          windowStates, // new state
        } satisfies RBPICore.Session.StateConfig,
      },
      headers: ctx.req.raw.headers,
    })

    return ctx.json({}, StatusCodes.OK)
  })

export { uiRpc }
