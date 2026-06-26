import { bigint, integer, pgTable, serial, smallint, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const organizations = pgTable('organizations', {
  id: text('id').notNull().primaryKey(),
  numericId: bigint('numeric_id', { mode: 'number' }),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  logo: text('logo_url'),
  metadata: text('metadata'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const organizationRoles = pgTable('organization_roles', {
  id: text('id').notNull().primaryKey(),
  organizationId: text('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  role: text('role'),
  permission: text('permission'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
})

export const members = pgTable('members', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  organizationId: text('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  role: text('role'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const invitations = pgTable('invitations', {
  id: text('id').notNull().primaryKey(),
  email: text('email').notNull(),
  inviterId: text('inviter_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  organizationId: text('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  teamId: text('team_id').references(() => teams.id, { onDelete: 'cascade' }),
  role: text('role'),
  status: text('status'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  expiresAt: timestamp('expires_at').notNull(),
})

export const teams = pgTable('teams', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  organizationId: text('organization_id').references(() => organizations.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
})

export const teamMembers = pgTable('team_members', {
  id: text('id').notNull().primaryKey(),
  teamId: text('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// ---

export const organizationProfiles = pgTable('organization_profiles', {
  id: serial('id').notNull().primaryKey(),
  uid: text('uid').notNull().unique(),
  numericId: bigint('numeric_id', { mode: 'number' }).notNull().unique(),
  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
  organizationId: text('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  shortName: varchar('short_name', { length: 6 }).notNull(),
  description: text('description').notNull().default(''),
  slug: text('slug').notNull().unique(),
  cover: text('cover_url'),
  logo: text('logo_url'),
  
  defaultLocale: text('default_locale'),
  defaultCurrency: text('default_currency'),
  defaultCountry: text('default_country'),
  defaultState: text('default_state'),
  defaultCity: text('default_city'),
  defaultPostalCode: text('default_postal_code'),
  defaultAddress: text('default_address'),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
})

export const organizationSettings = pgTable('organization_settings', {
  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
  organizationId: text('organization_id').unique().notNull().references(() => organizations.id, { onDelete: 'cascade' }),

  defaultCurrency: text('default_currency'),
  defaultLocale: text('default_locale'),

  fiscalYearStartMonth: text('fiscal_year_start_month'),
  fiscalYearStartDay: smallint('fiscal_year_start_day'),
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
})
