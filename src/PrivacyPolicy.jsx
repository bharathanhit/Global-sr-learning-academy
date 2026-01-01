import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "🔒 Privacy Policy",
      content: [
        "• GLOBAL SR ENGLISH LEARNING ACADEMY is committed to protecting the privacy of our students. We only collect necessary information such as name, contact number, and email for enrollment and communication purposes.",
        "• Your personal data will never be shared with third parties without your explicit consent.",
        "• We use secure systems to store your information and protect it from unauthorized access."
      ],
    },
    {
      title: "📜 Terms & Conditions",
      content: [
        "1. The completed admission form along with the copies of Aadhar card, registration fee, course fee and Link fee for Online candidates and courier charges (All these amounts are non-refundable) must be submitted to the GLOBAL SR ENGLISH LEARNING ACADEMY.",
        "2. All the course materials and free books are issued by the GLOBAL SR ENGLISH LEARNING ACADEMY and these study materials are provided to the Candidates will be for his/her use only. The applicant, agree not to distribute or reproduce this course material, in any form or manner.",
        "3. Places for study at GLOBAL SR ENGLISH LEARNING ACADEMY will be licensed to only 5 applicants per batch. Early applicants will be given priority when registering.",
        "4. GLOBAL SR ENGLISH LEARNING ACADEMY will not compensate such candidates in any form or manner if candidates miss classes without prior notice (one day before or 2 hours before) or take leave for more than 20 classes.",
        "5. GLOBAL SR ENGLISH LEARNING ACADEMY operates on all days. The Academy reserves the right to suspend, postpone or reschedule classes for any reason. In such a situation, the Academy will provide alternative course hours to the candidates at the same level.",
        "6. The duration of each course at GLOBAL SR ENGLISH LEARNING ACADEMY is 40 hours i.e 40 Classes (which is within 10 months) and if the applicants don’t complete or can’t complete the course within 40 hours, the course can be continued for a few days, weeks or months at the option or discretion of the applicant. Appropriate fees will be charged accordingly.",
        "7. GLOBAL SR ENGLISH LEARNING ACADEMY has 4 parts (Listening, Writing, Reading and Speaking) for each course. Candidates can choose the next course only if they pass each part. If the grade (average) is low in any part of it, it will not be accepted without Re – Evaluation. The appropriate fee for Re – Evaluation should be paid to GLOBAL SR ENGLISH LEARNING ACADEMY.",
        "8. Fees vary depending on the course of the applicant. Registration fee and course fee (non-refundable) are payable for each course at GLOBAL SR ENGLISH LEARNING ACADEMY. You can pay instantly or pay in instalments for each course. Instalment payers have to pay on their due date. Candidates are requested to pay the course fee along with penalty if they fail to pay the course fee on due date."
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
              <ul className="list-none text-gray-700 space-y-4 font-medium">
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