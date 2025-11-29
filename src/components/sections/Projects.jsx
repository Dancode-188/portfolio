import { Github, ExternalLink, Calendar, Code, Shield, Star, Download, TrendingUp } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "SyncKit - Offline-First Sync Engine",
      period: "November 2025 - Present",
      description: "Production-grade distributed sync infrastructure for building real-time collaborative applications",
      longDescription: `Built complete offline-first sync engine from scratch in 16 days. Achieved 336 GitHub stars 
        and 80 downloads within 48 hours of launch with zero bug reports. Used TLA+ formal verification to catch 
        bugs before implementation, ensuring correctness in distributed systems.`,
      highlights: [
        "Reached 336 GitHub stars in 48 hours of launch - top 1% open source performance",
        "Verified 118,711 TLA+ states prior to implementation, catching 3 critical bugs in design phase",
        "Shipped 700+ comprehensive tests including 80 chaos tests with zero data loss",
        "Optimized to 59KB gzipped bundle - smaller than Firebase (~150KB) and Supabase SDKs",
        "Architected complete distributed sync infrastructure using Rust (core), WebAssembly, TypeScript (SDK)",
        "Published to npm and Docker Hub with complete documentation and 3 production-ready examples",
      ],
      technologies: [
        "Rust", "WebAssembly", "TypeScript", "TLA+", "PostgreSQL", 
        "Redis", "Docker", "CRDTs", "Formal Verification"
      ],
      metrics: {
        stars: "336",
        downloads: "80 (48hrs)",
        tests: "700+",
        bundle: "59KB gzipped"
      },
      links: {
        github: "https://github.com/Dancode-188/synckit",
        npm: "https://www.npmjs.com/package/@synckit-js/sdk",
        live: "#",
      },
      featured: true,
    },
    {
      title: "Graft - Keyboard-First Git GUI",
      period: "October 2025 - Present",
      description: "Production-ready Git GUI as free alternative to GitKraken ($99/year) and Tower",
      longDescription: `Built complete keyboard-first Git interface in 9 days (estimated 6 months by others). 
        LinkedIn launch post achieved 64,455 impressions with 1,066 reactions - demonstrating strong product-market 
        fit and community validation.`,
      highlights: [
        "Viral LinkedIn launch: 64,455 impressions, 1,066 reactions, 87 comments in first week",
        "Implemented 40+ keyboard shortcuts and command palette (Cmd+K) with <50ms response time",
        "Achieved <1s startup time and smooth handling of 10,000+ commits using Tauri + Rust performance",
        "Built complete WCAG AA accessible theme system with instant switching (<100ms transitions)",
        "Delivered interactive rebase, stash management, visual branch graph, comprehensive Git operations",
        "Designed professional UI with Monaco Editor integration for diff viewing and syntax highlighting",
      ],
      technologies: [
        "Tauri", "Rust", "React", "TypeScript", "libgit2", 
        "Tailwind CSS", "Monaco Editor", "Keyboard Navigation"
      ],
      metrics: {
        impressions: "64K",
        reactions: "1,066",
        buildTime: "9 days",
        startup: "<1s"
      },
      links: {
        github: "https://github.com/Dancode-188/graft",
        live: "#",
      },
    },
    {
      title: "RestBolt - Fast API Testing Tool",
      period: "September 2025 - Present",
      description: "Local-first API testing tool built to address Postman/Insomnia limitations",
      longDescription: `Fast, offline-first API client with zero backend dependencies. Features visual workflow 
        engine for multi-step testing and professional code editing experience. Active open source project with 
        growing contributor community.`,
      highlights: [
        "Designed Chain Builder: visual workflow engine for multi-step API testing with JSONPath extraction",
        "Built 100% offline-first architecture using IndexedDB - works without backend dependencies",
        "Integrated Monaco Editor (VS Code's editor) with syntax highlighting for professional experience",
        "Implemented code generation supporting cURL, JavaScript, Python, and Go",
        "Delivered comprehensive HTTP + WebSocket support with keyboard-first UX",
        "Active maintenance with dedicated contributor since October 2025",
      ],
      technologies: [
        "Next.js 15", "TypeScript", "Zustand", "Dexie.js", 
        "Monaco Editor", "Tailwind CSS", "IndexedDB", "WebSocket"
      ],
      metrics: {
        offline: "100%",
        codeGen: "4 languages",
        architecture: "Local-first",
        protocols: "HTTP + WS"
      },
      links: {
        github: "https://github.com/Dancode-188/restbolt",
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
              Open Source Projects
            </h2>
            <p className="text-slate text-lg">
              Three production developer tools shipped in 2.5 months. Each project demonstrates 
              exceptional velocity, technical depth, and real market validation.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
              <div className={`bg-primary border ${project.featured ? 'border-secondary/50' : 'border-slate/20'} rounded-lg overflow-hidden`}>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="bg-secondary/10 border-b border-secondary/30 px-6 py-2">
                    <p className="text-secondary text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Featured Project - Latest Launch
                    </p>
                  </div>
                )}

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
                  <p className="text-slate text-lg mb-3">{project.description}</p>
                  <p className="text-slate">{project.longDescription}</p>
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
                          <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
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
                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate/20">
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate hover:text-secondary transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span className="font-mono text-sm">View Code</span>
                    </a>
                    {project.links.npm && (
                      <a 
                        href={project.links.npm}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center text-slate hover:text-secondary transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        <span className="font-mono text-sm">npm Package</span>
                      </a>
                    )}
                    {project.links.live && project.links.live !== "#" && (
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

        {/* Summary Stats */}
        <ScrollReveal>
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-secondary">3</p>
              <p className="text-sm text-slate">Production Tools</p>
            </div>
            <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-secondary">2.5</p>
              <p className="text-sm text-slate">Months to Ship All</p>
            </div>
            <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-secondary">336</p>
              <p className="text-sm text-slate">GitHub Stars (SyncKit)</p>
            </div>
            <div className="bg-primary border border-secondary/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-secondary">64K</p>
              <p className="text-sm text-slate">LinkedIn Impressions (Graft)</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Note */}
        <ScrollReveal>
          <div className="mt-8 p-6 bg-primary/30 border border-slate/20 rounded-lg">
            <p className="text-slate text-center">
              All projects built with production-ready standards: comprehensive testing, formal verification (TLA+), 
              complete documentation, and zero-bug launches. Each demonstrates{' '}
              <span className="text-secondary font-semibold">exceptional shipping velocity</span> combined with{' '}
              <span className="text-secondary font-semibold">senior-level quality</span>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;