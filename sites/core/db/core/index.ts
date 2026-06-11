import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

export const createCoreDatabase = async (env: CloudflareBindings) => {
  return drizzle(env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_CORE, {
    logger: true,
    schema,
  })
}

export type Database = Awaited<ReturnType<typeof createCoreDatabase>>