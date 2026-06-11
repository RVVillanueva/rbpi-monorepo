import { mysqlView } from "drizzle-orm/mysql-core";
import { generalEmployees, generalMessages } from "../schema";
import { eq } from "drizzle-orm";

export type GenMessage = typeof messagesView.$inferSelect

// @SQLVIEW: Messages
export const messagesView = mysqlView('messages_view')
  .as(
    qb => qb
      .select({
        id: generalMessages.id,
        postedBy: generalMessages.postedby.as('posted_by'),
        subject: generalMessages.subject.as('subject'),
        message: generalMessages.message.as('message'),
        postedAt: generalMessages.dateposted.as('posted_at'),
        beginAt: generalMessages.datebeg.as('begin_at'),
        endAt: generalMessages.dateend.as('end_at'),
      })
      .from(generalMessages)
  )