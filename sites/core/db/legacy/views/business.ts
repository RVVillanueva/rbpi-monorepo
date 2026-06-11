import { eq, inArray, notInArray, sql } from "drizzle-orm";
import { mysqlView } from "drizzle-orm/mysql-core";

import { 
  acctngBudget,
  acctngGlaccounts, 
  acctngJournaldetails, 
  acctngJournals, 
  generalBranches,
  lendingLoanclassifications,
  lendingLoandetails,
  lendingLoanproducts,
  lendingLoansecurities,
  lendingPaymentdetails,
  lendingPayments,
  lendingPaymentsor,
  savingsAccounts,
  savingsProducts,
  savingsSsaplacementdetails,
} from "~/db/legacy/migrations/schema";

export type GenBranch = typeof branchesView.$inferSelect

// @SQLVIEW: RBPI branches
export const branchesView = mysqlView('branches_view')
  .as(
    qb => qb
      .select({
        id: generalBranches.id.as('id'),
        name: generalBranches.name.as('name'),
        shortName: generalBranches.shortname.as('short_name'),
        branchLevel: generalBranches.level.as('branch_level'),
        parent: generalBranches.parent.as('parent'),
        accountingDate: generalBranches.systemdate.as('accounting_date'),
        status: generalBranches.branchstatus.as('status'),
        categoryId: generalBranches.categoryId.as('category_id'),
      })
      .from(generalBranches)
  )

export type AcctngGLAccount = typeof glAccountsView.$inferSelect

// @SQLVIEW: GL Accounts
export const glAccountsView = mysqlView('gl_accounts_view')
  .as(
    qb => qb
      .select({
        code: acctngGlaccounts.glCode.as('code'),
        frpCode: acctngGlaccounts.frpcode.as('frp_code'),
        name: acctngGlaccounts.glName.as('name'),
        type: acctngGlaccounts.glType.as('type'),
        level: acctngGlaccounts.glLevel.as('level'),
        parent: acctngGlaccounts.glParent.as('parent'),
        childCount: acctngGlaccounts.glChildcount.as('child_count'),
        userLevel: acctngGlaccounts.userlevel.as('user_level'),
      })
      .from(acctngGlaccounts),
  )

export type AcctngJournal = typeof glJournalsView.$inferSelect

// @SQLVIEW: Journal entries
export const glJournalsView = mysqlView('gl_journals_view')
  .as(
    qb => qb
      .select({
        id: acctngJournals.journalid.as('id'),
        journalDate: acctngJournals.journalDate.as('journal_date'),
        journalBranch: acctngJournals.journalBranch.as('journal_branch'),
        glCode: acctngJournaldetails.glCode.as('gl_code'),
        glType: acctngGlaccounts.glType.as('gl_type'),
        glLevel: acctngGlaccounts.glLevel.as('gl_level'),
        glParent: acctngGlaccounts.glParent.as('gl_parent'),
        frpCode: acctngGlaccounts.frpcode.as('frp_code'),
        glName: acctngGlaccounts.glName.as('gl_name'),
        debit: acctngJournaldetails.journalDetailsDebit.as('debit'),
        credit: acctngJournaldetails.journalDetailsCredit.as('credit'),

        // assets (A), expenses (E), liability (L), equity (C), income (I)
        netMovement: sql<number>`
          CASE
            WHEN ${acctngGlaccounts.glType} IN ('A', 'E')
              THEN COALESCE(${acctngJournaldetails.journalDetailsDebit}, 0) - COALESCE(${acctngJournaldetails.journalDetailsCredit}, 0)
            WHEN ${acctngGlaccounts.glType} IN ('L', 'C', 'I')
              THEN COALESCE(${acctngJournaldetails.journalDetailsCredit}, 0) - COALESCE(${acctngJournaldetails.journalDetailsDebit}, 0)
            ELSE 0
          END
        `.as('net_movement')
      })
      .from(acctngJournals)
      .innerJoin(acctngJournaldetails, eq(acctngJournaldetails.journalid, acctngJournals.journalid))
      .innerJoin(acctngGlaccounts, eq(acctngGlaccounts.glCode, acctngJournaldetails.glCode))
  )

export type AcctngBudget = typeof budgetsView.$inferSelect

// @SQLVIEW: Budgets
export const budgetsView = mysqlView('budgets_view')
  .as(
    qb => qb
      .select({
        glCode: acctngBudget.glcode.as('gl_code'),
        glType: acctngBudget.gltype.as('gl_type'),
        branchId: acctngBudget.branchid.as('branch_id'),
        costCenterId: acctngBudget.costcenterid.as('cost_center_id'),
        budgetYear: acctngBudget.budgetYear.as('budget_year'),
        budgetJan: acctngBudget.budget1.as('budget_jan'),
        budgetFeb: acctngBudget.budget2.as('budget_feb'),
        budgetMar: acctngBudget.budget3.as('budget_mar'),
        budgetApr: acctngBudget.budget4.as('budget_apr'),
        budgetMay: acctngBudget.budget5.as('budget_may'),
        budgetJun: acctngBudget.budget6.as('budget_jun'),
        budgetJul: acctngBudget.budget7.as('budget_jul'),
        budgetAug: acctngBudget.budget8.as('budget_aug'),
        budgetSep: acctngBudget.budget9.as('budget_sep'),
        budgetOct: acctngBudget.budget10.as('budget_oct'),
        budgetNov: acctngBudget.budget11.as('budget_nov'),
        budgetDec: acctngBudget.budget12.as('budget_dec'),
      })
      .from(acctngBudget)
  )

