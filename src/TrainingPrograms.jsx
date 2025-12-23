import React from "react";
import { motion } from "framer-motion";

// Import service images
import interactiveImg from "./assets/spoken-english.png";
import coachingImg from "./assets/hero-academy.png";
import resultsImg from "./assets/ielts-coaching.png";
import hybridImg from "./assets/plans-bg.png";
import supportImg from "./assets/contact-bg.png";

export default function AboutUs() {
  const services = [
    {
      title: "🗣️ Interactive Learning",
      desc: "Our sessions are designed to be highly interactive, ensuring you speak and practice more than just listening. We believe in learning by doing.",
      img: interactiveImg,
    },
    {
      title: "🎯 Personalised Coaching",
      desc: "Every student's journey is unique. We provide individual attention and tailored feedback to help you overcome your specific challenges.",
      img: coachingImg,
    },
    {
      title: "📈 Proven Results",
      desc: "With over a decade of experience, we have helped thousands of students achieve their dream scores in IELTS/PTE and gain professional confidence.",
      img: resultsImg,
    },
    {
      title: "💻 Hybrid Learning",
      desc: "Access our classes from anywhere. We offer both offline and online sessions with recorded lectures for your convenience.",
      img: hybridImg,
    },
    {
      title: "🤝 Lifetime Support",
      desc: "Our relationship doesn't end with the course. We provide lifetime access to our community and regular alumni catch-up sessions.",
      img: supportImg,
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-8 text-blue-950"
        >
          Why Choose <span className="text-blue-600">Global SR Academy?</span>
        </motion.h1>

        {/* Intro Para */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto mb-20 leading-relaxed font-medium"
        >
          We are dedicated to bridging the communication gap. Whether it's for
          <span className="text-blue-700 font-bold"> career growth</span>,
          <span className="text-blue-700 font-bold"> higher education</span>, or
          <span className="text-blue-700 font-bold"> personal development</span>, we provide
          the ultimate platform to master the English language.
        </motion.p>

        {/* Services Section */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl transform transition hover:scale-[1.02] duration-500"
                />
              </div>
              <div className="text-left lg:w-1/2">
                <h2
                  className="text-3xl md:text-4xl font-black mb-6 text-blue-950"
                >
                  {service.title}
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium"
                >
                  {service.desc}
                </p>
                <button className="mt-8 text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}