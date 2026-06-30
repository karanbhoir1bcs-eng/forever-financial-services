import React from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../utils/fbpixel';

export default function ContactCTA() {
  return (
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-[#0A1A2F] overflow-hidden text-center py-12 md:py-14 px-6 sm:px-10">
          
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00C853]/5 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sora leading-snug mb-3">
              Ready to Get Your Loan?
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-jakarta mb-8 max-w-lg mx-auto">
              Join 50,000+ happy customers. Free consultation. <span className="text-[#00C853] font-medium">No hidden charges.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => trackEvent('Lead')}
                className="bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta px-7 py-3.5 rounded-full transition-colors flex items-center gap-1.5">
                Apply Now — It's Free <span>→</span>
              </button>
              <a
                href="tel:+919619505022"
                onClick={() => trackEvent('Contact')}
                className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium font-jakarta px-7 py-3.5 rounded-full transition-colors">
                Talk to an Expert
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
