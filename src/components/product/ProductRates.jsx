import React from 'react';
import { motion } from 'framer-motion';

export default function ProductRates({ data }) {
  if (!data) return null;

  return (
    <div id="interest-charges" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        INTEREST & CHARGES
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-8">
        {data.title}
      </motion.h2>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.2 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-100">
          
          {/* Header row (hidden on mobile, but let's keep it visible everywhere since it looks nice) */}
          <div className="grid grid-cols-2 p-6 bg-gray-50/50">
            <div className="font-sora font-bold text-gray-900 text-sm md:text-base">Charge Type</div>
            <div className="font-sora font-bold text-gray-900 text-sm md:text-base">Details</div>
          </div>
          
          {/* Rows */}
          {data.table.map((row, i) => (
            <div key={i} className="grid grid-cols-2 p-6 hover:bg-gray-50/30 transition-colors">
              <div className="font-jakarta text-gray-600 font-medium text-sm md:text-base flex items-center">{row.label}</div>
              <div className="font-jakarta text-gray-900 font-bold text-sm md:text-base flex items-center">{row.value}</div>
            </div>
          ))}

        </div>
      </motion.div>
    </div>
  );
}
