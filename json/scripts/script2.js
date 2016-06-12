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
													}
													]
};


document.getElementById("p_name").innerHTML = data.products[2].name;
document.getElementById("p_price").innerHTML = data.products[2].price;
document.getElementById("p_category").innerHTML = data.products[2].category;