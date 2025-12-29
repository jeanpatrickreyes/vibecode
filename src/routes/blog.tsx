import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function BlogPage() {
	const { t } = useLanguage();

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.blog.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.blog.subheading')}
				</p>

				<div className="bg-white rounded-lg p-8 shadow-sm text-center">
					<p className="text-gray-600">Blog posts will be displayed here.</p>
				</div>
			</div>
		</PageLayout>
	);
}

