CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `employees_view` AS (select `general_employees`.`id`, `general_employees`.`generatedid`, `general_employees`.`username`, `general_employees`.`image` as `avatar`, 
          CONCAT(
            `general_employees`.`firstname`,
            CASE WHEN `general_employees`.`middlename` <> '' THEN CONCAT(' ', `general_employees`.`middlename`, ' ') ELSE '' END,
            `general_employees`.`lastname`,
            CASE WHEN `general_employees`.`suffixname` <> '' THEN CONCAT(' ', `general_employees`.`suffixname`) ELSE '' END
          )
         as `full_name`, `general_employees`.`firstname` as `first_name`, `general_employees`.`lastname` as `last_name`, `general_employees`.`middlename` as `middle_name`, `general_employees`.`suffixname` as `suffix_name`, `general_employees`.`birthdate` as `birthdate`, `general_employees`.`birthplace` as `birthplace`, TIMESTAMPDIFF(YEAR, `general_employees`.`birthdate`, CURDATE()) as `age`, 
          CASE `general_employees`.`gender`
            WHEN 1 THEN 'Male'
            WHEN 2 THEN 'Female'
            ELSE 'Other'
          END
         as `gender`, 
          CASE `general_employees`.`civilstatus`
            WHEN 1 THEN 'Single'
            WHEN 2 THEN 'Married'
            WHEN 3 THEN 'Widowed'
            WHEN 4 THEN 'Separated'
            WHEN 5 THEN 'Annulled'
            ELSE 'Unknown'
          END
         as `civil_status`, `general_employees`.`nationality`, 
          CASE `general_employees`.`contactDefault`
            WHEN 1 THEN `general_employees`.`contactnumber1`
            ELSE `general_employees`.`contactnumber2`
          END
         as `primary_contact`, `general_employees`.`contactnumber1` as `contact_number_1`, `general_employees`.`contactnumber2` as `contact_number_2`, `general_employees`.`address1` as `address_1`, `general_employees`.`address2` as `address_2`, `general_employees`.`emergencycontactperson` as `emergency_contact_name`, `general_employees`.`emergencycontactnumber` as `emergency_contact_number`, `general_employees`.`branchid` as `branch_id`, `general_branches`.`name` as `branch_name`, `general_branches`.`shortname` as `branch_short`, `general_employees`.`positionid` as `position_id`, `hr_positions`.`positionname` as `position_name`, `hr_positions`.`departmentid` as `department_id`, `hr_positions`.`costcenterid` as `cost_center_id`, `general_employees`.`rankid` as `rank_id`, `hr_ranks`.`rankname` as `rank_name`, `hr_ranks`.`isofficer` as `isOfficer`, `general_employees`.`datehired` as `date_hired`, `general_employees`.`dateregular` as `date_regular`, TIMESTAMPDIFF(YEAR, `general_employees`.`datehired`, CURDATE()) as `years_of_service`, TIMESTAMPDIFF(MONTH, `general_employees`.`datehired`, CURDATE()) as `months_of_service`, 
          CASE `general_employees`.`employmentstatus`
            WHEN 0 THEN 'Separated'
            WHEN 1 THEN 'Trainee'
            WHEN 2 THEN 'Probationary'
            WHEN 3 THEN 'Regular'
            WHEN 4 THEN 'Contractual'
            WHEN 5 THEN 'Project-Based'
            ELSE        'Unknown'
          END
         as `employment_status`, 
          CASE 
            WHEN `general_employees`.`employmentstatus` > 0 THEN 1 
            ELSE 0
          END
         as `is_active`, `general_employees`.`sss`, `general_employees`.`philhealth`, `general_employees`.`pagibig`, `general_employees`.`tin`, `general_employees`.`clientid` as `client_id`, `general_employees`.`savingsid` as `savings_id`, `general_employees`.`savingsid2` as `savings_id_2`, `general_employees`.`npaid` as `linked_pn_id`, `general_employees`.`vlbalance` as `vacation_leave_balance`, `general_employees`.`slbalance` as `sick_leave_balance`, `general_employees`.`isactive` as `account_is_active`, `general_employees`.`activitylog` as `last_activity`, `general_employees`.`passwordchangedate` as `password_changed_at`, `general_employees`.`passworddefault` as `is_using_default_password` from `general_employees` left join `general_branches` on `general_branches`.`id` = `general_employees`.`branchid` left join `hr_positions` on `hr_positions`.`positionid` = `general_employees`.`positionid` left join `hr_ranks` on `hr_ranks`.`rankid` = `general_employees`.`rankid`);