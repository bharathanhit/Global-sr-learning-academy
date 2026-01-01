import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import bg from "./assets/plans-bg.png";
import { Sparkles, CheckCircle } from "lucide-react";

const plans = [
  {
    name: "LANGUAGE COURSES",
    from: 12000,
    to: 8500,
    registration: 500,
    link: "/library/beginner-course",
    instalments: [
      { label: "1st Instalment", value: "5,100" },
      { label: "2nd Instalment", value: "3,400" }
    ],
    services: [
      "Beginner & Intermediate Levels",
      "Alphabets & Word Mastery",
      "Reading & Pronunciation",
      "Writing & Speaking Basics",
      "Interactive Learning Kits"
    ]
  },
  {
    name: "COMMUNICATIVE ENGLISH THROUGH TAMIL",
    from: 15000,
    to: 9000,
    registration: 500,
    link: "/library/tamil-to-english",
    instalments: [
      { label: "1st Instalment", value: "5,400" },
      { label: "2nd Instalment", value: "3,600" }
    ],
    services: [
      "Spoken English Through Tamil",
      "3624 Sentence Formations",
      "Tense & Grammar Mastery",
      "Real-world Q&A Practice",
      "Professional Fluency"
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
        className="flex flex-col md:flex-row items-stretch justify-center gap-6 relative z-10 max-w-5xl mx-auto"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-80 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-blue-50 flex flex-col hover:border-blue-300 transition-all duration-300 relative group"
          >
            {/* Installment Highlight Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-[9px] font-black px-3 py-1 rounded-full shadow-lg shadow-orange-200 uppercase tracking-tighter whitespace-nowrap z-20 group-hover:scale-110 transition-transform">
              Installment Available
            </div>

            {/* Plan Name */}
            <span className={`text-[10px] font-black tracking-[0.2em] ${plan.link === "/library/beginner-course" ? 'text-sky-600' : 'text-blue-600'} uppercase mb-1`}>
              {plan.name}
            </span>

            {/* Price */}
            <div className="mb-3">
              <span className="text-gray-400 line-through text-sm">₹{plan.from.toLocaleString()}</span>
              <div className="mt-0.5">
                <AnimatedNumber from={plan.from} to={plan.to} />
                <span className="text-gray-500 font-medium text-xs ml-1">/ course</span>
              </div>
            </div>

            {/* Registration Fee */}
            <div className={`mb-4 ${plan.link === "/library/beginner-course" ? 'bg-sky-50/50 border-sky-100/50' : 'bg-blue-50/50 border-blue-100/50'} py-3 px-4 rounded-xl border`}>
              <p className={`text-[9px] font-bold ${plan.link === "/library/beginner-course" ? 'text-sky-600' : 'text-blue-600'} uppercase tracking-widest mb-0.5`}>Registration Fee</p>
              <p className={`text-lg font-black ${plan.link === "/library/beginner-course" ? 'text-sky-900' : 'text-blue-900'}`}>₹{plan.registration}</p>
            </div>

            {/* More Details Button (Primary Action) */}
            <div className="mb-4 flex-1 flex flex-col justify-center">
              <Link
                to={plan.link}
                className={`w-full mx-auto block text-center ${plan.link === "/library/beginner-course" ? 'bg-sky-600 hover:bg-sky-700 shadow-sky-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'} text-white font-black py-2.5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg uppercase tracking-widest text-[9px]`}
              >
                View Full Curriculum
              </Link>
            </div>

            {/* Instalment Plan */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">Instalment Plan</p>
              <div className="grid grid-cols-2 gap-2">
                {plan.instalments.map((inst, i) => (
                  <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center">
                    <span className="text-[8px] font-bold text-slate-500 mb-0.5">{inst.label}</span>
                    <span className="text-sm font-black text-blue-950">₹{inst.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Google Recognition Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center relative z-10 max-w-4xl mx-auto px-4"
      >
        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
          {/* Accent Border */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-sky-400"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="flex-shrink-0 relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-blue-50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Sparkles className="text-blue-600 w-8 h-8 md:w-10 md:h-10 animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full shadow-lg border-2 border-white">
                <CheckCircle size={14} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-blue-600 font-black text-[9px] uppercase tracking-[0.3em] mb-1.5 px-0.5">Academy Excellence</p>
              <h3 className="text-lg md:text-xl font-black text-blue-950 mb-2">
                <span className="text-blue-600">GLOBAL SR</span> ENGLISH LEARNING ACADEMY
              </h3>
              <p className="text-base md:text-lg font-bold text-slate-500 leading-snug">
                Recognized by <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 shadow-sm font-black inline-flex gap-0.5">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span> as the
                <span className="text-blue-900 font-extrabold ml-1.5">Top Educational Institution</span> in Kovaipudur, Coimbatore.
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-1">
              <span className="bg-white text-blue-950 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg border-b-4 border-blue-600 -rotate-3 group-hover:rotate-0 transition-all flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></div>
                </div>
                Google  Ranked
              </span>
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tighter mr-2">Verified Achievement</span>
            </div>
          </div>
        </div>
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