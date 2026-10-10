import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Quote, Star, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  if (!siteConfig.settings.showTestimonials) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 border-b border-cinematic-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent mb-3">
              <Quote className="w-3.5 h-3.5" />
              <span>DIRECTOR & CREATOR FEEDBACK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-film-white tracking-tight">
              REPUTATION & TRUST<span className="text-accent">.</span>
            </h2>
            <p className="text-film-gray font-sans text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              What collaborators, commercial producers, and high-growth YouTubers say about working together.
            </p>
          </div>

          {/* Sample Content Disclosure Notice (User request requirement) */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-cinematic-card border border-cinematic-border text-[11px] font-mono text-film-muted self-start md:self-end">
            <Info className="w-3.5 h-3.5 text-accent" />
            <span>Sample Showcase — Configurable in siteConfig.ts</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {siteConfig.testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-7 rounded-xl bg-cinematic-card border border-cinematic-border hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Rating & Metrics Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>

                  {test.metricsResult && (
                    <span className="px-2 py-0.5 rounded bg-accent-dim border border-accent/30 text-[10px] font-mono text-accent font-semibold">
                      {test.metricsResult}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-film-white font-sans italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info & Avatar */}
              <div className="pt-4 border-t border-cinematic-border/60 flex items-center space-x-3.5">
                <img
                  src={test.avatarUrl}
                  alt={test.author}
                  className="w-10 h-10 rounded-full object-cover border border-cinematic-border"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-film-white">
                    {test.author}
                  </h4>
                  <p className="text-xs text-film-gray font-mono">
                    {test.role} • {test.company}
                  </p>
                  <span className="text-[10px] text-film-muted font-mono block mt-0.5">
                    {test.projectTitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Collaborators Strip */}
        {siteConfig.settings.showClientLogos && (
          <div className="rounded-xl bg-cinematic-card/60 border border-cinematic-border p-6 text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-film-muted block mb-4">
              COLLABORATED ACROSS STUDIOS & CHANNELS
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-film-gray">
              {siteConfig.clientLogos.map((client, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded bg-cinematic-surface border border-cinematic-border/60 flex items-center space-x-2"
                >
                  <span className="text-film-white font-bold">{client.name}</span>
                  <span className="text-accent text-[10px]">[{client.category}]</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
