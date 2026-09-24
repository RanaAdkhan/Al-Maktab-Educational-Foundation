import React, { useState } from 'react';
import { Send, ShieldCheck, Heart, CheckCircle2, Sparkles, Phone, AlertCircle } from 'lucide-react';
import { ADMIN_PHONE, REGISTRATION_FEE } from '../data/matrimonialData';

export default function ProposalRequestSection({ onAddProfile, lang, t }) {
  const isUrdu = lang === 'ur';

  const [formData, setFormData] = useState({
    name: '',
    gender: 'عورت',
    age: '',
    dob: '',
    height: "5'4\"",
    complexion: isUrdu ? 'گوری / گندمی' : 'Fair / Wheatish',
    marital: isUrdu ? 'کنوارا/کنواری' : 'Single / Unmarried',
    caste: '',
    sect: isUrdu ? 'اہل سنت' : 'Ahle Sunnat',
    city: '',
    area: '',
    houseStatus: isUrdu ? 'ذاتی گھر' : 'Owned House',
    education: '',
    job: '',
    income: '',
    familyDetails: '',
    guardianName: '',
    guardianRelation: isUrdu ? 'والد صاحب' : 'Father',
    contact: '',
    demands: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappMsgUrl, setWhatsappMsgUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const summaryText = isUrdu
      ? `*السلام علیکم! ہم سفر رشتہ سنٹر (المکتب ایجوکیشنل فاؤنڈیشن)*
*نئے رشتے کی رجسٹریشن و کوائف فارم (فیس 5,000 روپے)*
-----------------------------------
👤 *امیدوار کا نام:* ${formData.name}
🚻 *جنس:* ${formData.gender}
🎂 *عمر:* ${formData.age} سال ${formData.dob ? `(تاریخ پیدائش: ${formData.dob})` : ''}
📏 *قد:* ${formData.height} | *رنگت:* ${formData.complexion}
💍 *ازدواجی حیثیت:* ${formData.marital}
🏛️ *قوم / برادری:* ${formData.caste}
🕌 *مسلک / فرقہ:* ${formData.sect}
🎓 *تعلیم و اسناد:* ${formData.education}
💼 *ملازمت / کاروبار:* ${formData.job} ${formData.income ? `(ماہانہ آمدنی: ${formData.income})` : ''}
📍 *رہائش و شہر:* ${formData.city} ${formData.area ? `(${formData.area})` : ''} — ${formData.houseStatus}
👨‍👩‍👧‍👦 *خاندانی تفصیلات:* ${formData.familyDetails || 'درج نہیں'}
-----------------------------------
🎯 *مطلوبہ شریکِ حیات کے تقاضے (Demands):*
${formData.demands}
-----------------------------------
📞 *سرپرست کا نام:* ${formData.guardianName} (${formData.guardianRelation})
📱 *رابطہ نمبر:* ${formData.contact}
💳 *رجسٹریشن فیس:* 5,000 روپے (ایک بار قابلِ ادا)
-----------------------------------
برائے مہربانی کوائف موصول فرما کر رشتہ تلاش اور رابطہ کا پراسیس شروع فرمائیں۔ جزاک اللہ!`
      : `*Hello Humsafar Rishta Centre (Al-Maktab Foundation)*
*New Matrimonial Biodata & Requirements (Fee: Rs. 5,000)*
-----------------------------------
👤 *Candidate Name:* ${formData.name}
🚻 *Gender:* ${formData.gender}
🎂 *Age:* ${formData.age} Years ${formData.dob ? `(DOB: ${formData.dob})` : ''}
📏 *Height:* ${formData.height} | *Complexion:* ${formData.complexion}
💍 *Marital Status:* ${formData.marital}
🏛️ *Caste / Community:* ${formData.caste}
🕌 *Sect / Religious Practice:* ${formData.sect}
🎓 *Education:* ${formData.education}
💼 *Job / Profession:* ${formData.job} ${formData.income ? `(Monthly Income: ${formData.income})` : ''}
📍 *City & Area:* ${formData.city} ${formData.area ? `(${formData.area})` : ''} — ${formData.houseStatus}
👨‍👩‍👧‍👦 *Family Details:* ${formData.familyDetails || 'N/A'}
-----------------------------------
🎯 *Partner Preferences & Demands:*
${formData.demands}
-----------------------------------
📞 *Guardian Name:* ${formData.guardianName} (${formData.guardianRelation})
📱 *Contact / WhatsApp:* ${formData.contact}
💳 *Registration Fee:* Rs. 5,000 (One-Time)
-----------------------------------
Please proceed with the custom matchmaking verification process. Thank you!`;

    const waUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(summaryText)}`;
    setWhatsappMsgUrl(waUrl);

    if (onAddProfile) {
      onAddProfile({
        id: Math.floor(100 + Math.random() * 900),
        name: formData.name,
        gender: formData.gender,
        age: parseInt(formData.age) || 25,
        height: formData.height,
        marital: formData.marital,
        caste: formData.caste,
        sect: formData.sect,
        city: formData.city,
        education: formData.education,
        job: formData.job,
        contact: formData.contact,
        demands: formData.demands
      });
    }

    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="form" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs sm:text-sm font-bold mb-3 border border-amber-300">
            <Heart className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span>{t.formSectionTag}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-relaxed">
            {t.formSectionTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-1 leading-relaxed">
            {t.formSectionDesc}
          </p>

          {/* Fee Strip */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl border-2 border-amber-400 shadow-md">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold">
              {isUrdu ? "رجسٹریشن و رشتہ تلاش فیس:" : "Registration & Matchmaking Fee:"}
            </span>
            <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-lg text-xs sm:text-sm font-black font-sans">
              Rs. 5,000/-
            </span>
            <span className="text-[10px] sm:text-xs text-amber-300">
              ({isUrdu ? "ایک بار قابلِ ادا" : "One-Time"})
            </span>
          </div>
        </div>

        {/* The Full Form */}
        <div className={`bg-slate-50 rounded-3xl p-5 sm:p-8 border-2 border-amber-200/80 shadow-xl ${isUrdu ? 'text-right' : 'text-left'}`}>
          
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-2xl font-black text-slate-900">{t.regSuccessHeading}</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                {t.regSuccessDesc}
              </p>

              <div className="bg-amber-100/70 p-4 rounded-2xl border border-amber-300 max-w-md mx-auto text-xs text-amber-950 space-y-1">
                <p className="font-bold">
                  💳 {isUrdu ? "فیس جمع کروانے کے طریقے:" : "Payment Methods (Rs. 5,000):"}
                </p>
                <p>• JazzCash / EasyPaisa: <strong dir="ltr">0325 1013131</strong></p>
                <p>• {isUrdu ? "مرکزی دفتر: 64 مزنگ روڈ، لاہور (بالمشافہ ملاقات)" : "Head Office: 64 Mozang Road, Lahore"}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappMsgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{isUrdu ? "واٹس ایپ میسج دیکھیں" : "View WhatsApp Message"}</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 bg-slate-900 text-amber-400 font-bold rounded-xl text-xs sm:text-sm"
                >
                  {isUrdu ? "نیا فارم پُر کریں" : "Submit Another Biodata"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* Step 1 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 text-sm mb-3 text-amber-800 flex items-center gap-1.5 border-b pb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>1. {isUrdu ? "امیدوار کے ذاتی کوائف" : "Candidate Biodata"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "امیدوار کا پورا نام درج کریں" : "Full Name"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.genderLabel}
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 font-bold"
                    >
                      <option value="عورت">{t.bride}</option>
                      <option value="مرد">{t.groom}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.ageInputLabel}
                    </label>
                    <input
                      type="number"
                      required
                      min="18"
                      max="75"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.heightInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="5'4&quot;"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.complexionInputLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={isUrdu ? "گوری / گندمی / درمیانی" : "Fair / Wheatish"}
                      value={formData.complexion}
                      onChange={(e) => setFormData({ ...formData, complexion: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.maritalInputLabel}
                    </label>
                    <select
                      value={formData.marital}
                      onChange={(e) => setFormData({ ...formData, marital: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none font-medium"
                    >
                      <option value="کنوارا/کنواری">{isUrdu ? 'کنوارا / کنواری' : 'Single / Unmarried'}</option>
                      <option value="طلاق یافتہ">{isUrdu ? 'طلاق یافتہ' : 'Divorced'}</option>
                      <option value="خلع یافتہ">{isUrdu ? 'خلع یافتہ' : 'Khula'}</option>
                      <option value="بیوہ/رانڈ">{isUrdu ? 'بیوہ / رانڈ' : 'Widowed'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.casteInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "راجپوت، آرائیں، جٹ، سید..." : "Rajput, Arain, Jatt"}
                      value={formData.caste}
                      onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.sectInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "اہل سنت / دیوبندی / اہلحدیث" : "Ahle Sunnat / Deobandi"}
                      value={formData.sect}
                      onChange={(e) => setFormData({ ...formData, sect: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 text-sm mb-3 text-amber-800 flex items-center gap-1.5 border-b pb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>2. {isUrdu ? "تعلیم، روزگار اور خاندانی پس منظر" : "Education, Profession & Family"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.educationInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "مثلاً Master, MBBS, B.Sc, عالمہ" : "e.g. Master, MBBS, BS"}
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.jobInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "جاب / بزنس اور ماہانہ آمدنی" : "Job, Business, Income"}
                      value={formData.job}
                      onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.cityInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "مثلاً لاہور، ملتان، راولپنڈی..." : "City & Area"}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.houseStatusLabel}
                    </label>
                    <select
                      value={formData.houseStatus}
                      onChange={(e) => setFormData({ ...formData, houseStatus: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      <option value="ذاتی گھر">{isUrdu ? 'ذاتی گھر (Own House)' : 'Owned House'}</option>
                      <option value="کرایہ کا مکان">{isUrdu ? 'کرایہ کا مکان (Rented)' : 'Rented House'}</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.familyDetailsLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "والد کا پیشہ، بھائیوں اور بہنوں کی تعداد و تفصیل..." : "Father occupation, brothers & sisters details"}
                      value={formData.familyDetails}
                      onChange={(e) => setFormData({ ...formData, familyDetails: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-amber-50/80 p-4 sm:p-5 rounded-2xl border-2 border-amber-300 shadow-sm">
                <h4 className="font-black text-slate-900 text-sm mb-2 text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>3. {isUrdu ? "مطلوبہ شریکِ حیات کے تقاضے / ڈیمانڈز (Partner Requirements)" : "Partner Demands & Requirements"}</span>
                </h4>
                <p className="text-[11px] text-slate-600 mb-2">
                  {isUrdu
                    ? "شریکِ حیات کی مطلوبہ عمر، تعلیم، برادری (کیا صرف اپنی برادری یا کوئی بھی شریف برادری)، مسلک اور شہر تفصیل سے لکھیں تاکہ ہم آپ کی ترجیحات کے عین مطابق رشتہ تلاش کر سکیں:"
                    : "Specify required partner age, education, caste preference, and city:"}
                </p>
                <textarea
                  rows="3"
                  required
                  placeholder={isUrdu ? "مثلاً عمر 22 سے 26 سال ہو، تعلیم گریجویٹ، بااخلاق اور دیندار فیملی، اپنی یا دیگر برادری میں رشتہ قابلِ قبول ہے..." : "Detailed requirements regarding age, education, caste, etc."}
                  value={formData.demands}
                  onChange={(e) => setFormData({ ...formData, demands: e.target.value })}
                  className="w-full border border-amber-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-amber-500 outline-none resize-none font-medium text-xs sm:text-sm"
                />
              </div>

              {/* Step 4 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 text-sm mb-3 text-amber-800 flex items-center gap-1.5 border-b pb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>4. {isUrdu ? "سرپرست و رابطہ تفصیلات" : "Guardian Contact Details"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.guardianNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? "والد / بھائی / سرپرست کا نام" : "Guardian Name"}
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                      {t.contactInputLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="03251013131"
                      dir="ltr"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-left font-mono font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 hover:from-amber-600 hover:to-amber-700 text-amber-400 hover:text-slate-950 font-black py-4 rounded-2xl shadow-xl transition-all text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] border border-amber-400/40"
              >
                <Send className="w-5 h-5" />
                <span>{t.btnSubmitProfile}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
