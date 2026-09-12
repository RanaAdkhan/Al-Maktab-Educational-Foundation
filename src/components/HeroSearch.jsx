import React from 'react';
import { Search, RotateCcw, ShieldCheck, Heart, Users, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/matrimonialData';

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
  totalProfilesCount
}) {
  return (
    <section className="bg-gradient-to-b from-rose-100 via-rose-50 to-slate-50 py-10 px-4 border-b border-rose-200/80">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-200/80 text-rose-900 text-xs font-bold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-700" />
          <span>پاکستان کا بااعتماد ترین ازدواجی پلیٹ فارم</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-rose-950 mb-2 leading-relaxed">
          اپنی پسند اور خاندان کے وقار کے مطابق رشتہ منتخب کریں
        </h2>
        <p className="text-slate-600 mb-8 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          100% تصدیق شدہ کوائف، باوقار خاندانی ماحول اور محفوظ کوائف کی مکمل رازداری
        </p>

        {/* Filter Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl shadow-xl shadow-rose-950/5 border border-rose-100 text-right">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Gender */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                تلاش برائے:
              </label>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
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
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
              />
            </div>

            {/* Caste / Community */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                برادری / قوم:
              </label>
              <input
                type="text"
                placeholder="مثلاً راجپوت، آرائیں، جٹ..."
                value={casteFilter}
                onChange={(e) => setCasteFilter(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-xs sm:text-sm font-medium transition-all"
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
                ? 'bg-rose-700 text-white shadow-md shadow-rose-700/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            سب دیکھیں ({totalProfilesCount})
          </button>

          <button
            onClick={() => setGenderFilter('عورت')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'عورت'
                ? 'bg-rose-700 text-white shadow-md shadow-rose-700/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            صرف دلہن (خواتین)
          </button>

          <button
            onClick={() => setGenderFilter('مرد')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
              genderFilter === 'مرد'
                ? 'bg-rose-700 text-white shadow-md shadow-rose-700/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            صرف دولہا (مرد)
          </button>
        </div>

      </div>
    </section>
  );
}
