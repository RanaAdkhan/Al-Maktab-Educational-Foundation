import React from 'react';
import { Users, Heart, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { liveStats } from '../data/matrimonialData';

export default function StatsCounter({ lang }) {
  const isUrdu = lang === 'ur';

  const iconMap = {
    Users: Users,
    Heart: Heart,
    MapPin: MapPin,
    ShieldCheck: ShieldCheck
  };

  return (
    <section className="relative z-20 -mt-6 max-w-6xl mx-auto px-3 sm:px-6">
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-amber-500/40 text-white backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
          
          {liveStats.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-2 sm:p-3 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-3xl font-black text-amber-400 font-sans tracking-tight">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-0.5">
                  {isUrdu ? item.labelUrdu : item.labelEng}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
