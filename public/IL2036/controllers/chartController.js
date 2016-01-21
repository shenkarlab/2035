app.controller("chartController", ["$scope", "$sce", function($scope, $sce){
	
	$scope.$on('$viewContentLoaded', function(){
	    
	    console.log("ASDASD");
	  });
	
	addEventListener('load', function(){
			
			
		}, false);
	
	$scope.init = function(divId, box){
		
		setTimeout(function(){
			
			d3.csv(box.csv, function(data){
			window[box.chartType]("#box-"+box.chartType+"-"+divId,data);   
		});	
		},1000);
		//window[box.chartType]("#box-0", box.data);
		
	};
}]);
