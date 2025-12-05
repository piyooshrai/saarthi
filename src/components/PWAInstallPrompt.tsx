import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showPrompt) return null;

  return (
    <div className="pwa-install-banner">
      <div className="flex-1">
        <p className="font-semibold">Install Saarthi</p>
        <p className="text-sm opacity-90">Add to home screen for the best experience</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleDismiss}
          className="px-4 py-2 text-sm opacity-80 hover:opacity-100"
        >
          Not now
        </button>
        <button
          onClick={handleInstall}
          className="px-4 py-2 bg-white text-saarthi-teal rounded-lg font-semibold text-sm"
        >
          Install
        </button>
      </div>
    </div>
  );
}
