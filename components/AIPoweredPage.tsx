"use client";

import React, { useState } from 'react';

const AIPoweredPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('how-ai');
    
    const tabs = [
        { id: 'how-ai', title: 'How AI Mortgage Lending Is Transforming the Home Loan Process' },
        { id: 'one-day', title: 'One Day Mortgage¹' },
        { id: 'heloc', title: 'Better HELOC' },
        { id: 'insurance', title: 'Insurance' }
    ];

    const TabContent: React.FC<{id: string}> = ({id}) => {
        switch(id) {
            case 'how-ai':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <img src="https://picsum.photos/id/1015/600/400" className="rounded-lg" alt="AI process" />
                        <div>
                            <h3 className="text-2xl font-bold dark:text-white">The future of home financing is here.</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">Our proprietary AI technology analyzes your financial data in real-time, providing a faster, more accurate, and more transparent mortgage process. Say goodbye to endless paperwork and long waiting times.</p>
                        </div>
                    </div>
                );
            case 'one-day':
                 return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <img src="https://picsum.photos/id/10/600/400" className="rounded-lg" alt="One day mortgage" />
                        <div>
                            <h3 className="text-2xl font-bold dark:text-white">From application to approval in 24 hours.</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">Yes, you read that right. Qualified borrowers can get a commitment letter in just one day. Our AI-powered system streamlines verification and underwriting, making the impossible possible.</p>
                        </div>
                    </div>
                 );
            default:
                return (
                    <div className="text-center p-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="text-2xl font-bold dark:text-white">Content for {tabs.find(t => t.id === id)?.title}</h3>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">This is placeholder content for the selected tab. In a real application, this would be populated with relevant information about HELOCs, Insurance, or other services.</p>
                         <img src={`https://picsum.photos/seed/${id}/600/400`} className="rounded-lg mt-4 mx-auto" alt="Placeholder" />
                    </div>
                )
        }
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="bg-gray-900 text-white text-center py-24 sm:py-32 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">The first</h1>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-better-green">AI-powered Mortgage</h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">Our tech unlocks lower rates, higher chances of approval, and a lightning test process from approval to closing. Over $100 billion funded.</p>
                <div className="mt-10">
                    <a href="#" className="inline-block bg-better-green text-white font-bold py-3 px-8 rounded-md hover:bg-better-green-dark transition-colors">See my AI-powered rates</a>
                    <p className="mt-2 text-xs text-gray-400">Takes less than a minute</p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    <img src="https://i.imgur.com/g0t7S1r.png" alt="AI dashboard preview" className="rounded-lg shadow-2xl"/>
                </div>
            </div>

            <div className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-4xl font-bold text-center dark:text-white">Got questions? We've got answers</h2>
                     <div className="mt-12">
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <nav className="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
                                {tabs.map(tab => (
                                    <button 
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`${
                                            activeTab === tab.id
                                            ? 'border-better-green text-better-green'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
                                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <div className="mt-8">
                            <TabContent id={activeTab} />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AIPoweredPage;