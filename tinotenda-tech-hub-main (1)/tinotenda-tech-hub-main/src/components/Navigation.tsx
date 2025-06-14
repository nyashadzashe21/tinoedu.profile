
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Nyasha Ndiripo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {location.pathname === "/" ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("publications")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Publications
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("blogs")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Blogs
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors ${
                    location.pathname === item.path
                      ? "text-blue-600 font-medium"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`w-full h-0.5 bg-slate-600 transition-transform ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-slate-600 transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-slate-600 transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {location.pathname === "/" ? (
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("publications")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Publications
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("blogs")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Blogs
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors ${
                      location.pathname === item.path
                        ? "text-blue-600 font-medium"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
