import type { ReactNode } from 'react';

interface ScreenLayoutProps {
  children: ReactNode;
  mascotImage?: string;
}

export function ScreenLayout({ children, mascotImage }: ScreenLayoutProps) {
  return (
    <div className="gradient-bg min-h-screen flex flex-col items-center justify-between px-6 py-8 overflow-auto relative">
      {/* Mascot image positioned in center */}
      {mascotImage && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={mascotImage}
            alt=""
            className="w-72 h-72 md:w-96 md:h-96 object-contain mascot"
          />
        </div>
      )}
      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}
