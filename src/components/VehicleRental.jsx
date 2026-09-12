import React, { useState } from 'react';
import { Users, Luggage, Fuel, Wind, ShieldCheck, Check, ArrowRight, Car, Sparkles } from 'lucide-react';
import { rentalVehicles } from '../data/travelData';

export default function VehicleRental({ onBookVehicle }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sedan', 'SUV 4x4', 'Van', 'Bus'];

  const filteredVehicles = rentalVehicles.filter((veh) => {
    if (activeCategory === 'All') return true;
    return veh.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="vehicles" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Car className="w-3.5 h-3.5 text-emerald-600" />
              <span>Rental Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Rent A Car With Driver
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl text-sm sm:text-base">
              Saaf suthri luxury gariyan, professional mountain drivers aur be-fikar safar ke liye hamara rental fleet choose karein.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-56 bg-slate-200 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  {vehicle.category}
                </span>
                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>With Driver</span>
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 font-medium italic">
                    Best for: {vehicle.popularFor}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-200/80 mb-4 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wind className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{vehicle.ac}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{vehicle.fuelAvg}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Luggage className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Luggage Space</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-6">
                    {vehicle.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Rent Per Day</span>
                    <div className="text-xl font-black text-slate-900">
                      Rs. {vehicle.ratePerDay.toLocaleString()}
                      <span className="text-xs font-medium text-slate-500"> /day</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onBookVehicle(vehicle)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 group-hover:shadow-emerald-600/20"
                  >
                    <span>Reserve Car</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Banner info strip */}
        <div className="mt-12 bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">Looking for Long-Term or Customized Route Fleet?</h4>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Special discounts for weekly/monthly rentals, weddings, or corporate tours with multiple vehicles.
            </p>
          </div>
          <button
            onClick={() => onBookVehicle({ name: 'Custom Fleet', category: 'Multiple', ratePerDay: 0 })}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Get Custom Fleet Quote
          </button>
        </div>

      </div>
    </section>
  );
}
