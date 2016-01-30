

function HeaderChart(id, data, year){
    if (year == null) {
        year = 2009;
    }
    
    var header = {};
    var helper = ChartHelper();
    var yearID = helper.GetYearID(year, data);
    
    
    
    console.log(yearID);
    
    var div = d3.select(id);
    // var svgHeight = parseInt(div.style("height"), 10);
    var svgHeight = parseInt($(id)[0].offsetHeight, 10);
    var svgWidth = parseInt(div.style("width"), 10);
    var padding = svgWidth / 500;
    
    data.sort(function(a, b){
        return d3.ascending(a.year, b.year);
    });
    
    var MaxPopulationVal = helper.GetMaxPopulation(data, yearID);
    
    
    //Make Bars
    div = d3.select(id).attr("width", svgWidth).attr("height", svgHeight);
    var group = div.append("g");
    svg = group.append("svg").attr("width", svgWidth).attr("height", svgHeight);
    
    var jewGruop = svg.append("g");
    var arabGruop = svg.append("g");
	var ortodoxGruop = svg.append("g");
    
    var activeJewNumber = (data[yearID].jewTotal);
    var jewPart = ((activeJewNumber / MaxPopulationVal) * svgWidth) - padding;
    var jewRect = jewGruop.append("rect").attr("width", jewPart).attr("height", svgHeight).attr('y', 0).attr("x", 0).attr("fill", function(d){
        return helper.segPopulationBW("other");
    });
    
    
    var activeArabNumber = (data[yearID].arabTotal);
    var arabPart = (activeArabNumber / MaxPopulationVal) * svgWidth;
    var arabStart = jewPart + padding;
    var arabRect = arabGruop.append("rect").attr("width", arabPart).attr("height", svgHeight).attr('y', 0).attr("x", arabStart).attr("fill", function(d){
        return helper.segPopulationBW("arab");
    });
	
    var activeOrtodoxNumber = (data[yearID].ultraOrthodoxTotal);
    var ortodoxPart = ((activeOrtodoxNumber / MaxPopulationVal) * svgWidth) - padding;
    var ordodoxStart = jewPart + arabPart + (padding * 2);
    var ortodoxRect = ortodoxGruop.append("rect").attr("width", ortodoxPart).attr("height", svgHeight).attr('y', 0).attr("x", ordodoxStart).attr("fill", function(d){
        return helper.segPopulationBW("jew");
    });
    
    
    var jewText = jewGruop.append("text").text(function(d){
        return helper.getInLargeMilions(activeJewNumber) + "  מיליון יהודים והשאר  ";
    }).attr("y", 15).attr("font-size", function(){
        return "20px";
    }).attr("x", function(){
        return jewPart * 0.5;
    }).style('fill', "white");
    
    var arabText = arabGruop.append("text").text(function(d){
        return helper.getInLargeMilions(activeArabNumber) + "  מיליון ערבים  ";
    }).attr("y", 15).attr("font-size", function(){
        return "20px";
    }).attr("x", function(){
        return arabStart + (arabPart * 0.6);
    }).style('fill', "white");
	
	 var ortodoxText = ortodoxGruop.append("text").text(function(d){
        return helper.getInLargeMilions(activeOrtodoxNumber) + "  מיליון חרדים  ";
    }).attr("y", 15).attr("font-size", function(){
        return "20px";
    }).attr("x", function(){
        return ordodoxStart + (ortodoxPart * 0.7);
    }).style('fill', "white");
    
    
    header.update = function(newYear){
        var newYearID = helper.GetYearID(newYear, data);
        var newMaxPopulationVal = helper.GetMaxPopulation(data, newYearID);
        
        
        activeJewNumber = (data[newYearID].jewTotal);
        var newJewPart = ((activeJewNumber / newMaxPopulationVal) * svgWidth) - padding;
        jewRect.transition().delay(500).attr("width", newJewPart).attr("height", svgHeight).attr('y', 0).attr("x", 0).attr("fill", function(d){
            return helper.segPopulationColor("other");
        });
        
        activeArabNumber = (data[newYearID].arabTotal);
        var newArabPart = (activeArabNumber / newMaxPopulationVal) * svgWidth;
        var newArabStart = newJewPart + padding;
        arabRect.transition().delay(500).attr("width", newArabPart).attr("height", svgHeight).attr('y', 0).attr("x", newArabStart).attr("fill", function(d){
            return helper.segPopulationColor("arab");
        });
         activeOrtodoxNumber = (data[newYearID].ultraOrthodoxTotal);
        var newOrtodoxPart = ((activeOrtodoxNumber / newMaxPopulationVal) * svgWidth) - padding;
        var newOrdodoxStart = newJewPart + newArabPart + (padding * 2);
        ortodoxRect.transition().delay(500).attr("width", newOrtodoxPart).attr("height", svgHeight).attr('y', 0).attr("x", newOrdodoxStart).attr("fill", function(d){
            return helper.segPopulationColor("jew");
        });
        if (newYearID < data.length) {
            jewText.transition().duration(1000).attr("x", function(){
                return (newJewPart * 0.5);
            }).text(helper.getInLargeMilions(activeJewNumber) +  "  מיליון יהודים והשאר  ");
            arabText.transition().duration(1000).attr("x", function(){
                return newArabStart + (newArabPart * 0.6);
            }).text(helper.getInLargeMilions(activeArabNumber) + "  מיליון ערבים  ");
			ortodoxText.transition().duration(1000).attr("x", function(){
                return newOrdodoxStart + (newOrtodoxPart * 0.7);
            }).text(helper.getInLargeMilions(activeOrtodoxNumber) + "  מיליון חרדים  ");
        }
        
    }
    
    
    
    
    
    return header;
}




