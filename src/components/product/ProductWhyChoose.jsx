import React from 'react';
import { motion } from 'framer-motion';

export default function ProductWhyChoose({ data }) {
  if (!data) return null;

  return (
    <div id="why-choose" className="mb-20 scroll-mt-24">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold text-gray-900 font-jakarta tracking-widest uppercase mb-6 flex items-center gap-2">
        {data.title}
      </motion.h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.05 + i * 0.05 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-md transition-shadow flex gap-4">
            
            <div className="w-6 h-6 rounded-full bg-[#00C853]/10 text-[#00C853] flex items-center justify-center shrink-0 mt-0.5">
              ✓
            </div>
            
            <div>
              <h3 className="font-sora font-bold text-gray-900 text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-gray-500 font-jakarta text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
