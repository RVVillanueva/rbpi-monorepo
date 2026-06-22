import { RBPICoreAuthShell } from "@/shells/auth";
import { Outlet, redirect } from "react-router";

import { Route } from "./+types/_auth";

export const loader = async (args: Route.LoaderArgs) => {
  const { hono } = args.context
  const session = hono.get('session')

  if (session) {
    throw redirect('/app')
  }

  return {}
}

export default function AuthLayout() {

  return (
    <RBPICoreAuthShell>
      <Outlet />
    </RBPICoreAuthShell>
  )
}