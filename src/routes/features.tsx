import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function FeaturesPage() {
	const { t } = useLanguage();
	const { requireAuth } = useAuthGuard();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.features.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.features.subheading')}
				</p>

				<div className="flex flex-col sm:flex-row gap-4 mb-12">
					<button
						onClick={() => {
							requireAuth({
								requireFullAuth: true,
								actionContext: 'to start building',
								intendedUrl: '/',
							});
						}}
						className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors inline-flex items-center justify-center gap-2"
					>
						{t('pages.features.primaryCta')}
						<ArrowRight className="h-4 w-4" />
					</button>
					<Link
						to="/pricing"
						className="bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
					>
						{t('pages.features.secondaryCta')}
					</Link>
				</div>

				<div className="space-y-8">
					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.features.sections.builder.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.features.sections.builder.desc')}
						</p>
					</div>

					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.features.sections.templates.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.features.sections.templates.desc')}
						</p>
					</div>

					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.features.sections.publishing.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.features.sections.publishing.desc')}
						</p>
					</div>

					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.features.sections.integrations.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.features.sections.integrations.desc')}
						</p>
					</div>

					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.features.sections.security.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.features.sections.security.desc')}
						</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<h3 className="text-xl font-bold text-gray-900 mb-4">
						{t('pages.features.faqTitle')}
					</h3>
					<Link
						to="/faq"
						className="text-[#1e3a5f] hover:underline font-medium"
					>
						{t('pages.features.faqCta')}
					</Link>
				</div>
			</div>
		</PageLayout>
	);
}

