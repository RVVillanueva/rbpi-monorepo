
import { withPageProps } from '@/lib/page'

import type { Route } from './+types/_root._index'
import { useT } from '@/context/hono'

export const loader = async (args: Route.LoaderArgs) => {
  const { hono } = args.context
  const page = {}

  return withPageProps(page, {})
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const t = useT()

  return (
    <div>
      
    </div>
  )
}