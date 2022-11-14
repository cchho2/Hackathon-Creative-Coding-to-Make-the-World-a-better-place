const firebaseConfig = {
    apiKey: "AIzaSyAfl6gD0Gx3a_Q8XZ73w-oPc7QVDULeI0Y",
     authDomain: "tinder-clone-262b4.firebaseapp.com",
    rojectId: "tinder-clone-262b4",
    storageBucket: "tinder-clone-262b4.appspot.com",
    messagingSenderId: "317667358840",
    appId: "1:317667358840:web:06e6160ddfb7116cc0958d",
    measurementId: "G-KCMTR78W7S"
    };
    
    const firebaseApp = firebase.initializeApp(firebaseConfig); 
    const database = firebaseApp.firestore(); 

    export default database; 
