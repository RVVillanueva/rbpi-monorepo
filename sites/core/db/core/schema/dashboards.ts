import { pgTable, serial, text, timestamp, integer, unique, point, jsonb } from 'drizzle-orm/pg-core'
import { users } from './users'

export const dashboards = pgTable('dashboards', {
  id: serial().primaryKey(),
  uid: text('uid').notNull().unique(),
  slug: text('slug').notNull().unique(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description').notNull().default(''),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
})

export const dashboardPanels = pgTable('dashboard_panels', {
  id: serial().primaryKey(),
  uid: text('uid').notNull().unique(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  dashboardId: integer('dashboard_id').notNull().references(() => dashboards.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  widgetType: text('widget_type').notNull(),
  dataSource: jsonb('data_source').$type<RBPICore.Analytics.PanelDatasource>().notNull(),
  config: jsonb('config').$type<RBPICore.Analytics.PanelConfig>().notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
})

export const dashboardLayouts = pgTable('dashboard_layouts', {
  id: serial().primaryKey(),
  panelId: integer('panel_id').notNull().references(() => dashboardPanels.id, { onDelete: 'cascade' }),
  breakpoint: text('breakpoint').notNull().default('lg'),
  x: integer('x').notNull().default(0),
  y: integer('y').notNull().default(0),
  w: integer('w').notNull().default(4),
  h: integer('h').notNull().default(3),
  minW: integer('minW').notNull().default(2),
  minH: integer('minH').notNull().default(2),
}, t => [
  unique().on(t.panelId, t.breakpoint)
])
