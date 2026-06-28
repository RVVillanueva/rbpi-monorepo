import { useT } from "@/context/hono";
import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { useMemo } from "react";
import { useAppStrings } from './app';


export function useUserStrings() {
  const t = useT()
  const auth = useRBPIAuthContext()
  const appStrings = useAppStrings()

  const userId = useMemo(() => auth.raw.user.numericId, [])
  const orgId = useMemo(() => auth.raw.org.organizations.numericId, [])

  return useMemo(() => ({

    cards: {
      viewButtonString: t('root.cards.view_button', 'View'),

      financialPositionsViewStrings: {
        title: t('root.cards.financial_positions_view.label', 'Financial position'),
        balanceSheetSectionTitle: appStrings.keywords.balanceSheetStrings.simple,
        incomeStatementTitle: appStrings.keywords.incomeStatementAltAcronym,
      },
    },

    actionTableHeaderString: t('root.tables.action_table_header', 'Action'),

    accountsTableStrings: {
      glCodeHeader: t('root.tables.accounts_table.gl_code_header', 'GL code'),
      accountNameHeader: t('root.tables.accounts_table.account_name_header', 'Account name'),
      debitsHeader: t('root.tables.accounts_table.debits_header', 'Debits'),
      creditsHeader: t('root.tables.accounts_table.credits_header', 'Credits'),

      viewAccountJournalsLinkHref: (code: number) => {
        return `/${userId}/a/${orgId}/l/coa/${code}`
      },
    },

    costCentersTableStrings: {
      nameHeader: t('root.tables.cost_centers_table.name_header', 'Cost center'),
      budgetHeader: t('root.tables.cost_centers_table.budget_header', 'Budget'),
      actualHeader: t('root.tables.cost_centers_table.actual_header', 'Actual'),
      groupHeader: t('root.tables.cost_centers_table.group_header', 'Group'),
    },

    journalsTableStrings: {
      dateHeader: t('root.tables.journals_table.date_header', 'Date'),
      journalIdHeader: t('root.tables.journals_table.journal_id_header', 'Journal ID'),
      branchHeader: t('root.tables.journals_table.branches_header', 'Branch'),
      descriptionHeader: t('root.tables.journals_table.description_header', 'Description'),
      totalAmountHeader: t('root.tables.journals_table.total_amount_header', 'Amount'),
      debitHeader: t('root.tables.journals_table.debit_header', 'Debit'),
      creditHeader: t('root.tables.journals_table.credit_header', 'Credit'),
      authorHeader: t('root.tables.journals_table.author_header', 'Author(s)'),
      statusHeader: t('root.tables.journals_table.status_header', 'Status'),

      viewJournalDetailsLinkHref: (journalId: number) => {
        return `/${userId}/a/${orgId}/l/je/${journalId}`
      },
    },

    budgetsTableStrings: {

    },

  }), [t])
}