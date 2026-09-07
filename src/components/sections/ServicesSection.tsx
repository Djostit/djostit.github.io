import React from 'react';
import FadeIn from '../ui/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Backend-разработка (.NET 8 / C#)',
    description:
      'Проектирование и разработка производительного backend на C#, .NET 8 и ASP.NET Core. Создание отказоустойчивых REST и gRPC API, обработка высоких нагрузок и сквозной цикл разработки от анализа требований до стабильного релиза в продакшн.',
  },
  {
    id: '02',
    name: 'Архитектура и Микросервисы',
    description:
      'Внедрение Clean Architecture, SOLID, CQRS и паттерна MediatR. Эволюционное выделение автономных микросервисов из монолита, устранение узких мест в производительности и проектирование слабосвязанных масштабируемых систем.',
  },
  {
    id: '03',
    name: 'Базы данных и Кэширование',
    description:
      'Проектирование реляционных схем и оптимизация запросов в PostgreSQL и MS SQL Server с EF Core. Построение распределенного кэширования и SSO-авторизации на Redis с мгновенной валидацией прав и сессий пользователей.',
  },
  {
    id: '04',
    name: 'Интеграции и API Gateway',
    description:
      'Построение централизованного API Gateway на YARP с динамической трансляцией HTTP в быстрый бинарный gRPC. Бесшовная интеграция с банковскими шлюзами (ПСБ, Ак Барс), брокерами сообщений Kafka и OIDC протоколами.',
  },
  {
    id: '05',
    name: 'DevOps и Инфраструктура',
    description:
      'Автоматизация процессов доставки через GitLab CI/CD, контейнеризация в Docker и надежный деплой на Linux (Nginx + systemd). Покрытие ключевой бизнес-логики юнит- и интеграционными тестами для уверенных релизов.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <FadeIn delay={0} y={30}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            Компетенции
          </h2>
        </FadeIn>

        {/* Список 5 компетенций */}
        <div className="border-t border-[rgba(12,12,12,0.15)] flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.1}
              y={25}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-10 md:gap-16">
                {/* Номер слева */}
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.id}
                </span>

                {/* Название + описание справа */}
                <div className="flex flex-col justify-center flex-1 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
