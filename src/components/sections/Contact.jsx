import { Mail, Github, Linkedin } from 'lucide-react';

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
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-slate text-center max-w-xl mx-auto mb-12">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Contact Links */}
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-secondary transition-colors p-2"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
