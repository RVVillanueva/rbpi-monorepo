import { BreadcrumbHandle } from '@components/breadcrumb';
import { TrialBalanceView } from '@components/views/financial-views';
import { useAppStrings } from '~/values/strings/app';

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Accountant & Taxes - Trial Balance',
  },
}

export default function AccountingTrialBalanceReportPage() {
  const appStrings = useAppStrings()

  return (
    <div>
      <section>
        <span className='capitalize text-lg font-normal'>
          { appStrings.keywords.trialBalanceStrings.simple }
        </span>
      </section>
      
      <br />

      <TrialBalanceView />
    </div>
  )
}