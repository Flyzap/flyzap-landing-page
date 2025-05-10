
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageSquare, Rocket, Calendar, Kanban, Users, Tag, MessageSquareText, User, Settings, BarChart } from 'lucide-react';
import Logo from '../Logo';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  section?: string;
}

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: Home, section: "main" },
  { title: "Atendimentos", href: "/atendimentos", icon: MessageSquare, section: "main" },
  { title: "Flowbuilder", href: "/flowbuilder", icon: Rocket, section: "main" },
  { title: "Prompt AI", href: "/prompt-ai", icon: MessageSquareText, section: "main" },
  { title: "Agenda", href: "/agenda", icon: Calendar, section: "main" },
  { title: "Kanban", href: "/kanban", icon: Kanban, section: "main" },
  { title: "Contatos", href: "/contatos", icon: Users, section: "manage" },
  { title: "Tags", href: "/tags", icon: Tag, section: "manage" },
  { title: "Usuários", href: "/usuarios", icon: User, section: "settings" },
  { title: "Configurações", href: "/configuracoes", icon: Settings, section: "settings" },
  { title: "Relatórios", href: "/relatorios", icon: BarChart, section: "settings" },
];

const AppSidebar: React.FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-flyzap-green/10 text-flyzap-green font-medium" : "hover:bg-slate-100 dark:hover:bg-slate-800";

  return (
    <Sidebar variant="sidebar" className="border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <SidebarHeader className="py-4">
        <Logo className="mx-auto h-8" />
        {!isCollapsed && (
          <div className="mt-2 text-center font-bold text-flyzap-black dark:text-white">
            FlyZap
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                <NavLink to={item.href} end className={getNavCls}>
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="py-4">
        <SidebarSeparator />
        <div className="px-3 py-2 mt-2">
          <div className="flex items-center justify-center">
            <NavLink 
              to="/profile" 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </NavLink>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
