import React, { useState } from 'react';
import { Clock, MapPin, Star, CheckCircle, ChevronRight, Info, Sparkles } from 'lucide-react';
import { tourPackages } from '../data/travelData';

export default function FeaturedTours({ searchQuery, onBookTour }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedTourId, setExpandedTourId] = useState(null);

  const categories = ['All', 'Family', 'Honeymoon', 'Adventure', 'Budget'];

  const filteredTours = tourPackages.filter((tour) => {
    const matchesCategory = selectedCategory === 'All' || tour.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tours" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Trending Tour Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Shandar Tour Packages
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl text-sm sm:text-base">
              Family, Honeymoon aur Group tours ke best packages with verified hotels, luxury transport aur guide.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Grid */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 font-medium">Aapki search ke mutabiq koi package nahi mila.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
            >
              Tamam Packages Dekhein
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => {
              const isExpanded = expandedTourId === tour.id;

              return (
                <div
                  key={tour.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                      {tour.badge}
                    </span>

                    {/* Category Tag */}
                    <span className="absolute top-4 right-4 bg-slate-900/75 backdrop-blur-md text-slate-100 text-xs font-semibold px-3 py-1 rounded-full">
                      {tour.category}
                    </span>

                    {/* Bottom gradient on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Location overlay */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-medium">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>{tour.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & Duration */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <div className="flex items-center gap-1 font-bold text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{tour.rating}</span>
                          <span className="text-slate-400 font-normal">({tour.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                        {tour.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                        {tour.description}
                      </p>

                      {/* Inclusions chips */}
                      <div className="space-y-1.5 mb-5">
                        {tour.inclusions.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Day by day Itinerary preview toggle */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-300">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                            Itinerary Outline:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {tour.itinerary.map((day, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                <span>{day}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Footer / Price & Actions */}
                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting from</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-black text-emerald-600">Rs. {tour.price.toLocaleString()}</span>
                          <span className="text-xs text-slate-400 line-through">Rs. {tour.originalPrice.toLocaleString()}</span>
                        </div>
                        <span className="text-[10px] text-slate-500">per person (all incl.)</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setExpandedTourId(isExpanded ? null : tour.id)}
                          className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                          title="View Itinerary"
                        >
                          <Info className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={() => onBookTour(tour)}
                          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>Book Now</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
