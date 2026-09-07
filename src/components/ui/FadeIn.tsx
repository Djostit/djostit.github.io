import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  scale = 1,
  className = '',
  as = 'div',
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      if (!ref.current) {
        ticking = false;
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // 1. Если элемент входит в экран снизу при прокрутке ВНИЗ (или уже на экране при загрузке)
      if (rect.top < vh * 0.9 && rect.bottom > 0) {
        setIsVisible(true);
      }
      // 2. Если пользователь пролистал ВВЕРХ так, что компонент ушёл ПОЛНОСТЬЮ ПОД экран:
      // Сбрасываем видимость (взводим триггер заново)
      else if (rect.top >= vh) {
        setIsVisible(false);
      }
      // 3. Если элемент ушёл НАВЕРХ за пределы экрана (rect.bottom <= 0, пользователь ниже компонента):
      // Ничего не сбрасываем! isVisible остаётся true. При скролле снизу-вверх анимация НЕ переигрывается.

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkVisibility);
        ticking = true;
      }
    };

    // Проверка при монтировании
    checkVisibility();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const Component = useMemo(() => {
    if (typeof motion.create === 'function') {
      return motion.create(as);
    }
    return (motion as any)[as] || motion.div;
  }, [as]);

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, x, y, scale }}
      animate={
        isVisible
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x, y, scale }
      }
      transition={{
        duration: isVisible ? duration : 0,
        delay: isVisible ? delay : 0,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
