import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare } from 'lucide-react';

// Inline SVGs for social icons
const FbIcon = () => (<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>);
const IgIcon = () => (<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const LiIcon = () => (<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
const YtIcon = () => (<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>);

const LOAN_LINKS = [
  { label: 'Car Loan', path: '/car-loan' },
  { label: 'Car Refinance', path: '/car-refinance' },
  { label: 'Personal Loan', path: '/personal-loan' },
  { label: 'Home Loan', path: '/home-loan' },
  { label: 'Business Loan', path: '/business-loan' },
];

const MORE_PRODUCTS = [
  { label: 'Commercial Vehicle Loan', path: '/commercial-vehicle-loan' },
  { label: 'Working Capital', path: '/working-capital' },
  { label: 'Balance Transfer', path: '/balance-transfer' },
  { label: 'Loan Against Property', path: '/loan-against-property' },
  { label: 'Professionals Loan', path: '/professionals-loan' },
];

const COMPANY_LINKS = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/' },
  { label: 'Terms & Conditions', path: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1b19] border-t border-[#1e332d] overflow-hidden">
      
      {/* Top Banner */}
      <div className="bg-[#0e2421] border-b border-[#1e332d]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-white">
            <div className="w-10 h-10 rounded-full bg-[#00C853]/10 flex items-center justify-center text-[#00C853]">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="font-sora font-bold text-sm">Have questions? Talk to a loan expert.</p>
              <p className="text-gray-400 text-xs font-jakarta">Free consultation · No spam calls</p>
            </div>
          </div>
          <a href="tel:+919619505022" className="bg-[#00C853] hover:bg-[#00a844] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors font-jakarta shadow-lg shadow-[#00C853]/20">
            <Phone size={14} /> Call Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-black border-2 border-yellow-500 flex items-center justify-center shrink-0">
                <span className="text-yellow-400 font-sora font-bold text-[13px]">FFS</span>
              </div>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6 font-jakarta">
              India's trusted loan advisory platform. We connect you with 20+ top banks and NBFCs to get you the best loan deal, fast.
            </p>
            <div className="flex gap-2.5 mb-8">
              {[
                { Icon: FbIcon, href: 'https://www.facebook.com/profile.php?id=61570778671674' },
                { Icon: LiIcon, href: 'https://www.linkedin.com/in/forever-financial-services-undefined-8181a3407' },
                { Icon: IgIcon, href: 'https://www.instagram.com/foreverfinancialservices_/' },
                { Icon: YtIcon, href: 'https://www.youtube.com/@ForeverFinancialServices' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#122824] flex items-center justify-center text-gray-400 hover:bg-[#00C853] hover:text-white transition-all">
                  <Icon />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1e332d] bg-[#0c201d]">
              <Building2 size={12} className="text-gray-400" />
              <span className="text-xs text-gray-400 font-jakarta">RBI Registered NBFC Partner</span>
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sora text-[11px] tracking-widest uppercase flex items-center gap-2">
              <span className="w-4 border-t-2 border-[#00C853]"></span> LOAN PRODUCTS
            </h4>
            <ul className="space-y-4">
              {LOAN_LINKS.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="text-gray-400 text-[13px] hover:text-[#00C853] transition-colors font-jakarta flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e332d] group-hover:bg-[#00C853] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sora text-[11px] tracking-widest uppercase flex items-center gap-2">
              <span className="w-4 border-t-2 border-[#00C853]"></span> MORE PRODUCTS
            </h4>
            <ul className="space-y-4">
              {MORE_PRODUCTS.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="text-gray-400 text-[13px] hover:text-[#00C853] transition-colors font-jakarta flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e332d] group-hover:bg-[#00C853] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact Cards */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sora text-[11px] tracking-widest uppercase flex items-center gap-2">
              <span className="w-4 border-t-2 border-[#00C853]"></span> COMPANY
            </h4>
            <ul className="space-y-4 mb-8">
              {COMPANY_LINKS.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="text-gray-400 text-[13px] hover:text-[#00C853] transition-colors font-jakarta flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e332d] group-hover:bg-[#00C853] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-[#102925] border border-[#1e332d] rounded-2xl p-4 mb-3">
              <div className="flex items-center gap-2 text-[#00C853] mb-1">
                <Phone size={12} /> <span className="text-[10px] font-bold tracking-wider uppercase font-jakarta">Call Us</span>
              </div>
              <a href="tel:+919619505022" className="text-white font-bold text-lg hover:text-[#00C853] transition-colors font-sora block mb-0.5">
                +919619505022
              </a>
              <p className="text-gray-500 text-[11px] font-jakarta">Mon-Sat, 9am-7pm</p>
            </div>

            <div className="bg-[#102925] border border-[#1e332d] rounded-2xl p-4">
              <div className="flex items-center gap-2 text-[#00C853] mb-1">
                <Mail size={12} /> <span className="text-[10px] font-bold tracking-wider uppercase font-jakarta">Email Us</span>
              </div>
              <a href="mailto:info@forever-financialservices.com" className="text-gray-300 hover:text-[#00C853] transition-colors text-[13px] font-jakarta block">
                info@forever-financialservices.com
              </a>
            </div>
          </div>
        </div>

        {/* Stats Divider */}
        <div className="border-t border-b border-[#1e332d] py-10 my-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <p className="text-[#00C853] text-2xl font-bold font-sora mb-1">50,000+</p>
              <p className="text-gray-500 text-[11px] font-jakarta uppercase tracking-wider">Happy Customers</p>
            </div>
            <div>
              <p className="text-[#00C853] text-2xl font-bold font-sora mb-1">₹500 Cr+</p>
              <p className="text-gray-500 text-[11px] font-jakarta uppercase tracking-wider">Total Disbursed</p>
            </div>
            <div>
              <p className="text-[#00C853] text-2xl font-bold font-sora mb-1">95%</p>
              <p className="text-gray-500 text-[11px] font-jakarta uppercase tracking-wider">Approval Rate</p>
            </div>
            <div>
              <p className="text-[#00C853] text-2xl font-bold font-sora mb-1">20+</p>
              <p className="text-gray-500 text-[11px] font-jakarta uppercase tracking-wider">Banking Partners</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 font-jakarta">
          <div>
            <p className="mb-1">© {new Date().getFullYear()} Forever Financial Services. All rights reserved.</p>
            <p>Developed by <span className="text-[#00C853]">BrightCrest Solution</span></p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-[#00C853] transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">·</span>
            <Link to="/" className="hover:text-[#00C853] transition-colors">Terms</Link>
            <span className="text-gray-700">·</span>
            <Link to="/contact" className="hover:text-[#00C853] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Add building icon if not exported above
function Building2(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  );
}
