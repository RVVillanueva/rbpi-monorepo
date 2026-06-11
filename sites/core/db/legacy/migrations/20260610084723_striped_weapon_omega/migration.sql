ALTER TABLE `acctng_branchcostcenters` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_branchcostcenters` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_branchcostcenters` MODIFY COLUMN `costcenterid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_budget` MODIFY COLUMN `budgetid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_budget` MODIFY COLUMN `glcode` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_budget` MODIFY COLUMN `costcenterid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_budget` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_budget` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_cost_center` MODIFY COLUMN `id` smallint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_cost_center` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_cost_center` MODIFY COLUMN `parent` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_cost_center` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_cost_center` MODIFY COLUMN `category_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_date` MODIFY COLUMN `changeid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_date` MODIFY COLUMN `current_acctngdate` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `acctng_date` MODIFY COLUMN `proposed_acctngdate` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `acctng_date` MODIFY COLUMN `branchid` mediumint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `acctng_date` MODIFY COLUMN `makerid` mediumint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `acctng_date` MODIFY COLUMN `approverid` mediumint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `acctng_financialratios` MODIFY COLUMN `is_annualized` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_financialratios` MODIFY COLUMN `view_sequence` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_glaccounts` MODIFY COLUMN `gl_code` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_glaccounts` MODIFY COLUMN `gl_level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_glaccounts` MODIFY COLUMN `gl_parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_glaccounts` MODIFY COLUMN `gl_childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_glaccounts` MODIFY COLUMN `userlevel` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journaldetails` MODIFY COLUMN `journal_details_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journaldetails` MODIFY COLUMN `journalid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journaldetails` MODIFY COLUMN `gl_code` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journaldetails` MODIFY COLUMN `subsidiary` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journals` MODIFY COLUMN `journalid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journals` MODIFY COLUMN `ibjournalid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journals` MODIFY COLUMN `timestamp` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journals` MODIFY COLUMN `journal_branch` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journals` MODIFY COLUMN `user` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journal_ibtracker` MODIFY COLUMN `ib_journal_details_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journal_ibtracker` MODIFY COLUMN `journal_details_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `trail_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `timestamp` datetime DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `acctng_date` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `branchid` smallint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `journalid` int DEFAULT 0;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `ibjournalid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `makerid` mediumint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `acctng_journal_trail` MODIFY COLUMN `approverid` mediumint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `amlcId` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `transType` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `dataType` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `referenceType` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `clientid1` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `clientid2` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `clientid3` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `clientid4` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `beneBarangayid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `beneNationality` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `makerid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transaction` MODIFY COLUMN `status` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transcode` MODIFY COLUMN `amlcCodeId` mediumint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `amlc_transcode` MODIFY COLUMN `submissionType` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `atm_api_logs` MODIFY COLUMN `logid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `atm_api_logs` MODIFY COLUMN `to_account_number` int DEFAULT 0;--> statement-breakpoint
ALTER TABLE `atm_api_logs` MODIFY COLUMN `date_created` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `atm_mobile_logs` MODIFY COLUMN `logid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `atm_mobile_logs` MODIFY COLUMN `to_account_number` int DEFAULT 0;--> statement-breakpoint
ALTER TABLE `atm_mobile_logs` MODIFY COLUMN `date_created` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `auditid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `detailsIndex` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `policyrefid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `findingRisk` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `demerit` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `isRecurring` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `noResponse` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `compliance` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_details` MODIFY COLUMN `detailStatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_policyref` MODIFY COLUMN `policyrefid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_policyref` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_policyref` MODIFY COLUMN `parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_policyref` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `auditid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `audittype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `officetype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `officeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `auditorid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `managerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `manageraccess` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `riskClassification` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `audit_profile` MODIFY COLUMN `auditstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_autodebitaccount` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_autodebitaccount` MODIFY COLUMN `autodebitsavingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `checkbookletid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `conduitbankid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `checktype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `charging` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `checknumberstart` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `checknumberend` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_bookletdetails` MODIFY COLUMN `savingstransactionid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_checks_issued` MODIFY COLUMN `check_issued_id` bigint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_checks_issued` MODIFY COLUMN `source` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_checks_issued` MODIFY COLUMN `reference_id` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_conduitbank` MODIFY COLUMN `conduitbankid` smallint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_conduitbank` MODIFY COLUMN `bankid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_conduitbank` MODIFY COLUMN `errorchecked` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_conduitbank` MODIFY COLUMN `status` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward1` MODIFY COLUMN `inwardid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward1` MODIFY COLUMN `conduitbankid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward1` MODIFY COLUMN `item_count` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward1` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward1` MODIFY COLUMN `approverid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward2` MODIFY COLUMN `inwardid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward2` MODIFY COLUMN `checknumber` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward2` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward2` MODIFY COLUMN `checkstatus` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inward2` MODIFY COLUMN `savingstransactionid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp1` MODIFY COLUMN `tempid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp1` MODIFY COLUMN `conduitbankid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp1` MODIFY COLUMN `item_count` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp1` MODIFY COLUMN `inwardChecked` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp1` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp2` MODIFY COLUMN `inward_details_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp2` MODIFY COLUMN `tempid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp2` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp2` MODIFY COLUMN `autoDetect` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_inwardtemp2` MODIFY COLUMN `checkstatus` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_loanpayments` MODIFY COLUMN `orid` bigint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_loanpayments` MODIFY COLUMN `status` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_outward` MODIFY COLUMN `outward_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_outward` MODIFY COLUMN `conduitbankid` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_outward` MODIFY COLUMN `item_count` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_request` MODIFY COLUMN `requestid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_request` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_request` MODIFY COLUMN `conduitbankid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_request` MODIFY COLUMN `checktype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_request` MODIFY COLUMN `checkcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_request` MODIFY COLUMN `checkissued` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_spo` MODIFY COLUMN `spoid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_spo` MODIFY COLUMN `checknumber` int NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_spo` MODIFY COLUMN `conduitbankid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_spo` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_spo` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `checking_spo` MODIFY COLUMN `spostatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `collateralid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `collateraltype` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `clientid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `barangay` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `action` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `map` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `chattelType` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `chattelClass` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `used` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `appraisalFrequency` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral` MODIFY COLUMN `status` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_appraisal` MODIFY COLUMN `appraisalid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_appraisal` MODIFY COLUMN `collateralid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_appraisal` MODIFY COLUMN `employeeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_appraisal` MODIFY COLUMN `pieces` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_appraisal_images` MODIFY COLUMN `imageid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_appraisal_images` MODIFY COLUMN `appraisalid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `receiverid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `employeeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `collateralNumber` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `action` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `status` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `isReceived` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_movements` MODIFY COLUMN `previousbranchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_pndetails` MODIFY COLUMN `clientid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_pndetails` MODIFY COLUMN `pnid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_pndetails` MODIFY COLUMN `collateralid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_pndetails` MODIFY COLUMN `groupid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `collateral_pndetails` MODIFY COLUMN `approved` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `core_api_users` MODIFY COLUMN `apiuserid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `eload_txnid` MODIFY COLUMN `transid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `ffe_macaddress` MODIFY COLUMN `ffeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `loanproductid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `loanclassid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `industryid` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `securityid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `loanpurposeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `termCat1` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `termCat2` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `loanstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `loanstatusprevious` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `openingBalance` decimal(12,2) DEFAULT (0) NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_loans` MODIFY COLUMN `closingBalance` decimal(12,2) DEFAULT (0) NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_reports` MODIFY COLUMN `id` smallint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_reports` MODIFY COLUMN `cutoffdate` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `frp_reports` MODIFY COLUMN `isAvailable` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_reports` MODIFY COLUMN `display_order` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_savings` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_savings` MODIFY COLUMN `savingscategory` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_savings` MODIFY COLUMN `accountstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `frp_savings` MODIFY COLUMN `termDays` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_activities` MODIFY COLUMN `activity_id` bigint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_activities` MODIFY COLUMN `makerid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_activities` MODIFY COLUMN `activity_time` datetime DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_activities` MODIFY COLUMN `subject_category` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_activities` MODIFY COLUMN `subject_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address` MODIFY COLUMN `id` mediumint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address` MODIFY COLUMN `code` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address` MODIFY COLUMN `parent` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address` MODIFY COLUMN `code_parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address` MODIFY COLUMN `isHighRisk` tinyint DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `general_address_old` MODIFY COLUMN `id` mediumint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address_old` MODIFY COLUMN `code` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address_old` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address_old` MODIFY COLUMN `parent` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_address_old` MODIFY COLUMN `code_parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branchcoverage` MODIFY COLUMN `branch` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branchcoverage` MODIFY COLUMN `town` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `id` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `addressbarangay` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `parent` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `interbranch_parent` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `childcount` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `branchhead` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `checker` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `branchstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `clearing_adjustment` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `allowpostingonsaturdays` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `allowpostingonsundays` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `excludeddayposting` tinyint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `category_id` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_branches` MODIFY COLUMN `printorafterissuance` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_checkcoordinate` MODIFY COLUMN `checkid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_checkcoordinate` MODIFY COLUMN `employeeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_checkcoordinate` MODIFY COLUMN `date_format` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchange` MODIFY COLUMN `changeid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchange` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchange` MODIFY COLUMN `clientid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchange` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchange` MODIFY COLUMN `approverid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchangetemp` MODIFY COLUMN `clientid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchangetemp` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchangetemp` MODIFY COLUMN `branch` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchangetemp` MODIFY COLUMN `spouseid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchangetemp` MODIFY COLUMN `onUpdateKYCLevelTo4` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientchangetemp` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `clientid` bigint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `clienttype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `orgtype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `gender` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `civilstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `nationality` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `id1type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `id1dateissued` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `id2type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `id2dateissued` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `barangayid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `barangayid2` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `rep1_clientid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `rep2_clientid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `fundsource` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `fundoccupation` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `fundbarangayid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `fundgrossincome` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `spouseid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `assetsizeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `centerid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `officeid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `branch` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `datecreated` date DEFAULT (0000-00-00) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `riskprofile` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `viptag` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `dosri` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `rpt` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `pep` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `smsEnrolled` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsbeneficiary` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsbeneficiary` MODIFY COLUMN `beneficiaryid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsbeneficiary` MODIFY COLUMN `relationship` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsbeneficiary` MODIFY COLUMN `ordernumber` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmerge` MODIFY COLUMN `mergeid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmerge` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmerge` MODIFY COLUMN `clientid1` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmerge` MODIFY COLUMN `clientid2` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmerge` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmerge` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmergetemp` MODIFY COLUMN `mergetempid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmergetemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmergetemp` MODIFY COLUMN `clientid1` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmergetemp` MODIFY COLUMN `clientid2` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmergetemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsmergetemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsrelatives` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsrelatives` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsrelatives` MODIFY COLUMN `relation` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsresignation` MODIFY COLUMN `resignationTransId` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsresignation` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientsresignation` MODIFY COLUMN `resignationid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientssolicitor` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientssolicitor` MODIFY COLUMN `solicitortype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clientssolicitor` MODIFY COLUMN `solicitorid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` MODIFY COLUMN `riskprofile_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` MODIFY COLUMN `riskprofile_timestamp` datetime DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` MODIFY COLUMN `riskprofilemodel_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_clients_riskprofiles` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_commagencies` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_communications` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_communications` MODIFY COLUMN `type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_communications` MODIFY COLUMN `agency` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_coordinatesetting` MODIFY COLUMN `browser` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_criticalsettings` MODIFY COLUMN `institutionid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_criticalsettings` MODIFY COLUMN `corporatebranchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_criticalsettings` MODIFY COLUMN `pendingautorun` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_criticalsettings` MODIFY COLUMN `is_autodayend` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employeepassword` MODIFY COLUMN `passwordhistoryid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employeepassword` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `id` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `nationality` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `gender` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `civilstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `contactDefault` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `barangayid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `barangayid2` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `savingsid2` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `npaid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `payrollstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `rankid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `positionid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `payrollfrequency` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `workdaysperyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `wagebasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `attempts` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `userbranchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `isactive` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `blockduetoleave` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_employees` MODIFY COLUMN `passworddefault` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumcomments` MODIFY COLUMN `commentid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumcomments` MODIFY COLUMN `threadid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumcomments` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumcomments` MODIFY COLUMN `timestamp` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumthreads` MODIFY COLUMN `threadid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumthreads` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumthreads` MODIFY COLUMN `audienceid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_forumthreads` MODIFY COLUMN `timestamp` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_holidays` MODIFY COLUMN `date` date DEFAULT (0000-00-00) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_holidays` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_ipmonitor` MODIFY COLUMN `ipid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_ipmonitor` MODIFY COLUMN `isCritical` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_ipmonitor` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_logs` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_logs` MODIFY COLUMN `user` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_messages` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_messages` MODIFY COLUMN `postedby` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_monthend` MODIFY COLUMN `approver1` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_monthend` MODIFY COLUMN `approver2` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_nationality` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_nationality` MODIFY COLUMN `nationality_code` int NOT NULL;--> statement-breakpoint
ALTER TABLE `general_relations` MODIFY COLUMN `relationid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_relations` MODIFY COLUMN `categoryid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_riskprofile` MODIFY COLUMN `riskprofilemodel_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settings` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingsidentification` MODIFY COLUMN `id` mediumint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingsidentification` MODIFY COLUMN `id_cbs` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingsidentification` MODIFY COLUMN `id_cic` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingslog` MODIFY COLUMN `logid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingslog` MODIFY COLUMN `timestamp` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingslog` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_settingslog` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate` MODIFY COLUMN `systemdateid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate` MODIFY COLUMN `loansapproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate` MODIFY COLUMN `savingsapproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate` MODIFY COLUMN `managerapproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate_temp` MODIFY COLUMN `tempid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate_temp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate_temp` MODIFY COLUMN `loansapproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate_temp` MODIFY COLUMN `savingsapproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_systemdate_temp` MODIFY COLUMN `managerapproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `general_update` MODIFY COLUMN `updateid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_attendance` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_cutoffpayroll` MODIFY COLUMN `weeklycutoff` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_cutoffpayroll` MODIFY COLUMN `semimonthlycutoff` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_cutoffpayroll` MODIFY COLUMN `monthlycutoff` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `offenseGroup` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `sanction1` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `suspensionDays1` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `sanction2` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `suspensionDays2` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `sanction3` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `suspensionDays3` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `sanction4` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `suspensionDays4` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `sanction5` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `suspensionDays5` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `sanction6` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_dagroupsanctions` MODIFY COLUMN `suspensionDays6` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_daoffenses` MODIFY COLUMN `offenseid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_daoffenses` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_daoffenses` MODIFY COLUMN `parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_daoffenses` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_daoffenses` MODIFY COLUMN `offensegroup` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `daid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `offenseid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `language` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `instance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `sanction` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `sanctionSuspensionDays` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_das` MODIFY COLUMN `hrApproverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductionlist` MODIFY COLUMN `deductionid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductionlist` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductionlist` MODIFY COLUMN `deductiontypeid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductionlist` MODIFY COLUMN `amorts` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductiontype` MODIFY COLUMN `deductiontypeid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductiontype` MODIFY COLUMN `agency` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_deductiontype` MODIFY COLUMN `amortfrequency` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_departments` MODIFY COLUMN `departmentid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_departments` MODIFY COLUMN `level` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_departments` MODIFY COLUMN `parent` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_employeesavings` MODIFY COLUMN `bracket` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_appraisal` MODIFY COLUMN `appraisalid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_appraisal` MODIFY COLUMN `evaluationmonth` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_appraisal` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_appraisal` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_appraisal` MODIFY COLUMN `appraiser` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_appraisal` MODIFY COLUMN `timestamp` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competency` MODIFY COLUMN `competencyid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competency` MODIFY COLUMN `parent` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competency` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competencyposition` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competencyposition` MODIFY COLUMN `competencyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competencytarget` MODIFY COLUMN `competencytargetid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competencytarget` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competencytarget` MODIFY COLUMN `categoryid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_competencytarget` MODIFY COLUMN `competencyid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_essential` MODIFY COLUMN `essentialid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_essential` MODIFY COLUMN `parent` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_essential` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_groupweight` MODIFY COLUMN `positionid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplan` MODIFY COLUMN `oplanid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplan` MODIFY COLUMN `parent` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplan` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplan` MODIFY COLUMN `unitid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplanposition` MODIFY COLUMN `positionid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplanposition` MODIFY COLUMN `oplanid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplantarget` MODIFY COLUMN `oplantargetid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplantarget` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplantarget` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplantarget` MODIFY COLUMN `kraid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplantarget` MODIFY COLUMN `vartype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplantarget` MODIFY COLUMN `oplanid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplanunit` MODIFY COLUMN `unitid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_oplanunit` MODIFY COLUMN `vartype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_performancematrix` MODIFY COLUMN `id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `editlock` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `appraisallock` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `evaluationmonth` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `competencyratingcount` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `competencyratingweight1` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `competencyratingweight2` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `competencyratingweight3` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `competencyratingweight4` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_setting` MODIFY COLUMN `competencyratingweight5` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_settings` MODIFY COLUMN `eval_settingsid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_settings` MODIFY COLUMN `evaluationyear` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_settings` MODIFY COLUMN `evaluationmonth` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_target` MODIFY COLUMN `targetid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_target` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_eval_target` MODIFY COLUMN `piid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavecreditstemp` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavecreditstemp` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavecreditstemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavecreditstemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesl` MODIFY COLUMN `slid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesl` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesl` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesl` MODIFY COLUMN `approver2id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesl` MODIFY COLUMN `units` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesldetail` MODIFY COLUMN `slid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavesldetail` MODIFY COLUMN `availed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `leavetempid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `leavetype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `leavedays` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `approver1ok` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `approver2id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavetemp` MODIFY COLUMN `units` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevl` MODIFY COLUMN `vlid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevl` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevl` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevl` MODIFY COLUMN `approver2id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevl` MODIFY COLUMN `units` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevldetail` MODIFY COLUMN `vlid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_leavevldetail` MODIFY COLUMN `availed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `npaid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `employeeid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `employmentstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `rankid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `payrollfrequency` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `workdaysperyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `wagebasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npa` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `employmentstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `rankid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `payrollfrequency` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `workdaysperyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `wagebasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_npatemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ob_seminar` MODIFY COLUMN `ob_seminar_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ob_seminar` MODIFY COLUMN `ob_seminar_type` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ob_seminar` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ob_seminar` MODIFY COLUMN `postedby` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_overtimepremium` MODIFY COLUMN `holidaytype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_overtimepremium` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata1` MODIFY COLUMN `payrollid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata1` MODIFY COLUMN `payrollfrequency` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata1` MODIFY COLUMN `workdaysofperiod` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata1` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata1` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata2` MODIFY COLUMN `payrollid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata2` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata2` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata2` MODIFY COLUMN `costcenterid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata2` MODIFY COLUMN `workdaysperyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata2` MODIFY COLUMN `wagebasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata3` MODIFY COLUMN `payrollid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata3` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata3` MODIFY COLUMN `deductiontypeid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolldata3` MODIFY COLUMN `referenceid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp1` MODIFY COLUMN `payrollfrequency` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp1` MODIFY COLUMN `workdaysofperiod` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp1` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp1` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp2` MODIFY COLUMN `payrollid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp2` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp2` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp3` MODIFY COLUMN `tempid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp3` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp3` MODIFY COLUMN `deductiontypeid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_payrolltemp3` MODIFY COLUMN `referenceid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positions` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positions` MODIFY COLUMN `departmentid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positions` MODIFY COLUMN `costcenterid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positiontemp` MODIFY COLUMN `tempid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positiontemp` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positiontemp` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positiontemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_positiontemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ranks` MODIFY COLUMN `rankid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ranks` MODIFY COLUMN `isofficer` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_ranks` MODIFY COLUMN `payrollLevel` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `hr_sss` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_banks` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_banks` MODIFY COLUMN `bin` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_fees` MODIFY COLUMN `feeid` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_gateways` MODIFY COLUMN `id` smallint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_gateways` MODIFY COLUMN `implementation` datetime DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `transid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `api_transactionid` bigint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `bnkcode` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `acctno` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `accttype` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `tfrbnkcode` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `savingstransactionid` bigint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `instapay_transactions` MODIFY COLUMN `savingstransactionid2` bigint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `insurance_amort` MODIFY COLUMN `policyid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_amort` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_amort` MODIFY COLUMN `paymentid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_amort` MODIFY COLUMN `lending_amortnumber` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_amort` MODIFY COLUMN `amortnumber` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `claim_id` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `timestamp` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `policyid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `policydetail_id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `diagnosis_id` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `claim_availment` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_claims` MODIFY COLUMN `releasedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_diagnosis` MODIFY COLUMN `diagnosis_id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_diagnosis` MODIFY COLUMN `category` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_diagnosis` MODIFY COLUMN `parent` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_diagnosis` MODIFY COLUMN `level` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_diagnosis` MODIFY COLUMN `childcount` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_incident` MODIFY COLUMN `incidentid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_incident` MODIFY COLUMN `incident_type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_incident` MODIFY COLUMN `death_type` tinyint DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `insurance_payments` MODIFY COLUMN `paymentid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_payments` MODIFY COLUMN `paymentid_orig` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_payments` MODIFY COLUMN `policyid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_payments` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `policyid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `branchid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `insuranceproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `termcomputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `countinsured` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `cbu_savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `userid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policy` MODIFY COLUMN `cancel_userid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policybeneficiary` MODIFY COLUMN `id` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policybeneficiary` MODIFY COLUMN `policyid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policybeneficiary` MODIFY COLUMN `beneficiaryid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policydetail` MODIFY COLUMN `policydetail_id` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policydetail` MODIFY COLUMN `policyid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_policydetail` MODIFY COLUMN `relativeid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `insurance_products` MODIFY COLUMN `insuranceproductid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_agingbracket` MODIFY COLUMN `lower` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_agingbracket` MODIFY COLUMN `upper` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetails` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetails` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailsedit` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailsedit` MODIFY COLUMN `changes_principal` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailsedit` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailsedit` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailstemp` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailstemp` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_amortdetailstemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_assetsize` MODIFY COLUMN `assetsizeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_borrowertypes` MODIFY COLUMN `borrowertypeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_borrowertypes` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_borrowertypes` MODIFY COLUMN `parent` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_borrowertypes` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `centerid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `centernumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `barangayid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `meetingday` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `accountofficer` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `signatory1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `signatory2id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centers` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `tempid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `centernumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `barangayid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `meetingday` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `accountofficer` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `signatory1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `signatory2id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `savingsproductid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `centerid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `branchidFrom` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `branchidTo` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_centerstransfer` MODIFY COLUMN `isTransferred` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_clientgroup` MODIFY COLUMN `clientgroupid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_clientgroup` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_clientgroup` MODIFY COLUMN `parent` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_clientgroup` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `creditline_id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `creditline_productid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `loanproductid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `creditline_term` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_data` MODIFY COLUMN `creditline_status` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_product` MODIFY COLUMN `creditline_productid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_product` MODIFY COLUMN `loanproductid` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_product` MODIFY COLUMN `creditline_maxterm` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_product` MODIFY COLUMN `required_creditlineapprovers` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditline_product` MODIFY COLUMN `required_loanapprovers` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `creditscore_id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `timestamp` datetime DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `creditscore_template_id` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `totalscore` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `risklevel` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_data` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_creditscore_template` MODIFY COLUMN `creditscore_template_id` smallint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_deductionrate` MODIFY COLUMN `loanproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_deductionrate` MODIFY COLUMN `deduction` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discount` MODIFY COLUMN `discountid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discount` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discount` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discount` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discount` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discounttemp` MODIFY COLUMN `discountid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discounttemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discounttemp` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discounttemp` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_discounttemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_economicactivities` MODIFY COLUMN `id` mediumint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_economicactivities` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_economicactivities` MODIFY COLUMN `parent` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_economicactivities` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_industries` MODIFY COLUMN `industryid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_industries` MODIFY COLUMN `isuse` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_industryperloanclass` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_industryperloanclass` MODIFY COLUMN `industryid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insformcoordinates` MODIFY COLUMN `insuranceform` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `insuranceproviderid` tinyint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `maxageprincipal` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `maxageparent` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `maxagespouse` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `maxagesibling` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `maxagechild` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `insuredparent` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `insuredspouse` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `insuredsibling` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insuranceproviders` MODIFY COLUMN `insuredchild` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insurancerates` MODIFY COLUMN `insuranceproviderid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_insurancerates` MODIFY COLUMN `month` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_interestrates` MODIFY COLUMN `range` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_letters` MODIFY COLUMN `letterid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_letters` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_letters` MODIFY COLUMN `daysMin` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_letters` MODIFY COLUMN `daysMax` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodecurrent` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeincomecurrent` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodepastdue` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeincomepastdue` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeNonperf` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeIncomeNonperf` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeinlitigation` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeincomeinlitigation` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeDiscountOutrightInt` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeDiscountOutrightSC` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeDiscountAmortInt` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeDiscountAmortSC` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `glcodeProvision` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `parent` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassifications` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassperpurpose` MODIFY COLUMN `loanpurposeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanclassperpurpose` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `spouseid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loanproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `termunit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `term` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `interestcomputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `interestcomputationbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `proceedstype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `insuranceproviderid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `creditorid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `coborrowerid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `comaker1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `comaker2id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `comaker3id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `comaker4id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `comaker5id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `workersemployed` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `industryid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loanpurposeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `securityid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `assetsizeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `borrowertypeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `clientgroupid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `restructuredtag` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `restructuredpnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `restructuredCount` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `autodebitAmort` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `amort2destination` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `cureperiod` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loancycle` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loancycleProduct` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loanofficerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loanstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `loanstatusstatic` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `releasetag` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails` MODIFY COLUMN `dateApplied` date DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `lending_loandetailsteller` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails_changes` MODIFY COLUMN `change_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails_changes` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails_changes` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails_changes` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loandetails_changes` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductadjustments` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductadjustments` MODIFY COLUMN `loanproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductadjustments` MODIFY COLUMN `insuranceproviderid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductadjustments` MODIFY COLUMN `creditorid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductindustry` MODIFY COLUMN `loanproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductindustry` MODIFY COLUMN `industryid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `loanproductid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `usepnform` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `loanamountmaximum` int NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `loancountmaximum` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `weekadjuster` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `requirecoborrower` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `requiredcomakers` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `requireworkersemployed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `borrowertypedefault` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `clientgroupdefault` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `requiresecurity` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `defaultsecurity` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `isEmployeeLoan` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `termunitflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `termDaysFixed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `termDaysFixedFlex` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `termdefault` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `termmaximum` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestcomputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `diminishing_option` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestcomputationflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestcomputationbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestcomputationbasisflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestRecompute` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `balloonoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `computepastdueinterest` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `daysinayear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestdiscountedglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `interestamortizedglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amortrounding` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amortgraceperiod` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `autodebitAmort` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `acl_exempted` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scdiscounteduse` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scdiscountedMaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scbracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scdpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scrateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scdiscountedglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scamortuse` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scamortoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scamortflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `scamortglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `penaltyAmortGracePeriod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `penaltyAmortBasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `penaltyAmortBasis2` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `pastdueAmortBasis` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `penaltyDueGracePeriod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `penaltyDueInclude` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `penaltyglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `gracePeriodComputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `pdinterestglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `useinsurance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `insuranceflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `insuranceproviderid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `useinsurancetable` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `enabledeedofassignment` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `insuranceglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `insuranceproductid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `savingsdiscountedflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `savingsamortizeduse` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `savingsamortizedflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `savingsexcess` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `savingsproductid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `taxflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `taxglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction1flexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction1MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction1bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction1dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction1rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction1glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction2MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction2bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction2dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction2rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction2glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction3MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction3bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction3dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction3rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction3glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4use` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4flexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction4glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5use` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5flexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction5glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction6use` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction6MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction6bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction6dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction6rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction6glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction7use` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction7MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction7bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction7dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction7rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction7glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction8use` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction8MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction8bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction8dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction8rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction8glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction9use` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction9MaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction9bracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction9dpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction9rateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `deduction9glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `proceedstypedefault` int NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `micro_nplcomputeoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `isTellerDisbursed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `isCashDisburesedValidated` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `securityDependentPN` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort1option` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort1isFinCharge` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort1glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort2option` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort2isFinCharge` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort2glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `amort2destination` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `defaultcostcenter` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `currentglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `pastdueglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `nonperfglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `inlitigationglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `provisionglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod1` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod2` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod3` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod4` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod5` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod6` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod7` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `cureperiod8` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `enable_individual_cureperiod` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `smsLanguage` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `smsFreeAmt` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `smsUnpaidAmorts` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `comakerLimit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproducts` MODIFY COLUMN `creditscore_template_id` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductstouse` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanproductstouse` MODIFY COLUMN `loanproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanpurpose` MODIFY COLUMN `loanpurposeid` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanpurpose` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanpurpose` MODIFY COLUMN `parent` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanpurpose` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loansecurities` MODIFY COLUMN `loansecurityid` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loansecurities` MODIFY COLUMN `isSecured` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loansecurities` MODIFY COLUMN `collateral_type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loansecurities` MODIFY COLUMN `frp_securitytag` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanstatus` MODIFY COLUMN `loanstatusid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_loanterms` MODIFY COLUMN `range` int NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `transaction_type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `oridold` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `status` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_misposting` MODIFY COLUMN `is_cancelled` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mispostingtemp` MODIFY COLUMN `transaction_type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mispostingtemp` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mispostingtemp` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mispostingtemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mispostingtemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mobile_loanapplication` MODIFY COLUMN `tempid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mobile_loanapplication` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mobile_loanapplication` MODIFY COLUMN `termunit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_mobile_loanapplication` MODIFY COLUMN `term` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratorium` MODIFY COLUMN `groupby` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratorium` MODIFY COLUMN `groupid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratorium` MODIFY COLUMN `moratoriumdays` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratorium` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratorium` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratorium` MODIFY COLUMN `approver2id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `moratoriumid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `branchid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `groupby` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `groupid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `moratoriumdays` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_moratoriumtemp` MODIFY COLUMN `approver2id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_office` MODIFY COLUMN `officeid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_office` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_office` MODIFY COLUMN `aoid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentdetails` MODIFY COLUMN `paymentid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentdetails` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentdetails` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentpriority` MODIFY COLUMN `id` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentpriority` MODIFY COLUMN `priority` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `paymentid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `paymentmode` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `pnid_index` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `loanstatusprevious` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `loanstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payments` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `orid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `clienttype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `orstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_paymentsor` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` MODIFY COLUMN `interestRecompute` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` MODIFY COLUMN `policyid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempdetails` MODIFY COLUMN `autodebit_savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_payment_tempor` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_pncorrection` MODIFY COLUMN `correctionid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_pncorrection` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_pncorrection` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_pncorrection` MODIFY COLUMN `correction_type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_pncorrection` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_pncorrection` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_principalsize` MODIFY COLUMN `range` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provision` MODIFY COLUMN `assessment` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provision` MODIFY COLUMN `security` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provision` MODIFY COLUMN `lower` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provision` MODIFY COLUMN `upper` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provision` MODIFY COLUMN `aclClass` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provisionqualitative` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provisionqualitative` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_provisionqualitative` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `releasedeleteid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `branchid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `orid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedelete` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedeletetemp` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedeletetemp` MODIFY COLUMN `branchid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedeletetemp` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedeletetemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_releasedeletetemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedelete` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedelete` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedelete` MODIFY COLUMN `ornumber` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedelete` MODIFY COLUMN `userid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedelete` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedeletetemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedeletetemp` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedeletetemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedeletetemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedeletetemp2` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_remittancedeletetemp2` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_scrate` MODIFY COLUMN `loanproductid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `lending_termunits` MODIFY COLUMN `termid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_bug` MODIFY COLUMN `reportid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_bug` MODIFY COLUMN `programmerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_bug` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_bug` MODIFY COLUMN `status` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_passwordresetlog` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_passwordresetlog` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userright` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userright` MODIFY COLUMN `userrightid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userright` MODIFY COLUMN `level1access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userright` MODIFY COLUMN `level2access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userright` MODIFY COLUMN `level3access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userright` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightdefault` MODIFY COLUMN `positionid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightdefault` MODIFY COLUMN `userrightid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightdefault` MODIFY COLUMN `level1access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightdefault` MODIFY COLUMN `level2access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightdefault` MODIFY COLUMN `level3access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightguide` MODIFY COLUMN `userrightid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightguide` MODIFY COLUMN `parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightguide` MODIFY COLUMN `level1access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightguide` MODIFY COLUMN `level2access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mis_userrightguide` MODIFY COLUMN `level3access` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_account_verification` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_account_verification` MODIFY COLUMN `processid` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_account_verification` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_account_verification` MODIFY COLUMN `verifierid` mediumint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `mobile_account_verification` MODIFY COLUMN `approverid` mediumint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `mobile_account_verification` MODIFY COLUMN `branchid` smallint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `mobile_client_users` MODIFY COLUMN `idmobile_client_users` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_client_users` MODIFY COLUMN `client1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_client_users` MODIFY COLUMN `questionid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_comworks_eload` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_comworks_eload` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_comworks_eload` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_security_questions` MODIFY COLUMN `questionid` smallint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_transfer_details` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `mobile_transfer_details` MODIFY COLUMN `sender_clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `perpetual_paymentdetails` MODIFY COLUMN `paymentid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `perpetual_paymentdetails` MODIFY COLUMN `policyid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `perpetual_paymentdetails` MODIFY COLUMN `amortnumber` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_banks` MODIFY COLUMN `bankid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_fees` MODIFY COLUMN `feeid` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_gateways` MODIFY COLUMN `id` smallint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_gateways` MODIFY COLUMN `implementation` datetime DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_inwardtransactions` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_inwardtransactions` MODIFY COLUMN `NbOfTxs` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_inwardtransactions` MODIFY COLUMN `CdtrAcct_Id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_inwardtransactions` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_inwardtransactions` MODIFY COLUMN `codeupdate` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_inwardtransactions` MODIFY COLUMN `savingstransactionid` bigint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `pesonet_outwardtemp` MODIFY COLUMN `tempid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtemp` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtemp` MODIFY COLUMN `makerid` mediumint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `pesonet_outwardtemp` MODIFY COLUMN `approverid` mediumint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `pesonet_outwardtemp` MODIFY COLUMN `branchid` smallint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `transid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `savingsid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `apiGateway_referenceId` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `update_apiGateway_referenceId` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `pesonet_outwardtransactions` MODIFY COLUMN `creditback_savingstransactionid` bigint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `rm_category` MODIFY COLUMN `categoryid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_category` MODIFY COLUMN `parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `concernid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `branchid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `concern_type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `concern_channel` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `escalatorid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `concern_status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_concerns` MODIFY COLUMN `conductid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_diary` MODIFY COLUMN `diaryid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_diary` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_diary` MODIFY COLUMN `concern` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_diary` MODIFY COLUMN `concernid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_diary` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `eventid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `categoryid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `recurrence` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `recoverability` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `reporterid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `endorserid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `rm_event` MODIFY COLUMN `verifierid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_details` MODIFY COLUMN `ropaid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_details` MODIFY COLUMN `collateralid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_details` MODIFY COLUMN `consolidated` int NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_loanbalancetemp` MODIFY COLUMN `tempid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_loanbalancetemp` MODIFY COLUMN `pnid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_loanbalancetemp` MODIFY COLUMN `previousloanstatus` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_loanbalancetemp` MODIFY COLUMN `groupid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_salespaymentdetails` MODIFY COLUMN `orid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `ropa_salespaymentdetails` MODIFY COLUMN `ropaid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `corpclientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `client1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `client2id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `client3id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `client4id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `groupid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `productid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `productidOrig` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `accountstatusprev` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `accountstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `linepassbook` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `printedpassbook` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `lineledger` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `printedledger` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accounts` MODIFY COLUMN `solicitorid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountsautodebit` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountsautodebit` MODIFY COLUMN `savingsid_autodebit` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `tempid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `corpclientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `client1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `client2id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `client3id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `client4id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `productid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `savingscategory` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `aggregatorid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `renewaloption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `accountlinkid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `ssaterm` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `ssaterm_orig` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `autodebitsavingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_accountstemp` MODIFY COLUMN `solicitorid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_certificate_letter` MODIFY COLUMN `savingscertificateid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_changes` MODIFY COLUMN `change_id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_changes` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checkdeptemp` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checkdeptemp` MODIFY COLUMN `checktype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checkdeptemp` MODIFY COLUMN `clearingdays` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksforceclear` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksforceclear` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksforceclear` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `savingstransactionid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `transaction` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `checktype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `clearingdays` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `daystoclear` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `returned` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_checksonfloat` MODIFY COLUMN `forceclearmakerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_clearingdays` MODIFY COLUMN `id` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_clearingdays` MODIFY COLUMN `clearingdays` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_dormant_letter` MODIFY COLUMN `savingsproductid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrect` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrect` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrectlink` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrectlink` MODIFY COLUMN `ecsavingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrecttemp` MODIFY COLUMN `tempid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrecttemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrecttemp` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrecttemp` MODIFY COLUMN `transactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrecttemp` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_errorcorrecttemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_interestrates` MODIFY COLUMN `productid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_memoglcodes` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_memoglcodes` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `productid` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `savingsType` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `ssaallownoncash` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `isTD` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `tdDSTexpenseGlcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `tdDSTpayableGlcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `daysinayear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `interestcrediting` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `interestcreditingbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `closeonzerobalance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `daysinactive` smallint DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `printvalidation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `printpassbook` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `balanceminchargeglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `chargegraceperiod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `balanceminchargeglcode2` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `chargegraceperiod2` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `closeaccountfeeglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `closeaccountfeeglcode2` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `ieglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `ismicro` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `smsLanguage` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `smsFreeADB` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `sms_showbalance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dormantglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dormancyP` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dormancychargeglcodeP` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dormancyNP` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dormancychargeglcodeNP` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dormantdebitoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `requireautodebitaccount` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `bookletcostglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `clearingchargeglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `accountname_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `accountname_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `savingsid_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `savingsid_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `barcode_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `barcode_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `branchname_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `branchname_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `productname_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `productname_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `cpno_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `cpno_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `balFwd_x` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `balFwd_y` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `reference_maxchar` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `y_topstart` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `totallines` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `skiplinestart` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `skiplineend` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `transchar` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `balancechar` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_date` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_maturity` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_debit` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_credit` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_balance1` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_balance2` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_transcode` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `x_user` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `deposit1_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `deposit1_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `deposit2_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `deposit2_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `withdrawal_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `withdrawal_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `chkencash_x` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `chkencash_y` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `cm_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `cm_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dm_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `dm_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `rc_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `rc_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `bc_x` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `bc_y` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `erc_x` smallint DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `savings_products` MODIFY COLUMN `erc_y` smallint DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `savings_productstouse` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_productstouse` MODIFY COLUMN `productid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaaggregator` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaaggregator` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaaggregatorhistory` MODIFY COLUMN `historyid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaaggregatorhistory` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaaggregatorhistory` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacement` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacement` MODIFY COLUMN `aggregatorid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacement` MODIFY COLUMN `renewaloption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacement` MODIFY COLUMN `accountlinkid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `placementid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `interestSavingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `renewaloption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `ssaterm` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementdetails` MODIFY COLUMN `ssaterm_orig` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementhistory` MODIFY COLUMN `historyid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementhistory` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementhistory` MODIFY COLUMN `renewaloption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementhistory` MODIFY COLUMN `accountlinkid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssaplacementhistory` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate1` MODIFY COLUMN `termid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate1` MODIFY COLUMN `productid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate1` MODIFY COLUMN `lower` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate1` MODIFY COLUMN `upper` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate2` MODIFY COLUMN `rateid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate2` MODIFY COLUMN `productid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate2` MODIFY COLUMN `indexid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssarate2` MODIFY COLUMN `termid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssa_recompute` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssa_recompute` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssa_recompute` MODIFY COLUMN `method` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssa_recompute` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_ssa_recompute` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactioncodes` MODIFY COLUMN `transaction` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `savingstransactionid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `branchidTrans` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `savingsid2` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `productid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `transaction` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `checktype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `errorcorrected` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `accountstatusprev` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `accountstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transactions_wtax` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapproval` MODIFY COLUMN `savingstransactionid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapproval` MODIFY COLUMN `approvalType` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapproval` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `tempid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `approvalType` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `transaction` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `checktype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `ssaterm_orig` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_transapprovaltemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_type` MODIFY COLUMN `productid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_type` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `upload_id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `transaction` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `transcount` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `savings_uploads` MODIFY COLUMN `approverid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_amortdetails` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_amortdetails` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discount` MODIFY COLUMN `discountid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discount` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discount` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discount` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discount` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discountamortization` MODIFY COLUMN `amortnumber` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_discountamortization` MODIFY COLUMN `scrid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `ropaid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `spouseid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `settingid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `termunit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `term` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `downpaymenttype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `downpaymentrate` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `interestcomputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `interestcomputationbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `proceedstype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `creditorid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `workersemployed` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `industryid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loanpurposeid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `securityid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `assetsizeid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `clientgroupid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `restructuredtag` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `restructuredscrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `restructuredCount` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `autodebitAmort` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `amort2destination` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loancycle` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loanofficerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `solicitortype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `solicitorid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loanstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loanstatusstatic` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `loanstatusUpdate` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetails` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `scrid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `clientid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `ropaid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `settingid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `termunit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `term` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `termApplied` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `termDaysFixed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `amortdayoption1` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `amortdayoption2` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `downpaymenttype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `downpaymentrate` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `interestcomputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `interestcomputationbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `diminishingequalprincipal` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `principalInterval` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `principalIntervalAdjustment` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `partialInt` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `partialSC` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `proceedstype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `creditorid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `workersemployed` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `industryid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `loanpurposeid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `securityid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `assetsizeid` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `clientgroupid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `restructuredtag` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `restructuredscrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `restructuredCount` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `autodebitAmort` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `loanstatusstatic` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `loancycle` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `loanofficerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `companyrepid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `solicitortype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `solicitorid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `tellerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `isapproved` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `approverid2` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `interestdiscounted` decimal(10,2) DEFAULT (0);--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `servicechargediscounted` decimal(10,2) DEFAULT (0);--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `insurance` decimal(10,2) DEFAULT (0);--> statement-breakpoint
ALTER TABLE `scr_loandetailstemp` MODIFY COLUMN `savingsdiscounted` decimal(10,2) DEFAULT (0);--> statement-breakpoint
ALTER TABLE `scr_misposting` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_misposting` MODIFY COLUMN `oridold` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_misposting` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_misposting` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_misposting` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_mispostingtemp` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_mispostingtemp` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_mispostingtemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_mispostingtemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentdetails` MODIFY COLUMN `paymentid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentdetails` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentdetails` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `paymentid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `paymentmode` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `postedbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `scrid_index` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `loanstatusprevious` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `loanstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_payments` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `orid` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `branchid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `clienttype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `orstatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `type` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `tellerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_paymentsor` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provision` MODIFY COLUMN `assessment` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provision` MODIFY COLUMN `security` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provision` MODIFY COLUMN `lower` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provision` MODIFY COLUMN `upper` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provision` MODIFY COLUMN `aclClass` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provisionqualitative` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provisionqualitative` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_provisionqualitative` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `releasedeleteid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `branchid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `clientid` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_releasedelete` MODIFY COLUMN `status` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedelete` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedelete` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedelete` MODIFY COLUMN `ornumber` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedelete` MODIFY COLUMN `userid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedelete` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedeletetemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedeletetemp` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedeletetemp` MODIFY COLUMN `makerid` mediumint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `scr_remittancedeletetemp` MODIFY COLUMN `approverid` mediumint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `scr_remittancedeletetemp2` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_remittancedeletetemp2` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returncheck` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returncheck` MODIFY COLUMN `oridold` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returncheck` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returncheck` MODIFY COLUMN `makerid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returncheck` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returnchecktemp` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returnchecktemp` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returnchecktemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_returnchecktemp` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `settingid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `usepnform` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `downpaymenttype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `downpaymentrateflexibility` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `loanamountmaximum` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `loancountmaximum` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `weekadjuster` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `requirecoborrower` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `requiredcomakers` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `requireworkersemployed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `borrowertypedefault` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `clientgroupdefault` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `requiresecurity` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `defaultsecurity` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `collectionlistdisplay` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `isEmployeeLoan` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `termunitflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `termDaysFixed` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `termDaysFixedFlex` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `termdefault` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `termmaximum` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `discountamort` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scrdiscountglcode` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scrinterestincomeglcode` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `interestcomputation` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `interestcomputationflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `interestcomputationbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `interestcomputationbasisflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `diminishingequalprincipal` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `balloonoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `computepastdueinterest` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `daysinayear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `interestdiscountedglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `interestamortizedglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `firstamortint` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `amortrounding` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `autodebitAmort` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scdiscounteduse` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scdiscountedMaxDays2Prorate` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scbracketoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scdpyear` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scrateoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scdiscountedglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scamortuse` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scamortoption` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scamortflexibility` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `scamortglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `penaltyAmortGracePeriod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `penaltyAmortBasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `penaltyDueGracePeriod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `penaltyDueInclude` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `penaltyglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `pdinterestglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `proceedstypedefault` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `amort1option` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `amort1glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `amort2option` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `amort2glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `amort2destination` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `defaultcostcenter` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `currentglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `pastdueglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `nonperfglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `inlitigationglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `provisionglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod1` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod2` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod3` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod4` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod5` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod6` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod7` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `cureperiod8` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `smsLanguage` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `smsFreeAmt` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `smsLoanBalance` int NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `smsUnpaidAmorts` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_settings` MODIFY COLUMN `approvalRequired` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitor` MODIFY COLUMN `orid` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `scrid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `interestRecompute` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `policyid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `scr_tempremitpmt` MODIFY COLUMN `autodebit_savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_balances` MODIFY COLUMN `slbalanceid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_balances` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `bankid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `parentbankid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `accounttype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `branchuser` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `currency` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `banktype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `interestglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bank` MODIFY COLUMN `compliance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bankparent` MODIFY COLUMN `parentbankid` mediumint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_bankparent` MODIFY COLUMN `banktype` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_banktransactions` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_banktransactions` MODIFY COLUMN `bankid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_banktransactions` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_banktransactions` MODIFY COLUMN `transaction` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_banktransactions` MODIFY COLUMN `memoglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_banktransactions` MODIFY COLUMN `userid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_cashadvance` MODIFY COLUMN `id` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_cashadvance` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_cashadvance` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_cashadvance` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledeliverypartial` MODIFY COLUMN `orderid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledeliverypartial` MODIFY COLUMN `consumableid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledeliverypartial` MODIFY COLUMN `deliveryQty` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledispatch` MODIFY COLUMN `dispatchid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledispatch` MODIFY COLUMN `branchidOrigin` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledispatch` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledispatch` MODIFY COLUMN `deliveredbyid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledispatch` MODIFY COLUMN `consumableid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabledispatch` MODIFY COLUMN `dispatchqty` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `consumableid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `level` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `parent` int NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `childcount` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `reorderlevel` int NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `reorderqty` int NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `consumableunit` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableitems` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableorders` MODIFY COLUMN `orderid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableorders` MODIFY COLUMN `branchid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableorders` MODIFY COLUMN `orderStatus` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableorders` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableorders` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableordersdetails` MODIFY COLUMN `orderdetailid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableordersdetails` MODIFY COLUMN `orderid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableordersdetails` MODIFY COLUMN `consumableId` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumableordersdetails` MODIFY COLUMN `orderqty` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `consumabletransid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `consumableid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `transaction` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `itemIn` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `itemOut` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `itemBalance` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_consumabletrans` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditor` MODIFY COLUMN `creditorid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditor` MODIFY COLUMN `bankid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditor` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditor` MODIFY COLUMN `interestglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditor` MODIFY COLUMN `scglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditoramortizations` MODIFY COLUMN `drawdownid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditoramortizations` MODIFY COLUMN `amortnumber` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditoramortizations` MODIFY COLUMN `isremitted` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditoramortizations` MODIFY COLUMN `creditortransid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditordrawdowns` MODIFY COLUMN `drawdownid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditordrawdowns` MODIFY COLUMN `creditorid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditordrawdowns` MODIFY COLUMN `transid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditordrawdowns` MODIFY COLUMN `bankid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditordrawdowns` MODIFY COLUMN `term` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditordrawdowns` MODIFY COLUMN `termunit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditorsmswarningrecipient` MODIFY COLUMN `employeeid` mediumint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditortransactions` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditortransactions` MODIFY COLUMN `banktransid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditortransactions` MODIFY COLUMN `creditorid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_creditortransactions` MODIFY COLUMN `userid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `ffeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `ffetypeid` smallint NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `ffeuserid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `method` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `life` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `lifeused` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `lifeunused` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedefectivetemp` MODIFY COLUMN `ffeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedefectivetemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedepreciation` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedepreciation` MODIFY COLUMN `ffeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedepreciation` MODIFY COLUMN `transtype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedepreciation` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffedepreciation` MODIFY COLUMN `lifeused` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `ffemovementid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `ffeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `previousbranchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `ffeuserid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovement` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovementtemp` MODIFY COLUMN `ffeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovementtemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovementtemp` MODIFY COLUMN `ffeuserid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovementtemp` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffemovementtemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetype` MODIFY COLUMN `ffetypeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetype` MODIFY COLUMN `life` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetype` MODIFY COLUMN `method` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetype` MODIFY COLUMN `category` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetypecategory` MODIFY COLUMN `category` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetypecategory` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetypecategory` MODIFY COLUMN `depreciationglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetypecategory` MODIFY COLUMN `accumulateddepreciationglcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffetypecategory` MODIFY COLUMN `is_itequipment` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe_inventory` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_ffe_inventory` MODIFY COLUMN `ffeid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_htm` MODIFY COLUMN `htm_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_htm` MODIFY COLUMN `issuer_id` tinyint unsigned DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `sl_htm` MODIFY COLUMN `security_type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_htm` MODIFY COLUMN `compliance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_receivable` MODIFY COLUMN `receivableid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_receivable` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_receivable` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_receivable` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_certificate` MODIFY COLUMN `certificateid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_certificate` MODIFY COLUMN `certificateTransaction` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_certificate` MODIFY COLUMN `shareholderid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_certificate` MODIFY COLUMN `certificateidCancelled` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_certificate` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_dividend` MODIFY COLUMN `dividendid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_dividend` MODIFY COLUMN `shareholderid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_dividend` MODIFY COLUMN `dividendType` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_dividend` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_shareholders` MODIFY COLUMN `shareholderid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_shareholders` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_shareholders` MODIFY COLUMN `shareType` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_subscription` MODIFY COLUMN `subscriptionid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_subscription` MODIFY COLUMN `subscribeTransaction` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_subscription` MODIFY COLUMN `shareholderid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sl_stock_subscription` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_inbox` MODIFY COLUMN `messageID` bigint unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_inbox` MODIFY COLUMN `sim` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_inbox` MODIFY COLUMN `replied` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_monitornumbers` MODIFY COLUMN `employeeid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outbox` MODIFY COLUMN `messageID` bigint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outbox` MODIFY COLUMN `deleteFlag` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outbox` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outbox` MODIFY COLUMN `chargeClient` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outboxhistory` MODIFY COLUMN `messageID` bigint AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outboxhistory` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outboxhistory` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_outboxhistory` MODIFY COLUMN `chargeClient` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_savings` MODIFY COLUMN `savingsid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_savings` MODIFY COLUMN `transaction` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_telco_prefix` MODIFY COLUMN `prefix` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `sms_telco_prefix` MODIFY COLUMN `gateway_id` int DEFAULT (NULL);--> statement-breakpoint
ALTER TABLE `system_dbbackup` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_errorcorrecttemp` MODIFY COLUMN `transactionid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_errorcorrecttemp` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_errorcorrecttemp` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expense` MODIFY COLUMN `expenseid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expense` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expense` MODIFY COLUMN `type` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expense` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expensedetails` MODIFY COLUMN `expenseid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expensedetails` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_expensedetails` MODIFY COLUMN `costcenterid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `telleringid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `normalbalance` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `protection` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `document1` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `document2` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `status` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `autojournal` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `validation_x` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_settings` MODIFY COLUMN `validation_y` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `transactionid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `telleringid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `glcode` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `approverid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `tellering_transactions` MODIFY COLUMN `errorcorrected` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_approval` MODIFY COLUMN `writeoffid` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_approval` MODIFY COLUMN `count` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_approval` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_approval` MODIFY COLUMN `approver2id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `writeoffid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `clientid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `loanproductid` int unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `loanclassid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `termunit` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `term` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `interestcomputationbasis` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `coborrowerid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `comaker1id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `comaker2id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `loancycle` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_data` MODIFY COLUMN `loanofficerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_tempapproval` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_tempapproval` MODIFY COLUMN `approver1id` mediumint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_tempdata` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_tempor` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_transactions` MODIFY COLUMN `transid` int unsigned AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_transactions` MODIFY COLUMN `transtype` tinyint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_transactions` MODIFY COLUMN `branchid` smallint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_transactions` MODIFY COLUMN `pnid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_transactions` MODIFY COLUMN `orid` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `writeoff_transactions` MODIFY COLUMN `makerid` mediumint unsigned NOT NULL;