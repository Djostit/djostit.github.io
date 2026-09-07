import React, { useEffect, useState } from 'react';

interface TransparentAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const TransparentAvatar: React.FC<TransparentAvatarProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // The original user avatar has a pure white (#FFFFFF) background.
      // Remove the white background so it is 100% transparent PNG.
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Background is pure white / near-white
        if (r > 235 && g > 235 && b > 235) {
          data[i + 3] = 0; // 100% transparent
        } else if (r > 205 && g > 205 && b > 205) {
          // Smooth edge feathering to eliminate white halo
          const minVal = Math.min(r, g, b);
          const ratio = (235 - minVal) / 30;
          data[i + 3] = Math.max(0, Math.min(255, Math.round(data[i + 3] * ratio)));
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL('image/png'));
    };
  }, [src]);

  return (
    <img
      src={processedSrc || src}
      alt={alt}
      className={className}
      loading="eager"
    />
  );
};

export default TransparentAvatar;
