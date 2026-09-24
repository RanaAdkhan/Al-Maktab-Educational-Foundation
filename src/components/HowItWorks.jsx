import React from 'react';
import { Search, MessageSquare, HeartHandshake, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { howItWorksSteps } from '../data/matrimonialData';

export default function HowItWorks({ lang, onOpenRegister }) {
  const isUrdu = lang === 'ur';

  const iconMap = {
    Search: Search,
    MessageSquare: MessageSquare,
    HeartHandshake: HeartHandshake
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold mb-3 border border-amber-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{isUrdu ? "آسان اور محفوظ طریقہ کار" : "Simple & Transparent Process"}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-relaxed">
            {isUrdu ? "رشتہ تلاش کرنے کے 3 آسان مراحل" : "3 Easy Steps to Find a Match"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
            {isUrdu
              ? "ہم سفر رشتہ سنٹر کے ذریعے باوقار شریکِ حیات کی تلاش کو نہایت آسان، شفاف اور شرعی اصولوں کے مطابق بنایا گیا ہے۔"
              : "Our transparent, respectful, and verified process ensures peace of mind for candidates and their families."}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {howItWorksSteps.map((item, idx) => {
            const Icon = iconMap[item.icon] || Search;

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 relative group flex flex-col justify-between ${isUrdu ? 'text-right' : 'text-left'}`}
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black font-sans text-amber-500/30 group-hover:text-amber-500 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                    {isUrdu ? item.titleUrdu : item.titleEng}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {isUrdu ? item.descUrdu : item.descEng}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <span>{isUrdu ? "مرحلہ نمبر" : "Step"} {item.step}</span>
                  {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>

              </div>
            );
          })}

        </div>

        {/* Register CTA Bar */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 to-amber-950 rounded-2xl sm:rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-amber-500/30 max-w-4xl mx-auto">
          <div className={isUrdu ? 'text-right' : 'text-left'}>
            <h4 className="text-lg sm:text-xl font-bold text-amber-400">
              {isUrdu ? "کیا آپ نیا رشتہ رجسٹر کروانا چاہتے ہیں؟" : "Want to Register a New Marriage Proposal?"}
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              {isUrdu ? "چند منٹوں میں آن لائن رجسٹریشن مکمل کریں اور لائیو کوائف میں شامل ہوں۔" : "Complete online registration in 2 minutes with complete privacy."}
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="whitespace-nowrap px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg transition-all hover:scale-105"
          >
            {isUrdu ? "ابھی رشتہ درج کریں" : "Register Now"}
          </button>
        </div>

      </div>
    </section>
  );
}
