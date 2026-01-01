import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import aboutHeroImg from "./assets/hero-academy.png";
import GallerySection from "./Gallery";
import ReviewSection from "./Reviews";

// Import service images
import interactiveImg from "./assets/spoken-english.png";
import coachingImg from "./assets/onlineclass.png";
import onlineImg from "./assets/online.png";
import resultsImg from "./assets/proven.png";
import supportImg from "./assets/hand.png";

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
      title: "💻 Online Classes Available",
      desc: "We also offer highly effective online classes for your convenience. Learn from the comfort of your home with our comprehensive virtual training sessions.",
      img: onlineImg,
    },
    {
      title: "📈 Proven Results",
      desc: "With over a decade of experience, we have helped thousands of students achieve their fluency goals and gain professional confidence.",
      img: resultsImg,
    },

    {
      title: "📅 40 Focused Sessions",
      desc: "Our academy offers a comprehensive program where you can achieve your goals within 40 sessions, which includes both interactive classes for group practice and focused individual sessions for personalized attention.",
      img: coachingImg,
    },
    {
      title: "🤝 Lifetime Support",
      desc: "Our relationship doesn't end with the course. We provide lifetime access to our community and regular alumni catch-up sessions.",
      img: supportImg,
    },
  ];

  const events = [
    {
      title: "Public Speaking Workshop",
      date: "Jan 15, 2024",
      color: "bg-blue-600",
    },
    {
      title: " Mastery Seminar",
      date: "Feb 02, 2024",
      color: "bg-sky-600",
    },
    {
      title: "Annual Alumni Meet",
      date: "Mar 10, 2024",
      color: "bg-blue-800",
    }
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-slate-50 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">


        {/* Why Choose Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-blue-950 mb-6"
          >
            Why Choose <span className="text-blue-600">GLOBAL SR ENGLISH LEARNING ACADEMY?</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-12"></div>
        </div>

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
              <div className="lg:w-5/12 relative group">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="relative w-full h-[250px] sm:h-[300px] object-cover rounded-3xl shadow-2xl transform transition hover:scale-[1.02] duration-500"
                />
              </div>
              <div className="text-left lg:w-7/12">
                <h2
                  className="text-3xl md:text-4xl font-black mb-6 text-blue-950"
                >
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <GallerySection />

        {/* Reviews Section */}
        <ReviewSection />

        {/* Minimal Events Mention */}
        <div className="border-t border-slate-200 pt-20 mt-32 text-center">
          <p className="text-blue-900/60 font-black text-xs uppercase tracking-[0.3em]">
            Future Workshops & Community Events • Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}