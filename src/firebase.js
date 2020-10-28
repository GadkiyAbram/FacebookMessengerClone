import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBf4kkI5i0mAHue9vQgJK8WgZ3ThxMTUDA",
    authDomain: "facebookmessengerclone-27fc0.firebaseapp.com",
    databaseURL: "https://facebookmessengerclone-27fc0.firebaseio.com",
    projectId: "facebookmessengerclone-27fc0",
    storageBucket: "facebookmessengerclone-27fc0.appspot.com",
    messagingSenderId: "491341595237",
    appId: "1:491341595237:web:52351a9fd7b7d13b42bc8c",
    measurementId: "G-W23SW55WRZ"
  });
  
  const db = firebaseApp.firestore();

  export default db;