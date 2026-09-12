import React from 'react';
import { Compass, Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                HAM <span className="text-emerald-400">SAFAR</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Pakistan ka sab se bharosemand travel & tour network. Hum provide karte hain personalized honeymoon packages, family tours aur car rentals with professional drivers.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                title="Call Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#tours" className="hover:text-emerald-400 transition-colors">Tour Packages</a></li>
              <li><a href="#vehicles" className="hover:text-emerald-400 transition-colors">Rent a Car (With Driver)</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Top Destinations</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Destinations</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Skardu Valley</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Hunza & Passu</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Swat & Kalam</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Neelum Valley Kashmir</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Fairy Meadows & Deosai</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Islamabad & Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="pt-2 text-emerald-400 font-bold">
                ✓ 24/7 Available for Bookings
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Ham Safar Travels. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Travelers of Pakistan
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
