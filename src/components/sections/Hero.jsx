import { useEffect, useRef } from 'react';

const Hero = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const text = "I architect and ship production systems.";
    let letterIndex = 0;

    const typeLetter = () => {
      if (typedTextRef.current) {
        typedTextRef.current.textContent = text.slice(0, letterIndex + 1);
        letterIndex++;
        if (letterIndex === text.length) {
          clearInterval(typeInterval);
        }
      }
    };

    const typeInterval = setInterval(typeLetter, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-32">
        <div className="space-y-5">
          <p className="text-secondary font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold text-text">
            Daniel Bitengo
          </h1>
          <h2
            ref={typedTextRef}
            className="text-3xl md:text-6xl font-bold text-slate h-[1.5em]"
          ></h2>
          <p className="max-w-xl text-slate text-lg md:text-xl">
            Self-taught software engineer with 2.5 years of experience building 
            production-grade platforms from scratch. I've independently architected 
            and deployed complex systems including an enterprise AI platform and a 
            microservices architecture that would typically require a team of engineers.
          </p>

          <div className="pt-8 space-x-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-6 py-3 border-2 border-secondary text-secondary 
                         font-mono rounded hover:bg-secondary/10 transition-colors"
            >
              View My Work
            </a>
            <a
              href="https://github.com/Dancode-188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-slate text-slate 
                         font-mono rounded hover:bg-slate/10 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;