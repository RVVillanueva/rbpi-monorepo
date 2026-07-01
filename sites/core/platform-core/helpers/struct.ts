import { DescMessage, fromJson as from, JsonObject, MessageShape, type JsonValue } from '@bufbuild/protobuf'
import { Value } from '@bufbuild/protobuf/wkt'
import { nanoid } from 'nanoid'
import { TrialBalanceResult } from '~/platform-legacy/functions/internal'

export function createUniqueId() {
  return nanoid(42)
}

// @AI
export function createNumericId(length: 9 | 10 | 11 | 12 = 12): number {
  // 1. Define boundaries using BigInt to prevent math rounding errors
  const min = BigInt(10 ** (length - 1))
  const max = BigInt(10 ** length - 1)
  const range = max - min + 1n

  // 2. Generate 8 bytes of cryptographically secure entropy
  const buffer = new ArrayBuffer(8)
  const bytes = new Uint8Array(buffer)
  crypto.getRandomValues(bytes)

  // 3. Read the bytes cleanly as a 64-bit unsigned integer
  const view = new DataView(buffer)
  const rand = view.getBigUint64(0)

  // 4. Calculate the ID within our boundaries
  const id = (rand % range) + min

  // 5. Convert safely back to a plain number
  return Number(id)
}

// fromDrizzle have a very loose types... not relying on Record<string, unknown>
// will help reduce the issues we have when creating proto buf messages from drizzle
// made types.

export function fromDrizzle<T extends DescMessage>(
  schema: T,
  row: Record<string, unknown>,
  overrides: Record<string, unknown> = {},
): MessageShape<T> {
  const normalize: JsonObject = {}

  for (const [key, val] of Object.entries(row)) {
    if (val == null) continue
    normalize[key] = toJsonValue(val)
  }

  for (const [key, val] of Object.entries(overrides)) {
    if (val == null) delete normalize[key]
    else normalize[key] = toJsonValue(val)
  }

  return from(schema, normalize, { ignoreUnknownFields: true })
}

function toJsonValue(val: unknown): JsonValue {
  if (val instanceof Date) return val.toJSON()
  if (Array.isArray(val)) return val.map(toJsonValue)
  if (val !== null && typeof val === 'object') {
    return Object.fromEntries(
      Object.entries(val).map(([k, v]) => [k, toJsonValue(v)])
    )
  }
  
  return val as JsonValue
}

export function fromFields<T>(
  fields: Record<string, () => Partial<T>>
) {
  const result: Partial<T> = {}
  
  for (const key of Object.keys(fields)) {
    Object.assign(result, fields[key]())
  }

  return result as T
}

export const unwrapValue = (v: Value | undefined) => {
  switch (v?.kind.case) {
  case 'numberValue': return v.kind.value
  case 'stringValue': return v.kind.value
  case 'boolValue':   return v.kind.value
  case 'nullValue':   return null
  default:            return null
  }
}

export const getRowByPath = <T extends { children: T[] }>(data: T[], path: string): T | undefined => {
  const indices = path.split('.').map(Number)
  let current = data
  let result: T | undefined

  for (const i of indices) {
    result = current[i]
    if (!result) return undefined
    current = result.children
  }

  return result
}

export const findTrialBalanceByCode = (data: TrialBalanceResult[], code: number): TrialBalanceResult | undefined => {
  for (const item of data) {
    if (item.parent.code === code) return item
    const found = findTrialBalanceByCode(item.children, code)
    if (found) return found
  }
  return undefined
}