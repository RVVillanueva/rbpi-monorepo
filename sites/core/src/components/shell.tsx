
import {
  Fragment,
  PropsWithChildren,
  useMemo,
  useState
} from "react";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from "@shadcn/base/components/ui/menubar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@shadcn/base/components/ui/resizable";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@shadcn/base/components/ui/input-group";

import {
  BotMessageSquareIcon,
  ChevronDownIcon,
  CircleChevronRightIcon,
  CirclePileIcon,
  DatabaseIcon,
  EllipsisIcon,
  FileUserIcon,
  FormIcon,
  HouseIcon,
  LogOutIcon,
  LogsIcon,
  MessageCircleIcon,
  NotebookTabsIcon,
  PiggyBankIcon,
  PlusIcon,
  ScaleIcon,
  SearchIcon,
  ShapesIcon,
  TvMinimalIcon,
  XIcon,
} from "@shadcn/base/icons";

const icons = {
  HouseIcon, ScaleIcon, PiggyBankIcon, CirclePileIcon,
  SearchIcon, BotMessageSquareIcon, ChevronDownIcon,
  CircleChevronRightIcon, MessageCircleIcon, EllipsisIcon,
  XIcon, LogOutIcon, TvMinimalIcon, FormIcon, LogsIcon,
  ShapesIcon, NotebookTabsIcon, FileUserIcon,
}

type ValidIconsType = keyof typeof icons

import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@shadcn/base/components/ui/avatar";
import { Button } from "@shadcn/base/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@shadcn/base/components/ui/dropdown-menu";
import { Separator } from "@shadcn/base/components/ui/separator";
import { Skeleton } from "@shadcn/base/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@shadcn/base/components/ui/tooltip";
import { Link, useFetcher, useLocation, useNavigate, } from "react-router";
import { useAppStrings } from "~/values/strings/app";
import { useShellStrings } from "~/values/strings/shells";
import { RBPIBreadcrumbProvider } from "./breadcrumb";
import { RBPICommandCenterProvider, useRBPICommandCenterContext } from "./command";
import { RBPIWindowProvider, useRBPIWindowManagerContext } from "./window";

type RBPIShellProviderProps = PropsWithChildren<{
  
}>

export const RBPIShellProvider = (props: RBPIShellProviderProps) => {
  const { children } = props

  return (
    <RBPIBreadcrumbProvider>
      <RBPIWindowProvider>
        <RBPICommandCenterProvider>
          { children }
        </RBPICommandCenterProvider>
      </RBPIWindowProvider>
    </RBPIBreadcrumbProvider>
  )
}

export type RBPINavbarProps = PropsWithChildren<{}>

export function RBPINavbar(props: RBPINavbarProps) {
  const search = useFetcher()
  const navigate = useNavigate()

  const appStrings = useAppStrings()
  const shellStrings = useShellStrings()

  const auth = useRBPIAuthContext()
  const { openCommandCenter } = useRBPICommandCenterContext()

  const user = auth.getUser()

  return (
    <div 
      id='rbpi-navbar' 
      className={'border p-1 bg-white'}>
      
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='border flex rounded bg-zinc-50 p-1 px-2 gap-1.5 items-center cursor-pointer'>
                { !auth.isRbpi() && <Skeleton className='w-5 h-5 rounded-sm bg-zinc-200'></Skeleton> }
                { auth.isRbpi() && <img src={ appStrings.rbpiLogo } className='w-6 h-6 relative grayscale-60 top-0.5' /> }
                <span className='uppercase text-zinc-600'>
                  { auth.getOrganizationProfile()?.shortName }
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={'icon-lg'} variant={'ghost'}>
                <DatabaseIcon size={16} strokeWidth={1} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              { shellStrings.navbarStrings.dataSourceButtonTooltip }
            </TooltipContent>
          </Tooltip>

        </div>

        <div className='flex justify-between items-center'>
          
          <search.Form>
            <InputGroup className='rounded-full'>
              <InputGroupInput 
                readOnly
                className='cursor-pointer'
                onClick={openCommandCenter}
                placeholder={ shellStrings.navbarStrings.search.searchPlaceholder } />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align={'inline-end'}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      size={'icon-sm'} 
                      variant={'outline'}
                      className='rounded-full'>
                      <BotMessageSquareIcon strokeWidth={1.5} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    { shellStrings.navbarStrings.search.aiButtonTooltip }
                  </TooltipContent>
                </Tooltip>
              </InputGroupAddon>
            </InputGroup>
          </search.Form>

        </div>

        <div className='flex justify-between items-center'>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                className='rounded-full text-zinc-600'
                size={'icon-lg'}
                variant={'ghost'}>
                <MessageCircleIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              { shellStrings.navbarStrings.navControls.conversationButtonTooltip }
            </TooltipContent>
          </Tooltip>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                className='cursor-pointer gap-1'
                variant={'link'}>
                <Avatar>
                  <AvatarImage src={ user.image! } />
                  <AvatarFallback>{ user.name.split(' ').map(name => name.at(0)?.toUpperCase()).join('').slice(0, 2) }</AvatarFallback>
                </Avatar>
                <ChevronDownIcon size={16} className='text-zinc-500' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-56 text-zinc-700'>
              
              <DropdownMenuGroup className='px-1'>
                <DropdownMenuItem onSelect={e => e.preventDefault()}>
                  <div className='flex items-center gap-2'>
                    <Skeleton className='w-8 h-8 rounded-full bg-zinc-200' />
                    <div className='flex flex-col'>
                      <span className='font-medium text-zinc-800'>{ auth.getUser().name }</span>
                      <span className='text-[1.6ch] text-zinc-500'>Online</span>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup className='px-1'>
                { (() => {
                  const Icon = icons[shellStrings.navbarStrings.navControls.dropdownMenu.logoutMenuItem.icon as ValidIconsType]

                  return (
                    <DropdownMenuItem 
                      onSelect={() => auth.client.signOut().then(() => navigate('/login'))}
                      className='cursor-pointer'>
                      <Icon strokeWidth={1} />
                      <span>
                        { shellStrings.navbarStrings.navControls.dropdownMenu.logoutMenuItem.label }
                      </span>
                    </DropdownMenuItem>
                  )
                })() }
              </DropdownMenuGroup>

            </DropdownMenuContent>
          </DropdownMenu>

        </div>

      </div>

    </div>
  )
}

