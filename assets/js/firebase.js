
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
  import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDppdvo9PSBfi6xGuzqlCLsuOW2WC-Xt4s",
    authDomain: "js-cp-madt.firebaseapp.com",
    projectId: "js-cp-madt",
    storageBucket: "js-cp-madt.appspot.com",
    messagingSenderId: "893767330863",
    appId: "1:893767330863:web:eb57bb49c2a6a50a53aada",
    measurementId: "G-EZFQNH6XC2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getDatabase();

  // var firebase_username = document.getElementById("")

//   Insert data function


