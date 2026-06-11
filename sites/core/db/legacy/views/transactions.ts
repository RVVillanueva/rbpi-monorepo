
import { eq, sql } from "drizzle-orm";
import { mysqlView } from "drizzle-orm/mysql-core";

import {
  savingsTransactioncodes,
  savingsTransactions,
} from '~/db/legacy/migrations/schema'

export type DepositTransaction = typeof depositTransactionsView.$inferSelect

// @SQLVIEW: Deposit transactions
export const depositTransactionsView = mysqlView('deposit_transactions_view')
  .as(
    qb => qb
      .select({
        savingsTransactionId: savingsTransactions.savingstransactionid.as('savings_transaction_id'),
        branchId: savingsTransactions.branchid.as('branch_id'),
        savingsId: savingsTransactions.savingsid.as('savings_id'),
        transactionDate: savingsTransactions.transactiondate.as('transaction_date'),
        postingTime: savingsTransactions.postingtime.as('posting_time'),
        transactionCode: savingsTransactions.transaction.as('transaction_code'),
        transactionName: savingsTransactioncodes.name.as('transaction_name'),
        multiplier: savingsTransactioncodes.multiplier.as('multiplier'),
        amount: savingsTransactions.amount,
        signedAmount: sql<number>`(${savingsTransactions.amount} * ${savingsTransactioncodes.multiplier})`.as('signed_amount'),
        grossInterest: savingsTransactions.grossinterest.as('gross_interest'),
        netInterest: savingsTransactions.netinterest.as('net_interest'),
        reference: savingsTransactions.reference,
        checkType: savingsTransactions.checktype.as('check_type'),
        accountStatus: savingsTransactions.accountstatus.as('account_status'),
        postedById: savingsTransactions.postedbyid.as('posted_by_id'),
      })
      .from(savingsTransactions)
      .innerJoin(savingsTransactioncodes, eq(savingsTransactioncodes.transaction, savingsTransactions.transaction))
  )