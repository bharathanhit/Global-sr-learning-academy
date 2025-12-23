import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Import your local assets from /assets
import card1d1 from "./assets/spoken-english.png";
import card22 from "./assets/ielts-coaching.png";
import card32 from "./assets/hero-academy.png"; // Reusing hero image for Soft Skills for now

const Services = () => {
  const navigate = useNavigate();

  // ✅ Local static data with hashtags
  const services = [
    {
      title: "Spoken English",
      images: [card1d1],
      items: ["Basic to Advanced Levels", "Grammar & Vocabulary", "Daily Practice Sessions"],
      button: "Learn More",
      hashtag: "spokenenglish",
    },
    {
      title: "IELTS & PTE Coaching",
      images: [card22],
      items: ["Expert Training", "Mock Tests", "Individual Feedback"],
      button: "Explore",
      hashtag: "ielts_pte",
    },
    {
      title: "Soft Skills & Communication",
      images: [card32],
      items: ["Public Speaking", "Confidence Building", "Professional Grooming"],
      button: "Get Started",
      hashtag: "softskills",
    },
  ];

  const [imageIndexes, setImageIndexes] = useState(
    services.map(() => 0) // index for each service
  );

  const handleSlide = (serviceIndex, direction) => {
    setImageIndexes((prev) => {
      const newIndexes = [...prev];
      const total = services[serviceIndex].images.length;
      if (total > 0) {
        newIndexes[serviceIndex] =
          (newIndexes[serviceIndex] + direction + total) % total;
      }
      return newIndexes;
    });
  };

  return (
    <section id="services" className="relative py-12 px-4">
      {/* ✅ semi-transparent overlay */}
      <div className="absolute inset-0 bg-slate-50/90 -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl text-blue-950 font-black mb-12">
          Our Premium Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col"
            >
              <img
                src={
                  service.images.length > 0
                    ? service.images[imageIndexes[index]]
                    : "https://via.placeholder.com/400x300?text=No+Image"
                }
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="flex justify-center gap-2 mt-1">
                <button
                  onClick={() => handleSlide(index, -1)}
                  className="text-white bg-black bg-opacity-40 px-2 py-1 rounded hover:bg-opacity-70"
                >
                  ‹
                </button>
                <button
                  onClick={() => handleSlide(index, 1)}
                  className="text-white bg-black bg-opacity-40 px-2 py-1 rounded hover:bg-opacity-70"
                >
                  ›
                </button>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate(`/instagram?tag=${service.hashtag}`)}
                  className="mt-4 w-fit bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white text-sm px-4 py-2 rounded-full flex items-center gap-1 
                             hover:scale-105 transition-transform"
                >
                  {service.button}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;