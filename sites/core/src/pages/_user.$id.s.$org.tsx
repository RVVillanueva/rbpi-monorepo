import { RBPICoreMainShell } from "@/shells/main";
import { Outlet } from "react-router";

import { Route } from "./+types/_user.$id.s.$org";

export const loader = async (args: Route.LoaderArgs) => {
  

  return {}
}

export default function SavingsLayout() {

  return (
    <div>
      <Outlet />
    </div>
  )
}
