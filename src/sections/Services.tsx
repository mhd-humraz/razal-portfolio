import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, Check, Clock, Sliders } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 border-b border-cinematic-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>OFFERINGS & CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-film-white tracking-tight">
              SERVICES<span className="text-accent">.</span>
            </h2>
            <p className="text-film-gray font-sans text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              Specialized post-production capabilities tailored for commercial agencies, indie filmmakers, and high-growth digital creators.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-xs font-mono text-accent hover:underline self-start md:self-end"
          >
            <span>CUSTOM PACKAGES & RETAINERS AVAILABLE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-xl bg-cinematic-card border border-cinematic-border hover:border-accent/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="slate-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Header Row: Index & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-accent font-bold">
                    0{index + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cinematic-surface border border-cinematic-border text-[10px] font-mono text-film-muted uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-film-white group-hover:text-accent transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-film-gray font-sans leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-cinematic-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-film-muted block">
                    DELIVERABLES:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs font-sans text-film-white">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Turnaround & CTA */}
              <div className="pt-4 border-t border-cinematic-border/60 flex items-center justify-between font-mono text-xs">
                <span className="flex items-center space-x-1.5 text-film-muted text-[11px]">
                  <Clock className="w-3 h-3 text-accent" />
                  <span>Est. {service.turnaround}</span>
                </span>

                <a
                  href="#contact"
                  className="text-film-white group-hover:text-accent font-semibold flex items-center space-x-1 hover:underline"
                >
                  <span>INQUIRE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
