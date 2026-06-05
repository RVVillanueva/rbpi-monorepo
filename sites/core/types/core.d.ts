
declare module RBPICore {
  type LegacyRPC = ReturnType<typeof import('~/platform-legacy/rpc/handlers').bootstrap>
  type CorePlatformRPC = ReturnType<typeof import('~/platform-core/rpc/handlers').bootstrap>
}

