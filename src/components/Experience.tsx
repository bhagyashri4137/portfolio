import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'AccelerateBS Pvt. Ltd.',
    period: 'June 2024 – Present',
    description: 'Building modern web applications using React.js, Next.js, and Tailwind CSS. Collaborating with cross-functional teams to deliver high-quality user experiences.',
  },
  {
    type: 'education',
    title: 'CDAC – PG Diploma',
    company: 'Sunbeam Institute, Pune',
    period: 'Mar 2023 – Aug 2023',
    description: 'Completed Post Graduate Diploma in Advanced Computing, gaining expertise in full-stack development, data structures, and software engineering principles.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Journey</p>
            <h2 className="section-title">Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background 
                                md:-translate-x-1/2 glow-effect z-10" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 
                                  transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="text-primary font-mono text-sm">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary/80 font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
