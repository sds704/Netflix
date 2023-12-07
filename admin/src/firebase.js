// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPh884ApArmA9O9u3sKDMfct4AruFMqwY",
    authDomain: "netflix-d06f9.firebaseapp.com",
    projectId: "netflix-d06f9",
    storageBucket: "netflix-d06f9.appspot.com",
    messagingSenderId: "664078551332",
    appId: "1:664078551332:web:502dc8ce1b9497bc864bb1",
    measurementId: "G-77VT0VKKGE"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

export default storage;