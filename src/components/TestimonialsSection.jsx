import React from 'react';
import { Heart, Quote, Star, Sparkles, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/matrimonialData';

export default function TestimonialsSection({ lang }) {
  const isUrdu = lang === 'ur';

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold mb-3 border border-amber-300">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>{isUrdu ? "خاندانوں کے تاثرات و دعائیں" : "Family Reviews & Testimonials"}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-relaxed">
            {isUrdu ? "جنہوں نے ہمسفر رشتہ سنٹر پر اعتماد کیا" : "Stories of Blessed & Successful Unions"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
            {isUrdu
              ? "ہمارے مطمئن والدین، سرپرستوں اور امیدواروں کے دلی خیالات اور نیک دعائیں۔"
              : "Read real experiences from families who found authentic life partners through our platform."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group ${isUrdu ? 'text-right' : 'text-left'}`}
            >
              <Quote className={`w-10 h-10 text-amber-500/15 absolute top-5 ${isUrdu ? 'left-5' : 'right-5'}`} />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Feedback text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{isUrdu ? item.feedbackUrdu : item.feedbackEng}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black flex items-center justify-center text-sm shrink-0 shadow-sm">
                  {item.nameUrdu[0]}
                </div>
                <div className="truncate">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                    {isUrdu ? item.nameUrdu : item.nameEng}
                  </h4>
                  <p className="text-[11px] text-amber-700 font-semibold truncate">
                    {isUrdu ? item.relationUrdu : item.relationEng}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
