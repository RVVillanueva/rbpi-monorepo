import { BreadcrumbHandle } from '@components/breadcrumb';
import { Outlet } from 'react-router';

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Reports',
  },
}

export default function AccountingReportsLayout() {
  
  return (
    <Outlet />
  )
}