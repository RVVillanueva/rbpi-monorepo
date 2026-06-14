import {
    defineConfig
} from 'drizzle-kit';

export default defineConfig({
  out: './db/core/migrations',
  schema: './db/core/schema/index.ts',
  dialect: 'postgresql',

  dbCredentials: {
    url: process.env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_CORE,
  },

  introspect: {
    casing: 'preserve',
  },

  strict: true,
})