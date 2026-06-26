import { BreadcrumbHandle } from "@components/breadcrumb";
import { AuthCurrency } from "@components/currency";
import { Outlet } from "react-router";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Ledger',
    disabled: true,
  },
}

export default function LedgerLayout() {

  return (
    <Outlet />
  )
}