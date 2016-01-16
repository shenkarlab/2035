function ChartHelper(){
    var helper = {};
    
    
    helper.segPopulationColor = function(c){
        return {
            "jew": "#00c4f1",
            "arab": "#0052bb",
            "other": "#ff9f03",
            "none": "#DDDDDD"
        }[c];
    }
    
    helper.segPopulationBW = function(c){
        return {
            "jew": "#606060",
            "arab": "#909090",
            "other": "#B0B0B0"
        }[c];
    }
	
	helper.segSocialSecurityColor = function(c){
        return {
            "income": "#00c4f1",
            "spending": "#0052bb",
            "diffrence": "#ff9f03",
            "none": "#DDDDDD"
        }[c];
    }
    
    helper.segSocialSecurityBW = function(c){
        return {
            "income": "#606060",
            "spending": "#909090",
            "diffrence": "#B0B0B0"
        }[c];
    }
    helper.segExpencesColor = function(c){
        return {
            "health": "#807dba",
            "education": "#e08214",
            "pension": "#41ab5d",
            "socialSecurity": "#41abd5",
            "agePension": "#11dd51"
        }[c];
    }
    
    helper.segExpencesBWColor = function(c){
        return {
            "health": "#606060",
            "education": "#707070",
            "pension": "#909090",
            "socialSecurity": "#A0A0A0",
            "agePension": "#B0B0B0"
        }[c];
    }
    
    helper.getInMilions = function(d){
        return (Math.round((d) / 100000) / 10);
    }
    
    helper.GetMaxPopulation = function(pData, year){
        return +pData[year].jewTotal + +pData[year].arabTotal + +pData[year].ultraOrthodoxTotal;
    }
    
    helper.GetDataMaxPopulation = function(pData){
        var minPopulationVal = d3.min(pData, function(d, i){
            return d.ultraOrthodoxOld;
        });
        var maxArabCount = d3.max(pData, function(d, i){
            return d.arabTotal;
        });
        var maxJewCount = d3.max(pData, function(d, i){
            return d.jewTotal;
        });
        var maxOrtodoxCount = d3.max(pData, function(d, i){
            return d.ultraOrthodoxTotal;
        });
        return (+maxJewCount + +maxArabCount + +maxOrtodoxCount) * 0.75;
    }
    
    helper.MakePopulationLegData = function(yearsData, yearID){
        var ans = [{
            "publicName": "Other",
            "name": "other",
            "populatoin": yearsData[yearID].jewTotal,
            "color": helper.segPopulationColor("other")
        }, {
            "publicName": "Arab",
            "name": "arab",
            "populatoin": yearsData[yearID].arabTotal,
            "color": helper.segPopulationColor("arab")
        }, {
            "publicName": "Ortodox",
            "name": "jew",
            "populatoin": yearsData[yearID].ultraOrthodoxTotal,
            "color": helper.segPopulationColor("jew")
        }];
        return ans;
        
    }
	
	helper.makeExpencesInnerData = function (number, yearData){
    var newData = [{
        "name": "health",
        "publicName": "Health",
        "populatoin": yearData[number].health,
        "color": helper.segExpencesColor("health")
    }, {
        "name": "education",
        "publicName": "Education",
        "populatoin": yearData[number].education,
        "color": helper.segExpencesColor("education")
    }, {
        "name": "pension",
        "publicName": "Pension",
        "populatoin": yearData[number].pension,
        "color": helper.segExpencesColor("pension")
    }, {
        "name": "socialSecurity",
        "publicName": "Social Security",
        "populatoin": yearData[number].socialSecurity,
        "color": helper.segExpencesColor("socialSecurity")
    }, {
        "name": "agePension",
        "publicName": "Age Pension",
        "populatoin": yearData[number].agePension,
        "color": helper.segExpencesColor("agePension")
    }];
    return newData;
    
}
    
    helper.GetYearID = function(yearC, dataC){
        var yearID = yearC - 2009;
        if (yearID < 0 || yearID >= dataC.length) {
            yearID = 0;
        }
        return yearID;
    }
    
    helper.getLegRectHeight = function(legHeight){
        if (legHeight >= 400) {
            return "26";
        }
        else 
            if (legHeight >= 300) {
                return "22";
            }
            else 
                if (legHeight >= 200) {
                    return "16";
                }
                else {
                    return "10";
                }
    }
    
    helper.getLegRectWidth = function(legWidth){
        if (legWidth >= 400) {
            return "26";
        }
        else 
            if (legWidth >= 300) {
                return "22";
            }
            else 
                if (legWidth >= 200) {
                    return "16";
                }
                else {
                    return "10";
                }
    }
    helper.getLegFontSize = function(legWidth){
        if (legWidth >= 400) {
            return "26px";
        }
        else 
            if (legWidth >= 300) {
                return "20px";
            }
            else 
                if (legWidth >= 200) {
                    return "16px";
                }
                else 
                    if (legWidth >= 150) {
                        return "12px";
                    }
                    else {
                        return "8px";
                    }
    }
    
    helper.getLegTableTranslateWidth = function(legWidth){
        if (legWidth >= 400) {
            return "15%";
        }
        else 
            if (legWidth >= 250) {
                return "10%";
            }
            else {
                return "0%";
            }
    }
    
    
    
    
    
    return helper;
    
}

