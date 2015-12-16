app.controller("boxController", ["$scope", function($scope){
	
	$scope.display = false;
	
	$scope.apear = function(){
		
		$scope.display = true;
	};
}]);