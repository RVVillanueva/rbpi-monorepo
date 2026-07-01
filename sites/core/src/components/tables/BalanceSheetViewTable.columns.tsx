import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider'
import { TextDateBranchPicker } from '@components/controls/filters'
import { AuthCurrency } from '@components/currency'
import { Button } from '@shadcn/base/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@shadcn/base/components/ui/tooltip'
import { CirclePlusIcon, LandmarkIcon } from '@shadcn/base/icons'
import { keepPreviousData, useQueries } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { format, subDays } from 'date-fns'
import { useMemo, useRef, useState } from 'react'
import { createUniqueId, getRowByPath } from '~/platform-core/helpers/struct'
import { TrialBalanceResult } from '~/platform-legacy/functions/internal'
import { useAppStrings } from '~/values/strings/app'

import { Link } from 'react-router'

export type BalanceSheetViewState = {
  params: {
    id: string
    date: Date
    branch?: RBPICore.Legacy.AccountingBranchesView
  }[]
}

const balanceSheetAccountColumnId = 'balanceSheetAccount'
const balanceSheetAddColumnId = 'balanceSheetAdd'
const balanceSheetQueryKey = 'balanceSheetQuery'

export const useBalanceSheetViewTableColumns = () => {
  const appStrings = useAppStrings()
  const client = useLegacyRpcClient()

  const [selections, setSelections] = useState<BalanceSheetViewState>({
    params: [
      { id: createUniqueId(), date: subDays(new Date(), 1) },
    ],
  })

  const results = useQueries({
    queries: selections.params.map(param => ({
      queryKey: [balanceSheetQueryKey, param.date, param.branch?.id],
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
      id: balanceSheetAccountColumnId,
      size: 300,
      header: () => {
        return (
          <div className='text-left'></div>
        )
      },
      cell: args => {
        const { row } = args

        return (
          <div className='flex items-center gap-1.5'>
            <LandmarkIcon size={16} strokeWidth={1} className='mb-1 text-zinc-800' />
            <span>{ row.original.parent.name } <span className='text-zinc-500'>({ row.original.parent.code })</span></span>
          </div>
        )
      }
    },
    ...selectionsRef.current.params.map((period, i): ColumnDef<TrialBalanceResult> => {
      return {
        id: period.id,
        size: 100,
        header: () => {

          return (
            <div>
              <TextDateBranchPicker onSelect={(date: Date, branch?: RBPICore.Legacy.AccountingBranchesView) => {
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

          const trialBalanceData = resultsRef.current[i]?.data?.results.at(-1)?.trialBalanceData
          const entry = trialBalanceData ? getRowByPath(trialBalanceData, row.id) : undefined

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
    }),

    {
      id: balanceSheetAddColumnId,
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
