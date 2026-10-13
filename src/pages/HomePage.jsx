import React from 'react';
import AafaqHero from '../components/AafaqHero';
import AafaqLiveSnapshot from '../components/AafaqLiveSnapshot';
import AafaqServicesSection from '../components/AafaqServicesSection';
import AafaqSupportSection from '../components/AafaqSupportSection';
import { Search, UserPlus, ShieldCheck } from 'lucide-react';

export default function HomePage({ onNavigate, lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <div className="bg-[#f8f6f1] text-[#20231f]">
      
      {/* 1. Official Aafaq.pk Style Hero Section */}
      <AafaqHero
        onOpenRegister={() => onNavigate('register')}
        onNavigate={onNavigate}
        lang={lang}
        t={t}
      />

      {/* 2. Rishta Corner Main Section (Aafaq.pk Style Locked Layout) */}
      <section className="aaf-section aaf-section--rishta">
        <div className="aaf-container">
          
          <div className="aaf-rishta-panel bg-white border border-[#dedfd9] border-t-4 border-t-[#b89446] rounded-2xl p-6 sm:p-10 shadow-lg shadow-black/5">
            
            <header className="aaf-rishta-panel__header text-center sm:text-right">
              <p className="aaf-preheader text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-1">
                {isUrdu ? 'بااعتماد خاندانی ادارہ' : 'Families Trust Us'}
              </p>
              <h2 className="aaf-heading text-2xl sm:text-4xl md:text-5xl font-black text-[#063c2b] font-serif mb-2">
                {isUrdu ? 'رشتہ کارنر (Rishta Corner)' : 'Rishta Corner'}
              </h2>
              <p className="aaf-rishta-panel__lead text-base sm:text-lg text-[#20231f] font-bold mb-2">
                {isUrdu ? 'سنتِ نبوی ﷺ کے مطابق تصدیق شدہ خاندانی رشتے' : 'Trusted Rishta introductions within noble families.'}
              </p>
              <p className="aaf-rishta-panel__history text-xs sm:text-sm text-[#626c65] leading-relaxed max-w-2xl">
                {isUrdu ? (
                  <>
                    ہمارا سب سے مقبول اور باوقار شعبہ، جس کے ذریعے <strong>2014 سے اب تک ہزاروں رشتے</strong> طے پا چکے ہیں — اب مزید جدید، تصدیق شدہ اور محفوظ۔
                  </>
                ) : (
                  <>
                    Our most popular matrimonial service, with <strong>thousands of verified profiles</strong> since 2014 — now smarter and confidential.
                  </>
                )}
              </p>
            </header>

            {/* Aafaq.pk Style Live Rishta Snapshot Carousel */}
            <AafaqLiveSnapshot lang={lang} />

            {/* Dual Action Buttons (Clicks to Dedicated Pages) */}
            <div className="aaf-rishta-actions flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-[#dedfd9]">
              <button
                type="button"
                onClick={() => onNavigate('browse')}
                className="aaf-rishta-button aaf-rishta-button--primary px-8 py-3.5 bg-[#063c2b] hover:bg-[#04281c] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#b89446]" />
                <span>{isUrdu ? 'رشتے تلاش کریں (Review Rishtas)' : 'Review Rishtas'}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('register')}
                className="aaf-rishta-button aaf-rishta-button--secondary px-8 py-3.5 bg-white hover:bg-[#edf4ef] text-[#063c2b] border-2 border-[#063c2b] font-bold rounded-xl text-sm flex items-center gap-2 shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-[#063c2b]" />
                <span>{isUrdu ? 'نیا رشتہ رجسٹر کریں (Register a Rishta)' : 'Register a Rishta'}</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Aafaq.pk Style Vertical Service Rows (Stay Connected) */}
      <AafaqServicesSection onOpenRegister={() => onNavigate('register')} lang={lang} />

      {/* 4. Aafaq.pk Style Emergency Support & Trust & Privacy Section */}
      <AafaqSupportSection lang={lang} />

    </div>
  );
}
