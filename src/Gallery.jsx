import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob('./assets/gallery/*.{png,jpg,jpeg,webp,JPEG}', { eager: true });
const galleryImages = Object.values(imageModules).map((mod) => mod.default || mod);

const GallerySection = () => {
    const navigate = useNavigate();

    // Pick first 3 images for the poker stack
    const stackImages = useMemo(() => galleryImages.slice(0, 3), []);

    if (galleryImages.length === 0) return null;

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-blue-950 mb-4"
                    >
                        Captured <span className="text-blue-600">Memories</span>
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        A glimpse into the vibrant life and learning environment at GLOBAL SR ENGLISH LEARNING ACADEMY.
                    </p>
                </div>

                <div className="relative h-[550px] flex items-center justify-center mb-12">
                    {/* Poker Card Stack Container */}
                    <motion.div
                        className="relative w-full max-w-[380px] aspect-[3/4]"
                        whileHover="hover"
                    >
                        {stackImages.map((img, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hover: {
                                        rotate: index === 0 ? -15 : index === 1 ? 0 : 15,
                                        x: index === 0 ? -80 : index === 1 ? 0 : 80,
                                        scale: 1.05,
                                        y: index === 1 ? -30 : 0,
                                        transition: { duration: 0.6, type: "spring", stiffness: 100 }
                                    }
                                }}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    rotate: index === 0 ? -5 : index === 1 ? 0 : 5,
                                    y: index * 8,
                                    x: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.8, delay: index * 0.2 }
                                }}
                                viewport={{ once: true }}
                                className="absolute inset-0 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 cursor-pointer overflow-hidden transform-gpu"
                                style={{
                                    zIndex: index === 1 ? 20 : 10,
                                }}
                            >
                                <div className="w-full h-full overflow-hidden rounded-[2rem]">
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover transform hover:scale-110 transition duration-1000 ease-out"
                                    />
                                </div>
                                {/* Physical Card Detail (like a stamp or dot) */}
                                <div className="absolute top-10 left-10 p-2 bg-white/80 backdrop-blur-md rounded-xl shadow-inner">
                                    <div className="w-5 h-5 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/gallery')}
                        className="px-12 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:shadow-blue-500/40 transition-all flex items-center gap-3 mx-auto group"
                    >
                        <span>View Full Gallery</span>
                        <svg
                            className="transform group-hover:translate-x-1 transition-transform"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
