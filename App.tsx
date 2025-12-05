import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CeoMessage from './components/CeoMessage';
import Services from './components/Services';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import EnquiryForm from './components/EnquiryForm';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTopButton from './components/ScrollToTopButton';
import PromotionalVideo from './components/PromotionalVideo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <CeoMessage />
        <PromotionalVideo />
        <Services />
        <Clients />
        <FAQ />
        <div id="enquiry" className="bg-gradient-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8 scroll-m-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <EnquiryForm />
                <ContactUs />
            </div>
        </div>
        <PrivacyPolicy />
        <TermsOfService />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;