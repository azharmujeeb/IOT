function display_c(){

	var refresh = 1000;
	mytime = setTimeout('display_ct()',refresh);

}

function display_ct(){
	
	var x = new Date();
	document.getElementById('ct').innerHTML=x;
	display_c();

}

//Yesterday
function display_yesterday(){
	/*alert();*/
	const today = new Date()
	const yesterday = new Date(today)

	yesterday.setDate(yesterday.getDate() - 1);

	document.getElementById('yest').innerHTML=yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();


	today.toDateString();
	yesterday.toDateString();

}