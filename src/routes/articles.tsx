import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function ArticlesPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.articles.h1')}
				</h1>

				<div className="bg-white rounded-lg p-8 shadow-sm text-center">
					<h3 className="text-xl font-bold text-gray-900 mb-2">
						{t('pages.articles.empty.title')}
					</h3>
					<p className="text-gray-600">{t('pages.articles.empty.desc')}</p>
				</div>
			</div>
		</PageLayout>
	);
}

