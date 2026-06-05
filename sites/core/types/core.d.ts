
declare module RBPICore {
  type LegacyRPC = ReturnType<typeof import('~/legacy/rpc/handlers').bootstrap>
  type CorePlatformRPC = ReturnType<typeof import('~/corePlatform/rpc/handlers').bootstrap>
}

