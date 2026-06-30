import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { 
    step: '1', 
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop',
    title: 'Fill the Form',       
    desc: 'Share your basic details online. Takes less than 2 minutes.' 
  },
  { 
    step: '2', 
    icon: '📞',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
    title: 'Get a Call Back',     
    desc: 'Our expert calls you within 30 minutes to discuss options.' 
  },
  { 
    step: '3', 
    icon: '📁',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop',
    title: 'Submit Documents',        
    desc: 'Upload your documents digitally. No physical visits needed.' 
  },
  { 
    step: '4', 
    icon: '💲',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=600&auto=format&fit=crop',
    title: 'Get Your Loan',    
    desc: 'Money credited to your bank account within 24-72 hours.' 
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-green-200 bg-white text-[#00C853] text-xs font-bold tracking-widest uppercase font-jakarta mb-5 shadow-sm">
            HOW IT WORKS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#031412] mb-4 font-sora">
            Get Your Loan in 4 Easy Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl text-lg font-jakarta">
            Simple, fast, and completely online. No branch visits required.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-6">
          
          {/* Connecting Line - Now aligned with the middle of the icons which will be at the bottom of the images */}
          <div className="hidden lg:block absolute top-[calc((100%-120px)/2+14px)] left-[12.5%] right-[12.5%] h-0.5 bg-[#00C853] z-0" />

          {STEPS.map((step, i) => (
            <motion.div key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Image & Floating Icon Container */}
              <div className="relative w-full mb-10">
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100 shadow-md">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors rounded-[32px]"></div>
                </div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl shadow-xl z-20 border-[3px] border-white">
                  <div className="w-full h-full rounded-full bg-[#00C853] flex items-center justify-center text-white">
                     {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#00C853] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white translate-x-1 -translate-y-1">
                    {step.step}
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-jakarta px-2">{step.desc}</p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
