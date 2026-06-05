
import { OpenAPIHono } from '@hono/zod-openapi'

import { bootstrap } from './handlers'

const coreRpc = new OpenAPIHono<HonoCloudflare>()
  .route('/rpc', bootstrap())
  .doc('/rpc/doc.json', {
    openapi: '3.0.0',
    
    info: {
      version: '0.0.1',
      title: 'core',
      contact: {
        name: 'Rom Vales Villanueva',
        email: 'rvvillanueva.rbpi@gmail.com',
      },
      description: 'RPC handlers for the core API',
    },

    servers: [
      { url: import.meta.env.RPC_URL, description: 'default' },
    ],

    tags: [],
  })

export { coreRpc }