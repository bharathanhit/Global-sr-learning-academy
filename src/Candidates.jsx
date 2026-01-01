import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap, ChevronRight } from 'lucide-react';

// Import ID card images
import id1 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.52 AM.jpeg';
import id2 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.53 AM.jpeg';
import id3 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.53 AM (1).jpeg';
import id4 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.54 AM.jpeg';
import id5 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.54 AM (1).jpeg';

const Candidates = () => {
    const candidateCards = [
        { id: 1, img: id1, name: "Student 1" },
        { id: 2, img: id2, name: "Student 2" },
        { id: 3, img: id3, name: "Student 3" },
        { id: 4, img: id4, name: "Student 4" },
        { id: 5, img: id5, name: "Student 5" },
        // Add more if needed, or repeat for now to fill grid
        { id: 6, img: id1, name: "Student 6" },
        { id: 7, img: id2, name: "Student 7" },
        { id: 8, img: id3, name: "Student 8" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full text-blue-600 text-sm font-black mb-6 border border-blue-600/10"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        VERIFIED CANDIDATES
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-blue-950 mb-6"
                    >
                        Our Global <span className="text-blue-600">Alumni</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Displaying the official identity cards of our successful candidates who have mastered English communication through our academy.
                    </motion.p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {candidateCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group-hover:border-blue-400">
                                {/* Card Image */}
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <img
                                        src={card.img}
                                        alt={card.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                        <div className="flex items-center gap-2 text-white">
                                            <Award className="w-5 h-5 text-blue-400" />
                                            <span className="font-black text-sm uppercase tracking-widest">Certified</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="p-5 flex justify-between items-center bg-white">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Status</span>
                                        <span className="text-sm font-bold text-slate-800">Successfully Completed</span>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Background Glow */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center p-12 rounded-[3rem] bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Join Our Success Stories?</h2>
                        <p className="text-blue-100 mb-10 max-w-xl mx-auto font-medium">
                            Join thousands of students who have transformed their lives through the power of confident English communication.
                        </p>
                        <a
                            href="/apply"
                            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all hover:scale-105 group"
                        >
                            Get Started Now
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    {/* Abstract background shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Candidates;
