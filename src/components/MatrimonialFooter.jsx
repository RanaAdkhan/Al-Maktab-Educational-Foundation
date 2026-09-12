import React from 'react';
import { Heart, Phone, MessageCircle, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { siteConfig, ADMIN_PHONE, LANDLINE_PHONE } from '../data/matrimonialData';

export default function MatrimonialFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-8 border-t-2 border-amber-500 text-right text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl p-1 overflow-hidden border border-amber-400 shrink-0">
                <img
                  src="./logo.png"
                  alt="المکتب ایجوکیشنل فاؤنڈیشن"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] text-amber-300 font-semibold block">{siteConfig.parentOrg}</span>
                <span className="text-lg font-black text-white">{siteConfig.title}</span>
                <span className="text-[10px] text-slate-400 block">{siteConfig.slogan}</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {siteConfig.mainTagline}
            </p>
          </div>

          {/* Contact Details from Banner */}
          <div className="space-y-2">
            <h4 className="text-amber-400 font-bold text-sm mb-3">رابطہ اور ہیلپ لائن نمبرز</h4>
            <div className="space-y-2.5 text-xs">
              <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>پی ٹی سی ایل فون: <strong dir="ltr" className="font-sans text-slate-200">{LANDLINE_PHONE}</strong></span>
              </a>
              <a href={`https://wa.me/${ADMIN_PHONE}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>واٹس ایپ / موبائل: <strong dir="ltr" className="font-sans text-emerald-400">{siteConfig.whatsapp}</strong></span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Religious & Family Demands */}
          <div className="space-y-2">
            <h4 className="text-amber-400 font-bold text-sm mb-3">خاص ہدایات و رازداری</h4>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              ✓ {siteConfig.religiousTagline}
              <br />
              ✓ خواتین اور فیملیز کے تمام کوائف کی 100% رازداری یقینی بنائی جاتی ہے۔
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <p>© 2026 {siteConfig.title} ({siteConfig.parentOrg}) — تمام جملہ حقوق محفوظ ہیں۔</p>
          <p className="flex items-center gap-1 text-slate-500">
            64 مزنگ روڈ، لاہور <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
