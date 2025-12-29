import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { LandingHeader } from '@/components/landing/landing-header';
import clsx from 'clsx';

interface PageLayoutProps {
	children: ReactNode;
	className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
	const { language } = useLanguage();
	const isRTL = language === 'ar';

	return (
		<div className={clsx('min-h-screen bg-gray-50', isRTL && 'rtl')} dir={isRTL ? 'rtl' : 'ltr'}>
			<LandingHeader />
			<main className={clsx('container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16', className)}>
				{children}
			</main>
		</div>
	);
}

