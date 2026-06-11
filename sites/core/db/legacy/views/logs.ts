import { mysqlView } from "drizzle-orm/mysql-core";
import { generalLogs } from "../schema";

export type AuthLog = typeof authLogsView.$inferSelect

// @SQLVIEW: Auth logs
export const authLogsView = mysqlView('auth_logs_view').as(
  qb => qb
    .select({
      id: generalLogs.id,
      user: generalLogs.user,
      time: generalLogs.time,
      log: generalLogs.log,
    })
    .from(generalLogs)
)