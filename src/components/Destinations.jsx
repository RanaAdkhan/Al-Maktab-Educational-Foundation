import React from 'react';
import { MapPin, Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { destinations } from '../data/travelData';

export default function Destinations({ onSelectDestination }) {
  return (
    <section id="destinations" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Top Rated Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Explore Pakistan's Top Destinations
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Karakoram aur Himalayas ki jannat nazeer wadiyan jahan har mausam me dilkash manazir aapke muntazir hain.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              onClick={() => onSelectDestination(dest.name)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-lg"
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-white/20 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-white border border-white/20">
                  {dest.region}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.toursCount} Available</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {dest.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-1 mb-3">
                  ★ Highlight: {dest.highlight}
                </p>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl w-fit">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Best Season: {dest.season}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
