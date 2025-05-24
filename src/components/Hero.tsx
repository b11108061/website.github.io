import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            Yao-An Chung
          </h1>
          
          <p className="text-gray-200 text-base sm:text-lg mb-6 tracking-wide font-normal leading-relaxed">
            National Taiwan University of Science and Technology | Department of Business Administration
          </p>
          
          <p className="text-2xl sm:text-3xl text-white mb-10 leading-relaxed font-medium">
            Marketing strategy starts here — with{' '}
            <span className="gradient-text font-bold">curiosity</span>,{' '}
            <span className="gradient-text font-bold">creativity</span>, and{' '}
            <span className="gradient-text font-bold">control</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-3 gradient-bg text-white font-medium rounded-md hover:opacity-90 transition-opacity duration-300 shadow-md"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent text-white font-medium rounded-md border-2 border-white hover:bg-white hover:text-blue-900 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;