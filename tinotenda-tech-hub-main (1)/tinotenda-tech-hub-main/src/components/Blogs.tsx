
const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Blogs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Insights, tutorials, and thoughts on engineering, innovation, and building the future.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-12 rounded-xl shadow-xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Blog Posts Coming Soon</h3>
                <p className="text-slate-600 mb-6">
                  I'm preparing to share my engineering journey, technical insights, and lessons learned from building real-world solutions. 
                  Expect deep dives into embedded systems, automation challenges, and startup adventures.
                </p>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium opacity-75 cursor-not-allowed">
                <span>Content In Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
