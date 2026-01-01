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
      title: "🗣️ English through Tamil",
      desc: (
        <>
          Our unique teaching methodology helps you learn{" "}
          <span className="text-blue-600 font-black">
            English effortlessly through Tamil
          </span>
          , ensuring a comfortable transition and deep understanding of the language.
        </>
      ),
      img: interactiveImg,
    },
    {
      title: "✍️ Simple Grammar & Vocab",
      desc: (
        <>
          Forget complex rules. We teach{" "}
          <span className="text-blue-600 font-black">Grammar</span> in a simple,
          practical way and focus on massive{" "}
          <span className="text-blue-600 font-black">Vocabulary building</span>{" "}
          to help you form sentences with confidence.
        </>
      ),
      img: coachingImg,
    },
    {
      title: "📚 Mastery in LRWS",
      desc: (
        <>
          Achieve balanced fluency with all-around training in{" "}
          <span className="text-blue-600 font-black">
            Listening, Reading, Writing
          </span>{" "}
          and <span className="text-blue-600 font-black">Speaking</span>
          —the four core pillars of globally recognized language proficiency.
        </>
      ),
      img: resultsImg,
    },
    {
      title: "💼 Professional GD & Interviews",
      desc: (
        <>
          Stand out in your career with specialized{" "}
          <span className="text-blue-600 font-black">
            Group Discussion (GD)
          </span>{" "}
          and <span className="text-blue-600 font-black">Interview training</span>
          . We prepare you to face corporate challenges with poise and fluency.
        </>
      ),
      img: supportImg,
    },
    {
      title: "🔍 Live Professional Evaluation",
      desc: (
        <>
          Benefit from 'Live' practice sessions and evaluations by external
          experts. We provide both{" "}
          <span className="text-blue-600 font-black">
            Internal & External Evaluation
          </span>{" "}
          with real-time feedback and questions.
        </>
      ),
      img: coachingImg,
    },
    {
      title: "📅 40 Focused Sessions",
      desc: (
        <>
          Our academy offers a comprehensive program where you can achieve your
          goals{" "}
          <span className="text-blue-600 font-black">within 40 sessions</span>,
          which includes both{" "}
          <span className="text-blue-600 font-black">interactive classes</span>{" "}
          for group practice and{" "}
          <span className="text-blue-600 font-black">
            focused individual sessions
          </span>{" "}
          for personalized attention.
        </>
      ),
      img: coachingImg,
    },
    {
      title: "🎯 Personalized Training Sessions",
      desc: (
        <>
          Get individual attention with{" "}
          <span className="text-blue-600 font-black">
            one-on-one training sessions
          </span>{" "}
          tailored to your specific pace. Our instructors focus solely on your
          growth, identifying areas for improvement and providing instant
          correction.
        </>
      ),
      img: interactiveImg,
    },
    {
      title: "⏰ Flexible Batches",
      desc: (
        <>
          Study at your convenience with{" "}
          <span className="text-blue-600 font-black">
            Monday to Friday batches
          </span>{" "}
          or <span className="text-blue-600 font-black">Weekend Classes</span>.
          We offer flexible timings and track daily attendance to ensure
          consistent progress.
        </>
      ),
      img: onlineImg,
    },
    {
      title: "🏆 100% Success Guarantee",
      desc: (
        <>
          We stand by our results with a{" "}
          <span className="text-blue-600 font-black">
            100% success guarantee
          </span>
          . Upon completion, you'll receive{" "}
          <span className="text-blue-600 font-black">
            official certification
          </span>{" "}
          that validates your new-found fluency and professional communication
          skills.
        </>
      ),
      img: resultsImg,
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