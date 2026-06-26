
declare module RBPICore {
  type ChartOfAccountsBasicUnit = 'A' | 'L' | 'C' | 'I' | 'E'

  declare namespace Legacy {

    type HREmployeesView = import('~/db/legacy/views/hr').GeneralEmployee
    type HRAttendancesView = import('~/db/legacy/views/hr').HRAttendancesView

    type AccountingBranchesView = import('~/db/legacy/views/accounting').BranchesView
    type AccountingGlAccountsView = import('~/db/legacy/views/accounting').AcctngGLAccount
    type AccountingCostCentersView = import('~/db/legacy/views/accounting').CostCentersView
    type AccountingGlJournalsView = import('~/db/legacy/views/accounting').AcctngJournal
    type AccountingJournalAuditView = import('~/db/legacy/views/accounting').JournalAuditView
    type AccountingJournalHeaderView = import('~/db/legacy/views/accounting').JournalHeaderView
    type AccountingBudgetsView = import('~/db/legacy/views/accounting').AcctngBudget
    type AccountingLoanPortfoliosView = import('~/db/legacy/views/accounting').LoanPortfoliosView
    type AccountingLoanCollectionView = import('~/db/legacy/views/accounting').LoanCollectionView
    type AccountingLoanDisbursementsView = import('~/db/legacy/views/accounting').LoanDisbursementsView
    type AccountingDepositBalancesView = import('~/db/legacy/views/accounting').DepositBalancesView
    type AccountingTimeDepositPlacementsView = import('~/db/legacy/views/accounting').TimeDepositPlacementsView
  }

}

