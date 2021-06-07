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