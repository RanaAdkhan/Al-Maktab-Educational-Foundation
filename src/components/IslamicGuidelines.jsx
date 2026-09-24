import React from 'react';
import { BookOpen, Heart, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import { islamicGuidelines } from '../data/matrimonialData';

export default function IslamicGuidelines({ lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <section className="py-14 bg-gradient-to-b from-slate-900 to-emerald-950 text-white border-y-2 border-amber-500/40 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Quranic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold mb-4 border border-amber-400/30">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>{isUrdu ? "تعلیماتِ اسلام و سنتِ نبوی ﷺ" : "Islamic Teachings & Prophetic Sunnah"}</span>
        </div>

        {/* Quran Verse Banner Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/15 max-w-4xl mx-auto mb-12 shadow-xl">
          <p className="text-xl sm:text-3xl font-serif text-amber-300 leading-relaxed tracking-wide mb-3" dir="rtl">
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            {isUrdu
              ? "اور اس کی نشانیوں میں سے ہے کہ اس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم ان کے پاس سکون حاصل کرو اور تمہارے درمیان محبت اور رحمت پیدا کر دی۔ (سورۃ الروم: 21)"
              : "'And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.' (Surah Ar-Rum: 21)"}
          </p>
        </div>

        {/* 4 Islamic Pillars Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
          {islamicGuidelines.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 group shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-sm mb-3 group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>
              <h4 className="text-base sm:text-lg font-black text-amber-300 mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? item.titleUrdu : item.titleEng}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isUrdu ? item.descUrdu : item.descEng}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
