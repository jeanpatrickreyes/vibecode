import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
	ar: {
		// Header
		'header.startNow': 'ابدأ الآن',
		'header.login': 'دخول',
		'header.home': 'الرئيسية',
		'header.features': 'الميزات',
		'header.pricing': 'التسعير',
		'header.projects': 'المشاريع',
		'header.blog': 'المدونة',
		'header.language': 'العربية',
		
		// Hero
		'hero.title': 'عالمك الرقمي يبدأ هنا',
		'hero.subtitle': 'اكتب فكرتك بالعربي، واحصل على موقع أو تطبيق كامل خلال دقائق. بدون أكواد، بدون تعقيد، بدون الحاجة للغة الإنجليزية.',
		'hero.cta': 'ابدأ الآن - مجاناً',
		'hero.inputPlaceholder': 'صف فكرتك... (متجر، حجوزات، لوحة تحكم)',
		'hero.try': 'جرب:',
		'hero.try.store': 'متجر',
		'hero.try.bookings': 'حجوزات',
		'hero.try.dashboard': 'لوحة تحكم',
		'hero.try.blog': 'مدونة',
		'hero.try.gallery': 'معرض',
		'hero.try.menu': 'قائمة طعام',
		
		// Stats
		'stats.projects': 'أكثر من 50,000 مشروع منشور',
		'stats.countries': 'يستخدمه رواد أعمال في 15 دولة',
		'stats.rating': 'تقييم 4.8/5 من المستخدمين',
		
		// Testimonials
		'testimonials.title': 'ماذا يقول عملاؤنا',
		'testimonials.ahmed.quote': 'فكرة عيني في دقائق صار عندي موقع كامل. جربت أدوات عالمية بس ما قدرت أتواصل معاها. Wasfai فهمتني من أول كلمة.',
		'testimonials.ahmed.name': 'أحمد، الرياض',
		'testimonials.ahmed.role': 'مؤسس ناشئ',
		'testimonials.sara.quote': 'كطالب ما أعرف برمجة، قدرت أصنع portfolio يعرض أعمالي بطريقة احترافية. كل friends سألوني كيف سويته.',
		'testimonials.sara.name': 'سارة، القاهرة',
		'testimonials.sara.role': 'مصممة جرافيك',
		'testimonials.mohammed.quote': 'متلي اللي عنده فكرة وما يعرف يترجمها لكود، Wasfai نعمة. سويت تطبيق حجوزات لعيادتي خلال ساعة فقط.',
		'testimonials.mohammed.name': 'د. محمد، دبي',
		'testimonials.mohammed.role': 'طبيب أسنان',
		
		// Features
		'features.title': 'كل ما تحتاجه',
		'features.subtitle': 'ميزات متكاملة لتصميم ونشر موقعك في دقائق',
		'features.hosting.title': 'استضافة مجانية',
		'features.hosting.desc': 'نطاق فرعي و SSL وشهادة أمان مضمنة مجاناً',
		'features.responsive.title': 'متجاوب 100%',
		'features.responsive.desc': 'موقعك يعمل بشكل مثالي على الهاتف والكمبيوتر والتابلت',
		'features.speed.title': 'سرعة فائقة',
		'features.speed.desc': 'أنشئ موقعك في أقل من 5 دقائق من الفكرة إلى النشر live',
		'features.sharing.title': 'مشاركة سهلة',
		'features.sharing.desc': 'شارك موقعك على واتساب ومنصات التواصل فوراً',
		'features.systems.title': 'أنظمة جاهزة',
		'features.systems.desc': 'حجوزات، تسجيل دخول بوابات دفع، ولوحات تحكم',
		'features.edit.title': 'تعديل بالسؤال',
		'features.edit.desc': 'غير أي شيء في موقعك بسؤال بسيط بالعربي',
		
		// Pricing
		'pricing.title': 'باقات تناسب كل ميزانية',
		'pricing.subtitle': 'ابدأ مجاناً، وترق عندما تحتاج المزيد',
		'pricing.free.title': 'المجانية',
		'pricing.free.price': '0 د.إ / شهر',
		'pricing.free.desc': 'مثالية للبدء والتجربة',
		'pricing.free.projects': 'مشروعان فقط',
		'pricing.free.subdomain': 'نطاق فرعي من المنصة',
		'pricing.free.ssl': 'SSL مجاني',
		'pricing.free.customDomain': 'نطاق خاص',
		'pricing.free.branding': 'إزالة العلامة التجارية',
		'pricing.free.cta': 'ابدأ مجاناً',
		'pricing.pro.title': 'Pro',
		'pricing.pro.price': '49 د.إ / شهر',
		'pricing.pro.desc': 'لرواد الأعمال الجادين',
		'pricing.pro.popular': 'الأكثر شعبية',
		'pricing.pro.unlimitedProjects': 'مشاريع غير محدودة',
		'pricing.pro.unlimitedDomains': 'نطاقات خاصة غير محدودة',
		'pricing.pro.removeBranding': 'إزالة العلامة التجارية',
		'pricing.pro.prioritySupport': 'أولوية في الدعم',
		'pricing.pro.analytics': 'تحليلات متقدمة',
		'pricing.pro.storage': 'مساحة تخزين أكبر',
		'pricing.pro.cta': 'جرب Pro مجاناً',
		'pricing.business.title': 'Business',
		'pricing.business.price': '299 د.إ / شهر',
		'pricing.business.desc': 'للفرق والمؤسسات',
		'pricing.business.allPro': 'كل ميزات Pro',
		'pricing.business.unlimitedTeam': 'فريق غير محدود',
		'pricing.business.sso': 'SSO والمصادقة',
		'pricing.business.sla': 'SLA مضمون',
		'pricing.business.manager': 'مدير حساب مخصص',
		'pricing.business.support': 'دعم على مدار الساعة',
		'pricing.business.cta': 'تواصل معنا',
		
		// CTA
		'cta.title': 'لا تنتظر أكثر من ذلك',
		'cta.subtitle': 'الفكرة التي في ذهنك تستحق أن ترى النور. ابدأ الآن، ومجاني بالكامل.',
		'cta.button': 'أنشئ حسابك المجاني الآن',
		
		// Footer
		'footer.tagline': 'منصة بناء مواقع وتطبيقات بالعربي بدون أكواد اكتب فكرتك، واحصل على موقع منشور خلال دقائق.',
		'footer.product': 'المنتج',
		'footer.company': 'الشركة',
		'footer.resources': 'الموارد',
		'footer.account': 'الحساب',
		'footer.product.features': 'الميزات',
		'footer.product.prices': 'الأسعار',
		'footer.product.templates': 'القوالب',
		'footer.product.integrations': 'التكاملات',
		'footer.product.updates': 'التحديثات',
		'footer.product.performance': 'الأداء',
		'footer.company.about': 'من نحن',
		'footer.company.jobs': 'الوظائف',
		'footer.company.press': 'الصحفية',
		'footer.company.partners': 'الشركاء',
		'footer.company.contact': 'اتصل بنا',
		'footer.company.blog': 'المدونة',
		'footer.resources.help': 'المساعدة',
		'footer.resources.docs': 'المستندات',
		'footer.resources.articles': 'المقالات',
		'footer.resources.videos': 'الفيديوهات',
		'footer.resources.faq': 'الأسئلة الشائعة',
		'footer.resources.community': 'المجتمع',
		'footer.account.dashboard': 'لوحة التحكم',
		'footer.account.profile': 'الملف الشخصي',
		'footer.account.settings': 'الإعدادات',
		'footer.account.projects': 'المشاريع',
		'footer.account.billing': 'الفوترة',
		'footer.account.upgrade': 'ترقية إلى Pro',
		'footer.region': 'Middle East',
		'footer.copyright': '© 2025 Wasfai. جميع الحقوق محفوظة.',
		'footer.privacy': 'سياسة الخصوصية',
		'footer.terms': 'شروط الخدمة',
		'footer.cookies': 'ملفات تعريف الارتباط',
		'footer.gdpr': 'حقوق GDPR',
		
		// Auth
		'auth.welcome': 'مرحباً بعودتك',
		'auth.welcomeBack': 'مرحباً بعودتك',
		'auth.createAccount': 'إنشاء حساب',
		'auth.signIn': 'تسجيل الدخول',
		'auth.signUp': 'إنشاء حساب',
		'auth.signInRequired': 'تسجيل الدخول مطلوب',
		'auth.authRequired': 'المصادقة مطلوبة لهذا الإجراء',
		'auth.joinToStart': 'انضم للبدء في بناء تطبيقات رائعة',
		'auth.signInToSave': 'سجل الدخول لحفظ تطبيقاتك والوصول إلى مساحة العمل الخاصة بك',
		'auth.continueWith': 'أو تابع باستخدام',
		'auth.continueWithGitHub': 'المتابعة مع GitHub',
		'auth.continueWithGoogle': 'المتابعة مع Google',
		'auth.email': 'البريد الإلكتروني',
		'auth.emailPlaceholder': 'عنوان البريد الإلكتروني',
		'auth.password': 'كلمة المرور',
		'auth.passwordPlaceholder': 'كلمة المرور',
		'auth.confirmPassword': 'تأكيد كلمة المرور',
		'auth.confirmPasswordPlaceholder': 'تأكيد كلمة المرور',
		'auth.fullName': 'الاسم الكامل',
		'auth.fullNamePlaceholder': 'الاسم الكامل',
		'auth.signingIn': 'جاري تسجيل الدخول...',
		'auth.creatingAccount': 'جاري إنشاء الحساب...',
		'auth.noAccount': 'ليس لديك حساب؟ سجل الآن',
		'auth.haveAccount': 'لديك حساب بالفعل؟ سجل الدخول',
		'auth.agreeToTerms': 'بالمتابعة، أنت توافق على',
		'auth.termsOfService': 'شروط الخدمة',
		'auth.privacyPolicy': 'سياسة الخصوصية',
		'auth.and': 'و',
		'auth.emailRequired': 'البريد الإلكتروني مطلوب',
		'auth.emailInvalid': 'تنسيق البريد الإلكتروني غير صحيح',
		'auth.passwordRequired': 'كلمة المرور مطلوبة',
		'auth.passwordMinLength': 'يجب أن تكون كلمة المرور 8 أحرف على الأقل',
		'auth.nameRequired': 'الاسم مطلوب',
		'auth.nameMinLength': 'يجب أن يكون الاسم حرفين على الأقل',
		'auth.passwordsDontMatch': 'كلمات المرور غير متطابقة',
	},
	en: {
		// Header
		'header.startNow': 'Start Now',
		'header.login': 'Login',
		'header.home': 'Home',
		'header.features': 'Features',
		'header.pricing': 'Pricing',
		'header.projects': 'Projects',
		'header.blog': 'Blog',
		'header.language': 'English',
		
		// Hero
		'hero.title': 'Your digital world starts here',
		'hero.subtitle': 'Write your idea in Arabic, and get a complete website or application in minutes. Without code, without complexity, without the need for the English language.',
		'hero.cta': 'Start Now - Free',
		'hero.inputPlaceholder': 'Describe your idea... (store, bookings, control panel)',
		'hero.try': 'Try:',
		'hero.try.store': 'Store',
		'hero.try.bookings': 'Bookings',
		'hero.try.dashboard': 'Dashboard',
		'hero.try.blog': 'Blog',
		'hero.try.gallery': 'Gallery',
		'hero.try.menu': 'Food Menu',
		
		// Stats
		'stats.projects': 'More than 50,000 published projects',
		'stats.countries': 'Used by entrepreneurs in 15 countries',
		'stats.rating': '4.8/5 rating from users',
		
		// Testimonials
		'testimonials.title': 'What our customers say',
		'testimonials.ahmed.quote': 'In a blink of an eye, I had a complete website. I tried global tools but couldn\'t communicate with them. Wasfai understood me from the first word.',
		'testimonials.ahmed.name': 'Ahmed, Riyadh',
		'testimonials.ahmed.role': 'Startup Founder',
		'testimonials.sara.quote': 'As a student who doesn\'t know programming, I was able to create a portfolio that showcases my work professionally. All my friends asked me how I did it.',
		'testimonials.sara.name': 'Sara, Cairo',
		'testimonials.sara.role': 'Graphic Designer',
		'testimonials.mohammed.quote': 'For someone like me who has an idea but doesn\'t know how to translate it into code, Wasfai is a blessing. I created a booking application for my clinic in just one hour.',
		'testimonials.mohammed.name': 'Dr. Mohammed, Dubai',
		'testimonials.mohammed.role': 'Dentist',
		
		// Features
		'features.title': 'Everything you need',
		'features.subtitle': 'Integrated features to design and publish your website in minutes',
		'features.hosting.title': 'Free Hosting',
		'features.hosting.desc': 'Free subdomain, SSL, and built-in security certificate',
		'features.responsive.title': '100% Responsive',
		'features.responsive.desc': 'Your website works perfectly on phone, computer, and tablet',
		'features.speed.title': 'Super Speed',
		'features.speed.desc': 'Create your website in less than 5 minutes from idea to live publishing',
		'features.sharing.title': 'Easy Sharing',
		'features.sharing.desc': 'Share your website on WhatsApp and social media platforms instantly',
		'features.systems.title': 'Ready-made Systems',
		'features.systems.desc': 'Bookings, login, payment gateways, and control panels',
		'features.edit.title': 'Edit by Question',
		'features.edit.desc': 'Change anything on your website with a simple question in Arabic',
		
		// Pricing
		'pricing.title': 'Packages to suit every budget',
		'pricing.subtitle': 'Start for free, and upgrade when you need more',
		'pricing.free.title': 'Free',
		'pricing.free.price': '0 S.R. / month',
		'pricing.free.desc': 'Ideal for starting and experimenting',
		'pricing.free.projects': 'Only two projects',
		'pricing.free.subdomain': 'Subdomain from the platform',
		'pricing.free.ssl': 'Free SSL',
		'pricing.free.customDomain': 'Custom domain',
		'pricing.free.branding': 'Remove branding',
		'pricing.free.cta': 'Start for free',
		'pricing.pro.title': 'Pro',
		'pricing.pro.price': '99 S.R. / month',
		'pricing.pro.desc': 'For serious entrepreneurs',
		'pricing.pro.popular': 'Most Popular',
		'pricing.pro.unlimitedProjects': 'Unlimited projects',
		'pricing.pro.unlimitedDomains': 'Unlimited custom domains',
		'pricing.pro.removeBranding': 'Remove branding',
		'pricing.pro.prioritySupport': 'Priority support',
		'pricing.pro.analytics': 'Advanced analytics',
		'pricing.pro.storage': 'More storage space',
		'pricing.pro.cta': 'Try Pro for free',
		'pricing.business.title': 'Business',
		'pricing.business.price': '299 S.R. / month',
		'pricing.business.desc': 'For teams and organizations',
		'pricing.business.allPro': 'All Pro features',
		'pricing.business.unlimitedTeam': 'Unlimited team',
		'pricing.business.sso': 'SSO and authentication',
		'pricing.business.sla': 'Guaranteed SLA',
		'pricing.business.manager': 'Dedicated account manager',
		'pricing.business.support': '24/7 support',
		'pricing.business.cta': 'Contact us',
		
		// CTA
		'cta.title': 'Don\'t wait any longer',
		'cta.subtitle': 'The idea in your mind deserves to see the light. Start now, and it\'s completely free.',
		'cta.button': 'Create your free account now',
		
		// Footer
		'footer.tagline': 'Platform for building websites and applications in Arabic without code. Write your idea, and get a published site in minutes.',
		'footer.product': 'Product',
		'footer.company': 'Company',
		'footer.resources': 'Resources',
		'footer.account': 'Account',
		'footer.product.features': 'Features',
		'footer.product.prices': 'Prices',
		'footer.product.templates': 'Templates',
		'footer.product.integrations': 'Integrations',
		'footer.product.updates': 'Updates',
		'footer.product.performance': 'Performance',
		'footer.company.about': 'About Us',
		'footer.company.jobs': 'Jobs',
		'footer.company.press': 'Press',
		'footer.company.partners': 'Partners',
		'footer.company.contact': 'Contact Us',
		'footer.company.blog': 'Blog',
		'footer.resources.help': 'Help',
		'footer.resources.docs': 'Documentation',
		'footer.resources.articles': 'Articles',
		'footer.resources.videos': 'Videos',
		'footer.resources.faq': 'FAQ',
		'footer.resources.community': 'Community',
		'footer.account.dashboard': 'Dashboard',
		'footer.account.profile': 'Profile',
		'footer.account.settings': 'Settings',
		'footer.account.projects': 'Projects',
		'footer.account.billing': 'Billing',
		'footer.account.upgrade': 'Upgrade to Pro',
		'footer.region': 'Middle East',
		'footer.copyright': '© 2025 Wasfai. All rights reserved.',
		'footer.privacy': 'Privacy Policy',
		'footer.terms': 'Terms of Service',
		'footer.cookies': 'Cookie Policy',
		'footer.gdpr': 'GDPR Rights',
		
		// Auth
		'auth.welcome': 'Welcome',
		'auth.welcomeBack': 'Welcome back',
		'auth.createAccount': 'Create an account',
		'auth.signIn': 'Sign in',
		'auth.signUp': 'Sign up',
		'auth.signInRequired': 'Sign in required',
		'auth.authRequired': 'Authentication required for this action',
		'auth.joinToStart': 'Join to start building amazing applications',
		'auth.signInToSave': 'Sign in to save your apps and access your workspace',
		'auth.continueWith': 'Or continue with',
		'auth.continueWithGitHub': 'Continue with GitHub',
		'auth.continueWithGoogle': 'Continue with Google',
		'auth.email': 'Email',
		'auth.emailPlaceholder': 'Email address',
		'auth.password': 'Password',
		'auth.passwordPlaceholder': 'Password',
		'auth.confirmPassword': 'Confirm password',
		'auth.confirmPasswordPlaceholder': 'Confirm password',
		'auth.fullName': 'Full name',
		'auth.fullNamePlaceholder': 'Full name',
		'auth.signingIn': 'Signing in...',
		'auth.creatingAccount': 'Creating account...',
		'auth.noAccount': "Don't have an account? Sign up",
		'auth.haveAccount': 'Already have an account? Sign in',
		'auth.agreeToTerms': 'By continuing, you agree to our',
		'auth.termsOfService': 'Terms of Service',
		'auth.privacyPolicy': 'Privacy Policy',
		'auth.and': 'and',
		'auth.emailRequired': 'Email is required',
		'auth.emailInvalid': 'Invalid email format',
		'auth.passwordRequired': 'Password is required',
		'auth.passwordMinLength': 'Password must be at least 8 characters',
		'auth.nameRequired': 'Name is required',
		'auth.nameMinLength': 'Name must be at least 2 characters',
		'auth.passwordsDontMatch': 'Passwords do not match',
	},
};

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>(() => {
		const saved = localStorage.getItem('language');
		return (saved === 'ar' || saved === 'en') ? saved : 'ar';
	});

	useEffect(() => {
		localStorage.setItem('language', language);
		document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
		document.documentElement.lang = language;
	}, [language]);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
	};

	const t = (key: string): string => {
		return translations[language][key] || key;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}

