import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  buildDirectory: 'dist',
  ssr: true,
  prerender: [],
  future: {
    v8_viteEnvironmentApi: true,
  },
} satisfies Config