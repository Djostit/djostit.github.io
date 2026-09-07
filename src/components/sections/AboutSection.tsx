import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedText from '../ui/AnimatedText';
import ContactButton from '../ui/ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

const ABOUT_TEXT =
  'C#/.NET-разработчик с 3+ годами коммерческого опыта. Фокусируюсь на надежных распределенных системах, производительном backend и архитектурной чистоте. Проектирую отказоустойчивые сервисы на .NET 8 и PostgreSQL, внедряю Clean Architecture, CQRS и современные подходы в DevOps и Linux. Создаю масштабируемые решения, которые выдерживают высокие нагрузки и приносят измеримую пользу бизнесу. Давайте строить сильные продукты вместе!';

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Непрерывный отслеживаемый скролл: реагирует в реальном времени при скролле вверх и вниз
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 1. Луна (верх-слева): параллакс смещения и вращения
  const moonScrollY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const moonScrollRotate = useTransform(scrollYProgress, [0, 1], [-16, 20]);

  // 2. 3D фигура / смайл (низ-слева): встречное движение
  const smileyScrollY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const smileyScrollRotate = useTransform(scrollYProgress, [0, 1], [18, -18]);

  // 3. Лего куб (верх-справа): покачивание и смещение
  const legoScrollY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const legoScrollRotate = useTransform(scrollYProgress, [0, 1], [16, -16]);

  // 4. 3D курсор (низ-справа): встречный параллакс
  const cursorScrollY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const cursorScrollRotate = useTransform(scrollYProgress, [0, 1], [-14, 18]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Угловой 3D-элемент 1: Луна (Слева вверху) */}
      <motion.div
        style={{ y: moonScrollY, rotate: moonScrollRotate }}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none w-[120px] sm:w-[160px] md:w-[210px] will-change-transform"
      >
        <FadeIn scale={0.7} y={0} duration={0.8} delay={0}>
          <motion.img
            animate={{
              y: [0, -18, 0],
              rotate: [-3, 5, -3],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Декоративный 3D элемент"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </motion.div>

      {/* Угловой 3D-элемент 2: 3D фигура / смайл (Слева внизу) */}
      <motion.div
        style={{ y: smileyScrollY, rotate: smileyScrollRotate }}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none w-[100px] sm:w-[140px] md:w-[180px] will-change-transform"
      >
        <FadeIn scale={0.7} y={0} duration={0.8} delay={0.1}>
          <motion.img
            animate={{
              y: [0, 16, 0],
              rotate: [4, -6, 4],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D фигура"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </motion.div>

      {/* Угловой 3D-элемент 3: Лего куб (Справа вверху) */}
      <motion.div
        style={{ y: legoScrollY, rotate: legoScrollRotate }}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none w-[120px] sm:w-[160px] md:w-[210px] will-change-transform"
      >
        <FadeIn scale={0.7} y={0} duration={0.8} delay={0.05}>
          <motion.img
            animate={{
              y: [0, -15, 0],
              rotate: [5, -4, 5],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D куб"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </motion.div>

      {/* Угловой 3D-элемент 4: 3D курсор (Справа внизу) */}
      <motion.div
        style={{ y: cursorScrollY, rotate: cursorScrollRotate }}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none w-[130px] sm:w-[170px] md:w-[220px] will-change-transform"
      >
        <FadeIn scale={0.7} y={0} duration={0.8} delay={0.15}>
          <motion.img
            animate={{
              y: [0, 20, 0],
              rotate: [-5, 8, -5],
            }}
            transition={{
              duration: 5.0,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D курсор"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </motion.div>

      {/* Центральный контент */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[850px] w-full font-montserrat">
        {/* Заголовок с повторяемой анимацией появления */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Обо мне
          </h2>
        </FadeIn>

        {/* Текст с посимвольным скроллом */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px]"
          />
        </div>

        {/* Кнопка действия */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton label="Связаться" onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
