import { Code2, Rocket, Brain, Clock } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const About = () => {
  const strengths = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "0 to 1 Builder",
      description: "Proven ability to take ideas from concept to production. Built two complete platforms independently that would typically require a team."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "System Architecture",
      description: "Designed microservices architectures, implemented circuit breakers, built API gateways, and created multi-tenant systems."
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Full-Stack Expertise",
      description: "Expert in TypeScript/JavaScript, advanced in Python. Built everything from React frontends to FastAPI backends."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Rapid Learning",
      description: "Self-taught journey from phone tutorials to production systems in 2.5 years. Continuously expanding technical capabilities."
    }
  ];

  const technologies = {
    "Languages": ["TypeScript/JavaScript (Expert)", "Python (Advanced)", "SQL (Proficient)"],
    "Backend": ["Node.js", "Express", "FastAPI", "RESTful APIs", "WebSockets"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    "Databases": ["PostgreSQL", "Redis", "MongoDB", "Neo4j"],
    "DevOps": ["Docker", "AWS", "Railway", "Vercel", "CI/CD"],
    "Concepts": ["Microservices", "Circuit Breakers", "JWT/2FA", "Rate Limiting"]
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">About Me</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <ScrollReveal>
            <div className="space-y-6 text-slate">
              <p className="text-lg">
                I'm a self-directed software engineer with <span className="text-secondary font-semibold">2.5 years</span> of 
                hands-on experience building production-grade systems from scratch.
              </p>
              <p>
                My journey began in December 2022, learning Python on my phone without a laptop. 
                What started as curiosity quickly became a passion for building sophisticated systems. 
                By 2024, I had independently architected and deployed two production platforms that 
                demonstrate senior-level capabilities.
              </p>
              <p>
                Through projects like <span className="text-secondary">Asynova</span> (40+ APIs, multi-tenant architecture) 
                and my <span className="text-secondary">Intent Analysis System</span> (4 microservices, real-time processing), 
                I've proven that dedication and self-direction can achieve what typically requires years 
                of traditional experience.
              </p>
              <p>
                I thrive on complex challenges, from implementing circuit breakers for fault tolerance 
                to reducing infrastructure costs by 90% through strategic migrations. My approach combines 
                modern best practices with pragmatic decision-making.
              </p>
              <div className="pt-4">
                <p className="text-secondary font-mono text-sm">
                  "While others were learning in classrooms, I was building production systems."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Strengths */}
          <div className="space-y-6">
            <ScrollReveal>
              <h3 className="text-xl font-semibold text-text mb-4">What I Bring to Your Team</h3>
              <div className="grid gap-4">
                {strengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="bg-primary/50 border border-slate/20 rounded-lg p-4 
                             hover:border-secondary/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-2 text-secondary">
                      {strength.icon}
                      <h4 className="font-semibold">{strength.title}</h4>
                    </div>
                    <p className="text-slate text-sm">{strength.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Key Stats */}
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">2</p>
                  <p className="text-sm text-slate">Production Platforms</p>
                </div>
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">40+</p>
                  <p className="text-sm text-slate">APIs Built</p>
                </div>
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">90%</p>
                  <p className="text-sm text-slate">Cost Reduction</p>
                </div>
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">2.5</p>
                  <p className="text-sm text-slate">Years Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Technologies Grid */}
        <ScrollReveal>
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-text mb-6">Technical Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(technologies).map(([category, techs], index) => (
                <div key={index} className="bg-primary/30 rounded-lg p-4 border border-slate/20">
                  <h4 className="font-semibold text-secondary mb-3">{category}</h4>
                  <div className="space-y-2">
                    {techs.map((tech, techIndex) => (
                      <div key={techIndex} className="text-slate text-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;