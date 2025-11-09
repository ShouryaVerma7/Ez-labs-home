import React from 'react';

const About = () => {
  const features = [
    {
      title: "About Team",
      description: "More info and API integration with modern solutions",
      items: ["Go on a demo", "App Store", "Home Page"]
    },
    {
      title: "Open Navigation",
      description: "How is this point of view? Explore our perspectives",
      items: ["Go on a demo", "App Store", "Home Page"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;