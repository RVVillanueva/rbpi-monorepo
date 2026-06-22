// This component is used as an initial page for the authenticated dashboard
// once someone is authenticated they will be automatically redirected to
// this page.

import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { Route } from "./+types/_user.app";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function App(props: Route.ComponentProps) {
  const auth = useRBPIAuthContext()

  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${auth.getUserNumericId()}/a/${auth.getOrgNumericId()}`)
  }, [])

  return (
    <div>
      <p className='text-sm text-zinc-500'>Loading...</p>
    </div>
  )
}