import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

export const createCoreDatabase = async (env: CloudflareBindings) => {
  const connectionString = env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_CORE ?? env.CORE?.connectionString

  return drizzle(connectionString, {
    logger: true,
    schema,
  })
}

export type Database = Awaited<ReturnType<typeof createCoreDatabase>>