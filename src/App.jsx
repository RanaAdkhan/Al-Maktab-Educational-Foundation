import React, { useState, useEffect } from 'react';
import MatrimonialHeader from './components/MatrimonialHeader';
import HeroSearch from './components/HeroSearch';
import AboutSection from './components/AboutSection';
import CasteFilterSection from './components/CasteFilterSection';
import ProfileCard from './components/ProfileCard';
import RegisterModal from './components/RegisterModal';
import DetailModal from './components/DetailModal';
import WhyChooseMatrimonial from './components/WhyChooseMatrimonial';
import MatrimonialFooter from './components/MatrimonialFooter';
import { defaultProfiles, ADMIN_PHONE } from './data/matrimonialData';
import { Search, MessageCircle, Heart, UserPlus, Users, RotateCcw } from 'lucide-react';

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [genderFilter, setGenderFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('');
  const [casteFilter, setCasteFilter] = useState('');
  const [maritalFilter, setMaritalFilter] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  
  // Modals state
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

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
    } catch (e) {
      setProfiles(defaultProfiles);
    }
  }, []);

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
    setMaritalFilter('');
  };

  const handleSelectCaste = (casteName) => {
    setCasteFilter(casteName);
    const elem = document.getElementById('profiles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter logic
  const filteredProfiles = profiles.filter((p) => {
    const matchGender = genderFilter === 'all' || p.gender === genderFilter;
    const matchCity = !cityFilter || p.city?.toLowerCase().includes(cityFilter.trim().toLowerCase());
    const matchCaste = !casteFilter || p.caste?.toLowerCase().includes(casteFilter.trim().toLowerCase());
    const matchMarital = !maritalFilter || p.marital?.includes(maritalFilter);
    return matchGender && matchCity && matchCaste && matchMarital;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-urdu" dir="rtl">
      
      {/* Header with Full Navigation Menu */}
      <MatrimonialHeader
        onOpenRegister={() => setIsRegisterOpen(true)}
        onNavigate={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      />

      {/* Hero & Quick Search */}
      <div id="home">
        <HeroSearch
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          casteFilter={casteFilter}
          setCasteFilter={setCasteFilter}
          maritalFilter={maritalFilter}
          setMaritalFilter={setMaritalFilter}
          onResetFilters={handleResetFilters}
          totalProfilesCount={profiles.length}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </div>

      {/* About Us / Foundation Section */}
      <AboutSection onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Caste / Baradari Quick Filter Section */}
      <CasteFilterSection
        selectedCaste={casteFilter}
        onSelectCaste={handleSelectCaste}
      />

      {/* Main Profiles Grid */}
      <main id="profiles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex-grow w-full">
        
        {/* Results Count bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200 gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>دستیاب تصدیق شدہ رشتے</span>
              <span className="text-xs bg-slate-900 text-amber-400 px-3 py-1 rounded-full font-bold">
                {filteredProfiles.length} نتائج
              </span>
            </h3>

            {casteFilter && (
              <p className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                <span>منتخب برادری: <strong className="text-amber-700">{casteFilter}</strong></span>
                <button
                  onClick={() => setCasteFilter('')}
                  className="text-rose-600 underline font-bold"
                >
                  (فلٹر ہٹائیں)
                </button>
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {casteFilter || cityFilter || genderFilter !== 'all' ? (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 bg-white border px-3 py-1.5 rounded-xl shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>تمام فلٹر صاف کریں</span>
              </button>
            ) : null}

            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 text-amber-400 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              <span>نیا رشتہ رجسٹر کریں</span>
            </button>
          </div>
        </div>

        {/* Grid or Empty Notice */}
        {filteredProfiles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-xl font-bold text-slate-700">
              آپ کے درج کردہ فلٹر کے مطابق کوئی رشتہ نہیں ملا۔
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              براہ کرم برادری یا شہر کا نام تبدیل کر کے دوبارہ کوشش کریں۔
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-6 py-2.5 bg-slate-900 text-amber-400 rounded-xl text-xs font-bold shadow-md"
            >
              تمام رشتے دیکھیں
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onViewDetail={(p) => setSelectedProfile(p)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Why Choose Us */}
      <WhyChooseMatrimonial />

      {/* Footer / Contact */}
      <div id="contact">
        <MatrimonialFooter />
      </div>

      {/* Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onAddProfile={handleAddProfile}
      />

      {/* Details & WhatsApp Modal */}
      <DetailModal
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        profile={selectedProfile}
      />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent('السلام علیکم! مجھے ہمسفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group border-2 border-white/40"
        title="واٹس ایپ پر رابطہ کریں"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs sm:text-sm text-white px-0 group-hover:px-2">
          واٹس ایپ ہیلپ لائن
        </span>
      </a>

    </div>
  );
}
