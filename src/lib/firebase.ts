// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArtvMvtscWbyzwoMEAX1bdOFbkwZmR8XA",
  authDomain: "qualicams.firebaseapp.com",
  projectId: "qualicams",
  storageBucket: "qualicams.firebasestorage.app",
  messagingSenderId: "518867544635",
  appId: "1:518867544635:web:c28cacef80a2164a5d0a1e",
  measurementId: "G-YSPS09M8W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

export default app;