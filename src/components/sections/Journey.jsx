import { motion } from 'framer-motion';
import { Smartphone, Laptop, Code, Rocket, Target, TrendingUp, Star, Zap } from 'lucide-react';
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
      period: "September 2025",
      title: "RestBolt - First Open Source Tool",
      description: "Built fast, local-first API testing tool to solve Postman/Insomnia pain points. First step into open source development and building for other developers.",
      highlight: "First developer tool launched"
    },
    {
      icon: <Target className="w-5 h-5" />,
      period: "October 2025",
      title: "Graft - Viral Success",
      description: "Built keyboard-first Git GUI in 9 days. LinkedIn launch post went viral with 64,455 impressions and 1,066 reactions. Proved I could build AND market developer tools.",
      highlight: "64K impressions, validated PMF"
    },
    {
      icon: <Star className="w-5 h-5" />,
      period: "November 2025",
      title: "SyncKit - Breakthrough Launch",
      description: "Shipped offline-first sync engine after 16 days of development with TLA+ verification. Hit 336 GitHub stars in 48 hours with zero bug reports. Demonstrated senior-level technical depth.",
      highlight: "336 stars in 48 hours, zero bugs"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      period: "Present",
      title: "Ready for the Next Chapter",
      description: "Three production tools shipped, proven velocity and quality, growing open source presence. Seeking remote opportunities with developer tools companies where I can contribute and grow.",
      highlight: "Seeking remote roles globally"
    }
  ];

  const achievements = [
    { metric: "3", label: "Production Tools" },
    { metric: "2.5", label: "Months to Ship" },
    { metric: "336", label: "GitHub Stars" },
    { metric: "64K", label: "LinkedIn Views" },
    { metric: "700+", label: "Tests Written" },
    { metric: "0", label: "Bug Reports" }
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
              From learning Python on a phone to shipping production developer tools with 
              336 GitHub stars. A self-taught journey driven by curiosity, velocity, and quality.
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
                  2025 Metrics
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

            {/* Building Philosophy */}
            <ScrollReveal>
              <div className="bg-primary border border-slate/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Building Philosophy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Ship production-ready from day one, not MVPs</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Use formal verification (TLA+) for distributed systems</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Comprehensive testing including chaos scenarios</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Obsess over developer experience and polish</span>
                  </li>
                  <li className="flex items-start text-slate">
                    <span className="text-secondary mr-3 mt-1">▹</span>
                    <span>Velocity without compromising quality</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* What's Next */}
            <ScrollReveal>
              <div className="bg-primary/50 border border-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-secondary" />
                  What I'm Looking For
                </h3>
                <p className="text-slate mb-4">
                  Remote software engineering roles where I can apply my shipping velocity 
                  and systems thinking to real problems. Ideal opportunities:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-slate">• Developer tools companies (Vercel, Railway, Neon, etc.)</li>
                  <li className="text-slate">• Infrastructure teams building platforms</li>
                  <li className="text-slate">• Early-stage startups solving hard technical problems</li>
                  <li className="text-slate">• Teams that value shipping velocity + quality</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate/20">
                  <p className="text-secondary font-mono text-sm">
                    Location: Nairobi, Kenya | Open to: Global remote or relocation (UK/EU visa sponsorship)
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