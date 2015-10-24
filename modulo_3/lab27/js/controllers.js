angular.module('initial_spi.controllers', [])

.controller('productsController', function($scope, $http){
	var url = "data.json";
	$http.get(url).success(function(response){

		console.log(response);
		
		$scope.products = response;
	});
  })

.controller('contactController', function($scope){
	
		$scope.submit = function(){
			localStorage.setItem('primer_nombre', $scope.firstName);
			localStorage.setItem('segundo_nombre', $scope.lastName);
			localStorage.setItem('email', $scope.email);
			localStorage.setItem('edad', $scope.age);
		};
		$scope.reset = function(){
			localStorage.clear();
			$scope.firstName = "";
			$scope.lastName = "";
			$scope.email = "";
			$scope.age = "";
		};

   })