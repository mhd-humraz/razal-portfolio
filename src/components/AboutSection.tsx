import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "@/data/data";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            The <span className="gold-text">Editor</span> Behind the Lens
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {aboutData.bio}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutData.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-lg p-5"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-yellow-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
