
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Nyashadzashe Tinotenda Ndiripo</h3>
            <p className="text-slate-300 mb-6">
              Electrical & Electronics Engineering Student | Innovation Enthusiast
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:nyasha.ndiripo@example.com" className="text-slate-300 hover:text-white transition-colors">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/nyasha-ndiripo" className="text-slate-300 hover:text-white transition-colors">
                💼 LinkedIn
              </a>
              <a href="https://github.com/nyasha-ndiripo" className="text-slate-300 hover:text-white transition-colors">
                💻 GitHub
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-600 pt-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Focus Areas</h4>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>Embedded Systems</li>
                  <li>Renewable Energy</li>
                  <li>Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Technologies</h4>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>C/C++ Programming</li>
                  <li>Arduino & IoT</li>
                  <li>3D Printing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Interests</h4>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>Aerospace Technology</li>
                  <li>Physics Applications</li>
                  <li>Industrial Automation</li>
                </ul>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Nyashadzashe Tinotenda Ndiripo. Building the future through engineering innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
