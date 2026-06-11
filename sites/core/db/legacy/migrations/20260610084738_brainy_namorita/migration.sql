CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `addresses_view` AS (select `id` as `id`, `code` as `code`, `name` as `name`, `town` as `town`, `province` as `province`, `region` as `region`, `addresscomplete` as `complete_address`, `level` as `level`, `parent` as `parent`, `level_psgc` as `level_psgc`, `code_parent` as `code_parent`, `zipcode` as `zip_code`, `isHighRisk` as `is_high_risk` from `general_address`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `clients_view` AS (select `clientid` as `id`, `savingsid` as `savings_id`, `centerid` as `center_id`, `officeid` as `office_id`, `branch` as `branch_id`, `spouseid` as `spouse_id`, `assetsizeid` as `asset_size_id`, `client_uuid` as `uuid`, `emailaddress` as `email`, 
          CONCAT(
            `firstname`,
            CASE WHEN `middlename` <> '' THEN CONCAT(' ', `middlename`, ' ') ELSE '' END,
            `lastname`,
            CASE WHEN `suffixname` <> '' THEN CONCAT(' ', `suffixname`) ELSE '' END
          )
         as `full_name`, `firstname` as `first_name`, `lastname` as `last_name`, `middlename` as `middle_name`, `suffixname` as `suffix_name`, `birthdate`, `birthplace`, 
            CASE `gender`
              WHEN 1 THEN 'Male'
              WHEN 2 THEN 'Female'
              ELSE 'Other'
            END
           as `gender`, 
            CASE `civilstatus`
              WHEN 1 THEN 'Single'
              WHEN 2 THEN 'Married'
              WHEN 3 THEN 'Widowed'
              WHEN 4 THEN 'Separated'
              WHEN 5 THEN 'Annulled'
              ELSE 'Unknown'
            END
           as `civil_status`, `height`, `weight`, `nationality`, `contactnumber` as `primary_contact`, `homenumber` as `home_number`, `cpnumber1` as `contact_number_1`, `cpnumber2` as `contact_number_2`, `barangayid` as `barangay_id`, `barangayid2` as `barangay_id_2`, `addressdetails` as `address_1`, `addressdetails2` as `address_2`, `contactperson` as `contact_person`, `facebookacct` as `facebook_account`, `gsis`, `sss`, `philhealth`, `pagibig`, `tin`, `id1number` as `primary_id`, `id1dateissued` as `primary_issued_at`, `id1placeissued` as `primary_place_issued`, `id1type` as `primary_type`, `id2number` as `secondary_id`, `id2dateissued` as `secondary_issued_at`, `id2placeissued` as `secondary_place_issued`, `id2type` as `secondary_type`, `id2expiration` as `secondary_expired_at`, `fundname` as `fund_name`, `fundaddressdetails` as `fund_address`, `fundbarangayid` as `fund_barangay_id`, `fundposition` as `fund_position`, `fundoccupation` as `fund_occupation`, `fundcontact` as `fund_contact`, `fundyearstart` as `fund_year_start`, `fundgrossincome` as `fund_gross_income`, `mmlastname` as `mm_last_name`, `mmfirstname` as `mm_first_name`, `mmmiddlename` as `mm_middle_name`, `smsEnrolled` as `sms_enrolled`, `datecreated` as `created_at`, `dateedited` as `updated_at`, `riskprofile` as `risk_profile`, `viptag` as `vip_tag`, `dosri` as `dosri`, `rpt` as `rpt`, `pep` as `pep`, `fileCountSelfie` as `file_count_selfie`, `fileCountId` as `file_count_id`, `fileCountSignature` as `file_count_signature`, `fileCountAttachment` as `file_count_attachment`, `fileCountRiskProfiling` as `file_count_risk_profiling` from `general_clients`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `branches_view` AS (select `id` as `id`, `name` as `name`, `shortname` as `short_name`, `level` as `branch_level`, `parent` as `parent`, `systemdate` as `accounting_date`, `branchstatus` as `status`, `category_id` as `category_id` from `general_branches`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `budgets_view` AS (select `glcode` as `gl_code`, `gltype` as `gl_type`, `branchid` as `branch_id`, `costcenterid` as `cost_center_id`, `budgetYear` as `budget_year`, `budget1` as `budget_jan`, `budget2` as `budget_feb`, `budget3` as `budget_mar`, `budget4` as `budget_apr`, `budget5` as `budget_may`, `budget6` as `budget_jun`, `budget7` as `budget_jul`, `budget8` as `budget_aug`, `budget9` as `budget_sep`, `budget10` as `budget_oct`, `budget11` as `budget_nov`, `budget12` as `budget_dec` from `acctng_budget`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `deposit_balances_view` AS (select `savingsid`, `savingsid_previous_cbs`, `accountname`, `branchid`, `type`, `corpclientid`, `client1id`, `client2id`, `client3id`, `client4id`, `groupid`, `productid`, `productidOrig`, `opendate`, `tellerid`, `approverid`, `closedate`, `accountstatusprev`, `accountstatus`, `intcreditdate`, `previoustransdate`, `latesttransdate`, `previousbalance1`, `previousbalance2`, `currentbalance1`, `currentbalance2`, `grossinterest`, `netinterest`, `note1`, `note2`, `holdout`, `adb`, `is_wtax_exempt`, `is_frozen`, `linepassbook`, `printedpassbook`, `lineledger`, `printedledger`, `hash`, `postingtime`, `makerid`, `solicitorid`, `openAmount`, `from_mobile` from `savings_accounts`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `gl_accounts_view` AS (select `gl_code` as `code`, `frpcode` as `frp_code`, `gl_name` as `name`, `gl_type` as `type`, `gl_level` as `level`, `gl_parent` as `parent`, `gl_childcount` as `child_count`, `userlevel` as `user_level` from `acctng_glaccounts`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `gl_journals_view` AS (select `acctng_journals`.`journalid` as `id`, `acctng_journals`.`journal_date` as `journal_date`, `acctng_journals`.`journal_branch` as `journal_branch`, `acctng_journaldetails`.`gl_code` as `gl_code`, `acctng_glaccounts`.`gl_type` as `gl_type`, `acctng_glaccounts`.`gl_level` as `gl_level`, `acctng_glaccounts`.`gl_parent` as `gl_parent`, `acctng_glaccounts`.`frpcode` as `frp_code`, `acctng_glaccounts`.`gl_name` as `gl_name`, `acctng_journaldetails`.`journal_details_debit` as `debit`, `acctng_journaldetails`.`journal_details_credit` as `credit`, 
          CASE
            WHEN `acctng_glaccounts`.`gl_type` IN ('A', 'E')
              THEN COALESCE(`acctng_journaldetails`.`journal_details_debit`, 0) - COALESCE(`acctng_journaldetails`.`journal_details_credit`, 0)
            WHEN `acctng_glaccounts`.`gl_type` IN ('L', 'C', 'I')
              THEN COALESCE(`acctng_journaldetails`.`journal_details_credit`, 0) - COALESCE(`acctng_journaldetails`.`journal_details_debit`, 0)
            ELSE 0
          END
         as `net_movement` from `acctng_journals` inner join `acctng_journaldetails` on `acctng_journaldetails`.`journalid` = `acctng_journals`.`journalid` inner join `acctng_glaccounts` on `acctng_glaccounts`.`gl_code` = `acctng_journaldetails`.`gl_code`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `loan_collection_view` AS (select `lending_paymentsor`.`transdate` as `collection_date`, `lending_paymentsor`.`branchid` as `branch_id`, `lending_paymentsor`.`ornumber` as `or_number`, `lending_paymentsor`.`orstatus` as `or_status`, `lending_paymentsor`.`paymentmode` as `payment_mode`, `lending_paymentsor`.`oramount` as `total_amount`, `lending_payments`.`paymentid` as `payment_id`, `lending_payments`.`pnid` as `pn_id`, `lending_payments`.`loanbalance` as `balance_after`, `lending_paymentdetails`.`principalpmt` as `principal`, `lending_paymentdetails`.`interestpmt` as `interest`, `lending_paymentdetails`.`servicechargepmt` as `service_charge`, `lending_paymentdetails`.`savingspmt` as `savings`, `lending_paymentdetails`.`amort1pmt` as `amort_one`, `lending_paymentdetails`.`amort2pmt` as `amort_two`, `lending_paymentdetails`.`penaltypmt` as `penalty`, `lending_paymentdetails`.`pastdueinterestpmt` as `past_due_interest` from `lending_paymentsor` inner join `lending_payments` on `lending_payments`.`orid` = `lending_paymentsor`.`orid` inner join `lending_paymentdetails` on `lending_paymentdetails`.`paymentid` = `lending_payments`.`paymentid` where `lending_paymentsor`.`orstatus` in (1, 2));--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `loan_disbursements_view` AS (select `lending_loandetails`.`pnid` as `pn_id`, `lending_loandetails`.`branchid` as `branch_id`, `lending_loandetails`.`clientid` as `client_id`, `lending_loandetails`.`loanproductid` as `product_id`, `lending_loanproducts`.`name` as `product_name`, `lending_loandetails`.`amount` as `disbursed_amount`, `lending_loandetails`.`proceeds`, `lending_loandetails`.`proceedstype` as `proceeds_type`, `lending_loandetails`.`releasetag` as `release_tag`, `lending_loandetails`.`restructuredtag` as `restruct_tag`, `lending_loandetails`.`loanclassid` as `loan_class_id`, `lending_loandetails`.`loanofficerid` as `loan_officer_id`, `lending_loandetails`.`loancycle` as `loan_cycle` from `lending_loandetails` inner join `lending_loanproducts` on `lending_loanproducts`.`loanproductid` = `lending_loandetails`.`loanproductid` where `lending_loandetails`.`loanstatus` not in (10, 11, 12, 13, 14));--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `loan_portfolios_view` AS (select `lending_loandetails`.`pnid` as `pn_id`, `lending_loandetails`.`branchid` as `branch_id`, `lending_loandetails`.`clientid` as `client_id`, `lending_loanproducts`.`loanproductid` as `loan_product_id`, `lending_loanproducts`.`name` as `product_name`, `lending_loanproducts`.`type` as `type`, `lending_loanproducts`.`is_offbook` as `is_offbook`, `lending_loandetails`.`loanclassid` as `loan_class_id`, `lending_loanclassifications`.`name` as `loan_class_name`, `lending_loandetails`.`loanpurposeid` as `loan_purpose_id`, `lending_loandetails`.`industryid` as `industry_id`, `lending_loandetails`.`date` as `release_date`, `lending_loandetails`.`maturity` as `maturity_date`, `lending_loandetails`.`amount` as `original_amount`, `lending_loandetails`.`loanbalance` as `outstanding_balance`, `lending_loandetails`.`interestrate` as `interest_rate`, `lending_loandetails`.`interestcomputation` as `interest_computation`, `lending_loandetails`.`term` as `term`, `lending_loandetails`.`termunit` as `term_unit`, `lending_loandetails`.`loanstatus` as `status`, 
          CASE `lending_loandetails`.`loanstatus`
            WHEN 1  THEN 'Current'
            WHEN 2  THEN 'Past Due'
            WHEN 3  THEN 'Non-Performing'
            WHEN 4  THEN 'In Litigation'
            WHEN 5  THEN 'Paid'
            WHEN 6  THEN 'Written Off'
            WHEN 7  THEN 'ROPA'
            WHEN 10 THEN 'Applied'
            WHEN 11 THEN 'Approved'
            WHEN 12 THEN 'Withdrawn'
            WHEN 13 THEN 'Disapproved'
            WHEN 14 THEN 'Cancelled'
          END
         as `status_name`, `lending_loandetails`.`nextdatedue` as `upcoming_due`, `lending_loandetails`.`restructuredtag` as `restruct_tag`, `lending_loandetails`.`restructuredpnid` as `restruct_pn_id`, `lending_loandetails`.`restructuredCount` as `restruct_count`, `lending_loandetails`.`securityid` as `security_id`, `lending_loansecurities`.`isSecured` as `is_secured`, `lending_loansecurities`.`frp_securitytag` as `frp_security_tag`, `lending_loandetails`.`loanofficerid` as `loan_officer_id`, `lending_loandetails`.`loancycle` as `loan_cycle`, `lending_loandetails`.`savingsid` as `savings_id`, `lending_loandetails`.`releasetag` as `release_tag` from `lending_loandetails` inner join `lending_loanproducts` on `lending_loanproducts`.`loanproductid` = `lending_loandetails`.`loanproductid` inner join `lending_loanclassifications` on `lending_loanclassifications`.`loanclassid` = `lending_loandetails`.`loanclassid` left join `lending_loansecurities` on `lending_loansecurities`.`loansecurityid` = `lending_loandetails`.`securityid`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `time_deposit_placements_view` AS (select `placementid` as `placement_id`, `savingsid` as `savings_id`, `ssadate` as `placement_date`, `ssamaturity` as `maturity_date`, `ssaterm` as `term_days`, `amount`, `ssarate` as `interest_rate`, `renewaloption` as `renewal_option`, `date_terminated` as `date_terminated`, 
          CASE
            WHEN `date_terminated` = '0000-00-00' THEN 'active'
            ELSE 'Terminated'
          END
         as `placement_status`, 
          DATEDIFF(`ssamaturity`, CURDATE())
         as `days_to_maturity` from `savings_ssaplacementdetails`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `attendances_view` AS (select `employeeid` as `employee_id`, `date`, `in1` as `shift_in_1`, `out1` as `shift_out_1`, `in2` as `shift_in_2`, `out2` as `shift_out_2` from `hr_attendance`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `employees_view` AS (select `general_employees`.`id`, `general_employees`.`generatedid`, `general_employees`.`username`, 
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
         as `is_active`, `general_employees`.`sss`, `general_employees`.`philhealth`, `general_employees`.`pagibig`, `general_employees`.`tin`, `general_employees`.`clientid` as `client_id`, `general_employees`.`savingsid` as `savings_id`, `general_employees`.`savingsid2` as `savings_id_2`, `general_employees`.`npaid` as `linked_pn_id`, `general_employees`.`vlbalance` as `vacation_leave_balance`, `general_employees`.`slbalance` as `sick_leave_balance`, `general_employees`.`isactive` as `account_is_active`, `general_employees`.`activitylog` as `last_activity`, `general_employees`.`passwordchangedate` as `password_changed_at`, `general_employees`.`passworddefault` as `is_using_default_password` from `general_employees` left join `general_branches` on `general_branches`.`id` = `general_employees`.`branchid` left join `hr_positions` on `hr_positions`.`positionid` = `general_employees`.`positionid` left join `hr_ranks` on `hr_ranks`.`rankid` = `general_employees`.`rankid`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `auth_logs_view` AS (select `id`, `user`, `time`, `log` from `general_logs`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `messages_view` AS (select `id`, `postedby` as `posted_by`, `subject` as `subject`, `message` as `message`, `dateposted` as `posted_at`, `datebeg` as `begin_at`, `dateend` as `end_at` from `general_messages`);--> statement-breakpoint
CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `deposit_transactions_view` AS (select `savings_transactions`.`savingstransactionid` as `savings_transaction_id`, `savings_transactions`.`branchid` as `branch_id`, `savings_transactions`.`savingsid` as `savings_id`, `savings_transactions`.`transactiondate` as `transaction_date`, `savings_transactions`.`postingtime` as `posting_time`, `savings_transactions`.`transaction` as `transaction_code`, `savings_transactioncodes`.`name` as `transaction_name`, `savings_transactioncodes`.`multiplier` as `multiplier`, `savings_transactions`.`amount`, (`savings_transactions`.`amount` * `savings_transactioncodes`.`multiplier`) as `signed_amount`, `savings_transactions`.`grossinterest` as `gross_interest`, `savings_transactions`.`netinterest` as `net_interest`, `savings_transactions`.`reference`, `savings_transactions`.`checktype` as `check_type`, `savings_transactions`.`accountstatus` as `account_status`, `savings_transactions`.`postedbyid` as `posted_by_id` from `savings_transactions` inner join `savings_transactioncodes` on `savings_transactioncodes`.`transaction` = `savings_transactions`.`transaction`);