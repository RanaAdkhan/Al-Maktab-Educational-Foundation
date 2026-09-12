import React from 'react';
import { UserPlus, MessageCircle } from 'lucide-react';
import { siteConfig, ADMIN_PHONE } from '../data/matrimonialData';

export default function MatrimonialHeader({ onOpenRegister, onSelectCategory }) {
  return (
    <header className="bg-slate-900 text-white shadow-xl sticky top-0 z-40 border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div
          onClick={() => onSelectCategory('all')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Official Foundation Logo */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl p-1 shadow-md border border-amber-400/40 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <img
              src="./logo.png"
              alt="Al-Maktab Educational Foundation Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-base sm:text-xl md:text-2xl font-black leading-tight tracking-tight text-amber-400">
              {siteConfig.title}
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
              {siteConfig.subBrand} — {siteConfig.subtitle}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent('السلام علیکم! مجھے المکتب ایجوکیشنل فاؤنڈیشن ہم سفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>ہیلپ لائن واٹس ایپ</span>
          </a>

          <button
            onClick={onOpenRegister}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <UserPlus className="w-4 h-4" />
            <span>نیا رشتہ درج کریں</span>
          </button>
        </div>

      </div>
    </header>
  );
}
