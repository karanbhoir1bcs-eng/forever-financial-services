import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCta({ data }) {
  if (!data) return null;

  return (
    <div className="mt-20 mb-10">
      {/* Main CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-3xl overflow-hidden p-10 md:p-16 text-center shadow-2xl">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-light opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[#00C853]/5 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-sora mb-4 leading-tight">
            {data.title}
          </h2>
          <p className="text-white/80 font-jakarta text-lg mb-10">
            {data.subtitle}
          </p>
          <button className="bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#00C853]/20">
            {data.buttonText}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
