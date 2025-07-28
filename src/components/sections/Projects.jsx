import { Github, ExternalLink, Calendar, Code, Users, Shield } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "Asynova - Enterprise AI Platform",
      period: "December 2024 - Present",
      description: "Production-ready SaaS platform for AI implementation in financial services",
      longDescription: `Built a complete enterprise platform from scratch featuring multi-tenant architecture, 
        comprehensive security, and sophisticated API design. This platform demonstrates senior-level 
        system design capabilities typically seen in Series A startups.`,
      highlights: [
        "Architected complete platform with 40+ RESTful API endpoints",
        "Implemented multi-tenant architecture with organization-level data isolation",
        "Built comprehensive security layer: JWT auth, 2FA, rate limiting (300 req/min)",
        "Developed React admin dashboard for system monitoring",
        "Created extensive test suite covering unit, integration, and performance tests",
        "Reduced infrastructure costs 90% through strategic migration (AWS → Railway/Vercel)",
      ],
      technologies: [
        "TypeScript", "Node.js", "Express", "PostgreSQL", 
        "Redis", "React", "Docker", "JWT", "2FA"
      ],
      metrics: {
        apis: "40+",
        testCoverage: "Comprehensive",
        costReduction: "90%",
        architecture: "Multi-tenant"
      },
      links: {
        github: "https://github.com/Asynova/asynova-platform", 
        live: "https://asynova.com/",
      },
    },
    {
      title: "Intent Analysis System",
      period: "October 2024 - December 2024",
      description: "Real-time behavioral analysis platform using microservices architecture",
      longDescription: `Designed and built a distributed system for user behavior analysis featuring 
        4 specialized microservices, real-time processing, and sophisticated architectural patterns 
        including circuit breakers and API gateway.`,
      highlights: [
        "Designed 4-service architecture: Context (NLP), Intent (Graph), Prediction, Real-time",
        "Integrated BERT transformers for natural language understanding",
        "Implemented API Gateway with circuit breaker pattern for fault tolerance",
        "Built graph-based pattern analysis using Neo4j and NetworkX",
        "Created WebSocket service for real-time updates using Socket.io",
        "Developed Redis-based rate limiting and caching layer",
      ],
      technologies: [
        "Python", "FastAPI", "BERT", "Neo4j", 
        "Redis", "NetworkX", "Node.js", "Docker", "WebSocket"
      ],
      metrics: {
        services: "4",
        architecture: "Microservices",
        patterns: "Circuit Breaker",
        realTime: "WebSocket"
      },
      links: {
        github: "https://github.com/Dancode-188/intent-saas",
        live: "#",
      },
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-primary/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Production Systems I've Built
            </h2>
            <p className="text-slate text-lg">
              In 2.5 years, I've independently architected and deployed two sophisticated platforms 
              that would typically require a team of 3-4 engineers.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
              <div className="bg-primary border border-slate/20 rounded-lg overflow-hidden">
                {/* Project Header */}
                <div className="p-6 md:p-8 border-b border-slate/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-text mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    <span className="text-secondary font-mono text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </span>
                  </div>
                  <p className="text-slate text-lg">{project.description}</p>
                  <p className="text-slate mt-3">{project.longDescription}</p>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-text mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-secondary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-slate flex items-start">
                            <span className="text-secondary mr-3 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Metrics & Tech */}
                    <div className="space-y-6">
                      {/* Key Metrics */}
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-secondary" />
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="bg-primary/50 rounded-lg p-3 border border-slate/10">
                              <p className="text-xs text-slate capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                              <p className="text-lg font-semibold text-secondary">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary rounded-full text-sm text-secondary 
                                       border border-secondary/30 hover:bg-secondary/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 mt-8 pt-6 border-t border-slate/20">
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate hover:text-secondary transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span className="font-mono text-sm">View Code</span>
                    </a>
                    {project.links.live !== "#" && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center text-slate hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        <span className="font-mono text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Note */}
        <ScrollReveal>
          <div className="mt-12 p-6 bg-primary/30 border border-slate/20 rounded-lg">
            <p className="text-slate text-center">
              These projects represent over <span className="text-secondary font-semibold">1000+ hours</span> of 
              design, development, and testing. Each system was built with production-ready standards including 
              comprehensive testing, security best practices, and scalable architecture.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;