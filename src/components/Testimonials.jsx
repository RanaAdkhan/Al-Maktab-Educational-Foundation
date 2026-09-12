import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { testimonials } from '../data/travelData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Real Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hamare Musafiron Ki Zubani
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Hazaroon khushgawar musafiron ke behtareen reviews aur tajurbat.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 p-7 rounded-3xl border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-emerald-500/20 absolute top-6 right-6" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* User details */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-emerald-700 font-medium">{review.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
