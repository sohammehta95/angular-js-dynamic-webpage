(function(){ 

//Module
var app = angular.module('store-products', [ ]);


//Custom Directives

//The <product-title is converted to Camel Case
app.directive('productTitle', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-title.html'
		};  
});

app.directive('productGallery', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-gallery.html',

		controller:function(){
			this.current = 0;

    		this.setCurrent = function(imageNumber){
      		this.current = imageNumber || 0;;
      		};
		},
		controllerAs: 'gallery'

		};

		  
});


app.directive('productTab', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-tab.html',

		controller:function() {
			this.tab = 1;

    		this.setTab = function(tab){
      			this.tab = tab;
    		};

    		this.isSet = function(tab){
      			return (this.tab === tab);
    		};
		},
		controllerAs: 'tab'
		};  
});

// Tabs Data Directives
app.directive('productDesc', function(){
	return {
		restrict: 'A',
		templateUrl: 'product-desc.html'
		};  
});


app.directive('productSpecs', function(){
	return {
		restrict: 'A',
		templateUrl: 'product-specs.html'
		};  
});

app.directive('productReview', function(){
	return {
		restrict: 'A',
		templateUrl: 'product-review.html'
		};  
});


}) ();