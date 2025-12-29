import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { Link } from 'react-router';

export default function PricingPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto text-center">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.pricing.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.pricing.subheading')}
				</p>

				<div className="mt-8">
					<Link
						to="/#pricing"
						className="text-[#1e3a5f] hover:underline font-medium"
					>
						{t('pages.pricing.comparisonTitle')}
					</Link>
				</div>
			</div>
		</PageLayout>
	);
}

