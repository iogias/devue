import firebase from "firebase/app";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhFTRHac6mKK1zSY-c03eVbQ-X3Zcq_28",
  authDomain: "iogias-firebase-vue.firebaseapp.com",
  projectId: "iogias-firebase-vue",
  storageBucket: "iogias-firebase-vue.appspot.com",
  messagingSenderId: "255302966554",
  appId: "1:255302966554:web:c3c20b0ad29f6b508460a3",
  measurementId: "G-H6HCBP9Q23",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
