// import React from 'react';
// import { siteConfig } from '../data/siteConfig';
// import { GitBranch, Clock, CheckCircle2 } from 'lucide-react';

// export const Process: React.FC = () => {
//   return (
//     <section id="process" className="py-24 border-b border-cinematic-border/60 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
//           <div>
//             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent mb-3">
//               <GitBranch className="w-3.5 h-3.5" />
//               <span>THE EDITORIAL PIPELINE</span>
//             </div>
//             <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-film-white tracking-tight">
//               HOW WE WORK<span className="text-accent">.</span>
//             </h2>
//             <p className="text-film-gray font-sans text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
//               A transparent, battle-tested four-step workflow built on frame-accurate communication and zero guesswork.
//             </p>
//           </div>

//           <div className="inline-flex items-center space-x-2 text-xs font-mono text-film-muted self-start md:self-end">
//             <Clock className="w-3.5 h-3.5 text-accent" />
//             <span>Average Project Cycle: 5 - 10 Business Days</span>
//           </div>
//         </div>

//         {/* 4-Step Process Timeline Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
//           {siteConfig.process.map((step, idx) => (
//             <div
//               key={step.step}
//               className="p-6 rounded-xl bg-cinematic-card border border-cinematic-border hover:border-accent/60 transition-all duration-300 flex flex-col justify-between group relative"
//             >
//               {/* Step indicator line connecting on desktop */}
//               {idx < siteConfig.process.length - 1 && (
//                 <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-cinematic-border pointer-events-none z-10" />
//               )}

//               <div>
//                 {/* Step Slate Header */}
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="font-display font-extrabold text-3xl text-film-white group-hover:text-accent transition-colors">
//                     {step.step}
//                   </span>
//                   <span className="px-2 py-0.5 rounded bg-cinematic-surface border border-cinematic-border text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">
//                     {step.phase}
//                   </span>
//                 </div>

//                 {/* Step Title */}
//                 <h3 className="font-display font-bold text-base sm:text-lg text-film-white mb-2.5">
//                   {step.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-xs sm:text-sm text-film-gray font-sans leading-relaxed mb-6">
//                   {step.description}
//                 </p>

//                 {/* Step Details list */}
//                 <div className="space-y-2 mb-6 pt-4 border-t border-cinematic-border/60">
//                   {step.details.map((detail, dIdx) => (
//                     <div key={dIdx} className="flex items-start space-x-2 text-xs font-sans text-film-white">
//                       <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5" />
//                       <span className="text-film-gray leading-tight">{detail}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Timeline duration badge */}
//               <div className="pt-3 border-t border-cinematic-border/60 flex items-center justify-between text-[11px] font-mono text-film-muted">
//                 <span>ESTIMATED WINDOW</span>
//                 <span className="text-accent font-semibold">{step.timeline}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Frame.io & Review Guarantee Banner */}
//         <div className="mt-12 p-6 rounded-xl bg-cinematic-surface/40 border border-cinematic-border flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="flex items-center space-x-3.5">
//             <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
//               <CheckCircle2 className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="font-display font-bold text-sm text-film-white">
//                 Frame-Accurate Video Review with Frame.io
//               </h4>
//               <p className="text-xs text-film-gray">
//                 Leave timecode-specific annotations, drawings, and voice notes directly on the timeline. No confusing email chains.
//               </p>
//             </div>
//           </div>
//           <span className="font-mono text-xs text-accent px-3 py-1 rounded bg-cinematic-card border border-cinematic-border shrink-0">
//             2 Included Revision Rounds
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// };