export type RBPIActionbarProps = PropsWithChildren<{}>

type ActionbarStrings = ReturnType<typeof useShellStrings>['actionbarStrings']

const renderMenuItems = (items: ActionbarStrings['menuItems'], isSubMenu?: boolean) => {
  if (isSubMenu) {
    return items.map((item, i) => {
      if (item.subMenuItems.length > 0) {

        return (
          <DropdownMenuSub key={i}>
            <DropdownMenuSubTrigger className='text-[1.25ch]'>
              { item.title }
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className='min-w-content'>
                { renderMenuItems(item.subMenuItems, true) }
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )
      }
      
      return (
        <DropdownMenuItem 
          asChild
          className='text-[1.25ch]' 
          key={i}>
          <Link to={ item.href ?? '#' }>
            { item.title }
          </Link>
        </DropdownMenuItem>
      )
    })
  }

  return items.map((item, i) => {
    return <RBPIMenubarMenu key={i} item={item} />
  })
}

const RBPIMenubarMenu = ({ item }: { item: ActionbarStrings['menuItems'][number] }) => {
  const [open, setOpen] = useState(false)

  return (
    <MenubarMenu>
      { item.subMenuItems.length > 0 && 
        (
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <MenubarTrigger onMouseEnter={() => setOpen(true)} className='font-normal'>
                { item.title }
              </MenubarTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-[20ch]' align="start">
              { renderMenuItems(item.subMenuItems, true) }          
            </DropdownMenuContent>
          </DropdownMenu>
        ) ||
        (
          <MenubarTrigger className='font-normal'>
            { item.title }
          </MenubarTrigger>
        ) }
    </MenubarMenu>
  )
}

