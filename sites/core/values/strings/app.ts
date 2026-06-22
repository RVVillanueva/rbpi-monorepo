import { useT } from "@/context/hono";

import rbpiLogoUrl from '@/assets/rbpi-logo.webp'
import rbpiFullLogoUrl from '@/assets/rbpi-full-logo.webp'
import { useMemo } from "react";

export function useAppStrings() {
  const t = useT()

  return useMemo(() => ({
    rbpiLogo: rbpiLogoUrl,
    rbpiFullLogo: rbpiFullLogoUrl,
    rbpiLegalName: t('rbpi.legal_name', 'Rural Bank of Pilar Sorsogon, Inc.'),
    rbpiLegalShortName: t('rbpi.legal_short_name', 'Rural Bank of Pilar (Sor.), Inc.'),
    rbpiAcronym: t('rbpi.acronym', 'RBPI'),

    appLogo: '',
    appName: t('root.app_name', 'RBPICore'),
  }), [t])
}

