var button = document.getElementById("rendering-btn");

button.addEventListener('click', renderText, false);

function renderText() {
	document.getElementById("text-content").innerHTML = 'New text rendered!';
}