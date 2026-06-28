import { RBPICoreMainShell } from "@/shells/main";
import { Outlet, redirect } from "react-router";

import { RBPIAuthContextProvider } from "@/context/RBPIAuthProvider";
import { getOrganizationById } from "~/platform-core/functions/internal";
import { Route } from "./+types/_user";

export const loader = async (args: Route.LoaderArgs) => {
  const { hono } = args.context
  
  const auth = hono.get('auth')
  const db = hono.get('db')
  const session = hono.get('session')
  const user = hono.get('user')
  
  // Unauthenticated
  if (!session || !user) {
    throw redirect('/login')
  }

  const org = await getOrganizationById(db.core, user.defaultOrganizationId)

  if (org.isErr()) {
    await auth.api.signOut({ headers: args.request.headers })
    throw redirect('/login')
  }

  return { user, org: org.value }
}

export default function Layout(props: Route.ComponentProps) {
  const { user, org } = props.loaderData

  return (
    <RBPIAuthContextProvider value={{ raw: { user, org } }}>
      <RBPICoreMainShell>
        <Outlet />
      </RBPICoreMainShell>
    </RBPIAuthContextProvider>
  )
}