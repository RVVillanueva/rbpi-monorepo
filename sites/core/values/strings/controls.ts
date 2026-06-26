import { useT } from "@/context/hono";
import { useMemo } from "react";


export function useFormControlStrings() {
  const t = useT()

  return useMemo(() => ({
    branchFilterSelectStrings: {
      label: t('form_controls.branch_filter_select.label', 'Branch'),
      defaultShortName: t('form_controls.branch_filter_select.short_name', 'ALL'),
      defaultName: t('form_controls.branch_filter_select.name', 'Consolidated'),
    },

    accountingPeriodStrings: {
      label: t('form_controls.branch_filter_select.label', 'As of Date'),
    },

    accountsTableControlsStrings: {

    },

    
  }), [t])
}

