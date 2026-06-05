
import { OpenAPIHono } from '@hono/zod-openapi'

import { bootstrap } from './handlers'
import { hc } from 'hono/client'

const legacyRpc = new OpenAPIHono<HonoCloudflare>().route('/_legacy/rpc', bootstrap())

legacyRpc.doc('/_legacy/rpc/doc.json', {
  openapi: '3.0.0',
  info: {
    version: '0.0.1',
    title: 'legacy',
    contact: {
      name: 'Rom Vales Villanueva',
      email: 'rvvillanueva.rbpi@gmail.com',
    },
    description: 'RPC handlers for the legacy API',
  },
  servers: [
    { url: import.meta.env.LEGACY_RPC_URL, description: 'default' },
  ],
  tags: [],
})

export { legacyRpc }