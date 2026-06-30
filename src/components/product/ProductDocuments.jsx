import React from 'react';
import { motion } from 'framer-motion';

export default function ProductDocuments({ data }) {
  if (!data) return null;

  return (
    <div id="documentation" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        DOCUMENTS
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-8">
        {data.title}
      </motion.h2>

      {/* Grid of Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 + i * 0.05 }}
            className="bg-white rounded-2xl p-5 border-l-4 border-l-[#00C853] border border-gray-100 shadow-sm shadow-gray-200/50 flex items-center gap-4 hover:shadow-md transition-all group">
            
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#00C853]/10 transition-colors text-sm">
              📄
            </div>
            
            <span className="font-sora font-bold text-gray-800 text-sm md:text-base">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
