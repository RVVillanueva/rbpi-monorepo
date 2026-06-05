import { Root } from '@/lib/page'
import { Outlet, useRouteError } from 'react-router'

export default function RootLayout() {

  return (
    <main>
      <Outlet />
    </main>
  )
}

export function ErrorBoundary() {
  const err = useRouteError()

  return (
    <Root>
      <p>Error</p>
    </Root>
  )
}