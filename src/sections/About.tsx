import React from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Sparkles,
  Terminal,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-cinematic-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>EDITORIAL PHILOSOPHY & BACKGROUND</span>
        </div>

        {/* Philosophy Main Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-film-white leading-tight tracking-tight">
            {siteConfig.editor.philosophyHeadline}
          </h2>
        </div>

        {/* 2-Column Editorial Grid: Portrait & Philosophy Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-cinematic-border bg-cinematic-card shadow-2xl">
              
              <div className="slate-corner-tl" />
              <div className="slate-corner-br" />

              <img
                src={siteConfig.editor.profileImage}
                alt={`${siteConfig.editor.name} - ${siteConfig.editor.role}`}
                className="w-full aspect-[4/5] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-cinematic-dark/90 via-cinematic-dark/20 to-transparent" />

              {/* Bottom Slate Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-cinematic-border text-xs font-mono">
                <div className="flex items-center justify-between text-film-white font-bold mb-1">
                  <span>{siteConfig.editor.name}</span>
                  <span className="text-accent">{siteConfig.editor.location}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-film-muted">
                  <span>{siteConfig.editor.role}</span>
                  <span className="text-film-gray">Calibrated EIZO & OLED Suite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CRAFT BEHIND THE MONITOR</span>
            </h3>

            <p className="text-film-white font-sans text-lg sm:text-xl font-normal leading-relaxed">
              {siteConfig.editor.philosophyBody}
            </p>

            <p className="text-film-gray font-sans text-sm sm:text-base leading-relaxed">
              Based out of Los Angeles and collaborating globally via Blackmagic Cloud and Frame.io, I partner with directors, advertising agencies, and top-tier YouTube creators to transform unorganized rushes into high-impact visual stories. Every cut is engineered with purpose — finding the precise frame that accelerates heartbeat, clarifies narrative, or commands retention.
            </p>

            {/* Specialties Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-cinematic-card border border-cinematic-border space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-mono text-film-white font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span>Micro-Timing & Pacing</span>
                </div>
                <p className="text-xs text-film-muted">
                  Sub-frame micro adjustments that make cuts feel invisible and instinctive.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cinematic-card border border-cinematic-border space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-mono text-film-white font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span>Film Emulation & ACES</span>
                </div>
                <p className="text-xs text-film-muted">
                  Authentic 35mm grain, halation, and Kodak 2383 color curves in DaVinci Resolve.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cinematic-card border border-cinematic-border space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-mono text-film-white font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span>Sound Design Layering</span>
                </div>
                <p className="text-xs text-film-muted">
                  Multitrack foley, atmospheric risers, and broadcast-ready audio mastering.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cinematic-card border border-cinematic-border space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-mono text-film-white font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span>Algorithm & Retention Logic</span>
                </div>
                <p className="text-xs text-film-muted">
                  Data-backed hook retention strategies for YouTube, Reels, and social ads.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Software & Tools Suite Grid */}
        <div className="rounded-2xl bg-cinematic-card border border-cinematic-border p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-cinematic-border/60">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-film-white">
                HARDWARE & EDITORIAL SUITE
              </h3>
              <p className="text-xs font-mono text-film-gray">
                Verified industry software and hardware calibrated for broadcast delivery
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-accent">
              <Cpu className="w-4 h-4" />
              <span>Apple M-Series & 4K Reference Monitors</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {siteConfig.tools.map((tool, index) => (
              <div
                key={index}
                className="p-3.5 rounded-lg bg-cinematic-surface border border-cinematic-border/80 hover:border-accent/60 transition-colors flex flex-col justify-between"
              >
                <span className="font-mono text-xs font-semibold text-film-white truncate">
                  {tool.name}
                </span>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-cinematic-border/40 text-[10px] font-mono">
                  <span className="text-accent">{tool.category}</span>
                  <span className="text-film-muted truncate max-w-[80px]">{tool.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
