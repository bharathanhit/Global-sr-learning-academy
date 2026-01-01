import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    orderBy
} from 'firebase/firestore';
import { db } from './firebase';
import {
    Upload,
    Trash2,
    CheckCircle,
    AlertCircle,
    Loader,
    Image as ImageIcon
} from 'lucide-react';

const AdminPanel = () => {
    const [staffCards, setStaffCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [notification, setNotification] = useState(null);

    // TEMPORARILY DISABLED AUTH - Direct Access
    const isAuthenticated = true;

    useEffect(() => {
        fetchStaffCards();
    }, []);

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
        } catch (err) {
            console.error('Error fetching staff cards:', err);
            showNotification('Failed to load staff cards', 'error');
        } finally {
            setLoading(false);
        }
    };

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    // Function to compress image before converting to Base64
    const compressImage = (file) => {
        return new Promise((resolve, reject) => {
            const MAX_WIDTH = 1200; // Max width for the image
            const MAX_HEIGHT = 1200; // Max height for the image
            const TARGET_SIZE_KB = 700; // Target size in KB (safe for Firestore)

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    let width = img.width;
                    let height = img.height;

                    // Resize logic
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // Initial quality
                    let quality = 0.9;
                    let dataUrl = canvas.toDataURL('image/jpeg', quality);

                    // Loop to reduce quality if file is still too big
                    while (dataUrl.length / 1024 > TARGET_SIZE_KB && quality > 0.1) {
                        quality -= 0.1;
                        dataUrl = canvas.toDataURL('image/jpeg', quality);
                    }

                    resolve(dataUrl);
                };
                img.onerror = (error) => reject(error);
            };
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            showNotification('Please upload an image file', 'error');
            return;
        }

        try {
            setUploadingImage(true);

            // Notify user about compression
            if (file.size > 800 * 1024) {
                showNotification('Compressing large image... please wait.', 'success');
            }

            // Automatically compress and convert to Base64
            const base64String = await compressImage(file);

            // Verify final size (Firestore limit is 1MB ~ 1048576 bytes)
            // Base64 is ~33% larger than binary, so 700KB binary ~ 930KB Base64
            const sizeInBytes = base64String.length * (3 / 4);
            if (sizeInBytes > 950 * 1024) {
                throw new Error("Image couldn't be compressed enough. Please try a different image.");
            }

            // Save directly to Firestore
            await addDoc(collection(db, 'staff'), {
                photoURL: base64String,
                createdAt: new Date(),
                fileName: file.name
            });

            showNotification('ID card compressed & saved to DB!', 'success');
            fetchStaffCards();

            // Reset file input
            e.target.value = '';
        } catch (err) {
            console.error('Error saving image:', err);
            showNotification(err.message || 'Failed to save ID card.', 'error');
        } finally {
            setUploadingImage(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this ID card?')) {
            return;
        }

        try {
            await deleteDoc(doc(db, 'staff', id));
            showNotification('ID card deleted successfully!', 'success');
            fetchStaffCards();
        } catch (err) {
            console.error('Error deleting ID card:', err);
            showNotification('Failed to delete ID card', 'error');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-20">
            {/* Notification */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-24 right-6 z-50"
                    >
                        <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl ${notification.type === 'success'
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                            }`}>
                            {notification.type === 'success' ? (
                                <CheckCircle className="w-6 h-6" />
                            ) : (
                                <AlertCircle className="w-6 h-6" />
                            )}
                            <p className="font-semibold">{notification.message}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-blue-950 mb-2">
                            Staff ID Manager
                        </h1>
                        <p className="text-gray-600 font-medium">
                            Upload staff ID cards directly
                        </p>
                    </div>
                </div>
            </div>

            {/* Upload Section */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                            <Upload className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload ID Card</h2>
                        <p className="text-gray-600 mb-6">Select an image to save </p>

                        <label className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <Upload className="w-5 h-5" />
                            {uploadingImage ? 'Saving to DB...' : 'Choose Image'}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                disabled={uploadingImage}
                            />
                        </label>


                    </div>
                </div>
            </div>

            {/* ID Cards Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Saved Cards ({staffCards.length})
                </h3>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader className="w-12 h-12 text-blue-600 animate-spin" />
                    </div>
                ) : staffCards.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
                        <ImageIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">No Cards Found</h3>
                        <p className="text-gray-500 mb-6">Upload an image to see it here</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staffCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* ID Card Image (Base64) */}
                                <div className="relative aspect-[4/3] flex items-center justify-center bg-gray-100">
                                    <img
                                        src={card.photoURL}
                                        alt={`Staff ID Card ${index + 1}`}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Hover Overlay with Delete Button */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button
                                            onClick={() => handleDelete(card.id)}
                                            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors transform hover:scale-105"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                {/* Card Info */}
                                <div className="p-4 bg-gray-50">
                                    <p className="text-xs text-gray-500 truncate">
                                        {card.fileName || 'ID Card'}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {card.createdAt?.toDate?.()?.toLocaleDateString?.() || 'Recently uploaded'}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
