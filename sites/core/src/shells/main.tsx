import { RBPIBreadcrumb } from "@components/breadcrumb";
import { RBPIActionbar, RBPISidebar, RBPINavbar, RBPIPanel, RBPITaskbar, RBPIShellProvider } from "@components/shell";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@shadcn/base/components/ui/resizable";
import { PropsWithChildren } from "react";

export type RBPICoreMainShellProps = PropsWithChildren<{}>

export function RBPICoreMainShell(props: RBPICoreMainShellProps) {

  return (
    <RBPIShellProvider>
      {/* @GRID */}
      <div id='app' className={'grid grid-rows-[auto_1fr_auto] h-dvh overflow-hidden'}>
        <header>
          <RBPINavbar></RBPINavbar>
        </header>

        {/* @GRID */}
        <ResizablePanelGroup
          orientation='horizontal' 
          className={'grid grid-cols-[1fr_auto] h-full min-h-0'}> 
          
          {/* @GRID */}
          <ResizablePanel>
            <div className={'app-body grid grid-rows-[auto_1fr] min-h-0 h-full overflow-y-auto'}>
              <RBPIActionbar></RBPIActionbar>

              <RBPISidebar>
                <main className='app-view p-4 overflow-x-hidden space-y-3.5'>
                  <RBPIBreadcrumb />
                  { props.children }
                </main>
              </RBPISidebar>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel 
            maxSize={400}
            defaultSize={400}>
            <aside className='grid grid-cols-1 grid-rows-1 h-full'>
              <RBPIPanel></RBPIPanel>
            </aside>
          </ResizablePanel>
        </ResizablePanelGroup>

        <footer>
          <RBPITaskbar></RBPITaskbar>
        </footer>
      </div>
    </RBPIShellProvider>
  )
}

