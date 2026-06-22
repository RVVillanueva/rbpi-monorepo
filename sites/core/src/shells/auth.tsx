import { RBPIShellProvider } from "@components/shell";
import { cn } from "@shadcn/base/lib/utils";
import { PropsWithChildren } from "react";

export type RBPICoreAuthShellProps = PropsWithChildren<{

}>

export function RBPICoreAuthShell(props: RBPICoreAuthShellProps) {

  return (
    <RBPIShellProvider>
      <div id='app' className={'grid grid-rows-1 h-dvh overflow-hidden place-items-center'}>
        
        <div>
          {props.children}
        </div>
        
      </div>
    </RBPIShellProvider>
  )
}

