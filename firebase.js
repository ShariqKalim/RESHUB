import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCOdvgG3ZWQ-L9uAtMiExAMG2Qbgj2zDlw",
  authDomain: "reshub-auth-aeead.firebaseapp.com",
  projectId: "reshub-auth-aeead",
  storageBucket: "reshub-auth-aeead.appspot.com",
  messagingSenderId: "318438276413",
  appId: "1:318438276413:web:b2d0a589b8d256f6115954",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, serverTimestamp, firebase };
