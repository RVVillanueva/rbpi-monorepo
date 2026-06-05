import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, int, smallint, char, decimal, varchar, date, unique, foreignKey, timestamp, datetime, float, text, mediumtext, binary, time, longtext, double, mysqlView, mediumint, tinyint, bigint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const acctngBranchcostcenters = mysqlTable("acctng_branchcostcenters", {
	id: int().autoincrement().notNull(),
	branchid: smallint().notNull(),
	costcenterid: smallint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("costcenterid").on(table.costcenterid),
]);

export const acctngBudget = mysqlTable("acctng_budget", {
	budgetid: int().autoincrement().notNull(),
	glcode: int().notNull(),
	gltype: char({ length: 1 }).notNull(),
	costcenterid: smallint().notNull(),
	branchid: smallint().notNull(),
	// Warning: Can't parse year(4) from database
	// year(4)Type: year(4)("budgetYear").notNull(),
	budgetYear: smallint().notNull(),
	budget1: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget2: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget3: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget4: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget5: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget6: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget7: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget8: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget9: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget10: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget11: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	budget12: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("glcode").on(table.glcode),
	index("costcenterid").on(table.costcenterid),
	index("branchid").on(table.branchid),
	index("budgetYear").on(table.budgetYear),
]);

export const acctngCostCenter = mysqlTable("acctng_cost_center", {
	id: smallint().autoincrement().notNull(),
	name: varchar({ length: 100 }).notNull(),
	level: tinyint().notNull(),
	parent: smallint().notNull(),
	childcount: smallint().notNull(),
	categoryId: int("category_id").notNull(),
},
(table) => [
	index("category_id").on(table.categoryId),
]);

export const acctngDate = mysqlTable("acctng_date", {
	changeid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	currentAcctngdate: date("current_acctngdate", { mode: 'string' }).default('NULL'),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	proposedAcctngdate: date("proposed_acctngdate", { mode: 'string' }).default('NULL'),
	branchid: mediumint().default(0),
	makerid: mediumint().default(0),
	approverid: mediumint().default(0),
});

export const acctngFinancialratios = mysqlTable("acctng_financialratios", {
	finratio: char({ length: 50 }).notNull(),
	finratioName: varchar("finratio_name", { length: 100 }).notNull(),
	formula: varchar({ length: 100 }).notNull(),
	category: char({ length: 1 }).notNull(),
	numerator: varchar({ length: 2000 }).notNull(),
	denominator: varchar({ length: 2000 }).notNull(),
	isAnnualized: tinyint("is_annualized").notNull(),
	benchmark: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	benchmarkDate: date("benchmark_date", { mode: 'string' }).notNull(),
	viewSequence: tinyint("view_sequence").notNull(),
});

export const acctngGlaccounts = mysqlTable("acctng_glaccounts", {
	glCode: int("gl_code").notNull(),
	frpcode: char({ length: 30 }).notNull(),
	glName: char("gl_name", { length: 100 }).notNull(),
	glType: char("gl_type", { length: 1 }).notNull(),
	glLevel: tinyint("gl_level").notNull(),
	glParent: int("gl_parent").notNull(),
	glChildcount: smallint("gl_childcount").notNull(),
	userlevel: tinyint().notNull(),
},
(table) => [
	index("gl_type").on(table.glType),
	unique("gl_account_code").on(table.glCode),
]);

export const acctngJournaldetails = mysqlTable("acctng_journaldetails", {
	journalDetailsId: int("journal_details_id").autoincrement().notNull(),
	journalid: int().notNull().references(() => acctngJournals.journalid, { onDelete: "cascade", onUpdate: "restrict" } ),
	glCode: int("gl_code").notNull(),
	journalDetailsDebit: decimal("journal_details_debit", { precision: 20, scale: 2 }).default('NULL'),
	journalDetailsCredit: decimal("journal_details_credit", { precision: 20, scale: 2 }).default('NULL'),
	subsidiary: int().notNull(),
},
(table) => [
	index("gl_code").on(table.glCode),
	index("due_branch").on(table.subsidiary),
	index("journal_details_debit").on(table.journalDetailsDebit),
	index("journal_details_credit").on(table.journalDetailsCredit),
]);

