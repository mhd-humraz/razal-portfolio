export type ProjectCategory =
  | 'All Work'
  | 'Cinematic Films'
  | 'Commercial Advertisements'
  | 'YouTube & Creator Content'
  | 'Travel Films'
  | 'Reels & Short-Form Content'
  | 'Motion Graphics'
  | 'Music Videos';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  client: string;
  year: string;
  duration: string;
  aspectRatio: '16:9' | '2.39:1' | '9:16';
  resolution: string;
  fps: string;
  videoUrl: string;
  posterUrl: string;
  beforeColorUrl?: string;
  afterColorUrl?: string;
  servicesProvided: string[];
  softwareUsed: string[];
  creativeApproach: {
    pacing: string;
    soundDesign: string;
    colorGrade: string;
  };
  featured: boolean;
}

export const projectCategories: ProjectCategory[] = [
  'All Work',
  'Cinematic Films',
  'Commercial Advertisements',
  'YouTube & Creator Content',
  'Travel Films',
  'Reels & Short-Form Content',
  'Motion Graphics',
  'Music Videos',
];

export const projects: Project[] = [
  {
    id: "aetheria-origins",
    title: "AETHERIA: THE FINAL FRONTIER",
    category: "Cinematic Films",
    shortDescription: "Anamorphic sci-fi teaser cut with deliberate micro-tension and deep atmospheric soundscapes.",
    fullDescription:
      "A dark, moody sci-fi narrative trailer cut in an ultra-wide 2.39:1 cinema aspect ratio. The brief called for a building sense of existential dread without revealing key plot twists. We paced the cut around heartbeat foley, slowly accelerating from meditative wide shots into a rapid-fire staccato montage locked to custom sub-bass braams.",
    client: "Nebula Pictures • Independent Film",
    year: "2025",
    duration: "02:14",
    aspectRatio: "2.39:1",
    resolution: "4K DCI (4096 × 1716)",
    fps: "24.00 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    beforeColorUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=40&sat=-100",
    afterColorUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    servicesProvided: ["Trailer Offline Assembly", "Sound Design & Multitrack Foley", "ACES Color Grading", "VFX Clean-up"],
    softwareUsed: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "FabFilter Pro-Q3"],
    creativeApproach: {
      pacing: "Measured build-up using the rule of three, accelerating cut frequency from 4.2s per cut down to 0.4s during the climax.",
      soundDesign: "Sub-bass tectonic rumblings, binaural breathing audio, and customized whoosh-to-hit transition transitions.",
      colorGrade: "ACEScg wide gamut, Kodak 2383 D60 film print curve with deep cool cyan shadows and warm skin separation.",
    },
    featured: true,
  },
  {
    id: "apex-gt3-velocity",
    title: "APEX // PORSCHE GT3 SPEC COMMERCIAL",
    category: "Commercial Advertisements",
    shortDescription: "Kinetic automotive spec commercial with frame-accurate rev-matched rhythm and speed ramping.",
    fullDescription:
      "A high-octane 60-second automotive film showcasing track dynamics and engineering precision. We utilized dynamic speed ramping, match cuts between engine telemetry and chassis movement, and synchronized the editorial rhythm directly with the mechanical rev limits of the flat-six engine.",
    client: "Apex Velocity • Spec Commercial",
    year: "2025",
    duration: "01:05",
    aspectRatio: "16:9",
    resolution: "4K UHD (3840 × 2160)",
    fps: "24.00 FPS (shot at 120 FPS)",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80",
    beforeColorUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=40&sat=-80",
    afterColorUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    servicesProvided: ["Kinetic Commercial Editing", "Engine Sound Design Mastering", "HDR10 & Rec.709 Color Grade", "Speed Ramp Retiming"],
    softwareUsed: ["DaVinci Resolve Studio", "Adobe After Effects", "iZotope RX 10"],
    creativeApproach: {
      pacing: "Aggressive syncopated beats timed to gear shifts, alternating between hyper-slow motion cornering and split-second blur wipes.",
      soundDesign: "14 individual layers of mechanical engine induction, tire squeal micro-layers, and spatial exhaust passes.",
      colorGrade: "Deep obsidian carbon fiber blacks with electric high-contrast highlights and asphalt desaturation.",
    },
    featured: true,
  },
  {
    id: "science-of-deep-focus",
    title: "THE SCIENCE OF DEEP FOCUS // ESSAY",
    category: "YouTube & Creator Content",
    shortDescription: "High-retention documentary video essay engineered for 70%+ Average View Duration.",
    fullDescription:
      "A 14-minute intellectual video essay designed for modern creator distribution. Built from the ground up to eliminate viewer drop-off: each section features a visual hook every 8 seconds, custom minimalist typography, seamless chapter transition cards, and sound-engineered dialogue that keeps the viewer in an unbroken flow state.",
    client: "Deep Focus Studio (1.4M Subscribers)",
    year: "2025",
    duration: "03:45",
    aspectRatio: "16:9",
    resolution: "4K UHD (3840 × 2160)",
    fps: "29.97 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    beforeColorUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=40&sat=-70",
    afterColorUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    servicesProvided: ["Retention-Engineered Assembly", "Kinetic Typography & Lower Thirds", "Audio Noise Gate & Master", "Visual Hook Design"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "FabFilter Pro-L2"],
    creativeApproach: {
      pacing: "Retention curve analysis: introductory 15s hook, dynamic b-roll inserts every 3-5 seconds to reset cognitive fatigue.",
      soundDesign: "Subtle analog synth drones, page flips, tactile click foley, and pristine dialogue clarity.",
      colorGrade: "Clean, inviting cinematic palette with warm ambient lighting and film halation on edge contrast.",
    },
    featured: true,
  },
  {
    id: "nordic-solitude-travel",
    title: "NORDIC SOLITUDE // ICELAND & ARCTIC",
    category: "Travel Films",
    shortDescription: "Poetic 4K drone and handheld travel documentary capturing raw volcanic silence.",
    fullDescription:
      "Shot on RED Komodo across Southern Iceland and the Arctic fjords. The film embraces slow cinema, giving the immense geography space to breathe. We focused heavily on organic environmental sound design — glacier groans, wind howling across black sand beaches — paired with a restrained film grain pass.",
    client: "Vagabond Expeditions",
    year: "2024",
    duration: "02:40",
    aspectRatio: "2.39:1",
    resolution: "4K DCI (4096 × 1716)",
    fps: "24.00 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    posterUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    beforeColorUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=40&sat=-90",
    afterColorUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    servicesProvided: ["Editorial Direction", "Drone Speed Stabilization", "35mm Film Grain Emulation", "Spatial Sound Design"],
    softwareUsed: ["DaVinci Resolve Studio", "Dehancer Pro 7", "Premiere Pro"],
    creativeApproach: {
      pacing: "Contemplative, rhythmic editing following natural wind swells and waves breaking on black basalt shores.",
      soundDesign: "Multi-layered field recordings, glacial ice cracking, heavy ambient reverb spaces.",
      colorGrade: "Cold slate-blue shadows balanced with earthy volcanic ochre and natural moss greens.",
    },
    featured: true,
  },
  {
    id: "pulse-tokyo-cyber",
    title: "TOKYO AFTER MIDNIGHT // OFFICIAL MUSIC VIDEO",
    category: "Music Videos",
    shortDescription: "High-octane neon glitch music video with match-frame cuts and rhythmic chromatic shifts.",
    fullDescription:
      "Commissioned by an international electronic music artist. The project combines 16mm archival textures, neon city hyperlapses, and synchronized beat drops. Every kick drum triggers an intentional sub-frame cut, producing an intense, sensory club experience.",
    client: "Sublevel Recordings • Tokyo",
    year: "2025",
    duration: "03:12",
    aspectRatio: "16:9",
    resolution: "4K UHD (3840 × 2160)",
    fps: "24.00 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Music Video Cut", "Beat Synchronization", "RGB Split & Glitch Styling", "Neon Color Grading"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    creativeApproach: {
      pacing: "Downbeat cuts, offbeat transitions, and micro-framing loops that emulate 90s MTV music video energy.",
      soundDesign: "Stem isolation, impact sub-drops, and audio risers blended with master track.",
      colorGrade: "Vibrant neon magenta and electric cyan split-toning with heavy analog film halation.",
    },
    featured: false,
  },
  {
    id: "velocity-protocol-reels",
    title: "THE 30-DAY ATHLETE // 9:16 VIRAL SERIES",
    category: "Reels & Short-Form Content",
    shortDescription: "High-energy vertical series designed to stop the scroll in under 1.2 seconds.",
    fullDescription:
      "A 6-part batch of vertical 9:16 videos engineered for Instagram Reels and TikTok. Features rapid-fire B-roll, punchy animated subtitles with bold keyword color accents, snappy transitions, and viral audio cues that drove over 12M combined views.",
    client: "Kinetic Performance Lab",
    year: "2025",
    duration: "00:48",
    aspectRatio: "9:16",
    resolution: "1080 × 1920 (Vertical HD)",
    fps: "30.00 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    posterUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    servicesProvided: ["9:16 Vertical Assembly", "Kinetic Subtitle Animation", "Hook Optimization", "Sound FX Impact Layering"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "CapCut Pro Desktop"],
    creativeApproach: {
      pacing: "First frame hook, 0.8s average shot length, text emphasis on key emotional trigger words.",
      soundDesign: "Snappy vinyl scratches, low-end boom hits, high-frequency whooshes.",
      colorGrade: "Punchy, athletic contrast grade with vibrant warm highlights and crisp skin tones.",
    },
    featured: false,
  },
  {
    id: "luminary-identity-motion",
    title: "LUMINARY ARCHITECTURE // BRAND FILM",
    category: "Motion Graphics",
    shortDescription: "Minimalist architectural brand film blending 3D camera tracking with kinetic title design.",
    fullDescription:
      "A sophisticated brand showcase for a high-end Scandinavian architectural practice. We blended cinematic drone pans over minimalist structures with delicate Swiss-inspired typography tracked in 3D camera space.",
    client: "Luminary Architects • Copenhagen",
    year: "2024",
    duration: "01:32",
    aspectRatio: "16:9",
    resolution: "4K UHD (3840 × 2160)",
    fps: "24.00 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Architectural Editorial", "3D Camera Motion Tracking", "Swiss Typography Design", "Audio Cleanup"],
    softwareUsed: ["Adobe After Effects", "Cinema 4D", "Premiere Pro"],
    creativeApproach: {
      pacing: "Calm, deliberate pacing honoring structural balance, golden ratio proportions, and natural shadows.",
      soundDesign: "Ambient room tone, subtle modern classical cello, soft mechanical foley.",
      colorGrade: "Warm natural wood tones, crisp architectural whites, neutral architectural gray.",
    },
    featured: false,
  },
  {
    id: "echoes-of-kyoto-craft",
    title: "THE MASTER'S HAND // KYOTO DOCUMENTARY",
    category: "Cinematic Films",
    shortDescription: "Sensory documentary exploring the quiet art of traditional Japanese temple carpentry.",
    fullDescription:
      "A tribute to artisanal dedication. No loud music, no frantic cuts — just the rhythmic sound of hand planes shearing cedar shavings, the deep silence of an ancient workshop, and rich, organic color grading honoring natural wood and shadow.",
    client: "Kuro Cultural Archive",
    year: "2024",
    duration: "04:15",
    aspectRatio: "2.39:1",
    resolution: "4K DCI (4096 × 1716)",
    fps: "24.00 FPS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    posterUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
    beforeColorUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=40&sat=-80",
    afterColorUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    servicesProvided: ["Documentary Storytelling", "Organic Sound Foley", "Film Print Emulation", "Dialogue Cleanup"],
    softwareUsed: ["DaVinci Resolve Studio", "Premiere Pro", "iZotope RX 10"],
    creativeApproach: {
      pacing: "Patient cuts that allow the viewer to witness the complete tactile motion of traditional craftsmanship.",
      soundDesign: "Ultra-close mic foley: wood shavings falling, chisels striking grain, tea pouring.",
      colorGrade: "Soft film highlights, natural amber cedar tones, deep charcoal paper shadow roll-off.",
    },
    featured: true,
  },
];
