
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-200">
              A visual journey through my engineering projects and innovations.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-xl shadow-xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Gallery Coming Soon</h3>
                <p className="text-slate-600 mb-6">
                  I'm building an impressive collection of project photos, prototypes, and engineering moments. 
                  The gallery will showcase the journey from concept to creation across all my engineering disciplines.
                </p>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium opacity-75 cursor-not-allowed">
                <span>Building Collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
