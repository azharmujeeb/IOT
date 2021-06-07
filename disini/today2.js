
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
  firebase.analytics();
  


  function addItemstolist(sec,gen){
    var ul=document.getElementById('list');

    
    var sec = document.createElement('li');
    var gen = document.createElement('li');

    
     

   sec.innerHTML = 'Section:' +sec.innerHTML;
   gen.innerHTML = 'Gender:' +gen.innerHTML;

   ul.appendChild(sec);
   ul.appendChild(gen);


  }
  function FetchAllData(){
    firebase.database().ref('student/13').once('value', function(Snapshot){
      Snapshot.forEach(
        function(ChildSnapshot){
          let gen = ChildSnapshot.val().Gender;
          let sec = ChildSnapshot.val().Section;
          
          addItemstolist(sec,gen);

        }
        );
    });
  }
  window.onload(FetchAllData());
