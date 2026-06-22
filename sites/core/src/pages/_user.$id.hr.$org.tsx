import { RBPICoreMainShell } from "@/shells/main";
import { Outlet } from "react-router";

import { Route } from "./+types/_user.$id.hr.$org";

export const loader = async (args: Route.LoaderArgs) => {
  

  return {}
}

export default function HumanResourcesLayout() {

  return (
    <div>
      <Outlet />
    </div>
  )
}
