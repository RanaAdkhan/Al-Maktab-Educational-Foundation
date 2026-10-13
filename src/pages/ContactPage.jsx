import React, { useState } from 'react';
import { MapPin, PhoneCall, MessageCircle, Clock, Send, ShieldCheck } from 'lucide-react';
import { ADMIN_PHONE, LANDLINE_PHONE, siteConfig } from '../data/matrimonialData';

export default function ContactPage({ onNavigate, lang }) {
  const isUrdu = lang === 'ur';

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `السلام علیکم! میرا نام ${name || 'صارف'} ہے۔
پیغام: ${message}
رہنمائی فرمائیں۔ جزاک اللہ!`
    );
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#f8f6f1] min-h-[85vh] py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-1">
            {isUrdu ? "مرکزی دفتر و رابطہ" : "Head Office & Contact"}
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-[#063c2b] font-serif mb-3">
            {isUrdu ? "ہم سے رابطہ فرمائیں (Contact Us)" : "Get In Touch With Us"}
          </h1>
          <p className="text-xs sm:text-sm text-[#626c65] max-w-xl mx-auto leading-relaxed">
            {isUrdu
              ? "کسی بھی قسم کی رہنمائی، معلومات یا تصدیق کے لیے ہمارے مرکزی دفتر تشریف لائیں یا فون اور واٹس ایپ پر رابطہ کریں۔"
              : "For consultations, profile verifications, or queries, visit our Lahore office or connect via WhatsApp."}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Office Details Card */}
          <div className="md:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#dedfd9] border-t-4 border-t-[#063c2b] shadow-lg shadow-black/5">
            <h2 className="text-lg font-black text-[#063c2b] font-serif mb-4 pb-2 border-b border-[#dedfd9]">
              {isUrdu ? "مرکزی دفتر کی معلومات" : "Office Information"}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#20231f]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#063c2b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#20231f]">{isUrdu ? "پتہ:" : "Address:"}</span>
                  <p className="text-[#626c65] leading-relaxed mt-0.5">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-[#063c2b] shrink-0" />
                <div>
                  <span className="font-bold block text-[#20231f]">{isUrdu ? "پی ٹی سی ایل فون:" : "Landline:"}</span>
                  <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="font-sans font-bold text-[#063c2b] hover:underline" dir="ltr">
                    {LANDLINE_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <span className="font-bold block text-[#20231f]">{isUrdu ? "واٹس ایپ ہیلپ لائن:" : "WhatsApp Helpline:"}</span>
                  <a href={`https://wa.me/${ADMIN_PHONE}`} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[#25D366] hover:underline" dir="ltr">
                    {siteConfig.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#063c2b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#20231f]">{isUrdu ? "دفتری اوقات:" : "Timings:"}</span>
                  <p className="text-[#626c65]">{isUrdu ? "پیر تا ہفتہ: صبح 10:00 بجے تا شام 7:00 بجے" : "Mon - Sat: 10:00 AM - 7:00 PM"}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dedfd9]">
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-2.5 px-4 bg-[#f8f6f1] hover:bg-[#edf4ef] text-[#063c2b] font-bold rounded-xl text-xs border border-[#dedfd9] transition-all cursor-pointer"
              >
                گوگل میپ پر لوکیشن دیکھیں (Open Map)
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="md:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#dedfd9] border-t-4 border-t-[#b89446] shadow-lg shadow-black/5">
            <h2 className="text-lg font-black text-[#063c2b] font-serif mb-4 pb-2 border-b border-[#dedfd9]">
              {isUrdu ? "فوری پیغام بھیجیں (واٹس ایپ)" : "Quick WhatsApp Inquiry"}
            </h2>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-1">
                  {isUrdu ? "آپ کا نام *" : "Your Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                  placeholder={isUrdu ? "اپنا نام لکھیں" : "Enter your name"}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-1">
                  {isUrdu ? "پیغام / سوال *" : "Message / Inquiry *"}
                </label>
                <textarea
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl p-2.5 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm"
                  placeholder={isUrdu ? "ہم آپ کی کیا مدد کر سکتے ہیں؟" : "How can we assist you?"}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{isUrdu ? "واٹس ایپ پر پیغام ارسال کریں" : "Send WhatsApp Message"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
