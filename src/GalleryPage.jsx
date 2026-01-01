import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob('./assets/gallery/*.{png,jpg,jpeg,webp,JPEG}', { eager: true });
const galleryImages = Object.keys(imageModules).map((path) => {
    return {
        src: imageModules[path].default || imageModules[path],
        category: "Academy Moments"
    };
});

const GalleryPage = () => {
    return (
        <div className="min-h-screen bg-white py-24 px-6 mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Back to Home
                    </Link>
                </div>

                <div className="text-left mb-16">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-black text-blue-950 mb-6"
                    >
                        Our <span className="text-blue-600">Gallery</span>
                    </motion.h1>
                    <div className="w-24 h-2 bg-blue-600 rounded-full mb-8"></div>
                    <p className="text-gray-600 max-w-3xl text-xl leading-relaxed">
                        Witness the journey of our students and the excellence of our training programs captured in frames.
                    </p>
                </div>

                {galleryImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-100"
                            >
                                <img
                                    src={item.src}
                                    alt="Academy Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Clean Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-10 h-[2px] bg-blue-400"></div>
                                        <span className="text-white font-black tracking-widest uppercase text-sm">{item.category}</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-xl font-medium">No images found in the gallery folder.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
