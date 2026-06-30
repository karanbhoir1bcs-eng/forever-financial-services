import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitLead } from '../utils/api';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Loan Enquiry',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
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
      await submitLead({
        'Full Name': formData.fullName,
        'Phone Number': formData.phone,
        'Email Address': formData.email,
        'Subject': formData.subject,
        'Message': formData.message
      });
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: 'Loan Enquiry',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
    }
  };

  const faqs = [
    {
      q: "What are your working hours?",
      a: "Our office is open from Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays and public holidays."
    },
    {
      q: "How quickly will I get a response?",
      a: "During business hours, we strive to respond to all inquiries within 30 minutes. Messages received outside business hours will be addressed on the next working day."
    },
    {
      q: "Is the consultation free?",
      a: "Yes, our initial consultation and loan advisory services are completely free of charge. We believe in providing transparent guidance without any upfront fees."
    },
    {
      q: "Can I visit your office?",
      a: "Absolutely! You are welcome to visit our office at Naupada, Thane West during our working hours. We recommend scheduling an appointment for faster service."
    }
  ];

  return (
    <div className="pt-[72px] min-h-screen flex flex-col bg-white">
      
      {/* 1. Hero Section */}
      <div className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#031412]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031412] via-[#031412]/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left md:text-center w-full md:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00C853] font-bold text-xs font-jakarta mb-6 backdrop-blur-sm">
            📞 Get in Touch
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-sora text-white leading-tight mb-6">
            We're Here to <span className="text-[#00C853]">Help You</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl font-jakarta leading-relaxed">
            Have a question about loans? Need help with your application? Our experts are ready to assist you.
          </motion.p>
        </div>
      </div>

      {/* Main Content with Dot Pattern Background */}
      <div className="relative flex-1 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 space-y-24">
          
          {/* 2. Contact Split Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: Reach Us Directly */}
            <div className="flex-1 w-full">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
                CONTACT INFO
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-8">
                Reach Us Directly
              </h2>
              
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-red-50 text-pink-500 rounded-2xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-1">PHONE</div>
                    <div className="text-gray-900 font-bold font-sora text-lg">+919619505022</div>
                  </div>
                </div>
                {/* Email */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl">📧</div>
                  <div>
                    <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-1">EMAIL</div>
                    <div className="text-gray-900 font-bold font-sora text-base sm:text-lg break-all">info@forever-financialservices.com</div>
                  </div>
                </div>
                {/* Address */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-1">ADDRESS</div>
                    <div className="text-gray-900 font-sora font-semibold text-base leading-relaxed">
                      Off No 1 Basement, Rangashree Apartment, Kaka Sohani Path, Near Purepur Kolhapur Hotel, Naupada, Thane West - 400602
                    </div>
                  </div>
                </div>
                {/* Working Hours */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-gray-50 text-gray-500 rounded-2xl flex items-center justify-center text-xl">🕒</div>
                  <div>
                    <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-1">WORKING HOURS</div>
                    <div className="text-gray-900 font-bold font-sora text-lg">Monday – Saturday, 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mb-8">
                <a href="#" className="w-12 h-12 bg-gray-50 hover:bg-gray-100 text-[#1877F2] rounded-2xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-50 hover:bg-gray-100 text-[#0A66C2] rounded-2xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-50 hover:bg-gray-100 text-[#E4405F] rounded-2xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-50 hover:bg-gray-100 text-[#FF0000] rounded-2xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/919619505022"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00a844] text-white font-bold font-jakarta px-6 py-3 rounded-full transition-colors shadow-lg shadow-[#00C853]/20">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 0c-6.627 0-12.031 5.405-12.031 12.03 0 2.631.844 5.074 2.27 7.073l-1.573 5.444 5.568-1.46c1.921 1.258 4.218 1.996 6.702 1.996 6.626 0 12.031-5.405 12.031-12.031s-5.405-12.03-12.031-12.03zm.029 21.658c-2.186 0-4.22-.596-6.002-1.636l-.429-.251-3.649.957.971-3.557-.275-.436c-1.127-1.787-1.785-3.894-1.785-6.155 0-5.836 4.748-10.584 10.584-10.584 5.835 0 10.584 4.748 10.584 10.584 0 5.837-4.749 10.584-10.584 10.584zm5.727-7.859c-.313-.157-1.854-.916-2.142-1.022-.288-.104-.497-.157-.706.157-.209.313-.809 1.021-.992 1.23-.183.209-.366.235-.679.078-1.442-.716-2.529-1.391-3.486-2.732-.249-.348-.026-.537.131-.692.14-.14.313-.365.47-.549.157-.183.209-.313.313-.522.104-.209.052-.392-.026-.549-.078-.157-.706-1.7-.967-2.327-.254-.613-.513-.53-.706-.54-.183-.009-.392-.01-.601-.01-.209 0-.549.078-.836.392-.288.314-1.098 1.073-1.098 2.617 0 1.544 1.124 3.036 1.281 3.245.157.209 2.213 3.38 5.358 4.738 1.95.845 2.766.757 3.328.69.69-.085 1.854-.757 2.116-1.49.261-.733.261-1.36.183-1.49-.078-.13-.288-.209-.601-.366z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-[600px] shrink-0 bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
              <h3 className="font-sora font-bold text-gray-900 text-3xl mb-2">Send Us a Message</h3>
              <p className="text-gray-500 font-jakarta text-sm mb-8">We'll get back to you within 30 minutes during business hours.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-2">FULL NAME</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Your name" className="w-full border border-gray-200 focus:border-[#00C853] rounded-2xl px-5 py-4 font-jakarta text-sm outline-none transition-colors placeholder-gray-400" required minLength="3" pattern="^[A-Za-z\s]+$" title="Please enter a valid name" disabled={status === 'loading'} />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-2">PHONE</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="9619505022" className="w-full border border-gray-200 focus:border-[#00C853] rounded-2xl px-5 py-4 font-jakarta text-sm outline-none transition-colors placeholder-gray-400" required pattern="^[0-9]{10}$" maxLength="10" title="Please enter a valid 10-digit mobile number" disabled={status === 'loading'} />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-2">EMAIL</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className="w-full border border-gray-200 focus:border-[#00C853] rounded-2xl px-5 py-4 font-jakarta text-sm outline-none transition-colors placeholder-gray-400" required pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address" disabled={status === 'loading'} />
                </div>

                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-2">SUBJECT</label>
                  <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full border border-gray-200 focus:border-[#00C853] rounded-2xl px-5 py-4 font-jakarta text-sm outline-none transition-colors text-gray-700 bg-white appearance-none" disabled={status === 'loading'}>
                    <option>Loan Enquiry</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase font-jakarta mb-2">MESSAGE</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Tell us how we can help..." className="w-full border border-gray-200 focus:border-[#00C853] rounded-2xl px-5 py-4 font-jakarta text-sm outline-none transition-colors placeholder-gray-400 resize-none" required disabled={status === 'loading'}></textarea>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-jakarta flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm font-jakarta flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {errorMessage}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className={`w-full text-white font-bold font-jakarta py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-[#00C853] hover:bg-[#00a844] shadow-[#00C853]/20'}`}>
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            </div>
            
          </div>

          {/* 3. FAQs */}
          <div className="pt-10 border-t border-gray-100">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
              FAQS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-sora font-semibold text-gray-900 text-lg">{faq.q}</span>
                    <span className="text-[#00C853] font-bold text-xl">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 font-jakarta leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
