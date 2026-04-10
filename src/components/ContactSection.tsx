import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contactLinks, siteConfig } from "@/data/data";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="gold-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Ready to bring your vision to life? Let's talk.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                {link.icon}
              </div>
              <p className="font-semibold text-foreground">{link.label}</p>
              <p className="text-sm text-muted-foreground">{link.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-border/50 text-muted-foreground text-sm"
        >
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
