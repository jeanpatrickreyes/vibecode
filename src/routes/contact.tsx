import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';

export default function ContactPage() {
	const { t, language } = useLanguage();
	const isRTL = language === 'ar';
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		topic: 'support',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<PageLayout>
			<div className="max-w-2xl mx-auto">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{t('pages.contact.h1')}
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">
					{t('pages.contact.subheading')}
				</p>

				{submitted ? (
					<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
						<h3 className="text-xl font-bold text-green-900 mb-2">
							{t('pages.contact.success.title')}
						</h3>
						<p className="text-green-700">
							{t('pages.contact.success.desc')}
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t('pages.contact.form.name')}
							</label>
							<input
								type="text"
								required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
								dir={isRTL ? 'rtl' : 'ltr'}
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t('pages.contact.form.email')}
							</label>
							<input
								type="email"
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
								dir={isRTL ? 'rtl' : 'ltr'}
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t('pages.contact.form.topic')}
							</label>
							<select
								value={formData.topic}
								onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
							>
								<option value="support">{t('pages.contact.form.topicOptions.support')}</option>
								<option value="sales">{t('pages.contact.form.topicOptions.sales')}</option>
								<option value="legal">{t('pages.contact.form.topicOptions.legal')}</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t('pages.contact.form.message')}
							</label>
							<textarea
								required
								rows={6}
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
								dir={isRTL ? 'rtl' : 'ltr'}
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors"
						>
							{t('pages.contact.form.submit')}
						</button>
					</form>
				)}
			</div>
		</PageLayout>
	);
}

