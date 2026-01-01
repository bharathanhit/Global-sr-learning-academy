import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Ravi Prasath P.",
        role: "EEE Student, SKCT",
        text: "I am pursuing 3rd year EEE at Sri Krishna College of Technology. The coaching at GLOBAL SR ENGLISH LEARNING ACADEMY helped me immensely with my communication skills and built my confidence to speak fluently.",
        img: "https://lh3.googleusercontent.com/a/ACg8ocKxAPeeeLsOBtLppcYDuXfC6A0xSiAei1W5l3IzD_2p9BCmSg=s120-c"
    },
    {
        name: "Sharva (Pradeep)",
        role: "Young Learner",
        text: "I am a 4th standard student at Peepal Prodigy School. I have completed the Beginner Course in Learning English at GLOBAL SR ENGLISH LEARNING ACADEMY. The teachers made learning English so much fun!",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjWZ7o7EkPHAyYrFBenWaKh8qv39ytY7nkEFIo4mM8WoQabfwt4=s120-c"
    },
    {
        name: "Karthick P.",
        role: "Mechanical Engineer",
        text: "As a Mechanical Engineer, I needed strong English skills for my career. The instructor's positive impact on my speaking abilities has been life-changing. Truly grateful for the guidance!",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjXxnvlOI8qhC9Iv-QFPMRQaaF4f9GGqSyTZbfqqb0ctEN6dcLw=s120-c"
    },
    {
        name: "Nagarajan",
        role: "Retired Driver (72 Yrs)",
        text: "I am 72 years old and a retired TNSTC driver. I am proud to be the 100th applicant. GLOBAL SR ENGLISH LEARNING ACADEMY makes learning English possible for everyone, regardless of age or background.",
        img: "https://lh3.googleusercontent.com/a/ACg8ocLXHHIPFo3ZZp9lyflVSvGrhNv-xM830TUrNJ0vLOtKcEKdcg=s120-c"
    },
    {
        name: "Aldrin Infant Roy",
        role: "ECE Student, PSG Tech",
        text: "The academy provides valuable training that has truly enhanced my fluency. The atmosphere here is very supportive, making it the perfect place to master spoken English.",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjWxcEKa9hqONbfh0q-K5L0MZtAVWLeAJGQKbAGgDLdlLGHWsXBa=s120-c"
    },
    {
        name: "Priyadharshini S.",
        role: "BSc Computer Science",
        text: "The classes and course materials are incredibly helpful. It's the best place to bridge the gap between academic education and professional communication needs.",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjUhK5SbRFaTiR34bvveAHGDK7fATRETjKgQ3xmibQlMZH9i3KeJ=s120-c"
    }
];

// Combine two copies of the array for a seamless loop 
const duplicatedReviews = [...reviews, ...reviews];

const ReviewSection = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-blue-950 mb-4"
                >
                    Voices of <span className="text-blue-600">Success</span>
                </motion.h2>
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                    <div className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
                        <span className="text-blue-600 font-black">4.8</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-slate-400 text-xs font-bold ml-1">60+ Google Reviews</span>
                    </div>
                    <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Real stories from real students. We take pride in the 4.8/5 star rating our students have given us for their transformative experiences.
                </p>
            </div>

            {/* Infinite Scrolling Container */}
            <div className="relative flex z-20">
                <motion.div
                    className="flex gap-8 px-4"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedReviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[280px] xs:w-[320px] md:w-[450px] p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-blue-900 border border-blue-800 shadow-2xl transition-all duration-500 flex flex-col justify-between group hover:bg-blue-800 hover:-translate-y-2"
                        >
                            <div>
                                <div className="flex gap-1 mb-4 md:mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-base md:text-xl text-white italic font-medium leading-relaxed mb-6 md:mb-8">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all bg-white">
                                    <img
                                        src={review.img}
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=0284c7&color=fff&bold=true`;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-black text-white text-base md:text-lg">{review.name}</h4>
                                    <p className="text-blue-400 text-xs md:text-sm font-black tracking-wider uppercase">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Edge Gradients matching the light background */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent pointer-events-none z-30 hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-50 via-slate-50/50 to-transparent pointer-events-none z-30 hidden md:block"></div>
        </section>
    );
};

export default ReviewSection;

