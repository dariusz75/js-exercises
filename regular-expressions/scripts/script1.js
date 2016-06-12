
document.getElementById("submit_form").onclick = function() {
	var textEntered = document.getElementById("field_value").value;
	document.getElementById("message").innerHTML = textEntered;
}