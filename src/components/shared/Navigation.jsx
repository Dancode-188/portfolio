import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-sm transition-shadow duration-300 hidden md:block ${
          isScrolled ? 'shadow-lg shadow-primary/50' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              className="text-xl font-bold text-text hover:text-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              Daniel Bitengo
            </a>

            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    activeSection === item.href.slice(1)
                      ? 'text-secondary'
                      : 'text-slate'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div
          className={`fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-sm transition-shadow duration-300 ${
            isScrolled ? 'shadow-lg shadow-primary/50' : ''
          }`}
        >
          <div className="flex justify-between items-center h-16 px-6">
            <a
              href="#home"
              className="text-lg font-bold text-text hover:text-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              DB
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-sm">
            <div className="flex flex-col pt-20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-6 py-4 text-lg font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-secondary bg-primary/50'
                      : 'text-slate hover:text-secondary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
