import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
	acctngJournalIbtracker: {
		acctngJournaldetail: r.one.acctngJournaldetails({
			from: r.acctngJournalIbtracker.ibJournalDetailsId,
			to: r.acctngJournaldetails.journalDetailsId
		}),
	},
	acctngJournaldetails: {
		acctngJournalIbtrackers: r.many.acctngJournalIbtracker(),
		acctngJournal: r.one.acctngJournals({
			from: r.acctngJournaldetails.journalid,
			to: r.acctngJournals.journalid
		}),
	},
	acctngJournals: {
		acctngJournaldetails: r.many.acctngJournaldetails(),
	},
	generalEmployees: {
		generalClients: r.many.generalClients({
			from: r.generalEmployees.id.through(r.generalClientsRiskprofiles.makerid),
			to: r.generalClients.clientid.through(r.generalClientsRiskprofiles.clientid)
		}),
	},
	generalClients: {
		generalEmployees: r.many.generalEmployees(),
	},
	generalSystemdateTemp: {
		generalBranch: r.one.generalBranches({
			from: r.generalSystemdateTemp.branchid,
			to: r.generalBranches.id
		}),
	},
	generalBranches: {
		generalSystemdateTemps: r.many.generalSystemdateTemp(),
	},
	lendingPaymentTempdetails: {
		lendingPaymentTempor: r.one.lendingPaymentTempor({
			from: r.lendingPaymentTempdetails.orid,
			to: r.lendingPaymentTempor.orid
		}),
	},
	lendingPaymentTempor: {
		lendingPaymentTempdetails: r.many.lendingPaymentTempdetails(),
	},
	mobileTransferDetails: {
		mobileClientUser: r.one.mobileClientUsers({
			from: r.mobileTransferDetails.senderClientid,
			to: r.mobileClientUsers.client1id
		}),
	},
	mobileClientUsers: {
		mobileTransferDetails: r.many.mobileTransferDetails(),
	},
	acctngGlaccounts: {
		savingsTransactions: r.many.savingsTransactions({
			from: r.acctngGlaccounts.glCode.through(r.savingsMemoglcodes.glcode),
			to: r.savingsTransactions.savingstransactionid.through(r.savingsMemoglcodes.savingstransactionid)
		}),
	},
	savingsTransactions: {
		acctngGlaccounts: r.many.acctngGlaccounts(),
		savingsTransactionsWtaxes: r.many.savingsTransactionsWtax(),
	},
	savingsTransactionsWtax: {
		savingsTransaction: r.one.savingsTransactions({
			from: r.savingsTransactionsWtax.savingstransactionid,
			to: r.savingsTransactions.savingstransactionid
		}),
	},
}))