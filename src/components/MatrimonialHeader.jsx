import React from 'react';
import { UserPlus, MessageCircle, PhoneCall } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function MatrimonialHeader({ onOpenRegister, onSelectCategory }) {
  return (
    <header className="bg-slate-900 text-white shadow-2xl sticky top-0 z-40 border-b-2 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        
        {/* Brand / Logo & Organization */}
        <div
          onClick={() => onSelectCategory('all')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Official Foundation Logo */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl p-1 shadow-lg border border-amber-400 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <img
              src="./logo.png"
              alt="المکتب ایجوکیشنل فاؤنڈیشن"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <span className="text-[10px] sm:text-xs text-amber-300 font-semibold block leading-tight">
              {siteConfig.parentOrg}
            </span>
            <h1 className="text-lg sm:text-2xl font-black leading-tight tracking-tight text-white flex items-center gap-1.5">
              <span>{siteConfig.title}</span>
            </h1>
            <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium hidden sm:block">
              {siteConfig.slogan}
            </p>
          </div>
        </div>

        {/* Action Buttons & Phone numbers */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Landline */}
          <a
            href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span dir="ltr">{LANDLINE_PHONE}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent('السلام علیکم! مجھے ہمسفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-900/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span dir="ltr" className="font-sans font-bold">{siteConfig.whatsapp}</span>
          </a>

          {/* Register Button */}
          <button
            onClick={onOpenRegister}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline">نیا رشتہ درج کریں</span>
            <span className="sm:hidden">رجسٹریشن</span>
          </button>
        </div>

      </div>
    </header>
  );
}
