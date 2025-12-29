import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { GlobalHeader } from './global-header';
import { AppsDataProvider } from '@/contexts/apps-data-context';
import clsx from 'clsx';

interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useLocation();
  const isLandingPage = pathname === '/';
  
  // Pages that should use the landing page layout (no sidebar/header)
  const publicPages = [
    '/features', '/pricing', '/templates', '/integrations', '/about', '/contact',
    '/help', '/docs', '/faq', '/changelog', '/performance', '/careers', '/press',
    '/partners', '/blog', '/articles', '/videos', '/community'
  ];
  
  const isPublicPage = publicPages.some(page => pathname.startsWith(page)) || pathname.startsWith('/legal/');
  
  if (isLandingPage || isPublicPage) {
    return <>{children || <Outlet />}</>;
  }
  
  return (
    <AppsDataProvider>
      <SidebarProvider 
        defaultOpen={false}
        style={{
          "--sidebar-width": "320px",
          "--sidebar-width-mobile": "280px",
          "--sidebar-width-icon": "52px"
        } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset className={clsx("bg-bg-3 flex flex-col h-screen relative", pathname !== "/" && "overflow-hidden")}>
          <GlobalHeader />
          <div className={clsx("flex-1 bg-bg-3", pathname !== "/" && "min-h-0 overflow-auto")}>
            {children || <Outlet />}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AppsDataProvider>
  );
}