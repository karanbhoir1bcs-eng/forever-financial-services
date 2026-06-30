import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { pageView } from './utils/fbpixel';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import HowItWorks from './components/sections/HowItWorks';
import WhyChooseUs from './components/sections/WhyChooseUs';
import TrustedPartners from './components/sections/TrustedPartners';
import HomeCalculator from './components/sections/HomeCalculator';
import Testimonials from './components/sections/Testimonials';
import ContactCTA from './components/sections/ContactCTA';

// Import the new generic ProductPage component
import ProductPage from './pages/ProductPage';
import { productPagesData } from './data/productPagesData';
import LoansPage from './pages/LoansPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Track Facebook Pixel pageView on every route change
// Also scrolls to top of page on route change to fix the issue where clicking a link from bottom stays at bottom
function RouteChangeTracker() {
  const location = useLocation();
  useEffect(() => { 
    pageView(); 
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Products limit={6} showViewAll={true} />
      <WhyChooseUs />
      <TrustedPartners />
      <HowItWorks />
      <HomeCalculator />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <div className="flex flex-col min-h-screen bg-[#031412]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Main nav pages */}
            <Route path="/products" element={<LoansPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Individual Product Pages from Dropdown */}
            <Route path="/car-loan" element={<ProductPage productData={productPagesData['car-loan']} />} />
            <Route path="/car-refinance" element={<ProductPage productData={productPagesData['car-refinance']} />} />
            <Route path="/car-refinance-loan" element={<ProductPage productData={productPagesData['car-refinance']} />} />
            <Route path="/commercial-vehicle-loan" element={<ProductPage productData={productPagesData['commercial-vehicle-loan']} />} />
            <Route path="/personal-loan" element={<ProductPage productData={productPagesData['personal-loan']} />} />
            <Route path="/home-loan" element={<ProductPage productData={productPagesData['home-loan']} />} />
            
            <Route path="/unsecured-business-loan" element={<ProductPage productData={productPagesData['unsecured-business-loan']} />} />
            <Route path="/working-capital-loan" element={<ProductPage productData={productPagesData['working-capital-loan']} />} />
            <Route path="/balance-transfer" element={<ProductPage productData={productPagesData['balance-transfer']} />} />
            <Route path="/loan-for-professionals" element={<ProductPage productData={productPagesData['loan-for-professionals']} />} />
            <Route path="/loan-against-property" element={<ProductPage productData={productPagesData['loan-against-property']} />} />
            
            {/* Fallback old paths just in case they are linked anywhere else */}
            <Route path="/business-loan" element={<ProductPage productData={productPagesData['unsecured-business-loan']} />} />
            <Route path="/working-capital" element={<ProductPage productData={productPagesData['working-capital-loan']} />} />
            <Route path="/professionals-loan" element={<ProductPage productData={productPagesData['loan-for-professionals']} />} />
            
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
