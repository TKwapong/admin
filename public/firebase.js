// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCfM-EsMMRA4bL-PSv-tT7XL3w1ajcrcuQ",
    authDomain: "userapplication-4369d.firebaseapp.com",
    databaseURL: "https://userapplication-4369d-default-rtdb.firebaseio.com",
    projectId: "userapplication-4369d",
    storageBucket: "userapplication-4369d.appspot.com",
    messagingSenderId: "630061711045",
    appId: "1:630061711045:web:74a6230996fecb3cb3faac",
    measurementId: "G-2RF66MZ1KL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();



