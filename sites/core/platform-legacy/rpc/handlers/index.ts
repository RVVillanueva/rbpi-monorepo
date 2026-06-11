
import { OpenAPIHono } from '@hono/zod-openapi'

import * as helloRpc from './hello-rpc'
import * as otpRpc from './otp-rpc'

export const handlers = { 
  ...helloRpc,
  ...otpRpc,
}

export const bootstrap = () => 
  Object.values(handlers).reduce(
    (mux, handle) => mux.route('/', handle),
    new OpenAPIHono<HonoCloudflare>()
  )
