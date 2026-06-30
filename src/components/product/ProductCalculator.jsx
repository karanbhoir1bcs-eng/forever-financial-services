import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProductCalculator({ data }) {
  if (!data) return null;

  const [amount, setAmount] = useState(data.defaultAmount);
  const [rate, setRate] = useState(data.defaultRate);
  const [tenure, setTenure] = useState(data.defaultTenure);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  // Format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  useEffect(() => {
    // Calculate EMI
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure;
    
    if (p > 0 && r > 0 && n > 0) {
      const calculatedEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmt = calculatedEmi * n;
      const totalInt = totalAmt - p;
      
      setEmi(Math.round(calculatedEmi));
      setTotalPayable(Math.round(totalAmt));
      setTotalInterest(Math.round(totalInt));
    } else {
      setEmi(0);
      setTotalPayable(0);
      setTotalInterest(0);
    }
  }, [amount, rate, tenure]);

  // Chart calculations
  const principalPercent = totalPayable > 0 ? Math.round((amount / totalPayable) * 100) : 100;
  const interestPercent = totalPayable > 0 ? Math.round((totalInterest / totalPayable) * 100) : 0;
  
  // SVG Doughnut logic
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const principalStroke = (principalPercent / 100) * circumference;
  
  return (
    <div id="calculator" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        EMI CALCULATOR
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-10">
        {data.title}
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Sliders */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, delay: 0.2 }}
          className="flex-1 space-y-10">
          
          {/* Amount Slider */}
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-sora font-bold text-gray-900">Loan Amount</span>
              <span className="font-sora font-bold text-[#00C853] text-lg">{formatCurrency(amount)}</span>
            </div>
            <input 
              type="range" 
              min={data.minAmount} 
              max={data.maxAmount} 
              step="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
              style={{
                background: `linear-gradient(to right, #00C853 ${((amount - data.minAmount) / (data.maxAmount - data.minAmount)) * 100}%, #e5e7eb ${((amount - data.minAmount) / (data.maxAmount - data.minAmount)) * 100}%)`
              }}
            />
            <div className="flex justify-between mt-2 text-xs font-jakarta font-bold text-gray-400">
              <span>{formatCurrency(data.minAmount)}</span>
              <span>{formatCurrency(data.maxAmount)}</span>
            </div>
          </div>

          {/* Rate Slider */}
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-sora font-bold text-gray-900">Interest Rate (p.a.)</span>
              <span className="font-sora font-bold text-[#00C853] text-lg">{rate}%</span>
            </div>
            <input 
              type="range" 
              min={data.minRate} 
              max={data.maxRate} 
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
              style={{
                background: `linear-gradient(to right, #00C853 ${((rate - data.minRate) / (data.maxRate - data.minRate)) * 100}%, #e5e7eb ${((rate - data.minRate) / (data.maxRate - data.minRate)) * 100}%)`
              }}
            />
            <div className="flex justify-between mt-2 text-xs font-jakarta font-bold text-gray-400">
              <span>{data.minRate}%</span>
              <span>{data.maxRate}%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-sora font-bold text-gray-900">Loan Tenure</span>
              <span className="font-sora font-bold text-[#00C853] text-lg">{tenure} Months</span>
            </div>
            <input 
              type="range" 
              min={data.minTenure} 
              max={data.maxTenure} 
              step="6"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
              style={{
                background: `linear-gradient(to right, #00C853 ${((tenure - data.minTenure) / (data.maxTenure - data.minTenure)) * 100}%, #e5e7eb ${((tenure - data.minTenure) / (data.maxTenure - data.minTenure)) * 100}%)`
              }}
            />
            <div className="flex justify-between mt-2 text-xs font-jakarta font-bold text-gray-400">
              <span>{data.minTenure} Mo</span>
              <span>{data.maxTenure} Mo</span>
            </div>
          </div>

          {/* Tip Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 flex gap-3">
            <span className="text-xl">💡</span>
            <p className="text-sm font-jakarta text-gray-700 leading-relaxed">
              Longer tenure = lower EMI but more total interest. Pick the balance that fits your budget.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Results Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, delay: 0.3 }}
          className="lg:w-[400px] shrink-0 bg-[#1a2b3c] rounded-3xl p-8 shadow-2xl flex flex-col">
          
          <div className="text-gray-400 font-jakarta text-xs font-bold tracking-widest uppercase mb-2">
            YOUR MONTHLY EMI
          </div>
          <div className="flex items-end gap-2 mb-8">
            <div className="text-white text-5xl font-extrabold font-sora">{formatCurrency(emi)}</div>
            <div className="text-gray-400 text-sm font-jakarta mb-2">per month</div>
          </div>

          {/* Chart & Legend */}
          <div className="flex items-center gap-8 mb-10">
            {/* SVG Doughnut */}
            <div className="relative w-24 h-24 shrink-0">
              <svg width="96" height="96" viewBox="0 0 96 96" className="transform -rotate-90">
                {/* Interest Circle (Background) */}
                <circle
                  cx="48" cy="48" r={radius}
                  fill="transparent" stroke="#EAB308" strokeWidth="16"
                />
                {/* Principal Circle (Foreground) */}
                <circle
                  cx="48" cy="48" r={radius}
                  fill="transparent" stroke="#00C853" strokeWidth="16"
                  strokeDasharray={`${principalStroke} ${circumference}`}
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00C853]"></div>
                  <span className="text-gray-300 font-jakarta text-sm">Principal</span>
                </div>
                <span className="text-white font-sora font-bold text-sm">{principalPercent}%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-300 font-jakarta text-sm">Total Interest</span>
                </div>
                <span className="text-white font-sora font-bold text-sm">{interestPercent}%</span>
              </div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#111d2a] rounded-xl p-4">
              <div className="text-gray-500 text-[10px] font-bold font-jakarta uppercase tracking-wider mb-1">Principal</div>
              <div className="text-white font-sora font-bold text-lg">{formatCurrency(amount)}</div>
            </div>
            <div className="bg-[#111d2a] rounded-xl p-4">
              <div className="text-gray-500 text-[10px] font-bold font-jakarta uppercase tracking-wider mb-1">Total Interest</div>
              <div className="text-white font-sora font-bold text-lg">{formatCurrency(totalInterest)}</div>
            </div>
          </div>
          
          <div className="bg-[#111d2a] rounded-xl p-4 mb-8">
            <div className="text-gray-500 text-[10px] font-bold font-jakarta uppercase tracking-wider mb-1">Total Payable</div>
            <div className="text-white font-sora font-bold text-xl">{formatCurrency(totalPayable)}</div>
          </div>

          {/* CTA */}
          <button className="w-full bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta py-4 rounded-xl transition-colors shadow-lg shadow-[#00C853]/20 mt-auto">
            Apply for This Loan →
          </button>

        </motion.div>
      </div>
    </div>
  );
}
