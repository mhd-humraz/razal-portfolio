import React, { useState, useEffect } from 'react';
import { Play, ArrowDown, ChevronRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const [timecode, setTimecode] = useState('00:01:48:12');

  // Subtle real-time film timecode ticker
  useEffect(() => {
    let frame = 12;
    let sec = 48;
    const interval = setInterval(() => {
      frame = (frame + 1) % 24;
      if (frame === 0) {
        sec = (sec + 1) % 60;
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`00:01:${pad(sec)}:${pad(frame)}`);
    }, 41); // ~24 fps ticker
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-cinematic-border/60">
      
      {/* Background ambient lighting subtle gradients (restrained, no tacky glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Availability & Slate Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pt-4">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-cinematic-card border border-cinematic-border text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-accent animate-rec-blink" />
            <span className="text-film-white font-medium tracking-wider">
              {siteConfig.editor.availabilityStatus}
            </span>
            <span className="text-film-muted hidden sm:inline">•</span>
            <span className="text-accent text-[11px] hidden sm:inline tracking-wider">
              {siteConfig.editor.availabilityBadge}
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-3 font-mono text-xs text-film-muted">
            <span className="px-2 py-0.5 rounded bg-cinematic-surface border border-cinematic-border text-[11px] text-film-gray">
              {siteConfig.showreel.fps}
            </span>
            <span className="text-accent/90 font-mono tracking-widest">
              {timecode}
            </span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="max-w-5xl">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight text-film-white leading-[1.04] mb-6">
            I TURN RAW FOOTAGE INTO STORIES <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-film-white via-film-white to-film-gray">
              THAT STAY
            </span>
            <span className="text-accent">.</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-film-gray font-sans font-normal leading-relaxed mb-10">
            {siteConfig.editor.statement}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a
              href="#work"
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded bg-accent text-cinematic-dark font-mono text-xs sm:text-sm font-bold tracking-widest hover:bg-accent-hover transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-accent/15"
            >
              <span>EXPLORE MY WORK</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded bg-cinematic-card hover:bg-cinematic-surface border border-cinematic-border text-film-white font-mono text-xs sm:text-sm font-semibold tracking-widest transition-all duration-200 hover:border-film-muted"
            >
              <span>LET'S WORK TOGETHER</span>
            </a>

            <div className="hidden md:flex items-center pl-4 text-xs font-mono text-film-muted space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Available for Commercials, YouTube & Features</span>
            </div>
          </div>
        </div>

        {/* Cinematic Showreel Billboard Card */}
        <div className="relative group rounded-xl overflow-hidden border border-cinematic-border bg-cinematic-card shadow-2xl transition-all duration-300 hover:border-film-muted/50">
          
          {/* Subtle film corner slate markers */}
          <div className="slate-corner-tl" />
          <div className="slate-corner-br" />

          {/* Interactive Showreel Preview Area */}
          <div
            onClick={onOpenShowreel}
            className="relative aspect-cinematic sm:aspect-[21/9] w-full overflow-hidden cursor-pointer bg-cinematic-dark"
          >
            {/* Poster image */}
            <img
              src={siteConfig.showreel.posterUrl}
              alt="Elias Vance 2026 Showreel Preview"
              className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="eager"
            />

            {/* Subtle cinematic gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-bg via-cinematic-bg/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-cinematic-bg/60 via-transparent to-cinematic-bg/60" />

            {/* Custom Interactive Play Button Centerpiece */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="relative mb-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-cinematic-dark flex items-center justify-center shadow-xl shadow-accent/25 group-hover:scale-110 group-hover:bg-accent-hover transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-cinematic-dark translate-x-0.5" />
                </div>
                {/* Subtle pulse ring on hover */}
                <div className="absolute -inset-2 rounded-full border border-accent/40 group-hover:animate-ping opacity-60" />
              </div>

              <div className="text-center">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-film-white group-hover:text-accent transition-colors">
                  WATCH 2026 SHOWREEL
                </span>
                <p className="font-mono text-[10px] sm:text-xs text-film-gray tracking-wider mt-0.5">
                  [{siteConfig.showreel.duration} MIN • 4K PRORES • 24 FPS]
                </p>
              </div>
            </div>

            {/* Bottom Bar Metadata Overlay */}
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-center justify-between font-mono text-[11px] text-film-gray pointer-events-none">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-rec-blink" />
                <span className="text-red-400 font-bold tracking-wider">REC</span>
                <span className="text-film-muted hidden sm:inline">|</span>
                <span className="hidden sm:inline text-film-white font-medium">{siteConfig.showreel.title}</span>
              </div>

              <div className="flex items-center space-x-3 text-film-muted">
                <span className="hidden md:inline">{siteConfig.showreel.codec}</span>
                <span className="text-accent font-semibold">{timecode}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Metrics Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-cinematic-border/60">
          {siteConfig.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-baseline space-x-1.5">
                <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-film-white">
                  {metric.value}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <span className="font-mono text-xs sm:text-sm text-film-gray mt-1 font-medium">
                {metric.label}
              </span>
              <p className="text-[11px] text-film-muted hidden sm:block mt-0.5 line-clamp-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Film Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center pt-8">
        <a
          href="#work"
          className="group flex flex-col items-center space-y-2 text-film-muted hover:text-accent transition-colors"
          aria-label="Scroll to selected projects"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">SCROLL FOR WORK</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent" />
        </a>
      </div>

    </section>
  );
};
