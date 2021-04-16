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

  const database = firebase.database()
  var auth = firebase.auth();

  document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    var email = getId("email");
    var password = getId("password");
    var signupbtn = getId("signupbtn");
    console.log(email)
    var FireUser = auth.createUserWithEmailAndPassword(email, password);
/*    signupbtn.disabled=true;
    signupbtn.textContent="Creating, Please Wait.."*/
    window.alert("Account Created Successfully.")
    FireUser.catch(function(error){
/*    signupbtn.disabled=false;
    signupbtn.textContent="Sign Up"*/
      console.log(error.message);
    });
  });

  function getId(id){
    return document.getElementById(id).value;
  }