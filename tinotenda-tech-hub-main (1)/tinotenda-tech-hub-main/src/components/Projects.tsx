
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Here are some of the systems, circuits, and ideas I've been working on.
              Each one is a step toward solving real-world problems with smart engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform group">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src="/lovable-uploads/84646907-5e8e-4dfa-b80f-54440a88fcc7.png"
                  alt="Solar Energy Project"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Solar Energy Systems</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Working with renewable energy solutions and solar panel installations. 
                Exploring efficient energy conversion and sustainable power systems for real-world applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-sm font-medium">
                  Solar Energy
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                  Renewable Tech
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium">
                  Power Systems
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/lovable-uploads/035421d7-c029-4ac3-b293-8fa7cc19245c.png"
                  alt="Hard Things About Hard Things"
                  className="w-32 h-40 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Building Hard Things</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Currently developing exciting projects in embedded systems, automation, and mechatronics. 
                Focused on solving the hard problems that matter — the ones that require real engineering innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium">
                  In Development
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium">
                  Hard Tech
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Let's Build Something Together</h3>
              <p className="text-slate-600 mb-6">
                I'm always excited to collaborate on engineering projects and explore new challenges. 
                Have an idea or need help with a technical solution?
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
