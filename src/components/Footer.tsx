import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">鍾曜安</p>
            <p className="text-gray-400">Marketing Specialist</p>
          </div>
          
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Portfolio</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} 鍾曜安. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;