import React from 'react';
import { motion } from 'framer-motion';
import heroImage from './assets/hero-academy.png';
import heroImageLarge from './assets/hero-academy.png';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex  bg-white/80 items-end justify-center  relative">
      <picture>
        <source srcSet={heroImageLarge} media="(min-width: 1024px)" />
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto  object-cover absolute inset-0 z-0 "
        />
      </picture>

      <motion.div
        className="relative z-10 bg-white/40 backdrop-blur-md rounded-2xl bottom-19 p-8 max-w-2xl shadow-2xl text-black mb-16 border border-white/30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-5xl font-black mb-4 text-blue-950 leading-tight">
          Master English, <br />
          <span className="text-blue-600">Shape Your Future!</span>
        </h1>
        <p className="text-lg mb-6 font-medium text-gray-800">
          Global SR English Learning Academy – Empowering you with flawless communication, professional confidence, and world-class language skills.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
            Enroll Now
          </button>
          <button className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">
            Our Courses
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;