import { TextDateBranchPicker } from '@components/controls/filters'
import { Button } from '@shadcn/base/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@shadcn/base/components/ui/tooltip'
import { CirclePlusIcon } from '@shadcn/base/icons'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { subDays } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { createUniqueId } from '~/platform-core/helpers/struct'
import { useAppStrings } from '~/values/strings/app'

export type BalanceSheetViewState = {
  params: {
    date: Date
    branch?: RBPICore.Legacy.AccountingBranchesView
  }[]
}

export const useBalanceSheetViewTableColumns = () => {
  const columnHelper = createColumnHelper()
  const appStrings = useAppStrings()

  const [state, setState] = useState<BalanceSheetViewState>({
    params: [
      { 
        date: subDays(new Date(), 1),
      },
    ],
  })

  const periodMap = new Map(state.params.map((period, i) => [i, period]))
        
  const onSelect = useCallback((i: number, date: Date, branch?: RBPICore.Legacy.AccountingBranchesView) => {
    periodMap.set(i, { date, branch })
    setState({ ...state, params: [ ...periodMap.values() ] })
    return
  }, [])

  const columns = useMemo<ColumnDef<any>[]>(() => [
    {
      id: createUniqueId(),
      header: () => {
        return (
          <div></div>
        )
      },
    },
    ...state.params.map((_, i) => {
      
      return columnHelper.group({
        id: createUniqueId(),
        size: 100,
        header: () => {

          return (
            <div>
              <TextDateBranchPicker onSelect={(date, branch) => onSelect(i, date, branch)} />
            </div>
          )
        },

        cell: () => {

          return (
            <div>
              
            </div>
          )
        },
      })
    }),
    {
      id: createUniqueId(),
      size: 50,
      header: () => {

        return (
          <div className=''>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-disabled={ state.params.length >= 4 }
                  disabled={ state.params.length >= 4 }
                  onClick={() => state.params.length < 4 && setState({ 
                    ...state, 
                    params: [ 
                      { date: subDays(new Date(), 1) }, 
                      ...state.params,
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
  ], [ state ])

  return columns
}
