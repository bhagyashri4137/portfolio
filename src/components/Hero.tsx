import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in">
            Hello, I'm
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-200">
            Bhagyashree{' '}
            <span className="text-gradient">Bhendarkar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 opacity-0 animate-fade-in animation-delay-400">
            Frontend Developer
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animation-delay-600">
            Crafting beautiful, responsive, and user-centric web experiences with 2+ years of expertise in React.js and modern frontend technologies.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in animation-delay-600">
            <a
              href="https://github.com/bhagyashri4137"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 
                         hover:bg-primary/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhagyashri4137"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 
                         hover:bg-primary/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:bhagyashri4137@gmail.com"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 
                         hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-600">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium 
                         transition-all duration-300 hover:opacity-90 glow-effect"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-primary/50 text-foreground font-medium 
                         transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
