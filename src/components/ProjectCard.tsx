import React from 'react';
import { Play, Clock, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isEditorial?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, isEditorial = false }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className={`group cursor-pointer rounded-xl bg-cinematic-card border border-cinematic-border hover:border-film-muted/60 transition-all duration-300 flex flex-col overflow-hidden relative ${
        isEditorial ? 'lg:grid lg:grid-cols-12 lg:gap-8 items-center' : ''
      }`}
    >
      {/* Slate border markers */}
      <div className="slate-corner-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="slate-corner-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Thumbnail Container */}
      <div
        className={`relative overflow-hidden bg-cinematic-dark ${
          isEditorial
            ? 'lg:col-span-7 aspect-cinematic w-full'
            : project.aspectRatio === '9:16'
            ? 'aspect-[10/14] sm:aspect-cinematic'
            : project.aspectRatio === '2.39:1'
            ? 'aspect-[2.39/1] min-h-[220px]'
            : 'aspect-cinematic'
        }`}
      >
        <img
          src={project.posterUrl}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-out"
          loading="lazy"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-dark/90 via-cinematic-dark/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded bg-cinematic-dark/80 backdrop-blur-md border border-cinematic-border text-[10px] sm:text-xs font-mono text-accent uppercase tracking-wider font-semibold">
            {project.category}
          </span>

          <div className="flex items-center space-x-1.5">
            <span className="px-2 py-0.5 rounded bg-cinematic-dark/80 backdrop-blur-md border border-cinematic-border text-[10px] font-mono text-film-gray">
              {project.aspectRatio}
            </span>
            <span className="px-2 py-0.5 rounded bg-cinematic-dark/80 backdrop-blur-md border border-cinematic-border text-[10px] font-mono text-film-white flex items-center space-x-1">
              <Clock className="w-2.5 h-2.5 text-accent" />
              <span>{project.duration}</span>
            </span>
          </div>
        </div>

        {/* Center Hover Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-accent text-cinematic-dark flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-xl shadow-accent/30">
            <Play className="w-6 h-6 fill-cinematic-dark translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Client / Spec Strip inside Thumbnail */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-film-gray pointer-events-none">
          <span className="truncate max-w-[70%]">{project.client}</span>
          <span className="text-film-muted">{project.year}</span>
        </div>
      </div>

      {/* Content Meta Container */}
      <div className={`p-5 sm:p-6 flex flex-col justify-between flex-grow ${isEditorial ? 'lg:col-span-5' : ''}`}>
        <div>
          {/* Header & Title */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display font-bold text-lg sm:text-xl text-film-white group-hover:text-accent transition-colors duration-200 leading-snug">
              {project.title}
            </h3>
            <div className="p-1.5 rounded bg-cinematic-surface border border-cinematic-border text-film-muted group-hover:text-accent group-hover:border-accent transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-film-gray font-sans line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Services Rendered Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.servicesProvided.slice(0, 3).map((service, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-cinematic-surface/90 border border-cinematic-border text-[10px] font-mono text-film-muted"
              >
                {service}
              </span>
            ))}
            {project.servicesProvided.length > 3 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-film-muted">
                +{project.servicesProvided.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Technical specs footer */}
        <div className="pt-3 border-t border-cinematic-border/60 flex items-center justify-between text-[11px] font-mono text-film-muted">
          <span className="text-accent/90">{project.resolution}</span>
          <span className="hover:underline text-film-white group-hover:text-accent font-medium">
            VIEW BREAKDOWN →
          </span>
        </div>
      </div>
    </article>
  );
};
