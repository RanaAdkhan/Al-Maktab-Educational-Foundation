import React, { useState, useEffect } from 'react';
import { Compass, Phone, Menu, X, MessageCircle, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tour Packages', href: '#tours' },
    { label: 'Rent a Car', href: '#vehicles' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-sm py-3 border-b border-slate-200/80' : 'bg-transparent py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className={`text-xl font-extrabold tracking-tight block ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                HAM <span className="text-emerald-500">SAFAR</span>
              </span>
              <span className={`text-[10px] tracking-wider font-semibold uppercase block ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                Travels & Rentals
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100 hover:text-white drop-shadow-sm'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Salam Ham Safar Travels! Mujhe travel package ya vehicle inquiry karni hai.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all border border-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking({ type: 'custom' })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book Trip</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking({ type: 'custom' })}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav bg-white/95 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200/80 flex flex-col gap-2">
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Salam Ham Safar Travels!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Helpline</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking({ type: 'custom' });
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
            >
              <span>Instant Trip Booking</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
