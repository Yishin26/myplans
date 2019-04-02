import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
  // Initialize Firebase
  apiKey: "AIzaSyAoxkqiVbwmNtpGZtJpO6qtrWFbhyvap8M",
  authDomain: "my-plans-1346c.firebaseapp.com",
  databaseURL: "https://my-plans-1346c.firebaseio.com",
  projectId: "my-plans-1346c",
  storageBucket: "my-plans-1346c.appspot.com",
  messagingSenderId: "587721080139"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});


export default firebase;