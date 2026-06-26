import { BreadcrumbHandle } from "@components/breadcrumb";
import { FinancialPositionView, StatsView } from "@components/cards/kpis";
import { DefaultFilterSelect } from "@components/controls/filters";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Overview',
  },
}

export default function AccountingOverview() {

  return (
    <div className='container @container space-y-4'>
      <div className='flex flex-wrap justify-between items-center gap-4'>
        <div className='order-2 lg:order-1'><DefaultFilterSelect /></div>
        <div className='order-1 lg:order-2'><StatsView /></div>
      </div>

      <section className='space-y-4'>
        <FinancialPositionView />
      </section>
    </div>
  )
}
