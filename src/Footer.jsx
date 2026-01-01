import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/global-sr-logo.png'; // Logo
import footerbg from './assets/footer-bg.png'; // Background

export default function Footer() {
  return (
    <footer
      className="relative text-blue-600 pt-24 pb-12 px-6 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      {/* Overlay (increased opacity with blue tint) */}
      <div className="absolute inset-0 bg-blue-200/60"></div>

      {/* Floating Logo (No Border) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src={logo} alt="Company Logo" className="object-contain w-20 h-20 sm:w-24 sm:h-24" />
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 gap-6 sm:gap-10 text-sm text-center sm:text-left">
        {/* Left Column */}
        <div className="space-y-6 col-span-1">
          <div className="space-y-3 text-black drop-shadow-lg">
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-900">About Us</h3>
            <ul className="space-y-1 font-medium">
              <li><Link to="/founder" className="hover:text-blue-700">The Founder</Link></li>
              <li><Link to="/niruvanam" className="hover:text-blue-700">The Academy</Link></li>
              <li><Link to="/#services" className="hover:text-blue-700">Our Courses</Link></li>
              <li><Link to="/#contact" className="hover:text-blue-700">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 col-span-1">
          <div className="space-y-3 text-black drop-shadow-md">
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-900">Support</h3>
            <ul className="space-y-1 font-medium">
              <li><Link to="/ask" className="hover:text-blue-700">FAQs</Link></li>
              <li><Link to="/privacypolicy" className="hover:text-blue-700">Privacy & Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separation Line */}
      <div className="relative z-10 max-w-7xl mx-auto my-8">
        <div className="border-t-2 border-blue-900/20 w-full"></div>
      </div>

      {/* Socials + Slogan */}
      <div className="relative z-10 mt-6 flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-2xl text-blue-900">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition-colors"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube" className="hover:text-blue-600 transition-colors"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="text-blue-950 text-base italic font-bold">
          “Unlock Your Potential Through Communication – GLOBAL SR ENGLISH LEARNING ACADEMY”
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-10 border-t border-blue-900/10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-blue-950 gap-2 px-4 text-center md:text-left font-medium">
        <span>&copy; {new Date().getFullYear()} GLOBAL SR ENGLISH LEARNING ACADEMY. All rights reserved.</span>
        <span>Premium Learning <span className="text-blue-600">♥</span> Experience</span>
      </div>
    </footer>
  );
}