import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-[72px] min-h-screen flex flex-col bg-white">
      
      {/* 1. Hero Section */}
      <div className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#031412]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031412] via-[#031412]/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-[#00C853] font-bold text-xs font-jakarta mb-6 backdrop-blur-sm">
            🏛️ About Us
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-sora text-white leading-tight mb-6">
            India's Trusted <span className="text-[#00C853]">Loan Advisory</span> Platform
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl font-jakarta max-w-3xl mx-auto leading-relaxed mb-16">
            We connect borrowers with the best lenders to make financial dreams a reality — quickly, transparently, and affordably.
          </motion.p>

          {/* 4 Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-[#111d2a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">😊</span>
                <span className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">50,000+</span>
              </div>
              <span className="text-gray-400 text-[11px] md:text-xs font-bold font-jakarta tracking-widest uppercase">Happy Customers</span>
            </div>
            
            <div className="bg-[#111d2a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💰</span>
                <span className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">₹500 Cr+</span>
              </div>
              <span className="text-gray-400 text-[11px] md:text-xs font-bold font-jakarta tracking-widest uppercase">Total Disbursed</span>
            </div>

            <div className="bg-[#111d2a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏦</span>
                <span className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">20+</span>
              </div>
              <span className="text-gray-400 text-[11px] md:text-xs font-bold font-jakarta tracking-widest uppercase">Banking Partners</span>
            </div>

            <div className="bg-[#111d2a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📅</span>
                <span className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">8 Yrs</span>
              </div>
              <span className="text-gray-400 text-[11px] md:text-xs font-bold font-jakarta tracking-widest uppercase">In Business</span>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Main Content with Dot Pattern Background */}
      <div className="relative flex-1 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 space-y-24">
          
          {/* 2. Our Story */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-8">
                Our Journey So Far
              </h2>
              
              <div className="space-y-6 text-gray-600 font-jakarta text-lg leading-relaxed">
                <p>
                  Forever Financial Services was founded with a vision to bridge the gap between customers and the right financial opportunities. While the company has been successfully operating for the past 3 years, its foundation is built on a strong 20 years of industry experience.
                </p>
                <p>
                  Over the years, we have seen how customers often struggle to find the right financial products due to complex processes and lack of proper guidance. This inspired us to create a service that not only provides access to multiple loan options but also offers expert advice and end-to-end support.
                </p>
                
                <div className="border-l-4 border-[#00C853] pl-6 py-2 my-8">
                  <p className="text-gray-900 font-sora font-semibold text-xl italic">
                    What started as a small initiative has now grown into a trusted financial partner for many customers, thanks to our commitment, knowledge, and customer-first approach.
                  </p>
                </div>
                
                <p>
                  Today, Forever Financial Services continues to grow with a clear mission: To make financial solutions simple, accessible, and reliable for everyone.
                </p>
              </div>
            </div>
            {/* The right side of Our Story seems to have an "OUR IMPACT" box in the screenshot, but wait, the impact box is the stats cards we built in hero! In screenshot 2, the dark box with stats is just to the right of "Our Journey So Far". Let's adjust layout to match screenshot 2. Wait, screenshot 1 shows stats under the hero text. Screenshot 2 shows stats to the right of "Our Journey". Ah! They are the SAME stats! The user scrolled down. So they might be side-by-side on desktop. Let's make it side-by-side in Our Story section, OR keep it in hero. The screenshot 2 clearly says "OUR IMPACT" inside a dark box with those 4 stats. So let's put it there instead of hero, or both. Let's put it on the right side of Our Story as shown in Screenshot 2! */}
            <div className="lg:w-[450px] shrink-0 bg-[#0f172a] rounded-3xl p-8 shadow-2xl">
              <div className="text-gray-400 text-xs font-bold tracking-widest uppercase font-jakarta mb-8">OUR IMPACT</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1e293b] rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-2">😊</span>
                  <div className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">50,000+</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">Happy Customers</div>
                </div>
                <div className="bg-[#1e293b] rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-2">💰</span>
                  <div className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">₹500 Cr+</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">Total Disbursed</div>
                </div>
                <div className="bg-[#1e293b] rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-2">🏦</span>
                  <div className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">20+</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">Banking Partners</div>
                </div>
                <div className="bg-[#1e293b] rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-2">📅</span>
                  <div className="text-[#00C853] text-2xl md:text-3xl font-extrabold font-sora">8 Yrs</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">In Business</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Who We Are */}
          <div className="flex flex-col md:flex-row gap-12 items-start pt-10 border-t border-gray-100">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-8">
                Who We Are
              </h2>
              
              <div className="space-y-6 text-gray-600 font-jakarta text-lg leading-relaxed">
                <p>
                  At Forever Financial Services, we are committed to helping individuals and businesses meet their financial needs with the right solutions at the right time. We specialize in offering a wide range of loan products designed to suit every stage of life and business growth.
                </p>
                <p className="font-bold text-gray-900">
                  Our approach is simple — we listen, understand, and deliver solutions that truly match our customers' needs.
                </p>
              </div>
            </div>
            
            <div className="lg:w-[500px] shrink-0 space-y-4">
              {/* Services Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50">
                <h3 className="font-sora font-bold text-gray-900 text-lg mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#00C853] text-white flex items-center justify-center text-xs">✓</span>
                  Our Services Include
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>👤</span> Personal Loans</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>🏢</span> Business Loans</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>🚗</span> New Car Loans</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>🚙</span> Used Car Loans</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>🏠</span> Home Loans</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>🔄</span> Balance Transfer</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>🏘️</span> Loan Against Property</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>💼</span> Professional Loans</div>
                  <div className="flex items-center gap-2 text-sm font-jakarta font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"><span>⚙️</span> Working Capital</div>
                </div>
              </div>

              {/* What We Provide Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50">
                <h3 className="font-sora font-bold text-gray-900 text-lg mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">✓</span>
                  What We Provide
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00C853] mt-0.5">✓</span>
                    <span className="font-jakarta text-gray-600 text-sm">Quick and hassle-free loan processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00C853] mt-0.5">✓</span>
                    <span className="font-jakarta text-gray-600 text-sm">Access to multiple lenders for the best deals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00C853] mt-0.5">✓</span>
                    <span className="font-jakarta text-gray-600 text-sm">Transparent guidance at every step</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00C853] mt-0.5">✓</span>
                    <span className="font-jakarta text-gray-600 text-sm">Customized financial solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. What We Stand For */}
          <div className="flex flex-col items-center text-center pt-10 border-t border-gray-100">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-12">
              What We Stand For
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-lg transition-shadow text-left">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6">🤝</div>
                <h3 className="font-sora font-bold text-gray-900 text-xl mb-3">Customer First</h3>
                <p className="text-gray-600 font-jakarta text-sm leading-relaxed">Every decision we make is guided by what's best for our customers. Your financial well-being is our priority.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-lg transition-shadow text-left">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">🔍</div>
                <h3 className="font-sora font-bold text-gray-900 text-xl mb-3">Transparency</h3>
                <p className="text-gray-600 font-jakarta text-sm leading-relaxed">No hidden charges, no fine print surprises. We believe in complete honesty at every step.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-lg transition-shadow text-left">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6">⚡</div>
                <h3 className="font-sora font-bold text-gray-900 text-xl mb-3">Speed & Efficiency</h3>
                <p className="text-gray-600 font-jakarta text-sm leading-relaxed">We respect your time. Our streamlined process ensures the fastest possible loan approvals.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-lg transition-shadow text-left">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6">🏆</div>
                <h3 className="font-sora font-bold text-gray-900 text-xl mb-3">Excellence</h3>
                <p className="text-gray-600 font-jakarta text-sm leading-relaxed">We partner only with the best lenders and maintain the highest standards of service quality.</p>
              </div>
            </div>
          </div>

          {/* 5. Meet the Leadership */}
          <div className="flex flex-col items-center text-center pt-10 border-t border-gray-100">
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-12">
              Meet the Leadership
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {/* Leader 1 */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden text-left hover:-translate-y-1 transition-transform">
                <div className="h-40 bg-[#0f172a] flex items-center justify-center">
                  <span className="text-6xl">🧑‍💼</span>
                </div>
                <div className="p-6">
                  <h3 className="font-sora font-bold text-gray-900 text-lg">Rajesh Kumar</h3>
                  <div className="flex items-center gap-1.5 mt-1 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></div>
                    <p className="text-[#00C853] font-bold text-xs font-jakarta tracking-wide">Founder & CEO</p>
                  </div>
                  <p className="text-gray-600 font-jakarta text-sm leading-relaxed">15+ years in banking. Former VP at HDFC Bank.</p>
                </div>
              </div>
              {/* Leader 2 */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden text-left hover:-translate-y-1 transition-transform">
                <div className="h-40 bg-[#064e3b] flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
                <div className="p-6">
                  <h3 className="font-sora font-bold text-gray-900 text-lg">Priya Sharma</h3>
                  <div className="flex items-center gap-1.5 mt-1 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></div>
                    <p className="text-[#00C853] font-bold text-xs font-jakarta tracking-wide">Head of Operations</p>
                  </div>
                  <p className="text-gray-600 font-jakarta text-sm leading-relaxed">10+ years in fintech and loan processing.</p>
                </div>
              </div>
              {/* Leader 3 */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden text-left hover:-translate-y-1 transition-transform">
                <div className="h-40 bg-[#422006] flex items-center justify-center">
                  <span className="text-6xl">🧑‍💻</span>
                </div>
                <div className="p-6">
                  <h3 className="font-sora font-bold text-gray-900 text-lg">Amit Patel</h3>
                  <div className="flex items-center gap-1.5 mt-1 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></div>
                    <p className="text-[#00C853] font-bold text-xs font-jakarta tracking-wide">Chief Credit Officer</p>
                  </div>
                  <p className="text-gray-600 font-jakarta text-sm leading-relaxed">Former credit analyst at ICICI Bank.</p>
                </div>
              </div>
              {/* Leader 4 */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden text-left hover:-translate-y-1 transition-transform">
                <div className="h-40 bg-[#2e1065] flex items-center justify-center">
                  <span className="text-6xl">👩‍💻</span>
                </div>
                <div className="p-6">
                  <h3 className="font-sora font-bold text-gray-900 text-lg">Sneha Reddy</h3>
                  <div className="flex items-center gap-1.5 mt-1 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></div>
                    <p className="text-[#00C853] font-bold text-xs font-jakarta tracking-wide">Head of Technology</p>
                  </div>
                  <p className="text-gray-600 font-jakarta text-sm leading-relaxed">Built digital lending platforms for 3 NBFCs. IIT Bombay.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Our Partners */}
          <div className="flex flex-col items-center text-center pt-10 border-t border-gray-100">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
              OUR PARTNERS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-12">
              20+ Banking Partners
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
              {[
                { name: 'HDFC Bank', initial: 'H', color: 'bg-blue-700' },
                { name: 'ICICI Bank', initial: 'I', color: 'bg-orange-500' },
                { name: 'SBI', initial: 'S', color: 'bg-blue-800' },
                { name: 'Axis Bank', initial: 'A', color: 'bg-red-800' },
                { name: 'Kotak', initial: 'K', color: 'bg-red-600' },
                { name: 'Bajaj Finserv', initial: 'B', color: 'bg-blue-600' },
                { name: 'Tata Capital', initial: 'T', color: 'bg-blue-900' },
                { name: 'IDFC First', initial: 'I', color: 'bg-red-700' },
                { name: 'Yes Bank', initial: 'Y', color: 'bg-blue-800' },
                { name: 'IndusInd', initial: 'I', color: 'bg-blue-900' },
                { name: 'Piramal', initial: 'P', color: 'bg-blue-900' },
                { name: 'Aditya Birla', initial: 'A', color: 'bg-red-600' },
              ].map((partner, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3">
                  <div className={`w-12 h-12 rounded-xl text-white font-sora font-bold text-xl flex items-center justify-center ${partner.color}`}>
                    {partner.initial}
                  </div>
                  <span className="font-jakarta text-sm font-semibold text-gray-800">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. CTA */}
          <div className="bg-[#031412] rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Subtle background dots/gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/10 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs font-jakarta mb-8">
                <span>🚀</span> Get Started Today
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-jakarta max-w-2xl mx-auto mb-10">
                Get your loan approved today. Free consultation, no hidden charges.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/products" className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#00C853]/20 text-center">
                  Explore Loans →
                </a>
                <a href="/contact" className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold font-jakarta px-8 py-4 rounded-xl transition-colors text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
