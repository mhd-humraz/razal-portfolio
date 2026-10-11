import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Portfolio } from './sections/Portfolio';
import { Services } from './sections/Services';
// import { Process } from './sections/Process';
import { About } from './sections/About';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ShowreelModal } from './components/ShowreelModal';
import { Toast } from './components/Toast';
import { projects, type Project } from './data/projects';
import { siteConfig } from './data/siteConfig';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  return (
    <div className={`min-h-screen bg-cinematic-bg text-film-white flex flex-col relative selection:bg-accent selection:text-cinematic-dark ${
      siteConfig.settings.showGrainOverlay ? 'film-grain' : ''
    }`}>
      {/* Cinematic Top Ambient Glow */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 z-50 pointer-events-none" />

      {/* Main Navigation */}
      <Navbar onOpenShowreel={() => setIsShowreelOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenShowreel={() => setIsShowreelOpen(true)} />

        {/* 2. Selected Work / Portfolio Gallery */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Services & Capabilities */}
        <Services />

        {/* 4. Creative Process */}
        {/* <Process /> */}

        {/* 5. About & Editorial Philosophy */}
        <About />

        {/* 6. Testimonials & Collaborators */}
        <Testimonials />

        {/* 7. Contact & Inquiries */}
        <Contact onNotifyToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* Footer */}
      <Footer onOpenShowreel={() => setIsShowreelOpen(true)} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Showreel Cinema Player Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      {/* Toast Notification Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
