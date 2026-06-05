
import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

import * as schema from './migrations/schema'

export const createLegacyDatabase = async (env: CloudflareBindings) => {
  const client = await mysql.createConnection(env.LEGACY.connectionString)
  
  return drizzle(client, {
    mode: 'default',
    schema,
  })
}

export { schema }

export type LegacyDatabase = MySql2Database<typeof schema>