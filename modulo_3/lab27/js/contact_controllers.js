angular.module('initial_spi.products_controller, initial_spi.contact_controllers', [])

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