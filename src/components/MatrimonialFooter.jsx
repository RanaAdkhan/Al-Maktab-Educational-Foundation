import React from 'react';
import { Heart, Phone, MessageCircle, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { siteConfig, ADMIN_PHONE } from '../data/matrimonialData';

export default function MatrimonialFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8 border-t border-slate-800 text-right text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                <Heart className="w-4 h-4 fill-white text-rose-600" />
              </div>
              <span className="text-lg font-black text-white">{siteConfig.title}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              پاکستان اور اوورسیز خاندانوں کے لیے محفوظ، باوقار اور 100% تصدیق شدہ رشتے فراہم کرنے والا معروف پلیٹ فارم۔
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm mb-3">رابطہ اور ہیلپ لائن</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>فون: {siteConfig.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>واٹس ایپ: +{ADMIN_PHONE}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>لاہور، راولپنڈی، اسلام آباد، کراچی و دیگر شہر</span>
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm mb-3">رازداری اور اصول</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ہم صرف سنجیدہ اور باوقار رشتوں کے خواہش مند افراد اور فیملیز کے ساتھ کام کرتے ہیں۔ تمام کوائف کی جانچ پڑتال کے بعد ہی والدین سے رابطہ کروایا جاتا ہے۔
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <p>© 2026 {siteConfig.title} — تمام جملہ حقوق محفوظ ہیں۔</p>
          <p className="flex items-center gap-1 text-slate-500">
            خاندانی وقار اور بااعتماد نکاح کا ترجمان <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
