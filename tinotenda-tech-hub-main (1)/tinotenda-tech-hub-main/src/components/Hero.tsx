
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img
              src="/lovable-uploads/60fb98f4-9aaa-4ae7-9dbb-b77cf77107f2.png"
              alt="Nyashadzashe Tinotenda Ndiripo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-200 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Nyashadzashe Tinotenda Ndiripo
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-300">
            I'm an aspiring engineer driven by curiosity, creativity, and the desire to solve real-world problems.
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100 animate-fade-in delay-400">
            I specialize in embedded systems, automation, solar energy, and hard tech, and I'm passionate about 
            building the future — one system at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-800 transition-all transform hover:scale-105 font-medium shadow-lg backdrop-blur-sm"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-purple-300 rounded-full animate-pulse opacity-40 animation-delay-3000"></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
