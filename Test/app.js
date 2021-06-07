  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyApDMM_zVtN-_GT0cVeh5bWQeF01PY5JaE",
    authDomain: "social-distancer-b41f0.firebaseapp.com",
    databaseURL: "https://social-distancer-b41f0-default-rtdb.firebaseio.com",
    projectId: "social-distancer-b41f0",
    storageBucket: "social-distancer-b41f0.appspot.com",
    messagingSenderId: "537074191369",
    appId: "1:537074191369:web:85a9ab4fd01b00111dbcd8",
    measurementId: "G-9SE64BL4HJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 


// Refernece contactInfo collections
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
}