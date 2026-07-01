import { useT } from "@/context/hono";

import rbpiFullLogoUrl from '@/assets/rbpi-full-logo.webp';
import rbpiLogoUrl from '@/assets/rbpi-logo.webp';
import { useMemo } from "react";

export function useAppStrings() {
  const t = useT()

  return useMemo(() => ({
    rbpiLogo: rbpiLogoUrl,
    rbpiFullLogo: rbpiFullLogoUrl,
    rbpiLegalName: t('rbpi.legal_name', 'Rural Bank of Pilar Sorsogon, Inc.'),
    rbpiLegalShortName: t('rbpi.legal_short_name', 'Rural Bank of Pilar (Sor.), Inc.'),
    rbpiAcronym: t('rbpi.acronym', 'RBPI'),
    
    appLogo: t('root.app_logo', ''),
    appName: t('root.app_name', 'RBPICore'),

    buttons: {
      appRefresh: t('root.buttons.app_refresh', 'Refresh'),
      appFormat: t('root.buttons.app_format', 'Format'),
      appAdd: (item: string) => t('root.buttons.app_add', 'Add {{item}}', { item }),
    },

    keywords: {
      all: t('root.keywords.all', 'All'),
      adjusted: t('root.keywords.adjusted', 'Adjusted'),
      adjustedShortForm: t('root.keywords.adjusted_short_form', 'Adj.'),
      consolidated: t('root.keywords.consolidated', 'Consolidated'),
      period: t('root.keywords.period', 'Period'),

      total: t('root.keywords.total', 'Total'),
      totals: t('root.keywords.total', 'Totals', { coount: 2 }),

      branch: t('root.keywords.branch', 'Branch'),
      branches: t('root.keywords.branch', 'Branches', { count: 2 }),

      assets: t('root.keywords.assets', 'Assets'),
      assetsUnit: t('root.keywords.assets_unit', 'A'),
      liabilities: t('root.keywords.liabilities', 'Liabilities'),
      liabilitiesUnit: t('root.keywords.liabilities_unit', 'L'),
      equity: t('root.keywords.equity', 'Equity'),
      equityUnit: t('root.keywords.equity_unit', 'C'),
      liabilitiesAndEquity: t('root.keywords_liabilities_and_equity', 'Liability & Equity'),
      expenses: t('root.keywords.expenses', 'Expenses'),
      expensesUnit: t('root.keywords.expenses_unit', 'E'),
      revenues: t('root.keywords.revenues', 'Revenues'),
      income: t('root.keywords.income', 'Income'),
      incomeUnit: t('root.keywords.income_unit', 'I'),      
      netIncome: t('root.keywords.net_income', 'Net income'),
      journals: t('root.keywords.journals', 'Journals'),
      costCenters: t('root.keywords.cost_centers', 'Cost centers'),
      generalLedgerPrefix: t('root.keywords.general_ledger_prefix', 'GL'),

      debit: t('root.keywords.debits', 'Debit'),
      credit: t('root.keywords.credits', 'Credit'),

      debitsAcronym: t('root.keywords.debits_acronym', 'DR'),
      creditsAcronym: t('root.keywords.credits_acronym', 'CR'),

      balanceSheetStrings: {
        simple: t('root.keywords.balance_sheet_strings.simple', 'Balance sheet'),
      },

      incomeStatementStrings: {
        simple: t('root.keywords.income_statement_strings.simple', 'Income statement'),
        alternative: t('root.keywords.income_statement_strings.alternative', 'Profit & loss'),
        grossIncome: t('root.keywords.income_statement_strings.gross_profit', 'Gross Income'),
      },

      incomeStatementAcronym: t('root.keywords.income_statement_acronym', 'IS'),
      incomeStatementAltAcronym: t('root.keywords.income_statement_alt_acronym', 'P&L'),
      balanceSheetAcronym: t('root.keywords.balance_sheet_acronym', 'BS'),
      trialBalanceAcronym: t('root.keywords.trial_balance_acronym', 'TB'),

      trialBalanceStrings: {
        simple: t('root.keywords.trial_balance_strings.simple', 'Trial balance'),
        
        formatsStrings: {
          unadjustedTrialBalance: t('root.keywords.trial_balance_strings.formats.unadjusted_trial_balance', 'Unadjusted trial balance'),
          unadjustedAltTb: t('root.keywords.trial_balance_strings.formats.unadjusted_alt_tb', 'Unadj. trial balance'),

          workingTrialBalance: t('root.keywords.trial_balance_strings.formats.working_trial_balance', 'Working trial balance'),
          workingTrialBalanceAcronym: t('root.keywords.trial_balance_strings.formats.working_trial_balance_acronym', 'WTB'),
        },
      },
    },

    timeRelatedStrings: {
      referenceDate: t('root.keywords.time_related_strings.reference_date', 'Reference date'),
      yearToDate: t('root.keywords.time_related_strings.year_to_date', 'Year to date'),
      monthToDate: t('root.keywords.time_related_strings.month_to_date', 'Month to date'),
      quarterToDate: t('root.keywords.time_related_strings.quarter_to_date', 'Quarter to date'),
      yearToDateAcronym: t('root.keywords.time_related_strings.year_to_date_acronym', 'YTD'),
      monthToDateAcronym: t('root.keywords.time_related_strings.month_to_date_acronym', 'MTD'),
      quarterToDateAcronym: t('root.keywords.time_related_strings.quarter_to_date_acronym', 'QTD'),
    },
  }), [t])
}

