
declare module RBPICore {

  interface UserStateConfig {
    interfaceStates: {
      isCollapsedSidebar: boolean
      isVisiblePanelView: boolean

      railsWidth: number
      sidebarWidth: number
      panelWidth: number

      windowStates: {
        activeWindowId?: number | null
        windows: {
          id: number
          title: string
          pathname: string
          state: unknown
        }[]
      }
    },
  }

  namespace Session {
    interface StateConfig {
      windowStates: {
        activeWindowId?: number | null
        windows: {
          id: number
          title: string
          pathname: string
          state: unknown
        }[],
      },
    }

  }

  namespace Analytics {
    type PanelDatasource = 
      | { source: 'legacy', type: 'view', ref: string, params?: Record<string, unknown> }
      | { source: 'legacy', type: 'sql', query: string, params?: Record<string, unknown> }
      | { source: 'legacy', type: 'static', data: unknown[] }
      | { source: 'core', type: 'view', ref: string, params?: Record<string, unknown> }
      | { source: 'core', type: 'sql', query: string, params?: Record<string, unknown> }

    // @TBD: Supposedly, this will contain chart config.
    interface PanelConfig {
      
    }
  }

}

