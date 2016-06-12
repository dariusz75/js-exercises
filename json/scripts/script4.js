
$(document).ready(function() {

	$.getJSON('../objects/object1.json', function(data) {
		
		var output = '<ul>';

		for (var i = 0; i < data.products.length; i++) {
			output = output + '<li>' + 'Name: ' + data.products[i].name + '</li>';
			output = output + '<li>' + 'Price: ' + data.products[i].price + '</li>';
			output = output + '<li>' + 'Category: ' + data.products[i].category +  '<br><br>' + '</li>';
		}
		
		output = output + '</ul>';
		document.getElementById('content').innerHTML = output;
	});
});


