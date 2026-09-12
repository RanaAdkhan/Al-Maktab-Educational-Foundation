import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import HeroSlider from './HeroSlider';

export default function HeroSearch({
  genderFilter,
  setGenderFilter,
  cityFilter,
  setCityFilter,
  casteFilter,
  setCasteFilter,
  maritalFilter,
  setMaritalFilter,
  onResetFilters,
  totalProfilesCount,
  onOpenRegister,
  lang,
  t
}) {
  const isUrdu = lang === 'ur';

  return (
    <section className="bg-gradient-to-b from-amber-50/60 via-rose-50/30 to-slate-50 py-4 sm:py-6 px-3 sm:px-4 border-b border-amber-200/60">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Islamic & Foundation Slides Carousel */}
        <HeroSlider onOpenRegister={onOpenRegister} lang={lang} t={t} />

        {/* Search & Filter Box */}
        <div className={`bg-white p-4 sm:p-7 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 mt-4 sm:mt-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            
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

            {/* Caste / Community */}
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

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={onResetFilters}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 sm:py-2.5 px-3 rounded-xl transition duration-200 text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.btnReset}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-5 sm:mt-8 flex flex-wrap justify-center gap-1.5 sm:gap-3">
          <button
            onClick={() => setGenderFilter('all')}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'all'
                ? 'bg-slate-900 text-amber-400 shadow-md border border-amber-500/50'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50'
            }`}
          >
            {t.filterAll} ({totalProfilesCount})
          </button>

          <button
            onClick={() => setGenderFilter('عورت')}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'عورت'
                ? 'bg-rose-700 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            {t.filterBridesOnly}
          </button>

          <button
            onClick={() => setGenderFilter('مرد')}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'مرد'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {t.filterGroomsOnly}
          </button>
        </div>

      </div>
    </section>
  );
}
