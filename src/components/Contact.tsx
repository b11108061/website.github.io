import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Phone, ArrowUpCircle, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB] overflow-hidden">
      <div
        ref={contactRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold inline-block border-b-4 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
            Get In Touch
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-10">
            <div className="space-y-3 text-left">
              <p className="text-2xl font-extrabold text-gray-900">
                Interested in my resume?
              </p>
              <p className="text-2xl font-extrabold text-gray-900">
                Have any questions?
              </p>
              <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Leave your contact information below — I'll respond as soon as I can!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-500" />
                <p className="text-gray-900 font-semibold">anita690719@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-500" />
                <p className="text-gray-900 font-semibold">0905586285</p>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6 text-blue-500" />
                <p className="text-gray-900 font-semibold break-words">linkedin.com/in/chenxf123</p>
              </div>

              {/* Additional Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <p className="text-gray-700">Location: Taipei, Taiwan</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <p className="text-gray-700">Response Time: 9:00-12:00, 13:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {messageSent && (
              <div className="text-green-500 text-center font-bold mt-6 animate-fadeIn">
                Message Sent Successfully!
              </div>
            )}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-xl font-bold">
            Thank you for visiting. I look forward to connecting and exploring how strategic marketing can drive meaningful growth.
          </p>
        </div>

        {/* Back to Top Button */}
        {showScrollTop && (
          <div className="flex justify-center mt-10 animate-fadeIn">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300"
            >
              <ArrowUpCircle className="w-5 h-5" />
              <span>Back to Top</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;