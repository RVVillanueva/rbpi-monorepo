import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider'
import { TextDateBranchPicker } from '@components/controls/filters'
import { AuthCurrency } from '@components/currency'
import { Button } from '@shadcn/base/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@shadcn/base/components/ui/tooltip'
import { CirclePlusIcon, LandmarkIcon } from '@shadcn/base/icons'
import { useQueries, keepPreviousData } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { subDays, format } from 'date-fns'
import { useMemo, useRef, useState } from 'react'
import { createUniqueId, getRowByPath, findTrialBalanceByCode } from '~/platform-core/helpers/struct'
import { TrialBalanceResult } from '~/platform-legacy/functions/internal'
import { useAppStrings } from '~/values/strings/app'

import { Link } from 'react-router'

export type IncomeStatementViewState = {
  params: {
    id: string
    date: Date
    branch?: RBPICore.Legacy.AccountingBranchesView
  }[]
}

const incomeStatementAccountColumnId = 'incomeStatementAccount'
const incomeStatementAddColumnId = 'incomeStatementAdd'
const incomeStatementQueryKey = 'incomeStatementQuery'

export const useIncomeStatementViewTableColumns = () => {
  const appStrings = useAppStrings()
  const client = useLegacyRpcClient()

  const [selections, setSelections] = useState<IncomeStatementViewState>({
    params: [
      { id: createUniqueId(), date: subDays(new Date(), 1) },
    ],
  })

  const results = useQueries({
    queries: selections.params.map(param => ({
      queryKey: [incomeStatementQueryKey, param.date, param.branch?.id],
      queryFn: async () => {
        const res = await client.rbpi.ledger.trialBalance.$get({
          query: {
            periods: [ format(param.date, 'yyyy/MM/dd') ].join(','),
            branchIds: [ param.branch?.id ?? 0 ].join(','),
          },
        })

        if (res.ok) {
          const json = await res.json()
          return json
        }
      },
      placeholderData: keepPreviousData,
    })),
  })

  const resultsRef = useRef(results)
  resultsRef.current = results

  const selectionsRef = useRef(selections)
  selectionsRef.current = selections

  const columns = useMemo<ColumnDef<TrialBalanceResult>[]>(() => [
    {
      id: incomeStatementAccountColumnId,
      size: 300,
      header: () => {
        return (
          <div></div>
        )
      },
      cell: args => {
        const { row } = args

        return (
          <div className='flex items-center gap-1.5 pl-5'>
            <LandmarkIcon size={16} strokeWidth={1} className='mb-1 text-zinc-800' />
            <span>{ row.original.parent.name } <span className='text-zinc-500'>({ row.original.parent.code })</span></span>
          </div>
        )
      }
    },
    ...selections.params.map((period, i): ColumnDef<TrialBalanceResult> => {{
      return {
        id: period.id,
        size: 100,
        header: () => {
          
          return (
            <div className='text-right'>
              <TextDateBranchPicker 
                date={period.date}
                branch={period.branch}
                onSelect={(date: Date, branch?: RBPICore.Legacy.AccountingBranchesView) => {
                  setSelections(prev => {
                    const next = [...prev.params]
                    next[i] = { id: period.id, date, branch }
                    return { ...prev, params: next }
                  })
                }} />
            </div>
          )
        },

        cell: args => {
          const { row } = args
          
          const trialBalanceData = resultsRef.current[i]?.data?.results.at(-1)?.trialBalanceData ?? []
          const entry = trialBalanceData ? findTrialBalanceByCode(trialBalanceData, row.original.parent.code) : undefined

          return (
            <div className='text-right'>
              <Button
                size={'sm'}
                variant={'link'}
                asChild
                className='p-0'>
                <Link to={'#'}>
                  <AuthCurrency amount={entry?.accountSummary.totalBalance ?? 0} />
                </Link>
              </Button>
            </div>
          )
        },
      }
    }}),
    {
      id: incomeStatementAddColumnId,
      size: 32,
      header: () => {

        return (
          <div className=''>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-disabled={ selections.params.length >= 2 }
                  disabled={ selections.params.length >= 2 }
                  onClick={() => selections.params.length < 2 && setSelections({ 
                    ...selections, 
                    params: [ 
                      { id: createUniqueId(), date: subDays(new Date(), 1) }, 
                      ...selections.params,
                    ],
                  })}
                  className='rounded-full text-zinc-500'
                  size={'icon'}
                  variant={'ghost'}>
                  <CirclePlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='normal-case'>
                { appStrings.buttons.appAdd(appStrings.timeRelatedStrings.referenceDate) }
              </TooltipContent>
            </Tooltip>
          </div>
        )
      },
    },
  ], [ selections.params.length ])

  return { columns, selections, results }
}

