import React from 'react';
import { Search, RotateCcw, UserPlus, ShieldCheck, Heart, Sparkles, Filter, CheckCircle2, PhoneCall } from 'lucide-react';
import { ADMIN_PHONE, REGISTRATION_FEE, popularCastes } from '../data/matrimonialData';

export default function MatrimonialHero({
  genderFilter,
  setGenderFilter,
  cityFilter,
  setCityFilter,
  casteFilter,
  setCasteFilter,
  onResetFilters,
  totalProfilesCount,
  onOpenRegister,
  lang,
  t
}) {
  const isUrdu = lang === 'ur';

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const elem = document.getElementById('profiles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickCastes = [
    'راجپوت',
    'جٹ',
    'اعوان',
    'ملک',
    'سید',
    'آرائیں',
    'شیخ',
    'گجر',
    'قریشی',
    'پٹھان',
    'مغل',
    'انصاری'
  ];

  return (
    <section className="bg-[#f8f6f1] text-[#20231f] pt-8 pb-12 sm:pt-14 sm:pb-16 px-4 border-b border-[#dedfd9]">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Preheader badge */}
        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#98742d] uppercase mb-2">
          {isUrdu ? "المکتب ایجوکیشنل فاؤنڈیشن • بااعتماد خاندانی ادارہ" : "Al-Maktab Educational Foundation • Trusted Since 2014"}
        </p>

        {/* Main Heading - Clean, Dignified, Georgia & Nastaleeq */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#063c2b] tracking-tight leading-snug sm:leading-tight mb-3 font-serif">
          {isUrdu ? "شریف اور دیندار خاندانوں کے باوقار رشتے" : "Dignified Family Matrimonial Services"}
        </h1>

        <p className="text-sm sm:text-base text-[#626c65] font-normal max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          {isUrdu
            ? "سنتِ نبوی ﷺ کے مطابق تصدیق شدہ خاندانی کوائف۔ اپنی مطلوبہ برادری، تعلیم اور شہر کے مطابق باآسانی رشتہ تلاش کریں۔"
            : "Verified family proposals adhering strictly to Islamic values and privacy. Easily find matches by caste, education, and city."}
        </p>

        {/* Aafaq.pk Style Pure White Search Box */}
        <div className="bg-white text-[#20231f] rounded-2xl p-5 sm:p-7 shadow-lg shadow-black/5 border border-[#dedfd9] border-t-4 border-t-[#b89446] max-w-4xl mx-auto">
          
          <form onSubmit={handleSearchSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
              
              {/* 1. Gender */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  {isUrdu ? "مجھے رشتہ چاہیے:" : "Looking For:"}
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl py-2.5 px-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold transition-all text-[#20231f]"
                >
                  <option value="all">{isUrdu ? "تمام رشتے (سب)" : "All Profiles"}</option>
                  <option value="عورت">{isUrdu ? "👰 دلہن (لڑکی)" : "Bride"}</option>
                  <option value="مرد">{isUrdu ? "🤵 دلہا (لڑکا)" : "Groom"}</option>
                </select>
              </div>

              {/* 2. Caste / Baradari */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  {isUrdu ? "ذات / برادری:" : "Caste / Baradari:"}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً راجپوت، جٹ، اعوان..." : "e.g. Rajput, Jatt, Awan"}
                  value={casteFilter}
                  onChange={(e) => setCasteFilter(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl py-2.5 px-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold transition-all text-[#20231f] placeholder:text-[#9ca3af]"
                />
              </div>

              {/* 3. City */}
              <div className="sm:col-span-3 text-right">
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  {isUrdu ? "شہر:" : "City:"}
                </label>
                <input
                  type="text"
                  placeholder={isUrdu ? "مثلاً لاہور، اسلام آباد..." : "e.g. Lahore, Islamabad"}
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full border border-[#dedfd9] rounded-xl py-2.5 px-3 bg-[#f8f6f1] focus:bg-white focus:border-[#0f5132] outline-none text-xs sm:text-sm font-bold transition-all text-[#20231f] placeholder:text-[#9ca3af]"
                />
              </div>

              {/* 4. Action Search Button */}
              <div className="sm:col-span-3 flex gap-2">
                <button
                  type="submit"
                  className="w-full bg-[#063c2b] hover:bg-[#04281c] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#b89446]" />
                  <span>{isUrdu ? "رشتہ تلاش کریں" : "Search"}</span>
                </button>

                {(casteFilter || cityFilter || genderFilter !== 'all') && (
                  <button
                    type="button"
                    onClick={onResetFilters}
                    className="p-2.5 bg-[#f8f6f1] hover:bg-slate-200 text-[#20231f] rounded-xl transition-all border border-[#dedfd9]"
                    title={isUrdu ? "تمام فلٹرز ختم کریں" : "Reset"}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </form>

          {/* Quick Caste Badges - Clean White Styling */}
          <div className="mt-5 pt-4 border-t border-[#dedfd9] text-right">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
              <span className="text-[11px] sm:text-xs font-bold text-[#626c65] flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#0f5132]" />
                <span>{isUrdu ? "پاپولر برادریاں (فوری کلک کریں):" : "Popular Castes:"}</span>
              </span>

              <button
                type="button"
                onClick={onOpenRegister}
                className="text-[11px] sm:text-xs font-bold text-[#063c2b] hover:underline flex items-center gap-1"
              >
                <span>{isUrdu ? "+ نیا رشتہ درج کروائیں (فیس: 5,000)" : "+ Register a Rishta (Fee: 5,000)"}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {quickCastes.map((caste) => {
                const isSelected = casteFilter === caste;
                return (
                  <button
                    key={caste}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        setCasteFilter('');
                      } else {
                        setCasteFilter(caste);
                        const elem = document.getElementById('profiles');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#063c2b] text-white shadow-sm'
                        : 'bg-white hover:bg-[#edf4ef] text-[#20231f] hover:text-[#063c2b] border border-[#dedfd9]'
                    }`}
                  >
                    {caste}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4 Clean Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 max-w-4xl mx-auto text-xs text-[#20231f]">
          <div className="flex items-center justify-center gap-2 bg-white border border-[#dedfd9] py-2.5 px-3 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0f5132] shrink-0" />
            <span className="font-bold">{isUrdu ? "100% تصدیق شدہ کوائف" : "100% Verified"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white border border-[#dedfd9] py-2.5 px-3 rounded-xl shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-[#0f5132] shrink-0" />
            <span className="font-bold">{isUrdu ? "مکمل خاندانی رازداری" : "100% Confidential"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white border border-[#dedfd9] py-2.5 px-3 rounded-xl shadow-xs">
            <Sparkles className="w-4 h-4 text-[#b89446] shrink-0" />
            <span className="font-bold">{isUrdu ? "فیس: صرف 5,000 روپے" : "Fee: PKR 5,000"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white border border-[#dedfd9] py-2.5 px-3 rounded-xl shadow-xs">
            <PhoneCall className="w-4 h-4 text-[#0f5132] shrink-0" />
            <span className="font-bold">{isUrdu ? "0325 1013131 ہیلپ لائن" : "Direct Helpline"}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
