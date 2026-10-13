import React from 'react';
import { HeartPulse, ArrowLeft, ArrowRight, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function AafaqSupportSection({ lang }) {
  const isUrdu = lang === 'ur';

  return (
    <>
      {/* Welfare & Family Support / Blood Help */}
      <section className="aaf-section aaf-section--blood-bank">
        <div className="aaf-container">
          
          <div className="aaf-feature-card aaf-feature-card--blood p-6 sm:p-10 rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-50/70 via-white to-rose-50/40">
            <div className="aaf-feature-card__content">
              <p className="aaf-preheader text-rose-800">
                {isUrdu ? "المکتب فیملی ویلفیئر" : "Family Welfare & Support"}
              </p>
              <h2 className="aaf-heading text-rose-950 font-serif">
                {isUrdu ? "خاندانی ہیلپ لائن و فلاحی خدمات" : "Family Support & Blood Assistance"}
              </h2>
              <p className="aaf-body text-slate-700 max-w-2xl leading-relaxed">
                {isUrdu
                  ? "المکتب ایجوکیشنل فاؤنڈیشن صرف رشتہ خدمات ہی نہیں بلکہ پریشان حال خاندانوں کے لیے مشاورت، خاندانی ثالثی اور ہنگامی ضرورت پر خون (Blood Donation) کی بلا معاوضہ رابطہ سہولت بھی فراہم کرتا ہے۔"
                  : "Serving our communities with counseling, matrimonial arbitration, and emergency blood donor coordination."}
              </p>
            </div>

            <div className="aaf-action-row mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="aaf-action aaf-action--blood-primary flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے المکتب فاؤنڈیشن کے فلاحی شعبے سے رابطہ کرنا ہے۔' : 'Hello! I need family welfare assistance.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{isUrdu ? "فلاحی ہیلپ لائن پر رابطہ کریں" : "Contact Welfare Support"}</span>
                <span className="aaf-action__arrow" aria-hidden="true">
                  {isUrdu ? '←' : '→'}
                </span>
              </a>

              <a
                className="aaf-action aaf-action--blood-secondary flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-rose-800 border-2 border-rose-700 font-bold py-3.5 px-6 rounded-xl transition-all text-xs sm:text-sm"
                href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے ہنگامی بلڈ ڈونیشن کے سلسلے میں رابطہ کرنا ہے۔' : 'Emergency blood assistance inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{isUrdu ? "ہنگامی بلڈ سپورٹ" : "Emergency Blood Request"}</span>
                <span className="aaf-action__arrow" aria-hidden="true">
                  {isUrdu ? '←' : '→'}
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Privacy Card */}
      <section className="aaf-section aaf-section--trust">
        <div className="aaf-container">
          
          <div className="aaf-trust-card p-6 sm:p-10 rounded-3xl border border-emerald-900/15 bg-gradient-to-r from-emerald-900/5 via-white to-emerald-900/5 flex flex-col sm:flex-row items-center gap-6">
            <div className="aaf-trust-card__icon w-16 h-16 rounded-2xl bg-emerald-900 text-white flex items-center justify-center shrink-0 shadow-lg" aria-hidden="true">
              <ShieldCheck className="w-9 h-9 text-amber-400" />
            </div>

            <div className="aaf-trust-card__content text-center sm:text-right">
              <p className="aaf-preheader text-emerald-800">
                {isUrdu ? "آپ کا اعتماد ہماری ترجیح" : "Your Trust Matters"}
              </p>
              <h2 className="aaf-heading font-serif text-slate-900">
                {isUrdu ? "100% محفوظ، باوقار اور شرعی رازداری" : "Safe. Private. Trusted."}
              </h2>
              <p className="aaf-body text-slate-600 leading-relaxed max-w-2xl mt-1">
                {isUrdu
                  ? "آپ کی تمام معلومات اور خواتین کے کوائف شرعی اصولوں اور اعلیٰ اخلاقی معیار کے مطابق مکمل رازداری میں رکھے جاتے ہیں۔"
                  : "Your information is handled with care, confidentiality, and respect because trust is at the heart of everything we do."}
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
