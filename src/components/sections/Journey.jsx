import { motion } from 'framer-motion';
import { Book, GitBranch, Code, Cpu } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import CodeSnippet from '../ui/CodeSnippet';

const Journey = () => {
  const journeyPoints = [
    {
      icon: <Code className="w-5 h-5" />,
      period: "Current Focus",
      title: "Full Stack Development",
      description: "Building robust, scalable systems with a focus on privacy and performance. Specializing in React, FastAPI, and modern architecture patterns.",
      technologies: ["React", "FastAPI", "BERT", "Neo4j"]
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      period: "System Architecture",
      title: "Privacy-First Design",
      description: "Developing expertise in privacy-preserving architectures and real-time processing systems. Implementing sophisticated intent analysis solutions.",
      technologies: ["Microservices", "Privacy Computing", "Real-time Processing"]
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      period: "Learning Path",
      title: "Continuous Growth",
      description: "Constantly exploring new technologies and best practices. Currently deepening knowledge in machine learning and distributed systems.",
      technologies: ["ML Systems", "Distributed Computing", "System Design"]
    },
    {
      icon: <Book className="w-5 h-5" />,
      period: "Professional Development",
      title: "Best Practices & Standards",
      description: "Committed to writing clean, maintainable code. Focus on testing, documentation, and performance optimization.",
      technologies: ["Clean Code", "Testing", "Documentation"]
    }
  ];

  const codeExamples = {
    privacy: `# Privacy-First Implementation Example
from typing import Dict
import numpy as np

class PrivacyEngine:
    """Privacy-preserving analytics implementation"""
    
    def __init__(self, epsilon: float = 0.1):
        self.epsilon = epsilon  # Privacy budget
        
    def add_noise(self, data: np.ndarray) -> np.ndarray:
        """Add Laplace noise for differential privacy"""
        sensitivity = self.calculate_sensitivity(data)
        noise = np.random.laplace(
            0, sensitivity/self.epsilon, data.shape
        )
        return data + noise`,

    architecture: `# Clean Architecture Example
from fastapi import FastAPI, Depends
from typing import List, Optional

class IntentService:
    """Core service implementing clean architecture"""
    
    async def analyze_intent(
        self,
        user_action: dict,
        context: Optional[dict] = None
    ) -> dict:
        # Validate and process input
        validated_data = self.validate_input(user_action)
        
        # Apply business logic
        intent = await self.process_intent(
            validated_data,
            context
        )
        
        return self.format_response(intent)`
  };

  return (
    <section id="journey" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
            Professional Journey
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-12">
            {journeyPoints.map((point, index) => (
              <ScrollReveal key={index}>
                <motion.div 
                  className="relative flex gap-6"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Timeline connector */}
                  {index !== journeyPoints.length - 1 && (
                    <div className="absolute left-[17px] md:left-[27px] top-12 bottom-0 w-px bg-slate/20 -z-10" />
                  )}
                  
                  {/* Icon */}
                  <div className="w-9 h-9 md:w-14 md:h-14 rounded-full bg-primary border border-slate/20 flex items-center justify-center text-secondary flex-shrink-0">
                    {point.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                      <span className="text-sm text-secondary font-mono">
                        {point.period}
                      </span>
                      <h3 className="text-xl font-bold text-text">
                        {point.title}
                      </h3>
                    </div>

                    <p className="text-slate mb-4 max-w-2xl">
                      {point.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {point.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/50 border border-slate/20 rounded-full text-sm text-slate"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Code Examples */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text">
                  Code Philosophy
                </h3>
                <p className="text-slate mb-6">
                  Here are some examples of how I implement clean, 
                  maintainable code with a focus on privacy and architecture.
                </p>
                
                {/* Code Snippets */}
                <div className="space-y-6">
                  <CodeSnippet 
                    title="Privacy-First Implementation"
                    code={codeExamples.privacy}
                    language="python"
                  />
                  <CodeSnippet 
                    title="Clean Architecture"
                    code={codeExamples.architecture}
                    language="python"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Skills Progress */}
            <ScrollReveal>
              <div className="bg-primary/30 rounded-lg p-6 border border-slate/20">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Core Competencies
                </h3>
                <div className="space-y-4">
                  {[ 
                    { skill: "System Architecture", level: 90 },
                    { skill: "Privacy Implementation", level: 85 },
                    { skill: "Full Stack Development", level: 88 },
                    { skill: "Performance Optimization", level: 85 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate">{item.skill}</span>
                        <span className="text-secondary">{item.level}%</span>
                      </div>
                      <div className="h-1 bg-slate/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
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
