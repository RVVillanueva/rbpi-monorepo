import { BreadcrumbHandle } from '@components/breadcrumb';
import { BalanceSheetView } from '@components/views/financial-views';
import { useAppStrings } from '~/values/strings/app';

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Financial Reports - Balance Sheet',
  },
}

export default function AccountingBalanceSheetReportPage() {
  const appStrings = useAppStrings()

  return (
    <div>
      <section>
        <span className='capitalize text-lg font-normal'>
          { appStrings.keywords.balanceSheetStrings.simple }
        </span>
      </section>

      <br />

      <BalanceSheetView />
    </div>
  )
}