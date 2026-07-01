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
        <span className='capitalize text-base font-normal text-zinc-500'>
          { appStrings.keywords.incomeStatementStrings.simple } ({ appStrings.timeRelatedStrings.yearToDateAcronym })
        </span>
      </section>

      <br />

      <IncomeStatementView />
    </div>
  )
}