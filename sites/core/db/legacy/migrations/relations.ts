import { relations } from "drizzle-orm/relations";
import { acctng_journals, acctng_journaldetails, acctng_journal_ibtracker, savings_accounts, checking_autodebitaccount, general_employees, general_clients_riskprofiles, general_clients, general_branches, general_systemdate_temp, lending_payment_tempor, lending_payment_tempdetails, mobile_client_users, mobile_transfer_details, acctng_glaccounts, savings_memoglcodes, savings_transactions, savings_transactions_wtax } from "./schema";

export const acctng_journaldetailsRelations = relations(acctng_journaldetails, ({one, many}) => ({
	acctng_journal: one(acctng_journals, {
		fields: [acctng_journaldetails.journalid],
		references: [acctng_journals.journalid]
	}),
	acctng_journal_ibtrackers: many(acctng_journal_ibtracker),
}));

export const acctng_journalsRelations = relations(acctng_journals, ({many}) => ({
	acctng_journaldetails: many(acctng_journaldetails),
}));

export const acctng_journal_ibtrackerRelations = relations(acctng_journal_ibtracker, ({one}) => ({
	acctng_journaldetail: one(acctng_journaldetails, {
		fields: [acctng_journal_ibtracker.ib_journal_details_id],
		references: [acctng_journaldetails.journal_details_id]
	}),
}));

export const checking_autodebitaccountRelations = relations(checking_autodebitaccount, ({one}) => ({
	savings_account_savingsid: one(savings_accounts, {
		fields: [checking_autodebitaccount.savingsid],
		references: [savings_accounts.savingsid],
		relationName: "checking_autodebitaccount_savingsid_savings_accounts_savingsid"
	}),
	savings_account_autodebitsavingsid: one(savings_accounts, {
		fields: [checking_autodebitaccount.autodebitsavingsid],
		references: [savings_accounts.savingsid],
		relationName: "checking_autodebitaccount_autodebitsavingsid_savings_accounts_savingsid"
	}),
}));

export const savings_accountsRelations = relations(savings_accounts, ({many}) => ({
	checking_autodebitaccounts_savingsid: many(checking_autodebitaccount, {
		relationName: "checking_autodebitaccount_savingsid_savings_accounts_savingsid"
	}),
	checking_autodebitaccounts_autodebitsavingsid: many(checking_autodebitaccount, {
		relationName: "checking_autodebitaccount_autodebitsavingsid_savings_accounts_savingsid"
	}),
}));

export const general_clients_riskprofilesRelations = relations(general_clients_riskprofiles, ({one}) => ({
	general_employee: one(general_employees, {
		fields: [general_clients_riskprofiles.makerid],
		references: [general_employees.id]
	}),
	general_client: one(general_clients, {
		fields: [general_clients_riskprofiles.clientid],
		references: [general_clients.clientid]
	}),
}));

export const general_employeesRelations = relations(general_employees, ({many}) => ({
	general_clients_riskprofiles: many(general_clients_riskprofiles),
}));

export const general_clientsRelations = relations(general_clients, ({many}) => ({
	general_clients_riskprofiles: many(general_clients_riskprofiles),
}));

export const general_systemdate_tempRelations = relations(general_systemdate_temp, ({one}) => ({
	general_branch: one(general_branches, {
		fields: [general_systemdate_temp.branchid],
		references: [general_branches.id]
	}),
}));

export const general_branchesRelations = relations(general_branches, ({many}) => ({
	general_systemdate_temps: many(general_systemdate_temp),
}));

export const lending_payment_tempdetailsRelations = relations(lending_payment_tempdetails, ({one}) => ({
	lending_payment_tempor: one(lending_payment_tempor, {
		fields: [lending_payment_tempdetails.orid],
		references: [lending_payment_tempor.orid]
	}),
}));

export const lending_payment_temporRelations = relations(lending_payment_tempor, ({many}) => ({
	lending_payment_tempdetails: many(lending_payment_tempdetails),
}));

export const mobile_transfer_detailsRelations = relations(mobile_transfer_details, ({one}) => ({
	mobile_client_user: one(mobile_client_users, {
		fields: [mobile_transfer_details.sender_clientid],
		references: [mobile_client_users.client1id]
	}),
}));

export const mobile_client_usersRelations = relations(mobile_client_users, ({many}) => ({
	mobile_transfer_details: many(mobile_transfer_details),
}));

export const savings_memoglcodesRelations = relations(savings_memoglcodes, ({one}) => ({
	acctng_glaccount: one(acctng_glaccounts, {
		fields: [savings_memoglcodes.glcode],
		references: [acctng_glaccounts.gl_code]
	}),
	savings_transaction: one(savings_transactions, {
		fields: [savings_memoglcodes.savingstransactionid],
		references: [savings_transactions.savingstransactionid]
	}),
}));

export const acctng_glaccountsRelations = relations(acctng_glaccounts, ({many}) => ({
	savings_memoglcodes: many(savings_memoglcodes),
}));

export const savings_transactionsRelations = relations(savings_transactions, ({many}) => ({
	savings_memoglcodes: many(savings_memoglcodes),
	savings_transactions_wtaxes: many(savings_transactions_wtax),
}));

export const savings_transactions_wtaxRelations = relations(savings_transactions_wtax, ({one}) => ({
	savings_transaction: one(savings_transactions, {
		fields: [savings_transactions_wtax.savingstransactionid],
		references: [savings_transactions.savingstransactionid]
	}),
}));