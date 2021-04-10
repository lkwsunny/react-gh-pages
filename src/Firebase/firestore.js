//import firebase, { firebaseConfig } from "./firebase.config";

import firebase from 'firebase/app'
import 'firebase/firestore'

 var firebaseConfig = {
  apiKey: "AIzaSyBavqvQ7C0zpkqHdezCHIrAXAXkBJWUL8c",
  authDomain: "qxu2003.firebaseapp.com",
  databaseURL: "https://qxu2003-default-rtdb.firebaseio.com",
  projectId: "qxu2003",
  storageBucket: "qxu2003.appspot.com",
  messagingSenderId: "698550454152",
  appId: "1:698550454152:web:eca257ee5ef739c3ebdc3d",
  measurementId: "G-V16FQ0B5PY"
};

  firebase.initializeApp(firebaseConfig);


export default firebase  