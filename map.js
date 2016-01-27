// JS
angular.module("main", [])
angular.module("main")
	.controller("first", ["$scope", function($scope){

		$scope.repeatArray = []
    	
			$scope.showCoords = function(event) {
 
    			$scope.coords = {
    				x : event.clientX,
    				y : event.clientY
    			}
    			
    			$scope.repeatArray.push($scope.coords)
    			
			};


	}])
 

 
