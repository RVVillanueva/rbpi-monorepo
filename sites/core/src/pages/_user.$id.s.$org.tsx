import { RBPICoreMainShell } from "@/shells/main";
import { Outlet } from "react-router";

import { Route } from "./+types/_user.$id.s.$org";
import { BreadcrumbHandle } from "@components/breadcrumb";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Savings',
  },
}

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
