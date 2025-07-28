import ScrollReveal from '../ui/ScrollReveal';
import CallToAction from '../ui/CallToAction';
import { Code, Users, Zap } from 'lucide-react';

const CTASection = () => {
  const reasons = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Built 2 production-grade platforms independently"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Self-Directed",
      description: "From zero to architect-level in 2.5 years"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Ready",
      description: "Looking to contribute and grow with your team"
    }
  ];

  return (
    <section id="cta" className="py-20 md:py-32 bg-primary/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Hire Me?
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              I bring senior-level technical skills with the hunger and dedication 
              of someone early in their career. Here's what makes me different:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-primary border border-slate/20 rounded-lg p-6 text-center
                         hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex justify-center text-secondary mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <CallToAction
            title="Ready to Join Your Team"
            description="I'm looking for a remote position where I can contribute immediately while continuing to grow. 
                       If you need someone who can own problems end-to-end and ship quality code, let's talk."
            buttonText="Get In Touch"
            buttonHref="#contact"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;