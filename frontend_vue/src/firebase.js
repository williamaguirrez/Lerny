import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAV33FlhDRJGsH83oqDdhpxpo2bC1scXNE",
  authDomain: "me310-sugar.firebaseapp.com",
  databaseURL: "https://me310-sugar.firebaseio.com",
  projectId: "me310-sugar",
  storageBucket: "me310-sugar.appspot.com",
  messagingSenderId: "1004615747365",
  appId: "1:1004615747365:web:de1375120b7698a0fe7ccc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */

export default firebaseApp.firestore();