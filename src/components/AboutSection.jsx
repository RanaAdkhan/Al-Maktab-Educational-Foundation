import React from 'react';
import { BookOpen, Heart, MapPin, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig, aboutFoundation, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function AboutSection({ onOpenRegister, lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <section id="about" className="py-10 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] sm:text-xs font-bold mb-2 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.aboutTag}</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {t.parentOrg}
          </h2>
          <p className="text-amber-700 font-bold text-sm sm:text-base mt-0.5">
            {t.title} — {t.slogan}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center mb-8 sm:mb-14">
          
          {/* Main Text Column */}
          <div className={`lg:col-span-7 space-y-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
              {t.aboutHeading}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {aboutFoundation.intro}
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div className="bg-amber-50/80 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-amber-200/80">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold mb-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950" />
                </div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1">{t.ourMissionTitle}</h4>
                <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                  {aboutFoundation.mission}
                </p>
              </div>

              <div className="bg-emerald-50/80 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-emerald-200/80">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-2">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1">{t.ourVisionTitle}</h4>
                <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                  {aboutFoundation.vision}
                </p>
              </div>
            </div>

          </div>

          {/* Office & Foundation Badge Card */}
          <div className={`lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-amber-500 relative overflow-hidden ${isUrdu ? 'text-right' : 'text-left'}`}>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl sm:rounded-3xl p-1.5 shadow-xl mb-4 mx-auto border-2 border-amber-400">
              <img src="./logo.png" alt="Foundation Logo" className="w-full h-full object-contain" />
            </div>

            <h4 className="text-lg sm:text-xl font-black text-amber-400 text-center mb-0.5">
              {isUrdu ? 'المکتب ایجوکیشنل فاؤنڈیشن' : 'Al-Maktab Educational Foundation'}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-300 text-center mb-4">
              {isUrdu ? 'رجسٹرڈ بااعتماد ادارہ برائے فلاحی و ازدواجی خدمات' : 'Registered Foundation for Matrimonial & Social Welfare'}
            </p>

            <div className="space-y-2 text-[11px] sm:text-xs border-t border-white/15 pt-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>{t.headOfficeLabel}</strong> {siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>{t.landlineLabel}</strong> <span dir="ltr">{LANDLINE_PHONE}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>{t.whatsappLabel}</strong> <span dir="ltr">{siteConfig.whatsapp}</span></span>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="mt-5 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-2.5 sm:py-3 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5"
            >
              <span>{t.onlineRegisterBtn}</span>
            </button>

          </div>

        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {aboutFoundation.features.map((feat, i) => (
            <div
              key={i}
              className={`bg-slate-50 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all ${isUrdu ? 'text-right' : 'text-left'}`}
            >
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <h4 className="text-xs sm:text-sm font-black text-slate-900">{feat.title}</h4>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
