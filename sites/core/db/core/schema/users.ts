import {
    boolean,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    unique
} from 'drizzle-orm/pg-core';

export const userRole = pgEnum('user_role', ['user', 'admin'])

export const users = pgTable('users', {
  id: text('id').notNull().primaryKey(),
  name: text('name').notNull(),
  role: userRole('role').default('user'),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  username: text('username').notNull().unique(),
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
  isAnonymous: boolean('is_anonymous').default(false),
})

export const internalUsers = pgTable('internal_users', {
  id: serial('id').notNull().primaryKey(),
  uid: text('uid').notNull().unique(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
}, t => [
  unique().on(t.userId, users.id),
])
