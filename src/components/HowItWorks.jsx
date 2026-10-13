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
    <section className="py-14 sm:py-16 bg-white border-t border-[#dedfd9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-2">
            {isUrdu ? "آسان اور محفوظ طریقہ کار" : "Simple & Transparent Process"}
          </p>

          <h3 className="text-2xl sm:text-4xl font-black text-[#063c2b] tracking-tight leading-relaxed font-serif">
            {isUrdu ? "رشتہ تلاش کرنے کے 3 آسان مراحل" : "3 Easy Steps to Find a Match"}
          </h3>
          <p className="text-xs sm:text-sm text-[#626c65] max-w-xl mx-auto mt-1 leading-relaxed">
            {isUrdu
              ? "ہم سفر رشتہ سنٹر کے ذریعے باوقار شریکِ حیات کی تلاش کو نہایت آسان، شفاف اور شرعی اصولوں کے مطابق بنایا گیا ہے۔"
              : "Our transparent, respectful, and verified process ensures peace of mind for candidates and their families."}
          </p>
        </div>

        {/* Steps Grid - Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {howItWorksSteps.map((item, idx) => {
            const Icon = iconMap[item.icon] || Search;

            return (
              <div
                key={idx}
                className={`bg-[#fbfaf7] rounded-2xl p-6 sm:p-7 border border-[#dedfd9] hover:border-[#0f5132] shadow-xs hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between ${isUrdu ? 'text-right' : 'text-left'}`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black font-sans text-[#b89446]">
                      0{item.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#edf4ef] text-[#0f5132] flex items-center justify-center border border-[#0f5132]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-[#20231f] mb-2 font-serif">
                    {isUrdu ? item.titleUrdu : item.titleEng}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#626c65] leading-relaxed mb-4">
                    {isUrdu ? item.descUrdu : item.descEng}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dedfd9] flex items-center gap-1.5 text-xs font-bold text-[#063c2b]">
                  <span>{isUrdu ? "مرحلہ نمبر" : "Step"} {item.step}</span>
                  {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
