import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "*******",
  authDomain: "*****.firebaseapp.com",
  databaseURL: "https:/*****.firebaseio.com",
  projectId: "******",
  storageBucket: "*****.appspot.com",
  messagingSenderId: "*******",
  appId: "*****"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */

export default firebaseApp.firestore();
