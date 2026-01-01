import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import founderImg from './assets/founder-img.png';

const DemoPromotion = () => {
    return (
        <section className="py-16 px-0 md:px-6 relative overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 z-0"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-none md:rounded-[2.5rem] px-4 py-8 md:p-12 shadow-xl border-y md:border border-blue-200/50 relative overflow-hidden group">
                    {/* Animated Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Founder Card - Now on the Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full"
                        >
                            <div className="relative z-10 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-center gap-4 border-b border-blue-100 pb-4">
                                        <div className="w-full max-w-[180px] h-auto rounded-2xl overflow-hidden border-2 border-blue-600 p-0.5 shadow-lg flex-shrink-0">
                                            <img
                                                src={founderImg}
                                                alt="Founder"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                        <div className="text-center pt-2">
                                            <p className="text-blue-600 font-extrabold text-xl mb-1">Dr. T. Sheela MBA., M. Phil</p>
                                            <p className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em]">Founder & Administrator</p>
                                            <div className="w-12 h-1 bg-blue-100 mx-auto mt-4 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            "Personalized Assessment",
                                            "Direct Interaction",

                                            "Applicant's status",
                                            "Conducting via mobile",
                                            "Speaking English through Tamil"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-700 font-bold text-xs">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content & Buttons - Now on the Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-600/10 px-3 py-1.5 rounded-full mb-4 border border-blue-600/10">
                                <Sparkles className="w-3 h-3 text-blue-600" />
                                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">Apply Now</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4 leading-tight">
                                Start Your <span className="text-blue-600">FREE DEMO</span> <br />
                                Session Today
                            </h2>

                            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                                Join our expert-led demo and experience why 100+ choose GLOBAL SR ENGLISH LEARNING ACADEMY for their fluency.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/apply"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 text-base"
                                >
                                    <Calendar className="w-5 h-5" />
                                    BOOK NOW
                                </Link>

                                <a
                                    href="https://wa.me/919042222333"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white text-blue-900 border-2 border-blue-100 font-black px-6 py-4 rounded-xl flex items-center gap-2 transition-all hover:bg-blue-50 hover:-translate-y-1 active:scale-95 text-base"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    CHAT
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoPromotion;
