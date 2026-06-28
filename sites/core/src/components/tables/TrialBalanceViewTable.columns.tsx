import { createUniqueId } from '~/platform-core/helpers/struct'

import { TextDateBranchPicker } from '@components/controls/filters'
import type { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import type { TrialBalanceResult } from '~/platform-legacy/functions/internal'
import { useAppStrings } from '~/values/strings/app'


export const useUnadjTrialBalanceViewTableColumns = () => {
  const appStrings = useAppStrings()

  const columns = useMemo<ColumnDef<TrialBalanceResult>[]>(() => [
    {
      id: createUniqueId(),
      header: () => {

        return (
          <div>
            
          </div>
        )
      },

      cell: args => {
        const { row } = args
        
        return (
          <div>
            
          </div>
        )
      },
    },
    {
      id: createUniqueId(),
      size: 50,
      header: () => {

        return (
          <div>
            { appStrings.keywords.debits }
          </div>
        )
      },
      cell: args => {
        const { row } = args
        
        return (
          <div>

          </div>
        )
      },
    },
    {
      id: createUniqueId(),
      size: 50,
      header: () => {

        return (
          <span>{ appStrings.keywords.credits }</span>
        )
      },
      cell: args => {
        const { row } = args
        
        return (
          <div>

          </div>
        )
      },
    },
  ], [])

  return columns
}

export const useWtdTrialBalanceViewTableColumns = () => {
  const appStrings = useAppStrings()
  
  const columns = useMemo<ColumnDef<TrialBalanceResult>[]>(() => [
    {
      id: createUniqueId(),
      cell: args => {
        const { row } = args
        
        return (
          <div>

          </div>
        )
      }
    },
    {
      id: createUniqueId(),
      size: 100,
      header: () => {

        return (
          <div>
            <TextDateBranchPicker />
          </div>
        )
      },
      cell: args => {
        const { row } = args
        
        return (
          <div>

          </div>
        )
      },
    },
    {
      id: createUniqueId(),
      size: 50,
      header: () => {
        
        return (

          <div>
            <span>{ appStrings.keywords.adjustedShortForm } { appStrings.keywords.debitsAcronym }</span>
          </div>
        )
      },

      cell: args => {

        return (
          <div>

          </div>
        )
      },
    },
    {
      id: createUniqueId(),
      size: 50,
      header: () => {
        
        return (

          <div>
            <span>{ appStrings.keywords.adjustedShortForm } { appStrings.keywords.creditsAcronym }</span>
          </div>
        )
      },

      cell: args => {

        return (
          <div>

          </div>
        )
      },
    },
    {
      id: createUniqueId(),
      size: 100,
      header: () => {

        return (
          <div>
            <TextDateBranchPicker />
          </div>
        )
      },
      cell: args => {

        return (
          <div>

          </div>
        )
      },
    },
  ], [])
  
  return columns
}