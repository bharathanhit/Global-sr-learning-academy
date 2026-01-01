import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, Calendar, X } from 'lucide-react';
import heroImage from './assets/logo.png';
import iafLogo from './assets/IAF.png';
import govLogo from './assets/government.png';
import msmeLogo from './assets/msme.png';
import isbnLogo from './assets/isbn.jpg';
import leftWing from './assets/leftwing.png';
import rightWing from './assets/rightwing.png';

// Import KG Award Images
import kg1 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.49 PM.jpeg';
import kg2 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.50 PM (1).jpeg';
import kg3 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.50 PM.jpeg';
import kg4 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.52 PM (1).jpeg';
import kg5 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.52 PM.jpeg';
import kg6 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.53 PM (1).jpeg';
import kg7 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.53 PM.jpeg';
import kg8 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.54 PM (1).jpeg';
import kg9 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.54 PM.jpeg';

const kgImages = [kg1, kg2, kg3, kg4, kg5, kg6, kg7, kg8, kg9];
const Hero = () => {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);

  return (
    <section className="w-full min-h-screen flex items-center bg-white pt-20 px-4 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        {/* Left Side: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left z-10 flex flex-col justify-center items-center md:items-start order-2 md:order-1 md:-translate-x-8 lg:-translate-x-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Container for Badge Row */}
          <div className="flex flex-col items-center justify-center md:justify-start mb-8 w-full">

            {/* Government Recognition Badge (The Box) */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 bg-green-50/90 backdrop-blur-md border border-green-200/70 px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">

              {/* Col 1: Big Government Image */}
              <div className="flex-shrink-0">
                <img src={govLogo} alt="Government of India Logo" className="w-20 h-20 object-contain drop-shadow-sm filter hover:brightness-110 transition-all" />
              </div>

              {/* Divider (Hidden on Mobile) */}
              <div className="hidden sm:block w-px h-16 bg-green-900/10 mx-0"></div>

              {/* Col 2: Details (Govt Text, MSME Logo, ISBN) */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                <p className="text-sm sm:text-base font-bold text-green-700 leading-tight tracking-tight">Registered by Govt. of India</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1 -ml-1">
                  <img src={msmeLogo} alt="MSME Logo" className="h-6 object-contain" />
                  <p className="text-xs sm:text-sm font-black text-green-700 leading-tight">- TN - 03-0071589</p>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 -ml-1">
                  <img src={isbnLogo} alt="ISBN Logo" className="h-6 object-contain" />
                  <p className="text-xs sm:text-sm font-black text-green-700 leading-tight">international standrad book number</p>
                </div>
              </div>

              {/* Divider (Hidden on Mobile) */}
              <div className="hidden sm:block w-px h-16 bg-green-900/10 mx-0"></div>

              {/* Col 3: IAF & ISO Certification */}
              <div className="flex items-center gap-3">
                <img src={iafLogo} alt="IAF Logo" className="w-14 h-14 object-contain drop-shadow-sm" />
                <div className="flex flex-col items-start translate-y-0.5">
                  <p className="text-sm font-black text-green-700 leading-none">ISO</p>
                  <p className="text-xs font-bold text-green-700 leading-tight">9001:2015</p>
                </div>
              </div>
            </div>

          </div>


          <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-blue-950 leading-[1.1] px-2 md:px-0">
            Getting <span className="text-blue-600">Quality Education</span> Is Now More <span className="text-blue-600">Easy</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-1xl text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed px-2 md:px-0">
            <span className="text-green-700 font-black">GLOBAL SR ENGLISH LEARNING ACADEMY</span> – Empowering you with flawless communication,
            professional confidence, and world-class language skills.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <Link to="/certificates" className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-3 text-sm xs:text-base sm:px-10 sm:py-4 sm:text-base rounded-lg sm:rounded-xl font-black hover:bg-blue-50 transition shadow-lg transform hover:-translate-y-1">
              Profile
            </Link>
            <Link to="/founder" className="bg-blue-600 text-white px-6 py-3 text-sm xs:text-base sm:px-10 sm:py-4 sm:text-base rounded-lg sm:rounded-xl font-black hover:bg-blue-700 transition shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
              Founder
            </Link>
          </div>
        </motion.div>

        {/* Middle Awards Section - Now between Text and Logo on Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col gap-8 items-center justify-center z-10 order-3 md:order-2 md:-translate-x-16 lg:-translate-x-24"
        >
          {/* Award 1: KG Award */}
          <div className="flex items-center gap-1 group cursor-default">
            <img src={leftWing} alt="Left Wing" className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:-rotate-6" />
            <div className="text-center flex flex-col items-center -mx-4 mb-2 min-w-[120px] lg:min-w-[140px]">
              <p className="text-[11px] lg:text-[13px] font-black text-blue-900 uppercase tracking-widest mb-1">kg Award</p>
              <p className="text-[9px] lg:text-[11px] font-bold text-gray-500 leading-tight max-w-[100px] lg:max-w-[120px]">Best-women Led<br />Education Institutions</p>
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="mt-3 text-[9px] lg:text-[11px] font-bold text-white bg-blue-600 px-4 py-1.5 lg:px-5 lg:py-2 rounded-xl hover:bg-blue-700 transition shadow-lg active:scale-95 whitespace-nowrap"
              >
                View Photos
              </button>
            </div>
            <img src={rightWing} alt="Right Wing" className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:rotate-6" />
          </div>

          {/* Award 2: International Award */}
          <div className="flex items-center gap-1 group cursor-default">
            <img src={leftWing} alt="Left Wing" className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:-rotate-6" />
            <div className="text-center flex flex-col items-center -mx-4 mb-2 min-w-[120px] lg:min-w-[140px]">
              <p className="text-[11px] lg:text-[13px] font-black text-blue-900 uppercase tracking-widest mb-1">International Award</p>
              <p className="text-[9px] lg:text-[11px] font-bold text-gray-500 leading-tight max-w-[100px] lg:max-w-[120px]">International<br />Innovation Award</p>
              <div className="mt-4 px-2 py-0.5 lg:px-3 lg:py-1 bg-yellow-400/10 rounded-full border border-yellow-400/20">
                <span className="text-[9px] lg:text-[10px] font-black text-yellow-600 tracking-tighter uppercase whitespace-nowrap">Global Recognition</span>
              </div>
            </div>
            <img src={rightWing} alt="Right Wing" className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:rotate-6" />
          </div>
        </motion.div>

        {/* Right Side: Circular Image with Abstract elements */}
        <motion.div
          className="w-full md:w-1/3 relative flex justify-center items-center order-1 md:order-3 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Circular Rings - Hidden on very small screens to save space if needed, or kept small */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border-[1px] border-blue-200 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border-[1px] border-blue-20 rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>

          {/* Premium Floating Dot Grid Patterns */}
          <motion.div
            className="absolute -top-20 -right-16 w-32 h-32 sm:w-64 sm:h-64 opacity-90 -z-10"
            style={{ backgroundImage: 'radial-gradient(#2563eb 4px, transparent 4px)', backgroundSize: '15px 15px' }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-16 w-32 h-32 sm:w-64 sm:h-64 opacity-50 -z-10"
            style={{ backgroundImage: 'radial-gradient(#2563eb 4px, transparent 4px)', backgroundSize: '15px 15px' }}
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
              scale: [1, 1.05, 1],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Main Image Container */}
          <div className="relative z-10 w-[220px] h-[220px] xs:w-[250px] xs:h-[250px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[450px] lg:h-[450px] md:translate-x-12">
            <div className="w-full h-full overflow-hidden shadow-none bg-transparent relative group flex justify-center items-center">
              <img
                src={heroImage}
                alt="GLOBAL SR ENGLISH LEARNING ACADEMY Logo"
                title="GLOBAL SR ENGLISH LEARNING ACADEMY"
                className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500 ease-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsGalleryOpen(false)}
          >
            <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>

              <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                <h3 className="text-lg font-bold text-blue-900">KG Award Ceremony Photos</h3>
                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="p-2 hover:bg-red-100 rounded-full text-red-500 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-slate-100">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {kgImages.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                    >
                      <img src={img} alt={`Award Photo ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
