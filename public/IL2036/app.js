/**
 *
 * IL2036 main app initialization
 *  
 */
var app = angular.module("IL2036", []);

app.controller("mainAppController", ["$scope", "$http", function($scope){
	
	$scope.years = {good:[
		
		{
			title:"המדינה הצפופה ביותר בעולם המערבי",
			rows:[
				{
					total_weight:1,
					
					boxes:[
						
						{ type:"chart", chart_type:"line" , src:"2036.csv"}
					]
					
				},
				{
					total_weight:5,
					
					boxes:[
				
						{type:"paragraph", weight:3, title:"הנטל על מעמד הביניים כבד מאי פעם", body:"כל עובד בישראל מפרנס מכספי המסים שלו מישהו אחר שאיננו עובדחלקה היחסי של שכבת הגיל העובדת הלך והתכווץ, ועומד על כמעט מחצית ממה שהיה ב-2015. אפשר לראות בישראל יותר ויותר מבוגרים, יותר ויותר קשישים. או במלים אחרות, הנטל על מעמד הביניים העובד הפך להיות גדול יותר.  בגלל שבישראל יש גם הרבה ילדים, שגם הם אינם עובדים, יוצא שכל עובד בישראל מפרנס מכספי המסים שלו מישהו שאינו עובד. פעם, הנטל הזה היה מתחלק בין כתפיים רבות יותר."},
						{type:"paragraph", weight:2, title:"בישראל מתגוררים כעת יותר מ-11 מיליון תושבים, אבל שיעור ההשתתפות בשוק העבודה צנח מאוד בשנים האחרונות", body:"ישראל לא רק הצפופה ביותר מבין מדינות המערב, אלא גם מדינה עם שוק עבודה בעייתי ביותר. משקלם של הציבור החרדי והערבי עלה מאוד בשנים האחרונות וביחד הם מהווים כעת 40% מהאוכלוסייה. חלקם בשוק העבודה אמנם גדל בשנים האחרונות, אך הוא עדיין נמוך ביחס לאחרים. התוצאה: פחות עובדים במשק."},
						
					]
				}
			]
		}
	]};
	
}]);
