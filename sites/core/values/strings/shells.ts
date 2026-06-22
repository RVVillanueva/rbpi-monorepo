import { useT } from "@/context/hono";
import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { useMemo } from "react";


export function useShellStrings() {
  const t = useT()
  const auth = useRBPIAuthContext()

  const userId = useMemo(() => auth.raw.user.numericId, [])
  const orgId = useMemo(() => auth.raw.org.organizations.numericId, [])

  return useMemo(() => ({
    navbarStrings: {
      dataSourceButtonTooltip: t('root.shells.navbar.data_source_tooltip', 'Data source'),

      search: {
        searchPlaceholder: t(
          'root.shells.navbar.search_placeholder', 
          'Search...',
        ),
        aiButtonTooltip: t(
          'root.shells.navbar.ai_search_tolltip', 
          'Chatbot',
        ),
      },

      navControls: {
        conversationButtonTooltip: t(
          'root.shells.navbar.nav_controls.conversation_button_tooltip', 
          'Conversation',
        ),

        dropdownMenu: {
          userStatus: [],
          menuItems: [],
          logoutMenuItem: {
            label: 'Logout',
            icon: 'LogOutIcon',
          },
        },
      },
    },

    actionbarStrings: {
      menuItems: [
        {
          title: t(
            'root.shells.action_bar.menu_items.file.title', 
            'File',
          ),
          subMenuItems: [],
        },
        {
          title: t(
            'root.shells.action_bar.menu_items.edit.title', 
            'Edit',
          ),
          subMenuItems: [],
        },
        {
          title: t(
            'root.shells.action_bar.menu_items.view.title', 
            'View',
          ),
          subMenuItems: [],
        },
        {
          title: t(
            'root.shells.action_bar.menu_items.actions.title', 
            'Actions',
          ),
          subMenuItems: [],
        },
        {
          title: t(
            'root.shells.action_bar.menu_items.reports.title',
            'Reports',
          ),
          subMenuItems: [],
        },
        {
          title: t(
            'root.shells.action_bar.menu_items.help.title',
            'Help',
          ),
          subMenuItems: [],
        },
      ],
    },

    sidebarStrings: {
      navIconRails: [
        {
          label: 'Home',
          href: `/${userId}/u/${orgId}`,
          icon: 'HouseIcon',
          sidebarContent: {
            mainContent: [],
            categories: [],
          },
        },

        {
          label: 'Accounting',
          href: `/${userId}/a/${orgId}`,
          icon: 'ScaleIcon',
          sidebarContent: {
            mainContent: [
              {
                icon: 'TvMinimalIcon',
                label: 'Overview',
                href: `/${userId}/a/${orgId}`,
              },
              {
                icon: 'ShapesIcon',
                label: 'Chart of accounts',
                href: `/${userId}/a/${orgId}/coc`,
              },
              {
                icon: 'NotebookTabsIcon',
                label: 'Journal entries',
                href: `/${userId}/a/${orgId}/je`,
              },
            ],
            categories: [
              {
                label: 'Planning',
                items: [
                  {
                    icon: 'FileUserIcon',
                    label: 'Cost centers',
                    href: `/${userId}/a/${orgId}/cc`,
                  },
                  {
                    icon: 'PiggyBankIcon',
                    label: 'Budgets',
                    href: `/${userId}/a/${orgId}/b`,
                  },
                ],
              }
            ],
          },
        },

        {
          label: 'Savings',
          href: `/${userId}/s/${orgId}`,
          icon: 'PiggyBankIcon',
          sidebarContent: {
            mainContent: [],
            categories: [],
          },
        },

        {
          label: 'HR',
          href: `/${userId}/hr/${orgId}`,
          icon: 'CirclePileIcon',
          sidebarContent: {
            mainContent: [],
            categories: [],
          },
        },
      ],
    },

    panelStrings: {

    },

    taskbarStrings: {
      
    },
  }), [t])
}


