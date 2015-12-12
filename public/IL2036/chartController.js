app.controller("chartController", ["$scope", "$sce", function($scope, $sce){
	
	$scope.init = function(type, csv, div){
		
		$scope.chartDisplay = $sce.trustAsHtml(Chart.line(csv, div));
	};
}]);
