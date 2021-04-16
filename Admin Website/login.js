  var firebaseConfig = {
    apiKey: "AIzaSyDB-6U09zokZcEa0ccnyqfqaGMn8WI1_XQ",
    authDomain: "main-7ab9c.firebaseapp.com",
    databaseURL: "https://main-7ab9c-default-rtdb.firebaseio.com",
    projectId: "main-7ab9c",
    storageBucket: "main-7ab9c.appspot.com",
    messagingSenderId: "108058188999",
    appId: "1:108058188999:web:af2dd087a15554733732e2",
    measurementId: "G-ZL6XBQNDZ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  /*firebase.analytics();*/


  /*1 - Not working*/
  /*const database = firebase.database()
  var auth = firebase.auth();

  document.getElementById("loginForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    var email = getId("email");
    var password = getId("password");
    console.log(email)
    var FireUser = auth.signInWithEmailAndPassword(email, password);
    window.alert("Logged in");
    FireUser.catch(function(error){
      console.log(error.message);
      window.alert("Login Failed");
    });
  });

  function getId(id){
    return document.getElementById(id).value;
  }*/


  var loginEmail = document.getElementById("email");
  var loginPassword = document.getElementById("pass");
  var loginbtn = document.getElementById("loginbtn");

  loginbtn.onclick=function(){
    loginbtn.disabled=true;
    loginbtn.textContent="Logging In Please Wait.."
    firebase.auth().signInWithEmailAndPassword(loginEmail.value,  loginPassword.value).then(function(response){
      console.log(response);
      window.alert("Log In Successful.")
      /*loginbtn.disabled=false;
      loginbtn.textContent="Sign In"*/
      window.location = "homepage.html";
    })
    .catch(function(error){
      console.log(error);
      window.alert("Incorrect Details, Please Check Again")
      loginbtn.disabled=false;
      loginbtn.textContent="Sign In"      
    })
  }