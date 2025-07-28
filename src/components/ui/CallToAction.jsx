import { ArrowRight } from 'lucide-react';

const CallToAction = ({ title, description, buttonText, buttonHref, isExternal = false }) => {
  const handleClick = (e) => {
    if (!isExternal && buttonHref.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(buttonHref);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg p-8 border border-secondary/30">
      <h3 className="text-2xl font-bold text-text mb-3">{title}</h3>
      <p className="text-slate mb-6">{description}</p>
      <a
        href={buttonHref}
        onClick={handleClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex items-center px-6 py-3 bg-secondary text-primary font-mono 
                 rounded hover:bg-secondary/90 transition-all duration-300 group"
      >
        {buttonText}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default CallToAction;