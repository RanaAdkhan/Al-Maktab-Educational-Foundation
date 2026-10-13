import React, { useState, useEffect } from 'react';
import InstallAppBanner from './components/InstallAppBanner';
import MatrimonialHeader from './components/MatrimonialHeader';
import MatrimonialFooter from './components/MatrimonialFooter';
import DetailModal from './components/DetailModal';
import SavedProfilesDrawer from './components/SavedProfilesDrawer';

// Dedicated Page Views
import HomePage from './pages/HomePage';
import BrowseRishtasPage from './pages/BrowseRishtasPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { defaultProfiles, ADMIN_PHONE } from './data/matrimonialData';
import { translations } from './data/translations';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ur'); // 'ur' or 'en'
  const t = translations[lang] || translations.ur;

  // Multi-page routing state: 'home', 'browse', 'register', 'about', 'contact'
  const [currentPage, setCurrentPage] = useState('home');

  const [profiles, setProfiles] = useState([]);
  const [genderFilter, setGenderFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('');
  const [casteFilter, setCasteFilter] = useState('');
  
  // Favorites / Saved profiles
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Selected profile for Details modal
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

  // Sync URL hash with currentPage
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'browse', 'register', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <div className={`min-h-screen bg-[#f8f6f1] text-[#20231f] flex flex-col overflow-x-hidden ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      
      {/* Top Mobile App Install Banner */}
      <InstallAppBanner lang={lang} />

      {/* Clean White Multi-Page Header */}
      <MatrimonialHeader
        onNavigate={handleNavigate}
        activeTab={currentPage}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
        savedCount={savedProfiles.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Conditional Dedicated Page View */}
      <div className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            lang={lang}
            t={t}
          />
        )}

        {currentPage === 'browse' && (
          <BrowseRishtasPage
            profiles={profiles}
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            cityFilter={cityFilter}
            setCityFilter={setCityFilter}
            casteFilter={casteFilter}
            setCasteFilter={setCasteFilter}
            onResetFilters={handleResetFilters}
            onViewDetail={(p) => setSelectedProfile(p)}
            savedProfiles={savedProfiles}
            onToggleSave={handleToggleSave}
            onNavigate={handleNavigate}
            lang={lang}
            t={t}
          />
        )}

        {currentPage === 'register' && (
          <RegisterPage
            onAddProfile={handleAddProfile}
            onNavigate={handleNavigate}
            lang={lang}
            t={t}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            lang={lang}
            t={t}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            lang={lang}
            t={t}
          />
        )}
      </div>

      {/* Clean Footer (Persistent Across Pages) */}
      <MatrimonialFooter lang={lang} t={t} />

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
        className={`fixed bottom-4 sm:bottom-6 ${lang === 'ur' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group border-2 border-white`}
        title="WhatsApp Helpline"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs sm:text-sm text-white px-0 group-hover:px-2">
          {t.btnHelpline}
        </span>
      </a>

    </div>
  );
}
