import React, { useState, useEffect } from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import background image
import contactBg from './assets/contact-bg.png';

export default function ContactGrid() {
  const [toast, setToast] = useState(null);

  // Auto-hide toast after 2.5s
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // 📞 Handle phone click
  const handlePhoneClick = () => {
    const phoneNumber = "9345759037";
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:+91${phoneNumber}`;
    } else {
      try {
        navigator.clipboard.writeText(phoneNumber);
        setToast("📋 Phone number copied");
      } catch (err) {
        setToast("⚠ Copy failed");
      }
    }
  };

  // ✅ Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const url = "https://wa.me/919345759037";
    try {
      navigator.clipboard.writeText(url);
      setToast("📋 WhatsApp link copied");
    } catch {
      setToast("📋 WhatsApp: 9345759037");
    }
    window.open(url, "_blank");
  };

  // ✉️ Handle Email click
  const handleEmailClick = () => {
    const email = "globalsr2022@gmail.com";
    setToast("✉️ Opening your email app...");

    // Copy as backup
    try {
      navigator.clipboard.writeText(email);
      setTimeout(() => setToast("📧 Email copied to clipboard"), 1500);
    } catch (err) { }

    // Trigger mailto
    window.location.href = `mailto:${email}`;
  };

  const contactInfo = [
    {
      icon: <MdLocationOn size={40} />,
      label: 'Main Center',
      href: 'https://www.google.com/maps/place/GLOBAL+SR+ENGLISH+LEARNING+ACADEMY+(Spoken+English+through+Tamil)/@10.9424,76.9344,17z/data=!4m6!3m5!1s0x3ba8591e33028909:0xc7a585f6d48f67f2!8m2!3d10.9423928!4d76.9344337!16s%2Fg%2F11t1ddpffj?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D',
    },
    {
      icon: <MdEmail size={40} />,
      label: 'Email Us',
      onClick: handleEmailClick,
    },
    {
      icon: <MdPhone size={40} />,
      label: 'Call Us',
      onClick: handlePhoneClick,
    },
    {
      icon: <FaInstagram size={40} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/globalsr2022?utm_source=qr&igsh=MXMxcTNzcWZvd3poMw==',
    },
    {
      icon: <FaWhatsapp size={40} />,
      label: 'WhatsApp',
      onClick: handleWhatsAppClick,
    },
    {
      icon: <FaFacebook size={40} />,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1ATSEn7iew/',
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="w-full max-w-3xl lg:max-w-5xl text-white text-center space-y-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-2xl">
            Get In <span className="text-blue-400">Touch</span>
          </h1>

          {/* Contact Grid */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 grid grid-cols-2 sm:grid-cols-3 gap-8 shadow-2xl border border-white/20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col items-center space-y-4 group cursor-pointer"
                onClick={item.onClick ? item.onClick : undefined}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div className="text-white group-hover:text-blue-400 transition-colors transform group-hover:scale-110 duration-300">{item.icon}</div>
                    <span className="text-lg font-bold tracking-wide">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <>
                    <div className="text-white group-hover:text-blue-400 transition-colors transform group-hover:scale-110 duration-300">{item.icon}</div>
                    <span className="text-lg font-bold tracking-wide">
                      {item.label}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ask Question Button */}
      <Link
        to="/ask"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full shadow-2xl flex items-center justify-center animate-bounce focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
      >
        <BiMessageDetail size={32} />
      </Link>

      {/* ✅ Toast Notification */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-blue-900 text-white px-6 py-3 rounded-2xl shadow-2xl text-sm z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {toast}
        </div>
      )}
    </div>
  );
}