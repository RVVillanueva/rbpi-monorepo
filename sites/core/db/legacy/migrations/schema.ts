import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, smallint, char, customType, decimal, mediumint, varchar, tinyint, date, timestamp, datetime, bigint, float, text, mediumtext, boolean, binary, blob, time, longtext, double, index, uniqueIndex, mysqlView } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const generalClientsbeneficiary = mysqlTable("general_clientsbeneficiary", {
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	beneficiaryid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	relationship: tinyint({ unsigned: true }).notNull(),
	ordernumber: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("beneficiaryid").on(table.beneficiaryid),
]);

export const generalClientsfieldsrequired = mysqlTable("general_clientsfieldsrequired", {
	variable: char({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	label: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isrequired: boolean().notNull(),
});

export const generalClientsmerge = mysqlTable("general_clientsmerge", {
	mergeid: int().autoincrement().primaryKey(),
	date: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	clientid1: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientname1: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	clientid2: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientname2: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const generalClientsmergetemp = mysqlTable("general_clientsmergetemp", {
	mergetempid: int().autoincrement().primaryKey(),
	date: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	clientid1: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid2: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const generalClientsrelatives = mysqlTable("general_clientsrelatives", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	lastname: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	firstname: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	middlename: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	relation: tinyint().notNull(),
	birthdate: date().notNull(),
	gender: boolean().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const generalClientsresignation = mysqlTable("general_clientsresignation", {
	resignationTransId: int({ unsigned: true }).primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	resignationid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const generalClientssolicitor = mysqlTable("general_clientssolicitor", {
	pnid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	solicitortype: tinyint().notNull(),
	solicitorid: bigint({ mode: 'number' }).notNull(),
},
(table) => [
	index("solicitorid").on(table.solicitorid),
]);

export const generalCommagencies = mysqlTable("general_commagencies", {
	id: int().autoincrement().notNull(),
	name: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortname: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("id").on(table.id),
]);

export const generalCommunications = mysqlTable("general_communications", {
	id: int().autoincrement().primaryKey(),
	filename: varchar({ length: 155 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint().notNull(),
	date: date().notNull(),
	agency: smallint().notNull(),
	description: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const generalCoordinatesetting = mysqlTable("general_coordinatesetting", {
	browser: tinyint({ unsigned: true }).primaryKey(),
	widthadjust: decimal({ precision: 3, scale: 1 }).notNull(),
	heightadjust: decimal({ precision: 3, scale: 1 }).notNull(),
});

export const generalCriticalsettings = mysqlTable("general_criticalsettings", {
	institutionid: smallint({ unsigned: true }).primaryKey(),
	institutionname: char({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	institutioncode: char({ length: 8 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tin: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchlimit: binary({ length: 16 }).notNull(),
	useloanclassification: boolean().notNull(),
	corporatebranchid: smallint().notNull(),
	usesms: boolean().notNull(),
	amlaCode: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cicCode: char({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cocreeCode: varchar({ length: 10 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	payrollkey: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	secretKey: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	logo: blob().notNull(),
	autorunRuntime: datetime("autorun_runtime").notNull(),
	pendingautorun: tinyint({ unsigned: true }).notNull(),
	smsRuntime: datetime().notNull(),
	versiondate: date().notNull(),
	versiondateAcctng: date("versiondate_acctng").notNull(),
	rundate: date().notNull(),
	rundate2: date().notNull(),
	smsdate: date().notNull(),
	isAutodayend: tinyint("is_autodayend", { unsigned: true }).notNull(),
	apiPassComworks: varchar("api_pass_comworks", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	autodayendtime: time().notNull(),
	purgeDate: date().notNull(),
});

export const generalEmployeepassword = mysqlTable("general_employeepassword", {
	passwordhistoryid: int().autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	datechanged: date().notNull(),
	password: char({ length: 64 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
]);

export const generalEmployees = mysqlTable("general_employees", {
	id: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	firstname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	middlename: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lastname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	suffixname: varchar({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	nickname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	birthdate: date().notNull(),
	birthplace: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	nationality: smallint({ unsigned: true }).notNull(),
	gender: tinyint({ unsigned: true }).notNull(),
	civilstatus: tinyint({ unsigned: true }).notNull(),
	contactnumber1: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	contactnumber2: varchar({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	contactDefault: tinyint({ unsigned: true }).notNull(),
	address1: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	barangayid: mediumint({ unsigned: true }).notNull(),
	address2: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	barangayid2: mediumint({ unsigned: true }).notNull(),
	emergencycontactperson: char({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	emergencycontactnumber: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	savingsid2: bigint({ unsigned: true, mode: 'number' }).notNull(),
	sss: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	philhealth: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pagibig: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tin: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	datehired: date().notNull(),
	dateregular: date().notNull(),
	npaid: int({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	employmentstatus: boolean().notNull(),
	payrollstatus: tinyint({ unsigned: true }).notNull(),
	rankid: smallint({ unsigned: true }).notNull(),
	positionid: tinyint({ unsigned: true }).notNull(),
	payrollAcct: char({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	payrollfrequency: tinyint({ unsigned: true }).notNull(),
	workdaysperyear: smallint({ unsigned: true }).notNull(),
	wagebasis: tinyint({ unsigned: true }).notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	username: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	randomkey: char({ length: 32 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	password: char({ length: 64 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	attempts: smallint({ unsigned: true }).notNull(),
	userbranchid: smallint({ unsigned: true }).notNull(),
	isactive: tinyint({ unsigned: true }).notNull(),
	blockduetoleave: tinyint({ unsigned: true }).notNull(),
	passworddefault: tinyint({ unsigned: true }).notNull(),
	passwordchangedate: date().notNull(),
	activitylog: datetime().notNull(),
	vlbalance: decimal({ precision: 5, scale: 2 }).notNull(),
	slbalance: decimal({ precision: 5, scale: 2 }).notNull(),
	attendanceFlexitime: boolean("attendance_flexitime").notNull(),
	attendanceReporttime: time("attendance_reporttime").notNull(),
	generatedid: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fingerprint1: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fingerprint2: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fingerprint3: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	image: blob().notNull(),
	imagesmall: blob().notNull(),
},
(table) => [
	index("middlename").on(table.middlename),
	index("barangayid").on(table.barangayid),
	index("clientid").on(table.clientid),
	index("firstname").on(table.firstname),
	index("lastname").on(table.lastname),
	index("branchid").on(table.branchid),
]);

export const generalForumcomments = mysqlTable("general_forumcomments", {
	commentid: int().autoincrement().primaryKey(),
	threadid: int({ unsigned: true }).notNull(),
	comment: varchar({ length: 700 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	timestamp: timestamp().defaultNow().notNull(),
});

export const generalForumthreads = mysqlTable("general_forumthreads", {
	threadid: int().autoincrement().primaryKey(),
	thread: varchar({ length: 700 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	audienceid: mediumint({ unsigned: true }).notNull(),
	timestamp: timestamp().defaultNow().notNull(),
});

export const generalHolidays = mysqlTable("general_holidays", {
	date: date().default(sql`0000-00-00`).primaryKey(),
	year: char({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	holidayname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint({ unsigned: true }).notNull(),
});

export const generalHolidaysfixed = mysqlTable("general_holidaysfixed", {
	date: char({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	holidayname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const generalIcon = mysqlTable("general_icon", {
	name: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	image: blob().notNull(),
});

export const generalIpmonitor = mysqlTable("general_ipmonitor", {
	ipid: int({ unsigned: true }).autoincrement().primaryKey(),
	ipaddress: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	location: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isCritical: tinyint({ unsigned: true }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	lastStatus: datetime().notNull(),
});

export const generalLogs = mysqlTable("general_logs", {
	id: int().autoincrement().primaryKey(),
	user: mediumint({ unsigned: true }).notNull(),
	time: datetime().notNull(),
	log: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const generalMessages = mysqlTable("general_messages", {
	id: int().autoincrement().primaryKey(),
	postedby: mediumint({ unsigned: true }).notNull(),
	subject: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	message: varchar({ length: 2000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dateposted: date().notNull(),
	datebeg: date().notNull(),
	dateend: date().notNull(),
});

export const generalMonthend = mysqlTable("general_monthend", {
	transactiondate: date().primaryKey(),
	transactiontime: datetime().notNull(),
	approver1: mediumint({ unsigned: true }).notNull(),
	approver2: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("transactiontime").on(table.transactiontime),
]);

export const generalNationality = mysqlTable("general_nationality", {
	id: int().autoincrement().primaryKey(),
	nationalityCode: int("nationality_code").notNull(),
	nationalityName: varchar("nationality_name", { length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("nationality_code").on(table.nationalityCode),
]);

export const generalRelations = mysqlTable("general_relations", {
	relationid: int({ unsigned: true }).autoincrement().primaryKey(),
	relationname: char({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	categoryid: tinyint({ unsigned: true }).notNull(),
});

export const generalRiskprofile = mysqlTable("general_riskprofile", {
	riskprofilemodelId: int("riskprofilemodel_id").autoincrement().primaryKey(),
	riskprofilemodelDetails: varchar("riskprofilemodel_details", { length: 12000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const generalSettings = mysqlTable("general_settings", {
	name: char({ length: 40 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	value: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	description: char({ length: 175 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	category: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("category").on(table.category),
]);

export const generalSettingsidentification = mysqlTable("general_settingsidentification", {
	id: mediumint().autoincrement().primaryKey(),
	name: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	idCbs: mediumint("id_cbs").notNull(),
	idCic: mediumint("id_cic").notNull(),
	isCicIdentification: boolean("is_cic_identification").default(false).notNull(),
},
(table) => [
	index("id_cbs").on(table.idCbs),
]);

export const generalSettingslog = mysqlTable("general_settingslog", {
	logid: int().autoincrement().primaryKey(),
	timestamp: timestamp().defaultNow().notNull(),
	category: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	name: char({ length: 40 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	valueOld: char("value_old", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	valueNew: char("value_new", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("name").on(table.name),
	index("approverid").on(table.approverid),
	index("makerid").on(table.makerid),
]);

export const generalSystemdate = mysqlTable("general_systemdate", {
	systemdateid: int({ unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	dateclosed: date().notNull(),
	datetimeclosed: datetime().notNull(),
	loansapproverid: mediumint({ unsigned: true }).notNull(),
	savingsapproverid: mediumint({ unsigned: true }).notNull(),
	managerapproverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("managerapproverid").on(table.managerapproverid),
	index("dateclosed").on(table.dateclosed),
]);

export const generalUpdate = mysqlTable("general_update", {
	updateid: int({ unsigned: true }).autoincrement().primaryKey(),
	versiondate: date().notNull(),
	postingtime: datetime().notNull(),
	updates: varchar({ length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const hrAttendance = mysqlTable("hr_attendance", {
	date: date().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	in1: time().notNull(),
	out1: time().notNull(),
	in2: time().notNull(),
	out2: time().notNull(),
},
(table) => [
	index("date").on(table.date),
	index("date_2").on(table.date),
	index("employeeid").on(table.employeeid),
	index("employeeid_2").on(table.employeeid),
	index("employeeid_3").on(table.employeeid),
]);

export const hrCutoffpayroll = mysqlTable("hr_cutoffpayroll", {
	weeklycutoff: tinyint({ unsigned: true }).notNull(),
	semimonthlycutoff: tinyint().notNull(),
	monthlycutoff: tinyint().notNull(),
});

export const hrDagroupsanctions = mysqlTable("hr_dagroupsanctions", {
	offenseGroup: tinyint({ unsigned: true }).notNull(),
	sanction1: tinyint({ unsigned: true }).notNull(),
	suspensionDays1: tinyint({ unsigned: true }).notNull(),
	sanction2: tinyint({ unsigned: true }).notNull(),
	suspensionDays2: tinyint({ unsigned: true }).notNull(),
	sanction3: tinyint({ unsigned: true }).notNull(),
	suspensionDays3: tinyint({ unsigned: true }).notNull(),
	sanction4: tinyint({ unsigned: true }).notNull(),
	suspensionDays4: tinyint({ unsigned: true }).notNull(),
	sanction5: tinyint({ unsigned: true }).notNull(),
	suspensionDays5: tinyint({ unsigned: true }).notNull(),
	sanction6: tinyint({ unsigned: true }).notNull(),
	suspensionDays6: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	uniqueIndex("offenseGroup").on(table.offenseGroup),
]);

export const hrDaoffenses = mysqlTable("hr_daoffenses", {
	offenseid: int({ unsigned: true }).autoincrement().primaryKey(),
	offensename: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
	offensegroup: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("offensegroup").on(table.offensegroup),
]);

export const hrDas = mysqlTable("hr_das", {
	daid: int({ unsigned: true }).autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	offenseid: smallint({ unsigned: true }).notNull(),
	language: tinyint({ unsigned: true }).notNull(),
	offenseDetail: varchar({ length: 3000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	instance: tinyint({ unsigned: true }).notNull(),
	offenseReply: varchar({ length: 3000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	offenseDecision: varchar({ length: 3000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	sanction: smallint({ unsigned: true }).notNull(),
	sanctionSuspensionDays: smallint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	hrApproverid: mediumint({ unsigned: true }).notNull(),
	dateIssue: date().notNull(),
	dateReply: date().notNull(),
	dateResolve: date().notNull(),
	dateImplement: date().notNull(),
},
(table) => [
	index("makerid").on(table.makerid),
	index("offenseid").on(table.offenseid),
	index("employeeid").on(table.employeeid),
	index("hrApproverid").on(table.hrApproverid),
]);

export const hrDeductionlist = mysqlTable("hr_deductionlist", {
	deductionid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	deductiontypeid: int({ unsigned: true }).notNull(),
	loandate: date().notNull(),
	startdate: date().notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interest: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	amortization: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	amorts: smallint({ unsigned: true }).notNull(),
	paidamorts: decimal({ unsigned: true, precision: 4, scale: 1 }).notNull(),
	balance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const hrDeductiontype = mysqlTable("hr_deductiontype", {
	deductiontypeid: int({ unsigned: true }).primaryKey(),
	deductiontypename: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	agency: tinyint().notNull(),
	amortfrequency: int().notNull(),
});

export const hrDepartments = mysqlTable("hr_departments", {
	departmentid: smallint({ unsigned: true }).notNull(),
	departmentname: char({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint({ unsigned: true }).notNull(),
	parent: int({ unsigned: true }).notNull(),
});

export const hrEmployeesavings = mysqlTable("hr_employeesavings", {
	bracket: int().notNull(),
	deductionfix: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	deductionpercent: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
});

export const hrEvalAppraisal = mysqlTable("hr_eval_appraisal", {
	appraisalid: int({ unsigned: true }).autoincrement().primaryKey(),
	evaluationyear: customType({ dataType: () => 'year(4)' })().notNull(),
	evaluationmonth: tinyint({ unsigned: true }).notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	position: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	department: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	weightOplan: decimal("weight_oplan", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	weightCompetency: decimal("weight_competency", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	weightEssential: decimal("weight_essential", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	ratingOplan: decimal("rating_oplan", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	ratingCompetency: decimal("rating_competency", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	ratingEssential: decimal("rating_essential", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	appraisal: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	ratingFinal: decimal("rating_final", { unsigned: true, precision: 6, scale: 3 }).notNull(),
	ratingFinalComputed: decimal("rating_final_computed", { precision: 5, scale: 2 }).notNull(),
	commentAppraiser: varchar("comment_appraiser", { length: 1000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	commentAppraisee: varchar("comment_appraisee", { length: 1000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	commitment: varchar({ length: 1000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	appraiser: mediumint({ unsigned: true }).notNull(),
	image: blob().notNull(),
	timestamp: timestamp().defaultNow().notNull(),
},
(table) => [
	index("evaluationmonth").on(table.evaluationmonth),
	index("evaluationyear_2").on(table.evaluationyear),
	index("employeeid_2").on(table.employeeid),
	index("evaluationyear").on(table.evaluationyear),
	index("employeeid").on(table.employeeid),
	index("evaluationmonth_2").on(table.evaluationmonth),
]);

export const hrEvalCompetency = mysqlTable("hr_eval_competency", {
	competencyid: int({ unsigned: true }).primaryKey(),
	competencyidNew: varchar("competencyid_new", { length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	competencyname: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: boolean().notNull(),
	parent: int({ unsigned: true }).notNull(),
	childcount: smallint().notNull(),
});

export const hrEvalCompetencyposition = mysqlTable("hr_eval_competencyposition", {
	positionid: mediumint({ unsigned: true }).notNull(),
	competencyid: mediumint({ unsigned: true }).notNull(),
	competencyidNew: varchar("competencyid_new", { length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	competencyweight: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
},
(table) => [
	index("positionid").on(table.positionid),
	index("piid").on(table.competencyid),
]);

export const hrEvalCompetencytarget = mysqlTable("hr_eval_competencytarget", {
	competencytargetid: int({ unsigned: true }).autoincrement().notNull(),
	evaluationyear: customType({ dataType: () => 'year(4)' })().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	categoryid: int({ unsigned: true }).notNull(),
	competencyid: int({ unsigned: true }).notNull(),
	competencyidNew: varchar("competencyid_new", { length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	category: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	competency: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	competencyweight: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	p1: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p2: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p3: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p4: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p5: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p6: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p7: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p8: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p9: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p10: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p11: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p12: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	rating1: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating2: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating3: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating4: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating5: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating6: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating7: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating8: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating9: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating10: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating11: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rating12: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
},
(table) => [
	uniqueIndex("targetid").on(table.competencytargetid),
]);

export const hrEvalEssential = mysqlTable("hr_eval_essential", {
	essentialid: int({ unsigned: true }).primaryKey(),
	essentialname: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: boolean().notNull(),
	parent: int({ unsigned: true }).notNull(),
	childcount: smallint().notNull(),
});

export const hrEvalGroupweight = mysqlTable("hr_eval_groupweight", {
	positionid: mediumint().primaryKey(),
	groupweightOplan: decimal("groupweight_oplan", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	groupweightCompetency: decimal("groupweight_competency", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	groupweightEssential: decimal("groupweight_essential", { unsigned: true, precision: 5, scale: 2 }).notNull(),
});

export const hrEvalOplan = mysqlTable("hr_eval_oplan", {
	oplanid: mediumint({ unsigned: true }).primaryKey(),
	oplanidNew: varchar("oplanid_new", { length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	name: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: boolean().notNull(),
	parent: mediumint({ unsigned: true }).notNull(),
	childcount: smallint().notNull(),
	unitid: smallint({ unsigned: true }).notNull(),
});

export const hrEvalOplanposition = mysqlTable("hr_eval_oplanposition", {
	positionid: mediumint().notNull(),
	oplanid: mediumint({ unsigned: true }).notNull(),
	piid: varchar({ length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	oplanweight: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
},
(table) => [
	index("positionid").on(table.positionid),
	index("piid").on(table.oplanid),
]);

export const hrEvalOplantarget = mysqlTable("hr_eval_oplantarget", {
	oplantargetid: int({ unsigned: true }).autoincrement().notNull(),
	evaluationyear: customType({ dataType: () => 'year(4)' })().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	positionid: mediumint({ unsigned: true }).notNull(),
	kraid: mediumint({ unsigned: true }).notNull(),
	kra: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pi: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	unitname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	vartype: tinyint({ unsigned: true }).notNull(),
	oplanweight: decimal({ unsigned: true, precision: 6, scale: 3 }).notNull(),
	oplanid: mediumint({ unsigned: true }).notNull(),
	oplanidNew: varchar("oplanid_new", { length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	t1: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t2: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t3: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	t4: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t5: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t6: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	t7: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t8: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t9: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	t10: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t11: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t12: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	p1: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p2: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p3: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p4: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p5: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p6: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p7: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p8: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p9: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p10: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p11: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p12: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
},
(table) => [
	index("evaluationyear").on(table.evaluationyear),
	index("positionid").on(table.positionid),
	index("positionid_2").on(table.positionid),
	uniqueIndex("oplantargetid").on(table.oplantargetid),
	index("employeeid").on(table.employeeid),
	index("employeeid_2").on(table.employeeid),
]);

export const hrEvalOplanunit = mysqlTable("hr_eval_oplanunit", {
	unitid: smallint({ unsigned: true }).primaryKey(),
	unitname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	vartype: tinyint({ unsigned: true }).notNull(),
});

export const hrEvalPerformancematrix = mysqlTable("hr_eval_performancematrix", {
	id: int().primaryKey(),
	description: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lower: decimal({ precision: 4, scale: 2 }).notNull(),
	upper: decimal({ precision: 5, scale: 2 }).notNull(),
});

export const hrEvalSetting = mysqlTable("hr_eval_setting", {
	editlock: tinyint({ unsigned: true }).notNull(),
	appraisallock: tinyint({ unsigned: true }).notNull(),
	evaluationyear: customType({ dataType: () => 'year(4)' })().notNull(),
	evaluationmonth: tinyint({ unsigned: true }).notNull(),
	groupweightOplan: decimal("groupweight_oplan", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	groupweightCompetency: decimal("groupweight_competency", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	groupweightEssential: decimal("groupweight_essential", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	competencyratingcount: tinyint({ unsigned: true }).notNull(),
	competencyratingweight1: smallint({ unsigned: true }).notNull(),
	competencyratingweight2: smallint({ unsigned: true }).notNull(),
	competencyratingweight3: smallint({ unsigned: true }).notNull(),
	competencyratingweight4: smallint({ unsigned: true }).notNull(),
	competencyratingweight5: smallint({ unsigned: true }).notNull(),
});

export const hrEvalSettings = mysqlTable("hr_eval_settings", {
	evalSettingsid: int("eval_settingsid", { unsigned: true }).autoincrement().primaryKey(),
	evaluationyear: smallint().notNull(),
	evaluationmonth: tinyint().notNull(),
	isActive: boolean("is_active").notNull(),
	lockSettings: boolean("lock_settings").notNull(),
	lockAppraisal: boolean("lock_appraisal").notNull(),
	oplanTemplate: text("oplan_template").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	competencyTemplate: text("competency_template").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	positions: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	weights: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	performanceMatrix: text("performance_matrix").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	conversion: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const hrEvalTarget = mysqlTable("hr_eval_target", {
	targetid: int({ unsigned: true }).autoincrement().notNull(),
	evaluationyear: customType({ dataType: () => 'year(4)' })().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	piid: mediumint({ unsigned: true }).notNull(),
	t1: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t2: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t3: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t4: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t5: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t6: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t7: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t8: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t9: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t10: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t11: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	t12: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p1: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p2: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p3: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p4: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p5: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p6: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p7: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p8: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p9: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p10: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p11: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	p12: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
},
(table) => [
	uniqueIndex("targetid").on(table.targetid),
]);

export const hrLeavecreditstemp = mysqlTable("hr_leavecreditstemp", {
	id: int().autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	vlcredits: decimal({ precision: 5, scale: 2 }).notNull(),
	vlcheck: boolean().notNull(),
	slcredits: decimal({ precision: 5, scale: 2 }).notNull(),
	slcheck: boolean().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const hrLeavesl = mysqlTable("hr_leavesl", {
	slid: int({ unsigned: true }).autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	datefiled: date().notNull(),
	dateapproved: date().notNull(),
	slcredit: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	sldebit: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	slbalance: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	approver2id: mediumint({ unsigned: true }).notNull(),
	purpose: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	units: tinyint().notNull(),
});

export const hrLeavesldetail = mysqlTable("hr_leavesldetail", {
	slid: int({ unsigned: true }).notNull(),
	leavedate: date().notNull(),
	availed: tinyint({ unsigned: true }).notNull(),
});

export const hrLeavetemp = mysqlTable("hr_leavetemp", {
	leavetempid: int().autoincrement().primaryKey(),
	leavetype: tinyint({ unsigned: true }).notNull(),
	datefiled: date().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	datestart: date().notNull(),
	dateend: date().notNull(),
	leavedays: tinyint({ unsigned: true }).notNull(),
	purpose: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	approver1ok: tinyint({ unsigned: true }).notNull(),
	approver2id: mediumint({ unsigned: true }).notNull(),
	units: tinyint({ unsigned: true }).notNull(),
});

export const hrLeavevl = mysqlTable("hr_leavevl", {
	vlid: int({ unsigned: true }).autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	datefiled: date().notNull(),
	dateapproved: date().notNull(),
	vlcredit: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	vldebit: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	vlbalance: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	approver2id: mediumint({ unsigned: true }).notNull(),
	purpose: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	units: tinyint().notNull(),
});

export const hrLeavevldetail = mysqlTable("hr_leavevldetail", {
	vlid: int({ unsigned: true }).notNull(),
	leavedate: date().notNull(),
	availed: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("vlid").on(table.vlid),
]);

export const hrNpa = mysqlTable("hr_npa", {
	npaid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	employeeid: int().notNull(),
	effectivitydate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	employmentstatus: tinyint().notNull(),
	payrollstatus: boolean().notNull(),
	rankid: smallint().notNull(),
	positionid: mediumint({ unsigned: true }).notNull(),
	payrollfrequency: tinyint({ unsigned: true }).notNull(),
	workdaysperyear: smallint({ unsigned: true }).notNull(),
	wagebasis: tinyint({ unsigned: true }).notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("effectivitydate").on(table.effectivitydate),
	index("employeeid").on(table.employeeid),
]);

export const hrNpatemp = mysqlTable("hr_npatemp", {
	transdate: date().notNull(),
	employeeid: mediumint({ unsigned: true }).primaryKey(),
	effectivitydate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	employmentstatus: tinyint().notNull(),
	payrollstatus: boolean().notNull(),
	rankid: smallint().notNull(),
	positionid: mediumint({ unsigned: true }).notNull(),
	payrollfrequency: tinyint({ unsigned: true }).notNull(),
	workdaysperyear: smallint({ unsigned: true }).notNull(),
	wagebasis: tinyint({ unsigned: true }).notNull(),
	basicsalary: binary({ length: 16 }).notNull(),
	allowance1: binary({ length: 16 }).notNull(),
	allowance2: binary({ length: 16 }).notNull(),
	allowance3: binary({ length: 16 }).notNull(),
	allowance4: binary({ length: 16 }).notNull(),
	allowance5: binary({ length: 16 }).notNull(),
	allowance6: binary({ length: 16 }).notNull(),
	allowance7: binary({ length: 16 }).notNull(),
	allowance8: binary({ length: 16 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const hrObSeminar = mysqlTable("hr_ob_seminar", {
	obSeminarId: int("ob_seminar_id").autoincrement().primaryKey(),
	obSeminarType: int("ob_seminar_type").notNull(),
	obSeminarUnit: boolean("ob_seminar_unit").notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	obSeminarInfo: text("ob_seminar_info").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	startdate: date().notNull(),
	enddate: date().notNull(),
	postedby: mediumint({ unsigned: true }).notNull(),
	remarks: boolean().notNull(),
});

export const hrOvertimepremium = mysqlTable("hr_overtimepremium", {
	holidaytype: tinyint({ unsigned: true }).primaryKey(),
	firsteight: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	excesseight: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	nightdiff: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
});

export const hrPagibig = mysqlTable("hr_pagibig", {
	lower: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	upper: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	rateEr: decimal("rate_er", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	rateEe: decimal("rate_ee", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	amountEr: decimal("amount_er", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	amountEe: decimal("amount_ee", { unsigned: true, precision: 12, scale: 2 }).notNull(),
});

export const hrPayrolldata1 = mysqlTable("hr_payrolldata1", {
	payrollid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	payrolldate: date().notNull(),
	payrollfrequency: smallint({ unsigned: true }).notNull(),
	workdaysofperiod: tinyint().notNull(),
	cutoffdate1: date().notNull(),
	cutoffdate2: date().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
]);

export const hrPayrolldata2 = mysqlTable("hr_payrolldata2", {
	payrollid: int({ unsigned: true }).notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	costcenterid: mediumint({ unsigned: true }).notNull(),
	payrollstatus: boolean().notNull(),
	workdaysperyear: smallint({ unsigned: true }).notNull(),
	wagebasis: tinyint({ unsigned: true }).notNull(),
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
	odexcess8: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	odnightdiff: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rhfirst8: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rhexcess8: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	rhnightdiff: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	shfirst8: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	shexcess8: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	shnightdiff: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	daysabsent: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	hourslate: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	hoursundertime: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("payrollid").on(table.payrollid),
	index("branchid").on(table.branchid),
]);

export const hrPayrolldata3 = mysqlTable("hr_payrolldata3", {
	payrollid: int({ unsigned: true }).notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	deductiontypeid: smallint({ unsigned: true }).notNull(),
	referenceid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	remarks: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amortization: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	balance: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("payrollid").on(table.payrollid),
	index("employeeid").on(table.employeeid),
]);

export const hrPayrolltemp1 = mysqlTable("hr_payrolltemp1", {
	payrolldate: date().primaryKey(),
	payrollfrequency: tinyint({ unsigned: true }).notNull(),
	workdaysofperiod: tinyint().notNull(),
	cutoffdate1: date().notNull(),
	cutoffdate2: date().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	id2: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("payrollfrequency").on(table.payrollfrequency),
	index("makerid").on(table.makerid),
	index("cutoffdate1").on(table.cutoffdate1),
	index("approverid").on(table.approverid),
]);

export const hrPayrolltemp2 = mysqlTable("hr_payrolltemp2", {
	payrollid: int().autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	odexcess8: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	odnightdiff: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	rhfirst8: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	rhexcess8: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	rhnightdiff: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	shfirst8: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	shexcess8: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	shnightdiff: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	daysabsent: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	hourslate: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	hoursundertime: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
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
	tempid: int().autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	deductiontypeid: smallint({ unsigned: true }).notNull(),
	referenceid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	remarks: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amortization: decimal({ precision: 12, scale: 2 }).notNull(),
	balance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const hrPhilhealth = mysqlTable("hr_philhealth", {
	lower: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	upper: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	rateEr: decimal("rate_er", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	rateEe: decimal("rate_ee", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	amountEr: decimal("amount_er", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	amountEe: decimal("amount_ee", { unsigned: true, precision: 12, scale: 2 }).notNull(),
});

export const hrPositions = mysqlTable("hr_positions", {
	positionid: mediumint({ unsigned: true }).primaryKey(),
	positionname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	departmentid: smallint({ unsigned: true }).notNull(),
	costcenterid: smallint({ unsigned: true }).notNull(),
});

export const hrPositiontemp = mysqlTable("hr_positiontemp", {
	tempid: int().autoincrement().primaryKey(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	positionid: mediumint({ unsigned: true }).notNull(),
	durationFrom: date().notNull(),
	durationTo: date().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	dateCancelled: char({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const hrRanks = mysqlTable("hr_ranks", {
	rankid: int().primaryKey(),
	rankname: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isofficer: tinyint({ unsigned: true }).notNull(),
	payrollLevel: tinyint({ unsigned: true }).notNull(),
});

export const hrSss = mysqlTable("hr_sss", {
	id: int().autoincrement().primaryKey(),
	lower: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	upper: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	scEc: decimal("sc_ec", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	scPf: decimal("sc_pf", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	ssEr: decimal("ss_er", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	ssEe: decimal("ss_ee", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	ecEr: decimal("ec_er", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	ecEe: decimal("ec_ee", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	pfEr: decimal("pf_er", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	pfEe: decimal("pf_ee", { unsigned: true, precision: 10, scale: 2 }).notNull(),
});

export const hrWtaxbracket = mysqlTable("hr_wtaxbracket", {
	bracketid: decimal({ precision: 10, scale: 2 }).primaryKey(),
	lower: decimal({ precision: 10, scale: 2 }).notNull(),
	upper: decimal({ precision: 10, scale: 2 }).notNull(),
	initialtax: decimal({ precision: 10, scale: 2 }).notNull(),
	rate: decimal({ precision: 4, scale: 2 }).notNull(),
});

export const instapayBanks = mysqlTable("instapay_banks", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	bin: mediumint().notNull(),
	bankname: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	mnemonic: varchar({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const instapayFees = mysqlTable("instapay_fees", {
	feeid: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	gatewaycode: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lower: decimal({ precision: 12, scale: 2 }).notNull(),
	upper: decimal({ precision: 12, scale: 2 }).notNull(),
	variablefee: decimal({ precision: 12, scale: 2 }).notNull(),
	fix: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const instapayGateways = mysqlTable("instapay_gateways", {
	id: smallint({ unsigned: true }).autoincrement().primaryKey(),
	gatewaycode: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amountlimit: decimal({ precision: 12, scale: 2 }).notNull(),
	partnershare: decimal({ precision: 4, scale: 2 }).notNull(),
	fixfee: decimal({ precision: 6, scale: 2 }).notNull(),
	implementation: datetime().defaultNow().notNull(),
});

export const instapayTransactions = mysqlTable("instapay_transactions", {
	transid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	apiTransactionid: bigint("api_transactionid", { unsigned: true, mode: 'number' }).default(sql`NULL`),
	transtype: boolean().notNull(),
	bnkcode: mediumint().notNull(),
	acctname: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	acctno: bigint({ unsigned: true, mode: 'number' }).notNull(),
	accttype: smallint().notNull(),
	acctident: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tfrname: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tfrbnkcode: smallint().notNull(),
	tfracctno: varchar({ length: 19 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	txnamt: decimal({ precision: 7, scale: 2 }).notNull(),
	tnxdate: char({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tnxtime: char({ length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	invno: varchar({ length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	param1: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	param2: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	param3: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	custno: varchar({ length: 19 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	purpose: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	postingtime: datetime().notNull(),
	transdate: date().notNull(),
	fee: decimal({ precision: 5, scale: 2 }).default(sql`NULL`),
	channel: boolean().notNull(),
	responseRespcode: varchar("response_respcode", { length: 4 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	responseTraceno: char("response_traceno", { length: 12 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	responseRespdesc: varchar("response_respdesc", { length: 25 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).default(sql`NULL`),
	savingstransactionid2: bigint({ unsigned: true, mode: 'number' }).default(sql`NULL`),
});

export const insuranceAmort = mysqlTable("insurance_amort", {
	policyid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	datedue: date().notNull(),
	insurancePremium: decimal("insurance_premium", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	insuranceSavings: decimal("insurance_savings", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	insuranceCf: decimal("insurance_cf", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	insuranceCbu: decimal("insurance_cbu", { precision: 12, scale: 2 }).notNull(),
	datepaid: date().notNull(),
	paymentid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	lendingAmortnumber: smallint("lending_amortnumber").notNull(),
	amortnumber: smallint().notNull(),
},
(table) => [
	index("amortnumber_4").on(table.lendingAmortnumber),
	index("clientid").on(table.clientid),
	index("paymentid").on(table.paymentid),
	index("amortnumber").on(table.lendingAmortnumber),
	index("amortnumber_3").on(table.lendingAmortnumber),
	index("amortnumber_5").on(table.amortnumber),
	index("policyid").on(table.policyid),
	index("datepaid").on(table.datepaid),
	index("datedue").on(table.datedue),
	index("amortnumber_2").on(table.lendingAmortnumber),
]);

export const insuranceClaims = mysqlTable("insurance_claims", {
	claimId: bigint("claim_id", { unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	timestamp: timestamp().defaultNow().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	policyid: bigint({ mode: 'number' }).notNull(),
	policydetailId: bigint("policydetail_id", { unsigned: true, mode: 'number' }).notNull(),
	benefit: char({ length: 13 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	diagnosisId: smallint("diagnosis_id", { unsigned: true }).notNull(),
	diagnosisText: varchar("diagnosis_text", { length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dateApplied: date("date_applied").notNull(),
	claimDate: date("claim_date").notNull(),
	claimDate2: date("claim_date2").notNull(),
	claimAvailment: tinyint("claim_availment", { unsigned: true }).notNull(),
	claimAmount: decimal("claim_amount", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	claimantName: varchar("claimant_name", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	approvedDate: date("approved_date").notNull(),
	releaseDate: date("release_date").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	releasedbyid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("releasedbyid").on(table.releasedbyid),
	index("branchid").on(table.branchid),
	index("policydetail_id").on(table.policydetailId),
	index("date_applied").on(table.dateApplied),
	index("release_date").on(table.releaseDate),
	index("approverid").on(table.approverid),
	index("policyid").on(table.policyid),
	index("benefit").on(table.benefit),
	index("approved_date").on(table.approvedDate),
	index("makerid").on(table.makerid),
]);

export const insuranceDiagnosis = mysqlTable("insurance_diagnosis", {
	diagnosisId: mediumint("diagnosis_id", { unsigned: true }).primaryKey(),
	diagnosisName: char("diagnosis_name", { length: 200 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	diagnosisName2: varchar("diagnosis_name2", { length: 1000 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	category: mediumint({ unsigned: true }).notNull(),
	parent: mediumint({ unsigned: true }).notNull(),
	level: tinyint({ unsigned: true }).notNull(),
	childcount: smallint({ unsigned: true }).notNull(),
	icdCode: varchar("icd_code", { length: 12 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
},
(table) => [
	index("level").on(table.level),
	index("level_2").on(table.level),
	index("level_3").on(table.level),
	index("level_4").on(table.level),
	index("category").on(table.category),
	index("category_2").on(table.category),
	index("category_3").on(table.category),
	index("category_4").on(table.category),
]);

export const insuranceIncident = mysqlTable("insurance_incident", {
	incidentid: int({ unsigned: true }).autoincrement().primaryKey(),
	incidentType: tinyint("incident_type").notNull(),
	incident: varchar({ length: 60 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deathType: tinyint("death_type").default(sql`NULL`),
});

export const insurancePayments = mysqlTable("insurance_payments", {
	paymentid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	paymentidOrig: bigint("paymentid_orig", { unsigned: true, mode: 'number' }).notNull(),
	transdate: date().notNull(),
	policyid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	insurancePremium: decimal("insurance_premium", { precision: 12, scale: 2 }).notNull(),
	insuranceSavings: decimal("insurance_savings", { precision: 12, scale: 2 }).notNull(),
	insuranceCf: decimal("insurance_cf", { precision: 12, scale: 2 }).notNull(),
	insuranceCbu: decimal("insurance_cbu", { precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("clientid").on(table.clientid),
	index("policyid").on(table.policyid),
	index("paymentid_orig").on(table.paymentidOrig),
]);

export const insurancePolicy = mysqlTable("insurance_policy", {
	policyid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	policydate: date().notNull(),
	maturity: date().notNull(),
	postingtime: datetime().notNull(),
	branchid: mediumint().notNull(),
	insuranceproductid: int({ unsigned: true }).notNull(),
	termcomputation: tinyint({ unsigned: true }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	countinsured: tinyint({ unsigned: true }).notNull(),
	premiumTotal: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	premiumNet: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	cbuSavingsid: bigint("cbu_savingsid", { unsigned: true, mode: 'number' }).notNull(),
	userid: mediumint({ unsigned: true }).notNull(),
	cancelUserid: mediumint("cancel_userid", { unsigned: true }).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("maturity").on(table.maturity),
	index("maturity_3").on(table.maturity),
	index("policydate").on(table.policydate),
	index("clientid").on(table.clientid),
	index("termcomputation").on(table.termcomputation),
	index("maturity_2").on(table.maturity),
	index("productid").on(table.insuranceproductid),
]);

export const insurancePolicybeneficiary = mysqlTable("insurance_policybeneficiary", {
	id: bigint({ unsigned: true, mode: 'number' }).autoincrement().notNull(),
	policyid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	beneficiaryid: int({ unsigned: true }).notNull(),
	relationship: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneficiaryname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	birthdate: date().notNull(),
},
(table) => [
	index("policyid").on(table.policyid),
	index("relationship").on(table.relationship),
	index("relationship_3").on(table.relationship),
	uniqueIndex("id").on(table.id),
	index("beneficiaryid").on(table.beneficiaryid),
	index("relationship_2").on(table.relationship),
]);

export const insurancePolicydetail = mysqlTable("insurance_policydetail", {
	policydetailId: bigint("policydetail_id", { unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	policyid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	relationship: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	relativeid: bigint({ mode: 'number' }).notNull(),
	coverage: decimal({ precision: 12, scale: 2 }).notNull(),
	premium: decimal({ precision: 10, scale: 2 }).notNull(),
	premiumNet: decimal("premium_net", { unsigned: true, precision: 10, scale: 2 }).notNull(),
	lastname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	firstname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	middlename: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	birthdate: date().notNull(),
	insuredClientStatus: boolean("insured_client_status").default(false),
},
(table) => [
	index("firstname").on(table.firstname),
	index("lastname").on(table.lastname),
	index("middlename_2").on(table.middlename),
	index("firstname_3").on(table.firstname),
	index("lastname_3").on(table.lastname),
	index("policyid").on(table.policyid),
	index("relationship").on(table.relationship),
	index("middlename").on(table.middlename),
	index("firstname_2").on(table.firstname),
	index("lastname_2").on(table.lastname),
	index("middlename_3").on(table.middlename),
	index("relativeid").on(table.relativeid),
]);

export const insuranceProducts = mysqlTable("insurance_products", {
	insuranceproductid: int({ unsigned: true }).autoincrement().primaryKey(),
	productdetails: varchar({ length: 7000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("productdetails").on(table.productdetails),
	index("productdetails_2").on(table.productdetails),
]);

export const lendingAgingbracket = mysqlTable("lending_agingbracket", {
	lower: smallint({ unsigned: true }).notNull(),
	upper: smallint({ unsigned: true }).notNull(),
});

export const lendingAmortdetails = mysqlTable("lending_amortdetails", {
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	datedue: date().notNull(),
	datedueOrig: date("datedue_orig").notNull(),
	principal: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	datepaid: date().notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("datedue").on(table.datedue),
	index("datedue_orig").on(table.datedueOrig),
	index("amortnumber").on(table.amortnumber),
	index("datepaid").on(table.datepaid),
]);

export const lendingAmortdetailsedit = mysqlTable("lending_amortdetailsedit", {
	transdate: date().notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	changesPrincipal: smallint("changes_principal").notNull(),
	discountinterest: decimal({ precision: 10, scale: 2 }).notNull(),
	discountservicecharge: decimal({ precision: 10, scale: 2 }).notNull(),
	discountsavings: decimal({ precision: 10, scale: 2 }).notNull(),
	discountamort1: decimal({ precision: 10, scale: 2 }).notNull(),
	discountamort2: decimal({ precision: 10, scale: 2 }).notNull(),
	justification: varchar({ length: 300 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const lendingAmortdetailstemp = mysqlTable("lending_amortdetailstemp", {
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	datedue: date().notNull(),
	principal: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
]);

export const lendingAssetsize = mysqlTable("lending_assetsize", {
	assetsizeid: mediumint({ unsigned: true }).primaryKey(),
	name: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const lendingBorrowertypes = mysqlTable("lending_borrowertypes", {
	borrowertypeid: mediumint({ unsigned: true }).primaryKey(),
	borrowertypename: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingCenters = mysqlTable("lending_centers", {
	centerid: int({ unsigned: true }).primaryKey(),
	centernumber: smallint({ unsigned: true }).notNull(),
	centername: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	barangayid: mediumint({ unsigned: true }).notNull(),
	meetingday: tinyint().notNull(),
	meetingtime: time().notNull(),
	accountofficer: mediumint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	signatory1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	signatory2id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
},
(table) => [
	index("barangayid").on(table.barangayid),
	index("accountofficer").on(table.accountofficer),
	index("branch").on(table.branchid),
]);

export const lendingCenterstemp = mysqlTable("lending_centerstemp", {
	tempid: int({ unsigned: true }).autoincrement().primaryKey(),
	centernumber: smallint({ unsigned: true }).notNull(),
	centername: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	barangayid: mediumint({ unsigned: true }).notNull(),
	meetingday: tinyint().notNull(),
	meetingtime: time().notNull(),
	accountofficer: mediumint({ unsigned: true }).notNull(),
	signatory1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	signatory2id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	savingsproductid: smallint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
});

export const lendingCenterstransfer = mysqlTable("lending_centerstransfer", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	transDate: date().notNull(),
	centerid: int({ unsigned: true }).notNull(),
	branchidFrom: smallint({ unsigned: true }).notNull(),
	branchidTo: smallint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	isTransferred: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("approverid").on(table.approverid),
	index("makerid").on(table.makerid),
	index("isTransferred").on(table.isTransferred),
]);

export const lendingClientgroup = mysqlTable("lending_clientgroup", {
	clientgroupid: mediumint({ unsigned: true }).primaryKey(),
	name: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingCreditlineData = mysqlTable("lending_creditline_data", {
	creditlineId: int("creditline_id", { unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	creditlineProductid: int("creditline_productid").notNull(),
	loanproductid: int().notNull(),
	creditlineLimit: decimal("creditline_limit", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	creditlineTerm: smallint("creditline_term").notNull(),
	creditlineDate: date("creditline_date").notNull(),
	creditlineMaturity: date("creditline_maturity").notNull(),
	creditlineApprovers: varchar("creditline_approvers", { length: 1000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creditlineStatus: tinyint("creditline_status").notNull(),
	creditlineNotes: varchar("creditline_notes", { length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("creditline_date").on(table.creditlineDate),
	index("branchid_2").on(table.branchid),
	index("creditline_maturity_2").on(table.creditlineMaturity),
	index("branchid").on(table.branchid),
	index("creditline_maturity").on(table.creditlineMaturity),
	index("creditline_date_2").on(table.creditlineDate),
]);

export const lendingCreditlineProduct = mysqlTable("lending_creditline_product", {
	creditlineProductid: int("creditline_productid").autoincrement().primaryKey(),
	creditlineProductname: varchar("creditline_productname", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	productdescription: varchar({ length: 1000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	loanproductid: tinyint().notNull(),
	creditlineMaxlimit: decimal("creditline_maxlimit", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	creditlineMaxterm: tinyint("creditline_maxterm", { unsigned: true }).notNull(),
	requiredCreditlineapprovers: tinyint("required_creditlineapprovers", { unsigned: true }).notNull(),
	requiredLoanapprovers: tinyint("required_loanapprovers", { unsigned: true }).notNull(),
});

export const lendingCreditscoreData = mysqlTable("lending_creditscore_data", {
	creditscoreId: int("creditscore_id", { unsigned: true }).autoincrement().primaryKey(),
	timestamp: datetime().defaultNow().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	creditscoreTemplateId: smallint("creditscore_template_id", { unsigned: true }).notNull(),
	totalscore: smallint({ unsigned: true }).notNull(),
	result: boolean().notNull(),
	risklevel: tinyint({ unsigned: true }).notNull(),
	risklevelName: varchar("risklevel_name", { length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	details: varchar({ length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("makerid").on(table.makerid),
	index("pnid").on(table.pnid),
	index("creditscore_template_id").on(table.creditscoreTemplateId),
	index("branchid").on(table.branchid),
]);

export const lendingCreditscoreTemplate = mysqlTable("lending_creditscore_template", {
	creditscoreTemplateId: smallint("creditscore_template_id").autoincrement().primaryKey(),
	creditscoreName: varchar("creditscore_name", { length: 60 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creditscoreDescription: varchar("creditscore_description", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creditscoreTemplate: varchar("creditscore_template", { length: 15000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	status: boolean().notNull(),
});

export const lendingDeductionrate = mysqlTable("lending_deductionrate", {
	loanproductid: int({ unsigned: true }).notNull(),
	deduction: tinyint({ unsigned: true }).notNull(),
	lower: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	upper: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	rate: decimal({ unsigned: true, precision: 12, scale: 3 }).notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
]);

export const lendingDiscount = mysqlTable("lending_discount", {
	discountid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	discountinterest: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountservicecharge: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountsavings: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountamort1: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountamort2: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountpenalty: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountpastdueinterest: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	justification: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("approverid").on(table.approverid),
	index("pnid").on(table.pnid),
	index("branchid").on(table.branchid),
]);

export const lendingDiscounttemp = mysqlTable("lending_discounttemp", {
	discountid: int({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	penalty: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	pastdueinterest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("branchid").on(table.branchid),
	index("discountid").on(table.discountid),
	index("amortnumber").on(table.amortnumber),
	index("makerid").on(table.approverid),
]);

export const lendingEconomicactivities = mysqlTable("lending_economicactivities", {
	id: mediumint().autoincrement().primaryKey(),
	name: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingIndustries = mysqlTable("lending_industries", {
	industryid: tinyint({ unsigned: true }).primaryKey(),
	industryname: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	defaultname: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isuse: tinyint().notNull(),
},
(table) => [
	index("isuse").on(table.isuse),
]);

export const lendingIndustryperloanclass = mysqlTable("lending_industryperloanclass", {
	loanclassid: smallint({ unsigned: true }).notNull(),
	industryid: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("loanclassid_2").on(table.loanclassid),
	index("loanclassid").on(table.loanclassid),
]);

export const lendingInsformcoordinates = mysqlTable("lending_insformcoordinates", {
	insuranceform: int({ unsigned: true }).notNull(),
	data: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	x: decimal({ unsigned: true, precision: 5, scale: 1 }).notNull(),
	y: decimal({ unsigned: true, precision: 5, scale: 1 }).notNull(),
});

export const lendingInsuranceproviders = mysqlTable("lending_insuranceproviders", {
	insuranceproviderid: tinyint({ unsigned: true }).autoincrement().primaryKey(),
	name: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortname: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	insurancelifeprincipal: decimal({ unsigned: true, precision: 8, scale: 0 }).notNull(),
	insurancelifeparent: decimal({ unsigned: true, precision: 8, scale: 0 }).notNull(),
	insurancelifespouse: decimal({ unsigned: true, precision: 8, scale: 0 }).notNull(),
	insurancelifesibling: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	insurancelifechild: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	maxageprincipal: tinyint({ unsigned: true }).notNull(),
	maxageparent: tinyint({ unsigned: true }).notNull(),
	maxagespouse: tinyint({ unsigned: true }).notNull(),
	maxagesibling: tinyint({ unsigned: true }).notNull(),
	maxagechild: tinyint({ unsigned: true }).notNull(),
	insuredparent: smallint().notNull(),
	insuredspouse: smallint().notNull(),
	insuredsibling: smallint().notNull(),
	insuredchild: smallint().notNull(),
	commissionrate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
});

export const lendingInsurancerates = mysqlTable("lending_insurancerates", {
	insuranceproviderid: tinyint({ unsigned: true }).notNull(),
	month: smallint({ unsigned: true }).notNull(),
	ratecredit: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
	ratelifeprincipal: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
	ratelifeparent: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
	ratelifespouse: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
	ratelifesibling: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
	ratelifechild: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
});

export const lendingInterestrates = mysqlTable("lending_interestrates", {
	range: int({ unsigned: true }).notNull(),
});

export const lendingLetters = mysqlTable("lending_letters", {
	letterid: smallint().primaryKey(),
	name: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint({ unsigned: true }).notNull(),
	daysMin: mediumint({ unsigned: true }).notNull(),
	daysMax: mediumint({ unsigned: true }).notNull(),
	codeLetter: text("code_letter").charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	uniqueIndex("letterid").on(table.letterid),
]);

export const lendingLoanclassifications = mysqlTable("lending_loanclassifications", {
	loanclassid: smallint({ unsigned: true }).primaryKey(),
	name: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	defaultname: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcodecurrent: int({ unsigned: true }).notNull(),
	glcodeincomecurrent: int({ unsigned: true }).notNull(),
	glcodepastdue: int({ unsigned: true }).notNull(),
	glcodeincomepastdue: int({ unsigned: true }).notNull(),
	glcodeNonperf: int({ unsigned: true }).notNull(),
	glcodeIncomeNonperf: int({ unsigned: true }).notNull(),
	glcodeinlitigation: int({ unsigned: true }).notNull(),
	glcodeincomeinlitigation: int({ unsigned: true }).notNull(),
	glcodeDiscountOutrightInt: int({ unsigned: true }).notNull(),
	glcodeDiscountOutrightSC: int({ unsigned: true }).notNull(),
	glcodeDiscountAmortInt: int({ unsigned: true }).notNull(),
	glcodeDiscountAmortSC: int({ unsigned: true }).notNull(),
	glcodeProvision: int({ unsigned: true }).notNull(),
	isBusinessloan: boolean("is_businessloan").notNull(),
	level: tinyint().notNull(),
	parent: mediumint({ unsigned: true }).notNull(),
	childcount: smallint().notNull(),
});

export const lendingLoanclassperpurpose = mysqlTable("lending_loanclassperpurpose", {
	loanpurposeid: mediumint({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
},
(table) => [
	index("loanpurposeid").on(table.loanpurposeid),
]);

export const lendingLoandetails = mysqlTable("lending_loandetails", {
	pnid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	pnidPreviousCbs: varchar("pnid_previous_cbs", { length: 50 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	spouseid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	pnid2: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	loanproductid: int({ unsigned: true }).notNull(),
	termunit: tinyint({ unsigned: true }).notNull(),
	term: smallint({ unsigned: true }).notNull(),
	date: date().notNull(),
	postingtime: datetime().notNull(),
	maturity: date().notNull(),
	maturity2: date().notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interestrate: decimal({ unsigned: true, precision: 6, scale: 4 }).notNull(),
	interestcomputation: tinyint({ unsigned: true }).notNull(),
	irr: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	eir: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	eirInt: decimal("eir_int", { unsigned: true, precision: 7, scale: 5 }).notNull(),
	eirSc: decimal("eir_sc", { unsigned: true, precision: 7, scale: 5 }).notNull(),
	interestcomputationbasis: tinyint({ unsigned: true }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	interestPartialDiscDate: date().notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	insurance: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	tax: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction1: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction2: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction3: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction4: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction5: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction6: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction7: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction8: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	deduction9: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	proceeds: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	proceedstype: tinyint({ unsigned: true }).notNull(),
	proceedsreference: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	insuranceproviderid: smallint({ unsigned: true }).notNull(),
	creditorid: smallint({ unsigned: true }).notNull(),
	coborrowerid: int({ unsigned: true }).notNull(),
	comaker1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	comaker2id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	comaker3id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	comaker4id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	comaker5id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	workersemployed: smallint({ unsigned: true }).notNull(),
	industryid: smallint({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
	loanpurposeid: mediumint({ unsigned: true }).notNull(),
	loanpurpose: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	securityid: mediumint({ unsigned: true }).notNull(),
	securitydetails: varchar({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	assetsizeid: mediumint({ unsigned: true }).notNull(),
	borrowertypeid: mediumint({ unsigned: true }).notNull(),
	clientgroupid: mediumint({ unsigned: true }).notNull(),
	restructuredtag: tinyint({ unsigned: true }).notNull(),
	restructuredpnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	restructuredCount: tinyint({ unsigned: true }).notNull(),
	autodebitAmort: tinyint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amort2destination: tinyint({ unsigned: true }).notNull(),
	cureperiod: tinyint({ unsigned: true }).notNull(),
	loancycle: smallint({ unsigned: true }).notNull(),
	loancycleProduct: smallint({ unsigned: true }).notNull(),
	loanofficerid: mediumint({ unsigned: true }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	tellerid: mediumint({ unsigned: true }).notNull(),
	loanstatus: tinyint({ unsigned: true }).notNull(),
	loanstatusstatic: tinyint({ unsigned: true }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	nextdatedue: date().notNull(),
	lasttransdate: date().notNull(),
	datepaidOrig: date().notNull(),
	lettercount: boolean().notNull(),
	promptPayment: decimal({ unsigned: true, precision: 4, scale: 1 }).notNull(),
	releasetag: tinyint({ unsigned: true }).notNull(),
	applicationDetails: mediumtext("application_details").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dateApplied: date().default(sql`NULL`),
},
(table) => [
	index("spouseid").on(table.spouseid),
	index("savingsid").on(table.savingsid),
	index("application_details").on(table.applicationDetails),
	index("maturity").on(table.maturity),
	index("comaker1id").on(table.comaker1id),
	index("maturity2").on(table.maturity2),
	index("amount").on(table.amount),
	index("comaker4id").on(table.comaker4id),
	index("industryid").on(table.industryid),
	index("loanproductid").on(table.loanproductid),
	index("tellerid").on(table.tellerid),
	index("clientid").on(table.clientid),
	index("restructuredpnid").on(table.restructuredpnid),
	index("loanbalance").on(table.loanbalance),
	index("pnid_previous_cbs").on(table.pnidPreviousCbs),
	index("coborrowerid").on(table.coborrowerid),
	index("comaker2id").on(table.comaker2id),
	index("securityid").on(table.securityid),
	index("comaker3id").on(table.comaker3id),
	index("comaker5id").on(table.comaker5id),
	index("branchid").on(table.branchid),
	index("postedbyid").on(table.postedbyid),
	index("date").on(table.date),
]);

export const lendingLoandetailsChanges = mysqlTable("lending_loandetails_changes", {
	changeId: int("change_id").autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transdate: date().notNull(),
	changes: varchar({ length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	dateposted: date().notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("approverid").on(table.approverid),
	index("postedbyid").on(table.makerid),
]);

export const lendingLoandetailsteller = mysqlTable("lending_loandetailsteller", {
	pnid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
});

export const lendingLoanproductadjustments = mysqlTable("lending_loanproductadjustments", {
	branchid: smallint({ unsigned: true }).notNull(),
	loanproductid: int({ unsigned: true }).notNull(),
	interestrate: decimal({ precision: 4, scale: 2 }).notNull(),
	scadjustment: decimal({ precision: 10, scale: 2 }).notNull(),
	insuranceproviderid: tinyint({ unsigned: true }).notNull(),
	creditorid: int({ unsigned: true }).notNull(),
});

export const lendingLoanproductindustry = mysqlTable("lending_loanproductindustry", {
	loanproductid: int({ unsigned: true }).notNull(),
	industryid: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
	index("industryid").on(table.industryid),
]);

export const lendingLoanproducts = mysqlTable("lending_loanproducts", {
	loanproductid: int({ unsigned: true }).autoincrement().primaryKey(),
	status: tinyint({ unsigned: true }).notNull(),
	name: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortname: char({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	description: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint({ unsigned: true }).notNull(),
	usepnform: tinyint({ unsigned: true }).notNull(),
	loanamountmaximum: int().notNull(),
	loancountmaximum: tinyint({ unsigned: true }).notNull(),
	loanproductceiling: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	grouping: boolean().notNull(),
	weekadjuster: tinyint({ unsigned: true }).notNull(),
	groupby: boolean().notNull(),
	requirecoborrower: tinyint({ unsigned: true }).notNull(),
	requiredcomakers: tinyint({ unsigned: true }).notNull(),
	requireworkersemployed: tinyint({ unsigned: true }).notNull(),
	borrowertypedefault: mediumint({ unsigned: true }).notNull(),
	clientgroupdefault: smallint({ unsigned: true }).notNull(),
	requiresecurity: tinyint({ unsigned: true }).notNull(),
	defaultsecurity: tinyint({ unsigned: true }).notNull(),
	collectionlistOptions: varchar("collectionlist_options", { length: 3000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isEmployeeLoan: tinyint({ unsigned: true }).notNull(),
	termunitflexibility: tinyint({ unsigned: true }).notNull(),
	termunit: boolean().notNull(),
	termflexibility: boolean().notNull(),
	termDaysFixed: tinyint({ unsigned: true }).notNull(),
	termDaysFixedFlex: tinyint({ unsigned: true }).notNull(),
	termdefault: tinyint().notNull(),
	termmaximum: smallint({ unsigned: true }).notNull(),
	interestrate: decimal({ precision: 6, scale: 4 }).notNull(),
	pdInterestrate: decimal("pd_interestrate", { precision: 6, scale: 4 }).notNull(),
	grtRate: decimal("grt_rate", { precision: 6, scale: 4 }).notNull(),
	interestcomputation: tinyint({ unsigned: true }).notNull(),
	diminishingOption: tinyint("diminishing_option", { unsigned: true }).notNull(),
	interestcomputationflexibility: tinyint({ unsigned: true }).notNull(),
	interestcomputationbasis: tinyint({ unsigned: true }).notNull(),
	interestcomputationbasisflexibility: tinyint({ unsigned: true }).notNull(),
	interestRecompute: tinyint({ unsigned: true }).notNull(),
	balloonoption: tinyint({ unsigned: true }).notNull(),
	computepastdueinterest: tinyint({ unsigned: true }).notNull(),
	daysinayear: smallint({ unsigned: true }).notNull(),
	interestrateflexibility: boolean().notNull(),
	interestrateminimum: decimal({ precision: 6, scale: 4 }).notNull(),
	interestdiscountbooking: boolean().notNull(),
	interestdiscountedglcode: int({ unsigned: true }).notNull(),
	interestamortizedglcode: int({ unsigned: true }).notNull(),
	adjustonholidays: boolean().notNull(),
	amortrounding: tinyint().notNull(),
	amortgraceperiod: smallint().notNull(),
	amortWorkdays: varchar("amort_workdays", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	autodebitAmort: tinyint({ unsigned: true }).notNull(),
	aclExempted: tinyint("acl_exempted", { unsigned: true }).notNull(),
	aclAssessment: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	scdiscounteduse: tinyint({ unsigned: true }).notNull(),
	scdiscountedname: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	scdiscountedflexibility: boolean().notNull(),
	scdiscountedMaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	scbracketoption: tinyint({ unsigned: true }).notNull(),
	scdpyear: smallint({ unsigned: true }).notNull(),
	scrateoption: tinyint({ unsigned: true }).notNull(),
	scdiscountbooking: boolean().notNull(),
	scdiscountedglcode: int({ unsigned: true }).notNull(),
	scamortuse: tinyint({ unsigned: true }).notNull(),
	scamortname: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	scamortvalue: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	scamortoption: tinyint({ unsigned: true }).notNull(),
	scamortflexibility: tinyint({ unsigned: true }).notNull(),
	scamortglcode: int({ unsigned: true }).notNull(),
	penaltyrates: varchar({ length: 3000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	penaltyAmortFixedRate: decimal({ unsigned: true, precision: 6, scale: 3 }).notNull(),
	penaltyAmortFixedAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	penaltyAmortRunningRate: decimal({ unsigned: true, precision: 6, scale: 3 }).notNull(),
	penaltyAmortGracePeriod: smallint({ unsigned: true }).notNull(),
	penaltyAmortBasis: tinyint({ unsigned: true }).notNull(),
	penaltyAmortBasis2: tinyint().notNull(),
	pastdueAmortBasis: tinyint().notNull(),
	penaltyDueFixedRate: decimal({ unsigned: true, precision: 6, scale: 3 }).notNull(),
	penaltyDueFixedAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	penaltyDueRunningRate: decimal({ unsigned: true, precision: 6, scale: 3 }).notNull(),
	penaltyDueGracePeriod: smallint({ unsigned: true }).notNull(),
	penaltyDueInclude: tinyint({ unsigned: true }).notNull(),
	penaltyglcode: int({ unsigned: true }).notNull(),
	gracePeriodComputation: tinyint({ unsigned: true }).notNull(),
	pdinterestglcode: int({ unsigned: true }).notNull(),
	useinsurance: tinyint({ unsigned: true }).notNull(),
	insurancename: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	insuranceflexibility: tinyint({ unsigned: true }).notNull(),
	insuranceproviderid: smallint({ unsigned: true }).notNull(),
	useinsurancetable: tinyint({ unsigned: true }).notNull(),
	enableprintingofinsurance: boolean().notNull(),
	enabledeedofassignment: tinyint({ unsigned: true }).notNull(),
	insuranceglcode: int({ unsigned: true }).notNull(),
	insuranceproductid: mediumint({ unsigned: true }).notNull(),
	savingsdiscounteduse: boolean().notNull(),
	savingsdiscountedname: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	savingsdiscounted: decimal({ precision: 8, scale: 2 }).notNull(),
	savingsdiscountedoption: boolean().notNull(),
	savingsdiscountedflexibility: tinyint({ unsigned: true }).notNull(),
	savingsamortizeduse: tinyint({ unsigned: true }).notNull(),
	savingsamortizedname: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	savingsamortized: decimal({ precision: 8, scale: 2 }).notNull(),
	savingsamortizedoption: boolean().notNull(),
	savingsamortizedflexibility: tinyint({ unsigned: true }).notNull(),
	savingsexcess: tinyint({ unsigned: true }).notNull(),
	savingsholdout: decimal({ precision: 8, scale: 2 }).notNull(),
	savingsholdoutoption: boolean().notNull(),
	savingsproductid: smallint({ unsigned: true }).notNull(),
	taxuse: boolean().notNull(),
	taxflexibility: tinyint({ unsigned: true }).notNull(),
	taxglcode: int({ unsigned: true }).notNull(),
	deduction1use: boolean().notNull(),
	deduction1name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction1flexibility: tinyint({ unsigned: true }).notNull(),
	deduction1MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction1bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction1dpyear: smallint({ unsigned: true }).notNull(),
	deduction1rateoption: tinyint({ unsigned: true }).notNull(),
	deduction1glcode: int({ unsigned: true }).notNull(),
	deduction2use: boolean().notNull(),
	deduction2name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction2flexibility: boolean().notNull(),
	deduction2MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction2bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction2dpyear: smallint({ unsigned: true }).notNull(),
	deduction2rateoption: tinyint({ unsigned: true }).notNull(),
	deduction2glcode: int({ unsigned: true }).notNull(),
	deduction3use: boolean().notNull(),
	deduction3name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction3flexibility: boolean().notNull(),
	deduction3MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction3bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction3dpyear: smallint({ unsigned: true }).notNull(),
	deduction3rateoption: tinyint({ unsigned: true }).notNull(),
	deduction3glcode: int({ unsigned: true }).notNull(),
	deduction4use: tinyint({ unsigned: true }).notNull(),
	deduction4name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction4flexibility: tinyint({ unsigned: true }).notNull(),
	deduction4MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction4bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction4dpyear: smallint({ unsigned: true }).notNull(),
	deduction4rateoption: tinyint({ unsigned: true }).notNull(),
	deduction4glcode: int({ unsigned: true }).notNull(),
	deduction5use: tinyint({ unsigned: true }).notNull(),
	deduction5name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction5flexibility: tinyint({ unsigned: true }).notNull(),
	deduction5MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction5bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction5dpyear: smallint({ unsigned: true }).notNull(),
	deduction5rateoption: tinyint({ unsigned: true }).notNull(),
	deduction5glcode: int({ unsigned: true }).notNull(),
	deduction6use: tinyint({ unsigned: true }).notNull(),
	deduction6name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction6flexibility: boolean().notNull(),
	deduction6MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction6bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction6dpyear: smallint({ unsigned: true }).notNull(),
	deduction6rateoption: tinyint({ unsigned: true }).notNull(),
	deduction6glcode: int({ unsigned: true }).notNull(),
	deduction7use: tinyint({ unsigned: true }).notNull(),
	deduction7name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction7flexibility: boolean().notNull(),
	deduction7MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction7bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction7dpyear: smallint({ unsigned: true }).notNull(),
	deduction7rateoption: tinyint({ unsigned: true }).notNull(),
	deduction7glcode: int({ unsigned: true }).notNull(),
	deduction8use: tinyint({ unsigned: true }).notNull(),
	deduction8name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction8flexibility: boolean().notNull(),
	deduction8MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction8bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction8dpyear: smallint({ unsigned: true }).notNull(),
	deduction8rateoption: tinyint({ unsigned: true }).notNull(),
	deduction8glcode: int({ unsigned: true }).notNull(),
	deduction9use: tinyint({ unsigned: true }).notNull(),
	deduction9name: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	deduction9flexibility: boolean().notNull(),
	deduction9MaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	deduction9bracketoption: tinyint({ unsigned: true }).notNull(),
	deduction9dpyear: smallint({ unsigned: true }).notNull(),
	deduction9rateoption: tinyint({ unsigned: true }).notNull(),
	deduction9glcode: int({ unsigned: true }).notNull(),
	proceedstypedefault: int().notNull(),
	microNplcomputeoption: tinyint("micro_nplcomputeoption", { unsigned: true }).notNull(),
	isTellerDisbursed: tinyint({ unsigned: true }).notNull(),
	isCashDisburesedValidated: tinyint({ unsigned: true }).notNull(),
	disbursementValidationX: decimal("disbursementValidation_x", { unsigned: true, precision: 4, scale: 1 }).notNull(),
	disbursementValidationY: decimal("disbursementValidation_y", { unsigned: true, precision: 4, scale: 1 }).notNull(),
	amort1use: boolean().notNull(),
	securityDependentPN: tinyint({ unsigned: true }).notNull(),
	amort1name: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amort1value: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1option: tinyint({ unsigned: true }).notNull(),
	amort1isFinCharge: tinyint({ unsigned: true }).notNull(),
	amort1flexibility: boolean().notNull(),
	amort1glcode: int({ unsigned: true }).notNull(),
	amort2use: boolean().notNull(),
	amort2name: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amort2value: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2option: tinyint({ unsigned: true }).notNull(),
	amort2isFinCharge: tinyint({ unsigned: true }).notNull(),
	amort2flexibility: boolean().notNull(),
	amort2glcode: int({ unsigned: true }).notNull(),
	amort2destination: tinyint({ unsigned: true }).notNull(),
	defaultcostcenter: int({ unsigned: true }).notNull(),
	currentglcode: int({ unsigned: true }).notNull(),
	pastdueglcode: int({ unsigned: true }).notNull(),
	nonperfglcode: int({ unsigned: true }).notNull(),
	inlitigationglcode: int({ unsigned: true }).notNull(),
	provisionglcode: int({ unsigned: true }).notNull(),
	cureperiod: smallint({ unsigned: true }).notNull(),
	cureperiod1: tinyint({ unsigned: true }).notNull(),
	cureperiod2: tinyint({ unsigned: true }).notNull(),
	cureperiod3: tinyint({ unsigned: true }).notNull(),
	cureperiod4: tinyint({ unsigned: true }).notNull(),
	cureperiod5: tinyint({ unsigned: true }).notNull(),
	cureperiod6: tinyint({ unsigned: true }).notNull(),
	cureperiod7: tinyint({ unsigned: true }).notNull(),
	cureperiod8: tinyint({ unsigned: true }).notNull(),
	enableIndividualCureperiod: tinyint("enable_individual_cureperiod", { unsigned: true }).notNull(),
	smsLanguage: tinyint({ unsigned: true }).notNull(),
	smsFreeAmt: int({ unsigned: true }).notNull(),
	smsUnpaidAmorts: tinyint({ unsigned: true }).notNull(),
	codePn: text("code_pn").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	codePn2: text("code_pn2").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	codeAppform: text("code_appform").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	approvalData: text("approval_data").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	comakerLimit: tinyint({ unsigned: true }).notNull(),
	creditscoreTemplateId: smallint("creditscore_template_id", { unsigned: true }).notNull(),
	isOffbook: boolean("is_offbook").default(false).notNull(),
},
(table) => [
	index("grouping").on(table.grouping),
	index("type").on(table.type),
	index("isEmployeeLoan").on(table.isEmployeeLoan),
	index("groupby").on(table.groupby),
]);

export const lendingLoanproductstouse = mysqlTable("lending_loanproductstouse", {
	branchid: smallint({ unsigned: true }).notNull(),
	loanproductid: int({ unsigned: true }).notNull(),
});

export const lendingLoanpurpose = mysqlTable("lending_loanpurpose", {
	loanpurposeid: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	name: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	childcount: smallint().notNull(),
});

export const lendingLoansecurities = mysqlTable("lending_loansecurities", {
	loansecurityid: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	name: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isSecured: tinyint({ unsigned: true }).notNull(),
	collateralType: tinyint("collateral_type", { unsigned: true }).notNull(),
	frpSecuritytag: tinyint("frp_securitytag").notNull(),
},
(table) => [
	index("collateral_type").on(table.collateralType),
	index("isSecured_2").on(table.isSecured),
	index("frp_securitytag_2").on(table.frpSecuritytag),
	index("isSecured").on(table.isSecured),
	index("frp_securitytag").on(table.frpSecuritytag),
	index("collateral_type_2").on(table.collateralType),
]);

export const lendingLoanstatus = mysqlTable("lending_loanstatus", {
	loanstatusid: tinyint({ unsigned: true }).primaryKey(),
	loanstatusname: varchar({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const lendingLoanterms = mysqlTable("lending_loanterms", {
	range: int().notNull(),
});

export const lendingMisposting = mysqlTable("lending_misposting", {
	id: int().autoincrement().primaryKey(),
	transactionType: tinyint("transaction_type").notNull(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	oridold: bigint({ unsigned: true, mode: 'number' }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	justification: varchar({ length: 300 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	status: tinyint().notNull(),
	isCancelled: tinyint("is_cancelled", { unsigned: true }).notNull(),
	txnLog: varchar("txn_log", { length: 5000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("orid").on(table.orid),
	index("approverid").on(table.approverid),
	index("transaction_type").on(table.transactionType),
	index("transdate").on(table.transdate),
	index("oridold").on(table.oridold),
	index("makerid").on(table.makerid),
	index("txn_log").on(table.txnLog),
]);

export const lendingMispostingtemp = mysqlTable("lending_mispostingtemp", {
	transactionType: tinyint("transaction_type").notNull(),
	branchid: smallint().notNull(),
	transdate: date().notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	justification: varchar({ length: 300 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("transaction_type").on(table.transactionType),
]);

export const lendingMobileLoanapplication = mysqlTable("lending_mobile_loanapplication", {
	tempid: int({ unsigned: true }).autoincrement().primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	cpnumber: varchar({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	termunit: tinyint({ unsigned: true }).notNull(),
	term: smallint({ unsigned: true }).notNull(),
	loanpurpose: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	postingtime: datetime().notNull(),
	status: boolean().notNull(),
});

export const lendingMoratorium = mysqlTable("lending_moratorium", {
	postingtime: datetime().notNull(),
	groupby: tinyint({ unsigned: true }).notNull(),
	groupid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	startdate: date().notNull(),
	moratoriumdays: smallint({ unsigned: true }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	approver2id: mediumint({ unsigned: true }).notNull(),
	approvetime: datetime().notNull(),
});

export const lendingMoratoriumtemp = mysqlTable("lending_moratoriumtemp", {
	moratoriumid: int().autoincrement().primaryKey(),
	postingtime: datetime().notNull(),
	branchid: mediumint({ unsigned: true }).notNull(),
	groupby: tinyint({ unsigned: true }).notNull(),
	groupid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	startdate: date().notNull(),
	moratoriumdays: smallint({ unsigned: true }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	approver2id: mediumint({ unsigned: true }).notNull(),
});

export const lendingOffice = mysqlTable("lending_office", {
	officeid: int({ unsigned: true }).autoincrement().primaryKey(),
	officename: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	aoid: smallint({ unsigned: true }).notNull(),
});

export const lendingPaymentdetails = mysqlTable("lending_paymentdetails", {
	paymentid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	principalpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	interestpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	servicechargepmt: decimal({ precision: 10, scale: 2 }).notNull(),
	savingspmt: decimal({ precision: 10, scale: 2 }).notNull(),
	amort1pmt: decimal({ precision: 10, scale: 2 }).notNull(),
	amort2pmt: decimal({ precision: 10, scale: 2 }).notNull(),
	penaltypmt: decimal({ precision: 10, scale: 2 }).notNull(),
	pastdueinterestpmt: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
	index("amortizationnumber").on(table.amortnumber),
	index("pnid").on(table.pnid),
	index("paymentid").on(table.paymentid),
]);

export const lendingPaymentTempor = mysqlTable("lending_payment_tempor", {
	orid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	orstatus: boolean().default(false).notNull(),
	systemdate: date().notNull(),
});

export const lendingPaymentpriority = mysqlTable("lending_paymentpriority", {
	id: tinyint({ unsigned: true }).notNull(),
	priority: tinyint({ unsigned: true }).notNull(),
});

export const lendingPayments = mysqlTable("lending_payments", {
	paymentid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	postingtime: datetime().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	paymentdate: date().notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paymentmode: smallint().notNull(),
	paymentreference: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paymentamount: decimal({ precision: 10, scale: 2 }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	pnidIndex: bigint("pnid_index", { unsigned: true, mode: 'number' }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	nextdatedue: date().notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	loanstatusprevious: tinyint({ unsigned: true }).notNull(),
	loanstatus: tinyint({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
},
(table) => [
	index("paymentdate").on(table.paymentdate),
	index("paymentreference").on(table.paymentreference),
	index("paymentamount").on(table.paymentamount),
	index("postingtime").on(table.postingtime),
	index("branchid").on(table.branchid),
	index("ornumber").on(table.ornumber),
	index("orid").on(table.orid),
	index("loanbalance").on(table.loanbalance),
	index("pnid_index").on(table.pnidIndex),
]);

export const lendingPaymentsor = mysqlTable("lending_paymentsor", {
	orid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	postingtime: datetime().notNull(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	clienttype: tinyint({ unsigned: true }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paymentmode: boolean().notNull(),
	paymentreference: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	oramount: decimal({ precision: 12, scale: 2 }).notNull(),
	orstatus: tinyint({ unsigned: true }).notNull(),
	tellerid: mediumint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	txnLog: varchar("txn_log", { length: 5000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("branchid").on(table.branchid),
	index("glcode").on(table.glcode),
	index("makerid").on(table.makerid),
	index("paymentmode").on(table.paymentmode),
	index("ornumber").on(table.ornumber),
	index("transdate").on(table.transdate),
	index("clienttype").on(table.clienttype),
	index("tellerid").on(table.tellerid),
	index("paymentreference").on(table.paymentreference),
	index("orstatus").on(table.orstatus),
]);

export const lendingPncorrection = mysqlTable("lending_pncorrection", {
	correctionid: int({ unsigned: true }).autoincrement().primaryKey(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	correctionType: tinyint("correction_type", { unsigned: true }).notNull(),
	dateTransacted: date("date_transacted").notNull(),
	detailsBefore: varchar("details_before", { length: 30000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	detailsAfter: varchar("details_after", { length: 30000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("clientid").on(table.clientid),
]);

export const lendingPrincipalsize = mysqlTable("lending_principalsize", {
	range: mediumint().notNull(),
});

export const lendingProvision = mysqlTable("lending_provision", {
	assessment: tinyint({ unsigned: true }).notNull(),
	security: tinyint({ unsigned: true }).notNull(),
	lower: smallint().notNull(),
	upper: smallint().notNull(),
	rate: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	aclClass: tinyint({ unsigned: true }).notNull(),
});

export const lendingProvisionqualitative = mysqlTable("lending_provisionqualitative", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transdate: date().notNull(),
	provisionManual: decimal("provision_manual", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const lendingReleasedelete = mysqlTable("lending_releasedelete", {
	releasedeleteid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	branchid: tinyint({ unsigned: true }).notNull(),
	orid: bigint({ mode: 'number' }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	loanamount: decimal({ precision: 12, scale: 2 }).notNull(),
	reason: varchar({ length: 300 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("transdate").on(table.transdate),
	index("orid_2").on(table.orid),
	index("orid_4").on(table.orid),
	index("branchid").on(table.branchid),
	index("orid").on(table.orid),
	index("orid_3").on(table.orid),
]);

export const lendingReleasedeletetemp = mysqlTable("lending_releasedeletetemp", {
	pnid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	branchid: tinyint({ unsigned: true }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	loanamount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	systemdate: date().notNull(),
	reason: varchar({ length: 300 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const lendingRemittancedelete = mysqlTable("lending_remittancedelete", {
	branchid: smallint({ unsigned: true }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ornumber: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	userid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	deletetime: datetime().notNull(),
	deletesystemdate: date().notNull(),
	justification: varchar({ length: 300 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
});

export const lendingRemittancedeletetemp = mysqlTable("lending_remittancedeletetemp", {
	branchid: smallint({ unsigned: true }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	justification: varchar({ length: 300 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("orid").on(table.orid),
]);

export const lendingRemittancedeletetemp2 = mysqlTable("lending_remittancedeletetemp2", {
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("orid").on(table.orid),
]);

export const lendingScrate = mysqlTable("lending_scrate", {
	loanproductid: mediumint({ unsigned: true }).notNull(),
	lower: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	upper: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	scrate: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
]);

export const lendingTermunits = mysqlTable("lending_termunits", {
	termid: tinyint({ unsigned: true }).notNull(),
	termname: varchar({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const misBug = mysqlTable("mis_bug", {
	reportid: int().autoincrement().primaryKey(),
	programmerid: mediumint({ unsigned: true }).notNull(),
	datereported: date().notNull(),
	datefixed: date().notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	details: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	measures: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	status: tinyint().notNull(),
});

export const misPasswordresetlog = mysqlTable("mis_passwordresetlog", {
	serverdate: date().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("serverdate").on(table.serverdate),
]);

export const misUserright = mysqlTable("mis_userright", {
	employeeid: mediumint({ unsigned: true }).notNull(),
	userrightid: mediumint().notNull(),
	level1access: tinyint({ unsigned: true }).notNull(),
	level2access: tinyint({ unsigned: true }).notNull(),
	level3access: tinyint({ unsigned: true }).notNull(),
	id: int({ unsigned: true }).autoincrement().primaryKey(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("userrightid").on(table.userrightid),
]);

export const misUserrightdefault = mysqlTable("mis_userrightdefault", {
	positionid: mediumint({ unsigned: true }).notNull(),
	userrightid: mediumint().notNull(),
	level1access: tinyint({ unsigned: true }).notNull(),
	level2access: tinyint({ unsigned: true }).notNull(),
	level3access: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("positionid").on(table.positionid),
	index("userrightid").on(table.userrightid),
]);

export const misUserrightguide = mysqlTable("mis_userrightguide", {
	userrightid: int().primaryKey(),
	title: char({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	parent: int().notNull(),
	level: boolean().notNull(),
	level1access: tinyint({ unsigned: true }).notNull(),
	level2access: tinyint({ unsigned: true }).notNull(),
	level3access: tinyint({ unsigned: true }).notNull(),
	level1note: char({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level2note: char({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level3note: char({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("parent").on(table.parent),
]);

export const mobileAccountVerification = mysqlTable("mobile_account_verification", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	channel: boolean().notNull(),
	processid: tinyint().notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	cpnumber: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cpnumberNew: char("cpnumber_new", { length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	selfie1: longtext().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	selfie2: longtext().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	selfie3: longtext().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	userpinKey: varchar("userpin_key", { length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	userpinSalt: varchar("userpin_salt", { length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	otp: varchar({ length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	postingtime: datetime().notNull(),
	description: varchar({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	statusid: boolean().default(false),
	verifierid: mediumint({ unsigned: true }).default(sql`NULL`),
	vDatetime: datetime("v_datetime").default(sql`NULL`),
	approverid: mediumint({ unsigned: true }).default(sql`NULL`),
	aDatetime: datetime("a_datetime").default(sql`NULL`),
	branchid: smallint({ unsigned: true }).default(sql`NULL`),
	isTemp: boolean("is_temp").default(false),
});

export const mobileClientUsers = mysqlTable("mobile_client_users", {
	idmobileClientUsers: int("idmobile_client_users").autoincrement().primaryKey(),
	client1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	cpnumber: varchar({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	password: varchar({ length: 512 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	status: boolean().default(false),
	attempts: boolean().notNull(),
	activitylog: datetime().notNull(),
	cpimei: text().default(sql`NULL`).charSet("latin1").collate("latin1_swedish_ci"),
	userpin: varchar({ length: 512 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	questionid: smallint().notNull(),
	answer: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("client1id").on(table.client1id),
]);

export const mobileComworksEload = mysqlTable("mobile_comworks_eload", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	requestRefNo: varchar({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	targetSubsAccount: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	planCode: varchar({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	retailerNewBalance: varchar({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	respCode: varchar({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	status: varchar({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	statusDesc: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	clientTransactionid: varchar("client_transactionid", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	appname: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	postingtime: datetime().notNull(),
});

export const mobileSecurityQuestions = mysqlTable("mobile_security_questions", {
	questionid: smallint().autoincrement().primaryKey(),
	name: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const perpetualPaymentdetails = mysqlTable("perpetual_paymentdetails", {
	paymentid: bigint({ mode: 'number' }).notNull(),
	policyid: bigint({ mode: 'number' }).notNull(),
	amortnumber: smallint().notNull(),
	insurancePremium: decimal("insurance_premium", { precision: 12, scale: 2 }).notNull(),
	insuranceCbu: decimal("insurance_cbu", { precision: 12, scale: 2 }).notNull(),
	insuranceCf: decimal("insurance_cf", { precision: 12, scale: 2 }).notNull(),
	insuranceSavings: decimal("insurance_savings", { precision: 12, scale: 2 }).notNull(),
});

export const pesonetBanks = mysqlTable("pesonet_banks", {
	bankid: int({ unsigned: true }).autoincrement().primaryKey(),
	bicfi: varchar({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	bankName: varchar("bank_name", { length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	bankCode: varchar("bank_code", { length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	headOfficeBrstn: varchar("head_office_brstn", { length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const pesonetFees = mysqlTable("pesonet_fees", {
	feeid: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	gatewaycode: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lower: decimal({ precision: 12, scale: 2 }).notNull(),
	upper: decimal({ precision: 12, scale: 2 }).notNull(),
	variablefee: decimal({ precision: 12, scale: 2 }).notNull(),
	fix: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const pesonetGateways = mysqlTable("pesonet_gateways", {
	id: smallint({ unsigned: true }).autoincrement().primaryKey(),
	gatewaycode: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amountlimit: decimal({ precision: 12, scale: 2 }).notNull(),
	partnershare: decimal({ precision: 4, scale: 2 }).notNull(),
	fixfee: decimal({ precision: 6, scale: 2 }).notNull(),
	implementation: datetime().defaultNow().notNull(),
});

export const pesonetInwardtransactions = mysqlTable("pesonet_inwardtransactions", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	msgId: varchar("MsgId", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creDtTm: varchar("CreDtTm", { length: 13 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	nbOfTxs: smallint("NbOfTxs").notNull(),
	ttlIntrBkSttlmAmtCcy: char("TtlIntrBkSttlmAmt_Ccy", { length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	ttlIntrBkSttlmAmtValue: decimal("TtlIntrBkSttlmAmt_value", { precision: 12, scale: 2 }).notNull(),
	intrBkSttlmDt: date("IntrBkSttlmDt").notNull(),
	sttlmInfSttlmMtd: varchar("SttlmInf_SttlmMtd", { length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	instgAgtBICFI: varchar("InstgAgt_BICFI", { length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	instdAgtBICFI: varchar("InstdAgt_BICFI", { length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pmtIdEndToEndId: varchar("PmtId_EndToEndId", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pmtIdTxId: varchar("PmtId_TxId", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pmtTpInfPrtry: varchar("PmtTpInf_Prtry", { length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pmtTpInfCd: varchar("PmtTpInf_Cd", { length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	intrBkSttlmAmtCcy: varchar("IntrBkSttlmAmt_Ccy", { length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	intrBkSttlmAmtValue: decimal("IntrBkSttlmAmt_value", { precision: 12, scale: 2 }).notNull(),
	chrgBr: varchar("ChrgBr", { length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dbtrNm: varchar("Dbtr_Nm", { length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dbtrAddress1: varchar("Dbtr_address1", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dbtrAddress2: varchar("Dbtr_address2", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dbtrAddress3: varchar("Dbtr_address3", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dbtrAcctId: varchar("DbtrAcct_Id", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dbtrAcctBICFI: varchar("DbtrAcct_BICFI", { length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cdtrNm: varchar("Cdtr_Nm", { length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cdtrPstlAdr1: varchar("Cdtr_PstlAdr1", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cdtrPstlAdr2: varchar("Cdtr_PstlAdr2", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cdtrPstlAdr3: varchar("Cdtr_PstlAdr3", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cdtrAcctId: bigint("CdtrAcct_Id", { unsigned: true, mode: 'number' }).notNull(),
	cdtrAgtBICFI: varchar("CdtrAgt_BICFI", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	instructions: varchar({ length: 33 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rfiReferenceNumber: varchar("rfi_reference_number", { length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	ofiCustomerReferenceNumber: varchar("ofi_customer_reference_number", { length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rfiCustomerReferenceNumber: varchar("rfi_customer_reference_number", { length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	statuscode: varchar({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	transdate: date().notNull(),
	codeupdate: smallint().notNull(),
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).default(sql`NULL`),
});

export const pesonetOutwardtemp = mysqlTable("pesonet_outwardtemp", {
	tempid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	ofirefnum: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rfirefnum: varchar({ length: 16 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	oficustomerrefnum: varchar({ length: 16 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	rficustomerrefnum: varchar({ length: 16 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	currency: char({ length: 3 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	fee: decimal({ precision: 6, scale: 2 }).notNull(),
	activitycode: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transcode: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	senderbic: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
	sendername: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	senderaddress: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiverbic: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiversa: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receivername: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiveraddress: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	reference: varchar({ length: 33 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transdate: date().notNull(),
	makerid: mediumint({ unsigned: true }).default(sql`NULL`),
	approverid: mediumint({ unsigned: true }).default(sql`NULL`),
	branchid: smallint({ unsigned: true }).default(sql`NULL`),
	channel: boolean().notNull(),
});

export const pesonetOutwardtransactions = mysqlTable("pesonet_outwardtransactions", {
	transid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	sequence: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	ofirefnum: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rfirefnum: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	oficustomerrefnum: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rficustomerrefnum: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	currency: char({ length: 3 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	fee: decimal({ precision: 6, scale: 2 }).notNull(),
	activitycode: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transcode: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	senderbic: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
	sendername: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	senderaddress: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiverbic: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiversa: varchar({ length: 16 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receivername: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiveraddress: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	reference: varchar({ length: 33 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transdate: date().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	postingtime: datetime().notNull(),
	status: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	apiGatewayReferenceId: bigint("apiGateway_referenceId", { unsigned: true, mode: 'number' }).notNull(),
	pesonetReceiveDate: datetime("pesonet_receiveDate").notNull(),
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	channel: boolean().notNull(),
	updateStatuscode: varchar("update_statuscode", { length: 5 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	updateInformation: varchar("update_information", { length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	updateApiGatewayReferenceId: bigint("update_apiGateway_referenceId", { unsigned: true, mode: 'number' }).notNull(),
	creditbackSavingstransactionid: bigint("creditback_savingstransactionid", { unsigned: true, mode: 'number' }).default(sql`NULL`),
});

export const regulationReports = mysqlTable("regulation_reports", {
	report: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	glAccounts: varchar("gl_accounts", { length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cutoffdate: date().notNull(),
	glData: varchar("gl_data", { length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	slData: varchar("sl_data", { length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const rmCategory = mysqlTable("rm_category", {
	categoryid: int().primaryKey(),
	categoryname: char({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	parent: int().notNull(),
	level: boolean().notNull(),
},
(table) => [
	index("parent").on(table.parent),
]);

export const rmConcerns = mysqlTable("rm_concerns", {
	concernid: int({ unsigned: true }).autoincrement().primaryKey(),
	branchid: mediumint({ unsigned: true }).notNull(),
	concernType: tinyint("concern_type", { unsigned: true }).notNull(),
	concernChannel: tinyint("concern_channel", { unsigned: true }).notNull(),
	timeReported: datetime("time_reported").notNull(),
	timeOccured: datetime("time_occured").notNull(),
	timeResolved: datetime("time_resolved").default(sql`NULL`),
	reporterName: varchar("reporter_name", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	reporterCpnumber: char("reporter_cpnumber", { length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	concernedName: varchar("concerned_name", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	concernedCpnumber: char("concerned_cpnumber", { length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	particulars: varchar({ length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	categoryid: char({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	action: boolean().notNull(),
	actionMaker: varchar("action_maker", { length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	actionEscalator: varchar("action_escalator", { length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	escalatorid: mediumint({ unsigned: true }).notNull(),
	concernStatus: tinyint("concern_status", { unsigned: true }).notNull(),
	conductid: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("escalatorid").on(table.escalatorid),
	index("postingtime").on(table.timeReported),
	index("makerid").on(table.makerid),
	index("concern_status").on(table.concernStatus),
]);

export const rmConcernsettings = mysqlTable("rm_concernsettings", {
	name: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	data: varchar({ length: 50000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const rmDiary = mysqlTable("rm_diary", {
	diaryid: int({ unsigned: true }).autoincrement().primaryKey(),
	postingTime: datetime().notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	concern: tinyint({ unsigned: true }).notNull(),
	concernid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	entry: varchar({ length: 1000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("postingTime").on(table.postingTime),
	index("clientid").on(table.clientid),
]);

export const rmEvent = mysqlTable("rm_event", {
	eventid: int({ unsigned: true }).autoincrement().primaryKey(),
	dateReported: date().notNull(),
	dateOccuredFrom: date().notNull(),
	dateOccuredTo: date().notNull(),
	dateDiscovered: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	risklevel: boolean().notNull(),
	categoryid: mediumint().notNull(),
	eventdetails: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rootcause: varchar({ length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	actiontaken: varchar({ length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	recurrence: tinyint({ unsigned: true }).notNull(),
	businessimpact: boolean().notNull(),
	lossamount: decimal({ precision: 12, scale: 2 }).notNull(),
	dateLossBooking: date().notNull(),
	dateTargetResolution: date().notNull(),
	dateResolved: date().notNull(),
	recoverability: tinyint({ unsigned: true }).notNull(),
	reporterid: mediumint({ unsigned: true }).notNull(),
	endorserid: mediumint({ unsigned: true }).notNull(),
	dateendorsed: date().notNull(),
	verifierid: mediumint({ unsigned: true }).notNull(),
	dateverify: date().notNull(),
});

export const ropaDetails = mysqlTable("ropa_details", {
	ropaid: int().autoincrement().primaryKey(),
	branchid: char({ length: 8 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	ropaNumber: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	date: date().notNull(),
	collateralid: int().notNull(),
	dateofcos: date().notNull(),
	dateofcosa: date().notNull(),
	dateofconsolidation: date().notNull(),
	cgtamount: decimal({ precision: 12, scale: 2 }).notNull(),
	dstamount: decimal({ precision: 12, scale: 2 }).notNull(),
	air: decimal({ precision: 12, scale: 2 }).notNull(),
	acl: decimal({ precision: 12, scale: 2 }).notNull(),
	appraisedvalueLand: decimal({ precision: 12, scale: 2 }).notNull(),
	appraisedvalueBuilding: decimal({ precision: 12, scale: 2 }).notNull(),
	bookvalue: decimal({ precision: 12, scale: 2 }).notNull(),
	dateappraised: date().notNull(),
	taxpaymentdate: date().notNull(),
	sellingprice: decimal({ precision: 12, scale: 2 }).notNull(),
	ropaimage: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	consolidated: int().notNull(),
});

export const ropaLoanbalancetemp = mysqlTable("ropa_loanbalancetemp", {
	tempid: int().autoincrement().primaryKey(),
	pnid: bigint({ mode: 'number' }).notNull(),
	previousloanstatus: tinyint().notNull(),
	groupid: int().notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const ropaSalespaymentdetails = mysqlTable("ropa_salespaymentdetails", {
	orid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	ropaid: int().notNull(),
	datesold: date().notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	buyer: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	otherexpenses: decimal({ precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("ornumber").on(table.ornumber),
]);

export const savingsAccounts = mysqlTable("savings_accounts", {
	savingsid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	savingsidPreviousCbs: varchar("savingsid_previous_cbs", { length: 50 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	accountname: char({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	type: tinyint({ unsigned: true }).notNull(),
	corpclientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client2id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client3id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client4id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	groupid: mediumint({ unsigned: true }).notNull(),
	productid: smallint({ unsigned: true }).notNull(),
	productidOrig: smallint({ unsigned: true }).notNull(),
	opendate: date().notNull(),
	tellerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	closedate: date().notNull(),
	accountstatusprev: tinyint({ unsigned: true }).notNull(),
	accountstatus: tinyint({ unsigned: true }).notNull(),
	intcreditdate: date().notNull(),
	previoustransdate: date().notNull(),
	latesttransdate: date().notNull(),
	previousbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	previousbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	grossinterest: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	netinterest: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	note1: char({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	note2: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	holdout: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	adb: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	isWtaxExempt: char("is_wtax_exempt", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isFrozen: char("is_frozen", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	linepassbook: tinyint({ unsigned: true }).notNull(),
	printedpassbook: bigint({ unsigned: true, mode: 'number' }).notNull(),
	lineledger: tinyint({ unsigned: true }).notNull(),
	printedledger: bigint({ unsigned: true, mode: 'number' }).notNull(),
	hash: char({ length: 32 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	postingtime: datetime().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	solicitorid: mediumint({ unsigned: true }).notNull(),
	openAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	fromMobile: boolean("from_mobile").default(false).notNull(),
},
(table) => [
	index("corpclientid").on(table.corpclientid),
	index("client2id").on(table.client2id),
	index("client4id").on(table.client4id),
	index("currentbalance2").on(table.currentbalance2),
	index("note1").on(table.note1),
	index("latesttransdate").on(table.latesttransdate),
	index("savingsid_previous_cbs").on(table.savingsidPreviousCbs),
	index("branchid").on(table.branchid),
	index("client1id").on(table.client1id),
	index("client3id").on(table.client3id),
	index("currentbalance1").on(table.currentbalance1),
	index("netinterest").on(table.netinterest),
	index("productid").on(table.productid),
	index("productidOrig").on(table.productidOrig),
]);

export const savingsAccountsautodebit = mysqlTable("savings_accountsautodebit", {
	savingsid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	savingsidAutodebit: bigint("savingsid_autodebit", { unsigned: true, mode: 'number' }).notNull(),
},
(table) => [
	index("savingsid_autodebit").on(table.savingsidAutodebit),
]);

export const savingsAccountstemp = mysqlTable("savings_accountstemp", {
	tempid: int({ unsigned: true }).autoincrement().primaryKey(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	type: tinyint({ unsigned: true }).notNull(),
	corpclientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client2id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client3id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	client4id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	productid: smallint({ unsigned: true }).notNull(),
	savingscategory: tinyint({ unsigned: true }).notNull(),
	opendate: date().notNull(),
	latesttransdate: date().notNull(),
	intcreditdate: date().notNull(),
	note1: char({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	specialrate: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	aggregatorid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	renewaloption: tinyint({ unsigned: true }).notNull(),
	accountlinkid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ssadate: date().notNull(),
	ssaterm: smallint().notNull(),
	ssatermOrig: smallint("ssaterm_orig", { unsigned: true }).notNull(),
	ssamaturity: date().notNull(),
	ssarate: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	ssarateBefore: decimal("ssarate_before", { unsigned: true, precision: 5, scale: 3 }).notNull(),
	ssarateAfter: decimal("ssarate_after", { unsigned: true, precision: 5, scale: 3 }).notNull(),
	autodebitsavingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	solicitorid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("corpclientid").on(table.corpclientid),
	index("client2id").on(table.client2id),
	index("client4id").on(table.client4id),
	index("branchid").on(table.branchid),
	index("client1id").on(table.client1id),
	index("client3id").on(table.client3id),
	index("savingsid").on(table.savingsid),
]);

export const savingsBracketbalance = mysqlTable("savings_bracketbalance", {
	lower: decimal({ unsigned: true }).notNull(),
	upper: decimal({ unsigned: true }).notNull(),
});

export const savingsBracketrate = mysqlTable("savings_bracketrate", {
	bracket: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
});

export const savingsCertificateLetter = mysqlTable("savings_certificate_letter", {
	savingscertificateid: smallint().primaryKey(),
	code1: longtext().charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const savingsChanges = mysqlTable("savings_changes", {
	changeId: int("change_id", { unsigned: true }).autoincrement().primaryKey(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transdate: date().notNull(),
	changeType: char("change_type", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	changeDetails: varchar("change_details", { length: 25000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: varchar({ length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	approverid: varchar({ length: 6 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("makerid").on(table.makerid),
]);

export const savingsCheckdeptemp = mysqlTable("savings_checkdeptemp", {
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	checktype: tinyint({ unsigned: true }).notNull(),
	checkdetails: varchar({ length: 34 }).charSet("utf16").collate("utf16_general_ci").notNull(),
	checkamount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	clearingdays: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
]);

export const savingsChecksforceclear = mysqlTable("savings_checksforceclear", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	systemdate: date().notNull(),
	daystoclear: boolean().notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const savingsChecksonfloat = mysqlTable("savings_checksonfloat", {
	savingstransactionid: bigint({ mode: 'number' }).primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transactiondate: date().notNull(),
	transaction: tinyint({ unsigned: true }).notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	checktype: tinyint({ unsigned: true }).notNull(),
	reference: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	checkNumber: varchar("check_number", { length: 20 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	clearingdays: tinyint({ unsigned: true }).notNull(),
	daystoclear: tinyint({ unsigned: true }).notNull(),
	returned: tinyint({ unsigned: true }).notNull(),
	forceclearmakerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("branchid").on(table.branchid),
	index("check_number").on(table.checkNumber),
	index("returned").on(table.returned),
	index("reference").on(table.reference),
]);

export const savingsClearingdays = mysqlTable("savings_clearingdays", {
	id: tinyint({ unsigned: true }).primaryKey(),
	name: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	clearingdays: tinyint({ unsigned: true }).notNull(),
});

export const savingsDormantLetter = mysqlTable("savings_dormant_letter", {
	savingsproductid: smallint().notNull(),
	code1: longtext().charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const savingsErrorcorrect = mysqlTable("savings_errorcorrect", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	justification: varchar({ length: 300 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("approverid").on(table.approverid),
]);

export const savingsErrorcorrectlink = mysqlTable("savings_errorcorrectlink", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	ecsavingstransactionid: bigint({ unsigned: true, mode: 'number' }).notNull(),
},
(table) => [
	index("ecsavingstransactionid").on(table.ecsavingstransactionid),
]);

export const savingsErrorcorrecttemp = mysqlTable("savings_errorcorrecttemp", {
	tempid: int({ unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transactionid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amount: decimal({ unsigned: true, precision: 16, scale: 2 }).notNull(),
	justification: varchar({ length: 300 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	tellerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("transactionid").on(table.transactionid),
]);

export const savingsInterestrates = mysqlTable("savings_interestrates", {
	productid: smallint({ unsigned: true }).notNull(),
	lower: decimal({ unsigned: true, precision: 16, scale: 2 }).notNull(),
	upper: decimal({ unsigned: true, precision: 16, scale: 2 }).notNull(),
	rate: decimal({ unsigned: true, precision: 6, scale: 4 }).notNull(),
},
(table) => [
	index("productid").on(table.productid),
]);

export const savingsProducts = mysqlTable("savings_products", {
	productid: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	productname: char({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	productcode: char({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	savingscategory: boolean().notNull(),
	savingsType: tinyint({ unsigned: true }).notNull(),
	ssaallownoncash: tinyint({ unsigned: true }).notNull(),
	isTD: tinyint({ unsigned: true }).notNull(),
	tdDSTexpenseGlcode: int({ unsigned: true }).notNull(),
	tdDSTpayableGlcode: int({ unsigned: true }).notNull(),
	daysinayear: smallint({ unsigned: true }).notNull(),
	interestcrediting: smallint({ unsigned: true }).notNull(),
	interestcreditingbasis: tinyint({ unsigned: true }).notNull(),
	closeonzerobalance: tinyint({ unsigned: true }).notNull(),
	daysinactive: smallint().default(sql`NULL`),
	printvalidation: tinyint({ unsigned: true }).notNull(),
	printpassbook: tinyint({ unsigned: true }).notNull(),
	balancetoearn: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	balancemin: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	balancemincharge: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	balanceminchargeglcode: int({ unsigned: true }).notNull(),
	chargegraceperiod: smallint({ unsigned: true }).notNull(),
	balancetoearn2: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	balancemin2: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	balancemincharge2: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	balanceminchargeglcode2: int({ unsigned: true }).notNull(),
	chargegraceperiod2: smallint({ unsigned: true }).notNull(),
	closeaccountfee: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	closeaccountfeeglcode: int({ unsigned: true }).notNull(),
	closeaccountfee2: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	closeaccountfeeglcode2: int({ unsigned: true }).notNull(),
	withdrawalLimit1: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	withdrawalLimit2: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	withdrawalLimit3: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	withdrawalLimit4: decimal({ precision: 12, scale: 2 }).notNull(),
	withdrawalLimit5: decimal({ precision: 12, scale: 2 }).notNull(),
	withdrawalLimit6: decimal({ precision: 12, scale: 2 }).notNull(),
	rateBracket1: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	rateBracket2: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	rateBracket3: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	rateBracket4: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	rate1: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	rate2: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	rate3: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	rate4: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	rate5: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	isWtaxExempt: char("is_wtax_exempt", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	ieglcode: int({ unsigned: true }).notNull(),
	ismicro: tinyint({ unsigned: true }).notNull(),
	smsLanguage: tinyint({ unsigned: true }).notNull(),
	smsFreeADB: int({ unsigned: true }).notNull(),
	smsShowbalance: tinyint("sms_showbalance", { unsigned: true }).notNull(),
	dormantglcode: int({ unsigned: true }).notNull(),
	dormancyP: smallint({ unsigned: true }).notNull(),
	dormancychargeP: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	dormancychargeglcodeP: int({ unsigned: true }).notNull(),
	dormancyNP: smallint({ unsigned: true }).notNull(),
	dormancychargeNP: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	dormancychargeglcodeNP: int({ unsigned: true }).notNull(),
	dormantdebitoption: tinyint({ unsigned: true }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	requireautodebitaccount: tinyint({ unsigned: true }).notNull(),
	bookletCostPer: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	bookletCostCom: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	bookletcostglcode: int({ unsigned: true }).notNull(),
	clearingchargeglcode: int({ unsigned: true }).notNull(),
	chargedaif1: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaif2: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaifper: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaifovernight: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaud1: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaud2: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaudper: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedaudovernight: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargeholdout: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargespoclearing: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargespoposting: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargedeficient: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargealteration: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargeinvaliddate: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	chargeinvalidsignature: decimal({ unsigned: true, precision: 8, scale: 2 }).notNull(),
	accountnameX: smallint("accountname_x", { unsigned: true }).notNull(),
	accountnameY: smallint("accountname_y", { unsigned: true }).notNull(),
	savingsidX: smallint("savingsid_x", { unsigned: true }).notNull(),
	savingsidY: smallint("savingsid_y", { unsigned: true }).notNull(),
	barcodeX: smallint("barcode_x", { unsigned: true }).notNull(),
	barcodeY: smallint("barcode_y", { unsigned: true }).notNull(),
	branchnameX: smallint("branchname_x", { unsigned: true }).notNull(),
	branchnameY: smallint("branchname_y", { unsigned: true }).notNull(),
	productnameX: smallint("productname_x", { unsigned: true }).notNull(),
	productnameY: smallint("productname_y", { unsigned: true }).notNull(),
	cpnoX: smallint("cpno_x", { unsigned: true }).notNull(),
	cpnoY: smallint("cpno_y", { unsigned: true }).notNull(),
	balFwdX: smallint("balFwd_x").notNull(),
	balFwdY: smallint("balFwd_y").notNull(),
	referenceMaxchar: smallint("reference_maxchar", { unsigned: true }).notNull(),
	yTopstart: smallint("y_topstart", { unsigned: true }).notNull(),
	totallines: smallint({ unsigned: true }).notNull(),
	skiplinestart: smallint({ unsigned: true }).notNull(),
	skiplineend: smallint({ unsigned: true }).notNull(),
	charmask: char({ length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transchar: tinyint({ unsigned: true }).notNull(),
	balancechar: tinyint({ unsigned: true }).notNull(),
	xDate: smallint("x_date", { unsigned: true }).notNull(),
	xMaturity: smallint("x_maturity", { unsigned: true }).notNull(),
	xDebit: smallint("x_debit", { unsigned: true }).notNull(),
	xCredit: smallint("x_credit", { unsigned: true }).notNull(),
	xBalance1: smallint("x_balance1", { unsigned: true }).notNull(),
	xBalance2: smallint("x_balance2", { unsigned: true }).notNull(),
	xTranscode: smallint("x_transcode", { unsigned: true }).notNull(),
	xUser: smallint("x_user", { unsigned: true }).notNull(),
	deposit1X: smallint("deposit1_x", { unsigned: true }).notNull(),
	deposit1Y: smallint("deposit1_y", { unsigned: true }).notNull(),
	deposit2X: smallint("deposit2_x", { unsigned: true }).notNull(),
	deposit2Y: smallint("deposit2_y", { unsigned: true }).notNull(),
	withdrawalX: smallint("withdrawal_x", { unsigned: true }).notNull(),
	withdrawalY: smallint("withdrawal_y", { unsigned: true }).notNull(),
	chkencashX: smallint("chkencash_x").notNull(),
	chkencashY: smallint("chkencash_y").notNull(),
	cmX: smallint("cm_x", { unsigned: true }).notNull(),
	cmY: smallint("cm_y", { unsigned: true }).notNull(),
	dmX: smallint("dm_x", { unsigned: true }).notNull(),
	dmY: smallint("dm_y", { unsigned: true }).notNull(),
	rcX: smallint("rc_x", { unsigned: true }).notNull(),
	rcY: smallint("rc_y", { unsigned: true }).notNull(),
	bcX: smallint("bc_x", { unsigned: true }).notNull(),
	bcY: smallint("bc_y", { unsigned: true }).notNull(),
	ercX: smallint("erc_x").default(sql`NULL`),
	ercY: smallint("erc_y").default(sql`NULL`),
	checkClearedReflect: boolean().notNull(),
	dormantLetter: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tyLetter: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("savingscategory").on(table.savingscategory),
]);

export const savingsProductstouse = mysqlTable("savings_productstouse", {
	branchid: smallint({ unsigned: true }).notNull(),
	productid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("productid").on(table.productid),
]);

export const savingsSsaaggregator = mysqlTable("savings_ssaaggregator", {
	clientid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	specialrateAggregate: decimal("specialrate_aggregate", { unsigned: true, precision: 5, scale: 3 }).notNull(),
});

export const savingsSsaaggregatorhistory = mysqlTable("savings_ssaaggregatorhistory", {
	historyid: int({ unsigned: true }).autoincrement().primaryKey(),
	date: date().notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	specialrateAggregate: decimal("specialrate_aggregate", { unsigned: true, precision: 5, scale: 3 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const savingsSsaplacement = mysqlTable("savings_ssaplacement", {
	savingsid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	aggregatorid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	renewaloption: tinyint({ unsigned: true }).notNull(),
	accountlinkid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	specialrate: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
});

export const savingsSsaplacementdetails = mysqlTable("savings_ssaplacementdetails", {
	placementid: int({ unsigned: true }).autoincrement().primaryKey(),
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	interestSavingstransactionid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	renewaloption: tinyint({ unsigned: true }).notNull(),
	amount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	ssadate: date().notNull(),
	ssaterm: smallint({ unsigned: true }).notNull(),
	ssatermOrig: smallint("ssaterm_orig", { unsigned: true }).notNull(),
	ssamaturity: date().notNull(),
	specialrate: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	specialrateAggregate: decimal("specialrate_aggregate", { unsigned: true, precision: 5, scale: 3 }).notNull(),
	ssarate: decimal({ precision: 5, scale: 3 }).notNull(),
	ssarateBefore: decimal("ssarate_before", { precision: 5, scale: 3 }).notNull(),
	ssarateAfter: decimal("ssarate_after", { precision: 5, scale: 3 }).notNull(),
	dateTerminated: date("date_terminated").notNull(),
},
(table) => [
	index("ssadate").on(table.ssadate),
	index("savingstransactionid").on(table.savingstransactionid),
	index("savingsid").on(table.savingsid),
	index("ssarate").on(table.ssarate),
]);

export const savingsSsaplacementhistory = mysqlTable("savings_ssaplacementhistory", {
	historyid: int({ unsigned: true }).autoincrement().primaryKey(),
	date: date().notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	renewaloption: tinyint({ unsigned: true }).notNull(),
	accountlinkid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	specialrate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("makerid").on(table.makerid),
]);

export const savingsSsarate1 = mysqlTable("savings_ssarate1", {
	termid: int().notNull(),
	productid: smallint({ unsigned: true }).notNull(),
	lower: smallint().notNull(),
	upper: smallint().notNull(),
},
(table) => [
	index("termid").on(table.termid),
]);

export const savingsSsarate2 = mysqlTable("savings_ssarate2", {
	rateid: int().autoincrement().primaryKey(),
	productid: smallint({ unsigned: true }).notNull(),
	indexid: smallint().notNull(),
	termid: int().notNull(),
	lower: decimal({ precision: 12, scale: 2 }).notNull(),
	upper: decimal({ precision: 12, scale: 2 }).notNull(),
	ssarate: decimal({ unsigned: true, precision: 5, scale: 3 }).notNull(),
	ssarateHalf1: decimal("ssarate_half1", { unsigned: true, precision: 5, scale: 3 }).notNull(),
	ssarateBefore: decimal("ssarate_before", { unsigned: true, precision: 5, scale: 3 }).notNull(),
	ssarateAfter: decimal("ssarate_after", { unsigned: true, precision: 5, scale: 3 }).notNull(),
});

export const savingsSsaRecompute = mysqlTable("savings_ssa_recompute", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	transdate: date().notNull(),
	method: tinyint({ unsigned: true }).notNull(),
	transactor: varchar({ length: 300 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	details: varchar({ length: 25000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("aggregatorid").on(table.transactor),
	index("approverid").on(table.approverid),
	index("systemdate").on(table.transdate),
	index("makerid").on(table.makerid),
]);

export const savingsTransactioncodes = mysqlTable("savings_transactioncodes", {
	transaction: smallint().primaryKey(),
	listorder: decimal({ precision: 4, scale: 1 }).notNull(),
	multiplier: boolean().notNull(),
	name: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	code: char({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortcut: char({ length: 3 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const savingsTransactions = mysqlTable("savings_transactions", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	branchidTrans: smallint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	savingsid2: bigint({ unsigned: true, mode: 'number' }).notNull(),
	productid: smallint({ unsigned: true }).notNull(),
	postingtime: datetime().notNull(),
	transactiondate: date().notNull(),
	transaction: smallint({ unsigned: true }).notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	checktype: tinyint({ unsigned: true }).notNull(),
	reference: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	currentbalance1: decimal({ precision: 12, scale: 2 }).notNull(),
	currentbalance2: decimal({ precision: 12, scale: 2 }).notNull(),
	grossinterest: decimal({ precision: 12, scale: 2 }).notNull(),
	netinterest: decimal({ precision: 12, scale: 2 }).notNull(),
	errorcorrected: tinyint({ unsigned: true }).notNull(),
	latesttransdate: date().notNull(),
	accountstatusprev: tinyint({ unsigned: true }).notNull(),
	accountstatus: tinyint({ unsigned: true }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("productid").on(table.productid),
	index("currentbalance1").on(table.currentbalance1),
	index("postingtime").on(table.postingtime),
	index("branchid").on(table.branchid),
	index("transaction").on(table.transaction),
	index("transactiondate").on(table.transactiondate),
	index("currentbalance2").on(table.currentbalance2),
	index("savingsid").on(table.savingsid),
	index("branchidTrans").on(table.branchidTrans),
]);

export const savingsTransapproval = mysqlTable("savings_transapproval", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	limitAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	approvalType: tinyint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("approverid").on(table.approverid),
]);

export const savingsTransapprovaltemp = mysqlTable("savings_transapprovaltemp", {
	tempid: int({ unsigned: true }).autoincrement().primaryKey(),
	approvalType: tinyint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transaction: smallint({ unsigned: true }).notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	checktype: tinyint({ unsigned: true }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
	reference: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	ssatermOrig: smallint("ssaterm_orig", { unsigned: true }).notNull(),
	tellerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
	index("branchid").on(table.branchid),
]);

export const savingsType = mysqlTable("savings_type", {
	productid: int({ unsigned: true }).notNull(),
	type: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("productid").on(table.productid),
	index("type").on(table.type),
]);

export const savingsUploads = mysqlTable("savings_uploads", {
	uploadId: int("upload_id", { unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	dateUploaded: date("date_uploaded").notNull(),
	dateApproved: date("date_approved").notNull(),
	reference: varchar({ length: 100 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	transaction: smallint({ unsigned: true }).notNull(),
	transcount: smallint({ unsigned: true }).notNull(),
	postamount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	arrayData: mediumtext("array_data").charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("approverid").on(table.approverid),
	index("date_uploaded").on(table.dateUploaded),
	index("branchid").on(table.branchid),
	index("makerid").on(table.makerid),
	index("date_approved").on(table.dateApproved),
]);

export const scrAmortdetails = mysqlTable("scr_amortdetails", {
	scrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	datedue: date().notNull(),
	datedueOrig: date("datedue_orig").notNull(),
	principal: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	presentvalue: decimal({ precision: 12, scale: 2 }).notNull(),
	datepaid: date().notNull(),
});

export const scrDiscount = mysqlTable("scr_discount", {
	discountid: int({ unsigned: true }).primaryKey(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	discountinterest: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountservicecharge: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountsavings: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountamort1: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountamort2: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountpenalty: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	discountpastdueinterest: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	justification: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("pnid").on(table.pnid),
	index("branchid").on(table.branchid),
	index("transdate").on(table.transdate),
	index("approverid").on(table.approverid),
]);

export const scrDiscountamortization = mysqlTable("scr_discountamortization", {
	amortnumber: int().notNull(),
	scrid: bigint({ mode: 'number' }).notNull(),
	begBalance: decimal({ precision: 12, scale: 2 }).notNull(),
	discountAmort: decimal({ precision: 12, scale: 2 }).notNull(),
	endBalance: decimal({ precision: 12, scale: 2 }).notNull(),
});

export const scrLoandetails = mysqlTable("scr_loandetails", {
	scrid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ropaid: bigint({ mode: 'number' }).notNull(),
	spouseid: int().notNull(),
	scrid2: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	settingid: smallint({ unsigned: true }).notNull(),
	termunit: tinyint({ unsigned: true }).notNull(),
	term: smallint({ unsigned: true }).notNull(),
	date: date().notNull(),
	dateApplied: date().notNull(),
	postingtime: datetime().notNull(),
	maturity: date().notNull(),
	maturity2: date().notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interestrate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	discountInterest: double().notNull(),
	sellingprice: decimal({ precision: 12, scale: 2 }).notNull(),
	downpaymenttype: tinyint().notNull(),
	downpaymentrate: int().notNull(),
	downpayment: decimal({ precision: 12, scale: 2 }).notNull(),
	interestcomputation: tinyint({ unsigned: true }).notNull(),
	irr: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	eir: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	eirInt: decimal("eir_int", { unsigned: true, precision: 7, scale: 5 }).notNull(),
	eirSc: decimal("eir_sc", { unsigned: true, precision: 7, scale: 5 }).notNull(),
	interestcomputationbasis: tinyint({ unsigned: true }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	proceeds: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	proceedstype: tinyint({ unsigned: true }).notNull(),
	proceedsreference: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creditorid: smallint({ unsigned: true }).notNull(),
	workersemployed: smallint({ unsigned: true }).notNull(),
	industryid: smallint({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
	loanpurposeid: smallint({ unsigned: true }).notNull(),
	loanpurpose: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	securityid: smallint({ unsigned: true }).notNull(),
	assetsizeid: tinyint({ unsigned: true }).notNull(),
	clientgroupid: smallint({ unsigned: true }).notNull(),
	restructuredtag: tinyint({ unsigned: true }).notNull(),
	restructuredscrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	restructuredCount: tinyint({ unsigned: true }).notNull(),
	autodebitAmort: tinyint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amort2destination: tinyint({ unsigned: true }).notNull(),
	loancycle: smallint({ unsigned: true }).notNull(),
	loanofficerid: mediumint({ unsigned: true }).notNull(),
	solicitortype: tinyint().notNull(),
	solicitorid: int().notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	tellerid: mediumint({ unsigned: true }).notNull(),
	loanstatus: tinyint({ unsigned: true }).notNull(),
	loanstatusstatic: tinyint({ unsigned: true }).notNull(),
	loanstatusUpdate: tinyint({ unsigned: true }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	nextdatedue: date().notNull(),
	lasttransdate: date().notNull(),
	datepaidOrig: date().notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	lettercount: boolean().notNull(),
	promptPayment: decimal({ unsigned: true, precision: 4, scale: 1 }).notNull(),
});

export const scrLoandetailstemp = mysqlTable("scr_loandetailstemp", {
	scrid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	clientid: int({ unsigned: true }).notNull(),
	ropaid: int().notNull(),
	scrid2: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	settingid: smallint({ unsigned: true }).notNull(),
	termunit: tinyint({ unsigned: true }).notNull(),
	term: smallint({ unsigned: true }).notNull(),
	termApplied: smallint({ unsigned: true }).notNull(),
	termDaysFixed: tinyint({ unsigned: true }).notNull(),
	amortdayoption1: tinyint({ unsigned: true }).notNull(),
	amortdayoption2: tinyint().notNull(),
	date: date().notNull(),
	postingtime: datetime().notNull(),
	maturity: date().notNull(),
	maturity2: date().notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	amountApplied: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	sellingprice: decimal({ precision: 12, scale: 2 }).notNull(),
	downpaymenttype: tinyint().notNull(),
	downpaymentrate: int().notNull(),
	interestrate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	discountInterest: double().notNull(),
	interestcomputation: tinyint({ unsigned: true }).notNull(),
	interestcomputationbasis: tinyint({ unsigned: true }).notNull(),
	diminishingequalprincipal: tinyint({ unsigned: true }).notNull(),
	interest: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	servicechargediscountedflex: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	scamortvalue: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	savingsamortized: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1value: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2value: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	principalInterval: tinyint({ unsigned: true }).notNull(),
	principalIntervalAdjustment: tinyint().notNull(),
	principalIntervalIrregular: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amortFixed: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	partialInt: tinyint({ unsigned: true }).notNull(),
	partialSC: tinyint({ unsigned: true }).notNull(),
	proceeds: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	proceedstype: tinyint({ unsigned: true }).notNull(),
	proceedsreference: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creditorid: smallint({ unsigned: true }).notNull(),
	workersemployed: smallint({ unsigned: true }).notNull(),
	industryid: smallint({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
	loanpurposeid: smallint({ unsigned: true }).notNull(),
	loanpurpose: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	securityid: smallint({ unsigned: true }).notNull(),
	assetsizeid: tinyint({ unsigned: true }).notNull(),
	clientgroupid: smallint({ unsigned: true }).notNull(),
	restructuredtag: tinyint({ unsigned: true }).notNull(),
	restructuredscrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	restructuredCount: tinyint({ unsigned: true }).notNull(),
	autodebitAmort: tinyint({ unsigned: true }).notNull(),
	loanstatusstatic: tinyint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	loancycle: smallint({ unsigned: true }).notNull(),
	loanofficerid: mediumint({ unsigned: true }).notNull(),
	companyrepid: int({ unsigned: true }).notNull(),
	solicitortype: tinyint({ unsigned: true }).notNull(),
	solicitorid: int({ unsigned: true }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	tellerid: mediumint().notNull(),
	provisionManual: decimal("provision_manual", { unsigned: true, precision: 4, scale: 2 }).notNull(),
	amortdetailstemp: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isapproved: tinyint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	approverid2: mediumint().notNull(),
	interestdiscounted: decimal({ precision: 10, scale: 2, mode: 'number' }).default(0.00),
	servicechargediscounted: decimal({ precision: 10, scale: 2, mode: 'number' }).default(0.00),
	insurance: decimal({ precision: 10, scale: 2, mode: 'number' }).default(0.00),
	savingsdiscounted: decimal({ precision: 10, scale: 2, mode: 'number' }).default(0.00),
});

export const scrMisposting = mysqlTable("scr_misposting", {
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	oridold: bigint({ unsigned: true, mode: 'number' }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const scrMispostingtemp = mysqlTable("scr_mispostingtemp", {
	branchid: smallint().notNull(),
	mispostingdate: date().notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const scrPaymentdetails = mysqlTable("scr_paymentdetails", {
	paymentid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	scrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	principalpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	interestpmt: decimal({ precision: 10, scale: 2 }).notNull(),
	servicechargepmt: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	savingspmt: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	amort1pmt: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	amort2pmt: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	penaltypmt: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
	pastdueinterestpmt: decimal({ precision: 10, scale: 2 }).default(sql`NULL`),
});

export const scrPayments = mysqlTable("scr_payments", {
	paymentid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	postingtime: datetime().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	paymentdate: date().notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paymentmode: smallint().notNull(),
	paymentreference: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paymentamount: decimal({ precision: 10, scale: 2 }).notNull(),
	postedbyid: mediumint({ unsigned: true }).notNull(),
	scrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	scridIndex: bigint("scrid_index", { unsigned: true, mode: 'number' }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	nextdatedue: date().notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	loanstatusprevious: tinyint({ unsigned: true }).notNull(),
	loanstatus: tinyint({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
});

export const scrPaymentsor = mysqlTable("scr_paymentsor", {
	orid: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	postingtime: datetime().notNull(),
	transdate: date().notNull(),
	branchid: mediumint({ unsigned: true }).notNull(),
	clienttype: tinyint({ unsigned: true }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paymentmode: boolean().notNull(),
	paymentreference: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	oramount: decimal({ precision: 12, scale: 2 }).notNull(),
	orstatus: tinyint({ unsigned: true }).notNull(),
	type: tinyint().notNull(),
	tellerid: mediumint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
});

export const scrProvision = mysqlTable("scr_provision", {
	assessment: tinyint({ unsigned: true }).notNull(),
	security: tinyint({ unsigned: true }).notNull(),
	lower: smallint().notNull(),
	upper: smallint().notNull(),
	rate: decimal({ unsigned: true, precision: 5, scale: 2 }).notNull(),
	aclClass: tinyint({ unsigned: true }).notNull(),
});

export const scrProvisionqualitative = mysqlTable("scr_provisionqualitative", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transdate: date().notNull(),
	provisionManual: decimal("provision_manual", { unsigned: true, precision: 5, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const scrReleasedelete = mysqlTable("scr_releasedelete", {
	releasedeleteid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	branchid: mediumint({ unsigned: true }).notNull(),
	scrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientid: int().notNull(),
	loanamount: decimal({ precision: 12, scale: 2 }).notNull(),
	reason: varchar({ length: 300 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	status: int().notNull(),
});

export const scrRemittancedelete = mysqlTable("scr_remittancedelete", {
	branchid: smallint().notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	ornumber: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	userid: mediumint().notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	deletetime: datetime().notNull(),
	deletesystemdate: date().notNull(),
});

export const scrRemittancedeletetemp = mysqlTable("scr_remittancedeletetemp", {
	branchid: smallint({ unsigned: true }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint({ unsigned: true }).default(sql`NULL`),
	approverid: mediumint({ unsigned: true }).default(sql`NULL`),
});

export const scrRemittancedeletetemp2 = mysqlTable("scr_remittancedeletetemp2", {
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	scrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
});

export const scrReturncheck = mysqlTable("scr_returncheck", {
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	oridold: bigint({ unsigned: true, mode: 'number' }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const scrReturnchecktemp = mysqlTable("scr_returnchecktemp", {
	branchid: smallint().notNull(),
	transdate: date().notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
});

export const scrSettings = mysqlTable("scr_settings", {
	settingid: int().autoincrement().primaryKey(),
	status: tinyint({ unsigned: true }).notNull(),
	name: varchar({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortname: char({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	description: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint({ unsigned: true }).notNull(),
	usepnform: tinyint({ unsigned: true }).notNull(),
	downpaymenttype: tinyint().notNull(),
	downpaymentrate: decimal({ precision: 12, scale: 2 }).notNull(),
	downpaymentrateflexibility: int().notNull(),
	loanamountmaximum: int().notNull(),
	loancountmaximum: tinyint({ unsigned: true }).notNull(),
	loanproductceiling: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	grouping: boolean().notNull(),
	weekadjuster: tinyint({ unsigned: true }).notNull(),
	groupby: boolean().notNull(),
	requirecoborrower: tinyint({ unsigned: true }).notNull(),
	requiredcomakers: tinyint({ unsigned: true }).notNull(),
	requireworkersemployed: tinyint({ unsigned: true }).notNull(),
	borrowertypedefault: mediumint({ unsigned: true }).notNull(),
	clientgroupdefault: smallint({ unsigned: true }).notNull(),
	requiresecurity: tinyint({ unsigned: true }).notNull(),
	defaultsecurity: tinyint({ unsigned: true }).notNull(),
	collectionlistdisplay: tinyint({ unsigned: true }).notNull(),
	isEmployeeLoan: tinyint({ unsigned: true }).notNull(),
	termunitflexibility: tinyint({ unsigned: true }).notNull(),
	termunit: boolean().notNull(),
	termflexibility: boolean().notNull(),
	termDaysFixed: tinyint({ unsigned: true }).notNull(),
	termDaysFixedFlex: tinyint({ unsigned: true }).notNull(),
	termdefault: tinyint().notNull(),
	termmaximum: smallint().notNull(),
	discountamort: int().notNull(),
	scrdiscountglcode: int().notNull(),
	scrinterestincomeglcode: int().notNull(),
	interestrate: decimal({ precision: 4, scale: 2 }).notNull(),
	interestcomputation: tinyint({ unsigned: true }).notNull(),
	interestcomputationflexibility: tinyint({ unsigned: true }).notNull(),
	interestcomputationbasis: tinyint({ unsigned: true }).notNull(),
	interestcomputationbasisflexibility: tinyint({ unsigned: true }).notNull(),
	diminishingequalprincipal: tinyint({ unsigned: true }).notNull(),
	balloonoption: tinyint({ unsigned: true }).notNull(),
	computepastdueinterest: tinyint({ unsigned: true }).notNull(),
	daysinayear: smallint({ unsigned: true }).notNull(),
	interestrateflexibility: boolean().notNull(),
	interestrateminimum: decimal({ precision: 4, scale: 2 }).notNull(),
	interestdiscountbooking: boolean().notNull(),
	interestdiscountedglcode: int({ unsigned: true }).notNull(),
	interestamortizedglcode: int({ unsigned: true }).notNull(),
	firstamortint: tinyint({ unsigned: true }).notNull(),
	adjustonholidays: boolean().notNull(),
	amortrounding: tinyint().notNull(),
	amortgraceperiod: boolean().notNull(),
	amortoption: text().default(sql`NULL`).charSet("latin1").collate("latin1_swedish_ci"),
	autodebitAmort: tinyint({ unsigned: true }).notNull(),
	aclAssessment: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	scdiscounteduse: tinyint({ unsigned: true }).notNull(),
	scdiscountedname: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	scdiscountedflexibility: boolean().notNull(),
	scdiscountedMaxDays2Prorate: smallint({ unsigned: true }).notNull(),
	scbracketoption: tinyint({ unsigned: true }).notNull(),
	scdpyear: smallint({ unsigned: true }).notNull(),
	scrateoption: tinyint({ unsigned: true }).notNull(),
	scdiscountbooking: boolean().notNull(),
	scdiscountedglcode: int({ unsigned: true }).notNull(),
	scamortuse: tinyint({ unsigned: true }).notNull(),
	scamortname: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	scamortvalue: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	scamortoption: tinyint({ unsigned: true }).notNull(),
	scamortflexibility: tinyint({ unsigned: true }).notNull(),
	scamortglcode: int({ unsigned: true }).notNull(),
	penaltyrate: decimal({ precision: 4, scale: 2 }).notNull(),
	penaltyperamort: decimal({ precision: 8, scale: 2 }).notNull(),
	principalpenaltyoption: boolean().notNull(),
	pastduepenaltyrate: decimal({ precision: 4, scale: 2 }).notNull(),
	preterminationpenaltyrate: decimal({ precision: 4, scale: 2 }).notNull(),
	penaltyAmortFixedRate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	penaltyAmortFixedAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	penaltyAmortRunningRate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	penaltyAmortGracePeriod: smallint({ unsigned: true }).notNull(),
	penaltyAmortBasis: tinyint({ unsigned: true }).notNull(),
	penaltyDueFixedRate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	penaltyDueFixedAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	penaltyDueRunningRate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	penaltyDueGracePeriod: smallint({ unsigned: true }).notNull(),
	penaltyDueInclude: tinyint({ unsigned: true }).notNull(),
	penaltyglcode: int({ unsigned: true }).notNull(),
	pdinterestglcode: int({ unsigned: true }).notNull(),
	proceedstypedefault: int().notNull(),
	amort1use: boolean().notNull(),
	amort1name: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amort1value: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort1option: tinyint({ unsigned: true }).notNull(),
	amort1flexibility: boolean().notNull(),
	amort1glcode: int({ unsigned: true }).notNull(),
	amort2use: boolean().notNull(),
	amort2name: char({ length: 18 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amort2value: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	amort2option: tinyint({ unsigned: true }).notNull(),
	amort2flexibility: boolean().notNull(),
	amort2glcode: int({ unsigned: true }).notNull(),
	amort2destination: tinyint({ unsigned: true }).notNull(),
	defaultcostcenter: int({ unsigned: true }).notNull(),
	currentglcode: int({ unsigned: true }).notNull(),
	pastdueglcode: int({ unsigned: true }).notNull(),
	nonperfglcode: int({ unsigned: true }).notNull(),
	inlitigationglcode: int({ unsigned: true }).notNull(),
	provisionglcode: int({ unsigned: true }).notNull(),
	cureperiod: smallint({ unsigned: true }).notNull(),
	cureperiod1: tinyint({ unsigned: true }).notNull(),
	cureperiod2: tinyint({ unsigned: true }).notNull(),
	cureperiod3: tinyint({ unsigned: true }).notNull(),
	cureperiod4: tinyint({ unsigned: true }).notNull(),
	cureperiod5: tinyint({ unsigned: true }).notNull(),
	cureperiod6: tinyint({ unsigned: true }).notNull(),
	cureperiod7: tinyint({ unsigned: true }).notNull(),
	cureperiod8: tinyint({ unsigned: true }).notNull(),
	smsLanguage: tinyint({ unsigned: true }).notNull(),
	smsFreeAmt: int({ unsigned: true }).notNull(),
	smsLoanBalance: int().notNull(),
	smsUnpaidAmorts: tinyint().notNull(),
	codePn: text("code_pn").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	codeAppform: text("code_appform").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	sapprovalAmountLevel1: decimal("SapprovalAmountLevel1", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	sapprovalAmountLevel2: decimal("SapprovalAmountLevel2", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	sapprovalAmountLevel3: decimal("SapprovalAmountLevel3", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	sapprovalAmountLevel4: decimal("SapprovalAmountLevel4", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	sapprovalAmountLevel5: decimal("SapprovalAmountLevel5", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	uapprovalAmountLevel1: decimal("UapprovalAmountLevel1", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	uapprovalAmountLevel2: decimal("UapprovalAmountLevel2", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	uapprovalAmountLevel3: decimal("UapprovalAmountLevel3", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	uapprovalAmountLevel4: decimal("UapprovalAmountLevel4", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	uapprovalAmountLevel5: decimal("UapprovalAmountLevel5", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	approvalRequired: tinyint({ unsigned: true }).notNull(),
});

export const scrTempremitor = mysqlTable("scr_tempremitor", {
	orid: bigint({ mode: 'number' }).notNull(),
	systemdate: date().notNull(),
});

export const scrTempremitpmt = mysqlTable("scr_tempremitpmt", {
	id: int().autoincrement().primaryKey(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	paymentamount: decimal({ precision: 12, scale: 2 }).notNull(),
	scrid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	interestRecompute: tinyint({ unsigned: true }).notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	policyid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	autodebitSavingsid: bigint("autodebit_savingsid", { unsigned: true, mode: 'number' }).notNull(),
},
(table) => [
	index("pnid").on(table.scrid),
	index("policyid").on(table.policyid, table.autodebitSavingsid),
	index("orid").on(table.orid),
	index("savingsid").on(table.savingsid),
]);

export const slBalances = mysqlTable("sl_balances", {
	slbalanceid: int({ unsigned: true }).autoincrement().primaryKey(),
	date: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	loans: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	savings: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	bp: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	ca: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	ar: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	ffe: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	cib: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	coci: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	coh: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("date").on(table.date),
	index("branchid").on(table.branchid),
]);

export const slBank = mysqlTable("sl_bank", {
	bankid: int({ unsigned: true }).autoincrement().primaryKey(),
	parentbankid: mediumint({ unsigned: true }).notNull(),
	branchname: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	accounttype: tinyint().notNull(),
	accountnumber: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	contactperson: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	contactnumber: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchuser: smallint({ unsigned: true }).notNull(),
	currency: tinyint().notNull(),
	banktype: tinyint().notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
	interestglcode: int({ unsigned: true }).notNull(),
	bankstatus: boolean().notNull(),
	accreditationNumber: varchar("accreditation_number", { length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	compliance: tinyint({ unsigned: true }).notNull(),
	placementAmount: decimal("placement_amount", { unsigned: true, precision: 14, scale: 2 }).notNull(),
	placementdate: date().notNull(),
	maturity: date().notNull(),
},
(table) => [
	index("branchuser").on(table.branchuser),
]);

export const slBankparent = mysqlTable("sl_bankparent", {
	parentbankid: mediumint({ unsigned: true }).autoincrement().primaryKey(),
	bankname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	bankcode: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	banktype: tinyint().notNull(),
});

export const slBanktransactions = mysqlTable("sl_banktransactions", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	bankid: int({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	details: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transaction: tinyint({ unsigned: true }).notNull(),
	memoglcode: int({ unsigned: true }).notNull(),
	withdrawal: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	deposit: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	userid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("transaction").on(table.transaction),
	index("branchid_2").on(table.branchid),
	index("branchid_3").on(table.branchid),
	index("transaction_3").on(table.transaction),
	index("bankid").on(table.bankid),
	index("branchid").on(table.branchid),
	index("transdate_2").on(table.transdate),
	index("transdate_3").on(table.transdate),
	index("transaction_2").on(table.transaction),
]);

export const slCashadvance = mysqlTable("sl_cashadvance", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	date: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	detail: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	payment: decimal({ precision: 10, scale: 2 }).notNull(),
	cashadvance: decimal({ precision: 10, scale: 2 }).notNull(),
	balance: decimal({ precision: 10, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("employeeid").on(table.employeeid),
	index("detail").on(table.detail),
	index("branchid").on(table.branchid),
	index("balance").on(table.balance),
]);

export const slConsumabledeliverypartial = mysqlTable("sl_consumabledeliverypartial", {
	orderid: int({ unsigned: true }).notNull(),
	consumableid: int({ unsigned: true }).notNull(),
	deliveryQty: smallint({ unsigned: true }).notNull(),
},
(table) => [
	index("consumableid").on(table.consumableid),
	index("orderid").on(table.orderid),
]);

export const slConsumabledispatch = mysqlTable("sl_consumabledispatch", {
	dispatchid: int().autoincrement().primaryKey(),
	dispatchDate: date().notNull(),
	branchidOrigin: smallint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	deliveredbyid: mediumint({ unsigned: true }).notNull(),
	consumableid: int({ unsigned: true }).notNull(),
	dispatchqty: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("consumableId").on(table.consumableid),
	index("branchid").on(table.branchid),
	index("deliveredbyid").on(table.deliveredbyid),
]);

export const slConsumableitems = mysqlTable("sl_consumableitems", {
	consumableid: int({ unsigned: true }).autoincrement().primaryKey(),
	consumablename: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
	cost: decimal({ precision: 12, scale: 2 }).notNull(),
	reorderlevel: int().notNull(),
	reorderqty: int().notNull(),
	consumableunit: smallint({ unsigned: true }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
});

export const slConsumableorders = mysqlTable("sl_consumableorders", {
	orderid: int({ unsigned: true }).autoincrement().primaryKey(),
	dateOrdered: date().notNull(),
	dateCompleted: date().notNull(),
	postingtime: datetime().notNull(),
	branchid: smallint().notNull(),
	orderStatus: tinyint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("orderStatus").on(table.orderStatus),
]);

export const slConsumableordersdetails = mysqlTable("sl_consumableordersdetails", {
	orderdetailid: int().autoincrement().primaryKey(),
	orderid: int({ unsigned: true }).notNull(),
	consumableId: int({ unsigned: true }).notNull(),
	orderqty: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("orderid").on(table.orderid),
]);

export const slConsumabletrans = mysqlTable("sl_consumabletrans", {
	consumabletransid: int({ unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	consumableid: int({ unsigned: true }).notNull(),
	transdate: date().notNull(),
	transaction: tinyint({ unsigned: true }).notNull(),
	itemIn: mediumint({ unsigned: true }).notNull(),
	itemOut: mediumint({ unsigned: true }).notNull(),
	itemBalance: mediumint().notNull(),
	itemAmount: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("consumableid").on(table.consumableid),
	index("makerid").on(table.makerid),
	index("branchid").on(table.branchid),
]);

export const slCreditor = mysqlTable("sl_creditor", {
	creditorid: int({ unsigned: true }).autoincrement().primaryKey(),
	creditorname: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	creditline: decimal({ precision: 12, scale: 2 }).notNull(),
	description: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fundertag: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	bankid: int({ unsigned: true }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
	interestglcode: int({ unsigned: true }).notNull(),
	scglcode: int({ unsigned: true }).notNull(),
},
(table) => [
	index("bankid").on(table.bankid),
	index("bankid_3").on(table.bankid),
	index("bankid_2").on(table.bankid),
]);

export const slCreditoramortizations = mysqlTable("sl_creditoramortizations", {
	drawdownid: int({ unsigned: true }).notNull(),
	amortnumber: smallint({ unsigned: true }).notNull(),
	datedue: date().notNull(),
	principal: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	interest: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	servicecharge: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	pdc: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isremitted: tinyint({ unsigned: true }).notNull(),
	creditortransid: int({ unsigned: true }).notNull(),
},
(table) => [
	index("drawdownid").on(table.drawdownid),
	index("datedue").on(table.datedue),
]);

export const slCreditordrawdowns = mysqlTable("sl_creditordrawdowns", {
	drawdownid: int({ unsigned: true }).autoincrement().primaryKey(),
	drawdowndate: date().notNull(),
	creditorid: mediumint({ unsigned: true }).notNull(),
	transid: int({ unsigned: true }).notNull(),
	pnid: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	drawdown: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	bankid: mediumint({ unsigned: true }).notNull(),
	term: smallint({ unsigned: true }).notNull(),
	termunit: tinyint({ unsigned: true }).notNull(),
	interestrate: decimal({ unsigned: true, precision: 7, scale: 4 }).notNull(),
	datepaid: date().notNull(),
},
(table) => [
	index("bankid").on(table.bankid),
	index("transid").on(table.transid),
]);

export const slCreditorsmswarningrecipient = mysqlTable("sl_creditorsmswarningrecipient", {
	employeeid: mediumint().primaryKey(),
});

export const slCreditortransactions = mysqlTable("sl_creditortransactions", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	banktransid: int({ unsigned: true }).notNull(),
	transdate: date().notNull(),
	creditorid: int({ unsigned: true }).notNull(),
	details: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	payment: decimal({ precision: 14, scale: 2 }).notNull(),
	interest: decimal({ precision: 14, scale: 2 }).notNull(),
	servicecharge: decimal({ precision: 14, scale: 2 }).notNull(),
	drawdown: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	balance: decimal({ precision: 14, scale: 2 }).notNull(),
	userid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("banktransid_2").on(table.banktransid),
	index("creditorid").on(table.creditorid),
	index("banktransid").on(table.banktransid),
	index("banktransid_3").on(table.banktransid),
	index("transdate").on(table.transdate),
]);

export const slFfe = mysqlTable("sl_ffe", {
	ffeid: mediumint({ unsigned: true }).primaryKey(),
	ffetypeid: smallint().notNull(),
	model: char({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	serialid: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	description: char({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	supplier: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	ffeuserid: mediumint({ unsigned: true }).notNull(),
	method: tinyint({ unsigned: true }).notNull(),
	purchasedate: date().notNull(),
	salvagevalue: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	purchaseamount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	depreciatedamount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	bookvalue: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	life: smallint({ unsigned: true }).notNull(),
	lifeused: smallint({ unsigned: true }).notNull(),
	lifeunused: smallint({ unsigned: true }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid_2").on(table.branchid),
	index("branchid").on(table.branchid),
	index("ffetypeid").on(table.ffetypeid),
]);

export const slFfedefectivetemp = mysqlTable("sl_ffedefectivetemp", {
	ffeid: mediumint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
});

export const slFfedepreciation = mysqlTable("sl_ffedepreciation", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	ffeid: mediumint({ unsigned: true }).notNull(),
	transtype: tinyint({ unsigned: true }).notNull(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	lifeused: smallint({ unsigned: true }).notNull(),
	depreciation: decimal({ precision: 12, scale: 2 }).notNull(),
	bookvalue: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("transtype").on(table.transtype),
	index("branchid").on(table.branchid),
	index("transdate_2").on(table.transdate),
	index("branchid_2").on(table.branchid),
	index("branchid_3").on(table.branchid),
	index("ffeid").on(table.ffeid),
	index("transdate").on(table.transdate),
	index("transtype_2").on(table.transtype),
	index("transtype_3").on(table.transtype),
	index("transdate_3").on(table.transdate),
]);

export const slFfeInventory = mysqlTable("sl_ffe_inventory", {
	branchid: smallint({ unsigned: true }).notNull(),
	ffeid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	scandate: date().notNull(),
},
(table) => [
	index("ffeid").on(table.ffeid),
	index("branchid").on(table.branchid),
]);

export const slFfemovement = mysqlTable("sl_ffemovement", {
	ffemovementid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	ffeid: mediumint({ unsigned: true }).notNull(),
	previousbranchid: smallint({ unsigned: true }).notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	ffeuserid: mediumint({ unsigned: true }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("ffeid").on(table.ffeid),
	index("ffeuserid").on(table.ffeuserid),
]);

export const slFfemovementtemp = mysqlTable("sl_ffemovementtemp", {
	ffeid: mediumint({ unsigned: true }).primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	ffeuserid: mediumint({ unsigned: true }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("ffeuserid").on(table.ffeuserid),
]);

export const slFfetype = mysqlTable("sl_ffetype", {
	ffetypeid: mediumint({ unsigned: true }).notNull(),
	ffetypename: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	life: smallint({ unsigned: true }).notNull(),
	method: tinyint({ unsigned: true }).notNull(),
	category: tinyint({ unsigned: true }).notNull(),
	salvagevaluedefault: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("ffetypeid").on(table.ffetypeid),
]);

export const slFfetypecategory = mysqlTable("sl_ffetypecategory", {
	category: tinyint({ unsigned: true }).primaryKey(),
	categoryname: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	depreciationglcode: int({ unsigned: true }).notNull(),
	accumulateddepreciationglcode: int({ unsigned: true }).notNull(),
	isItequipment: tinyint("is_itequipment", { unsigned: true }).notNull(),
});

export const slHtm = mysqlTable("sl_htm", {
	htmId: int("htm_id").autoincrement().primaryKey(),
	issuerId: tinyint("issuer_id", { unsigned: true }).default(sql`NULL`),
	securityType: tinyint("security_type", { unsigned: true }).notNull(),
	compliance: tinyint({ unsigned: true }).notNull(),
	accreditationNumber: varchar("accreditation_number", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isin: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dateIssuance: date("date_issuance").notNull(),
	dateMaturity: date("date_maturity").notNull(),
	dateTerminated: date("date_terminated").notNull(),
	faceValue: decimal("face_value", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	bookValue: decimal("book_value", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	interestRate: decimal("interest_rate", { precision: 7, scale: 5 }).notNull(),
});

export const slReceivable = mysqlTable("sl_receivable", {
	receivableid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	employeeid: mediumint({ unsigned: true }).notNull(),
	detail: varchar({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	payment: decimal({ precision: 10, scale: 2 }).notNull(),
	receivable: decimal({ precision: 10, scale: 2 }).notNull(),
	balance: decimal({ precision: 10, scale: 2 }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("balance").on(table.balance),
	index("employeeid").on(table.employeeid),
	index("balance_2").on(table.balance),
]);

export const slStockCertificate = mysqlTable("sl_stock_certificate", {
	certificateid: int().autoincrement().primaryKey(),
	certificateTransaction: tinyint({ unsigned: true }).notNull(),
	shareholderid: int({ unsigned: true }).notNull(),
	certificateDate: date().notNull(),
	certificateNo: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	certificateShares: decimal({ precision: 10, scale: 2 }).notNull(),
	certificateAmount: decimal({ precision: 12, scale: 2 }).notNull(),
	certificateReference: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	paidupShares: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	paidupAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	certificateidCancelled: int({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.shareholderid),
	index("certNo").on(table.certificateNo),
	index("dateIssued").on(table.certificateDate),
	index("dateCancelled").on(table.certificateidCancelled),
]);

export const slStockDividend = mysqlTable("sl_stock_dividend", {
	dividendid: int({ unsigned: true }).autoincrement().primaryKey(),
	dividendDate: date().notNull(),
	shareholderid: int({ unsigned: true }).notNull(),
	dividendType: tinyint({ unsigned: true }).notNull(),
	dividendShares: decimal({ unsigned: true }).notNull(),
	dividendAmount: decimal({ unsigned: true, precision: 12, scale: 0 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
});

export const slStockShareholders = mysqlTable("sl_stock_shareholders", {
	shareholderid: int({ unsigned: true }).autoincrement().primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	shareType: tinyint({ unsigned: true }).notNull(),
	subscribeShares: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	subscribeAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	paidupShares: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	paidupAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const slStockSubscription = mysqlTable("sl_stock_subscription", {
	subscriptionid: int().autoincrement().primaryKey(),
	subscribeTransaction: tinyint({ unsigned: true }).notNull(),
	shareholderid: int({ unsigned: true }).notNull(),
	subscribeDate: date().notNull(),
	transShares: decimal({ precision: 10, scale: 2 }).notNull(),
	transAmount: decimal({ precision: 12, scale: 2 }).notNull(),
	reference: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	subscribeShares: decimal({ unsigned: true, precision: 10, scale: 2 }).notNull(),
	subscribeAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("shareholderid").on(table.shareholderid),
	index("makerid").on(table.makerid),
	index("subscribeDate").on(table.subscribeDate),
]);

export const smsInbox = mysqlTable("sms_inbox", {
	messageID: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	smsNumber: char({ length: 11 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	smsMessage: varchar({ length: 480 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	sim: tinyint({ unsigned: true }).notNull(),
	timeStamp: datetime().notNull(),
	replied: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("SMSMessage").on(table.smsMessage),
	index("SMSNumber").on(table.smsNumber),
]);

export const smsMonitornumbers = mysqlTable("sms_monitornumbers", {
	employeeid: mediumint({ unsigned: true }).notNull(),
});

export const smsOutbox = mysqlTable("sms_outbox", {
	messageID: bigint({ mode: 'number' }).autoincrement().primaryKey(),
	smsNumber: char({ length: 11 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	smsMessage: varchar({ length: 480 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	timeSent: datetime().notNull(),
	deleteFlag: tinyint({ unsigned: true }).notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	status: boolean().notNull(),
	chargeClient: tinyint({ unsigned: true }).notNull(),
});

export const smsOutboxhistory = mysqlTable("sms_outboxhistory", {
	messageID: bigint({ mode: 'number' }).autoincrement().primaryKey(),
	smsNumber: char({ length: 11 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	smsMessage: varchar({ length: 480 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	timeSent: datetime().notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	chargeClient: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const smsSavings = mysqlTable("sms_savings", {
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	transaction: smallint({ unsigned: true }).notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	postingtime: datetime().notNull(),
},
(table) => [
	index("savingsid").on(table.savingsid),
]);

export const smsSentcount = mysqlTable("sms_sentcount", {
	sentDate: date().primaryKey(),
	sentCount: decimal({ unsigned: true }).notNull(),
});

export const smsTelcoPrefix = mysqlTable("sms_telco_prefix", {
	prefix: smallint({ unsigned: true }).primaryKey(),
	gatewayId: int("gateway_id").default(sql`NULL`),
	network: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const systemDbbackup = mysqlTable("system_dbbackup", {
	type: tinyint({ unsigned: true }).notNull(),
	status: boolean().notNull(),
});

export const telleringErrorcorrecttemp = mysqlTable("tellering_errorcorrecttemp", {
	transactionid: int({ unsigned: true }).primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
});

export const telleringExpense = mysqlTable("tellering_expense", {
	expenseid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	description: char({ length: 255 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	type: tinyint({ unsigned: true }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("branchid_3").on(table.branchid),
	index("branchid_2").on(table.branchid),
]);

export const telleringExpensedetails = mysqlTable("tellering_expensedetails", {
	expenseid: int({ unsigned: true }).notNull(),
	glcode: int({ unsigned: true }).notNull(),
	amount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	costcenterid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("expenseid_2").on(table.expenseid),
	index("expenseid").on(table.expenseid),
	index("expenseid_3").on(table.expenseid),
]);

export const telleringOrcoordinate = mysqlTable("tellering_orcoordinate", {
	variable: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	jsonData: varchar("json_data", { length: 26000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const telleringPrintcoordinates = mysqlTable("tellering_printcoordinates", {
	variable: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	coordinate: decimal({ precision: 4, scale: 1 }).notNull(),
});

export const telleringSettings = mysqlTable("tellering_settings", {
	telleringid: smallint({ unsigned: true }).primaryKey(),
	telleringname: char({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	normalbalance: tinyint({ unsigned: true }).notNull(),
	protection: tinyint({ unsigned: true }).notNull(),
	document1: tinyint({ unsigned: true }).notNull(),
	document2: tinyint({ unsigned: true }).notNull(),
	status: tinyint({ unsigned: true }).notNull(),
	autojournal: tinyint({ unsigned: true }).notNull(),
	validationX: mediumint("validation_x", { unsigned: true }).notNull(),
	validationY: mediumint("validation_y", { unsigned: true }).notNull(),
},
(table) => [
	index("normalbalance_2").on(table.normalbalance),
	index("normalbalance").on(table.normalbalance),
	index("normalbalance_3").on(table.normalbalance),
]);

export const telleringTransactions = mysqlTable("tellering_transactions", {
	transactionid: int({ unsigned: true }).autoincrement().primaryKey(),
	transdate: date().notNull(),
	postingtime: datetime().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	telleringid: mediumint({ unsigned: true }).notNull(),
	details: varchar({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glcode: int({ unsigned: true }).notNull(),
	document1: boolean().notNull(),
	document2: boolean().notNull(),
	reference1: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	reference2: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ precision: 12, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
	approverid: mediumint({ unsigned: true }).notNull(),
	errorcorrected: tinyint({ unsigned: true }).notNull(),
},
(table) => [
	index("telleringid").on(table.telleringid),
	index("transdate").on(table.transdate),
	index("transdate_2").on(table.transdate),
	index("transdate_3").on(table.transdate),
	index("branchid").on(table.branchid),
	index("branchid_2").on(table.branchid),
	index("branchid_3").on(table.branchid),
]);

export const vwMobilePrefix = mysqlTable("vw_mobile_prefix", {
	prefix: varchar({ length: 12 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	telco: varchar({ length: 150 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
});

export const writeoffApproval = mysqlTable("writeoff_approval", {
	writeoffid: int().autoincrement().primaryKey(),
	postingtime: datetime().notNull(),
	postingdate: date().notNull(),
	count: int({ unsigned: true }).notNull(),
	loanamount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	loanbalance: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	savingsbalance: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	writeoffamount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
	approver2id: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("approver2id").on(table.approver2id),
	index("approver1id").on(table.approver1id),
]);

export const writeoffData = mysqlTable("writeoff_data", {
	writeoffid: int({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	pnid2: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	loanproductid: int({ unsigned: true }).notNull(),
	loanclassid: smallint({ unsigned: true }).notNull(),
	termunit: tinyint({ unsigned: true }).notNull(),
	term: smallint({ unsigned: true }).notNull(),
	date: date().notNull(),
	maturity: date().notNull(),
	amount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interestrate: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	interestcomputationbasis: tinyint({ unsigned: true }).notNull(),
	coborrowerid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	comaker1id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	comaker2id: bigint({ unsigned: true, mode: 'number' }).notNull(),
	loancycle: smallint({ unsigned: true }).notNull(),
	loanofficerid: mediumint({ unsigned: true }).notNull(),
	loanbalance: decimal({ precision: 12, scale: 2 }).notNull(),
	savingsbalance: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	writeoffbalance: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	lasttransdate: date().notNull(),
	interestreferencedate: date().notNull(),
},
(table) => [
	index("comaker1id_2").on(table.comaker1id),
	index("loanbalance_2").on(table.loanbalance),
	index("writeoffid").on(table.writeoffid),
	index("loanproductid").on(table.loanproductid),
	index("clientid").on(table.clientid),
	index("comaker1id").on(table.comaker1id),
	index("loanbalance").on(table.loanbalance),
	index("comaker2id_2").on(table.comaker2id),
	index("writeoffid_2").on(table.writeoffid),
	index("branchid").on(table.branchid),
	index("date").on(table.date),
	index("coborrowerid").on(table.coborrowerid),
	index("comaker2id").on(table.comaker2id),
]);

export const writeoffTempapproval = mysqlTable("writeoff_tempapproval", {
	makerid: mediumint({ unsigned: true }).notNull(),
	approver1id: mediumint({ unsigned: true }).notNull(),
});

export const writeoffTempdata = mysqlTable("writeoff_tempdata", {
	pnid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
});

export const writeoffTempor = mysqlTable("writeoff_tempor", {
	branchid: smallint({ unsigned: true }).notNull(),
	ornumber: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const writeoffTransactions = mysqlTable("writeoff_transactions", {
	transid: int({ unsigned: true }).autoincrement().primaryKey(),
	transtype: tinyint({ unsigned: true }).notNull(),
	transdate: date().notNull(),
	branchid: smallint({ unsigned: true }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	payment: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	interest: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	writeoffbalance: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("branchid").on(table.branchid),
	index("writeoffbalance").on(table.writeoffbalance),
	index("transdate").on(table.transdate),
	index("pnid").on(table.pnid),
]);

export const acctngBranchcostcenters = mysqlTable("acctng_branchcostcenters", {
	id: int().autoincrement().primaryKey(),
	branchid: smallint().notNull(),
	costcenterid: smallint().notNull(),
},
(table) => [
	index("costcenterid").on(table.costcenterid),
	index("branchid").on(table.branchid),
]);

export const generalClientsRiskprofiles = mysqlTable("general_clients_riskprofiles", {
	riskprofileId: int("riskprofile_id").autoincrement().primaryKey(),
	riskprofileTimestamp: datetime("riskprofile_timestamp").defaultNow().notNull(),
	clientid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	riskprofilemodelId: int("riskprofilemodel_id").notNull(),
	riskprofileDetails: varchar("riskprofile_details", { length: 5000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	riskprofileNarration: varchar("riskprofile_narration", { length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	riskprofileCategory: varchar("riskprofile_category", { length: 7 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("general_clients_riskprofiles_ibfk_1").on(table.riskprofilemodelId),
	index("makerid").on(table.makerid),
	index("clientid").on(table.clientid),
]);

export const generalSystemdateTemp = mysqlTable("general_systemdate_temp", {
	tempid: int({ unsigned: true }).autoincrement().primaryKey(),
	branchid: smallint({ unsigned: true }).notNull(),
	dateclosed: date().notNull(),
	datetimeclosed: datetime().notNull(),
	balanceCoci: decimal("balance_coci", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	balanceCoh: decimal("balance_coh", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	loansapproverid: mediumint({ unsigned: true }).notNull(),
	savingsapproverid: mediumint({ unsigned: true }).notNull(),
	managerapproverid: mediumint({ unsigned: true }).notNull(),
},
(table) => [
	index("general_systemdate_temp_ibfk_1").on(table.branchid),
]);

export const lendingPaymentTempdetails = mysqlTable("lending_payment_tempdetails", {
	orid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	paymentamount: decimal({ precision: 12, scale: 2 }).notNull(),
	pnid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	interestRecompute: tinyint({ unsigned: true }).notNull(),
	savingsexcess: decimal({ precision: 10, scale: 2 }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	policyid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	autodebitSavingsid: bigint("autodebit_savingsid", { unsigned: true, mode: 'number' }).notNull(),
},
(table) => [
	index("orid").on(table.orid),
	index("savingsid").on(table.savingsid),
	index("pnid").on(table.pnid),
	index("policyid").on(table.policyid),
]);

export const mobileTransferDetails = mysqlTable("mobile_transfer_details", {
	id: int({ unsigned: true }).autoincrement().primaryKey(),
	senderClientid: bigint("sender_clientid", { unsigned: true, mode: 'number' }).notNull(),
	receiverAccountnumber: varchar("receiver_accountnumber", { length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiverAccountname: varchar("receiver_accountname", { length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiverNickname: varchar("receiver_nickname", { length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	receiverAddress: varchar("receiver_address", { length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	bicfi: varchar({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("sender_clientid").on(table.senderClientid),
]);

export const savingsMemoglcodes = mysqlTable("savings_memoglcodes", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	glcode: int({ unsigned: true }).notNull(),
},
(table) => [
	index("fk_savings_memoglcodes_glcode").on(table.glcode),
]);

export const savingsTransactionsWtax = mysqlTable("savings_transactions_wtax", {
	savingstransactionid: bigint({ unsigned: true, mode: 'number' }).primaryKey(),
	wtax: decimal({ precision: 12, scale: 2 }).default(sql`NULL`),
});

export const acctngBudget = mysqlTable("acctng_budget", {
	budgetid: int().autoincrement().primaryKey(),
	glcode: int().notNull(),
	gltype: char({ length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	costcenterid: smallint().notNull(),
	branchid: smallint().notNull(),
	budgetYear: customType({ dataType: () => 'year(4)' })().notNull(),
	budget1: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget2: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget3: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget4: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget5: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget6: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget7: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget8: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget9: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget10: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget11: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	budget12: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("budgetYear").on(table.budgetYear),
	index("glcode").on(table.glcode),
	index("branchid").on(table.branchid),
	index("costcenterid").on(table.costcenterid),
]);

export const acctngCostCenter = mysqlTable("acctng_cost_center", {
	id: smallint().autoincrement().primaryKey(),
	name: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: smallint().notNull(),
	childcount: smallint().notNull(),
	categoryId: int("category_id").notNull(),
},
(table) => [
	index("category_id").on(table.categoryId),
]);

export const acctngDate = mysqlTable("acctng_date", {
	changeid: int().autoincrement().primaryKey(),
	currentAcctngdate: date("current_acctngdate").default(sql`NULL`),
	proposedAcctngdate: date("proposed_acctngdate").default(sql`NULL`),
	branchid: mediumint().default(0),
	makerid: mediumint().default(0),
	approverid: mediumint().default(0),
});

export const acctngFinancialratios = mysqlTable("acctng_financialratios", {
	finratio: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").primaryKey(),
	finratioName: varchar("finratio_name", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	formula: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	category: char({ length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	numerator: varchar({ length: 2000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	denominator: varchar({ length: 2000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isAnnualized: tinyint("is_annualized").notNull(),
	benchmark: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	benchmarkDate: date("benchmark_date").notNull(),
	viewSequence: tinyint("view_sequence").notNull(),
});

export const acctngGlaccounts = mysqlTable("acctng_glaccounts", {
	glCode: int("gl_code").notNull(),
	frpcode: char({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glName: char("gl_name", { length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glType: char("gl_type", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	glLevel: tinyint("gl_level").notNull(),
	glParent: int("gl_parent").notNull(),
	glChildcount: smallint("gl_childcount").notNull(),
	userlevel: tinyint().notNull(),
},
(table) => [
	index("gl_type").on(table.glType),
	uniqueIndex("gl_account_code").on(table.glCode),
]);

export const acctngJournaldetails = mysqlTable("acctng_journaldetails", {
	journalDetailsId: int("journal_details_id").autoincrement().primaryKey(),
	journalid: int().notNull(),
	glCode: int("gl_code").notNull(),
	journalDetailsDebit: decimal("journal_details_debit", { precision: 20, scale: 2 }).default(sql`NULL`),
	journalDetailsCredit: decimal("journal_details_credit", { precision: 20, scale: 2 }).default(sql`NULL`),
	subsidiary: int().notNull(),
},
(table) => [
	index("due_branch").on(table.subsidiary),
	index("journal_details_credit").on(table.journalDetailsCredit),
	index("gl_code").on(table.glCode),
	index("journal_details_debit").on(table.journalDetailsDebit),
	index("journalid").on(table.journalid),
]);

export const acctngJournals = mysqlTable("acctng_journals", {
	journalid: int().autoincrement().primaryKey(),
	ibjournalid: int().notNull(),
	journalDescription: varchar("journal_description", { length: 500 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	journalDate: date("journal_date").notNull(),
	timestamp: timestamp().defaultNow().notNull(),
	journalBranch: smallint("journal_branch").notNull(),
	user: mediumint().notNull(),
},
(table) => [
	index("journal_branch").on(table.journalBranch),
	index("user").on(table.user),
	index("journal_id").on(table.ibjournalid),
	index("journal_date").on(table.journalDate),
]);

export const acctngJournalIbtracker = mysqlTable("acctng_journal_ibtracker", {
	ibJournalDetailsId: int("ib_journal_details_id").notNull(),
	journalDetailsId: int("journal_details_id").notNull(),
},
(table) => [
	index("ib_journal_details_id").on(table.ibJournalDetailsId),
]);

export const acctngJournalTrail = mysqlTable("acctng_journal_trail", {
	trailId: int("trail_id").autoincrement().primaryKey(),
	timestamp: datetime().defaultNow().notNull(),
	acctngDate: date("acctng_date").default(sql`NULL`),
	process: varchar({ length: 7 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint().default(0),
	journalid: int().default(0),
	ibjournalid: int().notNull(),
	trailBefore: varchar("trail_before", { length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	trailAfter: varchar("trail_after", { length: 10000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint().default(0),
	approverid: mediumint().default(0),
},
(table) => [
	index("journalid").on(table.journalid),
	index("timestamp").on(table.timestamp),
	index("ibjournalid").on(table.ibjournalid),
	index("acctng_date").on(table.acctngDate),
]);

export const amlcTransaction = mysqlTable("amlc_transaction", {
	amlcId: int().autoincrement().primaryKey(),
	transType: tinyint().notNull(),
	dataType: tinyint().notNull(),
	referenceType: tinyint().notNull(),
	referenceId: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	description: varchar({ length: 75 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transCode: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint().notNull(),
	amlcBranchid: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	transDate: date().notNull(),
	postingtime: datetime().notNull(),
	transAmount: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	clientid1: bigint({ mode: 'number' }).notNull(),
	clientid2: bigint({ mode: 'number' }).notNull(),
	clientid3: bigint({ mode: 'number' }).notNull(),
	clientid4: bigint({ mode: 'number' }).notNull(),
	beneFlag: char({ length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneLastname: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneFirstname: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneMiddlename: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneAddress: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneBarangayid: mediumint().notNull(),
	beneAccountNumber: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneBirthdate: date().notNull(),
	beneBirthPlace: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneNationality: smallint().notNull(),
	beneIdType: varchar({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneIdNumber: varchar({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneTelephone: varchar({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	beneBusinessNature: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: smallint().notNull(),
	status: tinyint().notNull(),
},
(table) => [
	index("transType").on(table.transType),
	index("clientid1").on(table.clientid1),
	index("clientid3").on(table.clientid3),
	index("branchid").on(table.branchid),
	index("transDate").on(table.transDate),
	index("clientid2").on(table.clientid2),
	index("clientid4").on(table.clientid4),
]);

export const amlcTranscode = mysqlTable("amlc_transcode", {
	amlcCodeId: mediumint().autoincrement().primaryKey(),
	code: varchar({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	description: varchar({ length: 150 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	submissionType: tinyint().notNull(),
});

export const atmApiLogs = mysqlTable("atm_api_logs", {
	logid: int().autoincrement().primaryKey(),
	token: varchar({ length: 512 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	code: varchar({ length: 10 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	traceNumber: varchar("trace_number", { length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	message: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	accountNumber: varchar("account_number", { length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	currentBalance: float("current_balance").default(0),
	availableBalance: float("available_balance").default(0),
	date: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	time: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	transactionFee: float("transaction_fee").default(0),
	origin: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	amount: float().default(0),
	toAccountNumber: int("to_account_number").default(0),
	type: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	dateCreated: timestamp("date_created").defaultNow().notNull(),
	sourceIp: varchar("source_ip", { length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
});

export const atmMobileLogs = mysqlTable("atm_mobile_logs", {
	logid: int().autoincrement().primaryKey(),
	token: varchar({ length: 512 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	code: varchar({ length: 10 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	traceNumber: varchar("trace_number", { length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	message: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	accountNumber: varchar("account_number", { length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	currentBalance: float("current_balance").default(0),
	availableBalance: float("available_balance").default(0),
	date: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	time: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	transactionFee: float("transaction_fee").default(0),
	origin: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	amount: float().default(0),
	toAccountNumber: int("to_account_number").default(0),
	type: varchar({ length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	dateCreated: timestamp("date_created").defaultNow().notNull(),
	sourceIp: varchar("source_ip", { length: 45 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
});

export const auditDetails = mysqlTable("audit_details", {
	auditid: int().notNull(),
	detailsIndex: smallint().notNull(),
	policyrefid: int().notNull(),
	finding: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	findingRisk: tinyint().notNull(),
	demerit: tinyint().notNull(),
	isRecurring: tinyint().notNull(),
	noResponse: tinyint().notNull(),
	response: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dateTarget: date().notNull(),
	compliance: tinyint().notNull(),
	dateComplied: date().notNull(),
	comment: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	detailStatus: tinyint().notNull(),
},
(table) => [
	index("auditid").on(table.auditid),
	index("detailsIndex").on(table.detailsIndex),
]);

export const auditPolicyref = mysqlTable("audit_policyref", {
	policyrefid: int().primaryKey(),
	policyrefname: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: int().notNull(),
	childcount: smallint().notNull(),
});

export const auditProfile = mysqlTable("audit_profile", {
	auditid: int().autoincrement().primaryKey(),
	audittype: tinyint().notNull(),
	officetype: tinyint().notNull(),
	officeid: mediumint().notNull(),
	dateCutoff: date().notNull(),
	dateFrom: date().notNull(),
	dateTo: date().notNull(),
	dateClose: date().notNull(),
	dateExit: date().notNull(),
	dateReply: date().notNull(),
	auditorid: mediumint().notNull(),
	managerid: mediumint().notNull(),
	manageraccess: tinyint().notNull(),
	auditrating: decimal({ unsigned: true, precision: 4, scale: 2 }).notNull(),
	riskClassification: tinyint().notNull(),
	remarks: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
	auditstatus: tinyint().notNull(),
},
(table) => [
	index("officetype").on(table.officetype),
	index("officeid").on(table.officeid),
]);

export const checkingAutodebitaccount = mysqlTable("checking_autodebitaccount", {
	savingsid: bigint({ mode: 'number' }).primaryKey(),
	autodebitsavingsid: bigint({ mode: 'number' }).notNull(),
},
(table) => [
	index("autodebitsavingsid").on(table.autodebitsavingsid),
]);

export const checkingBookletdetails = mysqlTable("checking_bookletdetails", {
	checkbookletid: int().autoincrement().primaryKey(),
	dateRequest: date().notNull(),
	dateIssued: date().notNull(),
	branchid: smallint().notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
	conduitbankid: smallint().notNull(),
	checktype: tinyint().notNull(),
	charging: tinyint().notNull(),
	checknumberstart: bigint({ mode: 'number' }).notNull(),
	checknumberend: bigint({ mode: 'number' }).notNull(),
	makerid: mediumint().notNull(),
	savingstransactionid: bigint({ mode: 'number' }).notNull(),
},
(table) => [
	index("checknumberstart").on(table.checknumberstart),
	index("bankid").on(table.conduitbankid),
	index("checknumberend").on(table.checknumberend),
	index("branchid").on(table.branchid),
]);

export const checkingChecksIssued = mysqlTable("checking_checks_issued", {
	checkIssuedId: bigint("check_issued_id", { mode: 'number' }).autoincrement().primaryKey(),
	dateReceived: date("date_received").notNull(),
	source: tinyint().notNull(),
	referenceId: bigint("reference_id", { mode: 'number' }).notNull(),
	checkNumber: varchar("check_number", { length: 20 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
},
(table) => [
	index("reference_id").on(table.referenceId),
	index("inward_channel").on(table.source),
	index("check_number").on(table.checkNumber),
]);

export const checkingConduitbank = mysqlTable("checking_conduitbank", {
	conduitbankid: smallint().autoincrement().primaryKey(),
	bankid: mediumint().notNull(),
	textfileSettings: varchar("textfile_settings", { length: 25000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	errorchecked: tinyint().notNull(),
	status: tinyint().notNull(),
});

export const checkingInward1 = mysqlTable("checking_inward1", {
	inwardid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	conduitbankid: mediumint().notNull(),
	itemCount: mediumint("item_count").notNull(),
	totalAmount: decimal("total_amount", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	textfileMd5: char("textfile_md5", { length: 32 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
},
(table) => [
	index("textfile_md5").on(table.textfileMd5),
]);

export const checkingInward2 = mysqlTable("checking_inward2", {
	inwardid: int().notNull(),
	checknumber: bigint({ mode: 'number' }).notNull(),
	amount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
	checkstatus: smallint().notNull(),
	savingstransactionid: bigint({ mode: 'number' }).notNull(),
},
(table) => [
	index("inwardid").on(table.inwardid),
	index("savingstransactionid").on(table.savingstransactionid),
	index("savingsid").on(table.savingsid),
]);

export const checkingInwardtemp1 = mysqlTable("checking_inwardtemp1", {
	tempid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	conduitbankid: smallint().notNull(),
	itemCount: mediumint("item_count").notNull(),
	totalAmount: decimal("total_amount", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	inwardChecked: tinyint().notNull(),
	textfileMd5: char("textfile_md5", { length: 32 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint().notNull(),
},
(table) => [
	index("bankid").on(table.conduitbankid),
]);

export const checkingInwardtemp2 = mysqlTable("checking_inwardtemp2", {
	inwardDetailsId: int("inward_details_id").autoincrement().primaryKey(),
	tempid: int().notNull(),
	checknumber: char({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	brstn: char({ length: 9 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	amount: decimal({ unsigned: true, precision: 14, scale: 2 }).notNull(),
	amountToDebit: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
	autoDetect: tinyint().notNull(),
	checkstatus: smallint().notNull(),
},
(table) => [
	index("tempid").on(table.tempid),
]);

export const checkingLoanpayments = mysqlTable("checking_loanpayments", {
	orid: bigint({ mode: 'number' }).autoincrement().primaryKey(),
	datePaid: date("date_paid").notNull(),
	checkNumber: varchar("check_number", { length: 20 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	status: tinyint().notNull(),
},
(table) => [
	index("date_received").on(table.datePaid),
	index("check_number").on(table.checkNumber),
]);

export const checkingOutward = mysqlTable("checking_outward", {
	outwardId: int("outward_id").autoincrement().primaryKey(),
	transdate: date().notNull(),
	conduitbankid: tinyint().notNull(),
	itemCount: mediumint("item_count").notNull(),
	totalAmount: decimal("total_amount", { unsigned: true, precision: 12, scale: 2 }).notNull(),
	uploadData: varchar("upload_data", { length: 50000 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	textfileMd5: char("textfile_md5", { length: 32 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	makerid: varchar({ length: 6 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	approverid: varchar({ length: 6 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
},
(table) => [
	index("transdate").on(table.transdate),
	index("makerid").on(table.makerid),
	index("textfile_md5").on(table.textfileMd5),
	index("conduitbankid").on(table.conduitbankid),
	index("approverid").on(table.approverid),
]);

export const checkingRequest = mysqlTable("checking_request", {
	requestid: int().autoincrement().primaryKey(),
	transdate: date().notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
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
	spoid: int().autoincrement().primaryKey(),
	checknumber: int().notNull(),
	conduitbankid: smallint().notNull(),
	transdate: date().notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
	reason: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint().notNull(),
	spostatus: tinyint().notNull(),
});

export const collateral = mysqlTable("collateral", {
	collateralid: int().autoincrement().primaryKey(),
	collateraltype: int().notNull(),
	lotClass1: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lotClass2: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	clientid: bigint({ mode: 'number' }).notNull(),
	registeredOwner: char({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	collateralNumber: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lotNo: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	landArea: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	collateralLocation: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	latitude: decimal({ precision: 10, scale: 7 }).notNull(),
	longitude: decimal({ precision: 10, scale: 7 }).notNull(),
	barangay: mediumint().notNull(),
	action: smallint().notNull(),
	collateralImage: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	spaImage: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	date: date().notNull(),
	map: int().notNull(),
	branchid: smallint().notNull(),
	plateNo: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	chassisNo: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	serialNo: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	brand: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	modelNo: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	chattelType: int().notNull(),
	chattelClass: int().notNull(),
	used: int().notNull(),
	karat: decimal({ precision: 12, scale: 2 }).notNull(),
	carat: decimal({ precision: 12, scale: 2 }).notNull(),
	weight: decimal({ precision: 12, scale: 2 }).notNull(),
	weight2: decimal({ precision: 12, scale: 2 }).notNull(),
	description: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	insuranceDate: date().notNull(),
	taxpaymentDate: date().notNull(),
	renewalDate: date().notNull(),
	appraisalFrequency: int().notNull(),
	status: int().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
]);

export const collateralAppraisal = mysqlTable("collateral_appraisal", {
	appraisalid: int().autoincrement().primaryKey(),
	collateralid: int().notNull(),
	employeeid: mediumint().notNull(),
	appraisalDate: date().notNull(),
	appraisalValue: decimal({ precision: 12, scale: 2 }).notNull(),
	improvements: decimal({ precision: 12, scale: 2 }).notNull(),
	improvementsReport: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pieces: int().notNull(),
	appraisalReport: varchar({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	nextAppraisal: date().notNull(),
},
(table) => [
	index("nextAppraisal_3").on(table.nextAppraisal),
	index("employeeid_4").on(table.employeeid),
	index("nextAppraisal_4").on(table.nextAppraisal),
	index("collateralid").on(table.collateralid),
	index("employeeid").on(table.employeeid),
	index("appraisalDate").on(table.appraisalDate),
	index("nextAppraisal").on(table.nextAppraisal),
	index("collateralid_3").on(table.collateralid),
	index("appraisalDate_3").on(table.appraisalDate),
	index("collateralid_4").on(table.collateralid),
	index("appraisalDate_4").on(table.appraisalDate),
	index("collateralid_2").on(table.collateralid),
	index("employeeid_2").on(table.employeeid),
	index("appraisalDate_2").on(table.appraisalDate),
	index("nextAppraisal_2").on(table.nextAppraisal),
	index("employeeid_3").on(table.employeeid),
]);

export const collateralAppraisalImages = mysqlTable("collateral_appraisal_images", {
	imageid: int().autoincrement().primaryKey(),
	appraisalid: int().notNull(),
	imageName: char({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	imageCaption: char({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const collateralMovements = mysqlTable("collateral_movements", {
	receiverid: int().autoincrement().primaryKey(),
	employeeid: mediumint().notNull(),
	collateralNumber: int().notNull(),
	date: date().notNull(),
	transactionDetails: char({ length: 250 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	action: int().notNull(),
	status: int().notNull(),
	isReceived: smallint().notNull(),
	receiver: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	branchid: smallint().notNull(),
	previousbranchid: smallint().notNull(),
});

export const collateralPndetails = mysqlTable("collateral_pndetails", {
	clientid: bigint({ mode: 'number' }).notNull(),
	pnid: bigint({ mode: 'number' }).notNull(),
	collateralid: int().notNull(),
	groupid: int().notNull(),
	approved: tinyint().notNull(),
	dateapproved: date().notNull(),
},
(table) => [
	index("clientid").on(table.clientid),
	index("collateralid").on(table.collateralid),
	index("pnid_2").on(table.pnid),
	index("pnid").on(table.pnid),
	index("clientid_2").on(table.clientid),
	index("collateralid_2").on(table.collateralid),
]);

export const coreApiUsers = mysqlTable("core_api_users", {
	apiuserid: int().autoincrement().primaryKey(),
	username: varchar({ length: 45 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	userSalt: text("user_salt").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	userKey: text("user_key").charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const eloadTxnid = mysqlTable("eload_txnid", {
	transid: int().autoincrement().primaryKey(),
});

export const ffeMacaddress = mysqlTable("ffe_macaddress", {
	ffeid: mediumint().notNull(),
	macaddress: text().charSet("latin1").collate("latin1_swedish_ci").notNull(),
});

export const frpLoans = mysqlTable("frp_loans", {
	cutoffdate: date().notNull(),
	loanproductid: int().notNull(),
	loanclassid: smallint().notNull(),
	industryid: tinyint().notNull(),
	securityid: mediumint().notNull(),
	loanpurposeid: mediumint().notNull(),
	termCat1: tinyint().notNull(),
	termCat2: tinyint().notNull(),
	nplBracket: varchar({ length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	loanstatus: tinyint().notNull(),
	loanstatusprevious: tinyint().notNull(),
	loanamount: decimal({ unsigned: true, precision: 16, scale: 2 }).notNull(),
	loanbalance: decimal({ unsigned: true, precision: 16, scale: 2 }).notNull(),
	provision: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	discountBalance: decimal({ unsigned: true, precision: 12, scale: 2 }).notNull(),
	holdout: decimal({ precision: 12, scale: 2 }).notNull(),
	openingBalance: decimal({ precision: 12, scale: 2, mode: 'number' }).default(0.00).notNull(),
	reclassifiedToNPL: decimal({ precision: 12, scale: 2 }).notNull(),
	collection: decimal({ precision: 12, scale: 2 }).notNull(),
	performingStatus: decimal({ precision: 12, scale: 2 }).notNull(),
	writeoff: decimal({ precision: 12, scale: 2 }).notNull(),
	closingBalance: decimal({ precision: 12, scale: 2, mode: 'number' }).default(0.00).notNull(),
},
(table) => [
	index("loanproductid").on(table.loanproductid),
	index("industryid").on(table.industryid),
	index("cutoffdate").on(table.cutoffdate),
	index("loanclassid").on(table.loanclassid),
	index("securityid").on(table.securityid),
]);

export const frpReports = mysqlTable("frp_reports", {
	id: smallint().autoincrement().primaryKey(),
	reportName: varchar("report_name", { length: 45 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	reportData: mediumtext("report_data").default(sql`NULL`).charSet("latin1").collate("latin1_swedish_ci"),
	cutoffdate: date().default(sql`NULL`),
	isAvailable: tinyint().notNull(),
	displayOrder: smallint("display_order").notNull(),
});

export const frpSavings = mysqlTable("frp_savings", {
	cutoffdate: date().notNull(),
	savingsid: bigint({ mode: 'number' }).notNull(),
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
	activityId: bigint("activity_id", { mode: 'number' }).autoincrement().primaryKey(),
	makerid: int().notNull(),
	activityTime: datetime("activity_time").defaultNow().notNull(),
	mainModule: text("main_module").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	subModule: text("sub_module").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	activityProcess: text("activity_process").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	activityDetails: text("activity_details").charSet("latin1").collate("latin1_swedish_ci").notNull(),
	subjectCategory: tinyint("subject_category").notNull(),
	subjectId: int("subject_id").notNull(),
},
(table) => [
	index("activity_time").on(table.activityTime),
	index("subject_category").on(table.subjectCategory),
	index("sub_module").on(table.subModule),
	index("makerid").on(table.makerid),
	index("main_module").on(table.mainModule),
]);

export const generalAddress = mysqlTable("general_address", {
	id: mediumint().autoincrement().primaryKey(),
	code: int().notNull(),
	name: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	town: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	province: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	region: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	addresscomplete: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	levelPsgc: char("level_psgc", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	codeParent: int("code_parent").notNull(),
	zipcode: varchar({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	isHighRisk: tinyint().default(sql`NULL`),
},
(table) => [
	index("addresscomplete").on(table.addresscomplete),
	uniqueIndex("code").on(table.code),
]);

export const generalAddressOld = mysqlTable("general_address_old", {
	id: mediumint().autoincrement().primaryKey(),
	code: int().notNull(),
	name: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	town: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	province: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	region: varchar({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	addresscomplete: varchar({ length: 200 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: mediumint().notNull(),
	levelPsgc: char("level_psgc", { length: 1 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	codeParent: int("code_parent").notNull(),
	zipcode: varchar({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("addresscomplete").on(table.addresscomplete),
	uniqueIndex("code").on(table.code),
]);

export const generalBranchcoverage = mysqlTable("general_branchcoverage", {
	branch: int().notNull(),
	town: mediumint().notNull(),
});

export const generalBranches = mysqlTable("general_branches", {
	id: smallint().primaryKey(),
	branchid2: char({ length: 8 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	bspcode: char({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	name: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	shortname: char({ length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	birBranchcode: char("bir_branchcode", { length: 10 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	addressdetail: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	addressbarangay: mediumint().notNull(),
	latitude: decimal({ unsigned: true, precision: 10, scale: 7 }).notNull(),
	longitude: decimal({ unsigned: true, precision: 10, scale: 7 }).notNull(),
	contactnumber: varchar({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	level: tinyint().notNull(),
	parent: smallint().notNull(),
	interbranchParent: smallint("interbranch_parent").notNull(),
	childcount: tinyint().notNull(),
	branchhead: mediumint().notNull(),
	checker: mediumint().notNull(),
	cohlimit: decimal({ precision: 10, scale: 2 }).notNull(),
	systemdate: date().notNull(),
	branchstatus: tinyint().notNull(),
	clearingAdjustment: tinyint("clearing_adjustment").notNull(),
	allowpostingonsaturdays: tinyint().notNull(),
	allowpostingonsundays: tinyint().notNull(),
	excludeddayposting: tinyint().default(0),
	categoryId: tinyint("category_id").notNull(),
	amlccode: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	printorafterissuance: tinyint().notNull(),
	branchTin: char("branch_tin", { length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
},
(table) => [
	index("category_id").on(table.categoryId),
	index("level").on(table.level),
	index("interbranch_parent").on(table.interbranchParent),
	index("name").on(table.name),
	index("parent").on(table.parent),
]);

export const generalCheckcoordinate = mysqlTable("general_checkcoordinate", {
	checkid: int().autoincrement().primaryKey(),
	employeeid: mediumint().notNull(),
	printer: char({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	bank: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	dateFormat: tinyint("date_format").notNull(),
	marginTop: decimal("margin_top", { unsigned: true, precision: 3, scale: 1 }).notNull(),
	marginLeft: decimal("margin_left", { unsigned: true, precision: 3, scale: 1 }).notNull(),
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
	changeid: int().autoincrement().primaryKey(),
	date: date().notNull(),
	branchid: smallint().notNull(),
	clientid: bigint({ mode: 'number' }).notNull(),
	branch: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	firstname: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	middlename: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lastname: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	birthdate: varchar({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	spouse: varchar({ length: 100 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cpnumber1: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cpnumber2: char({ length: 25 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	makerid: mediumint().notNull(),
	approverid: mediumint().notNull(),
});

export const generalClientchangetemp = mysqlTable("general_clientchangetemp", {
	clientid: bigint({ mode: 'number' }).primaryKey(),
	branchid: smallint().notNull(),
	branch: mediumint().notNull(),
	firstname: char({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	middlename: char({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lastname: char({ length: 55 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	birthdate: date().notNull(),
	spouseid: bigint({ mode: 'number' }).notNull(),
	cpnumber1: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cpnumber2: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	onUpdateKYCLevelTo4: tinyint().notNull(),
	makerid: mediumint().notNull(),
});

export const generalClients = mysqlTable("general_clients", {
	clientid: bigint({ mode: 'number' }).autoincrement().primaryKey(),
	clientidPreviousCbs: varchar("clientid_previous_cbs", { length: 30 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	clienttype: tinyint().notNull(),
	orgtype: tinyint().notNull(),
	firstname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	middlename: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	lastname: char({ length: 125 }).charSet("utf8mb3").collate("utf8mb3_general_ci").notNull(),
	suffixname: varchar({ length: 5 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	gender: tinyint().notNull(),
	birthdate: date().notNull(),
	birthplace: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	civilstatus: tinyint().notNull(),
	height: decimal({ precision: 4, scale: 2 }).notNull(),
	weight: decimal({ precision: 4, scale: 2 }).notNull(),
	nationality: smallint().notNull(),
	cpnumber1: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	cpnumber2: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	homenumber: varchar({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	businessnumber: varchar({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	tin: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	pagibig: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	philhealth: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	sss: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	gsis: varchar({ length: 15 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	id1type: tinyint().notNull(),
	id1number: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	id1dateissued: date().default(sql`NULL`),
	id1placeissued: varchar({ length: 250 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	id2type: tinyint().notNull(),
	id2number: varchar({ length: 30 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	id2dateissued: date().default(sql`NULL`),
	id2placeissued: varchar({ length: 250 }).default("NULL").charSet("latin1").collate("latin1_swedish_ci"),
	id2expiration: date().notNull(),
	addressdetails: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	barangayid: mediumint().notNull(),
	addressdetails2: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	barangayid2: mediumint().notNull(),
	emailaddress: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	facebookacct: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	contactperson: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	contactnumber: char({ length: 11 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	website: varchar({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	rep1Clientid: bigint("rep1_clientid", { mode: 'number' }).notNull(),
	rep2Clientid: bigint("rep2_clientid", { mode: 'number' }).notNull(),
	fundsource: tinyint().notNull(),
	fundoccupation: tinyint().notNull(),
	fundname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fundaddressdetails: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fundbarangayid: mediumint().notNull(),
	fundposition: char({ length: 20 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fundcontact: char({ length: 12 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fundyearstart: char({ length: 4 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	fundgrossincome: int().notNull(),
	spouseid: int().notNull(),
	mmlastname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	mmfirstname: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	mmmiddlename: char({ length: 50 }).charSet("latin1").collate("latin1_swedish_ci").notNull(),
	assetsizeid: mediumint().notNull(),
	centerid: int().notNull(),
	officeid: int().notNull(),
	branch: smallint().notNull(),
	datecreated: date().default(sql`0000-00-00`).notNull(),
	dateedited: date().notNull(),
	dateidissued: date().notNull(),
	riskprofile: tinyint().notNull(),
	viptag: tinyint().notNull(),
	dosri: tinyint().notNull(),
	rpt: tinyint({ unsigned: true }).notNull(),
	pep: tinyint({ unsigned: true }).notNull(),
	smsEnrolled: tinyint({ unsigned: true }).notNull(),
	savingsid: bigint({ unsigned: true, mode: 'number' }).notNull(),
	clientUuid: varchar("client_uuid", { length: 100 }).default("uuid()").charSet("latin1").collate("latin1_swedish_ci"),
	fileCountSelfie: boolean().default(false).notNull(),
	fileCountId: boolean().default(false).notNull(),
	fileCountSignature: boolean().default(false).notNull(),
	fileCountAttachment: boolean().default(false).notNull(),
	fileCountRiskProfiling: boolean().default(false).notNull(),
},
(table) => [
	index("centerid").on(table.centerid),
	index("firstname").on(table.firstname),
	index("middlename").on(table.middlename),
	index("spouseid").on(table.spouseid),
	index("dosri").on(table.dosri),
	index("smsEnrolled").on(table.smsEnrolled),
	index("barangayid").on(table.barangayid),
	index("officeid").on(table.officeid),
	index("lastname").on(table.lastname),
	index("birthdate").on(table.birthdate),
	index("clienttype").on(table.clienttype),
	index("cpnumber1").on(table.cpnumber1),
	index("clientid_previous_cbs").on(table.clientidPreviousCbs),
]);
export const vwAmortdetails = mysqlView("vw_amortdetails", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`pnid\`,1 AS \`amortnumber\`,1 AS \`datedue\`,1 AS \`principal\`,1 AS \`interest\`,1 AS \`servicecharge\`,1 AS \`savings\`,1 AS \`amort1\`,1 AS \`amort2\`,1 AS \`datepaid\``);

export const vwApiGatewaysCredentials = mysqlView("vw_api_gateways_credentials", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`name\`,1 AS \`value\`,1 AS \`description\``);

export const vwAttendance = mysqlView("vw_attendance", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select \`legacydb\`.\`hr_attendance\`.\`employeeid\` AS \`employeeid\`,cast(\`legacydb\`.\`hr_attendance\`.\`date\` as char(10) charset utf8mb3) AS \`date\`,cast(\`legacydb\`.\`hr_attendance\`.\`in1\` as char(8) charset utf8mb3) AS \`in_am\`,cast(\`legacydb\`.\`hr_attendance\`.\`out1\` as char(8) charset utf8mb3) AS \`out_am\`,cast(\`legacydb\`.\`hr_attendance\`.\`in2\` as char(8) charset utf8mb3) AS \`in_pm\`,cast(\`legacydb\`.\`hr_attendance\`.\`out2\` as char(8) charset utf8mb3) AS \`out_pm\`,if(\`legacydb\`.\`hr_attendance\`.\`in1\` = '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`in2\` = '00:00:00',1,if(\`legacydb\`.\`hr_attendance\`.\`in1\` = '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out1\` = '00:00:00' or \`legacydb\`.\`hr_attendance\`.\`out1\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`in2\` = '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` = '00:00:00',cast('0.5' as char(3) charset utf8mb3),'')) AS \`absent\`,if(\`legacydb\`.\`hr_attendance\`.\`in1\` > '08:00:00',round(time_to_sec(subtime(\`legacydb\`.\`hr_attendance\`.\`in1\`,'08:00:00')) / 60,2),if(\`legacydb\`.\`hr_attendance\`.\`in2\` > '12:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` < '17:00:00',round(time_to_sec(subtime(\`legacydb\`.\`hr_attendance\`.\`out2\`,'17:00:00')) / 60,2),'')) AS \`late\`,if(\`legacydb\`.\`hr_attendance\`.\`out1\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out1\` < '12:00:00' and \`legacydb\`.\`hr_attendance\`.\`in2\` = '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` = '00:00:00',round(time_to_sec(subtime('12:00:00',\`legacydb\`.\`hr_attendance\`.\`out1\`)) / 60,2),if(\`legacydb\`.\`hr_attendance\`.\`in1\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out1\` = '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`in2\` = '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` < '17:00:00',round(time_to_sec(subtime('17:00:00',\`legacydb\`.\`hr_attendance\`.\`out2\`)) / 60,2),if(\`legacydb\`.\`hr_attendance\`.\`in1\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out1\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`in2\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` <> '00:00:00' and \`legacydb\`.\`hr_attendance\`.\`out2\` < '17:00:00',round(time_to_sec(subtime('17:00:00',\`legacydb\`.\`hr_attendance\`.\`out2\`)) / 60,2),''))) AS \`ut\`,cast(dayname(\`legacydb\`.\`hr_attendance\`.\`date\`) as char(100) charset utf8mb3) AS \`remarks\` from (\`legacydb\`.\`hr_attendance\` left join \`legacydb\`.\`general_employees\` on(\`legacydb\`.\`general_employees\`.\`id\` = \`legacydb\`.\`hr_attendance\`.\`employeeid\`)) where \`legacydb\`.\`hr_attendance\`.\`date\` >= cast(cast(current_timestamp() as date) as date) and \`legacydb\`.\`hr_attendance\`.\`date\` <= cast(current_timestamp() as date) + interval 10 day`);

export const vwClientdetails = mysqlView("vw_clientdetails", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`firstname\`,1 AS \`middlename\`,1 AS \`lastname\`,1 AS \`clientid\`,1 AS \`address\``);

export const vwEmployeedetails = mysqlView("vw_employeedetails", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select \`legacydb\`.\`general_employees\`.\`id\` AS \`employeeid\`,cast(concat(lpad(\`legacydb\`.\`general_employees\`.\`id\`,4,0),' - ',\`legacydb\`.\`general_employees\`.\`lastname\`,', ',\`legacydb\`.\`general_employees\`.\`firstname\`,' ',substr(\`legacydb\`.\`general_employees\`.\`middlename\`,1,1),'.') as char(150) charset utf8mb3) AS \`employeedetails\`,\`legacydb\`.\`general_employees\`.\`image\` AS \`image\` from \`legacydb\`.\`general_employees\` where \`legacydb\`.\`general_employees\`.\`employmentstatus\` > 0`);

export const vwFingerprints = mysqlView("vw_fingerprints", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select \`legacydb\`.\`general_employees\`.\`id\` AS \`employeeid\`,concat(\`legacydb\`.\`general_employees\`.\`firstname\`,' ',left(\`legacydb\`.\`general_employees\`.\`middlename\`,1),'. ',\`legacydb\`.\`general_employees\`.\`lastname\`) AS \`employeename\`,\`legacydb\`.\`general_employees\`.\`employmentstatus\` AS \`employmentstatus\`,\`legacydb\`.\`general_employees\`.\`fingerprint1\` AS \`fingerprint1\`,\`legacydb\`.\`general_employees\`.\`fingerprint2\` AS \`fingerprint2\`,\`legacydb\`.\`general_employees\`.\`fingerprint3\` AS \`fingerprint3\` from \`legacydb\`.\`general_employees\` where \`legacydb\`.\`general_employees\`.\`employmentstatus\` > 0`);

export const vwLendingTermunits = mysqlView("vw_lending_termunits", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`termid\`,1 AS \`termname\``);

export const vwLoandetails = mysqlView("vw_loandetails", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`clientid\`,1 AS \`pnid\`,1 AS \`branchname\`,1 AS \`loanproductname\`,1 AS \`date\`,1 AS \`maturity\`,1 AS \`amount\`,1 AS \`interestrate\`,1 AS \`interestcomputationbasis\`,1 AS \`loanbalance\`,1 AS \`nextdatedue\`,1 AS \`term\`,1 AS \`termunitname\`,1 AS \`loanstatusname\`,1 AS \`amortdue\``);

export const vwLoanPayments = mysqlView("vw_loan_payments", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`pnid\`,1 AS \`amortnumber\`,1 AS \`datedue\`,1 AS \`datepaid\`,1 AS \`ornumber\`,1 AS \`paymentdate\`,1 AS \`paymentamount\`,1 AS \`loanbalance\`,1 AS \`savingsexcess\`,1 AS \`principalpmt\`,1 AS \`interestpmt\`,1 AS \`servicechargepmt\`,1 AS \`savingspmt\`,1 AS \`amort1pmt\`,1 AS \`amort2pmt\`,1 AS \`penaltypmt\`,1 AS \`pastdueinterestpmt\`,1 AS \`postedbyinitial\``);

export const vwLogo = mysqlView("vw_logo", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select cast(cast(current_timestamp() as date) as char(10) charset utf8mb3) AS \`serverdate\`,cast(cast(current_timestamp() as time) as char(8) charset utf8mb3) AS \`servertime\`,\`legacydb\`.\`general_criticalsettings\`.\`institutionname\` AS \`institutionname\`,\`legacydb\`.\`general_criticalsettings\`.\`institutioncode\` AS \`institutioncode\`,\`legacydb\`.\`general_criticalsettings\`.\`logo\` AS \`logo\` from \`legacydb\`.\`general_criticalsettings\``);

export const vwMobileSecurityQuestions = mysqlView("vw_mobile_security_questions", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`questionid\`,1 AS \`question\``);

export const vwMobileSecurityQuestionAnswer = mysqlView("vw_mobile_security_question_answer", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`cpnumber\`,1 AS \`questionid\`,1 AS \`answer\``);

export const vwSavingsBalance = mysqlView("vw_savings_balance", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`accountname\`,1 AS \`savingsid\`,1 AS \`categoryname\`,1 AS \`savingsAccountType\`,1 AS \`corpclientid\`,1 AS \`client1id\`,1 AS \`client2id\`,1 AS \`client3id\`,1 AS \`client4id\`,1 AS \`currentbalance1\`,1 AS \`currentbalance2\`,1 AS \`holdoutamount\`,1 AS \`minimumbalance\``);

export const vwSavingsTransactions = mysqlView("vw_savings_transactions", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`savingstransactionid\`,1 AS \`branchid\`,1 AS \`savingsid\`,1 AS \`transactiondate\`,1 AS \`reference\`,1 AS \`transactionname\`,1 AS \`postingtime\`,1 AS \`transactiontype\`,1 AS \`amount\`,1 AS \`currentbalance1\`,1 AS \`currentbalance2\``);

export const vwTransferDetails = mysqlView("vw_transfer_details", {
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`sender_clientid\`,1 AS \`cpnumber\`,1 AS \`accountname\`,1 AS \`receiver_nickname\`,1 AS \`address\`,1 AS \`receiver_accountnumber\`,1 AS \`bicfi\`,1 AS \`bank_name\`,1 AS \`bank_code\`,1 AS \`head_office_brstn\``);