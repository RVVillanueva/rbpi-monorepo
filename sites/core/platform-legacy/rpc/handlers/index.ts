
import { OpenAPIHono } from '@hono/zod-openapi'

import * as helloRpc from './hello-rpc'
import * as mainRpc from './main-rpc'

export const handlers = { 
  ...helloRpc, 
  ...mainRpc,
}

export const bootstrap = () => 
  Object.values(handlers).reduce(
    (mux, handle) => mux.route('/', handle),
    new OpenAPIHono<HonoCloudflare>()
  )
