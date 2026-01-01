import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css';
import Hero from './Hero';
import Footer from './Footer';
import Contact from './Contact';
import AskQuestion from './AskQuestion';
import ScrollHandler from './ScrollHandler';
import PrivacyPolicy from './PrivacyPolicy';
import Services from './Services';
import Membership from './Membership';
import CourseLibrary from './CourseLibrary'; // Imported new component
import SEO from './SEO';
import StructuredData from './StructuredData';
import FreeAccessories from './FreeAccessories';

import InstagramFeed from './instapost'; // 👈 Instagram page
import SquarefeetPlans from './Membership';
import AboutUs from './TrainingPrograms';
import Niruvanam from './niruvanam';
import Founder from './Founder';
import IDCards from './IDCards';
import GalleryPage from './GalleryPage';
import StaffPage from './StaffPage';
import AdminPanel from './AdminPanel';
import CertificatesPage from './CertificatesPage';
import ApplyDemo from './ApplyDemo';
import DemoPromotion from './DemoPromotion';
import Candidates from './Candidates';

function App() {
  return (
    <Router>
      <ScrollHandler />
      <StructuredData />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SEO
                title="Home - Best English Learning Classes in Coimbatore"
                description="Transform your English skills at GLOBAL SR ENGLISH LEARNING ACADEMY in Kovai Pudur, Coimbatore's premier institute for Spoken English and professional communication training. Expert training by Dr. T. Sheela MBA., M. Phil with proven results. Online & offline classes available."
                keywords="English learning academy Coimbatore, Spoken English classes Kovai Pudur, English communication training, Dr. T. Sheela MBA., M. Phil, GLOBAL SR ENGLISH LEARNING ACADEMY"
              />
              <section id="home"><Hero /></section>
              <DemoPromotion />
              <section id="services"><Services /></section>
              <FreeAccessories />
              <section id="pricing"><SquarefeetPlans /></section>
              <section id="contact"><Contact /></section>
              <AboutUs />
              <IDCards />

              <Footer />
            </>
          }
        />
        <Route
          path="/niruvanam"
          element={
            <>
              <SEO
                title="Niruvanam - Community & Events"
                description="Join the GLOBAL SR ENGLISH LEARNING ACADEMY community. Connect with fellow learners and stay tuned for upcoming academic networking opportunities."
                keywords="English learning community, language networking, GLOBAL SR ENGLISH LEARNING ACADEMY community, Niruvanam"
              />
              <Niruvanam />
            </>
          }
        />
        <Route
          path="/founder"
          element={
            <>
              <SEO
                title="Dr. T. Sheela MBA., M. Phil - Founder & Director"
                description="Meet Dr. T. Sheela MBA., M. Phil, founder of GLOBAL SR ENGLISH LEARNING ACADEMY. Expert English educator with extensive experience in professional communication training."
                keywords="Dr. T. Sheela MBA., M. Phil, English educator, GLOBAL SR ENGLISH LEARNING ACADEMY founder, English teaching expert Coimbatore"
                type="profile"
              />
              <Founder />
            </>
          }
        />
        <Route
          path="/ask"
          element={
            <>
              <SEO
                title="Ask a Question - Get Expert Guidance"
                description="Have questions about our English courses? Ask our experts about Spoken English or any language learning queries. Get personalized guidance from GLOBAL SR ENGLISH LEARNING ACADEMY."
                keywords="English learning questions, course inquiry, expert guidance"
              />
              <AskQuestion />
            </>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <div className="bg-blue-100 min-h-screen rounded-t-[3rem] ">
              <SEO
                title="Privacy Policy"
                description="Read GLOBAL SR ENGLISH LEARNING ACADEMY's privacy policy. Learn how we protect your personal information and maintain data security."
                keywords="privacy policy, data protection, user privacy, GLOBAL SR ENGLISH LEARNING ACADEMY"
              />
              <PrivacyPolicy />
            </div>
          }
        />

        <Route
          path="/membership"
          element={
            <>
              <SEO
                title="Membership Plans & Pricing"
                description="Explore GLOBAL SR ENGLISH LEARNING ACADEMY's flexible membership plans and pricing options. Choose the perfect English learning package for your goals - Spoken English or Corporate Training."
                keywords="English course pricing, membership plans, course packages"
              />
              <Membership />
            </>
          }
        />

        {/* 🔽 New Library Route */}
        <Route
          path="/library/:courseId"
          element={
            <>
              <SEO
                title="Course Library - Learning Resources"
                description="Access comprehensive learning materials, practice tests, and resources for our English courses at GLOBAL SR ENGLISH LEARNING ACADEMY."
                keywords="course materials, learning library, study materials"
              />
              <CourseLibrary />
            </>
          }
        />

        {/* 🔽 New Instagram page route */}
        <Route
          path="/instagram"
          element={
            <>
              <SEO
                title="Instagram Feed - Latest Updates"
                description="Follow GLOBAL SR ENGLISH LEARNING ACADEMY on Instagram for daily English tips, student success stories, and latest academy updates."
                keywords="GLOBAL SR ENGLISH LEARNING ACADEMY Instagram, English tips, student success, social media, learning updates"
              />
              <InstagramFeed />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <SEO
                title="Gallery - Student Success & Events"
                description="Explore photos from GLOBAL SR ENGLISH LEARNING ACADEMY. See our vibrant learning community and student achievements in action."
                keywords="academy gallery, student photos, success stories, GLOBAL SR ENGLISH LEARNING ACADEMY Chennai"
              />
              <GalleryPage />
            </>
          }
        />
        <Route
          path="/staff"
          element={
            <>
              <SEO
                title="Our Expert Staff - Teaching Team"
                description="Meet the dedicated and experienced teaching staff at GLOBAL SR ENGLISH LEARNING ACADEMY in Coimbatore. Our expert educators specialize in Spoken English training."
                keywords="English teachers Coimbatore, teaching staff, expert educators, GLOBAL SR ENGLISH LEARNING ACADEMY"
              />
              <StaffPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/certificates"
          element={
            <>
              <SEO
                title="Our Certifications & Accreditations - GLOBAL SR ENGLISH LEARNING ACADEMY"
                description="View our official Government of India registration, ISO 9001:2015 certification, and MSME accreditation."
                keywords="certifications, ISO 9001:2015, government registered, MSME, GLOBAL SR ENGLISH LEARNING ACADEMY"
              />
              <CertificatesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <SEO
                title="Admin Panel - Staff Management"
                description="Admin panel for managing GLOBAL SR ENGLISH LEARNING ACADEMY staff members and ID cards."
                keywords="admin, staff management, GLOBAL SR ENGLISH LEARNING ACADEMY"
              />
              <AdminPanel />
            </>
          }
        />
        <Route
          path="/apply"
          element={
            <>
              <SEO
                title="Apply for Free Demo - GLOBAL SR ENGLISH LEARNING ACADEMY"
                description="Book your free demo session at GLOBAL SR ENGLISH LEARNING ACADEMY. Experience our English learning methodology and start your journey to fluency today."
                keywords="free demo, English class demo, book session, language learning, GLOBAL SR ENGLISH LEARNING ACADEMY"
              />
              <ApplyDemo />
            </>
          }
        />
        <Route
          path="/candidates"
          element={
            <>
              <SEO
                title="Our Candidates - Student Success Showcase"
                description="Meet the students of GLOBAL SR ENGLISH LEARNING ACADEMY. View official ID cards of our verified candidates who have successfully mastered English communication."
                keywords="English students, course graduates, student ID cards, GLOBAL SR candidates"
              />
              <Candidates />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router >
  );
}

export default App;