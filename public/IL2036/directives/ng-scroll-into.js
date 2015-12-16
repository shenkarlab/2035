function checkIfElemInScreen(elem){
	
	return (elem.getBoundingClientRect().top + 60 < window.innerHeight);
}

app.directive("ngScrollInto", ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var fn = $parse(attrs.ngScrollInto);
        
        $(document).scroll( function() {
	          
	          if(checkIfElemInScreen(elem[0])){
	          		$(elem).animate({opacity:1}, 300);
          		}
        });
      }
    };
  }]);