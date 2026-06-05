
import { OpenAPIHono } from '@hono/zod-openapi'

export const handlers: Record<string, OpenAPIHono<HonoCloudflare>> = {}

export const bootstrap = () => 
  Object.values(handlers).reduce(
    (mux, handle) => mux.route('/', handle),
    new OpenAPIHono<HonoCloudflare>(),
  )