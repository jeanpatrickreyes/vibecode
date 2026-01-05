import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQPage() {
	const { t, language } = useLanguage();
	const isRTL = language === 'ar';

	// Generate FAQ items (20 questions)
	const faqItems = Array.from({ length: 20 }, (_, i) => i + 1).map((num) => ({
		id: `faq-${num}`,
		question: t(`pages.faq.q${num}`),
		answer: t(`pages.faq.a${num}`),
	}));

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.faq.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-12">
					{t('pages.faq.subheading')}
				</p>

				<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item, index) => (
							<AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 last:border-b-0">
								<AccordionTrigger className={`px-6 py-4 ${isRTL ? 'text-right' : 'text-left'} hover:no-underline hover:bg-gray-50 transition-colors`}>
									<span className="font-semibold text-gray-900 text-base sm:text-lg flex-1">
										{item.question}
									</span>
								</AccordionTrigger>
								<AccordionContent className="px-6 pb-4">
									<div className={`text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
										{item.answer}
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				{/* Additional help section */}
				<div className="mt-12 text-center">
					<p className="text-gray-600 mb-4">
						{t('pages.faq.stillHaveQuestions')}
					</p>
					<a
						href="/contact"
						className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
					>
						{t('pages.faq.contactUs')}
					</a>
				</div>
			</div>
		</PageLayout>
	);
}

