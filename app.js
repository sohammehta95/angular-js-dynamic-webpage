(function(){ 
var app = angular.module('store', [ ]);

app.controller('StoreController', function(){  
	this.products = gems;
});

var gems = [
{ 
name: 'Dodecahedron', 
price: 2.95, 
description: 'This is cool',
canPurchase: true,
soldOut: true
 },
 { 
name: "Pentagonal Gem", 
price: 5.95, 
description: "This is Super Cool", 
canPurchase: true
}
]
  
})();