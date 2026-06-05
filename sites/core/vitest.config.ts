
import {
    cloudflareTest,
    readD1Migrations,
} from '@cloudflare/vitest-pool-workers'

import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

import yaml from '@modyfi/vite-plugin-yaml'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getDefines } from './vite.config'

import path from 'path'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as unknown as CloudflareEnv
  
  return {

    plugins: [
      yaml(),
      tsconfigPaths(),
      cloudflareTest(async () => {
        const migrationsPath = path.join(__dirname, 'db/main/migrations')
        const migrations = await readD1Migrations(migrationsPath)

        return {
          main: './src/server.tsx',
          wrangler: {
            environment: mode,
            configPath: './wrangler.toml',
          },
          miniflare: {
            bindings: {
              TEST_MIGRATIONS: migrations,
            },
          },
        }
      }),
    ],

    define: getDefines(env),

    test: {
      pool: 'threads',

      include: [
        'platform/**/*.test.ts', 
        'src/**/*.test.ts', 
        'platform/**/*.test.tsx', 
        'src/**/*.test.tsx',
      ],
      
      globals: true,

      setupFiles: [
        './testing/setup/workers.ts',
      ],
    },

  }
})