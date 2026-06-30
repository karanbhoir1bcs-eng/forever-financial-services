import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFinancers({ data }) {
  if (!data) return null;

  return (
    <div id="financers" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        OUR FINANCERS
      </motion.div>

      {/* Title & Desc */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-4">
        {data.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.15 }}
        className="text-gray-600 font-jakarta text-base md:text-lg mb-8 leading-relaxed">
        {data.desc}
      </motion.p>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.2 }}
        className="bg-white border border-gray-100 shadow-sm shadow-gray-200/50 rounded-3xl overflow-hidden">
        
        {/* Top Dark Stats Bar */}
        <div className="bg-[#031412] p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center md:px-4 first:pt-0 pt-8 md:pt-0">
              <div className="text-[#00C853] text-3xl md:text-4xl font-extrabold font-sora mb-2">{stat.value}</div>
              <div className="text-gray-500 font-bold font-jakarta text-[11px] tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {data.partners.map((partner, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl border border-gray-100 hover:border-[#00C853]/30 hover:bg-[#00C853]/5 transition-colors group">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-sora text-sm shrink-0 shadow-sm"
                  style={{ backgroundColor: partner.color }}>
                  {partner.name.charAt(0)}
                </div>
                <span className="font-sora font-semibold text-gray-800 text-sm group-hover:text-gray-900 transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Note Box */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
            <span className="text-orange-500 text-lg">🔒</span>
            <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-relaxed pt-0.5">
              All partners are RBI-regulated. Rates vary by lender and applicant profile.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
