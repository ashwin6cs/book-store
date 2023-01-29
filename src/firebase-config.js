import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrFsNgL26UQV5Wxxk8a3nDzQAmzVNBbs8",
  authDomain: "react-crud-24971.firebaseapp.com",
  projectId: "react-crud-24971",
  storageBucket: "react-crud-24971.appspot.com",
  messagingSenderId: "27487533150",
  appId: "1:27487533150:web:3c8528f7ebb482f2535ccf",
  measurementId: "G-DGNKFC13ZV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD6bTgMCYBPY4jm_Pp-hgr65rvZoRRZMw8",
//   authDomain: "project-7add1.firebaseapp.com",
//   projectId: "project-7add1",
//   storageBucket: "project-7add1.appspot.com",
//   messagingSenderId: "760075716088",
//   appId: "1:760075716088:web:588d8853ecc229c2d1c20d",
//   measurementId: "G-JW3FNRSN33",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
