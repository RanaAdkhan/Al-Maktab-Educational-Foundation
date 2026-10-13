import React, { useState, useEffect } from 'react';
import InstallAppBanner from './components/InstallAppBanner';
import MatrimonialHeader from './components/MatrimonialHeader';
import MatrimonialHero from './components/MatrimonialHero';
import ProfileCard from './components/ProfileCard';
import HowItWorks from './components/HowItWorks';
import MatrimonialFooter from './components/MatrimonialFooter';
import RegisterModal from './components/RegisterModal';
import DetailModal from './components/DetailModal';
import SavedProfilesDrawer from './components/SavedProfilesDrawer';
import { defaultProfiles, ADMIN_PHONE } from './data/matrimonialData';
import { translations } from './data/translations';
import { Search, MessageCircle, Heart, UserPlus, RotateCcw, Sparkles, Filter, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';

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

  // Filter logic: filter by gender, city, caste
  const filteredProfiles = profiles.filter((p) => {
    const matchGender = genderFilter === 'all' || p.gender === genderFilter;
    const matchCity = !cityFilter || p.city?.toLowerCase().includes(cityFilter.trim().toLowerCase());
    const matchCaste = !casteFilter || p.caste?.toLowerCase().includes(casteFilter.trim().toLowerCase());
    return matchGender && matchCity && matchCaste;
  });

  const bridesCount = profiles.filter((p) => p.gender === 'عورت').length;
  const groomsCount = profiles.filter((p) => p.gender === 'مرد').length;

  return (
    <div className={`min-h-screen bg-[#f8f6f1] flex flex-col overflow-x-hidden ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      
      {/* Top Mobile App Install Banner */}
      <InstallAppBanner lang={lang} />

      {/* Clean Navbar */}
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

      {/* Focused Hero Section with Instant Search & Popular Caste Tags */}
      <div id="home">
        <MatrimonialHero
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

      {/* Main Rishta Profiles Grid (Right Below Hero) */}
      <main id="profiles" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 flex-grow w-full">
        
        {/* Results Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-slate-200 gap-4">
          
          <div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-800 fill-emerald-800" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
                {lang === 'ur' ? 'دستیاب خاندانی رشتے' : 'Available Marriage Proposals'}
              </h2>
              <span className="text-xs bg-emerald-900 text-amber-300 px-2.5 py-0.5 rounded-full font-bold">
                {filteredProfiles.length} {lang === 'ur' ? 'رشتے' : 'Matches'}
              </span>
            </div>

            {/* Active Filters Display */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {casteFilter && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-lg border border-amber-300">
                  <span>برادری: <strong>{casteFilter}</strong></span>
                  <button
                    onClick={() => setCasteFilter('')}
                    className="text-rose-600 hover:text-rose-800 text-sm font-black ml-1"
                    title="Remove Filter"
                  >
                    ×
                  </button>
                </span>
              )}

              {cityFilter && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-slate-200 text-slate-800 font-bold px-2.5 py-1 rounded-lg">
                  <span>شہر: <strong>{cityFilter}</strong></span>
                  <button
                    onClick={() => setCityFilter('')}
                    className="text-rose-600 hover:text-rose-800 text-sm font-black ml-1"
                    title="Remove Filter"
                  >
                    ×
                  </button>
                </span>
              )}

              {(casteFilter || cityFilter || genderFilter !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-rose-600 hover:underline font-bold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{lang === 'ur' ? 'تمام فلٹرز ختم کریں' : 'Clear All'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Filter Tabs: All, Brides, Grooms */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                genderFilter === 'all'
                  ? 'bg-emerald-900 text-amber-300 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ur' ? 'تمام رشتے' : 'All'} ({profiles.length})
            </button>

            <button
              onClick={() => setGenderFilter('عورت')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                genderFilter === 'عورت'
                  ? 'bg-rose-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-rose-700'
              }`}
            >
              👰 {lang === 'ur' ? 'دلہن (خواتین)' : 'Brides'} ({bridesCount})
            </button>

            <button
              onClick={() => setGenderFilter('مرد')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                genderFilter === 'مرد'
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-emerald-900'
              }`}
            >
              🤵 {lang === 'ur' ? 'دلہا (مرد)' : 'Grooms'} ({groomsCount})
            </button>
          </div>

        </div>

        {/* Profiles Grid or No-Result View */}
        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white rounded-3xl border-2 border-dashed border-amber-300 p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
            <Search className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              {casteFilter ? `برادری "${casteFilter}" کا رشتہ فی الحال لسٹ میں موجود نہیں ہے۔` : 'کوئی رشتہ نہیں ملا'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              آپ پریشان نہ ہوں! آپ نیچے دیے گئے بٹن سے اپنے کوائف درج کروائیں یا واٹس ایپ پر رابطہ کریں۔ ہماری ٹیم آپ کی مطلوبہ برادری <strong>({casteFilter || 'برادری'})</strong> کا رشتہ خود تلاش کروا کر دے گی۔
            </p>
            <div className="mt-2 text-xs font-bold text-emerald-900 bg-emerald-50 py-1.5 px-3 rounded-lg inline-block border border-emerald-200">
              سروس و رجسٹریشن فیس: صرف 5,000 روپے
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all"
              >
                {lang === 'ur' ? 'تمام رشتے دیکھیں' : 'View All Profiles'}
              </button>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-amber-300 rounded-xl text-xs font-black shadow-md transition-all hover:scale-105"
              >
                {lang === 'ur' ? 'کوائف درج کروائیں (فیس: 5,000)' : 'Register Profile (Rs. 5,000)'}
              </button>

              <a
                href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(`السلام علیکم! مجھے برادری "${casteFilter || 'مخصوص'}" کا رشتہ تلاش کروانا ہے۔ رہنمائی فرمائیں۔`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واٹس ایپ پر رشتہ مانگیں</span>
              </a>
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

      {/* 3 Step Process (How It Works) */}
      <div id="how-it-works">
        <HowItWorks lang={lang} onOpenRegister={() => setIsRegisterOpen(true)} />
      </div>

      {/* Action-Driven Call To Action Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white py-12 px-4 border-t-2 border-b-2 border-amber-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-amber-300/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ur' ? '100% شرعی و خاندانی اصول' : '100% Sunnah & Dignified Matches'}</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-black text-white mb-2 leading-relaxed">
            {lang === 'ur' ? 'کیا آپ کا یا آپ کے بچوں کا رشتہ مطلوب ہے؟' : 'Looking for an Ideal Marriage Proposal?'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            {lang === 'ur'
              ? 'المکتب ایجوکیشنل فاؤنڈیشن کے پاس تمام برادریوں اور کوالیفائیڈ خاندانوں کے تصدیق شدہ کوائف موجود ہیں۔ آج ہی اپنے کوائف درج کروائیں۔ رجسٹریشن فیس صرف 5,000 روپے ہے۔'
              : 'Register your biodata today with complete privacy. Registration fee is only PKR 5,000.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>{lang === 'ur' ? 'نیا رشتہ درج کروائیں (فیس: 5,000)' : 'Register Profile (Rs. 5,000)'}</span>
            </button>

            <a
              href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے ہمسفر رشتہ سنٹر میں کوائف درج کروانے اور فیس کے متعلق معلومات حاصل کرنی ہیں۔' : 'Hello! I need information about registration and fees.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{lang === 'ur' ? 'واٹس ایپ ہیلپ لائن: 0325 1013131' : 'WhatsApp Helpline'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div id="contact">
        <MatrimonialFooter lang={lang} t={t} />
      </div>

      {/* Registration Modal with Image Upload, Details & 5,000 Fee */}
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