export type LoanPortfolio = typeof loanPortfoliosView.$inferSelect

// @SQLVIEW: Loan portfolios
export const loanPortfoliosView = mysqlView('loan_portfolios_view')
  .as(
    qb => qb
      .select({
        pnId: lendingLoandetails.pnid.as('pn_id'),
        branchId: lendingLoandetails.branchid.as('branch_id'),
        clientId: lendingLoandetails.clientid.as('client_id'),
        loanProductId: lendingLoanproducts.loanproductid.as('loan_product_id'),
        productName: lendingLoanproducts.name.as('product_name'),
        productType: lendingLoanproducts.type.as('type'),
        isOffbook: lendingLoanproducts.isOffbook.as('is_offbook'),
        loanClassId: lendingLoandetails.loanclassid.as('loan_class_id'),
        loanClassName: lendingLoanclassifications.name.as('loan_class_name'),
        loanPurposeId: lendingLoandetails.loanpurposeid.as('loan_purpose_id'),
        industryId: lendingLoandetails.industryid.as('industry_id'),
        releaseDate: lendingLoandetails.date.as('release_date'),
        maturityDate: lendingLoandetails.maturity.as('maturity_date'),

        originalAmount: lendingLoandetails.amount.as('original_amount'),
        outstandingBalance: lendingLoandetails.loanbalance.as('outstanding_balance'),
        interestRate: lendingLoandetails.interestrate.as('interest_rate'),
        interestComputation: lendingLoandetails.interestcomputation.as('interest_computation'),

        term: lendingLoandetails.term.as('term'),
        termUnit: lendingLoandetails.termunit.as('term_unit'),
        
        status: lendingLoandetails.loanstatus.as('status'),

        // @TODO: Need to find the enum for the loan status.
        // @DONE: Found the enum for loanstatus, it's indicated in the COMMENT
        //        of the generated schema.sql
        statusName: sql<string>`
          CASE ${lendingLoandetails.loanstatus}
            WHEN 1  THEN 'Current'
            WHEN 2  THEN 'Past Due'
            WHEN 3  THEN 'Non-Performing'
            WHEN 4  THEN 'In Litigation'
            WHEN 5  THEN 'Paid'
            WHEN 6  THEN 'Written Off'
            WHEN 7  THEN 'ROPA'
            WHEN 10 THEN 'Applied'
            WHEN 11 THEN 'Approved'
            WHEN 12 THEN 'Withdrawn'
            WHEN 13 THEN 'Disapproved'
            WHEN 14 THEN 'Cancelled'
          END
        `.as('status_name'),

        upcomingDue: lendingLoandetails.nextdatedue.as('upcoming_due'),
        restructTag: lendingLoandetails.restructuredtag.as('restruct_tag'),
        restructPnId: lendingLoandetails.restructuredpnid.as('restruct_pn_id'),
        restructCount: lendingLoandetails.restructuredCount.as('restruct_count'),
        securityId: lendingLoandetails.securityid.as('security_id'),
        isSecured: lendingLoansecurities.isSecured.as('is_secured'),
        frpSecurityTag: lendingLoansecurities.frpSecuritytag.as('frp_security_tag'),
        loanOfficerId: lendingLoandetails.loanofficerid.as('loan_officer_id'),
        loanCycle: lendingLoandetails.loancycle.as('loan_cycle'),
        savingsId: lendingLoandetails.savingsid.as('savings_id'),
        releaseTag: lendingLoandetails.releasetag.as('release_tag'),
      })
      .from(lendingLoandetails)
      .innerJoin(lendingLoanproducts, eq(lendingLoanproducts.loanproductid, lendingLoandetails.loanproductid))
      .innerJoin(lendingLoanclassifications, eq(lendingLoanclassifications.loanclassid, lendingLoandetails.loanclassid))
      .leftJoin(lendingLoansecurities, eq(lendingLoansecurities.loansecurityid, lendingLoandetails.securityid))
  )

export type LoanCollection = typeof loanCollectionView.$inferSelect

