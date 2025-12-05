import type { ReactNode } from 'react';

interface ScreenLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
}

export function ScreenLayout({ children, backgroundImage }: ScreenLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-6 py-8 overflow-auto bg-cover bg-center bg-no-repeat"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
      } : undefined}
    >
      {children}
    </div>
  );
}
