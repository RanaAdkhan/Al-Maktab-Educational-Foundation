import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { ADMIN_PHONE, LANDLINE_PHONE, siteConfig } from '../data/matrimonialData';

export default function AboutPage({ onNavigate, lang }) {
  const isUrdu = lang === 'ur';

  return (
    <div className="bg-[#f8f6f1] min-h-[85vh] py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-1">
            {isUrdu ? "تعارف و خدمات" : "About Our Foundation"}
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-[#063c2b] font-serif mb-3">
            {isUrdu ? "المکتب ایجوکیشنل فاؤنڈیشن — ہم سفر رشتہ سنٹر" : "Al-Maktab Educational Foundation"}
          </h1>
          <p className="text-xs sm:text-sm text-[#626c65] max-w-2xl mx-auto leading-relaxed">
            {isUrdu
              ? "2014 سے اب تک ہزاروں شریف اور دیندار خاندانوں کے باوقار ازدواجی رشتے طے کروانے والا معتبر اور مستند ادارہ۔"
              : "Connecting noble and dignified families with verified matrimonial proposals since 2014."}
          </p>
        </div>

        {/* Foundation Portrait & Overview Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg shadow-black/5 border border-[#dedfd9] border-t-4 border-t-[#b89446] mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] rounded-2xl overflow-hidden border-2 border-[#dedfd9] bg-[#f8f6f1] p-2 shadow-sm">
                <img
                  src="./banner.png"
                  alt="Al-Maktab Educational Foundation"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            </div>

            <div className={`md:col-span-7 ${isUrdu ? 'text-right' : 'text-left'}`}>
              <h2 className="text-xl sm:text-2xl font-black text-[#063c2b] font-serif mb-3">
                {isUrdu ? "ہمارا وژن اور شرعی اصول" : "Our Vision & Islamic Principles"}
              </h2>
              <p className="text-xs sm:text-sm text-[#20231f] leading-relaxed mb-4">
                {isUrdu
                  ? "المکتب ایجوکیشنل فاؤنڈیشن کا قیام اس مقصد کے تحت عمل میں لایا گیا کہ معاشرے میں نکاح اور شادی کے مقدس فریضے کو سنتِ نبوی ﷺ کے عین مطابق آسان، بابرکت اور باوقار بنایا جائے۔ ہم جدید دور کی تمام تر خرابیوں سے پاک، 100% مستند اور نجی معلومات کی حفاظت کی ضمانت دیتے ہیں۔"
                  : "Al-Maktab Educational Foundation was established to facilitate blessed and dignified marriages strictly adhering to the Prophetic Sunnah and absolute privacy."}
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-[#063c2b] font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#063c2b] shrink-0" />
                  <span>{isUrdu ? "2014 سے خدمات کا باوقار تسلسل" : "Serving communities since 2014"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#063c2b] shrink-0" />
                  <span>{isUrdu ? "خواتین کے کوائف اور فون نمبرز کی مکمل رازداری" : "100% Confidentiality for female candidates"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#063c2b] shrink-0" />
                  <span>{isUrdu ? "والدین اور سرپرستوں کا باہمی باوقار رابطہ" : "Direct dignified guardian-to-guardian coordination"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[#dedfd9] shadow-xs">
            <ShieldCheck className="w-8 h-8 text-[#063c2b] mb-3" />
            <h3 className="text-base font-black text-[#20231f] mb-1 font-serif">
              {isUrdu ? "100% تصدیق شدہ کوائف" : "100% Verified Profiles"}
            </h3>
            <p className="text-xs text-[#626c65] leading-relaxed">
              {isUrdu
                ? "امیدوار کے خاندانی پس منظر، برادری، تعلیم اور پیشے کی مکمل جانچ پڑتال کے بعد ہی رشتہ پیش کیا جاتا ہے۔"
                : "Every proposal undergoes background verification before matching."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#dedfd9] shadow-xs">
            <Users className="w-8 h-8 text-[#063c2b] mb-3" />
            <h3 className="text-base font-black text-[#20231f] mb-1 font-serif">
              {isUrdu ? "تمام برادریاں و اوورسیز" : "All Castes & Overseas"}
            </h3>
            <p className="text-xs text-[#626c65] leading-relaxed">
              {isUrdu
                ? "راجپوت، جٹ، اعوان، ملک، سید، آرائیں، شیخ سمیت تمام قوموں اور بیرونِ ملک مقیم پاکستانیوں کے رشتے۔"
                : "Comprehensive coverage across all castes, cities, and overseas Pakistani families."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#dedfd9] shadow-xs">
            <Heart className="w-8 h-8 text-[#063c2b] mb-3" />
            <h3 className="text-base font-black text-[#20231f] mb-1 font-serif">
              {isUrdu ? "مناسب فیس (5,000 روپے)" : "Affordable Rs. 5,000 Fee"}
            </h3>
            <p className="text-xs text-[#626c65] leading-relaxed">
              {isUrdu
                ? "بغیر کسی پوشیدہ چارجز کے محض 5,000 روپے کی یکمشت فیس میں رشتہ تلاش کی مخلصانہ رہنمائی۔"
                : "Transparent one-time service fee without commercial exploitation."}
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-2xl p-6 border border-[#dedfd9] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right shadow-xs">
          <div>
            <h4 className="text-base font-black text-[#063c2b]">
              {isUrdu ? "کیا آپ رشتہ تلاش یا درج کروانا چاہتے ہیں؟" : "Want to review or register a proposal?"}
            </h4>
            <p className="text-xs text-[#626c65]">
              {isUrdu ? "ہمارے نمائندے سے واٹس ایپ پر براہِ راست مفت رہنمائی حاصل کریں۔" : "Connect with our advisory desk on WhatsApp."}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('browse')}
              className="px-5 py-2.5 bg-[#063c2b] hover:bg-[#04281c] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
            >
              رشتے دیکھیں (Browse Rishtas)
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="px-5 py-2.5 bg-white hover:bg-[#edf4ef] text-[#063c2b] border border-[#dedfd9] rounded-xl text-xs font-bold cursor-pointer"
            >
              نیا رشتہ درج کریں
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
