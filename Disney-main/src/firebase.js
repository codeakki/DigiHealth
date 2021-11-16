import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAxxrevc_wCoZnJL7q81WfU0JVX7-Ey9t8",
    authDomain: "disney-prime.firebaseapp.com",
    projectId: "disney-prime",
    storageBucket: "disney-prime.appspot.com",
    messagingSenderId: "910304343797",
    appId: "1:910304343797:web:a60ac4bda546f96db237bc",
    measurementId: "G-P0BEVP8STN"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;