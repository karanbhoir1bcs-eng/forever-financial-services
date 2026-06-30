import React from 'react';
import { motion } from 'framer-motion';

export default function ProductEligibility({ data }) {
  if (!data) return null;

  return (
    <div id="eligibility" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        ELIGIBILITY
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-8">
        {data.title}
      </motion.h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {(data.cards || data.items || []).map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 + i * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Subtle background element */}
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none">
              {card.icon}
            </div>

            <div className="text-xl mb-4 relative z-10">{card.icon}</div>
            <h3 className="text-lg font-bold font-sora text-red-600 mb-1 relative z-10">{card.title}</h3>
            <p className="text-gray-500 font-jakarta text-xs font-bold uppercase tracking-widest mb-2 relative z-10">{card.subtitle}</p>
            <p className="text-gray-600 font-jakarta text-sm relative z-10">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Checklist */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm shadow-gray-200/50 p-6 mb-6">
        <ul className="space-y-4">
          {(data.checks || data.checklist || []).map((check, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-[#00C853] font-bold">✓</span>
              <span className="text-gray-700 font-jakarta text-sm md:text-base">{check}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Important Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.4 }}
        className="bg-red-50/50 border border-red-100 rounded-2xl p-5 flex gap-4">
        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0 text-sm">
          📋
        </div>
        <div>
          <h4 className="font-bold text-red-600 font-sora text-sm mb-1">Important Information</h4>
          <p className="text-red-900/70 font-jakarta text-sm leading-relaxed">
            {data.info || (data.note && data.note.desc)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
