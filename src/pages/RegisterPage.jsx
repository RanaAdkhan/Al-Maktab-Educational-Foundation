import React, { useState } from 'react';
import { Upload, Trash2, Heart, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ADMIN_PHONE, REGISTRATION_FEE } from '../data/matrimonialData';

export default function RegisterPage({ onAddProfile, onNavigate, lang, t }) {
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
    demands: '',
    photo: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(isUrdu ? 'تصویر کا سائز 2MB سے کم ہونا چاہیے۔' : 'Photo size must be less than 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setFormData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    setFormData((prev) => ({ ...prev, photo: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const summaryText = isUrdu
      ? `*السلام علیکم ہمسفر رشتہ سنٹر (المکتب ایجوکیشنل فاؤنڈیشن)*
*نیا رشتہ رجسٹریشن فارم و کوائف (فیس: 5,000 روپے)*
-----------------------------------
👤 *امیدوار کا نام:* ${formData.name}
🚻 *جنس:* ${formData.gender}
🎂 *عمر:* ${formData.age} سال ${formData.dob ? `(تاریخ پیدائش: ${formData.dob})` : ''}
📏 *قد:* ${formData.height} | *رنگت:* ${formData.complexion}
💍 *ازدواجی حیثیت:* ${formData.marital}
🏛️ *ذات / برادری:* ${formData.caste}
🕌 *مسلک / فرقہ:* ${formData.sect}
🎓 *تعلیم:* ${formData.education}
💼 *پیشہ / ملازمت:* ${formData.job} ${formData.income ? `(ماہانہ آمدن: ${formData.income})` : ''}
📍 *شہر و علاقہ:* ${formData.city} ${formData.area ? `(${formData.area})` : ''} — ${formData.houseStatus}
👨‍👩‍👧‍👦 *خاندانی تفصیل:* ${formData.familyDetails || 'N/A'}
🖼️ *تصویر:* ${photoPreview ? 'فارم میں منسلک کی گئی ہے' : 'واٹس ایپ پر بھیج دی جائے گی'}
-----------------------------------
🎯 *مطلوبہ شریکِ حیات کے تقاضے (Demands):*
${formData.demands}
-----------------------------------
📞 *سرپرست کا نام:* ${formData.guardianName} (${formData.guardianRelation})
📱 *رابطہ نمبر:* ${formData.contact}
💳 *رجسٹریشن فیس:* 5,000 روپے (ایک بار قابلِ ادا)
-----------------------------------
برائے مہربانی کوائف موصول فرما کر رشتہ لائیو لسٹ میں شامل کریں اور تلاش کا عمل شروع فرمائیں۔ جزاک اللہ!`
      : `*Hello Humsafar Matrimonial (Al-Maktab Foundation)*
*New Matrimonial Biodata (Fee: Rs. 5,000)*
Candidate: ${formData.name} (${formData.gender})
Age: ${formData.age} | Caste: ${formData.caste} | City: ${formData.city}
Education: ${formData.education} | Job: ${formData.job}
Contact: ${formData.contact}`;

    const waUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(summaryText)}`;

    const newProfile = {
      id: Math.floor(100 + Math.random() * 900),
      name: formData.name,
      gender: formData.gender,
      age: parseInt(formData.age) || 25,
      height: formData.height || "5'4\"",
      marital: formData.marital,
      caste: formData.caste,
      sect: formData.sect,
      city: formData.city,
      education: formData.education,
      job: formData.job,
      contact: formData.contact,
      demands: formData.demands,
      familyStatus: formData.familyDetails,
      photo: formData.photo || null
    };

    if (onAddProfile) {
      onAddProfile(newProfile);
    }

    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-[#f8f6f1] min-h-[85vh] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-1">
            {isUrdu ? "آن لائن رجسٹریشن ڈیسک" : "Online Registration Desk"}
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-[#063c2b] font-serif mb-2">
            {isUrdu ? "نیا رشتہ رجسٹر کریں (Register a Rishta)" : "Register Marriage Biodata"}
          </h1>
          <p className="text-xs sm:text-sm text-[#626c65] max-w-xl mx-auto leading-relaxed">
            {isUrdu
              ? "امیدوار کے مکمل کوائف درج کریں اور تصویر اپلوڈ کریں۔ آپ کا ڈیٹا مکمل رازداری کے ساتھ صرف سنجیدہ فیملیز سے شیئر کیا جائے گا۔"
              : "Complete candidate biodata and upload photo. 100% confidential and secure."}
          </p>

          {/* Fee Notice */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white border border-[#dedfd9] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#20231f] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#063c2b]" />
            <span>{isUrdu ? "سروس و رجسٹریشن فیس:" : "Registration Fee:"}</span>
            <span className="bg-[#063c2b] text-white px-2 py-0.5 rounded-md font-sans">
              Rs. {REGISTRATION_FEE}/-
            </span>
            <span className="text-xs text-[#626c65] font-normal">
              {isUrdu ? "(ایک بار قابلِ ادا)" : "(One-Time)"}
            </span>
          </div>
        </div>

        {/* Submitted Notification */}
        {submitted && (
          <div className="mb-8 p-6 bg-white border-2 border-[#063c2b] rounded-2xl text-center shadow-md">
            <CheckCircle2 className="w-12 h-12 text-[#063c2b] mx-auto mb-2" />
            <h3 className="text-lg font-black text-[#063c2b]">
              {isUrdu ? "آپ کا رشتہ کامیابی سے درج ہو چکا ہے!" : "Biodata Submitted Successfully!"}
            </h3>
            <p className="text-xs sm:text-sm text-[#626c65] mt-1 max-w-md mx-auto">
              {isUrdu
                ? "آپ کا رشتہ ویب سائٹ پر شامل کر لیا گیا ہے اور تمام کوائف ایڈمن واٹس ایپ پر ارسال کر دیے گئے ہیں۔ ہماری ٹیم جلد رابطہ کرے گی۔"
                : "Your profile has been saved and forwarded to the administrator on WhatsApp."}
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => onNavigate('browse')}
                className="px-5 py-2.5 bg-[#063c2b] text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                رشتے دیکھیں (Browse Rishtas)
              </button>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg shadow-black/5 border border-[#dedfd9] border-t-4 border-t-[#b89446]">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Candidate Details */}
            <div>
              <h3 className="text-base font-black text-[#063c2b] pb-2 border-b border-[#dedfd9] font-serif mb-4">
                1. {isUrdu ? "امیدوار کے بنیادی کوائف" : "Candidate Basic Details"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "امیدوار کا نام *" : "Candidate Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder={isUrdu ? "نام لکھیں" : "Enter Name"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "جنس *" : "Gender *"}
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold"
                  >
                    <option value="عورت">{isUrdu ? "عورت (دلہن / فی میل)" : "Female (Bride)"}</option>
                    <option value="مرد">{isUrdu ? "مرد (دلہا / میل)" : "Male (Groom)"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "عمر (سال) *" : "Age (Years) *"}
                  </label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="70"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder="24"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "قد *" : "Height *"}
                  </label>
                  <input
                    type="text"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder="5'4''"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "ذات / برادری *" : "Caste / Baradari *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.caste}
                    onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder={isUrdu ? "مثلاً راجپوت، جٹ، اعوان..." : "e.g. Rajput, Jatt"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "ازدواجی حیثیت *" : "Marital Status *"}
                  </label>
                  <select
                    value={formData.marital}
                    onChange={(e) => setFormData({ ...formData, marital: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                  >
                    <option value="کنوارا/کنواری">{isUrdu ? "کنوارا / کنواری (Single)" : "Single"}</option>
                    <option value="طلاق یافتہ">{isUrdu ? "طلاق یافتہ (Divorced)" : "Divorced"}</option>
                    <option value="بیوہ / رنڈوا">{isUrdu ? "بیوہ / رنڈوا (Widowed)" : "Widowed"}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Education & City */}
            <div>
              <h3 className="text-base font-black text-[#063c2b] pb-2 border-b border-[#dedfd9] font-serif mb-4">
                2. {isUrdu ? "تعلیم، پیشہ و رہائش" : "Education & Residence"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "تعلیم *" : "Education *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder={isUrdu ? "مثلاً BS IT, Master, Matric" : "e.g. BS, Masters"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "پیشہ / ملازمت" : "Job / Occupation"}
                  </label>
                  <input
                    type="text"
                    value={formData.job}
                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder={isUrdu ? "گورنمنٹ جاب، بزنس، گھریلو" : "e.g. Software Engineer"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "شہر *" : "City *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder={isUrdu ? "مثلاً لاہور، اسلام آباد" : "e.g. Lahore"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "مکان کی حیثیت" : "House Status"}
                  </label>
                  <select
                    value={formData.houseStatus}
                    onChange={(e) => setFormData({ ...formData, houseStatus: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                  >
                    <option value="ذاتی گھر">{isUrdu ? "ذاتی گھر (Owned)" : "Owned"}</option>
                    <option value="کرایہ کا گھر">{isUrdu ? "کرایہ کا گھر (Rented)" : "Rented"}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Photo Upload */}
            <div>
              <h3 className="text-base font-black text-[#063c2b] pb-2 border-b border-[#dedfd9] font-serif mb-4">
                3. {isUrdu ? "امیدوار کی تصویر (Photo Upload)" : "Candidate Photo"}
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-[#f8f6f1] rounded-2xl border border-[#dedfd9]">
                {photoPreview ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#b89446] shrink-0 shadow-sm">
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                      title="Remove Photo"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-white border border-[#dedfd9] flex items-center justify-center text-[#98742d] shrink-0">
                    <Upload className="w-7 h-7" />
                  </div>
                )}

                <div className="flex-1 text-center sm:text-right">
                  <p className="text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "تصویر منتخب کریں (اختیاری لیکن موثر)" : "Select Candidate Photo"}
                  </p>
                  <p className="text-[11px] text-[#626c65] mb-2">
                    {isUrdu ? "تصویر کا سائز زیادہ سے زیادہ 2MB ہو سکتا ہے۔ مکمل رازداری برقرار رکھی جائے گی۔" : "Maximum file size 2MB."}
                  </p>
                  <label className="inline-block px-4 py-2 bg-white hover:bg-slate-50 text-[#063c2b] border border-[#dedfd9] rounded-xl text-xs font-bold cursor-pointer shadow-xs">
                    {photoPreview ? "تصویر تبدیل کریں" : "تصویر اپلوڈ کریں"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Section 4: Partner Demands */}
            <div>
              <h3 className="text-base font-black text-[#063c2b] pb-2 border-b border-[#dedfd9] font-serif mb-4">
                4. {isUrdu ? "شریکِ حیات کے تقاضے (Demands / Preferences)" : "Partner Preferences"}
              </h3>

              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-1">
                  {isUrdu ? "آپ کو کیسا رشتہ مطلوب ہے؟ (عمر، تعلیم، برادری وغیرہ) *" : "What are your requirements? *"}
                </label>
                <textarea
                  rows="3"
                  required
                  value={formData.demands}
                  onChange={(e) => setFormData({ ...formData, demands: e.target.value })}
                  className="w-full border border-[#dedfd9] rounded-xl p-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                  placeholder={isUrdu ? "مثلاً دیندار، نماز کا پابند، راجپوت یا جٹ برادری، لاہور یا راولپنڈی کا رہائشی..." : "e.g. Educated, practicing Muslim, same caste..."}
                ></textarea>
              </div>
            </div>

            {/* Section 5: Guardian & Contact */}
            <div>
              <h3 className="text-base font-black text-[#063c2b] pb-2 border-b border-[#dedfd9] font-serif mb-4">
                5. {isUrdu ? "سرپرست و رابطہ کی معلومات" : "Guardian & Contact Information"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "سرپرست کا نام *" : "Guardian Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                    placeholder={isUrdu ? "والد یا سرپرست کا نام" : "Father / Guardian Name"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1">
                    {isUrdu ? "رابطہ نمبر / واٹس ایپ *" : "Contact / WhatsApp Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-sans"
                    placeholder="0300 1234567"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#dedfd9]">
              <button
                type="submit"
                className="w-full py-4 bg-[#063c2b] hover:bg-[#04281c] text-white font-black rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Send className="w-5 h-5 text-[#b89446]" />
                <span>{isUrdu ? "کوائف سبمٹ کریں اور واٹس ایپ پر ارسال کریں (فیس: 5,000)" : "Submit Biodata & Send to WhatsApp (Rs. 5,000)"}</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}
