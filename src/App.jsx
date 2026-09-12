import React, { useState, useEffect } from 'react';
import MatrimonialHeader from './components/MatrimonialHeader';
import HeroSearch from './components/HeroSearch';
import ProfileCard from './components/ProfileCard';
import RegisterModal from './components/RegisterModal';
import DetailModal from './components/DetailModal';
import WhyChooseMatrimonial from './components/WhyChooseMatrimonial';
import MatrimonialFooter from './components/MatrimonialFooter';
import { defaultProfiles, ADMIN_PHONE } from './data/matrimonialData';
import { Search, MessageCircle, Heart, UserPlus } from 'lucide-react';

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [genderFilter, setGenderFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('');
  const [casteFilter, setCasteFilter] = useState('');
  const [maritalFilter, setMaritalFilter] = useState('');
  
  // Modals state
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Load profiles from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('humsafar_profiles');
      if (stored) {
        setProfiles(JSON.parse(stored));
      } else {
        localStorage.setItem('humsafar_profiles', JSON.stringify(defaultProfiles));
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
      localStorage.setItem('humsafar_profiles', JSON.stringify(updated));
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
      
      {/* Header */}
      <MatrimonialHeader
        onOpenRegister={() => setIsRegisterOpen(true)}
        onSelectCategory={(gender) => setGenderFilter(gender)}
      />

      {/* Hero & Quick Search */}
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

      {/* Main Profiles Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        
        {/* Results Count bar */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>دستیاب تصدیق شدہ رشتے ({filteredProfiles.length})</span>
          </h3>

          <button
            onClick={() => setIsRegisterOpen(true)}
            className="text-xs sm:text-sm font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1.5"
          >
            <UserPlus className="w-4 h-4" />
            <span>اپنا رشتہ رجسٹر کریں</span>
          </button>
        </div>

        {filteredProfiles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-700">
              آپ کے درج کردہ فلٹر کے مطابق کوئی رشتہ نہیں ملا۔
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              براہ کرم سرچ کی تفصیلات تبدیل کر کے دوبارہ کوشش کریں۔
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-5 py-2 bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md"
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

      {/* Footer */}
      <MatrimonialFooter />

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
        href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent('السلام علیکم! مجھے ہم سفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
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
