import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import LiveProjectButton from '../ui/LiveProjectButton';
import { Project } from '../../types/project';
import { PROJECTS } from '../../data/projects';


interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
}) => {
  // Расчет масштабирования стопки: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const rangeStart = index === 0 ? 0 : index * 0.4;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale], {
    clamp: true,
  });

  return (
    <div
      className="h-[85vh] min-h-[660px] sm:min-h-[720px] flex items-start justify-center sticky top-16 sm:top-20 md:top-24 w-full"
      style={{ zIndex: 10 + index * 10 }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 28}px)`,
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl origin-top"
      >
        {/* Верхняя строка: Номер, Категория, Название, Кнопка Подробнее */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Номер */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.id}
            </span>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm tracking-widest text-[#D7E2EA]/70 uppercase font-light">
                ({project.category})
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA] tracking-wide">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center">
            <LiveProjectButton label="Подробнее" />
          </div>
        </div>

        {/* Нижняя строка: 2-колоночная сетка изображений */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* Левая колонка (40% ширины): 2 изображения */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16181C] border border-[#262A33]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.title} Preview 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16181C] border border-[#262A33]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.title} Preview 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Правая колонка (60% ширины): 1 вертикальное изображение */}
          <div className="w-full lg:w-[60%] flex">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16181C] border border-[#262A33] min-h-[260px] lg:min-h-full"
              style={{
                height: '100%',
                maxHeight: '594px',
              }}
            >
              <img
                src={project.col2Img}
                alt={`${project.title} Главный кейс`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-28 md:pt-32 pb-32 px-5 sm:px-8 md:px-10 relative z-10 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Заголовок: "Проекты" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Проекты
          </h2>
        </FadeIn>

        {/* Общий скролл-контейнер для наложения карточек */}
        <div ref={containerRef} className="relative pb-24 sm:pb-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
