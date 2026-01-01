import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, Shield, Landmark, X, Star, Sparkles, Zap } from 'lucide-react';
import iafLogo from './assets/IAF.png';
import govLogo from './assets/government.png';
import cert1 from './assets/certificate/WhatsApp Image 2025-12-26 at 9.04.14 AM.jpeg';
import cert2 from './assets/certificate/WhatsApp Image 2025-12-26 at 9.04.15 AM.jpeg';
import cert3 from './assets/certificate/WhatsApp Image 2025-12-26 at 9.05.41 AM (1).jpeg';
import cert4 from './assets/certificate/WhatsApp Image 2025-12-26 at 9.05.41 AM.jpeg';


const CertificatesPage = () => {
    const [selectedCert, setSelectedCert] = React.useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-20 relative overflow-hidden">

            {/* Celebration Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, scale: 0 }}
                        animate={{
                            y: "-20vh",
                            x: [
                                Math.random() * 100 + "vw",
                                (Math.random() * 100 + 10) + "vw",
                                Math.random() * 100 + "vw"
                            ],
                            opacity: [0, 0.3, 0.3, 0],
                            scale: [0, 1, 1.2, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                        className={`absolute drop-shadow-lg ${i % 4 === 0 ? 'text-yellow-400' :
                            i % 4 === 1 ? 'text-blue-400' :
                                i % 4 === 2 ? 'text-purple-400' : 'text-orange-400'
                            }`}
                    >
                        {i % 4 === 0 ? <Star className="w-6 h-6 md:w-10 md:h-10 fill-current" /> :
                            i % 4 === 1 ? <Sparkles className="w-6 h-6 md:w-10 md:h-10" /> :
                                i % 4 === 2 ? <Shield className="w-5 h-5 md:w-8 md:h-8 fill-current opacity-60" /> :
                                    <Zap className="w-5 h-5 md:w-8 md:h-8 fill-current" />
                        }
                    </motion.div>
                ))}
            </div>

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-6">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Official Accreditations</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-blue-950 mb-8 leading-tight">
                        PROFILE OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">GLOBAL SR ENGLISH LEARNING ACADEMY</span>
                    </h1>

                    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl border border-blue-50 text-left">
                        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                            <p>
                                In 2016, the <span className="font-bold text-blue-900">Sairam Tuition Centre</span> was founded and started its operation in the Selvapuram, Indira Nagar area of Coimbatore. We conducted classes for all subjects from 6th to 12th standard for both CBSE & Matric.
                            </p>
                            <p>
                                We found that students are lagging behind in a Spoken language like English. So, to improve their skills, in April 2018, we added English language courses and Personality Development classes and the Sairam Tuition Centre became the <span className="font-bold text-blue-900">Sairam Educational Academy</span>.
                            </p>
                            <p>
                                After 4th January 2022, the first branch of Sairam Educational Academy was started by God’s grace in its own campus located at Ganapathy, Coimbatore. After 29th August 2022, second new branch was started at Kovaipudur, Coimbatore.
                            </p>
                            <p>
                                The name of Sairam Educational Academy changed to <span className="font-black text-blue-900">GLOBAL SR ENGLISH LEARNING ACADEMY</span> for trademark registration on 25th November 2023. Successfully registered in the trademark Registry of Government of India on 1st January 2024.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
                                <p className="italic text-blue-900">
                                    By God's grace, successfully obtained the <span className="font-bold">ISO 9001:2015</span> and the international <span className="font-bold">ISO 9001:2015 (IAF ISO)</span> certifications from the Egyptian Accreditation Council in 2025.
                                </p>
                            </div>
                            <p>
                                It aims to teach language courses for Students, Jobbers, Job seekers and House wives. All course materials (Books) are provided by <span className="font-bold text-blue-900">GLOBAL SR ENGLISH LEARNING ACADEMY</span> and these study materials are provided for the use of candidates only. An <span className="font-bold">ISBN (International Standard Book Number)</span> was obtained for each book in December 2025.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Additional Certificates Gallery */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-blue-950 mb-4">Official Certifications</h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[cert1, cert2, cert3, cert4].map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                            layoutId={`cert-${index}`} // For smooth layout transition if we were doing shared layout animations
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-slate-50 relative">
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 z-10 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                                <img
                                    src={cert}
                                    alt={`Certificate ${index + 1}`}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificates Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Certificate 1: Government Registration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedCert(govLogo)}
                    >
                        {/* Decorative Top Border */}
                        <div className="h-2 w-full bg-gradient-to-r from-green-500 to-emerald-700"></div>

                        <div className="p-8 md:p-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-6 relative">
                                <div className="absolute inset-0 bg-green-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                <img src={govLogo} alt="Government of India" className="w-full h-full object-contain relative z-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Central Govt. of India</h3>
                            <p className="text-green-700 font-bold mb-4 bg-green-50 px-4 py-1 rounded-lg border border-green-100">
                                Officially Registered
                            </p>

                            <p className="text-gray-600 mb-6">
                                Recognized by the Central Government of India as a premier educational institution for skill development and language training.
                            </p>

                            <div className="w-full border-t border-gray-100 pt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                                <Landmark className="w-4 h-4" />
                                <span>Govt. Reg. No. Available</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certificate 2: ISO & IAF */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group relative bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedCert(iafLogo)}
                    >
                        {/* Decorative Top Border */}
                        <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-purple-600"></div>

                        <div className="p-8 md:p-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-6 relative">
                                <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                <img src={iafLogo} alt="IAF Logo" className="w-full h-full object-contain relative z-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">ISO 9001:2015 Certified</h3>
                            <div className="flex gap-2 justify-center mb-4">
                                <p className="text-blue-700 font-bold bg-blue-50 px-4 py-1 rounded-lg border border-blue-100">
                                    IAF Accredited
                                </p>
                                <p className="text-purple-700 font-bold bg-purple-50 px-4 py-1 rounded-lg border border-purple-100">
                                    International Standard
                                </p>
                            </div>

                            <p className="text-gray-600 mb-6">
                                Certified for Quality Management Systems, ensuring our teaching methods and administrative processes meet global standards.
                            </p>

                            <div className="w-full border-t border-gray-100 pt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                                <Shield className="w-4 h-4" />
                                <span>Quality Assured Education</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* MSME Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
                >
                    <div className="bg-orange-100 p-3 rounded-full">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Registered MSME Enterprise</h4>
                        <p className="text-gray-600 text-sm">Registration Number: <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-bold">MSME - TN - 03</span></p>
                    </div>
                </motion.div>
            </div>

            {/* Certificate Popup Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.5, opacity: 0, rotateX: -20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-2 shadow-2xl overflow-visible"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Corner Ribbons - Enhanced Glow */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 via-cyan-500 to-purple-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all z-30 cursor-pointer"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Container with Border */}
                            <div className="rounded-xl overflow-hidden border-8 border-double border-slate-200 bg-slate-50 relative p-1">
                                <div className="absolute inset-0 border border-slate-300 rounded-lg pointer-events-none m-1"></div>
                                <img
                                    src={selectedCert}
                                    alt="Selected Certificate"
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-inner"
                                />

                                {/* VERIFIED STAMP ANIMATION */}
                                <motion.div
                                    initial={{ scale: 2, opacity: 0, rotate: -45 }}
                                    animate={{ scale: 1, opacity: 1, rotate: -15 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    className="absolute bottom-4 right-4 md:bottom-10 md:right-10 border-4 border-green-600 rounded-full p-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-green-50/90 backdrop-blur-sm shadow-xl z-20"
                                >
                                    <div className="border-2 border-green-600 border-dashed rounded-full w-full h-full flex flex-col items-center justify-center p-1">
                                        <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 mb-1" />
                                        <span className="text-green-800 font-black text-xs md:text-sm uppercase tracking-widest">Verified</span>
                                        <span className="text-green-600 font-bold text-[10px] md:text-xs">OFFICIAL</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom Label Decoration */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-3 rounded-full shadow-2xl border-2 border-yellow-400 flex items-center gap-3 z-30"
                            >
                                <Award className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                                <span className="font-bold text-white text-base tracking-wide shadow-black drop-shadow-md">GLOBAL SR ENGLISH LEARNING ACADEMY Certified</span>
                                <Award className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CertificatesPage;
