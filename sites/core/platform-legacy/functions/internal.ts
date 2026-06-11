import { eq, getColumns, getTableColumns, getTableName, getViewName } from "drizzle-orm";

import { err, ok } from "neverthrow";
import { NotFoundError } from "~/db/errors";
import { employeesView } from "~/db/legacy/schema";

export const getEmployeeByUsername = async (
  db: RBPICore.LegacyDatabase,
  username: string,
) => {

  const [user] = await db
    .select({
      id: employeesView.id,
      fullName: employeesView.fullName,
      username: employeesView.username,
      isActive: employeesView.isActive,
      accountIsActive: employeesView.accountIsActive,
      employmentStatus: employeesView.employmentStatus,
      isOfficer: employeesView.isOfficer.as('isofficer'),
    })
    .from(employeesView)
    .limit(1)
    .where(eq(employeesView.username, username))
    
  if (!user) {
    return err(
      new NotFoundError(
        getViewName(employeesView)
      )
    )
  }

  return ok(user)
}
