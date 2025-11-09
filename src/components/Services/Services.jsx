import React from 'react';

const Services = () => {
  const services = [
    "On/over / Fun production",
    "On/over / Running",
    "On/over / Art Curation",
    "On/over / Aware",
    "On/over / Builder",
    "On/over / Filters",
    "On/over / Logo"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services & Productions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 hover:border-primary-500"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;