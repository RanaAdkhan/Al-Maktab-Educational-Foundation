import React from 'react';
import { ShieldCheck, Wallet, Headphones, Sparkles, CheckCircle2, Award, Clock } from 'lucide-react';
import { whyChooseUs } from '../data/travelData';

export default function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Wallet: Wallet,
    Headphones: Headphones,
    Sparkles: Sparkles
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Hamari Khasusiyat</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Kyun Lakhon Musafir <span className="text-emerald-600">Ham Safar</span> Ko Pasand Karte Hain?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hum sirf tour book nahi karte, balkay aapke har safar ko ek be-misaal aur yaadgar tajurba banate hain. Shandar hotels, mehfooz gariyan aur trained staff hamari pehchan hain.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Govt. Licensed & Registered Tour Operators</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Family & Honeymoon Couple Friendly Environment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Complete Fuel & Route Toll Transparency</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item, idx) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
