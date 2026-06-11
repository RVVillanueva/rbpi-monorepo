import { DrizzleQueryError } from 'drizzle-orm/errors'

export class DatabaseError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message)
    this.name = 'DatabaseError'
  }
}

/** A query returned no rows where at least one was expected. */
export class NotFoundError extends DatabaseError {
  constructor(public readonly entity: string, public readonly id?: string | number) {
    super(id !== undefined ? `${entity} with id '${id}' not found.` : `${entity} not found.`)
    this.name = 'NotFoundError'
  }
}

/** A query returned more rows than expected. */
export class TooManyResultsError extends DatabaseError {
  constructor(public readonly entity: string, public readonly expected: number, public readonly received: number) {
    super(`Expected ${expected} row(s) for ${entity}, but got ${received}.`)
    this.name = 'TooManyResultsError'
  }
}

/** A record with the same unique key already exists. */
export class DuplicateEntryError extends DatabaseError {
  constructor(public readonly entity: string, public readonly field?: string) {
    super(field ? `${entity} with the same '${field}' already exists.` : `Duplicate ${entity} entry.`)
    this.name = 'DuplicateEntryError'
  }
}

/** A required foreign key reference does not exist. */
export class ForeignKeyError extends DatabaseError {
  constructor(public readonly entity: string, public readonly referencedEntity?: string) {
    super(
      referencedEntity
        ? `${entity} references a ${referencedEntity} that does not exist.`
        : `${entity} contains an invalid foreign key reference.`
    )
    this.name = 'ForeignKeyError'
  }
}

/** A non-nullable column received a null value. */
export class NullConstraintError extends DatabaseError {
  constructor(public readonly entity: string, public readonly field?: string) {
    super(field ? `Field '${field}' on ${entity} cannot be null.` : `A required field on ${entity} is null.`)
    this.name = 'NullConstraintError'
  }
}

/** The database connection was refused or timed out. */
export class ConnectionError extends DatabaseError {
  constructor(message = 'Failed to connect to the database.') {
    super(message)
    this.name = 'ConnectionError'
  }
}

/** A query exceeded its allowed execution time. */
export class QueryTimeoutError extends DatabaseError {
  constructor(message = 'Database query timed out.') {
    super(message)
    this.name = 'QueryTimeoutError'
  }
}

const MYSQL_CODE_MAP: Record<string, () => DatabaseError> = {
  ER_DUP_ENTRY:            () => new DuplicateEntryError('Record'),
  ER_NO_REFERENCED_ROW_2:  () => new ForeignKeyError('Record'),
  ER_ROW_IS_REFERENCED_2:  () => new ForeignKeyError('Record'),
  ER_BAD_NULL_ERROR:       () => new NullConstraintError('Record'),
  ECONNREFUSED:            () => new ConnectionError(),
  ETIMEDOUT:               () => new QueryTimeoutError(),
  ER_LOCK_WAIT_TIMEOUT:    () => new QueryTimeoutError('Lock wait timeout exceeded.'),
}

const POSTGRES_CODE_MAP: Record<string, () => DatabaseError> = {
  '23505': () => new DuplicateEntryError('Record'),  // unique_violation
  '23503': () => new ForeignKeyError('Record'),      // foreign_key_violation
  '23502': () => new NullConstraintError('Record'),  // not_null_violation
  '08006': () => new ConnectionError(),              // connection_failure
  '57014': () => new QueryTimeoutError(),            // query_canceled
}

const SQLITE_CODE_MAP: Record<string, () => DatabaseError> = {
  SQLITE_CONSTRAINT_UNIQUE:     () => new DuplicateEntryError('Record'),
  SQLITE_CONSTRAINT_FOREIGNKEY: () => new ForeignKeyError('Record'),
  SQLITE_CONSTRAINT_NOTNULL:    () => new NullConstraintError('Record'),
}

export function normalizeDrizzleError(err: unknown): DatabaseError {
  if (!(err instanceof DrizzleQueryError)) {
    if (err instanceof DatabaseError) return err
    const message = err instanceof Error ? err.message : 'An unknown database error occurred.'
    return new DatabaseError(message, err)
  }

  const cause = err.cause as any
  const code: string | undefined = cause?.code

  if (!code) return new DatabaseError(err.message, err)

  const fromMySQL    = MYSQL_CODE_MAP[code]
  const fromPostgres = POSTGRES_CODE_MAP[code]
  const fromSQLite   = SQLITE_CODE_MAP[code]

  const factory = fromMySQL ?? fromPostgres ?? fromSQLite
  if (factory) return factory()

  return new DatabaseError(`Database error [${code}]: ${cause?.message ?? err.message}`, err)
}

export const isNotFound       = (e: unknown): e is NotFoundError       => e instanceof NotFoundError
export const isDuplicateEntry = (e: unknown): e is DuplicateEntryError => e instanceof DuplicateEntryError
export const isForeignKey     = (e: unknown): e is ForeignKeyError     => e instanceof ForeignKeyError
export const isNullConstraint = (e: unknown): e is NullConstraintError => e instanceof NullConstraintError
export const isConnection     = (e: unknown): e is ConnectionError     => e instanceof ConnectionError
export const isQueryTimeout   = (e: unknown): e is QueryTimeoutError   => e instanceof QueryTimeoutError