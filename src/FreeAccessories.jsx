import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Pen, FolderHeart, Gift, Sparkles } from 'lucide-react';

const Card3D = ({ children, color }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove(e) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - left) / width - 0.5;
        const yPct = (e.clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useMotionTemplate`${mouseY.get() * 20}deg`; // Inverted for natural tilt
    const rotateY = useMotionTemplate`${mouseX.get() * -20}deg`;

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY
            }}
            className={`relative w-40 h-40 md:w-56 md:h-56 rounded-[2rem] bg-white border border-white/50 shadow-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group ${color}`}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-4 bg-white/50 rounded-3xl backdrop-blur-sm border border-white/20 shadow-inner flex flex-col items-center justify-center gap-3"
            >
                {children}
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
        </motion.div>
    );
};

export default function FreeAccessories() {
    return (
        <section className="w-full py-20 relative z-20 overflow-visible bg-slate-50">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-[100px] -translate-y-1/2" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Section */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <div className="flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-black text-xs md:text-sm uppercase tracking-[0.1em] shadow-xl shadow-blue-200 w-fit mx-auto lg:mx-0 border-2 border-white animate-bounce-subtle"
                            >
                                <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                                <span>No Equipment Needed - We Provide Everything!</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest w-fit mx-auto lg:mx-0"
                            >
                                <Gift size={12} />
                                <span>Student Welcome Kit</span>
                            </motion.div>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-blue-950 leading-tight"
                        >
                            We Don't Just Teach.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                                We Equip You.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-500 font-medium max-w-xl mx-auto lg:mx-0"
                        >
                            Every student receives a premium <b className="text-blue-600">Stationery Kit</b> absolutely free.
                            Start your journey with the right tools in hand.
                        </motion.p>


                    </div>

                    {/* Interactive Cards Section */}
                    <div className="flex flex-col md:flex-row items-center gap-6 perspective-1000 mt-8 lg:mt-0">

                        {/* Pen Card */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: 30, x: 50 }}
                            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card3D color="shadow-blue-200/50">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Pen size={48} className="text-blue-600 drop-shadow-lg" strokeWidth={2} />
                                </motion.div>
                                <div className="text-center">
                                    <h3 className="font-black text-blue-900 uppercase tracking-widest text-xs mb-1">Premium Pen</h3>
                                    <p className="text-[10px] text-blue-400 font-bold">Smooth Writing</p>
                                </div>
                            </Card3D>
                        </motion.div>

                        {/* Plus Sign */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="relative z-10 bg-white p-3 rounded-full shadow-xl text-gray-300 border border-gray-100 rotate-90 md:rotate-0"
                        >
                            <Sparkles size={24} className="text-orange-400 fill-orange-400 animate-pulse" />
                        </motion.div>

                        {/* Pouch Card */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: -30, x: -50 }}
                            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Card3D color="shadow-orange-200/50">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <FolderHeart size={48} className="text-orange-500 drop-shadow-lg" strokeWidth={2} />
                                </motion.div>
                                <div className="text-center">
                                    <h3 className="font-black text-blue-900 uppercase tracking-widest text-xs mb-1">Study Pouch</h3>
                                    <p className="text-[10px] text-orange-400 font-bold">Keep Organized</p>
                                </div>
                            </Card3D>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
