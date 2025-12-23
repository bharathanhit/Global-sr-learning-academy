import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "🔒 Privacy Policy - Global SR Academy",
      content: [
        "Global SR Academy is committed to protecting the privacy of our students. We only collect necessary information such as name, contact number, and email for enrollment and communication purposes.",
        "Your personal data will never be shared with third parties without your explicit consent.",
        "We use secure systems to store your information and protect it from unauthorized access."
      ],
    },
    {
      title: "📜 Terms & Conditions - Global SR Academy",
      content: [
        "All course materials, recordings, and intellectual property provided by Global SR Academy are for personal use only and cannot be reproduced or distributed without permission.",
        "Course fees once paid are non-refundable, but may be adjusted for future batches under special circumstances at the discretion of the management.",
        "Students are expected to maintain decourm and professionalism during interactive sessions.",
        "The academy is not responsible for any technical issues on the student's end during online classes, though we will provide assistance where possible."
      ],
    },
  ];

  return (
    <div id="/privacypolicy" className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-center text-blue-950 mb-16"
        >
          Privacy & Terms
        </motion.h1>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-50"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                {section.title}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4 font-medium">
                {section.content.map((line, idx) => (
                  <li key={idx} className="leading-relaxed">{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}