
const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Research papers, articles, and technical writings on engineering innovations.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-12 rounded-xl shadow-xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Publications Coming Soon</h3>
                <p className="text-slate-600 mb-6">
                  I'm currently working on documenting my engineering research and innovations. 
                  Stay tuned for upcoming publications on embedded systems, automation, and renewable energy solutions.
                </p>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium opacity-75 cursor-not-allowed">
                <span>Research In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
