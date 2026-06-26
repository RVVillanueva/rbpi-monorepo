import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider';
import { Button } from '@shadcn/base/components/ui/button';
import { ButtonGroup } from '@shadcn/base/components/ui/button-group';
import { Calendar } from '@shadcn/base/components/ui/calendar';
import { 
  Combobox, 
  ComboboxContent, 
  ComboboxEmpty, 
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from '@shadcn/base/components/ui/combobox';

import { Field, FieldContent, FieldLabel } from '@shadcn/base/components/ui/field';
import { Popover, PopoverContent, PopoverTrigger } from '@shadcn/base/components/ui/popover';
import { Skeleton } from '@shadcn/base/components/ui/skeleton';
import { Calendar1Icon } from '@shadcn/base/icons';
import { cn } from '@shadcn/base/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { format, subDays } from 'date-fns';
import { PropsWithChildren, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { branchesView } from '~/db/legacy/schema';
import { useFormControlStrings } from '~/values/strings/controls';

type BranchFilterSelectProps = PropsWithChildren<{
  
}>

export const branchIdsSearchParamKey = 'org-branches' as const
export const branchIdSearchParamKey = 'org-branch' as const
export const cutoffDateSearchParamKey = 'cutoff-date' as const
export const cutoffPeriodsSearchParamKey = 'cutoff-periods' as const

export const useBranchIdsFromSearch = () => {
  const [search] = useSearchParams()
  return useMemo(() => String(search.get(branchIdsSearchParamKey) ?? 0).split(','), [ search ])
}

export const useCutoffPeriodsFromSearch = () => {
  const [search] = useSearchParams()
  const priorDay = subDays(new Date(), 1)
  return useMemo(() => String(search.get(cutoffPeriodsSearchParamKey) ?? format(priorDay, `yyyy-MM-dd`)).split(','), [ search ])
}

export const useBranchIdFromSearch = () => {
  const [search] = useSearchParams()
  return useMemo(() => String(search.get(branchIdSearchParamKey) ?? 0), [ search ])
}

export const useCutoffDateFromSearch = () => {
  const priorDay = subDays(new Date(), 1)
  const [search] = useSearchParams()
  return useMemo(() => new Date(search.get(cutoffDateSearchParamKey) ?? priorDay), [ search ])
}

export function BranchFilterSelect(props: BranchFilterSelectProps) {
  const client = useLegacyRpcClient()
  const controlStrings = useFormControlStrings()
  const [search, setSearchParams] = useSearchParams()
  const branchId = useBranchIdFromSearch()

  const { data, isPending } = useQuery({
    queryKey: ['branch_filter_select_k'],
    queryFn: async () => {
      const res = await client.rbpi.branches.$get({
        query: {},
      })

      if (res.ok) {
        return await res.json()
      }

      return { data: [], paging: {} }
    }
  })

  const branches = useMemo(() => {
    const values = new Map<string, { 
      label: string, 
      value: typeof branchesView.$inferSelect,
    }>()

    values.set(String(0), {
      label: controlStrings.branchFilterSelectStrings.defaultShortName,
      value: { 
        id: 0,
        shortName: controlStrings.branchFilterSelectStrings.defaultShortName, 
        name: controlStrings.branchFilterSelectStrings.defaultName,
        branchLevel: 1,
        parent: 0,
        accountingDate: new Date(),
        status: 0,
        categoryId: 0,
      },
    })

    for (const branch of data?.data ?? []) {
      values.set(String(branch.id), {
        label: branch.shortName,
        value: {
          ...branch,
          accountingDate: new Date(branch.accountingDate),
        },
      })
    }

    return values
  }, [ data, branchId ])

  const selections = useMemo(() => [ ...branches.values() ], [ data, branchId ])

  return (
    <Field
      className='min-w-14 gap-1'>
      <FieldLabel 
        htmlFor='branch'
        className='font-normal text-xs text-zinc-500 uppercase'>
        { controlStrings.branchFilterSelectStrings.label }
      </FieldLabel>
      <FieldContent>
        { !isPending && (
          <Combobox 
            items={selections} 
            defaultValue={branches.get(branchId)}
            onValueChange={val => {
              const branchId = val?.value.id ?? null
              search.set(branchIdSearchParamKey, String(branchId ?? 0))
              setSearchParams(search)
            }}>
            <ComboboxTrigger
              id='branch'
              render={
                <Button 
                  className={cn('justify-start font-normal border border-zinc-300 text-zinc-600')} 
                  variant='outline'>
                  <ComboboxValue />
                </Button>
              }
            />
            <ComboboxContent>
              <ComboboxEmpty />
              <ComboboxList>
                {selections.map((item) => (
                  <ComboboxItem key={item.value.id} value={item}>
                    {item.value.shortName}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        ) }

        { isPending && (
          <Skeleton className='bg-zinc-300 h-8' />
        ) }
      </FieldContent>
    </Field>
  )
}

export function CutOffDateSelect() {
  const priorDay = subDays(new Date(), 1)

  const controlStrings = useFormControlStrings()
  const [search, setSearchParams] = useSearchParams()
  const cutoffDate = useCutoffDateFromSearch()

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>(cutoffDate)

  return (
    <Field
      className='max-w-52 gap-1'>
      <FieldLabel 
        htmlFor='cut-off'
        className='font-normal text-xs text-zinc-500 uppercase'>
        { controlStrings.accountingPeriodStrings.label }
      </FieldLabel>
      <FieldContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <ButtonGroup>
              <Button
                variant={'outline'}
                id='cut-off'
                className='justify-start font-normal border border-zinc-300'>
                <span className='text-zinc-600'>
                  { format(date, 'yyyy/MM/dd') } – FY { date.getFullYear() }
                </span>
              </Button>
              <Button
                variant={'outline'}
                className={'border border-zinc-300'}>
                <Calendar1Icon strokeWidth={1} />
              </Button>
            </ButtonGroup>
          </PopoverTrigger>
          <PopoverContent
            className='w-auto overflow-hidden p-0'
            align='start'>
            <Calendar
              mode='single'
              selected={date}
              defaultMonth={date}
              captionLayout='dropdown'
              disabled={{ after: new Date() }}
              onSelect={(date) => {
                setDate(date ?? priorDay)
                search.set(cutoffDateSearchParamKey, format(date ?? priorDay, 'yyyy/MM/dd'))
                setSearchParams(search)
              }}>
            </Calendar>
          </PopoverContent>
        </Popover>
      </FieldContent>
    </Field>
  )
}

type DefaultFilterSelectProps = PropsWithChildren<{}>

export function DefaultFilterSelect(props: DefaultFilterSelectProps) {
  
  return (
    <div className='flex gap-1.5'>
      <BranchFilterSelect />
      <CutOffDateSelect />
    </div>
  )
}