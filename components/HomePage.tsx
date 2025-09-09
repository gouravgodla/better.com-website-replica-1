"use client";
import React from 'react';
import Link from 'next/link';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-better-green" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 006.291 6.291l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const FeatureCard: React.FC<{ href: string; icon: React.ReactNode; title: string }> = ({ href, icon, title }) => (
    <Link href={href} className="block w-full text-left p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md hover:border-better-green transition-all duration-300">
        <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
                {icon}
            </div>
            <span className="text-lg font-medium text-better-text dark:text-gray-100">{title}</span>
        </div>
    </Link>
);

const UnlockFeature: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center text-better-text dark:text-gray-200">
        <div className="flex-shrink-0 mr-3">
            {icon}
        </div>
        <span>{text}</span>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
             <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex justify-end items-center">
                         <div className="flex items-center text-sm">
                             <PhoneIcon/>
                             <span className="dark:text-gray-300">Need help? Call 415-523-8837</span>
                         </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-2xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
                 <div className="mx-auto h-16 w-16 bg-better-green-light dark:bg-better-green/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-better-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                 </div>
                <h1 className="mt-8 text-4xl font-bold text-better-text dark:text-white sm:text-5xl">Hi, I'm Betsy!</h1>
                <h2 className="mt-2 text-4xl font-bold text-better-text dark:text-white sm:text-5xl">What can I help you with?</h2>

                <div className="mt-12 space-y-4">
                    <FeatureCard href="/mortgage-calculator" icon={<svg className="h-8 w-8 text-better-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} title="Buying a home" />
                    <FeatureCard href="/mortgage-calculator" icon={<svg className="h-8 w-8 text-better-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M5.5 9.5A7 7 0 0012 16a7 7 0 007-7 7 7 0 00-7-7h-1.5" /></svg>} title="Refinancing my mortgage" />
                    <FeatureCard href="/mortgage-calculator" icon={<svg className="h-8 w-8 text-better-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Get cash from my home" />
                </div>
                
                <div className="mt-16 flex justify-center divide-x divide-gray-300 dark:divide-gray-600">
                    <div className="px-8">
                        <p className="text-4xl font-bold text-better-text dark:text-white">$100B</p>
                        <p className="text-sm text-better-text-secondary dark:text-gray-400">home loans funded entirely online</p>
                    </div>
                     <div className="px-8">
                        <p className="text-4xl font-bold text-better-text dark:text-white">400K</p>
                        <p className="text-sm text-better-text-secondary dark:text-gray-400">Customers who chose a Better Mortgage</p>
                    </div>
                </div>

                <div className="mt-16 p-8 bg-better-green-light dark:bg-better-green/20 rounded-lg">
                    <p className="text-better-text-secondary dark:text-gray-300">After a few questions, you'll unlock:</p>
                    <div className="mt-6 space-y-4 max-w-xs mx-auto text-left">
                        <UnlockFeature icon={<svg className="h-6 w-6 text-better-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>} text="Custom mortgage rates" />
                        <UnlockFeature icon={<svg className="h-6 w-6 text-better-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>} text="Exclusive offers" />
                        <UnlockFeature icon={<svg className="h-6 w-6 text-better-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} text="A personalized dashboard" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;