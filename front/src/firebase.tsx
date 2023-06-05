// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_xRA7yxNVWOSO_r16CAWGw6RdOcQ2iEw",
  authDomain: "portfolio-a4a3b.firebaseapp.com",
  projectId: "portfolio-a4a3b",
  storageBucket: "portfolio-a4a3b.appspot.com",
  messagingSenderId: "802373601726",
  appId: "1:802373601726:web:5b9b8207281de247ffd1ef",
  measurementId: "G-MJEH6LDVEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
