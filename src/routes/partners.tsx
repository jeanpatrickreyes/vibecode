import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function PartnersPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.partners.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.partners.subheading')}
				</p>

				<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						{t('pages.partners.typesTitle')}
					</h2>
					<button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors">
						{t('pages.partners.applyCta')}
					</button>
				</div>
			</div>
		</PageLayout>
	);
}

