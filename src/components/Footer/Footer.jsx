import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">EZ Labs</h3>
          <p className="text-gray-400 mb-6">
            Building the future of digital experiences
          </p>
          <div className="flex justify-center space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400">
              &copy; 2024 EZ Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;