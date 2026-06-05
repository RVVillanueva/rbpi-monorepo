import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  out: './db/legacy/migrations',
  strict: true,
  introspect: {
    casing: 'preserve',
  },
  schema: './db/legacy/schema',
  dbCredentials: {
    url: process.env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_HYPERDRIVE || '',
  },
})