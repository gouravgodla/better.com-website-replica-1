"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const BetterLogo: React.FC = () => (
  <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.64 5.232C11.64 5.232 12.012 4.092 13.56 4.092C15.108 4.092 16.716 5.028 16.716 7.428V12.9H12.636V7.788C12.636 6.852 12.18 6.54 11.64 6.54C11.1 6.54 10.644 6.852 10.644 7.788V12.9H6.564V7.428C6.564 5.028 8.172 4.092 9.72 4.092C11.268 4.092 11.64 5.232 11.64 5.232ZM26.084 10.164C26.084 7.5 24.324 6.36 21.924 6.36H18.776V12.9H22.124C24.596 12.9 26.084 11.82 26.084 10.164ZM22.06 11.532H20.756V7.716H21.924C23.064 7.716 23.948 8.256 23.948 10.056C23.948 11.136 23.204 11.532 22.06 11.532ZM36.012 8.796C36.012 7.044 35.196 6.36 33.78 6.36C32.364 6.36 31.548 7.044 31.548 8.796C31.548 10.548 32.364 11.232 33.78 11.232C35.196 11.232 36.012 10.548 36.012 8.796ZM33.78 12.9C31.188 12.9 29.58 11.412 29.58 8.796C29.58 6.18 31.188 4.692 33.78 4.692C36.372 4.692 37.98 6.18 37.98 8.796C37.98 11.412 36.372 12.9 33.78 12.9ZM47.288 12.9V4.836H45.308L42.212 8.856V4.836H40.232V12.9H42.212L45.308 8.916V12.9H47.288ZM49.492 4.836H51.472V12.9H49.492V4.836ZM53.644 4.836H55.624V11.532H59.564V12.9H53.644V4.836ZM0 19.332C0 16.596 2.22 14.376 4.956 14.376C6.564 14.376 7.812 15.06 8.556 16.092L7.332 17.208C6.888 16.62 6.072 16.032 4.956 16.032C3.348 16.032 2.044 17.448 2.044 19.332C2.044 21.216 3.348 22.632 4.956 22.632C6.072 22.632 6.888 22.044 7.332 21.456L8.556 22.572C7.812 23.604 6.564 24.288 4.956 24.288C2.22 24.288 0 22.068 0 19.332ZM18.776 14.52H12.636V24.144H18.776C23.636 24.144 26.084 21.924 26.084 19.332C26.084 16.74 23.636 14.52 18.776 14.52ZM18.84 22.488H14.616V16.176H18.84C21.836 16.176 24.056 17.4 24.056 19.332C24.056 21.264 21.836 22.488 18.84 22.488ZM36.012 18.108C36.012 16.356 35.196 15.672 33.78 15.672C32.364 15.672 31.548 16.356 31.548 18.108C31.548 19.86 32.364 20.544 33.78 20.544C35.196 20.544 36.012 19.86 36.012 18.108ZM33.78 22.212C31.188 22.212 29.58 20.724 29.58 18.108C29.58 15.492 31.188 14.004 33.78 14.004C36.372 14.004 37.98 15.492 37.98 18.108C37.98 20.724 36.372 22.212 33.78 22.212ZM47.288 22.212V14.148H45.308L42.212 18.168V14.148H40.232V22.212H42.212L45.308 18.228V22.212H47.288ZM49.492 14.148H51.472V22.212H49.492V14.148ZM53.644 14.148H55.624V20.844H59.564V22.212H53.644V14.148ZM61.764 14.148H63.744V22.212H61.764V14.148ZM73.712 14.148H70.784L68.252 18.6L65.72 14.148H62.792L67.016 20.844V22.212H69.548V20.844L73.712 14.148ZM75.916 14.148H77.896V20.844H81.836V22.212H75.916V14.148Z" className="fill-current text-better-text dark:text-gray-100"/>
  </svg>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/mortgage-calculator", label: "Buy" },
        { href: "/mortgage-calculator", label: "Refinance" },
        { href: "/ai-powered", label: "AI Powered" },
        { href: "/about-us", label: "About Us" },
    ];

    const activeLinkClass = "text-better-green";
    const inactiveLinkClass = "text-better-text dark:text-gray-300 hover:text-better-green dark:hover:text-better-green transition-colors";

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                           <BetterLogo />
                        </Link>
                        <nav className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.label}
                                        href={link.href}
                                        className={`${pathname === link.href ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-4">
                           <a href="#" className="text-better-text dark:text-gray-300 hover:text-better-green dark:hover:text-better-green px-3 py-2 rounded-md text-sm font-medium">Sign in</a>
                           <ThemeToggle />
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <Link 
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`${pathname === link.href ? 'bg-better-green text-white' : 'text-better-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="px-2 space-y-2">
                           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-better-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Sign in</a>
                           <div className="px-3">
                             <ThemeToggle />
                           </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;