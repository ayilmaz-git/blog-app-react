import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDU1rlxtVCrS1LCZcvhGCdm72MaD9W_8SM",
  authDomain: "reactjs-blog-app.firebaseapp.com",
  databaseURL: "https://reactjs-blog-app-default-rtdb.firebaseio.com",
  projectId: "reactjs-blog-app",
  storageBucket: "reactjs-blog-app.appspot.com",
  messagingSenderId: "1083112772929",
  appId: "1:1083112772929:web:14af6aa977ae544a04bdc0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase};
