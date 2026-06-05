import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'

export const userRole = pgEnum('user_role', ['user', 'admin'])

export const users = pgTable('users', {
  id: text('id').notNull().primaryKey(),
  name: text('name').notNull(),
  role: userRole('role').default('user'),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),
  createdAt: timestamp('created_at', { mode: 'date' })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .notNull()
    .defaultNow(),
  banned: boolean('banned'),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires', { mode: 'date' }),
})