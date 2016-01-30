app.controller("chartController", ["$scope", "$sce", "$rootScope", function($scope, $sce, $rootScope){
	
	var loaded = false;
	
	$scope.$on('$viewContentLoaded', function(){
	    
	    console.log("ASDASD");
	  });
	
	addEventListener('load', function(){
			
			
		}, false);
	
	$scope.init = function(divId, box, year){
		
		if($scope.id == undefined)
			$scope.id = $rootScope.chartIdCounter = ($rootScope.chartIdCounter==undefined) ? 1 : $rootScope.chartIdCounter+1;
		
		$scope.loadChart = function(){
			if($scope.loaded) return;
			$scope.loaded = true;
			
			setTimeout(function(){
				
				d3.csv(box.csv, function(data){
					console.log("#box-"+box.chartType+"-"+year.year+"-"+divId+$scope.id);
				window[box.chartType]("#box-"+box.chartType+"-"+year.year+"-"+divId+$scope.id,data);   
			});	
			},10);
		};
		//window[box.chartType]("#box-0", box.data);
		
	};
}]);
