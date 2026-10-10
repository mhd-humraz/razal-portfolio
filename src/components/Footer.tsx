import React from 'react';
import { ArrowUp, Film } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onOpenShowreel: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShowreel }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cinematic-dark border-t border-cinematic-border/80 text-film-gray py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Monogram & Back-to-Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-cinematic-border/60">
          
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded bg-cinematic-card border border-cinematic-border flex items-center justify-center text-accent font-display font-bold text-base">
              {siteConfig.editor.monogram}
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-film-white tracking-widest block">
                {siteConfig.editor.name}
              </span>
              <span className="text-xs font-mono text-film-muted">
                {siteConfig.editor.role}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenShowreel}
              className="px-3.5 py-2 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-film-white hover:text-accent transition-colors flex items-center space-x-2"
            >
              <Film className="w-3.5 h-3.5 text-accent" />
              <span>WATCH REEL '26</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded bg-cinematic-card border border-cinematic-border text-film-white hover:text-accent hover:border-accent transition-colors"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-cinematic-border/60 text-xs font-mono">
          
          <div>
            <span className="text-film-white font-bold uppercase tracking-wider block mb-3">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-film-muted">
              <li><a href="#work" className="hover:text-accent transition-colors">Selected Work</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services & Capabilities</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">Editorial Process</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About & Philosophy</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Start a Project</a></li>
            </ul>
          </div>

          <div>
            <span className="text-film-white font-bold uppercase tracking-wider block mb-3">
              CATEGORIES
            </span>
            <ul className="space-y-2 text-film-muted">
              <li><a href="#work" className="hover:text-accent transition-colors">Cinematic Narrative</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">Commercial Spots</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">YouTube High-Retention</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">9:16 Vertical Viral</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">ACES Color Grading</a></li>
            </ul>
          </div>

          <div>
            <span className="text-film-white font-bold uppercase tracking-wider block mb-3">
              SOCIALS & CHANNELS
            </span>
            <ul className="space-y-2 text-film-muted">
              {siteConfig.socials.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {s.name} ({s.handle})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-film-white font-bold uppercase tracking-wider block mb-3">
              DIRECT DISPATCH
            </span>
            <p className="text-film-muted mb-3 leading-relaxed">
              Accepting client bookings for commercial campaigns, documentaries, and recurring video series.
            </p>
            <a
              href={`mailto:${siteConfig.editor.email}`}
              className="text-accent hover:underline font-mono"
            >
              {siteConfig.editor.email}
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Tech Spec Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-film-muted">
          <div>
            © {new Date().getFullYear()} {siteConfig.editor.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-3 text-film-gray">
            <span>24.00 FPS TIMELINE</span>
            <span>•</span>
            <span>ACEScg COLOR MANAGED</span>
            <span>•</span>
            <span className="text-accent font-semibold">4K PRORES 422 HQ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
