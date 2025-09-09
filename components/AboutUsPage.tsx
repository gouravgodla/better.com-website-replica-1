"use client";
import React from 'react';

const TimelineItem: React.FC<{ year: string; title: string; description: string; align: 'left' | 'right' }> = ({ year, title, description, align }) => (
    <div className={`flex items-center w-full ${align === 'left' ? 'justify-start' : 'justify-end'}`}>
        {align === 'right' && <div className="hidden md:block w-5/12"></div>}
        
        <div className="relative w-full md:w-1/12 flex justify-center">
            <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-700 absolute"></div>
            <div className="z-10 w-8 h-8 rounded-full bg-better-green text-white flex items-center justify-center font-semibold text-xs">{year.substring(2)}</div>
        </div>
        
        <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full md:w-5/12 ${align === 'left' ? 'md:ml-4' : 'md:mr-4'}`}>
            <p className="text-xl font-bold dark:text-white">{title}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        
        {align === 'left' && <div className="hidden md:block w-5/12"></div>}
    </div>
);


const AboutUsPage: React.FC = () => {
    const timelineEvents = [
        { year: '2014', title: "Better is founded", description: "After an exhausting and out-of-date mortgage experience, our founder, Vishal Garg, sets out to build a better way to get a mortgage."},
        { year: '2016', title: "Some mortgage funds its first mortgage", description: "This isn’t a typo. Before becoming an actual lender (that’s a much longer story), Better partners with a small number of trusted lenders to connect our customers to great mortgage products."},
        { year: '2017', title: "Better Real Estate is born", description: "Buying a home is more than just getting a mortgage, so we introduce our own real estate brokerage. Pretty soon, we have our own in-house real estate agents across the country ready to help our customers navigate the market."},
        { year: '2018', title: "Better Cover joins the family", description: "Why stop at mortgages and real estate? We expand our services to include homeowner’s insurance, making Better a true one-stop-shop for all things home."},
        { year: '2019', title: "Better Mortgage becomes the first lender to provide a GSE-backed mortgage on the blockchain.", description: "Also, we fund $4.6B in loans. No big deal."},
        { year: '2020', title: "Better acquires Trussle", description: "We cross the pond and acquire the UK's first online mortgage broker."},
        { year: '2021', title: "Better goes public", description: "We join the New York Stock Exchange as BETR."},
    ];

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-better-green">Our mission</p>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight dark:text-white">We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/1074/800/600" alt="Team meeting" className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </div>

            <div className="bg-better-green text-white py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">How we're changing things</h2>
                    <p className="mt-6 text-lg text-green-100">We’ve brought the entire mortgage process online, eliminating the need for commissioned loan officers and hefty origination fees. Let our non-commissioned mortgage experts guide you through every step of the process. We’re using technology to make it faster and more efficient, and humans to help make it friendly and reassuring.</p>
                </div>
            </div>

            <div className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Company timeline</h2>
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="space-y-8">
                            {timelineEvents.map((event, index) => (
                                <TimelineItem 
                                    key={event.year}
                                    year={event.year}
                                    title={event.title}
                                    description={event.description}
                                    align={index % 2 === 0 ? 'left' : 'right'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;