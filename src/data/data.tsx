import { Film, Palette, Sparkles, Play, Mail, Phone, Instagram } from "lucide-react";
import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface ContactLink {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

export const siteConfig = {
  name: "Alex Rivera",
  title: "Professional Video Editor",
  tagline: "Crafting Stories Through Motion",
  heroVideoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
  logoText: "AR",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const aboutData = {
  bio: "With over 8 years of experience in video editing and post-production, I bring stories to life through seamless cuts, stunning color grades, and captivating motion graphics. From cinematic short films to viral social media content, I've collaborated with brands, creators, and filmmakers worldwide to deliver visually compelling narratives that resonate with audiences.",
  skills: [
    { name: "Premiere Pro", level: 95 },
    { name: "After Effects", level: 90 },
    { name: "DaVinci Resolve", level: 88 },
    { name: "Cinema 4D", level: 75 },
    { name: "Photoshop", level: 85 },
  ] as Skill[],
};

export const categories = ["All", "Reels", "Ads", "Cinematic", "YouTube"];

export const projects: Project[] = [
  {
    id: "1",
    title: "Urban Nights",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "A cinematic journey through the neon-lit streets of Tokyo at night.",
  },
  {
    id: "2",
    title: "Brand Fusion",
    category: "Ads",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "High-energy commercial spot for a premium lifestyle brand.",
  },
  {
    id: "3",
    title: "Golden Hour",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1518676590747-1e3dcf5c8e27?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Viral Instagram reel capturing the magic of golden hour.",
  },
  {
    id: "4",
    title: "Tech Review Pro",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Dynamic YouTube tech review with slick transitions and graphics.",
  },
  {
    id: "5",
    title: "Velocity",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "High-speed automotive cinematic film with dramatic color grading.",
  },
  {
    id: "6",
    title: "Streetwear Drop",
    category: "Ads",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Hype video for an exclusive streetwear collection launch.",
  },
];

export const services: Service[] = [
  {
    icon: <Film className="w-8 h-8" />,
    title: "Video Editing",
    description: "Professional cutting, pacing, and storytelling for any format — from short-form reels to feature-length projects.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Color Grading",
    description: "Cinematic color science that sets the mood, enhances emotion, and gives your footage a premium, filmic look.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Motion Graphics",
    description: "Eye-catching animations, titles, and visual effects that elevate your content and keep viewers engaged.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Creative Director, Lumina Studios",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote: "Alex transformed our raw footage into a cinematic masterpiece. The attention to detail and creative vision exceeded all expectations.",
  },
  {
    name: "Marcus Johnson",
    role: "YouTuber, 2M+ Subscribers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    quote: "Working with Alex elevated my channel to the next level. The editing style is unique, fresh, and keeps my audience coming back for more.",
  },
  {
    name: "Elena Vasquez",
    role: "Brand Manager, NovaTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    quote: "Our product launch video generated 10x more engagement than any previous campaign. Alex understands how to tell a brand story visually.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+1 (555) 123-4567",
    href: "https://wa.me/15551234567",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "alex@videoeditor.pro",
    href: "mailto:alex@videoeditor.pro",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    value: "@alexrivera.edits",
    href: "https://instagram.com/alexrivera.edits",
  },
];
