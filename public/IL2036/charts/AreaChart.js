function AreaChart(id, data){


    var helper = ChartHelper();
    

    var div = d3.select(id);
	var svgHeight  = parseInt($(id)[0].offsetHeight,10);
    var svgWidth = parseInt(div.style("width"), 10);
    var chartWidth = (svgWidth / 3) * 2;
    var chartHeight = svgHeight;
    var mapWidth = (svgWidth / 3) * 1;
    var mapHeight = svgHeight;
    
    var paddingLeft = 0.01 * chartWidth;
    var paddingRight = 0.05 * chartWidth;
    
    var paddingTop = 0.2 * chartHeight;
	var chartTop = 0.3 * chartHeight;
    var paddingBot = 0.1 * chartHeight;
    var isDoneToMake = false;
    var pointShift = 30;
	var linePointShift = chartWidth * 0.052;
	
    data.sort(function(a, b){
        return d3.ascending(a.year, b.year);
    });
    
    var MaxPopulationVal = d3.max(data, function(d, i){
        return d.spending;
    });
    
    
    
    //Make Scales
    var heightScale = d3.scale.linear().domain([MaxPopulationVal, 0]).range([paddingTop, chartHeight - paddingBot]);
    
    
    var yearTitles = data.map(function(d){
        return d.year;
    });
    var widthScale = d3.scale.ordinal().domain(yearTitles).rangeRoundBands([paddingLeft, chartWidth - paddingRight], 0.1);
    
    var pointShift2 = yearTitles;
    console.log(pointShift2);
    //Make Bars
    div.attr("width", svgWidth).attr("height", svgHeight);
	var group = div.append("g").attr("width", svgWidth).attr("height", svgHeight);
	var sideLeg = legend(data);
    var svg = group.append("svg").attr("width", chartWidth).attr("height", chartHeight);
	
    var areaSvg = svg.append("svg");
	
    
    var topText = areaSvg.append("text").style("font-size", "25px").text(data[1].year).attr("width", chartWidth).attr("height", chartHeight).attr("x",paddingTop).attr("y",50);
    
    var circles = svg.selectAll("g").data(data).enter().append("g");
    
    var lineIncome = d3.svg.line().x(function(d){
        return widthScale(d.year) + linePointShift;
    }).y(function(d){
        return heightScale(d.income);
    });
    
    
    var circlesIncome = circles.append("circle").attr("width", widthScale.rangeBand()).attr("cy", function(d){
        return heightScale(d.income);
    }).attr("cx", function(d, i){
        return widthScale(d.year) + linePointShift;
    }).attr("fill", function(d){
        return helper.segSocialSecurityBW("income");
    }).attr("r", 0)
    
    circlesIncome.append("title").text(function(d){
        return "Year " + d.year + "Jew Populatoin:" + d.income;
    });
    
    circlesIncome.transition().delay(function(d, i){
        return 1000 + (i * 100);
    }).duration(function(d, i){
        return 1000;
    }).attr("r", 4);
    
    var pathIncome = svg.data([data]).append("path").attr("d", lineIncome).attr("stroke-width", 2).attr("stroke", function(d){
        return helper.segSocialSecurityBW("income");
    }).attr("fill", "none");
    
    
    
    
    var lineSpending = d3.svg.line().x(function(d){
        return widthScale(d.year) + linePointShift;
    }).y(function(d){
        return heightScale(d.spending);
    });
    
    var lineSpendingObject = svg.data([data]).append("path").attr("d", lineSpending).attr("stroke-width", 0).attr("stroke", function(d){
        return helper.segSocialSecurityBW("spending");
    }).attr("fill", "none");
    
    
    
    lineSpendingObject.transition().delay(function(d, i){
        return 0;
    }).duration(function(d, i){
        return 1000;
    }).attr("stroke-width", 2);
    
    
    
    
    var spendingCircles = circles.append("circle").attr("width", widthScale.rangeBand()).attr("cy", function(d){
        return heightScale(d.spending);
    }).attr("cx", function(d, i){
        return widthScale(d.year) + linePointShift;
    }).attr("fill", function(d){
        return helper.segSocialSecurityBW("spending");
    }).attr("r", 0);
    spendingCircles.append("title").text(function(d){
        return "Year " + d.year + "Ortodox Populatoin:" + d.spending;
    });
    
    spendingCircles.transition().delay(function(d, i){
        return 1000 + (i * 100);
    }).duration(function(d, i){
        return 1000;
    }).attr("r", 4);
    
    
    
    
    
    
    var widthAxis = d3.svg.axis().scale(widthScale).tickSize(0, 1).orient("bottom");
    
    var axisx = svg.append("g").attr("class", "x-axis").attr("transform", "translate(" + 0 + "," + (chartHeight - (paddingBot * 0.8)) + ")").attr("font-size", "10px").call(widthAxis);
    
    var heightAxis = d3.svg.axis().scale(heightScale).orient("left").tickSize(0, 0).ticks(7).tickFormat(function(d){
        return d + " M";
    });
    var axisY = svg.append("g").attr("transform", "translate(" + (paddingLeft + linePointShift) + "," + 0 + ")").call(heightAxis);
    
    var ticks = axisY.selectAll(".tick");
    var lineData = [{
        "x": 0,
        "y": 0
    }, {
        "x": chartWidth  - (paddingRight * 2.5),
        "y": 0
    }];
    var lineFunction = d3.svg.line().x(function(d){
        return d.x;
    }).y(function(d){
        return d.y;
    }).interpolate("linear");
    var pathes = ticks.append("path").attr("d", lineFunction(lineData)).attr("stroke", "blue").attr("stroke-width", 0);
    
    
    
    pathes.transition().delay(500).duration(function(d){
        return 1500;
    }).attr("stroke-width", 1).attr("opacity", 0.3);
    
    
    var ticksX = axisx.selectAll(".tick");
    var lineDataX = [{
        "x": 0,
        "y": 0
    }, {
        "x": 0,
        "y": -(chartHeight - (chartTop * 0.9))
    }];
    var pathesX = ticksX.append("path").attr("d", lineFunction(lineDataX)).attr("stroke", "blue").attr("stroke-width", 0).on("mouseover", grapthLineUpdate);
    
  
    
    pathesX.transition().delay(500).duration(function(d){
        return 1500;
    }).attr("stroke-width", 3).attr("opacity", 0.2).each("end", endPainiting);
    
    
    
    
    var areaSvg = svg.append("svg");
    
    var lineSpending = d3.svg.area().x(function(d){
        return widthScale(d.year) + linePointShift;
    }).y0(function(d){
        return heightScale(d.income);
    }).y1(function(d){
        return heightScale(d.spending);
    });
    
    botData = data.filter(function(d, i){
        return (i >= 2);
    });
    
    var areaSpendingObject = areaSvg.data([botData]).append("path").attr("d", lineSpending).attr("stroke-width", 0).attr("stroke", function(d){
        return helper.segSocialSecurityBW("diffrence");
    }).attr("fill", function(d){
        return helper.segSocialSecurityBW("diffrence");
    }).attr("opacity", 0.2);
    
    
    
    
    var areaIncome = d3.svg.area().x(function(d){
        return widthScale(d.year) + linePointShift;
    }).y0(function(d){
        return heightScale(d.spending);
    }).y1(function(d){
        return heightScale(d.income);
    });
    
    
    
    topData = data.filter(function(d, i){
        return (i <= 2);
    });
    
    var areaIncomeObject = areaSvg.data([topData]).append("path").attr("d", areaIncome).attr("stroke-width", 0).attr("stroke", function(d){
        return helper.segSocialSecurityBW("income");
    }).attr("fill", function(d){
        return helper.segSocialSecurityBW("income");
    }).attr("opacity", 0.2);
	
	
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
     function endPainiting(){
        console.log("Done Painting: ");
        isDoneToMake = true;
       // PaintGraphBW();
    }
 function grapthLineUpdate(d,i){
         sideLeg.update(i);
		topText.text(d);
	} 
    
    function PaintGraphBW(){
		areaSpendingObject.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityBW("spending")
        });
		areaIncomeObject.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityBW("income")
        });
		lineSpendingObject.transition().duration(500).attr("stroke", function(d, i){
            return helper.segSocialSecurityBW("spending")
        });
		pathIncome.transition().duration(500).attr("stroke", function(d, i){
            return helper.segSocialSecurityBW("income")
        });
        circlesIncome.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityBW("income")
        });
        spendingCircles.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityBW("spending")
        });
        sideLeg.UpdateBW();
    
    }
    
    function PaintGraphColor(){
		areaSpendingObject.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityColor("diffrence")
        });
		areaIncomeObject.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityColor("income")
        });
		lineSpendingObject.transition().duration(500).attr("stroke", function(d, i){
            return helper.segSocialSecurityColor("spending")
        });
		pathIncome.transition().duration(500).attr("stroke", function(d, i){
            return helper.segSocialSecurityColor("income")
        });
        circlesIncome.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityColor("income")
        });
        spendingCircles.transition().duration(500).attr("fill", function(d, i){
            return helper.segSocialSecurityColor("spending")
        });
        sideLeg.UpdateColor();
    
    }
    
	
    
    function legend(yearsData){
        var leg = {};
        var legData = helper.MakeSocialSecurityLegData(yearsData, 0);
        //var rectHeight = helper.getLegRectHeight(mapHeight);
        var rectWidth = helper.getLegRectWidth(mapWidth);
        var fontSize = helper.getLegFontSize(mapWidth);
        var translateWidth = helper.getLegTableTranslateWidth(mapWidth);
        
		
		
        // create table for legend.
        var legend = group.append("table").attr("width", mapWidth).attr("height", mapHeight).style("transform", "translate(" + translateWidth + ",20%)").attr('class', 'legend');
      //  var topText = group.append("text").text("hi");
        // create one row per segment.
		
        var tr = legend.append("tbody").selectAll("tr").data(legData).enter().append("tr");
    
        // create the first column for each segment.
        var sqares = tr.append("td").append("svg").attr("width", rectWidth).attr("height", rectWidth).append("rect").attr("width", rectWidth).attr("height", rectWidth).attr("fill", function(d){
            return helper.segSocialSecurityBW(d.name);
        });
        
        // create the second column for each segment.
        tr.append("td").style("font-size", fontSize).text(function(d){
            return d.publicName;
        });
        
        // create the third column for each segment.
        var PopulationNumbers = tr.append("td").style("font-size", fontSize).attr("class", 'legendFreq').text(function(d){
            return d.populatoin + " M";
        });
     
        function getLegend(d, yearD){ // Utility function to compute percentage.
            var prozent = 100 * (d.populatoin / (+yearD[0].populatoin + +yearD[1].populatoin + +yearD[2].populatoin));
            return (Math.round(prozent * 10) / 10) + "%";
        }
        /// Interaction Functions
        leg.update = function(year){
            var yearData = helper.MakeSocialSecurityLegData(yearsData, year);
            PopulationNumbers.data(yearData).text(function(d){
                return d.populatoin + " M";
            });
        }
        
        leg.UpdateBW = function(){
            sqares.transition().duration(1000).attr("fill", function(d, i){
                return helper.segSocialSecurityBW(d.name);
            });
        }
        
        leg.UpdateColor = function(){
            sqares.transition().duration(1000).attr("fill", function(d, i){
                return helper.segSocialSecurityColor(d.name);
            });
        }
        
        
        return leg;
    }
    
    
    
    
    
    
    
}
