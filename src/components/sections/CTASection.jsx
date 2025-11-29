import ScrollReveal from '../ui/ScrollReveal';
import CallToAction from '../ui/CallToAction';
import { Rocket, Target, Zap } from 'lucide-react';

const CTASection = () => {
  const reasons = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Exceptional Velocity",
      description: "Shipped 3 production tools in 2.5 months with 336 GitHub stars and zero bugs"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Senior-Level Quality",
      description: "TLA+ verification, 700+ tests, formal methods for distributed systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Proven Impact",
      description: "64K LinkedIn impressions, active contributors, real market validation"
    }
  ];

  return (
    <section id="cta" className="py-20 md:py-32 bg-primary/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Work With Me?
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              I combine high-velocity shipping with uncompromising quality. Here's what sets me apart:
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
            title="Let's Build Something Great"
            description="Seeking remote opportunities with developer tools companies, infrastructure teams, or early-stage 
                       startups. If you value shipping velocity + technical depth, let's talk."
            buttonText="Get In Touch"
            buttonHref="#contact"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;