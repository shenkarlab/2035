

function HeaderChart(id, data,year){
   if(year == null){year = 2009;}
   
    var header = {};
	var helper = ChartHelper();
	var yearID = helper.GetYearID(year,data);
   
	
	
	console.log(yearID);
	
    var div = d3.select(id);
    var svgHeight = parseInt(div.style("height"), 10);
    var svgWidth = parseInt(div.style("width"), 10);
    var padding = svgWidth / 500;

    data.sort(function(a, b){
        return d3.ascending(a.year, b.year);
    });

     var MaxPopulationVal =  helper.GetMaxPopulation(data,yearID);

    
    //Make Bars
    div = d3.select(id).attr("width", svgWidth).attr("height", svgHeight);
    var group = div.append("g");
    svg = group.append("svg").attr("width", svgWidth).attr("height", svgHeight);
	//.on("mouseover", mouseover);
    
    var jewPart = (( data[yearID].jewTotal / MaxPopulationVal) * svgWidth) - padding;
    var jewRect = svg.append("rect").attr("width",jewPart).attr("height", svgHeight).attr('y', 0).attr("x", 0).attr("fill", function(d){
        return helper.segPopulationBW("other");
    });
	
	var arabPart = ( data[yearID].arabTotal / MaxPopulationVal) * svgWidth;
    var arabStart =  jewPart + padding;
    var arabRect = svg.append("rect").attr("width",arabPart).attr("height", svgHeight).attr('y', 0).attr("x",arabStart).attr("fill", function(d){
        return helper.segPopulationBW("arab");
    });
	
	var ortodoxPart =( ( data[yearID].ultraOrthodoxTotal / MaxPopulationVal) * svgWidth) - padding;;
    var ordodoxStart =  jewPart + arabPart + (padding * 2);
    var ortodoxRect = svg.append("rect").attr("width",ortodoxPart).attr("height", svgHeight).attr('y',0 ).attr("x",ordodoxStart).attr("fill", function(d){
        return helper.segPopulationBW("jew");
    });


    header.update = function(newYear){
 	var newYearID = helper.GetYearID(newYear,data);
 	 var newMaxPopulationVal =  helper.GetMaxPopulation(data,newYearID);
 	 var newJewPart = ((data[newYearID].jewTotal / newMaxPopulationVal) * svgWidth) - padding;
    jewRect.transition().delay(500).attr("width",newJewPart).attr("height", svgHeight).attr('y', 0).attr("x", 0).attr("fill", function(d){
        return helper.segPopulationColor("other");
    });
		 
	var newArabPart = ( data[newYearID].arabTotal / newMaxPopulationVal) * svgWidth;
    var newArabStart =  newJewPart + padding;
    arabRect.transition().delay(500).attr("width",newArabPart).attr("height", svgHeight).attr('y', 0).attr("x",newArabStart).attr("fill", function(d){
        return helper.segPopulationColor("arab");
    });
	
	var newOrtodoxPart = (( data[newYearID].ultraOrthodoxTotal / newMaxPopulationVal) * svgWidth) - padding;
    var newOrdodoxStart =  newJewPart + newArabPart + (padding * 2);
    ortodoxRect.transition().delay(500).attr("width",newOrtodoxPart).attr("height", svgHeight).attr('y',0 ).attr("x",newOrdodoxStart).attr("fill", function(d){
        return helper.segPopulationColor("jew");
    });
        } 
    


 return header;
}




