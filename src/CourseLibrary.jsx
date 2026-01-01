import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Star, X } from 'lucide-react';
import frontImg from './assets/front.png';

const coursesData = {
    'beginner-course': {
        title: "BEGINNER COURSES",
        subtitle: "LEARNING LANGUAGES",
        description: "A comprehensive guide to mastering the basics of English.",
        color: "bg-[#0EA5E9]",
        spineColor: "bg-[#0369A1]",
        footerColor: "bg-[#1E3A8A]",
        chapters: [
            {
                title: "Beginner Course in learning English",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-870-0",
                description: "It consists of 1 to 4 chapters. Each and every chapter of some parts and several sections. It includes an Introduction to Language, English Alphabets, Making or Forming syllables, Words, Paragraphs, 7 short stories for Reading Practice, learned to read, write and Pronounce a total of 494 (Four hundred and ninety-four) words including words ranging from One letter to Eight letters, Practice test and more.",
                descriptionTamil: "இது 1 முதல் 4 அத்தியாயங்களைக் கொண்டுள்ளது. ஒவ்வொரு அத்தியாயமும் சில பகுதிகள் மற்றும் பல பிரிவுகளைக் கொண்டுள்ளது. இதில் மொழியின் அறிமுகம், ஆங்கில எழுத்துக்கள், எழுத்துக்களை உருவாக்குதல், சொற்கள், பத்திகள், வாசிப்புப் பயிற்சிக்காக 7 சிறுகதைகள், படிப்பதற்கும், எழுதுவதற்கும், உச்சரிப்பதற்கும் ஒரு எழுத்து முதல் எட்டு எழுத்துகள் வரையிலான சொற்கள் உட்பட மொத்தம் 494 (நானூற்று தொண்ணூற்று நான்கு) சொற்களைக் கொண்டுள்ளது.",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "8,500/- (Including 10 months)",
                        instalments: [
                            { label: "1st Instalment", value: "60% (5,100/-)" },
                            { label: "2nd Instalment", value: "40% (3,400/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "8,500/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "100/-" },
                            { label: "Other States", value: "150/-" },
                            { label: "Other Countries", value: "200/-" }
                        ]
                    }
                }
            },
            {
                title: "Intermediate Course in learning English",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-881-6",
                description: "It contains words ranging from One letter to Eight letters and a total of 494 words, including English meanings for them and pronunciation for writing practice. And various application forms for listening practice, such as tickets and challans etc., to fill out. It contains 7 short stories for reading practice and Articles by saints for speaking practice.",
                descriptionTamil: "இதில் ஒரு எழுத்து முதல் எட்டு எழுத்துகள் வரையிலான சொற்கள் மற்றும் அவற்றுக்கான ஆங்கில அர்த்தங்கள் மற்றும் எழுத்துப் பயிற்சிக்கான உச்சரிப்பு உட்பட மொத்தம் 494 (நானூற்று தொண்ணூற்று நான்கு) வார்த்தைகள் உள்ளன. மற்றும் கேட்கும் பயிற்சிக்கான பல்வேறு விண்ணப்பப் படிவங்கள், டிக்கெட்டுகள் மற்றும் சலான்கள் போன்றவையும், வாசிப்புப் பயிற்சிக்காக 6 சிறுகதைகளையும், பேச்சுப் பயிற்சிக்கான புனிதர்களின் கட்டுரைகளையும் கொண்டுள்ளது.",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "10,000/-",
                        instalments: [
                            { label: "1st Instalment", value: "60% (6,000/-)" },
                            { label: "2nd Instalment", value: "40% (4,000/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "10,000/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "100/-" },
                            { label: "Other States", value: "150/-" },
                            { label: "Other Countries", value: "200/-" }
                        ]
                    }
                }
            },
            {
                title: "Beginner Course in learning English through Tamil",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-629-4",
                description: "It consists of 1 to 6 chapters. Each chapter of several sections. It includes an Introduction to Language, Tamil Alphabets, English Alphabets, Words, Paragraphs and Reading Practice. It contains words ranging from One Letter to Eight Letters. It contains a total of 196 (One hundred and ninety- six) English words with their Tamil meanings and pronunciation for writing and reading practice. It includes three-syllable short stories and three- to four-syllable short stories for reading practice.",
                descriptionTamil: "இது 1 முதல் 6 அத்தியாயங்களைக் கொண்டுள்ளது. இதில் மொழி அறிமுகம், தமிழ் எழுத்துக்கள், ஆங்கில எழுத்துக்கள், வார்த்தைகள், பத்திகள் மற்றும் வாசிப்பு பயிற்சி ஆகியவை அடங்கும். இதில் ஒரு எழுத்து முதல் எட்டு எழுத்துகள் வரையிலான சொற்கள் உள்ளன. இது மொத்தம் 196 (நூற்று தொண்ணூற்றாறு) ஆங்கில வார்த்தைகளை அவற்றின் தமிழ் அர்த்தங்கள் மற்றும் எழுத்து மற்றும் வாசிப்பு பயிற்சிக்கான உச்சரிப்புடன் கொண்டுள்ளது. இதில் மூன்றெழுத்து சிறுகதைகளும், வாசிப்புப் பயிற்சிக்கான மூன்று முதல் நான்கு எழுத்துக்கள் கொண்ட சிறுகதைகளும் அடங்கும்.",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "8,500/-",
                        instalments: [
                            { label: "1st Instalment", value: "60% (5,100/-)" },
                            { label: "2nd Instalment", value: "40% (3,400/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "8,500/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "100/-" },
                            { label: "Other States", value: "150/-" },
                            { label: "Other Countries", value: "200/-" }
                        ]
                    }
                }
            },
            {
                title: "Intermediate Course in learning English through Tamil",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-305-7",
                description: "It contains words ranging from One letter to Eight letters and a total of 494 words, including English meanings for them and pronunciation for writing practice. And various application forms for listening practice, such as tickets and challans etc., to fill out. It contains 7 short stories for reading practice and Articles by saints for speaking practice.",
                descriptionTamil: "இதில் ஒரு எழுத்து முதல் எட்டு எழுத்துகள் வரையிலான சொற்கள் மற்றும் அவற்றுக்கான ஆங்கில அர்த்தங்கள் மற்றும் எழுத்துப் பயிற்சிக்கான உச்சரிப்பு உட்பட மொத்தம் 494 (நானூற்று தொண்ணூற்று நான்கு) வார்த்தைகள் உள்ளன. மற்றும் கேட்கும் பயிற்சிக்கான பல்வேறு விண்ணப்பப் படிவங்கள், டிக்கெட்டுகள் மற்றும் சலான்கள் போன்றவையும், வாசிப்புப் பயிற்சிக்காக 6 சிறுகதைகளையும், பேச்சுப் பயிற்சிக்கான புனிதர்களின் கட்டுரைகளையும் கொண்டுள்ளது.",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "10,000/-",
                        instalments: [
                            { label: "1st Instalment", value: "60% (6,000/-)" },
                            { label: "2nd Instalment", value: "40% (4,000/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "10,000/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "100/-" },
                            { label: "Other States", value: "150/-" },
                            { label: "Other Countries", value: "200/-" }
                        ]
                    }
                }
            }
        ]
    },
    'tamil-to-english': {
        title: "COMMUNICATIVE ENGLISH",
        subtitle: "THROUGH TAMIL",
        description: "Learn English fluently through Tamil with our structured levels.",
        color: "bg-[#2563EB]",
        spineColor: "bg-[#1E40AF]",
        footerColor: "bg-[#1E3A8A]",
        chapters: [
            {
                title: "Pre – Basic Communicative English through Tamil",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-812-0",
                edition: "First",
                year: "2025",
                description: "It consists of 1 to 10 chapters. Each and every chapter of some parts and several sections. It includes an Introduction to Language, the Golden Rule of English Tips, Subject and Verbs, Special Verbs, Duration, Preposition, Sentence formations, Question formulations, Vocabulary test and each section has its own practice and more. It contains 175 Verbs; 186 vocabulary and the total number of words and sentence formation is about 2134 (Two thousand one thirty-four).",
                descriptionTamil: "இது 1 முதல் 10 அத்தியாயங்களைக் கொண்டுள்ளது. ஒவ்வொரு அத்தியாயத்திலும் சில பகுதிகள் மற்றும் பல பிரிவுகள் உள்ளன. இது மொழிக்கான அறிமுகம், ஆங்கில உதவிக்குறிப்புகள், பொருள் மற்றும் வினைச்சொற்களின் கோல்டன் ரூல், சிறப்பு வினைச்சொற்கள், கால அளவு, முன்மொழிவு, வாக்கிய வடிவங்கள், கேள்வி சூத்திரங்கள், சொல்லகராதி சோதனை மற்றும் ஒவ்வொரு பகுதிக்கும் அதன் சொந்த பயிற்சி மற்றும் பல உள்ளன. இதில் 175 வினைச்சொற்கள் உள்ளன; 186 சொற்களஞ்சியம் மற்றும் சொற்களின் மொத்த எண்ணிக்கை மற்றும் வாக்கிய உருவாக்கம் சுமார் 2134 (இரண்டாயிரத்து நூற்றி முப்பத்தி நான்கு) ஆகியன ஆகும்.",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "9,000/- (Including 10 months)",
                        instalments: [
                            { label: "1st Instalment", value: "60% (5,400/-)" },
                            { label: "2nd Instalment", value: "40% (3,600/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "9,000/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "150/-" },
                            { label: "Other States", value: "250/-" },
                            { label: "Other Countries", value: "350/-" }
                        ]
                    }
                }
            },
            {
                title: "Basic Communicative English through Tamil",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-992-9",
                edition: "First",
                year: "2025",
                description: "It consists of 1 to 10 chapters. Each and every chapter of some parts and several sections. It includes the Golden Rule of English Tips, Duration, Preposition, tense conversion, Simple vocabulary, Sentence formations, Question formulations, formulation of Question and Answer, Vocabulary test and each section has its own practice and more. It contains 210 tense conversion words; 230 vocabulary and the total number of words and sentence formation is about 3624 (Four thousand six twenty-four).",
                descriptionTamil: "இது 1 முதல் 10 அத்தியாயங்களைக் கொண்டுள்ளது. ஒவ்வொரு அத்தியாயத்திலும் சில பகுதிகள் மற்றும் பல பிரிவுகள் உள்ளன. இதில் ஆங்கில உதவிக்குறிப்புகள், கால அளவு, முன்மொழிவு, கால மாற்றம், எளிய சொற்களஞ்சியம், வாக்கிய வடிவங்கள், கேள்வி சூத்திரங்கள், கேள்வி மற்றும் பதிலை உருவாக்குதல், சொல்லகராதி சோதனை மற்றும் ஒவ்வொரு பிரிவிற்கும் அதன் சொந்த பயிற்சி ஆகியவை அடங்கும். இதில் 210 கால மாற்று வார்த்தைகள் உள்ளன; 230 சொற்களஞ்சியம் மற்றும் சொற்களின் மொத்த எண்ணிக்கை மற்றும் வாக்கிய உருவாக்கம் சுமார் 3624 (நான்காயிரத்து ஆறு இருபத்தி நான்கு).",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "12,000/-",
                        instalments: [
                            { label: "1st Instalment", value: "60% (7,200/-)" },
                            { label: "2nd Instalment", value: "40% (4,800/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "12,000/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "150/-" },
                            { label: "Other States", value: "250/-" },
                            { label: "Other Countries", value: "350/-" }
                        ]
                    }
                }
            },
            {
                title: "Pre - Intermediate Communicative English through Tamil",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-498-6",
                edition: "First",
                year: "2025",
                description: "It aims to know how to write and speak English language. It consists of 1 to 10 chapters. Each and every chapter of some parts and several sections. It includes Tense Conversion words, positive Question Formulation of tense conversion words, Conjunction, Formulation of Question & Answers, Self–Practice Question and Answers, Vocabulary and Composition Practice, and more. It contains 320 Tense Conversion words; 507 formulation of Question & Answers and Positive Question Formulation of Tense Conversion; 40 Self–Practice, Question & Answers; 225 vocabulary, and the total number of words and sentence formation is about 2745 (Two thousand seven forty-five).",
                descriptionTamil: "ஆங்கில மொழியை எப்படி எழுதுவது மற்றும் பேசுவது என்பதை அறிவதே இதன் நோக்கமாகும். இது 1 முதல் 10 அத்தியாயங்களைக் கொண்டுள்ளது. ஒவ்வொரு அத்தியாத்திலும் சில பகுதிகள் மற்றும் பல பிரிவுகள் உள்ளன. இதில் கால மாற்று வார்த்தைகள், கால மாற்று வார்த்தைகளின் நேர்மறை கேள்வி உருவாக்கம், இணைப்பு, கேள்வி மற்றும் பதில்களை உருவாக்குதல், சுய பயிற்சி கேள்வி மற்றும் பதில்கள், சொல்லகராதி மற்றும் கலவை பயிற்சி மற்றும் பல. இதில் 320 கால மாற்று வார்த்தைகள்; 507 கேள்வி & பதில்களின் உருவாக்கம் மற்றும் கால மாற்று வார்த்தைகளின் நேர்மறை கேள்வி உருவாக்கம்; 40 சுய பயிற்சி கேள்வி & பதில்கள்; 225 சொற்களஞ்சியம் மற்றும் சொற்களின் மொத்த எண்ணிக்கை மற்றும் வாக்கிய உருவாக்கம் சுமார் 2745 (இரண்டாயிரத்து எழுநூற்று நாற்பத்தைந்து).",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "15,000/-",
                        instalments: [
                            { label: "1st Instalment", value: "60% (9,000/-)" },
                            { label: "2nd Instalment", value: "40% (6,000/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "15,000/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "150/-" },
                            { label: "Other States", value: "250/-" },
                            { label: "Other Countries", value: "350/-" }
                        ]
                    }
                }
            },
            {
                title: "Intermediate Communicative English through Tamil",
                author: "Dr. T. Sheela MBA., M. Phil",
                isbn: "978-93-7413-269-2",
                edition: "First",
                year: "2025",
                description: "It consists of 1 to 10 chapters. Each and every chapter of some parts and several sections. It includes Golden rule of English Tips for formulation of WH Questions, WH Words with Question Formulation, clauses of WH words with Question Formulation, Vocabulary and Composition Practice and more. It contains 828 WH words and clauses of Question formulation; 349 combinations of ‘Yes or No’ & WH Question formation; 760 Positive & Negative WH Question formulation; 273 Positive & Negative WH Question & Answer formulation; 200 Self – Practice of Positive & Negative ‘Yes or No’ and WH Question and Answers formations; 272 vocabulary and the total number of words and sentence formation is about 2685 (Two thousand six eighty-five).",
                descriptionTamil: "இது 1 முதல் 10 அத்தியாயங்களைக் கொண்டுள்ளது. ஒவ்வொரு அத்தியாத்திலும் சில பகுதிகள் மற்றும் பல பிரிவுகள் உள்ளன. இதில் WH கேள்விகளை உருவாக்குவதற்கான வார்த்தைகள், சுய - நேர்மறை & எதிர்மறையான 'ஆம் அல்லது இல்லை' மற்றும் WH கேள்வி மற்றும் பதில்கள் வடிவங்கள், சொல்லகராதி மற்றும் கலவை பயிற்சி மற்றும் பல. இதில் 828 WH வார்த்தைகள் மற்றும் கேள்வி உருவாக்கத்தின் உட்பிரிவுகள் உள்ளன; 349 சேர்க்கைகள் 'ஆம் அல்லது இல்லை' & WH கேள்வி உருவாக்கம்; 760 நேர்மறை & எதிர்மறை WH கேள்வி உருவாக்கம்; 273 நேர்மறை & எதிர்மறை WH கேள்வி & பதில் உருவாக்கம்; 200 சுய - நேர்மறை & எதிர்மறையான 'ஆம் அல்லது இல்லை' மற்றும் WH கேள்வி மற்றும் பதில் அமைப்புகளின் பயிற்சி; 272 சொற்களஞ்சியம் மற்றும் சொற்களின் மொத்த எண்ணிக்கை மற்றும் வாக்கிய உருவாக்கம் சுமார் 2685 (இரண்டாயிரத்து அறுநூற்று எண்பத்தைந்து).",
                payment: {
                    isComplex: true,
                    offline: {
                        registration: "500/-",
                        total: "18,000/-",
                        instalments: [
                            { label: "1st Instalment", value: "60% (10,800/-)" },
                            { label: "2nd Instalment", value: "40% (7,200/-)" }
                        ]
                    },
                    online: {
                        registration: "500/-",
                        total: "18,000/-",
                        individualLink: "250/-",
                        courier: [
                            { label: "Tamilnadu", value: "150/-" },
                            { label: "Other States", value: "250/-" },
                            { label: "Other Countries", value: "350/-" }
                        ]
                    }
                }
            }
        ]
    }
};

