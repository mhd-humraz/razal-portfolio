import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ArrowUpRight, Film } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  onOpenShowreel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShowreel }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cinematic-bg/90 backdrop-blur-md border-b border-cinematic-border/80 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Editorial Title */}
          <a
            href="#"
            className="group flex items-center space-x-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <div className="w-9 h-9 rounded bg-cinematic-card border border-cinematic-border flex items-center justify-center text-accent font-display font-bold text-sm tracking-wider group-hover:border-accent transition-colors duration-200">
              {siteConfig.editor.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-widest text-film-white group-hover:text-accent transition-colors duration-200">
                {siteConfig.editor.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-film-muted hidden sm:block">
                {siteConfig.editor.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-film-gray hover:text-accent transition-colors duration-150 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs & Availability */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Showreel Quick Trigger Button */}
            <button
              onClick={onOpenShowreel}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cinematic-card hover:bg-cinematic-surface border border-cinematic-border text-xs font-mono text-film-white hover:text-accent transition-colors group cursor-pointer"
              title="Play 2026 Showreel"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-ping opacity-75" />
              <Play className="w-3 h-3 text-accent fill-accent" />
              <span className="tracking-wider">REEL '26</span>
            </button>

            {/* Direct Inquiry CTA */}
            <a
              href="#contact"
              className="flex items-center space-x-1.5 px-4 py-2 rounded bg-accent text-cinematic-dark hover:bg-accent-hover font-mono text-xs font-bold tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-accent/10"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenShowreel}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded bg-cinematic-card border border-cinematic-border text-[11px] font-mono text-accent"
              aria-label="Play showreel"
            >
              <Play className="w-3 h-3 fill-accent" />
              <span>REEL</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded bg-cinematic-card border border-cinematic-border text-film-white hover:text-accent focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cinematic-card/95 backdrop-blur-xl border-b border-cinematic-border px-6 pt-5 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center space-x-2 px-1 pb-3 border-b border-cinematic-border/60">
            <span className="w-2 h-2 rounded-full bg-accent animate-rec-blink" />
            <span className="text-[11px] font-mono text-film-gray tracking-wider">
              {siteConfig.editor.availabilityStatus}
            </span>
          </div>
          <div className="flex flex-col space-y-3 font-mono text-sm tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-film-white hover:text-accent py-2 border-b border-cinematic-border/30 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-film-muted" />
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full py-2.5 rounded bg-cinematic-surface border border-cinematic-border text-film-white font-mono text-xs tracking-wider flex items-center justify-center space-x-2"
            >
              <Film className="w-4 h-4 text-accent" />
              <span>WATCH 2026 SHOWREEL</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded bg-accent text-cinematic-dark font-mono text-xs font-bold tracking-wider text-center block"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
