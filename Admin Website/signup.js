/*const jsEmail = document.getElementById("email");
const jsPass = document.getElementById("password");

const jsSignupBtn = document.getElementById("signupbtn");

const database = firebase.database();


jsSignupBtn.addEventListener('click', (e) => {

	e.preventDefault();

	database.ref('/Admin/'+jsEmail.value).set({

		Email : jsEmail.value,
		Password : jsPass.value

	});

});*/






/*284 code*/
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

  //referencing the user
  let signupinfo = firebase.database().ref("Web Sign Up");

  //Listen for a submit
  document.querySelector(".signup-form").addEventListener("submit", submitForm);



  function submitForm(e){

  	e.preventDefault();

  	//Get input values
  	let email = document.querySelector("#email").value;
  	let password = document.querySelector("#password").value;


  	console.log(email, password);
  	saveSignupinfo(email, password);
  	document.querySelector(".signup-form").reset();

  }


  //Save Info to firebase database
  function saveSignupinfo(email, password){

  	let newSignupInfo = signupinfo.push(); 

  	newSignupInfo.set({
  		email: email,
  		password: password,
  	});

  	window.alert("Details saved.");

  };



  //Login by firebase auth
  firebase.auth().onAuthStateChanged(function(user){

    if(user){

      var user = firebase.auth().currentUser;

      if(user!=null){

        var email = user.email;

      }

    }else{

      window.alert("Sorry, Contact the admin.");

    }

  });


  function login(){

    var email = document.getElementById("#email").value;
    var password = document.getElementById("#pass").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      //Handle errors here
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : "+errorMessage);
    });

  }