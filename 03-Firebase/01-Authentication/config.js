import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCBGXwLSdQ9U56gWkiSh6uBHnIiW5q5xM",
  authDomain: "practice-smit.firebaseapp.com",
  projectId: "practice-smit",
  storageBucket: "practice-smit.appspot.com",
  messagingSenderId: "153366729290",
  appId: "1:153366729290:web:923d668c8c805997a30cb3",
  measurementId: "G-3X9MQZJTPB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);