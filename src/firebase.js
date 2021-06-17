import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCVihAaBdf1N0oZ6jHBNdDgResb4I7CrRg",
    authDomain: "spotflix-app.firebaseapp.com",
    databaseURL: "https://spotflix-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spotflix-app",
    storageBucket: "spotflix-app.appspot.com",
    messagingSenderId: "771026042416",
    appId: "1:771026042416:web:e0583705b204fc9541b7f5",
    measurementId: "G-M8LS1BBVH3"
  };
  
  
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;
  