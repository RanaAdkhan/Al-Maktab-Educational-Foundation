import React from 'react';
import { Search, UserPlus, PhoneCall, MessageCircle, ShieldCheck, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';
import HeroSlider from './HeroSlider';
import { ADMIN_PHONE, LANDLINE_PHONE, REGISTRATION_FEE } from '../data/matrimonialData';

export default function HeroSearch({
  onOpenRegister,
  lang,
  t
}) {
  const isUrdu = lang === 'ur';

  const handleScrollToForm = () => {
    const elem = document.getElementById('form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenRegister();
    }
  };

  return (
    <section className="bg-gradient-to-b from-amber-50/60 via-rose-50/30 to-slate-50 py-4 sm:py-8 px-3 sm:px-4 border-b border-amber-200/60">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Islamic & Foundation Slides Carousel */}
        <HeroSlider onOpenRegister={onOpenRegister} lang={lang} t={t} />

        {/* Custom Matchmaking Core Info Box */}
        <div className="bg-white p-5 sm:p-8 rounded-3xl shadow-xl shadow-slate-900/5 border-2 border-amber-300 mt-4 sm:mt-6">
          
          <div className="max-w-3xl mx-auto space-y-3">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-900 text-xs sm:text-sm font-bold border border-amber-400">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{isUrdu ? "خصوصی کسٹم رشتہ تلاش و کونسلنگ سروس" : "Personalized Matrimonial Matchmaking"}</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug">
              {t.heroMainTitle}
            </h2>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.heroMainSubtitle}
            </p>

            {/* Fee Highlight Callout */}
            <div className="my-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-amber-400/40">
              <div className={`flex items-center gap-2.5 ${isUrdu ? 'text-right' : 'text-left'}`}>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-amber-300">
                    {isUrdu ? "رجسٹریشن و رشتہ تلاش سروس فیس:" : "Registration & Matchmaking Fee:"}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300">
                    {isUrdu ? "آپ کے دیے گئے معیار کے مطابق رشتہ تلاش اور رابطہ کروانا" : "Finding and verifying proposals matching your exact requirements"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-xl font-black text-base sm:text-xl font-sans shrink-0">
                <span>Rs. {REGISTRATION_FEE}/-</span>
                <span className="text-[10px] sm:text-xs text-slate-900 font-bold">({isUrdu ? "فیس" : "Fee"})</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-2xl text-xs sm:text-base shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t.btnSubmitDetails}</span>
              </button>

              <a
                href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے ہم سفر رشتہ سنٹر میں کوائف درج کروانے کے لیے رہنمائی چاہیے۔' : 'Hello! I need assistance submitting matrimonial biodata.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{isUrdu ? "واٹس ایپ پر پوچھیں" : "Inquire on WhatsApp"}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
