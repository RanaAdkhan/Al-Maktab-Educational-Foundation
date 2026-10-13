import React, { useState } from 'react';
import { UserPlus, MessageCircle, PhoneCall, Menu, X, Home, Search, Heart, Languages, FileText, MapPin } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function MatrimonialHeader({ onOpenRegister, onNavigate, activeTab, lang, onToggleLang, t, savedCount, onOpenSaved }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: lang === 'ur' ? 'صفحۂ اول' : 'Home', icon: Home },
    { id: 'profiles', label: lang === 'ur' ? 'رشتے تلاش کریں' : 'Find Matches', icon: Search },
    { id: 'how-it-works', label: lang === 'ur' ? 'طریقہ کار' : 'How It Works', icon: FileText },
    { id: 'contact', label: lang === 'ur' ? 'رابطہ و دفتر' : 'Contact Us', icon: MapPin },
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
    <header className="bg-white text-[#20231f] sticky top-0 z-40 border-b border-[#dedfd9] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand / Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl p-1 border border-[#dedfd9] flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
              <img
                src="./logo.png"
                alt="Al-Maktab"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs text-[#98742d] font-bold block leading-tight">
                {t.parentOrg}
              </span>
              <h1 className="text-base sm:text-lg md:text-xl font-black text-[#063c2b] tracking-tight leading-tight font-serif">
                {t.title}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === link.id
                      ? 'text-[#063c2b] border-b-2 border-[#063c2b] pb-0.5'
                      : 'text-[#626c65] hover:text-[#063c2b]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Language Switcher Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#f8f6f1] hover:bg-slate-200 text-[#063c2b] border border-[#dedfd9] transition-all cursor-pointer"
              title="Change Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#063c2b]" />
              <span>{t.langLabel}</span>
            </button>

            {/* Saved Proposals Heart Button */}
            {onOpenSaved && (
              <button
                onClick={onOpenSaved}
                className="relative p-2 rounded-lg bg-[#f8f6f1] hover:bg-slate-200 text-rose-600 border border-[#dedfd9] transition-all cursor-pointer"
                title="Saved Proposals / پسندیدہ رشتے"
              >
                <Heart className="w-4 h-4 fill-rose-500/20 text-rose-600" />
                {savedCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </button>
            )}

            {/* WhatsApp (Desktop) */}
            <a
              href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے ہمسفر رشتہ سنٹر کے متعلق معلومات حاصل کرنی ہیں۔' : 'Hello! I would like to get information regarding Humsafar Rishta Centre.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
              <span dir="ltr" className="font-sans font-bold">{siteConfig.whatsapp}</span>
            </a>

            {/* Register Profile Button */}
            <button
              onClick={onOpenRegister}
              className="bg-[#063c2b] hover:bg-[#04281c] text-white font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#b89446]" />
              <span>{lang === 'ur' ? 'نیا رشتہ (فیس 5,000)' : 'Register (Rs. 5k)'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#f8f6f1] text-[#20231f] border border-[#dedfd9]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden bg-white border-t border-[#dedfd9] px-4 pt-3 pb-6 space-y-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#20231f] hover:bg-[#f8f6f1] transition-colors"
              >
                <span>{link.label}</span>
                <Icon className="w-4 h-4 text-[#063c2b]" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#dedfd9] flex flex-col gap-2">
            {onOpenSaved && (
              <button
                onClick={() => {
                  onOpenSaved();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between p-2.5 rounded-lg bg-rose-50 text-rose-800 font-bold text-xs border border-rose-200"
              >
                <span>{lang === 'ur' ? 'پسندیدہ رشتے (شارٹ لسٹ)' : 'Saved Proposals'}</span>
                <span className="bg-rose-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{savedCount}</span>
              </button>
            )}

            <button
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#f8f6f1] text-[#063c2b] font-bold text-xs border border-[#dedfd9]"
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'ur' ? 'Switch to English' : 'اردو میں دیکھیں'}</span>
            </button>

            <a
              href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-[#f8f6f1] text-[#20231f] font-bold text-xs border border-[#dedfd9]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#063c2b]" />
              <span>{LANDLINE_PHONE}</span>
            </a>
            <a
              href={`https://wa.me/${ADMIN_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-[#25D366] text-white font-bold text-xs"
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
