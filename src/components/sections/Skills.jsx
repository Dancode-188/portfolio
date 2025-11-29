import ScrollReveal from '../ui/ScrollReveal';
import SkillLevel from '../ui/SkillLevel';

const Skills = () => {
  const skills = [
    {
      category: "Core Languages & Specializations",
      items: [
        {
          skill: "Rust",
          level: "Production Experience",
          description: "Built SyncKit core engine and Graft desktop app. Expert in systems programming, WebAssembly compilation, and performance optimization."
        },
        {
          skill: "TypeScript/JavaScript",
          level: "Expert",
          description: "Primary language for 3 production tools. Built complete platforms, React applications, and Node.js backends."
        },
        {
          skill: "Distributed Systems",
          level: "Advanced",
          description: "Architected offline-first sync engine with CRDTs, designed fault-tolerant systems, implemented conflict resolution."
        },
        {
          skill: "TLA+ Formal Verification",
          level: "Production Experience",
          description: "Verified 118,711 states for SyncKit before implementation. Caught 3 critical bugs in design phase. Rare skill for ensuring correctness."
        }
      ]
    },
    {
      category: "Developer Tools & Infrastructure",
      items: [
        {
          skill: "Tauri & Desktop Apps",
          level: "Production Experience",
          description: "Built Graft with <1s startup time, handling 10,000+ commits. Expert in Rust + frontend integration."
        },
        {
          skill: "PostgreSQL & Redis",
          level: "Production Experience",
          description: "Designed schemas for multi-tenant systems, implemented caching strategies, optimized query performance."
        },
        {
          skill: "WebAssembly (Wasm)",
          level: "Proficient",
          description: "Compiled Rust to Wasm for SyncKit, achieving 59KB bundle size. Performance-critical browser applications."
        },
        {
          skill: "Docker & DevOps",
          level: "Proficient",
          description: "Containerized applications, published to Docker Hub, managed deployments and CI/CD pipelines."
        }
      ]
    },
    {
      category: "Frontend & Developer Experience",
      items: [
        {
          skill: "React & Next.js",
          level: "Expert",
          description: "Built 3 production applications with modern patterns. Expert in state management, performance, and UX."
        },
        {
          skill: "Offline-First Architecture",
          level: "Advanced",
          description: "Designed complete offline-first systems using IndexedDB, CRDTs, and sync protocols. Core expertise area."
        },
        {
          skill: "Developer Tooling (DX)",
          level: "Advanced",
          description: "Obsessive focus on developer experience. Built Monaco Editor integrations, keyboard shortcuts, command palettes."
        },
        {
          skill: "Git & libgit2",
          level: "Advanced",
          description: "Built complete Git GUI using libgit2. Deep understanding of Git internals, rebasing, graph algorithms."
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Technical Skills
            </h2>
            <p className="text-slate text-lg">
              Production-proven expertise across distributed systems, developer tools, and modern web technologies
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {skills.map((category, index) => (
            <ScrollReveal key={index}>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-6">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, idx) => (
                    <SkillLevel
                      key={idx}
                      skill={item.skill}
                      level={item.level}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 p-6 bg-primary/30 border border-slate/20 rounded-lg">
            <p className="text-sm text-slate text-center">
              <span className="text-secondary font-semibold">Note:</span> All skills reflect actual production usage in shipped projects. 
              "Production Experience" means I've built, deployed, and maintained real systems using these technologies with users.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;