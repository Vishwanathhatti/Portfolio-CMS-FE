const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="navy-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">VH</span>
              </div>
              <span className="text-xl font-bold">Vishwanath</span>
            </div>
            <p className="text-sm opacity-80">
              Full-Stack Developer based in Pune, passionate about building scalable web applications and delivering efficient solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full-Stack Solutions</li>
              <li>API Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Pune, Maharashtra</li>
              <li>+91-8552866007</li>
              <li>vhatti14@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Vishwanath Hatti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
