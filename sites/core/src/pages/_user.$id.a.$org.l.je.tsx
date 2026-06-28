
import { BreadcrumbHandle } from "@components/breadcrumb";
import { StatsView } from "@components/cards/kpis";
import { DefaultFilterSelect } from "@components/controls/filters";
import { RBPIJournalsTable } from "@components/tables/JournalsTable";
import { Route } from "./+types/_user.$id.a.$org.l.je";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Journals',
  },
}

export const loader = async (args: Route.LoaderArgs) => {
  const { hono } = args.context

  const db = hono.get('db')
  
  
  return {}
}

export default function AccountingJournals(props: Route.ComponentProps) {

  return (
    <div className='container @container space-y-4'>
      <div className='flex flex-wrap justify-between items-center gap-4'>
        <div className='order-2 lg:order-1'><DefaultFilterSelect /></div>
        <div className='order-1 lg:order-2'><StatsView /></div>
      </div>

      <section className='space-y-4'>
        <RBPIJournalsTable />
      </section>
    </div>
  )
}

