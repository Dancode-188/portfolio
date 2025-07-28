import ScrollReveal from '../ui/ScrollReveal';
import SkillLevel from '../ui/SkillLevel';

const Skills = () => {
  const skills = [
    {
      category: "Core Technologies",
      items: [
        {
          skill: "TypeScript/JavaScript",
          level: "Production Experience",
          description: "Built entire platforms using Node.js, Express, React. Expert-level understanding."
        },
        {
          skill: "Python",
          level: "Production Experience",
          description: "Developed microservices with FastAPI, integrated ML models with BERT."
        },
        {
          skill: "PostgreSQL & Redis",
          level: "Production Experience",
          description: "Designed schemas, optimized queries, implemented caching strategies."
        },
        {
          skill: "System Architecture",
          level: "Advanced",
          description: "Designed microservices, API gateways, multi-tenant systems from scratch."
        }
      ]
    },
    {
      category: "Frameworks & Tools",
      items: [
        {
          skill: "React & Next.js",
          level: "Production Experience",
          description: "Built complex admin dashboards and responsive web applications."
        },
        {
          skill: "Docker & DevOps",
          level: "Proficient",
          description: "Containerized applications, managed deployments, CI/CD pipelines."
        },
        {
          skill: "Neo4j & Graph Databases",
          level: "Proficient",
          description: "Implemented graph-based pattern analysis for Intent System."
        },
        {
          skill: "Machine Learning Integration",
          level: "Learning",
          description: "Integrated BERT transformers, exploring advanced ML applications."
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
              Real-world experience levels based on production usage
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
              <span className="text-secondary font-semibold">Note:</span> These skill levels reflect actual production usage. 
              "Production Experience" means I've built and deployed real systems using these technologies.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;