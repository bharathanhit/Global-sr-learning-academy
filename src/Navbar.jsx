import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import {
  Home,
  LayoutGrid,
  Tag,
  Phone,
  User,
  Users,
  MessageCircle,
  X,
  Menu,
  Shield,
  Calendar
} from 'lucide-react';
import logo from './assets/global-sr-logo.png';
import logoText from './assets/logotext.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNavigatingRef = useRef(false);

  // Close menu when route changes
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Only close if we are NOT currently navigating via a link click
      if (isOpen && !isNavigatingRef.current) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleNavClick = () => {
    // Set flag to true to ignore the immediate scroll event triggered by hash navigation
    isNavigatingRef.current = true;

    // Reset flag after animation/scroll settling time (approx 1s)
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1000);
  };

  const menuItems = [
    { title: 'Home', path: '/#home', icon: Home },
    { title: 'Services', path: '/#services', icon: LayoutGrid },
    { title: 'Pricing', path: '/#pricing', icon: Tag },
    { title: 'Apply Demo', path: '/apply', icon: Calendar },
    { title: 'Founder', path: '/founder', icon: User },
    { title: 'Staff', path: '/staff', icon: Users },
    { title: 'Candidates', path: '/candidates', icon: FaGraduationCap },
    { title: 'Ask Question', path: '/ask', icon: MessageCircle },
    { title: 'Contact', path: '/#contact', icon: Phone },
    { title: 'Admin', path: '/admin', icon: Shield },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/20  backdrop-blur-lg shadow-md border-b border-white/20 dark:border-white/10 ${isOpen ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex justify-between h-12 items-center">
            <Link to="/" className="flex items-center space-x-0 z-50">
              <img src={logo} alt="GLOBAL SR ENGLISH LEARNING ACADEMY Logo" className="h-9 w-auto sm:h-12" />
              <img src={logoText} alt="GLOBAL SR ENGLISH LEARNING ACADEMY" className="h-6 w-auto sm:h-10" />
            </Link>

            <div className="hidden font-semibold md:flex space-x-4">
              {menuItems.map((item) => (
                <Link key={item.title} to={item.path} className="text-blue-900 hover:text-blue-400">
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-900 focus:outline-none p-2"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-[#003366]" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>


            {/* Menu Panel - W-[55%] H-[65%] (Slide in from Right) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-[70] w-[55%] h-[78%] max-w-[320px] bg-black/40 backdrop-blur-3xl border-l border-b border-white/10 shadow-2xl md:hidden flex flex-col rounded-bl-3xl"
            >
              {/* Logo in Full Width White Header Bar */}
              <div className="absolute top-0 left-0 right-0 z-20">
                <div className="bg-white w-full px-6 py-4 flex items-center gap-2 shadow-md">
                  <img src={logo} alt="Logo" className="h-10 w-auto" />
                  <img src={logoText} alt="GLOBAL SR ENGLISH LEARNING ACADEMY" className="h-6 w-auto" />
                </div>
              </div>

              {/* Close Button - Absolute Top Right Corner */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 z-30 p-3 text-blue-900 hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Menu Items Container - With top padding to avoid header overlap */}
              <div className="flex-1 flex flex-col justify-start px-6 space-y-4 pt-28 overflow-y-auto pb-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="shrink-0"
                  >
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 group py-1"
                      onClick={handleNavClick}
                    >
                      <item.icon className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-medium text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all">
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Removed Purple Gradient Overlay */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;