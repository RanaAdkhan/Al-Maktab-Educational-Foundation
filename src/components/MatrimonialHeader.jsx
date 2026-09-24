import React, { useState } from 'react';
import { UserPlus, MessageCircle, PhoneCall, Menu, X, Home, Info, Users, MapPin, Search, Languages, Heart } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function MatrimonialHeader({ onOpenRegister, onNavigate, activeTab, lang, onToggleLang, t, savedCount, onOpenSaved }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'about', label: t.navAbout, icon: Info },
    { id: 'castes', label: t.navCastes, icon: Users },
    { id: 'profiles', label: t.navProfiles, icon: Search },
    { id: 'contact', label: t.navContact, icon: MapPin },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);

    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-slate-900 text-white shadow-2xl sticky top-0 z-40 border-b-2 border-amber-500">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand / Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0 max-w-[65%] sm:max-w-none"
          >
            {/* Official Foundation Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl p-0.5 sm:p-1 shadow-md border border-amber-400 flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="./logo.png"
                alt="Al-Maktab"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="truncate">
              <span className="text-[9px] sm:text-xs text-amber-300 font-semibold block leading-tight truncate">
                {t.parentOrg}
              </span>
              <h1 className="text-sm sm:text-lg md:text-xl font-black leading-tight tracking-tight text-white truncate">
                {t.title}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-bold flex items-center gap-1.5 transition-colors hover:text-amber-400 ${
                    activeTab === link.id ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Language Switcher Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 transition-all"
              title="Change Language"
            >
              <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{t.langLabel}</span>
            </button>

            {/* Saved Proposals Heart Button */}
            <button
              onClick={onOpenSaved}
              className="relative p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-rose-400 border border-white/10 transition-all"
              title="Saved Proposals / پسندیدہ رشتے"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500/30 text-rose-400" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            {/* WhatsApp (Desktop/Tablet) */}
            <a
              href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے ہمسفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔' : 'Hello! I would like to get information regarding Humsafar Rishta Centre.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              <span dir="ltr" className="font-sans font-bold">{siteConfig.whatsapp}</span>
            </a>

            {/* Register Button */}
            <button
              onClick={onOpenRegister}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-md text-[11px] sm:text-xs flex items-center gap-1 hover:scale-105 transition-all"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.btnRegister}</span>
              <span className="sm:hidden">{lang === 'ur' ? 'رجسٹریشن' : 'Register'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden bg-slate-950 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3 duration-200 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-amber-400 transition-colors"
              >
                <span>{link.label}</span>
                <Icon className="w-4 h-4 text-amber-400" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSaved();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between p-2.5 rounded-xl bg-rose-950/40 text-rose-300 font-bold text-xs border border-rose-500/30"
            >
              <span>{lang === 'ur' ? 'پسندیدہ رشتے (شارٹ لسٹ)' : 'Saved Proposals'}</span>
              <span className="bg-rose-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{savedCount}</span>
            </button>

            <button
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-400/40"
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'ur' ? 'Switch to English' : 'اردو میں دیکھیں'}</span>
            </button>

            <a
              href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white/10 text-white font-bold text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{LANDLINE_PHONE}</span>
            </a>
            <a
              href={`https://wa.me/${ADMIN_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{siteConfig.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
