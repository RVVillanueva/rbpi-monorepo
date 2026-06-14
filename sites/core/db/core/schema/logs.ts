import { index, json, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const logs = pgTable('logs', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  level: text('level', {
    enum: [
      'debug',
      'info',
      'warn',
      'error',
      'fatal',
    ],
  }).notNull().default('info'),
  event: text('event').notNull(),
  message: text('message').notNull(),
  actor: text('actor'),
  meta: json('meta').$type(),
  traceId: text('trace_id'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, t  => [
  index('logs_created_at_idx').on(t.createdAt),
  index('logs_level_idx').on(t.level),
  index('logs_event_idx').on(t.event),
  index('logs_trace_id_idx').on(t.traceId),
  index('logs_actor_idx').on(t.actor),
])


