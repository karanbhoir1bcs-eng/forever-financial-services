import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductFaqs({ data }) {
  if (!data) return null;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="mb-20 scroll-mt-24">
      {/* Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
        FAQS
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sora mb-8">
        {data.title}
      </motion.h2>

      {/* Accordion */}
      <div className="space-y-3">
        {data.items.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 + i * 0.05 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors shadow-sm shadow-gray-200/50">
            <button
              onClick={() => toggleFaq(i)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
              <span className="font-sora font-semibold text-gray-900 text-sm md:text-base">{faq.q}</span>
              <span className="text-[#00C853] text-xl font-bold ml-4">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5 text-gray-600 font-jakarta text-sm leading-relaxed">
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
