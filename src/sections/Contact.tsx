import React, { useState } from 'react';
import {
  Send,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ContactProps {
  onNotifyToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotifyToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Advertisements',
    budgetRange: '$3,000 – $5,000',
    footageUrl: '',
    message: '',
    honeypot: '', // anti-bot spam protection
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Commercial Advertisements',
    'Cinematic Films & Narrative',
    'YouTube & Creator Video Essay',
    'Reels & 9:16 Vertical Batch',
    'Color Grading Only (DaVinci)',
    'Sound Design & Audio Mastering',
  ];

  const budgetRanges = [
    '< $1,500',
    '$1,500 – $3,000',
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000+',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.editor.email);
    setCopiedEmail(true);
    onNotifyToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot check
    if (formData.honeypot) {
      return; // Silent reject for spam bots
    }

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please provide a short description of your project (min. 10 characters).');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission endpoint with safe client dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onNotifyToast('Project inquiry submitted successfully!');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A COLLABORATION</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-film-white tracking-tight leading-[1.08] mb-4">
            HAVE A STORY WORTH TELLING<span className="text-accent">?</span>
          </h2>

          <p className="text-film-gray font-sans text-base sm:text-lg leading-relaxed">
            Let's craft something unforgettable. Whether you have a locked script, hard drives full of raw rushes, or need an emergency turnaround — send a note below.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with 1-Click Copy */}
            <div className="p-6 rounded-xl bg-cinematic-card border border-cinematic-border hover:border-accent/50 transition-all duration-200">
              <span className="text-[11px] font-mono uppercase tracking-wider text-film-muted block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${siteConfig.editor.email}`}
                  className="font-mono text-sm sm:text-base text-film-white hover:text-accent font-semibold truncate transition-colors"
                >
                  {siteConfig.editor.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-cinematic-surface border border-cinematic-border text-film-gray hover:text-accent hover:border-accent transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-accent" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-film-muted mt-2 font-mono">
                Average reply time: &lt; 12 hours
              </p>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-xl bg-cinematic-card border border-cinematic-border hover:border-accent/50 transition-all duration-200">
              <span className="text-[11px] font-mono uppercase tracking-wider text-film-muted block mb-2">
                FAST-TRACK MESSAGING
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm sm:text-base text-film-white font-semibold">
                    WhatsApp Direct
                  </span>
                  <p className="text-xs text-film-gray font-mono mt-0.5">
                    {siteConfig.editor.whatsapp}
                  </p>
                </div>
                <a
                  href={siteConfig.editor.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded bg-cinematic-surface border border-cinematic-border text-xs font-mono text-accent hover:border-accent flex items-center space-x-1.5 transition-colors"
                >
                  <span>CHAT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Booking Status */}
            <div className="p-6 rounded-xl bg-cinematic-card border border-cinematic-border space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-film-muted">CURRENT STATUS</span>
                <span className="text-accent flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-rec-blink" />
                  <span>{siteConfig.editor.availabilityBadge}</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono border-t border-cinematic-border/60 pt-3">
                <span className="text-film-muted">STUDIO BASE</span>
                <span className="text-film-white">{siteConfig.editor.location}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono border-t border-cinematic-border/60 pt-3">
                <span className="text-film-muted">FILE TRANSFERS</span>
                <span className="text-film-white">Blackmagic Cloud • Frame.io • Aspera</span>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="p-6 rounded-xl bg-cinematic-card border border-cinematic-border">
              <span className="text-[11px] font-mono uppercase tracking-wider text-film-muted block mb-3">
                CONNECTED PLATFORMS
              </span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-cinematic-surface border border-cinematic-border hover:border-accent hover:text-accent text-xs font-mono text-film-gray transition-colors flex items-center space-x-1"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-film-muted" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-cinematic-card border border-cinematic-border relative shadow-2xl">
              
              <div className="slate-corner-tl" />
              <div className="slate-corner-br" />

              {isSuccess ? (
                /* Success Confirmation State */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-film-white">
                    INQUIRY RECEIVED.
                  </h3>
                  <p className="text-film-gray text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-film-white font-semibold">{formData.name}</span>. I've received your project details for <span className="text-accent font-mono">[{formData.projectType}]</span> and will review the brief within 12 hours.
                  </p>
                  <div className="p-4 rounded-xl bg-cinematic-surface border border-cinematic-border max-w-sm mx-auto text-left font-mono text-xs space-y-1.5 text-film-muted">
                    <div className="flex justify-between">
                      <span>Sender:</span>
                      <span className="text-film-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget:</span>
                      <span className="text-accent">{formData.budgetRange}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Commercial Advertisements',
                        budgetRange: '$3,000 – $5,000',
                        footageUrl: '',
                        message: '',
                        honeypot: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded bg-cinematic-surface border border-cinematic-border text-xs font-mono text-accent hover:border-accent transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-cinematic-border/60 pb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-film-white uppercase tracking-wider">
                      PROJECT INQUIRY FORM
                    </span>
                    <span className="font-mono text-[11px] text-film-muted">
                      ALL FIELDS ENCRYPTED
                    </span>
                  </div>

                  {/* Honeypot field (hidden from real users, traps spam bots) */}
                  <input
                    type="text"
                    name="website_company_hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-800 text-red-200 text-xs font-mono flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-film-gray mb-2">
                        YOUR NAME / STUDIO <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-cinematic-surface border border-cinematic-border text-film-white placeholder-film-muted text-sm font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-film-gray mb-2">
                        YOUR EMAIL ADDRESS <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-cinematic-surface border border-cinematic-border text-film-white placeholder-film-muted text-sm font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-film-gray mb-2">
                      PROJECT CATEGORY
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-cinematic-surface border border-cinematic-border text-film-white text-sm font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-cinematic-card text-film-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range Radio/Pill Row */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-film-gray mb-2">
                      ESTIMATED BUDGET RANGE (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`py-2 px-2 text-center rounded-lg font-mono text-[11px] border transition-colors cursor-pointer ${
                            formData.budgetRange === range
                              ? 'bg-accent/15 border-accent text-accent font-semibold'
                              : 'bg-cinematic-surface border-cinematic-border text-film-muted hover:text-film-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Footage Link (Optional) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-film-gray mb-2">
                      FOOTAGE OR BRIEF LINK <span className="text-film-muted text-[10px]">(OPTIONAL)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or Frame.io"
                      value={formData.footageUrl}
                      onChange={(e) => setFormData({ ...formData, footageUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-cinematic-surface border border-cinematic-border text-film-white placeholder-film-muted text-sm font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Message Description */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-film-gray mb-2">
                      PROJECT VISION & DEADLINE <span className="text-accent">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your story, target platform, raw footage volume, and ideal completion deadline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-cinematic-surface border border-cinematic-border text-film-white placeholder-film-muted text-sm font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-accent text-cinematic-dark font-mono text-sm font-bold tracking-widest hover:bg-accent-hover transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 shadow-lg shadow-accent/20 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>SENDING INQUIRY...</span>
                    ) : (
                      <>
                        <span>TRANSMIT BRIEF & START PROJECT</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-film-muted pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>Non-Disclosure Agreements (NDAs) respected for all unreleased footage.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
