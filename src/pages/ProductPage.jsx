import React from 'react';
import { motion } from 'framer-motion';
import ProductOverview from '../components/product/ProductOverview';
import ProductFeatures from '../components/product/ProductFeatures';
import ProductRates from '../components/product/ProductRates';
import ProductCalculator from '../components/product/ProductCalculator';
import ProductEligibility from '../components/product/ProductEligibility';
import ProductDocuments from '../components/product/ProductDocuments';
import ProductFinancers from '../components/product/ProductFinancers';
import ProductWhyChoose from '../components/product/ProductWhyChoose';
import ProductHowToApply from '../components/product/ProductHowToApply';
import ProductFaqs from '../components/product/ProductFaqs';
import ProductCta from '../components/product/ProductCta';
import QuickApplySidebar from '../components/product/QuickApplySidebar';

export default function ProductPage({ productData }) {
  if (!productData) {
    return (
      <div className="pt-[72px] min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found or coming soon.</h1>
      </div>
    );
  }

  const { badge, title, subtitle, desc, stats, bgImage, details } = productData;

  const tabs = [
    { label: 'Overview', id: 'overview' },
    { label: 'Key Features', id: 'key-features' },
    { label: 'Interest & Charges', id: 'interest-charges' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Eligibility', id: 'eligibility' },
    { label: 'Documentation', id: 'documentation' },
    { label: 'Our Financers', id: 'financers' },
    { label: 'FAQs', id: 'faqs' }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-[72px] min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[650px] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031412]/95 via-[#031412]/80 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00C853] font-bold text-[13px] font-jakarta mb-6 backdrop-blur-sm">
              {badge}
            </motion.div>

            {/* Title & Subtitle */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-extrabold font-sora text-white leading-tight mb-2">
              {title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-extrabold font-sora text-[#00C853] mb-6">
              {subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-white/80 text-lg md:text-xl font-jakarta max-w-xl leading-relaxed mb-12">
              {desc}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-10 md:gap-16">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-extrabold font-sora text-[#00C853] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-[11px] md:text-xs font-bold font-jakarta tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white z-20 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 overflow-x-auto hide-scrollbar">
            <div className="flex items-center py-3 gap-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold font-jakarta transition-colors ${
                    i === 0 
                      ? 'bg-[#00C853] text-white shadow-md shadow-[#00C853]/20' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white relative">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Sections */}
            <div className="flex-1 min-w-0">
              {details ? (
                <>
                  <ProductOverview data={details.overview} />
                  <ProductFeatures data={details.features} />
                  <ProductRates data={details.rates} />
                  <ProductCalculator data={details.calculator} />
                  <ProductEligibility data={details.eligibility} />
                  <ProductDocuments data={details.documents} />
                  <ProductFinancers data={details.financers} />
                  <ProductWhyChoose data={details.whyChoose} />
                  <ProductHowToApply data={details.howToApply} />
                  <ProductFaqs data={details.faqs} />
                </>
              ) : (
                <div className="py-20 text-center text-gray-400 font-jakarta border-2 border-dashed border-gray-200 rounded-3xl">
                  More details coming soon.
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="hidden lg:block w-[380px] shrink-0">
              <QuickApplySidebar productData={productData} />
            </div>
          </div>

          {/* Full Width Bottom CTA */}
          {details && details.cta && (
            <ProductCta data={details.cta} />
          )}
        </div>
      </div>
    </div>
  );
}
