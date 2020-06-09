import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCGVmeobrlJ32dyzPLy8YEJ1saGwbGzTQs",
    authDomain: "gikjik.firebaseapp.com",
    databaseURL: "https://gikjik.firebaseio.com",
    projectId: "gikjik",
    storageBucket: "gikjik.appspot.com",
    messagingSenderId: "66290419210",
    appId: "1:66290419210:web:df69b4f4428b08988701f3",
    measurementId: "G-QSS042D62K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  const db = firebase.firestore();

  

  export default db;