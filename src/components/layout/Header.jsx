import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Globe, ChevronDown, Menu, X, Car, RefreshCw, User, Home, Truck, Building, Settings, Briefcase, ArrowRight, BookOpen, Coins, HeartPulse, Plane, Gift, Wrench, Rocket, Monitor, Zap, Leaf } from 'lucide-react';

// Inline SVGs for social icons not available in this lucide-react version
const FbIcon = () => (<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>);
const IgIcon = () => (<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const LiIcon = () => (<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
const YtIcon = () => (<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>);

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '#', hasDropdown: true },
  { label: 'Loans', path: '/loans' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const PRODUCT_ITEMS = [
  { label: 'Car Loan', path: '/car-loan', icon: Car, iconColor: 'text-red-500', iconBg: 'bg-red-50' },
  { label: 'Up to 200% Loan on Your Car', path: '/car-refinance', icon: RefreshCw, iconColor: 'text-blue-500', iconBg: 'bg-blue-50' },
  { label: 'Personal Loan', path: '/personal-loan', icon: User, iconColor: 'text-purple-600', iconBg: 'bg-purple-50' },
  { label: 'Home Loan', path: '/home-loan', icon: Home, iconColor: 'text-orange-500', iconBg: 'bg-orange-50' },
  { label: 'Commercial Vehicle Loan', path: '/commercial-vehicle-loan', icon: Truck, iconColor: 'text-green-500', iconBg: 'bg-green-50' },
  { label: 'Business Loan', path: '/business-loan', icon: Building, iconColor: 'text-teal-600', iconBg: 'bg-teal-50' },
  { label: 'Working Capital', path: '/working-capital', icon: Settings, iconColor: 'text-gray-500', iconBg: 'bg-gray-100' },
  { label: 'Balance Transfer', path: '/balance-transfer', icon: RefreshCw, iconColor: 'text-blue-500', iconBg: 'bg-blue-50' },
  { label: 'Professionals Loan', path: '/professionals-loan', icon: Briefcase, iconColor: 'text-amber-700', iconBg: 'bg-amber-50' },
  { label: 'Loan Against Property', path: '/loan-against-property', icon: Home, iconColor: 'text-rose-500', iconBg: 'bg-rose-50' },
];

const EXTRA_PRODUCT_ITEMS = [
  { label: 'Education Loan', path: '/education-loan', icon: BookOpen, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-50' },
  { label: 'Gold Loan', path: '/gold-loan', icon: Coins, iconColor: 'text-yellow-600', iconBg: 'bg-yellow-50' },
  { label: 'Medical Loan', path: '/medical-loan', icon: HeartPulse, iconColor: 'text-red-500', iconBg: 'bg-red-50' },
  { label: 'Wedding Loan', path: '/wedding-loan', icon: Gift, iconColor: 'text-pink-500', iconBg: 'bg-pink-50' },
  { label: 'Travel Loan', path: '/travel-loan', icon: Plane, iconColor: 'text-cyan-500', iconBg: 'bg-cyan-50' },
  { label: 'Machinery Loan', path: '/machinery-loan', icon: Wrench, iconColor: 'text-gray-600', iconBg: 'bg-gray-100' },
  { label: 'Startup Loan', path: '/startup-loan', icon: Rocket, iconColor: 'text-purple-500', iconBg: 'bg-purple-50' },
  { label: 'Consumer Durable Loan', path: '/consumer-loan', icon: Monitor, iconColor: 'text-teal-500', iconBg: 'bg-teal-50' },
  { label: 'Two Wheeler Loan', path: '/two-wheeler-loan', icon: Zap, iconColor: 'text-orange-500', iconBg: 'bg-orange-50' },
  { label: 'Agricultural Loan', path: '/agri-loan', icon: Leaf, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); setDropdownOpen(false); setShowAllProducts(false); }, [pathname]);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top strip */}
      <div className="hidden md:flex bg-[#031412] border-b border-[#1e332d] px-6 py-2 justify-between items-center text-[11px] text-gray-400">
        <div className="flex items-center gap-6">
          <a href="tel:+919619505022" className="flex items-center gap-1.5 hover:text-[#00C853] transition-colors">
            <Phone size={11} /> +919619505022
          </a>
          <a href="mailto:info@forever-financialservices.com" className="flex items-center gap-1.5 hover:text-[#00C853] transition-colors">
            <Mail size={11} /> info@forever-financialservices.com
          </a>
          <span className="flex items-center gap-1.5">
            <Clock size={11} /> Mon-Sat, 9AM-7PM
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500">Follow us:</span>
          {[
            { Icon: FbIcon, href: 'https://www.facebook.com/profile.php?id=61570778671674' },
            { Icon: IgIcon, href: 'https://www.instagram.com/foreverfinancialservices_/' },
            { Icon: LiIcon, href: 'https://www.linkedin.com/in/forever-financial-services-undefined-8181a3407' },
            { Icon: YtIcon, href: 'https://www.youtube.com/@ForeverFinancialServices' },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="w-5 h-5 rounded-full bg-[#1e332d] flex items-center justify-center hover:bg-[#00C853] hover:text-white transition-all">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav ref={navRef} className={`transition-all duration-300 ${scrolled ? 'bg-[#031412]/95 backdrop-blur-xl shadow-lg shadow-black/30' : 'bg-[#031412]'} border-b-2 border-[#00C853] px-6 py-3 flex justify-between items-center`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-black border-2 border-yellow-500 flex items-center justify-center">
            <span className="text-yellow-400 font-sora font-bold text-xs">FFS</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 relative">
          {NAV_LINKS.map(({ label, path, hasDropdown }) => (
            <div key={label} className="relative">
              
              <div>
                <Link to={path}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault();
                      setDropdownOpen(!dropdownOpen);
                    }
                  }}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    pathname === path || (hasDropdown && dropdownOpen)
                      ? 'border border-white/20 bg-transparent text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}>
                  {label}
                  {hasDropdown && <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />}
                </Link>
              </div>

              {/* Rich Dropdown */}
              {hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: 15, x: "-50%" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[calc(100%+8px)] left-1/2 w-[520px] bg-white rounded-2xl shadow-xl p-6 z-50 cursor-default border border-gray-100 max-h-[85vh] overflow-y-auto custom-scrollbar">
                      
                      {/* Triangle pointer */}
                      <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white filter drop-shadow-[0_-2px_2px_rgba(0,0,0,0.05)]"></div>

                      {/* Header */}
                      <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
                        <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase font-jakarta">OUR PRODUCTS</span>
                        <button 
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAllProducts(!showAllProducts); }} 
                          className="text-[#00C853] text-[12px] font-bold hover:underline flex items-center gap-1 font-jakarta">
                          {showAllProducts ? 'View Less' : 'View All'} <span className={`text-sm leading-none mb-0.5 transition-transform ${showAllProducts ? 'rotate-180' : ''}`}>▴</span>
                        </button>
                      </div>

                      {/* Grid */}
                      <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                        {(showAllProducts ? [...PRODUCT_ITEMS, ...EXTRA_PRODUCT_ITEMS] : PRODUCT_ITEMS).map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link key={item.label} to={item.path}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-3 group">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.iconBg} ${item.iconColor} group-hover:scale-110 transition-transform shrink-0`}>
                                <Icon size={16} strokeWidth={2.5} />
                              </div>
                              <span className="text-gray-800 text-[13px] font-medium group-hover:text-[#00C853] transition-colors font-jakarta leading-tight">
                                {item.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer */}
                      <div className="mt-5 pt-4 flex justify-between items-center">
                        <span className="text-gray-400 text-[11px] font-medium font-jakarta">{showAllProducts ? 'All products loaded' : '+ 10 products available'}</span>
                        <Link to="/loans" onClick={() => setDropdownOpen(false)} className="bg-[#00C853] hover:bg-[#00a844] text-white px-4 py-2 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition-colors font-jakarta shadow-md shadow-[#00C853]/20">
                          View All <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-1.5 bg-[#1e332d] border border-[#2a453d] px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-colors">
            <Globe size={13} /> EN <ChevronDown size={12} />
          </button>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a1f1a] border-b border-[#1e332d] px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <Link key={label} to={path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === path ? 'bg-[#00C853]/10 text-[#00C853]' : 'text-gray-300 hover:text-white'
                }`}>
                {label}
              </Link>
            ))}
            {/* Mobile Product items shortcut */}
            <div className="mt-2 pl-4 border-l-2 border-[#1e332d] flex flex-col gap-2">
               {PRODUCT_ITEMS.slice(0, 4).map(item => (
                 <Link key={item.path} to={item.path} className="text-gray-400 text-sm hover:text-white py-1">
                   {item.label}
                 </Link>
               ))}
               <Link to="/loans" className="text-[#00C853] text-sm font-bold py-1">View All Products →</Link>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#1e332d] flex gap-4 text-xs text-gray-400">
              <a href="tel:+919619505022" className="flex items-center gap-1 hover:text-[#00C853]"><Phone size={11} /> +91 96195 05022</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
