import React from 'react';
import { motion } from 'framer-motion';

// Import ID card images
import id1 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.52 AM.jpeg';
import id2 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.53 AM.jpeg';
import id3 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.53 AM (1).jpeg';
import id4 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.54 AM.jpeg';
import id5 from './assets/idcards/WhatsApp Image 2025-12-24 at 11.54.54 AM (1).jpeg';

const IDCards = () => {
    const cards = [id1, id2, id3, id4, id5, id1, id2, id3, id4, id5]; // Doubled for seamless loop

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-blue-950 mb-4"
                    >
                        Our Registered <span className="text-blue-600">Students</span>
                    </motion.h2>
                    <p className="text-gray-600 font-medium">Empowering learners </p>
                </div>
            </div>

            <div className="relative flex">
                {/* Infinite Slider Container */}
                <motion.div
                    className="flex space-x-8 whitespace-nowrap"
                    animate={{
                        x: [0, -1500]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {cards.map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-64 md:w-80 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border-4 border-slate-50">
                                <img
                                    src={img}
                                    alt={`Student ID ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Glass Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Second set for seamless loop (backup if the animation timing needs it) */}
                <motion.div
                    className="flex space-x-8 whitespace-nowrap ml-8"
                    animate={{
                        x: [0, -1500]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {cards.map((img, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 w-64 md:w-80 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border-4 border-slate-50">
                                <img
                                    src={img}
                                    alt={`Student ID ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IDCards;
