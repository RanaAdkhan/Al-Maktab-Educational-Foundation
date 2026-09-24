import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, CheckCircle, Share, PlusSquare, ArrowDown, Sparkles, ExternalLink } from 'lucide-react';

export default function InstallAppBanner({ lang }) {
  const isUrdu = lang === 'ur';
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsInstalled(true);
      setIsVisible(false);
    }

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for beforeinstallprompt (Chrome / Android / Edge)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } else {
      // Show instructions modal for iOS or manual install
      setShowInstructions(true);
    }
  };

  if (isInstalled || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Top Mobile App Install Announcement Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-3 sm:px-4 py-2 sm:py-2.5 shadow-md border-b border-amber-400 relative z-50 animate-in slide-in-from-top duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
          
          {/* Text & Icon */}
          <div className="flex items-center gap-2 flex-grow min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-xs animate-pulse">
              <Smartphone className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
            
            <div className="truncate">
              <span className="font-black text-slate-950 text-xs sm:text-sm block truncate">
                {isUrdu
                  ? "📲 آپ اس ویب سائٹ کو اپنے موبائل میں ایپ (App) کی طرح انسٹال بھی کر سکتے ہیں!"
                  : "📲 You can now install this website as an App on your mobile!"}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-900 font-semibold hidden md:inline">
                {isUrdu
                  ? "بغیر پلے سٹور کے ایک کلک میں ہوم اسکرین پر شامل کریں اور فوری کوائف درج کروائیں۔"
                  : "Install in 1-click on your home screen for quick offline-ready access."}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handleInstallClick}
              className="bg-slate-950 hover:bg-slate-900 text-amber-400 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-black shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all border border-amber-400/50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isUrdu ? "موبائل میں انسٹال کریں" : "Install App"}</span>
            </button>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 text-slate-950 hover:bg-black/10 rounded-full transition-colors"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Manual Install Instructions Modal (For iOS / Browsers where prompt is not auto) */}
      {showInstructions && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className={`bg-white rounded-3xl shadow-2xl max-w-md w-full p-5 sm:p-7 relative border-2 border-amber-400 ${isUrdu ? 'text-right' : 'text-left'}`}>
            
            <button
              onClick={() => setShowInstructions(false)}
              className={`absolute top-4 ${isUrdu ? 'left-4' : 'right-4'} text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2 border border-amber-300 shadow-md">
                <Smartphone className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {isUrdu ? "موبائل میں ایپ انسٹال کرنے کا طریقہ" : "How to Install App on Mobile"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isUrdu ? "ہمسفر رشتہ سنٹر ایپ کو اپنی ہوم اسکرین پر شامل کریں" : "Add Humsafar Rishta Centre to your mobile Home Screen"}
              </p>
            </div>

            {isIOS ? (
              /* iOS Safari Instructions */
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <span>آئی فون / آئی پیڈ (iPhone Safari) پر انسٹال کرنے کے 2 آسان مراحل:</span>
                </p>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    سفاری براؤزر میں نیچے <strong>شیئر (Share)</strong> آئیکون <Share className="w-3.5 h-3.5 inline mx-1 text-blue-600" /> پر کلک کریں۔
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    تھوڑا نیچے سکرول کر کے <strong>"Add to Home Screen"</strong> (ہوم اسکرین پر شامل کریں) پر کلک کریں۔
                  </div>
                </div>
              </div>
            ) : (
              /* Android / Chrome Instructions */
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <span>اینڈرائڈ و کروم (Android / Chrome) پر انسٹال کرنے کا طریقہ:</span>
                </p>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    کروم براؤزر کے اوپر کونے میں <strong>تین نقطوں (⋮)</strong> پر کلک کریں۔
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    مینیو میں سے <strong>"Install App"</strong> یا <strong>"Add to Home screen"</strong> منتخب کریں۔
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5">
              <button
                onClick={() => setShowInstructions(false)}
                className="w-full bg-slate-900 text-amber-400 font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-md"
              >
                {isUrdu ? "سمجھ گیا (بند کریں)" : "Got it (Close)"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
