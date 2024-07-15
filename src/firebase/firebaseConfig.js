import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyBAPVRyd5HDMZjhDZmrbviqGuD6FxhO1Zk",
  authDomain: "final-project-fea95.firebaseapp.com",
  databaseURL:"https://final-project-fea95-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "final-project-fea95",
  storageBucket: "final-project-fea95.appspot.com",
  messagingSenderId: "311614655100",
  appId: "1:311614655100:web:8fca530b227ef71fac17f9"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}