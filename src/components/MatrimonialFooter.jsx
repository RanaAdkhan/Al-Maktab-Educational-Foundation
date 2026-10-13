import React from 'react';
import { Heart, Phone, MessageCircle, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function MatrimonialFooter({ lang, t }) {
  const isUrdu = lang === 'ur';

  return (
    <footer className={`bg-[#063c2b] text-white/80 pt-12 pb-8 border-t-4 border-[#b89446] text-xs ${isUrdu ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl p-1 overflow-hidden border border-[#b89446] shrink-0">
                <img
                  src="./logo.png"
                  alt="Al-Maktab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] text-[#f4ead3] font-bold block">{t.parentOrg}</span>
                <span className="text-lg font-black text-white font-serif">{t.title}</span>
                <span className="text-[10px] text-white/60 block">{t.slogan}</span>
              </div>
            </div>
            <p className="text-white/70 text-xs leading-relaxed max-w-sm">
              {t.mainTagline}
            </p>
          </div>

          {/* Contact Details from Banner */}
          <div className="space-y-2">
            <h4 className="text-[#f4ead3] font-bold text-sm mb-3">{t.footerContactHeading}</h4>
            <div className="space-y-2.5 text-xs">
              <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneCall className="w-4 h-4 text-[#b89446] shrink-0" />
                <span>{t.landlineLabel} <strong dir="ltr" className="font-sans text-white">{LANDLINE_PHONE}</strong></span>
              </a>
              <a href={`https://wa.me/${ADMIN_PHONE}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{t.whatsappLabel} <strong dir="ltr" className="font-sans text-emerald-300">{siteConfig.whatsapp}</strong></span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-white/70">
                <MapPin className="w-4 h-4 text-[#b89446] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Religious & Family Demands */}
          <div className="space-y-2">
            <h4 className="text-[#f4ead3] font-bold text-sm mb-3">{t.footerRulesHeading}</h4>
            <p className="text-xs text-white/80 leading-relaxed bg-[#0a3d26] p-3 rounded-xl border border-white/10">
              ✓ {t.religiousTagline}
              <br />
              ✓ {t.privacyNotice}
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <p className="text-white/60">© 2026 {t.title} ({t.parentOrg}) — {t.rightsReserved}</p>
          <p className="flex items-center gap-1 text-white/50">
            64 Mozang Road, Lahore <Heart className="w-3.5 h-3.5 text-[#b89446] fill-[#b89446]" />
          </p>
        </div>

      </div>
    </footer>
  );
}
