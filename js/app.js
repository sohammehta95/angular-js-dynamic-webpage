(function(){ 
//Module
var app = angular.module('store', ['store-products']);

//Controllers
app.controller('StoreController', ['$http',function($http){  
	var storevar = this;

	storevar.products = [];
	var path = {{ site.baseurl }} + '/json/products.json';
	$http.get(path).success(function(data){
		storevar.products = data;
	});
}]);


 //app.controller('TabController', function(){ });

app.controller('ReviewController', function(){  
 	this.review = {};



 	this.addReview = function(product){
 		this.review.createdOn = Date.now();
 		product.reviews.push(this.review);
 		this.review = {};
 	};
});

//app.controller('GalleryController', function(){ });

//All Products directives in product.js


//Gems object in products.json

  
})();
