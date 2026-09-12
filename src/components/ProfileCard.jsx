import React from 'react';
import { Eye, User, Sparkles, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function ProfileCard({ profile, onViewDetail, lang, t }) {
  const isFemale = profile.gender === 'عورت';
  const isUrdu = lang === 'ur';

  // Gender specific theme styles
  const cardBorderClass = isFemale ? 'glow-card-bride' : 'glow-card-groom';
  const beamClass = isFemale ? 'glow-border-bride' : 'glow-border-groom';
  const tagColor = isFemale
    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-sm'
    : 'bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-black shadow-sm';

  const avatarBg = isFemale
    ? 'bg-gradient-to-br from-rose-50 to-pink-100 text-rose-600 border-2 border-rose-300 shadow-rose-200'
    : 'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-400 shadow-amber-200';

  const cardInnerBg = isFemale
    ? 'bg-gradient-to-b from-rose-50/40 via-white to-pink-50/20'
    : 'bg-gradient-to-b from-amber-50/40 via-white to-slate-50/30';

  const btnClass = isFemale
    ? 'bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 text-white shadow-rose-900/20'
    : 'bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-600 hover:to-amber-700 hover:text-slate-950 text-amber-400 shadow-slate-950/20';

  return (
    <div className={`glow-card ${cardBorderClass} shadow-md border border-slate-200/80`}>
      
      {/* Animated Rotating Light Beam Border */}
      <div className={`glow-border-beam ${beamClass}`} />

      {/* Card Inner Content */}
      <div className={`glow-card-content ${cardInnerBg}`}>
        
        <div className={`p-4 sm:p-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
          
          {/* Top Header Row */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] sm:text-[11px] font-mono bg-white/90 text-slate-700 px-2.5 py-1 rounded-lg font-bold border border-slate-200 shadow-xs">
              ID: #{profile.id}
            </span>
            <span className={`text-[11px] sm:text-xs font-bold px-3 py-0.5 rounded-full ${tagColor}`}>
              {isFemale ? t.femaleTag : t.maleTag}
            </span>
          </div>

          {/* Privacy-Safe Avatar with Glow Ring */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto my-2 group-hover:scale-110 transition-transform duration-300">
            <div className={`w-full h-full rounded-full flex items-center justify-center shadow-md ${avatarBg}`}>
              <User className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            {/* Pulsing online indicator badge */}
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Age & Height */}
          <h4 className="text-center font-extrabold text-slate-900 text-sm sm:text-base mt-1 mb-0.5">
            {t.ageLabel} <span className="text-amber-700">{profile.age} {t.yearsLabel}</span> | {t.heightLabel} {profile.height || 'N/A'}
          </h4>

          <p className="text-center text-[11px] sm:text-xs text-rose-700 font-bold mb-3 bg-white/80 py-0.5 px-2 rounded-full border border-rose-100/80 w-fit mx-auto">
            {t.maritalStatusLabel} {profile.marital}
          </p>
          
          {/* Attributes details list */}
          <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-700 border-t border-slate-200/70 pt-2.5 bg-white/60 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.cityLabel}</span>
              <span className="font-bold text-slate-900">{profile.city}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.casteLabel}</span>
              <span className="font-bold text-amber-700">{profile.caste}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.educationLabel}</span>
              <span className="font-bold text-slate-900 truncate max-w-[150px] sm:max-w-[180px]">{profile.education}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.jobLabel}</span>
              <span className="font-bold text-slate-900 truncate max-w-[150px] sm:max-w-[180px]">{profile.job || (isUrdu ? 'کوئی نہیں' : 'None')}</span>
            </div>
          </div>

        </div>

        {/* Action Footer Button */}
        <div className="p-3 sm:p-4 bg-white/90 border-t border-slate-100 mt-auto">
          <button
            onClick={() => onViewDetail(profile)}
            className={`w-full ${btnClass} font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98]`}
          >
            <Eye className="w-4 h-4" />
            <span>{t.btnViewDetail}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
