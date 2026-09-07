import React from 'react';
import FadeIn from '../ui/FadeIn';
import ContactButton from '../ui/ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Навигационная панель */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8 font-montserrat gap-2 sm:gap-4">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] whitespace-nowrap transition-opacity duration-200 hover:opacity-70 cursor-pointer bg-transparent border-none"
          >
            Обо мне
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] whitespace-nowrap transition-opacity duration-200 hover:opacity-70 cursor-pointer bg-transparent border-none"
          >
            Навыки
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] whitespace-nowrap transition-opacity duration-200 hover:opacity-70 cursor-pointer bg-transparent border-none"
          >
            Проекты
          </button>
          <button
            onClick={onContactClick || (() => scrollToSection('contact'))}
            className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] whitespace-nowrap transition-opacity duration-200 hover:opacity-70 cursor-pointer bg-transparent border-none"
          >
            Контакты
          </button>
        </nav>
      </FadeIn>

      {/* 2. Центрированный главный заголовок без аватара */}
      <div className="w-full flex-1 flex flex-col justify-center items-center select-none px-4">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight text-center w-full leading-[0.85] text-[13vw] sm:text-[14vw] md:text-[14.5vw] lg:text-[15vw]">
            <span className="block">Привет,</span>
            <span className="block">я Никита</span>
          </h1>
        </FadeIn>
      </div>

      {/* 3. Нижняя строка */}
      <div className="w-full flex justify-between items-end px-4 sm:px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 font-montserrat gap-3">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1 max-w-[220px] sm:max-w-[300px] md:max-w-[420px]">
            <span
              className="text-white font-semibold uppercase tracking-wider"
              style={{ fontSize: 'clamp(0.85rem, 1.35vw, 1.45rem)' }}
            >
              C#/.NET-разработчик
            </span>
            <p
              className="text-[#D7E2EA]/80 font-normal uppercase tracking-wide leading-snug"
              style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}
            >
              Создаю надежную архитектуру, микросервисы и производительный backend
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Связаться" onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
