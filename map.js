// JS
angular.module("main", [])
angular.module("main")
	.controller("first", ["$scope", function($scope){
		$scope.showCoords = function(event) {
    		$scope.x = event.clientX;
    		$scope.y = event.clientY;
    		console.log("X coords: " + $scope.x + ", Y coords: " + $scope.y);

};
		$scope.clickMarker = function() {
			$scope.hideMarker = true;
		}


	}])
 

 
