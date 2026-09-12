import React from 'react';
import { ShieldCheck, BadgeCheck, HeartHandshake, Users, Sparkles } from 'lucide-react';
import { whyChoosePoints } from '../data/matrimonialData';

export default function WhyChooseMatrimonial({ lang, t }) {
  const icons = [ShieldCheck, BadgeCheck, HeartHandshake, Users];
  const isUrdu = lang === 'ur';

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3 border border-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.whyTag}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
          {t.whyHeading}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-12">
          {t.whySubtitle}
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
          {whyChoosePoints.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
