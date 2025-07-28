import { motion } from 'framer-motion';
import { Smartphone, Laptop, Code, Rocket, Target, TrendingUp } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Journey = () => {
  const journeyPoints = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      period: "December 2022",
      title: "The Beginning",
      description: "Started learning Python on my phone, one week after completing high school. No laptop, just determination and mobile apps. This humble beginning taught me resourcefulness.",
      highlight: "Started with zero coding knowledge"
    },
    {
      icon: <Laptop className="w-5 h-5" />,
      period: "February 2023",
      title: "First Laptop & Acceleration",
      description: "Bought my first laptop and dove deep into web development. Learned JavaScript, HTML, CSS, and began exploring frameworks. The real journey began here.",
      highlight: "10+ hours daily learning"
    },
    {
      icon: <Code className="w-5 h-5" />,
      period: "2023 - 2024",
      title: "Skill Expansion",
      description: "Explored multiple languages and frameworks: JavaScript, Python, Ruby, React, Node.js, FastAPI. Focused on building real projects rather than following tutorials.",
      highlight: "Learned 5+ languages and frameworks"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      period: "October 2024",
      title: "Intent System Project",
      description: "Designed and built my first major project: a microservices platform with 4 services, BERT integration, and real-time processing. First taste of complex architecture.",
      highlight: "First production-grade system"
    },
    {
      icon: <Target className="w-5 h-5" />,
      period: "December 2024",
      title: "Asynova Platform",
      description: "Architected an enterprise AI platform with 40+ APIs, multi-tenant architecture, and comprehensive security. Reduced costs by 90% through strategic infrastructure decisions.",
      highlight: "Built a Series A-level platform solo"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      period: "Present",
      title: "Continuous Growth",
      description: "Building in public, contributing to open source, and seeking opportunities to join a team where I can contribute while continuing to grow as an engineer.",
      highlight: "Ready for the next challenge"
    }
  ];

  const achievements = [
    { metric: "2.5", label: "Years of Experience" },
    { metric: "2", label: "Production Platforms" },
    { metric: "1000+", label: "Hours Building" },
    { metric: "40+", label: "APIs Designed" },
    { metric: "90%", label: "Cost Reduction" },
    { metric: "99.17%", label: "MNIST Accuracy" }
  ];

  return (
    <section id="journey" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              My Journey
            </h2>
            <p className="text-slate text-lg max-w-3xl">
              From learning Python on a phone to architecting distributed systems. 
              A self-taught journey driven by curiosity and determination.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {journeyPoints.map((point, index) => (
              <ScrollReveal key={index}>
                <motion.div 
                  className="relative flex gap-6"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Timeline connector */}
                  {index !== journeyPoints.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-slate/20 -z-10" />
                  )}
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-primary border-2 border-secondary/50 
                                flex items-center justify-center text-secondary flex-shrink-0">
                    {point.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow pb-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <span className="text-sm text-secondary font-mono">
                        {point.period}
                      </span>
                      <h3 className="text-xl font-bold text-text">
                        {point.title}
                      </h3>
                    </div>

                    <p className="text-slate mb-3">
                      {point.description}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      {point.highlight}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats and Insights */}
          <div className="space-y-8">
            {/* Achievement Grid */}
            <ScrollReveal>
              <div className="bg-primary/30 rounded-lg p-6 border border-slate/20">
                <h3 className="text-lg font-semibold text-text mb-6">
                  Journey Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-primary rounded-lg border border-slate/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-2xl font-bold text-secondary">
                        {achievement.metric}
                      </p>
                      <p className="text-xs text-slate mt-1">
                        {achievement.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Learning Philosophy */}
            <ScrollReveal>
              <div className="bg-primary border border-slate/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Learning Philosophy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Build real projects, not todo apps</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Learn by solving problems, not watching tutorials</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Focus on understanding, not memorizing</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Ship early, iterate based on feedback</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Current Focus */}
            <ScrollReveal>
              <div className="bg-primary/50 border border-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  What's Next?
                </h3>
                <p className="text-slate mb-4">
                  I'm looking to join a team where I can contribute my skills while 
                  learning from experienced engineers. My ideal role involves:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-slate">• Building products that matter</li>
                  <li className="text-slate">• Solving complex technical challenges</li>
                  <li className="text-slate">• Working with modern tech stacks</li>
                  <li className="text-slate">• Contributing to open source</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate/20">
                  <p className="text-secondary font-mono text-sm">
                    Open to: Remote opportunities worldwide
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;