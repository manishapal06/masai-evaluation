
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDlOcIEIEnAhidekeSpAN2zmTAo3BYAjGQ",
    authDomain: "fir-auth-b40bf.firebaseapp.com",
    projectId: "fir-auth-b40bf",
    storageBucket: "fir-auth-b40bf.firebasestorage.app",
    messagingSenderId: "220326821774",
    appId: "1:220326821774:web:52889d660ed6b6a0ee6edf",
    measurementId: "G-MFRPR88MF8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log(db)