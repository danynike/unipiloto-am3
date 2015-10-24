angular.module('initial_spi.products_controller, initial_spi.contact_controllers', [])

.controller('productsController', function($scope, $http){
	var url = "data.json";
	$http.get(url).success(function(response){

		console.log(response);
		
		$scope.products = response;
	});
  })
