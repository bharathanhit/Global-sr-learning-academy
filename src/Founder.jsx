import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Trophy, BookOpen, Star, Medal, ArrowLeft, Play, X } from 'lucide-react';
import founderImg from './assets/founder.png';
import founderProfileImg from './assets/founder-img.png';
import founderVideo from './assets/foundervid.mp4';
import record1 from './assets/certificate/records/WhatsApp Image 2025-12-26 at 9.12.19 AM (1).jpeg';
import record2 from './assets/certificate/records/WhatsApp Image 2025-12-26 at 9.12.19 AM.jpeg';
import record3 from './assets/certificate/records/WhatsApp Image 2025-12-26 at 9.12.20 AM (1).jpeg';
import record4 from './assets/certificate/records/WhatsApp Image 2025-12-26 at 9.12.20 AM.jpeg';
import record5 from './assets/certificate/records/WhatsApp Image 2025-12-26 at 9.12.21 AM.jpeg';

// KAG Award Images
import kag1 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.49 PM.jpeg';
import kag2 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.50 PM (1).jpeg';
import kag3 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.50 PM.jpeg';
import kag4 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.52 PM (1).jpeg';
import kag5 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.52 PM.jpeg';
import kag6 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.53 PM (1).jpeg';
import kag7 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.53 PM.jpeg';
import kag8 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.54 PM (1).jpeg';
import kag9 from './assets/kg/WhatsApp Image 2025-12-31 at 10.15.54 PM.jpeg';

const Founder = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-30 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
                        style={{ backgroundImage: `url(${founderImg})` }}
                    ></div>
                </div>

                <div className="container mx-auto px-6 relative z-20 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-black mb-4">Meet Our <span className="text-blue-400">Founder</span></h1>
                        <p className="text-xl md:text-2xl font-medium max-w-2xl text-blue-100">
                            Dr. T. Sheela MBA., M. Phil — A visionary educator dedicated to transforming lives through the power of English communication.
                        </p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => setShowVideo(true)}
                            className="mt-8 flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 transition-all hover:scale-105 group"
                        >
                            <div className="bg-blue-600 p-3 rounded-full shadow-lg shadow-blue-500/40 group-hover:bg-blue-500 transition-colors">
                                <Play className="w-6 h-6 fill-current text-white" />
                            </div>
                            <span className="text-lg font-bold tracking-wide">Watch  Video</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Image Column */}
                    <motion.div
                        className="w-full md:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100 rounded-2xl -z-10 rotate-3"></div>
                            <img
                                src={founderProfileImg}
                                alt="Dr. T. Sheela"
                                className="w-full rounded-2xl shadow-2xl object-cover h-[500px]"
                            />
                            <div className="mt-8 bg-blue-950 p-6 rounded-2xl text-white shadow-xl">
                                <h3 className="text-xl font-bold mb-2">Dr. T. Sheela MBA., M. Phil</h3>
                                <p className="text-blue-300">Founder & Administrator</p>
                                <div className="mt-4 flex flex-col gap-3 text-sm">
                                    <span className="flex items-center gap-3 bg-blue-900/50 p-2 rounded-lg">
                                        <GraduationCap className="w-5 h-5 text-blue-400" />
                                        Doctorate of Education
                                    </span>
                                    <span className="flex items-center gap-3 bg-blue-900/50 p-2 rounded-lg">
                                        <Trophy className="w-5 h-5 text-blue-400" />
                                        World Record Holder
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        className="w-full md:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8 text-gray-800 leading-relaxed">
                            <div>
                                <h2 className="text-3xl font-black text-blue-900 mb-6">A Legacy of Excellence</h2>
                                <p className="text-lg">
                                    Dr. T. Sheela MBA., M. Phil has completed her Education at PSG Institution, Coimbatore. She is the founder and administrator of <strong>GLOBAL SR ENGLISH LEARNING ACADEMY</strong>.
                                    Since establishing her academy in 2022 with the support of her husband, brother and parents,
                                    and with the official trademark of the Government of India, she has dedicated herself to
                                    teaching communicative English through the Tamil language to students, job seekers,
                                    working professionals, and homemakers.
                                </p>
                                <p className="text-lg mt-4 text-blue-700 font-semibold italic">
                                    "She provides unparalleled personalized attention and care to each learner."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-gray-100">
                                <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
                                    <div className="text-blue-600">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900">8 Original Books</h4>
                                        <p className="text-sm text-gray-600">Comprehensive English language materials.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
                                    <div className="text-blue-600">
                                        <Star className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900">Top Rated</h4>
                                        <p className="text-sm text-gray-600">Google's Top Institution in Kovaipudur.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Unmatched Achievements</h3>
                                <p className="text-lg">
                                    Her achievements include creating 8 original English learning books, guiding 100+ learners with personalized training between 2022 and 2025, and contributing to academic excellence through her published research article in the International Journal of Informative and Futuristic Research in 2016.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <div className="bg-blue-50 border border-blue-100 flex items-center gap-2 text-blue-800 px-5 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                        <GraduationCap className="w-5 h-5 text-blue-600" />
                                        Doctorate of Education (2025)
                                    </div>
                                    <div className="bg-blue-50 border border-blue-100 flex items-center gap-2 text-blue-800 px-5 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                        <Trophy className="w-5 h-5 text-blue-600" />
                                        United Nation Book of World Record
                                    </div>
                                    <div className="bg-blue-50 border border-blue-100 flex items-center gap-2 text-blue-800 px-5 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                        <Trophy className="w-5 h-5 text-blue-600" />
                                        Asian Book of World Record
                                    </div>
                                    <div className="bg-blue-50 border border-blue-100 flex items-center gap-2 text-blue-800 px-5 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                        <Trophy className="w-5 h-5 text-blue-600" />
                                        American Book of World Record
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg">
                                She received three international certificates from the United Nation book of World Record, the Asian book of world record, and the American book of world record in 2025. In 2025, she received the Best Academy Award for Tamil Nadu Achiever from Chennai Highwood Entertainments and the award for the Best Women-Led Educational Institution from the Coimbatore KG Group.
                            </p>

                            <div className="pt-8">
                                <Link to="/" className="inline-flex items-center text-blue-600 font-bold hover:gap-3 transition-all gap-2 group">
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    Back to Academy
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Records Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-blue-950 mb-4">World Record Recognitions</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Honored by prestigious international organizations for outstanding contributions to education and society.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[record1, record2, record3, record4, record5].map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white p-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-50 relative">
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 z-10"></div>
                                    <img
                                        src={img}
                                        alt={`Record Achievement ${index + 1}`}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* KAG Award Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-blue-950 mb-4">KAG Award Moments</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Moments of honor and recognition at the KAG Awards ceremony.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[kag1, kag2, kag3, kag4, kag5, kag6, kag7, kag8, kag9].map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white p-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-50 relative">
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 z-10"></div>
                                    <img
                                        src={img}
                                        alt={`KAG Award Moment ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all border border-white/5"
                            >
                                <X className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                            <video
                                src={founderVideo}
                                controls
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()}
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Founder;










