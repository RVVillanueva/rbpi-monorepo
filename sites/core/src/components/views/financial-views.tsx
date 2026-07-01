
import { useRBPIAccountingContext } from "@/context/RBPIAccountingContextProvider";
import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { BalanceSheetTable } from '@components/tables/BalanceSheetViewTable';
import { IncomeStatementTable } from '@components/tables/IncomeStatementViewTable';
import { UnadjustTrialBalanceTable, WorkingTrialBalanceTable } from '@components/tables/TrialBalanceViewTable';
import { Button } from '@shadcn/base/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@shadcn/base/components/ui/dropdown-menu';
import { RotateCcwIcon } from '@shadcn/base/icons';
import { cn } from '@shadcn/base/lib/utils';
import { useMemo, useState } from 'react';
import { useSearchParams } from "react-router";
import { TrialBalanceResult } from "~/platform-legacy/functions/internal";
import { useAppStrings } from '~/values/strings/app';

enum TrialBalanceViewFormat {
  UNADJTB = 'unadjtb',
  WTB = 'wtb'
}

type TrialBalanceViewProps = {

}

export function TrialBalanceView({}: TrialBalanceViewProps) {
  const auth = useRBPIAuthContext()
  const org = auth.getOrganizationProfile()!
  const appStrings = useAppStrings()
  const [search, setSearchParams] = useSearchParams()
  const [format, setFormat] = useState(search.get('format') as TrialBalanceViewFormat)

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
        'mx-auto grid grid-rows-[auto_1fr] gap-1 w-[100ch]',
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
              <DropdownMenuItem onSelect={() => {
                setFormat(TrialBalanceViewFormat.UNADJTB)
                setSearchParams(prev => {
                  prev.set('format', TrialBalanceViewFormat.UNADJTB)
                  return prev
                })
              }}>
                { unadjustedTrialBalanceString }
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {
                setFormat(TrialBalanceViewFormat.WTB)
                setSearchParams(prev => {
                  prev.set('format', TrialBalanceViewFormat.WTB)
                  return prev
                })
              }}>
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
        <header className='space-y-1 h-[12ch]'>
          <h1 className='uppercase text-lg'>
            { org.name } <span className='uppercase text-zinc-500'>{ org.shortName }</span>
          </h1>
          {/* @TODO: Needs refactoring */}
          { format === TrialBalanceViewFormat.UNADJTB ? (
            <>
              <p className='capitalize text-base text-zinc-600'>
                { unadjustedTrialBalanceAltString }
              </p>
            </>
          ) : (
            <>
              <p className='capitalize text-base text-zinc-600'>
                { appStrings.timeRelatedStrings.yearToDateAcronym } - { workingTrialBalanceString } ({ workingTrialBalanceAcronymString })
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
        'mx-auto grid grid-cols-1 grid-rows-[auto_1fr] gap-1 max-w-[100ch]',
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
        <header className='space-y-1 h-[12ch]'>
          <h1 className='uppercase text-lg'>
            { org.name } <span className='uppercase text-zinc-500'>{ org.shortName }</span>
          </h1>
          <p className='capitalize text-base text-zinc-600'>
            { appStrings.timeRelatedStrings.yearToDateAcronym } - { appStrings.keywords.balanceSheetStrings.simple }
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
    <div 
      className={
        cn(
          'mx-auto grid grid-rows-[auto_1fr] gap-1 max-w-[100ch] min-h-max',
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
      <article id='printArea' className='bg-white min-h-full shadow ring-1 ring-zinc-300 p-[5ch]'>
        <header className='space-y-1 h-[12ch]'>
          <h1 className='uppercase text-lg'>
            { org.name } <span className='uppercase text-zinc-500'>{ org.shortName }</span>
          </h1>
          <p className='capitalize text-base text-zinc-600'>
            { appStrings.timeRelatedStrings.yearToDateAcronym } - { appStrings.keywords.incomeStatementStrings.simple } ({ appStrings.keywords.incomeStatementAltAcronym })
          </p>
        </header>
        <div>
          <IncomeStatementTable />
        </div>
      </article>
    </div>
  )
}
