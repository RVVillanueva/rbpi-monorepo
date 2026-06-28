import { TextDateBranchPicker } from '@components/controls/filters'
import { Button } from '@shadcn/base/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@shadcn/base/components/ui/tooltip'
import { CirclePlusIcon } from '@shadcn/base/icons'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { subDays } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { createUniqueId } from '~/platform-core/helpers/struct'
import { useAppStrings } from '~/values/strings/app'

export type IncomeStatementViewState = {
  params: {
    date: Date
    branch?: RBPICore.Legacy.AccountingBranchesView
  }[]
}

export const useIncomeStatementViewTableColumns = () => {
  const columnHelper = createColumnHelper()
  const appStrings = useAppStrings()

  const [state, setState] = useState<IncomeStatementViewState>({
    params: [
      { 
        date: subDays(new Date(), 1),
      },
    ],
  })

  const columns = useMemo<ColumnDef<any>[]>(() => [
    {
      id: createUniqueId(),
      header: () => {
        return (
          <div></div>
        )
      },
    },
    ...state.params.map((period, i) => {{
      const periodMap = new Map(state.params.map((period, i) => [i, period]))
      
      const onSelect = useCallback((date: Date, branch?: RBPICore.Legacy.AccountingBranchesView) => {
        periodMap.set(i, { date, branch })
        setState({ ...state, params: [ ...periodMap.values() ] })
        return
      }, [])

      return columnHelper.group({
        id: createUniqueId(),
        size: 100,
        header: () => {
          
          return (
            <div>
              <TextDateBranchPicker onSelect={onSelect} />
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
    }}),
    {
      id: createUniqueId(),
      size: 50,
      header: () => {

        return (
          <div className=''>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
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

