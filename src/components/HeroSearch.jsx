import React from 'react';
import { Search, RotateCcw, MapPin, Phone, MessageCircle, Sparkles, BookOpen, Heart } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

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
    <section className="bg-gradient-to-b from-amber-50 via-rose-50/40 to-slate-50 py-8 px-4 border-b border-amber-200/60">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Foundation Notice Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs sm:text-sm font-bold mb-4 shadow-md border border-amber-500/40">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{siteConfig.parentOrg}</span>
        </div>

        {/* Main Banner Headline from Image */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-relaxed">
          {siteConfig.mainTagline}
        </h2>

        {/* Special Religious & Madaris Notice Highlight Box */}
        <div className="bg-emerald-800 text-white rounded-2xl p-3 sm:p-4 max-w-2xl mx-auto mb-6 shadow-md flex items-center justify-center gap-2.5 border border-emerald-600">
          <BookOpen className="w-5 h-5 text-emerald-300 shrink-0" />
          <p className="text-xs sm:text-sm md:text-base font-bold">
            {siteConfig.religiousTagline}
          </p>
        </div>

        {/* Official Contact Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-200 text-slate-800 font-black text-xs sm:text-sm hover:border-amber-500 transition-colors"
          >
            <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span dir="ltr">{LANDLINE_PHONE}</span>
          </a>

          <a
            href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent('السلام علیکم! مجھے ہمسفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-2xl shadow-md font-black text-xs sm:text-sm hover:bg-emerald-700 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span dir="ltr" className="font-sans">{siteConfig.whatsapp}</span>
          </a>

          <div className="flex items-center gap-1.5 bg-amber-100/80 text-amber-900 px-3.5 py-2 rounded-2xl text-xs font-bold border border-amber-300">
            <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
            <span>مزنگ روڈ، لاہور</span>
          </div>
        </div>

        {/* Search & Filter Box */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200 text-right">
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
