import React from 'react';
import { Search, RotateCcw, UserPlus, ShieldCheck, Heart, Sparkles, Filter, CheckCircle2, PhoneCall } from 'lucide-react';
import { ADMIN_PHONE, REGISTRATION_FEE, popularCastes } from '../data/matrimonialData';

export default function MatrimonialHero({
  genderFilter,
  setGenderFilter,
  cityFilter,
  setCityFilter,
  casteFilter,
  setCasteFilter,
  onResetFilters,
  onSelectCaste,
  totalProfilesCount,
  onOpenRegister,
  lang,
  t
}) {
  const isUrdu = lang === 'ur';

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const elem = document.getElementById('profiles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <section className="relative bg-gradient-to-b from-[#063c2b] via-[#094834] to-[#0d563e] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 overflow-hidden border-b-4 border-amber-500 shadow-2xl">
      {/* Subtle luxury pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Top Trust Pill */}
        <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-300/40 text-amber-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold backdrop-blur-md mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span>{isUrdu ? "المکتب ایجوکیشنل فاؤنڈیشن لاہور • 2014 سے بااعتماد ادارہ" : "Al-Maktab Educational Foundation • Trusted Since 2014"}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-snug sm:leading-tight mb-3 drop-shadow-md">
          {isUrdu ? (
            <>
              شریف اور دیندار خاندانوں کے <span className="text-amber-400 underline decoration-amber-400/60 decoration-wavy">باوقار رشتے</span>
            </>
          ) : (
            <>
              Dignified Matrimonial Matches for <span className="text-amber-400">Noble Families</span>
            </>
          )}
        </h1>

        <p className="text-xs sm:text-base text-emerald-100/90 font-medium max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          {isUrdu
            ? "سنتِ نبوی ﷺ کے مطابق تصدیق شدہ خاندانی کوائف۔ اپنی مطلوبہ برادری، تعلیم اور شہر کے مطابق فوری رشتہ تلاش کریں۔"
            : "Verified family proposals adhering strictly to Islamic values. Find suitable matches by caste, education, and city."}
        </p>

        {/* Main Interactive Search Card */}
        <div className="bg-white text-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-amber-400/80 max-w-4xl mx-auto backdrop-blur-xl">
          
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              
              {/* 1. Gender */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isUrdu ? "مجھے رشتہ چاہیے:" : "Looking For:"}
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-xl py-2.5 px-3 bg-slate-50 focus:bg-white focus:border-emerald-700 outline-none text-xs sm:text-sm font-bold transition-all text-slate-800"
                >
                  <option value="all">{isUrdu ? "تمام رشتے (سب)" : "All Profiles"}</option>
                  <option value="عورت">{isUrdu ? "👰 دلہن (لڑکی)" : "Bride"}</option>
                  <option value="مرد">{isUrdu ? "🤵 دلہا (لڑکا)" : "Groom"}</option>
                </select>
              </div>

              {/* 2. Caste / Baradari */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isUrdu ? "ذات / برادری:" : "Caste / Baradari:"}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً راجپوت، جٹ، اعوان..." : "e.g. Rajput, Jatt, Awan"}
                  value={casteFilter}
                  onChange={(e) => setCasteFilter(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-xl py-2.5 px-3 bg-slate-50 focus:bg-white focus:border-emerald-700 outline-none text-xs sm:text-sm font-bold transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* 3. City */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isUrdu ? "شہر:" : "City:"}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً لاہور، اسلام آباد..." : "e.g. Lahore, Islamabad"}
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-xl py-2.5 px-3 bg-slate-50 focus:bg-white focus:border-emerald-700 outline-none text-xs sm:text-sm font-bold transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* 4. Action Button */}
              <div className="sm:col-span-3 flex gap-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-900 hover:to-slate-900 text-amber-300 font-black py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Search className="w-4 h-4 text-amber-400" />
                  <span>{isUrdu ? "رشتہ تلاش کریں" : "Search"}</span>
                </button>

                {(casteFilter || cityFilter || genderFilter !== 'all') && (
                  <button
                    type="button"
                    onClick={onResetFilters}
                    className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all"
                    title={isUrdu ? "تمام فلٹرز ختم کریں" : "Reset"}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </form>

          {/* Quick Caste Badges */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-right">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <span className="text-[11px] sm:text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-emerald-800" />
                <span>{isUrdu ? "پاپولر برادریاں (فوری کلک کریں):" : "Popular Castes:"}</span>
              </span>

              <button
                type="button"
                onClick={onOpenRegister}
                className="text-[11px] sm:text-xs font-bold text-emerald-800 hover:text-emerald-950 underline flex items-center gap-1"
              >
                <span>{isUrdu ? "+ نیا رشتہ درج کروائیں (فیس: 5,000)" : "+ Register a Rishta (Fee: 5,000)"}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {quickCastes.map((caste) => {
                const isSelected = casteFilter === caste;
                return (
                  <button
                    key={caste}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        setCasteFilter('');
                      } else {
                        setCasteFilter(caste);
                        const elem = document.getElementById('profiles');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-900 text-amber-300 shadow-sm scale-105'
                        : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200'
                    }`}
                  >
                    {caste}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3 High-Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-8 max-w-4xl mx-auto text-xs text-emerald-100">
          <div className="flex items-center justify-center gap-2 bg-emerald-950/50 border border-emerald-400/20 py-2 px-3 rounded-xl backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold">{isUrdu ? "100% تصدیق شدہ کوائف" : "100% Verified"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-emerald-950/50 border border-emerald-400/20 py-2 px-3 rounded-xl backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold">{isUrdu ? "مکمل خاندانی رازداری" : "100% Confidential"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-emerald-950/50 border border-emerald-400/20 py-2 px-3 rounded-xl backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold">{isUrdu ? "فیس: صرف 5,000 روپے" : "Fee: PKR 5,000"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-emerald-950/50 border border-emerald-400/20 py-2 px-3 rounded-xl backdrop-blur-sm">
            <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold">{isUrdu ? "0325 1013131 ہیلپ لائن" : "Direct Helpline"}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
