import { siteConfig, socialLinks } from "@/data/data";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xl font-display font-bold neon-text">{siteConfig.logoText}</span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
