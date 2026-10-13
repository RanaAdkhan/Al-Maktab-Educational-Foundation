import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { Search, RotateCcw, UserPlus, Heart, Filter, ShieldCheck, MessageCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function BrowseRishtasPage({
  profiles,
  genderFilter,
  setGenderFilter,
  cityFilter,
  setCityFilter,
  casteFilter,
  setCasteFilter,
  onResetFilters,
  onViewDetail,
  savedProfiles,
  onToggleSave,
  onNavigate,
  lang,
  t
}) {
  const isUrdu = lang === 'ur';

  const quickCastes = [
    'راجپوت',
    'جٹ',
    'اعوان',
    'ملک',
    'سید',
    'آرائیں',
    'شیخ',
    'گجر',
    'قریشی',
    'پٹھان',
    'مغل',
    'انصاری'
  ];

  // Filter logic
  const filteredProfiles = profiles.filter((p) => {
    const matchGender = genderFilter === 'all' || p.gender === genderFilter;
    const matchCity = !cityFilter || p.city?.toLowerCase().includes(cityFilter.trim().toLowerCase());
    const matchCaste = !casteFilter || p.caste?.toLowerCase().includes(casteFilter.trim().toLowerCase());
    return matchGender && matchCity && matchCaste;
  });

  const bridesCount = profiles.filter((p) => p.gender === 'عورت').length;
  const groomsCount = profiles.filter((p) => p.gender === 'مرد').length;

  return (
    <div className="bg-[#f8f6f1] min-h-[85vh] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-1">
            {isUrdu ? "المکتب رشتہ ڈائریکٹری" : "Verified Matrimonial Directory"}
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-[#063c2b] font-serif mb-2">
            {isUrdu ? "رشتے تلاش کریں (Review Rishtas)" : "Review Marriage Proposals"}
          </h1>
          <p className="text-xs sm:text-sm text-[#626c65] leading-relaxed">
            {isUrdu
              ? "سنتِ نبوی ﷺ کے مطابق تصدیق شدہ خاندانی کوائف۔ اپنی مطلوبہ برادری، تعلیم اور شہر کے مطابق فوری تلاش کریں۔"
              : "Explore verified, dignified family proposals. Search by caste, education, and city."}
          </p>
        </div>

        {/* Matchmaker Search Box */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg shadow-black/5 border border-[#dedfd9] border-t-4 border-t-[#b89446] mb-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
              
              {/* 1. Gender */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  {isUrdu ? "مجھے رشتہ چاہیے:" : "Looking For:"}
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl py-2.5 px-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold transition-all text-[#20231f]"
                >
                  <option value="all">{isUrdu ? "تمام رشتے (سب)" : "All Profiles"}</option>
                  <option value="عورت">{isUrdu ? "👰 دلہن (لڑکی)" : "Bride"}</option>
                  <option value="مرد">{isUrdu ? "🤵 دلہا (لڑکا)" : "Groom"}</option>
                </select>
              </div>

              {/* 2. Caste */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  {isUrdu ? "ذات / برادری:" : "Caste / Baradari:"}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً راجپوت، جٹ، اعوان..." : "e.g. Rajput, Jatt, Awan"}
                  value={casteFilter}
                  onChange={(e) => setCasteFilter(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl py-2.5 px-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold transition-all text-[#20231f] placeholder:text-[#9ca3af]"
                />
              </div>

              {/* 3. City */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  {isUrdu ? "شہر:" : "City:"}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً لاہور، اسلام آباد..." : "e.g. Lahore, Islamabad"}
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl py-2.5 px-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold transition-all text-[#20231f] placeholder:text-[#9ca3af]"
                />
              </div>

              {/* 4. Action Buttons */}
              <div className="sm:col-span-3 flex gap-2">
                {(casteFilter || cityFilter || genderFilter !== 'all') ? (
                  <button
                    type="button"
                    onClick={onResetFilters}
                    className="w-full bg-[#f8f6f1] hover:bg-slate-200 text-[#20231f] font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-[#dedfd9] transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{isUrdu ? "فلٹرز ختم کریں" : "Reset"}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate('register')}
                    className="w-full bg-[#063c2b] hover:bg-[#04281c] text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4 text-[#b89446]" />
                    <span>{isUrdu ? "نیا رشتہ درج کریں" : "Register Rishta"}</span>
                  </button>
                )}
              </div>

            </div>
          </form>

          {/* Quick Caste Badges */}
          <div className="mt-5 pt-4 border-t border-[#dedfd9] text-right">
            <span className="text-xs font-bold text-[#626c65] block mb-2">
              {isUrdu ? "پاپولر برادریاں (فوری کلک کر کے فلٹر کریں):" : "Filter by Popular Caste:"}
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {quickCastes.map((caste) => {
                const isSelected = casteFilter === caste;
                return (
                  <button
                    key={caste}
                    type="button"
                    onClick={() => setCasteFilter(isSelected ? '' : caste)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#063c2b] text-white shadow-sm'
                        : 'bg-[#f8f6f1] hover:bg-[#edf4ef] text-[#20231f] hover:text-[#063c2b] border border-[#dedfd9]'
                    }`}
                  >
                    {caste}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-[#dedfd9] gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063c2b] font-serif">
              {isUrdu ? "دستیاب کوائف" : "Available Matches"}
            </h2>
            <span className="text-xs bg-[#edf4ef] text-[#0f5132] border border-[#0f5132]/20 px-2.5 py-0.5 rounded-md font-bold">
              {filteredProfiles.length} {isUrdu ? "رشتے" : "Profiles"}
            </span>

            {casteFilter && (
              <span className="text-xs bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md font-bold">
                برادری: {casteFilter}
              </span>
            )}
          </div>

          {/* Gender Filter Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                genderFilter === 'all'
                  ? 'bg-[#063c2b] text-white shadow-xs'
                  : 'bg-white hover:bg-[#edf4ef] text-[#20231f] border border-[#dedfd9]'
              }`}
            >
              {isUrdu ? 'تمام رشتے' : 'All'} ({profiles.length})
            </button>

            <button
              onClick={() => setGenderFilter('عورت')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                genderFilter === 'عورت'
                  ? 'bg-[#063c2b] text-white shadow-xs'
                  : 'bg-white hover:bg-[#edf4ef] text-[#20231f] border border-[#dedfd9]'
              }`}
            >
              👰 {isUrdu ? 'دلہن' : 'Brides'} ({bridesCount})
            </button>

            <button
              onClick={() => setGenderFilter('مرد')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                genderFilter === 'مرد'
                  ? 'bg-[#063c2b] text-white shadow-xs'
                  : 'bg-white hover:bg-[#edf4ef] text-[#20231f] border border-[#dedfd9]'
              }`}
            >
              🤵 {isUrdu ? 'دلہا' : 'Grooms'} ({groomsCount})
            </button>
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#dedfd9] p-6 sm:p-10 shadow-xs max-w-2xl mx-auto">
            <Search className="w-12 h-12 text-[#98742d] mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-black text-[#063c2b] font-serif">
              {casteFilter ? `برادری "${casteFilter}" کا رشتہ فی الحال لسٹ میں موجود نہیں ہے۔` : 'کوئی رشتہ نہیں ملا'}
            </h3>
            <p className="text-xs sm:text-sm text-[#626c65] mt-2 leading-relaxed">
              آپ پریشان نہ ہوں! ہماری ٹیم سے واٹس ایپ پر رابطہ کریں یا فارم پُر کریں، ہم آپ کی مطلوبہ برادری ({casteFilter || 'برادری'}) کا رشتہ خود تلاش کروا کر دیں گے۔ فیس صرف 5,000 روپے ہے۔
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <button
                onClick={onResetFilters}
                className="px-5 py-2.5 bg-[#f8f6f1] hover:bg-slate-200 text-[#20231f] rounded-xl text-xs font-bold border border-[#dedfd9] cursor-pointer"
              >
                تمام رشتے دیکھیں
              </button>
              <button
                onClick={() => onNavigate('register')}
                className="px-5 py-2.5 bg-[#063c2b] hover:bg-[#04281c] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                کوائف درج کروائیں (فیس: 5,000)
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onViewDetail={onViewDetail}
                isSaved={savedProfiles.some((s) => s.id === profile.id)}
                onToggleSave={onToggleSave}
                lang={lang}
                t={t}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
