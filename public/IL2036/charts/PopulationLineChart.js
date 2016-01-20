

function PopulationLineChart(id, data){
	///Set Dinamic Sizes
    var helper = ChartHelper();
    var div = d3.select(id);
   // var svgHeight = parseInt(div.style("height"), 10);
    var svgHeight  = $(id)[0].offsetHeight;
    var svgWidth = parseInt(div.style("width"), 10);
    var chartWidth = (svgWidth / 3) * 2;
    var chartHeight = svgHeight;
    var mapWidth = (svgWidth / 3) * 1;
    var mapHeight = svgHeight;
    
    var paddingLeft = 0.05 * chartWidth;
	var paddingRight = 0.05 * chartWidth;
    var botPadding = 0.05 * chartHeight;
	var paddingTop = 0.1 * chartHeight;
    var isDoneToMake = false;
    
    ///Sort And filter Data
    data.sort(function(a, b){
        return d3.ascending(a.year, b.year);
    });
    data = data.filter(function(d, i){
        return (i > 5);
    });
    data = data.filter(function(d, i){
        return (i % 4 == 0);
    });
	
	///Add index data to each data point
    data.forEach(function(d,i){d.index=i;});
	
	///Make minimum and maximum values for scales	
    var minPopulationVal = d3.min(data, function(d, i){
        return d.ultraOrthodoxOld;
    });
    var MaxPopulationVal = helper.GetDataMaxPopulation(data);
	///Make Year titles for bottom scale
	var yearTitles = data.map(function(d){
        return d.year;
    });
	
    
    //Make Scales
    var heightScale = d3.scale.linear().domain([MaxPopulationVal, minPopulationVal]).range([paddingTop, chartHeight - botPadding]);
   
    var widthScale = d3.scale.ordinal().domain(d3.range(data.length)).domain(yearTitles).rangeRoundBands([paddingLeft, chartWidth - paddingRight], 0.1);
    
    
    //Make Groupes and SVGs
	div.attr("width", svgWidth).attr("height", svgHeight);
    var group = div.append("g").attr("width", svgWidth).attr("height", svgHeight);
    var sideText = legend(data);
    var svg = group.append("svg").attr("width", chartWidth).attr("height", chartHeight);
    var gruops = svg.selectAll("g").data(data).enter().append("g");
	
	
    //Make Axis Acording to Scales
    var widthAxis = d3.svg.axis().scale(widthScale).orient("bottom").tickSize(0, 1);

    var axisx = svg.append("g").attr("class", "x-axis").attr("transform", "translate(" + 0 + "," + (chartHeight - botPadding) + ")").attr("font-size", "10px").call(widthAxis);
    
    var heightAxis = d3.svg.axis().scale(heightScale).orient("left").ticks(10).tickSize(0, 1).tickFormat(function(d){
        return (Math.round((d) / 100000) / 10) + "M";
    });
    
    var axisY = svg.append("g").attr("transform", "translate(" + paddingLeft + "," + 0 + ")").call(heightAxis);
    
  
    
    //Make Bars
    var jewRects = gruops.append("rect").attr("width", widthScale.rangeBand()).attr("height", 0).attr('y', function(d){
        return (heightScale(d.jewTotal));
    }).attr("x", function(d, i){
        return widthScale(d.year);
    }).attr("fill", function(d){
        return helper.segPopulationColor("other");
    })
    .on("mouseover", grapthLineUpdate);
    
    jewRects.append("title").text(function(d){
        return "Year " + d.year + " The Jew Populatoin: " + helper.getInMilions(d.jewTotal) + " Mil";
    })
    
    jewRects.transition().delay(1800).duration(function(d){
        return 1000;
    }).attr("height", function(d){
        return chartHeight - heightScale(d.jewTotal) - (botPadding);
    }).each("end", endPainiting);
    
    
    var arabRects = gruops.append("rect").attr("width", widthScale.rangeBand()).attr("height", 0).attr('y', function(d){
        return (heightScale(d.arabTotal));
    }).attr("x", function(d, i){
        return widthScale(d.year);
    }).attr("fill", function(d){
        return helper.segPopulationColor("jew");
    })
    .on("mouseover", grapthLineUpdate);
    
    arabRects.append("title").text(function(d){
        return "Year " + d.year + " The Arab Populatoin: " +helper.getInMilions(d.arabTotal) + " Mil";
    });
    arabRects.transition().delay(800).duration(function(d){
        return 1000;
    }).attr("height", function(d){
        return chartHeight - heightScale(d.arabTotal) - (botPadding);
    });
    
    
    var ortodoxRects = gruops.append("rect").attr("width", widthScale.rangeBand()).attr("height", 0).attr("y", function(d){
        return (heightScale(d.ultraOrthodoxTotal));
    }).attr("x", function(d, i){
        return widthScale(d.year);
    }).attr("fill", function(d){
        return helper.segPopulationColor("arab");
    }).on("mouseover", grapthLineUpdate);
    
    ortodoxRects.append("title").text(function(d){
        return "Year " + d.year + " The Ortodox Populatoin: " + helper.getInMilions(d.ultraOrthodoxTotal) + " Mil";
    });
    
    ortodoxRects.transition().delay(0).duration(function(d){
        return 1000;
    }).attr("height", function(d){
        return chartHeight - heightScale(d.ultraOrthodoxTotal) - (botPadding);
    });
    
    /// Interaction Functions
    function endPainiting(){
        console.log("Done Painting: ");
        isDoneToMake = true;
        PaintGraphBW();
		 sideText.UpdateBW();
    }
    
    function grapthLineUpdate(i){
		if(isDoneToMake){
		sideText.update(i.index);	
		}
		
	} 
  
    div.on("mouseout", mouseoutColor);
    div.on("mouseover", mouseoverColor);
    
    function mouseoutColor(){
        if (isDoneToMake) {
            PaintGraphBW();
        }
        
    }
    
    function mouseoverColor(){
        if (isDoneToMake) {
            PaintGraphColor();
        }
        
        
    }
    
    
    function PaintGraphBW(){
        jewRects.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationBW("other")
        });
        arabRects.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationBW("arab")
        });
        ortodoxRects.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationBW("jew")
        });
        sideText.UpdateBW();
    
    }
    
    function PaintGraphColor(){
        jewRects.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationColor("other")
        });
        arabRects.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationColor("arab")
        });
        ortodoxRects.transition().duration(500).attr("fill", function(d, i){
            return helper.segPopulationColor("jew")
        });
        sideText.UpdateColor();
    
    }
    
    function legend(yearsData){
        var leg = {};
        var legData = helper.MakePopulationLegData(yearsData, 0);
		//var rectHeight = helper.getLegRectHeight(mapHeight);
		var rectWidth = helper.getLegRectWidth(mapWidth);
	    var fontSize = helper.getLegFontSize(mapWidth);
		var translateWidth =  helper.getLegTableTranslateWidth(mapWidth);
		
        // create table for legend.
        var legend = group.append("table").attr("width", mapWidth).attr("height",mapHeight)
		.style("transform","translate(" + translateWidth + ",20%)")
		.attr('class', 'legend');
        
        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(legData).enter().append("tr");
        
        // create the first column for each segment.
        var sqares = tr.append("td")
		.append("svg").attr("width", rectWidth).attr("height", rectWidth).append("rect").attr("width", rectWidth).attr("height", rectWidth).attr("fill", function(d){
            return helper.segPopulationColor(d.name);
        });
        
        // create the second column for each segment.
        tr.append("td")
		.style("font-size",fontSize)
		.text(function(d){
            return d.publicName;
        });
            
        // create the third column for each segment.
        var PopulationNumbers = tr.append("td").style("font-size",fontSize).attr("class", 'legendFreq').text(function(d){
            return helper.getInMilions(d.populatoin) + " M";
        })
        ;
        // create the fourth column for each segment.
        var prozents = tr.append("td").style("font-size",fontSize).attr("class", 'legendPerc').text(function(d){
            return getLegend(d, legData);
        });
        
        function getLegend(d, yearD){ // Utility function to compute percentage.
            var prozent = 100 * (d.populatoin / (+yearD[0].populatoin + +yearD[1].populatoin + +yearD[2].populatoin));
            return (Math.round(prozent * 10) / 10) + "%";
        }
		/// Interaction Functions
		leg.update = function(year){
		   	var yearData = helper.MakePopulationLegData(yearsData, year);	
            PopulationNumbers.data(yearData).text(function(d){
                return helper.getInMilions(d.populatoin) + " M";
            });
			prozents
			.data(yearData).text(function(d){
			var prozent = 100 * (d.populatoin / (+yearData[0].populatoin + +yearData[1].populatoin + +yearData[2].populatoin));
            return (Math.round(prozent * 10) / 10) + "%";
        });
        }
		
		leg.UpdateBW = function(){
            sqares.transition().duration(1000).attr("fill", function(d, i){
				//  console.log(d.color);
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




