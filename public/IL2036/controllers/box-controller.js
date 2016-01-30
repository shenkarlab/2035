app.controller("boxController", ["$scope", "$rootScope", "$sce", function($scope,$rootScope, $sce){
	
	$scope.display = false;
	
	$scope.apear = function(elem){
		
		$scope.$apply(function(){
			$scope.display = true;
		$rootScope.setYearIndex($scope.yearIndex);
			
		});
		
	};
	
	$scope.init = function(yearIndex, year){
		
		if($scope.lastScrolledYear == year) $scope.display=true;
		$scope.yearIndex = yearIndex;
		
	};
	
	$scope.parseHtml = function(html){
		
		return $sce.trustAsHtml(html);
	};
}]);