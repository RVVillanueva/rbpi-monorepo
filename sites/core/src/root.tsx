import { Root } from '@/lib/page'
import { TooltipProvider } from '@shadcn/base/components/ui/tooltip'
import { PropsWithChildren } from 'react'
import { Outlet, useLoaderData, useRouteError } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import { Route } from './+types/root'

export const loader = (args: Route.LoaderArgs) => {
  const { hono } = args.context
  return { rpc: hono.env.RPC_URL }
}

const Wrapper = (props: PropsWithChildren) => {
  const { rpc } = useLoaderData<typeof loader>()

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Root>{ props.children }</Root>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default function App() {

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export function ErrorBoundary() {
  const err = useRouteError()
  
  return (
    <TooltipProvider>
      <Root>
        <main>
          { JSON.stringify(err) }
        </main>
      </Root>
    </TooltipProvider>  
  )
}