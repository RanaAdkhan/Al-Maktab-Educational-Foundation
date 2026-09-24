import React from 'react';
import { X, Heart, Eye, Trash2, MessageCircle, ArrowRight, User } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function SavedProfilesDrawer({ isOpen, onClose, savedProfiles, onRemoveSaved, onViewDetail, lang, t }) {
  if (!isOpen) return null;

  const isUrdu = lang === 'ur';

  const handleWhatsAppAll = () => {
    if (savedProfiles.length === 0) return;
    const ids = savedProfiles.map((p) => `#${p.id} (${p.name} - ${p.caste} - ${p.city})`).join('\n');
    const msg = encodeURIComponent(
      isUrdu
        ? `السلام علیکم ہم سفر رشتہ سنٹر!\nمیں نے مندرجہ ذیل پسندیدہ پروفائلز شارٹ لسٹ کی ہیں، برائے مہربانی ان کے بارے میں رہنمائی فرمائیں:\n\n${ids}`
        : `Hello Humsafar Rishta Centre!\nI have shortlisted the following marriage proposals, please guide regarding further details:\n\n${ids}`
    );
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-xl w-full p-4 sm:p-6 relative my-4 border-2 border-amber-400 max-h-[90vh] flex flex-col justify-between ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-rose-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {isUrdu ? "آپ کی پسندیدہ شارٹ لسٹ" : "Your Saved Proposals"}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {savedProfiles.length} {isUrdu ? "پروفائلز محفوظ ہیں" : "profiles saved"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Saved Profiles */}
          <div className="py-4 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
            {savedProfiles.length === 0 ? (
              <div className="py-12 text-center text-slate-400">
                <Heart className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-600">
                  {isUrdu ? "کوئی رشتہ پسندیدہ لسٹ میں شامل نہیں ہے۔" : "No proposals saved yet."}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isUrdu ? "کسی بھی کارڈ پر دل (❤️) والے آئیکون پر کلک کر کے محفوظ کریں۔" : "Click the heart icon on any card to save it here."}
                </p>
              </div>
            ) : (
              savedProfiles.map((p) => (
                <div
                  key={p.id}
                  className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 hover:border-amber-400 transition-all"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-slate-900 text-xs sm:text-sm truncate">{p.name}</span>
                        <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 rounded font-bold">#{p.id}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">
                        {p.age} {t.yearsLabel} • {p.caste} • {p.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetail(p);
                      }}
                      className="p-2 bg-slate-900 hover:bg-amber-600 hover:text-slate-950 text-amber-400 rounded-xl transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveSaved(p.id)}
                      className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedProfiles.length > 0 && (
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleWhatsAppAll}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isUrdu ? "تمام پسندیدہ رشتے واٹس ایپ پر بھیجیں" : "Send Shortlist on WhatsApp"}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
