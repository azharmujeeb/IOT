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

  var firebaseRef = firebase.database().ref('WebYesterdayOpeningTime');
  firebaseRef.on("value",function(snapshot){
    snapshot.forEach(function(element){
      console.log(element.val());
    });
  })


/*  window.alert();*/




/*// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });

retrieveInfos();
}
// retrieve Infos 
function retrieveInfos(){
  let ref = firebase.database().ref("infos");
  ref.on("value",gotData);
} 

function gotData(data){
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.length; i++){
    let infoData = keys[i];
    let name = info[infoData].name;
    let email = info[infoData].email;
    let message = info[infoData].message;
    console.log(name, email, message);

    let infoResults = document.querySelector(".infosResults");
    
    infoResults.innerHTML += `<div>
    <p><strong>Name: </strong>${name}<br/>
    <a><strong>Email: </strong>${email}</a><br/>
    <a><strong>message: </strong>${message}</a>
    </p>
    </div>;` 
  }
}*/




/* retrieveTest();

// retrieve Infos 
function retrieveTest(){
  let ref = firebase.database().ref("Test");
  ref.on("value",gotData);
} 

function gotData(data){
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.length; i++){
    let infoData = keys[i];
    let Count = info[infoData].Count;
    let Status = info[infoData].Status;
    let Time = info[infoData].Time;
    //let total_entered = info[infoData].total number of people entered;
   
    
    console.log(Count, Status, Time);

    let testResults = document.querySelector(".testResults");
    
    testResults.innerHTML += `<div>
    <p><strong>Count: </strong>${Count}<br/>
    <a><strong>Status: </strong>${Status}</a><br/>
    <a><strong>Time: </strong>${Time}</a>
    </p>
    </div>` */