let container = document.getElementById('container');


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addDiv(){
	let element = document.createElement('div');
	element.classList.add('element');
	container.appendChild(element);
	let elementText = document.createTextNode(getRandomInt(21));
	element.appendChild(elementText);
}

let intervalId = setInterval(addDiv, 5000);
