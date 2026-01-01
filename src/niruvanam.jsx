import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Niruvanam() {
  // Counter function
  const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl shadow-lg backdrop-blur-md"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-md">
          {count}+
        </h2>
        <p className="text-lg md:text-xl font-bold text-black mt-2">{label}</p>
      </motion.div>
    );
  };

  return (
    <div id="/niruvanam" className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-blue-950 mb-16"
        >
          Our <span className="text-blue-600">Impact</span>
        </motion.h1>

        {/* Grid of Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <Counter target={3} label="Years Experience" />
          <Counter target={100} label="Students Trained" />
          <Counter target={98} label="Success Rate (%)" />
          <Counter target={25} label="Expert Trainers" />
        </div>

        {/* Extra Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-xl md:text-3xl font-bold text-blue-950 max-w-4xl mx-auto leading-relaxed"
        >
          <span className="text-blue-600">GLOBAL SR ENGLISH LEARNING ACADEMY</span> –
          From *Basic Grammar to Professional Eloquence*, we guide you at every step of your language journey.
        </motion.p>
      </div>
    </div>
  );
}