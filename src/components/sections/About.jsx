import { Code2, Shield, Cpu, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy-First Development",
      description: "Building systems with privacy by design, implementing advanced security measures and data protection."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "System Architecture",
      description: "Designing scalable microservices architectures with focus on performance and maintainability."
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Full Stack Development",
      description: "Experienced in building complete solutions from frontend to backend using modern technologies."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-Time Processing",
      description: "Implementing high-performance real-time systems with efficient data processing."
    }
  ];

  const technologies = [
    "React", "FastAPI", "BERT", "Node.js",
    "Python", "Neo4j", "Redis", "MongoDB",
    "Docker", "SQL", "REST APIs", "WebSocket"
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <div className="space-y-6 text-slate">
            <p>
              I'm a software developer passionate about building robust, scalable systems 
              that respect user privacy. My approach combines modern technologies with 
              privacy-first architecture to create efficient solutions.
            </p>
            <p>
              Through my work on projects like the Intent System as a Service (ISaaS), 
              I've developed expertise in implementing sophisticated architectures that 
              handle complex requirements while maintaining high performance and data 
              protection standards.
            </p>
            <p>
              I focus on creating systems that are not just functional, but also 
              maintainable and future-proof. My experience spans from designing 
              microservices architectures to implementing real-time processing systems.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-primary/50 border border-slate/20 rounded-lg p-4 hover:border-secondary/50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2 text-secondary">
                    {skill.icon}
                    <h3 className="font-semibold">{skill.title}</h3>
                  </div>
                  <p className="text-slate text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-text mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/50 border border-slate/20 rounded-full text-sm text-slate"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;