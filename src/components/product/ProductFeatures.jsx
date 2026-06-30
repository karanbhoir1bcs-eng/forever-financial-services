import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures({ data }) {
  if (!data) return null;

  return (
    <div id="key-features" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        FEATURES
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-8">
        {data.title}
      </motion.h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 + i * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Subtle decorative background shape */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#00C853]/5 rounded-full blur-2xl group-hover:bg-[#00C853]/10 transition-colors pointer-events-none"></div>
            
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-gray-100 relative z-10">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-bold font-sora text-gray-900 mb-3 relative z-10">{item.title}</h3>
            <p className="text-gray-600 font-jakarta text-sm leading-relaxed relative z-10">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
