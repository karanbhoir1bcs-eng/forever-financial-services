import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Emoji-style icons matching the reference website
const PRODUCTS = [
  {
    emoji: '🚗',
    bg: '#FEF3C7',
    title: 'Car Loan',
    rate: '7.5% p.a.',
    desc: 'Finance your new or used car with up to 100% on-road funding.',
    tags: ['100% Funding', 'New & Used'],
    amount: 'Up to ₹1 Crore',
    path: '/car-loan',
  },
  {
    emoji: '🔄',
    bg: '#DBEAFE',
    title: 'Car Refinance',
    rate: '8% p.a.',
    desc: 'Refinance your existing car loan at a lower rate and save on EMI.',
    tags: ['Lower EMI', 'Top-Up Cash'],
    amount: 'Up to ₹50 Lakhs',
    path: '/car-refinance',
  },
  {
    emoji: '🚛',
    bg: '#D1FAE5',
    title: 'Commercial Vehicle Loan',
    rate: '8.5% p.a.',
    desc: 'Finance trucks, buses, tippers, taxis and fleet vehicles for your business.',
    tags: ['All CV Types', 'Up to 100% Funding'],
    amount: 'Up to ₹5 Crore',
    path: '/commercial-vehicle-loan',
  },
  {
    emoji: '👤',
    bg: '#EDE9FE',
    title: 'Personal Loan',
    rate: '10.5% p.a.',
    desc: 'Instant funds for any personal need — travel, wedding, medical, or home renovation.',
    tags: ['Zero Collateral', 'Instant Approval'],
    amount: 'Up to ₹10 Lakhs',
    path: '/personal-loan',
  },
  {
    emoji: '🏠',
    bg: '#FEF3C7',
    title: 'Home Loan',
    rate: '8.5% p.a.',
    desc: 'Make your dream home a reality with the lowest rates and 30-year tenure.',
    tags: ['90% LTV', 'Tax Benefits'],
    amount: 'Up to ₹2 Crore',
    path: '/home-loan',
  },
  {
    emoji: '🏢',
    bg: '#DBEAFE',
    title: 'Business Loan',
    rate: '12% p.a.',
    desc: 'Fuel your business growth with collateral-free loans and quick disbursal.',
    tags: ['No Collateral', '48 hr Disbursal'],
    amount: 'Up to ₹50 Lakhs',
    path: '/unsecured-business-loan',
  },
  {
    emoji: '⚙️',
    bg: '#F0F9FF',
    title: 'Working Capital',
    rate: '11% p.a.',
    desc: 'Manage cash flow, inventory, and day-to-day operations seamlessly.',
    tags: ['Revolving Credit', 'Flexible'],
    amount: 'Up to ₹1 Crore',
    path: '/working-capital-loan',
  },
  {
    emoji: '↔️',
    bg: '#D1FAE5',
    title: 'Balance Transfer',
    rate: '8.9% p.a.',
    desc: 'Switch your high-interest loan to a lower rate and reduce your EMI.',
    tags: ['Lower EMI', 'Top-Up Available'],
    amount: 'Any existing loan',
    path: '/balance-transfer',
  },
  {
    emoji: '💼',
    bg: '#FEF3C7',
    title: 'Professionals Loan',
    rate: '10% p.a.',
    desc: 'Exclusive loans for doctors, CAs, lawyers, and other licensed professionals.',
    tags: ['Doctors & CAs', 'No Collateral'],
    amount: 'Up to ₹30 Lakhs',
    path: '/loan-for-professionals',
  },
  {
    emoji: '🏘️',
    bg: '#D1FAE5',
    title: 'Loan Against Property',
    rate: '8.75% p.a.',
    desc: 'Leverage your property to get high-value funds at low interest rates.',
    tags: ['70% LTV', '15 Yr Tenure'],
    amount: 'Up to ₹5 Crore',
    path: '/loan-against-property',
  },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 } }),
};

export default function Products({
  badge = 'Our Products',
  title = 'Loans for Every Need',
  highlight = 'Tailored for You',
  subtitle = 'Click any card to learn more and apply.',
  limit,
  showViewAll = false,
}) {
  const displayedProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-white text-[#00C853] text-xs font-bold tracking-widest uppercase font-jakarta mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
            OUR PRODUCTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-extrabold text-[#031412] leading-tight mb-4 font-sora">
            Loans for Every Need <br className="hidden md:block" />
            <span className="text-[#00C853]">Tailored for You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-gray-500 text-lg font-jakarta">
            Flip a card to see key features. Click Apply to get started.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayedProducts.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 relative flex flex-col hover:shadow-md hover:border-green-100 transition-all duration-300">

              {/* Top Left Number */}
              <div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-[#F0FDF4] text-[#00C853] text-xs font-bold font-jakarta flex items-center justify-center">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Top Right Flip Icon */}
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>

              <div className="mt-14 flex items-start gap-5 mb-5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: p.bg }}>
                  {p.emoji}
                </div>
                
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 text-xl font-sora mb-2">{p.title}</h3>
                  <div className="inline-flex items-center gap-1.5 bg-[#F0FDF4] px-2.5 py-1 rounded text-[#00C853] font-bold text-xs font-jakarta">
                    <span className="text-yellow-500">⚡</span>
                    <span>{p.rate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-4 font-jakarta">
                <span className="text-[#00C853] font-bold text-lg">$</span>
                <span className="text-gray-500 font-medium">{p.amount}</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed font-jakarta mb-8 flex-1">{p.desc}</p>

              <Link
                to={p.path}
                className="block w-full bg-[#00C853] hover:bg-[#00a844] text-white text-center font-bold text-sm py-4 rounded-xl transition-colors font-jakarta">
                Apply Now →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button Section */}
        {showViewAll && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/loans"
              className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00a844] text-white px-8 py-4 rounded-full font-bold font-jakarta transition-colors shadow-lg shadow-[#00C853]/20">
              View All 10 Products <span>→</span>
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-jakarta">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></span>
              Free consultation · No hidden charges
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
