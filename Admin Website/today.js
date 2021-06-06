function display_c(){

	var refresh = 1000;
	mytime = setTimeout('display_ct()',refresh);

}

function display_ct(){
	
	var x = new Date();
	document.getElementById('ct').innerHTML=x;
	display_c();

}

//Yesterday Time for Yesterday Sidebar
function display_yesterday(){
	/*alert();*/
	const today = new Date()
	const yesterday = new Date(today)

	yesterday.setDate(yesterday.getDate() - 1);

	document.getElementById('yest').innerHTML=yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();


	today.toDateString();
	yesterday.toDateString();

}



//Connecting Today's Opening time to firebase database
/*284 code*/
/*  var firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);*/

  /*  //referencing the user
  let openTime = firebase.database().ref("Web Opening Time");
  //Listen for a submit
  document.querySelector(".openingtime_form").addEventListener("submit", submitForm);


    function submitForm(e){

  	e.preventDefault();

  	//Get input values
  	let otime = document.querySelector("#otime").value;

  	console.log(otime);
  	saveSignupinfo(otime);
  	document.querySelector(".openingtime_form").reset();

  }

    //Save Info to firebase database
  function saveSignupinfo(otime){

  	let newSignupInfo = openTime.push(); 

  	newSignupInfo.set({
  		otime: otime,
  		
  	});

  	window.alert("Opening time saved.");

  };*/

