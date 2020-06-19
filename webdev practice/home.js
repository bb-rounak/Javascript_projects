function calc(){
	var year= prompt('Enter your birth year');
	answer= (2020-year)*365;
	var h1= document.createElement('h1');
	var text= document.createTextNode("You are " +answer + " days old");
	h1.setAttribute('id','answer');
	h1.appendChild(text);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
	document.getElementById('answer').remove();
}