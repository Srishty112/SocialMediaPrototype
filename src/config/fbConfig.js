import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD7Om6kid5EqjKry2GpESGhQRqBxqUmTcc",
    authDomain: "net-ninja-marioplan-eef83.firebaseapp.com",
    projectId: "net-ninja-marioplan-eef83",
    storageBucket: "net-ninja-marioplan-eef83.appspot.com",
    messagingSenderId: "995471059952",
    appId: "1:995471059952:web:4e74c74ad74b6f472bcb35"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true})
  const storage= firebase.storage()


  export {storage, firebase as default};