export function RBPIActionbar(props: RBPIActionbarProps) {
  const { actionbarStrings } = useShellStrings()



  return (
    <div id='rbpi-actionbar' className={'m-1 sticky top-1'}>
      <Menubar 
        className='bg-white'>
        { renderMenuItems(actionbarStrings.menuItems) }

        <div className='flex-1'></div>

        <MenubarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MenubarTrigger className='font-normal'>
                <EllipsisIcon size={16} className='text-zinc-500' />
              </MenubarTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={'end'}>
            </DropdownMenuContent>
          </DropdownMenu>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export type RBPISidebarProps = PropsWithChildren<{}>

export function RBPISidebar(props: RBPISidebarProps) {
  type railItemType = typeof shellStrings.sidebarStrings.navIconRails[number]

  const shellStrings = useShellStrings()
  const location = useLocation()
  
  const [focusRail, setFocusRail] = useState<railItemType | null>()
  const activeRail = useMemo(() => shellStrings.sidebarStrings.navIconRails.find(rail => new RegExp(rail.href).test(location.pathname))!, [location])

  const renderSidebarSubMenuItems = () => {
    
  }

  const SidebarRenderContent = (props: { railSidebar: railItemType, focus?: boolean }) => {
    const sidebar = useMemo(() => props.railSidebar, [])

    const onSidebarUnfocus = () => {
      if (!focus) return
      setFocusRail(null)
    }

    return (
      <div onMouseOut={onSidebarUnfocus}>
        <div className='p-2 grid gap-2'>
          <div className='flex items-center justify-between'>
            <span className='font-medium text-sm px-2 text-zinc-500'>
              { sidebar.label }
            </span>
            <Button
              size={'icon-sm'}
              variant={'outline'}>
              <PlusIcon strokeWidth={0.8} />
            </Button>
          </div>

          <ul>
            { sidebar.sidebarContent.mainContent.map((item, i) => {
              const Icon = icons[item.icon as ValidIconsType]

              return (
                <li key={i}>
                  <Button 
                    className='w-full justify-start cursor-pointer'
                    variant={'ghost'}
                    asChild>
                    <Link to={item.href}>
                      <Icon strokeWidth={1} size={8} />
                      <span className='font-normal'>{ item.label }</span>
                    </Link>
                  </Button>
                </li>
              )
            }) }
          </ul>
        </div>

        { sidebar.sidebarContent.categories.map((category, i) => {

          return (
            <Fragment key={i}>
              <Separator />
              
              <div className='px-2 py-2 flex flex-col gap-2'>
                <span className='uppercase text-xs text-zinc-500 px-2 pt-2'>
                  { category.label }
                </span>

                <ul className=''>
                  { category.items.map((item, i) => {
                    const Icon = icons[item.icon as ValidIconsType]
                    
                    return (
                      <li key={i}>
                        <Button
                          className='w-full justify-start cursor-pointer'
                          variant={'ghost'}
                          asChild>
                          <Link to={item.href}>
                            <Icon strokeWidth={1} size={18} />
                            <span className='font-normal'>
                              { item.label }
                            </span>
                          </Link>
                        </Button>
                      </li>
                    )
                  }) }
                </ul>
              </div>
            </Fragment>
          )
        }) }
      </div>
    )
  }
  
  return (
    <div 
      id='rbpi-sidebar-left'
      className={'grid grid-cols-[auto_1fr] min-h-0 h-full grid-rows-1 gap-1.5 ml-1 mr-2 pb-1'}> {/* @GRID */}
      <nav className='nav-rails border rounded-lg bg-white'>
        <div className='p-1.5'>
          <ul>
            { shellStrings.sidebarStrings.navIconRails.map((nav, i) => {
              const Icon = icons[nav.icon as ValidIconsType]

              return (
                <li key={i}>
                  <Button
                    variant={'ghost'}
                    size={'icon-lg'}
                    className='rounded-full'
                    asChild>
                    <Link 
                      className='cursor-pointer'
                      onBlur={() => setFocusRail(null)}
                      onFocus={() => setFocusRail(nav)}
                      to={nav.href}>
                      <Icon strokeWidth={0.8} />
                    </Link>
                  </Button>
                </li>
              )
            }) }
          </ul>
        </div>
      </nav>

      {/* Sidebar content */}
      <ResizablePanelGroup 
        orientation='horizontal' 
        className='nav-sidebar no-scrollbar h-full'>
        {/* @TODO: Sidebar can be adjusted to accommodate space for the main view */}
        <ResizablePanel 
          maxSize={256}
          defaultSize={256}
          className='no-scrollbar'>
          <aside className='border h-full rounded-l-lg bg-white min-w-43'>
            { focusRail && <SidebarRenderContent railSidebar={focusRail} focus /> }
            { !focusRail && activeRail && <SidebarRenderContent railSidebar={activeRail} /> }
          </aside>
        </ResizablePanel>
        
        <ResizableHandle className='ring-0 border-0 opacity-0' />
        <ResizablePanel className='no-scrollbar'>
          { props.children }
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export type RBPIPanelProps = PropsWithChildren<{}>

export function RBPIPanel(props: RBPIPanelProps) {

  return (
    <div 
      id='rbpi-panel'
      className={'bg-zinc-100 min-h-0 overflow-hidden'}>
      
    </div>
  )
}

export type RBPITaskbarProps = PropsWithChildren<{}>

export function RBPITaskbar(props: RBPITaskbarProps) {
  const windowManager = useRBPIWindowManagerContext()


  return (
    <div 
      id='rbpi-taskbar' 
      className={'border-t bg-white'}>
      
      <ul className='flex items-center text-md overflow-x-auto'>

        <div className='flex-1'></div>

        <li>
          <Button 
            variant={'ghost'}
            size={'icon'}
            className=''>
            <CircleChevronRightIcon className='text-zinc-500' />
          </Button>
        </li>
      </ul>

    </div>
  )
}