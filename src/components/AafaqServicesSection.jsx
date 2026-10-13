import React from 'react';
import { Users, GitFork, UserCheck, Globe, Shield, Heart, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { ADMIN_PHONE } from '../data/matrimonialData';

export default function AafaqServicesSection({ onOpenRegister, lang }) {
  const isUrdu = lang === 'ur';

  const rows = [
    {
      stat: "25k+",
      statLabelUrdu: "خاندانی ممبران",
      statLabelEng: "Community Members",
      titleUrdu: "المکتب فیملی نیٹ ورک و کمیونٹی",
      titleEng: "Family Community & Network",
      textUrdu: "ہمارے وسیع خاندانی نیٹ ورک سے جڑیں، باوقار خاندانوں کی فیملیز سے براہِ راست تعلق قائم کریں اور اپنے پیاروں کے لیے موزوں رشتہ تلاش کریں۔",
      textEng: "Connect with thousands of respected families and stay in touch with noble relatives near and far.",
      btnTextUrdu: "کمیونٹی سے رابطہ کریں",
      btnTextEng: "Connect on WhatsApp",
      link: `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے المکتب فاؤنڈیشن کے خاندانی نیٹ ورک سے متعلق رہنمائی چاہیے۔' : 'Hello! I want to connect with the Al-Maktab Family Network.')}`,
      isHeritage: false,
      icon: Users
    },
    {
      stat: "10k+",
      statLabelUrdu: "تصدیق شدہ کوائف",
      statLabelEng: "Verified Shajra & Profiles",
      titleUrdu: "خاندانی شجرہ، نسب و برادری ریکارڈ",
      titleEng: "Family Heritage & Lineage Verification",
      textUrdu: "امیدوار کے خاندانی شجرہ، برادری اور حسب نسب کی مکمل مستند جانچ پڑتال تاکہ ہر رشتہ پائیدار، باوقار اور شفاف بنیادوں پر قائم ہو۔",
      textEng: "Explore authentic lineage verification and family background checks ensuring lifelong trust.",
      btnTextUrdu: "خاندانی تصدیق کروائیں",
      btnTextEng: "Verify Family Credentials",
      link: `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! مجھے امیدوار کے خاندانی پس منظر اور تصدیق کے لیے رابطہ کرنا ہے۔' : 'Hello! I need assistance regarding family lineage verification.')}`,
      isHeritage: true,
      icon: GitFork
    },
    {
      stat: "1,500+",
      statLabelUrdu: "ایکٹو رشتہ کوائف",
      statLabelEng: "Active Matrimonial Profiles",
      titleUrdu: "آن لائن رشتہ ڈائریکٹری و کسٹم سروس",
      titleEng: "Matrimonial Directory & Matching",
      textUrdu: "اپنا یا اپنے بچوں کا رشتہ مکمل کوائف اور شریکِ حیات کے تقاضوں کے ساتھ رجسٹر کروائیں اور 5,000 فیس میں کسٹم رشتہ تلاش کی مخلصانہ سروس حاصل کریں۔",
      textEng: "Submit comprehensive candidate details and partner demands for dedicated customized matching.",
      btnTextUrdu: "نیا رشتہ درج کریں (فیس: 5,000)",
      btnTextEng: "Register Profile (Fee: Rs. 5,000)",
      action: onOpenRegister,
      isHeritage: false,
      icon: UserCheck
    }
  ];

  return (
    <section className="aaf-section aaf-section--connect">
      <div className="aaf-container">
        
        <div className="aaf-connect-panel aaf-connect-panel--vertical">
          
          {/* Header */}
          <header className="aaf-connect-header">
            <p className="aaf-preheader">
              {isUrdu ? "ہمارا بااعتماد ادارہ" : "Our Growing Network"}
            </p>
            <h2 className="aaf-heading">
              {isUrdu ? "باوقار خاندانی خدمات کا مرکز" : "Stay Connected with Al-Maktab"}
            </h2>
            <p className="aaf-connect-intro">
              {isUrdu
                ? "المکتب ایجوکیشنل فاؤنڈیشن و ہمسفر رشتہ سنٹر کے ساتھ جڑنے کے 3 باوقار راستے"
                : "Three meaningful ways to stay part of the Al-Maktab Educational Foundation network."}
            </p>
          </header>

          {/* Service Rows */}
          <div className="aaf-connect-rows">
            {rows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <article
                  key={idx}
                  className={`aaf-connect-row ${row.isHeritage ? 'aaf-connect-row--heritage' : ''}`}
                >
                  
                  {/* Identity: Icon + Stat */}
                  <div className="aaf-connect-row__identity">
                    <div className="aaf-connect-row__icon" aria-hidden="true">
                      <Icon className="w-9 h-9" />
                    </div>
                    <div className="aaf-connect-row__stat">
                      {row.stat}
                    </div>
                    <div className="aaf-connect-row__stat-label">
                      {isUrdu ? row.statLabelUrdu : row.statLabelEng}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="aaf-connect-row__main">
                    <h3 className="aaf-connect-row__title">
                      {isUrdu ? row.titleUrdu : row.titleEng}
                    </h3>
                    <p className="aaf-connect-row__text">
                      {isUrdu ? row.textUrdu : row.textEng}
                    </p>

                    {row.action ? (
                      <button
                        type="button"
                        onClick={row.action}
                        className="aaf-connect-row__button hover:opacity-95 transition-all text-left"
                      >
                        <span>{isUrdu ? row.btnTextUrdu : row.btnTextEng}</span>
                        <span className="aaf-connect-row__arrow" aria-hidden="true">
                          {isUrdu ? '←' : '→'}
                        </span>
                      </button>
                    ) : (
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aaf-connect-row__button hover:opacity-95 transition-all"
                      >
                        <span>{isUrdu ? row.btnTextUrdu : row.btnTextEng}</span>
                        <span className="aaf-connect-row__arrow" aria-hidden="true">
                          {isUrdu ? '←' : '→'}
                        </span>
                      </a>
                    )}
                  </div>

                </article>
              );
            })}
          </div>

          {/* Connect Summary Strip */}
          <div className="aaf-connect-summary">
            
            <div className="aaf-connect-summary__item">
              <span className="aaf-connect-summary__icon" aria-hidden="true">
                <Globe className="w-6 h-6 text-emerald-800" />
              </span>
              <span className="aaf-connect-summary__value">
                100+
              </span>
              <span className="aaf-connect-summary__label">
                {isUrdu ? "شہر و برادریاں" : "Cities & Castes"}
              </span>
            </div>

            <div className="aaf-connect-summary__item">
              <span className="aaf-connect-summary__icon" aria-hidden="true">
                <Shield className="w-6 h-6 text-emerald-800" />
              </span>
              <span className="aaf-connect-summary__title font-bold text-slate-900">
                {isUrdu ? "100% محفوظ و قابلِ اعتماد" : "Trusted & Safe"}
              </span>
              <span className="aaf-connect-summary__label">
                {isUrdu ? "مکمل رازداری کی ضمانت" : "Your privacy matters"}
              </span>
            </div>

            <div className="aaf-connect-summary__item">
              <span className="aaf-connect-summary__icon" aria-hidden="true">
                <Heart className="w-6 h-6 text-rose-600" />
              </span>
              <span className="aaf-connect-summary__title font-bold text-slate-900">
                {isUrdu ? "سنتِ نبوی ﷺ کے مطابق" : "Sunnah Simplicity"}
              </span>
              <span className="aaf-connect-summary__label">
                {isUrdu ? "بابرکت و آسان رشتے" : "Blessed unions"}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
