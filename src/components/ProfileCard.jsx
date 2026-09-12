import React from 'react';
import { Eye, User } from 'lucide-react';

export default function ProfileCard({ profile, onViewDetail, lang, t }) {
  const isFemale = profile.gender === 'عورت';
  const isUrdu = lang === 'ur';
  const tagColor = isFemale ? 'bg-pink-100 text-pink-700 border-pink-200' : 'bg-blue-100 text-blue-700 border-blue-200';
  const avatarBg = isFemale ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-blue-50 text-blue-600 border-blue-200';

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      <div className={`p-4 sm:p-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] sm:text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md font-bold border border-slate-200">
            ID: #{profile.id}
          </span>
          <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full border ${tagColor}`}>
            {isFemale ? t.femaleTag : t.maleTag}
          </span>
        </div>

        {/* Privacy-Safe Avatar Icon */}
        <div className={`w-14 h-14 sm:w-18 sm:h-18 mx-auto my-2 rounded-full flex items-center justify-center border-2 shadow-sm group-hover:scale-105 transition-transform ${avatarBg}`}>
          <User className="w-7 h-7 sm:w-9 sm:h-9" />
        </div>

        {/* Age & Height */}
        <h4 className="text-center font-extrabold text-slate-900 text-sm sm:text-base mt-1 mb-0.5">
          {t.ageLabel} {profile.age} {t.yearsLabel} | {t.heightLabel} {profile.height || 'N/A'}
        </h4>

        <p className="text-center text-[11px] sm:text-xs text-rose-700 font-bold mb-3">
          {t.maritalStatusLabel} {profile.marital}
        </p>
        
        {/* Attributes details list */}
        <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-600 border-t border-slate-100 pt-2.5">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">{t.cityLabel}</span>
            <span className="font-bold text-slate-800">{profile.city}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">{t.casteLabel}</span>
            <span className="font-bold text-slate-800">{profile.caste}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">{t.educationLabel}</span>
            <span className="font-bold text-slate-800 truncate max-w-[150px] sm:max-w-[180px]">{profile.education}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">{t.jobLabel}</span>
            <span className="font-bold text-slate-800 truncate max-w-[150px] sm:max-w-[180px]">{profile.job || (isUrdu ? 'کوئی نہیں' : 'None')}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-3 sm:p-4 bg-slate-50/80 border-t border-slate-100">
        <button
          onClick={() => onViewDetail(profile)}
          className="w-full bg-slate-900 hover:bg-amber-600 hover:text-slate-950 text-white font-bold py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition duration-200 flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98]"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{t.btnViewDetail}</span>
        </button>
      </div>

    </div>
  );
}
