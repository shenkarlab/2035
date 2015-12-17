function checkIfElemInScreen(elem){
	
	//console.log(elem.getBoundingClientRect().top + "<" + window.innerHeight);
	//console.log($(elem).offset().top);
	console.log(elem.getBoundingClientRect().top);	
	return (elem.getBoundingClientRect().top + 60 < window.innerHeight);
}

app.directive("ngScrollInto", ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var fn = $parse(attrs.ngScrollInto);
        
        //if(checkIfElemInScreen(elem[0])){
	          	//	$(elem).animate({opacity:1}, 300);
          //		}
        
        $(document).scroll( function() {
	          
	          if(checkIfElemInScreen(elem[0])){
	          		$(elem).animate({opacity:1}, 300);
          		}
        });
        
        $('html, body').animate({
	        scrollTop: 100
	    }, 10);
         
      }
    };
  }]);