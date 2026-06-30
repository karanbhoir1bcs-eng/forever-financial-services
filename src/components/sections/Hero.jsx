import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ZapOff, Smartphone, PhoneCall, ChevronDown, Loader2 } from 'lucide-react';
import { trackEvent } from '../../utils/fbpixel';
import { submitLead } from '../../utils/api';

const PHRASES = [
  'Trusted by 10,000+ Customers',
  'Money in Your Account in 24 hrs',
  'Compare 20+ Banks & NBFCs',
  'Zero Hidden Fees. 100% Digital.',
  'Fast & Secure Loan Approvals',
];

const STATS = [
  { value: '50,000+', label: 'Happy Customers' },
  { value: '₹500 Cr+', label: 'Loans Disbursed' },
  { value: '20+', label: 'Banking Partners' },
  { value: '24 hrs', label: 'Avg Disbursal' },
];

const PILLS = [
  { icon: ShieldCheck, label: 'RBI Compliant' },
  { icon: ZapOff, label: 'Zero Hidden Fees' },
  { icon: Smartphone, label: '100% Digital' },
  { icon: PhoneCall, label: 'Free Consultation' },
];

const LOAN_TYPES = ['Car Loan','Car Refinance','Home Loan','Personal Loan','Business Loan','Loan Against Property'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1], delay },
});

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const isDeleting = useRef(false);

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    loanType: LOAN_TYPES[0],
    city: 'Mumbai',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || !/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Please enter a valid name';
    }
    if (!formData.mobileNumber.trim() || !/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.loanType) {
      newErrors.loanType = 'Please select a loan type';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    let timer;
    const tick = () => {
      const phrase = PHRASES[phraseIdx.current];
      if (!isDeleting.current) {
        charIdx.current++;
        setDisplayText(phrase.slice(0, charIdx.current));
        if (charIdx.current === phrase.length) {
          timer = setTimeout(() => { isDeleting.current = true; tick(); }, 2000);
          return;
        }
      } else {
        charIdx.current--;
        setDisplayText(phrase.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          isDeleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % PHRASES.length;
          timer = setTimeout(tick, 400);
          return;
        }
      }
      timer = setTimeout(tick, isDeleting.current ? 40 : 85);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      await submitLead(formData);
      trackEvent('Lead', { content_name: 'Eligibility Form' });
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your eligibility request has been submitted successfully. Our team will contact you shortly.');
      setFormData({
        fullName: '',
        mobileNumber: '',
        loanType: LOAN_TYPES[0],
        city: 'Mumbai',
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-grid-dark bg-[#031412] flex items-center">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[60vw] h-[60vw] rounded-full bg-[#00C853]/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-40 pb-20 lg:pt-44 lg:pb-28 flex flex-col lg:flex-row items-center gap-12">

        {/* ── Left ── */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">

          {/* Badge */}
          <motion.div {...fadeUp(0.2)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C853]/10 border border-[#00C853]/25 mb-7">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
            <span className="text-[#00C853] text-sm font-semibold font-jakarta">Trusted by 50,000+ Indians</span>
          </motion.div>

          {/* H1 – exact classes from source */}
          <h1
            className="text-[clamp(26px,5vw,58px)] font-extrabold text-white leading-[1.1] mb-4 sm:mb-5 tracking-[-0.03em] font-sora"
            style={{ opacity: 0, transform: 'translateY(24px)', animation: '0.7s cubic-bezier(0.23,1,0.32,1) 0.45s 1 normal forwards running heroFadeUp' }}
          >
            <span className="block min-h-[1.2em] text-[#00C853]">
              {displayText}<span className="typing-cursor" />
            </span>
          </h1>

          <motion.p {...fadeUp(0.6)}
            className="text-[15px] sm:text-[16px] text-white/60 leading-[1.75] mb-10 max-w-[480px] font-jakarta">
            Compare 20+ banks &amp; NBFCs. Get the lowest interest rates, instant approval, and money in your account within 24 hours.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.75)}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mb-9">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-bold text-[#00C853] mb-1 font-sora">{value}</div>
                <div className="text-[11px] text-gray-400 font-semibold tracking-widest uppercase font-jakarta">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* Pills */}
          <motion.div {...fadeUp(0.88)} className="flex flex-wrap gap-3">
            {PILLS.map(({ icon: Icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1e332d]/70 border border-[#2a453d] text-gray-300 text-sm font-jakarta">
                <Icon size={14} className="text-[#00C853]" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.55 }}
          className="w-full lg:w-[45%]">
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-2xl shadow-black/60">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 font-sora">Check Your Eligibility</h2>
            <p className="text-gray-500 text-sm mb-7 font-jakarta">Free. Instant. No credit score impact.</p>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {submitStatus && (
                <div className={`p-4 rounded-lg text-sm font-jakarta ${submitStatus === 'success' ? 'bg-[#00C853]/10 text-[#00a844] border border-[#00C853]/20' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                  {submitMessage}
                </div>
              )}
              {submitStatus !== 'success' && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 tracking-widest uppercase mb-2 font-jakarta">Full Name</label>
                    <input type="text" name="fullName" placeholder="Your full name"
                      value={formData.fullName} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#00C853] focus:ring-[#00C853]/20'} focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400 transition-all text-sm font-jakarta`} />
                    {errors.fullName && <p className="text-red-500 text-[11px] mt-1 font-jakarta">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 tracking-widest uppercase mb-2 font-jakarta">Mobile Number</label>
                    <input type="tel" name="mobileNumber" placeholder="9619505022" maxLength="10"
                      value={formData.mobileNumber} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.mobileNumber ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#00C853] focus:ring-[#00C853]/20'} focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400 transition-all text-sm font-jakarta`} />
                    {errors.mobileNumber && <p className="text-red-500 text-[11px] mt-1 font-jakarta">{errors.mobileNumber}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 tracking-widest uppercase mb-2 font-jakarta">Loan Type</label>
                      <div className="relative">
                        <select name="loanType" value={formData.loanType} onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.loanType ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#00C853] focus:ring-[#00C853]/20'} focus:outline-none focus:ring-2 text-gray-900 bg-white appearance-none cursor-pointer text-sm font-jakarta pr-9`}>
                          {LOAN_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.loanType && <p className="text-red-500 text-[11px] mt-1 font-jakarta">{errors.loanType}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 tracking-widest uppercase mb-2 font-jakarta">City</label>
                      <input type="text" name="city" placeholder="Mumbai"
                        value={formData.city} onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#00C853] focus:ring-[#00C853]/20'} focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400 transition-all text-sm font-jakarta`} />
                      {errors.city && <p className="text-red-500 text-[11px] mt-1 font-jakarta">{errors.city}</p>}
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-[#00C853] hover:bg-[#00a844] disabled:opacity-70 disabled:hover:bg-[#00C853] active:scale-[0.98] disabled:active:scale-100 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base font-jakarta shadow-lg shadow-[#00C853]/20">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Submitting...
                      </>
                    ) : (
                      'Check Eligibility — Free →'
                    )}
                  </button>
                </>
              )}
            </form>

            <p className="mt-5 text-center text-[11px] text-gray-400 font-jakarta">🔒 Your data is 100% secure. No spam calls.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
