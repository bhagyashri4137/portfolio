import { Code2, Palette, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code.',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive interfaces with attention to detail.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and seamless user experiences.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get To Know</p>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate Frontend Developer with over 2 years of experience building modern web applications. 
                I specialize in React.js ecosystem and love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently working at AccelerateBS Pvt. Ltd., I've had the opportunity to work on diverse projects 
                ranging from healthcare platforms to logistics solutions, always focusing on delivering exceptional user experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and continuously expanding my skill set to stay at the forefront of web development.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 
                             transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
