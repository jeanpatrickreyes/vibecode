import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { useParams } from 'react-router';

export default function LegalPage() {
	const { t } = useLanguage();
	const { type } = useParams<{ type: 'terms' | 'privacy' | 'cookies' | 'gdpr' }>();

	const legalType = type || 'terms';

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t(`pages.legal.${legalType}.h1`)}
				</h1>
				<p className="text-sm text-gray-500 mb-8">
					{t(`pages.legal.${legalType}.lastUpdated`)}: {new Date().toLocaleDateString()}
				</p>

				<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm prose prose-lg max-w-none">
					<p className="text-gray-600">
						{t(`pages.legal.${legalType}.h1`)} content will be displayed here.
					</p>
				</div>
			</div>
		</PageLayout>
	);
}

