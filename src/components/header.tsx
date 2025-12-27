import React from 'react';
import clsx from 'clsx';
import logoImage from '@/assets/provider-logos/logo.png';
import { Link } from 'react-router';

export function Header({
	className,
	children,
}: React.ComponentProps<'header'>) {
	return (
		<header
			className={clsx(
				'h-13 shrink-0 w-full px-4 border-b flex items-center',
				className,
			)}
		>
			<h1 className="flex items-center gap-2 mx-4">
				<Link to="/">
					<img
						src={logoImage}
						alt="Logo"
						className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 brightness-110 contrast-125 drop-shadow-sm transition-all duration-300"
						aria-label="Logo"
					/>
				</Link>
			</h1>
			<div className="flex-1"></div>
			<div className="flex items-center gap-4">
				{children}
			</div>
		</header>
	);
}
