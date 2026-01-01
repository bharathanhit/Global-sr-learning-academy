import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BookOpen, Star, CheckCircle } from 'lucide-react';
// Import course-specific images for the circular centers
import beginnerBg from './assets/spoken-english.png';
import tamilBg from './assets/onlineclass.png';

// Course Data based on the old UI requested
const courses = [
    {
        id: 1,
        linkId: "beginner-course",
        title: "LANGUAGE COURSES",
        subtitle: "LEARNING LANGUAGES",
        color: "bg-[#0EA5E9]", // Sky Blue
        spineColor: "bg-[#0284C7]", // Darker Sky Blue
        footerColor: "bg-[#1E3A8A]", // Navy Blue for footer
        shadow: "shadow-sky-500/50",
        image: beginnerBg,
        chapters: [
            "Beginner Course in learning English",
            "Intermediate Course in learning English",
            "Beginner Course in learning English through Tamil",
            "Intermediate Course in learning English through Tamil"
        ]
    },
    {
        id: 2,
        linkId: "tamil-to-english",
        title: "COMMUNICATIVE ENGLISH",
        subtitle: "THROUGH TAMIL",
        color: "bg-[#2563EB]", // Bright Blue
        spineColor: "bg-[#1E40AF]", // Darker Blue
        footerColor: "bg-[#1E3A8A]", // Navy Blue for footer
        shadow: "shadow-blue-500/50",
        image: tamilBg,
        chapters: [
            "Pre – Basic Communicative English through Tamil",
            "Basic Communicative English through Tamil",
            "Pre – Intermediate Communicative English through Tamil",
            "Intermediate Communicative English through Tamil"
        ]
    }
];

const BookCard = ({ course }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleBookClick = () => {
        setIsOpen(true);
        setTimeout(() => {
            navigate(`/library/${course.linkId}`);
        }, 600);
    };

    return (
        <div className="flex flex-col items-center gap-4 perspective max-w-[170px] md:max-w-none">
            <div
                className="relative w-[165px] h-[250px] md:w-[300px] md:h-[420px] group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
                onClick={handleBookClick}
            >
                {/* Book Container */}
                <div className={`relative w-full h-full preserve-3d transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left ${isOpen ? '-translate-x-[150px]' : ''}`}>

                    {/* --- FRONT COVER --- */}
                    <div
                        className="absolute inset-0 w-full h-full preserve-3d origin-left z-20 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{ transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)' }}
                    >
                        {/* Front Face: Solid Color Background */}
                        <div className={`absolute inset-0 backface-hidden rounded-r-lg md:rounded-r-xl rounded-l-md shadow-2xl ${course.color} text-white flex flex-col items-center pt-8 md:pt-12 px-4 md:px-6 overflow-hidden`}>
                            {/* Spine Highlights */}
                            <div className={`absolute left-0 top-0 bottom-0 w-3 md:w-6 ${course.spineColor} z-10 border-r border-white/10 shadow-inner`}></div>

                            {/* Circular Image Center */}
                            <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-4 md:mb-8 ml-2 md:ml-4">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Overlays */}
                            <div className="text-center ml-2 md:ml-4 flex-1 flex flex-col items-center">
                                <h2 className="text-sm md:text-2xl font-black mb-1 md:mb-2 leading-tight tracking-tight px-1">
                                    {course.title}
                                </h2>
                                <div className="w-8 h-[2px] bg-white/40 mb-2 md:mb-4"></div>
                                <p className="text-[7px] md:text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-4">
                                    {course.subtitle}
                                </p>
                            </div>

                            {/* Bottom Footer Band */}
                            <div className={`absolute bottom-0 left-0 right-0 ${course.footerColor} py-2 md:py-4 text-center z-10 pl-4 md:pl-8`}>
                                <span className="text-[6px] md:text-[9px] font-bold tracking-[0.3em] text-white/90 uppercase">
                                    GLOBAL SR ENGLISH LEARNING ACADEMY
                                </span>
                            </div>
                        </div>

                        {/* Back Face (Inside Left) */}
                        <div
                            className="absolute inset-0 h-full w-full rounded-l-lg md:rounded-l-xl rounded-r-md bg-slate-50 rotate-y-180 backface-hidden shadow-xl border-r border-gray-200 flex flex-col justify-center items-center text-center overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-l from-gray-200/50 to-transparent"></div>
                            <div className="p-4 md:p-8">
                                <Users className={`w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 mx-auto ${course.linkId === "beginner-course" ? 'text-sky-600' : 'text-blue-600'}`} />
                                <h3 className={`text-lg md:text-2xl font-black ${course.linkId === "beginner-course" ? 'text-sky-900' : 'text-blue-900'} mb-1 md:mb-2`}>
                                    Logging In...
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* --- INSIDE RIGHT PAGE (Base Layer) --- */}
                    <div className="absolute inset-0 z-10 bg-white rounded-r-lg md:rounded-r-xl rounded-l-md shadow-2xl border-l border-gray-100 flex flex-col overflow-hidden">
                        {/* Page Texture */}
                        <div className="absolute inset-0 bg-yellow-50/10 pointer-events-none"></div>
                        <div className="flex-1 flex flex-col items-center justify-center p-2 text-center bg-white/90">
                            {/* Inner Title Page Content */}
                            <div className="w-12 h-12 md:w-20 md:h-20 mb-3 opacity-80 mix-blend-multiply">
                                <img
                                    src={course.image}
                                    alt="Inner Cover"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="space-y-1">
                                <h5 className="text-[6px] md:text-[8px] font-bold text-gray-400 uppercase tracking-widest">GLOBAL SR ENGLISH LEARNING ACADEMY</h5>
                                <h3 className="text-[8px] md:text-xs font-black text-blue-950 uppercase tracking-wide px-2 leading-tight">
                                    {course.title}
                                </h3>
                            </div>

                            <div className="mt-4 px-3 py-1 bg-blue-50 rounded-full">
                                <p className="text-[6px] md:text-[8px] font-bold text-blue-600 animate-pulse">
                                    Opening Library...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Page Thickness Effect (Right Side) */}
                    <div className={`absolute top-2 bottom-2 right-0 w-[2px] md:w-[4px] bg-gray-200 rounded-r-sm translate-z-[-2px] ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity delay-300`}></div>
                </div>
            </div>

            {/* Bottom Text Labels - Outside the 3D space */}
            <div className="text-center space-y-0.5 md:space-y-1 mt-1.5 md:mt-2 w-full">
                <h3 className={`text-[10px] md:text-sm font-black uppercase tracking-wide truncate ${course.linkId === "beginner-course" ? 'text-sky-600' : 'text-blue-600'}`}>
                    {course.title}
                </h3>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase bg-slate-100 py-1 md:py-1.5 px-3 md:px-4 rounded-full inline-block">
                    Click to Preview
                </p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10 w-full">
                <div className="text-center mb-10 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black text-blue-950 mb-4"
                    >
                        Our Premium <span className="text-blue-600">Library</span>
                    </motion.h2>
                    <p className="text-gray-500 text-sm md:text-lg">Click on any book to explore the contents</p>
                </div>

                <div className="flex flex-row justify-center items-start gap-3 md:gap-32 lg:gap-40 overflow-x-visible">
                    {courses.map((course) => (
                        <BookCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
