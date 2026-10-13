import React, { useState, useEffect } from 'react';
import InstallAppBanner from './components/InstallAppBanner';
import MatrimonialHeader from './components/MatrimonialHeader';
import AafaqHero from './components/AafaqHero';
import AafaqLiveSnapshot from './components/AafaqLiveSnapshot';
import HeroSearch from './components/HeroSearch';
import AafaqServicesSection from './components/AafaqServicesSection';
import AafaqSupportSection from './components/AafaqSupportSection';
import CasteFilterSection from './components/CasteFilterSection';
import ProfileCard from './components/ProfileCard';
import ProposalRequestSection from './components/ProposalRequestSection';
import FeeStructureSection from './components/FeeStructureSection';
import IslamicGuidelines from './components/IslamicGuidelines';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MatrimonialFooter from './components/MatrimonialFooter';
import RegisterModal from './components/RegisterModal';
import DetailModal from './components/DetailModal';
import SavedProfilesDrawer from './components/SavedProfilesDrawer';
import { defaultProfiles, ADMIN_PHONE } from './data/matrimonialData';
import { translations } from './data/translations';
import { Search, MessageCircle, Heart, UserPlus, RotateCcw, Sparkles } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ur'); // 'ur' or 'en'
  const t = translations[lang] || translations.ur;

  const [profiles, setProfiles] = useState([]);
  const [genderFilter, setGenderFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('');
  const [casteFilter, setCasteFilter] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  
  // Favorites / Saved profiles
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Modals state
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

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

  // Load profiles from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('humsafar_profiles_v2');
      if (stored) {
        setProfiles(JSON.parse(stored));
      } else {
        localStorage.setItem('humsafar_profiles_v2', JSON.stringify(defaultProfiles));
        setProfiles(defaultProfiles);
      }

      // Load saved / bookmarks
      const storedSaved = localStorage.getItem('humsafar_saved_profiles');
      if (storedSaved) {
        setSavedProfiles(JSON.parse(storedSaved));
      }
    } catch (e) {
      setProfiles(defaultProfiles);
    }
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ur' ? 'en' : 'ur'));
  };

  // Save / Toggle bookmark
  const handleToggleSave = (profile) => {
    setSavedProfiles((prev) => {
      let updated;
      const exists = prev.some((p) => p.id === profile.id);
      if (exists) {
        updated = prev.filter((p) => p.id !== profile.id);
      } else {
        updated = [...prev, profile];
      }
      try {
        localStorage.setItem('humsafar_saved_profiles', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleRemoveSaved = (profileId) => {
    setSavedProfiles((prev) => {
      const updated = prev.filter((p) => p.id !== profileId);
      try {
        localStorage.setItem('humsafar_saved_profiles', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Save to LocalStorage whenever new profile added
  const handleAddProfile = (newProfile) => {
    const updated = [newProfile, ...profiles];
    setProfiles(updated);
    try {
      localStorage.setItem('humsafar_profiles_v2', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetFilters = () => {
    setGenderFilter('all');
    setCityFilter('');
    setCasteFilter('');
  };

  const handleSelectCaste = (casteName) => {
    setCasteFilter(casteName);
    const elem = document.getElementById('profiles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter logic: filter by gender, city, caste
  const filteredProfiles = profiles.filter((p) => {
    const matchGender = genderFilter === 'all' || p.gender === genderFilter;
    const matchCity = !cityFilter || p.city?.toLowerCase().includes(cityFilter.trim().toLowerCase());
    const matchCaste = !casteFilter || p.caste?.toLowerCase().includes(casteFilter.trim().toLowerCase());
    return matchGender && matchCity && matchCaste;
  });

  return (
    <div className={`min-h-screen bg-[#f8f6f1] flex flex-col overflow-x-hidden ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      
      {/* Top Mobile App Install Banner */}
      <InstallAppBanner lang={lang} />

      {/* Header with Language Switcher, Saved Profiles & Navigation */}
      <MatrimonialHeader
        onOpenRegister={() => setIsRegisterOpen(true)}
        onNavigate={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
        savedCount={savedProfiles.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Aafaq.pk Style Hero Section */}
      <div id="home">
        <AafaqHero onOpenRegister={() => setIsRegisterOpen(true)} lang={lang} t={t} />
      </div>

      {/* Rishta Corner Main Section (Aafaq.pk Style Locked Layout) */}
      <section className="aaf-section aaf-section--rishta">
        <div className="aaf-container">
          
          <div className="aaf-rishta-panel">
            
            <header className="aaf-rishta-panel__header text-center sm:text-right">
              <p className="aaf-preheader">
                {lang === 'ur' ? 'بااعتماد خاندانی ادارہ' : 'Families Trust Us'}
              </p>
              <h2 className="aaf-heading">
                {lang === 'ur' ? 'رشتہ کارنر (Rishta Corner)' : 'Rishta Corner'}
              </h2>
              <p className="aaf-rishta-panel__lead">
                {lang === 'ur' ? 'سنتِ نبوی ﷺ کے مطابق تصدیق شدہ خاندانی رشتے' : 'Trusted Rishta introductions within noble families.'}
              </p>
              <p className="aaf-rishta-panel__history">
                {lang === 'ur' ? (
                  <>
                    ہمارا سب سے مقبول اور باوقار شعبہ، جس کے ذریعے <strong>2014 سے اب تک ہزاروں رشتے</strong> طے پا چکے ہیں — اب مزید جدید اور تیز رفتار۔
                  </>
                ) : (
                  <>
                    Our most popular matrimonial service, with <strong>thousands of verified profiles</strong> since 2014.
                  </>
                )}
              </p>
            </header>

            {/* Aafaq.pk Style Live Rishta Snapshot Carousel */}
            <AafaqLiveSnapshot lang={lang} />

            {/* Dual Action Buttons */}
            <div className="aaf-rishta-actions">
              <button
                type="button"
                onClick={() => {
                  const elem = document.getElementById('search-panel');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="aaf-rishta-button aaf-rishta-button--primary hover:opacity-95 transition-all cursor-pointer"
              >
                <span>{lang === 'ur' ? 'رشتے تلاش کریں (Review Rishtas)' : 'Review Rishtas'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsRegisterOpen(true)}
                className="aaf-rishta-button aaf-rishta-button--secondary hover:bg-emerald-50 transition-all cursor-pointer"
              >
                <span>{lang === 'ur' ? 'نیا رشتہ رجسٹر کریں (Register a Rishta)' : 'Register a Rishta'}</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Search by Caste, City & Gender Panel */}
      <div id="search-panel">
        <HeroSearch
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          casteFilter={casteFilter}
          setCasteFilter={setCasteFilter}
          onResetFilters={handleResetFilters}
          totalProfilesCount={profiles.length}
          onOpenRegister={() => setIsRegisterOpen(true)}
          lang={lang}
          t={t}
        />
      </div>

      {/* Main Profiles Grid with Search Results */}
      <main id="profiles" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 flex-grow w-full">
        
        {/* Results Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-200 gap-3">
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2 font-serif">
              <Heart className="w-5 h-5 text-emerald-800 fill-emerald-800" />
              <span>{t.availableProfilesHeading}</span>
              <span className="text-[11px] sm:text-xs bg-emerald-950 text-amber-400 px-3 py-0.5 rounded-full font-bold">
                {filteredProfiles.length} {t.resultsCount}
              </span>
            </h3>

            {casteFilter && (
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1 flex items-center gap-2">
                <span>{t.selectedCasteLabel} <strong className="text-emerald-900 font-black">{casteFilter}</strong></span>
                <button
                  onClick={() => setCasteFilter('')}
                  className="text-rose-600 underline font-bold"
                >
                  ({lang === 'ur' ? 'فلٹر ہٹائیں' : 'Clear'})
                </button>
              </p>
            )}

            {cityFilter && (
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 flex items-center gap-2">
                <span>شہر: <strong className="text-slate-800">{cityFilter}</strong></span>
                <button
                  onClick={() => setCityFilter('')}
                  className="text-rose-600 underline font-bold"
                >
                  ({lang === 'ur' ? 'فلٹر ہٹائیں' : 'Clear'})
                </button>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {(casteFilter || cityFilter || genderFilter !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] sm:text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 bg-white border px-3 py-1.5 rounded-xl shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.btnReset}</span>
              </button>
            )}

            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-emerald-900 hover:bg-emerald-950 text-amber-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{t.btnRegister}</span>
            </button>
          </div>
        </div>

        {/* Profiles Grid or No-Result View */}
        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-lg sm:text-xl font-bold text-slate-800">
              {casteFilter ? `برادری "${casteFilter}" کا فی الحال کوئی رشتہ لسٹ میں نہیں ہے۔` : t.noProfilesFound}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              آپ پریشان نہ ہوں! آپ نیچے دیے گئے فارم میں اپنے کوائف درج کروائیں، ہماری ٹیم خصوصی طور پر آپ کی مطلوبہ ذات ({casteFilter || 'برادری'}) کا رشتہ تلاش کر کے کروائے گی۔
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold"
              >
                {t.btnViewAll}
              </button>
              <button
                onClick={() => {
                  const elem = document.getElementById('form');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-emerald-900 text-amber-300 rounded-xl text-xs font-bold shadow-md"
              >
                کوائف درج کروائیں (فیس: 5,000)
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onViewDetail={(p) => setSelectedProfile(p)}
                isSaved={savedProfiles.some((s) => s.id === profile.id)}
                onToggleSave={handleToggleSave}
                lang={lang}
                t={t}
              />
            ))}
          </div>
        )}

      </main>

      {/* Aafaq.pk Style Vertical Service Rows (Stay Connected) */}
      <AafaqServicesSection onOpenRegister={() => setIsRegisterOpen(true)} lang={lang} />

      {/* Aafaq.pk Style Blood Bank & Trust & Privacy Section */}
      <AafaqSupportSection lang={lang} />

      {/* Caste / Baradari Quick Selector Section */}
      <div id="castes">
        <CasteFilterSection
          selectedCaste={casteFilter}
          onSelectCaste={handleSelectCaste}
          lang={lang}
          t={t}
        />
      </div>

      {/* Comprehensive Online Biodata Form Section (On-Page) */}
      <ProposalRequestSection
        onAddProfile={handleAddProfile}
        lang={lang}
        t={t}
      />

      {/* 5,000 PKR Fee Structure & Matchmaking Package */}
      <FeeStructureSection
        onOpenRegister={() => setIsRegisterOpen(true)}
        lang={lang}
        t={t}
      />

      {/* Islamic Guidelines & Quranic Teachings on Nikah */}
      <IslamicGuidelines lang={lang} t={t} />

      {/* 3 Step Matrimonial Process */}
      <HowItWorks lang={lang} onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* About Us / Foundation Section */}
      <div id="about">
        <AboutSection
          onOpenRegister={() => setIsRegisterOpen(true)}
          lang={lang}
          t={t}
        />
      </div>

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
        onAddProfile={handleAddProfile}
        lang={lang}
        t={t}
      />

      {/* Profile Details & WhatsApp Modal */}
      <DetailModal
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        profile={selectedProfile}
        lang={lang}
        t={t}
      />

      {/* Saved Profiles / Shortlist Drawer */}
      <SavedProfilesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProfiles={savedProfiles}
        onRemoveSaved={handleRemoveSaved}
        onViewDetail={(p) => setSelectedProfile(p)}
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
