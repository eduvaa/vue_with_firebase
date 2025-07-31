// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjt3noLSXa7j_wwShtKXh4F0nvr7jemZg",
  authDomain: "vuewithfirebase-e6576.firebaseapp.com",
  projectId: "vuewithfirebase-e6576",
  storageBucket: "vuewithfirebase-e6576.firebasestorage.app",
  messagingSenderId: "1025814919828",
  appId: "1:1025814919828:web:16ee24baad3a1defcdd281",
  measurementId: "G-26DR2L4882"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }