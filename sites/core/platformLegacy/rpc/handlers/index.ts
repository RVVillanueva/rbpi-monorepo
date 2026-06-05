
import { OpenAPIHono } from '@hono/zod-openapi'

import * as helloRpc from './helloRpc'
import * as mainRpc from './mainRpc'

export const handlers = { 
  ...helloRpc, 
  ...mainRpc,
}

export const bootstrap = () => 
  Object.values(handlers).reduce(
    (mux, handle) => mux.route('/', handle),
    new OpenAPIHono<HonoCloudflare>()
  )
