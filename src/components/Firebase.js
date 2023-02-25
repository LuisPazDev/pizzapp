import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbXD7c7lnCWzgrwGIoI2BDmWdoKD_OefI",
  authDomain: "ucamp-a4ad3.firebaseapp.com",
  projectId: "ucamp-a4ad3",
  storageBucket: "ucamp-a4ad3.appspot.com",
  messagingSenderId: "715906993150",
  appId: "1:715906993150:web:a5075547d14739994e8eaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

  