import React from 'react';
import { Search, RotateCcw, UserPlus, MessageCircle, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import HeroSlider from './HeroSlider';
import { ADMIN_PHONE, REGISTRATION_FEE } from '../data/matrimonialData';

export default function HeroSearch({
  genderFilter,
  setGenderFilter,
  cityFilter,
  setCityFilter,
  casteFilter,
  setCasteFilter,
  onResetFilters,
  totalProfilesCount,
  onOpenRegister,
  lang,
  t
}) {
  const isUrdu = lang === 'ur';

  const handleScrollToForm = () => {
    const elem = document.getElementById('form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenRegister();
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const elem = document.getElementById('profiles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-amber-50/60 via-rose-50/30 to-slate-50 py-4 sm:py-8 px-3 sm:px-4 border-b border-amber-200/60">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Islamic & Foundation Slides Carousel */}
        <HeroSlider onOpenRegister={onOpenRegister} lang={lang} t={t} />

        {/* Search & Filter Box */}
        <div className={`bg-white p-4 sm:p-7 rounded-3xl shadow-xl shadow-slate-900/5 border-2 border-amber-300 mt-4 sm:mt-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-600" />
                <span>{t.searchTitle}</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {t.searchSubtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-400 text-slate-900 px-3 py-1 rounded-xl text-[11px] sm:text-xs font-bold shrink-0 self-start sm:self-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>فیس: Rs. {REGISTRATION_FEE}</span>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              
              {/* Gender */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1">
                  {t.labelSearchFor}
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-2 sm:p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
                >
                  <option value="all">{t.allGenders}</option>
                  <option value="عورت">{t.bride}</option>
                  <option value="مرد">{t.groom}</option>
                </select>
              </div>

              {/* Caste Search */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1">
                  {t.labelCaste}
                </label>
                <input
                  type="text"
                  placeholder={t.castePlaceholder}
                  value={casteFilter}
                  onChange={(e) => setCasteFilter(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-2 sm:p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1">
                  {t.labelCity}
                </label>
                <input
                  type="text"
                  placeholder={t.cityPlaceholder}
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-2 sm:p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
                />
              </div>

              {/* Search & Reset Buttons */}
              <div className="flex items-end gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-2 sm:py-2.5 px-3 rounded-xl transition duration-200 text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02]"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>تلاش کریں</span>
                </button>

                {(casteFilter || cityFilter || genderFilter !== 'all') && (
                  <button
                    type="button"
                    onClick={onResetFilters}
                    className="p-2 sm:p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition duration-200"
                    title={t.btnReset}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </form>

          {/* Quick Filter Pills */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 flex items-center gap-1">
                <Filter className="w-3 h-3 text-amber-600" />
                <span>فوری فلٹر:</span>
              </span>

              <button
                type="button"
                onClick={() => setGenderFilter('all')}
                className={`px-2.5 sm:px-3 py-1 rounded-full font-bold text-[11px] sm:text-xs transition-all ${
                  genderFilter === 'all'
                    ? 'bg-slate-900 text-amber-400 shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.filterAll} ({totalProfilesCount})
              </button>

              <button
                type="button"
                onClick={() => setGenderFilter('عورت')}
                className={`px-2.5 sm:px-3 py-1 rounded-full font-bold text-[11px] sm:text-xs transition-all ${
                  genderFilter === 'عورت'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-rose-50'
                }`}
              >
                {t.filterBridesOnly}
              </button>

              <button
                type="button"
                onClick={() => setGenderFilter('مرد')}
                className={`px-2.5 sm:px-3 py-1 rounded-full font-bold text-[11px] sm:text-xs transition-all ${
                  genderFilter === 'مرد'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.filterGroomsOnly}
              </button>
            </div>

            <button
              type="button"
              onClick={handleScrollToForm}
              className="text-[11px] sm:text-xs font-bold text-amber-700 hover:text-amber-800 underline flex items-center gap-1"
            >
              <span>یا نیا رشتہ درج کروائیں (فیس: 5,000)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
