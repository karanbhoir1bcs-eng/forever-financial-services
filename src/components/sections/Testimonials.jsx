import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  { 
    name: 'Sanjay Patil',
    loan: 'Home Loan',
    amount: '₹25 Lakhs',
    city: 'Jaipur',
    rating: 5,
    text: 'My score was 680 and most banks rejected me. Forever Financial found a lender and approved my loan in 3 days!',
    bgClass: 'from-orange-400 to-orange-500',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  { 
    name: 'Priya Deshmukh',
    loan: 'Car Refinance',
    amount: '₹8 Lakhs',
    city: 'Pune',
    rating: 5,
    text: 'Refinanced my car loan at a much lower rate. Saved ₹4,000 per month on EMI. The process was seamless!',
    bgClass: 'from-[#b052d9] to-[#8025b3]',
    img: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  { 
    name: 'Amit Joshi',
    loan: 'Personal Loan',
    amount: '₹3 Lakhs',
    city: 'New Delhi',
    rating: 5,
    text: 'Got my loan approved in just 6 hours! The team was very helpful and guided me through every step.',
    bgClass: 'from-[#2db6fa] to-[#1d82db]',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  { 
    name: 'Kavita More',
    loan: 'Business Loan',
    amount: '₹15 Lakhs',
    city: 'Mumbai',
    rating: 5,
    text: 'My business needed urgent funds. Forever Financial got me a business loan within 48 hours. Absolutely outstanding!',
    bgClass: 'from-[#11998e] to-[#38ef7d]',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  { 
    name: 'Rohan Kulkarni',
    loan: 'Car Loan',
    amount: '₹6 Lakhs',
    city: 'Nagpur',
    rating: 5,
    text: 'Bought my dream car with the best interest rate possible. The team handled everything end to end. Highly recommend!',
    bgClass: 'from-[#f7971e] to-[#ffd200]',
    img: 'https://randomuser.me/api/portraits/men/73.jpg',
  },
  {
    name: 'Sneha Rane',
    loan: 'Loan Against Property',
    amount: '₹40 Lakhs',
    city: 'Nashik',
    rating: 5,
    text: "Used my property to fund my daughter's education abroad. The team gave the best LTV and lowest rate. Thank you FFS!",
    bgClass: 'from-[#fc5c7d] to-[#6a3093]',
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-yellow-300 fill-yellow-300" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      className={`relative rounded-3xl p-7 text-white shadow-xl bg-gradient-to-br ${t.bgClass} flex-shrink-0`}
      style={{ width: '360px' }}
    >
      {/* Quote Mark */}
      <div className="absolute top-5 right-6 text-white/20">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 mb-5">
        <img
          src={t.img}
          alt={t.name}
          className="w-12 h-12 rounded-full border-2 border-white/40 object-cover shadow-md"
        />
        <div>
          <h3 className="font-bold font-sora text-[15px] leading-tight mb-1">{t.name}</h3>
          <StarRow count={t.rating} />
        </div>
      </div>

      {/* Review Text */}
      <p className="text-white/95 text-sm leading-relaxed font-jakarta mb-6" style={{ minHeight: '72px' }}>
        "{t.text}"
      </p>

      {/* Footer Tags */}
      <div className="flex items-center gap-2 text-[11px] font-jakarta flex-wrap">
        <span className="px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm font-semibold whitespace-nowrap">
          {t.loan}
        </span>
        <span className="text-white/50">·</span>
        <span className="text-white/90 whitespace-nowrap">{t.amount}</span>
        <span className="text-white/50">·</span>
        <span className="text-white/90 flex items-center gap-1 whitespace-nowrap">📍 {t.city}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      {/* Inject keyframe animation via style tag */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollLeft 35s linear infinite;
          gap: 24px;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-14 px-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-green-200 bg-white text-[#00C853] text-xs font-bold tracking-widest uppercase font-jakarta mb-5 shadow-sm">
              TESTIMONIALS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-[#031412] mb-4 font-sora">
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-xl text-lg font-jakarta">
              Real stories from real people who trusted Forever Financial Services.
            </motion.p>
          </div>

          {/* ── Infinite Marquee ── */}
          {/* marquee-wrapper: hover on this pauses all tracks inside */}
          <div className="marquee-wrapper w-full overflow-hidden py-4">
            <div className="marquee-track">
              {/* Original set */}
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={`orig-${i}`} t={t} />
              ))}
              {/* Duplicate set — seamless loop */}
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={`dup-${i}`} t={t} />
              ))}
            </div>
          </div>

          {/* Pause hint */}
          <p className="text-center text-gray-400 text-xs font-jakarta mt-5">
            🖱️ Hover on any card to pause
          </p>
        </div>
      </section>
    </>
  );
}
