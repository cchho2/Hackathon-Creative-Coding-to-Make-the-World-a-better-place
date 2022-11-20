import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDYc4JS-FLzNBDgWfMuCRncwn-9xL0rQiE",
    authDomain: "food-swipe-2.firebaseapp.com",
    projectId: "food-swipe-2",
    storageBucket: "food-swipe-2.appspot.com",
    messagingSenderId: "146903236710",
    appId: "1:146903236710:web:7f65326d1d2d70652a6da7",
    measurementId: "G-LDF3NCM72R"
  };
    

    const firebaseApp = firebase.initializeApp(firebaseConfig); 
    const database = firebaseApp.firestore(); 

    export default database; 
