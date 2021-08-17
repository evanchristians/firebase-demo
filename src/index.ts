import dotenv from "dotenv";
import { initFirebase } from "./utils/initFirebase";
import { useWebFonts } from "./utils/useWebFonts";
import firebase from "firebase";
import "firebase/firestore";

dotenv.config();

useWebFonts();
initFirebase();

const db = firebase.firestore();

const codeBlock = document.getElementById("code");

db.collection("users")
    .orderBy("born")
    .limitToLast(1)
    .get()
    .then((querySnapshot) =>
        querySnapshot.forEach((result) => {
            if (codeBlock) codeBlock.innerHTML += JSON.stringify(result.data());
        })
    );
