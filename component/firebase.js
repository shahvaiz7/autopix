import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

try {
    const firebaseConfig = {
        apiKey: "AIzaSyDCJ84YoSwJpgVscv2ax43PJASqFEZathY",
        authDomain: "carline-1685b.firebaseapp.com",
        databaseURL: "https://carline-1685b-default-rtdb.firebaseio.com",
        projectId: "carline-1685b",
        storageBucket: "carline-1685b.appspot.com",
        messagingSenderId: "275081420892",
        appId: "1:275081420892:web:c18c20173ee45eea148699",
        measurementId: "G-YTMHQ9CE7R"
      
      };
  
  firebase.initializeApp(firebaseConfig);
  
} catch (error) {
  console.log(error)
}

export default firebase;