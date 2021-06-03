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
  let editprofile = firebase.database().ref("Web Edit Profile");

  //Listen for a submit
  document.querySelector(".editProfileForm").addEventListener("submit", submitProfileForm);



  function submitProfileForm(e){

    e.preventDefault();

    //Get input values
    let userid = document.querySelector("#userid").value;
    let email = document.querySelector("#email").value;
    let tel = document.querySelector("#number").value;
    let dob = document.querySelector("#birthdate").value;
    let gender = document.querySelector("#gender").value;
    


    console.log(userid,email,tel,dob,gender);
    saveSignupinfo(userid,email,tel,dob,gender);
    document.querySelector(".editProfileForm").reset();

  }

  //Save Info to firebase database
  function saveSignupinfo(userid,email,tel,dob,gender){

    let newSignupInfo = editprofile.push(); 

    newSignupInfo.set({
      userid: userid,
      email: email,
      tel: tel,
      dob: dob,
      gender: gender,
    });

    window.alert("Profile Edited.");

  };