"use client";

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../contexts/ThemeContext';

// Mock data for the chart
const chartData = [
  { name: 'Jan 2023', rate: 6.13 },
  { name: 'Feb', rate: 6.5 },
  { name: 'Mar', rate: 6.71 },
  { name: 'Apr', rate: 6.34 },
  { name: 'May', rate: 6.81 },
  { name: 'Jun', rate: 6.71 },
  { name: 'Jul', rate: 6.84 },
  { name: 'Aug', rate: 7.07 },
  { name: 'Sep', rate: 7.20 },
  { name: 'Oct', rate: 7.62 },
  { name: 'Nov', rate: 7.29 },
  { name: 'Dec', rate: 6.65 },
  { name: 'Jan 2024', rate: 6.64 },
];

const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; prefix?: string }> = ({ label, value, onChange, type = "text", prefix }) => (
    <div className="relative">
        <label className="text-xs text-gray-500 dark:text-gray-400">{label}</label>
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/4 text-gray-500 dark:text-gray-400">{prefix}</span>}
        <input 
            type={type} 
            value={value} 
            onChange={onChange}
            className={`w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${prefix ? 'pl-6' : ''}`} 
        />
    </div>
);

const MortgageCalculatorPage: React.FC = () => {
    const { theme } = useTheme();
    const [homePrice, setHomePrice] = useState('500000');
    const [downPayment, setDownPayment] = useState('100000');
    const [loanTerm, setLoanTerm] = useState('30');
    const [interestRate, setInterestRate] = useState('6.5');
    const [zipCode, setZipCode] = useState('90210');

    const calculateMonthlyPayment = () => {
        const P = parseFloat(homePrice) - parseFloat(downPayment);
        const r = parseFloat(interestRate) / 100 / 12;
        const n = parseInt(loanTerm) * 12;
        if (P > 0 && r > 0 && n > 0) {
            const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            return M.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0,-3);
        }
        return '$0';
    };
    
    const axisColor = theme === 'dark' ? '#6b7280' : '#a0a0a0';

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="bg-better-green-light dark:bg-better-green/20 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-center dark:text-white">Estimate your monthly mortgage payments</h1>
                    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-end">
                            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <InputField label="Home price" prefix="$" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
                                <InputField label="Down payment" prefix="$" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
                                <InputField label="Loan term" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
                                <InputField label="Interest rate" prefix="%" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
                            </div>
                            <div className="md:col-span-2 flex items-end space-x-4">
                               <div className="flex-grow">
                                <label className="text-xs text-gray-500 dark:text-gray-400">ZIP code</label>
                                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                               </div>
                               <div>
                                 <button className="bg-better-green text-white font-bold py-2 px-6 rounded-md w-full h-full hover:bg-better-green-dark transition-colors">See rates</button>
                               </div>
                            </div>
                        </div>
                        <div className="mt-6 border-t dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                            <div>
                               <p className="text-gray-500 dark:text-gray-400">Monthly payment breakdown</p>
                               <p className="text-5xl font-bold dark:text-white">{calculateMonthlyPayment()}<span className="text-2xl font-normal">/mo</span></p>
                            </div>
                            <div className="mt-4 md:mt-0 w-full md:w-1/3">
                                <div className="flex justify-between text-sm">
                                    <span className="dark:text-gray-300">Property taxes</span>
                                    <span className="dark:text-gray-300">$0</span>
                                </div>
                                 <div className="flex justify-between text-sm mt-1">
                                    <span className="dark:text-gray-300">Homeowner's insurance</span>
                                    <span className="dark:text-gray-300">$0</span>
                                </div>
                                <div className="flex justify-between text-sm mt-1 text-blue-600 dark:text-blue-400">
                                    <a>See an estimate link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold dark:text-white">Check your homebuying power</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A pre-approval letter shows how much you're qualified to borrow. Shop for a home with confidence—and get a step ahead of the competition.</p>
                    <button className="mt-8 bg-better-green text-white font-bold py-3 px-8 rounded-md hover:bg-better-green-dark transition-colors">Check your homebuying power</button>
                </div>
            </div>

            <div className="py-24 bg-gray-50 dark:bg-gray-900">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Historical mortgage rate trends</h2>
                     <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00a686" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#00a686" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={axisColor} />
                                <XAxis dataKey="name" stroke={axisColor} />
                                <YAxis stroke={axisColor} tickFormatter={(value) => `${value}%`} />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
                                        borderColor: theme === 'dark' ? '#4b5563' : '#e5e7eb'
                                    }} 
                                    labelStyle={{ color: theme === 'dark' ? '#d1d5db' : '#1f2937' }}
                                    formatter={(value: number) => [`${value.toFixed(2)}%`, '30-year fixed']} 
                                />
                                <Area type="monotone" dataKey="rate" stroke="#00a686" strokeWidth={2} fillOpacity={1} fill="url(#colorRate)" />
                            </AreaChart>
                        </ResponsiveContainer>
                     </div>
                 </div>
            </div>
            
        </div>
    );
};

export default MortgageCalculatorPage;