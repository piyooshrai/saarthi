import type { ReactNode } from 'react';

interface ScreenLayoutProps {
  children: ReactNode;
}

export function ScreenLayout({ children }: ScreenLayoutProps) {
  return (
    <div className="gradient-bg min-h-screen flex flex-col items-center justify-between px-6 py-8 overflow-auto">
      {children}
    </div>
  );
}
