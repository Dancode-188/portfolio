import { Mail, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Dancode-188",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/daniel-bitengo",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:danielbitengo@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
            Let's Build Something Together
          </h2>

          <p className="text-slate text-center max-w-2xl mx-auto mb-8 text-lg">
            I'm actively looking for <span className="text-secondary font-semibold">remote full-stack or backend engineering roles</span> where 
            I can contribute to meaningful products while continuing to grow as an engineer.
          </p>

          {/* Current Status */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center text-secondary">
              <Briefcase className="w-5 h-5 mr-2" />
              <span className="font-mono text-sm">Available for hire</span>
            </div>
            <div className="flex items-center text-slate">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-mono text-sm">Remote worldwide</span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-primary border border-secondary/30 rounded-lg">
            <h3 className="text-xl font-semibold text-text mb-3 text-center">
              Looking for a dedicated engineer?
            </h3>
            <p className="text-slate text-center mb-4">
              I bring senior-level skills at mid-level investment. With experience building 
              production systems from scratch, I can hit the ground running on your team.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-primary rounded-full text-secondary border border-secondary/30">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 bg-primary rounded-full text-secondary border border-secondary/30">
                System Architecture
              </span>
              <span className="px-3 py-1 bg-primary rounded-full text-secondary border border-secondary/30">
                API Design
              </span>
              <span className="px-3 py-1 bg-primary rounded-full text-secondary border border-secondary/30">
                Remote Work
              </span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-secondary transition-all duration-300 p-3 
                         hover:bg-secondary/10 rounded-lg"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Direct Email CTA */}
          <div className="text-center">
            <a
              href="mailto:danielbitengo@gmail.com?subject=Engineering Opportunity"
              className="inline-block px-8 py-3 bg-secondary text-primary font-mono 
                       rounded hover:bg-secondary/90 transition-colors"
            >
              Send Me an Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;