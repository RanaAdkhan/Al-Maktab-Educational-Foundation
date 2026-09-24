import React from 'react';
import { ShieldCheck, CheckCircle2, HeartHandshake, PhoneCall, MessageCircle, Sparkles } from 'lucide-react';
import { feeDetails, ADMIN_PHONE, LANDLINE_PHONE, siteConfig } from '../data/matrimonialData';

export default function FeeStructureSection({ onOpenRegister, lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-y-2 border-amber-500/40 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold mb-3 border border-amber-400/40">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{isUrdu ? "شفاف اور یک مشت سروس فیس" : "Transparent One-Time Service Fee"}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-relaxed">
            {isUrdu ? "رجسٹریشن و کسٹم رشتہ تلاش سروس" : "Registration & Custom Matchmaking Package"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
            {isUrdu
              ? "المکتب فاؤنڈیشن کے تحت ہم آپ کے مطلوبہ تقاضوں کے مطابق رشتہ تلاش کر کے والدین کا باوقار رابطہ کرواتے ہیں۔"
              : "We find, verify, and coordinate customized proposals based on your preferences."}
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-amber-400/60 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Right details: Price */}
            <div className="lg:col-span-5 text-center lg:border-r lg:border-white/15 lg:pr-8">
              <span className="inline-block bg-amber-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
                {feeDetails.badge}
              </span>

              <div className="flex items-baseline justify-center gap-1 font-sans">
                <span className="text-4xl sm:text-6xl font-black text-amber-400">Rs. {feeDetails.amount}</span>
                <span className="text-sm sm:text-base text-slate-300 font-bold">/- {isUrdu ? "روپے" : "PKR"}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                {isUrdu ? "صرف 5,000 روپے ایک بار رجسٹریشن فیس" : "One-Time Registration & Processing Fee"}
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onOpenRegister}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-3 rounded-xl text-xs sm:text-sm shadow-xl transition-all hover:scale-105"
                >
                  {isUrdu ? "ابھی کوائف فارم پُر کریں" : "Fill Biodata Form Now"}
                </button>

                <a
                  href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے 5,000 روپے رجسٹریشن فیس اور رشتہ تلاش کے متعلق بات کرنی ہے۔' : 'Hello! I would like details about the Rs. 5,000 registration fee and matchmaking process.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isUrdu ? "واٹس ایپ پر رابطہ کریں" : "Inquire via WhatsApp"}</span>
                </a>
              </div>
            </div>

            {/* Right/Left details: What's included */}
            <div className={`lg:col-span-7 ${isUrdu ? 'text-right' : 'text-left'}`}>
              <h4 className="text-lg sm:text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{isUrdu ? "فیس میں شامل خصوصی سہولیات:" : "What is Included in This Service:"}</span>
              </h4>

              <div className="space-y-3">
                {(isUrdu ? feeDetails.featuresUrdu : feeDetails.featuresEng).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-4 border-t border-white/15 bg-white/5 p-3.5 rounded-2xl border border-white/10 text-[11px] sm:text-xs">
                <span className="font-bold text-amber-300 block mb-1">
                  💳 {isUrdu ? "ادائیگی کے ذرائع:" : "Payment Methods:"}
                </span>
                <span className="text-slate-300 leading-relaxed">
                  {isUrdu ? feeDetails.paymentMethodsUrdu : feeDetails.paymentMethodsEng}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
