import { env } from 'cloudflare:workers'
import { createDatabaseD1Main } from '~/db/core'

export const db = await createDatabaseD1Main(env.DB)