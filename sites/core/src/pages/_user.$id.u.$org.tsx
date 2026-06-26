import { BreadcrumbHandle } from "@components/breadcrumb";
import { Outlet } from "react-router";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Home',
  },
}

export default function HomeLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

