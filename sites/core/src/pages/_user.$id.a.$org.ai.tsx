import { BreadcrumbHandle } from "@components/breadcrumb";
import { Outlet } from "react-router";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'AI',
  },
}

export default function AILayout() {

  return (
    <div>
      <Outlet />
    </div>
  )
}

