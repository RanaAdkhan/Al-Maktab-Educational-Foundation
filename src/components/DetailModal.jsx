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
    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className={`bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative my-8 border border-amber-200 animate-in zoom-in-95 duration-200 ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isUrdu ? 'left-4' : 'right-4'} text-white hover:text-slate-200 p-1.5 rounded-full bg-black/20 hover:bg-black/30 transition-colors z-10`}
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header with Avatar */}
        <div className={`bg-gradient-to-r ${headerBg} text-white p-6 text-center relative`}>
          <div className="w-20 h-20 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center text-3xl shadow-inner border border-white/20">
            <User className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-xl font-bold">{profile.name}</h4>
          <p className="text-xs text-amber-300 mt-0.5">{t.detailsHeaderSubtitle} #{profile.id} ({profile.gender})</p>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm">
          
          {/* Key Attributes Grid */}
          <div className="grid grid-cols-2 gap-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p><strong>{t.genderLabel}</strong> <span className="text-slate-700">{profile.gender}</span></p>
            <p><strong>{t.ageLabel}</strong> <span className="text-slate-700">{profile.age} {t.yearsLabel}</span></p>
            <p><strong>{t.heightLabel}</strong> <span className="text-slate-700">{profile.height}</span></p>
            <p><strong>{t.maritalStatusLabel}</strong> <span className="text-slate-700">{profile.marital}</span></p>
            <p><strong>{t.cityLabel}</strong> <span className="text-slate-700">{profile.city}</span></p>
            <p><strong>{t.casteLabel}</strong> <span className="text-slate-700">{profile.caste}</span></p>
          </div>

          {/* Education & Job */}
          <div>
            <h5 className="font-bold text-amber-700 mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.eduJobTitle}</span>
            </h5>
            <div className="space-y-1 mt-2 text-slate-700">
              <p><strong>{t.educationLabel}</strong> {profile.education}</p>
              <p><strong>{t.jobLabel}</strong> {profile.job || (isUrdu ? 'کوئی نہیں' : 'None')}</p>
              {profile.familyStatus && <p><strong>{t.familyBgTitle}</strong> {profile.familyStatus}</p>}
            </div>
          </div>

          {/* Demands */}
          <div>
            <h5 className="font-bold text-amber-700 mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>{t.partnerDemandsTitle}</span>
            </h5>
            <p className="bg-amber-50/70 p-3 rounded-xl text-slate-700 text-xs leading-relaxed mt-2 border border-amber-100">
              {profile.demands}
            </p>
          </div>

          {/* Privacy Note */}
          <div className="p-2.5 rounded-xl bg-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.privacyNotice}</span>
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>{t.btnContactWhatsApp}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
