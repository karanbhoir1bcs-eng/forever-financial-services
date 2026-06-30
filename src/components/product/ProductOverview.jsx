import React from 'react';
import { motion } from 'framer-motion';

export default function ProductOverview({ data }) {
  if (!data) return null;

  return (
    <div id="overview" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        OVERVIEW
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

      {/* Dark Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 + i * 0.1 }}
            className="bg-[#1a2b3c] rounded-2xl p-6 text-center shadow-lg flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-[#00C853] text-3xl font-extrabold font-sora mb-2">{card.value}</div>
            <div className="text-gray-400 text-xs font-bold font-jakarta tracking-widest uppercase">{card.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
