import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

import postgres from 'postgres'

export const createCoreDatabase = async (env: CloudflareBindings) => {
  const client = postgres(
    env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_CORE,
    { // Hyperdrive configuration
      max: 1,
      fetch_types: false,
    },
  )

  return drizzle(client, {
    casing: 'snake_case',
    schema,
  })
}

export type Database = Awaited<ReturnType<typeof createCoreDatabase>>