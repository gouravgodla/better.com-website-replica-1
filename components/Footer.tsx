
import React from 'react';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    const linkSections = [
        {
            title: 'Resources',
            links: ['Mortgage calculator', 'Affordability calculator', 'Amortization calculator', 'Refinance calculator', 'Down payment calculator', 'How much house can I afford', 'First-time homebuyer guide', 'Home equity', 'Closing costs calculator', 'Home inspection']
        },
        {
            title: 'Company',
            links: ['About us', 'Careers', 'Press', 'Blog', 'Investor Relations', 'Partner With Us', 'Affiliated Business Arrangement disclosure']
        },
        {
            title: 'Contact Us',
            links: ['Help center', 'Contact us', '123-456-7890', '(8AM-8PM ET)']
        },
        {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Use', 'NMLS Consumer Access', 'Licensing', 'Accessibility']
        }
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                         <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.64 5.232C11.64 5.232 12.012 4.092 13.56 4.092C15.108 4.092 16.716 5.028 16.716 7.428V12.9H12.636V7.788C12.636 6.852 12.18 6.54 11.64 6.54C11.1 6.54 10.644 6.852 10.644 7.788V12.9H6.564V7.428C6.564 5.028 8.172 4.092 9.72 4.092C11.268 4.092 11.64 5.232 11.64 5.232ZM26.084 10.164C26.084 7.5 24.324 6.36 21.924 6.36H18.776V12.9H22.124C24.596 12.9 26.084 11.82 26.084 10.164ZM22.06 11.532H20.756V7.716H21.924C23.064 7.716 23.948 8.256 23.948 10.056C23.948 11.136 23.204 11.532 22.06 11.532ZM36.012 8.796C36.012 7.044 35.196 6.36 33.78 6.36C32.364 6.36 31.548 7.044 31.548 8.796C31.548 10.548 32.364 11.232 33.78 11.232C35.196 11.232 36.012 10.548 36.012 8.796ZM33.78 12.9C31.188 12.9 29.58 11.412 29.58 8.796C29.58 6.18 31.188 4.692 33.78 4.692C36.372 4.692 37.98 6.18 37.98 8.796C37.98 11.412 36.372 12.9 33.78 12.9ZM47.288 12.9V4.836H45.308L42.212 8.856V4.836H40.232V12.9H42.212L45.308 8.916V12.9H47.288ZM49.492 4.836H51.472V12.9H49.492V4.836ZM53.644 4.836H55.624V11.532H59.564V12.9H53.644V4.836ZM0 19.332C0 16.596 2.22 14.376 4.956 14.376C6.564 14.376 7.812 15.06 8.556 16.092L7.332 17.208C6.888 16.62 6.072 16.032 4.956 16.032C3.348 16.032 2.044 17.448 2.044 19.332C2.044 21.216 3.348 22.632 4.956 22.632C6.072 22.632 6.888 22.044 7.332 21.456L8.556 22.572C7.812 23.604 6.564 24.288 4.956 24.288C2.22 24.288 0 22.068 0 19.332ZM18.776 14.52H12.636V24.144H18.776C23.636 24.144 26.084 21.924 26.084 19.332C26.084 16.74 23.636 14.52 18.776 14.52ZM18.84 22.488H14.616V16.176H18.84C21.836 16.176 24.056 17.4 24.056 19.332C24.056 21.264 21.836 22.488 18.84 22.488ZM36.012 18.108C36.012 16.356 35.196 15.672 33.78 15.672C32.364 15.672 31.548 16.356 31.548 18.108C31.548 19.86 32.364 20.544 33.78 20.544C35.196 20.544 36.012 19.86 36.012 18.108ZM33.78 22.212C31.188 22.212 29.58 20.724 29.58 18.108C29.58 15.492 31.188 14.004 33.78 14.004C36.372 14.004 37.98 15.492 37.98 18.108C37.98 20.724 36.372 22.212 33.78 22.212ZM47.288 22.212V14.148H45.308L42.212 18.168V14.148H40.232V22.212H42.212L45.308 18.228V22.212H47.288ZM49.492 14.148H51.472V22.212H49.492V14.148ZM53.644 14.148H55.624V20.844H59.564V22.212H53.644V14.148ZM61.764 14.148H63.744V22.212H61.764V14.148ZM73.712 14.148H70.784L68.252 18.6L65.72 14.148H62.792L67.016 20.844V22.212H69.548V20.844L73.712 14.148ZM75.916 14.148H77.896V20.844H81.836V22.212H75.916V14.148Z" className="fill-current text-better-text dark:text-gray-100"/>
                        </svg>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Better.com is a family of companies serving all your home-financing needs.</p>
                        <div className="flex space-x-6">
                           <SocialIcon><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                           <SocialIcon><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                           <SocialIcon><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.663 7.825 6.357 9.252-.06-.318-.033-.614.07-.886.107-.288.638-2.7.638-2.7s-.167-.333-.167-.822c0-.77.45-1.347 1.01-1.347.476 0 .7.353.7.776 0 .473-.306 1.18-.46 1.827-.13.555.275 1.003.82 1.003 1.292 0 2.267-1.637 2.267-3.998 0-1.854-1.33-3.144-3.238-3.144-2.275 0-3.612 1.707-3.612 3.47 0 .688.265 1.425.595 1.826a.23.23 0 01.05.215c-.018.067-.06.22-.075.28-.027.103-.105.143-.22.09-.85-.347-1.38-1.515-1.38-2.658 0-2.046 1.58-4.323 4.77-4.323 2.51 0 4.41 1.782 4.41 4.05 0 2.44-1.42 4.28-3.35 4.28-1.07 0-1.85-.89-1.6-1.92.18-.75.56-1.56.56-1.56s.21-.86.82-.86c.69 0 1.2.74 1.2 1.6 0 .93-.59 2.3-.88 3.08-.34 1.02.6 1.84 1.8 1.84 2.14 0 3.79-2.58 3.79-5.94 0-2.85-2.07-4.88-5.1-4.88-3.41 0-5.73 2.55-5.73 5.34 0 .99.38 1.94.91 2.47a.23.23 0 00-.03.22c-.08.3-.34 1.22-.44 1.62-.12.51-.23.69-.4.5-.47-.22-.72-1.07-.72-1.74 0-1.54.83-2.85 2.4-4.14C6.46 7.05 8.1 4.5 12.06 4.5c3.04 0 5.46 2.15 5.46 5.11 0 3.01-1.96 5.3-4.85 5.3-.96 0-1.88-.48-2.18-1.02l-.63 2.38c-.22.83-1.02 1.8-1.72 2.31A9.974 9.974 0 0012 22C17.523 22 22 17.523 22 12S17.523 2 12 2z" clipRule="evenodd" /></svg></SocialIcon>
                           <SocialIcon><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.254.418-4.814a2.505 2.505 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418ZM15.197 12 10 14.828V9.172L15.197 12Z" clipRule="evenodd" /></svg></SocialIcon>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3 md:grid-cols-4">
                        {linkSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">{section.title}</h3>
                                <ul className="mt-4 space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link}><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services. Better Connect, LLC dba Better Attorney Match provides real estate attorney connection services.
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
                        Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;