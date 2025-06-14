
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Engineering Innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">My Engineering Journey</h2>
              <p className="text-lg text-slate-600 mb-4">
                I'm Nyashadzashe Tinotenda Ndiripo, an Electrical and Electronics Engineering student 
                currently pursuing my diploma with an insatiable passion for innovation and problem-solving.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                My interests span across multiple engineering disciplines, from embedded systems and 
                automation to renewable energy and aerospace technology. I believe in the power of 
                engineering to solve real-world problems and create a better future.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Electronics & Embedded Systems</h3>
                <p className="text-slate-600">Designing and developing embedded solutions for automation and control systems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Renewable Energy</h3>
                <p className="text-slate-600">Exploring solar energy solutions and sustainable power systems for the future.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Mechatronics & Automation</h3>
                <p className="text-slate-600">Integrating mechanical, electrical, and software systems for intelligent automation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Aeronautics</h3>
                <p className="text-slate-600">Passionate about aerospace technology and flight systems engineering.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">3D Printing & Manufacturing</h3>
                <p className="text-slate-600">Utilizing additive manufacturing for rapid prototyping and custom solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Physics & Hard Tech</h3>
                <p className="text-slate-600">Applying fundamental physics principles to solve complex engineering challenges.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">My Vision</h2>
            <p className="text-lg text-slate-600 text-center leading-relaxed">
              I envision a future where engineering innovation drives sustainable solutions to global challenges. 
              Through my work in embedded systems, renewable energy, and automation, I aim to contribute to 
              technologies that make our world more efficient, sustainable, and connected. Every project I undertake 
              is driven by the desire to solve real-world problems and create meaningful impact.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
