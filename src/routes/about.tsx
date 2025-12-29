import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function AboutPage() {
	const { t } = useLanguage();
	const { requireAuth } = useAuthGuard();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.about.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-12">
					{t('pages.about.subheading')}
				</p>

				<div className="space-y-8 mb-12">
					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.about.sections.mission.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.about.sections.mission.desc')}
						</p>
					</div>

					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.about.sections.vision.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.about.sections.vision.desc')}
						</p>
					</div>

					<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							{t('pages.about.sections.values.title')}
						</h2>
						<p className="text-gray-600">
							{t('pages.about.sections.values.desc')}
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-4">
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
						{t('pages.about.primaryCta')}
						<ArrowRight className="h-4 w-4" />
					</button>
					<Link
						to="/templates"
						className="bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
					>
						{t('pages.about.secondaryCta')}
					</Link>
				</div>
			</div>
		</PageLayout>
	);
}

