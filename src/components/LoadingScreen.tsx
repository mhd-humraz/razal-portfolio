import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/data";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Ambient glows */}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 relative z-10"
          >
            <motion.span
              className="text-6xl md:text-8xl font-display font-bold neon-text"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {siteConfig.logoText}
            </motion.span>
            <motion.div
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground"
            >
              Loading Experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
