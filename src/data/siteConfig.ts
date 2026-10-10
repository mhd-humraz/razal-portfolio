export interface SiteConfig {
  editor: {
    name: string;
    monogram: string;
    role: string;
    headline: string;
    statement: string;
    philosophyHeadline: string;
    philosophyBody: string;
    availabilityStatus: string;
    availabilityBadge: string;
    location: string;
    experienceYears: number;
    email: string;
    whatsapp: string;
    whatsappUrl: string;
    profileImage: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  socials: {
    name: string;
    url: string;
    handle: string;
  }[];
  showreel: {
    title: string;
    client: string;
    year: string;
    duration: string;
    aspectRatio: '16:9' | '2.39:1' | '9:16';
    videoUrl: string;
    posterUrl: string;
    description: string;
    fps: string;
    codec: string;
  };
  tools: {
    name: string;
    category: 'NLE' | 'Color' | 'VFX & Motion' | 'Audio' | 'Hardware';
    level: string;
  }[];
  services: {
    id: string;
    title: string;
    category: string;
    description: string;
    deliverables: string[];
    turnaround: string;
    highlight: string;
  }[];
  process: {
    step: string;
    phase: string;
    title: string;
    description: string;
    details: string[];
    timeline: string;
  }[];
  testimonials: {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatarUrl: string;
    projectTitle: string;
    metricsResult?: string;
  }[];
  clientLogos: {
    name: string;
    category: string;
  }[];
  settings: {
    showTestimonials: boolean;
    showClientLogos: boolean;
    showGrainOverlay: boolean;
  };
}

export const siteConfig: SiteConfig = {
  editor: {
    name: "MUHAMMED RAZAL",
    monogram: "MR",
    role: "Senior Video Editor & Colorist",
    headline: "I TURN RAW FOOTAGE INTO STORIES THAT STAY.",
    statement:
      "Crafting emotional rhythm, high-retention pacing, and studio-grade color grading for commercial films, documentary shorts, and visionary creator brands worldwide.",
    philosophyHeadline:
      "GOOD EDITING ISN'T JUST ABOUT CUTS. IT'S ABOUT WHAT PEOPLE FEEL.",
    philosophyBody:
      "Every frame is an emotional contract with the audience. I don't just assemble scenes together; I sculpt momentum, build tension through deliberate micro-pauses, and craft soundscapes that immerse the viewer before they even realize what hit them. Whether it's a 30-second automotive spot or a 40-minute documentary essay, the goal is always the same: undeniable retention and lasting resonance.",
    availabilityStatus: "AVAILABLE FOR SELECT PROJECTS",
    availabilityBadge: "BOOKINGS OPEN — Q2/Q3 2026",
    location: "Los Angeles, CA • Working Worldwide",
    experienceYears: 8,
    email: "elias.vance.edit@gmail.com",
    whatsapp: "+1 (555) 019-2834",
    whatsappUrl: "https://wa.me/15550192834",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  },
  metrics: [
    {
      value: "150M+",
      label: "Views Generated",
      description: "Across client YouTube releases, commercials, and viral short-form campaigns.",
    },
    {
      value: "8+ Yrs",
      label: "Post-Production Experience",
      description: "From indie documentary film festivals to broadcast commercial delivery.",
    },
    {
      value: "95+",
      label: "Delivered Master Projects",
      description: "Commercials, music videos, narrative shorts, and long-form creator series.",
    },
    {
      value: "24-48h",
      label: "Rush Turnaround Ready",
      description: "Rapid editorial pipeline for time-sensitive commercial campaigns and events.",
    },
  ],
  socials: [
    { name: "YouTube", url: "https://youtube.com", handle: "@eliasvance" },
    { name: "Vimeo", url: "https://vimeo.com", handle: "vimeo.com/eliasvance" },
    { name: "Instagram", url: "https://instagram.com", handle: "@eliasvance.edit" },
    { name: "X / Twitter", url: "https://x.com", handle: "@eliasvance" },
    { name: "Frame.io", url: "https://frame.io", handle: "elias-post" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "in/eliasvance" },
  ],
  showreel: {
    title: "2026 EDITORIAL & COLOR SHOWREEL",
    client: "Selected Works Reel",
    year: "2026",
    duration: "01:48",
    aspectRatio: "2.39:1",
    // Reliable high-speed cinematic MP4 sample stream
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
    description:
      "A fast-paced retrospective highlighting commercial storytelling, ACES color grading workflows, kinetic pacing, and custom foley sound design.",
    fps: "24.000 FPS",
    codec: "Apple ProRes 422 HQ • Rec.709",
  },
  tools: [
    { name: "DaVinci Resolve Studio 19", category: "Color", level: "Expert / Daily Driver" },
    { name: "Adobe Premiere Pro", category: "NLE", level: "Expert / 8+ Years" },
    { name: "Adobe After Effects", category: "VFX & Motion", level: "Advanced Motion Titles" },
    { name: "Final Cut Pro", category: "NLE", level: "Advanced" },
    { name: "Avid Media Composer", category: "NLE", level: "Narrative Assembly" },
    { name: "Dehancer Pro & FilmConvert", category: "Color", level: "35mm/16mm Emulation" },
    { name: "FabFilter Pro-Q3 & L2", category: "Audio", level: "Surgical EQ & Limiting" },
    { name: "iZotope RX 10 Advanced", category: "Audio", level: "Dialogue & Noise Cleanup" },
    { name: "Blackmagic Cloud & Frame.io", category: "Hardware", level: "Real-time Client Collaboration" },
    { name: "Calibrite ColorChecker & OLED 4K", category: "Hardware", level: "Hardware Color Calibrated" },
  ],
  services: [
    {
      id: "video-editing",
      title: "Commercial & Narrative Video Editing",
      category: "Post-Production",
      description:
        "Full-cycle offline and online editorial assembly. Crafting scene tempo, character beats, emotional arcs, and airtight retention curves that hold attention from first frame to last.",
      deliverables: ["Assembly & Rough Cut", "Fine Cut & Picture Lock", "Multi-format Master Exports (4K, HD)", "Organized Project Archive"],
      turnaround: "3 - 7 Days",
      highlight: "Offline & Online Assembly",
    },
    {
      id: "color-grading",
      title: "Cinematic Color Grading (DaVinci Resolve)",
      category: "Finishing & Look Dev",
      description:
        "Look development in ACES and DaVinci YRGB Color Managed spaces. Kodak 2383 film stock emulations, skin tone separation, HDR grading, and seamless multi-camera color matching.",
      deliverables: ["Color Palette Moodboard", "Shot-to-Shot Matching", "Film Grain & Halation Modeling", "Rec.709 & DCI-P3 Deliverables"],
      turnaround: "2 - 4 Days",
      highlight: "ACES Color Science",
    },
    {
      id: "youtube-creators",
      title: "High-Retention Creator & YouTube Editing",
      category: "Audience Growth",
      description:
        "Engineered for the algorithm without sacrificing artistic integrity. Hook construction within the first 5 seconds, pattern interrupts, kinetic subtitles, and pacing charts that maximize Average View Duration.",
      deliverables: ["High-Impact 0:05 Hook Design", "Dynamic Pattern Interrupts", "Sound FX Layering (50+ stems)", "YouTube Chapter Optimization"],
      turnaround: "2 - 5 Days",
      highlight: "65%+ Retention Optimization",
    },
    {
      id: "short-form",
      title: "9:16 Vertical Content & Reels",
      category: "Social Performance",
      description:
        "Bespoke editing for Instagram Reels, TikTok, and YouTube Shorts. Punchy visual typography, beat-matched jump cuts, custom sound effects, and scroll-stopping hooks.",
      deliverables: ["9:16 Native Vertical Framing", "Animated Kinetic Subtitles", "Viral Audio Syncing", "Multi-platform Batch Deliverables"],
      turnaround: "24 - 48 Hours",
      highlight: "Rapid Batch Delivery",
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics & Title Sequence Design",
      category: "Visual Identity",
      description:
        "Tasteful, minimalist kinetic typography, lower thirds, 3D tracked screen overlays, and brand stings that elevate production value without feeling like generic templates.",
      deliverables: ["Custom Kinetic Typography", "Lower Thirds & Chapter Cards", "2D/3D Screen Tracking", "After Effects Motion MOGRTs"],
      turnaround: "2 - 4 Days",
      highlight: "Bespoke Typography",
    },
    {
      id: "sound-design",
      title: "Sound Design & Audio Restoration",
      category: "Audio Immersion",
      description:
        "Sound is 60% of what makes a video feel cinematic. Multitrack foley design, whooshes, sub-bass risers, ambient world-building, and broadcast-compliant EBU R128 mastering.",
      deliverables: ["Dialogue Restoration (iZotope RX)", "Ambience & Foley Multitrack", "Custom Transition Whooshes & Risers", "-14 LUFS Broadcast Mastering"],
      turnaround: "1 - 3 Days",
      highlight: "Studio-Grade Foley",
    },
  ],
  process: [
    {
      step: "01",
      phase: "DISCOVER",
      title: "The Creative Brief & Ingestion",
      description:
        "We align on vision, audience expectations, reference moods, and technical constraints. Footage is safely ingested with checksum validation and organized into structured bins.",
      details: ["Footage Checksum Ingestion & Backup", "Director/Creator Brief Analysis", "Audio & Reference Moodboard Alignment"],
      timeline: "Day 1",
    },
    {
      step: "02",
      phase: "PLAN",
      title: "Assembly & Story Pacing",
      description:
        "Building the narrative skeleton. Selecting the strongest takes, structuring the rhythm, pacing the emotional beats, and locking in the primary story arc.",
      details: ["A-Roll Assembly & Beat Sequencing", "Pacing & Story Structure Review", "Client Assembly Review via Frame.io"],
      timeline: "Day 2 - 3",
    },
    {
      step: "03",
      phase: "EDIT",
      title: "Fine Cut, Color & Sound Polish",
      description:
        "The magic happens here: tightening cuts to the millisecond, layering rich foley sound design, applying bespoke DaVinci color grading, and crafting kinetic title cards.",
      details: ["Frame-Accurate Micro Timing", "DaVinci Resolve ACES Color Grading", "Multi-stem Sound Design & Audio Polish"],
      timeline: "Day 4 - 6",
    },
    {
      step: "04",
      phase: "DELIVER",
      title: "Mastering & Multi-Platform Export",
      description:
        "Incorporating your targeted feedback with rapid iteration. Final deliveries rendered in uncompressed ProRes 422 HQ, optimized H.264 web streams, and vertical adaptations.",
      details: ["Structured Revision Cycles (Frame.io)", "Multi-Platform Master Exports (4K, 16:9, 9:16)", "Clean Archived Project Delivery"],
      timeline: "Day 7",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      quote:
        "Elias transformed our brand campaign from ordinary footage into a cinematic piece that outperformed all previous quarters. His sense of pacing and sound design is on par with feature film editors.",
      author: "Marcus Thorne",
      role: "Creative Director",
      company: "Apex Media Group",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      projectTitle: "Automotive Brand Campaign (Porsche Spec)",
      metricsResult: "+340% Engagement Rate",
    },
    {
      id: "test-2",
      quote:
        "Our YouTube channel's average view duration jumped from 42% to 68% after Elias took over post-production. He understands internet pacing better than anyone I've ever collaborated with.",
      author: "Sarah Lindqvist",
      role: "Content Creator (1.4M Subs)",
      company: "Deep Focus Media",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      projectTitle: "Creator Video Essay Series",
      metricsResult: "1.2M Avg Views / Video",
    },
    {
      id: "test-3",
      quote:
        "Finding an editor who can execute both flawless narrative pacing and Hollywood-level color grading in DaVinci Resolve is extremely rare. Elias is in a league of his own.",
      author: "Julian Chen",
      role: "Indie Film Producer",
      company: "Kuro Cinema Lab",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      projectTitle: "Echoes of Kyoto (Documentary Short)",
      metricsResult: "Official Selection 2025",
    },
  ],
  clientLogos: [
    { name: "Apex Studios", category: "Commercial" },
    { name: "Kuro Cinema", category: "Film Production" },
    { name: "Vanguard Media", category: "Agency" },
    { name: "Red Shift Audio", category: "Sound & Music" },
    { name: "North Star Doc", category: "Documentary" },
    { name: "Creator Forge", category: "YouTube Studio" },
  ],
  settings: {
    showTestimonials: true,
    showClientLogos: true,
    showGrainOverlay: true,
  },
};
