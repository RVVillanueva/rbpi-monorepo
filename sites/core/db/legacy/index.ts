
import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2'

import * as schema from './schema'

export const createLegacyDatabase = async (env: CloudflareBindings) => {
  return drizzle(env.LEGACY.connectionString, {
    mode: 'default',
    schema,
  })
}

export { schema }

export type LegacyDatabase = MySql2Database<typeof schema>