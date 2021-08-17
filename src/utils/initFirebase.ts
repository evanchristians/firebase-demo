import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "evanchristians.firebaseapp.com",
    projectId: "evanchristians",
    storageBucket: "evanchristians.appspot.com",
    messagingSenderId: "1022641952882",
    appId: "1:1022641952882:web:f682b0faf4c194227b8aeb",
    measurementId: "G-SCP1JX80DY",
};

export const initFirebase = () => {
    firebase.initializeApp(firebaseConfig);
};
