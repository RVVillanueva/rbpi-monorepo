
import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { BalanceSheetTable } from '@components/tables/BalanceSheetViewTable';
import { IncomeStatementTable } from '@components/tables/IncomeStatementView';
import { UnadjustTrialBalanceTable, WorkingTrialBalanceTable } from '@components/tables/TrialBalanceViewTable';
import { Button } from '@shadcn/base/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@shadcn/base/components/ui/dropdown-menu';
import { RotateCcwIcon } from '@shadcn/base/icons';
import { cn } from '@shadcn/base/lib/utils';
import { useState } from 'react';
import { useAppStrings } from '~/values/strings/app';

enum TrialBalanceViewFormat {
  UNADJTB = 0,
  WTD = 1
}

type TrialBalanceViewProps = {

}

export function TrialBalanceView({}: TrialBalanceViewProps) {
  const auth = useRBPIAuthContext()
  const org = auth.getOrganizationProfile()!
  const appStrings = useAppStrings()
  const [format, setFormat] = useState<TrialBalanceViewFormat>(TrialBalanceViewFormat.WTD)

  if (!org) {
    return
  }

  const unadjustedTrialBalanceString = appStrings.keywords.trialBalanceStrings.formatsStrings.unadjustedTrialBalance
  const unadjustedTrialBalanceAltString = appStrings.keywords.trialBalanceStrings.formatsStrings.unadjustedAltTb
  const workingTrialBalanceString = appStrings.keywords.trialBalanceStrings.formatsStrings.workingTrialBalance
  const workingTrialBalanceAcronymString = appStrings.keywords.trialBalanceStrings.formatsStrings.workingTrialBalanceAcronym

  return (
    <div className={
      cn(
        'min-h-screen w-[90ch] min-w-[90ch]',
        'mx-auto grid grid-rows-[auto_1fr] gap-1',
      )
    }>
      <div className='flex justify-between items-center'>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild>
              <Button
                size={'xs'}
                variant={'ghost'}
                className='border border-zinc-400 px-4'>
                { appStrings.buttons.appFormat }: { format === TrialBalanceViewFormat.UNADJTB ? unadjustedTrialBalanceString : `${workingTrialBalanceString} (${ workingTrialBalanceAcronymString })` }
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-max'>
              <DropdownMenuLabel className='capitalize'>{ appStrings.keywords.trialBalanceAcronym } { appStrings.buttons.appFormat }</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => setFormat(TrialBalanceViewFormat.UNADJTB)}>
                { unadjustedTrialBalanceString }
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFormat(TrialBalanceViewFormat.WTD)}>
                { workingTrialBalanceString } ({ workingTrialBalanceAcronymString })
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Button
            size={'xs'}
            variant={'ghost'}
            className='items-center'>
            <RotateCcwIcon />
            <span>{ appStrings.buttons.appRefresh }</span>
          </Button>
        </div>
      </div>
      <article className='bg-white min-h-full shadow ring-1 ring-zinc-300 p-[5ch]'>
        <header className='space-y-1 h-[20ch]'>
          <h1 className='uppercase text-lg'>
            { org.name } <span className='uppercase text-zinc-500'>{ org.shortName }</span>
          </h1>
          {/* @TODO: Needs refactoring */}
          { format === TrialBalanceViewFormat.UNADJTB ? (
            <>
              <p className='capitalize text-base'>
                { unadjustedTrialBalanceAltString }
              </p>
            </>
          ) : (
            <>
              <p className='capitalize text-base'>
                { workingTrialBalanceString } ({ workingTrialBalanceAcronymString })
              </p>
            </>
          ) }
        </header>
        <div>
          {
            format === TrialBalanceViewFormat.UNADJTB ? (
              <UnadjustTrialBalanceTable />
            ) : (
              <WorkingTrialBalanceTable />
            )
          }
        </div>
      </article>
    </div>
  )
}

type BalanceSheetViewProps = {

}

export function BalanceSheetView({}: BalanceSheetViewProps) {
  const auth = useRBPIAuthContext()
  const org = auth.getOrganizationProfile()!
  const appStrings = useAppStrings()

  if (!org) {
    return
  }

  return (
    <div className={
      cn(
        'min-h-screen w-[90ch] min-w-[90ch]',
        'mx-auto grid grid-cols-1 grid-rows-[auto_1fr] gap-1',
      )
    }>
      <div className='flex justify-between items-center'>
        <div>
          
        </div>
        <div>
          <Button
            size={'xs'}
            variant={'ghost'}
            className='items-center'>
            <RotateCcwIcon />
            <span>{ appStrings.buttons.appRefresh }</span>
          </Button>
        </div>
      </div>
      <article className='bg-white min-h-full shadow ring-1 ring-zinc-300 p-[5ch]'>
        <header className='space-y-1 h-[20ch]'>
          <h1 className='uppercase text-lg'>
            { org.name } <span className='uppercase text-zinc-500'>{ org.shortName }</span>
          </h1>
          <p className='capitalize text-base'>
            { appStrings.keywords.balanceSheetStrings.simple }
          </p>
        </header>
        <div>
          <BalanceSheetTable />
        </div>
      </article>
    </div>
  )
}

type IncomeStatementViewProps = {

}

export function IncomeStatementView({}: IncomeStatementViewProps) {
  const auth = useRBPIAuthContext()
  const org = auth.getOrganizationProfile()!
  const appStrings = useAppStrings()

  if (!org) {
    return
  }

  return (
    <div className={
      cn(
        'min-h-screen w-[90ch] min-w-[90ch]',
        'mx-auto grid grid-rows-[auto_1fr] gap-1',
      )
    }>
      <div className='flex justify-between items-center'>
        <div>
          
        </div>
        <div>
          <Button
            size={'xs'}
            variant={'ghost'}
            className='items-center'>
            <RotateCcwIcon />
            <span>{ appStrings.buttons.appRefresh }</span>
          </Button>
        </div>
      </div>
      <article className='bg-white min-h-full shadow ring-1 ring-zinc-300 p-[5ch]'>
        <header className='space-y-1 h-[20ch]'>
          <h1 className='uppercase text-lg'>
            { org.name } <span className='uppercase text-zinc-500'>{ org.shortName }</span>
          </h1>
          <p className='capitalize text-base'>
            { appStrings.keywords.incomeStatementStrings.simple } ({ appStrings.keywords.incomeStatementAltAcronym })
          </p>
        </header>
        <div>
          <IncomeStatementTable />
        </div>
      </article>
    </div>
  )
}


