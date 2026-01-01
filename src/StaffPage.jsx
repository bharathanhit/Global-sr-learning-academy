import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { Users, Loader } from 'lucide-react';

const StaffPage = () => {
    const [staffCards, setStaffCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStaffCards = async () => {
            try {
                setLoading(true);
                const staffRef = collection(db, 'staff');
                const q = query(staffRef, orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);

                const cards = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setStaffCards(cards);
                setError(null);
            } catch (err) {
                console.error('Error fetching staff cards:', err);
                setError('Failed to load staff ID cards. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchStaffCards();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-xl text-gray-600 font-medium">Loading staff ID cards...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                        <p className="text-red-600 text-lg font-medium">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-4">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-semibold text-sm">Our Team</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-blue-950 mb-3">
                        Staff <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ID Cards</span>
                    </h1>

                    <p className="text-base text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Meet our dedicated team members at GLOBAL SR ENGLISH LEARNING ACADEMY
                    </p>
                </motion.div>
            </div>

            {/* ID Cards Display */}
            <div className="max-w-7xl mx-auto px-6">
                {staffCards.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <Users className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                        <p className="text-2xl text-gray-400 font-medium">No staff ID cards available</p>
                        <p className="text-gray-500 mt-2">Check back soon!</p>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {staffCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                    {/* ID Card Image */}
                                    <img
                                        src={card.photoURL}
                                        alt={`Staff ID Card ${index + 1}`}
                                        className="w-full h-auto object-contain"
                                    />

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>




        </div>
    );
};

export default StaffPage;
