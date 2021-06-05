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

/*	  firebase.analytics();*/

function selectAllData() {
	firebase.database().ref('Web Graph').once('value',
		function(AllRecords){
			AllRecords.forEach(
				function(CurrentRecord){
					var date = CurrentRecord.val().Date;
					var entered = CurrentRecord.val().Entered;
					AddItemsToTable(date,entered);
				}
			);
		});
}

window.onload = selectAllData(date,entered);

function AddItemsToTable(date,entered){

	var no = 0;
	var tbody = document.getElementById('tbody1');
	var trow = documnet.createElement('tr');
	var td1 = documnet.createElement('td');
	var td2 = documnet.createElement('td');
	var td3 = documnet.createElement('td');
	td1.innerHTML = ++no;
	td2.innerHTML = date;
	td3.innerHTML = entered;
	trow.appendChild('td2');
	trow.appendChild('td3');
	tbody.appendChild('trow');

}