import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SystemDiagram from '../projects/SystemDiagram';
import PerformanceMetrics from '../projects/PerformanceMetrics';

const Projects = () => {
  const mainProject = {
    title: "Intent System as a Service (ISaaS)",
    description: "A sophisticated, privacy-preserving intent analysis system that revolutionizes how digital platforms understand and serve their users.",
    longDescription: `Built with a focus on privacy-first architecture, this system provides deep intent analysis while maintaining user privacy. Features include real-time processing, pattern recognition, and predictive analytics.`,
    technologies: [
      "React", "FastAPI", "BERT", "Neo4j",
      "Redis", "Docker", "Privacy Computing", "WebSocket",
    ],
    highlights: [
      "Implemented privacy-preserving analytics using differential privacy",
      "Designed scalable microservices architecture",
      "Built real-time processing system with WebSocket",
      "Developed ML-powered intent recognition using BERT",
      "Achieved <100ms response time for standard requests",
    ],
    links: {
      github: "#",
      live: "#",
    },
  };

  const otherProjects = [
    {
      title: "Project Coming Soon",
      description: "More projects are in development. Check back soon for updates.",
      technologies: ["React", "Node.js", "MongoDB"],
      inProgress: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-primary/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
            My Work
          </h2>
        </ScrollReveal>

        {/* Featured Project */}
        <ScrollReveal>
          <div className="bg-primary border border-slate/20 rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text">
                  {mainProject.title}
                </h3>
                <p className="text-slate">{mainProject.description}</p>
                <p className="text-slate">{mainProject.longDescription}</p>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  <a href={mainProject.links.github} className="text-slate hover:text-secondary transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={mainProject.links.live} className="text-slate hover:text-secondary transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text">Key Highlights</h4>
                  <ul className="space-y-2">
                    {mainProject.highlights.map((highlight, index) => (
                      <li key={index} className="text-slate flex items-start">
                        <span className="text-secondary mr-2">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {mainProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary rounded-full text-sm text-secondary border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Add System Diagram */}
            <div className="mt-8">
              <SystemDiagram />
            </div>

            {/* Add Performance Metrics */}
            <ScrollReveal>
              <div className="mt-8">
                <PerformanceMetrics />
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={index}>
              <div className="bg-primary border border-slate/20 rounded-lg p-6 hover:border-secondary/30 transition-colors">
                <h3 className="text-xl font-bold text-text mb-3">
                  {project.title}
                  {project.inProgress && (
                    <span className="ml-3 text-xs text-secondary border border-secondary/30 rounded-full px-2 py-1">
                      In Progress
                    </span>
                  )}
                </h3>
                <p className="text-slate mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/50 rounded-full text-xs text-slate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
