import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { ArrowRight } from 'lucide-react';

export default function CommunityPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.community.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.community.subheading')}
				</p>

				<div className="flex flex-col sm:flex-row gap-4">
					<button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors inline-flex items-center justify-center gap-2">
						{t('pages.community.primaryCta')}
						<ArrowRight className="h-4 w-4" />
					</button>
					<button className="bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
						{t('pages.community.secondaryCta')}
					</button>
				</div>
			</div>
		</PageLayout>
	);
}

