import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function HelpPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.help.h1')}
				</h1>
				<div className="bg-white rounded-lg p-8 shadow-sm text-center">
					<p className="text-gray-600">{t('pages.help.empty.desc')}</p>
				</div>
			</div>
		</PageLayout>
	);
}

