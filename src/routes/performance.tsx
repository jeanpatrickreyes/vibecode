import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function PerformancePage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.performance.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.performance.subheading')}
				</p>

				<div className="space-y-6">
					{['webVitals', 'cdn', 'images'].map((section) => (
						<div key={section} className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-gray-900 mb-3">
								{t(`pages.performance.sections.${section}.title`)}
							</h2>
							<p className="text-gray-600">
								{t(`pages.performance.sections.${section}.desc`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</PageLayout>
	);
}

