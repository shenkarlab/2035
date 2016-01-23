app.controller("chartController", ["$scope", "$sce", function($scope, $sce){
	
	var loaded = false;
	
	$scope.$on('$viewContentLoaded', function(){
	    
	    console.log("ASDASD");
	  });
	
	addEventListener('load', function(){
			
			
		}, false);
	
	$scope.init = function(divId, box, year){
		
		if(loaded) return;
		loaded = true;
		
		setTimeout(function(){
			
			d3.csv(box.csv, function(data){
			window[box.chartType]("#box-"+box.chartType+"-"+year.year+"-"+divId,data);   
		});	
		},10);
		//window[box.chartType]("#box-0", box.data);
		
	};
}]);
