CREATE OR REPLACE ALGORITHM = undefined SQL SECURITY definer VIEW `interbranch_pairing_view` AS (select `acctng_journaldetails`.`journal_details_id` as `journal_details_id`, `acctng_journals`.`journalid` as `journal_id`, `acctng_journals`.`journal_branch` as `branch_id`, `general_branches`.`name` as `branch_name`, `acctng_journals`.`journal_description` as `journal_description`, `acctng_journaldetails`.`journal_details_debit` as `debit`, `acctng_journaldetails`.`journal_details_credit` as `credit`, `acctng_journaldetails`.`gl_code` as `gl_code`, `ib_match_details`.`journal_details_id` as `match_journal_details_id`, `ib_match_journal`.`journalid` as `match_journal_id`, `ib_match_journal`.`journal_branch` as `match_branch_id`, `ib_match_branch`.`name` as `match_branch_name`, `ib_match_journal`.`journal_description` as `match_description`, `ib_match_details`.`journal_details_debit` as `match_debit`, `ib_match_details`.`journal_details_credit` as `match_credit`, 
          CASE WHEN `ib_match_details`.`journal_details_id` IS NULL THEN 'pending' ELSE 'posted' END
         as `pair_status` from `acctng_journaldetails` inner join `acctng_journals` on `acctng_journals`.`journalid` = `acctng_journaldetails`.`journalid` inner join `general_branches` on `general_branches`.`id` = `acctng_journals`.`journal_branch` inner join `acctng_glaccounts` on `acctng_glaccounts`.`gl_code` = `acctng_journaldetails`.`gl_code` left join `acctng_journal_ibtracker` on `acctng_journal_ibtracker`.`journal_details_id` = `acctng_journaldetails`.`journal_details_id` left join `acctng_journaldetails` `ib_match_details` on `ib_match_details`.`journal_details_id` = `acctng_journal_ibtracker`.`ib_journal_details_id` left join `acctng_journals` `ib_match_journal` on `ib_match_journal`.`journalid` = `ib_match_details`.`journalid` left join `general_branches` `ib_match_branch` on `ib_match_branch`.`id` = `ib_match_journal`.`journal_branch` where `acctng_glaccounts`.`gl_parent` in (108000, 203000));--> statement-breakpoint
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
          CASE WHEN EXISTS (
            SELECT 1 FROM acctng_journal_trail t
            WHERE t.journalid = `acctng_journals`.`journalid`
            AND t.process = 'delete'
          ) THEN 'deleted' ELSE 'active' END
         as `status` from `acctng_journals` left join `general_branches` on `general_branches`.`id` = `acctng_journals`.`journal_branch` left join `general_employees` on `general_employees`.`id` = `acctng_journals`.`user`);