
import { OpenAPIHono } from '@hono/zod-openapi'

import * as helloRpc from './hello-rpc'
import * as uiRpc from './ui-rpc'

export const handlers = {
  ...helloRpc,
  ...uiRpc,
}

export const bootstrap = () => 
  Object.values(handlers).reduce(
    (mux, handle) => mux.route('/', handle),
    new OpenAPIHono<HonoCloudflare>(),
  )