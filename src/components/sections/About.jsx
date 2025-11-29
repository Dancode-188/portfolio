import { Code2, Rocket, Brain, Zap } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const About = () => {
  const strengths = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Exceptional Velocity",
      description: "Shipped 3 production tools in 2.5 months. SyncKit built in 16 days, Graft in 9 days. Proven ability to move from idea to production rapidly."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Distributed Systems",
      description: "Deep expertise in offline-first architecture, CRDTs, and sync engines. Built production sync infrastructure handling complex distributed scenarios."
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Formal Verification",
      description: "Use TLA+ to verify distributed systems before implementation. Checked 118,711 states for SyncKit, catching 3 critical bugs in design phase."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Production Quality",
      description: "Ship with zero bugs through comprehensive testing (700+ tests), formal verification, and obsessive attention to developer experience."
    }
  ];

  const technologies = {
    "Languages": ["Rust (Production)", "TypeScript (Expert)", "JavaScript (Expert)", "Python"],
    "Specializations": ["Distributed Systems", "Offline-First Architecture", "TLA+ Verification", "Developer Tools"],
    "Backend": ["PostgreSQL", "Redis", "WebAssembly", "Node.js", "Docker"],
    "Frontend": ["React", "Next.js", "Tauri", "Tailwind CSS"],
    "Tools": ["Git", "libgit2", "Monaco Editor", "CRDTs", "IndexedDB"]
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
                I'm a software engineer who builds production developer tools with{' '}
                <span className="text-secondary font-semibold">exceptional velocity</span> and{' '}
                <span className="text-secondary font-semibold">uncompromising quality</span>.
              </p>
              <p>
                In the past 2.5 months, I've shipped three production-ready tools from scratch: 
                SyncKit (offline-first sync engine), Graft (keyboard-first Git GUI), and RestBolt 
                (local-first API client). Each project demonstrates senior-level technical depth 
                combined with rapid execution.
              </p>
              <p>
                <span className="text-secondary font-semibold">SyncKit</span> launched to 336 GitHub 
                stars in 48 hours with zero bug reports—achieved through TLA+ formal verification 
                (118,711 states checked) and 700+ comprehensive tests. <span className="text-secondary font-semibold">Graft</span>{' '}
                went viral with 64,455 LinkedIn impressions, validating strong product-market fit. 
                <span className="text-secondary font-semibold"> RestBolt</span> has an active contributor 
                who's been adding features and tests since October.
              </p>
              <p>
                My approach: intensive research, production-ready development (not MVPs), formal 
                verification for distributed systems, and obsessive focus on developer experience. 
                I build tools that developers actually want to use.
              </p>
              <div className="pt-4">
                <p className="text-secondary font-mono text-sm">
                  "Shipping velocity doesn't mean cutting corners—it means knowing what matters."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Strengths */}
          <div className="space-y-6">
            <ScrollReveal>
              <h3 className="text-xl font-semibold text-text mb-4">What Sets Me Apart</h3>
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
                  <p className="text-3xl font-bold text-secondary">336</p>
                  <p className="text-sm text-slate">GitHub Stars (48hrs)</p>
                </div>
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">64K</p>
                  <p className="text-sm text-slate">LinkedIn Impressions</p>
                </div>
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">700+</p>
                  <p className="text-sm text-slate">Tests (SyncKit)</p>
                </div>
                <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">0</p>
                  <p className="text-sm text-slate">Bug Reports</p>
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