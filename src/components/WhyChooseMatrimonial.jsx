import React from 'react';
import { ShieldCheck, BadgeCheck, HeartHandshake, Users, Sparkles } from 'lucide-react';
import { whyChoosePoints } from '../data/matrimonialData';

export default function WhyChooseMatrimonial() {
  const icons = [ShieldCheck, BadgeCheck, HeartHandshake, Users];

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>ہماری خدمات کے نمایاں پہلو</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
          ہم سفر رشتہ سنٹر کا انتخاب کیوں کریں؟
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-12">
          ہم رشتوں کے انتخاب میں اسلامی اقدار، خاندانی وقار اور مکمل رازداری کو مقدم رکھتے ہیں۔
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          {whyChoosePoints.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