export const acctngJournals = mysqlTable("acctng_journals", {
	journalid: int().autoincrement().notNull(),
	ibjournalid: int().notNull(),
	journalDescription: varchar("journal_description", { length: 500 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	journalDate: date("journal_date", { mode: 'string' }).notNull(),
	timestamp: timestamp({ mode: 'string' }).default('current_timestamp()').notNull(),
	journalBranch: smallint("journal_branch").notNull(),
	user: mediumint().notNull(),
},
(table) => [
	index("journal_id").on(table.ibjournalid),
	index("journal_branch").on(table.journalBranch),
	index("journal_date").on(table.journalDate),
	index("user").on(table.user),
]);

export const acctngJournalIbtracker = mysqlTable("acctng_journal_ibtracker", {
	ibJournalDetailsId: int("ib_journal_details_id").notNull().references(() => acctngJournaldetails.journalDetailsId, { onDelete: "cascade", onUpdate: "restrict" } ),
	journalDetailsId: int("journal_details_id").notNull(),
});

export const acctngJournalTrail = mysqlTable("acctng_journal_trail", {
	trailId: int("trail_id").autoincrement().notNull(),
	timestamp: datetime({ mode: 'string'}).default('current_timestamp()').notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	acctngDate: date("acctng_date", { mode: 'string' }).default('NULL'),
	process: varchar({ length: 7 }).notNull(),
	branchid: smallint().default(0.0),
	journalid: int().default(0.0),
	ibjournalid: int().notNull(),
	trailBefore: varchar("trail_before", { length: 10000 }).notNull(),
	trailAfter: varchar("trail_after", { length: 10000 }).notNull(),
	makerid: mediumint().default(0),
	approverid: mediumint().default(0),
},
(table) => [
	index("journalid").on(table.journalid),
	index("ibjournalid").on(table.ibjournalid),
	index("timestamp").on(table.timestamp),
	index("acctng_date").on(table.acctngDate),
]);

export const amlcTransaction = mysqlTable("amlc_transaction", {
	amlcId: int().autoincrement().notNull(),
	transType: tinyint().notNull(),
	dataType: tinyint().notNull(),
	referenceType: tinyint().notNull(),
	referenceId: varchar({ length: 30 }).notNull(),
	description: varchar({ length: 75 }).notNull(),
	transCode: char({ length: 12 }).notNull(),
	branchid: smallint().notNull(),
	amlcBranchid: char({ length: 11 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transDate: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	transAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	clientid1: bigint({ mode: "number" }).notNull(),
	clientid2: bigint({ mode: "number" }).notNull(),
	clientid3: bigint({ mode: "number" }).notNull(),
	clientid4: bigint({ mode: "number" }).notNull(),
	beneFlag: char({ length: 1 }).notNull(),
	beneLastname: varchar({ length: 50 }).notNull(),
	beneFirstname: varchar({ length: 50 }).notNull(),
	beneMiddlename: varchar({ length: 50 }).notNull(),
	beneAddress: varchar({ length: 100 }).notNull(),
	beneBarangayid: mediumint().notNull(),
	beneAccountNumber: varchar({ length: 25 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	beneBirthdate: date({ mode: 'string' }).notNull(),
	beneBirthPlace: varchar({ length: 50 }).notNull(),
	beneNationality: smallint().notNull(),
	beneIdType: varchar({ length: 5 }).notNull(),
	beneIdNumber: varchar({ length: 20 }).notNull(),
	beneTelephone: varchar({ length: 11 }).notNull(),
	beneBusinessNature: char({ length: 25 }).notNull(),
	makerid: smallint().notNull(),
	status: tinyint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("transType").on(table.transType),
	index("transDate").on(table.transDate),
	index("clientid1").on(table.clientid1),
	index("clientid2").on(table.clientid2),
	index("clientid3").on(table.clientid3),
	index("clientid4").on(table.clientid4),
]);

export const amlcTranscode = mysqlTable("amlc_transcode", {
	amlcCodeId: mediumint().autoincrement().notNull(),
	code: varchar({ length: 10 }).notNull(),
	description: varchar({ length: 150 }).notNull(),
	submissionType: tinyint().notNull(),
});

export const atmApiLogs = mysqlTable("atm_api_logs", {
	logid: int().autoincrement().notNull(),
	token: varchar({ length: 512 }).default('NULL'),
	code: varchar({ length: 10 }).default('NULL'),
	traceNumber: varchar("trace_number", { length: 45 }).default('NULL'),
	message: varchar({ length: 45 }).default('NULL'),
	accountNumber: varchar("account_number", { length: 45 }).default('NULL'),
	currentBalance: float("current_balance").default(0.0),
	availableBalance: float("available_balance").default(0.0),
	date: varchar({ length: 45 }).default('NULL'),
	time: varchar({ length: 45 }).default('NULL'),
	transactionFee: float("transaction_fee").default(0.0),
	origin: varchar({ length: 45 }).default('NULL'),
	amount: float().default(0.0),
	toAccountNumber: int("to_account_number").default(0),
	type: varchar({ length: 45 }).default('NULL'),
	dateCreated: timestamp("date_created", { mode: 'string' }).default('current_timestamp()').notNull(),
	sourceIp: varchar("source_ip", { length: 45 }).default('NULL'),
});

export const atmMobileLogs = mysqlTable("atm_mobile_logs", {
	logid: int().autoincrement().notNull(),
	token: varchar({ length: 512 }).default('NULL'),
	code: varchar({ length: 10 }).default('NULL'),
	traceNumber: varchar("trace_number", { length: 45 }).default('NULL'),
	message: varchar({ length: 45 }).default('NULL'),
	accountNumber: varchar("account_number", { length: 45 }).default('NULL'),
	currentBalance: float("current_balance").default(0.0),
	availableBalance: float("available_balance").default(0.0),
	date: varchar({ length: 45 }).default('NULL'),
	time: varchar({ length: 45 }).default('NULL'),
	transactionFee: float("transaction_fee").default(0.00),
	origin: varchar({ length: 45 }).default('NULL'),
	amount: float().default(0.00),
	toAccountNumber: int("to_account_number").default(0),
	type: varchar({ length: 45 }).default('NULL'),
	dateCreated: timestamp("date_created", { mode: 'string' }).default('current_timestamp()').notNull(),
	sourceIp: varchar("source_ip", { length: 45 }).default('NULL'),
});

export const auditDetails = mysqlTable("audit_details", {
	auditid: int().notNull(),
	detailsIndex: smallint().notNull(),
	policyrefid: int().notNull(),
	finding: text().notNull(),
	findingRisk: tinyint().notNull(),
	demerit: tinyint().notNull(),
	isRecurring: tinyint().notNull(),
	noResponse: tinyint().notNull(),
	response: text().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateTarget: date({ mode: 'string' }).notNull(),
	compliance: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateComplied: date({ mode: 'string' }).notNull(),
	comment: text().notNull(),
	detailStatus: tinyint().notNull(),
},
(table) => [
	index("auditid").on(table.auditid),
	index("detailsIndex").on(table.detailsIndex),
]);

export const auditPolicyref = mysqlTable("audit_policyref", {
	policyrefid: int().notNull(),
	policyrefname: char({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
});

export const auditProfile = mysqlTable("audit_profile", {
	auditid: int().autoincrement().notNull(),
	audittype: tinyint().notNull(),
	officetype: tinyint().notNull(),
	officeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateCutoff: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateFrom: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateTo: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateClose: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateExit: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateReply: date({ mode: 'string' }).notNull(),
	auditorid: mediumint().notNull(),
	managerid: mediumint().notNull(),
	manageraccess: tinyint().notNull(),
	auditrating: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	riskClassification: tinyint().notNull(),
	remarks: text().notNull(),
	auditstatus: tinyint().notNull(),
},
(table) => [
	index("officetype").on(table.officetype),
	index("officeid").on(table.officeid),
]);

export const checkingAutodebitaccount = mysqlTable("checking_autodebitaccount", {
	savingsid: bigint({ mode: "number" }).notNull().references(() => savingsAccounts.savingsid, { onDelete: "cascade", onUpdate: "restrict" } ),
	autodebitsavingsid: bigint({ mode: "number" }).notNull().references(() => savingsAccounts.savingsid, { onDelete: "cascade", onUpdate: "cascade" } ),
},
(table) => [
	index("autodebitsavingsid").on(table.autodebitsavingsid),
]);

export const checkingBookletdetails = mysqlTable("checking_bookletdetails", {
	checkbookletid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateRequest: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateIssued: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	conduitbankid: smallint().notNull(),
	checktype: tinyint().notNull(),
	charging: tinyint().notNull(),
	checknumberstart: bigint({ mode: "number" }).notNull(),
	checknumberend: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	savingstransactionid: bigint({ mode: "number" }).notNull(),
},
(table) => [
	index("checknumberstart").on(table.checknumberstart),
	index("checknumberend").on(table.checknumberend),
	index("bankid").on(table.conduitbankid),
	index("branchid").on(table.branchid),
]);

export const checkingChecksIssued = mysqlTable("checking_checks_issued", {
	checkIssuedId: bigint("check_issued_id", { mode: "number" }).autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateReceived: date("date_received", { mode: 'string' }).notNull(),
	source: tinyint().notNull(),
	referenceId: bigint("reference_id", { mode: "number" }).notNull(),
	checkNumber: varchar("check_number", { length: 20 }).notNull(),
},
(table) => [
	index("inward_channel").on(table.source),
	index("reference_id").on(table.referenceId),
	index("check_number").on(table.checkNumber),
]);

export const checkingConduitbank = mysqlTable("checking_conduitbank", {
	conduitbankid: smallint().autoincrement().notNull(),
	bankid: mediumint().notNull(),
	textfileSettings: varchar("textfile_settings", { length: 25000 }).notNull(),
	errorchecked: tinyint().notNull(),
	status: tinyint().notNull(),
});

export const checkingInward1 = mysqlTable("checking_inward1", {
	inwardid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	conduitbankid: mediumint().notNull(),
	itemCount: mediumint("item_count").notNull(),
	totalAmount: decimal("total_amount", { precision: 12, scale: 2, unsigned: true }).notNull(),
	textfileMd5: char("textfile_md5", { length: 32 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("textfile_md5").on(table.textfileMd5),
]);

export const checkingInward2 = mysqlTable("checking_inward2", {
	inwardid: int().notNull(),
	checknumber: bigint({ mode: "number" }).notNull(),
	amount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	checkstatus: smallint().notNull(),
	savingstransactionid: bigint({ mode: "number" }).notNull(),
},
(table) => [
	index("inwardid").on(table.inwardid),
	index("savingsid").on(table.savingsid),
	index("savingstransactionid").on(table.savingstransactionid),
]);

export const checkingInwardtemp1 = mysqlTable("checking_inwardtemp1", {
	tempid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	conduitbankid: smallint().notNull(),
	itemCount: mediumint("item_count").notNull(),
	totalAmount: decimal("total_amount", { precision: 12, scale: 2, unsigned: true }).notNull(),
	inwardChecked: tinyint().notNull(),
	textfileMd5: char("textfile_md5", { length: 32 }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("bankid").on(table.conduitbankid),
]);

export const checkingInwardtemp2 = mysqlTable("checking_inwardtemp2", {
	inwardDetailsId: int("inward_details_id").autoincrement().notNull(),
	tempid: int().notNull(),
	checknumber: char({ length: 10 }).notNull(),
	brstn: char({ length: 9 }).notNull(),
	amount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	amountToDebit: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	autoDetect: tinyint().notNull(),
	checkstatus: smallint().notNull(),
},
(table) => [
	index("tempid").on(table.tempid),
]);

export const checkingLoanpayments = mysqlTable("checking_loanpayments", {
	orid: bigint({ mode: "number" }).autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datePaid: date("date_paid", { mode: 'string' }).notNull(),
	checkNumber: varchar("check_number", { length: 20 }).notNull(),
	status: tinyint().notNull(),
},
(table) => [
	index("date_received").on(table.datePaid),
	index("check_number").on(table.checkNumber),
]);

export const checkingOutward = mysqlTable("checking_outward", {
	outwardId: int("outward_id").autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	conduitbankid: tinyint().notNull(),
	itemCount: mediumint("item_count").notNull(),
	totalAmount: decimal("total_amount", { precision: 12, scale: 2, unsigned: true }).notNull(),
	uploadData: varchar("upload_data", { length: 50000 }).notNull(),
	textfileMd5: char("textfile_md5", { length: 32 }).notNull(),
	makerid: varchar({ length: 6 }).notNull(),
	approverid: varchar({ length: 6 }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("conduitbankid").on(table.conduitbankid),
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
	index("textfile_md5").on(table.textfileMd5),
]);

export const checkingRequest = mysqlTable("checking_request", {
	requestid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	conduitbankid: smallint().notNull(),
	checktype: tinyint().notNull(),
	checkcount: smallint().notNull(),
	checkissued: smallint().notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("bankid").on(table.conduitbankid),
]);

export const checkingSpo = mysqlTable("checking_spo", {
	spoid: int().autoincrement().notNull(),
	checknumber: int().notNull(),
	conduitbankid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	reason: varchar({ length: 100 }).notNull(),
	makerid: mediumint().notNull(),
	spostatus: tinyint().notNull(),
});

export const collateral = mysqlTable("collateral", {
	collateralid: int().autoincrement().notNull(),
	collateraltype: int().notNull(),
	lotClass1: char({ length: 100 }).notNull(),
	lotClass2: char({ length: 100 }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	registeredOwner: char({ length: 200 }).notNull(),
	collateralNumber: char({ length: 100 }).notNull(),
	lotNo: char({ length: 100 }).notNull(),
	landArea: char({ length: 100 }).notNull(),
	collateralLocation: varchar({ length: 100 }).notNull(),
	latitude: decimal({ precision: 10, scale: 7 }).notNull(),
	longitude: decimal({ precision: 10, scale: 7 }).notNull(),
	barangay: mediumint().notNull(),
	action: smallint().notNull(),
	collateralImage: varchar({ length: 100 }).notNull(),
	spaImage: varchar({ length: 100 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	map: int().notNull(),
	branchid: smallint().notNull(),
	plateNo: varchar({ length: 100 }).notNull(),
	chassisNo: varchar({ length: 100 }).notNull(),
	serialNo: varchar({ length: 100 }).notNull(),
	brand: varchar({ length: 100 }).notNull(),
	modelNo: varchar({ length: 100 }).notNull(),
	chattelType: int().notNull(),
	chattelClass: int().notNull(),
	used: int().notNull(),
	karat: decimal({ precision: 12, scale: 2 }).notNull(),
	carat: decimal({ precision: 12, scale: 2 }).notNull(),
	weight: decimal({ precision: 12, scale: 2 }).notNull(),
	weight2: decimal({ precision: 12, scale: 2 }).notNull(),
	description: varchar({ length: 250 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	insuranceDate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	taxpaymentDate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	renewalDate: date({ mode: 'string' }).notNull(),
	appraisalFrequency: int().notNull(),
	status: int().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const collateralAppraisal = mysqlTable("collateral_appraisal", {
	appraisalid: int().autoincrement().notNull(),
	collateralid: int().notNull(),
	employeeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	appraisalDate: date({ mode: 'string' }).notNull(),
	appraisalValue: decimal({ precision: 12, scale: 2 }).notNull(),
	improvements: decimal({ precision: 12, scale: 2 }).notNull(),
	improvementsReport: varchar({ length: 250 }).notNull(),
	pieces: int().notNull(),
	appraisalReport: varchar({ length: 250 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	nextAppraisal: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("collateralid").on(table.collateralid),
	index("collateralid_2").on(table.collateralid),
	index("employeeid").on(table.employeeid),
	index("employeeid_2").on(table.employeeid),
	index("appraisalDate").on(table.appraisalDate),
	index("appraisalDate_2").on(table.appraisalDate),
	index("nextAppraisal").on(table.nextAppraisal),
	index("nextAppraisal_2").on(table.nextAppraisal),
	index("collateralid_3").on(table.collateralid),
	index("employeeid_3").on(table.employeeid),
	index("appraisalDate_3").on(table.appraisalDate),
	index("nextAppraisal_3").on(table.nextAppraisal),
	index("collateralid_4").on(table.collateralid),
	index("employeeid_4").on(table.employeeid),
	index("appraisalDate_4").on(table.appraisalDate),
	index("nextAppraisal_4").on(table.nextAppraisal),
]);

export const collateralAppraisalImages = mysqlTable("collateral_appraisal_images", {
	imageid: int().autoincrement().notNull(),
	appraisalid: int().notNull(),
	imageName: char({ length: 100 }).notNull(),
	imageCaption: char({ length: 250 }).notNull(),
});

export const collateralMovements = mysqlTable("collateral_movements", {
	receiverid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	collateralNumber: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	transactionDetails: char({ length: 250 }).notNull(),
	action: int().notNull(),
	status: int().notNull(),
	isReceived: smallint().notNull(),
	receiver: varchar({ length: 100 }).notNull(),
	branchid: smallint().notNull(),
	previousbranchid: smallint().notNull(),
});

export const collateralPndetails = mysqlTable("collateral_pndetails", {
	clientid: bigint({ mode: "number" }).notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	collateralid: int().notNull(),
	groupid: int().notNull(),
	approved: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateapproved: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("pnid").on(table.pnid),
	index("collateralid").on(table.collateralid),
	index("clientid_2").on(table.clientid),
	index("pnid_2").on(table.pnid),
	index("collateralid_2").on(table.collateralid),
]);

export const coreApiUsers = mysqlTable("core_api_users", {
	apiuserid: int().autoincrement().notNull(),
	username: varchar({ length: 45 }).notNull(),
	userSalt: text("user_salt").notNull(),
	userKey: text("user_key").notNull(),
});

export const eloadTxnid = mysqlTable("eload_txnid", {
	transid: int().autoincrement().notNull(),
});

export const ffeMacaddress = mysqlTable("ffe_macaddress", {
	ffeid: mediumint().notNull(),
	macaddress: text().notNull(),
});

export const frpLoans = mysqlTable("frp_loans", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate: date({ mode: 'string' }).notNull(),
	loanproductid: int().notNull(),
	loanclassid: smallint().notNull(),
	industryid: tinyint().notNull(),
	securityid: mediumint().notNull(),
	loanpurposeid: mediumint().notNull(),
	termCat1: tinyint().notNull(),
	termCat2: tinyint().notNull(),
	nplBracket: varchar({ length: 1 }).notNull(),
	loanstatus: tinyint().notNull(),
	loanstatusprevious: tinyint().notNull(),
	loanamount: decimal({ precision: 16, scale: 2, unsigned: true }).notNull(),
	loanbalance: decimal({ precision: 16, scale: 2, unsigned: true }).notNull(),
	provision: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	discountBalance: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	holdout: decimal({ precision: 12, scale: 2 }).notNull(),
	openingBalance: decimal({ precision: 12, scale: 2 }).default('0.00').notNull(),
	reclassifiedToNpl: decimal({ precision: 12, scale: 2 }).notNull(),
	collection: decimal({ precision: 12, scale: 2 }).notNull(),
	performingStatus: decimal({ precision: 12, scale: 2 }).notNull(),
	writeoff: decimal({ precision: 12, scale: 2 }).notNull(),
	closingBalance: decimal({ precision: 12, scale: 2 }).default('0.00').notNull(),
},
(table) => [
	index("cutoffdate").on(table.cutoffdate),
	index("loanproductid").on(table.loanproductid),
	index("loanclassid").on(table.loanclassid),
	index("industryid").on(table.industryid),
	index("securityid").on(table.securityid),
]);

export const frpReports = mysqlTable("frp_reports", {
	id: smallint().autoincrement().notNull(),
	reportName: varchar("report_name", { length: 45 }).notNull(),
	reportData: mediumtext("report_data").default('NULL'),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate: date({ mode: 'string' }).default('NULL'),
	isAvailable: tinyint().default(0).notNull(),
	displayOrder: smallint("display_order").notNull(),
});

export const frpSavings = mysqlTable("frp_savings", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate: date({ mode: 'string' }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	savingscategory: tinyint().notNull(),
	currentbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	accountstatus: tinyint().notNull(),
	termDays: smallint().notNull(),
},
(table) => [
	index("cutoffdate").on(table.cutoffdate),
]);

export const generalActivities = mysqlTable("general_activities", {
	activityId: bigint("activity_id", { mode: "number" }).autoincrement().notNull(),
	makerid: int().notNull(),
	activityTime: datetime("activity_time", { mode: 'string'}).default('current_timestamp()').notNull(),
	mainModule: text("main_module").notNull(),
	subModule: text("sub_module").notNull(),
	activityProcess: text("activity_process").notNull(),
	activityDetails: text("activity_details").notNull(),
	subjectCategory: tinyint("subject_category").notNull(),
	subjectId: int("subject_id").notNull(),
},
(table) => [
	index("activity_time").on(table.activityTime),
	index("makerid").on(table.makerid),
	index("subject_category").on(table.subjectCategory),
	index("main_module").on(table.mainModule),
	index("sub_module").on(table.subModule),
]);

export const generalAddress = mysqlTable("general_address", {
	id: mediumint().autoincrement().notNull(),
	code: int().notNull(),
	name: varchar({ length: 55 }).notNull(),
	town: varchar({ length: 55 }).notNull(),
	province: varchar({ length: 55 }).notNull(),
	region: varchar({ length: 55 }).notNull(),
	addresscomplete: varchar({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	levelPsgc: char("level_psgc", { length: 1 }).notNull(),
	codeParent: int("code_parent").notNull(),
	zipcode: varchar({ length: 4 }).notNull(),
	isHighRisk: tinyint().default(0),
},
(table) => [
	index("addresscomplete").on(table.addresscomplete),
	unique("code").on(table.code),
]);

export const generalAddressOld = mysqlTable("general_address_old", {
	id: mediumint().autoincrement().notNull(),
	code: int().notNull(),
	name: varchar({ length: 55 }).notNull(),
	town: varchar({ length: 55 }).notNull(),
	province: varchar({ length: 55 }).notNull(),
	region: varchar({ length: 55 }).notNull(),
	addresscomplete: varchar({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	levelPsgc: char("level_psgc", { length: 1 }).notNull(),
	codeParent: int("code_parent").notNull(),
	zipcode: varchar({ length: 4 }).notNull(),
},
(table) => [
	index("addresscomplete").on(table.addresscomplete),
	unique("code").on(table.code),
]);

export const generalBranchcoverage = mysqlTable("general_branchcoverage", {
	branch: int().notNull(),
	town: mediumint().notNull(),
});

export const generalBranches = mysqlTable("general_branches", {
	id: smallint().notNull(),
	branchid2: char({ length: 8 }).notNull(),
	bspcode: char({ length: 5 }).notNull(),
	name: char({ length: 25 }).notNull(),
	shortname: char({ length: 10 }).notNull(),
	birBranchcode: char("bir_branchcode", { length: 10 }).notNull(),
	addressdetail: varchar({ length: 50 }).notNull(),
	addressbarangay: mediumint().notNull(),
	latitude: decimal({ precision: 10, scale: 7, unsigned: true }).notNull(),
	longitude: decimal({ precision: 10, scale: 7, unsigned: true }).notNull(),
	contactnumber: varchar({ length: 12 }).notNull(),
	level: tinyint().notNull(),
	parent: smallint().notNull(),
	interbranchParent: smallint("interbranch_parent").notNull(),
	childcount: tinyint().notNull(),
	branchhead: mediumint().notNull(),
	checker: mediumint().notNull(),
	cohlimit: decimal({ precision: 10, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	systemdate: date({ mode: 'string' }).notNull(),
	branchstatus: tinyint().notNull(),
	clearingAdjustment: tinyint("clearing_adjustment").notNull(),
	allowpostingonsaturdays: tinyint().notNull(),
	allowpostingonsundays: tinyint().notNull(),
	excludeddayposting: tinyint().default(0),
	categoryId: tinyint("category_id").notNull(),
	amlccode: char({ length: 11 }).notNull(),
	printorafterissuance: tinyint().notNull(),
	branchTin: char("branch_tin", { length: 15 }).notNull(),
},
(table) => [
	index("category_id").on(table.categoryId),
	index("name").on(table.name),
	index("level").on(table.level),
	index("parent").on(table.parent),
	index("interbranch_parent").on(table.interbranchParent),
]);

export const generalCheckcoordinate = mysqlTable("general_checkcoordinate", {
	checkid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	printer: char({ length: 15 }).notNull(),
	bank: char({ length: 25 }).notNull(),
	dateFormat: tinyint("date_format").notNull(),
	marginTop: decimal("margin_top", { precision: 3, scale: 1, unsigned: true }).notNull(),
	marginLeft: decimal("margin_left", { precision: 3, scale: 1, unsigned: true }).notNull(),
	checkdateX: decimal("checkdate_x", { precision: 4, scale: 1 }).notNull(),
	checkdateY: decimal("checkdate_y", { precision: 4, scale: 1 }).notNull(),
	payeeX: decimal("payee_x", { precision: 4, scale: 1 }).notNull(),
	payeeY: decimal("payee_y", { precision: 4, scale: 1 }).notNull(),
	wordingX: decimal("wording_x", { precision: 4, scale: 1 }).notNull(),
	wordingY: decimal("wording_y", { precision: 4, scale: 1 }).notNull(),
	figureX: decimal("figure_x", { precision: 4, scale: 1 }).notNull(),
	figureY: decimal("figure_y", { precision: 4, scale: 1 }).notNull(),
	purposeX: decimal("purpose_x", { precision: 4, scale: 1 }).notNull(),
	purposeY: decimal("purpose_y", { precision: 4, scale: 1 }).notNull(),
	crosscheckX: decimal("crosscheck_x", { precision: 4, scale: 1 }).notNull(),
	crosscheckY: decimal("crosscheck_y", { precision: 4, scale: 1 }).notNull(),
});

export const generalClientchange = mysqlTable("general_clientchange", {
	changeid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	branch: varchar({ length: 100 }).notNull(),
	firstname: varchar({ length: 100 }).notNull(),
	middlename: varchar({ length: 100 }).notNull(),
	lastname: varchar({ length: 100 }).notNull(),
	birthdate: varchar({ length: 25 }).notNull(),
	spouse: varchar({ length: 100 }).notNull(),
	cpnumber1: char({ length: 25 }).notNull(),
	cpnumber2: char({ length: 25 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const generalClientchangetemp = mysqlTable("general_clientchangetemp", {
	clientid: bigint({ mode: "number" }).notNull(),
	branchid: smallint().notNull(),
	branch: mediumint().notNull(),
	firstname: char({ length: 55 }).notNull(),
	middlename: char({ length: 55 }).notNull(),
	lastname: char({ length: 55 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthdate: date({ mode: 'string' }).notNull(),
	spouseid: bigint({ mode: "number" }).notNull(),
	cpnumber1: char({ length: 11 }).notNull(),
	cpnumber2: char({ length: 11 }).notNull(),
	onUpdateKycLevelTo4: tinyint().default(0).notNull(),
	makerid: mediumint().notNull(),
});

export const generalClients = mysqlTable("general_clients", {
	clientid: bigint({ mode: "number" }).autoincrement().notNull(),
	clientidPreviousCbs: varchar("clientid_previous_cbs", { length: 30 }).default('NULL'),
	clienttype: tinyint().notNull(),
	orgtype: tinyint().notNull(),
	firstname: char({ length: 50 }).notNull(),
	middlename: char({ length: 50 }).notNull(),
	lastname: char({ length: 125 }).notNull(),
	suffixname: varchar({ length: 5 }).notNull(),
	gender: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthdate: date({ mode: 'string' }).notNull(),
	birthplace: varchar({ length: 50 }).notNull(),
	civilstatus: tinyint().notNull(),
	height: decimal({ precision: 4, scale: 2 }).notNull(),
	weight: decimal({ precision: 4, scale: 2 }).notNull(),
	nationality: smallint().notNull(),
	cpnumber1: char({ length: 11 }).notNull(),
	cpnumber2: char({ length: 11 }).notNull(),
	homenumber: varchar({ length: 12 }).notNull(),
	businessnumber: varchar({ length: 12 }).notNull(),
	tin: varchar({ length: 15 }).notNull(),
	pagibig: varchar({ length: 15 }).notNull(),
	philhealth: varchar({ length: 15 }).notNull(),
	sss: varchar({ length: 15 }).notNull(),
	gsis: varchar({ length: 15 }).notNull(),
	id1Type: tinyint().notNull(),
	id1Number: varchar({ length: 30 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	id1Dateissued: date({ mode: 'string' }).default('NULL'),
	id1Placeissued: varchar({ length: 250 }).default('NULL'),
	id2Type: tinyint().notNull(),
	id2Number: varchar({ length: 30 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	id2Dateissued: date({ mode: 'string' }).default('NULL'),
	id2Placeissued: varchar({ length: 250 }).default('NULL'),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	id2Expiration: date({ mode: 'string' }).notNull(),
	addressdetails: varchar({ length: 50 }).notNull(),
	barangayid: mediumint().notNull(),
	addressdetails2: char({ length: 50 }).notNull(),
	barangayid2: mediumint().notNull(),
	emailaddress: char({ length: 50 }).notNull(),
	facebookacct: char({ length: 50 }).notNull(),
	contactperson: varchar({ length: 50 }).notNull(),
	contactnumber: char({ length: 11 }).notNull(),
	website: varchar({ length: 50 }).notNull(),
	rep1Clientid: bigint("rep1_clientid", { mode: "number" }).notNull(),
	rep2Clientid: bigint("rep2_clientid", { mode: "number" }).notNull(),
	fundsource: tinyint().notNull(),
	fundoccupation: tinyint().notNull(),
	fundname: char({ length: 50 }).notNull(),
	fundaddressdetails: char({ length: 50 }).notNull(),
	fundbarangayid: mediumint().notNull(),
	fundposition: char({ length: 20 }).notNull(),
	fundcontact: char({ length: 12 }).notNull(),
	fundyearstart: char({ length: 4 }).notNull(),
	fundgrossincome: int().notNull(),
	spouseid: int().notNull(),
	mmlastname: char({ length: 50 }).notNull(),
	mmfirstname: char({ length: 50 }).notNull(),
	mmmiddlename: char({ length: 50 }).notNull(),
	assetsizeid: mediumint().notNull(),
	centerid: int().notNull(),
	officeid: int().notNull(),
	branch: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datecreated: date({ mode: 'string' }).default('0000-00-00').notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateedited: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateidissued: date({ mode: 'string' }).notNull(),
	riskprofile: tinyint().notNull(),
	viptag: tinyint().notNull(),
	dosri: tinyint().notNull(),
	rpt: tinyint().notNull(),
	pep: tinyint().notNull(),
	smsEnrolled: tinyint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	clientUuid: varchar("client_uuid", { length: 100 }).default('uuid()'),
	fileCountSelfie: tinyint().default(0).notNull(),
	fileCountId: tinyint().default(0).notNull(),
	fileCountSignature: tinyint().default(0).notNull(),
	fileCountAttachment: tinyint().default(0).notNull(),
	fileCountRiskProfiling: tinyint().default(0).notNull(),
},
(table) => [
	index("barangayid").on(table.barangayid),
	index("centerid").on(table.centerid),
	index("officeid").on(table.officeid),
	index("firstname").on(table.firstname),
	index("lastname").on(table.lastname),
	index("middlename").on(table.middlename),
	index("birthdate").on(table.birthdate),
	index("spouseid").on(table.spouseid),
	index("clienttype").on(table.clienttype),
	index("dosri").on(table.dosri),
	index("cpnumber1").on(table.cpnumber1),
	index("smsEnrolled").on(table.smsEnrolled),
	index("clientid_previous_cbs").on(table.clientidPreviousCbs),
]);

export const generalClientsbeneficiary = mysqlTable("general_clientsbeneficiary", {
	clientid: bigint({ mode: "number" }).notNull(),
	beneficiaryid: bigint({ mode: "number" }).notNull(),
	relationship: tinyint().notNull(),
	ordernumber: tinyint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("beneficiaryid").on(table.beneficiaryid),
]);

export const generalClientsfieldsrequired = mysqlTable("general_clientsfieldsrequired", {
	variable: char({ length: 30 }).notNull(),
	label: char({ length: 50 }).notNull(),
	isrequired: tinyint().notNull(),
});

export const generalClientsmerge = mysqlTable("general_clientsmerge", {
	mergeid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	clientid1: bigint({ mode: "number" }).notNull(),
	clientname1: char({ length: 50 }).notNull(),
	clientid2: bigint({ mode: "number" }).notNull(),
	clientname2: char({ length: 50 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const generalClientsmergetemp = mysqlTable("general_clientsmergetemp", {
	mergetempid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	clientid1: bigint({ mode: "number" }).notNull(),
	clientid2: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const generalClientsrelatives = mysqlTable("general_clientsrelatives", {
	id: int().autoincrement().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	lastname: varchar({ length: 25 }).notNull(),
	firstname: varchar({ length: 25 }).notNull(),
	middlename: varchar({ length: 25 }).notNull(),
	relation: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthdate: date({ mode: 'string' }).notNull(),
	gender: tinyint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const generalClientsresignation = mysqlTable("general_clientsresignation", {
	resignationTransId: int().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	resignationid: mediumint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const generalClientssolicitor = mysqlTable("general_clientssolicitor", {
	pnid: bigint({ mode: "number" }).notNull(),
	solicitortype: tinyint().notNull(),
	solicitorid: bigint({ mode: "number" }).notNull(),
},
(table) => [
	index("solicitorid").on(table.solicitorid),
]);

export const generalClientsRiskprofiles = mysqlTable("general_clients_riskprofiles", {
	riskprofileId: int("riskprofile_id").autoincrement().notNull(),
	riskprofileTimestamp: datetime("riskprofile_timestamp", { mode: 'string'}).default('current_timestamp()').notNull(),
	clientid: bigint({ mode: "number" }).notNull().references(() => generalClients.clientid, { onDelete: "restrict", onUpdate: "cascade" } ),
	riskprofilemodelId: int("riskprofilemodel_id").notNull(),
	riskprofileDetails: varchar("riskprofile_details", { length: 5000 }).notNull(),
	riskprofileNarration: varchar("riskprofile_narration", { length: 500 }).notNull(),
	riskprofileCategory: varchar("riskprofile_category", { length: 7 }).notNull(),
	makerid: mediumint().notNull().references(() => generalEmployees.id, { onDelete: "restrict", onUpdate: "cascade" } ),
},
(table) => [
	index("makerid").on(table.makerid),
	index("general_clients_riskprofiles_ibfk_1").on(table.riskprofilemodelId),
	index("clientid").on(table.clientid),
]);

export const generalCommagencies = mysqlTable("general_commagencies", {
	id: int().autoincrement().notNull(),
	name: varchar({ length: 50 }).notNull(),
	shortname: varchar({ length: 50 }).notNull(),
},
(table) => [
	index("id").on(table.id),
]);

export const generalCommunications = mysqlTable("general_communications", {
	id: int().autoincrement().notNull(),
	filename: varchar({ length: 155 }).notNull(),
	type: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	agency: smallint().notNull(),
	description: varchar({ length: 255 }).notNull(),
});

export const generalCoordinatesetting = mysqlTable("general_coordinatesetting", {
	browser: tinyint().notNull(),
	widthadjust: decimal({ precision: 3, scale: 1 }).notNull(),
	heightadjust: decimal({ precision: 3, scale: 1 }).notNull(),
});

export const generalCriticalsettings = mysqlTable("general_criticalsettings", {
	institutionid: smallint().notNull(),
	institutionname: char({ length: 75 }).notNull(),
	institutioncode: char({ length: 8 }).notNull(),
	tin: varchar({ length: 15 }).notNull(),
	branchlimit: binary({ length: 16 }).notNull(),
	useloanclassification: tinyint().notNull(),
	corporatebranchid: smallint().notNull(),
	usesms: tinyint().notNull(),
	amlaCode: char({ length: 18 }).notNull(),
	cicCode: char({ length: 10 }).notNull(),
	cocreeCode: varchar({ length: 10 }).default('NULL'),
	payrollkey: char({ length: 100 }).notNull(),
	secretKey: char({ length: 100 }).notNull(),
	// Warning: Can't parse blob from database
	// blobType: blob("logo").notNull(),
	autorunRuntime: datetime("autorun_runtime", { mode: 'string'}).notNull(),
	pendingautorun: tinyint().notNull(),
	smsRuntime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	versiondate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	versiondateAcctng: date("versiondate_acctng", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	rundate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	rundate2: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	smsdate: date({ mode: 'string' }).notNull(),
	isAutodayend: tinyint("is_autodayend").notNull(),
	apiPassComworks: varchar("api_pass_comworks", { length: 50 }).notNull(),
	autodayendtime: time().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	purgeDate: date({ mode: 'string' }).notNull(),
});

export const generalEmployeepassword = mysqlTable("general_employeepassword", {
	passwordhistoryid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datechanged: date({ mode: 'string' }).notNull(),
	password: char({ length: 64 }).notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
]);

export const generalEmployees = mysqlTable("general_employees", {
	id: mediumint().autoincrement().notNull(),
	firstname: char({ length: 25 }).notNull(),
	middlename: char({ length: 25 }).notNull(),
	lastname: char({ length: 25 }).notNull(),
	suffixname: varchar({ length: 5 }).notNull(),
	nickname: char({ length: 25 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthdate: date({ mode: 'string' }).notNull(),
	birthplace: varchar({ length: 55 }).notNull(),
	nationality: smallint().notNull(),
	gender: tinyint().notNull(),
	civilstatus: tinyint().notNull(),
	contactnumber1: char({ length: 11 }).notNull(),
	contactnumber2: varchar({ length: 11 }).notNull(),
	contactDefault: tinyint().notNull(),
	address1: varchar({ length: 255 }).notNull(),
	barangayid: mediumint().notNull(),
	address2: varchar({ length: 255 }).notNull(),
	barangayid2: mediumint().notNull(),
	emergencycontactperson: char({ length: 55 }).notNull(),
	emergencycontactnumber: char({ length: 11 }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	savingsid2: bigint({ mode: "number" }).notNull(),
	sss: char({ length: 15 }).notNull(),
	philhealth: char({ length: 15 }).notNull(),
	pagibig: char({ length: 15 }).notNull(),
	tin: char({ length: 15 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datehired: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateregular: date({ mode: 'string' }).notNull(),
	npaid: int().notNull(),
	branchid: smallint().notNull(),
	employmentstatus: tinyint().notNull(),
	payrollstatus: tinyint().notNull(),
	rankid: smallint().notNull(),
	positionid: tinyint().notNull(),
	payrollAcct: char({ length: 75 }).notNull(),
	payrollfrequency: tinyint().notNull(),
	workdaysperyear: smallint().notNull(),
	wagebasis: tinyint().notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	username: char({ length: 50 }).notNull(),
	randomkey: char({ length: 32 }).notNull(),
	password: char({ length: 64 }).notNull(),
	attempts: smallint().notNull(),
	userbranchid: smallint().notNull(),
	isactive: tinyint().notNull(),
	blockduetoleave: tinyint().notNull(),
	passworddefault: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	passwordchangedate: date({ mode: 'string' }).notNull(),
	activitylog: datetime({ mode: 'string'}).notNull(),
	vlbalance: decimal({ precision: 5, scale: 2 }).notNull(),
	slbalance: decimal({ precision: 5, scale: 2 }).notNull(),
	attendanceFlexitime: tinyint("attendance_flexitime").notNull(),
	attendanceReporttime: time("attendance_reporttime").notNull(),
	generatedid: varchar({ length: 100 }).notNull(),
	fingerprint1: text().notNull(),
	fingerprint2: text().notNull(),
	fingerprint3: text().notNull(),
	// Warning: Can't parse blob from database
	// blobType: blob("image").notNull(),
	// Warning: Can't parse blob from database
	// blobType: blob("imagesmall").notNull(),
},
(table) => [
	index("firstname").on(table.firstname),
	index("middlename").on(table.middlename),
	index("lastname").on(table.lastname),
	index("barangayid").on(table.barangayid),
	index("branchid").on(table.branchid),
	index("clientid").on(table.clientid),
]);

export const generalForumcomments = mysqlTable("general_forumcomments", {
	commentid: int().autoincrement().notNull(),
	threadid: int().notNull(),
	comment: varchar({ length: 700 }).notNull(),
	makerid: mediumint().notNull(),
	timestamp: timestamp({ mode: 'string' }).default('current_timestamp()').notNull(),
});

export const generalForumthreads = mysqlTable("general_forumthreads", {
	threadid: int().autoincrement().notNull(),
	thread: varchar({ length: 700 }).notNull(),
	makerid: mediumint().notNull(),
	audienceid: mediumint().notNull(),
	timestamp: timestamp({ mode: 'string' }).default('current_timestamp()').notNull(),
});

export const generalHolidays = mysqlTable("general_holidays", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).default('0000-00-00').notNull(),
	year: char({ length: 4 }).notNull(),
	holidayname: char({ length: 50 }).notNull(),
	type: tinyint().notNull(),
});

export const generalHolidaysfixed = mysqlTable("general_holidaysfixed", {
	date: char({ length: 5 }).notNull(),
	holidayname: char({ length: 50 }).notNull(),
});

export const generalIcon = mysqlTable("general_icon", {
	name: char({ length: 25 }).notNull(),
	// Warning: Can't parse blob from database
	// blobType: blob("image").notNull(),
});

export const generalIpmonitor = mysqlTable("general_ipmonitor", {
	ipid: int().autoincrement().notNull(),
	ipaddress: char({ length: 15 }).notNull(),
	location: char({ length: 100 }).notNull(),
	isCritical: tinyint().notNull(),
	status: tinyint().notNull(),
	lastStatus: datetime({ mode: 'string'}).notNull(),
});

export const generalLogs = mysqlTable("general_logs", {
	id: int().autoincrement().notNull(),
	user: mediumint().notNull(),
	time: datetime({ mode: 'string'}).notNull(),
	log: varchar({ length: 255 }).notNull(),
});

export const generalMessages = mysqlTable("general_messages", {
	id: int().autoincrement().notNull(),
	postedby: mediumint().notNull(),
	subject: char({ length: 50 }).notNull(),
	message: varchar({ length: 2000 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateposted: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datebeg: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateend: date({ mode: 'string' }).notNull(),
});

export const generalMonthend = mysqlTable("general_monthend", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transactiondate: date({ mode: 'string' }).notNull(),
	transactiontime: datetime({ mode: 'string'}).notNull(),
	approver1: mediumint().notNull(),
	approver2: mediumint().notNull(),
},
(table) => [
	index("transactiontime").on(table.transactiontime),
]);

export const generalNationality = mysqlTable("general_nationality", {
	id: int().autoincrement().notNull(),
	nationalityCode: int("nationality_code").notNull(),
	nationalityName: varchar("nationality_name", { length: 150 }).notNull(),
},
(table) => [
	index("nationality_code").on(table.nationalityCode),
]);

export const generalRelations = mysqlTable("general_relations", {
	relationid: int().autoincrement().notNull(),
	relationname: char({ length: 30 }).notNull(),
	categoryid: tinyint().notNull(),
});

export const generalRiskprofile = mysqlTable("general_riskprofile", {
	riskprofilemodelId: int("riskprofilemodel_id").autoincrement().notNull(),
	riskprofilemodelDetails: varchar("riskprofilemodel_details", { length: 12000 }).notNull(),
});

export const generalSettings = mysqlTable("general_settings", {
	name: char({ length: 40 }).notNull(),
	value: char({ length: 100 }).notNull(),
	description: char({ length: 175 }).notNull(),
	category: char({ length: 25 }).notNull(),
	type: tinyint().notNull(),
},
(table) => [
	index("category").on(table.category),
]);

export const generalSettingsidentification = mysqlTable("general_settingsidentification", {
	id: mediumint().autoincrement().notNull(),
	name: varchar({ length: 100 }).notNull(),
	idCbs: mediumint("id_cbs").notNull(),
	idCic: mediumint("id_cic").notNull(),
	isCicIdentification: tinyint("is_cic_identification").default(0).notNull(),
},
(table) => [
	index("id_cbs").on(table.idCbs),
]);

export const generalSettingslog = mysqlTable("general_settingslog", {
	logid: int().autoincrement().notNull(),
	timestamp: timestamp({ mode: 'string' }).default('current_timestamp()').notNull(),
	category: char({ length: 25 }).notNull(),
	name: char({ length: 40 }).notNull(),
	valueOld: char("value_old", { length: 50 }).notNull(),
	valueNew: char("value_new", { length: 50 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("name").on(table.name),
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
]);

export const generalSystemdate = mysqlTable("general_systemdate", {
	systemdateid: int().autoincrement().notNull(),
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateclosed: date({ mode: 'string' }).notNull(),
	datetimeclosed: datetime({ mode: 'string'}).notNull(),
	loansapproverid: mediumint().notNull(),
	savingsapproverid: mediumint().notNull(),
	managerapproverid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("dateclosed").on(table.dateclosed),
	index("managerapproverid").on(table.managerapproverid),
]);

export const generalSystemdateTemp = mysqlTable("general_systemdate_temp", {
	tempid: int().autoincrement().notNull(),
	branchid: smallint().notNull().references(() => generalBranches.id, { onDelete: "restrict", onUpdate: "cascade" } ),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateclosed: date({ mode: 'string' }).notNull(),
	datetimeclosed: datetime({ mode: 'string'}).notNull(),
	balanceCoci: decimal("balance_coci", { precision: 12, scale: 2, unsigned: true }).notNull(),
	balanceCoh: decimal("balance_coh", { precision: 12, scale: 2, unsigned: true }).notNull(),
	loansapproverid: mediumint().notNull(),
	savingsapproverid: mediumint().notNull(),
	managerapproverid: mediumint().notNull(),
});

export const generalUpdate = mysqlTable("general_update", {
	updateid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	versiondate: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	updates: varchar({ length: 500 }).notNull(),
});

export const hrAttendance = mysqlTable("hr_attendance", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	employeeid: mediumint().notNull(),
	in1: time().notNull(),
	out1: time().notNull(),
	in2: time().notNull(),
	out2: time().notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("date").on(table.date),
	index("employeeid_2").on(table.employeeid),
	index("date_2").on(table.date),
	index("employeeid_3").on(table.employeeid),
]);

export const hrCutoffpayroll = mysqlTable("hr_cutoffpayroll", {
	weeklycutoff: tinyint().notNull(),
	semimonthlycutoff: tinyint().notNull(),
	monthlycutoff: tinyint().notNull(),
});

export const hrDagroupsanctions = mysqlTable("hr_dagroupsanctions", {
	offenseGroup: tinyint().notNull(),
	sanction1: tinyint().notNull(),
	suspensionDays1: tinyint().notNull(),
	sanction2: tinyint().notNull(),
	suspensionDays2: tinyint().notNull(),
	sanction3: tinyint().notNull(),
	suspensionDays3: tinyint().notNull(),
	sanction4: tinyint().notNull(),
	suspensionDays4: tinyint().notNull(),
	sanction5: tinyint().notNull(),
	suspensionDays5: tinyint().notNull(),
	sanction6: tinyint().notNull(),
	suspensionDays6: tinyint().notNull(),
},
(table) => [
	unique("offenseGroup").on(table.offenseGroup),
]);

export const hrDaoffenses = mysqlTable("hr_daoffenses", {
	offenseid: int().autoincrement().notNull(),
	offensename: char({ length: 100 }).notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
	offensegroup: tinyint().notNull(),
},
(table) => [
	index("offensegroup").on(table.offensegroup),
]);

export const hrDas = mysqlTable("hr_das", {
	daid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	offenseid: smallint().notNull(),
	language: tinyint().notNull(),
	offenseDetail: varchar({ length: 3000 }).notNull(),
	instance: tinyint().notNull(),
	offenseReply: varchar({ length: 3000 }).notNull(),
	offenseDecision: varchar({ length: 3000 }).notNull(),
	sanction: smallint().notNull(),
	sanctionSuspensionDays: smallint().notNull(),
	makerid: mediumint().notNull(),
	hrApproverid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateIssue: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateReply: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateResolve: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateImplement: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("makerid").on(table.makerid),
	index("employeeid").on(table.employeeid),
	index("offenseid").on(table.offenseid),
	index("hrApproverid").on(table.hrApproverid),
]);

export const hrDeductionlist = mysqlTable("hr_deductionlist", {
	deductionid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	employeeid: mediumint().notNull(),
	deductiontypeid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	loandate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	startdate: date({ mode: 'string' }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interest: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	amortization: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	amorts: smallint().notNull(),
	paidamorts: decimal({ precision: 4, scale: 1, unsigned: true }).notNull(),
	balance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const hrDeductiontype = mysqlTable("hr_deductiontype", {
	deductiontypeid: int().notNull(),
	deductiontypename: char({ length: 50 }).notNull(),
	agency: tinyint().notNull(),
	amortfrequency: int().notNull(),
});

export const hrDepartments = mysqlTable("hr_departments", {
	departmentid: smallint().notNull(),
	departmentname: char({ length: 55 }).notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
});

export const hrEmployeesavings = mysqlTable("hr_employeesavings", {
	bracket: int().notNull(),
	deductionfix: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	deductionpercent: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
});

export const hrEvalAppraisal = mysqlTable("hr_eval_appraisal", {
	appraisalid: int().autoincrement().notNull(),
	// Warning: Can't parse year(4) from database
	// year(4)Type: year(4)("evaluationyear").notNull(),
	evaluationyear: smallint().notNull(),
	evaluationmonth: tinyint().notNull(),
	employeeid: mediumint().notNull(),
	branchid: smallint().notNull(),
	position: char({ length: 50 }).notNull(),
	department: char({ length: 50 }).notNull(),
	weightOplan: decimal("weight_oplan", { precision: 5, scale: 2, unsigned: true }).notNull(),
	weightCompetency: decimal("weight_competency", { precision: 5, scale: 2, unsigned: true }).notNull(),
	weightEssential: decimal("weight_essential", { precision: 5, scale: 2, unsigned: true }).notNull(),
	ratingOplan: decimal("rating_oplan", { precision: 5, scale: 2, unsigned: true }).notNull(),
	ratingCompetency: decimal("rating_competency", { precision: 5, scale: 2, unsigned: true }).notNull(),
	ratingEssential: decimal("rating_essential", { precision: 5, scale: 2, unsigned: true }).notNull(),
	appraisal: text().notNull(),
	ratingFinal: decimal("rating_final", { precision: 6, scale: 3, unsigned: true }).notNull(),
	ratingFinalComputed: decimal("rating_final_computed", { precision: 5, scale: 2 }).notNull(),
	commentAppraiser: varchar("comment_appraiser", { length: 1000 }).notNull(),
	commentAppraisee: varchar("comment_appraisee", { length: 1000 }).notNull(),
	commitment: varchar({ length: 1000 }).notNull(),
	appraiser: mediumint().notNull(),
	// Warning: Can't parse blob from database
	// blobType: blob("image").notNull(),
	timestamp: timestamp({ mode: 'string' }).default('current_timestamp()').notNull(),
},
(table) => [
	index("evaluationyear").on(table.evaluationyear),
	index("evaluationmonth").on(table.evaluationmonth),
	index("employeeid").on(table.employeeid),
	index("evaluationyear_2").on(table.evaluationyear),
	index("evaluationmonth_2").on(table.evaluationmonth),
	index("employeeid_2").on(table.employeeid),
]);

export const hrEvalCompetency = mysqlTable("hr_eval_competency", {
	competencyid: int().notNull(),
	competencyidNew: varchar("competencyid_new", { length: 4 }).notNull(),
	competencyname: char({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
});

export const hrEvalCompetencyposition = mysqlTable("hr_eval_competencyposition", {
	positionid: mediumint().notNull(),
	competencyid: mediumint().notNull(),
	competencyidNew: varchar("competencyid_new", { length: 4 }).notNull(),
	competencyweight: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("positionid").on(table.positionid),
	index("piid").on(table.competencyid),
]);

export const hrEvalCompetencytarget = mysqlTable("hr_eval_competencytarget", {
	competencytargetid: int().autoincrement().notNull(),
	// Warning: Can't parse year(4) from database
	// year(4)Type: year(4)("evaluationyear").notNull(),
	employeeid: mediumint().notNull(),
	categoryid: int().notNull(),
	competencyid: int().notNull(),
	competencyidNew: varchar("competencyid_new", { length: 4 }).notNull(),
	category: varchar({ length: 200 }).notNull(),
	competency: varchar({ length: 200 }).notNull(),
	competencyweight: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	p1: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p2: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p3: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p4: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p5: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p6: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p7: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p8: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p9: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p10: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p11: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p12: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	rating1: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating2: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating3: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating4: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating5: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating6: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating7: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating8: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating9: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating10: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating11: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rating12: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	unique("targetid").on(table.competencytargetid),
]);

export const hrEvalEssential = mysqlTable("hr_eval_essential", {
	essentialid: int().notNull(),
	essentialname: char({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
});

export const hrEvalGroupweight = mysqlTable("hr_eval_groupweight", {
	positionid: mediumint().notNull(),
	groupweightOplan: decimal("groupweight_oplan", { precision: 5, scale: 2, unsigned: true }).notNull(),
	groupweightCompetency: decimal("groupweight_competency", { precision: 5, scale: 2, unsigned: true }).notNull(),
	groupweightEssential: decimal("groupweight_essential", { precision: 5, scale: 2, unsigned: true }).notNull(),
});

export const hrEvalOplan = mysqlTable("hr_eval_oplan", {
	oplanid: mediumint().notNull(),
	oplanidNew: varchar("oplanid_new", { length: 6 }).notNull(),
	name: char({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
	unitid: smallint().notNull(),
});

export const hrEvalOplanposition = mysqlTable("hr_eval_oplanposition", {
	positionid: mediumint().notNull(),
	oplanid: mediumint().notNull(),
	piid: varchar({ length: 6 }).notNull(),
	oplanweight: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("positionid").on(table.positionid),
	index("piid").on(table.oplanid),
]);

export const hrEvalOplantarget = mysqlTable("hr_eval_oplantarget", {
	oplantargetid: int().autoincrement().notNull(),
	// Warning: Can't parse year(4) from database
	// year(4)Type: year(4)("evaluationyear").notNull(),
	evaluationyear: smallint().notNull(),
	employeeid: mediumint().notNull(),
	positionid: mediumint().notNull(),
	kraid: mediumint().notNull(),
	kra: char({ length: 200 }).notNull(),
	pi: char({ length: 200 }).notNull(),
	unitname: char({ length: 25 }).notNull(),
	vartype: tinyint().notNull(),
	oplanweight: decimal({ precision: 6, scale: 3, unsigned: true }).notNull(),
	oplanid: mediumint().notNull(),
	oplanidNew: varchar("oplanid_new", { length: 6 }).notNull(),
	t1: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t2: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t3: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	t4: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t5: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t6: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	t7: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t8: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t9: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	t10: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t11: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t12: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	p1: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p2: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p3: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p4: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p5: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p6: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p7: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p8: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p9: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p10: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p11: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p12: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
},
(table) => [
	index("evaluationyear").on(table.evaluationyear),
	index("employeeid").on(table.employeeid),
	index("positionid").on(table.positionid),
	index("employeeid_2").on(table.employeeid),
	index("positionid_2").on(table.positionid),
	unique("oplantargetid").on(table.oplantargetid),
]);

export const hrEvalOplanunit = mysqlTable("hr_eval_oplanunit", {
	unitid: smallint().notNull(),
	unitname: char({ length: 25 }).notNull(),
	vartype: tinyint().notNull(),
});

export const hrEvalPerformancematrix = mysqlTable("hr_eval_performancematrix", {
	id: int().notNull(),
	description: char({ length: 100 }).notNull(),
	lower: decimal({ precision: 4, scale: 2 }).notNull(),
	upper: decimal({ precision: 5, scale: 2 }).notNull(),
});

export const hrEvalSetting = mysqlTable("hr_eval_setting", {
	editlock: tinyint().notNull(),
	appraisallock: tinyint().notNull(),
	// Warning: Can't parse year(4) from database
	// year(4)Type: year(4)("evaluationyear").notNull(),
	evaluationmonth: tinyint().notNull(),
	groupweightOplan: decimal("groupweight_oplan", { precision: 5, scale: 2, unsigned: true }).notNull(),
	groupweightCompetency: decimal("groupweight_competency", { precision: 5, scale: 2, unsigned: true }).notNull(),
	groupweightEssential: decimal("groupweight_essential", { precision: 5, scale: 2, unsigned: true }).notNull(),
	competencyratingcount: tinyint().notNull(),
	competencyratingweight1: smallint().notNull(),
	competencyratingweight2: smallint().notNull(),
	competencyratingweight3: smallint().notNull(),
	competencyratingweight4: smallint().notNull(),
	competencyratingweight5: smallint().notNull(),
});

export const hrEvalSettings = mysqlTable("hr_eval_settings", {
	evalSettingsid: int("eval_settingsid").autoincrement().notNull(),
	evaluationyear: smallint().notNull(),
	evaluationmonth: tinyint().notNull(),
	isActive: tinyint("is_active").notNull(),
	lockSettings: tinyint("lock_settings").notNull(),
	lockAppraisal: tinyint("lock_appraisal").notNull(),
	oplanTemplate: text("oplan_template").notNull(),
	competencyTemplate: text("competency_template").notNull(),
	positions: text().notNull(),
	weights: text().notNull(),
	performanceMatrix: text("performance_matrix").notNull(),
	conversion: text().notNull(),
});

export const hrEvalTarget = mysqlTable("hr_eval_target", {
	targetid: int().autoincrement().notNull(),
	// Warning: Can't parse year(4) from database
	// year(4)Type: year(4)("evaluationyear").notNull(),
	employeeid: mediumint().notNull(),
	piid: mediumint().notNull(),
	t1: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t2: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t3: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t4: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t5: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t6: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t7: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t8: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t9: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t10: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t11: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	t12: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p1: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p2: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p3: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p4: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p5: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p6: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p7: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p8: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p9: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p10: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p11: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	p12: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
},
(table) => [
	unique("targetid").on(table.targetid),
]);

export const hrLeavecreditstemp = mysqlTable("hr_leavecreditstemp", {
	id: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	vlcredits: decimal({ precision: 5, scale: 2 }).notNull(),
	vlcheck: tinyint().notNull(),
	slcredits: decimal({ precision: 5, scale: 2 }).notNull(),
	slcheck: tinyint().notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const hrLeavesl = mysqlTable("hr_leavesl", {
	slid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datefiled: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateapproved: date({ mode: 'string' }).notNull(),
	slcredit: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	sldebit: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	slbalance: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	approver1Id: mediumint().notNull(),
	approver2Id: mediumint().notNull(),
	purpose: char({ length: 50 }).notNull(),
	units: tinyint().notNull(),
});

export const hrLeavesldetail = mysqlTable("hr_leavesldetail", {
	slid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	leavedate: date({ mode: 'string' }).notNull(),
	availed: tinyint().notNull(),
});

export const hrLeavetemp = mysqlTable("hr_leavetemp", {
	leavetempid: int().autoincrement().notNull(),
	leavetype: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datefiled: date({ mode: 'string' }).notNull(),
	employeeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datestart: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateend: date({ mode: 'string' }).notNull(),
	leavedays: tinyint().notNull(),
	purpose: char({ length: 50 }).notNull(),
	approver1Id: mediumint().notNull(),
	approver1Ok: tinyint().notNull(),
	approver2Id: mediumint().notNull(),
	units: tinyint().notNull(),
});

export const hrLeavevl = mysqlTable("hr_leavevl", {
	vlid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datefiled: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateapproved: date({ mode: 'string' }).notNull(),
	vlcredit: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	vldebit: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	vlbalance: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	approver1Id: mediumint().notNull(),
	approver2Id: mediumint().notNull(),
	purpose: char({ length: 50 }).notNull(),
	units: tinyint().notNull(),
});

export const hrLeavevldetail = mysqlTable("hr_leavevldetail", {
	vlid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	leavedate: date({ mode: 'string' }).notNull(),
	availed: tinyint().notNull(),
},
(table) => [
	index("vlid").on(table.vlid),
]);

export const hrNpa = mysqlTable("hr_npa", {
	npaid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	employeeid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	effectivitydate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	employmentstatus: tinyint().notNull(),
	payrollstatus: tinyint().notNull(),
	rankid: smallint().notNull(),
	positionid: mediumint().notNull(),
	payrollfrequency: tinyint().notNull(),
	workdaysperyear: smallint().notNull(),
	wagebasis: tinyint().notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("effectivitydate").on(table.effectivitydate),
]);

export const hrNpatemp = mysqlTable("hr_npatemp", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	employeeid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	effectivitydate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	employmentstatus: tinyint().notNull(),
	payrollstatus: tinyint().notNull(),
	rankid: smallint().notNull(),
	positionid: mediumint().notNull(),
	payrollfrequency: tinyint().notNull(),
	workdaysperyear: smallint().notNull(),
	wagebasis: tinyint().notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const hrObSeminar = mysqlTable("hr_ob_seminar", {
	obSeminarId: int("ob_seminar_id").autoincrement().notNull(),
	obSeminarType: int("ob_seminar_type").notNull(),
	obSeminarUnit: tinyint("ob_seminar_unit").notNull(),
	employeeid: mediumint().notNull(),
	obSeminarInfo: text("ob_seminar_info").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	startdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	enddate: date({ mode: 'string' }).notNull(),
	postedby: mediumint().notNull(),
	remarks: tinyint().notNull(),
});

export const hrOvertimepremium = mysqlTable("hr_overtimepremium", {
	holidaytype: tinyint().notNull(),
	firsteight: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	excesseight: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	nightdiff: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	glcode: int().notNull(),
});

export const hrPagibig = mysqlTable("hr_pagibig", {
	lower: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	upper: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	rateEr: decimal("rate_er", { precision: 5, scale: 2, unsigned: true }).notNull(),
	rateEe: decimal("rate_ee", { precision: 5, scale: 2, unsigned: true }).notNull(),
	amountEr: decimal("amount_er", { precision: 12, scale: 2, unsigned: true }).notNull(),
	amountEe: decimal("amount_ee", { precision: 12, scale: 2, unsigned: true }).notNull(),
});

export const hrPayrolldata1 = mysqlTable("hr_payrolldata1", {
	payrollid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	payrolldate: date({ mode: 'string' }).notNull(),
	payrollfrequency: smallint().notNull(),
	workdaysofperiod: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate1: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate2: date({ mode: 'string' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
]);

export const hrPayrolldata2 = mysqlTable("hr_payrolldata2", {
	payrollid: int().notNull(),
	employeeid: mediumint().notNull(),
	branchid: smallint().notNull(),
	costcenterid: mediumint().notNull(),
	payrollstatus: tinyint().notNull(),
	workdaysperyear: smallint().notNull(),
	wagebasis: tinyint().notNull(),
	rateperpay: binary({ length: 16 }).notNull(),
	ratepermonth: binary({ length: 16 }).notNull(),
	rateperday: binary({ length: 16 }).notNull(),
	rateperhour: binary({ length: 16 }).notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	incentive: binary({ length: 16 }).notNull(),
	relocation: binary({ length: 16 }).notNull(),
	bonus: binary({ length: 16 }).notNull(),
	month13: binary({ length: 16 }).notNull(),
	leaveencashment: binary({ length: 16 }).notNull(),
	otherincome1: binary({ length: 16 }).notNull(),
	otherincome2: binary({ length: 16 }).notNull(),
	otherincome3: binary({ length: 16 }).notNull(),
	rdotpay: binary({ length: 16 }).notNull(),
	rhotpay: binary({ length: 16 }).notNull(),
	shotpay: binary({ length: 16 }).notNull(),
	absences: binary({ length: 16 }).notNull(),
	lates: binary({ length: 16 }).notNull(),
	ardeduction: binary({ length: 16 }).notNull(),
	otherdeduction1: binary({ length: 16 }).notNull(),
	otherdeduction2: binary({ length: 16 }).notNull(),
	otherdeduction3: binary({ length: 16 }).notNull(),
	sssSsEr: binary("sss_ss_er", { length: 16 }).notNull(),
	sssSsEe: binary("sss_ss_ee", { length: 16 }).notNull(),
	sssEcEr: binary("sss_ec_er", { length: 16 }).notNull(),
	sssPfEr: binary("sss_pf_er", { length: 16 }).notNull(),
	sssPfEe: binary("sss_pf_ee", { length: 16 }).notNull(),
	phEr: binary("ph_er", { length: 16 }).notNull(),
	phEe: binary("ph_ee", { length: 16 }).notNull(),
	pagibigEr: binary("pagibig_er", { length: 16 }).notNull(),
	pagibigEe: binary("pagibig_ee", { length: 16 }).notNull(),
	wtax: binary({ length: 16 }).notNull(),
	netpay: binary({ length: 16 }).notNull(),
	odexcess8: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	odnightdiff: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rhfirst8: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rhexcess8: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	rhnightdiff: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	shfirst8: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	shexcess8: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	shnightdiff: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	daysabsent: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	hourslate: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	hoursundertime: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("payrollid").on(table.payrollid),
	index("employeeid").on(table.employeeid),
	index("branchid").on(table.branchid),
]);

export const hrPayrolldata3 = mysqlTable("hr_payrolldata3", {
	payrollid: int().notNull(),
	employeeid: mediumint().notNull(),
	deductiontypeid: smallint().notNull(),
	referenceid: bigint({ mode: "number" }).notNull(),
	remarks: char({ length: 50 }).notNull(),
	amortization: char({ length: 50 }).notNull(),
	balance: char({ length: 50 }).notNull(),
},
(table) => [
	index("payrollid").on(table.payrollid),
	index("employeeid").on(table.employeeid),
]);

export const hrPayrolltemp1 = mysqlTable("hr_payrolltemp1", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	payrolldate: date({ mode: 'string' }).notNull(),
	payrollfrequency: tinyint().notNull(),
	workdaysofperiod: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate1: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate2: date({ mode: 'string' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	ornumber: char({ length: 20 }).notNull(),
	id2: char({ length: 100 }).notNull(),
},
(table) => [
	index("payrollfrequency").on(table.payrollfrequency),
	index("cutoffdate1").on(table.cutoffdate1),
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
]);

export const hrPayrolltemp2 = mysqlTable("hr_payrolltemp2", {
	payrollid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	branchid: smallint().notNull(),
	odexcess8: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	odnightdiff: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	rhfirst8: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	rhexcess8: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	rhnightdiff: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	shfirst8: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	shexcess8: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	shnightdiff: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	daysabsent: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	hourslate: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	hoursundertime: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	incentive: binary({ length: 16 }).notNull(),
	relocation: binary({ length: 16 }).notNull(),
	bonus: binary({ length: 16 }).notNull(),
	month13: binary({ length: 16 }).notNull(),
	leaveencashment: binary({ length: 16 }).notNull(),
	otherincome1: binary({ length: 16 }).notNull(),
	otherincome2: binary({ length: 16 }).notNull(),
	otherincome3: binary({ length: 16 }).notNull(),
	ardeduction: binary({ length: 16 }).notNull(),
	otherdeduction1: binary({ length: 16 }).notNull(),
	otherdeduction2: binary({ length: 16 }).notNull(),
	otherdeduction3: binary({ length: 16 }).notNull(),
});

export const hrPayrolltemp3 = mysqlTable("hr_payrolltemp3", {
	tempid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	deductiontypeid: smallint().notNull(),
	referenceid: bigint({ mode: "number" }).notNull(),
	remarks: char({ length: 50 }).notNull(),
	amortization: decimal({ precision: 12, scale: 2 }).notNull(),
	balance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const hrPhilhealth = mysqlTable("hr_philhealth", {
	lower: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	upper: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	rateEr: decimal("rate_er", { precision: 5, scale: 2, unsigned: true }).notNull(),
	rateEe: decimal("rate_ee", { precision: 5, scale: 2, unsigned: true }).notNull(),
	amountEr: decimal("amount_er", { precision: 12, scale: 2, unsigned: true }).notNull(),
	amountEe: decimal("amount_ee", { precision: 12, scale: 2, unsigned: true }).notNull(),
});

export const hrPositions = mysqlTable("hr_positions", {
	positionid: mediumint().notNull(),
	positionname: char({ length: 50 }).notNull(),
	departmentid: smallint().notNull(),
	costcenterid: smallint().notNull(),
});

export const hrPositiontemp = mysqlTable("hr_positiontemp", {
	tempid: int().autoincrement().notNull(),
	employeeid: mediumint().notNull(),
	positionid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	durationFrom: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	durationTo: date({ mode: 'string' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	dateCancelled: char({ length: 10 }).notNull(),
});

export const hrRanks = mysqlTable("hr_ranks", {
	rankid: int().notNull(),
	rankname: char({ length: 20 }).notNull(),
	isofficer: tinyint().notNull(),
	payrollLevel: tinyint().notNull(),
});

export const hrSss = mysqlTable("hr_sss", {
	id: int().autoincrement().notNull(),
	lower: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	upper: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	scEc: decimal("sc_ec", { precision: 10, scale: 2, unsigned: true }).notNull(),
	scPf: decimal("sc_pf", { precision: 10, scale: 2, unsigned: true }).notNull(),
	ssEr: decimal("ss_er", { precision: 10, scale: 2, unsigned: true }).notNull(),
	ssEe: decimal("ss_ee", { precision: 10, scale: 2, unsigned: true }).notNull(),
	ecEr: decimal("ec_er", { precision: 10, scale: 2, unsigned: true }).notNull(),
	ecEe: decimal("ec_ee", { precision: 10, scale: 2, unsigned: true }).notNull(),
	pfEr: decimal("pf_er", { precision: 10, scale: 2, unsigned: true }).notNull(),
	pfEe: decimal("pf_ee", { precision: 10, scale: 2, unsigned: true }).notNull(),
});

export const hrWtaxbracket = mysqlTable("hr_wtaxbracket", {
	bracketid: decimal({ precision: 10, scale: 2 }).notNull(),
	lower: decimal({ precision: 10, scale: 2 }).notNull(),
	upper: decimal({ precision: 10, scale: 2 }).notNull(),
	initialtax: decimal({ precision: 10, scale: 2 }).notNull(),
	rate: decimal({ precision: 4, scale: 2 }).notNull(),
});

export const instapayBanks = mysqlTable("instapay_banks", {
	id: int().autoincrement().notNull(),
	bin: mediumint().notNull(),
	bankname: varchar({ length: 50 }).notNull(),
	mnemonic: varchar({ length: 10 }).notNull(),
});

export const instapayFees = mysqlTable("instapay_fees", {
	feeid: mediumint().autoincrement().notNull(),
	gatewaycode: varchar({ length: 25 }).notNull(),
	lower: decimal({ precision: 12, scale: 2 }).notNull(),
	upper: decimal({ precision: 12, scale: 2 }).notNull(),
	variablefee: decimal({ precision: 12, scale: 2 }).notNull(),
	fix: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const instapayGateways = mysqlTable("instapay_gateways", {
	id: smallint().autoincrement().notNull(),
	gatewaycode: varchar({ length: 25 }).notNull(),
	amountlimit: decimal({ precision: 12, scale: 2 }).notNull(),
	partnershare: decimal({ precision: 4, scale: 2 }).notNull(),
	fixfee: decimal({ precision: 6, scale: 2 }).notNull(),
	implementation: datetime({ mode: 'string'}).default('current_timestamp()').notNull(),
});

export const instapayTransactions = mysqlTable("instapay_transactions", {
	transid: bigint({ mode: "number" }).notNull(),
	apiTransactionid: bigint("api_transactionid", { mode: "number" }).default(0),
	transtype: tinyint().notNull(),
	bnkcode: mediumint().notNull(),
	acctname: varchar({ length: 30 }).notNull(),
	acctno: bigint({ mode: "number" }).notNull(),
	accttype: smallint().notNull(),
	acctident: varchar({ length: 50 }).notNull(),
	tfrname: varchar({ length: 30 }).notNull(),
	tfrbnkcode: smallint().notNull(),
	tfracctno: varchar({ length: 19 }).notNull(),
	txnamt: decimal({ precision: 7, scale: 2 }).notNull(),
	tnxdate: char({ length: 4 }).notNull(),
	tnxtime: char({ length: 6 }).notNull(),
	invno: varchar({ length: 6 }).notNull(),
	param1: varchar({ length: 100 }).notNull(),
	param2: varchar({ length: 100 }).notNull(),
	param3: varchar({ length: 100 }).notNull(),
	custno: varchar({ length: 19 }).notNull(),
	purpose: varchar({ length: 100 }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	fee: decimal({ precision: 5, scale: 2 }).default('NULL'),
	channel: tinyint().notNull(),
	responseRespcode: varchar("response_respcode", { length: 4 }).default('NULL'),
	responseTraceno: char("response_traceno", { length: 12 }).default('NULL'),
	responseRespdesc: varchar("response_respdesc", { length: 25 }).default('NULL'),
	savingstransactionid: bigint({ mode: "number" }).default(0),
	savingstransactionid2: bigint({ mode: "number" }).default(0),
});

export const insuranceAmort = mysqlTable("insurance_amort", {
	policyid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedue: date({ mode: 'string' }).notNull(),
	insurancePremium: decimal("insurance_premium", { precision: 12, scale: 2, unsigned: true }).notNull(),
	insuranceSavings: decimal("insurance_savings", { precision: 12, scale: 2, unsigned: true }).notNull(),
	insuranceCf: decimal("insurance_cf", { precision: 12, scale: 2, unsigned: true }).notNull(),
	insuranceCbu: decimal("insurance_cbu", { precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datepaid: date({ mode: 'string' }).notNull(),
	paymentid: bigint({ mode: "number" }).notNull(),
	lendingAmortnumber: smallint("lending_amortnumber").notNull(),
	amortnumber: smallint().notNull(),
},
(table) => [
	index("policyid").on(table.policyid),
	index("clientid").on(table.clientid),
	index("datepaid").on(table.datepaid),
	index("paymentid").on(table.paymentid),
	index("datedue").on(table.datedue),
	index("amortnumber").on(table.lendingAmortnumber),
	index("amortnumber_2").on(table.lendingAmortnumber),
	index("amortnumber_3").on(table.lendingAmortnumber),
	index("amortnumber_4").on(table.lendingAmortnumber),
	index("amortnumber_5").on(table.amortnumber),
]);

export const insuranceClaims = mysqlTable("insurance_claims", {
	claimId: bigint("claim_id", { mode: "number" }).autoincrement().notNull(),
	timestamp: timestamp({ mode: 'string' }).default('current_timestamp()').notNull(),
	branchid: smallint().notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	policydetailId: bigint("policydetail_id", { mode: "number" }).notNull(),
	benefit: char({ length: 13 }).notNull(),
	diagnosisId: smallint("diagnosis_id").notNull(),
	diagnosisText: varchar("diagnosis_text", { length: 500 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateApplied: date("date_applied", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	claimDate: date("claim_date", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	claimDate2: date("claim_date2", { mode: 'string' }).notNull(),
	claimAvailment: tinyint("claim_availment").notNull(),
	claimAmount: decimal("claim_amount", { precision: 12, scale: 2, unsigned: true }).notNull(),
	claimantName: varchar("claimant_name", { length: 50 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	approvedDate: date("approved_date", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	releaseDate: date("release_date", { mode: 'string' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	releasedbyid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("policyid").on(table.policyid),
	index("policydetail_id").on(table.policydetailId),
	index("benefit").on(table.benefit),
	index("date_applied").on(table.dateApplied),
	index("approved_date").on(table.approvedDate),
	index("release_date").on(table.releaseDate),
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
	index("releasedbyid").on(table.releasedbyid),
]);

export const insuranceDiagnosis = mysqlTable("insurance_diagnosis", {
	diagnosisId: mediumint("diagnosis_id").notNull(),
	diagnosisName: char("diagnosis_name", { length: 200 }).notNull(),
	diagnosisName2: varchar("diagnosis_name2", { length: 1000 }).notNull(),
	category: mediumint().notNull(),
	parent: mediumint().notNull(),
	level: tinyint().notNull(),
	childcount: smallint().notNull(),
	icdCode: varchar("icd_code", { length: 12 }).notNull(),
},
(table) => [
	index("category").on(table.category),
	index("level").on(table.level),
	index("category_2").on(table.category),
	index("level_2").on(table.level),
	index("category_3").on(table.category),
	index("level_3").on(table.level),
	index("category_4").on(table.category),
	index("level_4").on(table.level),
]);

export const insuranceIncident = mysqlTable("insurance_incident", {
	incidentid: int().autoincrement().notNull(),
	incidentType: tinyint("incident_type").notNull(),
	incident: varchar({ length: 60 }).notNull(),
	deathType: tinyint("death_type").default(0),
});

export const insurancePayments = mysqlTable("insurance_payments", {
	paymentid: bigint({ mode: "number" }).notNull(),
	paymentidOrig: bigint("paymentid_orig", { mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	insurancePremium: decimal("insurance_premium", { precision: 12, scale: 2 }).notNull(),
	insuranceSavings: decimal("insurance_savings", { precision: 12, scale: 2 }).notNull(),
	insuranceCf: decimal("insurance_cf", { precision: 12, scale: 2 }).notNull(),
	insuranceCbu: decimal("insurance_cbu", { precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("policyid").on(table.policyid),
	index("clientid").on(table.clientid),
	index("paymentid_orig").on(table.paymentidOrig),
]);

export const insurancePolicy = mysqlTable("insurance_policy", {
	policyid: bigint({ mode: "number" }).autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	policydate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	branchid: mediumint().notNull(),
	insuranceproductid: int().notNull(),
	termcomputation: tinyint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	countinsured: tinyint().notNull(),
	premiumTotal: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	premiumNet: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	cbuSavingsid: bigint("cbu_savingsid", { mode: "number" }).notNull(),
	userid: mediumint().notNull(),
	cancelUserid: mediumint("cancel_userid").notNull(),
},
(table) => [
	index("policydate").on(table.policydate),
	index("productid").on(table.insuranceproductid),
	index("clientid").on(table.clientid),
	index("savingsid").on(table.savingsid),
	index("termcomputation").on(table.termcomputation),
	index("maturity").on(table.maturity),
	index("maturity_2").on(table.maturity),
	index("maturity_3").on(table.maturity),
]);

export const insurancePolicybeneficiary = mysqlTable("insurance_policybeneficiary", {
	id: bigint({ mode: "number" }).autoincrement().notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	beneficiaryid: int().notNull(),
	relationship: char({ length: 15 }).notNull(),
	beneficiaryname: char({ length: 50 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthdate: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("policyid").on(table.policyid),
	index("beneficiaryid").on(table.beneficiaryid),
	index("relationship").on(table.relationship),
	index("relationship_2").on(table.relationship),
	index("relationship_3").on(table.relationship),
	unique("id").on(table.id),
]);

export const insurancePolicydetail = mysqlTable("insurance_policydetail", {
	policydetailId: bigint("policydetail_id", { mode: "number" }).autoincrement().notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	relationship: char({ length: 15 }).notNull(),
	relativeid: bigint({ mode: "number" }).notNull(),
	coverage: decimal({ precision: 12, scale: 2 }).notNull(),
	premium: decimal({ precision: 10, scale: 2 }).notNull(),
	premiumNet: decimal("premium_net", { precision: 10, scale: 2, unsigned: true }).notNull(),
	lastname: char({ length: 50 }).notNull(),
	firstname: char({ length: 50 }).notNull(),
	middlename: char({ length: 50 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthdate: date({ mode: 'string' }).notNull(),
	insuredClientStatus: tinyint("insured_client_status").default(0),
},
(table) => [
	index("policyid").on(table.policyid),
	index("relativeid").on(table.relativeid),
	index("relationship").on(table.relationship),
	index("firstname").on(table.firstname),
	index("middlename").on(table.middlename),
	index("lastname").on(table.lastname),
	index("firstname_2").on(table.firstname),
	index("middlename_2").on(table.middlename),
	index("lastname_2").on(table.lastname),
	index("firstname_3").on(table.firstname),
	index("middlename_3").on(table.middlename),
	index("lastname_3").on(table.lastname),
]);

export const insuranceProducts = mysqlTable("insurance_products", {
	insuranceproductid: int().autoincrement().notNull(),
	productdetails: varchar({ length: 7000 }).notNull(),
},
(table) => [
	index("productdetails").on(table.productdetails),
	index("productdetails_2").on(table.productdetails),
]);

export const lendingAgingbracket = mysqlTable("lending_agingbracket", {
	lower: smallint().notNull(),
	upper: smallint().notNull(),
});

export const lendingAmortdetails = mysqlTable("lending_amortdetails", {
	pnid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedue: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedueOrig: date("datedue_orig", { mode: 'string' }).notNull(),
	principal: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datepaid: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("amortnumber").on(table.amortnumber),
	index("datedue").on(table.datedue),
	index("datepaid").on(table.datepaid),
	index("datedue_orig").on(table.datedueOrig),
]);

export const lendingAmortdetailsedit = mysqlTable("lending_amortdetailsedit", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	changesPrincipal: smallint("changes_principal").notNull(),
	discountinterest: decimal({ precision: 10, scale: 2 }).notNull(),
	discountservicecharge: decimal({ precision: 10, scale: 2 }).notNull(),
	discountsavings: decimal({ precision: 10, scale: 2 }).notNull(),
	discountamort1: decimal({ precision: 10, scale: 2 }).notNull(),
	discountamort2: decimal({ precision: 10, scale: 2 }).notNull(),
	justification: varchar({ length: 300 }).default('NULL'),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const lendingAmortdetailstemp = mysqlTable("lending_amortdetailstemp", {
	pnid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedue: date({ mode: 'string' }).notNull(),
	principal: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
]);

export const lendingAssetsize = mysqlTable("lending_assetsize", {
	assetsizeid: mediumint().notNull(),
	name: varchar({ length: 200 }).notNull(),
});

export const lendingBorrowertypes = mysqlTable("lending_borrowertypes", {
	borrowertypeid: mediumint().notNull(),
	borrowertypename: varchar({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingCenters = mysqlTable("lending_centers", {
	centerid: int().notNull(),
	centernumber: smallint().notNull(),
	centername: varchar({ length: 25 }).notNull(),
	barangayid: mediumint().notNull(),
	meetingday: tinyint().notNull(),
	meetingtime: time().notNull(),
	accountofficer: mediumint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	signatory1Id: bigint({ mode: "number" }).notNull(),
	signatory2Id: bigint({ mode: "number" }).notNull(),
	branchid: smallint().notNull(),
},
(table) => [
	index("barangayid").on(table.barangayid),
	index("branch").on(table.branchid),
	index("accountofficer").on(table.accountofficer),
]);

export const lendingCenterstemp = mysqlTable("lending_centerstemp", {
	tempid: int().autoincrement().notNull(),
	centernumber: smallint().notNull(),
	centername: varchar({ length: 25 }).notNull(),
	barangayid: mediumint().notNull(),
	meetingday: tinyint().notNull(),
	meetingtime: time().notNull(),
	accountofficer: mediumint().notNull(),
	signatory1Id: bigint({ mode: "number" }).notNull(),
	signatory2Id: bigint({ mode: "number" }).notNull(),
	savingsproductid: smallint().notNull(),
	branchid: smallint().notNull(),
	makerid: mediumint().notNull(),
});

export const lendingCenterstransfer = mysqlTable("lending_centerstransfer", {
	transid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transDate: date({ mode: 'string' }).notNull(),
	centerid: int().notNull(),
	branchidFrom: smallint().notNull(),
	branchidTo: smallint().notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	isTransferred: tinyint().notNull(),
},
(table) => [
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
	index("isTransferred").on(table.isTransferred),
]);

export const lendingClientgroup = mysqlTable("lending_clientgroup", {
	clientgroupid: mediumint().notNull(),
	name: varchar({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingCreditlineData = mysqlTable("lending_creditline_data", {
	creditlineId: int("creditline_id").autoincrement().notNull(),
	branchid: smallint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	creditlineProductid: int("creditline_productid").notNull(),
	loanproductid: int().notNull(),
	creditlineLimit: decimal("creditline_limit", { precision: 12, scale: 2, unsigned: true }).notNull(),
	creditlineTerm: smallint("creditline_term").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	creditlineDate: date("creditline_date", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	creditlineMaturity: date("creditline_maturity", { mode: 'string' }).notNull(),
	creditlineApprovers: varchar("creditline_approvers", { length: 1000 }).notNull(),
	creditlineStatus: tinyint("creditline_status").notNull(),
	creditlineNotes: varchar("creditline_notes", { length: 250 }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("branchid").on(table.branchid),
	index("creditline_date").on(table.creditlineDate),
	index("creditline_maturity").on(table.creditlineMaturity),
	index("branchid_2").on(table.branchid),
	index("creditline_date_2").on(table.creditlineDate),
	index("creditline_maturity_2").on(table.creditlineMaturity),
]);

export const lendingCreditlineProduct = mysqlTable("lending_creditline_product", {
	creditlineProductid: int("creditline_productid").autoincrement().notNull(),
	creditlineProductname: varchar("creditline_productname", { length: 50 }).notNull(),
	productdescription: varchar({ length: 1000 }).notNull(),
	loanproductid: tinyint().notNull(),
	creditlineMaxlimit: decimal("creditline_maxlimit", { precision: 12, scale: 2, unsigned: true }).notNull(),
	creditlineMaxterm: tinyint("creditline_maxterm").notNull(),
	requiredCreditlineapprovers: tinyint("required_creditlineapprovers").notNull(),
	requiredLoanapprovers: tinyint("required_loanapprovers").notNull(),
});

export const lendingCreditscoreData = mysqlTable("lending_creditscore_data", {
	creditscoreId: int("creditscore_id").autoincrement().notNull(),
	timestamp: datetime({ mode: 'string'}).default('current_timestamp()').notNull(),
	branchid: smallint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	creditscoreTemplateId: smallint("creditscore_template_id").notNull(),
	totalscore: smallint().notNull(),
	result: tinyint().notNull(),
	risklevel: tinyint().notNull(),
	risklevelName: varchar("risklevel_name", { length: 25 }).notNull(),
	details: varchar({ length: 10000 }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("clientid").on(table.clientid),
	index("creditscore_template_id").on(table.creditscoreTemplateId),
	index("makerid").on(table.makerid),
	index("branchid").on(table.branchid),
]);

export const lendingCreditscoreTemplate = mysqlTable("lending_creditscore_template", {
	creditscoreTemplateId: smallint("creditscore_template_id").autoincrement().notNull(),
	creditscoreName: varchar("creditscore_name", { length: 60 }).notNull(),
	creditscoreDescription: varchar("creditscore_description", { length: 100 }).notNull(),
	creditscoreTemplate: varchar("creditscore_template", { length: 15000 }).notNull(),
	status: tinyint().notNull(),
});

export const lendingDeductionrate = mysqlTable("lending_deductionrate", {
	loanproductid: int().notNull(),
	deduction: tinyint().notNull(),
	lower: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	upper: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	rate: decimal({ precision: 12, scale: 3, unsigned: true }).notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
]);

export const lendingDiscount = mysqlTable("lending_discount", {
	discountid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	discountinterest: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountservicecharge: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountsavings: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountamort1: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountamort2: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountpenalty: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountpastdueinterest: decimal({ precision: 10, scale: 2 }).default('NULL'),
	justification: varchar({ length: 250 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("approverid").on(table.approverid),
]);

export const lendingDiscounttemp = mysqlTable("lending_discounttemp", {
	discountid: int().notNull(),
	branchid: smallint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	penalty: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	pastdueinterest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("amortnumber").on(table.amortnumber),
	index("branchid").on(table.branchid),
	index("makerid").on(table.approverid),
	index("discountid").on(table.discountid),
]);

export const lendingEconomicactivities = mysqlTable("lending_economicactivities", {
	id: mediumint().autoincrement().notNull(),
	name: varchar({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingIndustries = mysqlTable("lending_industries", {
	industryid: tinyint().notNull(),
	industryname: char({ length: 200 }).notNull(),
	defaultname: char({ length: 200 }).notNull(),
	isuse: tinyint().notNull(),
},
(table) => [
	index("isuse").on(table.isuse),
]);

export const lendingIndustryperloanclass = mysqlTable("lending_industryperloanclass", {
	loanclassid: smallint().notNull(),
	industryid: tinyint().notNull(),
},
(table) => [
	index("loanclassid").on(table.loanclassid),
	index("loanclassid_2").on(table.loanclassid),
]);

export const lendingInsformcoordinates = mysqlTable("lending_insformcoordinates", {
	insuranceform: int().notNull(),
	data: char({ length: 100 }).notNull(),
	x: decimal({ precision: 5, scale: 1, unsigned: true }).notNull(),
	y: decimal({ precision: 5, scale: 1, unsigned: true }).notNull(),
});

export const lendingInsuranceproviders = mysqlTable("lending_insuranceproviders", {
	insuranceproviderid: tinyint().autoincrement().notNull(),
	name: varchar({ length: 100 }).notNull(),
	shortname: varchar({ length: 55 }).notNull(),
	insurancelifeprincipal: decimal({ precision: 8, scale: 0, unsigned: true }).notNull(),
	insurancelifeparent: decimal({ precision: 8, scale: 0, unsigned: true }).notNull(),
	insurancelifespouse: decimal({ precision: 8, scale: 0, unsigned: true }).notNull(),
	insurancelifesibling: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	insurancelifechild: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	maxageprincipal: tinyint().notNull(),
	maxageparent: tinyint().notNull(),
	maxagespouse: tinyint().notNull(),
	maxagesibling: tinyint().notNull(),
	maxagechild: tinyint().notNull(),
	insuredparent: smallint().notNull(),
	insuredspouse: smallint().notNull(),
	insuredsibling: smallint().notNull(),
	insuredchild: smallint().notNull(),
	commissionrate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
});

export const lendingInsurancerates = mysqlTable("lending_insurancerates", {
	insuranceproviderid: tinyint().notNull(),
	month: smallint().notNull(),
	ratecredit: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
	ratelifeprincipal: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
	ratelifeparent: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
	ratelifespouse: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
	ratelifesibling: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
	ratelifechild: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
});

export const lendingInterestrates = mysqlTable("lending_interestrates", {
	range: int().notNull(),
});

export const lendingLetters = mysqlTable("lending_letters", {
	letterid: smallint().notNull(),
	name: text().notNull(),
	type: tinyint().notNull(),
	daysMin: mediumint().notNull(),
	daysMax: mediumint().notNull(),
	codeLetter: text("code_letter").notNull(),
},
(table) => [
	unique("letterid").on(table.letterid),
]);

export const lendingLoanclassifications = mysqlTable("lending_loanclassifications", {
	loanclassid: smallint().notNull(),
	name: varchar({ length: 200 }).notNull(),
	defaultname: varchar({ length: 200 }).notNull(),
	glcodecurrent: int().notNull(),
	glcodeincomecurrent: int().notNull(),
	glcodepastdue: int().notNull(),
	glcodeincomepastdue: int().notNull(),
	glcodeNonperf: int().notNull(),
	glcodeIncomeNonperf: int().notNull(),
	glcodeinlitigation: int().notNull(),
	glcodeincomeinlitigation: int().notNull(),
	glcodeDiscountOutrightInt: int().notNull(),
	glcodeDiscountOutrightSc: int().notNull(),
	glcodeDiscountAmortInt: int().notNull(),
	glcodeDiscountAmortSc: int().notNull(),
	glcodeProvision: int().notNull(),
	isBusinessloan: tinyint("is_businessloan").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingLoanclassperpurpose = mysqlTable("lending_loanclassperpurpose", {
	loanpurposeid: mediumint().notNull(),
	loanclassid: smallint().notNull(),
},
(table) => [
	index("loanpurposeid").on(table.loanpurposeid),
]);

export const lendingLoandetails = mysqlTable("lending_loandetails", {
	pnid: bigint({ mode: "number" }).notNull(),
	pnidPreviousCbs: varchar("pnid_previous_cbs", { length: 50 }).default('NULL'),
	clientid: bigint({ mode: "number" }).notNull(),
	spouseid: bigint({ mode: "number" }).notNull(),
	pnid2: char({ length: 25 }).notNull(),
	branchid: smallint().notNull(),
	loanproductid: int().notNull(),
	termunit: tinyint().notNull(),
	term: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity2: date({ mode: 'string' }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interestrate: decimal({ precision: 6, scale: 4, unsigned: true }).notNull(),
	interestcomputation: tinyint().notNull(),
	irr: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	eir: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	eirInt: decimal("eir_int", { precision: 7, scale: 5, unsigned: true }).notNull(),
	eirSc: decimal("eir_sc", { precision: 7, scale: 5, unsigned: true }).notNull(),
	interestcomputationbasis: tinyint().notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	interestPartialDiscDate: date({ mode: 'string' }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	insurance: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	tax: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction1: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction2: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction3: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction4: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction5: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction6: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction7: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction8: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	deduction9: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	proceeds: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	proceedstype: tinyint().notNull(),
	proceedsreference: char({ length: 25 }).notNull(),
	insuranceproviderid: smallint().notNull(),
	creditorid: smallint().notNull(),
	coborrowerid: int().notNull(),
	comaker1Id: bigint({ mode: "number" }).notNull(),
	comaker2Id: bigint({ mode: "number" }).notNull(),
	comaker3Id: bigint({ mode: "number" }).notNull(),
	comaker4Id: bigint({ mode: "number" }).notNull(),
	comaker5Id: bigint({ mode: "number" }).notNull(),
	workersemployed: smallint().notNull(),
	industryid: smallint().notNull(),
	loanclassid: smallint().notNull(),
	loanpurposeid: mediumint().notNull(),
	loanpurpose: char({ length: 200 }).notNull(),
	securityid: mediumint().notNull(),
	securitydetails: varchar({ length: 150 }).notNull(),
	assetsizeid: mediumint().notNull(),
	borrowertypeid: mediumint().notNull(),
	clientgroupid: mediumint().notNull(),
	restructuredtag: tinyint().notNull(),
	restructuredpnid: bigint({ mode: "number" }).notNull(),
	restructuredCount: tinyint().notNull(),
	autodebitAmort: tinyint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	amort2Destination: tinyint().notNull(),
	cureperiod: tinyint().notNull(),
	loancycle: smallint().notNull(),
	loancycleProduct: smallint().notNull(),
	loanofficerid: mediumint().notNull(),
	postedbyid: mediumint().notNull(),
	tellerid: mediumint().notNull(),
	loanstatus: tinyint().notNull(),
	loanstatusstatic: tinyint().notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	nextdatedue: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	lasttransdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datepaidOrig: date({ mode: 'string' }).notNull(),
	lettercount: tinyint().notNull(),
	promptPayment: decimal({ precision: 4, scale: 1, unsigned: true }).notNull(),
	releasetag: tinyint().notNull(),
	applicationDetails: mediumtext("application_details").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateApplied: date({ mode: 'string' }).default('NULL'),
},
(table) => [
	index("branchid").on(table.branchid),
	index("loanproductid").on(table.loanproductid),
	index("date").on(table.date),
	index("clientid").on(table.clientid),
	index("savingsid").on(table.savingsid),
	index("loanbalance").on(table.loanbalance),
	index("maturity").on(table.maturity),
	index("coborrowerid").on(table.coborrowerid),
	index("comaker1id").on(table.comaker1Id),
	index("comaker2id").on(table.comaker2Id),
	index("maturity2").on(table.maturity2),
	index("securityid").on(table.securityid),
	index("amount").on(table.amount),
	index("comaker3id").on(table.comaker3Id),
	index("comaker4id").on(table.comaker4Id),
	index("comaker5id").on(table.comaker5Id),
	index("industryid").on(table.industryid),
	index("postedbyid").on(table.postedbyid),
	index("tellerid").on(table.tellerid),
	index("spouseid").on(table.spouseid),
	index("restructuredpnid").on(table.restructuredpnid),
	index("application_details").on(table.applicationDetails),
	index("pnid_previous_cbs").on(table.pnidPreviousCbs),
]);

export const lendingLoandetailsteller = mysqlTable("lending_loandetailsteller", {
	pnid: bigint({ mode: "number" }).notNull(),
});

export const lendingLoandetailsChanges = mysqlTable("lending_loandetails_changes", {
	changeId: int("change_id").autoincrement().notNull(),
	branchid: smallint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	changes: varchar({ length: 10000 }).notNull(),
	makerid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateposted: date({ mode: 'string' }).notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("postedbyid").on(table.makerid),
	index("approverid").on(table.approverid),
]);

export const lendingLoanproductadjustments = mysqlTable("lending_loanproductadjustments", {
	branchid: smallint().notNull(),
	loanproductid: int().notNull(),
	interestrate: decimal({ precision: 4, scale: 2 }).notNull(),
	scadjustment: decimal({ precision: 10, scale: 2 }).notNull(),
	insuranceproviderid: tinyint().notNull(),
	creditorid: int().notNull(),
});

export const lendingLoanproductindustry = mysqlTable("lending_loanproductindustry", {
	loanproductid: int().notNull(),
	industryid: tinyint().notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
	index("industryid").on(table.industryid),
]);

export const lendingLoanproducts = mysqlTable("lending_loanproducts", {
	loanproductid: int().autoincrement().notNull(),
	status: tinyint().notNull(),
	name: varchar({ length: 25 }).notNull(),
	shortname: char({ length: 5 }).notNull(),
	description: varchar({ length: 100 }).notNull(),
	type: tinyint().notNull(),
	usepnform: tinyint().notNull(),
	loanamountmaximum: int().notNull(),
	loancountmaximum: tinyint().notNull(),
	loanproductceiling: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	grouping: tinyint().notNull(),
	weekadjuster: tinyint().notNull(),
	groupby: tinyint().notNull(),
	requirecoborrower: tinyint().notNull(),
	requiredcomakers: tinyint().notNull(),
	requireworkersemployed: tinyint().notNull(),
	borrowertypedefault: mediumint().notNull(),
	clientgroupdefault: smallint().notNull(),
	requiresecurity: tinyint().notNull(),
	defaultsecurity: tinyint().notNull(),
	collectionlistOptions: varchar("collectionlist_options", { length: 3000 }).notNull(),
	isEmployeeLoan: tinyint().notNull(),
	termunitflexibility: tinyint().notNull(),
	termunit: tinyint().notNull(),
	termflexibility: tinyint().notNull(),
	termDaysFixed: tinyint().notNull(),
	termDaysFixedFlex: tinyint().notNull(),
	termdefault: tinyint().notNull(),
	termmaximum: smallint().notNull(),
	interestrate: decimal({ precision: 6, scale: 4 }).notNull(),
	pdInterestrate: decimal("pd_interestrate", { precision: 6, scale: 4 }).notNull(),
	grtRate: decimal("grt_rate", { precision: 6, scale: 4 }).notNull(),
	interestcomputation: tinyint().notNull(),
	diminishingOption: tinyint("diminishing_option").notNull(),
	interestcomputationflexibility: tinyint().notNull(),
	interestcomputationbasis: tinyint().notNull(),
	interestcomputationbasisflexibility: tinyint().notNull(),
	interestRecompute: tinyint().notNull(),
	balloonoption: tinyint().notNull(),
	computepastdueinterest: tinyint().notNull(),
	daysinayear: smallint().notNull(),
	interestrateflexibility: tinyint().notNull(),
	interestrateminimum: decimal({ precision: 6, scale: 4 }).notNull(),
	interestdiscountbooking: tinyint().notNull(),
	interestdiscountedglcode: int().notNull(),
	interestamortizedglcode: int().notNull(),
	adjustonholidays: tinyint().notNull(),
	amortrounding: tinyint().notNull(),
	amortgraceperiod: smallint().notNull(),
	amortWorkdays: varchar("amort_workdays", { length: 100 }).notNull(),
	autodebitAmort: tinyint().notNull(),
	aclExempted: tinyint("acl_exempted").notNull(),
	aclAssessment: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	scdiscounteduse: tinyint().notNull(),
	scdiscountedname: char({ length: 20 }).notNull(),
	scdiscountedflexibility: tinyint().notNull(),
	scdiscountedMaxDays2Prorate: smallint().notNull(),
	scbracketoption: tinyint().notNull(),
	scdpyear: smallint().notNull(),
	scrateoption: tinyint().notNull(),
	scdiscountbooking: tinyint().notNull(),
	scdiscountedglcode: int().notNull(),
	scamortuse: tinyint().notNull(),
	scamortname: char({ length: 18 }).notNull(),
	scamortvalue: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	scamortoption: tinyint().notNull(),
	scamortflexibility: tinyint().notNull(),
	scamortglcode: int().notNull(),
	penaltyrates: varchar({ length: 3000 }).notNull(),
	penaltyAmortFixedRate: decimal({ precision: 6, scale: 3, unsigned: true }).notNull(),
	penaltyAmortFixedAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	penaltyAmortRunningRate: decimal({ precision: 6, scale: 3, unsigned: true }).notNull(),
	penaltyAmortGracePeriod: smallint().notNull(),
	penaltyAmortBasis: tinyint().notNull(),
	penaltyAmortBasis2: tinyint().notNull(),
	pastdueAmortBasis: tinyint().notNull(),
	penaltyDueFixedRate: decimal({ precision: 6, scale: 3, unsigned: true }).notNull(),
	penaltyDueFixedAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	penaltyDueRunningRate: decimal({ precision: 6, scale: 3, unsigned: true }).notNull(),
	penaltyDueGracePeriod: smallint().notNull(),
	penaltyDueInclude: tinyint().notNull(),
	penaltyglcode: int().notNull(),
	gracePeriodComputation: tinyint().notNull(),
	pdinterestglcode: int().notNull(),
	useinsurance: tinyint().notNull(),
	insurancename: varchar({ length: 30 }).notNull(),
	insuranceflexibility: tinyint().notNull(),
	insuranceproviderid: smallint().notNull(),
	useinsurancetable: tinyint().notNull(),
	enableprintingofinsurance: tinyint().notNull(),
	enabledeedofassignment: tinyint().notNull(),
	insuranceglcode: int().notNull(),
	insuranceproductid: mediumint().notNull(),
	savingsdiscounteduse: tinyint().notNull(),
	savingsdiscountedname: varchar({ length: 30 }).notNull(),
	savingsdiscounted: decimal({ precision: 8, scale: 2 }).notNull(),
	savingsdiscountedoption: tinyint().notNull(),
	savingsdiscountedflexibility: tinyint().notNull(),
	savingsamortizeduse: tinyint().notNull(),
	savingsamortizedname: varchar({ length: 30 }).notNull(),
	savingsamortized: decimal({ precision: 8, scale: 2 }).notNull(),
	savingsamortizedoption: tinyint().notNull(),
	savingsamortizedflexibility: tinyint().notNull(),
	savingsexcess: tinyint().notNull(),
	savingsholdout: decimal({ precision: 8, scale: 2 }).notNull(),
	savingsholdoutoption: tinyint().notNull(),
	savingsproductid: smallint().notNull(),
	taxuse: tinyint().notNull(),
	taxflexibility: tinyint().notNull(),
	taxglcode: int().notNull(),
	deduction1Use: tinyint().notNull(),
	deduction1Name: char({ length: 12 }).notNull(),
	deduction1Flexibility: tinyint().notNull(),
	deduction1MaxDays2Prorate: smallint().notNull(),
	deduction1Bracketoption: tinyint().notNull(),
	deduction1Dpyear: smallint().notNull(),
	deduction1Rateoption: tinyint().notNull(),
	deduction1Glcode: int().notNull(),
	deduction2Use: tinyint().notNull(),
	deduction2Name: char({ length: 12 }).notNull(),
	deduction2Flexibility: tinyint().notNull(),
	deduction2MaxDays2Prorate: smallint().notNull(),
	deduction2Bracketoption: tinyint().notNull(),
	deduction2Dpyear: smallint().notNull(),
	deduction2Rateoption: tinyint().notNull(),
	deduction2Glcode: int().notNull(),
	deduction3Use: tinyint().notNull(),
	deduction3Name: char({ length: 12 }).notNull(),
	deduction3Flexibility: tinyint().notNull(),
	deduction3MaxDays2Prorate: smallint().notNull(),
	deduction3Bracketoption: tinyint().notNull(),
	deduction3Dpyear: smallint().notNull(),
	deduction3Rateoption: tinyint().notNull(),
	deduction3Glcode: int().notNull(),
	deduction4Use: tinyint().notNull(),
	deduction4Name: char({ length: 12 }).notNull(),
	deduction4Flexibility: tinyint().notNull(),
	deduction4MaxDays2Prorate: smallint().notNull(),
	deduction4Bracketoption: tinyint().notNull(),
	deduction4Dpyear: smallint().notNull(),
	deduction4Rateoption: tinyint().notNull(),
	deduction4Glcode: int().notNull(),
	deduction5Use: tinyint().notNull(),
	deduction5Name: char({ length: 12 }).notNull(),
	deduction5Flexibility: tinyint().notNull(),
	deduction5MaxDays2Prorate: smallint().notNull(),
	deduction5Bracketoption: tinyint().notNull(),
	deduction5Dpyear: smallint().notNull(),
	deduction5Rateoption: tinyint().notNull(),
	deduction5Glcode: int().notNull(),
	deduction6Use: tinyint().notNull(),
	deduction6Name: char({ length: 12 }).notNull(),
	deduction6Flexibility: tinyint().notNull(),
	deduction6MaxDays2Prorate: smallint().notNull(),
	deduction6Bracketoption: tinyint().notNull(),
	deduction6Dpyear: smallint().notNull(),
	deduction6Rateoption: tinyint().notNull(),
	deduction6Glcode: int().notNull(),
	deduction7Use: tinyint().notNull(),
	deduction7Name: char({ length: 12 }).notNull(),
	deduction7Flexibility: tinyint().notNull(),
	deduction7MaxDays2Prorate: smallint().notNull(),
	deduction7Bracketoption: tinyint().notNull(),
	deduction7Dpyear: smallint().notNull(),
	deduction7Rateoption: tinyint().notNull(),
	deduction7Glcode: int().notNull(),
	deduction8Use: tinyint().notNull(),
	deduction8Name: char({ length: 12 }).notNull(),
	deduction8Flexibility: tinyint().notNull(),
	deduction8MaxDays2Prorate: smallint().notNull(),
	deduction8Bracketoption: tinyint().notNull(),
	deduction8Dpyear: smallint().notNull(),
	deduction8Rateoption: tinyint().notNull(),
	deduction8Glcode: int().notNull(),
	deduction9Use: tinyint().notNull(),
	deduction9Name: char({ length: 12 }).notNull(),
	deduction9Flexibility: tinyint().notNull(),
	deduction9MaxDays2Prorate: smallint().notNull(),
	deduction9Bracketoption: tinyint().notNull(),
	deduction9Dpyear: smallint().notNull(),
	deduction9Rateoption: tinyint().notNull(),
	deduction9Glcode: int().notNull(),
	proceedstypedefault: int().notNull(),
	microNplcomputeoption: tinyint("micro_nplcomputeoption").notNull(),
	isTellerDisbursed: tinyint().notNull(),
	isCashDisburesedValidated: tinyint().notNull(),
	disbursementValidationX: decimal("disbursementValidation_x", { precision: 4, scale: 1, unsigned: true }).notNull(),
	disbursementValidationY: decimal("disbursementValidation_y", { precision: 4, scale: 1, unsigned: true }).notNull(),
	amort1Use: tinyint().notNull(),
	securityDependentPn: tinyint().notNull(),
	amort1Name: char({ length: 18 }).notNull(),
	amort1Value: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1Option: tinyint().notNull(),
	amort1IsFinCharge: tinyint().notNull(),
	amort1Flexibility: tinyint().notNull(),
	amort1Glcode: int().notNull(),
	amort2Use: tinyint().notNull(),
	amort2Name: char({ length: 18 }).notNull(),
	amort2Value: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2Option: tinyint().notNull(),
	amort2IsFinCharge: tinyint().notNull(),
	amort2Flexibility: tinyint().notNull(),
	amort2Glcode: int().notNull(),
	amort2Destination: tinyint().notNull(),
	defaultcostcenter: int().notNull(),
	currentglcode: int().notNull(),
	pastdueglcode: int().notNull(),
	nonperfglcode: int().notNull(),
	inlitigationglcode: int().notNull(),
	provisionglcode: int().notNull(),
	cureperiod: smallint().notNull(),
	cureperiod1: tinyint().notNull(),
	cureperiod2: tinyint().notNull(),
	cureperiod3: tinyint().notNull(),
	cureperiod4: tinyint().notNull(),
	cureperiod5: tinyint().notNull(),
	cureperiod6: tinyint().notNull(),
	cureperiod7: tinyint().notNull(),
	cureperiod8: tinyint().notNull(),
	enableIndividualCureperiod: tinyint("enable_individual_cureperiod").notNull(),
	smsLanguage: tinyint().notNull(),
	smsFreeAmt: int().notNull(),
	smsUnpaidAmorts: tinyint().notNull(),
	codePn: text("code_pn").notNull(),
	codePn2: text("code_pn2").notNull(),
	codeAppform: text("code_appform").notNull(),
	approvalData: text("approval_data").notNull(),
	comakerLimit: tinyint().notNull(),
	creditscoreTemplateId: smallint("creditscore_template_id").notNull(),
	isOffbook: tinyint("is_offbook").default(0).notNull(),
},
(table) => [
	index("isEmployeeLoan").on(table.isEmployeeLoan),
	index("grouping").on(table.grouping),
	index("groupby").on(table.groupby),
	index("type").on(table.type),
]);

export const lendingLoanproductstouse = mysqlTable("lending_loanproductstouse", {
	branchid: smallint().notNull(),
	loanproductid: int().notNull(),
});

export const lendingLoanpurpose = mysqlTable("lending_loanpurpose", {
	loanpurposeid: mediumint().autoincrement().notNull(),
	name: varchar({ length: 200 }).notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingLoansecurities = mysqlTable("lending_loansecurities", {
	loansecurityid: mediumint().autoincrement().notNull(),
	name: varchar({ length: 200 }).notNull(),
	isSecured: tinyint().notNull(),
	collateralType: tinyint("collateral_type").notNull(),
	frpSecuritytag: tinyint("frp_securitytag").notNull(),
},
(table) => [
	index("isSecured").on(table.isSecured),
	index("collateral_type").on(table.collateralType),
	index("frp_securitytag").on(table.frpSecuritytag),
	index("isSecured_2").on(table.isSecured),
	index("collateral_type_2").on(table.collateralType),
	index("frp_securitytag_2").on(table.frpSecuritytag),
]);

export const lendingLoanstatus = mysqlTable("lending_loanstatus", {
	loanstatusid: tinyint().notNull(),
	loanstatusname: varchar({ length: 150 }).notNull(),
});

export const lendingLoanterms = mysqlTable("lending_loanterms", {
	range: int().notNull(),
});

export const lendingMisposting = mysqlTable("lending_misposting", {
	id: int().autoincrement().notNull(),
	transactionType: tinyint("transaction_type").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	oridold: bigint({ mode: "number" }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	justification: varchar({ length: 300 }).notNull(),
	status: tinyint().notNull(),
	isCancelled: tinyint("is_cancelled").notNull(),
	txnLog: varchar("txn_log", { length: 5000 }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("oridold").on(table.oridold),
	index("orid").on(table.orid),
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
	index("txn_log").on(table.txnLog),
	index("transaction_type").on(table.transactionType),
]);

export const lendingMispostingtemp = mysqlTable("lending_mispostingtemp", {
	transactionType: tinyint("transaction_type").notNull(),
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	justification: varchar({ length: 300 }).default('NULL'),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("transaction_type").on(table.transactionType),
]);

export const lendingMobileLoanapplication = mysqlTable("lending_mobile_loanapplication", {
	tempid: int().autoincrement().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	cpnumber: varchar({ length: 11 }).notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	termunit: tinyint().notNull(),
	term: smallint().notNull(),
	loanpurpose: varchar({ length: 200 }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	status: tinyint().notNull(),
});

export const lendingMoratorium = mysqlTable("lending_moratorium", {
	postingtime: datetime({ mode: 'string'}).notNull(),
	groupby: tinyint().notNull(),
	groupid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	startdate: date({ mode: 'string' }).notNull(),
	moratoriumdays: smallint().notNull(),
	postedbyid: mediumint().notNull(),
	approver1Id: mediumint().notNull(),
	approver2Id: mediumint().notNull(),
	approvetime: datetime({ mode: 'string'}).notNull(),
});

export const lendingMoratoriumtemp = mysqlTable("lending_moratoriumtemp", {
	moratoriumid: int().autoincrement().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	branchid: mediumint().notNull(),
	groupby: tinyint().notNull(),
	groupid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	startdate: date({ mode: 'string' }).notNull(),
	moratoriumdays: smallint().notNull(),
	postedbyid: mediumint().notNull(),
	approver1Id: mediumint().notNull(),
	approver2Id: mediumint().notNull(),
});

export const lendingOffice = mysqlTable("lending_office", {
	officeid: int().autoincrement().notNull(),
	officename: varchar({ length: 200 }).notNull(),
	branchid: smallint().notNull(),
	aoid: smallint().notNull(),
});

export const lendingPaymentdetails = mysqlTable("lending_paymentdetails", {
	paymentid: bigint({ mode: "number" }).notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	principalpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	interestpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	servicechargepmt: decimal({ precision: 10, scale: 2 }).notNull(),
	savingspmt: decimal({ precision: 10, scale: 2 }).notNull(),
	amort1Pmt: decimal({ precision: 10, scale: 2 }).notNull(),
	amort2Pmt: decimal({ precision: 10, scale: 2 }).notNull(),
	penaltypmt: decimal({ precision: 10, scale: 2 }).notNull(),
	pastdueinterestpmt: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
	index("paymentid").on(table.paymentid),
	index("pnid").on(table.pnid),
	index("amortizationnumber").on(table.amortnumber),
]);

export const lendingPaymentpriority = mysqlTable("lending_paymentpriority", {
	id: tinyint().notNull(),
	priority: tinyint().notNull(),
});

export const lendingPayments = mysqlTable("lending_payments", {
	paymentid: bigint({ mode: "number" }).autoincrement().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	paymentdate: date({ mode: 'string' }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	ornumber: char({ length: 20 }).notNull(),
	paymentmode: smallint().notNull(),
	paymentreference: varchar({ length: 50 }).notNull(),
	paymentamount: decimal({ precision: 10, scale: 2 }).notNull(),
	postedbyid: mediumint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	pnidIndex: bigint("pnid_index", { mode: "number" }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	nextdatedue: date({ mode: 'string' }).notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	loanstatusprevious: tinyint().notNull(),
	loanstatus: tinyint().notNull(),
	loanclassid: smallint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("paymentdate").on(table.paymentdate),
	index("ornumber").on(table.ornumber),
	index("paymentreference").on(table.paymentreference),
	index("orid").on(table.orid),
	index("paymentamount").on(table.paymentamount),
	index("loanbalance").on(table.loanbalance),
	index("postingtime").on(table.postingtime),
	index("pnid_index").on(table.pnidIndex),
]);

export const lendingPaymentsor = mysqlTable("lending_paymentsor", {
	orid: bigint({ mode: "number" }).autoincrement().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	clienttype: tinyint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	ornumber: char({ length: 20 }).notNull(),
	paymentmode: tinyint().notNull(),
	paymentreference: char({ length: 50 }).notNull(),
	glcode: int().notNull(),
	oramount: decimal({ precision: 12, scale: 2 }).notNull(),
	orstatus: tinyint().notNull(),
	tellerid: mediumint().notNull(),
	makerid: mediumint().notNull(),
	txnLog: varchar("txn_log", { length: 5000 }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("ornumber").on(table.ornumber),
	index("clientid").on(table.clientid),
	index("clienttype").on(table.clienttype),
	index("glcode").on(table.glcode),
	index("tellerid").on(table.tellerid),
	index("makerid").on(table.makerid),
	index("paymentreference").on(table.paymentreference),
	index("paymentmode").on(table.paymentmode),
	index("orstatus").on(table.orstatus),
]);

export const lendingPaymentTempdetails = mysqlTable("lending_payment_tempdetails", {
	orid: bigint({ mode: "number" }).notNull().references(() => lendingPaymentTempor.orid, { onDelete: "cascade", onUpdate: "restrict" } ),
	paymentamount: decimal({ precision: 12, scale: 2 }).notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	interestRecompute: tinyint().notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	autodebitSavingsid: bigint("autodebit_savingsid", { mode: "number" }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("savingsid").on(table.savingsid),
	index("policyid").on(table.policyid),
]);

export const lendingPaymentTempor = mysqlTable("lending_payment_tempor", {
	orid: bigint({ mode: "number" }).notNull(),
	orstatus: tinyint().default(0).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	systemdate: date({ mode: 'string' }).notNull(),
});

export const lendingPncorrection = mysqlTable("lending_pncorrection", {
	correctionid: int().autoincrement().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	correctionType: tinyint("correction_type").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateTransacted: date("date_transacted", { mode: 'string' }).notNull(),
	detailsBefore: varchar("details_before", { length: 30000 }).notNull(),
	detailsAfter: varchar("details_after", { length: 30000 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("clientid").on(table.clientid),
]);

export const lendingPrincipalsize = mysqlTable("lending_principalsize", {
	range: mediumint().notNull(),
});

export const lendingProvision = mysqlTable("lending_provision", {
	assessment: tinyint().notNull(),
	security: tinyint().notNull(),
	lower: smallint().notNull(),
	upper: smallint().notNull(),
	rate: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	aclClass: tinyint().notNull(),
});

export const lendingProvisionqualitative = mysqlTable("lending_provisionqualitative", {
	transid: int().autoincrement().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	provisionManual: decimal("provision_manual", { precision: 5, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const lendingReleasedelete = mysqlTable("lending_releasedelete", {
	releasedeleteid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: tinyint().notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	loanamount: decimal({ precision: 12, scale: 2 }).notNull(),
	reason: varchar({ length: 300 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("branchid").on(table.branchid),
	index("transdate").on(table.transdate),
	index("orid").on(table.orid),
	index("orid_2").on(table.orid),
	index("orid_3").on(table.orid),
	index("orid_4").on(table.orid),
]);

export const lendingReleasedeletetemp = mysqlTable("lending_releasedeletetemp", {
	pnid: bigint({ mode: "number" }).notNull(),
	branchid: tinyint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	loanamount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	systemdate: date({ mode: 'string' }).notNull(),
	reason: varchar({ length: 300 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const lendingRemittancedelete = mysqlTable("lending_remittancedelete", {
	branchid: smallint().notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	ornumber: bigint({ mode: "number" }).notNull(),
	clientname: char({ length: 50 }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	userid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	deletetime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deletesystemdate: date({ mode: 'string' }).notNull(),
	justification: varchar({ length: 300 }).default('NULL'),
});

export const lendingRemittancedeletetemp = mysqlTable("lending_remittancedeletetemp", {
	branchid: smallint().notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	justification: varchar({ length: 300 }).default('NULL'),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("orid").on(table.orid),
]);

export const lendingRemittancedeletetemp2 = mysqlTable("lending_remittancedeletetemp2", {
	orid: bigint({ mode: "number" }).notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
},
(table) => [
	index("orid").on(table.orid),
	index("pnid").on(table.pnid),
]);

export const lendingScrate = mysqlTable("lending_scrate", {
	loanproductid: mediumint().notNull(),
	lower: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	upper: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	scrate: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
]);

export const lendingTermunits = mysqlTable("lending_termunits", {
	termid: tinyint().notNull(),
	termname: varchar({ length: 75 }).notNull(),
});

export const misBug = mysqlTable("mis_bug", {
	reportid: int().autoincrement().notNull(),
	programmerid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datereported: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datefixed: date({ mode: 'string' }).notNull(),
	approver1Id: mediumint().notNull(),
	details: char({ length: 50 }).notNull(),
	measures: char({ length: 50 }).notNull(),
	status: tinyint().notNull(),
});

export const misPasswordresetlog = mysqlTable("mis_passwordresetlog", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	serverdate: date({ mode: 'string' }).notNull(),
	employeeid: mediumint().notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("serverdate").on(table.serverdate),
]);

export const misUserright = mysqlTable("mis_userright", {
	employeeid: mediumint().notNull(),
	userrightid: mediumint().notNull(),
	level1Access: tinyint().notNull(),
	level2Access: tinyint().notNull(),
	level3Access: tinyint().notNull(),
	id: int().autoincrement().notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("userrightid").on(table.userrightid),
]);

export const misUserrightdefault = mysqlTable("mis_userrightdefault", {
	positionid: mediumint().notNull(),
	userrightid: mediumint().notNull(),
	level1Access: tinyint().notNull(),
	level2Access: tinyint().notNull(),
	level3Access: tinyint().notNull(),
},
(table) => [
	index("userrightid").on(table.userrightid),
	index("positionid").on(table.positionid),
]);

export const misUserrightguide = mysqlTable("mis_userrightguide", {
	userrightid: int().notNull(),
	title: char({ length: 75 }).notNull(),
	parent: int().notNull(),
	level: tinyint().notNull(),
	level1Access: tinyint().notNull(),
	level2Access: tinyint().notNull(),
	level3Access: tinyint().notNull(),
	level1Note: char({ length: 255 }).notNull(),
	level2Note: char({ length: 255 }).notNull(),
	level3Note: char({ length: 255 }).notNull(),
},
(table) => [
	index("parent").on(table.parent),
]);

export const mobileAccountVerification = mysqlTable("mobile_account_verification", {
	id: int().autoincrement().notNull(),
	channel: tinyint().notNull(),
	processid: tinyint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	cpnumber: char({ length: 11 }).notNull(),
	cpnumberNew: char("cpnumber_new", { length: 11 }).notNull(),
	selfie1: longtext().notNull(),
	selfie2: longtext().notNull(),
	selfie3: longtext().notNull(),
	userpinKey: varchar("userpin_key", { length: 250 }).notNull(),
	userpinSalt: varchar("userpin_salt", { length: 250 }).notNull(),
	otp: varchar({ length: 6 }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	description: varchar({ length: 150 }).notNull(),
	statusid: tinyint().default(0),
	verifierid: mediumint().default(0),
	vDatetime: datetime("v_datetime", { mode: 'string'}).default('NULL'),
	approverid: mediumint().default(0),
	aDatetime: datetime("a_datetime", { mode: 'string'}).default('NULL'),
	branchid: smallint().default(0),
	isTemp: tinyint("is_temp").default(0),
});

export const mobileClientUsers = mysqlTable("mobile_client_users", {
	idmobileClientUsers: int("idmobile_client_users").autoincrement().notNull(),
	client1Id: bigint({ mode: "number" }).notNull(),
	cpnumber: varchar({ length: 11 }).notNull(),
	password: varchar({ length: 512 }).default('NULL'),
	status: tinyint().default(0),
	attempts: tinyint().notNull(),
	activitylog: datetime({ mode: 'string'}).notNull(),
	cpimei: text().default('NULL'),
	userpin: varchar({ length: 512 }).notNull(),
	questionid: smallint().notNull(),
	answer: varchar({ length: 250 }).notNull(),
},
(table) => [
	index("client1id").on(table.client1Id),
]);

export const mobileComworksEload = mysqlTable("mobile_comworks_eload", {
	id: int().autoincrement().notNull(),
	requestRefNo: varchar({ length: 75 }).notNull(),
	targetSubsAccount: varchar({ length: 15 }).notNull(),
	planCode: varchar({ length: 10 }).notNull(),
	retailerNewBalance: varchar({ length: 75 }).notNull(),
	respCode: varchar({ length: 4 }).notNull(),
	status: varchar({ length: 75 }).notNull(),
	statusDesc: varchar({ length: 50 }).notNull(),
	clientTransactionid: varchar("client_transactionid", { length: 100 }).notNull(),
	appname: varchar({ length: 100 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
});

export const mobileSecurityQuestions = mysqlTable("mobile_security_questions", {
	questionid: smallint().autoincrement().notNull(),
	name: text().notNull(),
});

export const mobileTransferDetails = mysqlTable("mobile_transfer_details", {
	id: int().autoincrement().notNull(),
	senderClientid: bigint("sender_clientid", { mode: "number" }).notNull().references(() => mobileClientUsers.client1Id, { onDelete: "cascade", onUpdate: "cascade" } ),
	receiverAccountnumber: varchar("receiver_accountnumber", { length: 75 }).notNull(),
	receiverAccountname: varchar("receiver_accountname", { length: 50 }).notNull(),
	receiverNickname: varchar("receiver_nickname", { length: 30 }).notNull(),
	receiverAddress: varchar("receiver_address", { length: 150 }).notNull(),
	bicfi: varchar({ length: 20 }).notNull(),
},
(table) => [
	index("sender_clientid").on(table.senderClientid),
]);

export const perpetualPaymentdetails = mysqlTable("perpetual_paymentdetails", {
	paymentid: bigint({ mode: "number" }).notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	insurancePremium: decimal("insurance_premium", { precision: 12, scale: 2 }).notNull(),
	insuranceCbu: decimal("insurance_cbu", { precision: 12, scale: 2 }).notNull(),
	insuranceCf: decimal("insurance_cf", { precision: 12, scale: 2 }).notNull(),
	insuranceSavings: decimal("insurance_savings", { precision: 12, scale: 2 }).notNull(),
});

export const pesonetBanks = mysqlTable("pesonet_banks", {
	bankid: int().autoincrement().notNull(),
	bicfi: varchar({ length: 20 }).notNull(),
	bankName: varchar("bank_name", { length: 150 }).notNull(),
	bankCode: varchar("bank_code", { length: 5 }).notNull(),
	headOfficeBrstn: varchar("head_office_brstn", { length: 15 }).notNull(),
});

export const pesonetFees = mysqlTable("pesonet_fees", {
	feeid: mediumint().autoincrement().notNull(),
	gatewaycode: varchar({ length: 25 }).notNull(),
	lower: decimal({ precision: 12, scale: 2 }).notNull(),
	upper: decimal({ precision: 12, scale: 2 }).notNull(),
	variablefee: decimal({ precision: 12, scale: 2 }).notNull(),
	fix: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const pesonetGateways = mysqlTable("pesonet_gateways", {
	id: smallint().autoincrement().notNull(),
	gatewaycode: varchar({ length: 25 }).notNull(),
	amountlimit: decimal({ precision: 12, scale: 2 }).notNull(),
	partnershare: decimal({ precision: 4, scale: 2 }).notNull(),
	fixfee: decimal({ precision: 6, scale: 2 }).notNull(),
	implementation: datetime({ mode: 'string'}).default('current_timestamp()').notNull(),
});

export const pesonetInwardtransactions = mysqlTable("pesonet_inwardtransactions", {
	id: int().autoincrement().notNull(),
	msgId: varchar("MsgId", { length: 100 }).notNull(),
	creDtTm: varchar("CreDtTm", { length: 13 }).notNull(),
	nbOfTxs: smallint("NbOfTxs").notNull(),
	ttlIntrBkSttlmAmtCcy: char("TtlIntrBkSttlmAmt_Ccy", { length: 5 }).notNull(),
	ttlIntrBkSttlmAmtValue: decimal("TtlIntrBkSttlmAmt_value", { precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	intrBkSttlmDt: date("IntrBkSttlmDt", { mode: 'string' }).notNull(),
	sttlmInfSttlmMtd: varchar("SttlmInf_SttlmMtd", { length: 15 }).notNull(),
	instgAgtBicfi: varchar("InstgAgt_BICFI", { length: 15 }).notNull(),
	instdAgtBicfi: varchar("InstdAgt_BICFI", { length: 15 }).notNull(),
	pmtIdEndToEndId: varchar("PmtId_EndToEndId", { length: 100 }).notNull(),
	pmtIdTxId: varchar("PmtId_TxId", { length: 100 }).notNull(),
	pmtTpInfPrtry: varchar("PmtTpInf_Prtry", { length: 10 }).notNull(),
	pmtTpInfCd: varchar("PmtTpInf_Cd", { length: 10 }).notNull(),
	intrBkSttlmAmtCcy: varchar("IntrBkSttlmAmt_Ccy", { length: 10 }).notNull(),
	intrBkSttlmAmtValue: decimal("IntrBkSttlmAmt_value", { precision: 12, scale: 2 }).notNull(),
	chrgBr: varchar("ChrgBr", { length: 10 }).notNull(),
	dbtrNm: varchar("Dbtr_Nm", { length: 150 }).notNull(),
	dbtrAddress1: varchar("Dbtr_address1", { length: 50 }).notNull(),
	dbtrAddress2: varchar("Dbtr_address2", { length: 50 }).notNull(),
	dbtrAddress3: varchar("Dbtr_address3", { length: 50 }).notNull(),
	dbtrAcctId: varchar("DbtrAcct_Id", { length: 50 }).notNull(),
	dbtrAcctBicfi: varchar("DbtrAcct_BICFI", { length: 15 }).notNull(),
	cdtrNm: varchar("Cdtr_Nm", { length: 150 }).notNull(),
	cdtrPstlAdr1: varchar("Cdtr_PstlAdr1", { length: 50 }).notNull(),
	cdtrPstlAdr2: varchar("Cdtr_PstlAdr2", { length: 50 }).notNull(),
	cdtrPstlAdr3: varchar("Cdtr_PstlAdr3", { length: 50 }).notNull(),
	cdtrAcctId: bigint("CdtrAcct_Id", { mode: "number" }).notNull(),
	cdtrAgtBicfi: varchar("CdtrAgt_BICFI", { length: 50 }).notNull(),
	instructions: varchar({ length: 33 }).notNull(),
	rfiReferenceNumber: varchar("rfi_reference_number", { length: 16 }).notNull(),
	ofiCustomerReferenceNumber: varchar("ofi_customer_reference_number", { length: 16 }).notNull(),
	rfiCustomerReferenceNumber: varchar("rfi_customer_reference_number", { length: 16 }).notNull(),
	statuscode: varchar({ length: 5 }).notNull(),
	makerid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	codeupdate: smallint().notNull(),
	savingstransactionid: bigint({ mode: "number" }).default(0),
});

export const pesonetOutwardtemp = mysqlTable("pesonet_outwardtemp", {
	tempid: bigint({ mode: "number" }).autoincrement().notNull(),
	ofirefnum: varchar({ length: 50 }).notNull(),
	rfirefnum: varchar({ length: 16 }).default('NULL'),
	oficustomerrefnum: varchar({ length: 16 }).default('NULL'),
	rficustomerrefnum: varchar({ length: 16 }).default('NULL'),
	currency: char({ length: 3 }).notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	fee: decimal({ precision: 6, scale: 2 }).notNull(),
	activitycode: varchar({ length: 16 }).notNull(),
	transcode: varchar({ length: 16 }).notNull(),
	senderbic: varchar({ length: 15 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	sendername: varchar({ length: 50 }).notNull(),
	senderaddress: varchar({ length: 50 }).notNull(),
	receiverbic: varchar({ length: 15 }).notNull(),
	receiversa: varchar({ length: 30 }).notNull(),
	receivername: varchar({ length: 50 }).notNull(),
	receiveraddress: varchar({ length: 50 }).notNull(),
	reference: varchar({ length: 33 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	makerid: mediumint().default(0),
	approverid: mediumint().default(0),
	branchid: smallint().default(0),
	channel: tinyint().notNull(),
});

export const pesonetOutwardtransactions = mysqlTable("pesonet_outwardtransactions", {
	transid: bigint({ mode: "number" }).autoincrement().notNull(),
	sequence: varchar({ length: 50 }).notNull(),
	ofirefnum: varchar({ length: 16 }).notNull(),
	rfirefnum: varchar({ length: 16 }).notNull(),
	oficustomerrefnum: varchar({ length: 16 }).notNull(),
	rficustomerrefnum: varchar({ length: 16 }).notNull(),
	currency: char({ length: 3 }).notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	fee: decimal({ precision: 6, scale: 2 }).notNull(),
	activitycode: varchar({ length: 16 }).notNull(),
	transcode: varchar({ length: 16 }).notNull(),
	senderbic: varchar({ length: 15 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	sendername: varchar({ length: 50 }).notNull(),
	senderaddress: varchar({ length: 50 }).notNull(),
	receiverbic: varchar({ length: 15 }).notNull(),
	receiversa: varchar({ length: 16 }).notNull(),
	receivername: varchar({ length: 50 }).notNull(),
	receiveraddress: varchar({ length: 50 }).notNull(),
	reference: varchar({ length: 33 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	branchid: smallint().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	status: varchar({ length: 15 }).notNull(),
	apiGatewayReferenceId: bigint("apiGateway_referenceId", { mode: "number" }).notNull(),
	pesonetReceiveDate: datetime("pesonet_receiveDate", { mode: 'string'}).notNull(),
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	channel: tinyint().notNull(),
	updateStatuscode: varchar("update_statuscode", { length: 5 }).default('NULL'),
	updateInformation: varchar("update_information", { length: 75 }).notNull(),
	updateApiGatewayReferenceId: bigint("update_apiGateway_referenceId", { mode: "number" }).notNull(),
	creditbackSavingstransactionid: bigint("creditback_savingstransactionid", { mode: "number" }).default(0),
});

export const regulationReports = mysqlTable("regulation_reports", {
	report: varchar({ length: 25 }).notNull(),
	glAccounts: varchar("gl_accounts", { length: 10000 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	cutoffdate: date({ mode: 'string' }).notNull(),
	glData: varchar("gl_data", { length: 10000 }).notNull(),
	slData: varchar("sl_data", { length: 10000 }).notNull(),
});

export const rmCategory = mysqlTable("rm_category", {
	categoryid: int().notNull(),
	categoryname: char({ length: 150 }).notNull(),
	parent: int().notNull(),
	level: tinyint().notNull(),
},
(table) => [
	index("parent").on(table.parent),
]);

export const rmConcerns = mysqlTable("rm_concerns", {
	concernid: int().autoincrement().notNull(),
	branchid: mediumint().notNull(),
	concernType: tinyint("concern_type").notNull(),
	concernChannel: tinyint("concern_channel").notNull(),
	timeReported: datetime("time_reported", { mode: 'string'}).notNull(),
	timeOccured: datetime("time_occured", { mode: 'string'}).notNull(),
	timeResolved: datetime("time_resolved", { mode: 'string'}).default('NULL'),
	reporterName: varchar("reporter_name", { length: 50 }).notNull(),
	reporterCpnumber: char("reporter_cpnumber", { length: 11 }).notNull(),
	concernedName: varchar("concerned_name", { length: 50 }).notNull(),
	concernedCpnumber: char("concerned_cpnumber", { length: 11 }).notNull(),
	particulars: varchar({ length: 500 }).notNull(),
	categoryid: char({ length: 4 }).notNull(),
	action: tinyint().notNull(),
	actionMaker: varchar("action_maker", { length: 500 }).notNull(),
	actionEscalator: varchar("action_escalator", { length: 500 }).notNull(),
	makerid: mediumint().notNull(),
	escalatorid: mediumint().notNull(),
	concernStatus: tinyint("concern_status").notNull(),
	conductid: tinyint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("makerid").on(table.makerid),
	index("escalatorid").on(table.escalatorid),
	index("concern_status").on(table.concernStatus),
	index("postingtime").on(table.timeReported),
]);

export const rmConcernsettings = mysqlTable("rm_concernsettings", {
	name: char({ length: 25 }).notNull(),
	data: varchar({ length: 50000 }).notNull(),
});

export const rmDiary = mysqlTable("rm_diary", {
	diaryid: int().autoincrement().notNull(),
	postingTime: datetime({ mode: 'string'}).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	concern: tinyint().notNull(),
	concernid: bigint({ mode: "number" }).notNull(),
	entry: varchar({ length: 1000 }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("postingTime").on(table.postingTime),
	index("clientid").on(table.clientid),
]);

export const rmEvent = mysqlTable("rm_event", {
	eventid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateReported: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateOccuredFrom: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateOccuredTo: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateDiscovered: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	risklevel: tinyint().notNull(),
	categoryid: mediumint().notNull(),
	eventdetails: text().notNull(),
	rootcause: varchar({ length: 500 }).notNull(),
	actiontaken: varchar({ length: 500 }).notNull(),
	recurrence: tinyint().notNull(),
	businessimpact: tinyint().notNull(),
	lossamount: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateLossBooking: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateTargetResolution: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateResolved: date({ mode: 'string' }).notNull(),
	recoverability: tinyint().notNull(),
	reporterid: mediumint().notNull(),
	endorserid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateendorsed: date({ mode: 'string' }).notNull(),
	verifierid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateverify: date({ mode: 'string' }).notNull(),
});

export const ropaDetails = mysqlTable("ropa_details", {
	ropaid: int().autoincrement().notNull(),
	branchid: char({ length: 8 }).notNull(),
	ropaNumber: varchar({ length: 100 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	collateralid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateofcos: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateofcosa: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateofconsolidation: date({ mode: 'string' }).notNull(),
	cgtamount: decimal({ precision: 12, scale: 2 }).notNull(),
	dstamount: decimal({ precision: 12, scale: 2 }).notNull(),
	air: decimal({ precision: 12, scale: 2 }).notNull(),
	acl: decimal({ precision: 12, scale: 2 }).notNull(),
	appraisedvalueLand: decimal({ precision: 12, scale: 2 }).notNull(),
	appraisedvalueBuilding: decimal({ precision: 12, scale: 2 }).notNull(),
	bookvalue: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateappraised: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	taxpaymentdate: date({ mode: 'string' }).notNull(),
	sellingprice: decimal({ precision: 12, scale: 2 }).notNull(),
	ropaimage: varchar({ length: 100 }).notNull(),
	consolidated: int().notNull(),
});

export const ropaLoanbalancetemp = mysqlTable("ropa_loanbalancetemp", {
	tempid: int().autoincrement().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	previousloanstatus: tinyint().notNull(),
	groupid: int().notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const ropaSalespaymentdetails = mysqlTable("ropa_salespaymentdetails", {
	orid: bigint({ mode: "number" }).autoincrement().notNull(),
	ropaid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datesold: date({ mode: 'string' }).notNull(),
	ornumber: char({ length: 20 }).notNull(),
	buyer: varchar({ length: 100 }).notNull(),
	otherexpenses: decimal({ precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("ornumber").on(table.ornumber),
]);

export const savingsAccounts = mysqlTable("savings_accounts", {
	savingsid: bigint({ mode: "number" }).notNull(),
	savingsidPreviousCbs: varchar("savingsid_previous_cbs", { length: 50 }).default('NULL'),
	accountname: char({ length: 150 }).notNull(),
	branchid: smallint().notNull(),
	type: tinyint().notNull(),
	corpclientid: bigint({ mode: "number" }).notNull(),
	client1Id: bigint({ mode: "number" }).notNull(),
	client2Id: bigint({ mode: "number" }).notNull(),
	client3Id: bigint({ mode: "number" }).notNull(),
	client4Id: bigint({ mode: "number" }).notNull(),
	groupid: mediumint().notNull(),
	productid: smallint().notNull(),
	productidOrig: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	opendate: date({ mode: 'string' }).notNull(),
	tellerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	closedate: date({ mode: 'string' }).notNull(),
	accountstatusprev: tinyint().notNull(),
	accountstatus: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	intcreditdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	previoustransdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	latesttransdate: date({ mode: 'string' }).notNull(),
	previousbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	previousbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	grossinterest: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	netinterest: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	note1: char({ length: 250 }).notNull(),
	note2: char({ length: 100 }).notNull(),
	holdout: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	adb: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	isWtaxExempt: char("is_wtax_exempt", { length: 1 }).notNull(),
	isFrozen: char("is_frozen", { length: 1 }).notNull(),
	linepassbook: tinyint().notNull(),
	printedpassbook: bigint({ mode: "number" }).notNull(),
	lineledger: tinyint().notNull(),
	printedledger: bigint({ mode: "number" }).notNull(),
	hash: char({ length: 32 }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	makerid: mediumint().notNull(),
	solicitorid: mediumint().notNull(),
	openAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	fromMobile: tinyint("from_mobile").default(0).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("corpclientid").on(table.corpclientid),
	index("client1id").on(table.client1Id),
	index("client2id").on(table.client2Id),
	index("client3id").on(table.client3Id),
	index("client4id").on(table.client4Id),
	index("currentbalance1").on(table.currentbalance1),
	index("currentbalance2").on(table.currentbalance2),
	index("netinterest").on(table.netinterest),
	index("note1").on(table.note1),
	index("productid").on(table.productid),
	index("latesttransdate").on(table.latesttransdate),
	index("productidOrig").on(table.productidOrig),
	index("savingsid_previous_cbs").on(table.savingsidPreviousCbs),
]);

export const savingsAccountsautodebit = mysqlTable("savings_accountsautodebit", {
	savingsid: bigint({ mode: "number" }).notNull(),
	savingsidAutodebit: bigint("savingsid_autodebit", { mode: "number" }).notNull(),
},
(table) => [
	index("savingsid_autodebit").on(table.savingsidAutodebit),
]);

export const savingsAccountstemp = mysqlTable("savings_accountstemp", {
	tempid: int().autoincrement().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	branchid: smallint().notNull(),
	type: tinyint().notNull(),
	corpclientid: bigint({ mode: "number" }).notNull(),
	client1Id: bigint({ mode: "number" }).notNull(),
	client2Id: bigint({ mode: "number" }).notNull(),
	client3Id: bigint({ mode: "number" }).notNull(),
	client4Id: bigint({ mode: "number" }).notNull(),
	productid: smallint().notNull(),
	savingscategory: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	opendate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	latesttransdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	intcreditdate: date({ mode: 'string' }).notNull(),
	note1: char({ length: 250 }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	specialrate: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	aggregatorid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	renewaloption: tinyint().notNull(),
	accountlinkid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	ssadate: date({ mode: 'string' }).notNull(),
	ssaterm: smallint().notNull(),
	ssatermOrig: smallint("ssaterm_orig").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	ssamaturity: date({ mode: 'string' }).notNull(),
	ssarate: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	ssarateBefore: decimal("ssarate_before", { precision: 5, scale: 3, unsigned: true }).notNull(),
	ssarateAfter: decimal("ssarate_after", { precision: 5, scale: 3, unsigned: true }).notNull(),
	autodebitsavingsid: bigint({ mode: "number" }).notNull(),
	solicitorid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("corpclientid").on(table.corpclientid),
	index("client1id").on(table.client1Id),
	index("client2id").on(table.client2Id),
	index("client3id").on(table.client3Id),
	index("client4id").on(table.client4Id),
	index("savingsid").on(table.savingsid),
]);

export const savingsBracketbalance = mysqlTable("savings_bracketbalance", {
	lower: decimal({ unsigned: true }).notNull(),
	upper: decimal({ unsigned: true }).notNull(),
});

export const savingsBracketrate = mysqlTable("savings_bracketrate", {
	bracket: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
});

export const savingsCertificateLetter = mysqlTable("savings_certificate_letter", {
	savingscertificateid: smallint().notNull(),
	code1: longtext().notNull(),
});

export const savingsChanges = mysqlTable("savings_changes", {
	changeId: int("change_id").autoincrement().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	changeType: char("change_type", { length: 1 }).notNull(),
	changeDetails: varchar("change_details", { length: 25000 }).notNull(),
	makerid: varchar({ length: 6 }).notNull(),
	approverid: varchar({ length: 6 }).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("makerid").on(table.makerid),
]);

export const savingsCheckdeptemp = mysqlTable("savings_checkdeptemp", {
	savingsid: bigint({ mode: "number" }).notNull(),
	checktype: tinyint().notNull(),
	checkdetails: varchar({ length: 34 }).notNull(),
	checkamount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	clearingdays: tinyint().notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
]);

export const savingsChecksforceclear = mysqlTable("savings_checksforceclear", {
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	systemdate: date({ mode: 'string' }).notNull(),
	daystoclear: tinyint().notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const savingsChecksonfloat = mysqlTable("savings_checksonfloat", {
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	branchid: smallint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transactiondate: date({ mode: 'string' }).notNull(),
	transaction: tinyint().notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	checktype: tinyint().notNull(),
	reference: varchar({ length: 30 }).notNull(),
	checkNumber: varchar("check_number", { length: 20 }).notNull(),
	clearingdays: tinyint().notNull(),
	daystoclear: tinyint().notNull(),
	returned: tinyint().notNull(),
	forceclearmakerid: mediumint().notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("returned").on(table.returned),
	index("branchid").on(table.branchid),
	index("reference").on(table.reference),
	index("check_number").on(table.checkNumber),
]);

export const savingsClearingdays = mysqlTable("savings_clearingdays", {
	id: tinyint().notNull(),
	name: char({ length: 15 }).notNull(),
	clearingdays: tinyint().notNull(),
});

export const savingsDormantLetter = mysqlTable("savings_dormant_letter", {
	savingsproductid: smallint().notNull(),
	code1: longtext().notNull(),
});

export const savingsErrorcorrect = mysqlTable("savings_errorcorrect", {
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	justification: varchar({ length: 300 }).default('NULL'),
	approverid: mediumint().notNull(),
},
(table) => [
	index("approverid").on(table.approverid),
]);

export const savingsErrorcorrectlink = mysqlTable("savings_errorcorrectlink", {
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	ecsavingstransactionid: bigint({ mode: "number" }).notNull(),
},
(table) => [
	index("ecsavingstransactionid").on(table.ecsavingstransactionid),
]);

export const savingsErrorcorrecttemp = mysqlTable("savings_errorcorrecttemp", {
	tempid: int().autoincrement().notNull(),
	branchid: smallint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	transactionid: bigint({ mode: "number" }).notNull(),
	amount: decimal({ precision: 16, scale: 2, unsigned: true }).notNull(),
	justification: varchar({ length: 300 }).default('NULL'),
	tellerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("transactionid").on(table.transactionid),
]);

export const savingsInterestrates = mysqlTable("savings_interestrates", {
	productid: smallint().notNull(),
	lower: decimal({ precision: 16, scale: 2, unsigned: true }).notNull(),
	upper: decimal({ precision: 16, scale: 2, unsigned: true }).notNull(),
	rate: decimal({ precision: 6, scale: 4, unsigned: true }).notNull(),
},
(table) => [
	index("productid").on(table.productid),
]);

export const savingsMemoglcodes = mysqlTable("savings_memoglcodes", {
	savingstransactionid: bigint({ mode: "number" }).notNull().references(() => savingsTransactions.savingstransactionid, { onDelete: "cascade", onUpdate: "cascade" } ),
	glcode: int().notNull().references(() => acctngGlaccounts.glCode, { onDelete: "cascade", onUpdate: "cascade" } ),
});

export const savingsProducts = mysqlTable("savings_products", {
	productid: mediumint().autoincrement().notNull(),
	productname: char({ length: 30 }).notNull(),
	productcode: char({ length: 5 }).notNull(),
	savingscategory: tinyint().notNull(),
	savingsType: tinyint().notNull(),
	ssaallownoncash: tinyint().notNull(),
	isTd: tinyint().notNull(),
	tdDsTexpenseGlcode: int().notNull(),
	tdDsTpayableGlcode: int().notNull(),
	daysinayear: smallint().notNull(),
	interestcrediting: smallint().notNull(),
	interestcreditingbasis: tinyint().notNull(),
	closeonzerobalance: tinyint().notNull(),
	daysinactive: smallint().default(0),
	printvalidation: tinyint().notNull(),
	printpassbook: tinyint().notNull(),
	balancetoearn: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	balancemin: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	balancemincharge: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	balanceminchargeglcode: int().notNull(),
	chargegraceperiod: smallint().notNull(),
	balancetoearn2: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	balancemin2: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	balancemincharge2: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	balanceminchargeglcode2: int().notNull(),
	chargegraceperiod2: smallint().notNull(),
	closeaccountfee: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	closeaccountfeeglcode: int().notNull(),
	closeaccountfee2: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	closeaccountfeeglcode2: int().notNull(),
	withdrawalLimit1: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	withdrawalLimit2: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	withdrawalLimit3: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	withdrawalLimit4: decimal({ precision: 12, scale: 2 }).notNull(),
	withdrawalLimit5: decimal({ precision: 12, scale: 2 }).notNull(),
	withdrawalLimit6: decimal({ precision: 12, scale: 2 }).notNull(),
	rateBracket1: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	rateBracket2: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	rateBracket3: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	rateBracket4: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	rate1: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	rate2: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	rate3: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	rate4: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	rate5: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	isWtaxExempt: char("is_wtax_exempt", { length: 1 }).notNull(),
	glcode: int().notNull(),
	ieglcode: int().notNull(),
	ismicro: tinyint().notNull(),
	smsLanguage: tinyint().notNull(),
	smsFreeAdb: int().notNull(),
	smsShowbalance: tinyint("sms_showbalance").notNull(),
	dormantglcode: int().notNull(),
	dormancyP: smallint().notNull(),
	dormancychargeP: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	dormancychargeglcodeP: int().notNull(),
	dormancyNp: smallint().notNull(),
	dormancychargeNp: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	dormancychargeglcodeNp: int().notNull(),
	dormantdebitoption: tinyint().notNull(),
	status: tinyint().notNull(),
	requireautodebitaccount: tinyint().notNull(),
	bookletCostPer: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	bookletCostCom: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	bookletcostglcode: int().notNull(),
	clearingchargeglcode: int().notNull(),
	chargedaif1: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaif2: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaifper: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaifovernight: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaud1: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaud2: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaudper: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedaudovernight: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargeholdout: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargespoclearing: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargespoposting: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargedeficient: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargealteration: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargeinvaliddate: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	chargeinvalidsignature: decimal({ precision: 8, scale: 2, unsigned: true }).notNull(),
	accountnameX: smallint("accountname_x").notNull(),
	accountnameY: smallint("accountname_y").notNull(),
	savingsidX: smallint("savingsid_x").notNull(),
	savingsidY: smallint("savingsid_y").notNull(),
	barcodeX: smallint("barcode_x").notNull(),
	barcodeY: smallint("barcode_y").notNull(),
	branchnameX: smallint("branchname_x").notNull(),
	branchnameY: smallint("branchname_y").notNull(),
	productnameX: smallint("productname_x").notNull(),
	productnameY: smallint("productname_y").notNull(),
	cpnoX: smallint("cpno_x").notNull(),
	cpnoY: smallint("cpno_y").notNull(),
	balFwdX: smallint("balFwd_x").notNull(),
	balFwdY: smallint("balFwd_y").notNull(),
	referenceMaxchar: smallint("reference_maxchar").notNull(),
	yTopstart: smallint("y_topstart").notNull(),
	totallines: smallint().notNull(),
	skiplinestart: smallint().notNull(),
	skiplineend: smallint().notNull(),
	charmask: char({ length: 1 }).notNull(),
	transchar: tinyint().notNull(),
	balancechar: tinyint().notNull(),
	xDate: smallint("x_date").notNull(),
	xMaturity: smallint("x_maturity").notNull(),
	xDebit: smallint("x_debit").notNull(),
	xCredit: smallint("x_credit").notNull(),
	xBalance1: smallint("x_balance1").notNull(),
	xBalance2: smallint("x_balance2").notNull(),
	xTranscode: smallint("x_transcode").notNull(),
	xUser: smallint("x_user").notNull(),
	deposit1X: smallint("deposit1_x").notNull(),
	deposit1Y: smallint("deposit1_y").notNull(),
	deposit2X: smallint("deposit2_x").notNull(),
	deposit2Y: smallint("deposit2_y").notNull(),
	withdrawalX: smallint("withdrawal_x").notNull(),
	withdrawalY: smallint("withdrawal_y").notNull(),
	chkencashX: smallint("chkencash_x").notNull(),
	chkencashY: smallint("chkencash_y").notNull(),
	cmX: smallint("cm_x").notNull(),
	cmY: smallint("cm_y").notNull(),
	dmX: smallint("dm_x").notNull(),
	dmY: smallint("dm_y").notNull(),
	rcX: smallint("rc_x").notNull(),
	rcY: smallint("rc_y").notNull(),
	bcX: smallint("bc_x").notNull(),
	bcY: smallint("bc_y").notNull(),
	ercX: smallint("erc_x").default(0),
	ercY: smallint("erc_y").default(0),
	checkClearedReflect: tinyint().notNull(),
	dormantLetter: text().notNull(),
	tyLetter: text().notNull(),
},
(table) => [
	index("savingscategory").on(table.savingscategory),
]);

export const savingsProductstouse = mysqlTable("savings_productstouse", {
	branchid: smallint().notNull(),
	productid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("productid").on(table.productid),
]);

export const savingsSsaaggregator = mysqlTable("savings_ssaaggregator", {
	clientid: bigint({ mode: "number" }).notNull(),
	branchid: smallint().notNull(),
	specialrateAggregate: decimal("specialrate_aggregate", { precision: 5, scale: 3, unsigned: true }).notNull(),
});

export const savingsSsaaggregatorhistory = mysqlTable("savings_ssaaggregatorhistory", {
	historyid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	specialrateAggregate: decimal("specialrate_aggregate", { precision: 5, scale: 3, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const savingsSsaplacement = mysqlTable("savings_ssaplacement", {
	savingsid: bigint({ mode: "number" }).notNull(),
	aggregatorid: bigint({ mode: "number" }).notNull(),
	renewaloption: tinyint().notNull(),
	accountlinkid: bigint({ mode: "number" }).notNull(),
	specialrate: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
});

export const savingsSsaplacementdetails = mysqlTable("savings_ssaplacementdetails", {
	placementid: int().autoincrement().notNull(),
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	interestSavingstransactionid: bigint({ mode: "number" }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	renewaloption: tinyint().notNull(),
	amount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	ssadate: date({ mode: 'string' }).notNull(),
	ssaterm: smallint().notNull(),
	ssatermOrig: smallint("ssaterm_orig").notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	ssamaturity: date({ mode: 'string' }).notNull(),
	specialrate: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	specialrateAggregate: decimal("specialrate_aggregate", { precision: 5, scale: 3, unsigned: true }).notNull(),
	ssarate: decimal({ precision: 5, scale: 3 }).notNull(),
	ssarateBefore: decimal("ssarate_before", { precision: 5, scale: 3 }).notNull(),
	ssarateAfter: decimal("ssarate_after", { precision: 5, scale: 3 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateTerminated: date("date_terminated", { mode: 'string' }).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("ssadate").on(table.ssadate),
	index("ssarate").on(table.ssarate),
	index("savingstransactionid").on(table.savingstransactionid),
]);

export const savingsSsaplacementhistory = mysqlTable("savings_ssaplacementhistory", {
	historyid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	renewaloption: tinyint().notNull(),
	accountlinkid: bigint({ mode: "number" }).notNull(),
	specialrate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("makerid").on(table.makerid),
]);

export const savingsSsarate1 = mysqlTable("savings_ssarate1", {
	termid: int().notNull(),
	productid: smallint().notNull(),
	lower: smallint().notNull(),
	upper: smallint().notNull(),
},
(table) => [
	index("termid").on(table.termid),
]);

export const savingsSsarate2 = mysqlTable("savings_ssarate2", {
	rateid: int().autoincrement().notNull(),
	productid: smallint().notNull(),
	indexid: smallint().notNull(),
	termid: int().notNull(),
	lower: decimal({ precision: 12, scale: 2 }).notNull(),
	upper: decimal({ precision: 12, scale: 2 }).notNull(),
	ssarate: decimal({ precision: 5, scale: 3, unsigned: true }).notNull(),
	ssarateHalf1: decimal("ssarate_half1", { precision: 5, scale: 3, unsigned: true }).notNull(),
	ssarateBefore: decimal("ssarate_before", { precision: 5, scale: 3, unsigned: true }).notNull(),
	ssarateAfter: decimal("ssarate_after", { precision: 5, scale: 3, unsigned: true }).notNull(),
});

export const savingsSsaRecompute = mysqlTable("savings_ssa_recompute", {
	transid: int().autoincrement().notNull(),
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	method: tinyint().notNull(),
	transactor: varchar({ length: 300 }).notNull(),
	details: varchar({ length: 25000 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("aggregatorid").on(table.transactor),
	index("makerid").on(table.makerid),
	index("approverid").on(table.approverid),
	index("branchid").on(table.branchid),
	index("systemdate").on(table.transdate),
]);

export const savingsTransactioncodes = mysqlTable("savings_transactioncodes", {
	transaction: smallint().notNull(),
	listorder: decimal({ precision: 4, scale: 1 }).notNull(),
	multiplier: tinyint().notNull(),
	name: char({ length: 50 }).notNull(),
	code: char({ length: 4 }).notNull(),
	shortcut: char({ length: 3 }).notNull(),
});

export const savingsTransactions = mysqlTable("savings_transactions", {
	savingstransactionid: bigint({ mode: "number" }).autoincrement().notNull(),
	branchid: smallint().notNull(),
	branchidTrans: smallint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	savingsid2: bigint({ mode: "number" }).notNull(),
	productid: smallint().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transactiondate: date({ mode: 'string' }).notNull(),
	transaction: smallint().notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	checktype: tinyint().notNull(),
	reference: varchar({ length: 100 }).notNull(),
	currentbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	grossinterest: decimal({ precision: 12, scale: 2 }).notNull(),
	netinterest: decimal({ precision: 12, scale: 2 }).notNull(),
	errorcorrected: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	latesttransdate: date({ mode: 'string' }).notNull(),
	accountstatusprev: tinyint().notNull(),
	accountstatus: tinyint().notNull(),
	postedbyid: mediumint().notNull(),
},
(table) => [
	index("transactiondate").on(table.transactiondate),
	index("currentbalance1").on(table.currentbalance1),
	index("currentbalance2").on(table.currentbalance2),
	index("postingtime").on(table.postingtime),
	index("savingsid").on(table.savingsid),
	index("branchid").on(table.branchid),
	index("branchidTrans").on(table.branchidTrans),
	index("transaction").on(table.transaction),
	index("productid").on(table.productid),
]);

export const savingsTransactionsWtax = mysqlTable("savings_transactions_wtax", {
	savingstransactionid: bigint({ mode: "number" }).notNull().references(() => savingsTransactions.savingstransactionid, { onDelete: "cascade", onUpdate: "cascade" } ),
	wtax: decimal({ precision: 12, scale: 2 }).default('NULL'),
});

export const savingsTransapproval = mysqlTable("savings_transapproval", {
	savingstransactionid: bigint({ mode: "number" }).notNull(),
	limitAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	approvalType: tinyint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("approverid").on(table.approverid),
]);

export const savingsTransapprovaltemp = mysqlTable("savings_transapprovaltemp", {
	tempid: int().autoincrement().notNull(),
	approvalType: tinyint().notNull(),
	branchid: smallint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	transaction: smallint().notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	checktype: tinyint().notNull(),
	glcode: int().notNull(),
	reference: varchar({ length: 100 }).notNull(),
	ssatermOrig: smallint("ssaterm_orig").notNull(),
	tellerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("branchid").on(table.branchid),
]);

export const savingsType = mysqlTable("savings_type", {
	productid: int().notNull(),
	type: tinyint().notNull(),
},
(table) => [
	index("productid").on(table.productid),
	index("type").on(table.type),
]);

export const savingsUploads = mysqlTable("savings_uploads", {
	uploadId: int("upload_id").autoincrement().notNull(),
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateUploaded: date("date_uploaded", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateApproved: date("date_approved", { mode: 'string' }).notNull(),
	reference: varchar({ length: 100 }).notNull(),
	glcode: int().notNull(),
	transaction: smallint().notNull(),
	transcount: smallint().notNull(),
	postamount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	arrayData: mediumtext("array_data").notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("approverid").on(table.approverid),
	index("makerid").on(table.makerid),
	index("date_uploaded").on(table.dateUploaded),
	index("date_approved").on(table.dateApproved),
]);

export const scrAmortdetails = mysqlTable("scr_amortdetails", {
	scrid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedue: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedueOrig: date("datedue_orig", { mode: 'string' }).notNull(),
	principal: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	presentvalue: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datepaid: date({ mode: 'string' }).notNull(),
});

export const scrDiscount = mysqlTable("scr_discount", {
	discountid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	discountinterest: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountservicecharge: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountsavings: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountamort1: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountamort2: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountpenalty: decimal({ precision: 10, scale: 2 }).default('NULL'),
	discountpastdueinterest: decimal({ precision: 10, scale: 2 }).default('NULL'),
	justification: varchar({ length: 250 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("approverid").on(table.approverid),
]);

export const scrDiscountamortization = mysqlTable("scr_discountamortization", {
	amortnumber: int().notNull(),
	scrid: bigint({ mode: "number" }).notNull(),
	begBalance: decimal({ precision: 12, scale: 2 }).notNull(),
	discountAmort: decimal({ precision: 12, scale: 2 }).notNull(),
	endBalance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const scrLoandetails = mysqlTable("scr_loandetails", {
	scrid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	ropaid: bigint({ mode: "number" }).notNull(),
	spouseid: int().notNull(),
	scrid2: char({ length: 25 }).notNull(),
	branchid: smallint().notNull(),
	settingid: smallint().notNull(),
	termunit: tinyint().notNull(),
	term: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateApplied: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity2: date({ mode: 'string' }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interestrate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	discountInterest: double().notNull(),
	sellingprice: decimal({ precision: 12, scale: 2 }).notNull(),
	downpaymenttype: tinyint().notNull(),
	downpaymentrate: int().notNull(),
	downpayment: decimal({ precision: 12, scale: 2 }).notNull(),
	interestcomputation: tinyint().notNull(),
	irr: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	eir: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	eirInt: decimal("eir_int", { precision: 7, scale: 5, unsigned: true }).notNull(),
	eirSc: decimal("eir_sc", { precision: 7, scale: 5, unsigned: true }).notNull(),
	interestcomputationbasis: tinyint().notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	proceeds: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	proceedstype: tinyint().notNull(),
	proceedsreference: char({ length: 25 }).notNull(),
	creditorid: smallint().notNull(),
	workersemployed: smallint().notNull(),
	industryid: smallint().notNull(),
	loanclassid: smallint().notNull(),
	loanpurposeid: smallint().notNull(),
	loanpurpose: char({ length: 200 }).notNull(),
	securityid: smallint().notNull(),
	assetsizeid: tinyint().notNull(),
	clientgroupid: smallint().notNull(),
	restructuredtag: tinyint().notNull(),
	restructuredscrid: bigint({ mode: "number" }).notNull(),
	restructuredCount: tinyint().notNull(),
	autodebitAmort: tinyint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	amort2Destination: tinyint().notNull(),
	loancycle: smallint().notNull(),
	loanofficerid: mediumint().notNull(),
	solicitortype: tinyint().notNull(),
	solicitorid: int().notNull(),
	postedbyid: mediumint().notNull(),
	tellerid: mediumint().notNull(),
	loanstatus: tinyint().notNull(),
	loanstatusstatic: tinyint().notNull(),
	loanstatusUpdate: tinyint().notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	nextdatedue: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	lasttransdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datepaidOrig: date({ mode: 'string' }).notNull(),
	approverid: mediumint().notNull(),
	lettercount: tinyint().notNull(),
	promptPayment: decimal({ precision: 4, scale: 1, unsigned: true }).notNull(),
});

export const scrLoandetailstemp = mysqlTable("scr_loandetailstemp", {
	scrid: bigint({ mode: "number" }).autoincrement().notNull(),
	clientid: int().notNull(),
	ropaid: int().notNull(),
	scrid2: char({ length: 25 }).notNull(),
	branchid: smallint().notNull(),
	settingid: smallint().notNull(),
	termunit: tinyint().notNull(),
	term: smallint().notNull(),
	termApplied: smallint().notNull(),
	termDaysFixed: tinyint().notNull(),
	amortdayoption1: tinyint().notNull(),
	amortdayoption2: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity2: date({ mode: 'string' }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	amountApplied: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	sellingprice: decimal({ precision: 12, scale: 2 }).notNull(),
	downpaymenttype: tinyint().notNull(),
	downpaymentrate: int().notNull(),
	interestrate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	discountInterest: double().notNull(),
	interestcomputation: tinyint().notNull(),
	interestcomputationbasis: tinyint().notNull(),
	diminishingequalprincipal: tinyint().notNull(),
	interest: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	servicechargediscountedflex: char({ length: 25 }).notNull(),
	scamortvalue: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	savingsamortized: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1Value: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2Value: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	principalInterval: tinyint().notNull(),
	principalIntervalAdjustment: tinyint().notNull(),
	principalIntervalIrregular: char({ length: 25 }).notNull(),
	amortFixed: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	partialInt: tinyint().notNull(),
	partialSc: tinyint().notNull(),
	proceeds: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	proceedstype: tinyint().notNull(),
	proceedsreference: char({ length: 25 }).notNull(),
	creditorid: smallint().notNull(),
	workersemployed: smallint().notNull(),
	industryid: smallint().notNull(),
	loanclassid: smallint().notNull(),
	loanpurposeid: smallint().notNull(),
	loanpurpose: char({ length: 200 }).notNull(),
	securityid: smallint().notNull(),
	assetsizeid: tinyint().notNull(),
	clientgroupid: smallint().notNull(),
	restructuredtag: tinyint().notNull(),
	restructuredscrid: bigint({ mode: "number" }).notNull(),
	restructuredCount: tinyint().notNull(),
	autodebitAmort: tinyint().notNull(),
	loanstatusstatic: tinyint().notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	loancycle: smallint().notNull(),
	loanofficerid: mediumint().notNull(),
	companyrepid: int().notNull(),
	solicitortype: tinyint().notNull(),
	solicitorid: int().notNull(),
	postedbyid: mediumint().notNull(),
	tellerid: mediumint().notNull(),
	provisionManual: decimal("provision_manual", { precision: 4, scale: 2, unsigned: true }).notNull(),
	amortdetailstemp: text().notNull(),
	isapproved: tinyint().notNull(),
	approverid: mediumint().notNull(),
	approverid2: mediumint().notNull(),
	interestdiscounted: decimal({ precision: 10, scale: 2 }).default('0.00'),
	servicechargediscounted: decimal({ precision: 10, scale: 2 }).default('0.00'),
	insurance: decimal({ precision: 10, scale: 2 }).default('0.00'),
	savingsdiscounted: decimal({ precision: 10, scale: 2 }).default('0.00'),
});

export const scrMisposting = mysqlTable("scr_misposting", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	oridold: bigint({ mode: "number" }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const scrMispostingtemp = mysqlTable("scr_mispostingtemp", {
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	mispostingdate: date({ mode: 'string' }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const scrPaymentdetails = mysqlTable("scr_paymentdetails", {
	paymentid: bigint({ mode: "number" }).notNull(),
	scrid: bigint({ mode: "number" }).notNull(),
	amortnumber: smallint().notNull(),
	principalpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	interestpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	servicechargepmt: decimal({ precision: 10, scale: 2 }).default('NULL'),
	savingspmt: decimal({ precision: 10, scale: 2 }).default('NULL'),
	amort1Pmt: decimal({ precision: 10, scale: 2 }).default('NULL'),
	amort2Pmt: decimal({ precision: 10, scale: 2 }).default('NULL'),
	penaltypmt: decimal({ precision: 10, scale: 2 }).default('NULL'),
	pastdueinterestpmt: decimal({ precision: 10, scale: 2 }).default('NULL'),
});

export const scrPayments = mysqlTable("scr_payments", {
	paymentid: bigint({ mode: "number" }).autoincrement().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	paymentdate: date({ mode: 'string' }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	ornumber: char({ length: 20 }).notNull(),
	paymentmode: smallint().notNull(),
	paymentreference: varchar({ length: 50 }).notNull(),
	paymentamount: decimal({ precision: 10, scale: 2 }).notNull(),
	postedbyid: mediumint().notNull(),
	scrid: bigint({ mode: "number" }).notNull(),
	scridIndex: bigint("scrid_index", { mode: "number" }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	nextdatedue: date({ mode: 'string' }).notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	loanstatusprevious: tinyint().notNull(),
	loanstatus: tinyint().notNull(),
	loanclassid: smallint().notNull(),
});

export const scrPaymentsor = mysqlTable("scr_paymentsor", {
	orid: bigint({ mode: "number" }).autoincrement().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: mediumint().notNull(),
	clienttype: tinyint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	ornumber: char({ length: 20 }).notNull(),
	paymentmode: tinyint().notNull(),
	paymentreference: char({ length: 50 }).notNull(),
	glcode: int().notNull(),
	oramount: decimal({ precision: 12, scale: 2 }).notNull(),
	orstatus: tinyint().notNull(),
	type: tinyint().notNull(),
	tellerid: mediumint().notNull(),
	makerid: mediumint().notNull(),
});

export const scrProvision = mysqlTable("scr_provision", {
	assessment: tinyint().notNull(),
	security: tinyint().notNull(),
	lower: smallint().notNull(),
	upper: smallint().notNull(),
	rate: decimal({ precision: 5, scale: 2, unsigned: true }).notNull(),
	aclClass: tinyint().notNull(),
});

export const scrProvisionqualitative = mysqlTable("scr_provisionqualitative", {
	transid: int().autoincrement().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	provisionManual: decimal("provision_manual", { precision: 5, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const scrReleasedelete = mysqlTable("scr_releasedelete", {
	releasedeleteid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: mediumint().notNull(),
	scrid: bigint({ mode: "number" }).notNull(),
	clientid: int().notNull(),
	loanamount: decimal({ precision: 12, scale: 2 }).notNull(),
	reason: varchar({ length: 300 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	status: int().notNull(),
});

export const scrRemittancedelete = mysqlTable("scr_remittancedelete", {
	branchid: smallint().notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	ornumber: bigint({ mode: "number" }).notNull(),
	clientname: char({ length: 50 }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	userid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	deletetime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deletesystemdate: date({ mode: 'string' }).notNull(),
});

export const scrRemittancedeletetemp = mysqlTable("scr_remittancedeletetemp", {
	branchid: smallint().notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().default(0),
	approverid: mediumint().default(0),
});

export const scrRemittancedeletetemp2 = mysqlTable("scr_remittancedeletetemp2", {
	orid: bigint({ mode: "number" }).notNull(),
	scrid: bigint({ mode: "number" }).notNull(),
});

export const scrReturncheck = mysqlTable("scr_returncheck", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	oridold: bigint({ mode: "number" }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const scrReturnchecktemp = mysqlTable("scr_returnchecktemp", {
	branchid: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const scrSettings = mysqlTable("scr_settings", {
	settingid: int().autoincrement().notNull(),
	status: tinyint().notNull(),
	name: varchar({ length: 20 }).notNull(),
	shortname: char({ length: 5 }).notNull(),
	description: varchar({ length: 100 }).notNull(),
	type: tinyint().notNull(),
	usepnform: tinyint().notNull(),
	downpaymenttype: tinyint().notNull(),
	downpaymentrate: decimal({ precision: 12, scale: 2 }).notNull(),
	downpaymentrateflexibility: int().notNull(),
	loanamountmaximum: int().notNull(),
	loancountmaximum: tinyint().notNull(),
	loanproductceiling: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	grouping: tinyint().notNull(),
	weekadjuster: tinyint().notNull(),
	groupby: tinyint().notNull(),
	requirecoborrower: tinyint().notNull(),
	requiredcomakers: tinyint().notNull(),
	requireworkersemployed: tinyint().notNull(),
	borrowertypedefault: mediumint().notNull(),
	clientgroupdefault: smallint().notNull(),
	requiresecurity: tinyint().notNull(),
	defaultsecurity: tinyint().notNull(),
	collectionlistdisplay: tinyint().notNull(),
	isEmployeeLoan: tinyint().notNull(),
	termunitflexibility: tinyint().notNull(),
	termunit: tinyint().notNull(),
	termflexibility: tinyint().notNull(),
	termDaysFixed: tinyint().notNull(),
	termDaysFixedFlex: tinyint().notNull(),
	termdefault: tinyint().notNull(),
	termmaximum: smallint().notNull(),
	discountamort: int().notNull(),
	scrdiscountglcode: int().notNull(),
	scrinterestincomeglcode: int().notNull(),
	interestrate: decimal({ precision: 4, scale: 2 }).notNull(),
	interestcomputation: tinyint().notNull(),
	interestcomputationflexibility: tinyint().notNull(),
	interestcomputationbasis: tinyint().notNull(),
	interestcomputationbasisflexibility: tinyint().notNull(),
	diminishingequalprincipal: tinyint().notNull(),
	balloonoption: tinyint().notNull(),
	computepastdueinterest: tinyint().notNull(),
	daysinayear: smallint().notNull(),
	interestrateflexibility: tinyint().notNull(),
	interestrateminimum: decimal({ precision: 4, scale: 2 }).notNull(),
	interestdiscountbooking: tinyint().notNull(),
	interestdiscountedglcode: int().notNull(),
	interestamortizedglcode: int().notNull(),
	firstamortint: tinyint().notNull(),
	adjustonholidays: tinyint().notNull(),
	amortrounding: tinyint().notNull(),
	amortgraceperiod: tinyint().notNull(),
	amortoption: text().default('NULL'),
	autodebitAmort: tinyint().notNull(),
	aclAssessment: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	scdiscounteduse: tinyint().notNull(),
	scdiscountedname: char({ length: 20 }).notNull(),
	scdiscountedflexibility: tinyint().notNull(),
	scdiscountedMaxDays2Prorate: smallint().notNull(),
	scbracketoption: tinyint().notNull(),
	scdpyear: smallint().notNull(),
	scrateoption: tinyint().notNull(),
	scdiscountbooking: tinyint().notNull(),
	scdiscountedglcode: int().notNull(),
	scamortuse: tinyint().notNull(),
	scamortname: char({ length: 18 }).notNull(),
	scamortvalue: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	scamortoption: tinyint().notNull(),
	scamortflexibility: tinyint().notNull(),
	scamortglcode: int().notNull(),
	penaltyrate: decimal({ precision: 4, scale: 2 }).notNull(),
	penaltyperamort: decimal({ precision: 8, scale: 2 }).notNull(),
	principalpenaltyoption: tinyint().notNull(),
	pastduepenaltyrate: decimal({ precision: 4, scale: 2 }).notNull(),
	preterminationpenaltyrate: decimal({ precision: 4, scale: 2 }).notNull(),
	penaltyAmortFixedRate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	penaltyAmortFixedAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	penaltyAmortRunningRate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	penaltyAmortGracePeriod: smallint().notNull(),
	penaltyAmortBasis: tinyint().notNull(),
	penaltyDueFixedRate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	penaltyDueFixedAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	penaltyDueRunningRate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	penaltyDueGracePeriod: smallint().notNull(),
	penaltyDueInclude: tinyint().notNull(),
	penaltyglcode: int().notNull(),
	pdinterestglcode: int().notNull(),
	proceedstypedefault: int().notNull(),
	amort1Use: tinyint().notNull(),
	amort1Name: char({ length: 18 }).notNull(),
	amort1Value: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort1Option: tinyint().notNull(),
	amort1Flexibility: tinyint().notNull(),
	amort1Glcode: int().notNull(),
	amort2Use: tinyint().notNull(),
	amort2Name: char({ length: 18 }).notNull(),
	amort2Value: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	amort2Option: tinyint().notNull(),
	amort2Flexibility: tinyint().notNull(),
	amort2Glcode: int().notNull(),
	amort2Destination: tinyint().notNull(),
	defaultcostcenter: int().notNull(),
	currentglcode: int().notNull(),
	pastdueglcode: int().notNull(),
	nonperfglcode: int().notNull(),
	inlitigationglcode: int().notNull(),
	provisionglcode: int().notNull(),
	cureperiod: smallint().notNull(),
	cureperiod1: tinyint().notNull(),
	cureperiod2: tinyint().notNull(),
	cureperiod3: tinyint().notNull(),
	cureperiod4: tinyint().notNull(),
	cureperiod5: tinyint().notNull(),
	cureperiod6: tinyint().notNull(),
	cureperiod7: tinyint().notNull(),
	cureperiod8: tinyint().notNull(),
	smsLanguage: tinyint().notNull(),
	smsFreeAmt: int().notNull(),
	smsLoanBalance: int().notNull(),
	smsUnpaidAmorts: tinyint().notNull(),
	codePn: text("code_pn").notNull(),
	codeAppform: text("code_appform").notNull(),
	sapprovalAmountLevel1: decimal("SapprovalAmountLevel1", { precision: 12, scale: 2, unsigned: true }).notNull(),
	sapprovalAmountLevel2: decimal("SapprovalAmountLevel2", { precision: 12, scale: 2, unsigned: true }).notNull(),
	sapprovalAmountLevel3: decimal("SapprovalAmountLevel3", { precision: 12, scale: 2, unsigned: true }).notNull(),
	sapprovalAmountLevel4: decimal("SapprovalAmountLevel4", { precision: 12, scale: 2, unsigned: true }).notNull(),
	sapprovalAmountLevel5: decimal("SapprovalAmountLevel5", { precision: 12, scale: 2, unsigned: true }).notNull(),
	uapprovalAmountLevel1: decimal("UapprovalAmountLevel1", { precision: 12, scale: 2, unsigned: true }).notNull(),
	uapprovalAmountLevel2: decimal("UapprovalAmountLevel2", { precision: 12, scale: 2, unsigned: true }).notNull(),
	uapprovalAmountLevel3: decimal("UapprovalAmountLevel3", { precision: 12, scale: 2, unsigned: true }).notNull(),
	uapprovalAmountLevel4: decimal("UapprovalAmountLevel4", { precision: 12, scale: 2, unsigned: true }).notNull(),
	uapprovalAmountLevel5: decimal("UapprovalAmountLevel5", { precision: 12, scale: 2, unsigned: true }).notNull(),
	approvalRequired: tinyint().notNull(),
});

export const scrTempremitor = mysqlTable("scr_tempremitor", {
	orid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	systemdate: date({ mode: 'string' }).notNull(),
});

export const scrTempremitpmt = mysqlTable("scr_tempremitpmt", {
	id: int().autoincrement().notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	paymentamount: decimal({ precision: 12, scale: 2 }).notNull(),
	scrid: bigint({ mode: "number" }).notNull(),
	interestRecompute: tinyint().notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ mode: "number" }).notNull(),
	policyid: bigint({ mode: "number" }).notNull(),
	autodebitSavingsid: bigint("autodebit_savingsid", { mode: "number" }).notNull(),
},
(table) => [
	index("orid").on(table.orid),
	index("pnid").on(table.scrid),
	index("savingsid").on(table.savingsid),
	index("policyid").on(table.policyid, table.autodebitSavingsid),
]);

export const sequenceGeneratepnid = mysqlTable("sequence_generatepnid", {
	nextNotCachedValue: bigint("next_not_cached_value", { mode: "number" }).notNull(),
	minimumValue: bigint("minimum_value", { mode: "number" }).notNull(),
	maximumValue: bigint("maximum_value", { mode: "number" }).notNull(),
	startValue: bigint("start_value", { mode: "number" }).notNull(),
	increment: bigint({ mode: "number" }).notNull(),
	cacheSize: bigint("cache_size", { mode: "number" }).notNull(),
	cycleOption: tinyint("cycle_option").notNull(),
	cycleCount: bigint("cycle_count", { mode: "number" }).notNull(),
});

export const slBalances = mysqlTable("sl_balances", {
	slbalanceid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	loans: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	savings: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	bp: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	ca: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	ar: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	ffe: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	cib: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	coci: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	coh: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("date").on(table.date),
	index("branchid").on(table.branchid),
]);

export const slBank = mysqlTable("sl_bank", {
	bankid: int().autoincrement().notNull(),
	parentbankid: mediumint().notNull(),
	branchname: varchar({ length: 55 }).notNull(),
	accounttype: tinyint().notNull(),
	accountnumber: varchar({ length: 25 }).notNull(),
	contactperson: varchar({ length: 100 }).notNull(),
	contactnumber: char({ length: 25 }).notNull(),
	branchuser: smallint().notNull(),
	currency: tinyint().notNull(),
	banktype: tinyint().notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	glcode: int().notNull(),
	interestglcode: int().notNull(),
	bankstatus: tinyint().notNull(),
	accreditationNumber: varchar("accreditation_number", { length: 25 }).notNull(),
	compliance: tinyint().notNull(),
	placementAmount: decimal("placement_amount", { precision: 14, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	placementdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("branchuser").on(table.branchuser),
]);

export const slBankparent = mysqlTable("sl_bankparent", {
	parentbankid: mediumint().autoincrement().notNull(),
	bankname: char({ length: 50 }).notNull(),
	bankcode: char({ length: 12 }).notNull(),
	banktype: tinyint().notNull(),
});

export const slBanktransactions = mysqlTable("sl_banktransactions", {
	transid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	bankid: int().notNull(),
	branchid: smallint().notNull(),
	details: varchar({ length: 200 }).notNull(),
	transaction: tinyint().notNull(),
	memoglcode: int().notNull(),
	withdrawal: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	deposit: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	userid: mediumint().notNull(),
},
(table) => [
	index("bankid").on(table.bankid),
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("transaction").on(table.transaction),
	index("transdate_2").on(table.transdate),
	index("branchid_2").on(table.branchid),
	index("transdate_3").on(table.transdate),
	index("branchid_3").on(table.branchid),
	index("transaction_2").on(table.transaction),
	index("transaction_3").on(table.transaction),
]);

export const slCashadvance = mysqlTable("sl_cashadvance", {
	id: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	employeeid: mediumint().notNull(),
	detail: varchar({ length: 255 }).notNull(),
	payment: decimal({ precision: 10, scale: 2 }).notNull(),
	cashadvance: decimal({ precision: 10, scale: 2 }).notNull(),
	balance: decimal({ precision: 10, scale: 2 }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("employeeid").on(table.employeeid),
	index("balance").on(table.balance),
	index("detail").on(table.detail),
]);

export const slConsumabledeliverypartial = mysqlTable("sl_consumabledeliverypartial", {
	orderid: int().notNull(),
	consumableid: int().notNull(),
	deliveryQty: smallint().notNull(),
},
(table) => [
	index("orderid").on(table.orderid),
	index("consumableid").on(table.consumableid),
]);

export const slConsumabledispatch = mysqlTable("sl_consumabledispatch", {
	dispatchid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dispatchDate: date({ mode: 'string' }).notNull(),
	branchidOrigin: smallint().notNull(),
	branchid: smallint().notNull(),
	deliveredbyid: mediumint().notNull(),
	consumableid: int().notNull(),
	dispatchqty: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("consumableId").on(table.consumableid),
	index("deliveredbyid").on(table.deliveredbyid),
]);

export const slConsumableitems = mysqlTable("sl_consumableitems", {
	consumableid: int().autoincrement().notNull(),
	consumablename: char({ length: 100 }).notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
	cost: decimal({ precision: 12, scale: 2 }).notNull(),
	reorderlevel: int().notNull(),
	reorderqty: int().notNull(),
	consumableunit: smallint().notNull(),
	glcode: int().notNull(),
});

export const slConsumableorders = mysqlTable("sl_consumableorders", {
	orderid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateOrdered: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateCompleted: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	branchid: smallint().notNull(),
	orderStatus: tinyint().notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("orderStatus").on(table.orderStatus),
]);

export const slConsumableordersdetails = mysqlTable("sl_consumableordersdetails", {
	orderdetailid: int().autoincrement().notNull(),
	orderid: int().notNull(),
	consumableId: int().notNull(),
	orderqty: mediumint().notNull(),
},
(table) => [
	index("orderid").on(table.orderid),
]);

export const slConsumabletrans = mysqlTable("sl_consumabletrans", {
	consumabletransid: int().autoincrement().notNull(),
	branchid: smallint().notNull(),
	consumableid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	transaction: tinyint().notNull(),
	itemIn: mediumint().notNull(),
	itemOut: mediumint().notNull(),
	itemBalance: mediumint().notNull(),
	itemAmount: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("consumableid").on(table.consumableid),
	index("branchid").on(table.branchid),
	index("makerid").on(table.makerid),
]);

export const slCreditor = mysqlTable("sl_creditor", {
	creditorid: int().autoincrement().notNull(),
	creditorname: varchar({ length: 50 }).notNull(),
	shortname: char({ length: 25 }).notNull(),
	creditline: decimal({ precision: 12, scale: 2 }).notNull(),
	description: varchar({ length: 255 }).notNull(),
	fundertag: varchar({ length: 100 }).notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	bankid: int().notNull(),
	glcode: int().notNull(),
	interestglcode: int().notNull(),
	scglcode: int().notNull(),
},
(table) => [
	index("bankid").on(table.bankid),
	index("bankid_2").on(table.bankid),
	index("bankid_3").on(table.bankid),
]);

export const slCreditoramortizations = mysqlTable("sl_creditoramortizations", {
	drawdownid: int().notNull(),
	amortnumber: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datedue: date({ mode: 'string' }).notNull(),
	principal: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	interest: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	servicecharge: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	pdc: char({ length: 12 }).notNull(),
	isremitted: tinyint().notNull(),
	creditortransid: int().notNull(),
},
(table) => [
	index("datedue").on(table.datedue),
	index("drawdownid").on(table.drawdownid),
]);

export const slCreditordrawdowns = mysqlTable("sl_creditordrawdowns", {
	drawdownid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	drawdowndate: date({ mode: 'string' }).notNull(),
	creditorid: mediumint().notNull(),
	transid: int().notNull(),
	pnid: char({ length: 50 }).notNull(),
	drawdown: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	bankid: mediumint().notNull(),
	term: smallint().notNull(),
	termunit: tinyint().notNull(),
	interestrate: decimal({ precision: 7, scale: 4, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datepaid: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("transid").on(table.transid),
	index("bankid").on(table.bankid),
]);

export const slCreditorsmswarningrecipient = mysqlTable("sl_creditorsmswarningrecipient", {
	employeeid: mediumint().notNull(),
});

export const slCreditortransactions = mysqlTable("sl_creditortransactions", {
	transid: int().autoincrement().notNull(),
	banktransid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	creditorid: int().notNull(),
	details: varchar({ length: 200 }).notNull(),
	payment: decimal({ precision: 14, scale: 2 }).notNull(),
	interest: decimal({ precision: 14, scale: 2 }).notNull(),
	servicecharge: decimal({ precision: 14, scale: 2 }).notNull(),
	drawdown: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	userid: mediumint().notNull(),
},
(table) => [
	index("creditorid").on(table.creditorid),
	index("transdate").on(table.transdate),
	index("banktransid").on(table.banktransid),
	index("banktransid_2").on(table.banktransid),
	index("banktransid_3").on(table.banktransid),
]);

export const slFfe = mysqlTable("sl_ffe", {
	ffeid: mediumint().notNull(),
	ffetypeid: smallint().notNull(),
	model: char({ length: 75 }).notNull(),
	serialid: char({ length: 50 }).notNull(),
	description: char({ length: 250 }).notNull(),
	supplier: char({ length: 50 }).notNull(),
	branchid: smallint().notNull(),
	ffeuserid: mediumint().notNull(),
	method: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	purchasedate: date({ mode: 'string' }).notNull(),
	salvagevalue: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	purchaseamount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	depreciatedamount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	bookvalue: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	life: smallint().notNull(),
	lifeused: smallint().notNull(),
	lifeunused: smallint().notNull(),
	status: tinyint().notNull(),
	glcode: int().notNull(),
},
(table) => [
	index("ffetypeid").on(table.ffetypeid),
	index("branchid").on(table.branchid),
	index("branchid_2").on(table.branchid),
]);

export const slFfedefectivetemp = mysqlTable("sl_ffedefectivetemp", {
	ffeid: mediumint().notNull(),
	makerid: mediumint().notNull(),
});

export const slFfedepreciation = mysqlTable("sl_ffedepreciation", {
	transid: int().autoincrement().notNull(),
	ffeid: mediumint().notNull(),
	transtype: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	lifeused: smallint().notNull(),
	depreciation: decimal({ precision: 12, scale: 2 }).notNull(),
	bookvalue: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("ffeid").on(table.ffeid),
	index("transtype").on(table.transtype),
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("transtype_2").on(table.transtype),
	index("transdate_2").on(table.transdate),
	index("transtype_3").on(table.transtype),
	index("branchid_2").on(table.branchid),
	index("transdate_3").on(table.transdate),
	index("branchid_3").on(table.branchid),
]);

export const slFfemovement = mysqlTable("sl_ffemovement", {
	ffemovementid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	ffeid: mediumint().notNull(),
	previousbranchid: smallint().notNull(),
	branchid: smallint().notNull(),
	ffeuserid: mediumint().notNull(),
	status: tinyint().notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("ffeid").on(table.ffeid),
	index("branchid").on(table.branchid),
	index("ffeuserid").on(table.ffeuserid),
]);

export const slFfemovementtemp = mysqlTable("sl_ffemovementtemp", {
	ffeid: mediumint().notNull(),
	branchid: smallint().notNull(),
	ffeuserid: mediumint().notNull(),
	status: tinyint().notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("ffeuserid").on(table.ffeuserid),
]);

export const slFfetype = mysqlTable("sl_ffetype", {
	ffetypeid: mediumint().notNull(),
	ffetypename: char({ length: 50 }).notNull(),
	life: smallint().notNull(),
	method: tinyint().notNull(),
	category: tinyint().notNull(),
	salvagevaluedefault: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("ffetypeid").on(table.ffetypeid),
]);

export const slFfetypecategory = mysqlTable("sl_ffetypecategory", {
	category: tinyint().notNull(),
	categoryname: char({ length: 25 }).notNull(),
	glcode: int().notNull(),
	depreciationglcode: int().notNull(),
	accumulateddepreciationglcode: int().notNull(),
	isItequipment: tinyint("is_itequipment").notNull(),
});

export const slFfeInventory = mysqlTable("sl_ffe_inventory", {
	branchid: smallint().notNull(),
	ffeid: bigint({ mode: "number" }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	scandate: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("ffeid").on(table.ffeid),
]);

export const slHtm = mysqlTable("sl_htm", {
	htmId: int("htm_id").autoincrement().notNull(),
	issuerId: tinyint("issuer_id").default(0),
	securityType: tinyint("security_type").notNull(),
	compliance: tinyint().notNull(),
	accreditationNumber: varchar("accreditation_number", { length: 50 }).notNull(),
	isin: varchar({ length: 25 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateIssuance: date("date_issuance", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateMaturity: date("date_maturity", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateTerminated: date("date_terminated", { mode: 'string' }).notNull(),
	faceValue: decimal("face_value", { precision: 12, scale: 2, unsigned: true }).notNull(),
	bookValue: decimal("book_value", { precision: 12, scale: 2, unsigned: true }).notNull(),
	interestRate: decimal("interest_rate", { precision: 7, scale: 5 }).notNull(),
});

export const slReceivable = mysqlTable("sl_receivable", {
	receivableid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	employeeid: mediumint().notNull(),
	detail: varchar({ length: 255 }).notNull(),
	payment: decimal({ precision: 10, scale: 2 }).notNull(),
	receivable: decimal({ precision: 10, scale: 2 }).notNull(),
	balance: decimal({ precision: 10, scale: 2 }).notNull(),
	glcode: int().notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("balance").on(table.balance),
	index("balance_2").on(table.balance),
]);

export const slStockCertificate = mysqlTable("sl_stock_certificate", {
	certificateid: int().autoincrement().notNull(),
	certificateTransaction: tinyint().notNull(),
	shareholderid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	certificateDate: date({ mode: 'string' }).notNull(),
	certificateNo: char({ length: 12 }).notNull(),
	certificateShares: decimal({ precision: 10, scale: 2 }).notNull(),
	certificateAmount: decimal({ precision: 12, scale: 2 }).notNull(),
	certificateReference: varchar({ length: 250 }).notNull(),
	paidupShares: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	paidupAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	certificateidCancelled: int().notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("clientid").on(table.shareholderid),
	index("dateIssued").on(table.certificateDate),
	index("certNo").on(table.certificateNo),
	index("dateCancelled").on(table.certificateidCancelled),
]);

export const slStockDividend = mysqlTable("sl_stock_dividend", {
	dividendid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dividendDate: date({ mode: 'string' }).notNull(),
	shareholderid: int().notNull(),
	dividendType: tinyint().notNull(),
	dividendShares: decimal({ unsigned: true }).notNull(),
	dividendAmount: decimal({ precision: 12, scale: 0, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
});

export const slStockShareholders = mysqlTable("sl_stock_shareholders", {
	shareholderid: int().autoincrement().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	shareType: tinyint().notNull(),
	subscribeShares: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	subscribeAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	paidupShares: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	paidupAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const slStockSubscription = mysqlTable("sl_stock_subscription", {
	subscriptionid: int().autoincrement().notNull(),
	subscribeTransaction: tinyint().notNull(),
	shareholderid: int().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	subscribeDate: date({ mode: 'string' }).notNull(),
	transShares: decimal({ precision: 10, scale: 2 }).notNull(),
	transAmount: decimal({ precision: 12, scale: 2 }).notNull(),
	reference: varchar({ length: 250 }).notNull(),
	subscribeShares: decimal({ precision: 10, scale: 2, unsigned: true }).notNull(),
	subscribeAmount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("shareholderid").on(table.shareholderid),
	index("subscribeDate").on(table.subscribeDate),
	index("makerid").on(table.makerid),
]);

export const smsInbox = mysqlTable("sms_inbox", {
	messageId: bigint({ mode: "number" }).autoincrement().notNull(),
	smsNumber: char({ length: 11 }).notNull(),
	smsMessage: varchar({ length: 480 }).notNull(),
	sim: tinyint().notNull(),
	timeStamp: datetime({ mode: 'string'}).notNull(),
	replied: tinyint().notNull(),
},
(table) => [
	index("SMSNumber").on(table.smsNumber),
	index("SMSMessage").on(table.smsMessage),
]);

export const smsMonitornumbers = mysqlTable("sms_monitornumbers", {
	employeeid: mediumint().notNull(),
});

export const smsOutbox = mysqlTable("sms_outbox", {
	messageId: bigint({ mode: "number" }).autoincrement().notNull(),
	smsNumber: char({ length: 11 }).notNull(),
	smsMessage: varchar({ length: 480 }).notNull(),
	timeSent: datetime({ mode: 'string'}).notNull(),
	deleteFlag: tinyint().notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	status: tinyint().notNull(),
	chargeClient: tinyint().notNull(),
});

export const smsOutboxhistory = mysqlTable("sms_outboxhistory", {
	messageId: bigint({ mode: "number" }).autoincrement().notNull(),
	smsNumber: char({ length: 11 }).notNull(),
	smsMessage: varchar({ length: 480 }).notNull(),
	timeSent: datetime({ mode: 'string'}).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	status: tinyint().notNull(),
	chargeClient: tinyint().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const smsSavings = mysqlTable("sms_savings", {
	savingsid: bigint({ mode: "number" }).notNull(),
	transaction: smallint().notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
]);

export const smsSentcount = mysqlTable("sms_sentcount", {
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	sentDate: date({ mode: 'string' }).notNull(),
	sentCount: decimal({ unsigned: true }).notNull(),
});

export const smsTelcoPrefix = mysqlTable("sms_telco_prefix", {
	prefix: smallint().notNull(),
	gatewayId: int("gateway_id").default(0),
	network: varchar({ length: 50 }).notNull(),
});

export const systemDbbackup = mysqlTable("system_dbbackup", {
	type: tinyint().notNull(),
	status: tinyint().notNull(),
});

export const telleringErrorcorrecttemp = mysqlTable("tellering_errorcorrecttemp", {
	transactionid: int().notNull(),
	branchid: smallint().notNull(),
	makerid: mediumint().notNull(),
});

export const telleringExpense = mysqlTable("tellering_expense", {
	expenseid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	description: char({ length: 255 }).notNull(),
	type: tinyint().notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("branchid_2").on(table.branchid),
	index("branchid_3").on(table.branchid),
]);

export const telleringExpensedetails = mysqlTable("tellering_expensedetails", {
	expenseid: int().notNull(),
	glcode: int().notNull(),
	amount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	costcenterid: mediumint().notNull(),
},
(table) => [
	index("expenseid").on(table.expenseid),
	index("expenseid_2").on(table.expenseid),
	index("expenseid_3").on(table.expenseid),
]);

export const telleringOrcoordinate = mysqlTable("tellering_orcoordinate", {
	variable: varchar({ length: 50 }).notNull(),
	jsonData: varchar("json_data", { length: 26000 }).notNull(),
});

export const telleringPrintcoordinates = mysqlTable("tellering_printcoordinates", {
	variable: char({ length: 15 }).notNull(),
	coordinate: decimal({ precision: 4, scale: 1 }).notNull(),
});

export const telleringSettings = mysqlTable("tellering_settings", {
	telleringid: smallint().notNull(),
	telleringname: char({ length: 30 }).notNull(),
	glcode: int().notNull(),
	normalbalance: tinyint().notNull(),
	protection: tinyint().notNull(),
	document1: tinyint().notNull(),
	document2: tinyint().notNull(),
	status: tinyint().notNull(),
	autojournal: tinyint().notNull(),
	validationX: mediumint("validation_x").notNull(),
	validationY: mediumint("validation_y").notNull(),
},
(table) => [
	index("normalbalance").on(table.normalbalance),
	index("normalbalance_2").on(table.normalbalance),
	index("normalbalance_3").on(table.normalbalance),
]);

export const telleringTransactions = mysqlTable("tellering_transactions", {
	transactionid: int().autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	branchid: smallint().notNull(),
	telleringid: mediumint().notNull(),
	details: varchar({ length: 150 }).notNull(),
	glcode: int().notNull(),
	document1: tinyint().notNull(),
	document2: tinyint().notNull(),
	reference1: varchar({ length: 50 }).notNull(),
	reference2: varchar({ length: 50 }).notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
	errorcorrected: tinyint().notNull(),
},
(table) => [
	index("telleringid").on(table.telleringid),
	index("branchid").on(table.branchid),
	index("transdate").on(table.transdate),
	index("branchid_2").on(table.branchid),
	index("transdate_2").on(table.transdate),
	index("branchid_3").on(table.branchid),
	index("transdate_3").on(table.transdate),
]);

export const vwMobilePrefix = mysqlTable("vw_mobile_prefix", {
	prefix: varchar({ length: 12 }).default('NULL'),
	telco: varchar({ length: 150 }).default('NULL'),
});

export const writeoffApproval = mysqlTable("writeoff_approval", {
	writeoffid: int().autoincrement().notNull(),
	postingtime: datetime({ mode: 'string'}).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	postingdate: date({ mode: 'string' }).notNull(),
	count: int().notNull(),
	loanamount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	loanbalance: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	savingsbalance: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	writeoffamount: decimal({ precision: 14, scale: 2, unsigned: true }).notNull(),
	approver1Id: mediumint().notNull(),
	approver2Id: mediumint().notNull(),
},
(table) => [
	index("approver1id").on(table.approver1Id),
	index("approver2id").on(table.approver2Id),
]);

export const writeoffData = mysqlTable("writeoff_data", {
	writeoffid: int().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	clientid: bigint({ mode: "number" }).notNull(),
	pnid2: char({ length: 25 }).notNull(),
	branchid: smallint().notNull(),
	loanproductid: int().notNull(),
	loanclassid: smallint().notNull(),
	termunit: tinyint().notNull(),
	term: smallint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	maturity: date({ mode: 'string' }).notNull(),
	amount: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interestrate: decimal({ precision: 4, scale: 2, unsigned: true }).notNull(),
	interestcomputationbasis: tinyint().notNull(),
	coborrowerid: bigint({ mode: "number" }).notNull(),
	comaker1Id: bigint({ mode: "number" }).notNull(),
	comaker2Id: bigint({ mode: "number" }).notNull(),
	loancycle: smallint().notNull(),
	loanofficerid: mediumint().notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	savingsbalance: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	writeoffbalance: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	lasttransdate: date({ mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	interestreferencedate: date({ mode: 'string' }).notNull(),
},
(table) => [
	index("writeoffid").on(table.writeoffid),
	index("branchid").on(table.branchid),
	index("loanproductid").on(table.loanproductid),
	index("date").on(table.date),
	index("clientid").on(table.clientid),
	index("coborrowerid").on(table.coborrowerid),
	index("comaker1id").on(table.comaker1Id),
	index("comaker2id").on(table.comaker2Id),
	index("loanbalance").on(table.loanbalance),
	index("comaker1id_2").on(table.comaker1Id),
	index("comaker2id_2").on(table.comaker2Id),
	index("loanbalance_2").on(table.loanbalance),
	index("writeoffid_2").on(table.writeoffid),
]);

export const writeoffTempapproval = mysqlTable("writeoff_tempapproval", {
	makerid: mediumint().notNull(),
	approver1Id: mediumint().notNull(),
});

export const writeoffTempdata = mysqlTable("writeoff_tempdata", {
	pnid: bigint({ mode: "number" }).notNull(),
});

export const writeoffTempor = mysqlTable("writeoff_tempor", {
	branchid: smallint().notNull(),
	ornumber: char({ length: 20 }).notNull(),
});

export const writeoffTransactions = mysqlTable("writeoff_transactions", {
	transid: int().autoincrement().notNull(),
	transtype: tinyint().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	transdate: date({ mode: 'string' }).notNull(),
	branchid: smallint().notNull(),
	pnid: bigint({ mode: "number" }).notNull(),
	orid: bigint({ mode: "number" }).notNull(),
	payment: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	interest: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	writeoffbalance: decimal({ precision: 12, scale: 2, unsigned: true }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("branchid").on(table.branchid),
	index("pnid").on(table.pnid),
	index("writeoffbalance").on(table.writeoffbalance),
]);
export const vwSavingsBalance = mysqlView("vw_savings_balance", {
	accountname: int().default(0).notNull(),
	savingsid: int().default(0).notNull(),
	categoryname: int().default(0).notNull(),
	savingsAccountType: int().default(0).notNull(),
	corpclientid: int().default(0).notNull(),
	client1Id: int().default(0).notNull(),
	client2Id: int().default(0).notNull(),
	client3Id: int().default(0).notNull(),
	client4Id: int().default(0).notNull(),
	currentbalance1: int().default(0).notNull(),
	currentbalance2: int().default(0).notNull(),
	holdoutamount: int().default(0).notNull(),
	minimumbalance: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`accountname\`,1 AS \`savingsid\`,1 AS \`categoryname\`,1 AS \`savingsAccountType\`,1 AS \`corpclientid\`,1 AS \`client1id\`,1 AS \`client2id\`,1 AS \`client3id\`,1 AS \`client4id\`,1 AS \`currentbalance1\`,1 AS \`currentbalance2\`,1 AS \`holdoutamount\`,1 AS \`minimumbalance\``);

export const vwAttendance = mysqlView("vw_attendance", {
	employeeid: mediumint().notNull(),
	date: varchar({ length: 10 }).default('NULL'),
	inAm: varchar("in_am", { length: 8 }).default('NULL'),
	outAm: varchar("out_am", { length: 8 }).default('NULL'),
	inPm: varchar("in_pm", { length: 8 }).default('NULL'),
	outPm: varchar("out_pm", { length: 8 }).default('NULL'),
	absent: varchar({ length: 3 }).default('NULL'),
	late: varchar({ length: 21 }).default('NULL'),
	ut: varchar({ length: 21 }).default('NULL'),
	remarks: varchar({ length: 100 }).default('NULL'),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select \`rbs_db0\`.\`hr_attendance\`.\`employeeid\` AS \`employeeid\`,cast(\`rbs_db0\`.\`hr_attendance\`.\`date\` as char(10) charset utf8mb3) AS \`date\`,cast(\`rbs_db0\`.\`hr_attendance\`.\`in1\` as char(8) charset utf8mb3) AS \`in_am\`,cast(\`rbs_db0\`.\`hr_attendance\`.\`out1\` as char(8) charset utf8mb3) AS \`out_am\`,cast(\`rbs_db0\`.\`hr_attendance\`.\`in2\` as char(8) charset utf8mb3) AS \`in_pm\`,cast(\`rbs_db0\`.\`hr_attendance\`.\`out2\` as char(8) charset utf8mb3) AS \`out_pm\`,if(\`rbs_db0\`.\`hr_attendance\`.\`in1\` = '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`in2\` = '00:00:00',1,if(\`rbs_db0\`.\`hr_attendance\`.\`in1\` = '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out1\` = '00:00:00' or \`rbs_db0\`.\`hr_attendance\`.\`out1\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`in2\` = '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` = '00:00:00',cast('0.5' as char(3) charset utf8mb3),'')) AS \`absent\`,if(\`rbs_db0\`.\`hr_attendance\`.\`in1\` > '08:00:00',round(time_to_sec(subtime(\`rbs_db0\`.\`hr_attendance\`.\`in1\`,'08:00:00')) / 60,2),if(\`rbs_db0\`.\`hr_attendance\`.\`in2\` > '12:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` < '17:00:00',round(time_to_sec(subtime(\`rbs_db0\`.\`hr_attendance\`.\`out2\`,'17:00:00')) / 60,2),'')) AS \`late\`,if(\`rbs_db0\`.\`hr_attendance\`.\`out1\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out1\` < '12:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`in2\` = '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` = '00:00:00',round(time_to_sec(subtime('12:00:00',\`rbs_db0\`.\`hr_attendance\`.\`out1\`)) / 60,2),if(\`rbs_db0\`.\`hr_attendance\`.\`in1\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out1\` = '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`in2\` = '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` < '17:00:00',round(time_to_sec(subtime('17:00:00',\`rbs_db0\`.\`hr_attendance\`.\`out2\`)) / 60,2),if(\`rbs_db0\`.\`hr_attendance\`.\`in1\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out1\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`in2\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` <> '00:00:00' and \`rbs_db0\`.\`hr_attendance\`.\`out2\` < '17:00:00',round(time_to_sec(subtime('17:00:00',\`rbs_db0\`.\`hr_attendance\`.\`out2\`)) / 60,2),''))) AS \`ut\`,cast(dayname(\`rbs_db0\`.\`hr_attendance\`.\`date\`) as char(100) charset utf8mb3) AS \`remarks\` from (\`rbs_db0\`.\`hr_attendance\` left join \`rbs_db0\`.\`general_employees\` on(\`rbs_db0\`.\`general_employees\`.\`id\` = \`rbs_db0\`.\`hr_attendance\`.\`employeeid\`)) where \`rbs_db0\`.\`hr_attendance\`.\`date\` >= cast(cast(current_timestamp() as date) as date) and \`rbs_db0\`.\`hr_attendance\`.\`date\` <= cast(current_timestamp() as date) + interval 10 day`);

export const vwLendingTermunits = mysqlView("vw_lending_termunits", {
	termid: int().default(0).notNull(),
	termname: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`termid\`,1 AS \`termname\``);

export const vwApiGatewaysCredentials = mysqlView("vw_api_gateways_credentials", {
	name: int().default(0).notNull(),
	value: int().default(0).notNull(),
	description: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`name\`,1 AS \`value\`,1 AS \`description\``);

export const vwAmortdetails = mysqlView("vw_amortdetails", {
	pnid: int().default(0).notNull(),
	amortnumber: int().default(0).notNull(),
	datedue: int().default(0).notNull(),
	principal: int().default(0).notNull(),
	interest: int().default(0).notNull(),
	servicecharge: int().default(0).notNull(),
	savings: int().default(0).notNull(),
	amort1: int().default(0).notNull(),
	amort2: int().default(0).notNull(),
	datepaid: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`pnid\`,1 AS \`amortnumber\`,1 AS \`datedue\`,1 AS \`principal\`,1 AS \`interest\`,1 AS \`servicecharge\`,1 AS \`savings\`,1 AS \`amort1\`,1 AS \`amort2\`,1 AS \`datepaid\``);

export const vwEmployeedetails = mysqlView("vw_employeedetails", {
	employeeid: mediumint().notNull(),
	employeedetails: varchar({ length: 150 }).default('NULL'),
	// Warning: Can't parse blob from database
	// blobType: blob("image").notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select \`rbs_db0\`.\`general_employees\`.\`id\` AS \`employeeid\`,cast(concat(lpad(\`rbs_db0\`.\`general_employees\`.\`id\`,4,0),' - ',\`rbs_db0\`.\`general_employees\`.\`lastname\`,', ',\`rbs_db0\`.\`general_employees\`.\`firstname\`,' ',substr(\`rbs_db0\`.\`general_employees\`.\`middlename\`,1,1),'.') as char(150) charset utf8mb3) AS \`employeedetails\`,\`rbs_db0\`.\`general_employees\`.\`image\` AS \`image\` from \`rbs_db0\`.\`general_employees\` where \`rbs_db0\`.\`general_employees\`.\`employmentstatus\` > 0`);

export const vwTransferDetails = mysqlView("vw_transfer_details", {
	senderClientid: int("sender_clientid").default(0).notNull(),
	cpnumber: int().default(0).notNull(),
	accountname: int().default(0).notNull(),
	receiverNickname: int("receiver_nickname").default(0).notNull(),
	address: int().default(0).notNull(),
	receiverAccountnumber: int("receiver_accountnumber").default(0).notNull(),
	bicfi: int().default(0).notNull(),
	bankName: int("bank_name").default(0).notNull(),
	bankCode: int("bank_code").default(0).notNull(),
	headOfficeBrstn: int("head_office_brstn").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`sender_clientid\`,1 AS \`cpnumber\`,1 AS \`accountname\`,1 AS \`receiver_nickname\`,1 AS \`address\`,1 AS \`receiver_accountnumber\`,1 AS \`bicfi\`,1 AS \`bank_name\`,1 AS \`bank_code\`,1 AS \`head_office_brstn\``);

export const vwLogo = mysqlView("vw_logo", {
	serverdate: varchar({ length: 10 }).default('NULL'),
	servertime: varchar({ length: 8 }).default('NULL'),
	institutionname: char({ length: 75 }).notNull(),
	institutioncode: char({ length: 8 }).notNull(),
	// Warning: Can't parse blob from database
	// blobType: blob("logo").notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select cast(cast(current_timestamp() as date) as char(10) charset utf8mb3) AS \`serverdate\`,cast(cast(current_timestamp() as time) as char(8) charset utf8mb3) AS \`servertime\`,\`rbs_db0\`.\`general_criticalsettings\`.\`institutionname\` AS \`institutionname\`,\`rbs_db0\`.\`general_criticalsettings\`.\`institutioncode\` AS \`institutioncode\`,\`rbs_db0\`.\`general_criticalsettings\`.\`logo\` AS \`logo\` from \`rbs_db0\`.\`general_criticalsettings\``);

export const vwMobileSecurityQuestions = mysqlView("vw_mobile_security_questions", {
	questionid: int().default(0).notNull(),
	question: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`questionid\`,1 AS \`question\``);

export const vwSavingsTransactions = mysqlView("vw_savings_transactions", {
	savingstransactionid: int().default(0).notNull(),
	branchid: int().default(0).notNull(),
	savingsid: int().default(0).notNull(),
	transactiondate: int().default(0).notNull(),
	reference: int().default(0).notNull(),
	transactionname: int().default(0).notNull(),
	postingtime: int().default(0).notNull(),
	transactiontype: int().default(0).notNull(),
	amount: int().default(0).notNull(),
	currentbalance1: int().default(0).notNull(),
	currentbalance2: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`savingstransactionid\`,1 AS \`branchid\`,1 AS \`savingsid\`,1 AS \`transactiondate\`,1 AS \`reference\`,1 AS \`transactionname\`,1 AS \`postingtime\`,1 AS \`transactiontype\`,1 AS \`amount\`,1 AS \`currentbalance1\`,1 AS \`currentbalance2\``);

export const vwMobileSecurityQuestionAnswer = mysqlView("vw_mobile_security_question_answer", {
	cpnumber: int().default(0).notNull(),
	questionid: int().default(0).notNull(),
	answer: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`cpnumber\`,1 AS \`questionid\`,1 AS \`answer\``);

export const vwClientdetails = mysqlView("vw_clientdetails", {
	firstname: int().default(0).notNull(),
	middlename: int().default(0).notNull(),
	lastname: int().default(0).notNull(),
	clientid: int().default(0).notNull(),
	address: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`firstname\`,1 AS \`middlename\`,1 AS \`lastname\`,1 AS \`clientid\`,1 AS \`address\``);

export const vwFingerprints = mysqlView("vw_fingerprints", {
	employeeid: mediumint().notNull(),
	employeename: varchar({ length: 54 }).default('NULL'),
	employmentstatus: tinyint().notNull(),
	fingerprint1: text().notNull(),
	fingerprint2: text().notNull(),
	fingerprint3: text().notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select \`rbs_db0\`.\`general_employees\`.\`id\` AS \`employeeid\`,concat(\`rbs_db0\`.\`general_employees\`.\`firstname\`,' ',left(\`rbs_db0\`.\`general_employees\`.\`middlename\`,1),'. ',\`rbs_db0\`.\`general_employees\`.\`lastname\`) AS \`employeename\`,\`rbs_db0\`.\`general_employees\`.\`employmentstatus\` AS \`employmentstatus\`,\`rbs_db0\`.\`general_employees\`.\`fingerprint1\` AS \`fingerprint1\`,\`rbs_db0\`.\`general_employees\`.\`fingerprint2\` AS \`fingerprint2\`,\`rbs_db0\`.\`general_employees\`.\`fingerprint3\` AS \`fingerprint3\` from \`rbs_db0\`.\`general_employees\` where \`rbs_db0\`.\`general_employees\`.\`employmentstatus\` > 0`);

export const vwLoanPayments = mysqlView("vw_loan_payments", {
	pnid: int().default(0).notNull(),
	amortnumber: int().default(0).notNull(),
	datedue: int().default(0).notNull(),
	datepaid: int().default(0).notNull(),
	ornumber: int().default(0).notNull(),
	paymentdate: int().default(0).notNull(),
	paymentamount: int().default(0).notNull(),
	loanbalance: int().default(0).notNull(),
	savingsexcess: int().default(0).notNull(),
	principalpmt: int().default(0).notNull(),
	interestpmt: int().default(0).notNull(),
	servicechargepmt: int().default(0).notNull(),
	savingspmt: int().default(0).notNull(),
	amort1Pmt: int().default(0).notNull(),
	amort2Pmt: int().default(0).notNull(),
	penaltypmt: int().default(0).notNull(),
	pastdueinterestpmt: int().default(0).notNull(),
	postedbyinitial: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`pnid\`,1 AS \`amortnumber\`,1 AS \`datedue\`,1 AS \`datepaid\`,1 AS \`ornumber\`,1 AS \`paymentdate\`,1 AS \`paymentamount\`,1 AS \`loanbalance\`,1 AS \`savingsexcess\`,1 AS \`principalpmt\`,1 AS \`interestpmt\`,1 AS \`servicechargepmt\`,1 AS \`savingspmt\`,1 AS \`amort1pmt\`,1 AS \`amort2pmt\`,1 AS \`penaltypmt\`,1 AS \`pastdueinterestpmt\`,1 AS \`postedbyinitial\``);

export const vwLoandetails = mysqlView("vw_loandetails", {
	clientid: int().default(0).notNull(),
	pnid: int().default(0).notNull(),
	branchname: int().default(0).notNull(),
	loanproductname: int().default(0).notNull(),
	date: int().default(0).notNull(),
	maturity: int().default(0).notNull(),
	amount: int().default(0).notNull(),
	interestrate: int().default(0).notNull(),
	interestcomputationbasis: int().default(0).notNull(),
	loanbalance: int().default(0).notNull(),
	nextdatedue: int().default(0).notNull(),
	term: int().default(0).notNull(),
	termunitname: int().default(0).notNull(),
	loanstatusname: int().default(0).notNull(),
	amortdue: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`clientid\`,1 AS \`pnid\`,1 AS \`branchname\`,1 AS \`loanproductname\`,1 AS \`date\`,1 AS \`maturity\`,1 AS \`amount\`,1 AS \`interestrate\`,1 AS \`interestcomputationbasis\`,1 AS \`loanbalance\`,1 AS \`nextdatedue\`,1 AS \`term\`,1 AS \`termunitname\`,1 AS \`loanstatusname\`,1 AS \`amortdue\``);