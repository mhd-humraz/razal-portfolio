import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-cinematic-card border border-accent/40 shadow-2xl text-xs font-mono text-film-white shadow-black">
        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="text-film-muted hover:text-film-white transition-colors ml-2"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
