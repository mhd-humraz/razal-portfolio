import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/data";

const ShowreelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showreel" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Showreel</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            The <span className="neon-text">Reel</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Glow ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 opacity-50 group-hover:opacity-100 blur-md transition-opacity duration-700" />
          
          <div className="relative rounded-2xl overflow-hidden glass-card">
            <div className="aspect-video">
              <video
                controls
                playsInline
                className="w-full h-full object-cover"
                src={siteConfig.showreelUrl}
                poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
