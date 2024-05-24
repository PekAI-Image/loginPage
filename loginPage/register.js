
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA2SJu5yxNgPTuhYwgPlmi4fcrhhGLb70s",
    authDomain: "login-e4127.firebaseapp.com",
    projectId: "login-e4127",
    storageBucket: "login-e4127.appspot.com",
    messagingSenderId: "596177628716",
    appId: "1:596177628716:web:e273b2d0fd95027e606b89"
  };


  const app = initializeApp(firebaseConfig);

//=========INPUTS==============
const email = document.getElementById('email').value;
