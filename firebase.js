// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8JOvDXc1leRsuMITizEJ9nxQNbMnCMY",
  authDomain: "instagram-8a606.firebaseapp.com",
  projectId: "instagram-8a606",
  storageBucket: "instagram-8a606.appspot.com",
  messagingSenderId: "918863099936",
  appId: "1:918863099936:web:d3dd289a4e414945fc2445"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db , storage};