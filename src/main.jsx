import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGMUr1CflqQcxN-5KPIN2_25-p2zcOWsw",
  authDomain: "la-pluma-roja.firebaseapp.com",
  projectId: "la-pluma-roja",
  storageBucket: "la-pluma-roja.appspot.com",
  messagingSenderId: "940495008458",
  appId: "1:940495008458:web:ed0187c016cf462ea0ba33"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
