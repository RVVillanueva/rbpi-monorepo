import { useBranchIdFromSearch, useCutoffDateFromSearch } from "@components/controls/filters";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { createContext, PropsWithChildren, useContext } from "react";
import { ComputedFullTrialBalanceResult, ComputeFinancialSummaryResult } from "~/platform-legacy/functions/internal";
import {
  type GetRBPIJournalsResult,
  getRBPIJournalsRouteResponseSchema,
} from "~/platform-legacy/rpc/handlers/specs/accounting";
import { useLegacyRpcClient } from "./RBPIClientRPCProvider";


// @TODO: Refactor Compute* types to rely on the specs/*.ts definition files.
type AccountingContextType = {
  financialSummaryData: ComputeFinancialSummaryResult | undefined
  isFinancialSummaryDataPending: boolean
  trialBalanceData: ComputedFullTrialBalanceResult | undefined
  isTrialBalanceDataPending: boolean
  journalsData: GetRBPIJournalsResult | undefined
  isJournalsDataPending: boolean
}

type RBPIAccountingContextProviderProps = PropsWithChildren<{}>

export const RBPIAccountingContext = createContext<AccountingContextType | null>(null)

export function RBPIAccountingContextProvider(props: RBPIAccountingContextProviderProps) {
  const {
    financialSummaryData,
    isFinancialSummaryDataPending,
    trialBalanceData,
    isTrialBalanceDataPending,
  } = useQueryRbpiFinancialData()

  const {
    journalsData,
    isJournalsDataPending,
  } = useQueryRbpiJournalsData()

  return (
    <RBPIAccountingContext.Provider value={{
      financialSummaryData,
      isFinancialSummaryDataPending,
      trialBalanceData,
      isTrialBalanceDataPending,
      journalsData,
      isJournalsDataPending,
    }}>
      {props.children}
    </RBPIAccountingContext.Provider>
  )
}

export const useRBPIAccountingContext = () => {
  const ctx = useContext(RBPIAccountingContext)
  if (!ctx) throw new Error('useRBPIAccountingContext must be used inside of the RBPIAccountingContextProvider')
  return ctx
}

const useQueryRbpiJournalsData = () => {
  const branchId = useBranchIdFromSearch()
  const cutoffDate = useCutoffDateFromSearch()
  const client = useLegacyRpcClient()

  const {
    data: journalsData,
    isPending: isJournalsDataPending,
  } = useQuery({
    queryKey: ['journals_k', branchId, cutoffDate],
    queryFn: async () => {
      const res = await client.rbpi.ledger.journals.$get({
        query: {
          branchIds: [branchId].join(','),
          periods: [format(cutoffDate, 'yyyy-MM-dd')].join(','),
        },
      })

      if (res.ok) {
        const json = await res.json()
        return getRBPIJournalsRouteResponseSchema.parse(json)
      }
    },
  })

  return {
    journalsData,
    isJournalsDataPending,
  }
}

const useQueryRbpiFinancialData = () => {
  const branchId = useBranchIdFromSearch()
  const cutoffDate = useCutoffDateFromSearch()
  const client = useLegacyRpcClient()

  const {
    data: financialSummaryData,
    isPending: isFinancialSummaryDataPending,
  } = useQuery({
    queryKey: ['financial_summary_k', branchId, cutoffDate],
    queryFn: async () => {
      const res = await client.rbpi.ledger.reports.financialSummary.$get({
        query: {
          branchIds: [branchId].join(','),
          periods: [format(cutoffDate, 'yyyy-MM-dd')].join(','),
        },
      })

      if (res.ok) {
        return await res.json()
      }
    },
  })

  const {
    data: trialBalanceData,
    isPending: isTrialBalanceDataPending,
  } = useQuery({
    queryKey: ['trial_balance_k', branchId, cutoffDate],
    queryFn: async () => {
      const res = await client.rbpi.ledger.trialBalance.$get({
        query: {
          branchIds: [branchId].join(','),
          periods: [format(cutoffDate, 'yyyy-MM-dd')].join(','),
        },
      })

      if (res.ok) {
        return await res.json()
      }
    },
  })

  return {
    financialSummaryData,
    isFinancialSummaryDataPending,
    trialBalanceData,
    isTrialBalanceDataPending,
  }
}