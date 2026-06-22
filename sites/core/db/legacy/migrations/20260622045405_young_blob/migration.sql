CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `journal_audit_view` AS (select `acctng_journals`.`journalid` as `journal_id`, `acctng_journals`.`ibjournalid` as `ib_journal_id`, `acctng_journals`.`journal_date` as `journal_date`, `acctng_journals`.`journal_description` as `journal_description`, `acctng_journals`.`timestamp` as `posting_time`, `acctng_journals`.`journal_branch` as `branch_id`, `general_branches`.`name` as `branch_name`, `acctng_journals`.`user` as `maker_id`, 
          CONCAT(
            `general_employees`.`firstname`,
            CASE WHEN `general_employees`.`middlename` <> '' THEN CONCAT(' ', `general_employees`.`middlename`, ' ') ELSE '' END,
            `general_employees`.`lastname`,
            CASE WHEN `general_employees`.`suffixname` <> '' THEN CONCAT(' ', `general_employees`.`suffixname`) ELSE '' END
          )
         as `maker_full_name`, `acctng_journaldetails`.`journal_details_id` as `journal_details_id`, `acctng_journaldetails`.`subsidiary` as `subsidiary`, `acctng_glaccounts`.`gl_type` as `gl_type`, `acctng_glaccounts`.`gl_level` as `gl_level`, `acctng_glaccounts`.`gl_parent` as `gl_parent`, `acctng_glaccounts`.`gl_name` as `gl_name`, `acctng_journaldetails`.`gl_code` as `gl_code`, `acctng_journaldetails`.`journal_details_debit` as `debit`, `acctng_journaldetails`.`journal_details_credit` as `credit`, 
          CASE
            WHEN `acctng_glaccounts`.`gl_type` IN ('A', 'E')
              THEN COALESCE(`acctng_journaldetails`.`journal_details_debit`, 0) - COALESCE(`acctng_journaldetails`.`journal_details_credit`, 0)
            WHEN `acctng_glaccounts`.`gl_type` IN ('L', 'C', 'I')
              THEN COALESCE(`acctng_journaldetails`.`journal_details_credit`, 0) - COALESCE(`acctng_journaldetails`.`journal_details_debit`, 0)
            ELSE 0
          END
         as `net_movement` from `acctng_journals` inner join `acctng_journaldetails` on `acctng_journaldetails`.`journalid` = `acctng_journals`.`journalid` inner join `acctng_glaccounts` on `acctng_glaccounts`.`gl_code` = `acctng_journaldetails`.`gl_code` inner join `general_branches` on `general_branches`.`id` = `acctng_journals`.`journal_branch` left join `general_employees` on `general_employees`.`id` = `acctng_journals`.`user`);