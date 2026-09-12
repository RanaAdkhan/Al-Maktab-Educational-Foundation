import React from 'react';
import { Heart, UserPlus, Phone, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig, ADMIN_PHONE } from '../data/matrimonialData';

export default function MatrimonialHeader({ onOpenRegister, onSelectCategory }) {
  return (
    <header className="bg-rose-700 text-white shadow-xl sticky top-0 z-40 border-b border-rose-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div
          onClick={() => onSelectCategory('all')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
            <Heart className="w-6 h-6 fill-white text-rose-700 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
              {siteConfig.title}
            </h1>
            <p className="text-xs text-rose-200 font-medium">
              {siteConfig.subtitle}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent('السلام علیکم! مجھے ہم سفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>ہیلپ لائن واٹس ایپ</span>
          </a>

          <button
            onClick={onOpenRegister}
            className="bg-white text-rose-700 hover:bg-rose-50 font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <UserPlus className="w-4 h-4" />
            <span>نیا رشتہ درج کریں</span>
          </button>
        </div>

      </div>
    </header>
  );
}
