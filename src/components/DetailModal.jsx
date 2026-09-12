import React from 'react';
import { X, ShieldCheck, MessageCircle, Heart, User, CheckCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function DetailModal({ isOpen, onClose, profile, lang, t }) {
  if (!isOpen || !profile) return null;

  const isFemale = profile.gender === 'عورت';
  const isUrdu = lang === 'ur';
  const headerBg = isFemale ? 'from-rose-700 to-rose-950' : 'from-slate-800 to-slate-950';

  const whatsappMsg = encodeURIComponent(
    isUrdu
      ? `السلام علیکم ہم سفر رشتہ سنٹر!\nمجھے پروفائل نمبر #${profile.id} (${profile.name} - ${profile.city}) کے رشتے میں دلچسپی ہے۔\nبراہِ مہربانی اس کے مزید خاندانی کوائف، فوٹو اور والدین کا رابطہ نمبر فراہم فرمائیں۔`
      : `Hello Humsafar Rishta Centre!\nI am interested in Marriage Proposal ID #${profile.id} (${profile.name} - ${profile.city}).\nPlease provide verified family background and guardian contact details.`
  );

  const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
      <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative my-4 sm:my-8 border border-amber-200 max-h-[92vh] overflow-y-auto ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 ${isUrdu ? 'left-3' : 'right-3'} text-white hover:text-slate-200 p-1.5 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-10`}
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header with Avatar */}
        <div className={`bg-gradient-to-r ${headerBg} text-white p-4 sm:p-6 text-center relative`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-1.5 sm:mb-2 bg-white/20 rounded-full flex items-center justify-center text-3xl shadow-inner border border-white/20">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold">{profile.name}</h4>
          <p className="text-[11px] sm:text-xs text-amber-300 mt-0.5">{t.detailsHeaderSubtitle} #{profile.id} ({profile.gender})</p>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-xs sm:text-sm">
          
          {/* Key Attributes Grid */}
          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 text-[11px] sm:text-xs">
            <p><strong>{t.genderLabel}</strong> <span className="text-slate-700">{profile.gender}</span></p>
            <p><strong>{t.ageLabel}</strong> <span className="text-slate-700">{profile.age} {t.yearsLabel}</span></p>
            <p><strong>{t.heightLabel}</strong> <span className="text-slate-700">{profile.height}</span></p>
            <p><strong>{t.maritalStatusLabel}</strong> <span className="text-slate-700">{profile.marital}</span></p>
            <p><strong>{t.cityLabel}</strong> <span className="text-slate-700">{profile.city}</span></p>
            <p><strong>{t.casteLabel}</strong> <span className="text-slate-700">{profile.caste}</span></p>
          </div>

          {/* Education & Job */}
          <div>
            <h5 className="font-bold text-amber-700 mb-1 border-b border-slate-200 pb-1 flex items-center gap-1 text-xs sm:text-sm">
              <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.eduJobTitle}</span>
            </h5>
            <div className="space-y-1 mt-1.5 text-slate-700 text-[11px] sm:text-xs">
              <p><strong>{t.educationLabel}</strong> {profile.education}</p>
              <p><strong>{t.jobLabel}</strong> {profile.job || (isUrdu ? 'کوئی نہیں' : 'None')}</p>
              {profile.familyStatus && <p><strong>{t.familyBgTitle}</strong> {profile.familyStatus}</p>}
            </div>
          </div>

          {/* Demands */}
          <div>
            <h5 className="font-bold text-amber-700 mb-1 border-b border-slate-200 pb-1 flex items-center gap-1 text-xs sm:text-sm">
              <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>{t.partnerDemandsTitle}</span>
            </h5>
            <p className="bg-amber-50/70 p-2.5 sm:p-3 rounded-xl text-slate-700 text-[11px] sm:text-xs leading-relaxed mt-1.5 border border-amber-100">
              {profile.demands}
            </p>
          </div>

          {/* Privacy Note */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.privacyNotice}</span>
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-xs sm:text-sm hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{t.btnContactWhatsApp}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
