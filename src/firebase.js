import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDkU-5G7VmeermHSV-zxknhqGZP7-zQCpg",
  authDomain: "clone-4ed58.firebaseapp.com",
  projectId: "clone-4ed58",
  storageBucket: "clone-4ed58.appspot.com",
  messagingSenderId: "614090089134",
  appId: "1:614090089134:web:788fbc326ec995aa13833f",
  measurementId: "G-WBH8YWTDQP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
