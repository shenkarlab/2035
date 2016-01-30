


var sunChartId = 0;
function SunChart(id, data){

    var yearData = data[3];
	var helper = ChartHelper();

    var isDoneToMake = false;
    var div = d3.select(id);

     var svgHeight  = 593;
//	var svgWidth  = 967;
  //  var svgHeight  = parseInt($(id)[0].offsetHeight,10);
   // var svgHeight = parseInt(div.style("height"), 10);
    var svgWidth = parseInt(div.style("width"), 10);
    var pieWidth = (svgWidth / 3) * 2;
    var pieHeight = svgHeight;
    var mapWidth = ((svgWidth / 3) * 1) -10;
    var mapHeight = svgHeight;
    var padding = svgWidth / 25;
    var minSqareVal = 0;
    if (pieHeight >= pieWidth) {
        minSqareVal = pieWidth;
    }
    else {
        minSqareVal = pieHeight;
    }
    var pieTranlateHeight = ((minSqareVal / 5) * 2.5) + padding;
    var pieTranlateWidth = ((minSqareVal / 5) * 2) + padding;
    
	
    var paddingLeft = 0.15 * pieWidth;
    var paddingTop = 0.2 * pieHeight;
    var pointShift = 15;
    var middleY = pieHeight / 2;
    var middleX = pieWidth / 2;
    
    
    var innerRadius = minSqareVal / 10;
    
    var innerData = data[0];
    data.sort(function(a, b){
        return d3.ascending(a.year, b.year);
    });
    
   
    
    var tableGroup = d3.select(id).append("g").attr("width", svgWidth).attr("height", svgHeight).attr('class', "sunChart" + sunChartId);
	sunChartId++;
	var leg = legend();
    var pieSvg;
    
    pieSvg = tableGroup.append("svg").attr("width", pieWidth).attr("height", pieHeight);
    
    var pieGroup = pieSvg.append("g").attr("transform", "translate(" + (minSqareVal / 2) + "," + (minSqareVal / 2) + ")");
    
    var otherData = [{
        "name": "other",
        "other": (100 - +yearData.jew)
    }, {
        "name": "other",
        "other": +yearData.jew
    }];
    var arcOther = d3.svg.arc().innerRadius(innerRadius).outerRadius(innerRadius * 2);
    var pieOther = d3.layout.pie().value(function(d,i){
       // return d.other;
	          if(i == 0){
					return 0;
				}else{
					return 100;
				}
    });
    
    var arcsOther = pieGroup.selectAll(".arc").data(pieOther(otherData)).enter().append("g");
    
    var pathOther = arcsOther.append("path").attr("d", arcOther).each(function(d){
        this._current = d;
    }).attr("fill", function(d, i){
       return helper.segPopulationColor("other");
    }).attr("opacity", function(d, i){
        if (i == 1) {
            return 0.2;
        }
        else {
            return 1;
        }
    });
	
	
	
	 pieOther.value(function(d,i){
		 return d.other;
          }); // change the value function
      pathOther = pathOther.data(pieOther(otherData)); // compute the new angles
      pathOther.transition().duration(750).attrTween("d", arcTweenOther).each("end", endPainiting); // redraw the arcs
      
	
	 
	  
	var jewData = [{
        "name": "jew",
        "jew": (100 - +yearData.ortodox)
    }, {
        "name": "jew",
        "jew": +yearData.ortodox
    }];
    var arcJew = d3.svg.arc().innerRadius(innerRadius * 2).outerRadius(innerRadius * 3);
    var pieJew = d3.layout.pie().value(function(d,i){
		 if(i == 0){
					return 100;
				}else{
					return 0;
				}
    });
    
    var arcsJew = pieGroup.selectAll(".arc").data(pieJew(jewData)).enter().append("g");
    
    var pathJew = arcsJew.append("path").attr("d", arcJew).each(function(d){
        this._current = d;
    }).attr("fill", function(d, i){
       return helper.segPopulationColor(jewData[1].name);
    }).attr("opacity", function(d, i){
        if (i == 0) {
            return 0.2;
        }
        else {
            return 1;
        }
    });
	
	 pieJew.value(function(d,i){
		 return d.jew;
          }); // change the value function
      pathJew = pathJew.data(pieJew(jewData)); // compute the new angles
      pathJew.transition().duration(750).attrTween("d", arcTweenJew); // redraw the arcs
	
	
	var arabData = [{
        "name": "arab",
        "arab": (100 - +yearData.arab)
    }, {
        "name": "arab",
        "arab": +yearData.arab
    }];
    var arcarab = d3.svg.arc().innerRadius(innerRadius * 3).outerRadius(innerRadius * 4);
    var piearab = d3.layout.pie().value(function(d,i){
		 if(i == 0){
					return 100;
				}else{
					return 0;
				}
       // return d.arab;
    });
    
    var arcsarab = pieGroup.selectAll(".arc").data(piearab(arabData)).enter().append("g");
    
    var patharab = arcsarab.append("path").attr("d", arcarab).each(function(d){
        this._current = d;
    }).attr("fill", function(d, i){
      return helper.segPopulationColor(arabData[1].name);
    }).attr("opacity", function(d, i){
        if (i == 0) {
            return 0.2;
        }
        else {
            return 1;
        }
    });
	
	 piearab.value(function(d,i){
		 return d.arab;
          }); // change the value function
      patharab = patharab.data(piearab(arabData)); // compute the new angles
      patharab.transition().duration(750).attrTween("d", arcTweenArab); // redraw the arcs
	
	
    div.on("mouseout",mouseoutColor);
	div.on("mouseover", mouseoverColor);
	
	function endPainiting(){
        console.log("Done Painting: ");
        isDoneToMake = true;
        makeChartBW();
    }
	
	
	function mouseoutColor(){
		if(isDoneToMake){
			makeChartBW();
		}
		
        }
		
		function mouseoverColor(){
			if(isDoneToMake){
			 makeChartColor();
		}
	     
        }
		
		
	function arcTweenOther(a){
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t){
                return arcOther(i(t));
            };
        }
		
	function arcTweenJew(a){
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t){
                return arcJew(i(t));
            };
        }
		
		function arcTweenArab(a){
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t){
                return arcarab(i(t));
            };
        }
		
	function makeChartColor(){
			pathJew.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationColor(jewData[1].name)
        });
		pathOther.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationColor(otherData[1].name)
        });
		patharab.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationColor(arabData[1].name)
        });
			leg.UpdateColor();
		
	}
	
	function makeChartBW(){
		pathJew.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationBW(jewData[1].name)
        });
		pathOther.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationBW(otherData[1].name)
        });
		patharab.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationBW(arabData[1].name)
        });
			leg.UpdateBW();
		
	}
	
	
     function legend(){
        var leg = {};
        var rectWidth = helper.getLegRectWidth(mapWidth);
	    var fontSize = helper.getLegFontSize(mapWidth);
		var translateWidth =  helper.getLegTableTranslateWidth(mapWidth);
		var legData = [{
        "name": "other",
        "publicName": "אחרים",
        "working": yearData.jew,
        "color": helper.segPopulationColor("other")
    }, {
       "name": "arab",
        "publicName": "ערבים",
        "working": yearData.arab,
        "color": helper.segPopulationColor("arab")
    }, {
       "name": "jew",
        "publicName": "חרדים",
        "working": yearData.ortodox,
        "color": helper.segPopulationColor("jew")
    }];
		

        var legend = tableGroup 
	   .append("table").attr("width", mapWidth).attr("height", mapHeight).style("transform","translate(" + translateWidth + ",20%)").attr('class', 'legend');
	   
        
        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(legData).enter().append("tr");
        
        // create the first column for each segment.
        var firstBox = tr.append("td");
        
        var sqares = firstBox.append("svg").attr("width", rectWidth).attr("height", rectWidth).append("rect").attr("width",rectWidth).attr("height", rectWidth).attr("fill", function(d){
            return helper.segPopulationBW(d.name);
        });
        
        // create the second column for each segment.
        tr.append("td").style("font-size",fontSize).text(function(d){
            return d.publicName;
        });
        
        // create the third column for each segment.
        var prozents = tr.append("td").style("font-size",fontSize).attr("class", 'legendFreq').text(function(d){
            return d.working + "%";
        });
        
        leg.UpdateBW = function(){
            sqares.transition().duration(1000).attr("fill", function(d, i){
                return helper.segPopulationBW(d.name);
            });
        }
        
        leg.UpdateColor = function(){
            sqares.transition().duration(1000).attr("fill", function(d, i){
                return helper.segPopulationColor(d.name);
            });
        }
        
        return leg;
    }
    
    
    
}
