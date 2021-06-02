const jsEmail = document.getElementById("email");
const jsPass = document.getElementById("password");

const jsSignupBtn = document.getElementById("signupbtn");

const database = firebase.database();


jsSignupBtn.addEventListener('click', (e) => {

	e.preventDefault();

	database.ref('/Admin/'+jsEmail.value).set({

		Email : jsEmail.value,
		Password : jsPass.value

	});

});