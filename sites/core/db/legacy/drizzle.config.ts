import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  out: './db/legacy/migrations',
  schema: './db/legacy/schema.ts',
  
  introspect: {
    casing: 'preserve',
  },

  dbCredentials: {
    url: process.env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_LEGACY || '',
  },

  verbose: true,
})