app.controller("chartController", ["$scope", "$sce", function($scope, $sce){
	
	$scope.$on('$viewContentLoaded', function(){
	    
	    console.log("ASDASD");
	  });
	
	addEventListener('load', function(){
			
			
		}, false);
	
	$scope.init = function(divId, box){
		
		window[box.chartType]("#box-0", box.data);
	};
}]);
