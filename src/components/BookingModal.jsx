import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, MapPin, Phone, User, CheckCircle2, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function BookingModal({ isOpen, onClose, initialData }) {
  if (!isOpen) return null;

  const isTour = initialData?.price !== undefined;
  const isVehicle = initialData?.ratePerDay !== undefined;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupCity, setPickupCity] = useState('Islamabad');
  const [travelDate, setTravelDate] = useState(initialData?.travelDate || '');
  const [persons, setPersons] = useState(parseInt(initialData?.passengers) || 2);
  const [days, setDays] = useState(3);
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Price calculations
  let estimatedTotal = 0;
  if (isTour) {
    estimatedTotal = (initialData.price || 0) * persons;
  } else if (isVehicle && initialData.ratePerDay) {
    estimatedTotal = (initialData.ratePerDay || 0) * days;
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    // Build structured WhatsApp message
    let itemTitle = initialData?.title || initialData?.name || initialData?.customDestination || 'Custom Trip Plan';
    let summary = `*HAM SAFAR TRAVELS - NEW BOOKING INQUIRY*\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `📌 *Booking Type:* ${isTour ? 'Tour Package' : isVehicle ? 'Car Rental' : 'Custom Trip'}\n` +
      `🎯 *Item/Target:* ${itemTitle}\n` +
      `👤 *Customer Name:* ${name}\n` +
      `📞 *Phone/WhatsApp:* ${phone}\n` +
      `📍 *Pickup City:* ${pickupCity}\n` +
      `📅 *Travel Date:* ${travelDate || 'Flexible'}\n` +
      (isTour ? `👥 *Total Guests:* ${persons} Person(s)\n` : '') +
      (isVehicle ? `⏳ *Rental Duration:* ${days} Day(s)\n` : '') +
      (estimatedTotal > 0 ? `💰 *Est. Total:* Rs. ${estimatedTotal.toLocaleString()}\n` : '') +
      (notes ? `📝 *Special Notes:* ${notes}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `Please confirm availability & advance token details.`;

    const url = `https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(summary)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Trip Booking</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black">
            {initialData?.title || initialData?.name || initialData?.customDestination || 'Book Your Trip with Ham Safar'}
          </h3>

          {initialData?.location && (
            <p className="text-xs text-emerald-200 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{initialData.location}</span>
            </p>
          )}
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Booking Request Sent!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Aapki request receive ho gayi hai aur WhatsApp chat open ho rahi hai. Hamara representative 5-10 minute me aapse rabta karega.
            </p>
            <div className="pt-4 flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-7 space-y-4">
            
            {/* Customer Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Aapka naam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Departure City & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Pickup / Departure City
                </label>
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi (Fly to Isb)</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Faisalabad / Multan">Faisalabad / Multan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  Preferred Departure Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Dynamic Counter: Persons (Tour) or Days (Vehicle) */}
            {isTour && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  No. of Persons (Tickets)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={persons}
                    onChange={(e) => setPersons(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-28 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none font-bold"
                  />
                  <span className="text-xs text-slate-500">
                    Rs. {initialData.price.toLocaleString()} × {persons} person(s)
                  </span>
                </div>
              </div>
            )}

            {isVehicle && initialData.ratePerDay > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  No. of Days Required
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={days}
                    onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-28 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none font-bold"
                  />
                  <span className="text-xs text-slate-500">
                    Rs. {initialData.ratePerDay.toLocaleString()} × {days} day(s) (With Driver)
                  </span>
                </div>
              </div>
            )}

            {/* Special Request / Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Special Requirements (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Specific hotel preference, extra luggage, or custom route..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
              />
            </div>

            {/* Price Estimate Summary */}
            {estimatedTotal > 0 && (
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Estimated Total Amount</span>
                  <div className="text-2xl font-black text-emerald-700">
                    Rs. {estimatedTotal.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded-full">
                    20% Advance Token
                  </span>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Rs. {Math.round(estimatedTotal * 0.2).toLocaleString()} to confirm
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm & WhatsApp Booking</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Aapka data 100% mehfooz hai. Koi upfront payment required nahi.</span>
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
