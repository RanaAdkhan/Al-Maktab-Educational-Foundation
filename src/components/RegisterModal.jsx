import React, { useState } from 'react';
import { X, ShieldCheck, Heart, User, CheckCircle2 } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose, onAddProfile }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    gender: 'عورت',
    age: '',
    height: "5'4\"",
    marital: 'کنوارا/کنواری',
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
      height: formData.height || 'درج نہیں',
      marital: formData.marital,
      caste: formData.caste,
      city: formData.city,
      education: formData.education,
      job: formData.job || 'درج نہیں',
      contact: formData.contact,
      demands: formData.demands || 'کوئی خاص شرط درج نہیں کی گئی۔'
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
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 text-right relative my-8 border border-rose-100 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 text-xl p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Heading */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-2">
            <Heart className="w-6 h-6 fill-rose-600 text-rose-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-rose-900 mb-1">
            نئے رشتے کے کوائف درج کریں
          </h3>
          <p className="text-xs text-slate-500">
            تمام معلومات محفوظ رکھی جاتی ہیں اور رابطہ تفصیلات صرف تصدیق شدہ فیملیز کو فراہم کی جاتی ہیں
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-2xl font-bold text-slate-900">مبارک ہو!</h4>
            <p className="text-sm text-slate-600">
              رشتے کے کوائف کامیابی سے لائیو لسٹنگ میں شامل ہو چکے ہیں۔
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Candidate Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                امیدوار کا پورا نام: *
              </label>
              <input
                type="text"
                required
                placeholder="مثلاً فاطمہ نور / محمد احمد"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-xs sm:text-sm"
              />
            </div>

            {/* Row 1: Gender, Age, Height */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  جنس: *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                >
                  <option value="عورت">عورت (دلہن)</option>
                  <option value="مرد">مرد (دولہا)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  عمر (سال): *
                </label>
                <input
                  type="number"
                  required
                  min="18"
                  max="70"
                  placeholder="24"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  قد (مثلاً 5'5"):
                </label>
                <input
                  type="text"
                  placeholder="5'5&quot;"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Row 2: Marital, Caste, City */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ازدواجی حیثیت: *
                </label>
                <select
                  value={formData.marital}
                  onChange={(e) => setFormData({ ...formData, marital: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                >
                  <option value="کنوارا/کنواری">کنوارا / کنواری</option>
                  <option value="طلاق یافتہ">طلاق یافتہ</option>
                  <option value="بیوہ/رانڈ">بیوہ / رانڈ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  قوم / برادری: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثلاً راجپوت، آرائیں، جٹ"
                  value={formData.caste}
                  onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  رہائشی شہر: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثلاً لاہور"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Row 3: Education, Job */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  تعلیم: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثلاً ایم ایس سی، ایم بی بی ایس، بی اے"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ملازمت / کاروبار:
                </label>
                <input
                  type="text"
                  placeholder="مثلاً سافٹ ویئر انجینئر، گورنمنٹ جاب"
                  value={formData.job}
                  onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                رابطہ نمبر (واٹس ایپ): *
              </label>
              <input
                type="text"
                required
                placeholder="03001234567"
                dir="ltr"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm text-left"
              />
            </div>

            {/* Partner Demands */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                شریکِ حیات کے تقاضے / ڈیمانڈ:
              </label>
              <textarea
                rows="2"
                placeholder="مطلوبہ رشتے کی تعلیم، عمر اور خاندانی ترجیحات..."
                value={formData.demands}
                onChange={(e) => setFormData({ ...formData, demands: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 focus:ring-2 focus:ring-rose-500 outline-none text-xs sm:text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-rose-700/30 transition-all mt-2 text-xs sm:text-sm hover:scale-[1.01] active:scale-[0.99]"
            >
              رجسٹریشن مکمل کریں اور رشتہ لائیو کریں
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
