import { eq, sql } from "drizzle-orm";
import { mysqlView } from "drizzle-orm/mysql-core";
import { generalBranches, generalEmployees, hrAttendance, hrPositions, hrRanks } from "~/db/legacy/migrations/schema";

export type GeneralEmployee = typeof employeesView.$inferSelect
export type HrAttendance = typeof attendancesView.$inferSelect

// @SQLVIEW: Employees
export const employeesView = mysqlView('employees_view')
  .as(
    qb => qb
      .select({
        id: generalEmployees.id,
        generatedId: generalEmployees.generatedid,
        username: generalEmployees.username,
        
        fullName: sql<string>`
          CONCAT(
            ${ generalEmployees.firstname },
            CASE WHEN ${ generalEmployees.middlename } <> '' THEN CONCAT(' ', ${ generalEmployees.middlename }, ' ') ELSE '' END,
            ${ generalEmployees.lastname },
            CASE WHEN ${ generalEmployees.suffixname } <> '' THEN CONCAT(' ', ${ generalEmployees.suffixname }) ELSE '' END
          )
        `.as('full_name'),

        firstName: generalEmployees.firstname.as('first_name'),
        lastName: generalEmployees.lastname.as('last_name'),
        middleName: generalEmployees.middlename.as('middle_name'),
        suffixName: generalEmployees.suffixname.as('suffix_name'),
        birthdate: generalEmployees.birthdate.as('birthdate'),
        birthplace: generalEmployees.birthplace.as('birthplace'),
        age: sql<number>`TIMESTAMPDIFF(YEAR, ${ generalEmployees.birthdate }, CURDATE())`.as('age'),
        gender: sql<string>`
          CASE ${ generalEmployees.gender }
            WHEN 1 THEN 'Male'
            WHEN 2 THEN 'Female'
            ELSE 'Other'
          END
        `.as('gender'),
        civilStatus: sql<string>`
          CASE ${ generalEmployees.civilstatus }
            WHEN 1 THEN 'Single'
            WHEN 2 THEN 'Married'
            WHEN 3 THEN 'Widowed'
            WHEN 4 THEN 'Separated'
            WHEN 5 THEN 'Annulled'
            ELSE 'Unknown'
          END
        `.as('civil_status'),
        nationality: generalEmployees.nationality,
        primaryContact: sql<string>`
          CASE ${ generalEmployees.contactDefault }
            WHEN 1 THEN ${ generalEmployees.contactnumber1 }
            ELSE ${ generalEmployees.contactnumber2 }
          END
        `.as('primary_contact'),
        
        contactNumber1: generalEmployees.contactnumber1.as('contact_number_1'),
        contactNumber2: generalEmployees.contactnumber2.as('contact_number_2'),

        address1: generalEmployees.address1.as('address_1'),
        address2: generalEmployees.address2.as('address_2'),

        emergencyContactName: generalEmployees.emergencycontactperson.as('emergency_contact_name'),
        emergencyContactNumber: generalEmployees.emergencycontactnumber.as('emergency_contact_number'),

        branchId: generalEmployees.branchid.as('branch_id'),
        branchName: generalBranches.name.as('branch_name'),
        branchShort: generalBranches.shortname.as('branch_short'),
        positionId: generalEmployees.positionid.as('position_id'),
        positionName: hrPositions.positionname.as('position_name'),
        departmentId: hrPositions.departmentid.as('department_id'),
        costCenterId: hrPositions.costcenterid.as('cost_center_id'),
        rankId: generalEmployees.rankid.as('rank_id'),
        rankName: hrRanks.rankname.as('rank_name'),
        isOfficer: hrRanks.isofficer.as('isOfficer'),
        dateHired: generalEmployees.datehired.as('date_hired'),
        dateRegular: generalEmployees.dateregular.as('date_regular'),
        yearsOfService: sql<number>`TIMESTAMPDIFF(YEAR, ${ generalEmployees.datehired }, CURDATE())`.as('years_of_service'),
        monthsOfService: sql<number>`TIMESTAMPDIFF(MONTH, ${ generalEmployees.datehired }, CURDATE())`.as('months_of_service'),
        employmentStatus: sql<string>`
          CASE ${ generalEmployees.employmentstatus }
            WHEN 0 THEN 'Separated'
            WHEN 1 THEN 'Trainee'
            WHEN 2 THEN 'Probationary'
            WHEN 3 THEN 'Regular'
            WHEN 4 THEN 'Contractual'
            WHEN 5 THEN 'Project-Based'
            ELSE        'Unknown'
          END
        `.as('employment_status'),

        isActive: sql<boolean>`
          CASE 
            WHEN ${ generalEmployees.employmentstatus } > 0 THEN 1 
            ELSE 0
          END
        `.as('is_active'),

        sss: generalEmployees.sss,
        philHealth: generalEmployees.philhealth,
        pagIbig: generalEmployees.pagibig,
        tin: generalEmployees.tin,

        clientId: generalEmployees.clientid.as('client_id'),
        savingsId: generalEmployees.savingsid.as('savings_id'),
        savingsId2: generalEmployees.savingsid2.as('savings_id_2'),
        linkedPnId: generalEmployees.npaid.as('linked_pn_id'),
        vacationLeaveBalance: generalEmployees.vlbalance.as('vacation_leave_balance'),
        sickLeaveBalance: generalEmployees.slbalance.as('sick_leave_balance'),

        accountIsActive: generalEmployees.isactive.as('account_is_active'),
        lastActivity: generalEmployees.activitylog.as('last_activity'),
        passwordChangedAt: generalEmployees.passwordchangedate.as('password_changed_at'),
        isUsingDefaultPassword: generalEmployees.passworddefault.as('is_using_default_password'),
      })
      .from(generalEmployees)
      .leftJoin(
        generalBranches, 
        eq(generalBranches.id, generalEmployees.branchid),
      )
      .leftJoin(
        hrPositions,
        eq(hrPositions.positionid, generalEmployees.positionid),
      )
      .leftJoin(
        hrRanks,
        eq(hrRanks.rankid, generalEmployees.rankid),
      ),
  )

// @SQLVIEW: Employee attendances
export const attendancesView = mysqlView('attendances_view')
  .as(
    qb => qb
      .select({
        employeeId: hrAttendance.employeeid.as('employee_id'),
        date: hrAttendance.date,
        shifts: {
          in1: hrAttendance.in1.as('shift_in_1'),
          out1: hrAttendance.out1.as('shift_out_1'),
          in2: hrAttendance.in2.as('shift_in_2'),
          out2: hrAttendance.out2.as('shift_out_2'),
        },
      })
      .from(hrAttendance)
  )