import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Amazing
            <span className="text-primary-500 block">Digital Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            You are the first to be able to get your home page in order to help you reach your home page.
            You are the first to be able to get your home page in order to help you reach your home page.
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Previous Search</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Onlook', 'Search', 'Search', 'Search'].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border"
                >
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Go on a demo
            </button>
            <button className="btn-secondary">
              App Store
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-colors duration-200">
              Home Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;