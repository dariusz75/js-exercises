
$(document).ready(function() {

$.ajax({
  dataType: "json",
  url: 'object1.json',
  method: 'get'
})
	.done(function(data) {
		
		//data = JSON.parse(data.responseText);
		console.log(data.responseText);
		var output = '<ul>';

		for (var i = 0; i < data.products.length; i++) {
			output = output + '<li>' + 'Name: ' + data.products[i].name + '</li>';
			output = output + '<li>' + 'Price: ' + data.products[i].price + '</li>';
			output = output + '<li>' + 'Category: ' + data.products[i].category +  '<br><br>' + '</li>';
		}
		
		output = output + '</ul>';
		document.getElementById('content').innerHTML = output;
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
  });
  

});