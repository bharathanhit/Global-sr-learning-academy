// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnm_OQBNX-fzEVB_dA2oY8jPMtXKt_ZGA",
  authDomain: "golbalsr.firebaseapp.com",
  projectId: "golbalsr",
  storageBucket: "golbalsr.firebasestorage.app",
  messagingSenderId: "207687509158",
  appId: "1:207687509158:web:5199a3caf706ef583cc067",
  measurementId: "G-W4H5FDGL89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase modules
export { app, db, analytics };