
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/lovable-uploads/38d29c12-7267-4083-ae03-9d57210d543b.png"
                alt="Nyashadzashe working on engineering projects"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">My Engineering Journey</h3>
              <p className="text-lg text-slate-600 mb-4">
                I'm an Electrical and Electronics Engineering student with a builder's mindset.
                From circuits to code, from machines to systems — I love creating things that work and solve real challenges.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                I believe engineering is more than a job — it's a tool to invent, improve, and empower.
                I'm currently building my own projects, learning as I go, and preparing to launch my own startup and real-world solutions.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">My interests span across:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`
                  }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Embedded Systems & Microcontrollers</h4>
                  <p className="text-slate-600">Building intelligent systems that bridge the physical and digital worlds.</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`
                  }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Mechatronics & Automation</h4>
                  <p className="text-slate-600">Creating automated solutions that enhance efficiency and productivity.</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-35"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`
                  }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Power Systems & Solar Energy</h4>
                  <p className="text-slate-600">Developing sustainable energy solutions for a cleaner future.</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`
                  }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Machining & Manufacturing</h4>
                  <p className="text-slate-600">Precision engineering and fabrication of mechanical components.</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`
                  }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">3D Printing & Robotics</h4>
                  <p className="text-slate-600">Rapid prototyping and autonomous systems development.</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`
                  }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Hard Tech Innovation</h4>
                  <p className="text-slate-600">Pushing the boundaries of what's possible with technology.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <img
                src="/lovable-uploads/959bc098-ce1a-4297-a85b-5a11f9998609.png"
                alt="Zero to One - Building the Future"
                className="w-48 h-64 mx-auto mb-6 rounded-lg shadow-lg object-cover"
              />
              <p className="text-lg text-slate-700 italic">
                "The future belongs to those who build it, one innovation at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
