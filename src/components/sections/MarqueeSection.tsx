import React, { useRef, useEffect } from 'react';

interface TechItem {
  name: string;
  category: string;
  detail: string;
  badgeColor?: string;
}

const TECH_ROW_1: TechItem[] = [
  {
    name: '.NET 8 & C#',
    category: 'Основной стек',
    detail: 'Современная платформа: асинхронность, высокая производительность и типобезопасность',
    badgeColor: '#512BD4',
  },
  {
    name: 'PostgreSQL',
    category: 'База данных',
    detail: 'Реляционная БД: оптимизация запросов, индексы и перенос бизнес-логики в сервис',
    badgeColor: '#336791',
  },
  {
    name: 'YARP API Gateway',
    category: 'Архитектура',
    detail: 'Единая точка входа, динамическое преобразование HTTP в gRPC и runtime-маршрутизация',
    badgeColor: '#0078D4',
  },
  {
    name: 'Redis',
    category: 'Кэш и авторизация',
    detail: 'Распределенный кэш, мгновенные сессии и централизованная валидация прав доступа',
    badgeColor: '#DC382D',
  },
  {
    name: 'Clean Architecture',
    category: 'Паттерны проектирования',
    detail: 'SOLID, четкая изоляция слоев, легкая тестируемость и долгосрочная поддержка',
    badgeColor: '#10B981',
  },
  {
    name: 'ASP.NET Core',
    category: 'Web API & Сервисы',
    detail: 'Отказоустойчивые REST API, гибкий Dependency Injection и настраиваемый middleware pipeline',
    badgeColor: '#6366F1',
  },
  {
    name: 'Docker & Linux',
    category: 'Инфраструктура',
    detail: 'Контейнеризация сервисов, Nginx + systemd окружение и уверенный production на Linux',
    badgeColor: '#2496ED',
  },
  {
    name: 'Apache Kafka',
    category: 'Брокер сообщений',
    detail: 'Событийно-ориентированная архитектура (EDA), надежные очереди и асинхронный обмен данными',
    badgeColor: '#F59E0B',
  },
  {
    name: 'EF Core',
    category: 'ORM & Доступ к данным',
    detail: 'Code-First миграции, оптимизация LINQ-запросов и эффективное управление контекстом БД',
    badgeColor: '#8B5CF6',
  },
  {
    name: 'GitLab CI/CD',
    category: 'DevOps',
    detail: 'Автоматизация пайплайнов, регулярный прогон тестов и бесшовная доставка до серверов',
    badgeColor: '#FC6D26',
  },
  {
    name: 'Микросервис OstCard',
    category: 'Архитектура',
    detail: 'Выделение автономного высоконагруженного сервиса из монолита и устранение узких мест',
    badgeColor: '#EC4899',
  },
];

const TECH_ROW_2: TechItem[] = [
  {
    name: 'gRPC & Protocol Buffers',
    category: 'Сетевой протокол',
    detail: 'Высокоскоростной бинарный межсервисный транспорт с минимальными сетевыми задержками',
    badgeColor: '#00A4AC',
  },
  {
    name: 'OIDC & OAuth2',
    category: 'Безопасность',
    detail: 'Централизованная аутентификация, валидация JWT-токенов и управление правами пользователей',
    badgeColor: '#EF4444',
  },
  {
    name: 'Банковские интеграции',
    category: 'Финтех API',
    detail: 'Надежная REST API интеграция с финансовыми шлюзами: ПСБ и Ак Барс',
    badgeColor: '#3B82F6',
  },
  {
    name: 'MediatR & CQRS',
    category: 'Архитектурный шаблон',
    detail: 'Разделение потоков команд и запросов, слабая связность модулей и расширяемость',
    badgeColor: '#8B5CF6',
  },
  {
    name: 'Hangfire',
    category: 'Фоновые задачи',
    detail: 'Отказоустойчивая обработка фоновых процессов, планировщик и мониторинг очередей',
    badgeColor: '#F43F5E',
  },
  {
    name: 'Unit & Integration Testing',
    category: 'Качество кода',
    detail: 'Покрытие тестами критической бизнес-логики, культура code review и командные стандарты',
    badgeColor: '#10B981',
  },
  {
    name: 'FluentValidation',
    category: 'Валидация',
    detail: 'Строгая декларативная валидация входящих DTO-моделей и контрактов данных',
    badgeColor: '#06B6D4',
  },
  {
    name: 'REST & SOAP/XML',
    category: 'Интеграционные протоколы',
    detail: 'Модернизация интеграционных шлюзов и надежная поддержка внешних сервисов',
    badgeColor: '#A855F7',
  },
  {
    name: 'Архитектурный рефакторинг',
    category: 'Инженерия',
    detail: 'Упрощение кодовой базы, снижение техдолга и ускорение подключения новых сервисов',
    badgeColor: '#14B8A6',
  },
  {
    name: 'MS SQL Server',
    category: 'Базы данных',
    detail: 'Опыт администрирования, профилирования и миграции крупных корпоративных баз данных',
    badgeColor: '#CC292B',
  },
];

// Tripled arrays for smooth infinite horizontal coverage
const ROW1_ITEMS = [...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1];
const ROW2_ITEMS = [...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateTransform = () => {
      if (!sectionRef.current) {
        ticking = false;
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-4">
        {/* Ряд 1 - Движется ВПРАВО при скролле */}
        <div
          ref={row1Ref}
          className="flex flex-nowrap gap-4"
          style={{ willChange: 'transform' }}
        >
          {ROW1_ITEMS.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-none w-[340px] sm:w-[380px] md:w-[420px] h-[150px] sm:h-[170px] rounded-2xl p-5 bg-[#14171C] border border-[#232832] flex flex-col justify-between transition-all duration-300 hover:border-[#D7E2EA]/40 hover:bg-[#1A1F26]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                  {item.category}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.badgeColor || '#3B82F6' }}
                />
              </div>

              <div>
                <h4 className="font-black text-xl sm:text-2xl text-[#D7E2EA] tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 line-clamp-2 font-light leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ряд 2 - Движется ВЛЕВО при скролле */}
        <div
          ref={row2Ref}
          className="flex flex-nowrap gap-4"
          style={{ willChange: 'transform' }}
        >
          {ROW2_ITEMS.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-none w-[340px] sm:w-[380px] md:w-[420px] h-[150px] sm:h-[170px] rounded-2xl p-5 bg-[#14171C] border border-[#232832] flex flex-col justify-between transition-all duration-300 hover:border-[#D7E2EA]/40 hover:bg-[#1A1F26]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                  {item.category}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.badgeColor || '#10B981' }}
                />
              </div>

              <div>
                <h4 className="font-black text-xl sm:text-2xl text-[#D7E2EA] tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 line-clamp-2 font-light leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
