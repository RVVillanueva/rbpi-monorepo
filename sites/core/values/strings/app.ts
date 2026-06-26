import { useT } from "@/context/hono";

import rbpiLogoUrl from '@/assets/rbpi-logo.webp'
import rbpiFullLogoUrl from '@/assets/rbpi-full-logo.webp'
import { useMemo } from "react";
import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";

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

    keywords: {
      assets: t('root.keywords.assets', 'Assets'),
      assetsUnit: t('root.keywords.assets_unit', 'A'),
      liabilities: t('root.keywords.liabilities', 'Liabilities'),
      liabilitiesUnit: t('root.keywords.liabilities_unit', 'L'),
      equity: t('root.keywords.equity', 'Equity'),
      equityUnit: t('root.keywords.equity_unit', 'C'),
      expenses: t('root.keywords.expenses', 'Expenses'),
      expensesUnit: t('root.keywords.expenses_unit', 'E'),
      income: t('root.keywords.income', 'Income'),
      incomeUnit: t('root.keywords.income_unit', 'I'),      
      netIncome: t('root.keywords.net_income', 'Net Income'),
      journals: t('root.keywords.journals', 'Journals'),
      costCenters: t('root.keywords.cost_centers', 'Cost Centers'),
      generalLedgerPrefix: t('root.keywords.general_ledger_prefix', 'GL'),
    },
  }), [t])
}

