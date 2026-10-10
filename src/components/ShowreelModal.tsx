import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { VideoPlayer } from './VideoPlayer';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="showreel-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-cinematic-card border border-cinematic-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-cinematic-border bg-cinematic-surface/90 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-rec-blink" />
            <span className="text-film-white font-bold tracking-wider">
              {siteConfig.showreel.title}
            </span>
            <span className="text-film-muted hidden sm:inline">|</span>
            <span className="text-accent hidden sm:inline">{siteConfig.showreel.fps}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-cinematic-border/60 hover:bg-accent hover:text-cinematic-dark text-film-white transition-colors"
            aria-label="Close showreel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="p-4 sm:p-6 bg-cinematic-dark">
          <VideoPlayer
            videoUrl={siteConfig.showreel.videoUrl}
            posterUrl={siteConfig.showreel.posterUrl}
            title={siteConfig.showreel.title}
            aspectRatio={siteConfig.showreel.aspectRatio}
            autoPlay={true}
          />
        </div>

        {/* Bottom Slate Info */}
        <div className="p-5 sm:p-6 bg-cinematic-card border-t border-cinematic-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-xl">
            <h3 id="showreel-modal-title" className="font-display font-bold text-base text-film-white mb-1">
              {siteConfig.showreel.title}
            </h3>
            <p className="text-xs text-film-gray leading-relaxed font-sans">
              {siteConfig.showreel.description}
            </p>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-accent text-cinematic-dark font-mono text-xs font-bold tracking-wider hover:bg-accent-hover transition-colors flex items-center space-x-2 shrink-0 shadow-lg shadow-accent/20"
          >
            <span>BOOK ELIAS VANCE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
