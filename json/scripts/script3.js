var data = { "products" : [
													{ 
														"name" : "JSON fundamentals",
														"price" : 50,
														"category" : "JavaScript"
													},
													{ 
														"name" : "NodeJS fundamentals",
														"price" : 60,
														"category" : "JavaScript"
													},
													{ 
														"name" : "React fundamentals",
														"price" : 70,
														"category" : "JavaScript"
													},
													{ 
														"name" : "Angular fundamentals",
														"price" : 80,
														"category" : "JavaScript"
													}
													]
};


var output = '<ul>';
for (var i = 0; i < data.products.length; i++) {
	output = output + '<li>' + 'Name: ' + data.products[i].name + '</li>';
	output = output + '<li>' + 'Price: ' + data.products[i].price + '</li>';
	output = output + '<li>' + 'Category: ' + data.products[i].category +  '<br><br>' + '</li>';
}
output = output + '</ul>';

document.getElementById('content').innerHTML = output;