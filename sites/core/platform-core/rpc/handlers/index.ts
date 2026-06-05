
import { OpenAPIHono } from '@hono/zod-openapi'

import * as helloRpc from './hello-rpc'

export const handlers = {
  ...helloRpc,
}

export const bootstrap = () => 
  Object.values(handlers).reduce(
    (mux, handle) => mux.route('/', handle),
    new OpenAPIHono<HonoCloudflare>(),
  )