const BookDetailsModal = ({ book, onClose }) => {
    if (!book) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>

                <h3 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-3 relative z-10">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    {book.title}
                </h3>

                {/* Top Right Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-red-500 hover:text-white transition-all z-[110] shadow-sm"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Author & ISBN Metadata */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Author</p>
                        <p className="text-sm font-black text-slate-700">{book.author || 'Dr. T. Sheela'}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">ISBN Number</p>
                        <p className="text-sm font-black text-slate-700">{book.isbn || '978-93-XXXX-XX-X'}</p>
                    </div>
                </div>

                <div className="space-y-8 relative z-10">
                    {/* Descriptions */}
                    <div className="grid grid-cols-1 gap-6">
                        {book.description && (
                            <div className="bg-blue-50/30 p-4 rounded-2xl border border-blue-100">
                                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Course Curriculum</h4>
                                <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                                    {book.description}
                                </p>
                            </div>
                        )}

                        {book.descriptionTamil && (
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">பாடம் பற்றிய விவரங்கள்</h4>
                                <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                                    {book.descriptionTamil}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Payment Details Section */}
                    {book.payment && (
                        <div className="border-t border-gray-100 pt-8">
                            <h4 className="text-lg font-black text-blue-900 mb-6 flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 text-sm">₹</span>
                                </div>
                                Fee Structure / கட்டண விவரங்கள்
                            </h4>

                            {book.payment.isComplex ? (
                                <div className="space-y-6">
                                    {/* Offline Class */}
                                    <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                                        <h5 className="font-black text-blue-800 mb-4 uppercase text-xs tracking-widest">Offline Class / நேரடி வகுப்பு</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs text-blue-600 font-bold uppercase mb-1">Registration</p>
                                                <p className="font-black text-gray-800">Rs.{book.payment.offline.registration}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-600 font-bold uppercase mb-1">Total Fee</p>
                                                <p className="font-black text-gray-800">Rs.{book.payment.offline.total}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-blue-100">
                                            <p className="text-[10px] text-blue-600 font-bold uppercase mb-2 tracking-tighter">Installment Plan</p>
                                            <div className="flex flex-wrap gap-3">
                                                {book.payment.offline.instalments.map((inst, i) => (
                                                    <div key={i} className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">
                                                        <span className="text-[10px] font-bold text-blue-800">{inst.label}: </span>
                                                        <span className="text-xs font-black text-blue-950">{inst.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Online Class */}
                                    <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-100">
                                        <h5 className="font-black text-sky-800 mb-4 uppercase text-xs tracking-widest">Online Class / ஆன்லைன் வகுப்பு</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div>
                                                <p className="text-xs text-sky-600 font-bold uppercase mb-1">Registration</p>
                                                <p className="font-black text-gray-800">Rs.{book.payment.online.registration}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-sky-600 font-bold uppercase mb-1">Total Fee</p>
                                                <p className="font-black text-gray-800">Rs.{book.payment.online.total}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-sky-600 font-bold uppercase mb-1">Link Fee</p>
                                                <p className="font-black text-gray-800">Rs.{book.payment.online.individualLink}</p>
                                            </div>
                                        </div>
                                        {/* Courier */}
                                        <div className="mt-4 pt-4 border-t border-sky-100">
                                            <p className="text-[10px] text-sky-600 font-bold uppercase mb-2">Courier Charges (Includes App Form, Books, Note)</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                {book.payment.online.courier.map((item, i) => (
                                                    <div key={i} className="bg-white/60 px-2 py-1.5 rounded-lg text-[10px] flex justify-between items-center sm:flex-col sm:items-start border border-sky-100">
                                                        <span className="font-bold text-sky-600">{item.label}</span>
                                                        <span className="font-black text-sky-900">Rs.{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                                        <div>
                                            <p className="text-xs text-green-700 font-bold uppercase mb-1 tracking-wider">Registration fee / பதிவு கட்டணம்</p>
                                            <p className="text-2xl font-black text-gray-900">{book.payment.registration}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-green-700 font-bold uppercase mb-1 tracking-wider">Total Fee / மொத்த கட்டணம்</p>
                                            <p className="text-2xl font-black text-gray-900">{book.payment.total}</p>
                                        </div>
                                    </div>

                                    {book.payment.instalments && (
                                        <div className="pt-6 border-t border-green-200/50">
                                            <p className="text-[10px] text-green-700 font-bold uppercase mb-3 tracking-widest">Installment Payment Method / தவணை முறை</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {book.payment.instalments.map((inst, i) => (
                                                    <div key={i} className="bg-white px-4 py-3 rounded-xl border border-green-100 flex justify-between items-center shadow-sm">
                                                        <span className="text-xs font-bold text-green-800">{inst.label}</span>
                                                        <span className="font-black text-green-950">{inst.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {!book.description && !book.descriptionTamil && !book.payment && (
                        <div className="text-center py-10 opacity-50">
                            <Star className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                            <p className="text-gray-500 italic">Detailed information for this volume is coming soon.</p>
                        </div>
                    )}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 text-white px-12 py-4 rounded-full font-black hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-200 uppercase tracking-widest text-sm"
                    >
                        Close
                    </button>
                </div>

                <div className="mt-6 opacity-60 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GLOBAL SR ENGLISH LEARNING ACADEMY</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ChapterBook = ({ title, index, courseColor, spineColor, footerColor, onClick, categoryLabel }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
            onClick={onClick}
        >
            {categoryLabel && (
                <div className="mb-2 bg-blue-600/10 px-4 py-1.5 rounded-full border border-blue-600/10 shadow-sm">
                    <span className="text-[10px] font-black text-blue-800 uppercase tracking-[0.15em] whitespace-nowrap">{categoryLabel}</span>
                </div>
            )}
            {/* Small Book Visual */}
            <div className={`relative w-[220px] h-[310px] rounded-r-lg rounded-l-sm shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 cursor-pointer group`}>

                {/* Full Cover Image */}
                <img
                    src={frontImg}
                    alt="Book Cover"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Spine Overlay */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 ${spineColor} z-20 opacity-80 shadow-inner`}></div>

                {/* Content Overlay - Cleaned up to show more of the cover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Floating Volume Badge */}
                    <div className="absolute top-3 right-3 w-9 h-9 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <span className="font-black text-white text-xs">{index + 1}</span>
                    </div>
                </div>

                {/* Interactive Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
            </div>

            {/* Label */}
            <h4 className="text-gray-700 font-bold text-xs text-center max-w-[200px] leading-tight px-2">
                {title}
            </h4>
            <p className="text-[8px] font-bold text-slate-400 tracking-[0.2em] uppercase bg-slate-100 py-1 px-3 rounded-full inline-block mt-2">
                Click to Preview
            </p>
        </motion.div>
    );
};

const CourseLibrary = () => {
    const { courseId } = useParams();
    const [selectedBook, setSelectedBook] = React.useState(null);
    const course = coursesData[courseId];

    if (!course) {
        return (
            <div className="min-h-screen grid place-items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Course Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col md:flex-row gap-6 md:items-end justify-between border-b border-gray-200 pb-8"
                    >
                        <div>
                            <h1 className={`text-xl md:text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r ${courseId === 'beginner-course' ? 'from-sky-600 to-sky-900' : 'from-blue-600 to-blue-900'} mb-1`} style={{ color: courseId === 'beginner-course' ? '#0369a1' : '#1e40af' }}>
                                {course.title}
                            </h1>
                            <p className="text-sm text-gray-400 font-bold tracking-widest uppercase">
                                {course.subtitle}
                            </p>
                            {courseId === 'beginner-course' && (
                                <div className="mt-4 flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-blue-900/60 font-black text-[10px] uppercase tracking-widest group">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-lg shadow-blue-200"></div>
                                        Learning English
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-900/60 font-black text-[10px] uppercase tracking-widest group">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-lg shadow-blue-200"></div>
                                        Learning English through Tamil
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">Total Volumes</p>
                            <p className="text-4xl font-black text-slate-800">{course.chapters.length}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Grid of Books */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
                    {course.chapters.map((chapter, index) => {
                        let categoryLabel = null;
                        if (courseId === 'beginner-course') {
                            categoryLabel = index < 2 ? "Learning English" : "Learning English through Tamil";
                        }
                        return (
                            <ChapterBook
                                key={index}
                                title={chapter.title}
                                index={index}
                                courseColor={course.color}
                                spineColor={course.spineColor}
                                footerColor={course.footerColor}
                                onClick={() => setSelectedBook(chapter)}
                                categoryLabel={categoryLabel}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Modal for Book Details */}
            <AnimatePresence>
                {selectedBook && (
                    <BookDetailsModal
                        book={selectedBook}
                        onClose={() => setSelectedBook(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default CourseLibrary;
