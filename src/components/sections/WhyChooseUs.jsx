import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  { 
    id: 1,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    icon: '⚡', 
    title: 'Fast Approval', 
    desc: 'Get in-principle approval within 2 hours. Loan disbursed within 24 hours of document submission.' 
  },
  { 
    id: 2,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    icon: '📋', 
    title: 'Minimum Documentation', 
    desc: 'Just PAN + Aadhaar + 3 months salary slip. No long paperwork, no multiple bank visits.' 
  },
  { 
    id: 3,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    icon: '🔒', 
    title: '100% Secure', 
    desc: 'Bank-grade 256-bit encryption. Your data is never shared or sold. RBI compliant processes.' 
  },
  { 
    id: 4,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    icon: '🏦', 
    title: 'Trusted Partners', 
    desc: 'Tied up with 20+ top banks and NBFCs. We find you the best rate across all lenders instantly.' 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-white text-[#00C853] text-xs font-bold tracking-widest uppercase font-jakarta mb-5 shadow-sm">
            WHY US
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#031412] mb-4 font-sora">
            Why Choose Forever Financial?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl text-lg font-jakarta">
            We make loan approvals faster, simpler, and more transparent than anyone else.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {FEATURES.map((feature, i) => (
            <motion.div key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              
              {/* Image */}
              <div className="h-40 w-full relative bg-gray-100">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-jakarta">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="border border-gray-100 rounded-3xl bg-white shadow-sm py-10 px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-8">
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">50,000+</div>
              <div className="text-gray-500 font-jakarta text-sm">Happy Customers</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">₹500Cr+</div>
              <div className="text-gray-500 font-jakarta text-sm">Total Disbursed</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">98%</div>
              <div className="text-gray-500 font-jakarta text-sm">Approval Rate</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">20+</div>
              <div className="text-gray-500 font-jakarta text-sm">Banking Partners</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
