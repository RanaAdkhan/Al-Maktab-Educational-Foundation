import React, { useState, useEffect } from 'react';
import InstallAppBanner from './components/InstallAppBanner';
import MatrimonialHeader from './components/MatrimonialHeader';
import HeroSearch from './components/HeroSearch';
import StatsCounter from './components/StatsCounter';
import IslamicGuidelines from './components/IslamicGuidelines';
import ProposalRequestSection from './components/ProposalRequestSection';
import FeeStructureSection from './components/FeeStructureSection';
import CasteFilterSection from './components/CasteFilterSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import WhyChooseMatrimonial from './components/WhyChooseMatrimonial';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MatrimonialFooter from './components/MatrimonialFooter';
import RegisterModal from './components/RegisterModal';
import { ADMIN_PHONE } from './data/matrimonialData';
import { translations } from './data/translations';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ur'); // 'ur' or 'en'
  const t = translations[lang] || translations.ur;

  const [activeTab, setActiveTab] = useState('home');
  const [selectedCaste, setSelectedCaste] = useState('');
  
  // Registration Modal state
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Sync HTML dir and lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    if (lang === 'ur') {
      document.body.classList.remove('lang-en');
      document.body.classList.add('lang-ur');
    } else {
      document.body.classList.remove('lang-ur');
      document.body.classList.add('lang-en');
    }
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ur' ? 'en' : 'ur'));
  };

  const handleSelectCaste = (casteName) => {
    setSelectedCaste(casteName);
    const elem = document.getElementById('form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col overflow-x-hidden ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      
      {/* Top Mobile App Install Banner */}
      <InstallAppBanner lang={lang} />

      {/* Header with Language Switcher & Navigation */}
      <MatrimonialHeader
        onOpenRegister={() => setIsRegisterOpen(true)}
        onNavigate={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
      />

      {/* Hero & Personalized Matchmaking Overview */}
      <div id="home">
        <HeroSearch
          onOpenRegister={() => setIsRegisterOpen(true)}
          lang={lang}
          t={t}
        />
      </div>

      {/* Live Verified Platform Stats Bar */}
      <StatsCounter lang={lang} />

      {/* Islamic Guidelines & Quranic Teachings on Nikah */}
      <IslamicGuidelines lang={lang} t={t} />

      {/* Comprehensive Online Biodata Form Section (On-Page) */}
      <ProposalRequestSection
        onAddProfile={() => {}}
        lang={lang}
        t={t}
      />

      {/* 5,000 PKR Fee Structure & Matchmaking Package */}
      <FeeStructureSection
        onOpenRegister={() => setIsRegisterOpen(true)}
        lang={lang}
        t={t}
      />

      {/* 3 Step Matrimonial Process (Submit Biodata + 5,000 Fee -> Search & Verify -> Family Meeting) */}
      <HowItWorks lang={lang} onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Caste / Baradari Finder Section */}
      <div id="castes">
        <CasteFilterSection
          selectedCaste={selectedCaste}
          onSelectCaste={handleSelectCaste}
          lang={lang}
          t={t}
        />
      </div>

      {/* About Us / Foundation Section */}
      <div id="about">
        <AboutSection
          onOpenRegister={() => setIsRegisterOpen(true)}
          lang={lang}
          t={t}
        />
      </div>

      {/* Why Choose Us */}
      <WhyChooseMatrimonial lang={lang} t={t} />

      {/* Testimonials & Real Family Reviews */}
      <TestimonialsSection lang={lang} />

      {/* FAQ Section */}
      <FAQSection lang={lang} />

      {/* Footer / Contact */}
      <div id="contact">
        <MatrimonialFooter lang={lang} t={t} />
      </div>

      {/* Comprehensive Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onAddProfile={() => {}}
        lang={lang}
        t={t}
      />

      {/* Floating WhatsApp Helpline Button */}
      <a
        href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے ہم سفر رشتہ سنٹر میں کوائف درج کروانے اور فیس کی معلومات حاصل کرنی ہیں۔' : 'Hello! I would like information regarding matrimonial registration and fees.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 sm:bottom-6 ${lang === 'ur' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group border-2 border-white/40`}
        title="WhatsApp Helpline"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-emerald-600" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs sm:text-sm text-white px-0 group-hover:px-2">
          {t.btnHelpline}
        </span>
      </a>

    </div>
  );
}
