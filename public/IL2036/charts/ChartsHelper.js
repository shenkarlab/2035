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
            "income": "#82afd8",
            "spending": "#d51527",
            "diffrence": "#82afd8",
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
            "health": "#008ffc",
            "education": "#1e9f4d",
            "pension": "#82afd8",
            "socialSecurity": "#7d76b4",
            "agePension": "#802d82"
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
            "publicName": "אחרים",
            "name": "other",
            "populatoin": yearsData[yearID].jewTotal,
            "color": helper.segPopulationColor("other")
        }, {
            "publicName": "ערבים",
            "name": "arab",
            "populatoin": yearsData[yearID].arabTotal,
            "color": helper.segPopulationColor("arab")
        }, {
            "publicName": "חרדים",
            "name": "jew",
            "populatoin": yearsData[yearID].ultraOrthodoxTotal,
            "color": helper.segPopulationColor("jew")
        }];
        return ans;
        
    }

	helper.MakeSocialSecurityLegData = function(yearsData, yearID){
        var ans = [{
            "publicName": "הכנסות",
            "name": "income",
            "populatoin": yearsData[yearID].income,
            "color": helper.segSocialSecurityColor("income")
        }, {
            "publicName": "הוצאות",
            "name": "spending",
            "populatoin": yearsData[yearID].spending,
            "color": helper.segSocialSecurityColor("spending")
        }, {
            "publicName": "עודף",
            "name": "diffrence",
            "populatoin": yearsData[yearID].diffrence,
            "color": helper.segSocialSecurityColor("diffrence")
        }];
        return ans;
        
    }
	
	helper.makeExpencesInnerData = function (number, yearData){
    var newData = [{ 
        "name": "health",
        "publicName": "בריאות",
        "populatoin": yearData[number].health,
        "color": helper.segExpencesColor("health")
    }, {
        "name": "education",
        "publicName": "חינוך",
        "populatoin": yearData[number].education,
        "color": helper.segExpencesColor("education")
    }, {
        "name": "pension",
        "publicName": "פנסיה",
        "populatoin": yearData[number].pension,
        "color": helper.segExpencesColor("pension")
    }, {
        "name": "socialSecurity",
        "publicName": "ביטוח לאומי",
        "populatoin": yearData[number].socialSecurity,
        "color": helper.segExpencesColor("socialSecurity")
    }, {
        "name": "agePension",
        "publicName": "קצבאות",
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
            return "35";
        }
        else 
            if (legWidth >= 300) {
                return "35";
            }
            else 
                if (legWidth >= 200) {
                    return "20";
                }
                else {
                    return "10";
                }
    }
    helper.getLegFontSize = function(legWidth){
        if (legWidth >= 450) {
            return "45px";
        }
        else 
            if (legWidth >= 350) {
                return "40px";
            }
            else 
                if (legWidth >= 250) {
                    return "30px";
                }
                else 
                    if (legWidth >= 150) {
                        return "20px";
                    }
                    else {
                        return "12px";
                    }
    }
	
	 helper.getPieFontSize = function(legWidth){
        if (legWidth >= 700) {
            return "25px";
        }
        else if (legWidth >= 400) {
                return "25px";
            }
            else if (legWidth >= 200) {
                    return "20px";
                }
                else if (legWidth >= 100) {
                        return "15px";
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

