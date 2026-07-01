import { getRowByPath } from '~/platform-core/helpers/struct'

import { Button } from '@shadcn/base/components/ui/button'
import { TextDateBranchPicker } from '@components/controls/filters'
import type { ColumnDef } from '@tanstack/react-table'
import { useMemo, useState, useRef } from 'react'
import type { TrialBalanceResult } from '~/platform-legacy/functions/internal'
import { useAppStrings } from '~/values/strings/app'
import { format, subDays } from 'date-fns'
import { LandmarkIcon } from '@shadcn/base/icons'
import { AuthCurrency } from '@components/currency'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider'

import { Link } from 'react-router'

export type TrialBalanceViewState = {
  date: Date
  branch?: RBPICore.Legacy.AccountingBranchesView
}

const accountColumnId = 'account'
const debitsColumnId = 'debits'
const creditsColumnId = 'credits'

export const useUnadjTrialBalanceViewTableColumns = () => {
  const appStrings = useAppStrings()

  const [params, setParams] = useState<TrialBalanceViewState>({ date: subDays(new Date(), 1) })

  const columns = useMemo<ColumnDef<TrialBalanceResult>[]>(() => [
    {
      id: accountColumnId,
      header: () => {

        return (
          <div className='text-left'>
            <TextDateBranchPicker {...params} onSelect={(date, branch) => setParams({ date, branch })} />
          </div>
        )
      },

      cell: args => {
        const { row } = args
        
        return (
          <div className='flex items-center gap-1.5'>
            <LandmarkIcon size={16} strokeWidth={1} className='mb-1 text-zinc-800' />
            <span>{ row.original.parent.name }</span>
          </div>
        )
      },
    },
    {
      id: debitsColumnId,
      size: 50,
      header: () => {

        return (
          <div>
            { appStrings.keywords.debit }
          </div>
        )
      },
      cell: args => {
        const { row } = args
        
        return (
          <div className='text-right'>
            <Button
              size={'sm'}
              variant={'link'}
              asChild
              className='p-0'>
              <Link to={'#'}>
                <AuthCurrency amount={row.original.accountSummary.debit} />
              </Link>
            </Button>
          </div>
        )
      },
    },
    {
      id: creditsColumnId,
      size: 50,
      header: () => {

        return (
          <span>{ appStrings.keywords.credit }</span>
        )
      },
      cell: args => {
        const { row } = args

        return (
          <div className='text-right'>
            <Button
              size={'sm'}
              variant={'link'}
              asChild
              className='p-0'>
              <Link to={'#'}>
                <AuthCurrency amount={row.original.accountSummary.credit} />
              </Link>
            </Button>
          </div>
        )
      },
    },
  ], [])

  return { columns, params }
}

const wtbAccountColumnId = 'wtbAccount'
const wtbBeginColumnId = 'wtbBegin'
const wtbAdjDrColumnId = 'wtbAdjDr'
const wtbAdjCrColumnId = 'wtbAdjCr'
const wtbEndingColumnId = 'wtbEnding'
const wtbEndDataQueryKey = 'wtbEndDataQuery'

export const useWtdTrialBalanceViewTableColumns = () => {
  const appStrings = useAppStrings()
  const client = useLegacyRpcClient()

  const [beginParams, setBeginParams] = useState<TrialBalanceViewState>({ date: subDays(new Date(), 2) })
  const [endingParams, setEndingParams] = useState<TrialBalanceViewState>({ date: subDays(new Date(), 1) })

  const endDate = useMemo(() => endingParams.date, [ endingParams ])
  const endBranchId = useMemo(() => endingParams.branch?.id, [ endingParams ])

  const { data: endData, isPending: isEndDataPending } = useQuery({
    queryKey: [wtbEndDataQueryKey, endDate, endBranchId],
    queryFn: async () => {
      const res = await client.rbpi.ledger.trialBalance.$get({
        query: {
          periods: [ format(endDate, 'yyyy/MM/dd') ].join(','),
          branchIds: [ endingParams.branch?.id ?? 0 ].join(','),
        },
      })

      if (res.ok) {
        const json = await res.json()
        return json
      }
    },

    placeholderData: keepPreviousData,
  })
  
  const { trialBalanceData } = useMemo(() => endData?.results.at(-1) ?? { trialBalanceData: [] }, [ endData ])
  const endDataRef = useRef<TrialBalanceResult[]>([])
  endDataRef.current = trialBalanceData

  const columns = useMemo<ColumnDef<TrialBalanceResult>[]>(() => [
    {
      id: wtbAccountColumnId,
      cell: args => {
        const { row } = args
        
        return (
          <div className='flex items-center gap-1.5'>
            <LandmarkIcon size={16} strokeWidth={1} className='mb-1 text-zinc-800' />
            <span>{ row.original.parent.name }</span>
          </div>
        )
      }
    },
    {
      id: wtbBeginColumnId,
      size: 100,
      header: () => {

        return (
          <div>
            <TextDateBranchPicker {...beginParams} onSelect={(date, branch) => {
              setBeginParams({ date, branch })
            }} />
          </div>
        )
      },
      cell: args => {
        const { row } = args
        
        return (
          <div className='text-right'>
            <Button
              size={'sm'}
              variant={'link'}
              asChild
              className='p-0'>
              <Link to={'#'}>
                <AuthCurrency amount={row.original.accountSummary?.totalBalance} />
              </Link>
            </Button>
          </div>
        )
      },
    },
    {
      id: wtbAdjDrColumnId,
      size: 100,
      header: () => {
        
        return (

          <div>
            <span>{ appStrings.keywords.adjustedShortForm } { appStrings.keywords.debitsAcronym }</span>
          </div>
        )
      },

      cell: args => {
        const { row } = args
        const ending = getRowByPath(endDataRef.current, row.id)

        return (
          <div className='text-right'>
            <Button
              size={'sm'}
              variant={'link'}
              asChild
              className='p-0'>
              <Link to={'#'}>
                <AuthCurrency amount={ending?.accountSummary.debit ?? 0} />
              </Link>
            </Button>
          </div>
        )
      },
    },
    {
      id: wtbAdjCrColumnId,
      size: 100,
      header: () => {
        
        return (

          <div>
            <span>{ appStrings.keywords.adjustedShortForm } { appStrings.keywords.creditsAcronym }</span>
          </div>
        )
      },

      cell: args => {
        const { row } = args
        const ending = getRowByPath(endDataRef.current, row.id)!

        return (
          <div className='text-right'>
            <Button
              size={'sm'}
              variant={'link'}
              asChild
              className='p-0'>
              <Link to={'#'}>
                <AuthCurrency amount={ending?.accountSummary.credit ?? 0} />
              </Link>
            </Button>
          </div>
        )
      },
    },
    {
      id: wtbEndingColumnId,
      size: 100,
      header: () => {

        return (
          <div>
            <TextDateBranchPicker {...endingParams} onSelect={(date, branch) => {
              setEndingParams({ date, branch })
            }} />
          </div>
        )
      },
      cell: args => {
        const { row } = args
        const ending = getRowByPath(endDataRef.current, row.id)
        const endingBalanceValue = row.original.accountSummary.totalBalance + (ending?.accountSummary.netMovement ?? 0)

        return (
          <div className='text-right'>
            <Button
              size={'sm'}
              variant={'link'}
              asChild
              className='p-0'>
              <Link to={'#'}>
                <AuthCurrency amount={endingBalanceValue} />
              </Link>
            </Button>
          </div>
        )
      },
    },
  ], [])
  
  return { columns, beginParams, endingParams, endDataRef }
}