const Footer = () => {
    return (
      <footer className="py-6 bg-primary border-t border-slate/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-slate text-sm text-center">
              Designed & Built by Daniel Bitengo
            </p>
            <p className="text-slate/60 text-xs">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;