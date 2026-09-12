import React from 'react';
import { Search, RotateCcw, MapPin, Phone, MessageCircle, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';
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
  onOpenRegister
}) {
  return (
    <section className="bg-gradient-to-b from-amber-50/60 via-rose-50/30 to-slate-50 py-6 px-4 border-b border-amber-200/60">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Islamic & Foundation Slides Carousel */}
        <HeroSlider onOpenRegister={onOpenRegister} />

        {/* Search & Filter Box */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200 text-right mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Gender */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                تلاش برائے:
              </label>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
              >
                <option value="all">تمام رشتے</option>
                <option value="عورت">دلہن (خاتون)</option>
                <option value="مرد">دولہا (مرد)</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                شہر درج کریں:
              </label>
              <input
                type="text"
                placeholder="مثلاً لاہور، ملتان، اسلام آباد..."
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
              />
            </div>

            {/* Caste / Community */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                برادری / قوم / مسلک:
              </label>
              <input
                type="text"
                placeholder="مثلاً راجپوت، آرائیں، جٹ، سید..."
                value={casteFilter}
                onChange={(e) => setCasteFilter(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
              />
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={onResetFilters}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 px-4 rounded-xl transition duration-200 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow"
              >
                <RotateCcw className="w-4 h-4" />
                <span>فلٹر صاف کریں</span>
              </button>
            </div>

          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setGenderFilter('all')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'all'
                ? 'bg-slate-900 text-amber-400 shadow-md border border-amber-500/50'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50'
            }`}
          >
            سب دیکھیں ({totalProfilesCount})
          </button>

          <button
            onClick={() => setGenderFilter('عورت')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'عورت'
                ? 'bg-rose-700 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            صرف دلہن (خواتین)
          </button>

          <button
            onClick={() => setGenderFilter('مرد')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'مرد'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            صرف دولہا (مرد)
          </button>
        </div>

      </div>
    </section>
  );
}
