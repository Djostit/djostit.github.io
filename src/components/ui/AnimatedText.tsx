import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charCounter = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const wordElement = (
          <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const charIndex = charCounter++;
              const step = 1 / totalChars;
              const start = charIndex * step;
              const end = Math.min(1, start + step * 2);

              return (
                <Char
                  key={`char-${charIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for space in character count
        if (wordIdx < words.length - 1) {
          charCounter++;
        }

        return (
          <React.Fragment key={`frag-${wordIdx}`}>
            {wordElement}
            {wordIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
