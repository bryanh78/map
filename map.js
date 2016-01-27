// JS
angular.module("main", [])
angular.module("main")
	.controller("first", ["$scope", function($scope){

		$scope.repeatArray = []
    	
			$scope.showCoords = function(event) {
 
    			$scope.coords = {
    				x : event.pageX,
    				y : event.pageY
    			}
    			
    			$scope.repeatArray.push($scope.coords)
    						};
console.log($scope.repeatArray)
            $scope.submit=function() {
                $scope.store=true;
            }

	}])
 

 
