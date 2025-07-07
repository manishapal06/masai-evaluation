  
  const firebaseConfig = {
    apiKey: "AIzaSyDQ6AYysRcB70lFjhcQFY7dLCaWnxxssas",
    authDomain: "shubh-4d196.firebaseapp.com",
    projectId: "shubh-4d196",
    storageBucket: "shubh-4d196.firebasestorage.app",
    messagingSenderId: "532688044739",
    appId: "1:532688044739:web:5c3056c30411793dec5876",
    measurementId: "G-H8XMY7B64K"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const app =  firebase;
  console.log(app)

  function handlesubmit(){
    const username=document.getElementById("username").value
    console.log(username)
  }
  handlesubmit()