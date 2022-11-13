import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHwMRCEDzQTflDMyZX-m8txM0kICBZ8Co",
  authDomain: "know-your-errors.firebaseapp.com",
  projectId: "know-your-errors",
  storageBucket: "know-your-errors.appspot.com",
  messagingSenderId: "187142752533",
  appId: "1:187142752533:web:5b7276e2c44e20c472411c",
  measurementId: "G-W312G00JVV"
};

//   init firebase 

const app = initializeApp(firebaseConfig);

//init firestore or data base

const db = getFirestore(app);


export {db}     //to communicate with firestore 

