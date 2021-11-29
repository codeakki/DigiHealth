import firebase from "firebase";


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "digi--health.firebaseapp.com",
  projectId: "digi--health",
  storageBucket: "digi--health.appspot.com",
  messagingSenderId: "343924416411",
  appId: "1:343924416411:web:0662faade575eca242cb3e",
  measurementId: "G-TL0WSXJKWC"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
