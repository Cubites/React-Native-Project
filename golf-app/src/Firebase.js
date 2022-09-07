// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from 'firebase';
let database;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8bGBbCBJI20BSjLTn6DBGccBBP9NsYws",
  authDomain: "golf-app-afb06.firebaseapp.com",
  databaseURL: "https://golf-app-afb06-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "golf-app-afb06",
  storageBucket: "golf-app-afb06.appspot.com",
  messagingSenderId: "459503699415",
  appId: "1:459503699415:web:dde75b0298796dd3313792",
  measurementId: "G-LNQ4V2TY3D"
};

// Initialize Firebase
const fire = () => {
    firebase.initializeApp(firebaseConfig);
}

export default fire;