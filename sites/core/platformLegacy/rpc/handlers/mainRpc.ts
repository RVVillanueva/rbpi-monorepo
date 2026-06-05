// This code is used by the platform to interface with rbsoftech
// database schema. Please check the legacyRpc specs in this folder
// for more info.

import { OpenAPIHono } from '@hono/zod-openapi'

const mainRpc = new OpenAPIHono<HonoCloudflare>()

export { mainRpc }