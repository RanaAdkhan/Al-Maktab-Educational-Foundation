import React from 'react';
import { Users } from 'lucide-react';
import { popularCastes } from '../data/matrimonialData';

export default function CasteFilterSection({ selectedCaste, onSelectCaste, lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <section id="castes" className="py-14 bg-slate-900 text-white border-t-2 border-amber-500 relative overflow-hidden">
      
      {/* Ambient background lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 border border-amber-500/30">
            <Users className="w-3.5 h-3.5" />
            <span>{t.casteSectionTag}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-relaxed">
            {t.casteSectionTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            {t.casteSectionDesc}
          </p>
        </div>

        {/* Castes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {popularCastes.map((caste) => {
            const isSelected = selectedCaste.toLowerCase().includes(caste.name.split('/')[0].trim().toLowerCase());

            return (
              <button
                key={caste.name}
                onClick={() => onSelectCaste(caste.name.split('/')[0].trim())}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center group ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/30 scale-105 font-black'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-amber-400/50 hover:scale-102'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl mb-2 flex items-center justify-center text-sm font-black transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {caste.name[0]}
                </div>

                <span className="text-sm sm:text-base font-bold block">
                  {caste.name}
                </span>

                <span className={`text-[10px] sm:text-xs mt-1 block font-medium ${
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
          <div className="mt-6 text-center">
            <button
              onClick={() => onSelectCaste('')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-amber-300 border border-amber-400/30 transition-all"
            >
              <span>{t.clearCasteFilter}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
