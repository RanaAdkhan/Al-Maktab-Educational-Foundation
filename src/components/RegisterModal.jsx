import React, { useState } from 'react';
import { X, Heart, CheckCircle2, Send, ShieldCheck, Phone, AlertCircle } from 'lucide-react';
import { ADMIN_PHONE, REGISTRATION_FEE } from '../data/matrimonialData';

export default function RegisterModal({ isOpen, onClose, onAddProfile, lang, t }) {
  if (!isOpen) return null;

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

    // Generate formatted WhatsApp message text
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

    // Save profile locally
    const newProfile = {
      id: Math.floor(100 + Math.random() * 900),
      name: formData.name,
      gender: formData.gender,
      age: parseInt(formData.age) || 25,
      height: formData.height || '5\'4"',
      marital: formData.marital,
      caste: formData.caste,
      sect: formData.sect,
      city: formData.city,
      education: formData.education,
      job: formData.job,
      contact: formData.contact,
      demands: formData.demands
    };

    if (onAddProfile) {
      onAddProfile(newProfile);
    }

    setSubmitted(true);

    // Automatically trigger WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
      <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full p-4 sm:p-8 relative my-4 sm:my-8 border-2 border-amber-400 max-h-[92vh] overflow-y-auto ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 sm:top-5 ${isUrdu ? 'left-3 sm:left-5' : 'right-3 sm:right-5'} text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Heading & Fee Banner */}
        <div className="text-center mb-5 sm:mb-6 pt-1 sm:pt-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-amber-100 text-amber-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 border border-amber-300 shadow-sm">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-600 text-amber-600" />
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-1">
            {t.regModalTitle}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 max-w-lg mx-auto">
            {isUrdu
              ? "آپ کے درج کردہ کوائف اور شریکِ حیات کے تقاضوں کے مطابق المکتب فاؤنڈیشن کی ٹیم خود رشتہ تلاش کر کے رابطہ کروائے گی۔"
              : "Our team will actively search, verify, and coordinate proposals matching your exact biodata and requirements."}
          </p>

          {/* Registration Fee Highlight Banner */}
          <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-amber-500/15 via-amber-500/25 to-amber-500/15 border-2 border-amber-500 text-slate-900 px-4 py-2 rounded-xl text-xs sm:text-sm font-black shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>{isUrdu ? "رجسٹریشن و کسٹم تلاش فیس:" : "Registration & Custom Matchmaking Fee:"}</span>
            <span className="bg-slate-900 text-amber-400 px-2.5 py-0.5 rounded-lg text-xs sm:text-sm font-black font-sans">
              Rs. 5,000/-
            </span>
            <span className="text-[10px] sm:text-xs text-amber-900 font-bold">
              ({isUrdu ? "ایک بار قابلِ ادا" : "One-Time Only"})
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 sm:py-12 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-xl sm:text-2xl font-black text-slate-900">{t.regSuccessHeading}</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {t.regSuccessDesc}
            </p>

            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 max-w-md mx-auto text-xs text-amber-950 space-y-1">
              <p className="font-bold">
                💳 {isUrdu ? "فیس جمع کروانے کے طریقے:" : "Payment Methods (Rs. 5,000):"}
              </p>
              <p>• JazzCash / EasyPaisa / Bank Transfer: <strong dir="ltr">0325 1013131</strong></p>
              <p>• {isUrdu ? "یا مرکزی دفتر مزنگ روڈ لاہور پر نقد ادائیگی" : "Or pay cash at Lahore Office"}</p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href={whatsappMsgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>{isUrdu ? "دوبارہ واٹس ایپ کھولیں" : "Open WhatsApp Again"}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs sm:text-sm"
              >
                {isUrdu ? "بند کریں" : "Close"}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            
            {/* Section 1: Candidate Basic Info */}
            <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200">
              <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-3 text-amber-700 flex items-center gap-1.5 border-b pb-2">
                <span>1. {isUrdu ? "امیدوار کی بنیادی معلومات" : "Candidate Basic Details"}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "امیدوار کا مکمل نام درج کریں" : "Full Name"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none font-medium"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.genderLabel}
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none font-bold"
                  >
                    <option value="عورت">{t.bride}</option>
                    <option value="مرد">{t.groom}</option>
                  </select>
                </div>

                {/* Age */}
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
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* Height */}
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
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* Complexion */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.complexionInputLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={isUrdu ? "گوری / گندمی / درمیانی" : "Fair / Wheatish"}
                    value={formData.complexion}
                    onChange={(e) => setFormData({ ...formData, complexion: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* Marital Status */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.maritalInputLabel}
                  </label>
                  <select
                    value={formData.marital}
                    onChange={(e) => setFormData({ ...formData, marital: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    <option value="کنوارا/کنواری">{isUrdu ? 'کنوارا / کنواری' : 'Single / Unmarried'}</option>
                    <option value="طلاق یافتہ">{isUrdu ? 'طلاق یافتہ' : 'Divorced'}</option>
                    <option value="خلع یافتہ">{isUrdu ? 'خلع یافتہ' : 'Khula'}</option>
                    <option value="بیوہ/رانڈ">{isUrdu ? 'بیوہ / رانڈ' : 'Widowed'}</option>
                  </select>
                </div>

                {/* Caste */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.casteInputLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثلاً راجپوت، آرائیں، جٹ، سید" : "e.g. Rajput, Arain, Jatt"}
                    value={formData.caste}
                    onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* Sect / Religious Practice */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.sectInputLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثلاً اہل سنت / دیوبندی / اہلحدیث" : "e.g. Ahle Sunnat / Deobandi"}
                    value={formData.sect}
                    onChange={(e) => setFormData({ ...formData, sect: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

              </div>
            </div>

            {/* Section 2: Education, Career & Residence */}
            <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200">
              <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-3 text-amber-700 flex items-center gap-1.5 border-b pb-2">
                <span>2. {isUrdu ? "تعلیم، روزگار اور رہائش کی تفصیلات" : "Education, Job & Residence"}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Education */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.educationInputLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثلاً M.Sc, MBBS, بی ایس، عالمہ کورس" : "e.g. Master, MBBS, BS"}
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* Job & Income */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.jobInputLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثلاً سافٹ ویئر انجینئر، بزنس مین، گورنمنٹ جاب" : "e.g. Job, Business, Income"}
                    value={formData.job}
                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* City & Area */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.cityInputLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثلاً لاہور (گلبرگ / مزنگ)" : "e.g. Lahore, Gulberg"}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                {/* House Status */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.houseStatusLabel}
                  </label>
                  <select
                    value={formData.houseStatus}
                    onChange={(e) => setFormData({ ...formData, houseStatus: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    <option value="ذاتی گھر">{isUrdu ? 'ذاتی گھر (Own House)' : 'Owned House'}</option>
                    <option value="کرایہ کا مکان">{isUrdu ? 'کرایہ کا مکان (Rented)' : 'Rented House'}</option>
                  </select>
                </div>

                {/* Family Details */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1 text-[11px] sm:text-xs">
                    {t.familyDetailsLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثلاً والد صاحب بزنس مین ہیں، 2 بھائی (شادی شدہ)، 1 بہن..." : "Father occupation, number of brothers/sisters"}
                    value={formData.familyDetails}
                    onChange={(e) => setFormData({ ...formData, familyDetails: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

              </div>
            </div>

            {/* Section 3: Partner Demands & Preferences */}
            <div className="bg-amber-50/70 p-3.5 sm:p-4 rounded-2xl border-2 border-amber-300">
              <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-2 text-amber-900 flex items-center gap-1.5">
                <span>3. {isUrdu ? "مطلوبہ شریکِ حیات کے مکمل تقاضے اور ڈیمانڈز (Partner Demands)" : "Partner Requirements & Demands"}</span>
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-600 mb-2">
                {isUrdu
                  ? "جیسے مطلوبہ عمر، تعلیم، برادری (کیا اپنی برادری ضروری ہے یا دیگر بھی)، مسلک، رہائش کا شہر وغیرہ تفصیل سے لکھیں:"
                  : "Specify required age, qualification, caste preferences, city, and family status in detail:"}
              </p>
              <textarea
                rows="3"
                required
                placeholder={isUrdu ? "مثلاً تعلیم گریجویٹ یا ماسٹرز ہو، شریف النفس خاندان، نماز کا پابند، اپنی برادری یا کسی بھی معزز برادری میں رشتہ قابلِ قبول ہے..." : "Detailed requirements regarding age, education, caste, etc."}
                value={formData.demands}
                onChange={(e) => setFormData({ ...formData, demands: e.target.value })}
                className="w-full border border-amber-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-amber-500 outline-none resize-none font-medium"
              />
            </div>

            {/* Section 4: Guardian & Contact Details */}
            <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200">
              <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-3 text-amber-700 flex items-center gap-1.5 border-b pb-2">
                <span>4. {isUrdu ? "سرپرست اور رابطہ تفصیلات" : "Guardian & Contact Information"}</span>
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
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
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
                    className="w-full border border-slate-200 rounded-xl p-2 bg-white focus:ring-2 focus:ring-amber-500 outline-none text-left font-mono font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Fee Confirmation Notice */}
            <div className="bg-gradient-to-r from-slate-900 to-amber-950 text-white p-3.5 rounded-2xl flex items-center justify-between gap-3 shadow-md border border-amber-400/40">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-[11px] sm:text-xs">
                  <span className="font-bold text-amber-300 block">
                    {isUrdu ? "رجسٹریشن فیس: 5,000 روپے (یک مشت)" : "Registration Fee: Rs. 5,000 (One-Time)"}
                  </span>
                  <span className="text-slate-300 text-[10px] sm:text-[11px]">
                    {isUrdu ? "کوائف جمع ہونے پر واٹس ایپ یا آن لائن فیس ادا کر کے تلاش شروع کروائیں۔" : "Pay via JazzCash/EasyPaisa to initiate customized matchmaking."}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-black py-3 sm:py-3.5 rounded-xl shadow-xl transition-all text-xs sm:text-base flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.btnSubmitProfile}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
