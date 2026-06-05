import { DescMessage, fromJson as from, JsonObject, MessageShape, type JsonValue } from '@bufbuild/protobuf'
import { Value } from '@bufbuild/protobuf/wkt'
import { nanoid } from 'nanoid'

export function createUniqueId() {
  return nanoid(42)
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