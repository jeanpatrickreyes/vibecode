import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function IntegrationsPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.integrations.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.integrations.subheading')}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{['payments', 'analytics', 'auth', 'webhooks', 'hosting'].map((category) => (
						<div key={category} className="bg-white rounded-lg p-6 shadow-sm">
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{t(`pages.integrations.categories.${category}`)}
							</h3>
							<p className="text-gray-600 text-sm">{t('pages.integrations.card.comingSoon')}</p>
						</div>
					))}
				</div>
			</div>
		</PageLayout>
	);
}

