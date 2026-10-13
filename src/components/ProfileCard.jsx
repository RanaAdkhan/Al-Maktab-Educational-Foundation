import React from 'react';
import { Eye, User, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function ProfileCard({ profile, onViewDetail, isSaved, onToggleSave, lang, t }) {
  const isFemale = profile.gender === 'عورت';
  const isUrdu = lang === 'ur';

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
    <div className="bg-white rounded-2xl border border-[#dedfd9] hover:border-[#0f5132] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Card Body */}
      <div className={`p-4 sm:p-5 ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Top Header Row with ID & Favorite Bookmark */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono bg-[#f8f6f1] text-[#20231f] px-2 py-0.5 rounded-md font-bold border border-[#dedfd9]">
              #{profile.id}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] bg-[#edf4ef] text-[#0f5132] font-bold px-2 py-0.5 rounded-md border border-[#0f5132]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0f5132]" />
              <span>{isUrdu ? "تصدیق شدہ" : "Verified"}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Bookmark / Favorite Heart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(profile);
              }}
              className={`p-1.5 rounded-full transition-all ${
                isSaved
                  ? 'bg-rose-50 text-rose-600 border border-rose-200 scale-105'
                  : 'bg-white hover:bg-slate-50 text-slate-400 hover:text-rose-600 border border-slate-200'
              }`}
              title={isSaved ? "Saved in favorites" : "Save to favorites"}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-600 text-rose-600' : ''}`} />
            </button>

            {/* Clean Gender Tag */}
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#f8f6f1] text-[#063c2b] border border-[#dedfd9]">
              {isFemale ? t.femaleTag : t.maleTag}
            </span>
          </div>
        </div>

        {/* Profile Picture / Avatar */}
        <div className="relative w-20 h-20 sm:w-22 sm:h-22 mx-auto my-2">
          {profile.photo ? (
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#b89446] shadow-sm">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-full flex items-center justify-center bg-[#f8f6f1] text-[#063c2b] border-2 border-[#b89446]/60 shadow-sm">
              <User className="w-10 h-10" />
            </div>
          )}
          {/* Active status dot */}
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#0f5132] border-2 border-white rounded-full"></span>
        </div>

        {/* Name & Title */}
        <h3 className="text-center font-black text-[#20231f] text-base mt-2">
          {profile.name}
        </h3>

        {/* Age & Height */}
        <p className="text-center font-bold text-[#626c65] text-xs sm:text-sm mb-2">
          {t.ageLabel} <span className="text-[#063c2b] font-black">{profile.age} {t.yearsLabel}</span> | {t.heightLabel} {profile.height || 'N/A'}
        </p>

        {/* Status chip */}
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <span className="text-[11px] text-[#20231f] font-bold bg-[#f8f6f1] py-0.5 px-2.5 rounded-md border border-[#dedfd9]">
            {profile.marital}
          </span>
          {profile.badge && (
            <span className="text-[11px] text-[#063c2b] font-bold bg-[#edf4ef] py-0.5 px-2 rounded-md border border-[#0f5132]/20">
              {profile.badge}
            </span>
          )}
        </div>
        
        {/* Attributes details list - Clean table layout */}
        <div className="space-y-2 text-xs text-[#20231f] border-t border-[#dedfd9] pt-3">
          <div className="flex items-center justify-between">
            <span className="text-[#626c65] font-medium">{t.cityLabel}</span>
            <span className="font-bold text-[#20231f]">{profile.city}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#626c65] font-medium">{t.casteLabel}</span>
            <span className="font-black text-[#063c2b]">{profile.caste}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#626c65] font-medium">{t.educationLabel}</span>
            <span className="font-bold text-[#20231f] truncate max-w-[150px] sm:max-w-[170px]">{profile.education}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#626c65] font-medium">{t.jobLabel}</span>
            <span className="font-bold text-[#20231f] truncate max-w-[150px] sm:max-w-[170px]">{profile.job || (isUrdu ? 'کوئی نہیں' : 'None')}</span>
          </div>
        </div>

      </div>

      {/* Action Footer Button with WhatsApp & View details */}
      <div className="p-3 bg-[#fbfaf7] border-t border-[#dedfd9] mt-auto flex items-center gap-2">
        <button
          onClick={() => onViewDetail(profile)}
          className="flex-1 bg-[#063c2b] hover:bg-[#04281c] text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Eye className="w-4 h-4 text-amber-300" />
          <span>{t.btnViewDetail}</span>
        </button>

        <button
          onClick={handleQuickWhatsApp}
          className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition-all hover:scale-105 cursor-pointer"
          title="Inquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
        </button>
      </div>

    </div>
  );
}
