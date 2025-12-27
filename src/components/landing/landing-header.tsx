import { useState } from 'react';
import { Link } from 'react-router';
import { Globe, ChevronDown, Plus, ArrowRight } from 'lucide-react';
import logoImage from '@/assets/provider-logos/logo.png';
import { useLanguage } from '@/contexts/language-context';
import { useAuth } from '@/contexts/auth-context';
import { AuthButton } from '../auth/auth-button';
import clsx from 'clsx';

export function LandingHeader() {
	const { language, setLanguage, t } = useLanguage();
	const { user } = useAuth();
	const [showLangMenu, setShowLangMenu] = useState(false);

	const isRTL = language === 'ar';

	return (
		<header className="sticky top-0 z-50 bg-[#1e3a5f] text-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Left section */}
					<div className="flex items-center gap-4 sm:gap-6">
						<Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
							<img
								src={logoImage}
								alt="Wasfai"
								className="h-8 w-8 sm:h-10 sm:w-10 brightness-110 contrast-125"
							/>
							<span className="text-lg sm:text-xl font-semibold">Wasfai</span>
							<Plus className="h-4 w-4 sm:h-5 sm:w-5" />
						</Link>
						
						{/* Navigation - hidden on mobile */}
						<nav className="hidden md:flex items-center gap-4 lg:gap-6">
							<Link
								to="/"
								className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-sm"
							>
								{t('header.home')}
							</Link>
							<Link
								to="#features"
								className="px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
							>
								{t('header.features')}
							</Link>
							<Link
								to="#pricing"
								className="px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
							>
								{t('header.pricing')}
							</Link>
							<Link
								to="/discover"
								className="px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
							>
								{t('header.projects')}
							</Link>
							<Link
								to="#"
								className="px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
							>
								{t('header.blog')}
							</Link>
						</nav>
					</div>

					{/* Right section */}
					<div className="flex items-center gap-2 sm:gap-4">
						{/* Language selector */}
						<div className="relative">
							<button
								onClick={() => setShowLangMenu(!showLangMenu)}
								className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
							>
								<Globe className="h-4 w-4" />
								<span>{language === 'ar' ? 'العربية' : 'English'}</span>
								<ChevronDown className="h-3 w-3" />
							</button>
							{showLangMenu && (
								<>
									<div
										className="fixed inset-0 z-40"
										onClick={() => setShowLangMenu(false)}
									/>
									<div
										className={clsx(
											'absolute z-50 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden',
											isRTL ? 'left-0' : 'right-0'
										)}
									>
										<button
											onClick={() => {
												setLanguage('ar');
												setShowLangMenu(false);
											}}
											className={clsx(
												'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors',
												language === 'ar' && 'bg-gray-50 font-medium'
											)}
										>
											العربية
										</button>
										<button
											onClick={() => {
												setLanguage('en');
												setShowLangMenu(false);
											}}
											className={clsx(
												'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors',
												language === 'en' && 'bg-gray-50 font-medium'
											)}
										>
											English
										</button>
									</div>
								</>
							)}
						</div>

						{/* CTA buttons */}
						{!user && (
							<>
								<Link
									to="#"
									className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
								>
									{t('header.startNow')}
									<ArrowRight className="h-4 w-4" />
								</Link>
								<Link
									to="#"
									className="px-3 sm:px-4 py-1.5 rounded-md hover:bg-white/10 transition-colors text-sm"
								>
									{t('header.login')}
								</Link>
							</>
						)}
						
						{user && <AuthButton />}
					</div>
				</div>
			</div>
		</header>
	);
}

