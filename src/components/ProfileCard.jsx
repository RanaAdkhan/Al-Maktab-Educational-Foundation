import React from 'react';
import { Eye, User, Heart, Share2, ShieldCheck, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function ProfileCard({ profile, onViewDetail, isSaved, onToggleSave, lang, t }) {
  const isFemale = profile.gender === 'عورت';
  const isUrdu = lang === 'ur';

  // Gender specific theme styles
  const cardBorderClass = isFemale ? 'glow-card-bride' : 'glow-card-groom';
  const beamClass = isFemale ? 'glow-border-bride' : 'glow-border-groom';
  
  const tagColor = isFemale
    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-xs'
    : 'bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-black shadow-xs';

  const avatarBg = isFemale
    ? 'bg-gradient-to-br from-rose-50 to-pink-100 text-rose-600 border-2 border-rose-300 shadow-rose-200'
    : 'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-400 shadow-amber-200';

  const cardInnerBg = isFemale
    ? 'bg-gradient-to-b from-rose-50/40 via-white to-pink-50/20'
    : 'bg-gradient-to-b from-amber-50/40 via-white to-slate-50/30';

  const btnClass = isFemale
    ? 'bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 text-white shadow-rose-900/20'
    : 'bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-600 hover:to-amber-700 hover:text-slate-950 text-amber-400 shadow-slate-950/20';

  const handleQuickWhatsApp = (e) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      isUrdu
        ? `السلام علیکم! مجھے ہم سفر رشتہ سنٹر پر دستیاب پروفائل #${profile.id} (${profile.name} - ${profile.caste} - ${profile.city}) کے رشتے کے بارے میں تفصیلات چاہیے۔`
        : `Hello! I would like details about Proposal #${profile.id} (${profile.name} - ${profile.caste} - ${profile.city}).`
    );
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${msg}`, '_blank');
  };

  return (
    <div className={`glow-card ${cardBorderClass} shadow-md border border-slate-200/80`}>
      
      {/* Animated Rotating Light Beam Border */}
      <div className={`glow-border-beam ${beamClass}`} />

      {/* Card Inner Content */}
      <div className={`glow-card-content ${cardInnerBg}`}>
        
        <div className={`p-4 sm:p-5 ${isUrdu ? 'text-right' : 'text-left'}`}>
          
          {/* Top Header Row with ID & Favorite Bookmark */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] sm:text-[11px] font-mono bg-white/95 text-slate-800 px-2 py-0.5 rounded-lg font-black border border-slate-200 shadow-xs">
                #{profile.id}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{isUrdu ? "تصدیق شدہ" : "Verified"}</span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              {/* Bookmark / Favorite Heart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(profile);
                }}
                className={`p-1.5 rounded-full transition-all ${
                  isSaved
                    ? 'bg-rose-50 text-rose-600 border border-rose-200 scale-110'
                    : 'bg-white/80 hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200'
                }`}
                title={isSaved ? "Saved in favorites" : "Save to favorites"}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-600 text-rose-600' : ''}`} />
              </button>

              {/* Gender Tag */}
              <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full ${tagColor}`}>
                {isFemale ? t.femaleTag : t.maleTag}
              </span>
            </div>
          </div>

          {/* Privacy-Safe Avatar with Glow Ring */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 mx-auto my-2 group-hover:scale-110 transition-transform duration-300">
            <div className={`w-full h-full rounded-full flex items-center justify-center shadow-md ${avatarBg}`}>
              <User className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            {/* Verified Green badge */}
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Age & Height */}
          <h4 className="text-center font-extrabold text-slate-900 text-sm sm:text-base mt-1 mb-0.5">
            {t.ageLabel} <span className="text-amber-700">{profile.age} {t.yearsLabel}</span> | {t.heightLabel} {profile.height || 'N/A'}
          </h4>

          {/* Badge & Status chip */}
          <div className="flex items-center justify-center gap-1.5 mb-2.5">
            <span className="text-[10px] sm:text-[11px] text-rose-700 font-bold bg-rose-50 py-0.5 px-2.5 rounded-full border border-rose-200/80">
              {profile.marital}
            </span>
            {profile.badge && (
              <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold bg-amber-100 py-0.5 px-2 rounded-full border border-amber-300">
                {profile.badge}
              </span>
            )}
          </div>
          
          {/* Attributes details list */}
          <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-700 border-t border-slate-200/70 pt-2.5 bg-white/70 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.cityLabel}</span>
              <span className="font-bold text-slate-900">{profile.city}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.casteLabel}</span>
              <span className="font-black text-amber-700">{profile.caste}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.educationLabel}</span>
              <span className="font-bold text-slate-900 truncate max-w-[150px] sm:max-w-[170px]">{profile.education}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t.jobLabel}</span>
              <span className="font-bold text-slate-900 truncate max-w-[150px] sm:max-w-[170px]">{profile.job || (isUrdu ? 'کوئی نہیں' : 'None')}</span>
            </div>
          </div>

        </div>

        {/* Action Footer Button with WhatsApp & View details */}
        <div className="p-3 bg-white/95 border-t border-slate-100 mt-auto flex items-center gap-2">
          <button
            onClick={() => onViewDetail(profile)}
            className={`flex-1 ${btnClass} font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.01]`}
          >
            <Eye className="w-4 h-4" />
            <span>{t.btnViewDetail}</span>
          </button>

          <button
            onClick={handleQuickWhatsApp}
            className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all hover:scale-105"
            title="Inquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          </button>
        </div>

      </div>

    </div>
  );
}
