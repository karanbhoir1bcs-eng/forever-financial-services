import React from 'react';
import { trackEvent } from '../../utils/fbpixel';

export default function QuickApplySidebar({ productData }) {
  const isRefinance = productData?.title?.includes('Refinance');
  const isCommercial = productData?.title?.includes('Commercial');
  
  let formTitle = 'QUICK APPLY';
  if (productData?.title) {
    if (productData.title === 'Car Refinance Loan') {
      formTitle = 'Apply for Car Refinance';
    } else {
      formTitle = `Apply for ${productData.title}`;
    }
  }

  return (
    <div className="sticky top-[100px] w-full max-w-[380px] shrink-0 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 flex flex-col">
      {/* Green Header */}
      <div className="bg-[#00C853] p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shadow-inner shrink-0 text-sm">
          📄
        </div>
        <h3 className="text-white font-bold font-sora text-base">{formTitle}</h3>
      </div>
      
      {/* Dark Body */}
      <div className="bg-[#1a2b3c] p-6 md:p-8 flex-1">
        <p className="text-gray-400 text-sm font-jakarta mb-8 flex items-start gap-2">
          <span>⏱️</span> Our expert will call you within 30 minutes!
        </p>
        
        <form className="space-y-6" onSubmit={e => { e.preventDefault(); trackEvent('Lead'); }}>
          
          {/* Full Name */}
          <div>
            <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Your full name"
              required minLength="3" pattern="^[A-Za-z\s]+$" title="Please enter a valid name"
              className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white placeholder-gray-600 rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
              Mobile Number
            </label>
            <div className="flex bg-[#111d2a] rounded-xl overflow-hidden border border-transparent focus-within:border-[#00C853] transition-colors">
              <div className="px-4 py-3.5 bg-black/10 text-gray-500 font-jakarta text-sm border-r border-gray-800 shrink-0">
                IN +91
              </div>
              <input 
                type="tel" 
                placeholder="9619505022"
                required pattern="^[0-9]{10}$" maxLength="10" title="Please enter a valid 10-digit mobile number"
                className="w-full bg-transparent text-white placeholder-gray-600 px-4 py-3.5 font-jakarta text-sm outline-none"
              />
            </div>
          </div>

          {isRefinance ? (
            <>
              {/* Outstanding Amount */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Outstanding Amount
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>₹1L - ₹5L</option>
                  <option>₹5L - ₹10L</option>
                  <option>₹10L - ₹20L</option>
                  <option>Above ₹20L</option>
                </select>
              </div>

              {/* Car Age */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Car Age
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>Less than 3 years</option>
                  <option>3 to 5 years</option>
                  <option>More than 5 years</option>
                </select>
              </div>
            </>
          ) : isCommercial ? (
            <>
              {/* Vehicle Type */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Vehicle Type
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>Truck / HCV</option>
                  <option>LCV</option>
                  <option>Bus</option>
                  <option>Pickup</option>
                  <option>Taxi</option>
                </select>
              </div>

              {/* Vehicle Condition */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Vehicle Condition
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>New Vehicle</option>
                  <option>Used Vehicle</option>
                </select>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Loan Amount
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>₹5L - ₹10L</option>
                  <option>₹10L - ₹25L</option>
                  <option>₹25L - ₹50L</option>
                  <option>Above ₹50L</option>
                </select>
              </div>
            </>
          ) : (
            <>
              {/* Car Type / Purpose */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Car Type
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>New Car</option>
                  <option>Used Car</option>
                </select>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Loan Amount
                </label>
                <select className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none">
                  <option>₹2L - ₹10L</option>
                  <option>₹10L - ₹25L</option>
                  <option>₹25L - ₹50L</option>
                  <option>Above ₹50L</option>
                </select>
              </div>
            </>
          )}

          {/* City */}
          <div>
            <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
              City
            </label>
            <input 
              type="text" 
              placeholder="Mumbai"
              required
              className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white placeholder-gray-600 rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button type="submit" className="w-full bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta py-4 rounded-xl transition-colors shadow-lg shadow-[#00C853]/20">
              Submit Application →
            </button>
            <p className="text-center text-gray-500 text-[11px] font-jakarta mt-4 flex items-center justify-center gap-1">
              <span>🔒</span> 100% Secure · No Spam · Free
            </p>
          </div>
          
        </form>
      </div>
    </div>
  );
}
