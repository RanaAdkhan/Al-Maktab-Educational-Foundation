import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Car, Sparkles, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function Hero({ onSearchTours, onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('tours');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [vehicleType, setVehicleType] = useState('Sedan');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'tours') {
      onSearchTours(destination);
      // scroll to tours section
      const elem = document.getElementById('tours');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else if (activeTab === 'vehicles') {
      const elem = document.getElementById('vehicles');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking({
        type: 'custom',
        customDestination: destination,
        travelDate: date,
        passengers: travelers
      });
    }
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Hero Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=85"
          alt="Northern Pakistan Travel"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/50" />
        <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Banner Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pakistan’s #1 Trusted Travel & Tourism Partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            Safar Bane Aasan <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Ham Safar Ke Sath!
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Skardu, Hunza, Swat, Naran aur Kashmir ke shaandar tour packages aur luxury rental vehicles with experienced drivers sab se munasib daam me.
          </p>
        </div>

        {/* Smart Booking Search Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-black/40 border border-slate-100 overflow-hidden">
          
          {/* Tab Selection */}
          <div className="flex border-b border-slate-100 bg-slate-50/80 p-2 gap-2">
            <button
              onClick={() => setActiveTab('tours')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tours'
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Tour Packages</span>
            </button>

            <button
              onClick={() => setActiveTab('vehicles')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'vehicles'
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Car className="w-4 h-4 text-emerald-600" />
              <span>Rent A Car</span>
            </button>

            <button
              onClick={() => setActiveTab('custom')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'custom'
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Custom Plan</span>
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSearchSubmit} className="p-5 sm:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Sab Destinations</option>
                  <option value="Skardu">Skardu & Deosai</option>
                  <option value="Hunza">Hunza & Khunjerab</option>
                  <option value="Swat">Swat & Malam Jabba</option>
                  <option value="Neelum">Neelum Valley Kashmir</option>
                  <option value="Naran">Naran & Kaghan</option>
                  <option value="Fairy Meadows">Fairy Meadows</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  Travel Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Travelers or Vehicle Type */}
              {activeTab === 'vehicles' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-emerald-600" />
                    Vehicle Type
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    <option value="Sedan">Sedan (Corolla / Yaris)</option>
                    <option value="SUV">SUV (Prado / Fortuner)</option>
                    <option value="Van">Hiace Grand Cabin</option>
                    <option value="Bus">Coaster Saloon</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    Persons / Guests
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    <option value="1">1 Person (Solo)</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="4">4-5 Persons (Family)</option>
                    <option value="10">8-14 Persons (Group)</option>
                    <option value="25">20+ Persons (Corporate)</option>
                  </select>
                </div>
              )}

              {/* Action Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>{activeTab === 'custom' ? 'Inquire Now' : 'Search Now'}</span>
                </button>
              </div>
            </div>
          </form>

          {/* Quick Badges Footer inside card */}
          <div className="bg-emerald-50/60 px-6 py-3 border-t border-emerald-100/60 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-emerald-900">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free Cancellation (up to 5 days prior)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Certified Professional Drivers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>20% Advance Easy Booking</span>
            </div>
          </div>
        </div>

        {/* Social Proof Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
            <div className="text-2xl sm:text-3xl font-black text-white">{companyInfo.completedTrips}</div>
            <div className="text-xs text-slate-300 font-medium">Successful Trips</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">★ {companyInfo.rating}</div>
            <div className="text-xs text-slate-300 font-medium">{companyInfo.reviewsCount}+ Client Reviews</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
            <div className="text-2xl sm:text-3xl font-black text-white">{companyInfo.activeVehicles}</div>
            <div className="text-xs text-slate-300 font-medium">Rental Fleet</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
            <div className="text-2xl sm:text-3xl font-black text-amber-300">24/7</div>
            <div className="text-xs text-slate-300 font-medium">Tour Support</div>
          </div>
        </div>

      </div>
    </div>
  );
}
