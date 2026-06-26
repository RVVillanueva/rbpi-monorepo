CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `journal_header_view` AS (select `acctng_journals`.`journalid` as `journal_id`, `acctng_journals`.`ibjournalid` as `ib_journal_id`, `acctng_journals`.`journal_date` as `journal_date`, `acctng_journals`.`journal_description` as `journal_description`, `acctng_journals`.`timestamp` as `posting_time`, `acctng_journals`.`journal_branch` as `branch_id`, `general_branches`.`name` as `branch_name`, `acctng_journals`.`user` as `maker_id`, 
          CONCAT(
            `general_employees`.`firstname`,
            CASE WHEN `general_employees`.`middlename` <> '' THEN CONCAT(' ', `general_employees`.`middlename`, ' ') ELSE '' END,
            `general_employees`.`lastname`,
            CASE WHEN `general_employees`.`suffixname` <> '' THEN CONCAT(' ', `general_employees`.`suffixname`) ELSE '' END
          )
         as `maker_full_name`, 
          (SELECT COUNT(*) FROM acctng_journaldetails d WHERE d.journalid = `acctng_journals`.`journalid`)
         as `line_count`, 
          (SELECT COALESCE(SUM(d.journal_details_debit), 0) FROM acctng_journaldetails d WHERE d.journalid = `acctng_journals`.`journalid`)
         as `total_debit`, 
          (SELECT COALESCE(SUM(d.journal_details_credit), 0) FROM acctng_journaldetails d WHERE d.journalid = `acctng_journals`.`journalid`)
         as `total_credit`, 
          (SELECT GROUP_CONCAT(DISTINCT g.gl_name ORDER BY g.gl_name SEPARATOR ', ')
           FROM acctng_journaldetails d
           JOIN acctng_glaccounts g ON g.gl_code = d.gl_code
           WHERE d.journalid = `acctng_journals`.`journalid`)
         as `affected_accounts`, 
          (SELECT GROUP_CONCAT(DISTINCT d.gl_code ORDER BY d.gl_code SEPARATOR ', ')
           FROM acctng_journaldetails d
           WHERE d.journalid = `acctng_journals`.`journalid`)
         as `affected_gl_codes`, 
          (SELECT COALESCE(SUM(d.journal_details_debit), 0) FROM acctng_journaldetails d WHERE d.journalid = `acctng_journals`.`journalid`)
         as `total_amount`, 
          (SELECT COALESCE(SUM(d.journal_details_debit), 0) = COALESCE(SUM(d.journal_details_credit), 0)
          FROM acctng_journaldetails d WHERE d.journalid = `acctng_journals`.`journalid`)
         as `is_balanced`, 
          CASE WHEN EXISTS (
            SELECT 1 FROM acctng_journal_trail t
            WHERE t.journalid = `acctng_journals`.`journalid`
            AND t.process = 'delete'
          ) THEN 'deleted' ELSE 'active' END
         as `status` from `acctng_journals` left join `general_branches` on `general_branches`.`id` = `acctng_journals`.`journal_branch` left join `general_employees` on `general_employees`.`id` = `acctng_journals`.`user`);