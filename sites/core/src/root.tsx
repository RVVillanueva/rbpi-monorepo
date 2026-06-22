import { Root } from '@/lib/page';
import { TooltipProvider } from '@shadcn/base/components/ui/tooltip';
import { PropsWithChildren } from 'react';
import { Outlet, useRouteError } from 'react-router';

import { Route } from './+types/root';
import { RBPICoreProvider } from './context/RBPICoreProvider';

export const loader = (args: Route.LoaderArgs) => {
  return {}
}

const Wrapper = (props: PropsWithChildren) => {
  return (
    <RBPICoreProvider>
      <Root>
        { props.children }
      </Root>
    </RBPICoreProvider>
  )
}

export default function App() {

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export function ErrorBoundary(props: Route.ErrorBoundaryProps) {

  return (
    <RBPICoreProvider>
      <Root>
        <main></main>
      </Root>
    </RBPICoreProvider>  
  )
}