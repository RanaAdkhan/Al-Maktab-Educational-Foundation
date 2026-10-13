import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Activity } from 'lucide-react';

export default function AafaqLiveSnapshot({ lang }) {
  const isUrdu = lang === 'ur';

  const slides = [
    {
      titleUrdu: "لائیو رشتہ اعداد و شمار",
      titleEng: "Live Rishta Snapshot",
      stats: [
        { value: "1,520+", labelUrdu: "کل رجسٹرڈ کوائف", labelEng: "Total Profiles" },
        { value: "670+", labelUrdu: "دلہن (خواتین)", labelEng: "Girls (Brides)" },
        { value: "850+", labelUrdu: "دولہا (مرد)", labelEng: "Boys (Grooms)" }
      ]
    },
    {
      titleUrdu: "سب سے زیادہ نمائندگی والے شہر",
      titleEng: "Most Represented Cities",
      stats: [
        { value: "لاہور", labelUrdu: "476+ کوائف (پہلا نمبر)", labelEng: "476 profiles (1st)" },
        { value: "راولپنڈی / اسلام آباد", labelUrdu: "دوسرا بڑا شہر", labelEng: "2nd City" },
        { value: "فیصل آباد و گوجرانوالہ", labelUrdu: "تیسرا بڑا شہر", labelEng: "3rd City" }
      ]
    },
    {
      titleUrdu: "امیدواروں کی نمایاں تعلیم",
      titleEng: "Most Common Education",
      stats: [
        { value: "گریجویشن / BS", labelUrdu: "490+ کوائف", labelEng: "Bachelor's (490+)" },
        { value: "ماسٹرز / MS", labelUrdu: "325+ کوائف", labelEng: "Master's (325+)" },
        { value: "ڈاکٹرز، انجینئرز و عالمہ", labelUrdu: "پروفیشنل و دینی اسناد", labelEng: "Doctors & Scholars" }
      ]
    },
    {
      titleUrdu: "عالمی و اوورسیز نمائندگی",
      titleEng: "Profiles Around The World",
      stats: [
        { value: "پاکستان", labelUrdu: "پہلا ملک (تمام صوبے)", labelEng: "Pakistan (1st)" },
        { value: "برطانیہ (UK)", labelUrdu: "دوسرا ملک (اوورسیز)", labelEng: "UK (2nd)" },
        { value: "متحدہ عرب امارات (UAE)", labelUrdu: "تیسرا ملک (خلیجی ممالک)", labelEng: "UAE & Gulf (3rd)" }
      ]
    },
    {
      titleUrdu: "برادری و خاندانی تنوع",
      titleEng: "Most Represented Castes",
      stats: [
        { value: "راجپوت و آرائیں", labelUrdu: "نمایاں برادریاں", labelEng: "Rajput & Arain" },
        { value: "جٹ، سید و شیخ", labelUrdu: "معزز خاندانی رشتے", labelEng: "Jatt, Syed & Sheikh" },
        { value: "پٹھان، ملک، مغل و گجر", labelUrdu: "ہر قوم کی نمائندگی", labelEng: "Pathan, Malik & Others" }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <div className="aaf-rishta-snapshot my-6">
      
      {/* Top Header of Snapshot */}
      <div className="aaf-rishta-snapshot__top">
        <p className="aaf-rishta-snapshot__eyebrow flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-800" />
          <span>{isUrdu ? active.titleUrdu : active.titleEng}</span>
        </p>

        <span className="aaf-rishta-snapshot__live">
          <span className="aaf-rishta-snapshot__live-dot animate-ping" />
          <span className="aaf-rishta-snapshot__live-dot" />
          <span>{isUrdu ? "لائیو ڈیٹا" : "Live"}</span>
        </span>
      </div>

      {/* Main Stats Display */}
      <div className="aaf-rishta-snapshot__viewport">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-emerald-900/15 py-3">
          {active.stats.map((stat, idx) => (
            <div key={idx} className="aaf-rishta-stat px-4 py-2">
              <div className="aaf-rishta-stat__value text-emerald-950 font-serif font-bold text-3xl sm:text-4xl">
                {stat.value}
              </div>
              <div className="aaf-rishta-stat__label text-slate-700 font-bold text-xs sm:text-sm mt-1">
                {isUrdu ? stat.labelUrdu : stat.labelEng}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Navigation Controls (Arrows & Dots) */}
      <div className="aaf-rishta-snapshot__navigation">
        <button
          type="button"
          onClick={prevSlide}
          className="aaf-rishta-snapshot__arrow hover:scale-105 active:scale-95 transition-all"
          aria-label="Previous"
        >
          <ChevronRight className={`w-6 h-6 ${isUrdu ? '' : 'rotate-180'}`} />
        </button>

        <div className="aaf-rishta-snapshot__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`aaf-rishta-snapshot__dot transition-all ${
                i === currentSlide ? 'is-active' : ''
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="aaf-rishta-snapshot__arrow hover:scale-105 active:scale-95 transition-all"
          aria-label="Next"
        >
          <ChevronLeft className={`w-6 h-6 ${isUrdu ? '' : 'rotate-180'}`} />
        </button>
      </div>

    </div>
  );
}
