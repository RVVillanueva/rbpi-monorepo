import {
    bigint,
    boolean,
    json,
    jsonb,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    unique
} from 'drizzle-orm/pg-core';
import { organizations } from './organizations';

export const userRole = pgEnum('user_role', ['user', 'admin'])

export const users = pgTable('users', {
  id: text('id').notNull().primaryKey(),
  numericId: bigint('numeric_id', { mode: 'number' }).notNull().unique(),
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

  defaultOrganizationId: text('default_organization_id').notNull().references(() => organizations.id, { onDelete: 'restrict' }),
  state: jsonb('state').$type<RBPICore.UserStateConfig>(),
})
