import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ROW1 = [
  { name: 'HDFC Bank',     type: 'Banking', icon: 'H', bg: '#1E40AF' },
  { name: 'ICICI Bank',    type: 'Banking', icon: 'I', bg: '#9A3412' },
  { name: 'Axis Bank',     type: 'Banking', icon: 'A', bg: '#831843' },
  { name: 'Bajaj Finserv', type: 'NBFC',    icon: 'B', bg: '#0284C7' },
  { name: 'Tata Capital',  type: 'NBFC',    icon: 'T', bg: '#1E3A8A' },
  { name: 'SBI',           type: 'Banking', icon: 'S', bg: '#166534' },
  { name: 'Kotak Bank',    type: 'Banking', icon: 'K', bg: '#854D0E' },
];

const ROW2 = [
  { name: 'Aditya Birla',  type: 'Finance', icon: 'A', bg: '#7F1D1D' },
  { name: 'IndusInd Bank', type: 'Banking', icon: 'I', bg: '#312E81' },
  { name: 'Yes Bank',      type: 'Banking', icon: 'Y', bg: '#065F46' },
  { name: 'L&T Finance',   type: 'NBFC',    icon: 'L', bg: '#1E3A5F' },
  { name: 'Shriram Finance',type: 'NBFC',   icon: 'S', bg: '#6B21A8' },
  { name: 'IDFC First',    type: 'Banking', icon: 'D', bg: '#0E7490' },
  { name: 'HDB Financial', type: 'NBFC',    icon: 'H', bg: '#92400E' },
];

function PartnerCard({ partner }) {
  return (
    <div
      className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00C853]/40 transition-all duration-300 rounded-2xl p-2.5 pr-6 cursor-pointer flex-shrink-0"
      style={{ minWidth: '220px' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg font-sora shrink-0"
        style={{ backgroundColor: partner.bg }}
      >
        {partner.icon}
      </div>
      <div>
        <div className="text-white font-bold font-sora text-sm leading-tight">{partner.name}</div>
        <div className="text-[#3b82f6] text-[11px] font-jakarta">{partner.type}</div>
      </div>
    </div>
  );
}

export default function TrustedPartners() {
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

  return (
    <section className="relative bg-[#031412] py-20 overflow-hidden">
      {/* Keyframes */}
      <style>{`
        @keyframes toLeft  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes toRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>

      {/* Dark background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00C853] text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
            ✦ TRUSTED NETWORK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-sora">
            Our Trusted Banking Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-jakarta">
            Partnered with India's top banks &amp; NBFCs to get you the best rates
          </motion.p>
        </div>

        {/* Stats Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl shadow-black/20">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-y-8">
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">20+</div>
                <div className="text-gray-500 font-jakarta text-xs font-bold tracking-widest uppercase">BANKING PARTNERS</div>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">₹500Cr+</div>
                <div className="text-gray-500 font-jakarta text-xs font-bold tracking-widest uppercase">LOANS DISBURSED</div>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-4xl md:text-5xl font-extrabold text-[#00C853] mb-2 font-sora">98%</div>
                <div className="text-gray-500 font-jakarta text-xs font-bold tracking-widest uppercase">APPROVAL RATE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Rows */}
        <div className="relative flex flex-col gap-4 overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-28 bg-gradient-to-r from-[#031412] to-transparent z-10 pointer-events-none" />

          {/* ── ROW 1: Right → Left ── */}
          <div
            className="overflow-hidden py-1"
            onMouseEnter={() => setRow1Paused(true)}
            onMouseLeave={() => setRow1Paused(false)}
          >
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                gap: '16px',
                animation: 'toLeft 30s linear infinite',
                animationPlayState: row1Paused ? 'paused' : 'running',
              }}
            >
              {[...ROW1, ...ROW1].map((p, i) => <PartnerCard key={`r1-${i}`} partner={p} />)}
            </div>
          </div>

          {/* ── ROW 2: Left → Right ── */}
          <div
            className="overflow-hidden py-1"
            onMouseEnter={() => setRow2Paused(true)}
            onMouseLeave={() => setRow2Paused(false)}
          >
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                gap: '16px',
                animation: 'toRight 35s linear infinite',
                animationPlayState: row2Paused ? 'paused' : 'running',
              }}
            >
              {[...ROW2, ...ROW2].map((p, i) => <PartnerCard key={`r2-${i}`} partner={p} />)}
            </div>
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-28 bg-gradient-to-l from-[#031412] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
