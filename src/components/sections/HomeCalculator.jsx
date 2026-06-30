import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HomeCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(12.0);
  const [tenure, setTenure] = useState(36);

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
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-green-200 bg-white text-[#00C853] text-xs font-bold tracking-widest uppercase font-jakarta mb-5 shadow-sm">
            EMI CALCULATOR
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#031412] mb-4 font-sora">
            Calculate Your Monthly EMI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl text-lg font-jakarta">
            Use our smart calculator to plan your loan repayment easily.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side: Sliders */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="flex-1 w-full space-y-10 bg-white/60 p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm backdrop-blur-sm">
            
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between mb-4">
                <span className="font-sora font-bold text-gray-900">Loan Amount</span>
                <span className="font-sora font-bold text-[#00C853] text-lg">{formatCurrency(amount)}</span>
              </div>
              <input 
                type="range" 
                min={50000} 
                max={5000000} 
                step="50000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
                style={{
                  background: `linear-gradient(to right, #00C853 ${((amount - 50000) / (5000000 - 50000)) * 100}%, #e5e7eb ${((amount - 50000) / (5000000 - 50000)) * 100}%)`
                }}
              />
              <div className="flex justify-between mt-2 text-xs font-jakarta font-bold text-gray-400">
                <span>{formatCurrency(50000)}</span>
                <span>{formatCurrency(5000000)}</span>
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
                min={8} 
                max={24} 
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
                style={{
                  background: `linear-gradient(to right, #00C853 ${((rate - 8) / (24 - 8)) * 100}%, #e5e7eb ${((rate - 8) / (24 - 8)) * 100}%)`
                }}
              />
              <div className="flex justify-between mt-2 text-xs font-jakarta font-bold text-gray-400">
                <span>8%</span>
                <span>24%</span>
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
                min={6} 
                max={84} 
                step="6"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
                style={{
                  background: `linear-gradient(to right, #00C853 ${((tenure - 6) / (84 - 6)) * 100}%, #e5e7eb ${((tenure - 6) / (84 - 6)) * 100}%)`
                }}
              />
              <div className="flex justify-between mt-2 text-xs font-jakarta font-bold text-gray-400">
                <span>6 Months</span>
                <span>84 Months</span>
              </div>
            </div>

            {/* Tip Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 flex gap-3">
              <span className="text-xl">💡</span>
              <p className="text-sm font-jakarta text-gray-700 leading-relaxed">
                <span className="font-bold">Tip to reduce your EMI</span><br/>
                Longer tenure = lower EMI but more total interest. Pick the balance that fits your monthly budget.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Results Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, delay: 0.3 }}
            className="w-full lg:w-[420px] shrink-0 bg-[#0f172a] rounded-3xl p-8 shadow-2xl flex flex-col relative overflow-hidden">
            
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C853]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
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

                <div className="space-y-3 w-full">
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
                      <span className="text-gray-300 font-jakarta text-sm">Interest</span>
                    </div>
                    <span className="text-white font-sora font-bold text-sm">{interestPercent}%</span>
                  </div>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#1e293b] rounded-xl p-4 border border-white/5">
                  <div className="text-gray-500 text-[10px] font-bold font-jakarta uppercase tracking-wider mb-1">Principal</div>
                  <div className="text-white font-sora font-bold text-lg">{formatCurrency(amount)}</div>
                </div>
                <div className="bg-[#1e293b] rounded-xl p-4 border border-white/5">
                  <div className="text-gray-500 text-[10px] font-bold font-jakarta uppercase tracking-wider mb-1">Total Interest</div>
                  <div className="text-white font-sora font-bold text-lg">{formatCurrency(totalInterest)}</div>
                </div>
              </div>
              
              <div className="bg-[#1e293b] rounded-xl p-4 mb-8 border border-white/5">
                <div className="text-gray-500 text-[10px] font-bold font-jakarta uppercase tracking-wider mb-1">Total Payable</div>
                <div className="text-white font-sora font-bold text-xl">{formatCurrency(totalPayable)}</div>
              </div>

              {/* CTA */}
              <button className="w-full bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta py-4 rounded-xl transition-colors shadow-lg shadow-[#00C853]/20 flex items-center justify-center gap-2">
                Apply for This Loan <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
