-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `acctng_branchcostcenters` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`costcenterid` smallint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_budget` (
	`budgetid` int(11) AUTO_INCREMENT NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`gltype` char(1) NOT NULL,
	`costcenterid` smallint(5) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`budgetYear` year(4) NOT NULL,
	`budget1` decimal(12,2) unsigned NOT NULL,
	`budget2` decimal(12,2) unsigned NOT NULL,
	`budget3` decimal(12,2) unsigned NOT NULL,
	`budget4` decimal(12,2) unsigned NOT NULL,
	`budget5` decimal(12,2) unsigned NOT NULL,
	`budget6` decimal(12,2) unsigned NOT NULL,
	`budget7` decimal(12,2) unsigned NOT NULL,
	`budget8` decimal(12,2) unsigned NOT NULL,
	`budget9` decimal(12,2) unsigned NOT NULL,
	`budget10` decimal(12,2) unsigned NOT NULL,
	`budget11` decimal(12,2) unsigned NOT NULL,
	`budget12` decimal(12,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_cost_center` (
	`id` smallint(5) unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`level` tinyint(3) unsigned NOT NULL,
	`parent` smallint(6) NOT NULL,
	`childcount` smallint(6) NOT NULL,
	`category_id` int(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_date` (
	`changeid` int(11) AUTO_INCREMENT NOT NULL,
	`current_acctngdate` date DEFAULT 'NULL',
	`proposed_acctngdate` date DEFAULT 'NULL',
	`branchid` mediumint(4) DEFAULT 'NULL',
	`makerid` mediumint(6) DEFAULT 'NULL',
	`approverid` mediumint(6) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `acctng_financialratios` (
	`finratio` char(50) NOT NULL,
	`finratio_name` varchar(100) NOT NULL,
	`formula` varchar(100) NOT NULL,
	`category` char(1) NOT NULL,
	`numerator` varchar(2000) NOT NULL,
	`denominator` varchar(2000) NOT NULL,
	`is_annualized` tinyint(1) unsigned NOT NULL,
	`benchmark` decimal(4,2) unsigned NOT NULL,
	`benchmark_date` date NOT NULL,
	`view_sequence` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_glaccounts` (
	`gl_code` int(9) unsigned NOT NULL,
	`frpcode` char(30) NOT NULL,
	`gl_name` char(100) NOT NULL,
	`gl_type` char(1) NOT NULL,
	`gl_level` tinyint(1) NOT NULL,
	`gl_parent` int(9) unsigned NOT NULL,
	`gl_childcount` smallint(2) NOT NULL,
	`userlevel` tinyint(2) NOT NULL,
	CONSTRAINT `gl_account_code` UNIQUE(`gl_code`)
);
--> statement-breakpoint
CREATE TABLE `acctng_journaldetails` (
	`journal_details_id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`journalid` int(11) unsigned NOT NULL,
	`gl_code` int(9) unsigned NOT NULL,
	`journal_details_debit` decimal(20,2) DEFAULT 'NULL',
	`journal_details_credit` decimal(20,2) DEFAULT 'NULL',
	`subsidiary` int(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_journals` (
	`journalid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`ibjournalid` int(11) unsigned NOT NULL,
	`journal_description` varchar(500) NOT NULL,
	`journal_date` date NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`journal_branch` smallint(4) unsigned NOT NULL,
	`user` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_journal_ibtracker` (
	`ib_journal_details_id` int(10) unsigned NOT NULL,
	`journal_details_id` int(10) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `acctng_journal_trail` (
	`trail_id` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`timestamp` datetime NOT NULL DEFAULT 'current_timestamp()',
	`acctng_date` date DEFAULT 'NULL',
	`process` varchar(7) NOT NULL,
	`branchid` smallint(4) DEFAULT 'NULL',
	`journalid` int(11) DEFAULT 'NULL',
	`ibjournalid` int(11) NOT NULL,
	`trail_before` varchar(10000) NOT NULL,
	`trail_after` varchar(10000) NOT NULL,
	`makerid` mediumint(4) DEFAULT 'NULL',
	`approverid` mediumint(4) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `amlc_transaction` (
	`amlcId` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transType` tinyint(3) unsigned NOT NULL,
	`dataType` tinyint(3) unsigned NOT NULL,
	`referenceType` tinyint(1) NOT NULL,
	`referenceId` varchar(30) NOT NULL,
	`description` varchar(75) NOT NULL,
	`transCode` char(12) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`amlcBranchid` char(11) NOT NULL,
	`transDate` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`transAmount` decimal(12,2) unsigned NOT NULL,
	`clientid1` bigint(10) unsigned NOT NULL,
	`clientid2` bigint(10) unsigned NOT NULL,
	`clientid3` bigint(10) unsigned NOT NULL,
	`clientid4` bigint(10) unsigned NOT NULL,
	`beneFlag` char(1) NOT NULL,
	`beneLastname` varchar(50) NOT NULL,
	`beneFirstname` varchar(50) NOT NULL,
	`beneMiddlename` varchar(50) NOT NULL,
	`beneAddress` varchar(100) NOT NULL,
	`beneBarangayid` mediumint(6) unsigned NOT NULL,
	`beneAccountNumber` varchar(25) NOT NULL,
	`beneBirthdate` date NOT NULL,
	`beneBirthPlace` varchar(50) NOT NULL,
	`beneNationality` smallint(4) unsigned NOT NULL,
	`beneIdType` varchar(5) NOT NULL,
	`beneIdNumber` varchar(20) NOT NULL,
	`beneTelephone` varchar(11) NOT NULL,
	`beneBusinessNature` char(25) NOT NULL,
	`makerid` smallint(6) unsigned NOT NULL,
	`status` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `amlc_transcode` (
	`amlcCodeId` mediumint(8) unsigned AUTO_INCREMENT NOT NULL,
	`code` varchar(10) NOT NULL,
	`description` varchar(150) NOT NULL,
	`submissionType` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `atm_api_logs` (
	`logid` int(11) AUTO_INCREMENT NOT NULL,
	`token` varchar(512) DEFAULT 'NULL',
	`code` varchar(10) DEFAULT 'NULL',
	`trace_number` varchar(45) DEFAULT 'NULL',
	`message` varchar(45) DEFAULT 'NULL',
	`account_number` varchar(45) DEFAULT 'NULL',
	`current_balance` float DEFAULT 'NULL',
	`available_balance` float DEFAULT 'NULL',
	`date` varchar(45) DEFAULT 'NULL',
	`time` varchar(45) DEFAULT 'NULL',
	`transaction_fee` float DEFAULT 'NULL',
	`origin` varchar(45) DEFAULT 'NULL',
	`amount` float DEFAULT 'NULL',
	`to_account_number` int(11) DEFAULT 'NULL',
	`type` varchar(45) DEFAULT 'NULL',
	`date_created` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`source_ip` varchar(45) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `atm_mobile_logs` (
	`logid` int(11) AUTO_INCREMENT NOT NULL,
	`token` varchar(512) DEFAULT 'NULL',
	`code` varchar(10) DEFAULT 'NULL',
	`trace_number` varchar(45) DEFAULT 'NULL',
	`message` varchar(45) DEFAULT 'NULL',
	`account_number` varchar(45) DEFAULT 'NULL',
	`current_balance` float DEFAULT 'NULL',
	`available_balance` float DEFAULT 'NULL',
	`date` varchar(45) DEFAULT 'NULL',
	`time` varchar(45) DEFAULT 'NULL',
	`transaction_fee` float DEFAULT 'NULL',
	`origin` varchar(45) DEFAULT 'NULL',
	`amount` float DEFAULT 'NULL',
	`to_account_number` int(11) DEFAULT 'NULL',
	`type` varchar(45) DEFAULT 'NULL',
	`date_created` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`source_ip` varchar(45) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `audit_details` (
	`auditid` int(10) unsigned NOT NULL,
	`detailsIndex` smallint(3) unsigned NOT NULL,
	`policyrefid` int(10) unsigned NOT NULL,
	`finding` text NOT NULL,
	`findingRisk` tinyint(1) unsigned NOT NULL,
	`demerit` tinyint(1) unsigned NOT NULL,
	`isRecurring` tinyint(1) unsigned NOT NULL,
	`noResponse` tinyint(1) NOT NULL,
	`response` text NOT NULL,
	`dateTarget` date NOT NULL,
	`compliance` tinyint(1) unsigned NOT NULL,
	`dateComplied` date NOT NULL,
	`comment` text NOT NULL,
	`detailStatus` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `audit_policyref` (
	`policyrefid` int(10) unsigned NOT NULL,
	`policyrefname` char(200) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`parent` int(10) unsigned NOT NULL,
	`childcount` smallint(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `audit_profile` (
	`auditid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`audittype` tinyint(4) NOT NULL,
	`officetype` tinyint(3) unsigned NOT NULL,
	`officeid` mediumint(6) unsigned NOT NULL,
	`dateCutoff` date NOT NULL,
	`dateFrom` date NOT NULL,
	`dateTo` date NOT NULL,
	`dateClose` date NOT NULL,
	`dateExit` date NOT NULL,
	`dateReply` date NOT NULL,
	`auditorid` mediumint(6) unsigned NOT NULL,
	`managerid` mediumint(6) unsigned NOT NULL,
	`manageraccess` tinyint(1) unsigned NOT NULL,
	`auditrating` decimal(4,2) unsigned NOT NULL,
	`riskClassification` tinyint(1) unsigned NOT NULL,
	`remarks` text NOT NULL,
	`auditstatus` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_autodebitaccount` (
	`savingsid` bigint(10) unsigned NOT NULL,
	`autodebitsavingsid` bigint(10) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_bookletdetails` (
	`checkbookletid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`dateRequest` date NOT NULL,
	`dateIssued` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`conduitbankid` smallint(3) unsigned NOT NULL,
	`checktype` tinyint(1) unsigned NOT NULL,
	`charging` tinyint(1) unsigned NOT NULL,
	`checknumberstart` bigint(12) NOT NULL,
	`checknumberend` bigint(12) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`savingstransactionid` bigint(20) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_checks_issued` (
	`check_issued_id` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`date_received` date NOT NULL,
	`source` tinyint(1) unsigned NOT NULL,
	`reference_id` bigint(12) unsigned NOT NULL,
	`check_number` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_conduitbank` (
	`conduitbankid` smallint(4) unsigned AUTO_INCREMENT NOT NULL,
	`bankid` mediumint(4) unsigned NOT NULL,
	`textfile_settings` varchar(25000) NOT NULL,
	`errorchecked` tinyint(1) NOT NULL,
	`status` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_inward1` (
	`inwardid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`conduitbankid` mediumint(3) unsigned NOT NULL,
	`item_count` mediumint(5) unsigned NOT NULL,
	`total_amount` decimal(12,2) unsigned NOT NULL,
	`textfile_md5` char(32) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_inward2` (
	`inwardid` int(10) unsigned NOT NULL,
	`checknumber` bigint(10) NOT NULL,
	`amount` decimal(14,2) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`checkstatus` smallint(3) unsigned NOT NULL,
	`savingstransactionid` bigint(12) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_inwardtemp1` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`conduitbankid` smallint(3) unsigned NOT NULL,
	`item_count` mediumint(5) unsigned NOT NULL,
	`total_amount` decimal(12,2) unsigned NOT NULL,
	`inwardChecked` tinyint(3) unsigned NOT NULL,
	`textfile_md5` char(32) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_inwardtemp2` (
	`inward_details_id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`tempid` int(10) unsigned NOT NULL,
	`checknumber` char(10) NOT NULL,
	`brstn` char(9) NOT NULL,
	`amount` decimal(14,2) unsigned NOT NULL,
	`amountToDebit` decimal(12,2) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`autoDetect` tinyint(1) unsigned NOT NULL,
	`checkstatus` smallint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_loanpayments` (
	`orid` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`date_paid` date NOT NULL,
	`check_number` varchar(20) NOT NULL,
	`status` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_outward` (
	`outward_id` int(11) AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`conduitbankid` tinyint(3) NOT NULL,
	`item_count` mediumint(6) NOT NULL,
	`total_amount` decimal(12,2) unsigned NOT NULL,
	`upload_data` varchar(50000) NOT NULL,
	`textfile_md5` char(32) NOT NULL,
	`makerid` varchar(6) NOT NULL,
	`approverid` varchar(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_request` (
	`requestid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`conduitbankid` smallint(3) unsigned NOT NULL,
	`checktype` tinyint(1) unsigned NOT NULL,
	`checkcount` smallint(2) unsigned NOT NULL,
	`checkissued` smallint(2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `checking_spo` (
	`spoid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`checknumber` int(10) unsigned NOT NULL,
	`conduitbankid` smallint(3) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`reason` varchar(100) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`spostatus` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collateral` (
	`collateralid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`collateraltype` int(11) NOT NULL,
	`lotClass1` char(100) NOT NULL,
	`lotClass2` char(100) NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`registeredOwner` char(200) NOT NULL,
	`collateralNumber` char(100) NOT NULL,
	`lotNo` char(100) NOT NULL,
	`landArea` char(100) NOT NULL,
	`collateralLocation` varchar(100) NOT NULL,
	`latitude` decimal(10,7) NOT NULL,
	`longitude` decimal(10,7) NOT NULL,
	`barangay` mediumint(6) NOT NULL,
	`action` smallint(6) NOT NULL,
	`collateralImage` varchar(100) NOT NULL,
	`spaImage` varchar(100) NOT NULL,
	`date` date NOT NULL,
	`map` int(11) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`plateNo` varchar(100) NOT NULL,
	`chassisNo` varchar(100) NOT NULL,
	`serialNo` varchar(100) NOT NULL,
	`brand` varchar(100) NOT NULL,
	`modelNo` varchar(100) NOT NULL,
	`chattelType` int(11) NOT NULL,
	`chattelClass` int(11) NOT NULL,
	`used` int(11) NOT NULL,
	`karat` decimal(12,2) NOT NULL,
	`carat` decimal(12,2) NOT NULL,
	`weight` decimal(12,2) NOT NULL,
	`weight2` decimal(12,2) NOT NULL,
	`description` varchar(250) NOT NULL,
	`insuranceDate` date NOT NULL,
	`taxpaymentDate` date NOT NULL,
	`renewalDate` date NOT NULL,
	`appraisalFrequency` int(11) NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collateral_appraisal` (
	`appraisalid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`collateralid` int(11) unsigned NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`appraisalDate` date NOT NULL,
	`appraisalValue` decimal(12,2) NOT NULL,
	`improvements` decimal(12,2) NOT NULL,
	`improvementsReport` varchar(250) NOT NULL,
	`pieces` int(11) NOT NULL,
	`appraisalReport` varchar(250) NOT NULL,
	`nextAppraisal` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collateral_appraisal_images` (
	`imageid` int(11) AUTO_INCREMENT NOT NULL,
	`appraisalid` int(11) unsigned NOT NULL,
	`imageName` char(100) NOT NULL,
	`imageCaption` char(250) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collateral_movements` (
	`receiverid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`collateralNumber` int(11) NOT NULL,
	`date` date NOT NULL,
	`transactionDetails` char(250) NOT NULL,
	`action` int(11) NOT NULL,
	`status` int(11) NOT NULL,
	`isReceived` smallint(2) NOT NULL,
	`receiver` varchar(100) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`previousbranchid` smallint(4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collateral_pndetails` (
	`clientid` bigint(10) NOT NULL,
	`pnid` bigint(12) NOT NULL,
	`collateralid` int(11) NOT NULL,
	`groupid` int(10) unsigned NOT NULL,
	`approved` tinyint(4) NOT NULL,
	`dateapproved` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `core_api_users` (
	`apiuserid` int(11) AUTO_INCREMENT NOT NULL,
	`username` varchar(45) NOT NULL,
	`user_salt` text NOT NULL,
	`user_key` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `eload_txnid` (
	`transid` int(11) unsigned AUTO_INCREMENT NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ffe_macaddress` (
	`ffeid` mediumint(6) unsigned NOT NULL,
	`macaddress` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `frp_loans` (
	`cutoffdate` date NOT NULL,
	`loanproductid` int(11) unsigned NOT NULL,
	`loanclassid` smallint(3) unsigned NOT NULL,
	`industryid` tinyint(3) unsigned NOT NULL,
	`securityid` mediumint(6) unsigned NOT NULL,
	`loanpurposeid` mediumint(6) unsigned NOT NULL,
	`termCat1` tinyint(1) unsigned NOT NULL,
	`termCat2` tinyint(1) unsigned NOT NULL,
	`nplBracket` varchar(1) NOT NULL,
	`loanstatus` tinyint(3) unsigned NOT NULL,
	`loanstatusprevious` tinyint(3) unsigned NOT NULL,
	`loanamount` decimal(16,2) unsigned NOT NULL,
	`loanbalance` decimal(16,2) unsigned NOT NULL,
	`provision` decimal(12,2) unsigned NOT NULL,
	`discountBalance` decimal(12,2) unsigned NOT NULL,
	`holdout` decimal(12,2) NOT NULL,
	`openingBalance` decimal(12,2) NOT NULL DEFAULT '0.00',
	`reclassifiedToNPL` decimal(12,2) NOT NULL,
	`collection` decimal(12,2) NOT NULL,
	`performingStatus` decimal(12,2) NOT NULL,
	`writeoff` decimal(12,2) NOT NULL,
	`closingBalance` decimal(12,2) NOT NULL DEFAULT '0.00'
);
--> statement-breakpoint
CREATE TABLE `frp_reports` (
	`id` smallint(2) AUTO_INCREMENT NOT NULL,
	`report_name` varchar(45) NOT NULL,
	`report_data` mediumtext DEFAULT 'NULL',
	`cutoffdate` date DEFAULT 'NULL',
	`isAvailable` tinyint(1) NOT NULL DEFAULT 0,
	`display_order` smallint(2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `frp_savings` (
	`cutoffdate` date NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`savingscategory` tinyint(1) unsigned NOT NULL,
	`currentbalance1` decimal(12,2) NOT NULL,
	`currentbalance2` decimal(12,2) NOT NULL,
	`accountstatus` tinyint(3) unsigned NOT NULL,
	`termDays` smallint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_activities` (
	`activity_id` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`makerid` int(11) NOT NULL,
	`activity_time` datetime NOT NULL DEFAULT 'current_timestamp()',
	`main_module` text NOT NULL,
	`sub_module` text NOT NULL,
	`activity_process` text NOT NULL,
	`activity_details` text NOT NULL,
	`subject_category` tinyint(1) NOT NULL,
	`subject_id` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_address` (
	`id` mediumint(6) AUTO_INCREMENT NOT NULL,
	`code` int(9) unsigned zerofill NOT NULL,
	`name` varchar(55) NOT NULL,
	`town` varchar(55) NOT NULL,
	`province` varchar(55) NOT NULL,
	`region` varchar(55) NOT NULL,
	`addresscomplete` varchar(200) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`parent` mediumint(6) unsigned NOT NULL,
	`level_psgc` char(1) NOT NULL,
	`code_parent` int(9) unsigned zerofill NOT NULL,
	`zipcode` varchar(4) NOT NULL,
	`isHighRisk` tinyint(4) DEFAULT 0,
	CONSTRAINT `code` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `general_address_old` (
	`id` mediumint(6) AUTO_INCREMENT NOT NULL,
	`code` int(9) unsigned zerofill NOT NULL,
	`name` varchar(55) NOT NULL,
	`town` varchar(55) NOT NULL,
	`province` varchar(55) NOT NULL,
	`region` varchar(55) NOT NULL,
	`addresscomplete` varchar(200) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`parent` mediumint(6) unsigned NOT NULL,
	`level_psgc` char(1) NOT NULL,
	`code_parent` int(9) unsigned zerofill NOT NULL,
	`zipcode` varchar(4) NOT NULL,
	CONSTRAINT `code` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `general_branchcoverage` (
	`branch` int(3) unsigned zerofill NOT NULL,
	`town` mediumint(8) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_branches` (
	`id` smallint(4) unsigned NOT NULL,
	`branchid2` char(8) NOT NULL,
	`bspcode` char(5) NOT NULL,
	`name` char(25) NOT NULL,
	`shortname` char(10) NOT NULL,
	`bir_branchcode` char(10) NOT NULL,
	`addressdetail` varchar(50) NOT NULL,
	`addressbarangay` mediumint(6) NOT NULL,
	`latitude` decimal(10,7) unsigned NOT NULL,
	`longitude` decimal(10,7) unsigned NOT NULL,
	`contactnumber` varchar(12) NOT NULL,
	`level` tinyint(4) NOT NULL,
	`parent` smallint(4) NOT NULL,
	`interbranch_parent` smallint(4) unsigned NOT NULL,
	`childcount` tinyint(4) NOT NULL,
	`branchhead` mediumint(6) unsigned NOT NULL,
	`checker` mediumint(6) unsigned NOT NULL,
	`cohlimit` decimal(10,2) NOT NULL,
	`systemdate` date NOT NULL,
	`branchstatus` tinyint(1) unsigned NOT NULL,
	`clearing_adjustment` tinyint(1) unsigned NOT NULL,
	`allowpostingonsaturdays` tinyint(3) unsigned NOT NULL,
	`allowpostingonsundays` tinyint(3) unsigned NOT NULL,
	`excludeddayposting` tinyint(3) unsigned DEFAULT 'NULL',
	`category_id` tinyint(1) NOT NULL,
	`amlccode` char(11) NOT NULL,
	`printorafterissuance` tinyint(1) unsigned NOT NULL,
	`branch_tin` char(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_checkcoordinate` (
	`checkid` int(11) AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(4) NOT NULL,
	`printer` char(15) NOT NULL,
	`bank` char(25) NOT NULL,
	`date_format` tinyint(1) unsigned NOT NULL,
	`margin_top` decimal(3,1) unsigned NOT NULL,
	`margin_left` decimal(3,1) unsigned NOT NULL,
	`checkdate_x` decimal(4,1) NOT NULL,
	`checkdate_y` decimal(4,1) NOT NULL,
	`payee_x` decimal(4,1) NOT NULL,
	`payee_y` decimal(4,1) NOT NULL,
	`wording_x` decimal(4,1) NOT NULL,
	`wording_y` decimal(4,1) NOT NULL,
	`figure_x` decimal(4,1) NOT NULL,
	`figure_y` decimal(4,1) NOT NULL,
	`purpose_x` decimal(4,1) NOT NULL,
	`purpose_y` decimal(4,1) NOT NULL,
	`crosscheck_x` decimal(4,1) NOT NULL,
	`crosscheck_y` decimal(4,1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientchange` (
	`changeid` int(11) AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`branch` varchar(100) NOT NULL,
	`firstname` varchar(100) NOT NULL,
	`middlename` varchar(100) NOT NULL,
	`lastname` varchar(100) NOT NULL,
	`birthdate` varchar(25) NOT NULL,
	`spouse` varchar(100) NOT NULL,
	`cpnumber1` char(25) NOT NULL,
	`cpnumber2` char(25) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientchangetemp` (
	`clientid` bigint(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`branch` mediumint(4) unsigned NOT NULL,
	`firstname` char(55) NOT NULL,
	`middlename` char(55) NOT NULL,
	`lastname` char(55) NOT NULL,
	`birthdate` date NOT NULL,
	`spouseid` bigint(10) unsigned NOT NULL,
	`cpnumber1` char(11) NOT NULL,
	`cpnumber2` char(11) NOT NULL,
	`onUpdateKYCLevelTo4` tinyint(1) NOT NULL DEFAULT 0,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clients` (
	`clientid` bigint(10) unsigned AUTO_INCREMENT NOT NULL,
	`clientid_previous_cbs` varchar(30) DEFAULT 'NULL',
	`clienttype` tinyint(3) unsigned NOT NULL,
	`orgtype` tinyint(1) unsigned NOT NULL,
	`firstname` char(50) NOT NULL,
	`middlename` char(50) NOT NULL,
	`lastname` char(125) NOT NULL,
	`suffixname` varchar(5) NOT NULL,
	`gender` tinyint(1) unsigned NOT NULL,
	`birthdate` date NOT NULL,
	`birthplace` varchar(50) NOT NULL,
	`civilstatus` tinyint(4) unsigned NOT NULL,
	`height` decimal(4,2) NOT NULL,
	`weight` decimal(4,2) NOT NULL,
	`nationality` smallint(3) unsigned NOT NULL,
	`cpnumber1` char(11) NOT NULL,
	`cpnumber2` char(11) NOT NULL,
	`homenumber` varchar(12) NOT NULL,
	`businessnumber` varchar(12) NOT NULL,
	`tin` varchar(15) NOT NULL,
	`pagibig` varchar(15) NOT NULL,
	`philhealth` varchar(15) NOT NULL,
	`sss` varchar(15) NOT NULL,
	`gsis` varchar(15) NOT NULL,
	`id1type` tinyint(1) NOT NULL,
	`id1number` varchar(30) NOT NULL,
	`id1dateissued` date DEFAULT 'NULL',
	`id1placeissued` varchar(250) DEFAULT 'NULL',
	`id2type` tinyint(1) NOT NULL,
	`id2number` varchar(30) NOT NULL,
	`id2dateissued` date DEFAULT 'NULL',
	`id2placeissued` varchar(250) DEFAULT 'NULL',
	`id2expiration` date NOT NULL,
	`addressdetails` varchar(50) NOT NULL,
	`barangayid` mediumint(5) unsigned NOT NULL,
	`addressdetails2` char(50) NOT NULL,
	`barangayid2` mediumint(5) unsigned NOT NULL,
	`emailaddress` char(50) NOT NULL,
	`facebookacct` char(50) NOT NULL,
	`contactperson` varchar(50) NOT NULL,
	`contactnumber` char(11) NOT NULL,
	`website` varchar(50) NOT NULL,
	`rep1_clientid` bigint(10) unsigned NOT NULL,
	`rep2_clientid` bigint(10) unsigned NOT NULL,
	`fundsource` tinyint(2) unsigned NOT NULL,
	`fundoccupation` tinyint(2) unsigned NOT NULL,
	`fundname` char(50) NOT NULL,
	`fundaddressdetails` char(50) NOT NULL,
	`fundbarangayid` mediumint(6) unsigned NOT NULL,
	`fundposition` char(20) NOT NULL,
	`fundcontact` char(12) NOT NULL,
	`fundyearstart` char(4) NOT NULL,
	`fundgrossincome` int(10) unsigned NOT NULL,
	`spouseid` int(10) NOT NULL,
	`mmlastname` char(50) NOT NULL,
	`mmfirstname` char(50) NOT NULL,
	`mmmiddlename` char(50) NOT NULL,
	`assetsizeid` mediumint(6) unsigned NOT NULL,
	`centerid` int(10) unsigned NOT NULL,
	`officeid` int(6) unsigned NOT NULL,
	`branch` smallint(4) unsigned NOT NULL,
	`datecreated` date NOT NULL DEFAULT '''0000-00-00''',
	`dateedited` date NOT NULL,
	`dateidissued` date NOT NULL,
	`riskprofile` tinyint(1) unsigned NOT NULL,
	`viptag` tinyint(1) unsigned NOT NULL,
	`dosri` tinyint(1) unsigned NOT NULL,
	`rpt` tinyint(1) unsigned NOT NULL,
	`pep` tinyint(1) unsigned NOT NULL,
	`smsEnrolled` tinyint(1) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`client_uuid` varchar(100) DEFAULT 'uuid()',
	`fileCountSelfie` tinyint(1) NOT NULL DEFAULT 0,
	`fileCountId` tinyint(1) NOT NULL DEFAULT 0,
	`fileCountSignature` tinyint(1) NOT NULL DEFAULT 0,
	`fileCountAttachment` tinyint(1) NOT NULL DEFAULT 0,
	`fileCountRiskProfiling` tinyint(1) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `general_clientsbeneficiary` (
	`clientid` bigint(10) unsigned NOT NULL,
	`beneficiaryid` bigint(10) unsigned NOT NULL,
	`relationship` tinyint(2) unsigned NOT NULL,
	`ordernumber` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientsfieldsrequired` (
	`variable` char(30) NOT NULL,
	`label` char(50) NOT NULL,
	`isrequired` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientsmerge` (
	`mergeid` int(11) AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`clientid1` bigint(10) unsigned NOT NULL,
	`clientname1` char(50) NOT NULL,
	`clientid2` bigint(10) unsigned NOT NULL,
	`clientname2` char(50) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientsmergetemp` (
	`mergetempid` int(11) AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`clientid1` bigint(10) unsigned NOT NULL,
	`clientid2` bigint(10) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientsrelatives` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`lastname` varchar(25) NOT NULL,
	`firstname` varchar(25) NOT NULL,
	`middlename` varchar(25) NOT NULL,
	`relation` tinyint(4) NOT NULL,
	`birthdate` date NOT NULL,
	`gender` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientsresignation` (
	`resignationTransId` int(10) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`resignationid` mediumint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clientssolicitor` (
	`pnid` bigint(12) unsigned NOT NULL,
	`solicitortype` tinyint(4) NOT NULL,
	`solicitorid` bigint(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_clients_riskprofiles` (
	`riskprofile_id` int(11) AUTO_INCREMENT NOT NULL,
	`riskprofile_timestamp` datetime NOT NULL DEFAULT 'current_timestamp()',
	`clientid` bigint(10) unsigned NOT NULL,
	`riskprofilemodel_id` int(11) NOT NULL,
	`riskprofile_details` varchar(5000) NOT NULL,
	`riskprofile_narration` varchar(500) NOT NULL,
	`riskprofile_category` varchar(7) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_commagencies` (
	`id` int(10) AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`shortname` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_communications` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`filename` varchar(155) NOT NULL,
	`type` tinyint(4) NOT NULL,
	`date` date NOT NULL,
	`agency` smallint(6) NOT NULL,
	`description` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_coordinatesetting` (
	`browser` tinyint(1) unsigned NOT NULL,
	`widthadjust` decimal(3,1) NOT NULL,
	`heightadjust` decimal(3,1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_criticalsettings` (
	`institutionid` smallint(4) unsigned NOT NULL,
	`institutionname` char(75) NOT NULL,
	`institutioncode` char(8) NOT NULL,
	`tin` varchar(15) NOT NULL,
	`branchlimit` binary(16) NOT NULL,
	`useloanclassification` tinyint(1) NOT NULL,
	`corporatebranchid` smallint(4) NOT NULL,
	`usesms` tinyint(1) NOT NULL,
	`amlaCode` char(18) NOT NULL,
	`cicCode` char(10) NOT NULL,
	`cocreeCode` varchar(10) DEFAULT 'NULL',
	`payrollkey` char(100) NOT NULL,
	`secretKey` char(100) NOT NULL,
	`logo` blob NOT NULL,
	`autorun_runtime` datetime NOT NULL,
	`pendingautorun` tinyint(1) unsigned NOT NULL,
	`smsRuntime` datetime NOT NULL,
	`versiondate` date NOT NULL,
	`versiondate_acctng` date NOT NULL,
	`rundate` date NOT NULL,
	`rundate2` date NOT NULL,
	`smsdate` date NOT NULL,
	`is_autodayend` tinyint(1) unsigned NOT NULL,
	`api_pass_comworks` varchar(50) NOT NULL,
	`autodayendtime` time NOT NULL,
	`purgeDate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_employeepassword` (
	`passwordhistoryid` int(11) AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`datechanged` date NOT NULL,
	`password` char(64) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_employees` (
	`id` mediumint(6) unsigned AUTO_INCREMENT NOT NULL,
	`firstname` char(25) NOT NULL,
	`middlename` char(25) NOT NULL,
	`lastname` char(25) NOT NULL,
	`suffixname` varchar(5) NOT NULL,
	`nickname` char(25) NOT NULL,
	`birthdate` date NOT NULL,
	`birthplace` varchar(55) NOT NULL,
	`nationality` smallint(3) unsigned NOT NULL,
	`gender` tinyint(3) unsigned NOT NULL,
	`civilstatus` tinyint(3) unsigned NOT NULL,
	`contactnumber1` char(11) NOT NULL,
	`contactnumber2` varchar(11) NOT NULL,
	`contactDefault` tinyint(1) unsigned NOT NULL,
	`address1` varchar(255) NOT NULL,
	`barangayid` mediumint(6) unsigned NOT NULL,
	`address2` varchar(255) NOT NULL,
	`barangayid2` mediumint(6) unsigned NOT NULL,
	`emergencycontactperson` char(55) NOT NULL,
	`emergencycontactnumber` char(11) NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`savingsid2` bigint(10) unsigned NOT NULL,
	`sss` char(15) NOT NULL,
	`philhealth` char(15) NOT NULL,
	`pagibig` char(15) NOT NULL,
	`tin` char(15) NOT NULL,
	`datehired` date NOT NULL,
	`dateregular` date NOT NULL,
	`npaid` int(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`employmentstatus` tinyint(1) NOT NULL,
	`payrollstatus` tinyint(1) unsigned NOT NULL,
	`rankid` smallint(2) unsigned NOT NULL,
	`positionid` tinyint(2) unsigned NOT NULL,
	`payrollAcct` char(75) NOT NULL,
	`payrollfrequency` tinyint(3) unsigned NOT NULL,
	`workdaysperyear` smallint(3) unsigned NOT NULL,
	`wagebasis` tinyint(1) unsigned NOT NULL,
	`basicsalary` binary(16) NOT NULL,
	`allowance1` binary(16) NOT NULL,
	`allowance2` binary(16) NOT NULL,
	`allowance3` binary(16) NOT NULL,
	`allowance4` binary(16) NOT NULL,
	`allowance5` binary(16) NOT NULL,
	`allowance6` binary(16) NOT NULL,
	`allowance7` binary(16) NOT NULL,
	`allowance8` binary(16) NOT NULL,
	`username` char(50) NOT NULL,
	`randomkey` char(32) NOT NULL,
	`password` char(64) NOT NULL,
	`attempts` smallint(2) unsigned NOT NULL,
	`userbranchid` smallint(4) unsigned NOT NULL,
	`isactive` tinyint(1) unsigned NOT NULL,
	`blockduetoleave` tinyint(1) unsigned NOT NULL,
	`passworddefault` tinyint(1) unsigned NOT NULL,
	`passwordchangedate` date NOT NULL,
	`activitylog` datetime NOT NULL,
	`vlbalance` decimal(5,2) NOT NULL,
	`slbalance` decimal(5,2) NOT NULL,
	`attendance_flexitime` tinyint(1) NOT NULL,
	`attendance_reporttime` time NOT NULL,
	`generatedid` varchar(100) NOT NULL,
	`fingerprint1` text NOT NULL,
	`fingerprint2` text NOT NULL,
	`fingerprint3` text NOT NULL,
	`image` blob NOT NULL,
	`imagesmall` blob NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_forumcomments` (
	`commentid` int(11) AUTO_INCREMENT NOT NULL,
	`threadid` int(11) unsigned NOT NULL,
	`comment` varchar(700) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `general_forumthreads` (
	`threadid` int(11) AUTO_INCREMENT NOT NULL,
	`thread` varchar(700) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`audienceid` mediumint(6) unsigned NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `general_holidays` (
	`date` date NOT NULL DEFAULT '''0000-00-00''',
	`year` char(4) NOT NULL,
	`holidayname` char(50) NOT NULL,
	`type` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_holidaysfixed` (
	`date` char(5) NOT NULL,
	`holidayname` char(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_icon` (
	`name` char(25) NOT NULL,
	`image` blob NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_ipmonitor` (
	`ipid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`ipaddress` char(15) NOT NULL,
	`location` char(100) NOT NULL,
	`isCritical` tinyint(1) unsigned NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`lastStatus` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_logs` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user` mediumint(6) unsigned NOT NULL,
	`time` datetime NOT NULL,
	`log` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_messages` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`postedby` mediumint(6) unsigned NOT NULL,
	`subject` char(50) NOT NULL,
	`message` varchar(2000) NOT NULL,
	`dateposted` date NOT NULL,
	`datebeg` date NOT NULL,
	`dateend` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_monthend` (
	`transactiondate` date NOT NULL,
	`transactiontime` datetime NOT NULL,
	`approver1` mediumint(6) unsigned NOT NULL,
	`approver2` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_nationality` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`nationality_code` int(11) NOT NULL,
	`nationality_name` varchar(150) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_relations` (
	`relationid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`relationname` char(30) NOT NULL,
	`categoryid` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_riskprofile` (
	`riskprofilemodel_id` int(11) AUTO_INCREMENT NOT NULL,
	`riskprofilemodel_details` varchar(12000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_settings` (
	`name` char(40) NOT NULL,
	`value` char(100) NOT NULL,
	`description` char(175) NOT NULL,
	`category` char(25) NOT NULL,
	`type` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_settingsidentification` (
	`id` mediumint(9) AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`id_cbs` mediumint(9) NOT NULL,
	`id_cic` mediumint(9) NOT NULL,
	`is_cic_identification` tinyint(1) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `general_settingslog` (
	`logid` int(11) AUTO_INCREMENT NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`category` char(25) NOT NULL,
	`name` char(40) NOT NULL,
	`value_old` char(50) NOT NULL,
	`value_new` char(50) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_systemdate` (
	`systemdateid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`dateclosed` date NOT NULL,
	`datetimeclosed` datetime NOT NULL,
	`loansapproverid` mediumint(6) unsigned NOT NULL,
	`savingsapproverid` mediumint(6) unsigned NOT NULL,
	`managerapproverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_systemdate_temp` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`dateclosed` date NOT NULL,
	`datetimeclosed` datetime NOT NULL,
	`balance_coci` decimal(12,2) unsigned NOT NULL,
	`balance_coh` decimal(12,2) unsigned NOT NULL,
	`loansapproverid` mediumint(6) unsigned NOT NULL,
	`savingsapproverid` mediumint(6) unsigned NOT NULL,
	`managerapproverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `general_update` (
	`updateid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`versiondate` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`updates` varchar(500) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_attendance` (
	`date` date NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`in1` time NOT NULL,
	`out1` time NOT NULL,
	`in2` time NOT NULL,
	`out2` time NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_cutoffpayroll` (
	`weeklycutoff` tinyint(3) unsigned NOT NULL,
	`semimonthlycutoff` tinyint(3) NOT NULL,
	`monthlycutoff` tinyint(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_dagroupsanctions` (
	`offenseGroup` tinyint(1) unsigned NOT NULL,
	`sanction1` tinyint(1) unsigned NOT NULL,
	`suspensionDays1` tinyint(1) unsigned NOT NULL,
	`sanction2` tinyint(1) unsigned NOT NULL,
	`suspensionDays2` tinyint(1) unsigned NOT NULL,
	`sanction3` tinyint(1) unsigned NOT NULL,
	`suspensionDays3` tinyint(1) unsigned NOT NULL,
	`sanction4` tinyint(1) unsigned NOT NULL,
	`suspensionDays4` tinyint(1) unsigned NOT NULL,
	`sanction5` tinyint(1) unsigned NOT NULL,
	`suspensionDays5` tinyint(1) unsigned NOT NULL,
	`sanction6` tinyint(1) unsigned NOT NULL,
	`suspensionDays6` tinyint(1) unsigned NOT NULL,
	CONSTRAINT `offenseGroup` UNIQUE(`offenseGroup`)
);
--> statement-breakpoint
CREATE TABLE `hr_daoffenses` (
	`offenseid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`offensename` char(100) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` int(10) NOT NULL,
	`childcount` smallint(3) NOT NULL,
	`offensegroup` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_das` (
	`daid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`offenseid` smallint(5) unsigned NOT NULL,
	`language` tinyint(1) unsigned NOT NULL,
	`offenseDetail` varchar(3000) NOT NULL,
	`instance` tinyint(2) unsigned NOT NULL,
	`offenseReply` varchar(3000) NOT NULL,
	`offenseDecision` varchar(3000) NOT NULL,
	`sanction` smallint(5) unsigned NOT NULL,
	`sanctionSuspensionDays` smallint(3) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`hrApproverid` mediumint(6) unsigned NOT NULL,
	`dateIssue` date NOT NULL,
	`dateReply` date NOT NULL,
	`dateResolve` date NOT NULL,
	`dateImplement` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_deductionlist` (
	`deductionid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`deductiontypeid` int(10) unsigned NOT NULL,
	`loandate` date NOT NULL,
	`startdate` date NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`interest` decimal(12,2) unsigned NOT NULL,
	`amortization` decimal(12,2) unsigned NOT NULL,
	`amorts` smallint(3) unsigned NOT NULL,
	`paidamorts` decimal(4,1) unsigned NOT NULL,
	`balance` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_deductiontype` (
	`deductiontypeid` int(10) unsigned NOT NULL,
	`deductiontypename` char(50) NOT NULL,
	`agency` tinyint(2) NOT NULL,
	`amortfrequency` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_departments` (
	`departmentid` smallint(3) unsigned NOT NULL,
	`departmentname` char(55) NOT NULL,
	`level` tinyint(2) unsigned NOT NULL,
	`parent` int(11) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_employeesavings` (
	`bracket` int(11) NOT NULL,
	`deductionfix` decimal(8,2) unsigned NOT NULL,
	`deductionpercent` decimal(4,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_appraisal` (
	`appraisalid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`evaluationyear` year(4) NOT NULL,
	`evaluationmonth` tinyint(2) unsigned NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`position` char(50) NOT NULL,
	`department` char(50) NOT NULL,
	`weight_oplan` decimal(5,2) unsigned NOT NULL,
	`weight_competency` decimal(5,2) unsigned NOT NULL,
	`weight_essential` decimal(5,2) unsigned NOT NULL,
	`rating_oplan` decimal(5,2) unsigned NOT NULL,
	`rating_competency` decimal(5,2) unsigned NOT NULL,
	`rating_essential` decimal(5,2) unsigned NOT NULL,
	`appraisal` text NOT NULL,
	`rating_final` decimal(6,3) unsigned NOT NULL,
	`rating_final_computed` decimal(5,2) NOT NULL,
	`comment_appraiser` varchar(1000) NOT NULL,
	`comment_appraisee` varchar(1000) NOT NULL,
	`commitment` varchar(1000) NOT NULL,
	`appraiser` mediumint(6) unsigned NOT NULL,
	`image` blob NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `hr_eval_competency` (
	`competencyid` int(10) unsigned NOT NULL,
	`competencyid_new` varchar(4) NOT NULL,
	`competencyname` char(200) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`parent` int(10) unsigned NOT NULL,
	`childcount` smallint(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_competencyposition` (
	`positionid` mediumint(4) unsigned NOT NULL,
	`competencyid` mediumint(6) unsigned NOT NULL,
	`competencyid_new` varchar(4) NOT NULL,
	`competencyweight` decimal(5,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_competencytarget` (
	`competencytargetid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`evaluationyear` year(4) NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`categoryid` int(10) unsigned NOT NULL,
	`competencyid` int(10) unsigned NOT NULL,
	`competencyid_new` varchar(4) NOT NULL,
	`category` varchar(200) NOT NULL,
	`competency` varchar(200) NOT NULL,
	`competencyweight` decimal(5,2) unsigned NOT NULL,
	`p1` decimal(12,0) unsigned NOT NULL,
	`p2` decimal(12,0) unsigned NOT NULL,
	`p3` decimal(12,0) unsigned NOT NULL,
	`p4` decimal(12,0) unsigned NOT NULL,
	`p5` decimal(12,0) unsigned NOT NULL,
	`p6` decimal(12,0) unsigned NOT NULL,
	`p7` decimal(12,0) unsigned NOT NULL,
	`p8` decimal(12,0) unsigned NOT NULL,
	`p9` decimal(12,0) unsigned NOT NULL,
	`p10` decimal(12,0) unsigned NOT NULL,
	`p11` decimal(12,0) unsigned NOT NULL,
	`p12` decimal(12,0) unsigned NOT NULL,
	`rating1` decimal(5,2) unsigned NOT NULL,
	`rating2` decimal(5,2) unsigned NOT NULL,
	`rating3` decimal(5,2) unsigned NOT NULL,
	`rating4` decimal(5,2) unsigned NOT NULL,
	`rating5` decimal(5,2) unsigned NOT NULL,
	`rating6` decimal(5,2) unsigned NOT NULL,
	`rating7` decimal(5,2) unsigned NOT NULL,
	`rating8` decimal(5,2) unsigned NOT NULL,
	`rating9` decimal(5,2) unsigned NOT NULL,
	`rating10` decimal(5,2) unsigned NOT NULL,
	`rating11` decimal(5,2) unsigned NOT NULL,
	`rating12` decimal(5,2) unsigned NOT NULL,
	CONSTRAINT `targetid` UNIQUE(`competencytargetid`)
);
--> statement-breakpoint
CREATE TABLE `hr_eval_essential` (
	`essentialid` int(10) unsigned NOT NULL,
	`essentialname` char(200) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`parent` int(10) unsigned NOT NULL,
	`childcount` smallint(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_groupweight` (
	`positionid` mediumint(4) NOT NULL,
	`groupweight_oplan` decimal(5,2) unsigned NOT NULL,
	`groupweight_competency` decimal(5,2) unsigned NOT NULL,
	`groupweight_essential` decimal(5,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_oplan` (
	`oplanid` mediumint(6) unsigned NOT NULL,
	`oplanid_new` varchar(6) NOT NULL,
	`name` char(200) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`parent` mediumint(6) unsigned NOT NULL,
	`childcount` smallint(6) NOT NULL,
	`unitid` smallint(4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_oplanposition` (
	`positionid` mediumint(4) NOT NULL,
	`oplanid` mediumint(6) unsigned NOT NULL,
	`piid` varchar(6) NOT NULL,
	`oplanweight` decimal(5,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_oplantarget` (
	`oplantargetid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`evaluationyear` year(4) NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`positionid` mediumint(4) unsigned NOT NULL,
	`kraid` mediumint(6) unsigned NOT NULL,
	`kra` char(200) NOT NULL,
	`pi` char(200) NOT NULL,
	`unitname` char(25) NOT NULL,
	`vartype` tinyint(1) unsigned NOT NULL,
	`oplanweight` decimal(6,3) unsigned NOT NULL,
	`oplanid` mediumint(6) unsigned NOT NULL,
	`oplanid_new` varchar(6) NOT NULL,
	`t1` decimal(12,0) unsigned NOT NULL,
	`t2` decimal(12,0) unsigned NOT NULL,
	`t3` decimal(12,2) unsigned NOT NULL,
	`t4` decimal(12,0) unsigned NOT NULL,
	`t5` decimal(12,0) unsigned NOT NULL,
	`t6` decimal(12,2) unsigned NOT NULL,
	`t7` decimal(12,0) unsigned NOT NULL,
	`t8` decimal(12,0) unsigned NOT NULL,
	`t9` decimal(12,2) unsigned NOT NULL,
	`t10` decimal(12,0) unsigned NOT NULL,
	`t11` decimal(12,0) unsigned NOT NULL,
	`t12` decimal(12,2) unsigned NOT NULL,
	`p1` decimal(12,0) unsigned NOT NULL,
	`p2` decimal(12,0) unsigned NOT NULL,
	`p3` decimal(12,0) unsigned NOT NULL,
	`p4` decimal(12,0) unsigned NOT NULL,
	`p5` decimal(12,0) unsigned NOT NULL,
	`p6` decimal(12,0) unsigned NOT NULL,
	`p7` decimal(12,0) unsigned NOT NULL,
	`p8` decimal(12,0) unsigned NOT NULL,
	`p9` decimal(12,0) unsigned NOT NULL,
	`p10` decimal(12,0) unsigned NOT NULL,
	`p11` decimal(12,0) unsigned NOT NULL,
	`p12` decimal(12,0) unsigned NOT NULL,
	CONSTRAINT `oplantargetid` UNIQUE(`oplantargetid`)
);
--> statement-breakpoint
CREATE TABLE `hr_eval_oplanunit` (
	`unitid` smallint(3) unsigned NOT NULL,
	`unitname` char(25) NOT NULL,
	`vartype` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_performancematrix` (
	`id` int(11) NOT NULL,
	`description` char(100) NOT NULL,
	`lower` decimal(4,2) NOT NULL,
	`upper` decimal(5,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_setting` (
	`editlock` tinyint(1) unsigned NOT NULL,
	`appraisallock` tinyint(1) unsigned NOT NULL,
	`evaluationyear` year(4) NOT NULL,
	`evaluationmonth` tinyint(2) unsigned NOT NULL,
	`groupweight_oplan` decimal(5,2) unsigned NOT NULL,
	`groupweight_competency` decimal(5,2) unsigned NOT NULL,
	`groupweight_essential` decimal(5,2) unsigned NOT NULL,
	`competencyratingcount` tinyint(1) unsigned NOT NULL,
	`competencyratingweight1` smallint(3) unsigned NOT NULL,
	`competencyratingweight2` smallint(3) unsigned NOT NULL,
	`competencyratingweight3` smallint(3) unsigned NOT NULL,
	`competencyratingweight4` smallint(3) unsigned NOT NULL,
	`competencyratingweight5` smallint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_settings` (
	`eval_settingsid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`evaluationyear` smallint(4) NOT NULL,
	`evaluationmonth` tinyint(2) NOT NULL,
	`is_active` tinyint(1) NOT NULL,
	`lock_settings` tinyint(1) NOT NULL,
	`lock_appraisal` tinyint(1) NOT NULL,
	`oplan_template` text NOT NULL,
	`competency_template` text NOT NULL,
	`positions` text NOT NULL,
	`weights` text NOT NULL,
	`performance_matrix` text NOT NULL,
	`conversion` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_eval_target` (
	`targetid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`evaluationyear` year(4) NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`piid` mediumint(6) unsigned NOT NULL,
	`t1` decimal(12,0) unsigned NOT NULL,
	`t2` decimal(12,0) unsigned NOT NULL,
	`t3` decimal(12,0) unsigned NOT NULL,
	`t4` decimal(12,0) unsigned NOT NULL,
	`t5` decimal(12,0) unsigned NOT NULL,
	`t6` decimal(12,0) unsigned NOT NULL,
	`t7` decimal(12,0) unsigned NOT NULL,
	`t8` decimal(12,0) unsigned NOT NULL,
	`t9` decimal(12,0) unsigned NOT NULL,
	`t10` decimal(12,0) unsigned NOT NULL,
	`t11` decimal(12,0) unsigned NOT NULL,
	`t12` decimal(12,0) unsigned NOT NULL,
	`p1` decimal(12,0) unsigned NOT NULL,
	`p2` decimal(12,0) unsigned NOT NULL,
	`p3` decimal(12,0) unsigned NOT NULL,
	`p4` decimal(12,0) unsigned NOT NULL,
	`p5` decimal(12,0) unsigned NOT NULL,
	`p6` decimal(12,0) unsigned NOT NULL,
	`p7` decimal(12,0) unsigned NOT NULL,
	`p8` decimal(12,0) unsigned NOT NULL,
	`p9` decimal(12,0) unsigned NOT NULL,
	`p10` decimal(12,0) unsigned NOT NULL,
	`p11` decimal(12,0) unsigned NOT NULL,
	`p12` decimal(12,0) unsigned NOT NULL,
	CONSTRAINT `targetid` UNIQUE(`targetid`)
);
--> statement-breakpoint
CREATE TABLE `hr_leavecreditstemp` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`vlcredits` decimal(5,2) NOT NULL,
	`vlcheck` tinyint(1) NOT NULL,
	`slcredits` decimal(5,2) NOT NULL,
	`slcheck` tinyint(1) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_leavesl` (
	`slid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`datefiled` date NOT NULL,
	`dateapproved` date NOT NULL,
	`slcredit` decimal(5,2) unsigned NOT NULL,
	`sldebit` decimal(5,2) unsigned NOT NULL,
	`slbalance` decimal(5,2) unsigned NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`approver2id` mediumint(6) unsigned NOT NULL,
	`purpose` char(50) NOT NULL,
	`units` tinyint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_leavesldetail` (
	`slid` int(11) unsigned NOT NULL,
	`leavedate` date NOT NULL,
	`availed` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_leavetemp` (
	`leavetempid` int(11) AUTO_INCREMENT NOT NULL,
	`leavetype` tinyint(1) unsigned NOT NULL,
	`datefiled` date NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`datestart` date NOT NULL,
	`dateend` date NOT NULL,
	`leavedays` tinyint(3) unsigned NOT NULL,
	`purpose` char(50) NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`approver1ok` tinyint(1) unsigned NOT NULL,
	`approver2id` mediumint(6) unsigned NOT NULL,
	`units` tinyint(4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_leavevl` (
	`vlid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`datefiled` date NOT NULL,
	`dateapproved` date NOT NULL,
	`vlcredit` decimal(5,2) unsigned NOT NULL,
	`vldebit` decimal(5,2) unsigned NOT NULL,
	`vlbalance` decimal(5,2) unsigned NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`approver2id` mediumint(6) unsigned NOT NULL,
	`purpose` char(50) NOT NULL,
	`units` tinyint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_leavevldetail` (
	`vlid` int(11) unsigned NOT NULL,
	`leavedate` date NOT NULL,
	`availed` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_npa` (
	`npaid` int(11) AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`employeeid` int(11) NOT NULL,
	`effectivitydate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`employmentstatus` tinyint(4) NOT NULL,
	`payrollstatus` tinyint(1) NOT NULL,
	`rankid` smallint(4) NOT NULL,
	`positionid` mediumint(4) unsigned NOT NULL,
	`payrollfrequency` tinyint(3) unsigned NOT NULL,
	`workdaysperyear` smallint(3) unsigned NOT NULL,
	`wagebasis` tinyint(1) unsigned NOT NULL,
	`basicsalary` binary(16) NOT NULL,
	`allowance1` binary(16) NOT NULL,
	`allowance2` binary(16) NOT NULL,
	`allowance3` binary(16) NOT NULL,
	`allowance4` binary(16) NOT NULL,
	`allowance5` binary(16) NOT NULL,
	`allowance6` binary(16) NOT NULL,
	`allowance7` binary(16) NOT NULL,
	`allowance8` binary(16) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_npatemp` (
	`transdate` date NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`effectivitydate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`employmentstatus` tinyint(4) NOT NULL,
	`payrollstatus` tinyint(1) NOT NULL,
	`rankid` smallint(4) NOT NULL,
	`positionid` mediumint(4) unsigned NOT NULL,
	`payrollfrequency` tinyint(3) unsigned NOT NULL,
	`workdaysperyear` smallint(3) unsigned NOT NULL,
	`wagebasis` tinyint(1) unsigned NOT NULL,
	`basicsalary` binary(16) NOT NULL,
	`allowance1` binary(16) NOT NULL,
	`allowance2` binary(16) NOT NULL,
	`allowance3` binary(16) NOT NULL,
	`allowance4` binary(16) NOT NULL,
	`allowance5` binary(16) NOT NULL,
	`allowance6` binary(16) NOT NULL,
	`allowance7` binary(16) NOT NULL,
	`allowance8` binary(16) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_ob_seminar` (
	`ob_seminar_id` int(10) AUTO_INCREMENT NOT NULL,
	`ob_seminar_type` int(3) NOT NULL,
	`ob_seminar_unit` tinyint(1) NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`ob_seminar_info` text NOT NULL,
	`startdate` date NOT NULL,
	`enddate` date NOT NULL,
	`postedby` mediumint(6) unsigned NOT NULL,
	`remarks` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_overtimepremium` (
	`holidaytype` tinyint(3) unsigned NOT NULL,
	`firsteight` decimal(4,2) unsigned NOT NULL,
	`excesseight` decimal(4,2) unsigned NOT NULL,
	`nightdiff` decimal(4,2) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_pagibig` (
	`lower` decimal(12,2) unsigned NOT NULL,
	`upper` decimal(12,2) unsigned NOT NULL,
	`rate_er` decimal(5,2) unsigned NOT NULL,
	`rate_ee` decimal(5,2) unsigned NOT NULL,
	`amount_er` decimal(12,2) unsigned NOT NULL,
	`amount_ee` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_payrolldata1` (
	`payrollid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`payrolldate` date NOT NULL,
	`payrollfrequency` smallint(5) unsigned NOT NULL,
	`workdaysofperiod` tinyint(2) NOT NULL,
	`cutoffdate1` date NOT NULL,
	`cutoffdate2` date NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_payrolldata2` (
	`payrollid` int(10) unsigned NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`costcenterid` mediumint(4) unsigned NOT NULL,
	`payrollstatus` tinyint(1) NOT NULL,
	`workdaysperyear` smallint(3) unsigned NOT NULL,
	`wagebasis` tinyint(1) unsigned NOT NULL,
	`rateperpay` binary(16) NOT NULL,
	`ratepermonth` binary(16) NOT NULL,
	`rateperday` binary(16) NOT NULL,
	`rateperhour` binary(16) NOT NULL,
	`basicsalary` binary(16) NOT NULL,
	`allowance1` binary(16) NOT NULL,
	`allowance2` binary(16) NOT NULL,
	`allowance3` binary(16) NOT NULL,
	`allowance4` binary(16) NOT NULL,
	`allowance5` binary(16) NOT NULL,
	`allowance6` binary(16) NOT NULL,
	`allowance7` binary(16) NOT NULL,
	`allowance8` binary(16) NOT NULL,
	`incentive` binary(16) NOT NULL,
	`relocation` binary(16) NOT NULL,
	`bonus` binary(16) NOT NULL,
	`month13` binary(16) NOT NULL,
	`leaveencashment` binary(16) NOT NULL,
	`otherincome1` binary(16) NOT NULL,
	`otherincome2` binary(16) NOT NULL,
	`otherincome3` binary(16) NOT NULL,
	`rdotpay` binary(16) NOT NULL,
	`rhotpay` binary(16) NOT NULL,
	`shotpay` binary(16) NOT NULL,
	`absences` binary(16) NOT NULL,
	`lates` binary(16) NOT NULL,
	`ardeduction` binary(16) NOT NULL,
	`otherdeduction1` binary(16) NOT NULL,
	`otherdeduction2` binary(16) NOT NULL,
	`otherdeduction3` binary(16) NOT NULL,
	`sss_ss_er` binary(16) NOT NULL,
	`sss_ss_ee` binary(16) NOT NULL,
	`sss_ec_er` binary(16) NOT NULL,
	`sss_pf_er` binary(16) NOT NULL,
	`sss_pf_ee` binary(16) NOT NULL,
	`ph_er` binary(16) NOT NULL,
	`ph_ee` binary(16) NOT NULL,
	`pagibig_er` binary(16) NOT NULL,
	`pagibig_ee` binary(16) NOT NULL,
	`wtax` binary(16) NOT NULL,
	`netpay` binary(16) NOT NULL,
	`odexcess8` decimal(5,2) unsigned NOT NULL,
	`odnightdiff` decimal(5,2) unsigned NOT NULL,
	`rhfirst8` decimal(5,2) unsigned NOT NULL,
	`rhexcess8` decimal(5,2) unsigned NOT NULL,
	`rhnightdiff` decimal(5,2) unsigned NOT NULL,
	`shfirst8` decimal(5,2) unsigned NOT NULL,
	`shexcess8` decimal(5,2) unsigned NOT NULL,
	`shnightdiff` decimal(5,2) unsigned NOT NULL,
	`daysabsent` decimal(5,2) unsigned NOT NULL,
	`hourslate` decimal(5,2) unsigned NOT NULL,
	`hoursundertime` decimal(5,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_payrolldata3` (
	`payrollid` int(10) unsigned NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`deductiontypeid` smallint(3) unsigned NOT NULL,
	`referenceid` bigint(15) unsigned NOT NULL,
	`remarks` char(50) NOT NULL,
	`amortization` char(50) NOT NULL,
	`balance` char(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_payrolltemp1` (
	`payrolldate` date NOT NULL,
	`payrollfrequency` tinyint(3) unsigned NOT NULL,
	`workdaysofperiod` tinyint(2) NOT NULL,
	`cutoffdate1` date NOT NULL,
	`cutoffdate2` date NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`ornumber` char(20) NOT NULL,
	`id2` char(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_payrolltemp2` (
	`payrollid` int(11) AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`odexcess8` decimal(8,2) unsigned NOT NULL,
	`odnightdiff` decimal(8,2) unsigned NOT NULL,
	`rhfirst8` decimal(8,2) unsigned NOT NULL,
	`rhexcess8` decimal(8,2) unsigned NOT NULL,
	`rhnightdiff` decimal(8,2) unsigned NOT NULL,
	`shfirst8` decimal(8,2) unsigned NOT NULL,
	`shexcess8` decimal(8,2) unsigned NOT NULL,
	`shnightdiff` decimal(8,2) unsigned NOT NULL,
	`daysabsent` decimal(5,2) unsigned NOT NULL,
	`hourslate` decimal(5,2) unsigned NOT NULL,
	`hoursundertime` decimal(5,2) unsigned NOT NULL,
	`allowance1` binary(16) NOT NULL,
	`allowance2` binary(16) NOT NULL,
	`allowance3` binary(16) NOT NULL,
	`allowance4` binary(16) NOT NULL,
	`allowance5` binary(16) NOT NULL,
	`allowance6` binary(16) NOT NULL,
	`allowance7` binary(16) NOT NULL,
	`allowance8` binary(16) NOT NULL,
	`incentive` binary(16) NOT NULL,
	`relocation` binary(16) NOT NULL,
	`bonus` binary(16) NOT NULL,
	`month13` binary(16) NOT NULL,
	`leaveencashment` binary(16) NOT NULL,
	`otherincome1` binary(16) NOT NULL,
	`otherincome2` binary(16) NOT NULL,
	`otherincome3` binary(16) NOT NULL,
	`ardeduction` binary(16) NOT NULL,
	`otherdeduction1` binary(16) NOT NULL,
	`otherdeduction2` binary(16) NOT NULL,
	`otherdeduction3` binary(16) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_payrolltemp3` (
	`tempid` int(11) AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`deductiontypeid` smallint(3) unsigned NOT NULL,
	`referenceid` bigint(15) unsigned NOT NULL,
	`remarks` char(50) NOT NULL,
	`amortization` decimal(12,2) NOT NULL,
	`balance` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_philhealth` (
	`lower` decimal(12,2) unsigned NOT NULL,
	`upper` decimal(12,2) unsigned NOT NULL,
	`rate_er` decimal(5,2) unsigned NOT NULL,
	`rate_ee` decimal(5,2) unsigned NOT NULL,
	`amount_er` decimal(12,2) unsigned NOT NULL,
	`amount_ee` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_positions` (
	`positionid` mediumint(4) unsigned NOT NULL,
	`positionname` char(50) NOT NULL,
	`departmentid` smallint(3) unsigned NOT NULL,
	`costcenterid` smallint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_positiontemp` (
	`tempid` int(11) AUTO_INCREMENT NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`positionid` mediumint(4) unsigned NOT NULL,
	`durationFrom` date NOT NULL,
	`durationTo` date NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`dateCancelled` char(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_ranks` (
	`rankid` int(11) NOT NULL,
	`rankname` char(20) NOT NULL,
	`isofficer` tinyint(1) unsigned NOT NULL,
	`payrollLevel` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_sss` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lower` decimal(10,2) unsigned NOT NULL,
	`upper` decimal(10,2) unsigned NOT NULL,
	`sc_ec` decimal(10,2) unsigned NOT NULL,
	`sc_pf` decimal(10,2) unsigned NOT NULL,
	`ss_er` decimal(10,2) unsigned NOT NULL,
	`ss_ee` decimal(10,2) unsigned NOT NULL,
	`ec_er` decimal(10,2) unsigned NOT NULL,
	`ec_ee` decimal(10,2) unsigned NOT NULL,
	`pf_er` decimal(10,2) unsigned NOT NULL,
	`pf_ee` decimal(10,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hr_wtaxbracket` (
	`bracketid` decimal(10,2) NOT NULL,
	`lower` decimal(10,2) NOT NULL,
	`upper` decimal(10,2) NOT NULL,
	`initialtax` decimal(10,2) NOT NULL,
	`rate` decimal(4,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `instapay_banks` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`bin` mediumint(4) NOT NULL,
	`bankname` varchar(50) NOT NULL,
	`mnemonic` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `instapay_fees` (
	`feeid` mediumint(6) unsigned AUTO_INCREMENT NOT NULL,
	`gatewaycode` varchar(25) NOT NULL,
	`lower` decimal(12,2) NOT NULL,
	`upper` decimal(12,2) NOT NULL,
	`variablefee` decimal(12,2) NOT NULL,
	`fix` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `instapay_gateways` (
	`id` smallint(3) unsigned AUTO_INCREMENT NOT NULL,
	`gatewaycode` varchar(25) NOT NULL,
	`amountlimit` decimal(12,2) NOT NULL,
	`partnershare` decimal(4,2) NOT NULL,
	`fixfee` decimal(6,2) NOT NULL,
	`implementation` datetime NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `instapay_transactions` (
	`transid` bigint(10) unsigned NOT NULL,
	`api_transactionid` bigint(12) unsigned DEFAULT 'NULL',
	`transtype` tinyint(1) NOT NULL,
	`bnkcode` mediumint(4) NOT NULL,
	`acctname` varchar(30) NOT NULL,
	`acctno` bigint(10) unsigned NOT NULL,
	`accttype` smallint(2) NOT NULL,
	`acctident` varchar(50) NOT NULL,
	`tfrname` varchar(30) NOT NULL,
	`tfrbnkcode` smallint(4) NOT NULL,
	`tfracctno` varchar(19) NOT NULL,
	`txnamt` decimal(7,2) NOT NULL,
	`tnxdate` char(4) NOT NULL,
	`tnxtime` char(6) NOT NULL,
	`invno` varchar(6) NOT NULL,
	`param1` varchar(100) NOT NULL,
	`param2` varchar(100) NOT NULL,
	`param3` varchar(100) NOT NULL,
	`custno` varchar(19) NOT NULL,
	`purpose` varchar(100) NOT NULL,
	`postingtime` datetime NOT NULL,
	`transdate` date NOT NULL,
	`fee` decimal(5,2) DEFAULT 'NULL',
	`channel` tinyint(1) NOT NULL,
	`response_respcode` varchar(4) DEFAULT 'NULL',
	`response_traceno` char(12) DEFAULT 'NULL',
	`response_respdesc` varchar(25) DEFAULT 'NULL',
	`savingstransactionid` bigint(20) unsigned DEFAULT 'NULL',
	`savingstransactionid2` bigint(20) unsigned DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `insurance_amort` (
	`policyid` bigint(20) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`datedue` date NOT NULL,
	`insurance_premium` decimal(12,2) unsigned NOT NULL,
	`insurance_savings` decimal(12,2) unsigned NOT NULL,
	`insurance_cf` decimal(12,2) unsigned NOT NULL,
	`insurance_cbu` decimal(12,2) NOT NULL,
	`datepaid` date NOT NULL,
	`paymentid` bigint(12) unsigned NOT NULL,
	`lending_amortnumber` smallint(11) NOT NULL,
	`amortnumber` smallint(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `insurance_claims` (
	`claim_id` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`branchid` smallint(4) unsigned NOT NULL,
	`policyid` bigint(20) NOT NULL,
	`policydetail_id` bigint(20) unsigned NOT NULL,
	`benefit` char(13) NOT NULL,
	`diagnosis_id` smallint(5) unsigned NOT NULL,
	`diagnosis_text` varchar(500) NOT NULL,
	`date_applied` date NOT NULL,
	`claim_date` date NOT NULL,
	`claim_date2` date NOT NULL,
	`claim_availment` tinyint(2) unsigned NOT NULL,
	`claim_amount` decimal(12,2) unsigned NOT NULL,
	`claimant_name` varchar(50) NOT NULL,
	`approved_date` date NOT NULL,
	`release_date` date NOT NULL,
	`makerid` mediumint(8) unsigned NOT NULL,
	`approverid` mediumint(8) unsigned NOT NULL,
	`releasedbyid` mediumint(8) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `insurance_diagnosis` (
	`diagnosis_id` mediumint(8) unsigned NOT NULL,
	`diagnosis_name` char(200) NOT NULL,
	`diagnosis_name2` varchar(1000) NOT NULL,
	`category` mediumint(8) unsigned NOT NULL,
	`parent` mediumint(8) unsigned NOT NULL,
	`level` tinyint(3) unsigned NOT NULL,
	`childcount` smallint(3) unsigned NOT NULL,
	`icd_code` varchar(12) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `insurance_incident` (
	`incidentid` int(6) unsigned AUTO_INCREMENT NOT NULL,
	`incident_type` tinyint(2) NOT NULL,
	`incident` varchar(60) NOT NULL,
	`death_type` tinyint(2) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `insurance_payments` (
	`paymentid` bigint(12) unsigned NOT NULL,
	`paymentid_orig` bigint(12) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`policyid` bigint(20) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`insurance_premium` decimal(12,2) NOT NULL,
	`insurance_savings` decimal(12,2) NOT NULL,
	`insurance_cf` decimal(12,2) NOT NULL,
	`insurance_cbu` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `insurance_policy` (
	`policyid` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`policydate` date NOT NULL,
	`maturity` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`branchid` mediumint(4) NOT NULL,
	`insuranceproductid` int(11) unsigned NOT NULL,
	`termcomputation` tinyint(2) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`countinsured` tinyint(2) unsigned NOT NULL,
	`premiumTotal` decimal(10,2) unsigned NOT NULL,
	`premiumNet` decimal(10,2) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`cbu_savingsid` bigint(10) unsigned NOT NULL,
	`userid` mediumint(6) unsigned NOT NULL,
	`cancel_userid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `insurance_policybeneficiary` (
	`id` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`policyid` bigint(20) unsigned NOT NULL,
	`beneficiaryid` int(10) unsigned NOT NULL,
	`relationship` char(15) NOT NULL,
	`beneficiaryname` char(50) NOT NULL,
	`birthdate` date NOT NULL,
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `insurance_policydetail` (
	`policydetail_id` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`policyid` bigint(20) unsigned NOT NULL,
	`relationship` char(15) NOT NULL,
	`relativeid` bigint(10) NOT NULL,
	`coverage` decimal(12,2) NOT NULL,
	`premium` decimal(10,2) NOT NULL,
	`premium_net` decimal(10,2) unsigned NOT NULL,
	`lastname` char(50) NOT NULL,
	`firstname` char(50) NOT NULL,
	`middlename` char(50) NOT NULL,
	`birthdate` date NOT NULL,
	`insured_client_status` tinyint(1) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `insurance_products` (
	`insuranceproductid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`productdetails` varchar(7000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_agingbracket` (
	`lower` smallint(4) unsigned NOT NULL,
	`upper` smallint(4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_amortdetails` (
	`pnid` bigint(12) unsigned NOT NULL,
	`amortnumber` smallint(5) unsigned NOT NULL,
	`datedue` date NOT NULL,
	`datedue_orig` date NOT NULL,
	`principal` decimal(12,2) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`savings` decimal(10,2) unsigned NOT NULL,
	`amort1` decimal(10,2) unsigned NOT NULL,
	`amort2` decimal(10,2) unsigned NOT NULL,
	`datepaid` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_amortdetailsedit` (
	`transdate` date NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`changes_principal` smallint(4) NOT NULL,
	`discountinterest` decimal(10,2) NOT NULL,
	`discountservicecharge` decimal(10,2) NOT NULL,
	`discountsavings` decimal(10,2) NOT NULL,
	`discountamort1` decimal(10,2) NOT NULL,
	`discountamort2` decimal(10,2) NOT NULL,
	`justification` varchar(300) DEFAULT 'NULL',
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_amortdetailstemp` (
	`pnid` bigint(12) unsigned NOT NULL,
	`amortnumber` smallint(5) unsigned NOT NULL,
	`datedue` date NOT NULL,
	`principal` decimal(12,2) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`savings` decimal(10,2) unsigned NOT NULL,
	`amort1` decimal(10,2) unsigned NOT NULL,
	`amort2` decimal(10,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned zerofill NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_assetsize` (
	`assetsizeid` mediumint(6) unsigned NOT NULL,
	`name` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_borrowertypes` (
	`borrowertypeid` mediumint(6) unsigned NOT NULL,
	`borrowertypename` varchar(200) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` mediumint(6) NOT NULL,
	`childcount` smallint(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_centers` (
	`centerid` int(10) unsigned NOT NULL,
	`centernumber` smallint(5) unsigned NOT NULL,
	`centername` varchar(25) NOT NULL,
	`barangayid` mediumint(6) unsigned NOT NULL,
	`meetingday` tinyint(4) NOT NULL,
	`meetingtime` time NOT NULL,
	`accountofficer` mediumint(6) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`signatory1id` bigint(10) unsigned NOT NULL,
	`signatory2id` bigint(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_centerstemp` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`centernumber` smallint(5) unsigned NOT NULL,
	`centername` varchar(25) NOT NULL,
	`barangayid` mediumint(6) unsigned NOT NULL,
	`meetingday` tinyint(4) NOT NULL,
	`meetingtime` time NOT NULL,
	`accountofficer` mediumint(6) unsigned NOT NULL,
	`signatory1id` bigint(10) unsigned NOT NULL,
	`signatory2id` bigint(10) unsigned NOT NULL,
	`savingsproductid` smallint(3) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_centerstransfer` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transDate` date NOT NULL,
	`centerid` int(10) unsigned NOT NULL,
	`branchidFrom` smallint(4) unsigned NOT NULL,
	`branchidTo` smallint(4) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`isTransferred` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_clientgroup` (
	`clientgroupid` mediumint(6) unsigned NOT NULL,
	`name` varchar(200) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` mediumint(6) NOT NULL,
	`childcount` smallint(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_creditline_data` (
	`creditline_id` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`creditline_productid` int(11) NOT NULL,
	`loanproductid` int(11) NOT NULL,
	`creditline_limit` decimal(12,2) unsigned NOT NULL,
	`creditline_term` smallint(3) NOT NULL,
	`creditline_date` date NOT NULL,
	`creditline_maturity` date NOT NULL,
	`creditline_approvers` varchar(1000) NOT NULL,
	`creditline_status` tinyint(4) NOT NULL,
	`creditline_notes` varchar(250) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_creditline_product` (
	`creditline_productid` int(11) AUTO_INCREMENT NOT NULL,
	`creditline_productname` varchar(50) NOT NULL,
	`productdescription` varchar(1000) NOT NULL,
	`loanproductid` tinyint(3) NOT NULL,
	`creditline_maxlimit` decimal(12,2) unsigned NOT NULL,
	`creditline_maxterm` tinyint(3) unsigned NOT NULL,
	`required_creditlineapprovers` tinyint(1) unsigned NOT NULL,
	`required_loanapprovers` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_creditscore_data` (
	`creditscore_id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`timestamp` datetime NOT NULL DEFAULT 'current_timestamp()',
	`branchid` smallint(3) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`creditscore_template_id` smallint(5) unsigned NOT NULL,
	`totalscore` smallint(3) unsigned NOT NULL,
	`result` tinyint(1) NOT NULL,
	`risklevel` tinyint(2) unsigned NOT NULL,
	`risklevel_name` varchar(25) NOT NULL,
	`details` varchar(10000) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_creditscore_template` (
	`creditscore_template_id` smallint(5) AUTO_INCREMENT NOT NULL,
	`creditscore_name` varchar(60) NOT NULL,
	`creditscore_description` varchar(100) NOT NULL,
	`creditscore_template` varchar(15000) NOT NULL,
	`status` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_deductionrate` (
	`loanproductid` int(11) unsigned NOT NULL,
	`deduction` tinyint(1) unsigned NOT NULL,
	`lower` decimal(12,2) unsigned NOT NULL,
	`upper` decimal(12,2) unsigned NOT NULL,
	`rate` decimal(12,3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_discount` (
	`discountid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`discountinterest` decimal(10,2) DEFAULT 'NULL',
	`discountservicecharge` decimal(10,2) DEFAULT 'NULL',
	`discountsavings` decimal(10,2) DEFAULT 'NULL',
	`discountamort1` decimal(10,2) DEFAULT 'NULL',
	`discountamort2` decimal(10,2) DEFAULT 'NULL',
	`discountpenalty` decimal(10,2) DEFAULT 'NULL',
	`discountpastdueinterest` decimal(10,2) DEFAULT 'NULL',
	`justification` varchar(250) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_discounttemp` (
	`discountid` int(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`amortnumber` smallint(5) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`savings` decimal(10,2) unsigned NOT NULL,
	`amort1` decimal(10,2) unsigned NOT NULL,
	`amort2` decimal(10,2) unsigned NOT NULL,
	`penalty` decimal(10,2) unsigned NOT NULL,
	`pastdueinterest` decimal(10,2) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_economicactivities` (
	`id` mediumint(6) AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` mediumint(6) NOT NULL,
	`childcount` smallint(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_industries` (
	`industryid` tinyint(3) unsigned NOT NULL,
	`industryname` char(200) NOT NULL,
	`defaultname` char(200) NOT NULL,
	`isuse` tinyint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_industryperloanclass` (
	`loanclassid` smallint(3) unsigned NOT NULL,
	`industryid` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_insformcoordinates` (
	`insuranceform` int(11) unsigned NOT NULL,
	`data` char(100) NOT NULL,
	`x` decimal(5,1) unsigned NOT NULL,
	`y` decimal(5,1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_insuranceproviders` (
	`insuranceproviderid` tinyint(3) unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`shortname` varchar(55) NOT NULL,
	`insurancelifeprincipal` decimal(8,0) unsigned NOT NULL,
	`insurancelifeparent` decimal(8,0) unsigned NOT NULL,
	`insurancelifespouse` decimal(8,0) unsigned NOT NULL,
	`insurancelifesibling` decimal(8,2) unsigned NOT NULL,
	`insurancelifechild` decimal(8,2) unsigned NOT NULL,
	`maxageprincipal` tinyint(2) unsigned NOT NULL,
	`maxageparent` tinyint(2) unsigned NOT NULL,
	`maxagespouse` tinyint(2) unsigned NOT NULL,
	`maxagesibling` tinyint(2) unsigned NOT NULL,
	`maxagechild` tinyint(2) unsigned NOT NULL,
	`insuredparent` smallint(1) NOT NULL,
	`insuredspouse` smallint(1) NOT NULL,
	`insuredsibling` smallint(1) NOT NULL,
	`insuredchild` smallint(2) NOT NULL,
	`commissionrate` decimal(4,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_insurancerates` (
	`insuranceproviderid` tinyint(3) unsigned NOT NULL,
	`month` smallint(3) unsigned NOT NULL,
	`ratecredit` decimal(7,4) unsigned NOT NULL,
	`ratelifeprincipal` decimal(7,4) unsigned NOT NULL,
	`ratelifeparent` decimal(7,4) unsigned NOT NULL,
	`ratelifespouse` decimal(7,4) unsigned NOT NULL,
	`ratelifesibling` decimal(7,4) unsigned NOT NULL,
	`ratelifechild` decimal(7,4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_interestrates` (
	`range` int(10) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_letters` (
	`letterid` smallint(6) NOT NULL,
	`name` text NOT NULL,
	`type` tinyint(3) unsigned NOT NULL,
	`daysMin` mediumint(8) unsigned NOT NULL,
	`daysMax` mediumint(8) unsigned NOT NULL,
	`code_letter` text NOT NULL,
	CONSTRAINT `letterid` UNIQUE(`letterid`)
);
--> statement-breakpoint
CREATE TABLE `lending_loanclassifications` (
	`loanclassid` smallint(3) unsigned NOT NULL,
	`name` varchar(200) NOT NULL,
	`defaultname` varchar(200) NOT NULL,
	`glcodecurrent` int(9) unsigned NOT NULL,
	`glcodeincomecurrent` int(9) unsigned NOT NULL,
	`glcodepastdue` int(9) unsigned NOT NULL,
	`glcodeincomepastdue` int(9) unsigned NOT NULL,
	`glcodeNonperf` int(9) unsigned NOT NULL,
	`glcodeIncomeNonperf` int(9) unsigned NOT NULL,
	`glcodeinlitigation` int(9) unsigned NOT NULL,
	`glcodeincomeinlitigation` int(9) unsigned NOT NULL,
	`glcodeDiscountOutrightInt` int(9) unsigned NOT NULL,
	`glcodeDiscountOutrightSC` int(9) unsigned NOT NULL,
	`glcodeDiscountAmortInt` int(9) unsigned NOT NULL,
	`glcodeDiscountAmortSC` int(9) unsigned NOT NULL,
	`glcodeProvision` int(9) unsigned NOT NULL,
	`is_businessloan` tinyint(1) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` mediumint(9) unsigned NOT NULL,
	`childcount` smallint(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanclassperpurpose` (
	`loanpurposeid` mediumint(6) unsigned NOT NULL,
	`loanclassid` smallint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loandetails` (
	`pnid` bigint(12) unsigned NOT NULL,
	`pnid_previous_cbs` varchar(50) DEFAULT 'NULL',
	`clientid` bigint(10) unsigned NOT NULL,
	`spouseid` bigint(10) unsigned NOT NULL,
	`pnid2` char(25) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`loanproductid` int(11) unsigned NOT NULL,
	`termunit` tinyint(1) unsigned NOT NULL,
	`term` smallint(4) unsigned NOT NULL,
	`date` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`maturity` date NOT NULL,
	`maturity2` date NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`interestrate` decimal(6,4) unsigned NOT NULL,
	`interestcomputation` tinyint(1) unsigned NOT NULL,
	`irr` decimal(5,2) unsigned NOT NULL,
	`eir` decimal(5,2) unsigned NOT NULL,
	`eir_int` decimal(7,5) unsigned NOT NULL,
	`eir_sc` decimal(7,5) unsigned NOT NULL,
	`interestcomputationbasis` tinyint(3) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`interestPartialDiscDate` date NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`savings` decimal(10,2) unsigned NOT NULL,
	`insurance` decimal(10,2) unsigned NOT NULL,
	`tax` decimal(10,2) unsigned NOT NULL,
	`deduction1` decimal(10,2) unsigned NOT NULL,
	`deduction2` decimal(10,2) unsigned NOT NULL,
	`deduction3` decimal(10,2) unsigned NOT NULL,
	`deduction4` decimal(10,2) unsigned NOT NULL,
	`deduction5` decimal(10,2) unsigned NOT NULL,
	`deduction6` decimal(10,2) unsigned NOT NULL,
	`deduction7` decimal(10,2) unsigned NOT NULL,
	`deduction8` decimal(10,2) unsigned NOT NULL,
	`deduction9` decimal(10,2) unsigned NOT NULL,
	`proceeds` decimal(12,2) unsigned NOT NULL,
	`proceedstype` tinyint(1) unsigned NOT NULL,
	`proceedsreference` char(25) NOT NULL,
	`insuranceproviderid` smallint(3) unsigned NOT NULL,
	`creditorid` smallint(3) unsigned NOT NULL,
	`coborrowerid` int(11) unsigned NOT NULL,
	`comaker1id` bigint(10) unsigned NOT NULL,
	`comaker2id` bigint(10) unsigned NOT NULL,
	`comaker3id` bigint(10) unsigned NOT NULL,
	`comaker4id` bigint(10) unsigned NOT NULL,
	`comaker5id` bigint(10) unsigned NOT NULL,
	`workersemployed` smallint(5) unsigned NOT NULL,
	`industryid` smallint(3) unsigned NOT NULL,
	`loanclassid` smallint(3) unsigned NOT NULL,
	`loanpurposeid` mediumint(6) unsigned NOT NULL,
	`loanpurpose` char(200) NOT NULL,
	`securityid` mediumint(6) unsigned NOT NULL,
	`securitydetails` varchar(150) NOT NULL,
	`assetsizeid` mediumint(6) unsigned NOT NULL,
	`borrowertypeid` mediumint(6) unsigned NOT NULL,
	`clientgroupid` mediumint(6) unsigned NOT NULL,
	`restructuredtag` tinyint(3) unsigned NOT NULL,
	`restructuredpnid` bigint(12) unsigned NOT NULL,
	`restructuredCount` tinyint(3) unsigned NOT NULL,
	`autodebitAmort` tinyint(1) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`amort2destination` tinyint(1) unsigned NOT NULL,
	`cureperiod` tinyint(2) unsigned NOT NULL,
	`loancycle` smallint(5) unsigned NOT NULL,
	`loancycleProduct` smallint(5) unsigned NOT NULL,
	`loanofficerid` mediumint(6) unsigned NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL,
	`tellerid` mediumint(6) unsigned NOT NULL,
	`loanstatus` tinyint(3) unsigned NOT NULL,
	`loanstatusstatic` tinyint(3) unsigned NOT NULL,
	`loanbalance` decimal(12,2) NOT NULL,
	`nextdatedue` date NOT NULL,
	`lasttransdate` date NOT NULL,
	`datepaidOrig` date NOT NULL,
	`lettercount` tinyint(1) NOT NULL,
	`promptPayment` decimal(4,1) unsigned NOT NULL,
	`releasetag` tinyint(1) unsigned NOT NULL,
	`application_details` mediumtext NOT NULL,
	`dateApplied` date DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `lending_loandetailsteller` (
	`pnid` bigint(12) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loandetails_changes` (
	`change_id` int(11) AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`changes` varchar(10000) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`dateposted` date NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanproductadjustments` (
	`branchid` smallint(4) unsigned NOT NULL,
	`loanproductid` int(11) unsigned NOT NULL,
	`interestrate` decimal(4,2) NOT NULL,
	`scadjustment` decimal(10,2) NOT NULL,
	`insuranceproviderid` tinyint(3) unsigned NOT NULL,
	`creditorid` int(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanproductindustry` (
	`loanproductid` int(11) unsigned NOT NULL,
	`industryid` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanproducts` (
	`loanproductid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`name` varchar(25) NOT NULL,
	`shortname` char(5) NOT NULL,
	`description` varchar(100) NOT NULL,
	`type` tinyint(1) unsigned NOT NULL,
	`usepnform` tinyint(1) unsigned NOT NULL,
	`loanamountmaximum` int(10) NOT NULL,
	`loancountmaximum` tinyint(3) unsigned NOT NULL,
	`loanproductceiling` decimal(14,2) unsigned NOT NULL,
	`grouping` tinyint(1) NOT NULL,
	`weekadjuster` tinyint(1) unsigned NOT NULL,
	`groupby` tinyint(1) NOT NULL,
	`requirecoborrower` tinyint(1) unsigned NOT NULL,
	`requiredcomakers` tinyint(1) unsigned NOT NULL,
	`requireworkersemployed` tinyint(1) unsigned NOT NULL,
	`borrowertypedefault` mediumint(4) unsigned NOT NULL,
	`clientgroupdefault` smallint(5) unsigned NOT NULL,
	`requiresecurity` tinyint(3) unsigned NOT NULL,
	`defaultsecurity` tinyint(1) unsigned NOT NULL,
	`collectionlist_options` varchar(3000) NOT NULL,
	`isEmployeeLoan` tinyint(1) unsigned NOT NULL,
	`termunitflexibility` tinyint(3) unsigned NOT NULL,
	`termunit` tinyint(1) NOT NULL,
	`termflexibility` tinyint(1) NOT NULL,
	`termDaysFixed` tinyint(1) unsigned NOT NULL,
	`termDaysFixedFlex` tinyint(3) unsigned NOT NULL,
	`termdefault` tinyint(3) NOT NULL,
	`termmaximum` smallint(4) unsigned NOT NULL,
	`interestrate` decimal(6,4) NOT NULL,
	`pd_interestrate` decimal(6,4) NOT NULL,
	`grt_rate` decimal(6,4) NOT NULL,
	`interestcomputation` tinyint(1) unsigned NOT NULL,
	`diminishing_option` tinyint(1) unsigned NOT NULL,
	`interestcomputationflexibility` tinyint(3) unsigned NOT NULL,
	`interestcomputationbasis` tinyint(3) unsigned NOT NULL,
	`interestcomputationbasisflexibility` tinyint(3) unsigned NOT NULL,
	`interestRecompute` tinyint(1) unsigned NOT NULL,
	`balloonoption` tinyint(3) unsigned NOT NULL,
	`computepastdueinterest` tinyint(3) unsigned NOT NULL,
	`daysinayear` smallint(3) unsigned NOT NULL,
	`interestrateflexibility` tinyint(1) NOT NULL,
	`interestrateminimum` decimal(6,4) NOT NULL,
	`interestdiscountbooking` tinyint(1) NOT NULL,
	`interestdiscountedglcode` int(9) unsigned NOT NULL,
	`interestamortizedglcode` int(9) unsigned NOT NULL,
	`adjustonholidays` tinyint(1) NOT NULL,
	`amortrounding` tinyint(3) NOT NULL,
	`amortgraceperiod` smallint(3) NOT NULL,
	`amort_workdays` varchar(100) NOT NULL,
	`autodebitAmort` tinyint(1) unsigned NOT NULL,
	`acl_exempted` tinyint(1) unsigned NOT NULL,
	`aclAssessment` decimal(12,0) unsigned NOT NULL,
	`scdiscounteduse` tinyint(1) unsigned NOT NULL,
	`scdiscountedname` char(20) NOT NULL,
	`scdiscountedflexibility` tinyint(1) NOT NULL,
	`scdiscountedMaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`scbracketoption` tinyint(1) unsigned NOT NULL,
	`scdpyear` smallint(5) unsigned NOT NULL,
	`scrateoption` tinyint(1) unsigned NOT NULL,
	`scdiscountbooking` tinyint(1) NOT NULL,
	`scdiscountedglcode` int(9) unsigned NOT NULL,
	`scamortuse` tinyint(1) unsigned NOT NULL,
	`scamortname` char(18) NOT NULL,
	`scamortvalue` decimal(10,2) unsigned NOT NULL,
	`scamortoption` tinyint(1) unsigned NOT NULL,
	`scamortflexibility` tinyint(1) unsigned NOT NULL,
	`scamortglcode` int(9) unsigned NOT NULL,
	`penaltyrates` varchar(3000) NOT NULL,
	`penaltyAmortFixedRate` decimal(6,3) unsigned NOT NULL,
	`penaltyAmortFixedAmount` decimal(12,2) unsigned NOT NULL,
	`penaltyAmortRunningRate` decimal(6,3) unsigned NOT NULL,
	`penaltyAmortGracePeriod` smallint(3) unsigned NOT NULL,
	`penaltyAmortBasis` tinyint(3) unsigned NOT NULL,
	`penaltyAmortBasis2` tinyint(3) NOT NULL,
	`pastdueAmortBasis` tinyint(3) NOT NULL,
	`penaltyDueFixedRate` decimal(6,3) unsigned NOT NULL,
	`penaltyDueFixedAmount` decimal(12,2) unsigned NOT NULL,
	`penaltyDueRunningRate` decimal(6,3) unsigned NOT NULL,
	`penaltyDueGracePeriod` smallint(3) unsigned NOT NULL,
	`penaltyDueInclude` tinyint(3) unsigned NOT NULL,
	`penaltyglcode` int(9) unsigned NOT NULL,
	`gracePeriodComputation` tinyint(3) unsigned NOT NULL,
	`pdinterestglcode` int(9) unsigned NOT NULL,
	`useinsurance` tinyint(1) unsigned NOT NULL,
	`insurancename` varchar(30) NOT NULL,
	`insuranceflexibility` tinyint(1) unsigned NOT NULL,
	`insuranceproviderid` smallint(5) unsigned NOT NULL,
	`useinsurancetable` tinyint(1) unsigned NOT NULL,
	`enableprintingofinsurance` tinyint(1) NOT NULL,
	`enabledeedofassignment` tinyint(3) unsigned NOT NULL,
	`insuranceglcode` int(9) unsigned NOT NULL,
	`insuranceproductid` mediumint(3) unsigned NOT NULL,
	`savingsdiscounteduse` tinyint(1) NOT NULL,
	`savingsdiscountedname` varchar(30) NOT NULL,
	`savingsdiscounted` decimal(8,2) NOT NULL,
	`savingsdiscountedoption` tinyint(1) NOT NULL,
	`savingsdiscountedflexibility` tinyint(1) unsigned NOT NULL,
	`savingsamortizeduse` tinyint(1) unsigned NOT NULL,
	`savingsamortizedname` varchar(30) NOT NULL,
	`savingsamortized` decimal(8,2) NOT NULL,
	`savingsamortizedoption` tinyint(1) NOT NULL,
	`savingsamortizedflexibility` tinyint(1) unsigned NOT NULL,
	`savingsexcess` tinyint(1) unsigned NOT NULL,
	`savingsholdout` decimal(8,2) NOT NULL,
	`savingsholdoutoption` tinyint(1) NOT NULL,
	`savingsproductid` smallint(2) unsigned NOT NULL,
	`taxuse` tinyint(1) NOT NULL,
	`taxflexibility` tinyint(1) unsigned NOT NULL,
	`taxglcode` int(9) unsigned NOT NULL,
	`deduction1use` tinyint(1) NOT NULL,
	`deduction1name` char(12) NOT NULL,
	`deduction1flexibility` tinyint(1) unsigned NOT NULL,
	`deduction1MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction1bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction1dpyear` smallint(5) unsigned NOT NULL,
	`deduction1rateoption` tinyint(1) unsigned NOT NULL,
	`deduction1glcode` int(9) unsigned NOT NULL,
	`deduction2use` tinyint(1) NOT NULL,
	`deduction2name` char(12) NOT NULL,
	`deduction2flexibility` tinyint(1) NOT NULL,
	`deduction2MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction2bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction2dpyear` smallint(5) unsigned NOT NULL,
	`deduction2rateoption` tinyint(1) unsigned NOT NULL,
	`deduction2glcode` int(9) unsigned NOT NULL,
	`deduction3use` tinyint(1) NOT NULL,
	`deduction3name` char(12) NOT NULL,
	`deduction3flexibility` tinyint(1) NOT NULL,
	`deduction3MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction3bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction3dpyear` smallint(5) unsigned NOT NULL,
	`deduction3rateoption` tinyint(1) unsigned NOT NULL,
	`deduction3glcode` int(9) unsigned NOT NULL,
	`deduction4use` tinyint(3) unsigned NOT NULL,
	`deduction4name` char(12) NOT NULL,
	`deduction4flexibility` tinyint(1) unsigned NOT NULL,
	`deduction4MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction4bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction4dpyear` smallint(5) unsigned NOT NULL,
	`deduction4rateoption` tinyint(1) unsigned NOT NULL,
	`deduction4glcode` int(9) unsigned NOT NULL,
	`deduction5use` tinyint(1) unsigned NOT NULL,
	`deduction5name` char(12) NOT NULL,
	`deduction5flexibility` tinyint(1) unsigned NOT NULL,
	`deduction5MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction5bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction5dpyear` smallint(5) unsigned NOT NULL,
	`deduction5rateoption` tinyint(1) unsigned NOT NULL,
	`deduction5glcode` int(9) unsigned NOT NULL,
	`deduction6use` tinyint(1) unsigned NOT NULL,
	`deduction6name` char(12) NOT NULL,
	`deduction6flexibility` tinyint(1) NOT NULL,
	`deduction6MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction6bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction6dpyear` smallint(5) unsigned NOT NULL,
	`deduction6rateoption` tinyint(1) unsigned NOT NULL,
	`deduction6glcode` int(6) unsigned NOT NULL,
	`deduction7use` tinyint(1) unsigned NOT NULL,
	`deduction7name` char(12) NOT NULL,
	`deduction7flexibility` tinyint(1) NOT NULL,
	`deduction7MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction7bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction7dpyear` smallint(5) unsigned NOT NULL,
	`deduction7rateoption` tinyint(1) unsigned NOT NULL,
	`deduction7glcode` int(6) unsigned NOT NULL,
	`deduction8use` tinyint(1) unsigned NOT NULL,
	`deduction8name` char(12) NOT NULL,
	`deduction8flexibility` tinyint(1) NOT NULL,
	`deduction8MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction8bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction8dpyear` smallint(5) unsigned NOT NULL,
	`deduction8rateoption` tinyint(1) unsigned NOT NULL,
	`deduction8glcode` int(6) unsigned NOT NULL,
	`deduction9use` tinyint(1) unsigned NOT NULL,
	`deduction9name` char(12) NOT NULL,
	`deduction9flexibility` tinyint(1) NOT NULL,
	`deduction9MaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`deduction9bracketoption` tinyint(1) unsigned NOT NULL,
	`deduction9dpyear` smallint(5) unsigned NOT NULL,
	`deduction9rateoption` tinyint(1) unsigned NOT NULL,
	`deduction9glcode` int(6) unsigned NOT NULL,
	`proceedstypedefault` int(11) NOT NULL,
	`micro_nplcomputeoption` tinyint(1) unsigned NOT NULL,
	`isTellerDisbursed` tinyint(1) unsigned NOT NULL,
	`isCashDisburesedValidated` tinyint(1) unsigned NOT NULL,
	`disbursementValidation_x` decimal(4,1) unsigned NOT NULL,
	`disbursementValidation_y` decimal(4,1) unsigned NOT NULL,
	`amort1use` tinyint(1) NOT NULL,
	`securityDependentPN` tinyint(1) unsigned NOT NULL,
	`amort1name` char(18) NOT NULL,
	`amort1value` decimal(10,2) unsigned NOT NULL,
	`amort1option` tinyint(1) unsigned NOT NULL,
	`amort1isFinCharge` tinyint(1) unsigned NOT NULL,
	`amort1flexibility` tinyint(1) NOT NULL,
	`amort1glcode` int(9) unsigned NOT NULL,
	`amort2use` tinyint(1) NOT NULL,
	`amort2name` char(18) NOT NULL,
	`amort2value` decimal(10,2) unsigned NOT NULL,
	`amort2option` tinyint(1) unsigned NOT NULL,
	`amort2isFinCharge` tinyint(1) unsigned NOT NULL,
	`amort2flexibility` tinyint(1) NOT NULL,
	`amort2glcode` int(9) unsigned NOT NULL,
	`amort2destination` tinyint(1) unsigned NOT NULL,
	`defaultcostcenter` int(6) unsigned NOT NULL,
	`currentglcode` int(9) unsigned NOT NULL,
	`pastdueglcode` int(9) unsigned NOT NULL,
	`nonperfglcode` int(9) unsigned NOT NULL,
	`inlitigationglcode` int(9) unsigned NOT NULL,
	`provisionglcode` int(9) unsigned NOT NULL,
	`cureperiod` smallint(3) unsigned NOT NULL,
	`cureperiod1` tinyint(3) unsigned NOT NULL,
	`cureperiod2` tinyint(3) unsigned NOT NULL,
	`cureperiod3` tinyint(3) unsigned NOT NULL,
	`cureperiod4` tinyint(3) unsigned NOT NULL,
	`cureperiod5` tinyint(3) unsigned NOT NULL,
	`cureperiod6` tinyint(3) unsigned NOT NULL,
	`cureperiod7` tinyint(3) unsigned NOT NULL,
	`cureperiod8` tinyint(3) unsigned NOT NULL,
	`enable_individual_cureperiod` tinyint(2) unsigned NOT NULL,
	`smsLanguage` tinyint(1) unsigned NOT NULL,
	`smsFreeAmt` int(7) unsigned NOT NULL,
	`smsUnpaidAmorts` tinyint(3) unsigned NOT NULL,
	`code_pn` text NOT NULL,
	`code_pn2` text NOT NULL,
	`code_appform` text NOT NULL,
	`approval_data` text NOT NULL,
	`comakerLimit` tinyint(2) unsigned NOT NULL,
	`creditscore_template_id` smallint(1) unsigned NOT NULL,
	`is_offbook` tinyint(1) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `lending_loanproductstouse` (
	`branchid` smallint(4) unsigned NOT NULL,
	`loanproductid` int(11) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanpurpose` (
	`loanpurposeid` mediumint(6) unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` mediumint(6) NOT NULL,
	`childcount` smallint(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loansecurities` (
	`loansecurityid` mediumint(6) unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`isSecured` tinyint(1) unsigned NOT NULL,
	`collateral_type` tinyint(1) unsigned NOT NULL,
	`frp_securitytag` tinyint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanstatus` (
	`loanstatusid` tinyint(3) unsigned NOT NULL,
	`loanstatusname` varchar(150) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_loanterms` (
	`range` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_misposting` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`transaction_type` tinyint(4) NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`oridold` bigint(12) unsigned NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`justification` varchar(300) NOT NULL,
	`status` tinyint(4) NOT NULL,
	`is_cancelled` tinyint(1) unsigned NOT NULL,
	`txn_log` varchar(5000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_mispostingtemp` (
	`transaction_type` tinyint(4) NOT NULL,
	`branchid` smallint(3) NOT NULL,
	`transdate` date NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`justification` varchar(300) DEFAULT 'NULL',
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_mobile_loanapplication` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`cpnumber` varchar(11) NOT NULL,
	`amount` decimal(12,2) NOT NULL,
	`termunit` tinyint(1) unsigned NOT NULL,
	`term` smallint(4) unsigned NOT NULL,
	`loanpurpose` varchar(200) NOT NULL,
	`postingtime` datetime NOT NULL,
	`status` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_moratorium` (
	`postingtime` datetime NOT NULL,
	`groupby` tinyint(3) unsigned NOT NULL,
	`groupid` bigint(12) unsigned NOT NULL,
	`startdate` date NOT NULL,
	`moratoriumdays` smallint(3) unsigned NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`approver2id` mediumint(6) unsigned NOT NULL,
	`approvetime` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_moratoriumtemp` (
	`moratoriumid` int(11) AUTO_INCREMENT NOT NULL,
	`postingtime` datetime NOT NULL,
	`branchid` mediumint(4) unsigned NOT NULL,
	`groupby` tinyint(3) unsigned NOT NULL,
	`groupid` bigint(12) unsigned NOT NULL,
	`startdate` date NOT NULL,
	`moratoriumdays` smallint(3) unsigned NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`approver2id` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_office` (
	`officeid` int(6) unsigned AUTO_INCREMENT NOT NULL,
	`officename` varchar(200) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`aoid` smallint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_paymentdetails` (
	`paymentid` bigint(12) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`amortnumber` smallint(5) unsigned NOT NULL,
	`principalpmt` decimal(10,2) NOT NULL,
	`interestpmt` decimal(10,2) NOT NULL,
	`servicechargepmt` decimal(10,2) NOT NULL,
	`savingspmt` decimal(10,2) NOT NULL,
	`amort1pmt` decimal(10,2) NOT NULL,
	`amort2pmt` decimal(10,2) NOT NULL,
	`penaltypmt` decimal(10,2) NOT NULL,
	`pastdueinterestpmt` decimal(10,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_paymentpriority` (
	`id` tinyint(2) unsigned NOT NULL,
	`priority` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_payments` (
	`paymentid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`postingtime` datetime NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`paymentdate` date NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`ornumber` char(20) NOT NULL,
	`paymentmode` smallint(6) NOT NULL,
	`paymentreference` varchar(50) NOT NULL,
	`paymentamount` decimal(10,2) NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`pnid_index` bigint(12) unsigned NOT NULL,
	`loanbalance` decimal(12,2) NOT NULL,
	`nextdatedue` date NOT NULL,
	`savingsexcess` decimal(10,2) NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`loanstatusprevious` tinyint(1) unsigned NOT NULL,
	`loanstatus` tinyint(2) unsigned NOT NULL,
	`loanclassid` smallint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_paymentsor` (
	`orid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`postingtime` datetime NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`clienttype` tinyint(1) unsigned NOT NULL,
	`clientid` bigint(12) unsigned NOT NULL,
	`ornumber` char(20) NOT NULL,
	`paymentmode` tinyint(1) NOT NULL,
	`paymentreference` char(50) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`oramount` decimal(12,2) NOT NULL,
	`orstatus` tinyint(1) unsigned NOT NULL,
	`tellerid` mediumint(6) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`txn_log` varchar(5000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_payment_tempdetails` (
	`orid` bigint(12) unsigned NOT NULL,
	`paymentamount` decimal(12,2) NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`interestRecompute` tinyint(3) unsigned NOT NULL,
	`savingsexcess` decimal(10,2) NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`policyid` bigint(20) unsigned NOT NULL,
	`autodebit_savingsid` bigint(10) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_payment_tempor` (
	`orid` bigint(12) unsigned NOT NULL,
	`orstatus` tinyint(1) NOT NULL DEFAULT 0,
	`systemdate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_pncorrection` (
	`correctionid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`correction_type` tinyint(1) unsigned NOT NULL,
	`date_transacted` date NOT NULL,
	`details_before` varchar(30000) NOT NULL,
	`details_after` varchar(30000) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_principalsize` (
	`range` mediumint(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_provision` (
	`assessment` tinyint(3) unsigned NOT NULL,
	`security` tinyint(1) unsigned NOT NULL,
	`lower` smallint(4) NOT NULL,
	`upper` smallint(4) NOT NULL,
	`rate` decimal(5,2) unsigned NOT NULL,
	`aclClass` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_provisionqualitative` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`provision_manual` decimal(5,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_releasedelete` (
	`releasedeleteid` int(11) AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`branchid` tinyint(4) unsigned NOT NULL,
	`orid` bigint(12) NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`loanamount` decimal(12,2) NOT NULL,
	`reason` varchar(300) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_releasedeletetemp` (
	`pnid` bigint(12) unsigned NOT NULL,
	`branchid` tinyint(4) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`loanamount` decimal(14,2) unsigned NOT NULL,
	`systemdate` date NOT NULL,
	`reason` varchar(300) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_remittancedelete` (
	`branchid` smallint(4) unsigned NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`ornumber` bigint(15) unsigned NOT NULL,
	`clientname` char(50) NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`userid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`deletetime` datetime NOT NULL,
	`deletesystemdate` date NOT NULL,
	`justification` varchar(300) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `lending_remittancedeletetemp` (
	`branchid` smallint(4) unsigned NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`justification` varchar(300) DEFAULT 'NULL',
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_remittancedeletetemp2` (
	`orid` bigint(12) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_scrate` (
	`loanproductid` mediumint(2) unsigned NOT NULL,
	`lower` decimal(12,2) unsigned NOT NULL,
	`upper` decimal(12,2) unsigned NOT NULL,
	`scrate` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lending_termunits` (
	`termid` tinyint(1) unsigned NOT NULL,
	`termname` varchar(75) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mis_bug` (
	`reportid` int(11) AUTO_INCREMENT NOT NULL,
	`programmerid` mediumint(6) unsigned NOT NULL,
	`datereported` date NOT NULL,
	`datefixed` date NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`details` char(50) NOT NULL,
	`measures` char(50) NOT NULL,
	`status` tinyint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mis_passwordresetlog` (
	`serverdate` date NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mis_userright` (
	`employeeid` mediumint(6) unsigned NOT NULL,
	`userrightid` mediumint(3) NOT NULL,
	`level1access` tinyint(1) unsigned NOT NULL,
	`level2access` tinyint(1) unsigned NOT NULL,
	`level3access` tinyint(1) unsigned NOT NULL,
	`id` int(11) unsigned AUTO_INCREMENT NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mis_userrightdefault` (
	`positionid` mediumint(4) unsigned NOT NULL,
	`userrightid` mediumint(3) NOT NULL,
	`level1access` tinyint(1) unsigned NOT NULL,
	`level2access` tinyint(1) unsigned NOT NULL,
	`level3access` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mis_userrightguide` (
	`userrightid` int(6) NOT NULL,
	`title` char(75) NOT NULL,
	`parent` int(6) NOT NULL,
	`level` tinyint(1) NOT NULL,
	`level1access` tinyint(1) unsigned NOT NULL,
	`level2access` tinyint(1) unsigned NOT NULL,
	`level3access` tinyint(1) unsigned NOT NULL,
	`level1note` char(255) NOT NULL,
	`level2note` char(255) NOT NULL,
	`level3note` char(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mobile_account_verification` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`channel` tinyint(1) NOT NULL,
	`processid` tinyint(3) NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`cpnumber` char(11) NOT NULL,
	`cpnumber_new` char(11) NOT NULL,
	`selfie1` longtext NOT NULL,
	`selfie2` longtext NOT NULL,
	`selfie3` longtext NOT NULL,
	`userpin_key` varchar(250) NOT NULL,
	`userpin_salt` varchar(250) NOT NULL,
	`otp` varchar(6) NOT NULL,
	`postingtime` datetime NOT NULL,
	`description` varchar(150) NOT NULL,
	`statusid` tinyint(1) DEFAULT 'NULL',
	`verifierid` mediumint(6) unsigned DEFAULT 'NULL',
	`v_datetime` datetime DEFAULT 'NULL',
	`approverid` mediumint(6) unsigned DEFAULT 'NULL',
	`a_datetime` datetime DEFAULT 'NULL',
	`branchid` smallint(4) unsigned DEFAULT 'NULL',
	`is_temp` tinyint(1) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `mobile_client_users` (
	`idmobile_client_users` int(11) AUTO_INCREMENT NOT NULL,
	`client1id` bigint(10) unsigned NOT NULL,
	`cpnumber` varchar(11) NOT NULL,
	`password` varchar(512) DEFAULT 'NULL',
	`status` tinyint(1) DEFAULT 'NULL',
	`attempts` tinyint(1) NOT NULL,
	`activitylog` datetime NOT NULL,
	`cpimei` text DEFAULT 'NULL',
	`userpin` varchar(512) NOT NULL,
	`questionid` smallint(3) NOT NULL,
	`answer` varchar(250) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mobile_comworks_eload` (
	`id` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`requestRefNo` varchar(75) NOT NULL,
	`targetSubsAccount` varchar(15) NOT NULL,
	`planCode` varchar(10) NOT NULL,
	`retailerNewBalance` varchar(75) NOT NULL,
	`respCode` varchar(4) NOT NULL,
	`status` varchar(75) NOT NULL,
	`statusDesc` varchar(50) NOT NULL,
	`client_transactionid` varchar(100) NOT NULL,
	`appname` varchar(100) NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`savingstransactionid` bigint(20) unsigned NOT NULL,
	`postingtime` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mobile_security_questions` (
	`questionid` smallint(3) AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mobile_transfer_details` (
	`id` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`sender_clientid` bigint(10) unsigned NOT NULL,
	`receiver_accountnumber` varchar(75) NOT NULL,
	`receiver_accountname` varchar(50) NOT NULL,
	`receiver_nickname` varchar(30) NOT NULL,
	`receiver_address` varchar(150) NOT NULL,
	`bicfi` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `perpetual_paymentdetails` (
	`paymentid` bigint(12) NOT NULL,
	`policyid` bigint(20) NOT NULL,
	`amortnumber` smallint(5) NOT NULL,
	`insurance_premium` decimal(12,2) NOT NULL,
	`insurance_cbu` decimal(12,2) NOT NULL,
	`insurance_cf` decimal(12,2) NOT NULL,
	`insurance_savings` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pesonet_banks` (
	`bankid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`bicfi` varchar(20) NOT NULL,
	`bank_name` varchar(150) NOT NULL,
	`bank_code` varchar(5) NOT NULL,
	`head_office_brstn` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pesonet_fees` (
	`feeid` mediumint(6) unsigned AUTO_INCREMENT NOT NULL,
	`gatewaycode` varchar(25) NOT NULL,
	`lower` decimal(12,2) NOT NULL,
	`upper` decimal(12,2) NOT NULL,
	`variablefee` decimal(12,2) NOT NULL,
	`fix` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pesonet_gateways` (
	`id` smallint(3) unsigned AUTO_INCREMENT NOT NULL,
	`gatewaycode` varchar(25) NOT NULL,
	`amountlimit` decimal(12,2) NOT NULL,
	`partnershare` decimal(4,2) NOT NULL,
	`fixfee` decimal(6,2) NOT NULL,
	`implementation` datetime NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `pesonet_inwardtransactions` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`MsgId` varchar(100) NOT NULL,
	`CreDtTm` varchar(13) NOT NULL,
	`NbOfTxs` smallint(3) NOT NULL,
	`TtlIntrBkSttlmAmt_Ccy` char(5) NOT NULL,
	`TtlIntrBkSttlmAmt_value` decimal(12,2) NOT NULL,
	`IntrBkSttlmDt` date NOT NULL,
	`SttlmInf_SttlmMtd` varchar(15) NOT NULL,
	`InstgAgt_BICFI` varchar(15) NOT NULL,
	`InstdAgt_BICFI` varchar(15) NOT NULL,
	`PmtId_EndToEndId` varchar(100) NOT NULL,
	`PmtId_TxId` varchar(100) NOT NULL,
	`PmtTpInf_Prtry` varchar(10) NOT NULL,
	`PmtTpInf_Cd` varchar(10) NOT NULL,
	`IntrBkSttlmAmt_Ccy` varchar(10) NOT NULL,
	`IntrBkSttlmAmt_value` decimal(12,2) NOT NULL,
	`ChrgBr` varchar(10) NOT NULL,
	`Dbtr_Nm` varchar(150) NOT NULL,
	`Dbtr_address1` varchar(50) NOT NULL,
	`Dbtr_address2` varchar(50) NOT NULL,
	`Dbtr_address3` varchar(50) NOT NULL,
	`DbtrAcct_Id` varchar(50) NOT NULL,
	`DbtrAcct_BICFI` varchar(15) NOT NULL,
	`Cdtr_Nm` varchar(150) NOT NULL,
	`Cdtr_PstlAdr1` varchar(50) NOT NULL,
	`Cdtr_PstlAdr2` varchar(50) NOT NULL,
	`Cdtr_PstlAdr3` varchar(50) NOT NULL,
	`CdtrAcct_Id` bigint(10) unsigned NOT NULL,
	`CdtrAgt_BICFI` varchar(50) NOT NULL,
	`instructions` varchar(33) NOT NULL,
	`rfi_reference_number` varchar(16) NOT NULL,
	`ofi_customer_reference_number` varchar(16) NOT NULL,
	`rfi_customer_reference_number` varchar(16) NOT NULL,
	`statuscode` varchar(5) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`codeupdate` smallint(3) NOT NULL,
	`savingstransactionid` bigint(12) unsigned DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `pesonet_outwardtemp` (
	`tempid` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`ofirefnum` varchar(50) NOT NULL,
	`rfirefnum` varchar(16) DEFAULT 'NULL',
	`oficustomerrefnum` varchar(16) DEFAULT 'NULL',
	`rficustomerrefnum` varchar(16) DEFAULT 'NULL',
	`currency` char(3) NOT NULL,
	`amount` decimal(12,2) NOT NULL,
	`fee` decimal(6,2) NOT NULL,
	`activitycode` varchar(16) NOT NULL,
	`transcode` varchar(16) NOT NULL,
	`senderbic` varchar(15) NOT NULL,
	`savingsid` bigint(10) NOT NULL,
	`sendername` varchar(50) NOT NULL,
	`senderaddress` varchar(50) NOT NULL,
	`receiverbic` varchar(15) NOT NULL,
	`receiversa` varchar(30) NOT NULL,
	`receivername` varchar(50) NOT NULL,
	`receiveraddress` varchar(50) NOT NULL,
	`reference` varchar(33) NOT NULL,
	`transdate` date NOT NULL,
	`makerid` mediumint(6) unsigned DEFAULT 'NULL',
	`approverid` mediumint(6) unsigned DEFAULT 'NULL',
	`branchid` smallint(4) unsigned DEFAULT 'NULL',
	`channel` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pesonet_outwardtransactions` (
	`transid` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`sequence` varchar(50) NOT NULL,
	`ofirefnum` varchar(16) NOT NULL,
	`rfirefnum` varchar(16) NOT NULL,
	`oficustomerrefnum` varchar(16) NOT NULL,
	`rficustomerrefnum` varchar(16) NOT NULL,
	`currency` char(3) NOT NULL,
	`amount` decimal(12,2) NOT NULL,
	`fee` decimal(6,2) NOT NULL,
	`activitycode` varchar(16) NOT NULL,
	`transcode` varchar(16) NOT NULL,
	`senderbic` varchar(15) NOT NULL,
	`savingsid` bigint(10) NOT NULL,
	`sendername` varchar(50) NOT NULL,
	`senderaddress` varchar(50) NOT NULL,
	`receiverbic` varchar(15) NOT NULL,
	`receiversa` varchar(16) NOT NULL,
	`receivername` varchar(50) NOT NULL,
	`receiveraddress` varchar(50) NOT NULL,
	`reference` varchar(33) NOT NULL,
	`transdate` date NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`postingtime` datetime NOT NULL,
	`status` varchar(15) NOT NULL,
	`apiGateway_referenceId` bigint(20) unsigned NOT NULL,
	`pesonet_receiveDate` datetime NOT NULL,
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`channel` tinyint(1) NOT NULL,
	`update_statuscode` varchar(5) DEFAULT 'NULL',
	`update_information` varchar(75) NOT NULL,
	`update_apiGateway_referenceId` bigint(20) unsigned NOT NULL,
	`creditback_savingstransactionid` bigint(12) unsigned DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `regulation_reports` (
	`report` varchar(25) NOT NULL,
	`gl_accounts` varchar(10000) NOT NULL,
	`cutoffdate` date NOT NULL,
	`gl_data` varchar(10000) NOT NULL,
	`sl_data` varchar(10000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rm_category` (
	`categoryid` int(5) NOT NULL,
	`categoryname` char(150) NOT NULL,
	`parent` int(5) NOT NULL,
	`level` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rm_concerns` (
	`concernid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` mediumint(5) unsigned NOT NULL,
	`concern_type` tinyint(1) unsigned NOT NULL,
	`concern_channel` tinyint(1) unsigned NOT NULL,
	`time_reported` datetime NOT NULL,
	`time_occured` datetime NOT NULL,
	`time_resolved` datetime DEFAULT 'NULL',
	`reporter_name` varchar(50) NOT NULL,
	`reporter_cpnumber` char(11) NOT NULL,
	`concerned_name` varchar(50) NOT NULL,
	`concerned_cpnumber` char(11) NOT NULL,
	`particulars` varchar(500) NOT NULL,
	`categoryid` char(4) NOT NULL,
	`action` tinyint(1) NOT NULL,
	`action_maker` varchar(500) NOT NULL,
	`action_escalator` varchar(500) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`escalatorid` mediumint(6) unsigned NOT NULL,
	`concern_status` tinyint(1) unsigned NOT NULL,
	`conductid` tinyint(2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rm_concernsettings` (
	`name` char(25) NOT NULL,
	`data` varchar(50000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rm_diary` (
	`diaryid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`postingTime` datetime NOT NULL,
	`clientid` bigint(20) unsigned NOT NULL,
	`concern` tinyint(1) unsigned NOT NULL,
	`concernid` bigint(12) unsigned NOT NULL,
	`entry` varchar(1000) NOT NULL,
	`makerid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rm_event` (
	`eventid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`dateReported` date NOT NULL,
	`dateOccuredFrom` date NOT NULL,
	`dateOccuredTo` date NOT NULL,
	`dateDiscovered` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`risklevel` tinyint(1) NOT NULL,
	`categoryid` mediumint(9) NOT NULL,
	`eventdetails` text NOT NULL,
	`rootcause` varchar(500) NOT NULL,
	`actiontaken` varchar(500) NOT NULL,
	`recurrence` tinyint(3) unsigned NOT NULL,
	`businessimpact` tinyint(1) NOT NULL,
	`lossamount` decimal(12,2) NOT NULL,
	`dateLossBooking` date NOT NULL,
	`dateTargetResolution` date NOT NULL,
	`dateResolved` date NOT NULL,
	`recoverability` tinyint(3) unsigned NOT NULL,
	`reporterid` mediumint(6) unsigned NOT NULL,
	`endorserid` mediumint(6) unsigned NOT NULL,
	`dateendorsed` date NOT NULL,
	`verifierid` mediumint(6) unsigned NOT NULL,
	`dateverify` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ropa_details` (
	`ropaid` int(11) AUTO_INCREMENT NOT NULL,
	`branchid` char(8) NOT NULL,
	`ropaNumber` varchar(100) NOT NULL,
	`date` date NOT NULL,
	`collateralid` int(11) NOT NULL,
	`dateofcos` date NOT NULL,
	`dateofcosa` date NOT NULL,
	`dateofconsolidation` date NOT NULL,
	`cgtamount` decimal(12,2) NOT NULL,
	`dstamount` decimal(12,2) NOT NULL,
	`air` decimal(12,2) NOT NULL,
	`acl` decimal(12,2) NOT NULL,
	`appraisedvalueLand` decimal(12,2) NOT NULL,
	`appraisedvalueBuilding` decimal(12,2) NOT NULL,
	`bookvalue` decimal(12,2) NOT NULL,
	`dateappraised` date NOT NULL,
	`taxpaymentdate` date NOT NULL,
	`sellingprice` decimal(12,2) NOT NULL,
	`ropaimage` varchar(100) NOT NULL,
	`consolidated` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ropa_loanbalancetemp` (
	`tempid` int(11) AUTO_INCREMENT NOT NULL,
	`pnid` bigint(12) NOT NULL,
	`previousloanstatus` tinyint(4) NOT NULL,
	`groupid` int(11) NOT NULL,
	`loanbalance` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ropa_salespaymentdetails` (
	`orid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`ropaid` int(11) NOT NULL,
	`datesold` date NOT NULL,
	`ornumber` char(20) NOT NULL,
	`buyer` varchar(100) NOT NULL,
	`otherexpenses` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_accounts` (
	`savingsid` bigint(10) unsigned NOT NULL,
	`savingsid_previous_cbs` varchar(50) DEFAULT 'NULL',
	`accountname` char(150) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`type` tinyint(2) unsigned NOT NULL,
	`corpclientid` bigint(10) unsigned NOT NULL,
	`client1id` bigint(10) unsigned NOT NULL,
	`client2id` bigint(10) unsigned NOT NULL,
	`client3id` bigint(10) unsigned NOT NULL,
	`client4id` bigint(10) unsigned NOT NULL,
	`groupid` mediumint(6) unsigned NOT NULL,
	`productid` smallint(5) unsigned NOT NULL,
	`productidOrig` smallint(5) unsigned NOT NULL,
	`opendate` date NOT NULL,
	`tellerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`closedate` date NOT NULL,
	`accountstatusprev` tinyint(3) unsigned NOT NULL,
	`accountstatus` tinyint(3) unsigned NOT NULL,
	`intcreditdate` date NOT NULL,
	`previoustransdate` date NOT NULL,
	`latesttransdate` date NOT NULL,
	`previousbalance1` decimal(12,2) NOT NULL,
	`previousbalance2` decimal(12,2) NOT NULL,
	`currentbalance1` decimal(12,2) NOT NULL,
	`currentbalance2` decimal(12,2) NOT NULL,
	`grossinterest` decimal(12,2) unsigned NOT NULL,
	`netinterest` decimal(12,2) unsigned NOT NULL,
	`note1` char(250) NOT NULL,
	`note2` char(100) NOT NULL,
	`holdout` decimal(12,2) unsigned NOT NULL,
	`adb` decimal(12,2) unsigned NOT NULL,
	`is_wtax_exempt` char(1) NOT NULL,
	`is_frozen` char(1) NOT NULL,
	`linepassbook` tinyint(2) unsigned NOT NULL,
	`printedpassbook` bigint(14) unsigned NOT NULL,
	`lineledger` tinyint(2) unsigned NOT NULL,
	`printedledger` bigint(14) unsigned NOT NULL,
	`hash` char(32) NOT NULL,
	`postingtime` datetime NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`solicitorid` mediumint(6) unsigned NOT NULL,
	`openAmount` decimal(12,2) unsigned NOT NULL,
	`from_mobile` tinyint(1) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `savings_accountsautodebit` (
	`savingsid` bigint(10) unsigned NOT NULL,
	`savingsid_autodebit` bigint(10) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_accountstemp` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`type` tinyint(2) unsigned NOT NULL,
	`corpclientid` bigint(10) unsigned NOT NULL,
	`client1id` bigint(10) unsigned NOT NULL,
	`client2id` bigint(10) unsigned NOT NULL,
	`client3id` bigint(10) unsigned NOT NULL,
	`client4id` bigint(10) unsigned NOT NULL,
	`productid` smallint(5) unsigned NOT NULL,
	`savingscategory` tinyint(1) unsigned NOT NULL,
	`opendate` date NOT NULL,
	`latesttransdate` date NOT NULL,
	`intcreditdate` date NOT NULL,
	`note1` char(250) NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`specialrate` decimal(5,3) unsigned NOT NULL,
	`aggregatorid` bigint(10) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`renewaloption` tinyint(1) unsigned NOT NULL,
	`accountlinkid` bigint(10) unsigned NOT NULL,
	`ssadate` date NOT NULL,
	`ssaterm` smallint(4) NOT NULL,
	`ssaterm_orig` smallint(4) unsigned NOT NULL,
	`ssamaturity` date NOT NULL,
	`ssarate` decimal(5,3) unsigned NOT NULL,
	`ssarate_before` decimal(5,3) unsigned NOT NULL,
	`ssarate_after` decimal(5,3) unsigned NOT NULL,
	`autodebitsavingsid` bigint(10) unsigned NOT NULL,
	`solicitorid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_bracketbalance` (
	`lower` decimal unsigned NOT NULL,
	`upper` decimal unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_bracketrate` (
	`bracket` decimal(10,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_certificate_letter` (
	`savingscertificateid` smallint(6) NOT NULL,
	`code1` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_changes` (
	`change_id` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`change_type` char(1) NOT NULL,
	`change_details` varchar(25000) NOT NULL,
	`makerid` varchar(6) NOT NULL,
	`approverid` varchar(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_checkdeptemp` (
	`savingsid` bigint(10) unsigned NOT NULL,
	`checktype` tinyint(3) unsigned NOT NULL,
	`checkdetails` varchar(34) NOT NULL,
	`checkamount` decimal(12,2) unsigned NOT NULL,
	`clearingdays` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_checksforceclear` (
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`systemdate` date NOT NULL,
	`daystoclear` tinyint(1) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_checksonfloat` (
	`savingstransactionid` bigint(12) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`transactiondate` date NOT NULL,
	`transaction` tinyint(3) unsigned NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`checktype` tinyint(3) unsigned NOT NULL,
	`reference` varchar(30) NOT NULL,
	`check_number` varchar(20) NOT NULL,
	`clearingdays` tinyint(3) unsigned NOT NULL,
	`daystoclear` tinyint(3) unsigned NOT NULL,
	`returned` tinyint(1) unsigned NOT NULL,
	`forceclearmakerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_clearingdays` (
	`id` tinyint(3) unsigned NOT NULL,
	`name` char(15) NOT NULL,
	`clearingdays` tinyint(2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_dormant_letter` (
	`savingsproductid` smallint(6) NOT NULL,
	`code1` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_errorcorrect` (
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`justification` varchar(300) DEFAULT 'NULL',
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_errorcorrectlink` (
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`ecsavingstransactionid` bigint(12) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_errorcorrecttemp` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`transactionid` bigint(12) unsigned NOT NULL,
	`amount` decimal(16,2) unsigned NOT NULL,
	`justification` varchar(300) DEFAULT 'NULL',
	`tellerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_interestrates` (
	`productid` smallint(3) unsigned NOT NULL,
	`lower` decimal(16,2) unsigned NOT NULL,
	`upper` decimal(16,2) unsigned NOT NULL,
	`rate` decimal(6,4) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_memoglcodes` (
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_products` (
	`productid` mediumint(5) unsigned AUTO_INCREMENT NOT NULL,
	`productname` char(30) NOT NULL,
	`productcode` char(5) NOT NULL,
	`savingscategory` tinyint(1) NOT NULL,
	`savingsType` tinyint(2) unsigned NOT NULL,
	`ssaallownoncash` tinyint(1) unsigned NOT NULL,
	`isTD` tinyint(1) unsigned NOT NULL,
	`tdDSTexpenseGlcode` int(9) unsigned NOT NULL,
	`tdDSTpayableGlcode` int(9) unsigned NOT NULL,
	`daysinayear` smallint(3) unsigned NOT NULL,
	`interestcrediting` smallint(5) unsigned NOT NULL,
	`interestcreditingbasis` tinyint(1) unsigned NOT NULL,
	`closeonzerobalance` tinyint(1) unsigned NOT NULL,
	`daysinactive` smallint(3) DEFAULT 'NULL',
	`printvalidation` tinyint(1) unsigned NOT NULL,
	`printpassbook` tinyint(1) unsigned NOT NULL,
	`balancetoearn` decimal(12,2) unsigned NOT NULL,
	`balancemin` decimal(12,2) unsigned NOT NULL,
	`balancemincharge` decimal(8,2) unsigned NOT NULL,
	`balanceminchargeglcode` int(9) unsigned NOT NULL,
	`chargegraceperiod` smallint(3) unsigned NOT NULL,
	`balancetoearn2` decimal(12,2) unsigned NOT NULL,
	`balancemin2` decimal(12,2) unsigned NOT NULL,
	`balancemincharge2` decimal(8,2) unsigned NOT NULL,
	`balanceminchargeglcode2` int(9) unsigned NOT NULL,
	`chargegraceperiod2` smallint(3) unsigned NOT NULL,
	`closeaccountfee` decimal(12,2) unsigned NOT NULL,
	`closeaccountfeeglcode` int(9) unsigned NOT NULL,
	`closeaccountfee2` decimal(12,2) unsigned NOT NULL,
	`closeaccountfeeglcode2` int(9) unsigned NOT NULL,
	`withdrawalLimit1` decimal(12,2) unsigned NOT NULL,
	`withdrawalLimit2` decimal(12,2) unsigned NOT NULL,
	`withdrawalLimit3` decimal(12,2) unsigned NOT NULL,
	`withdrawalLimit4` decimal(12,2) NOT NULL,
	`withdrawalLimit5` decimal(12,2) NOT NULL,
	`withdrawalLimit6` decimal(12,2) NOT NULL,
	`rateBracket1` decimal(14,2) unsigned NOT NULL,
	`rateBracket2` decimal(14,2) unsigned NOT NULL,
	`rateBracket3` decimal(14,2) unsigned NOT NULL,
	`rateBracket4` decimal(14,2) unsigned NOT NULL,
	`rate1` decimal(5,3) unsigned NOT NULL,
	`rate2` decimal(5,3) unsigned NOT NULL,
	`rate3` decimal(5,3) unsigned NOT NULL,
	`rate4` decimal(5,3) unsigned NOT NULL,
	`rate5` decimal(5,3) unsigned NOT NULL,
	`is_wtax_exempt` char(1) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`ieglcode` int(9) unsigned NOT NULL,
	`ismicro` tinyint(1) unsigned NOT NULL,
	`smsLanguage` tinyint(1) unsigned NOT NULL,
	`smsFreeADB` int(7) unsigned NOT NULL,
	`sms_showbalance` tinyint(3) unsigned NOT NULL,
	`dormantglcode` int(9) unsigned NOT NULL,
	`dormancyP` smallint(4) unsigned NOT NULL,
	`dormancychargeP` decimal(8,2) unsigned NOT NULL,
	`dormancychargeglcodeP` int(9) unsigned NOT NULL,
	`dormancyNP` smallint(4) unsigned NOT NULL,
	`dormancychargeNP` decimal(8,2) unsigned NOT NULL,
	`dormancychargeglcodeNP` int(9) unsigned NOT NULL,
	`dormantdebitoption` tinyint(1) unsigned zerofill NOT NULL,
	`status` tinyint(3) unsigned NOT NULL,
	`requireautodebitaccount` tinyint(1) unsigned NOT NULL,
	`bookletCostPer` decimal(10,2) unsigned NOT NULL,
	`bookletCostCom` decimal(10,2) unsigned NOT NULL,
	`bookletcostglcode` int(9) unsigned NOT NULL,
	`clearingchargeglcode` int(9) unsigned NOT NULL,
	`chargedaif1` decimal(8,2) unsigned NOT NULL,
	`chargedaif2` decimal(8,2) unsigned NOT NULL,
	`chargedaifper` decimal(8,2) unsigned NOT NULL,
	`chargedaifovernight` decimal(8,2) unsigned NOT NULL,
	`chargedaud1` decimal(8,2) unsigned NOT NULL,
	`chargedaud2` decimal(8,2) unsigned NOT NULL,
	`chargedaudper` decimal(8,2) unsigned NOT NULL,
	`chargedaudovernight` decimal(8,2) unsigned NOT NULL,
	`chargeholdout` decimal(8,2) unsigned NOT NULL,
	`chargespoclearing` decimal(8,2) unsigned NOT NULL,
	`chargespoposting` decimal(8,2) unsigned NOT NULL,
	`chargedeficient` decimal(8,2) unsigned NOT NULL,
	`chargealteration` decimal(8,2) unsigned NOT NULL,
	`chargeinvaliddate` decimal(8,2) unsigned NOT NULL,
	`chargeinvalidsignature` decimal(8,2) unsigned NOT NULL,
	`accountname_x` smallint(3) unsigned NOT NULL,
	`accountname_y` smallint(3) unsigned NOT NULL,
	`savingsid_x` smallint(3) unsigned NOT NULL,
	`savingsid_y` smallint(3) unsigned NOT NULL,
	`barcode_x` smallint(3) unsigned NOT NULL,
	`barcode_y` smallint(3) unsigned NOT NULL,
	`branchname_x` smallint(3) unsigned NOT NULL,
	`branchname_y` smallint(3) unsigned NOT NULL,
	`productname_x` smallint(3) unsigned NOT NULL,
	`productname_y` smallint(3) unsigned NOT NULL,
	`cpno_x` smallint(3) unsigned NOT NULL,
	`cpno_y` smallint(3) unsigned NOT NULL,
	`balFwd_x` smallint(3) NOT NULL,
	`balFwd_y` smallint(3) NOT NULL,
	`reference_maxchar` smallint(3) unsigned NOT NULL,
	`y_topstart` smallint(3) unsigned NOT NULL,
	`totallines` smallint(3) unsigned NOT NULL,
	`skiplinestart` smallint(3) unsigned NOT NULL,
	`skiplineend` smallint(2) unsigned NOT NULL,
	`charmask` char(1) NOT NULL,
	`transchar` tinyint(2) unsigned NOT NULL,
	`balancechar` tinyint(2) unsigned NOT NULL,
	`x_date` smallint(3) unsigned NOT NULL,
	`x_maturity` smallint(3) unsigned NOT NULL,
	`x_debit` smallint(3) unsigned NOT NULL,
	`x_credit` smallint(3) unsigned NOT NULL,
	`x_balance1` smallint(3) unsigned NOT NULL,
	`x_balance2` smallint(3) unsigned NOT NULL,
	`x_transcode` smallint(3) unsigned NOT NULL,
	`x_user` smallint(3) unsigned NOT NULL,
	`deposit1_x` smallint(3) unsigned NOT NULL,
	`deposit1_y` smallint(3) unsigned NOT NULL,
	`deposit2_x` smallint(3) unsigned NOT NULL,
	`deposit2_y` smallint(3) unsigned NOT NULL,
	`withdrawal_x` smallint(3) unsigned NOT NULL,
	`withdrawal_y` smallint(3) unsigned NOT NULL,
	`chkencash_x` smallint(3) NOT NULL,
	`chkencash_y` smallint(3) NOT NULL,
	`cm_x` smallint(3) unsigned NOT NULL,
	`cm_y` smallint(3) unsigned NOT NULL,
	`dm_x` smallint(3) unsigned NOT NULL,
	`dm_y` smallint(3) unsigned NOT NULL,
	`rc_x` smallint(5) unsigned NOT NULL,
	`rc_y` smallint(5) unsigned NOT NULL,
	`bc_x` smallint(5) unsigned NOT NULL,
	`bc_y` smallint(5) unsigned NOT NULL,
	`erc_x` smallint(5) DEFAULT 'NULL',
	`erc_y` smallint(5) DEFAULT 'NULL',
	`checkClearedReflect` tinyint(1) NOT NULL,
	`dormantLetter` text NOT NULL,
	`tyLetter` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_productstouse` (
	`branchid` smallint(4) unsigned NOT NULL,
	`productid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssaaggregator` (
	`clientid` bigint(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`specialrate_aggregate` decimal(5,3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssaaggregatorhistory` (
	`historyid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`specialrate_aggregate` decimal(5,3) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssaplacement` (
	`savingsid` bigint(10) unsigned NOT NULL,
	`aggregatorid` bigint(10) unsigned NOT NULL,
	`renewaloption` tinyint(1) unsigned NOT NULL,
	`accountlinkid` bigint(10) unsigned NOT NULL,
	`specialrate` decimal(5,3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssaplacementdetails` (
	`placementid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`interestSavingstransactionid` bigint(12) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`renewaloption` tinyint(1) unsigned NOT NULL,
	`amount` decimal(14,2) unsigned NOT NULL,
	`ssadate` date NOT NULL,
	`ssaterm` smallint(4) unsigned NOT NULL,
	`ssaterm_orig` smallint(4) unsigned NOT NULL,
	`ssamaturity` date NOT NULL,
	`specialrate` decimal(5,3) unsigned NOT NULL,
	`specialrate_aggregate` decimal(5,3) unsigned NOT NULL,
	`ssarate` decimal(5,3) NOT NULL,
	`ssarate_before` decimal(5,3) NOT NULL,
	`ssarate_after` decimal(5,3) NOT NULL,
	`date_terminated` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssaplacementhistory` (
	`historyid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`renewaloption` tinyint(1) unsigned NOT NULL,
	`accountlinkid` bigint(10) unsigned NOT NULL,
	`specialrate` decimal(4,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssarate1` (
	`termid` int(11) NOT NULL,
	`productid` smallint(5) unsigned NOT NULL,
	`lower` smallint(4) NOT NULL,
	`upper` smallint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssarate2` (
	`rateid` int(11) AUTO_INCREMENT NOT NULL,
	`productid` smallint(5) unsigned NOT NULL,
	`indexid` smallint(5) NOT NULL,
	`termid` int(11) NOT NULL,
	`lower` decimal(12,2) NOT NULL,
	`upper` decimal(12,2) NOT NULL,
	`ssarate` decimal(5,3) unsigned NOT NULL,
	`ssarate_half1` decimal(5,3) unsigned NOT NULL,
	`ssarate_before` decimal(5,3) unsigned NOT NULL,
	`ssarate_after` decimal(5,3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_ssa_recompute` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`method` tinyint(1) unsigned NOT NULL,
	`transactor` varchar(300) NOT NULL,
	`details` varchar(25000) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_transactioncodes` (
	`transaction` smallint(6) NOT NULL,
	`listorder` decimal(4,1) NOT NULL,
	`multiplier` tinyint(1) NOT NULL,
	`name` char(50) NOT NULL,
	`code` char(4) NOT NULL,
	`shortcut` char(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_transactions` (
	`savingstransactionid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`branchidTrans` smallint(4) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`savingsid2` bigint(10) unsigned NOT NULL,
	`productid` smallint(4) unsigned NOT NULL,
	`postingtime` datetime NOT NULL,
	`transactiondate` date NOT NULL,
	`transaction` smallint(3) unsigned NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`checktype` tinyint(1) unsigned NOT NULL,
	`reference` varchar(100) NOT NULL,
	`currentbalance1` decimal(12,2) NOT NULL,
	`currentbalance2` decimal(12,2) NOT NULL,
	`grossinterest` decimal(12,2) NOT NULL,
	`netinterest` decimal(12,2) NOT NULL,
	`errorcorrected` tinyint(1) unsigned NOT NULL,
	`latesttransdate` date NOT NULL,
	`accountstatusprev` tinyint(3) unsigned NOT NULL,
	`accountstatus` tinyint(3) unsigned NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_transactions_wtax` (
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`wtax` decimal(12,2) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `savings_transapproval` (
	`savingstransactionid` bigint(12) unsigned NOT NULL,
	`limitAmount` decimal(12,2) unsigned NOT NULL,
	`approvalType` tinyint(1) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_transapprovaltemp` (
	`tempid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`approvalType` tinyint(1) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`transaction` smallint(3) unsigned NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`checktype` tinyint(1) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`reference` varchar(100) NOT NULL,
	`ssaterm_orig` smallint(4) unsigned NOT NULL,
	`tellerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_type` (
	`productid` int(10) unsigned NOT NULL,
	`type` tinyint(2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `savings_uploads` (
	`upload_id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`date_uploaded` date NOT NULL,
	`date_approved` date NOT NULL,
	`reference` varchar(100) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`transaction` smallint(3) unsigned NOT NULL,
	`transcount` smallint(3) unsigned NOT NULL,
	`postamount` decimal(12,2) unsigned NOT NULL,
	`array_data` mediumtext NOT NULL,
	`makerid` mediumint(6) NOT NULL,
	`approverid` mediumint(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_amortdetails` (
	`scrid` bigint(12) unsigned NOT NULL,
	`amortnumber` smallint(5) unsigned NOT NULL,
	`datedue` date NOT NULL,
	`datedue_orig` date NOT NULL,
	`principal` decimal(12,2) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`savings` decimal(10,2) unsigned NOT NULL,
	`amort1` decimal(10,2) unsigned NOT NULL,
	`amort2` decimal(10,2) unsigned NOT NULL,
	`presentvalue` decimal(12,2) NOT NULL,
	`datepaid` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_discount` (
	`discountid` int(10) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`discountinterest` decimal(10,2) DEFAULT 'NULL',
	`discountservicecharge` decimal(10,2) DEFAULT 'NULL',
	`discountsavings` decimal(10,2) DEFAULT 'NULL',
	`discountamort1` decimal(10,2) DEFAULT 'NULL',
	`discountamort2` decimal(10,2) DEFAULT 'NULL',
	`discountpenalty` decimal(10,2) DEFAULT 'NULL',
	`discountpastdueinterest` decimal(10,2) DEFAULT 'NULL',
	`justification` varchar(250) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_discountamortization` (
	`amortnumber` int(11) NOT NULL,
	`scrid` bigint(12) NOT NULL,
	`begBalance` decimal(12,2) NOT NULL,
	`discountAmort` decimal(12,2) NOT NULL,
	`endBalance` decimal(12,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_loandetails` (
	`scrid` bigint(12) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`ropaid` bigint(12) NOT NULL,
	`spouseid` int(11) NOT NULL,
	`scrid2` char(25) NOT NULL,
	`branchid` smallint(3) unsigned NOT NULL,
	`settingid` smallint(3) unsigned NOT NULL,
	`termunit` tinyint(1) unsigned NOT NULL,
	`term` smallint(4) unsigned NOT NULL,
	`date` date NOT NULL,
	`dateApplied` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`maturity` date NOT NULL,
	`maturity2` date NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`interestrate` decimal(4,2) unsigned NOT NULL,
	`discountInterest` double NOT NULL,
	`sellingprice` decimal(12,2) NOT NULL,
	`downpaymenttype` tinyint(4) NOT NULL,
	`downpaymentrate` int(11) NOT NULL,
	`downpayment` decimal(12,2) NOT NULL,
	`interestcomputation` tinyint(1) unsigned NOT NULL,
	`irr` decimal(5,2) unsigned NOT NULL,
	`eir` decimal(5,2) unsigned NOT NULL,
	`eir_int` decimal(7,5) unsigned NOT NULL,
	`eir_sc` decimal(7,5) unsigned NOT NULL,
	`interestcomputationbasis` tinyint(3) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`savings` decimal(10,2) unsigned NOT NULL,
	`proceeds` decimal(12,2) unsigned NOT NULL,
	`proceedstype` tinyint(1) unsigned NOT NULL,
	`proceedsreference` char(25) NOT NULL,
	`creditorid` smallint(3) unsigned NOT NULL,
	`workersemployed` smallint(5) unsigned NOT NULL,
	`industryid` smallint(3) unsigned NOT NULL,
	`loanclassid` smallint(5) unsigned NOT NULL,
	`loanpurposeid` smallint(5) unsigned NOT NULL,
	`loanpurpose` char(200) NOT NULL,
	`securityid` smallint(5) unsigned NOT NULL,
	`assetsizeid` tinyint(2) unsigned NOT NULL,
	`clientgroupid` smallint(5) unsigned NOT NULL,
	`restructuredtag` tinyint(3) unsigned NOT NULL,
	`restructuredscrid` bigint(12) unsigned NOT NULL,
	`restructuredCount` tinyint(3) unsigned NOT NULL,
	`autodebitAmort` tinyint(1) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`amort2destination` tinyint(1) unsigned NOT NULL,
	`loancycle` smallint(5) unsigned NOT NULL,
	`loanofficerid` mediumint(6) unsigned NOT NULL,
	`solicitortype` tinyint(4) NOT NULL,
	`solicitorid` int(11) NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL,
	`tellerid` mediumint(6) unsigned NOT NULL,
	`loanstatus` tinyint(3) unsigned NOT NULL,
	`loanstatusstatic` tinyint(1) unsigned NOT NULL,
	`loanstatusUpdate` tinyint(3) unsigned NOT NULL,
	`loanbalance` decimal(12,2) NOT NULL,
	`nextdatedue` date NOT NULL,
	`lasttransdate` date NOT NULL,
	`datepaidOrig` date NOT NULL,
	`approverid` mediumint(5) unsigned NOT NULL,
	`lettercount` tinyint(1) NOT NULL,
	`promptPayment` decimal(4,1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_loandetailstemp` (
	`scrid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`clientid` int(10) unsigned NOT NULL,
	`ropaid` int(11) NOT NULL,
	`scrid2` char(25) NOT NULL,
	`branchid` smallint(3) unsigned NOT NULL,
	`settingid` smallint(3) unsigned NOT NULL,
	`termunit` tinyint(1) unsigned NOT NULL,
	`term` smallint(4) unsigned NOT NULL,
	`termApplied` smallint(4) unsigned NOT NULL,
	`termDaysFixed` tinyint(3) unsigned NOT NULL,
	`amortdayoption1` tinyint(3) unsigned NOT NULL,
	`amortdayoption2` tinyint(4) NOT NULL,
	`date` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`maturity` date NOT NULL,
	`maturity2` date NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`amountApplied` decimal(12,2) unsigned NOT NULL,
	`sellingprice` decimal(12,2) NOT NULL,
	`downpaymenttype` tinyint(4) NOT NULL,
	`downpaymentrate` int(11) NOT NULL,
	`interestrate` decimal(4,2) unsigned NOT NULL,
	`discountInterest` double NOT NULL,
	`interestcomputation` tinyint(1) unsigned NOT NULL,
	`interestcomputationbasis` tinyint(3) unsigned NOT NULL,
	`diminishingequalprincipal` tinyint(1) unsigned NOT NULL,
	`interest` decimal(10,2) unsigned NOT NULL,
	`servicecharge` decimal(10,2) unsigned NOT NULL,
	`servicechargediscountedflex` char(25) NOT NULL,
	`scamortvalue` decimal(10,2) unsigned NOT NULL,
	`savingsamortized` decimal(10,2) unsigned NOT NULL,
	`amort1value` decimal(10,2) unsigned NOT NULL,
	`amort2value` decimal(10,2) unsigned NOT NULL,
	`principalInterval` tinyint(2) unsigned NOT NULL,
	`principalIntervalAdjustment` tinyint(2) NOT NULL,
	`principalIntervalIrregular` char(25) NOT NULL,
	`amortFixed` decimal(10,2) unsigned NOT NULL,
	`partialInt` tinyint(3) unsigned NOT NULL,
	`partialSC` tinyint(3) unsigned NOT NULL,
	`proceeds` decimal(12,2) unsigned NOT NULL,
	`proceedstype` tinyint(1) unsigned NOT NULL,
	`proceedsreference` char(25) NOT NULL,
	`creditorid` smallint(3) unsigned NOT NULL,
	`workersemployed` smallint(5) unsigned NOT NULL,
	`industryid` smallint(3) unsigned NOT NULL,
	`loanclassid` smallint(5) unsigned NOT NULL,
	`loanpurposeid` smallint(5) unsigned NOT NULL,
	`loanpurpose` char(200) NOT NULL,
	`securityid` smallint(5) unsigned NOT NULL,
	`assetsizeid` tinyint(2) unsigned NOT NULL,
	`clientgroupid` smallint(5) unsigned NOT NULL,
	`restructuredtag` tinyint(3) unsigned NOT NULL,
	`restructuredscrid` bigint(12) unsigned NOT NULL,
	`restructuredCount` tinyint(3) unsigned NOT NULL,
	`autodebitAmort` tinyint(1) unsigned NOT NULL,
	`loanstatusstatic` tinyint(1) unsigned NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`loancycle` smallint(5) unsigned NOT NULL,
	`loanofficerid` mediumint(5) unsigned NOT NULL,
	`companyrepid` int(10) unsigned NOT NULL,
	`solicitortype` tinyint(1) unsigned NOT NULL,
	`solicitorid` int(10) unsigned NOT NULL,
	`postedbyid` mediumint(5) unsigned NOT NULL,
	`tellerid` mediumint(5) NOT NULL,
	`provision_manual` decimal(4,2) unsigned NOT NULL,
	`amortdetailstemp` text NOT NULL,
	`isapproved` tinyint(3) unsigned NOT NULL,
	`approverid` mediumint(5) unsigned NOT NULL,
	`approverid2` mediumint(5) NOT NULL,
	`interestdiscounted` decimal(10,2) DEFAULT '0.00',
	`servicechargediscounted` decimal(10,2) DEFAULT '0.00',
	`insurance` decimal(10,2) DEFAULT '0.00',
	`savingsdiscounted` decimal(10,2) DEFAULT '0.00'
);
--> statement-breakpoint
CREATE TABLE `scr_misposting` (
	`transdate` date NOT NULL,
	`branchid` smallint(3) unsigned NOT NULL,
	`oridold` bigint(20) unsigned NOT NULL,
	`orid` bigint(20) unsigned NOT NULL,
	`makerid` mediumint(6) NOT NULL,
	`approverid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_mispostingtemp` (
	`branchid` smallint(3) NOT NULL,
	`mispostingdate` date NOT NULL,
	`orid` bigint(20) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_paymentdetails` (
	`paymentid` bigint(12) unsigned NOT NULL,
	`scrid` bigint(12) unsigned NOT NULL,
	`amortnumber` smallint(5) unsigned NOT NULL,
	`principalpmt` decimal(10,2) NOT NULL,
	`interestpmt` decimal(10,2) NOT NULL,
	`servicechargepmt` decimal(10,2) DEFAULT 'NULL',
	`savingspmt` decimal(10,2) DEFAULT 'NULL',
	`amort1pmt` decimal(10,2) DEFAULT 'NULL',
	`amort2pmt` decimal(10,2) DEFAULT 'NULL',
	`penaltypmt` decimal(10,2) DEFAULT 'NULL',
	`pastdueinterestpmt` decimal(10,2) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `scr_payments` (
	`paymentid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`postingtime` datetime NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`paymentdate` date NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`ornumber` char(20) NOT NULL,
	`paymentmode` smallint(6) NOT NULL,
	`paymentreference` varchar(50) NOT NULL,
	`paymentamount` decimal(10,2) NOT NULL,
	`postedbyid` mediumint(6) unsigned NOT NULL,
	`scrid` bigint(12) unsigned NOT NULL,
	`scrid_index` bigint(12) unsigned NOT NULL,
	`loanbalance` decimal(12,2) NOT NULL,
	`nextdatedue` date NOT NULL,
	`savingsexcess` decimal(10,2) NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`loanstatusprevious` tinyint(1) unsigned NOT NULL,
	`loanstatus` tinyint(2) unsigned NOT NULL,
	`loanclassid` smallint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_paymentsor` (
	`orid` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`postingtime` datetime NOT NULL,
	`transdate` date NOT NULL,
	`branchid` mediumint(4) unsigned NOT NULL,
	`clienttype` tinyint(1) unsigned NOT NULL,
	`clientid` bigint(12) unsigned NOT NULL,
	`ornumber` char(20) NOT NULL,
	`paymentmode` tinyint(1) NOT NULL,
	`paymentreference` char(50) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`oramount` decimal(12,2) NOT NULL,
	`orstatus` tinyint(1) unsigned NOT NULL,
	`type` tinyint(4) NOT NULL,
	`tellerid` mediumint(5) unsigned NOT NULL,
	`makerid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_provision` (
	`assessment` tinyint(3) unsigned NOT NULL,
	`security` tinyint(1) unsigned NOT NULL,
	`lower` smallint(4) NOT NULL,
	`upper` smallint(4) NOT NULL,
	`rate` decimal(5,2) unsigned NOT NULL,
	`aclClass` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_provisionqualitative` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`provision_manual` decimal(5,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_releasedelete` (
	`releasedeleteid` int(11) AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`branchid` mediumint(4) unsigned NOT NULL,
	`scrid` bigint(12) unsigned NOT NULL,
	`clientid` int(10) NOT NULL,
	`loanamount` decimal(12,2) NOT NULL,
	`reason` varchar(300) NOT NULL,
	`makerid` mediumint(5) unsigned NOT NULL,
	`approverid` mediumint(8) unsigned NOT NULL,
	`status` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_remittancedelete` (
	`branchid` smallint(4) NOT NULL,
	`orid` bigint(20) unsigned NOT NULL,
	`ornumber` bigint(15) unsigned NOT NULL,
	`clientname` char(50) NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`userid` mediumint(5) NOT NULL,
	`approverid` mediumint(5) unsigned NOT NULL,
	`deletetime` datetime NOT NULL,
	`deletesystemdate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_remittancedeletetemp` (
	`branchid` smallint(4) unsigned NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned DEFAULT 'NULL',
	`approverid` mediumint(6) unsigned DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `scr_remittancedeletetemp2` (
	`orid` bigint(20) unsigned NOT NULL,
	`scrid` bigint(12) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_returncheck` (
	`transdate` date NOT NULL,
	`branchid` smallint(3) unsigned NOT NULL,
	`oridold` bigint(20) unsigned NOT NULL,
	`orid` bigint(20) unsigned NOT NULL,
	`makerid` mediumint(6) NOT NULL,
	`approverid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_returnchecktemp` (
	`branchid` smallint(3) NOT NULL,
	`transdate` date NOT NULL,
	`orid` bigint(20) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_settings` (
	`settingid` int(12) AUTO_INCREMENT NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`name` varchar(20) NOT NULL,
	`shortname` char(5) NOT NULL,
	`description` varchar(100) NOT NULL,
	`type` tinyint(1) unsigned NOT NULL,
	`usepnform` tinyint(1) unsigned NOT NULL,
	`downpaymenttype` tinyint(11) NOT NULL,
	`downpaymentrate` decimal(12,2) NOT NULL,
	`downpaymentrateflexibility` int(11) NOT NULL,
	`loanamountmaximum` int(10) NOT NULL,
	`loancountmaximum` tinyint(3) unsigned NOT NULL,
	`loanproductceiling` decimal(14,2) unsigned NOT NULL,
	`grouping` tinyint(1) NOT NULL,
	`weekadjuster` tinyint(1) unsigned NOT NULL,
	`groupby` tinyint(1) NOT NULL,
	`requirecoborrower` tinyint(1) unsigned NOT NULL,
	`requiredcomakers` tinyint(1) unsigned NOT NULL,
	`requireworkersemployed` tinyint(1) unsigned NOT NULL,
	`borrowertypedefault` mediumint(4) unsigned NOT NULL,
	`clientgroupdefault` smallint(5) unsigned NOT NULL,
	`requiresecurity` tinyint(3) unsigned NOT NULL,
	`defaultsecurity` tinyint(1) unsigned NOT NULL,
	`collectionlistdisplay` tinyint(3) unsigned NOT NULL,
	`isEmployeeLoan` tinyint(1) unsigned NOT NULL,
	`termunitflexibility` tinyint(3) unsigned NOT NULL,
	`termunit` tinyint(1) NOT NULL,
	`termflexibility` tinyint(1) NOT NULL,
	`termDaysFixed` tinyint(1) unsigned NOT NULL,
	`termDaysFixedFlex` tinyint(3) unsigned NOT NULL,
	`termdefault` tinyint(3) NOT NULL,
	`termmaximum` smallint(3) NOT NULL,
	`discountamort` int(11) NOT NULL,
	`scrdiscountglcode` int(11) NOT NULL,
	`scrinterestincomeglcode` int(11) NOT NULL,
	`interestrate` decimal(4,2) NOT NULL,
	`interestcomputation` tinyint(1) unsigned NOT NULL,
	`interestcomputationflexibility` tinyint(3) unsigned NOT NULL,
	`interestcomputationbasis` tinyint(3) unsigned NOT NULL,
	`interestcomputationbasisflexibility` tinyint(3) unsigned NOT NULL,
	`diminishingequalprincipal` tinyint(1) unsigned NOT NULL,
	`balloonoption` tinyint(3) unsigned NOT NULL,
	`computepastdueinterest` tinyint(3) unsigned NOT NULL,
	`daysinayear` smallint(3) unsigned NOT NULL,
	`interestrateflexibility` tinyint(1) NOT NULL,
	`interestrateminimum` decimal(4,2) NOT NULL,
	`interestdiscountbooking` tinyint(1) NOT NULL,
	`interestdiscountedglcode` int(9) unsigned NOT NULL,
	`interestamortizedglcode` int(9) unsigned NOT NULL,
	`firstamortint` tinyint(1) unsigned NOT NULL,
	`adjustonholidays` tinyint(1) NOT NULL,
	`amortrounding` tinyint(3) NOT NULL,
	`amortgraceperiod` tinyint(1) NOT NULL,
	`amortoption` text DEFAULT 'NULL',
	`autodebitAmort` tinyint(1) unsigned NOT NULL,
	`aclAssessment` decimal(12,0) unsigned NOT NULL,
	`scdiscounteduse` tinyint(1) unsigned NOT NULL,
	`scdiscountedname` char(20) NOT NULL,
	`scdiscountedflexibility` tinyint(1) NOT NULL,
	`scdiscountedMaxDays2Prorate` smallint(4) unsigned NOT NULL,
	`scbracketoption` tinyint(1) unsigned NOT NULL,
	`scdpyear` smallint(5) unsigned NOT NULL,
	`scrateoption` tinyint(1) unsigned NOT NULL,
	`scdiscountbooking` tinyint(1) NOT NULL,
	`scdiscountedglcode` int(9) unsigned NOT NULL,
	`scamortuse` tinyint(1) unsigned NOT NULL,
	`scamortname` char(18) NOT NULL,
	`scamortvalue` decimal(10,2) unsigned NOT NULL,
	`scamortoption` tinyint(1) unsigned NOT NULL,
	`scamortflexibility` tinyint(1) unsigned NOT NULL,
	`scamortglcode` int(9) unsigned NOT NULL,
	`penaltyrate` decimal(4,2) NOT NULL,
	`penaltyperamort` decimal(8,2) NOT NULL,
	`principalpenaltyoption` tinyint(1) NOT NULL,
	`pastduepenaltyrate` decimal(4,2) NOT NULL,
	`preterminationpenaltyrate` decimal(4,2) NOT NULL,
	`penaltyAmortFixedRate` decimal(4,2) unsigned NOT NULL,
	`penaltyAmortFixedAmount` decimal(12,2) unsigned NOT NULL,
	`penaltyAmortRunningRate` decimal(4,2) unsigned NOT NULL,
	`penaltyAmortGracePeriod` smallint(3) unsigned NOT NULL,
	`penaltyAmortBasis` tinyint(3) unsigned NOT NULL,
	`penaltyDueFixedRate` decimal(4,2) unsigned NOT NULL,
	`penaltyDueFixedAmount` decimal(12,2) unsigned NOT NULL,
	`penaltyDueRunningRate` decimal(4,2) unsigned NOT NULL,
	`penaltyDueGracePeriod` smallint(3) unsigned NOT NULL,
	`penaltyDueInclude` tinyint(3) unsigned NOT NULL,
	`penaltyglcode` int(9) unsigned NOT NULL,
	`pdinterestglcode` int(9) unsigned NOT NULL,
	`proceedstypedefault` int(11) NOT NULL,
	`amort1use` tinyint(1) NOT NULL,
	`amort1name` char(18) NOT NULL,
	`amort1value` decimal(10,2) unsigned NOT NULL,
	`amort1option` tinyint(1) unsigned NOT NULL,
	`amort1flexibility` tinyint(1) NOT NULL,
	`amort1glcode` int(9) unsigned NOT NULL,
	`amort2use` tinyint(1) NOT NULL,
	`amort2name` char(18) NOT NULL,
	`amort2value` decimal(10,2) unsigned NOT NULL,
	`amort2option` tinyint(1) unsigned NOT NULL,
	`amort2flexibility` tinyint(1) NOT NULL,
	`amort2glcode` int(9) unsigned NOT NULL,
	`amort2destination` tinyint(1) unsigned NOT NULL,
	`defaultcostcenter` int(6) unsigned NOT NULL,
	`currentglcode` int(9) unsigned NOT NULL,
	`pastdueglcode` int(9) unsigned NOT NULL,
	`nonperfglcode` int(9) unsigned NOT NULL,
	`inlitigationglcode` int(9) unsigned NOT NULL,
	`provisionglcode` int(9) unsigned NOT NULL,
	`cureperiod` smallint(3) unsigned NOT NULL,
	`cureperiod1` tinyint(3) unsigned NOT NULL,
	`cureperiod2` tinyint(3) unsigned NOT NULL,
	`cureperiod3` tinyint(3) unsigned NOT NULL,
	`cureperiod4` tinyint(3) unsigned NOT NULL,
	`cureperiod5` tinyint(3) unsigned NOT NULL,
	`cureperiod6` tinyint(3) unsigned NOT NULL,
	`cureperiod7` tinyint(3) unsigned NOT NULL,
	`cureperiod8` tinyint(3) unsigned NOT NULL,
	`smsLanguage` tinyint(1) unsigned NOT NULL,
	`smsFreeAmt` int(7) unsigned NOT NULL,
	`smsLoanBalance` int(7) NOT NULL,
	`smsUnpaidAmorts` tinyint(3) NOT NULL,
	`code_pn` text NOT NULL,
	`code_appform` text NOT NULL,
	`SapprovalAmountLevel1` decimal(12,2) unsigned NOT NULL,
	`SapprovalAmountLevel2` decimal(12,2) unsigned NOT NULL,
	`SapprovalAmountLevel3` decimal(12,2) unsigned NOT NULL,
	`SapprovalAmountLevel4` decimal(12,2) unsigned NOT NULL,
	`SapprovalAmountLevel5` decimal(12,2) unsigned NOT NULL,
	`UapprovalAmountLevel1` decimal(12,2) unsigned NOT NULL,
	`UapprovalAmountLevel2` decimal(12,2) unsigned NOT NULL,
	`UapprovalAmountLevel3` decimal(12,2) unsigned NOT NULL,
	`UapprovalAmountLevel4` decimal(12,2) unsigned NOT NULL,
	`UapprovalAmountLevel5` decimal(12,2) unsigned NOT NULL,
	`approvalRequired` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_tempremitor` (
	`orid` bigint(12) NOT NULL,
	`systemdate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scr_tempremitpmt` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`paymentamount` decimal(12,2) NOT NULL,
	`scrid` bigint(12) unsigned NOT NULL,
	`interestRecompute` tinyint(3) unsigned NOT NULL,
	`savingsexcess` decimal(10,2) NOT NULL,
	`savingsid` bigint(10) unsigned NOT NULL,
	`policyid` bigint(20) unsigned NOT NULL,
	`autodebit_savingsid` bigint(10) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sequence_generatepnid` (
	`next_not_cached_value` bigint(21) NOT NULL,
	`minimum_value` bigint(21) NOT NULL,
	`maximum_value` bigint(21) NOT NULL,
	`start_value` bigint(21) NOT NULL,
	`increment` bigint(21) NOT NULL,
	`cache_size` bigint(21) unsigned NOT NULL,
	`cycle_option` tinyint(1) unsigned NOT NULL,
	`cycle_count` bigint(21) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_balances` (
	`slbalanceid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`loans` decimal(12,2) unsigned NOT NULL,
	`savings` decimal(12,2) unsigned NOT NULL,
	`bp` decimal(12,2) unsigned NOT NULL,
	`ca` decimal(12,2) unsigned NOT NULL,
	`ar` decimal(12,2) unsigned NOT NULL,
	`ffe` decimal(12,2) unsigned NOT NULL,
	`cib` decimal(12,2) unsigned NOT NULL,
	`coci` decimal(12,2) unsigned NOT NULL,
	`coh` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_bank` (
	`bankid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`parentbankid` mediumint(4) unsigned NOT NULL,
	`branchname` varchar(55) NOT NULL,
	`accounttype` tinyint(4) NOT NULL,
	`accountnumber` varchar(25) NOT NULL,
	`contactperson` varchar(100) NOT NULL,
	`contactnumber` char(25) NOT NULL,
	`branchuser` smallint(4) unsigned NOT NULL,
	`currency` tinyint(4) NOT NULL,
	`banktype` tinyint(4) NOT NULL,
	`balance` decimal(14,2) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`interestglcode` int(9) unsigned NOT NULL,
	`bankstatus` tinyint(1) NOT NULL,
	`accreditation_number` varchar(25) NOT NULL,
	`compliance` tinyint(1) unsigned NOT NULL,
	`placement_amount` decimal(14,2) unsigned NOT NULL,
	`placementdate` date NOT NULL,
	`maturity` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_bankparent` (
	`parentbankid` mediumint(4) unsigned AUTO_INCREMENT NOT NULL,
	`bankname` char(50) NOT NULL,
	`bankcode` char(12) NOT NULL,
	`banktype` tinyint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_banktransactions` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`bankid` int(10) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`details` varchar(200) NOT NULL,
	`transaction` tinyint(2) unsigned NOT NULL,
	`memoglcode` int(9) unsigned NOT NULL,
	`withdrawal` decimal(14,2) unsigned NOT NULL,
	`deposit` decimal(14,2) unsigned NOT NULL,
	`balance` decimal(14,2) NOT NULL,
	`userid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_cashadvance` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`detail` varchar(255) NOT NULL,
	`payment` decimal(10,2) NOT NULL,
	`cashadvance` decimal(10,2) NOT NULL,
	`balance` decimal(10,2) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_consumabledeliverypartial` (
	`orderid` int(10) unsigned NOT NULL,
	`consumableid` int(10) unsigned NOT NULL,
	`deliveryQty` smallint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_consumabledispatch` (
	`dispatchid` int(11) AUTO_INCREMENT NOT NULL,
	`dispatchDate` date NOT NULL,
	`branchidOrigin` smallint(4) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`deliveredbyid` mediumint(6) unsigned NOT NULL,
	`consumableid` int(10) unsigned NOT NULL,
	`dispatchqty` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_consumableitems` (
	`consumableid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`consumablename` char(100) NOT NULL,
	`level` tinyint(2) NOT NULL,
	`parent` int(10) NOT NULL,
	`childcount` smallint(3) NOT NULL,
	`cost` decimal(12,2) NOT NULL,
	`reorderlevel` int(8) NOT NULL,
	`reorderqty` int(8) NOT NULL,
	`consumableunit` smallint(3) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_consumableorders` (
	`orderid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`dateOrdered` date NOT NULL,
	`dateCompleted` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`branchid` smallint(4) NOT NULL,
	`orderStatus` tinyint(2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_consumableordersdetails` (
	`orderdetailid` int(11) AUTO_INCREMENT NOT NULL,
	`orderid` int(10) unsigned NOT NULL,
	`consumableId` int(10) unsigned NOT NULL,
	`orderqty` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_consumabletrans` (
	`consumabletransid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`consumableid` int(10) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`transaction` tinyint(2) unsigned NOT NULL,
	`itemIn` mediumint(5) unsigned NOT NULL,
	`itemOut` mediumint(7) unsigned NOT NULL,
	`itemBalance` mediumint(7) NOT NULL,
	`itemAmount` decimal(10,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_creditor` (
	`creditorid` int(6) unsigned AUTO_INCREMENT NOT NULL,
	`creditorname` varchar(50) NOT NULL,
	`shortname` char(25) NOT NULL,
	`creditline` decimal(12,2) NOT NULL,
	`description` varchar(255) NOT NULL,
	`fundertag` varchar(100) NOT NULL,
	`balance` decimal(14,2) NOT NULL,
	`bankid` int(10) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`interestglcode` int(9) unsigned NOT NULL,
	`scglcode` int(9) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_creditoramortizations` (
	`drawdownid` int(11) unsigned NOT NULL,
	`amortnumber` smallint(3) unsigned NOT NULL,
	`datedue` date NOT NULL,
	`principal` decimal(14,2) unsigned NOT NULL,
	`interest` decimal(14,2) unsigned NOT NULL,
	`servicecharge` decimal(14,2) unsigned NOT NULL,
	`pdc` char(12) NOT NULL,
	`isremitted` tinyint(1) unsigned NOT NULL,
	`creditortransid` int(11) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_creditordrawdowns` (
	`drawdownid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`drawdowndate` date NOT NULL,
	`creditorid` mediumint(4) unsigned NOT NULL,
	`transid` int(11) unsigned NOT NULL,
	`pnid` char(50) NOT NULL,
	`drawdown` decimal(14,2) unsigned NOT NULL,
	`bankid` mediumint(4) unsigned NOT NULL,
	`term` smallint(3) unsigned NOT NULL,
	`termunit` tinyint(3) unsigned NOT NULL,
	`interestrate` decimal(7,4) unsigned NOT NULL,
	`datepaid` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_creditorsmswarningrecipient` (
	`employeeid` mediumint(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_creditortransactions` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`banktransid` int(11) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`creditorid` int(6) unsigned NOT NULL,
	`details` varchar(200) NOT NULL,
	`payment` decimal(14,2) NOT NULL,
	`interest` decimal(14,2) NOT NULL,
	`servicecharge` decimal(14,2) NOT NULL,
	`drawdown` decimal(14,2) unsigned NOT NULL,
	`balance` decimal(14,2) NOT NULL,
	`userid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffe` (
	`ffeid` mediumint(6) unsigned NOT NULL,
	`ffetypeid` smallint(3) NOT NULL,
	`model` char(75) NOT NULL,
	`serialid` char(50) NOT NULL,
	`description` char(250) NOT NULL,
	`supplier` char(50) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`ffeuserid` mediumint(6) unsigned NOT NULL,
	`method` tinyint(1) unsigned NOT NULL,
	`purchasedate` date NOT NULL,
	`salvagevalue` decimal(12,2) unsigned NOT NULL,
	`purchaseamount` decimal(12,2) unsigned NOT NULL,
	`depreciatedamount` decimal(12,2) unsigned NOT NULL,
	`bookvalue` decimal(12,2) unsigned NOT NULL,
	`life` smallint(3) unsigned NOT NULL,
	`lifeused` smallint(3) unsigned NOT NULL,
	`lifeunused` smallint(3) unsigned NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffedefectivetemp` (
	`ffeid` mediumint(6) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffedepreciation` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`ffeid` mediumint(6) unsigned NOT NULL,
	`transtype` tinyint(3) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`lifeused` smallint(2) unsigned NOT NULL,
	`depreciation` decimal(12,2) NOT NULL,
	`bookvalue` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffemovement` (
	`ffemovementid` int(11) AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`ffeid` mediumint(6) unsigned NOT NULL,
	`previousbranchid` smallint(4) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`ffeuserid` mediumint(6) unsigned NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffemovementtemp` (
	`ffeid` mediumint(6) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`ffeuserid` mediumint(6) unsigned NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffetype` (
	`ffetypeid` mediumint(4) unsigned NOT NULL,
	`ffetypename` char(50) NOT NULL,
	`life` smallint(2) unsigned NOT NULL,
	`method` tinyint(1) unsigned NOT NULL,
	`category` tinyint(1) unsigned NOT NULL,
	`salvagevaluedefault` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffetypecategory` (
	`category` tinyint(1) unsigned NOT NULL,
	`categoryname` char(25) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`depreciationglcode` int(9) unsigned NOT NULL,
	`accumulateddepreciationglcode` int(9) unsigned NOT NULL,
	`is_itequipment` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_ffe_inventory` (
	`branchid` smallint(4) unsigned NOT NULL,
	`ffeid` bigint(12) unsigned NOT NULL,
	`scandate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_htm` (
	`htm_id` int(11) AUTO_INCREMENT NOT NULL,
	`issuer_id` tinyint(1) unsigned DEFAULT 'NULL',
	`security_type` tinyint(1) unsigned NOT NULL,
	`compliance` tinyint(1) unsigned NOT NULL,
	`accreditation_number` varchar(50) NOT NULL,
	`isin` varchar(25) NOT NULL,
	`date_issuance` date NOT NULL,
	`date_maturity` date NOT NULL,
	`date_terminated` date NOT NULL,
	`face_value` decimal(12,2) unsigned NOT NULL,
	`book_value` decimal(12,2) unsigned NOT NULL,
	`interest_rate` decimal(7,5) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_receivable` (
	`receivableid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`employeeid` mediumint(6) unsigned NOT NULL,
	`detail` varchar(255) NOT NULL,
	`payment` decimal(10,2) NOT NULL,
	`receivable` decimal(10,2) NOT NULL,
	`balance` decimal(10,2) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_stock_certificate` (
	`certificateid` int(11) AUTO_INCREMENT NOT NULL,
	`certificateTransaction` tinyint(1) unsigned NOT NULL,
	`shareholderid` int(10) unsigned NOT NULL,
	`certificateDate` date NOT NULL,
	`certificateNo` char(12) NOT NULL,
	`certificateShares` decimal(10,2) NOT NULL,
	`certificateAmount` decimal(12,2) NOT NULL,
	`certificateReference` varchar(250) NOT NULL,
	`paidupShares` decimal(10,2) unsigned NOT NULL,
	`paidupAmount` decimal(12,2) unsigned NOT NULL,
	`certificateidCancelled` int(11) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_stock_dividend` (
	`dividendid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`dividendDate` date NOT NULL,
	`shareholderid` int(10) unsigned NOT NULL,
	`dividendType` tinyint(1) unsigned NOT NULL,
	`dividendShares` decimal unsigned NOT NULL,
	`dividendAmount` decimal(12,0) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_stock_shareholders` (
	`shareholderid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`shareType` tinyint(1) unsigned NOT NULL,
	`subscribeShares` decimal(10,2) unsigned NOT NULL,
	`subscribeAmount` decimal(12,2) unsigned NOT NULL,
	`paidupShares` decimal(10,2) unsigned NOT NULL,
	`paidupAmount` decimal(12,2) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sl_stock_subscription` (
	`subscriptionid` int(11) AUTO_INCREMENT NOT NULL,
	`subscribeTransaction` tinyint(1) unsigned NOT NULL,
	`shareholderid` int(10) unsigned NOT NULL,
	`subscribeDate` date NOT NULL,
	`transShares` decimal(10,2) NOT NULL,
	`transAmount` decimal(12,2) NOT NULL,
	`reference` varchar(250) NOT NULL,
	`subscribeShares` decimal(10,2) unsigned NOT NULL,
	`subscribeAmount` decimal(12,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_inbox` (
	`messageID` bigint(12) unsigned AUTO_INCREMENT NOT NULL,
	`smsNumber` char(11) NOT NULL,
	`smsMessage` varchar(480) NOT NULL,
	`sim` tinyint(2) unsigned NOT NULL,
	`timeStamp` datetime NOT NULL,
	`replied` tinyint(1) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_monitornumbers` (
	`employeeid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_outbox` (
	`messageID` bigint(12) AUTO_INCREMENT NOT NULL,
	`smsNumber` char(11) NOT NULL,
	`smsMessage` varchar(480) NOT NULL,
	`timeSent` datetime NOT NULL,
	`deleteFlag` tinyint(1) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`status` tinyint(1) NOT NULL,
	`chargeClient` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_outboxhistory` (
	`messageID` bigint(12) AUTO_INCREMENT NOT NULL,
	`smsNumber` char(11) NOT NULL,
	`smsMessage` varchar(480) NOT NULL,
	`timeSent` datetime NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`chargeClient` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_savings` (
	`savingsid` bigint(10) unsigned NOT NULL,
	`transaction` smallint(3) unsigned NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`postingtime` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_sentcount` (
	`sentDate` date NOT NULL,
	`sentCount` decimal unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sms_telco_prefix` (
	`prefix` smallint(4) unsigned zerofill NOT NULL,
	`gateway_id` int(2) DEFAULT 'NULL',
	`network` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `system_dbbackup` (
	`type` tinyint(1) unsigned NOT NULL,
	`status` tinyint(1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_errorcorrecttemp` (
	`transactionid` int(11) unsigned NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_expense` (
	`expenseid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`description` char(255) NOT NULL,
	`type` tinyint(1) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_expensedetails` (
	`expenseid` int(10) unsigned NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`amount` decimal(14,2) unsigned NOT NULL,
	`costcenterid` mediumint(5) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_orcoordinate` (
	`variable` varchar(50) NOT NULL,
	`json_data` varchar(26000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_printcoordinates` (
	`variable` char(15) NOT NULL,
	`coordinate` decimal(4,1) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_settings` (
	`telleringid` smallint(3) unsigned NOT NULL,
	`telleringname` char(30) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`normalbalance` tinyint(1) unsigned NOT NULL,
	`protection` tinyint(1) unsigned NOT NULL,
	`document1` tinyint(3) unsigned NOT NULL,
	`document2` tinyint(3) unsigned NOT NULL,
	`status` tinyint(1) unsigned NOT NULL,
	`autojournal` tinyint(1) unsigned NOT NULL,
	`validation_x` mediumint(3) unsigned NOT NULL,
	`validation_y` mediumint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tellering_transactions` (
	`transactionid` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`transdate` date NOT NULL,
	`postingtime` datetime NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`telleringid` mediumint(3) unsigned NOT NULL,
	`details` varchar(150) NOT NULL,
	`glcode` int(9) unsigned NOT NULL,
	`document1` tinyint(1) NOT NULL,
	`document2` tinyint(1) NOT NULL,
	`reference1` varchar(50) NOT NULL,
	`reference2` varchar(50) NOT NULL,
	`amount` decimal(12,2) NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL,
	`approverid` mediumint(6) unsigned NOT NULL,
	`errorcorrected` tinyint(3) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `vw_mobile_prefix` (
	`prefix` varchar(12) DEFAULT 'NULL',
	`telco` varchar(150) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `writeoff_approval` (
	`writeoffid` int(11) AUTO_INCREMENT NOT NULL,
	`postingtime` datetime NOT NULL,
	`postingdate` date NOT NULL,
	`count` int(10) unsigned NOT NULL,
	`loanamount` decimal(14,2) unsigned NOT NULL,
	`loanbalance` decimal(14,2) unsigned NOT NULL,
	`savingsbalance` decimal(14,2) unsigned NOT NULL,
	`writeoffamount` decimal(14,2) unsigned NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL,
	`approver2id` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `writeoff_data` (
	`writeoffid` int(10) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`clientid` bigint(10) unsigned NOT NULL,
	`pnid2` char(25) NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`loanproductid` int(12) unsigned NOT NULL,
	`loanclassid` smallint(3) unsigned NOT NULL,
	`termunit` tinyint(1) unsigned NOT NULL,
	`term` smallint(4) unsigned NOT NULL,
	`date` date NOT NULL,
	`maturity` date NOT NULL,
	`amount` decimal(12,2) unsigned NOT NULL,
	`interestrate` decimal(4,2) unsigned NOT NULL,
	`interestcomputationbasis` tinyint(1) unsigned NOT NULL,
	`coborrowerid` bigint(10) unsigned NOT NULL,
	`comaker1id` bigint(10) unsigned NOT NULL,
	`comaker2id` bigint(10) unsigned NOT NULL,
	`loancycle` smallint(5) unsigned NOT NULL,
	`loanofficerid` mediumint(6) unsigned NOT NULL,
	`loanbalance` decimal(12,2) NOT NULL,
	`savingsbalance` decimal(12,2) unsigned NOT NULL,
	`writeoffbalance` decimal(12,2) unsigned NOT NULL,
	`lasttransdate` date NOT NULL,
	`interestreferencedate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `writeoff_tempapproval` (
	`makerid` mediumint(6) unsigned NOT NULL,
	`approver1id` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `writeoff_tempdata` (
	`pnid` bigint(12) unsigned NOT NULL
);
--> statement-breakpoint
CREATE TABLE `writeoff_tempor` (
	`branchid` smallint(4) unsigned NOT NULL,
	`ornumber` char(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `writeoff_transactions` (
	`transid` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`transtype` tinyint(1) unsigned NOT NULL,
	`transdate` date NOT NULL,
	`branchid` smallint(4) unsigned NOT NULL,
	`pnid` bigint(12) unsigned NOT NULL,
	`orid` bigint(12) unsigned NOT NULL,
	`payment` decimal(12,2) unsigned NOT NULL,
	`interest` decimal(12,2) unsigned NOT NULL,
	`writeoffbalance` decimal(12,2) unsigned NOT NULL,
	`makerid` mediumint(6) unsigned NOT NULL
);
--> statement-breakpoint
ALTER TABLE `acctng_journaldetails` ADD CONSTRAINT `journalid` FOREIGN KEY (`journalid`) REFERENCES `acctng_journals`(`journalid`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `acctng_journal_ibtracker` ADD CONSTRAINT `ib_journal_details_id` FOREIGN KEY (`ib_journal_details_id`) REFERENCES `acctng_journaldetails`(`journal_details_id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `checking_autodebitaccount` ADD CONSTRAINT `checking_autodebitaccount_ibfk_1` FOREIGN KEY (`savingsid`) REFERENCES `savings_accounts`(`savingsid`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `checking_autodebitaccount` ADD CONSTRAINT `checking_autodebitaccount_ibfk_2` FOREIGN KEY (`autodebitsavingsid`) REFERENCES `savings_accounts`(`savingsid`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` ADD CONSTRAINT `general_clients_riskprofiles_ibfk_2` FOREIGN KEY (`makerid`) REFERENCES `general_employees`(`id`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` ADD CONSTRAINT `general_clients_riskprofiles_ibfk_3` FOREIGN KEY (`clientid`) REFERENCES `general_clients`(`clientid`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `general_systemdate_temp` ADD CONSTRAINT `general_systemdate_temp_ibfk_1` FOREIGN KEY (`branchid`) REFERENCES `general_branches`(`id`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` ADD CONSTRAINT `orid` FOREIGN KEY (`orid`) REFERENCES `lending_payment_tempor`(`orid`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `mobile_transfer_details` ADD CONSTRAINT `mobile_transfer_details_ibfk_2` FOREIGN KEY (`sender_clientid`) REFERENCES `mobile_client_users`(`client1id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `savings_memoglcodes` ADD CONSTRAINT `fk_savings_memoglcodes_glcode` FOREIGN KEY (`glcode`) REFERENCES `acctng_glaccounts`(`gl_code`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `savings_memoglcodes` ADD CONSTRAINT `fk_savings_memoglcodes_savingstransactionid` FOREIGN KEY (`savingstransactionid`) REFERENCES `savings_transactions`(`savingstransactionid`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `savings_transactions_wtax` ADD CONSTRAINT `savingstransactionid` FOREIGN KEY (`savingstransactionid`) REFERENCES `savings_transactions`(`savingstransactionid`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `branchid` ON `acctng_branchcostcenters` (`branchid`);--> statement-breakpoint
CREATE INDEX `costcenterid` ON `acctng_branchcostcenters` (`costcenterid`);--> statement-breakpoint
CREATE INDEX `glcode` ON `acctng_budget` (`glcode`);--> statement-breakpoint
CREATE INDEX `costcenterid` ON `acctng_budget` (`costcenterid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `acctng_budget` (`branchid`);--> statement-breakpoint
CREATE INDEX `budgetYear` ON `acctng_budget` (`budgetYear`);--> statement-breakpoint
CREATE INDEX `category_id` ON `acctng_cost_center` (`category_id`);--> statement-breakpoint
CREATE INDEX `gl_type` ON `acctng_glaccounts` (`gl_type`);--> statement-breakpoint
CREATE INDEX `gl_code` ON `acctng_journaldetails` (`gl_code`);--> statement-breakpoint
CREATE INDEX `due_branch` ON `acctng_journaldetails` (`subsidiary`);--> statement-breakpoint
CREATE INDEX `journal_details_debit` ON `acctng_journaldetails` (`journal_details_debit`);--> statement-breakpoint
CREATE INDEX `journal_details_credit` ON `acctng_journaldetails` (`journal_details_credit`);--> statement-breakpoint
CREATE INDEX `journal_id` ON `acctng_journals` (`ibjournalid`);--> statement-breakpoint
CREATE INDEX `journal_branch` ON `acctng_journals` (`journal_branch`);--> statement-breakpoint
CREATE INDEX `journal_date` ON `acctng_journals` (`journal_date`);--> statement-breakpoint
CREATE INDEX `user` ON `acctng_journals` (`user`);--> statement-breakpoint
CREATE INDEX `journalid` ON `acctng_journal_trail` (`journalid`);--> statement-breakpoint
CREATE INDEX `ibjournalid` ON `acctng_journal_trail` (`ibjournalid`);--> statement-breakpoint
CREATE INDEX `timestamp` ON `acctng_journal_trail` (`timestamp`);--> statement-breakpoint
CREATE INDEX `acctng_date` ON `acctng_journal_trail` (`acctng_date`);--> statement-breakpoint
CREATE INDEX `branchid` ON `amlc_transaction` (`branchid`);--> statement-breakpoint
CREATE INDEX `transType` ON `amlc_transaction` (`transType`);--> statement-breakpoint
CREATE INDEX `transDate` ON `amlc_transaction` (`transDate`);--> statement-breakpoint
CREATE INDEX `clientid1` ON `amlc_transaction` (`clientid1`);--> statement-breakpoint
CREATE INDEX `clientid2` ON `amlc_transaction` (`clientid2`);--> statement-breakpoint
CREATE INDEX `clientid3` ON `amlc_transaction` (`clientid3`);--> statement-breakpoint
CREATE INDEX `clientid4` ON `amlc_transaction` (`clientid4`);--> statement-breakpoint
CREATE INDEX `auditid` ON `audit_details` (`auditid`);--> statement-breakpoint
CREATE INDEX `detailsIndex` ON `audit_details` (`detailsIndex`);--> statement-breakpoint
CREATE INDEX `officetype` ON `audit_profile` (`officetype`);--> statement-breakpoint
CREATE INDEX `officeid` ON `audit_profile` (`officeid`);--> statement-breakpoint
CREATE INDEX `autodebitsavingsid` ON `checking_autodebitaccount` (`autodebitsavingsid`);--> statement-breakpoint
CREATE INDEX `checknumberstart` ON `checking_bookletdetails` (`checknumberstart`);--> statement-breakpoint
CREATE INDEX `checknumberend` ON `checking_bookletdetails` (`checknumberend`);--> statement-breakpoint
CREATE INDEX `bankid` ON `checking_bookletdetails` (`conduitbankid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `checking_bookletdetails` (`branchid`);--> statement-breakpoint
CREATE INDEX `inward_channel` ON `checking_checks_issued` (`source`);--> statement-breakpoint
CREATE INDEX `reference_id` ON `checking_checks_issued` (`reference_id`);--> statement-breakpoint
CREATE INDEX `check_number` ON `checking_checks_issued` (`check_number`);--> statement-breakpoint
CREATE INDEX `textfile_md5` ON `checking_inward1` (`textfile_md5`);--> statement-breakpoint
CREATE INDEX `inwardid` ON `checking_inward2` (`inwardid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `checking_inward2` (`savingsid`);--> statement-breakpoint
CREATE INDEX `savingstransactionid` ON `checking_inward2` (`savingstransactionid`);--> statement-breakpoint
CREATE INDEX `bankid` ON `checking_inwardtemp1` (`conduitbankid`);--> statement-breakpoint
CREATE INDEX `tempid` ON `checking_inwardtemp2` (`tempid`);--> statement-breakpoint
CREATE INDEX `date_received` ON `checking_loanpayments` (`date_paid`);--> statement-breakpoint
CREATE INDEX `check_number` ON `checking_loanpayments` (`check_number`);--> statement-breakpoint
CREATE INDEX `transdate` ON `checking_outward` (`transdate`);--> statement-breakpoint
CREATE INDEX `conduitbankid` ON `checking_outward` (`conduitbankid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `checking_outward` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `checking_outward` (`approverid`);--> statement-breakpoint
CREATE INDEX `textfile_md5` ON `checking_outward` (`textfile_md5`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `checking_request` (`savingsid`);--> statement-breakpoint
CREATE INDEX `bankid` ON `checking_request` (`conduitbankid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `collateral` (`clientid`);--> statement-breakpoint
CREATE INDEX `collateralid` ON `collateral_appraisal` (`collateralid`);--> statement-breakpoint
CREATE INDEX `collateralid_2` ON `collateral_appraisal` (`collateralid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `collateral_appraisal` (`employeeid`);--> statement-breakpoint
CREATE INDEX `employeeid_2` ON `collateral_appraisal` (`employeeid`);--> statement-breakpoint
CREATE INDEX `appraisalDate` ON `collateral_appraisal` (`appraisalDate`);--> statement-breakpoint
CREATE INDEX `appraisalDate_2` ON `collateral_appraisal` (`appraisalDate`);--> statement-breakpoint
CREATE INDEX `nextAppraisal` ON `collateral_appraisal` (`nextAppraisal`);--> statement-breakpoint
CREATE INDEX `nextAppraisal_2` ON `collateral_appraisal` (`nextAppraisal`);--> statement-breakpoint
CREATE INDEX `collateralid_3` ON `collateral_appraisal` (`collateralid`);--> statement-breakpoint
CREATE INDEX `employeeid_3` ON `collateral_appraisal` (`employeeid`);--> statement-breakpoint
CREATE INDEX `appraisalDate_3` ON `collateral_appraisal` (`appraisalDate`);--> statement-breakpoint
CREATE INDEX `nextAppraisal_3` ON `collateral_appraisal` (`nextAppraisal`);--> statement-breakpoint
CREATE INDEX `collateralid_4` ON `collateral_appraisal` (`collateralid`);--> statement-breakpoint
CREATE INDEX `employeeid_4` ON `collateral_appraisal` (`employeeid`);--> statement-breakpoint
CREATE INDEX `appraisalDate_4` ON `collateral_appraisal` (`appraisalDate`);--> statement-breakpoint
CREATE INDEX `nextAppraisal_4` ON `collateral_appraisal` (`nextAppraisal`);--> statement-breakpoint
CREATE INDEX `clientid` ON `collateral_pndetails` (`clientid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `collateral_pndetails` (`pnid`);--> statement-breakpoint
CREATE INDEX `collateralid` ON `collateral_pndetails` (`collateralid`);--> statement-breakpoint
CREATE INDEX `clientid_2` ON `collateral_pndetails` (`clientid`);--> statement-breakpoint
CREATE INDEX `pnid_2` ON `collateral_pndetails` (`pnid`);--> statement-breakpoint
CREATE INDEX `collateralid_2` ON `collateral_pndetails` (`collateralid`);--> statement-breakpoint
CREATE INDEX `cutoffdate` ON `frp_loans` (`cutoffdate`);--> statement-breakpoint
CREATE INDEX `loanproductid` ON `frp_loans` (`loanproductid`);--> statement-breakpoint
CREATE INDEX `loanclassid` ON `frp_loans` (`loanclassid`);--> statement-breakpoint
CREATE INDEX `industryid` ON `frp_loans` (`industryid`);--> statement-breakpoint
CREATE INDEX `securityid` ON `frp_loans` (`securityid`);--> statement-breakpoint
CREATE INDEX `cutoffdate` ON `frp_savings` (`cutoffdate`);--> statement-breakpoint
CREATE INDEX `activity_time` ON `general_activities` (`activity_time`);--> statement-breakpoint
CREATE INDEX `makerid` ON `general_activities` (`makerid`);--> statement-breakpoint
CREATE INDEX `subject_category` ON `general_activities` (`subject_category`);--> statement-breakpoint
CREATE INDEX `main_module` ON `general_activities` (`main_module`);--> statement-breakpoint
CREATE INDEX `sub_module` ON `general_activities` (`sub_module`);--> statement-breakpoint
CREATE INDEX `addresscomplete` ON `general_address` (`addresscomplete`);--> statement-breakpoint
CREATE INDEX `addresscomplete` ON `general_address_old` (`addresscomplete`);--> statement-breakpoint
CREATE INDEX `category_id` ON `general_branches` (`category_id`);--> statement-breakpoint
CREATE INDEX `name` ON `general_branches` (`name`);--> statement-breakpoint
CREATE INDEX `level` ON `general_branches` (`level`);--> statement-breakpoint
CREATE INDEX `parent` ON `general_branches` (`parent`);--> statement-breakpoint
CREATE INDEX `interbranch_parent` ON `general_branches` (`interbranch_parent`);--> statement-breakpoint
CREATE INDEX `barangayid` ON `general_clients` (`barangayid`);--> statement-breakpoint
CREATE INDEX `centerid` ON `general_clients` (`centerid`);--> statement-breakpoint
CREATE INDEX `officeid` ON `general_clients` (`officeid`);--> statement-breakpoint
CREATE INDEX `firstname` ON `general_clients` (`firstname`);--> statement-breakpoint
CREATE INDEX `lastname` ON `general_clients` (`lastname`);--> statement-breakpoint
CREATE INDEX `middlename` ON `general_clients` (`middlename`);--> statement-breakpoint
CREATE INDEX `birthdate` ON `general_clients` (`birthdate`);--> statement-breakpoint
CREATE INDEX `spouseid` ON `general_clients` (`spouseid`);--> statement-breakpoint
CREATE INDEX `clienttype` ON `general_clients` (`clienttype`);--> statement-breakpoint
CREATE INDEX `dosri` ON `general_clients` (`dosri`);--> statement-breakpoint
CREATE INDEX `cpnumber1` ON `general_clients` (`cpnumber1`);--> statement-breakpoint
CREATE INDEX `smsEnrolled` ON `general_clients` (`smsEnrolled`);--> statement-breakpoint
CREATE INDEX `clientid_previous_cbs` ON `general_clients` (`clientid_previous_cbs`);--> statement-breakpoint
CREATE INDEX `clientid` ON `general_clientsbeneficiary` (`clientid`);--> statement-breakpoint
CREATE INDEX `beneficiaryid` ON `general_clientsbeneficiary` (`beneficiaryid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `general_clientsrelatives` (`clientid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `general_clientsresignation` (`clientid`);--> statement-breakpoint
CREATE INDEX `solicitorid` ON `general_clientssolicitor` (`solicitorid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `general_clients_riskprofiles` (`makerid`);--> statement-breakpoint
CREATE INDEX `general_clients_riskprofiles_ibfk_1` ON `general_clients_riskprofiles` (`riskprofilemodel_id`);--> statement-breakpoint
CREATE INDEX `clientid` ON `general_clients_riskprofiles` (`clientid`);--> statement-breakpoint
CREATE INDEX `id` ON `general_commagencies` (`id`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `general_employeepassword` (`employeeid`);--> statement-breakpoint
CREATE INDEX `firstname` ON `general_employees` (`firstname`);--> statement-breakpoint
CREATE INDEX `middlename` ON `general_employees` (`middlename`);--> statement-breakpoint
CREATE INDEX `lastname` ON `general_employees` (`lastname`);--> statement-breakpoint
CREATE INDEX `barangayid` ON `general_employees` (`barangayid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `general_employees` (`branchid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `general_employees` (`clientid`);--> statement-breakpoint
CREATE INDEX `transactiontime` ON `general_monthend` (`transactiontime`);--> statement-breakpoint
CREATE INDEX `nationality_code` ON `general_nationality` (`nationality_code`);--> statement-breakpoint
CREATE INDEX `category` ON `general_settings` (`category`);--> statement-breakpoint
CREATE INDEX `id_cbs` ON `general_settingsidentification` (`id_cbs`);--> statement-breakpoint
CREATE INDEX `name` ON `general_settingslog` (`name`);--> statement-breakpoint
CREATE INDEX `makerid` ON `general_settingslog` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `general_settingslog` (`approverid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `general_systemdate` (`branchid`);--> statement-breakpoint
CREATE INDEX `dateclosed` ON `general_systemdate` (`dateclosed`);--> statement-breakpoint
CREATE INDEX `managerapproverid` ON `general_systemdate` (`managerapproverid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_attendance` (`employeeid`);--> statement-breakpoint
CREATE INDEX `date` ON `hr_attendance` (`date`);--> statement-breakpoint
CREATE INDEX `employeeid_2` ON `hr_attendance` (`employeeid`);--> statement-breakpoint
CREATE INDEX `date_2` ON `hr_attendance` (`date`);--> statement-breakpoint
CREATE INDEX `employeeid_3` ON `hr_attendance` (`employeeid`);--> statement-breakpoint
CREATE INDEX `offensegroup` ON `hr_daoffenses` (`offensegroup`);--> statement-breakpoint
CREATE INDEX `makerid` ON `hr_das` (`makerid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_das` (`employeeid`);--> statement-breakpoint
CREATE INDEX `offenseid` ON `hr_das` (`offenseid`);--> statement-breakpoint
CREATE INDEX `hrApproverid` ON `hr_das` (`hrApproverid`);--> statement-breakpoint
CREATE INDEX `evaluationyear` ON `hr_eval_appraisal` (`evaluationyear`);--> statement-breakpoint
CREATE INDEX `evaluationmonth` ON `hr_eval_appraisal` (`evaluationmonth`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_eval_appraisal` (`employeeid`);--> statement-breakpoint
CREATE INDEX `evaluationyear_2` ON `hr_eval_appraisal` (`evaluationyear`);--> statement-breakpoint
CREATE INDEX `evaluationmonth_2` ON `hr_eval_appraisal` (`evaluationmonth`);--> statement-breakpoint
CREATE INDEX `employeeid_2` ON `hr_eval_appraisal` (`employeeid`);--> statement-breakpoint
CREATE INDEX `positionid` ON `hr_eval_competencyposition` (`positionid`);--> statement-breakpoint
CREATE INDEX `piid` ON `hr_eval_competencyposition` (`competencyid`);--> statement-breakpoint
CREATE INDEX `positionid` ON `hr_eval_oplanposition` (`positionid`);--> statement-breakpoint
CREATE INDEX `piid` ON `hr_eval_oplanposition` (`oplanid`);--> statement-breakpoint
CREATE INDEX `evaluationyear` ON `hr_eval_oplantarget` (`evaluationyear`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_eval_oplantarget` (`employeeid`);--> statement-breakpoint
CREATE INDEX `positionid` ON `hr_eval_oplantarget` (`positionid`);--> statement-breakpoint
CREATE INDEX `employeeid_2` ON `hr_eval_oplantarget` (`employeeid`);--> statement-breakpoint
CREATE INDEX `positionid_2` ON `hr_eval_oplantarget` (`positionid`);--> statement-breakpoint
CREATE INDEX `vlid` ON `hr_leavevldetail` (`vlid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_npa` (`employeeid`);--> statement-breakpoint
CREATE INDEX `effectivitydate` ON `hr_npa` (`effectivitydate`);--> statement-breakpoint
CREATE INDEX `transdate` ON `hr_payrolldata1` (`transdate`);--> statement-breakpoint
CREATE INDEX `payrollid` ON `hr_payrolldata2` (`payrollid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_payrolldata2` (`employeeid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `hr_payrolldata2` (`branchid`);--> statement-breakpoint
CREATE INDEX `payrollid` ON `hr_payrolldata3` (`payrollid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `hr_payrolldata3` (`employeeid`);--> statement-breakpoint
CREATE INDEX `payrollfrequency` ON `hr_payrolltemp1` (`payrollfrequency`);--> statement-breakpoint
CREATE INDEX `cutoffdate1` ON `hr_payrolltemp1` (`cutoffdate1`);--> statement-breakpoint
CREATE INDEX `makerid` ON `hr_payrolltemp1` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `hr_payrolltemp1` (`approverid`);--> statement-breakpoint
CREATE INDEX `policyid` ON `insurance_amort` (`policyid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `insurance_amort` (`clientid`);--> statement-breakpoint
CREATE INDEX `datepaid` ON `insurance_amort` (`datepaid`);--> statement-breakpoint
CREATE INDEX `paymentid` ON `insurance_amort` (`paymentid`);--> statement-breakpoint
CREATE INDEX `datedue` ON `insurance_amort` (`datedue`);--> statement-breakpoint
CREATE INDEX `amortnumber` ON `insurance_amort` (`lending_amortnumber`);--> statement-breakpoint
CREATE INDEX `amortnumber_2` ON `insurance_amort` (`lending_amortnumber`);--> statement-breakpoint
CREATE INDEX `amortnumber_3` ON `insurance_amort` (`lending_amortnumber`);--> statement-breakpoint
CREATE INDEX `amortnumber_4` ON `insurance_amort` (`lending_amortnumber`);--> statement-breakpoint
CREATE INDEX `amortnumber_5` ON `insurance_amort` (`amortnumber`);--> statement-breakpoint
CREATE INDEX `branchid` ON `insurance_claims` (`branchid`);--> statement-breakpoint
CREATE INDEX `policyid` ON `insurance_claims` (`policyid`);--> statement-breakpoint
CREATE INDEX `policydetail_id` ON `insurance_claims` (`policydetail_id`);--> statement-breakpoint
CREATE INDEX `benefit` ON `insurance_claims` (`benefit`);--> statement-breakpoint
CREATE INDEX `date_applied` ON `insurance_claims` (`date_applied`);--> statement-breakpoint
CREATE INDEX `approved_date` ON `insurance_claims` (`approved_date`);--> statement-breakpoint
CREATE INDEX `release_date` ON `insurance_claims` (`release_date`);--> statement-breakpoint
CREATE INDEX `makerid` ON `insurance_claims` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `insurance_claims` (`approverid`);--> statement-breakpoint
CREATE INDEX `releasedbyid` ON `insurance_claims` (`releasedbyid`);--> statement-breakpoint
CREATE INDEX `category` ON `insurance_diagnosis` (`category`);--> statement-breakpoint
CREATE INDEX `level` ON `insurance_diagnosis` (`level`);--> statement-breakpoint
CREATE INDEX `category_2` ON `insurance_diagnosis` (`category`);--> statement-breakpoint
CREATE INDEX `level_2` ON `insurance_diagnosis` (`level`);--> statement-breakpoint
CREATE INDEX `category_3` ON `insurance_diagnosis` (`category`);--> statement-breakpoint
CREATE INDEX `level_3` ON `insurance_diagnosis` (`level`);--> statement-breakpoint
CREATE INDEX `category_4` ON `insurance_diagnosis` (`category`);--> statement-breakpoint
CREATE INDEX `level_4` ON `insurance_diagnosis` (`level`);--> statement-breakpoint
CREATE INDEX `transdate` ON `insurance_payments` (`transdate`);--> statement-breakpoint
CREATE INDEX `policyid` ON `insurance_payments` (`policyid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `insurance_payments` (`clientid`);--> statement-breakpoint
CREATE INDEX `paymentid_orig` ON `insurance_payments` (`paymentid_orig`);--> statement-breakpoint
CREATE INDEX `policydate` ON `insurance_policy` (`policydate`);--> statement-breakpoint
CREATE INDEX `productid` ON `insurance_policy` (`insuranceproductid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `insurance_policy` (`clientid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `insurance_policy` (`savingsid`);--> statement-breakpoint
CREATE INDEX `termcomputation` ON `insurance_policy` (`termcomputation`);--> statement-breakpoint
CREATE INDEX `maturity` ON `insurance_policy` (`maturity`);--> statement-breakpoint
CREATE INDEX `maturity_2` ON `insurance_policy` (`maturity`);--> statement-breakpoint
CREATE INDEX `maturity_3` ON `insurance_policy` (`maturity`);--> statement-breakpoint
CREATE INDEX `policyid` ON `insurance_policybeneficiary` (`policyid`);--> statement-breakpoint
CREATE INDEX `beneficiaryid` ON `insurance_policybeneficiary` (`beneficiaryid`);--> statement-breakpoint
CREATE INDEX `relationship` ON `insurance_policybeneficiary` (`relationship`);--> statement-breakpoint
CREATE INDEX `relationship_2` ON `insurance_policybeneficiary` (`relationship`);--> statement-breakpoint
CREATE INDEX `relationship_3` ON `insurance_policybeneficiary` (`relationship`);--> statement-breakpoint
CREATE INDEX `policyid` ON `insurance_policydetail` (`policyid`);--> statement-breakpoint
CREATE INDEX `relativeid` ON `insurance_policydetail` (`relativeid`);--> statement-breakpoint
CREATE INDEX `relationship` ON `insurance_policydetail` (`relationship`);--> statement-breakpoint
CREATE INDEX `firstname` ON `insurance_policydetail` (`firstname`);--> statement-breakpoint
CREATE INDEX `middlename` ON `insurance_policydetail` (`middlename`);--> statement-breakpoint
CREATE INDEX `lastname` ON `insurance_policydetail` (`lastname`);--> statement-breakpoint
CREATE INDEX `firstname_2` ON `insurance_policydetail` (`firstname`);--> statement-breakpoint
CREATE INDEX `middlename_2` ON `insurance_policydetail` (`middlename`);--> statement-breakpoint
CREATE INDEX `lastname_2` ON `insurance_policydetail` (`lastname`);--> statement-breakpoint
CREATE INDEX `firstname_3` ON `insurance_policydetail` (`firstname`);--> statement-breakpoint
CREATE INDEX `middlename_3` ON `insurance_policydetail` (`middlename`);--> statement-breakpoint
CREATE INDEX `lastname_3` ON `insurance_policydetail` (`lastname`);--> statement-breakpoint
CREATE INDEX `productdetails` ON `insurance_products` (`productdetails`);--> statement-breakpoint
CREATE INDEX `productdetails_2` ON `insurance_products` (`productdetails`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_amortdetails` (`pnid`);--> statement-breakpoint
CREATE INDEX `amortnumber` ON `lending_amortdetails` (`amortnumber`);--> statement-breakpoint
CREATE INDEX `datedue` ON `lending_amortdetails` (`datedue`);--> statement-breakpoint
CREATE INDEX `datepaid` ON `lending_amortdetails` (`datepaid`);--> statement-breakpoint
CREATE INDEX `datedue_orig` ON `lending_amortdetails` (`datedue_orig`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_amortdetailstemp` (`pnid`);--> statement-breakpoint
CREATE INDEX `barangayid` ON `lending_centers` (`barangayid`);--> statement-breakpoint
CREATE INDEX `branch` ON `lending_centers` (`branchid`);--> statement-breakpoint
CREATE INDEX `accountofficer` ON `lending_centers` (`accountofficer`);--> statement-breakpoint
CREATE INDEX `makerid` ON `lending_centerstransfer` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `lending_centerstransfer` (`approverid`);--> statement-breakpoint
CREATE INDEX `isTransferred` ON `lending_centerstransfer` (`isTransferred`);--> statement-breakpoint
CREATE INDEX `clientid` ON `lending_creditline_data` (`clientid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_creditline_data` (`branchid`);--> statement-breakpoint
CREATE INDEX `creditline_date` ON `lending_creditline_data` (`creditline_date`);--> statement-breakpoint
CREATE INDEX `creditline_maturity` ON `lending_creditline_data` (`creditline_maturity`);--> statement-breakpoint
CREATE INDEX `branchid_2` ON `lending_creditline_data` (`branchid`);--> statement-breakpoint
CREATE INDEX `creditline_date_2` ON `lending_creditline_data` (`creditline_date`);--> statement-breakpoint
CREATE INDEX `creditline_maturity_2` ON `lending_creditline_data` (`creditline_maturity`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_creditscore_data` (`pnid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `lending_creditscore_data` (`clientid`);--> statement-breakpoint
CREATE INDEX `creditscore_template_id` ON `lending_creditscore_data` (`creditscore_template_id`);--> statement-breakpoint
CREATE INDEX `makerid` ON `lending_creditscore_data` (`makerid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_creditscore_data` (`branchid`);--> statement-breakpoint
CREATE INDEX `loanproductid` ON `lending_deductionrate` (`loanproductid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_discount` (`pnid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `lending_discount` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_discount` (`branchid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `lending_discount` (`approverid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_discounttemp` (`pnid`);--> statement-breakpoint
CREATE INDEX `amortnumber` ON `lending_discounttemp` (`amortnumber`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_discounttemp` (`branchid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `lending_discounttemp` (`approverid`);--> statement-breakpoint
CREATE INDEX `discountid` ON `lending_discounttemp` (`discountid`);--> statement-breakpoint
CREATE INDEX `isuse` ON `lending_industries` (`isuse`);--> statement-breakpoint
CREATE INDEX `loanclassid` ON `lending_industryperloanclass` (`loanclassid`);--> statement-breakpoint
CREATE INDEX `loanclassid_2` ON `lending_industryperloanclass` (`loanclassid`);--> statement-breakpoint
CREATE INDEX `loanpurposeid` ON `lending_loanclassperpurpose` (`loanpurposeid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_loandetails` (`branchid`);--> statement-breakpoint
CREATE INDEX `loanproductid` ON `lending_loandetails` (`loanproductid`);--> statement-breakpoint
CREATE INDEX `date` ON `lending_loandetails` (`date`);--> statement-breakpoint
CREATE INDEX `clientid` ON `lending_loandetails` (`clientid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `lending_loandetails` (`savingsid`);--> statement-breakpoint
CREATE INDEX `loanbalance` ON `lending_loandetails` (`loanbalance`);--> statement-breakpoint
CREATE INDEX `maturity` ON `lending_loandetails` (`maturity`);--> statement-breakpoint
CREATE INDEX `coborrowerid` ON `lending_loandetails` (`coborrowerid`);--> statement-breakpoint
CREATE INDEX `comaker1id` ON `lending_loandetails` (`comaker1id`);--> statement-breakpoint
CREATE INDEX `comaker2id` ON `lending_loandetails` (`comaker2id`);--> statement-breakpoint
CREATE INDEX `maturity2` ON `lending_loandetails` (`maturity2`);--> statement-breakpoint
CREATE INDEX `securityid` ON `lending_loandetails` (`securityid`);--> statement-breakpoint
CREATE INDEX `amount` ON `lending_loandetails` (`amount`);--> statement-breakpoint
CREATE INDEX `comaker3id` ON `lending_loandetails` (`comaker3id`);--> statement-breakpoint
CREATE INDEX `comaker4id` ON `lending_loandetails` (`comaker4id`);--> statement-breakpoint
CREATE INDEX `comaker5id` ON `lending_loandetails` (`comaker5id`);--> statement-breakpoint
CREATE INDEX `industryid` ON `lending_loandetails` (`industryid`);--> statement-breakpoint
CREATE INDEX `postedbyid` ON `lending_loandetails` (`postedbyid`);--> statement-breakpoint
CREATE INDEX `tellerid` ON `lending_loandetails` (`tellerid`);--> statement-breakpoint
CREATE INDEX `spouseid` ON `lending_loandetails` (`spouseid`);--> statement-breakpoint
CREATE INDEX `restructuredpnid` ON `lending_loandetails` (`restructuredpnid`);--> statement-breakpoint
CREATE INDEX `application_details` ON `lending_loandetails` (`application_details`);--> statement-breakpoint
CREATE INDEX `pnid_previous_cbs` ON `lending_loandetails` (`pnid_previous_cbs`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_loandetails_changes` (`pnid`);--> statement-breakpoint
CREATE INDEX `postedbyid` ON `lending_loandetails_changes` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `lending_loandetails_changes` (`approverid`);--> statement-breakpoint
CREATE INDEX `loanproductid` ON `lending_loanproductindustry` (`loanproductid`);--> statement-breakpoint
CREATE INDEX `industryid` ON `lending_loanproductindustry` (`industryid`);--> statement-breakpoint
CREATE INDEX `isEmployeeLoan` ON `lending_loanproducts` (`isEmployeeLoan`);--> statement-breakpoint
CREATE INDEX `grouping` ON `lending_loanproducts` (`grouping`);--> statement-breakpoint
CREATE INDEX `groupby` ON `lending_loanproducts` (`groupby`);--> statement-breakpoint
CREATE INDEX `type` ON `lending_loanproducts` (`type`);--> statement-breakpoint
CREATE INDEX `isSecured` ON `lending_loansecurities` (`isSecured`);--> statement-breakpoint
CREATE INDEX `collateral_type` ON `lending_loansecurities` (`collateral_type`);--> statement-breakpoint
CREATE INDEX `frp_securitytag` ON `lending_loansecurities` (`frp_securitytag`);--> statement-breakpoint
CREATE INDEX `isSecured_2` ON `lending_loansecurities` (`isSecured`);--> statement-breakpoint
CREATE INDEX `collateral_type_2` ON `lending_loansecurities` (`collateral_type`);--> statement-breakpoint
CREATE INDEX `frp_securitytag_2` ON `lending_loansecurities` (`frp_securitytag`);--> statement-breakpoint
CREATE INDEX `transdate` ON `lending_misposting` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_misposting` (`branchid`);--> statement-breakpoint
CREATE INDEX `oridold` ON `lending_misposting` (`oridold`);--> statement-breakpoint
CREATE INDEX `orid` ON `lending_misposting` (`orid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `lending_misposting` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `lending_misposting` (`approverid`);--> statement-breakpoint
CREATE INDEX `txn_log` ON `lending_misposting` (`txn_log`);--> statement-breakpoint
CREATE INDEX `transaction_type` ON `lending_misposting` (`transaction_type`);--> statement-breakpoint
CREATE INDEX `transaction_type` ON `lending_mispostingtemp` (`transaction_type`);--> statement-breakpoint
CREATE INDEX `paymentid` ON `lending_paymentdetails` (`paymentid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_paymentdetails` (`pnid`);--> statement-breakpoint
CREATE INDEX `amortizationnumber` ON `lending_paymentdetails` (`amortnumber`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_payments` (`branchid`);--> statement-breakpoint
CREATE INDEX `paymentdate` ON `lending_payments` (`paymentdate`);--> statement-breakpoint
CREATE INDEX `ornumber` ON `lending_payments` (`ornumber`);--> statement-breakpoint
CREATE INDEX `paymentreference` ON `lending_payments` (`paymentreference`);--> statement-breakpoint
CREATE INDEX `orid` ON `lending_payments` (`orid`);--> statement-breakpoint
CREATE INDEX `paymentamount` ON `lending_payments` (`paymentamount`);--> statement-breakpoint
CREATE INDEX `loanbalance` ON `lending_payments` (`loanbalance`);--> statement-breakpoint
CREATE INDEX `postingtime` ON `lending_payments` (`postingtime`);--> statement-breakpoint
CREATE INDEX `pnid_index` ON `lending_payments` (`pnid_index`);--> statement-breakpoint
CREATE INDEX `transdate` ON `lending_paymentsor` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_paymentsor` (`branchid`);--> statement-breakpoint
CREATE INDEX `ornumber` ON `lending_paymentsor` (`ornumber`);--> statement-breakpoint
CREATE INDEX `clientid` ON `lending_paymentsor` (`clientid`);--> statement-breakpoint
CREATE INDEX `clienttype` ON `lending_paymentsor` (`clienttype`);--> statement-breakpoint
CREATE INDEX `glcode` ON `lending_paymentsor` (`glcode`);--> statement-breakpoint
CREATE INDEX `tellerid` ON `lending_paymentsor` (`tellerid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `lending_paymentsor` (`makerid`);--> statement-breakpoint
CREATE INDEX `paymentreference` ON `lending_paymentsor` (`paymentreference`);--> statement-breakpoint
CREATE INDEX `paymentmode` ON `lending_paymentsor` (`paymentmode`);--> statement-breakpoint
CREATE INDEX `orstatus` ON `lending_paymentsor` (`orstatus`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_payment_tempdetails` (`pnid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `lending_payment_tempdetails` (`savingsid`);--> statement-breakpoint
CREATE INDEX `policyid` ON `lending_payment_tempdetails` (`policyid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_pncorrection` (`pnid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `lending_pncorrection` (`clientid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `lending_provisionqualitative` (`clientid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_releasedelete` (`pnid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `lending_releasedelete` (`branchid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `lending_releasedelete` (`transdate`);--> statement-breakpoint
CREATE INDEX `orid` ON `lending_releasedelete` (`orid`);--> statement-breakpoint
CREATE INDEX `orid_2` ON `lending_releasedelete` (`orid`);--> statement-breakpoint
CREATE INDEX `orid_3` ON `lending_releasedelete` (`orid`);--> statement-breakpoint
CREATE INDEX `orid_4` ON `lending_releasedelete` (`orid`);--> statement-breakpoint
CREATE INDEX `orid` ON `lending_remittancedeletetemp` (`orid`);--> statement-breakpoint
CREATE INDEX `orid` ON `lending_remittancedeletetemp2` (`orid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `lending_remittancedeletetemp2` (`pnid`);--> statement-breakpoint
CREATE INDEX `loanproductid` ON `lending_scrate` (`loanproductid`);--> statement-breakpoint
CREATE INDEX `serverdate` ON `mis_passwordresetlog` (`serverdate`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `mis_userright` (`employeeid`);--> statement-breakpoint
CREATE INDEX `userrightid` ON `mis_userright` (`userrightid`);--> statement-breakpoint
CREATE INDEX `userrightid` ON `mis_userrightdefault` (`userrightid`);--> statement-breakpoint
CREATE INDEX `positionid` ON `mis_userrightdefault` (`positionid`);--> statement-breakpoint
CREATE INDEX `parent` ON `mis_userrightguide` (`parent`);--> statement-breakpoint
CREATE INDEX `client1id` ON `mobile_client_users` (`client1id`);--> statement-breakpoint
CREATE INDEX `sender_clientid` ON `mobile_transfer_details` (`sender_clientid`);--> statement-breakpoint
CREATE INDEX `parent` ON `rm_category` (`parent`);--> statement-breakpoint
CREATE INDEX `branchid` ON `rm_concerns` (`branchid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `rm_concerns` (`makerid`);--> statement-breakpoint
CREATE INDEX `escalatorid` ON `rm_concerns` (`escalatorid`);--> statement-breakpoint
CREATE INDEX `concern_status` ON `rm_concerns` (`concern_status`);--> statement-breakpoint
CREATE INDEX `postingtime` ON `rm_concerns` (`time_reported`);--> statement-breakpoint
CREATE INDEX `postingTime` ON `rm_diary` (`postingTime`);--> statement-breakpoint
CREATE INDEX `clientid` ON `rm_diary` (`clientid`);--> statement-breakpoint
CREATE INDEX `ornumber` ON `ropa_salespaymentdetails` (`ornumber`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_accounts` (`branchid`);--> statement-breakpoint
CREATE INDEX `corpclientid` ON `savings_accounts` (`corpclientid`);--> statement-breakpoint
CREATE INDEX `client1id` ON `savings_accounts` (`client1id`);--> statement-breakpoint
CREATE INDEX `client2id` ON `savings_accounts` (`client2id`);--> statement-breakpoint
CREATE INDEX `client3id` ON `savings_accounts` (`client3id`);--> statement-breakpoint
CREATE INDEX `client4id` ON `savings_accounts` (`client4id`);--> statement-breakpoint
CREATE INDEX `currentbalance1` ON `savings_accounts` (`currentbalance1`);--> statement-breakpoint
CREATE INDEX `currentbalance2` ON `savings_accounts` (`currentbalance2`);--> statement-breakpoint
CREATE INDEX `netinterest` ON `savings_accounts` (`netinterest`);--> statement-breakpoint
CREATE INDEX `note1` ON `savings_accounts` (`note1`);--> statement-breakpoint
CREATE INDEX `productid` ON `savings_accounts` (`productid`);--> statement-breakpoint
CREATE INDEX `latesttransdate` ON `savings_accounts` (`latesttransdate`);--> statement-breakpoint
CREATE INDEX `productidOrig` ON `savings_accounts` (`productidOrig`);--> statement-breakpoint
CREATE INDEX `savingsid_previous_cbs` ON `savings_accounts` (`savingsid_previous_cbs`);--> statement-breakpoint
CREATE INDEX `savingsid_autodebit` ON `savings_accountsautodebit` (`savingsid_autodebit`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_accountstemp` (`branchid`);--> statement-breakpoint
CREATE INDEX `corpclientid` ON `savings_accountstemp` (`corpclientid`);--> statement-breakpoint
CREATE INDEX `client1id` ON `savings_accountstemp` (`client1id`);--> statement-breakpoint
CREATE INDEX `client2id` ON `savings_accountstemp` (`client2id`);--> statement-breakpoint
CREATE INDEX `client3id` ON `savings_accountstemp` (`client3id`);--> statement-breakpoint
CREATE INDEX `client4id` ON `savings_accountstemp` (`client4id`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_accountstemp` (`savingsid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_changes` (`savingsid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `savings_changes` (`makerid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_checkdeptemp` (`savingsid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_checksonfloat` (`savingsid`);--> statement-breakpoint
CREATE INDEX `returned` ON `savings_checksonfloat` (`returned`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_checksonfloat` (`branchid`);--> statement-breakpoint
CREATE INDEX `reference` ON `savings_checksonfloat` (`reference`);--> statement-breakpoint
CREATE INDEX `check_number` ON `savings_checksonfloat` (`check_number`);--> statement-breakpoint
CREATE INDEX `approverid` ON `savings_errorcorrect` (`approverid`);--> statement-breakpoint
CREATE INDEX `ecsavingstransactionid` ON `savings_errorcorrectlink` (`ecsavingstransactionid`);--> statement-breakpoint
CREATE INDEX `transactionid` ON `savings_errorcorrecttemp` (`transactionid`);--> statement-breakpoint
CREATE INDEX `productid` ON `savings_interestrates` (`productid`);--> statement-breakpoint
CREATE INDEX `savingscategory` ON `savings_products` (`savingscategory`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_productstouse` (`branchid`);--> statement-breakpoint
CREATE INDEX `productid` ON `savings_productstouse` (`productid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `savings_ssaaggregatorhistory` (`clientid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_ssaplacementdetails` (`savingsid`);--> statement-breakpoint
CREATE INDEX `ssadate` ON `savings_ssaplacementdetails` (`ssadate`);--> statement-breakpoint
CREATE INDEX `ssarate` ON `savings_ssaplacementdetails` (`ssarate`);--> statement-breakpoint
CREATE INDEX `savingstransactionid` ON `savings_ssaplacementdetails` (`savingstransactionid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `savings_ssaplacementhistory` (`makerid`);--> statement-breakpoint
CREATE INDEX `termid` ON `savings_ssarate1` (`termid`);--> statement-breakpoint
CREATE INDEX `aggregatorid` ON `savings_ssa_recompute` (`transactor`);--> statement-breakpoint
CREATE INDEX `makerid` ON `savings_ssa_recompute` (`makerid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `savings_ssa_recompute` (`approverid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_ssa_recompute` (`branchid`);--> statement-breakpoint
CREATE INDEX `systemdate` ON `savings_ssa_recompute` (`transdate`);--> statement-breakpoint
CREATE INDEX `transactiondate` ON `savings_transactions` (`transactiondate`);--> statement-breakpoint
CREATE INDEX `currentbalance1` ON `savings_transactions` (`currentbalance1`);--> statement-breakpoint
CREATE INDEX `currentbalance2` ON `savings_transactions` (`currentbalance2`);--> statement-breakpoint
CREATE INDEX `postingtime` ON `savings_transactions` (`postingtime`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_transactions` (`savingsid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_transactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `branchidTrans` ON `savings_transactions` (`branchidTrans`);--> statement-breakpoint
CREATE INDEX `transaction` ON `savings_transactions` (`transaction`);--> statement-breakpoint
CREATE INDEX `productid` ON `savings_transactions` (`productid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `savings_transapproval` (`approverid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `savings_transapprovaltemp` (`savingsid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_transapprovaltemp` (`branchid`);--> statement-breakpoint
CREATE INDEX `productid` ON `savings_type` (`productid`);--> statement-breakpoint
CREATE INDEX `type` ON `savings_type` (`type`);--> statement-breakpoint
CREATE INDEX `branchid` ON `savings_uploads` (`branchid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `savings_uploads` (`approverid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `savings_uploads` (`makerid`);--> statement-breakpoint
CREATE INDEX `date_uploaded` ON `savings_uploads` (`date_uploaded`);--> statement-breakpoint
CREATE INDEX `date_approved` ON `savings_uploads` (`date_approved`);--> statement-breakpoint
CREATE INDEX `pnid` ON `scr_discount` (`pnid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `scr_discount` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `scr_discount` (`branchid`);--> statement-breakpoint
CREATE INDEX `approverid` ON `scr_discount` (`approverid`);--> statement-breakpoint
CREATE INDEX `clientid` ON `scr_provisionqualitative` (`clientid`);--> statement-breakpoint
CREATE INDEX `orid` ON `scr_tempremitpmt` (`orid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `scr_tempremitpmt` (`scrid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `scr_tempremitpmt` (`savingsid`);--> statement-breakpoint
CREATE INDEX `policyid` ON `scr_tempremitpmt` (`policyid`,`autodebit_savingsid`);--> statement-breakpoint
CREATE INDEX `date` ON `sl_balances` (`date`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_balances` (`branchid`);--> statement-breakpoint
CREATE INDEX `branchuser` ON `sl_bank` (`branchuser`);--> statement-breakpoint
CREATE INDEX `bankid` ON `sl_banktransactions` (`bankid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `sl_banktransactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_banktransactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `transaction` ON `sl_banktransactions` (`transaction`);--> statement-breakpoint
CREATE INDEX `transdate_2` ON `sl_banktransactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid_2` ON `sl_banktransactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `transdate_3` ON `sl_banktransactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid_3` ON `sl_banktransactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `transaction_2` ON `sl_banktransactions` (`transaction`);--> statement-breakpoint
CREATE INDEX `transaction_3` ON `sl_banktransactions` (`transaction`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_cashadvance` (`branchid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `sl_cashadvance` (`employeeid`);--> statement-breakpoint
CREATE INDEX `balance` ON `sl_cashadvance` (`balance`);--> statement-breakpoint
CREATE INDEX `detail` ON `sl_cashadvance` (`detail`);--> statement-breakpoint
CREATE INDEX `orderid` ON `sl_consumabledeliverypartial` (`orderid`);--> statement-breakpoint
CREATE INDEX `consumableid` ON `sl_consumabledeliverypartial` (`consumableid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_consumabledispatch` (`branchid`);--> statement-breakpoint
CREATE INDEX `consumableId` ON `sl_consumabledispatch` (`consumableid`);--> statement-breakpoint
CREATE INDEX `deliveredbyid` ON `sl_consumabledispatch` (`deliveredbyid`);--> statement-breakpoint
CREATE INDEX `orderStatus` ON `sl_consumableorders` (`orderStatus`);--> statement-breakpoint
CREATE INDEX `orderid` ON `sl_consumableordersdetails` (`orderid`);--> statement-breakpoint
CREATE INDEX `consumableid` ON `sl_consumabletrans` (`consumableid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_consumabletrans` (`branchid`);--> statement-breakpoint
CREATE INDEX `makerid` ON `sl_consumabletrans` (`makerid`);--> statement-breakpoint
CREATE INDEX `bankid` ON `sl_creditor` (`bankid`);--> statement-breakpoint
CREATE INDEX `bankid_2` ON `sl_creditor` (`bankid`);--> statement-breakpoint
CREATE INDEX `bankid_3` ON `sl_creditor` (`bankid`);--> statement-breakpoint
CREATE INDEX `datedue` ON `sl_creditoramortizations` (`datedue`);--> statement-breakpoint
CREATE INDEX `drawdownid` ON `sl_creditoramortizations` (`drawdownid`);--> statement-breakpoint
CREATE INDEX `transid` ON `sl_creditordrawdowns` (`transid`);--> statement-breakpoint
CREATE INDEX `bankid` ON `sl_creditordrawdowns` (`bankid`);--> statement-breakpoint
CREATE INDEX `creditorid` ON `sl_creditortransactions` (`creditorid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `sl_creditortransactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `banktransid` ON `sl_creditortransactions` (`banktransid`);--> statement-breakpoint
CREATE INDEX `banktransid_2` ON `sl_creditortransactions` (`banktransid`);--> statement-breakpoint
CREATE INDEX `banktransid_3` ON `sl_creditortransactions` (`banktransid`);--> statement-breakpoint
CREATE INDEX `ffetypeid` ON `sl_ffe` (`ffetypeid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_ffe` (`branchid`);--> statement-breakpoint
CREATE INDEX `branchid_2` ON `sl_ffe` (`branchid`);--> statement-breakpoint
CREATE INDEX `ffeid` ON `sl_ffedepreciation` (`ffeid`);--> statement-breakpoint
CREATE INDEX `transtype` ON `sl_ffedepreciation` (`transtype`);--> statement-breakpoint
CREATE INDEX `transdate` ON `sl_ffedepreciation` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_ffedepreciation` (`branchid`);--> statement-breakpoint
CREATE INDEX `transtype_2` ON `sl_ffedepreciation` (`transtype`);--> statement-breakpoint
CREATE INDEX `transdate_2` ON `sl_ffedepreciation` (`transdate`);--> statement-breakpoint
CREATE INDEX `transtype_3` ON `sl_ffedepreciation` (`transtype`);--> statement-breakpoint
CREATE INDEX `branchid_2` ON `sl_ffedepreciation` (`branchid`);--> statement-breakpoint
CREATE INDEX `transdate_3` ON `sl_ffedepreciation` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid_3` ON `sl_ffedepreciation` (`branchid`);--> statement-breakpoint
CREATE INDEX `ffeid` ON `sl_ffemovement` (`ffeid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_ffemovement` (`branchid`);--> statement-breakpoint
CREATE INDEX `ffeuserid` ON `sl_ffemovement` (`ffeuserid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_ffemovementtemp` (`branchid`);--> statement-breakpoint
CREATE INDEX `ffeuserid` ON `sl_ffemovementtemp` (`ffeuserid`);--> statement-breakpoint
CREATE INDEX `ffetypeid` ON `sl_ffetype` (`ffetypeid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `sl_ffe_inventory` (`branchid`);--> statement-breakpoint
CREATE INDEX `ffeid` ON `sl_ffe_inventory` (`ffeid`);--> statement-breakpoint
CREATE INDEX `employeeid` ON `sl_receivable` (`employeeid`);--> statement-breakpoint
CREATE INDEX `balance` ON `sl_receivable` (`balance`);--> statement-breakpoint
CREATE INDEX `balance_2` ON `sl_receivable` (`balance`);--> statement-breakpoint
CREATE INDEX `clientid` ON `sl_stock_certificate` (`shareholderid`);--> statement-breakpoint
CREATE INDEX `dateIssued` ON `sl_stock_certificate` (`certificateDate`);--> statement-breakpoint
CREATE INDEX `certNo` ON `sl_stock_certificate` (`certificateNo`);--> statement-breakpoint
CREATE INDEX `dateCancelled` ON `sl_stock_certificate` (`certificateidCancelled`);--> statement-breakpoint
CREATE INDEX `clientid` ON `sl_stock_shareholders` (`clientid`);--> statement-breakpoint
CREATE INDEX `shareholderid` ON `sl_stock_subscription` (`shareholderid`);--> statement-breakpoint
CREATE INDEX `subscribeDate` ON `sl_stock_subscription` (`subscribeDate`);--> statement-breakpoint
CREATE INDEX `makerid` ON `sl_stock_subscription` (`makerid`);--> statement-breakpoint
CREATE INDEX `SMSNumber` ON `sms_inbox` (`smsNumber`);--> statement-breakpoint
CREATE INDEX `SMSMessage` ON `sms_inbox` (`smsMessage`);--> statement-breakpoint
CREATE INDEX `clientid` ON `sms_outboxhistory` (`clientid`);--> statement-breakpoint
CREATE INDEX `savingsid` ON `sms_savings` (`savingsid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `tellering_expense` (`branchid`);--> statement-breakpoint
CREATE INDEX `branchid_2` ON `tellering_expense` (`branchid`);--> statement-breakpoint
CREATE INDEX `branchid_3` ON `tellering_expense` (`branchid`);--> statement-breakpoint
CREATE INDEX `expenseid` ON `tellering_expensedetails` (`expenseid`);--> statement-breakpoint
CREATE INDEX `expenseid_2` ON `tellering_expensedetails` (`expenseid`);--> statement-breakpoint
CREATE INDEX `expenseid_3` ON `tellering_expensedetails` (`expenseid`);--> statement-breakpoint
CREATE INDEX `normalbalance` ON `tellering_settings` (`normalbalance`);--> statement-breakpoint
CREATE INDEX `normalbalance_2` ON `tellering_settings` (`normalbalance`);--> statement-breakpoint
CREATE INDEX `normalbalance_3` ON `tellering_settings` (`normalbalance`);--> statement-breakpoint
CREATE INDEX `telleringid` ON `tellering_transactions` (`telleringid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `tellering_transactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `tellering_transactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid_2` ON `tellering_transactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `transdate_2` ON `tellering_transactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid_3` ON `tellering_transactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `transdate_3` ON `tellering_transactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `approver1id` ON `writeoff_approval` (`approver1id`);--> statement-breakpoint
CREATE INDEX `approver2id` ON `writeoff_approval` (`approver2id`);--> statement-breakpoint
CREATE INDEX `writeoffid` ON `writeoff_data` (`writeoffid`);--> statement-breakpoint
CREATE INDEX `branchid` ON `writeoff_data` (`branchid`);--> statement-breakpoint
CREATE INDEX `loanproductid` ON `writeoff_data` (`loanproductid`);--> statement-breakpoint
CREATE INDEX `date` ON `writeoff_data` (`date`);--> statement-breakpoint
CREATE INDEX `clientid` ON `writeoff_data` (`clientid`);--> statement-breakpoint
CREATE INDEX `coborrowerid` ON `writeoff_data` (`coborrowerid`);--> statement-breakpoint
CREATE INDEX `comaker1id` ON `writeoff_data` (`comaker1id`);--> statement-breakpoint
CREATE INDEX `comaker2id` ON `writeoff_data` (`comaker2id`);--> statement-breakpoint
CREATE INDEX `loanbalance` ON `writeoff_data` (`loanbalance`);--> statement-breakpoint
CREATE INDEX `comaker1id_2` ON `writeoff_data` (`comaker1id`);--> statement-breakpoint
CREATE INDEX `comaker2id_2` ON `writeoff_data` (`comaker2id`);--> statement-breakpoint
CREATE INDEX `loanbalance_2` ON `writeoff_data` (`loanbalance`);--> statement-breakpoint
CREATE INDEX `writeoffid_2` ON `writeoff_data` (`writeoffid`);--> statement-breakpoint
CREATE INDEX `transdate` ON `writeoff_transactions` (`transdate`);--> statement-breakpoint
CREATE INDEX `branchid` ON `writeoff_transactions` (`branchid`);--> statement-breakpoint
CREATE INDEX `pnid` ON `writeoff_transactions` (`pnid`);--> statement-breakpoint
CREATE INDEX `writeoffbalance` ON `writeoff_transactions` (`writeoffbalance`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_savings_balance` AS (select 1 AS `accountname`,1 AS `savingsid`,1 AS `categoryname`,1 AS `savingsAccountType`,1 AS `corpclientid`,1 AS `client1id`,1 AS `client2id`,1 AS `client3id`,1 AS `client4id`,1 AS `currentbalance1`,1 AS `currentbalance2`,1 AS `holdoutamount`,1 AS `minimumbalance`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_attendance` AS (select `rbs_db0`.`hr_attendance`.`employeeid` AS `employeeid`,cast(`rbs_db0`.`hr_attendance`.`date` as char(10) charset utf8mb3) AS `date`,cast(`rbs_db0`.`hr_attendance`.`in1` as char(8) charset utf8mb3) AS `in_am`,cast(`rbs_db0`.`hr_attendance`.`out1` as char(8) charset utf8mb3) AS `out_am`,cast(`rbs_db0`.`hr_attendance`.`in2` as char(8) charset utf8mb3) AS `in_pm`,cast(`rbs_db0`.`hr_attendance`.`out2` as char(8) charset utf8mb3) AS `out_pm`,if(`rbs_db0`.`hr_attendance`.`in1` = '00:00:00' and `rbs_db0`.`hr_attendance`.`in2` = '00:00:00',1,if(`rbs_db0`.`hr_attendance`.`in1` = '00:00:00' and `rbs_db0`.`hr_attendance`.`out1` = '00:00:00' or `rbs_db0`.`hr_attendance`.`out1` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`in2` = '00:00:00' and `rbs_db0`.`hr_attendance`.`out2` = '00:00:00',cast('0.5' as char(3) charset utf8mb3),'')) AS `absent`,if(`rbs_db0`.`hr_attendance`.`in1` > '08:00:00',round(time_to_sec(subtime(`rbs_db0`.`hr_attendance`.`in1`,'08:00:00')) / 60,2),if(`rbs_db0`.`hr_attendance`.`in2` > '12:00:00' and `rbs_db0`.`hr_attendance`.`out2` < '17:00:00',round(time_to_sec(subtime(`rbs_db0`.`hr_attendance`.`out2`,'17:00:00')) / 60,2),'')) AS `late`,if(`rbs_db0`.`hr_attendance`.`out1` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`out1` < '12:00:00' and `rbs_db0`.`hr_attendance`.`in2` = '00:00:00' and `rbs_db0`.`hr_attendance`.`out2` = '00:00:00',round(time_to_sec(subtime('12:00:00',`rbs_db0`.`hr_attendance`.`out1`)) / 60,2),if(`rbs_db0`.`hr_attendance`.`in1` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`out1` = '00:00:00' and `rbs_db0`.`hr_attendance`.`in2` = '00:00:00' and `rbs_db0`.`hr_attendance`.`out2` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`out2` < '17:00:00',round(time_to_sec(subtime('17:00:00',`rbs_db0`.`hr_attendance`.`out2`)) / 60,2),if(`rbs_db0`.`hr_attendance`.`in1` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`out1` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`in2` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`out2` <> '00:00:00' and `rbs_db0`.`hr_attendance`.`out2` < '17:00:00',round(time_to_sec(subtime('17:00:00',`rbs_db0`.`hr_attendance`.`out2`)) / 60,2),''))) AS `ut`,cast(dayname(`rbs_db0`.`hr_attendance`.`date`) as char(100) charset utf8mb3) AS `remarks` from (`rbs_db0`.`hr_attendance` left join `rbs_db0`.`general_employees` on(`rbs_db0`.`general_employees`.`id` = `rbs_db0`.`hr_attendance`.`employeeid`)) where `rbs_db0`.`hr_attendance`.`date` >= cast(cast(current_timestamp() as date) as date) and `rbs_db0`.`hr_attendance`.`date` <= cast(current_timestamp() as date) + interval 10 day);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_lending_termunits` AS (select 1 AS `termid`,1 AS `termname`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_api_gateways_credentials` AS (select 1 AS `name`,1 AS `value`,1 AS `description`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_amortdetails` AS (select 1 AS `pnid`,1 AS `amortnumber`,1 AS `datedue`,1 AS `principal`,1 AS `interest`,1 AS `servicecharge`,1 AS `savings`,1 AS `amort1`,1 AS `amort2`,1 AS `datepaid`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_employeedetails` AS (select `rbs_db0`.`general_employees`.`id` AS `employeeid`,cast(concat(lpad(`rbs_db0`.`general_employees`.`id`,4,0),' - ',`rbs_db0`.`general_employees`.`lastname`,', ',`rbs_db0`.`general_employees`.`firstname`,' ',substr(`rbs_db0`.`general_employees`.`middlename`,1,1),'.') as char(150) charset utf8mb3) AS `employeedetails`,`rbs_db0`.`general_employees`.`image` AS `image` from `rbs_db0`.`general_employees` where `rbs_db0`.`general_employees`.`employmentstatus` > 0);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_transfer_details` AS (select 1 AS `sender_clientid`,1 AS `cpnumber`,1 AS `accountname`,1 AS `receiver_nickname`,1 AS `address`,1 AS `receiver_accountnumber`,1 AS `bicfi`,1 AS `bank_name`,1 AS `bank_code`,1 AS `head_office_brstn`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_logo` AS (select cast(cast(current_timestamp() as date) as char(10) charset utf8mb3) AS `serverdate`,cast(cast(current_timestamp() as time) as char(8) charset utf8mb3) AS `servertime`,`rbs_db0`.`general_criticalsettings`.`institutionname` AS `institutionname`,`rbs_db0`.`general_criticalsettings`.`institutioncode` AS `institutioncode`,`rbs_db0`.`general_criticalsettings`.`logo` AS `logo` from `rbs_db0`.`general_criticalsettings`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_mobile_security_questions` AS (select 1 AS `questionid`,1 AS `question`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_savings_transactions` AS (select 1 AS `savingstransactionid`,1 AS `branchid`,1 AS `savingsid`,1 AS `transactiondate`,1 AS `reference`,1 AS `transactionname`,1 AS `postingtime`,1 AS `transactiontype`,1 AS `amount`,1 AS `currentbalance1`,1 AS `currentbalance2`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_mobile_security_question_answer` AS (select 1 AS `cpnumber`,1 AS `questionid`,1 AS `answer`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_clientdetails` AS (select 1 AS `firstname`,1 AS `middlename`,1 AS `lastname`,1 AS `clientid`,1 AS `address`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_fingerprints` AS (select `rbs_db0`.`general_employees`.`id` AS `employeeid`,concat(`rbs_db0`.`general_employees`.`firstname`,' ',left(`rbs_db0`.`general_employees`.`middlename`,1),'. ',`rbs_db0`.`general_employees`.`lastname`) AS `employeename`,`rbs_db0`.`general_employees`.`employmentstatus` AS `employmentstatus`,`rbs_db0`.`general_employees`.`fingerprint1` AS `fingerprint1`,`rbs_db0`.`general_employees`.`fingerprint2` AS `fingerprint2`,`rbs_db0`.`general_employees`.`fingerprint3` AS `fingerprint3` from `rbs_db0`.`general_employees` where `rbs_db0`.`general_employees`.`employmentstatus` > 0);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_loan_payments` AS (select 1 AS `pnid`,1 AS `amortnumber`,1 AS `datedue`,1 AS `datepaid`,1 AS `ornumber`,1 AS `paymentdate`,1 AS `paymentamount`,1 AS `loanbalance`,1 AS `savingsexcess`,1 AS `principalpmt`,1 AS `interestpmt`,1 AS `servicechargepmt`,1 AS `savingspmt`,1 AS `amort1pmt`,1 AS `amort2pmt`,1 AS `penaltypmt`,1 AS `pastdueinterestpmt`,1 AS `postedbyinitial`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `vw_loandetails` AS (select 1 AS `clientid`,1 AS `pnid`,1 AS `branchname`,1 AS `loanproductname`,1 AS `date`,1 AS `maturity`,1 AS `amount`,1 AS `interestrate`,1 AS `interestcomputationbasis`,1 AS `loanbalance`,1 AS `nextdatedue`,1 AS `term`,1 AS `termunitname`,1 AS `loanstatusname`,1 AS `amortdue`);
*/