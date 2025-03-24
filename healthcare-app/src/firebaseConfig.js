import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (API keys are directly included)
const firebaseConfig = {
  apiKey: "AIzaSyB9GgXVW2ccj2lR9MjJ1h5wENScWE3tIsE",
  authDomain: "ai-reduces-healthcare.firebaseapp.com",
  projectId: "ai-reduces-healthcare",
  storageBucket: "ai-reduces-healthcare.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "172215333380",
  appId: "1:172215333380:web:172ab8e4f9dfe32676fb51",
  measurementId: "G-Z9RH2W2MKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
export default app;
