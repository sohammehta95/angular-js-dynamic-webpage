(function(){ 
var app = angular.module('store', [ ]);

app.controller('StoreController', function(){  
	this.products = gems;
});

 app.controller("PanelController", function(){
 	this.tab=1;

 	this.selectTab = function(setTab) {
 		this.tab = setTab;
 	};

 	this.isSelected = function(checkTab){
   		return this.tab === checkTab;
	};

});

var gems = [
{ 
name: 'Dodecahedron', 
price: 2., 
description: 'This is cool',
canPurchase: true,
soldOut: true ,
images: [ 
 {
 full: 'd1f.png',
thumb: 'd1t.jpg'  }, 
{
full: "d2f.jpg",
thumb: 'd2t.jpg' } ],
 },
 { 
name: "Pentagonal Gem", 
price: 5.95, 
description: "This is Super Cool", 
canPurchase: true
}
]
  
})();