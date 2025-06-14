
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore my engineering projects spanning embedded systems, automation, renewable energy, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Embedded Systems Project"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Embedded Control System</h3>
              <p className="text-slate-600 mb-4">
                Automated control system using microcontrollers for industrial applications with real-time monitoring.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">C/C++</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Arduino</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">IoT</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Solar Energy Project"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Solar Power Optimizer</h3>
              <p className="text-slate-600 mb-4">
                Smart solar panel tracking system with maximum power point tracking for enhanced energy efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Solar</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Renewable</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Control</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Automation Project"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Home Automation Hub</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive home automation system with mobile app control and AI-powered scheduling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">IoT</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mobile</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">AI</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">More Projects Coming Soon</h2>
            <p className="text-slate-600 mb-6">
              I'm constantly working on new engineering challenges and innovative solutions. 
              Check back regularly to see my latest projects in embedded systems, automation, and renewable energy.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <span>View on GitHub</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
