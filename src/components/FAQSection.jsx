import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { faqsList, siteConfig, ADMIN_PHONE } from '../data/matrimonialData';

export default function FAQSection({ lang }) {
  const isUrdu = lang === 'ur';
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold mb-3 border border-amber-300">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>{isUrdu ? "عام پوچھے جانے والے سوالات" : "Frequently Asked Questions"}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-relaxed">
            {isUrdu ? "کیا آپ کے ذہن میں کوئی سوال ہے؟" : "Frequently Asked Questions & Answers"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
            {isUrdu
              ? "اگر آپ کا کوئی اور سوال یا رہنمائی درکار ہو تو ہمارے واٹس ایپ نمبر پر بلا جھجھک رابطہ کریں۔"
              : "Feel free to contact our helpline for any custom inquiries or office visits."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsList.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-600 transition-colors ${isUrdu ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-xs sm:text-base font-black">
                    {isUrdu ? faq.qUrdu : faq.qEng}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-amber-100 text-amber-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200 ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {isUrdu ? faq.aUrdu : faq.aEng}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="mt-8 text-center bg-amber-500/10 border border-amber-400/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            {isUrdu ? "مزید رہنمائی یا بالمشافہ ملاقات کے لیے ہمارے کونسلرز سے بات کریں:" : "For dedicated consultation or personal office appointments:"}
          </span>
          <a
            href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے رشتہ خدمات کے بارے میں معلومات حاصل کرنی ہیں۔' : 'Hello! I need assistance regarding matrimonial consultation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isUrdu ? "واٹس ایپ پر پوچھیں" : "Ask on WhatsApp"}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
