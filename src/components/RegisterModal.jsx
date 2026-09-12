import React, { useState } from 'react';
import { X, Heart, CheckCircle2 } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose, onAddProfile, lang, t }) {
  if (!isOpen) return null;

  const isUrdu = lang === 'ur';

  const [formData, setFormData] = useState({
    name: '',
    gender: 'عورت',
    age: '',
    height: "5'4\"",
    marital: isUrdu ? 'کنوارا/کنواری' : 'Single / Unmarried',
    caste: '',
    city: '',
    education: '',
    job: '',
    contact: '',
    demands: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      id: Math.floor(100 + Math.random() * 900),
      name: formData.name,
      gender: formData.gender,
      age: parseInt(formData.age),
      height: formData.height || 'N/A',
      marital: formData.marital,
      caste: formData.caste,
      city: formData.city,
      education: formData.education,
      job: formData.job || (isUrdu ? 'درج نہیں' : 'N/A'),
      contact: formData.contact,
      demands: formData.demands || (isUrdu ? 'کوئی خاص شرط درج نہیں کی گئی۔' : 'No specific demands stated.')
    };

    onAddProfile(newProfile);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className={`bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative my-8 border border-amber-200 animate-in zoom-in-95 duration-200 ${isUrdu ? 'text-right' : 'text-left'}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 ${isUrdu ? 'left-5' : 'right-5'} text-slate-400 hover:text-slate-700 text-xl p-1.5 rounded-full hover:bg-slate-100 transition-colors`}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Heading */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-amber-300">
            <Heart className="w-6 h-6 fill-amber-600 text-amber-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
            {t.regModalTitle}
          </h3>
          <p className="text-xs text-slate-500">
            {t.regModalSubtitle}
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-2xl font-bold text-slate-900">{t.regSuccessHeading}</h4>
            <p className="text-sm text-slate-600">
              {t.regSuccessDesc}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Candidate Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.fullNameLabel}
              </label>
              <input
                type="text"
                required
                placeholder={isUrdu ? "مثلاً فاطمہ نور / محمد احمد" : "e.g. Fatima Noor / Muhammad Bilal"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-xs sm:text-sm"
              />
            </div>

            {/* Row 1: Gender, Age, Height */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.genderLabel}
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                >
                  <option value="عورت">{t.bride}</option>
                  <option value="مرد">{t.groom}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.ageInputLabel}
                </label>
                <input
                  type="number"
                  required
                  min="18"
                  max="70"
                  placeholder="24"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.heightInputLabel}
                </label>
                <input
                  type="text"
                  placeholder="5'5&quot;"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Row 2: Marital, Caste, City */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.maritalInputLabel}
                </label>
                <select
                  value={formData.marital}
                  onChange={(e) => setFormData({ ...formData, marital: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                >
                  <option value="کنوارا/کنواری">{isUrdu ? 'کنوارا / کنواری' : 'Single / Unmarried'}</option>
                  <option value="طلاق یافتہ">{isUrdu ? 'طلاق یافتہ' : 'Divorced'}</option>
                  <option value="بیوہ/رانڈ">{isUrdu ? 'بیوہ / رانڈ' : 'Widowed'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.casteInputLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUrdu ? "مثلاً راجپوت، آرائیں، جٹ" : "e.g. Rajput, Arain, Jatt"}
                  value={formData.caste}
                  onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.cityInputLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUrdu ? "مثلاً لاہور" : "e.g. Lahore"}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Row 3: Education, Job */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.educationInputLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUrdu ? "مثلاً ایم ایس سی، ایم بی بی ایس، بی اے" : "e.g. MSc, MBBS, MBA"}
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.jobInputLabel}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً سافٹ ویئر انجینئر، گورنمنٹ جاب" : "e.g. Software Engineer, Doctor, Govt Job"}
                  value={formData.job}
                  onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.contactInputLabel}
              </label>
              <input
                type="text"
                required
                placeholder="03001234567"
                dir="ltr"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm text-left"
              />
            </div>

            {/* Partner Demands */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.demandsInputLabel}
              </label>
              <textarea
                rows="2"
                placeholder={isUrdu ? "مطلوبہ رشتے کی تعلیم، عمر اور خاندانی ترجیحات..." : "Preferred partner age, education, caste or religious values..."}
                value={formData.demands}
                onChange={(e) => setFormData({ ...formData, demands: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-amber-500 outline-none text-xs sm:text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-amber-600 hover:text-slate-950 text-amber-400 font-black py-3.5 rounded-xl shadow-lg shadow-slate-900/20 transition-all mt-2 text-xs sm:text-sm hover:scale-[1.01] active:scale-[0.99]"
            >
              {t.btnSubmitProfile}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