// @SQLVIEW: Loan collections
export const loanCollectionView = mysqlView('loan_collection_view')
  .as(
    qb => qb
      .select({
        collectionDate: lendingPaymentsor.transdate.as('collection_date'),
        branchId: lendingPaymentsor.branchid.as('branch_id'),
        orNumber: lendingPaymentsor.ornumber.as('or_number'),
        orStatus: lendingPaymentsor.orstatus.as('or_status'),
        paymentMode: lendingPaymentsor.paymentmode.as('payment_mode'),
        totalAmount: lendingPaymentsor.oramount.as('total_amount'),
        paymentId: lendingPayments.paymentid.as('payment_id'),
        pnId: lendingPayments.pnid.as('pn_id'),
        balanceAfter: lendingPayments.loanbalance.as('balance_after'),
        principal: lendingPaymentdetails.principalpmt.as('principal'),
        interest: lendingPaymentdetails.interestpmt.as('interest'),
        serviceCharge: lendingPaymentdetails.servicechargepmt.as('service_charge'),
        savings: lendingPaymentdetails.savingspmt.as('savings'),
        amortOne: lendingPaymentdetails.amort1pmt.as('amort_one'),
        amortTwo: lendingPaymentdetails.amort2pmt.as('amort_two'),
        penalty: lendingPaymentdetails.penaltypmt.as('penalty'),
        pastDueInterest: lendingPaymentdetails.pastdueinterestpmt.as('past_due_interest'),
      })
      .from(lendingPaymentsor)
      .innerJoin(lendingPayments, eq(lendingPayments.orid, lendingPaymentsor.orid))
      .innerJoin(lendingPaymentdetails, eq(lendingPaymentdetails.paymentid, lendingPayments.paymentid))
      .where(
        // Excluding cancelled, misposted, deleted
        inArray(lendingPaymentsor.orstatus, [ 1, 2 ])
      )
  )

export type LoanDisbursement = typeof loanDisbursementsView.$inferSelect

// @SQLVIEW: Loan disbursements
export const loanDisbursementsView = mysqlView('loan_disbursements_view')
  .as(
    qb => qb
      .select({
        pnId: lendingLoandetails.pnid.as('pn_id'),
        branchId: lendingLoandetails.branchid.as('branch_id'),
        clientId: lendingLoandetails.clientid.as('client_id'),
        productId: lendingLoandetails.loanproductid.as('product_id'),
        productName: lendingLoanproducts.name.as('product_name'),
        disbursedAmount: lendingLoandetails.amount.as('disbursed_amount'),
        proceeds: lendingLoandetails.proceeds,
        proceedsType: lendingLoandetails.proceedstype.as('proceeds_type'),
        releaseTag: lendingLoandetails.releasetag.as('release_tag'),
        restructTag: lendingLoandetails.restructuredtag.as('restruct_tag'),
        loanClassId: lendingLoandetails.loanclassid.as('loan_class_id'),
        loanOfficerId: lendingLoandetails.loanofficerid.as('loan_officer_id'),
        loanCycle: lendingLoandetails.loancycle.as('loan_cycle'),
      })
      .from(lendingLoandetails)
      .innerJoin(lendingLoanproducts, eq(lendingLoanproducts.loanproductid, lendingLoandetails.loanproductid))
      .where(
        notInArray(
          lendingLoandetails.loanstatus,
          // misc/schema.sql#L4028: Only approved loans.
          [ 10, 11, 12, 13, 14 ],
        )
      )
  )

export type DepositBalance = typeof depositBalancesView.$inferSelect

// @SQLVIEW: Balances per account
export const depositBalancesView = mysqlView('deposit_balances_view')
  .as(
    qb => qb
      .select()
      .from(savingsAccounts)
  )

export type TimeDepositPlacement = typeof timeDepositPlacementsView.$inferSelect

// @SQLVIEW: Time deposit placements
export const timeDepositPlacementsView = mysqlView('time_deposit_placements_view')
  .as(
    qb => qb
      .select({
        placementId: savingsSsaplacementdetails.placementid.as('placement_id'),
        savingsId: savingsSsaplacementdetails.savingsid.as('savings_id'),
        placementDate: savingsSsaplacementdetails.ssadate.as('placement_date'),
        maturityDate: savingsSsaplacementdetails.ssamaturity.as('maturity_date'),
        termDays: savingsSsaplacementdetails.ssaterm.as('term_days'),
        amount: savingsSsaplacementdetails.amount,
        interestRate: savingsSsaplacementdetails.ssarate.as('interest_rate'),
        renewalOption: savingsSsaplacementdetails.renewaloption.as('renewal_option'),
        dateTerminated: savingsSsaplacementdetails.dateTerminated.as('date_terminated'),
        placementStatus: sql<string>`
          CASE
            WHEN ${ savingsSsaplacementdetails.dateTerminated } = '0000-00-00' THEN 'active'
            ELSE 'Terminated'
          END
        `.as('placement_status'),
        daysToMaturity: sql<number>`
          DATEDIFF(${ savingsSsaplacementdetails.ssamaturity }, CURDATE())
        `.as('days_to_maturity'),
      })
      .from(savingsSsaplacementdetails)
  )
