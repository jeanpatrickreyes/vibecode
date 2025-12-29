import { useLanguage } from '@/contexts/language-context';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
	Code2, 
	Plus, 
	ArrowRight,
	Activity,
	Globe,
	Star,
	Zap
} from 'lucide-react';
import { useApps } from '@/hooks/use-apps';
import { useUserStats } from '@/hooks/use-stats';

export default function DashboardPage() {
	const { t } = useLanguage();
	const navigate = useNavigate();
	const { apps, loading: appsLoading } = useApps();
	const { stats, loading: statsLoading } = useUserStats();

	return (
		<div className="min-h-screen bg-bg-3">
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						{t('pages.account.dashboard.h1')}
					</h1>
					<p className="text-lg text-gray-600">
						{t('pages.account.dashboard.subheading')}
					</p>
				</div>

				{/* Quick Actions */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">
						{t('pages.account.dashboard.quickActions')}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/home')}>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Plus className="h-5 w-5" />
									{t('pages.account.dashboard.newProject')}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-600 mb-4">
									Create a new application or website
								</p>
								<Button variant="outline" className="w-full">
									{t('pages.account.dashboard.newProject')}
									<ArrowRight className="h-4 w-4 ml-2" />
								</Button>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/apps')}>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Code2 className="h-5 w-5" />
									{t('pages.account.dashboard.openBuilder')}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-600 mb-4">
									View and manage your projects
								</p>
								<Button variant="outline" className="w-full">
									{t('pages.account.dashboard.openBuilder')}
									<ArrowRight className="h-4 w-4 ml-2" />
								</Button>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/settings')}>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Activity className="h-5 w-5" />
									{t('pages.account.dashboard.billingCta')}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-600 mb-4">
									Manage your subscription and billing
								</p>
								<Button variant="outline" className="w-full">
									{t('pages.account.dashboard.billingCta')}
									<ArrowRight className="h-4 w-4 ml-2" />
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Stats Overview */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
					<Card>
						<CardContent className="pt-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm text-gray-600 mb-1">
										{t('pages.account.dashboard.usage')}
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{statsLoading ? '-' : stats?.appCount || 0}
									</p>
									<p className="text-xs text-gray-500 mt-1">Projects</p>
								</div>
								<Code2 className="h-8 w-8 text-blue-500 opacity-50" />
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm text-gray-600 mb-1">
										{t('pages.account.dashboard.plan')}
									</p>
									<p className="text-2xl font-bold text-gray-900">
										Free
									</p>
									<p className="text-xs text-gray-500 mt-1">Current plan</p>
								</div>
								<Star className="h-8 w-8 text-yellow-500 opacity-50" />
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm text-gray-600 mb-1">
										Public Apps
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{statsLoading ? '-' : stats?.publicAppCount || 0}
									</p>
									<p className="text-xs text-gray-500 mt-1">Published</p>
								</div>
								<Globe className="h-8 w-8 text-green-500 opacity-50" />
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm text-gray-600 mb-1">
										Total Views
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{statsLoading ? '-' : stats?.totalViewsReceived || 0}
									</p>
									<p className="text-xs text-gray-500 mt-1">All time</p>
								</div>
								<Zap className="h-8 w-8 text-purple-500 opacity-50" />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Recent Projects */}
				<div>
					<h2 className="text-xl font-semibold text-gray-900 mb-4">
						Recent Projects
					</h2>
					{appsLoading ? (
						<div className="text-center py-8">
							<Activity className="h-8 w-8 mx-auto mb-2 text-gray-400 animate-pulse" />
							<p className="text-sm text-gray-600">Loading projects...</p>
						</div>
					) : apps && apps.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{apps.slice(0, 6).map((app) => (
								<Card 
									key={app.id} 
									className="hover:shadow-lg transition-shadow cursor-pointer"
									onClick={() => navigate(`/app/${app.id}`)}
								>
									<CardHeader>
										<CardTitle className="text-lg">{app.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-gray-600 mb-4">
											{app.framework} • {app.visibility}
										</p>
										<Button variant="outline" size="sm" className="w-full">
											Open Project
											<ArrowRight className="h-4 w-4 ml-2" />
										</Button>
									</CardContent>
								</Card>
							))}
						</div>
					) : (
						<Card>
							<CardContent className="py-12 text-center">
								<Code2 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
								<p className="text-gray-600 mb-4">No projects yet</p>
								<Button onClick={() => navigate('/home')}>
									<Plus className="h-4 w-4 mr-2" />
									{t('pages.account.dashboard.newProject')}
								</Button>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}

