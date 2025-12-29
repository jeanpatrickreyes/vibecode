import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function PressPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.press.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.press.subheading')}
				</p>

				<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm space-y-4">
					<button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors">
						{t('pages.press.downloadKit')}
					</button>
					<div>
						<p className="font-medium text-gray-900 mb-2">{t('pages.press.mediaContact')}</p>
						<p className="text-gray-600">{t('pages.press.emailLabel')}: press@wasfai.com</p>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}

