
declare module RBPICore {
  type LegacyDatabase = import('~/db/legacy').LegacyDatabase
  type CoreDatabase = import('~/db/core').Database

  type LegacyRPC = ReturnType<typeof import('~/platform-legacy/rpc/handlers').bootstrap>
  type CorePlatformRPC = ReturnType<typeof import('~/platform-core/rpc/handlers').bootstrap>
}
