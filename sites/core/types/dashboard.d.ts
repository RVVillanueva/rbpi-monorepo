
declare module RBPICore {

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

