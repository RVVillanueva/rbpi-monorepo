import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import { reactRouterHonoServer } from 'react-router-hono-server/dev'

import {
  defineConfig,
  loadEnv,
  type UserConfig
} from 'vite'

import yaml from '@modyfi/vite-plugin-yaml'
import tsconfigPaths from 'vite-tsconfig-paths'

export const getDefines: (env: CloudflareEnv) => UserConfig['define'] = env => ({
  'import.meta.env.SITE_ID': JSON.stringify(env.SITE_ID),
  'import.meta.env.SITE_URL': JSON.stringify(env.SITE_URL),
  'import.meta.env.BA_URL': JSON.stringify(env.BA_URL),
  'import.meta.env.RPC_URL': JSON.stringify(env.RPC_URL),
  'import.meta.env.LEGACY_RPC_URL': JSON.stringify(env.LEGACY_RPC_URL),
})

export const reactRouterHonoServerOptions: Parameters<typeof reactRouterHonoServer>[0] = {
  runtime: 'cloudflare',
  serverEntryPoint: './src/server.tsx',
  flag: {
    force_react_19: true,
  },
  dev: {
    exclude: [
      /^\/@.*/,
      /^\/src\/.*/,
      /^\/node_modules\/.*/,
      /.*\.tsx?$/,
      /.*\.jsx?$/,
      /.*\.css$/,
      /.*\/(locales|src)\/\.(yaml)(\?.*)?$/,
      /.*\?import$/,
      /.*\?t=\d+$/,
    ],
  }
}

export default defineConfig(args => {
  const { mode } = args
  const env = loadEnv(mode, process.cwd(), '') as unknown as CloudflareEnv
  const define = getDefines(env)

  return {
    plugins: [
      yaml(),
      cloudflareDevProxy({
        environment: mode,
      }),
      reactRouterHonoServer(reactRouterHonoServerOptions),
      reactRouter(),
      tsconfigPaths(),
    ],

    css: {
      transformer: 'postcss',
    },

    define,
  }
})
