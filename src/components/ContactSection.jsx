import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Open WhatsApp prefilled with contact form data
    const text = `Salam Ham Safar Travels!\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Destination:* ${formData.destination || 'Not Specified'}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden relative">
          
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Rabta Karein</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Plan Karein Apna Agla Safar Hamare Sath!
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Koi sawal hai ya customized tour quote chahiye? Hamari travel expert team 24 ghante aapki rehnumai ke liye haazir hai.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3.5 text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Phone Call Hotline</span>
                    <span className="font-bold text-sm sm:text-base">{companyInfo.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">WhatsApp Instant Chat</span>
                    <span className="font-bold text-sm sm:text-base">{companyInfo.whatsapp}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Offices</span>
                    <span className="text-xs sm:text-sm text-slate-300">{companyInfo.address}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send Direct Message / Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Form fill karke direct WhatsApp par connect karein.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Shukriya! Inquiry Sent.</h4>
                  <p className="text-xs text-emerald-700">
                    Aapka message hamare WhatsApp par open kar diya gaya hai. Hamari team foran response karegi.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-800 underline"
                  >
                    Naya message bhejein
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Aapka Naam *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp / Mobile No *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Destination / Requirement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hunza 5 days tour ya Prado for Skardu"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Extra Details / Dates
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Kitne log hain? Kis date par nikalna chahte hain?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Chat on WhatsApp</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
