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

  database = firebase.database();

  var ref = database.ref('WebTodayOpeningTime');
  ref.on('value', gotData, errData);

  function gotData(data) {

    /*var scorelisting = selectAll('scorelisting');
    for(var i = 0; i < scorelisting.length; i++){
      scorelisting[i].remove();
    }
*/
    return console.log(data.val());
    /*var WebTodayOpeningTime = data.val();
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
    /*}*/
  }

  function errData(err) {
    console.log('Error!');
    console.log(err);
  }