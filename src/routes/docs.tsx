import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function DocsPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.docs.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.docs.subheading')}
				</p>

				<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
					<ul className="space-y-4">
						{['quickstart', 'builder', 'integrations', 'hosting', 'security', 'api'].map((item) => (
							<li key={item}>
								<a href="#" className="text-[#1e3a5f] hover:underline font-medium">
									{t(`pages.docs.sidebar.${item}`)}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</PageLayout>
	);
}

