import React from 'react';
import { motion } from 'framer-motion';

export default function ProductHowToApply({ data }) {
  if (!data) return null;

  return (
    <div id="how-to-apply" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        HOW TO APPLY
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-8">
        {data.title}
      </motion.h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 + i * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-200/50 flex gap-4"
            style={{ borderLeft: `4px solid ${step.color}` }}>
            
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-sora font-bold text-white text-sm"
              style={{ backgroundColor: step.color }}>
              {step.num}
            </div>
            
            <div>
              <h3 className="font-sora font-bold text-gray-900 text-base mb-1">{step.title}</h3>
              <p className="text-gray-500 font-jakarta text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
