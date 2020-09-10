import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAqB2ZjjlIVYEUrOwacCRGVN-QdtUPDroE",
  authDomain: "challenge-681ff.firebaseapp.com",
  databaseURL: "https://challenge-681ff.firebaseio.com",
  projectId: "challenge-681ff",
  storageBucket: "challenge-681ff.appspot.com",
  messagingSenderId: "59545738861",
  appId: "1:59545738861:web:ed3cac45cd4a332860e964"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }