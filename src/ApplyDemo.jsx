import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, Calendar, BookOpen, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ApplyDemo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        location: '',
        course: 'Beginner English',
        preferredTime: 'Morning (10 AM - 12 PM)'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp Integration
        const phoneNumber = "919042222333";
        const message = `*Free Demo Request - GLOBAL SR ENGLISH LEARNING ACADEMY*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Age:* ${formData.age}%0A` +
            `*Location:* ${formData.location}%0A` +
            `*Course:* ${formData.course}%0A` +
            `*Preferred Time:* ${formData.preferredTime}%0A%0A` +
            `Hi, I would like to book a free demo session. Please contact me soon!`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.location.href = whatsappUrl;
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-40 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-6">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Start Your Journey</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">
                        Book Your <span className="text-blue-600">Free Demo</span> Session
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience our unique teaching methodology firsthand. Fill out the form and we'll connect with you on WhatsApp.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Left: Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 group hover:border-blue-200 transition-all">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-blue-950 mb-2">Instant Connection</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Direct communication with our course coordinators via WhatsApp.</p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 group hover:border-blue-200 transition-all">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-blue-950 mb-2">Live Experience</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Participate in a live session and see how our trainers interact.</p>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-blue-50 relative overflow-hidden"
                    >

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-black text-blue-900 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ex: Karthik / sri"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-600 focus:bg-white outline-none transition-all font-medium text-black"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Age */}
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-blue-900 uppercase tracking-widest pl-1">Age</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                                        <input
                                            required
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            placeholder="Ex: 24"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-600 focus:bg-white outline-none transition-all font-medium text-black"
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-blue-900 uppercase tracking-widest pl-1">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                                        <input
                                            required
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Ex: Coimbatore"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-600 focus:bg-white outline-none transition-all font-medium text-black"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Course Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-blue-900 uppercase tracking-widest pl-1">Select Course</label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:bg-white outline-none transition-all font-bold text-black appearance-none"
                                    >
                                        <option value="Beginner English Course">Beginner English Course</option>
                                        <option value="Tamil to English Course">Communicative English</option>

                                    </select>
                                </div>

                                {/* Time Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-blue-900 uppercase tracking-widest pl-1">Preferred Time</label>
                                    <select
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:bg-white outline-none transition-all font-bold text-black appearance-none"
                                    >
                                        <option value="Morning (10 AM - 12 PM)">Morning (10 AM - 12 PM)</option>
                                        <option value="Afternoon (2 PM - 4 PM)">Afternoon (2 PM - 4 PM)</option>
                                        <option value="Evening (6 PM - 8 PM)">Evening (6 PM - 8 PM)</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95 cursor-pointer z-50 overflow-hidden"
                            >
                                <Send className="w-6 h-6" />
                                BOOK FREE DEMO NOW
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ApplyDemo;
