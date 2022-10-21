// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wKPNu_k-3u2OF4acbppsKQK5nUIHr0M",
  authDomain: "mysite-366002.firebaseapp.com",
  projectId: "mysite-366002",
  storageBucket: "mysite-366002.appspot.com",
  messagingSenderId: "37749628129",
  appId: "1:37749628129:web:fa2b726311f3749f45aba0",
  measurementId: "G-M3RZZJJX45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);