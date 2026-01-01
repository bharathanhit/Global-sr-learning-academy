import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const AcademyHelpSection = () => {
  const [formData, setFormData] = useState({ name: '', question: '' });
  const [faqs] = useState([
    {
      q: 'What are the batch timings?',
      a: 'Monday - Friday: 9:00 AM – 1:00 PM & 3:00 PM – 8:00 PM | Saturday: 9:00 AM – 1:00 PM & 3:00 PM – 8:00 PM | Sunday: 9:00 AM – 1:00 PM & 3:00 PM – 8:00 PM'
    },
    { q: 'Do you provide  study material?', a: 'Yes, we provide comprehensive study materials, practice tests, and recorded sessions for all our students.' },
    { q: 'Is there a demo class available?', a: 'Absolutely! You can book a free 30-minute orientation session to experience our teaching methodology.' },
    { q: 'Do you offer online classes?', a: 'Yes, we offer live interactive online classes for students who cannot attend our Madurai center.' },
  ]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const message = `Hi, my name is ${formData.name}. I have a query about GLOBAL SR ENGLISH LEARNING ACADEMY: ${formData.question}`;
    const url = `https://wa.me/7339310823?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id='/ask' className="min-h-screen bg-blue-50 text-blue-950 pt-32 px-4 py-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* FAQ Section */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-100">
          <h2 className="text-3xl font-black mb-6 text-blue-950">GLOBAL SR ENGLISH LEARNING ACADEMY - FAQ</h2>
          <p className="text-gray-600 mb-8 font-medium">Quick answers to common questions about our courses and enrollment.</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-blue-50 last:border-0">
                <button
                  className="w-full text-left py-4 font-bold text-blue-900 flex justify-between items-center hover:text-blue-600 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.q}
                  <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pb-4 text-gray-600 font-medium"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ask a Question Form */}
        <div className="bg-blue-600 p-8 md:p-12 rounded-3xl shadow-2xl text-white">
          <h2 className="text-3xl font-black text-center mb-6">Have a Question?</h2>
          <p className="text-blue-100 text-center mb-10 font-medium">Ask us about course details, fee structure, or anything else.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-blue-700/50 text-white border border-blue-400 focus:ring-4 focus:ring-blue-300 outline-none placeholder:text-blue-300 font-medium transition-all"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-sm font-bold mb-2 uppercase tracking-wider">Your Inquiry</label>
              <textarea
                id="question"
                name="question"
                rows="4"
                required
                value={formData.question}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-blue-700/50 text-white border border-blue-400 focus:ring-4 focus:ring-blue-300 outline-none placeholder:text-blue-300 font-medium transition-all"
                placeholder="How can we help you?"
              />
            </div>

            <div className="text-center pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition shadow-xl"
              >
                <FaWhatsapp className="w-6 h-6" />
                Ask on WhatsApp
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AcademyHelpSection;