
// Firebase connection JS file 
var firebaseConfig = {
    apiKey: "AIzaSyAg96FyAbPOaUFcP8CT8DcVpV-Kh30Fbhw",
    authDomain: "to-do-app-368dd.firebaseapp.com",
    projectId: "to-do-app-368dd",
    storageBucket: "to-do-app-368dd.appspot.com",
    messagingSenderId: "515719563693",
    appId: "1:515719563693:web:7501dc8146fc2670b83924",
    measurementId: "G-CH15MGNMTX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
