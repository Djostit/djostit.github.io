import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import MarqueeSection from './components/sections/MarqueeSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Send, Copy, Check } from 'lucide-react';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('djostit@mail.ru');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="main-wrapper bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-montserrat">
      {/* 1. ГЛАВНЫЙ ЭКРАН (HERO) */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. БЕГУЩАЯ ЛЕНТА СТЕКА (MARQUEE) */}
      <MarqueeSection />

      {/* 3. ОБО МНЕ (ABOUT) */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. КОМПЕТЕНЦИИ (SERVICES) */}
      <ServicesSection />

      {/* 5. ПРОЕКТЫ (PROJECTS) */}
      <ProjectsSection />

      {/* Футер без тире */}
      <footer
        id="contact"
        className="w-full py-12 px-6 border-t border-[#23272F] bg-[#0C0C0C] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-widest max-w-6xl mx-auto select-none"
      >
        <p>© {new Date().getFullYear()} НИКИТА ЗВЕРЕВ | C#/.NET-РАЗРАБОТЧИК. УФА.</p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <button
            onClick={() => setIsContactOpen(true)}
            className="hover:text-[#D7E2EA] transition-colors cursor-pointer"
          >
            СВЯЗАТЬСЯ
          </button>
          <a
            href="https://t.me/Djostit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            TELEGRAM
          </a>
          <a
            href="mailto:djostit@mail.ru"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            EMAIL
          </a>
          <a
            href="tel:+79373162746"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            +7 (937) 316-27-46
          </a>
        </div>
      </footer>

      {/* Модальное окно контактов */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#121418] border-2 border-[#D7E2EA]/40 rounded-[32px] p-6 sm:p-8 shadow-2xl"
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Закрыть модальное окно"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                    Связь со мной
                  </span>
                  <h3 className="hero-heading text-3xl font-black uppercase tracking-tight mt-1">
                    Никита Зверев
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider mt-0.5">
                    C#/.NET-разработчик • Уфа (Готов к переезду / удаленно)
                  </p>
                </div>

                <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base leading-relaxed">
                  Открыт к интересным предложениям по backend и распределенной разработке на .NET. Всегда на связи в Telegram или по почте: буду рад обсудить задачи и проекты!
                </p>

                {/* Блок Email с копированием */}
                <div className="bg-[#1A1E24] border border-[#2B303B] rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 truncate">
                    <Mail size={18} className="text-[#BBCCD7] shrink-0" />
                    <span className="text-sm font-medium text-[#D7E2EA] truncate">
                      djostit@mail.ru
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#BBCCD7] hover:text-white px-2.5 py-1.5 rounded-lg bg-[#262B35] transition-colors cursor-pointer shrink-0 ml-2"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Копия</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Блок Телефона */}
                <a
                  href="tel:+79373162746"
                  className="bg-[#1A1E24] border border-[#2B303B] hover:border-[#D7E2EA]/40 rounded-2xl p-4 flex items-center justify-between transition-colors text-[#D7E2EA]"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#BBCCD7] shrink-0" />
                    <span className="text-sm font-medium">+7 (937) 316-27-46</span>
                  </div>
                  <span className="text-xs uppercase text-[#BBCCD7]">Позвонить</span>
                </a>

                {/* Основная кнопка Telegram */}
                <div className="flex flex-col gap-2">
                  <a
                    href="https://t.me/Djostit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full flex items-center justify-center gap-2 font-medium uppercase tracking-widest text-white text-sm cursor-pointer transition-transform hover:scale-[1.02]"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                      outline: '2px solid #FFFFFF',
                      outlineOffset: '-3px',
                    }}
                  >
                    <Send size={16} />
                    <span>Написать в Telegram (@Djostit)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
