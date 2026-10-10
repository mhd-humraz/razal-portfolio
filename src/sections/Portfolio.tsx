import React, { useState } from 'react';
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { LayoutGrid, ListFilter, Film } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Work');
  const [isEditorialView, setIsEditorialView] = useState(false);

  const filteredProjects =
    activeCategory === 'All Work'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 border-b border-cinematic-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>SELECTED ARCHIVE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-film-white tracking-tight">
              PORTFOLIO & CUTS<span className="text-accent">.</span>
            </h2>
            <p className="text-film-gray font-sans text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              A curated collection of commercial spots, documentary films, high-retention video essays, and vertical edits.
            </p>
          </div>

          {/* View Toggles & Project Counter */}
          <div className="flex items-center space-x-4 self-start md:self-end">
            <span className="text-xs font-mono text-film-muted hidden sm:inline">
              SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
            </span>
            <div className="flex items-center p-1 rounded-lg bg-cinematic-card border border-cinematic-border">
              <button
                onClick={() => setIsEditorialView(false)}
                className={`p-1.5 rounded text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  !isEditorialView
                    ? 'bg-cinematic-surface text-accent'
                    : 'text-film-muted hover:text-film-white'
                }`}
                title="Grid Layout"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">GRID</span>
              </button>
              <button
                onClick={() => setIsEditorialView(true)}
                className={`p-1.5 rounded text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  isEditorialView
                    ? 'bg-cinematic-surface text-accent'
                    : 'text-film-muted hover:text-film-white'
                }`}
                title="Editorial Wide Layout"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">EDITORIAL</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div className="relative mb-10 pb-2">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-accent text-cinematic-dark font-bold shadow-md shadow-accent/20'
                      : 'bg-cinematic-card hover:bg-cinematic-surface border border-cinematic-border text-film-gray hover:text-film-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid or Editorial Layout */}
        <div
          className={
            isEditorialView
              ? 'space-y-8'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
          }
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              isEditorial={isEditorialView}
            />
          ))}
        </div>

        {/* Empty State fallback */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center rounded-xl border border-dashed border-cinematic-border p-8">
            <p className="font-mono text-sm text-film-gray">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveCategory('All Work')}
              className="mt-4 px-4 py-2 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
