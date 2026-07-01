
import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2';

import * as schema from './schema';

export const createLegacyDatabase = async (env: CloudflareBindings) => {
  const connectionString = env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_LEGACY ?? env.LEGACY?.connectionString

  return drizzle(connectionString, {
    mode: 'default',
    schema,
  })
}

export { schema };

export type LegacyDatabase = MySql2Database<typeof schema>