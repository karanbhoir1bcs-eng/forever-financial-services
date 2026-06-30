import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'How do I choose the right loan product?', a: 'Our experts will assess your needs, income, and credit profile to recommend the best loan product and lender for you — completely free.' },
  { q: 'Does applying affect my CIBIL score?', a: 'No. Our initial consultation and recommendation process is a soft inquiry, which does not affect your CIBIL/credit score.' },
  { q: 'How long does the entire process take?', a: 'Our digital process can provide instant in-principle approval within minutes. Final approval and disbursal typically happens within 24-72 hours.' },
  { q: 'Are there any hidden charges?', a: 'No. We maintain complete transparency. All applicable fees are communicated upfront before you sign any agreement.' },
  { q: 'Which banks and NBFCs do you work with?', a: 'We partner with 20+ leading institutions including HDFC Bank, SBI, ICICI Bank, Axis Bank, Bajaj Finserv, Tata Capital, and many more.' },
  { q: 'Is my personal data safe?', a: 'Absolutely. We use bank-grade encryption and comply with all data protection regulations. Your data is never shared with unauthorized parties.' },
];

function FAQItem({ q, a, isOpen, onToggle, theme }) {
  const isLight = theme === 'light';

  return (
    <div className={`border-b transition-colors ${isLight ? 'border-gray-200' : 'border-[#1e332d]'}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 py-5 text-left group">
        <span className={`font-medium text-[15px] font-jakarta transition-colors ${
          isLight
            ? (isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900')
            : (isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white')
        }`}>{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
          isOpen
            ? 'bg-[#00C853] text-white'
            : (isLight ? 'bg-gray-100 text-gray-500 group-hover:bg-gray-200' : 'bg-[#1e332d] text-gray-400 group-hover:bg-[#2a453d]')
        }`}>
          {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
            <div className={`pb-5 text-sm leading-relaxed font-jakarta pr-12 ${isLight ? 'text-gray-500' : 'text-white/55'}`}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ theme = "dark", align = "center" }) {
  const [openIdx, setOpenIdx] = useState(0);
  const isLight = theme === 'light';

  return (
    <section className={`relative py-16 md:py-20 overflow-hidden ${isLight ? 'bg-white' : 'bg-[#031412]'}`}>
      <div className={`absolute inset-0 opacity-40 ${isLight ? 'bg-grid-light' : 'bg-grid-dark'}`} />
      <div className={`relative z-10 mx-auto px-6 ${align === 'left' ? 'max-w-7xl' : 'max-w-3xl'}`}>

        {/* Header */}
        <div className={`flex flex-col mb-10 ${align === 'left' ? 'items-start text-left' : 'items-center text-center'}`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-jakarta mb-5 ${
              isLight
                ? 'bg-yellow-50 text-yellow-600 border border-yellow-200'
                : 'bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/20'
            }`}>
            FAQS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className={`text-3xl md:text-4xl font-extrabold font-sora leading-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className={align === 'left' ? 'w-full' : ''}>
          {FAQS.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}>
              <FAQItem
                q={faq.q} a={faq.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                theme={theme} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
