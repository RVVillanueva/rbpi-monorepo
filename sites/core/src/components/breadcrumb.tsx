import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@shadcn/base/components/ui/breadcrumb";
import { HouseIcon, LandmarkIcon } from "@shadcn/base/icons";
import { createContext, Fragment, PropsWithChildren, useContext } from "react";
import { Link, useMatches } from "react-router";

interface RBPIBreadcrumbContextType {

}

export interface BreadcrumbHandle {
  breadcrumb: {
    label: string
    icon?: keyof typeof breadcrumbIcons
    disabled?: boolean
  }
}

const breadcrumbIcons = {
  HouseIcon,
  LandmarkIcon,
}

const RBPIBreadcrumbContext = createContext<RBPIBreadcrumbContextType | null>(null)

type RBPIBreadcrumbProviderProps = PropsWithChildren<{}>

export function RBPIBreadcrumbProvider(props: RBPIBreadcrumbProviderProps) {

  return (
    <RBPIBreadcrumbContext.Provider value={null}>
      { props.children }
    </RBPIBreadcrumbContext.Provider>
  )
}

export function RBPIBreadcrumb() {
  const matches = useMatches()

  const crumbs = matches.filter(
    (m): m is typeof m & { handle: BreadcrumbHandle } => 
      Boolean((m.handle as BreadcrumbHandle)?.breadcrumb)
  )
  
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <HouseIcon strokeWidth={1} size={16} />
        </BreadcrumbItem>

        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1
          const breadcrumb = crumb.handle.breadcrumb
          const BreadcrumbIcon = breadcrumb.icon ? breadcrumbIcons[breadcrumb.icon] : undefined

          return (
            <Fragment key={crumb.id}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                { isLast ? (
                  <BreadcrumbPage>
                    <div className='flex items-center gap-1'>
                      { BreadcrumbIcon && (<BreadcrumbIcon strokeWidth={1} size={16} />) }
                      <span>{ breadcrumb.label }</span>
                    </div>
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      className='flex items-center gap-1' 
                      to={breadcrumb.disabled ? '#' : crumb.pathname}
                      aria-disabled={breadcrumb.disabled}>
                      { BreadcrumbIcon && (<BreadcrumbIcon strokeWidth={1} size={16} />) }
                      <span>{ breadcrumb.label }</span>
                    </Link>
                  </BreadcrumbLink>
                ) }
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export const useRBPIBreadcrumbContext = () => {
  const ctx = useContext(RBPIBreadcrumbContext)
  if (!ctx) throw new Error('useRBPIBreadcrumb must be used inside of RBPIBreadcrumbContext')
}