  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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






  /*
  database = firebase.database();

  var ref = database.ref('Status');
  ref.on('value', gotData, errData);
  firebase.initializeApp(firebaseConfig); 


  // retrieve Infos 
function retrieveInfos(){
  let ref = firebase.database().ref("Time");
  ref.on("value",gotData);
} 

function gotData(data){
  let info = data.val();
  let keys = object.keys(info);

<<<<<<< HEAD
    /*var scorelisting = selectAll('scorelisting');
    for(var i = 0; i < scorelisting.length; i++){
      scorelisting[i].remove();
    }
*/ /*
    return console.log(data.val());
   var WebTodayOpeningTime = data.val();
    var keys = Object.keys(WebTodayOpeningTime);
    console.log(keys);
    for(var i = 0; i < keys.length; i++){
      var k = keys[i];
      var initials = WebTodayOpeningTime[k].score;
      var WebTodayOpeningTime = WebTodayOpeningTime[k].WebTodayOpeningTime;
      console.log(initials,WebTodayOpeningTime);*/
      /*var li = createElement('li', WebTodayOpeningTime);
      li.class('scorelisting');
      li.parent('scorelist');*/
    /*}
  }

  function errData(err) {
    console.log('Error!');
    console.log(err);
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
    </div>` 

/*
  for(let i = 0; i < keys.length; i++){
    let infoData = keys[i];
    let time = info[infoData].Time;
    console.log(time);

    let infoResults = document.querySelector(".openingTime");

    infoResults.innerHTML += `<div>
    <p><strong>Today Opened Time : </strong>${time}<br/></p></div>` 
>>>>>>> 3e4e8a78b32ef5423e83968b30e65cc39760dadf
  }
}
}
}*/





  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  function getData(){
    let ref = firebase.database().ref('Time');
    ref.on("value",gotData);
  }
  function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);

    let infoData = key;
    let time = info[infoData].Time;

    for(let i=0;i<keys.length;i++){
      let infoData = keys[i];
      let time = info[infoData].Time;
      console.log(time);

      let infoResults = document.querySelector("todayDetail");

      infoResults.innerHTML += `<div>
    <p><strong>Today Opened Time : </strong>${time}<br/></p></div>` 
    }
  }
  getData();






/*function retrieveInfos(){
  let ref = firebase.database().ref("Time");
  ref.on("value",gotData);
} 

function gotData(data){
  let info = data.val();
  let keys = object.keys(info);

  for(let i = 0; i < keys.length; i++){
    let infoData = keys[i];
    let time = info[infoData].Time;
    console.log(time);

    let infoResults = document.querySelector(".OpeningTime");

    infoResults.innerHTML += `<div>
    <p><strong>Today Opened Time : </strong>${time}<br/></p></div>` 
  }
}*/


/*  // retrieve Infos 
function retrieveInfos(){
  let ref = firebase.database().ref("Time");
  ref.once("value",gotData);
  window.alert();
} 

function gotData(data){
  let info = data.val();
  let keys = Object.keys(info);

  for(let i = 0; i < keys.length; i++){
    let infoData = keys[i];
    let time = info[infoData].Time;
    console.log(time);

    let infoResults = document.querySelector("openingTime");

    infoResults.innerHTML += `<div>
    <p><strong>Today Opened Time : </strong>${time}<br/></p></div>` 
  }
}*/