import React from 'react';
import { Users } from 'lucide-react';
import { popularCastes } from '../data/matrimonialData';

export default function CasteFilterSection({ selectedCaste, onSelectCaste, lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <section id="castes" className="py-10 sm:py-14 bg-slate-900 text-white border-t-2 border-amber-500 relative overflow-hidden">
      
      {/* Ambient background lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-bold mb-2 border border-amber-500/30">
            <Users className="w-3.5 h-3.5" />
            <span>{t.casteSectionTag}</span>
          </div>

          <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {t.casteSectionTitle}
          </h3>
          <p className="text-[11px] sm:text-sm text-slate-300 mt-1">
            {t.casteSectionDesc}
          </p>
        </div>

        {/* Castes Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
          {popularCastes.map((caste) => {
            const isSelected = selectedCaste.toLowerCase().includes(caste.name.split('/')[0].trim().toLowerCase());

            return (
              <button
                key={caste.name}
                onClick={() => onSelectCaste(caste.name.split('/')[0].trim())}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center group ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/30 scale-105 font-black'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-amber-400/50'
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl mb-1 sm:mb-2 flex items-center justify-center text-xs sm:text-sm font-black transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {caste.name[0]}
                </div>

                <span className="text-xs sm:text-base font-bold block truncate max-w-full">
                  {caste.name}
                </span>

                <span className={`text-[9px] sm:text-xs mt-0.5 block font-medium ${
                  isSelected ? 'text-slate-900 font-bold' : 'text-slate-400'
                }`}>
                  {t.availableRishtas}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Clear Button if caste is selected */}
        {selectedCaste && (
          <div className="mt-5 text-center">
            <button
              onClick={() => onSelectCaste('')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-amber-300 border border-amber-400/30 transition-all"
            >
              <span>{t.clearCasteFilter}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
