// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDB-6U09zokZcEa0ccnyqfqaGMn8WI1_XQ",
    authDomain: "main-7ab9c.firebaseapp.com",
    projectId: "main-7ab9c",
    storageBucket: "main-7ab9c.appspot.com",
    messagingSenderId: "108058188999",
    appId: "1:108058188999:web:af2dd087a15554733732e2",
    measurementId: "G-ZL6XBQNDZ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL;



  $("#login-btn").click(function(){

      var email = $("#lemail").val();
      var password = $("#lpass").val();

      if(email!=null && password!=null){

          var result = firebase.auth().signInWithEmailAndPassword(email, password);

          result.catch(function(error){

              var errorCode = error.code;
              var errorMessage = error.message;

              window.alert("Message : " +errorMessage);

          });

      }else{

          window.alert("Please fill out all the fields.")

      }
  });