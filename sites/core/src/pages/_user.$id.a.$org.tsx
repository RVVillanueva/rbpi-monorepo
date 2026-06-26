import { RBPICoreMainShell } from "@/shells/main";
import { Outlet } from "react-router";

import { Route } from "./+types/_user.$id.a.$org";
import { BreadcrumbHandle } from "@components/breadcrumb";
import { RBPIAccountingContextProvider } from "@/context/RBPIAccountingContextProvider";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Accounting',
  },
}

export const loader = async (args: Route.LoaderArgs) => {
  
  return {}
}

export default function AccountingLayout() {

  return (
    <RBPIAccountingContextProvider>
      <Outlet />
    </RBPIAccountingContextProvider>
  )
}
