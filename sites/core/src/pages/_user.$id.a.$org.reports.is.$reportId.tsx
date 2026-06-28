import { BreadcrumbHandle } from '@components/breadcrumb';
import { IncomeStatementView } from '@components/views/financial-views';
import { useAppStrings } from '~/values/strings/app';

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Financial Reports - Income Statement',
  },
}

export default function AccountingIncomeStatementReportPage() {
  const appStrings = useAppStrings()

  return (
    <div>
      <section>
        <span className='capitalize text-lg font-normal'>
          { appStrings.keywords.incomeStatementStrings.simple }
        </span>
      </section>

      <br />

      <IncomeStatementView />
    </div>
  )
}