import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyALbTrw1OJYRN060WEF9ALu4rMFmAOIV24",
    authDomain: "udemy-ninja-smoothies-4261e.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-4261e.firebaseio.com",
    projectId: "udemy-ninja-smoothies-4261e",
    storageBucket: "udemy-ninja-smoothies-4261e.appspot.com",
    messagingSenderId: "287002254787"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();