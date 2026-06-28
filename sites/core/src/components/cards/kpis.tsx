import { useRBPIAccountingContext } from "@/context/RBPIAccountingContextProvider";
import { AuthCurrency } from "@components/currency";
import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/base/components/ui/card";
import { Skeleton } from "@shadcn/base/components/ui/skeleton";
import { cn } from "@shadcn/base/lib/utils";
import { useMemo } from "react";
import { useAppStrings } from "~/values/strings/app";

import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { Separator } from "@shadcn/base/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@shadcn/base/components/ui/tooltip";
import { useUserStrings } from "~/values/strings/user";

export function FinancialPositionView() {
  const rbpi = useRBPIAccountingContext()
  const auth = useRBPIAuthContext()
  const appStrings = useAppStrings()
  const userStrings = useUserStrings()

  const financialStats = useMemo(() => rbpi.financialSummaryData?.results.at(-1)!, [ rbpi ])
  const isFinancialPending = useMemo(() => rbpi.isFinancialSummaryDataPending, [ rbpi ])
  const shortName = useMemo(() => auth.getOrganizationProfile()?.shortName! ?? '???', [ auth ])

  if (isFinancialPending && !financialStats) {
    return (
      <Card className='max-w-100 rounded-sm gap-1.5 py-3 ring-0 bg-zinc-50'>
        <CardTitle className='mb-4'>
          <CardTitle className='px-4 pt-2 flex gap-2'>
            <Skeleton className='h-6 w-32 bg-zinc-200'></Skeleton>
            <Skeleton className='h-6 w-8 bg-zinc-200'></Skeleton>
          </CardTitle>
        </CardTitle>
        <CardContent className='space-y-2'>
          <div className='space-y-1.5'>
            <Skeleton className='uppercase bg-zinc-200 h-4 w-32'></Skeleton>
            
            <div className='flex justify-between items-center'>
              <Skeleton className='uppercase bg-zinc-100 h-4 w-32'></Skeleton>
              <Skeleton className='uppercase bg-zinc-200 h-4 w-10'></Skeleton>
            </div>
            <div className='flex justify-between items-center'>
              <Skeleton className='uppercase bg-zinc-100 h-4 w-32'></Skeleton>
              <Skeleton className='uppercase bg-zinc-200 h-4 w-10'></Skeleton>
            </div>
            <div className='flex justify-between items-center'>
              <Skeleton className='uppercase bg-zinc-100 h-4 w-32'></Skeleton>
              <Skeleton className='uppercase bg-zinc-200 h-4 w-10'></Skeleton>
            </div>
          </div>
          <div className='space-y-1.5'>
            <Skeleton className='uppercase bg-zinc-200 h-4 w-20'></Skeleton>

            <div className='flex justify-between items-center'>
              <Skeleton className='uppercase bg-zinc-100 h-4 w-32'></Skeleton>
              <Skeleton className='uppercase bg-zinc-200 h-4 w-10'></Skeleton>
            </div>
            <div className='flex justify-between items-center'>
              <Skeleton className='uppercase bg-zinc-100 h-4 w-32'></Skeleton>
              <Skeleton className='uppercase bg-zinc-200 h-4 w-10'></Skeleton>
            </div>
            <div className='flex justify-between items-center'>
              <Skeleton className='uppercase bg-zinc-100 h-4 w-32'></Skeleton>
              <Skeleton className='uppercase bg-zinc-200 h-4 w-10'></Skeleton>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const balanceSheetData = [
    {
      label: appStrings.keywords.assets,
      amount: financialStats.financialSummary.totalAssets,
    },
    {
      label: appStrings.keywords.liabilities,
      amount: financialStats.financialSummary.totalLiabilities,
    },
    {
      label: appStrings.keywords.equity,
      amount: financialStats.financialSummary.totalEquityInclNetIncome,
    },
  ]

  const incomeStatementData = [
    {
      label: appStrings.keywords.income,
      amount: financialStats.financialSummary.totalIncome,
    },
    {
      label: appStrings.keywords.expenses,
      amount: financialStats.financialSummary.totalExpenses,
    },
    {
      label: appStrings.keywords.netIncome,
      amount: financialStats.financialSummary.netIncome,
    },
  ]

  return (
    <Card className='max-w-100 rounded-sm gap-4.5 py-4'>
      <CardHeader>
        <CardTitle>
          <span className='text-[1.4ch] font-normal'>
            { userStrings.cards.financialPositionsViewStrings.title } <span className='uppercase text-zinc-500'>({ shortName })</span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-3'>
        <div className='grid space-y-1'>
          <span className='uppercase text-sm mb-2 text-zinc-500'>{ userStrings.cards.financialPositionsViewStrings.balanceSheetSectionTitle }</span>

          <ul className='space-y-1.5'>
            { balanceSheetData.map((data, i) => (
              <li 
                className='flex justify-between items-center gap-2'
                key={i}>
                <div className='w-[10ch]'>{ data.label }</div>
                <div className='flex-1 border border-zinc-300 h-3.5 rounded-md'></div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <AuthCurrency amount={data.amount} compact digits={2} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side='left'>
                    <AuthCurrency amount={data.amount} digits={2} />
                  </TooltipContent>
                </Tooltip>
              </li>
            )) }
          </ul>
        </div>
        <Separator />
        <div className='grid space-y-1'>
          <span className='uppercase text-sm mb-2 text-zinc-500'>{ userStrings.cards.financialPositionsViewStrings.incomeStatementTitle }</span>

          <ul className='space-y-1.5'>
            { incomeStatementData.map((data, i) => (
              <li 
                className='flex justify-between items-center gap-2'
                key={i}>
                <div className='w-[10ch]'>{ data.label }</div>
                <div className='flex-1 border border-zinc-300 h-3.5 rounded-md'></div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <AuthCurrency amount={data.amount} compact digits={2} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side='left'>
                    <AuthCurrency amount={data.amount} digits={2} />
                  </TooltipContent>
                </Tooltip>
              </li>
            )) }
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export function AccountantQuickView() {

  return (
    <Card>

    </Card>
  )
}

export function StatsView() {
  const rbpi = useRBPIAccountingContext()
  const appStrings = useAppStrings()

  const financialStats = useMemo(() => rbpi.financialSummaryData?.results.at(-1)!, [ rbpi ])
  const isFinancialPending = useMemo(() => rbpi.isFinancialSummaryDataPending, [ rbpi ])

  if (isFinancialPending && !financialStats) {
    return (
      <div className='flex'>
        { [ ...new Array(5) ].map((_, i) => (
          <Card className={cn('p-0 flex gap-0! justify-between rounded-none bg-transparent ring-0 w-20')} key={i}>
            <CardHeader className='px-4 py-0'>
              <CardTitle className='uppercase font-normal text-sm'>
                <span className='flex gap-1'>
                  <Skeleton className='h-3 w-15 rounded-sm bg-zinc-300' /> <Skeleton className='h-5 w-10 bg-zinc-200' />
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className='py-0'>
              <Skeleton className='h-4 w-10' />
            </CardContent>
          </Card>
        )) }
      </div>
    )
  }

  const financialDatasets = [
    {
      label: appStrings.keywords.assets,
      unit: appStrings.keywords.assetsUnit,
      amount: financialStats.financialSummary.totalAssets,
    },
    {
      label: appStrings.keywords.liabilities,
      unit: appStrings.keywords.liabilitiesUnit,
      amount: financialStats.financialSummary.totalLiabilities,
    },
    {
      label: appStrings.keywords.equity,
      unit: appStrings.keywords.equityUnit,
      amount: financialStats.financialSummary.totalEquityInclNetIncome,
    },
    {
      label: appStrings.keywords.income,
      unit: appStrings.keywords.incomeUnit,
      amount: financialStats.financialSummary.totalIncome,
    },
    {
      label: appStrings.keywords.expenses,
      unit: appStrings.keywords.expensesUnit,
      amount: financialStats.financialSummary.totalExpenses,
    },
  ]

  return (
    <div className='flex'>
      {
        financialDatasets.map((data, i) => (
          <Card 
            key={i}
            className={
              cn('p-0 flex gap-0! rounded-none bg-transparent ring-0 w-20')
            }>
            
            <CardHeader className='px-0 py-0 rounded-none'>
              <CardTitle className='uppercase font-normal text-zinc-500 flex flex-wrap justify-between items-center'>
                <span className='text-[1ch]'>
                  { data.label } ({ data.unit })
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className='px-0 py-0'>
              <Tooltip>
                <TooltipTrigger>
                  <div className='text-sm text-zinc-900'>
                    <AuthCurrency amount={data.amount} digits={2} compact />
                  </div>
                </TooltipTrigger>
                <TooltipContent align='start' side='bottom'>
                  <AuthCurrency amount={data.amount} digits={2} />
                </TooltipContent>
              </Tooltip>
            </CardContent>

          </Card>
        ))
      }
    </div>
  )
}
