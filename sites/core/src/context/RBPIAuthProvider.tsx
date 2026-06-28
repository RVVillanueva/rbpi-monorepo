import { authClient } from "@/auth/client";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import type { Route } from "../pages/+types/_user";

type RBPIAuthContextProps = PropsWithChildren<{
  value: {
    raw: Route.ComponentProps['loaderData']
  }
}>

type RBPIAuthContextType = {
  raw: Route.ComponentProps['loaderData']
  client: typeof authClient

  getUser(): Route.ComponentProps['loaderData']['user']
  getOrganization(): Route.ComponentProps['loaderData']['org']['organizations']
  getOrganizationProfile(): Route.ComponentProps['loaderData']['org']['organization_profiles']

  getUserNumericId(): number
  getOrgNumericId(): number

  isRbpi(): boolean
}

export const RBPIAuthContext = createContext<RBPIAuthContextType | null>(null)

export function RBPIAuthContextProvider(props: RBPIAuthContextProps) {
  const { raw } = props.value


  const value: RBPIAuthContextType = useMemo(() => ({
    ...props.value,
    client: authClient,

    getUser() {
      return raw.user
    },

    getOrganization() {
      return raw.org.organizations
    },

    getOrganizationProfile() {
      return raw.org.organization_profiles
    },

    getUserNumericId() {
      return this.getUser().numericId
    },

    getOrgNumericId() {
      return this.getOrganization()?.numericId!
    },

    isRbpi() {
      return this.getOrganizationProfile()?.shortName.toLowerCase() === 'rbpi'
    },
    
  }), [raw])

  return (
    <RBPIAuthContext.Provider value={value}>
      {props.children}
    </RBPIAuthContext.Provider>
  )
}

export function useRBPIAuthContext() {
  const ctx = useContext(RBPIAuthContext)
  if (!ctx) throw new Error('useRBPIAuthContext must be used inside of RBPIAuthContext')
  return ctx
}


