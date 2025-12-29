import { useRef, useState, useEffect, useMemo } from 'react';
import { ArrowRight, Clock, Check, X, Shield, Monitor, Zap, Share2, Lock, MessageSquare, ShoppingBag, Calendar, LayoutDashboard, FileText, Image as ImageIcon, UtensilsCrossed, Star, MapPin, Instagram, Youtube, Linkedin, Twitter, Globe } from 'lucide-react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '@/contexts/auth-context';
import { MAX_AGENT_QUERY_LENGTH, SUPPORTED_IMAGE_MIME_TYPES, type ProjectType } from '@/api-types';
import { useAuthGuard } from '../hooks/useAuthGuard';
import { useImageUpload } from '@/hooks/use-image-upload';
import { useDragDrop } from '@/hooks/use-drag-drop';
import { ImageAttachmentPreview } from '@/components/image-attachment-preview';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/language-context';
import { LandingHeader } from '@/components/landing/landing-header';
import clsx from 'clsx';
import logoImage from '@/assets/provider-logos/logo.png';
import currencyImage from '@/assets/currency.jpg';

export default function Landing() {
	const navigate = useNavigate();
	const { requireAuth } = useAuthGuard();
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [projectMode] = useState<ProjectType>('app');
	const [query, setQuery] = useState('');
	const { user } = useAuth();
	const { language, t } = useLanguage();
	const isRTL = language === 'ar';

	const { images, addImages, removeImage, clearImages } = useImageUpload({
		onError: (error) => {
			console.error('Image upload error:', error);
			toast.error(error);
		},
	});

	const { isDragging, dragHandlers } = useDragDrop({
		onFilesDropped: addImages,
		accept: [...SUPPORTED_IMAGE_MIME_TYPES],
	});

	const placeholderPhrases = useMemo(() => {
		if (language === 'ar') {
			return ['متجر', 'حجوزات', 'لوحة تحكم'];
		}
		return ['store', 'bookings', 'control panel'];
	}, [language]);

	const [currentPlaceholderPhraseIndex, setCurrentPlaceholderPhraseIndex] = useState(0);
	const [currentPlaceholderText, setCurrentPlaceholderText] = useState('');
	const [isPlaceholderTyping, setIsPlaceholderTyping] = useState(true);

	useEffect(() => {
		const currentPhrase = placeholderPhrases[currentPlaceholderPhraseIndex];

		if (isPlaceholderTyping) {
			if (currentPlaceholderText.length < currentPhrase.length) {
				const timeout = setTimeout(() => {
					setCurrentPlaceholderText(currentPhrase.slice(0, currentPlaceholderText.length + 1));
				}, 100);
				return () => clearTimeout(timeout);
			} else {
				const timeout = setTimeout(() => {
					setIsPlaceholderTyping(false);
				}, 2000);
				return () => clearTimeout(timeout);
			}
		} else {
			if (currentPlaceholderText.length > 0) {
				const timeout = setTimeout(() => {
					setCurrentPlaceholderText(currentPlaceholderText.slice(0, -1));
				}, 50);
				return () => clearTimeout(timeout);
			} else {
				setCurrentPlaceholderPhraseIndex((prev) => (prev + 1) % placeholderPhrases.length);
				setIsPlaceholderTyping(true);
			}
		}
	}, [currentPlaceholderText, currentPlaceholderPhraseIndex, isPlaceholderTyping, placeholderPhrases]);

	const handleCreateApp = (query: string, mode: ProjectType) => {
		if (query.length > MAX_AGENT_QUERY_LENGTH) {
			toast.error(
				`Prompt too large (${query.length} characters). Maximum allowed is ${MAX_AGENT_QUERY_LENGTH} characters.`,
			);
			return;
		}

		const encodedQuery = encodeURIComponent(query);
		const encodedMode = encodeURIComponent(mode);
		const imageParam = images.length > 0 ? `&images=${encodeURIComponent(JSON.stringify(images))}` : '';
		const intendedUrl = `/chat/new?query=${encodedQuery}&projectType=${encodedMode}${imageParam}`;

		if (
			!requireAuth({
				requireFullAuth: true,
				actionContext: 'to create applications',
				intendedUrl: intendedUrl,
			})
		) {
			return;
		}

		navigate(intendedUrl);
		clearImages();
	};

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			const scrollHeight = textareaRef.current.scrollHeight;
			const maxHeight = 300;
			textareaRef.current.style.height = Math.min(scrollHeight, maxHeight) + 'px';
		}
	};

	useEffect(() => {
		adjustTextareaHeight();
	}, []);

	const tryExamples = [
		{ key: 'store', icon: ShoppingBag, label: t('hero.try.store') },
		{ key: 'bookings', icon: Calendar, label: t('hero.try.bookings') },
		{ key: 'dashboard', icon: LayoutDashboard, label: t('hero.try.dashboard') },
		{ key: 'blog', icon: FileText, label: t('hero.try.blog') },
		{ key: 'gallery', icon: ImageIcon, label: t('hero.try.gallery') },
		{ key: 'menu', icon: UtensilsCrossed, label: t('hero.try.menu') },
	];

	const handleTryExample = (example: string) => {
		setQuery(example);
		if (textareaRef.current) {
			textareaRef.current.value = example;
			adjustTextareaHeight();
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<LandingHeader />

			{/* Hero Section */}
			<section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center mb-8 sm:mb-12">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
							{t('hero.title')}
						</h1>
						<p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
							{t('hero.subtitle')}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
						<button
							onClick={() => {
								if (!user) {
									// Trigger auth modal
									requireAuth({
										requireFullAuth: true,
										actionContext: 'to create applications',
										intendedUrl: '/',
									});
								} else {
									document.getElementById('hero-input')?.scrollIntoView({ behavior: 'smooth' });
								}
							}}
							className="bg-[#1e3a5f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
						>
							{t('hero.cta')}
							<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
						</button>
						<div
							className={clsx(
								'flex-1 relative bg-white border border-gray-300 rounded-lg p-4 flex items-center',
								isDragging && 'ring-2 ring-[#1e3a5f] ring-offset-2'
							)}
							{...dragHandlers}
							id="hero-input"
						>
							{isDragging && (
								<div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/10 backdrop-blur-sm rounded-lg z-30 pointer-events-none">
									<p className="text-[#1e3a5f] font-medium">Drop images here</p>
								</div>
							)}
							<textarea
								ref={textareaRef}
								value={query}
								onChange={(e) => {
									setQuery(e.target.value);
									adjustTextareaHeight();
								}}
								onInput={adjustTextareaHeight}
								onKeyDown={(e) => {
									if (e.key === 'Enter' && !e.shiftKey) {
										e.preventDefault();
										handleCreateApp(query, projectMode);
									}
								}}
								placeholder={t('hero.inputPlaceholder')}
								className="w-full resize-none outline-none text-gray-800 placeholder:text-gray-400 text-sm sm:text-base min-h-[60px]"
							/>
							<Clock className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
						</div>
					</div>

					{images.length > 0 && (
						<div className="mb-6">
							<ImageAttachmentPreview images={images} onRemove={removeImage} />
						</div>
					)}

					<div className={clsx('flex items-center gap-2 flex-wrap justify-center', isRTL && 'flex-row-reverse')}>
						<span className="text-sm text-gray-600">{t('hero.try')}</span>
						{tryExamples.map((example) => {
							const Icon = example.icon;
							return (
								<button
									key={example.key}
									onClick={() => handleTryExample(example.label)}
									className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-full text-sm text-gray-700 transition-colors"
								>
									<Icon className="h-4 w-4" />
									{example.label}
								</button>
							);
						})}
					</div>
				</div>

				{/* Background circles */}
				<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10" />
				<div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10" />
			</section>

			{/* Stats Section */}
			<section className="py-8 sm:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
						<div className="flex items-center gap-2">
							<Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
							<span className="text-sm sm:text-base text-gray-700">{t('stats.projects')}</span>
						</div>
						<div className="flex items-center gap-2">
							<Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
							<span className="text-sm sm:text-base text-gray-700">{t('stats.countries')}</span>
						</div>
						<div className="flex items-center gap-2">
							<Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
							<span className="text-sm sm:text-base text-gray-700">{t('stats.rating')}</span>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
						{t('testimonials.title')}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
						{/* Testimonial 1 */}
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								))}
							</div>
							<p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
								{t('testimonials.ahmed.quote')}
							</p>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold">
									أ
								</div>
								<div>
									<p className="font-medium text-sm sm:text-base text-gray-900">
										{t('testimonials.ahmed.name')}
									</p>
									<p className="text-xs sm:text-sm text-gray-500">{t('testimonials.ahmed.role')}</p>
								</div>
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								))}
							</div>
							<p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
								{t('testimonials.sara.quote')}
							</p>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold">
									س
								</div>
								<div>
									<p className="font-medium text-sm sm:text-base text-gray-900">
										{t('testimonials.sara.name')}
									</p>
									<p className="text-xs sm:text-sm text-gray-500">{t('testimonials.sara.role')}</p>
								</div>
							</div>
						</div>

						{/* Testimonial 3 */}
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								))}
							</div>
							<p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
								{t('testimonials.mohammed.quote')}
							</p>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold">
									د
								</div>
								<div>
									<p className="font-medium text-sm sm:text-base text-gray-900">
										{t('testimonials.mohammed.name')}
									</p>
									<p className="text-xs sm:text-sm text-gray-500">{t('testimonials.mohammed.role')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							{t('features.title')}
						</h2>
						<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
							{t('features.subtitle')}
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{[
							{ icon: Shield, title: t('features.hosting.title'), desc: t('features.hosting.desc') },
							{ icon: Monitor, title: t('features.responsive.title'), desc: t('features.responsive.desc') },
							{ icon: Zap, title: t('features.speed.title'), desc: t('features.speed.desc') },
							{ icon: Share2, title: t('features.sharing.title'), desc: t('features.sharing.desc') },
							{ icon: Lock, title: t('features.systems.title'), desc: t('features.systems.desc') },
							{ icon: MessageSquare, title: t('features.edit.title'), desc: t('features.edit.desc') },
						].map((feature, idx) => {
							const Icon = feature.icon;
							return (
								<div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
									<Icon className="h-8 w-8 text-[#1e3a5f] mb-4" />
									<h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							{t('pricing.title')}
						</h2>
						<p className="text-base sm:text-lg text-gray-600">{t('pricing.subtitle')}</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
						{/* Free Plan */}
						<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col h-full">
							<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t('pricing.free.title')}</h3>
							<div className="mb-4 flex items-baseline gap-2">
								<span className="text-3xl sm:text-4xl font-bold text-gray-900">0</span>
								<img src={currencyImage} alt="currency" className="h-5 sm:h-6 w-auto object-contain" />
								<span className="text-base sm:text-lg text-gray-600">/ {isRTL ? 'شهر' : 'month'}</span>
							</div>
							<p className="text-sm sm:text-base text-gray-600 mb-6">{t('pricing.free.desc')}</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.free.projects')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.free.subdomain')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.free.ssl')}</span>
								</li>
								<li className="flex items-start gap-2">
									<X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-500">{t('pricing.free.customDomain')}</span>
								</li>
								<li className="flex items-start gap-2">
									<X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-500">{t('pricing.free.branding')}</span>
								</li>
							</ul>
							<button className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base mt-auto">
								{t('pricing.free.cta')}
							</button>
						</div>

						{/* Pro Plan */}
						<div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border-2 border-[#1e3a5f] relative flex flex-col h-full">
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e3a5f] text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
								{t('pricing.pro.popular')}
							</div>
							<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t('pricing.pro.title')}</h3>
							<div className="mb-4 flex items-baseline gap-2">
								<span className="text-3xl sm:text-4xl font-bold text-gray-900">99</span>
								<img src={currencyImage} alt="currency" className="h-5 sm:h-6 w-auto object-contain" />
								<span className="text-base sm:text-lg text-gray-600">/ {isRTL ? 'شهر' : 'month'}</span>
							</div>
							<p className="text-sm sm:text-base text-gray-600 mb-6">{t('pricing.pro.desc')}</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.unlimitedProjects')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.unlimitedDomains')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.removeBranding')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.prioritySupport')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.analytics')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.storage')}</span>
								</li>
							</ul>
							<button className="w-full bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4f7a] transition-colors text-sm sm:text-base mt-auto">
								{t('pricing.pro.cta')}
							</button>
						</div>

						{/* Business Plan */}
						<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col h-full">
							<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t('pricing.business.title')}</h3>
							<div className="mb-4 flex items-baseline gap-2">
								<span className="text-3xl sm:text-4xl font-bold text-gray-900">299</span>
								<img src={currencyImage} alt="currency" className="h-5 sm:h-6 w-auto object-contain" />
								<span className="text-base sm:text-lg text-gray-600">/ {isRTL ? 'شهر' : 'month'}</span>
							</div>
							<p className="text-sm sm:text-base text-gray-600 mb-6">{t('pricing.business.desc')}</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.business.allPro')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.business.unlimitedTeam')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.business.sso')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.business.sla')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.business.manager')}</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm sm:text-base text-gray-700">{t('pricing.business.support')}</span>
								</li>
							</ul>
							<button className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base mt-auto">
								{t('pricing.business.cta')}
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-[#1e3a5f] text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
						{t('cta.title')}
					</h2>
					<p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-90">
						{t('cta.subtitle')}
					</p>
					<button
						onClick={() => {
							if (!user) {
								requireAuth({
									requireFullAuth: true,
									actionContext: 'to create applications',
									intendedUrl: '/',
								});
							} else {
								document.getElementById('hero-input')?.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
					>
						{t('cta.button')}
						<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 py-12 sm:py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 mb-8">
						{/* Brand */}
						<div className="lg:col-span-2">
							<div className="mb-4">
								<img
									src={logoImage}
									alt="Wasfai"
									className="brightness-110 contrast-125"
									style={{ width: '200px', height: '140px' }}
								/>
							</div>
							<p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed max-w-md">
								{t('footer.tagline')}
							</p>
							<div className="flex items-center gap-4">
								<a href="#" className="text-gray-400 hover:text-[#1e3a5f] transition-colors">
									<Instagram className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-[#1e3a5f] transition-colors">
									<Youtube className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-[#1e3a5f] transition-colors">
									<Linkedin className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-[#1e3a5f] transition-colors">
									<Twitter className="h-5 w-5" />
								</a>
							</div>
						</div>

						{/* Product */}
						<div>
							<h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">{t('footer.product')}</h3>
							<ul className="space-y-2 text-sm sm:text-base">
								<li><Link to="/features" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.product.features')}</Link></li>
								<li><Link to="/pricing" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.product.prices')}</Link></li>
								<li><Link to="/templates" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.product.templates')}</Link></li>
								<li><Link to="/integrations" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.product.integrations')}</Link></li>
								<li><Link to="/changelog" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.product.updates')}</Link></li>
								<li><Link to="/performance" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.product.performance')}</Link></li>
							</ul>
						</div>

						{/* Company */}
						<div>
							<h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">{t('footer.company')}</h3>
							<ul className="space-y-2 text-sm sm:text-base">
								<li><Link to="/about" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.company.about')}</Link></li>
								<li><Link to="/careers" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.company.jobs')}</Link></li>
								<li><Link to="/press" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.company.press')}</Link></li>
								<li><Link to="/partners" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.company.partners')}</Link></li>
								<li><Link to="/contact" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.company.contact')}</Link></li>
								<li><Link to="/blog" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.company.blog')}</Link></li>
							</ul>
						</div>

						{/* Resources */}
						<div>
							<h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">{t('footer.resources')}</h3>
							<ul className="space-y-2 text-sm sm:text-base">
								<li><Link to="/help" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.resources.help')}</Link></li>
								<li><Link to="/docs" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.resources.docs')}</Link></li>
								<li><Link to="/articles" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.resources.articles')}</Link></li>
								<li><Link to="/videos" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.resources.videos')}</Link></li>
								<li><Link to="/faq" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.resources.faq')}</Link></li>
								<li><Link to="/community" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.resources.community')}</Link></li>
							</ul>
						</div>

						{/* Account */}
						<div>
							<h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">{t('footer.account')}</h3>
							<ul className="space-y-2 text-sm sm:text-base">
								<li><Link to="/dashboard" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.account.dashboard')}</Link></li>
								<li><Link to="/profile" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.account.profile')}</Link></li>
								<li><Link to="/settings" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.account.settings')}</Link></li>
								<li><Link to="/apps" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.account.projects')}</Link></li>
								<li><Link to="/billing" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">{t('footer.account.billing')}</Link></li>
								<li><Link to="/pricing" className="text-[#1e3a5f] hover:underline font-medium">{t('footer.account.upgrade')}</Link></li>
							</ul>
						</div>
					</div>

					{/* Bottom bar */}
					<div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className={clsx('flex items-center gap-4', isRTL && 'flex-row-reverse')}>
							<div className="flex items-center gap-2 text-sm text-gray-600">
								<MapPin className="h-4 w-4" />
								<span>{t('footer.region')}</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-gray-600">
								<Globe className="h-4 w-4" />
								<span>{language === 'ar' ? 'العربية' : 'English'}</span>
							</div>
						</div>
						<div className="text-center sm:text-right">
							<p className="text-sm text-gray-600 mb-2">{t('footer.copyright')}</p>
							<div className={clsx('flex items-center gap-2 text-xs text-gray-500 flex-wrap justify-center', isRTL && 'flex-row-reverse')}>
								<Link to="/legal/privacy" className="hover:text-[#1e3a5f] transition-colors">{t('footer.privacy')}</Link>
								<span>•</span>
								<Link to="/legal/terms" className="hover:text-[#1e3a5f] transition-colors">{t('footer.terms')}</Link>
								<span>•</span>
								<Link to="/legal/cookies" className="hover:text-[#1e3a5f] transition-colors">{t('footer.cookies')}</Link>
								<span>•</span>
								<Link to="/legal/gdpr" className="hover:text-[#1e3a5f] transition-colors">{t('footer.gdpr')}</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

