import React from 'react';
import { UserPlus, Search, ShieldCheck } from 'lucide-react';
import AafaqLiveSnapshot from './AafaqLiveSnapshot';

export default function AafaqHero({ onOpenRegister, lang, t }) {
  const isUrdu = lang === 'ur';

  const handleScrollToSearch = () => {
    const elem = document.getElementById('search-panel');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProfiles = () => {
    const elem = document.getElementById('profiles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="aaf-hero">
      <div className="aaf-hero__inner aaf-container">
        
        {/* Left/Right Text Content */}
        <div className={`aaf-hero__content ${isUrdu ? 'text-right' : 'text-left'}`}>
          <p className="aaf-preheader">
            {isUrdu ? "المکتب ایجوکیشنل فاؤنڈیشن کے زیرِ اہتمام" : "Serving Our Communities Since 2014"}
          </p>

          <h1 className="aaf-heading aaf-hero__heading">
            {isUrdu ? "ہمسفر رشتہ سنٹر — باوقار خاندانی رشتے" : "Our Families, Connected"}
          </h1>

          <p className="aaf-body aaf-hero__text">
            {isUrdu
              ? "سنتِ نبوی ﷺ کے مطابق آسان، باوقار اور شرعی اصولوں کے عین مطابق رشتہ خدمات۔ تمام برادریوں، شہروں اور دینی و عصری تعلیم یافتہ فیملیز کے تصدیق شدہ کوائف۔"
              : "For over 12 years, we have worked to connect dignified families with verified proposals strictly adhering to Islamic values and complete privacy."}
          </p>

          <p className="aaf-hero__name text-emerald-900 font-bold text-sm sm:text-base mt-4">
            {isUrdu ? "مرکزی دفتر: 64 مزنگ روڈ، لاہور • ہیلپ لائن: 0325 1013131" : "Head Office: 64 Mozang Road, Lahore • Helpline: +92 325 1013131"}
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={handleScrollToSearch}
              className="px-6 py-3.5 bg-emerald-900 hover:bg-emerald-950 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span>{isUrdu ? "رشتے تلاش کریں (Review Rishtas)" : "Review Rishtas"}</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-900 border-2 border-emerald-900 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105 shadow-xs"
            >
              <UserPlus className="w-4 h-4 text-emerald-800" />
              <span>{isUrdu ? "نیا رشتہ درج کریں (فیس 5,000)" : "Register a Rishta"}</span>
            </button>
          </div>
        </div>

        {/* Right/Left Official Banner Portrait */}
        <div className="aaf-hero__portrait flex items-center justify-center p-4">
          <div className="w-full h-full max-h-[460px] rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-900/20 bg-white p-2">
            <img
              src="./banner.png"
              alt="Al-Maktab Educational Foundation - Humsafar Matrimonial"
              className="w-full h-full object-contain mx-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
