import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Home, FileText, Building2, Camera, ClipboardList } from 'lucide-react';
import Products from '../components/sections/Products';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

const ELIGIBILITY_ITEMS = [
  {
    num: '1',
    title: 'Indian Resident, Age 21+',
    desc: 'Applicant must be an Indian resident, aged 21 years or above.'
  },
  {
    num: '2',
    title: 'Stable Income / Business',
    desc: 'Salaried or self-employed with stable income or business turnover.'
  },
  {
    num: '3',
    title: 'Good Credit Score',
    desc: 'A good credit score improves approval chances and helps secure better rates.'
  },
  {
    num: '4',
    title: 'Proper KYC & Income Documents',
    desc: 'Valid KYC documents (PAN, Aadhaar) and income proof required for all loans.'
  }
];

const DOCUMENT_ITEMS = [
  {
    icon: User,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    title: 'Identity Proof',
    desc: 'PAN Card, Aadhaar Card'
  },
  {
    icon: Home,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    title: 'Address Proof',
    desc: 'Utility bill, Aadhaar, Passport'
  },
  {
    icon: FileText,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    title: 'Income Proof',
    desc: 'Salary slips, ITR, Bank statement'
  },
  {
    icon: Building2,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    title: 'Business Proof',
    desc: 'GST, Registration (for business loans)'
  },
  {
    icon: Camera,
    color: 'text-gray-600',
    bg: 'bg-gray-100',
    title: 'Photograph',
    desc: 'Recent passport size photo'
  },
  {
    icon: ClipboardList,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    title: 'Loan-Specific Docs',
    desc: 'Property papers, vehicle RC, etc.'
  }
];

function LoansHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#031412]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" 
          alt="Financial calculator and documents" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031412] via-[#031412]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#031412] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-4 h-4 rounded-full bg-[#00C853]/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
            </span>
            <span className="text-[#00C853] text-sm font-bold tracking-widest uppercase font-jakarta">All Loan Products</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 font-sora">
            Find the <span className="text-[#00C853]">Right Loan</span> for You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-300 max-w-2xl font-jakarta leading-relaxed">
            Compare 10 loan products across 20+ lenders. Get the best rate, fastest approval, and expert guidance — all free.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Eligibility() {
  return (
    <section className="relative py-20 lg:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-4">
            <span className="text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta">Eligibility</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#031412] mb-4 font-sora">
            General Eligibility Criteria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-jakarta">
            Basic requirements that apply across most loan products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ELIGIBILITY_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 group">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#00C853]/10 text-[#00C853] flex items-center justify-center font-bold font-sora text-lg group-hover:scale-110 group-hover:bg-[#00C853] group-hover:text-white transition-all duration-300 shadow-sm">
                {item.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sora group-hover:text-[#00C853] transition-colors">{item.title}</h3>
                <p className="text-gray-500 font-jakarta leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents() {
  return (
    <section className="relative py-20 lg:py-24 bg-gray-50/50 border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase font-jakarta">Documents</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#031412] font-sora">
            Documents Required
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENT_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-sora">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-jakarta">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default function LoansPage() {
  return (
    <div className="bg-white">
      <LoansHero />
      <Products 
        badge="All Products"
        title="Our Loan Products"
        highlight=""
        subtitle="Click any card to learn more and apply."
      />
      <Eligibility />
      <Documents />
      <FAQ theme="light" align="left" />
      <ContactCTA 
        compact={true}
        hideSecurityText={true}
        badge={null}
        title="Ready to Apply?"
        subtitle="Free consultation. Best rates. No hidden charges."
        primaryBtnText="Apply Now — Free →"
        primaryBtnIcon={null}
        secondaryBtnText="Talk to an Expert"
        secondaryBtnIcon={null}
      />
    </div>
  );
}
