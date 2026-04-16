import { Film, Palette, Sparkles, Share2, Mail, Phone, Instagram, Twitter, Youtube } from "lucide-react";
import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  tall?: boolean;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface ContactLink {
  icon: ReactNode;
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Muhammed Razal",
  title: "Crafting Stories Through Motion",
  subtitle: "Professional Video Editor | Cinematic | Commercial | Social Media",
  heroVideoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
  showreelUrl: "/media/Cooper.mp4",
  logoText: "MUHAMMED RAZAL",
};

export const navItems: NavItem[] = [
  { label: "Showreel", href: "#showreel" },
  { label: "Work", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  
  { label: "Contact", href: "#contact" },
];

export const categories = ["All", "Commercial", "Reels", "YouTube", "Cinematic"];

export const projects: Project[] = [
  {
    id: "1",
    title: "Neon Horizons",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80",
    videoUrl: "/media/Cooper.mp4",
    description: "Cinematic journey through neon-lit urban landscapes.",
    tall: true,
  },
  {
    id: "2",
    title: "Velocity",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "High-energy commercial for premium automotive brand.",
  },
  {
    id: "3",
    title: "Golden Fade",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1518676590747-1e3dcf5c8e27?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Viral social media reel with cinematic transitions.",
  },
  {
    id: "4",
    title: "Frame by Frame",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Dynamic YouTube content with slick motion graphics.",
    tall: true,
  },
  {
    id: "5",
    title: "Dark Matter",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Moody cinematic short film with dramatic grading.",
  },
  {
    id: "6",
    title: "Pulse",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Product launch video with kinetic typography.",
  },
  {
    id: "7",
    title: "Chromatic",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Color-driven reel with seamless transitions.",
    tall: true,
  },
  {
    id: "8",
    title: "Decode",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-at-night-4444/1080p.mp4",
    description: "Tech breakdown video with smooth visual storytelling.",
  },
];

export const skills: Skill[] = [
  { name: "CapCut", level: 95, icon: "🎬" },
  { name: "After Effects", level: 92, icon: "✨" },
  { name: "DaVinci Resolve", level: 88, icon: "🎨" },
];

export const services: Service[] = [
  {
    icon: <Film className="w-7 h-7" />,
    title: "Video Editing",
    description: "Precision cutting and storytelling for any format — from short-form reels to feature-length projects.",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Color Grading",
    description: "Cinematic color science that sets mood, enhances emotion, and delivers a premium filmic look.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Motion Graphics",
    description: "Eye-catching animations, dynamic titles, and visual effects that keep viewers engaged.",
  },
  {
    icon: <Share2 className="w-7 h-7" />,
    title: "Social Media Content",
    description: "Platform-optimized edits for Instagram, TikTok, and YouTube that maximize reach and engagement.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Creative Director, Lumina Studios",
    quote: "Transformed our raw footage into a cinematic masterpiece. The attention to detail exceeded all expectations.",
  },
  {
    name: "Marcus Johnson",
    role: "YouTuber, 2M+ Subscribers",
    quote: "The editing style is unique, fresh, and keeps my audience coming back. My channel grew 3x since we started working together.",
  },
  {
    name: "Elena Vasquez",
    role: "Brand Manager, NovaTech",
    quote: "Our product launch video generated 10x more engagement than any previous campaign. Pure visual magic.",
  },
  {
    name: "David Park",
    role: "Independent Filmmaker",
    quote: "The color grading alone took my short film to the next level. Every frame feels intentional and cinematic.",
  },
];

export const socialLinks: ContactLink[] = [
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://twitter.com" },
  { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "https://youtube.com" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", href: "razalrazalrazal098@gmail.com" },
];
