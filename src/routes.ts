import type { RouteObject } from 'react-router';
import React from 'react';

import App from './App';
import Landing from './routes/landing';
import Home from './routes/home';
import Chat from './routes/chat/chat';
import Profile from './routes/profile';
import Settings from './routes/settings/index';
import AppsPage from './routes/apps';
import AppView from './routes/app';
import DiscoverPage from './routes/discover';
import { ProtectedRoute } from './routes/protected-route';
import FeaturesPage from './routes/features';
import PricingPage from './routes/pricing-page';
import TemplatesPage from './routes/templates';
import IntegrationsPage from './routes/integrations';
import AboutPage from './routes/about';
import ContactPage from './routes/contact';
import LegalPage from './routes/legal';
import HelpPage from './routes/help';
import DocsPage from './routes/docs';
import FAQPage from './routes/faq';
import ChangelogPage from './routes/changelog';
import PerformancePage from './routes/performance';
import CareersPage from './routes/careers';
import PressPage from './routes/press';
import PartnersPage from './routes/partners';
import BlogPage from './routes/blog';
import ArticlesPage from './routes/articles';
import VideosPage from './routes/videos';
import CommunityPage from './routes/community';
import DashboardPage from './routes/dashboard';
import BillingPage from './routes/billing';

const routes = [
	{
		path: '/',
		Component: App,
		children: [
			{
				index: true,
				Component: Landing,
			},
			{
				path: 'home',
				Component: Home,
			},
			{
				path: 'chat/:chatId',
				Component: Chat,
			},
			{
				path: 'profile',
				element: React.createElement(ProtectedRoute, { children: React.createElement(Profile) }),
			},
			{
				path: 'settings',
				element: React.createElement(ProtectedRoute, { children: React.createElement(Settings) }),
			},
			{
				path: 'apps',
				element: React.createElement(ProtectedRoute, { children: React.createElement(AppsPage) }),
			},
			{
				path: 'app/:id',
				Component: AppView,
			},
			{
				path: 'discover',
				Component: DiscoverPage,
			},
			{
				path: 'features',
				Component: FeaturesPage,
			},
			{
				path: 'pricing',
				Component: PricingPage,
			},
			{
				path: 'templates',
				Component: TemplatesPage,
			},
			{
				path: 'integrations',
				Component: IntegrationsPage,
			},
			{
				path: 'about',
				Component: AboutPage,
			},
			{
				path: 'contact',
				Component: ContactPage,
			},
			{
				path: 'help',
				Component: HelpPage,
			},
			{
				path: 'docs',
				Component: DocsPage,
			},
			{
				path: 'faq',
				Component: FAQPage,
			},
			{
				path: 'changelog',
				Component: ChangelogPage,
			},
			{
				path: 'performance',
				Component: PerformancePage,
			},
			{
				path: 'legal/:type',
				Component: LegalPage,
			},
			{
				path: 'careers',
				Component: CareersPage,
			},
			{
				path: 'press',
				Component: PressPage,
			},
			{
				path: 'partners',
				Component: PartnersPage,
			},
			{
				path: 'blog',
				Component: BlogPage,
			},
			{
				path: 'articles',
				Component: ArticlesPage,
			},
			{
				path: 'videos',
				Component: VideosPage,
			},
			{
				path: 'community',
				Component: CommunityPage,
			},
			{
				path: 'dashboard',
				element: React.createElement(ProtectedRoute, { children: React.createElement(DashboardPage) }),
			},
			{
				path: 'billing',
				element: React.createElement(ProtectedRoute, { children: React.createElement(BillingPage) }),
			},
		],
	},
] satisfies RouteObject[];

export { routes };
