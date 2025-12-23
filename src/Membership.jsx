import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import bg from "./assets/plans-bg.png";

const plans = [
  {
    name: "STARTER",
    from: 4999,
    to: 2999,
    services: [
      "Daily Online Classes",
      "Grammar & Vocabulary",
      "Class Recordings",
      "Certificate of Completion"
    ]
  },
  {
    name: "PROFESSIONAL",
    from: 9999,
    to: 5999,
    services: [
      "Everything in Starter",
      "One-on-One Speaking",
      "Writing Corrections",
      "IELTS/PTE Strategies",
      "Weekend Mock Tests"
    ]
  },
  {
    name: "ELITE",
    from: 25000,
    to: 14999,
    services: [
      "Everything in Professional",
      "Lifetime Community Access",
      "Job Interview Prep",
      "Business English",
      "Soft Skills Training"
    ]
  }
];

export default function SquarefeetPlans() {
  return (
    <section
      className="w-full px-4 py-20 relative lg:min-h-screen bg-cover bg-no-repeat bg-center lg:bg-top"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Blue overlay */}
      <div
        className="absolute inset-0 w-full h-full -z-20"
        style={{ background: "rgba(30, 58, 138, 0.7)" }}
      />
      {/* White overlay */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{ background: "rgba(255,255,255,0.9)" }}
      />

      {/* Header */}
      <header className="mb-16 text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-blue-950">
          Our Learning <span className="text-blue-600">Packages</span>
        </h1>
        <p className="mt-4 text-gray-600 font-medium">Choose a path that fits your goals</p>
      </header>

      {/* Plans in Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col md:flex-row items-stretch justify-center gap-8 relative z-10 max-w-7xl mx-auto"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 flex flex-col hover:border-blue-300 transition-all duration-300"
          >
            {/* Plan Name */}
            <span className="text-sm font-black tracking-[0.2em] text-blue-600 uppercase mb-4">
              {plan.name}
            </span>

            {/* Price */}
            <div className="mb-8">
              <span className="text-gray-400 line-through text-lg">₹{plan.from.toLocaleString()}</span>
              <div className="mt-1">
                <AnimatedNumber from={plan.from} to={plan.to} />
                <span className="text-gray-500 font-medium ml-2">/ course</span>
              </div>
            </div>

            {/* Services */}
            <ul className="space-y-4 mb-8 flex-1">
              {plan.services.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                  <span className="text-blue-600 font-bold">✓</span>
                  {service}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition transform hover:scale-[1.02]">
              Enroll Now
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Confidence para */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 text-center relative z-10"
      >
        <p className="text-xl sm:text-2xl font-bold text-blue-950 leading-relaxed max-w-4xl mx-auto">
          Madurai's Most Trusted English Learning Partner –
          <span className="text-blue-600 font-black ml-2">Global SR Academy</span>.
          Building confidence, fostering excellence, and helping you speak with flair.
        </p>
      </motion.div>
    </section>
  );
}

function AnimatedNumber({ from, to }) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(start + (to - start) * progress);
        setValue(current);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [isInView, from, to]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl font-extrabold !text-black"
    >
      ₹ {value.toLocaleString("en-IN")}
    </span>
  );
}