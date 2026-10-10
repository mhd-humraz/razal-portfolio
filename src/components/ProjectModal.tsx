import React, { useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Wand2,
  Volume2,
  ArrowUpRight,
  Film,
} from 'lucide-react';
import type { Project } from '../data/projects';
import { VideoPlayer } from './VideoPlayer';
import { ColorGradeCompare } from './ColorGradeCompare';

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      const currentIndex = allProjects.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(allProjects[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && currentIndex < allProjects.length - 1) {
        onSelectProject(allProjects[currentIndex + 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, allProjects, onClose, onSelectProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl bg-cinematic-card border border-cinematic-border rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Slate */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cinematic-border/80 bg-cinematic-surface/90 text-xs font-mono">
          <div className="flex items-center space-x-3 truncate">
            <span className="px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent font-semibold text-[11px] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-film-gray truncate hidden sm:inline">{project.client}</span>
            <span className="text-film-muted hidden sm:inline">•</span>
            <span className="text-film-muted hidden sm:inline">{project.year}</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Prev/Next buttons */}
            <button
              onClick={() => prevProject && onSelectProject(prevProject)}
              disabled={!prevProject}
              className={`p-1.5 rounded border border-cinematic-border text-film-gray hover:text-accent transition-colors ${
                !prevProject ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent'
              }`}
              title="Previous project (←)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => nextProject && onSelectProject(nextProject)}
              disabled={!nextProject}
              className={`p-1.5 rounded border border-cinematic-border text-film-gray hover:text-accent transition-colors ${
                !nextProject ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent'
              }`}
              title="Next project (→)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-cinematic-border/60 hover:bg-accent hover:text-cinematic-dark text-film-white transition-colors ml-2"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-8">
          
          {/* Main Video Player */}
          <section aria-label="Video Player">
            <VideoPlayer
              videoUrl={project.videoUrl}
              posterUrl={project.posterUrl}
              title={project.title}
              aspectRatio={project.aspectRatio}
              autoPlay={false}
            />
          </section>

          {/* Project Title & Overview Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="project-modal-title" className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-film-white">
                {project.title}
              </h2>
              <div className="flex items-center space-x-2 text-xs font-mono text-film-gray">
                <span className="px-2 py-0.5 rounded bg-cinematic-surface border border-cinematic-border">
                  {project.aspectRatio}
                </span>
                <span className="px-2 py-0.5 rounded bg-cinematic-surface border border-cinematic-border">
                  {project.fps}
                </span>
                <span className="px-2 py-0.5 rounded bg-cinematic-surface border border-cinematic-border text-accent">
                  {project.resolution}
                </span>
              </div>
            </div>

            <p className="text-film-gray font-sans text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Interactive Before/After Color Grading Comparison (if present) */}
          {project.beforeColorUrl && project.afterColorUrl && (
            <section className="pt-2">
              <ColorGradeCompare
                beforeUrl={project.beforeColorUrl}
                afterUrl={project.afterColorUrl}
                aspectRatio={project.aspectRatio}
              />
            </section>
          )}

          {/* Creative Approach Breakdown Grid */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-film-white flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>THE EDITORIAL & FINISHING APPROACH</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-cinematic-surface/60 border border-cinematic-border space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-accent">
                  <Film className="w-3.5 h-3.5" />
                  <span className="font-semibold">NARRATIVE & PACING</span>
                </div>
                <p className="text-xs text-film-gray leading-relaxed">
                  {project.creativeApproach.pacing}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cinematic-surface/60 border border-cinematic-border space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-accent">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="font-semibold">FOLEY & SOUND DESIGN</span>
                </div>
                <p className="text-xs text-film-gray leading-relaxed">
                  {project.creativeApproach.soundDesign}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cinematic-surface/60 border border-cinematic-border space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-accent">
                  <Wand2 className="w-3.5 h-3.5" />
                  <span className="font-semibold">COLOR GRADING & ACES</span>
                </div>
                <p className="text-xs text-film-gray leading-relaxed">
                  {project.creativeApproach.colorGrade}
                </p>
              </div>
            </div>
          </div>

          {/* Services & Software Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-cinematic-border/60">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-film-muted block mb-2.5">
                SERVICES EXECUTED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.servicesProvided.map((service, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-cinematic-surface border border-cinematic-border text-xs font-mono text-film-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-film-muted block mb-2.5">
                SOFTWARE & GEAR UTILIZED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.softwareUsed.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-accent-dim border border-accent/30 text-xs font-mono text-accent"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Conversion CTA Footer inside Modal */}
          <div className="pt-6 border-t border-cinematic-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cinematic-surface/30 p-5 rounded-xl border border-cinematic-border">
            <div>
              <h4 className="font-display font-bold text-base text-film-white">
                Interested in this editing style?
              </h4>
              <p className="text-xs text-film-gray">
                I can craft a tailored cut, color grade, or pacing overhaul for your next project.
              </p>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 rounded bg-accent text-cinematic-dark font-mono text-xs font-bold tracking-wider hover:bg-accent-hover transition-colors flex items-center space-x-2 shrink-0"
            >
              <span>INQUIRE ABOUT THIS STYLE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
