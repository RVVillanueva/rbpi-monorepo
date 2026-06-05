import { DrizzleError, DrizzleQueryError } from 'drizzle-orm'

const unwrap = (err: unknown): unknown => {
  if (err instanceof DrizzleQueryError) return err.cause ?? err
  if (err instanceof DrizzleError) return err.cause ?? err
  return err
}

const isSqliteMsg = (err: unknown, msg: string) =>
  err instanceof Error && err.message.includes(msg)

const isPgCode = (err: unknown, code: string) =>
  err instanceof Error && 'code' in err && (err as Error & { code: string }).code === code

const check = (err: unknown, sqlite: string, pg: string) => {
  const e = unwrap(err)
  return isSqliteMsg(e, sqlite) || isPgCode(e, pg)
}

export const isDuplicateError = (err: unknown) =>
  check(err, 'UNIQUE constraint failed', '23505')

export const isForeignKeyError = (err: unknown) =>
  check(err, 'FOREIGN KEY constraint failed', '23503')

export const isNotNullError = (err: unknown) =>
  check(err, 'NOT NULL constraint failed', '23502')

export const isCheckConstraintError = (err: unknown) =>
  check(err, 'CHECK constraint failed', '23514')

export const isDataTooLongError = (err: unknown) =>
  check(err, 'string or blob too big', '22001')

export const isInvalidTypeError = (err: unknown) =>
  check(err, 'datatype mismatch', '22P02')

export const isUndefinedTableError = (err: unknown) =>
  check(err, 'no such table', '42P01')

export const isConnectionError = (err: unknown) => {
  const e = unwrap(err)
  if (!(e instanceof Error)) return false
  const code = 'code' in e ? (e as Error & { code: string }).code : undefined
  return ['ECONNREFUSED', 'ETIMEDOUT', 'ENOTFOUND'].some(
    c => e.message.includes(c) || code === c
  )
}

export const isDeadlockError = (err: unknown) =>
  isPgCode(unwrap(err), '40P01')

export const isTransactionError = (err: unknown) =>
  check(err, 'cannot start a transaction within a transaction', '25P02')