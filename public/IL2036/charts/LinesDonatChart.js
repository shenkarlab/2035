
function LineDonatChart(id, data){


    var dC = {}
    var helper = ChartHelper();
    var div = d3.select(id);
   // var svgHeight = parseInt(div.style("height"), 10);
    var svgHeight = 400;
    var svgWidth = parseInt(div.style("width"), 10);
    var pieWidth = (svgWidth / 3) * 2;
    var pieHeight = svgHeight;
    var mapWidth = (svgWidth / 3) * 1;
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
    
	
    var paddingLeft = 80;
    var paddingTop = 100;
    var pointShift = 15;
    var middleY = pieHeight / 2;
    var middleX = pieWidth / 2;
    
    
    
    var innerRadius = minSqareVal / 6;
    var OuterRadius = (minSqareVal / 5) * 2;
    var yearNow = 0;
      
    
    
    data.sort(function(a, b){
        return d3.ascending(a.year, b.year);
    });
    
    var tableGroup = div.append("g").attr("width", svgWidth).attr("height", svgHeight);
    var donatDiv = div.append("svg");
	
    var leg = legend(data);
    var outer = makePie( data, [innerRadius, OuterRadius]);
    
    
    
    
    
    var pieSvg;
    
    function makePie( yearData, dim){
    
    
    
    
        div.on("mouseover", mouseoverColor);
		div.on("mouseout",mouseoutColor);
    
    
        var lastYear = 2009;
        var pieObject = {};
        var innerData = helper.makeExpencesInnerData(0, yearData);
        
        //  tableGroup.on("mouseover", mouseover)// mouseover is defined below.
        //  .on("mouseout", mouseout);
        
        
        
        pieSvg = tableGroup.append("svg").attr("width", pieWidth).attr("height", pieHeight);
        
		pieSvg.on("mousemove", mouseover);
		
		
        var pieGroup = pieSvg.append("g").attr("width", svgWidth).attr("height", svgHeight).attr("transform", "translate(" + pieTranlateWidth + "," + pieTranlateHeight + ")");
        //	.on("mouseover",mouseover);
        
        var arc = d3.svg.arc().innerRadius(dim[0]).outerRadius(dim[1]);
        //.attr("transform", "translate(" + pieTranlate + "," + pieTranlate + ")");
        var pie = d3.layout.pie().value(function(d){
            return d.populatoin
        });
        
        var arcs = pieGroup.selectAll(".arc").data(pie(helper.makeExpencesInnerData(0, yearData))).enter().append("g");
        
        var path = arcs.append("path").attr("d", arc).each(function(d){
            this._current = d;
        }).attr("fill", function(d, i){
            return helper.segExpencesBWColor(innerData[i].name);
        });
        if(pieWidth >= 600){
			var places = [[-0.45 * minSqareVal, 0.31 * minSqareVal, -0.47 * minSqareVal, 0.3135 * minSqareVal, -0.3 * minSqareVal, 0.3125 * minSqareVal]
		, [0.35 * minSqareVal, 0.31 * minSqareVal, 0.45 * minSqareVal, 0.3135 * minSqareVal, 0.187 * minSqareVal, 0.3125 * minSqareVal]
		, [-0.45 * minSqareVal, -0.415 * minSqareVal, -0.45 * minSqareVal, -0.4125 * minSqareVal, -0.25 * minSqareVal, -0.4125 * minSqareVal]
		, [0.35 * minSqareVal, -0.4125 * minSqareVal, 0.49 * minSqareVal, -0.4125 * minSqareVal, 0.3 * minSqareVal, -0.4125 * minSqareVal]
		, [-0.45 * minSqareVal, -0.305 * minSqareVal, -0.45 * minSqareVal, -0.3025 * minSqareVal, -0.3 * minSqareVal, -0.3025 * minSqareVal]];
        var place = [-200, -200];
        var textBox2
		 = arcs.append("text").text(function(d, i){
            return innerData[i].publicName;
        }).attr("transform", function(d, i){
			 var center = arc.centroid(d);
			if(i == 0){
			places[i][6] = -0.25 * pieWidth;
            places[i][7] = center[1];	
			}
			else if(i == 1){
			places[i][6] = 0.15 * pieWidth;
            places[i][7] = center[1];	
			}
			else if(i == 2){
			places[i][6] = center[0];
            places[i][7] = center[1];	
			}
			else if(i == 3){
			places[i][6] = 0.15 * pieWidth;
            places[i][7] = center[1];	
			}
			else if(i == 4){
			places[i][6] = -0.25 * pieWidth;
            places[i][7] = center[1];	
			}else{
			places[i][6] = center[0];
            places[i][7] = center[1];	
			}
           
        
            return "translate(" + places[i][0] + "," + (places[i][1]) + ")";
        });
			 makeLines();	
		}
		else if(pieWidth >= 400){

		var places = [[-0.45 * minSqareVal, 0.35 * minSqareVal, -0.47 * minSqareVal, 0.3135 * minSqareVal, -0.3 * minSqareVal, 0.3125 * minSqareVal]
		, [0.3 * minSqareVal, 0.35 * minSqareVal, 0.45 * minSqareVal, 0.3135 * minSqareVal, 0.187 * minSqareVal, 0.3125 * minSqareVal]
		, [-0.45 * minSqareVal, -0.415 * minSqareVal, -0.45 * minSqareVal, -0.4125 * minSqareVal, -0.25 * minSqareVal, -0.4125 * minSqareVal]
		, [0.3 * minSqareVal, -0.4125 * minSqareVal, 0.49 * minSqareVal, -0.4125 * minSqareVal, 0.3 * minSqareVal, -0.4125 * minSqareVal]
		, [-0.45 * minSqareVal, -0.315 * minSqareVal, -0.45 * minSqareVal, -0.3125 * minSqareVal, -0.3 * minSqareVal, -0.3125 * minSqareVal]];
        var place = [-200, -200];
        var textBox2
		 = arcs.append("text").text(function(d, i){
            return innerData[i].publicName;
        }).attr("transform", function(d, i){
			 var center = arc.centroid(d);
			if(i == 0){
			places[i][6] = -0.25 * pieWidth;
            places[i][7] = center[1];	
			}
			else if(i == 1){
			places[i][6] = 0.15 * pieWidth;
            places[i][7] = center[1];	
			}
			else if(i == 2){
			places[i][6] = center[0];
            places[i][7] = center[1];	
			}
			else if(i == 3){
			places[i][6] = 0.15 * pieWidth;
            places[i][7] = center[1];	
			}
			else if(i == 4){
			places[i][6] = -0.25 * pieWidth;
            places[i][7] = center[1];	
			}else{
			places[i][6] = center[0];
            places[i][7] = center[1];	
			}
           
        
            return "translate(" + places[i][0] + "," + (places[i][1]) + ")";
        });
			 makeLines();	
			
		}
	
        function makeLines(){
			
	    MakeLine(pieGroup, 0);
        MakeLine(pieGroup, 1);
        MakeLine(pieGroup, 2);
        MakeLine(pieGroup, 3);
        MakeLine(pieGroup, 4);
			
		}
       
        function MakeLine(selectorSvg, lineNum){
            var lineData = [{
                "x": places[lineNum][2],
                "y": places[lineNum][3]
            }, {
                "x": places[lineNum][4],
                "y": places[lineNum][5]
            }, {
                "x": places[lineNum][6],
                "y": places[lineNum][7]
            }];
            
            //This is the accessor function we talked about above
            var lineFunction = d3.svg.line().x(function(d){
                return d.x;
            }).y(function(d){
                return d.y;
            }).interpolate("linear");
            
            
            
            //The line SVG Path we draw
            var lineGraph = selectorSvg.append("path").attr("d", lineFunction(lineData)).attr("stroke", "black").attr("stroke-width", 1).attr("fill", "none");
        }
        
        var yearSelectorSvg = pieSvg.append("g");

        
        var centerText = yearSelectorSvg.append("text").text(function(d){
            return 2009;
        }).attr("y", 0.1 * minSqareVal).attr("font-size", function(){
			if(pieWidth >= 400){
				return "36px";
			}else{
				return "20px";
			}
			
		}).attr("x", function(){
			if(pieWidth >= 400){
				return 0.4 * pieWidth;
			}else{
				return 0.35 * pieWidth;
			}
			
		});
        
        pieObject.updateOut = function(){
        
        
        }
        
        function mouseoutColor(){
		path.transition().duration(500).attr("fill", function(d, i){
            return helper.segExpencesBWColor(innerData[i].name)
        });
			leg.UpdateBW();
        }
		 function mouseoverColor(){
		 	leg.UpdateColor();
		 	path.transition().duration(500).attr("fill", function(d, i){
		 		return helper.segExpencesColor(innerData[i].name);
		 	});
		 }
        
        
        pieObject.update = function(year){
            pie.value(function(d){
                return d.populatoin;
            }); // change the value function
            path = path.data(pie(helper.makeExpencesInnerData(year, yearData))); // compute the new angles
            path.transition().duration(750) // redraw the arcs
			.attr("fill", function(d, i){
		 		return helper.segExpencesColor(innerData[i].name);
		 	})
			.attrTween("d", arcTween); 
        }
		
		
        function mouseover(){
	 	
            yearNow = parseInt(d3.mouse(this)[0] / (pieWidth / data.length));
            if (yearNow < data.length) {
            
            
                //console.log(" Year : " +  data[yearNow].year);
                if (lastYear == +data[yearNow].year) {
                
                }
                else {
                    var diff = +data[yearNow].year - +lastYear;
                    //console.log(" diff : " +  diff);
                    leg.update(yearNow);
                    pieObject.update(yearNow);
                    if (diff >= 0) {
                        for (var i = 0; i <= diff; i++) {
                            centerText.transition().delay(i * 50).duration(50).text((data[yearNow].year - diff) + i);
                        }
                        
                    }
                    else {
                        diff = -diff;
                        for (var i = 0; i <= diff; i++) {
                            centerText.transition().delay(i * 50).duration(50).text((+data[yearNow].year + diff) - i);
                        }
                        
                    }
                    lastYear = +data[yearNow].year;
                    
                }
                
            }
           leg.UpdateColor();
            
            
        }
        
        function arcTween(a){
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t){
                return arc(i(t));
            };
        }
        
        
         leg.UpdateBW();
        return pieObject;
    }
    
    
    
    
    function legend(yearData){
        var leg = {};
        var rectWidth = helper.getLegRectWidth(mapWidth);
	    var fontSize = helper.getLegFontSize(mapWidth);
		var translateWidth =  helper.getLegTableTranslateWidth(mapWidth);
        var legData = helper.makeExpencesInnerData(0, yearData);
        
        // create table for legend.
        var legend = tableGroup.append("table")
        .attr("width", mapWidth).attr("height", mapHeight).style("transform","translate(" + translateWidth + ",20%)").attr('class', 'legend');
        
        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(legData).enter().append("tr");
        
        // create the first column for each segment.
        var firstBox = tr.append("td");
        
        var sqares = firstBox.append("svg").attr("width", rectWidth).attr("height", rectWidth).append("rect").attr("width", rectWidth).attr("height", rectWidth).attr("fill", function(d){
            return helper.segExpencesColor(d.name);
        });
        
        // create the second column for each segment.
        tr.append("td").style("font-size",fontSize).text(function(d){
            return d.publicName;
        });
        
        // create the third column for each segment.
        var prozents = tr.append("td").style("font-size",fontSize).attr("class", 'legendFreq').text(function(d){
            return d.populatoin + "%";
        });
        
        leg.update = function(year){
            prozents.data(helper.makeExpencesInnerData(year, yearData)).text(function(d){
                return d.populatoin + "%";
            });
        }
        leg.UpdateBW = function(){
            sqares.transition().duration(500).attr("fill", function(d, i){
                return helper.segExpencesBWColor(d.name)
            });
        }
        
        leg.UpdateColor = function(){
            sqares.transition().duration(500).attr("fill", function(d, i){
                return helper.segExpencesColor(d.name)
            });
        }
        
        return leg;
    }
    
    
    
    
    
    
    
    
    
    
    
    
}
