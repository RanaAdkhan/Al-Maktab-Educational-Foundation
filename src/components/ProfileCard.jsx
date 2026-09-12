import React from 'react';
import { Eye, MapPin, Briefcase, GraduationCap, Users, ShieldCheck, Heart, User } from 'lucide-react';

export default function ProfileCard({ profile, onViewDetail }) {
  const isFemale = profile.gender === 'عورت';
  const tagColor = isFemale ? 'bg-pink-100 text-pink-700 border-pink-200' : 'bg-blue-100 text-blue-700 border-blue-200';
  const avatarBg = isFemale ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-blue-50 text-blue-600 border-blue-200';

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-200/80 hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      <div className="p-5 sm:p-6 text-right">
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg font-bold border border-slate-200">
            ID: #{profile.id}
          </span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tagColor}`}>
            {profile.gender} کا رشتہ
          </span>
        </div>

        {/* Privacy-Safe Avatar Icon */}
        <div className={`w-20 h-20 mx-auto my-3 rounded-full flex items-center justify-center text-3xl border-2 shadow-sm group-hover:scale-105 transition-transform ${avatarBg}`}>
          <User className="w-10 h-10" />
        </div>

        {/* Age & Height */}
        <h4 className="text-center font-extrabold text-slate-900 text-base sm:text-lg mt-1 mb-1">
          عمر: {profile.age} سال | قد: {profile.height || 'نامعلوم'}
        </h4>

        <p className="text-center text-xs text-rose-700 font-bold mb-4">
          ازدواجی حیثیت: {profile.marital}
        </p>
        
        {/* Attributes details list */}
        <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">شہر:</span>
            <span className="font-bold text-slate-800">{profile.city}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">برادری / قوم:</span>
            <span className="font-bold text-slate-800">{profile.caste}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">تعلیم:</span>
            <span className="font-bold text-slate-800 truncate max-w-[180px]">{profile.education}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">پیشہ / روزگار:</span>
            <span className="font-bold text-slate-800 truncate max-w-[180px]">{profile.job || 'کوئی نہیں'}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100">
        <button
          onClick={() => onViewDetail(profile)}
          className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition duration-200 flex items-center justify-center gap-2 shadow-md shadow-rose-700/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Eye className="w-4 h-4" />
          <span>مکمل معلومات و رابطہ</span>
        </button>
      </div>

    </div>
  );
}
