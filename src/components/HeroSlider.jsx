import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Phone, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function HeroSlider({ onOpenRegister, lang, t }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isUrdu = lang === 'ur';

  const slides = [
    {
      id: 1,
      type: 'image_banner',
      image: './banner.png',
      alt: 'Humsafar Rishta Centre Under Auspices of Al-Maktab Foundation'
    },
    {
      id: 2,
      type: 'islamic_theme',
      title: isUrdu ? 'النِّكَاحُ مِنْ سُنَّتِي — نکاح میری سنت ہے' : 'An-Nikahu Min Sunnati — Marriage is My Sunnah',
      subtitle: isUrdu
        ? 'سنتِ نبوی ﷺ کے عین مطابق آسان اور بابرکت ازدواجی رشتوں کی خدمات'
        : 'Facilitating blessed and easy matrimonial proposals in accordance with the Prophetic Sunnah',
      highlight: isUrdu
        ? 'دینی مدارس، اساتذہ، حفاظِ قرآن اور باحجاب دیندار فیملیز کے لیے خصوصی رشتے'
        : 'Special proposals for Islamic Scholars, Huffaz, and practicing religious families',
      tag: isUrdu ? 'اسلامک ویلیوز اور سنت کے مطابق رہنمائی' : 'Guided by Islamic & Sunnah Values',
      bgGradient: 'from-emerald-950 via-slate-900 to-teal-950'
    },
    {
      id: 3,
      type: 'education_theme',
      title: isUrdu ? 'پڑھے لکھے، کوالیفائیڈ اور باوقار خاندانی رشتے' : 'Educated, Qualified & Dignified Family Proposals',
      subtitle: isUrdu
        ? 'ڈاکٹرز، انجینئرز، چارٹرڈ اکاؤنٹنٹس، پروفیشنلز اور اوورسیز پاکستانیز کے تصدیق شدہ کوائف'
        : 'Verified profiles of Doctors, Engineers, Chartered Accountants & Overseas Pakistanis',
      highlight: isUrdu
        ? 'خواتین کے کوائف کی 100% رازداری اور صرف سنجیدہ فیملیز سے براہِ راست رابطہ'
        : '100% privacy for female candidates and direct guardian communication',
      tag: isUrdu ? '100% تصدیق شدہ اور محفوظ کوائف' : '100% Verified & Private Data',
      bgGradient: 'from-slate-950 via-slate-900 to-amber-950'
    }
  ];

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/50 bg-slate-900 my-4 select-none">
      
      {/* Slides Container */}
      <div className="relative min-h-[300px] sm:min-h-[360px] md:min-h-[400px] flex items-center justify-center">
        
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;

          if (!isActive) return null;

          if (slide.type === 'image_banner') {
            return (
              <div key={slide.id} className="w-full h-full animate-in fade-in duration-700 flex items-center justify-center bg-white">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto max-h-[460px] object-contain mx-auto"
                />
              </div>
            );
          }

          // Custom Designed Islamic Slides
          return (
            <div
              key={slide.id}
              className={`w-full h-full min-h-[340px] sm:min-h-[380px] p-6 sm:p-10 flex flex-col justify-between text-white text-center bg-gradient-to-br ${slide.bgGradient} animate-in fade-in duration-700 relative overflow-hidden`}
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Header inside slide */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-xl p-0.5 overflow-hidden border border-amber-400">
                    <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className={isUrdu ? 'text-right' : 'text-left'}>
                    <span className="text-[10px] sm:text-xs text-amber-300 font-semibold block leading-tight">
                      {t.parentOrg}
                    </span>
                    <span className="text-sm sm:text-base font-black text-white">
                      {t.title}
                    </span>
                  </div>
                </div>

                <span className="bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                  {slide.tag}
                </span>
              </div>

              {/* Center Content */}
              <div className="my-auto py-6 space-y-3">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-amber-400 leading-relaxed drop-shadow-md">
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-base text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs sm:text-sm text-amber-200 font-bold mt-2">
                  ✨ {slide.highlight}
                </div>
              </div>

              {/* Bottom Contact Strip */}
              <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl text-white font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span dir="ltr">{LANDLINE_PHONE}</span>
                  </a>
                  <a
                    href={`https://wa.me/${ADMIN_PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-xl text-white font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                    <span dir="ltr">{siteConfig.whatsapp}</span>
                  </a>
                </div>

                <div className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-[11px] truncate max-w-[280px]">{siteConfig.address}</span>
                </div>
              </div>

            </div>
          );
        })}

      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 ${isUrdu ? 'right-3' : 'left-3'} w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 shadow-lg z-20`}
        aria-label="Previous Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 ${isUrdu ? 'left-3' : 'right-3'} w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 shadow-lg z-20`}
        aria-label="Next Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all rounded-full ${
              i === currentSlide
                ? 'w-6 h-2 bg-amber-400'
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
