import React, { useState } from 'react';
import { trackEvent } from '../../utils/fbpixel';
import { submitLead } from '../../utils/api';

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

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    field1: '',
    field2: '',
    field3: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      // Build dynamic fields based on product type
      let dynamicFields = {};
      if (isRefinance) {
        dynamicFields = {
          'Outstanding Amount': formData.field1,
          'Car Age': formData.field2
        };
      } else if (isCommercial) {
        dynamicFields = {
          'Vehicle Type': formData.field1,
          'Vehicle Condition': formData.field2,
          'Loan Amount': formData.field3
        };
      } else {
        dynamicFields = {
          'Car Type': formData.field1,
          'Loan Amount': formData.field2
        };
      }

      await submitLead({
        'Source': `Quick Apply - ${productData?.title || 'General'}`,
        'Full Name': formData.fullName,
        'Phone Number': formData.phone,
        'City': formData.city,
        ...dynamicFields
      });
      
      trackEvent('Lead');
      setStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        city: '',
        field1: '',
        field2: '',
        field3: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

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
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Your full name"
              required minLength="3" pattern="^[A-Za-z\s]+$" title="Please enter a valid name"
              disabled={status === 'loading'}
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
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="9619505022"
                required pattern="^[0-9]{10}$" maxLength="10" title="Please enter a valid 10-digit mobile number"
                disabled={status === 'loading'}
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
                <select name="field1" value={formData.field1} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Amount</option>
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
                <select name="field2" value={formData.field2} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Car Age</option>
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
                <select name="field1" value={formData.field1} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Vehicle Type</option>
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
                <select name="field2" value={formData.field2} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Condition</option>
                  <option>New Vehicle</option>
                  <option>Used Vehicle</option>
                </select>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Loan Amount
                </label>
                <select name="field3" value={formData.field3} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Amount</option>
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
                <select name="field1" value={formData.field1} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Car Type</option>
                  <option>New Car</option>
                  <option>Used Car</option>
                </select>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-gray-400 text-[10px] font-bold font-jakarta tracking-widest uppercase mb-2">
                  Loan Amount
                </label>
                <select name="field2" value={formData.field2} onChange={handleInputChange} disabled={status === 'loading'} className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors appearance-none" required>
                  <option value="" disabled>Select Amount</option>
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
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Mumbai"
              required
              disabled={status === 'loading'}
              className="w-full bg-[#111d2a] border border-transparent focus:border-[#00C853] text-white placeholder-gray-600 rounded-xl px-4 py-3.5 font-jakarta text-sm outline-none transition-colors"
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="bg-green-500/20 text-green-400 p-3 rounded-xl text-sm font-jakarta flex items-center justify-center gap-2 border border-green-500/30">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Application Submitted!
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/20 text-red-400 p-3 rounded-xl text-sm font-jakarta flex items-center justify-center gap-2 border border-red-500/30 text-center">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button type="submit" disabled={status === 'loading'} className={`w-full text-white font-bold font-jakarta py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-gray-500 cursor-not-allowed shadow-none' : 'bg-[#00C853] hover:bg-[#00a844] shadow-[#00C853]/20'}`}>
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Submitting...
                </>
              ) : (
                'Submit Application →'
              )}
            </button>
            <p className="text-center text-gray-500 text-[11px] font-jakarta mt-4 flex items-center justify-center gap-1">
              <span>🔒</span> 100% Secure · No Spam · Free
            </p>
          </div>
      </div>
    </div>
  );
}
