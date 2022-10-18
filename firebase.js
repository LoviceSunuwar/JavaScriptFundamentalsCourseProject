
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  import { initializeApp } from 'firebase/app';
  import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
 // import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDppdvo9PSBfi6xGuzqlCLsuOW2WC-Xt4s",
    authDomain: "js-cp-madt.firebaseapp.com",
    projectId: "js-cp-madt",
    storageBucket: "js-cp-madt.appspot.com",
    messagingSenderId: "893767330863",
    appId: "1:893767330863:web:eb57bb49c2a6a50a53aada",
    measurementId: "G-EZFQNH6XC2"
  };
  console.log("HI)")
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getDatabase();

  // Add Task Variable
  var firebase_addtask_name= document.getElementById("add_task_name");
  var firebase_addtask_email= document.getElementById("add_task_email");
  var firebase_addtask_desc= document.getElementById("add_task_desc");
  var firebase_addtaskbtn = document.getElementById("add_task_submit");

  // SignUp variables
  var firebase_signup_username= document.getElementById("signup_username");
  var firebase_signup_email= document.getElementById("signup_email");
  var firebase_signup_password= document.getElementById("signup_password");
  var firebase_signup_btn= document.getElementById("sign-up-button");


  firebase_signup_btn.addEventListener('click', signUpUser);



//   Insert add task function

function addtask(){
  set(ref(db, "TaskName/" + firebase_addtask_name.value),{
    OnTaskEmail: firebase_addtask_email.value,
    OnTaskDesc: firebase_addtask_desc.value
  })
  .then(()=>{
    
    alert("data stored succesfully")
  })
  .catch((error)=>{
    alert("unsuccessful, error " +error);
  })
}
var firebase_signup_btn = document.getElementById("sign-in-button");
function signUpUser(){

  var firebase_signup_username= document.getElementById("signup_username").value;
  var firebase_signup_email= document.getElementById("signup_email").value;
  // var firebase_signup_password= document.getElementById("signup_password").value;

  // set(ref(db, "User/"),{
  //   onSignupName: firebase_signup_username.value,
  //   onSignUpEmail: firebase_signup_email.value,
  //   // onSignUpPassword: firebase_signup_password.value
  // }).then(()=>{
  //   console.log("data stored");
  //   alert("data stored successfully")
  // }).catch((error)=>{
  //   console.log("go home");
  //   alert("unseccessful, error" + error);
  // })
  console.log(firebase_signup_username);
}


//  firebase_addtaskbtn.addEventListener('click', addtask());



