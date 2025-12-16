const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Redux', level: 85 },
  { name: 'Framer Motion', level: 80 },
  { name: 'Git', level: 88 },
];

const technologies = [
  'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Chakra UI', 'Redux', 'Framer Motion', 'Git', 'REST APIs',
  'Responsive Design', 'Figma', 'VS Code', 'npm/yarn'
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I Know</p>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>

          {/* Skill Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: 'var(--gradient-primary)',
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
