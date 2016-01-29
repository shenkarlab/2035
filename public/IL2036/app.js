/**
 *
 * IL2036 main app initialization
 *  
 */
var app = angular.module("IL2036", []);


app.controller("mainAppController", ["$scope", "$http", "$rootScope", function($scope, $http, $rootScope){
	
	$scope.stage = "intro";
	$scope.stage = "timeline";
	$scope.currentEditedYear = 2019;
	$scope.more = false;
	
	$scope.years = {
	
	bad:[
		
		{
			year:2036,
			title:"",
			long_rows:[
			
				{
					total_weight:1,
					boxes:[
						
						{
							
							weight:1,
							type:"paragraph",
							body:"<h3>ישראל לא רק הצפופה ביותר מבין מדינות המערב, אלא גם מדינה עם שוק עבודה בעייתי ביותר. משקלם של הציבור החרדי והערבי עלה מאוד בשנים האחרונות וביחד הם מהווים כעת 40% מהאוכלוסייה. חלקם בשוק העבודה אמנם גדל בשנים האחרונות, אך הוא עדיין נמוך ביחס לאחרים. התוצאה:<b class='inline' >פחות עובדים במשק.</b></h3>",
							date:"21 יוני",
							category:"דמוגרפיה",
						}
					]
					
				},
				{
					total_weight:4,
					
					boxes:[
				{type:"paragraph", weight:2, category:"אבטלה", date:"13 ביוני", title:'<h4><b>כל עובד בישראל מפרנס מכספי המסים שלו</b><b>מישהו אחר שאיננו עובד</b></h4>', 
				body:"<p>חלקה היחסי של שכבת הגיל העובדת הלך והתכווץ, ועומד על כמעט מחצית ממה שהיה ב-2015. אפשר לראות בישראל יותר ויותר מבוגרים, יותר ויותר קשישים. או במלים אחרות, הנטל על מעמד הביניים העובד הפך להיות גדול יותר.  בגלל שבישראל יש גם הרבה ילדים, שגם הם אינם עובדים, יוצא שכל עובד בישראל מפרנס מכספי המסים שלו מישהו שאינו עובד. פעם, הנטל הזה היה מתחלק בין כתפיים רבות יותר</p>"},
						{type:"paragraph", weight:2, 
						title:"<h4><b>הממשלה נאלצת להעלות את המס בגלל הירידה בהכנסותיה ממס הכנסה.</b><b>הגירעון והיחס בין החובות לתוצר מזנקים</b></h4>", 
						body:"<p>מכיוון שכמעט חצי מהעובדים במשק עובדים בשכר נמוך מאוד, למדינה אין מספיק הכנסות ממס הכנסה והיא מעלה את שיעור המע״מ לרמה היסטורית של 20%, מה שמדכא את הצריכה ומקטין עוד יותר את הכנסות המדינה ממסים. בינתיים, הגירעון הממשלתי מאמיר ל-5% מהתוצר. במקביל, הממשלה לא מצליחה להקטין את חובותיה, והיחס בין החובות לבין התוצר מתחיל לעלות אחרי שנים של ירידה.התוצאה: נטל המס מעיק על מעמד הביניים יותר ויותר, נשארת להם פחות הכנסה פנויה ביד, אבל האיכות של השירותים הציבוריים שהם מקבלים מהממשלה מתדרדרים ולכן הם צריכים להוציא יותר כסף פרטי על שירותים פרטיים, וכך ההכנסה שלהם מתכווצת עוד יותר. </p>",category:"כספים", date:"5 ביוני",},
						
						
					]
				}
			],
			short_rows:[
				{
					total_weight:1,
					
					boxes:[
						
						{ 
							weight:1,
							date:"21 יוני",
							category:"דמוגרפיה",
							type:"image",
							src:"img/negative-first-headline.png",
						}
						
					]
					
				},
				
				{
					total_weight:5,
					
					boxes:[
				{type:"paragraph", weight:2, category:"אבטלה", date:"13 ביוני", title:"<h2>שיעור המע\"מ עולה לרמה היסטורית של 20%</h2>", body:""},
						{type:"paragraph", weight:2, title:"<h2>הנטל על מעמד הביניים כבד מאי פעם</h2>", body:"",category:"כספים", date:"5 ביוני",},
						
						
					]
				}
			]
		},
		{
			
			year:2029,
			title:"",
			short_rows:[
				
				{
					
					boxes:[
					
						{
							
							weight:1,
							type:"paragraph",
							title:"<h1>בשל הזדקנות האוכלוסייה: גל הפרישה יועלה</h1>",
							body:"<h2>יותר מ-20 שנה אחרי שמשרד האוצר המליץ על כך לראשונה: גיל הפרישה מועלה בבת אחת ל-69 גם לגברים וגם לנשים</h2>",
							category:"כלכלה", date:"21 ביוני",
						}
					]
				},
				{
					boxes:[
					
						{
							weight:2,
							type:"paragraph",
							title:"<h3>הקופה של הביטוח הלאומי הולכת ומתרוקנת</h3>"+
							'<div class="footer" ><ul><li>5 ביוני</li><li>כלכלה</li><li>שתף</li></ul></div>'
							+"<h4>שיעור המע״מ עולה לרמה היסטורית של 20%</h4>",
							category:"כלכלה", date:"13 ביוני",
						},
						{
							weight:2,
							type:"chart",
							chartType:"LineDonatChart",
							csv:"contryExpences.csv",
							
						}
					]
					
				}
				
			],
			long_rows:[
				
				{
					boxes:[
						
						{
							type:"paragraph",
							body:"<p>בשל הזדקנות האוכלוסייה <b class='inline' >הביטוח הלאומי מוציא כל שנה יותר מ-30 מיליארד שקל</b> על קצבאות זקנה וקצבאות סיעוד לאוכלוסיה המבוגרת, והסכום הזה רק הולך וגדל, גם באופן מוחלט וגם ביחס לתוצר של המשק כולו. בשביל שהכסף של הביטוח הלאומי לא ייגמר מהר מדי, הממשלה העלתה את גיל הפרישה עד ל-69, גם לגברים וגם לנשים, יותר מ-20 שנה אחרי שמשרד האוצר המליץ לראשונה להעלות אותו. המחיר: העלאת גיל הפרישה נעשתה בבת אחת במקום באופן הדרגתי, ופגעה בעשרות אלפי עובדים שהיו רגע לפני פרישה.</p>",
							category:"כספים", date:"21 בספטמבר",
						}
					]
				
				},
				
				{
					boxes:[
						
						{
							weight:1,
							type:"paragraph",
							body:"<h4>חרף הצעדים שבהם נקטה הממשלה בשנים האחרונות, <b class='inline' >הרזרבות של הביטוח הלאומי אוזלות</b>. צעדים אלה סייעו רק במעט, והכבידו על המעסיקים, ועל העובדים עצמם. במקביל, גם הקיצוץ בקצבאות לא ביטל את הבלתי נמנע אלא רק דחה אותו קצת.</h4>",
							category:"כספים", date:"5 ביוני",
						},
						
						{
							weight:1,
							type:"paragraph",
							body:"<h5>הממשלה משנה את שמו של המשרד לשוויון חברתי למשרד לאזרחים ותיקים ומטילה על השרה לגבש תוכנית אסטרטגית להתמודדות עם הזדקנות האוכלוסייה.</h5>",
							category:"דמוגרפיה", date:"13 ביוני",
						}
					]
					
				}
			]
		},
		
		{
			
			year:2024,
			short_rows:[
				{
					boxes:[
					
						{
							weight:1,
							type:"paragraph",
							title:"<h1>בתוך 15 שנה: מספר הקשישים בישראל הכפיל את עצמו</h1>",
							category:"דמוגרפיה", date:"14 בספטמבר",
						}
					]
				},
				{
					boxes:[
					
						{
							weight:1,
							type:"paragraph",
							title:'<h2>מנהלי בתי החולים בקריאה נואשת לממשלה: ״אנחנו קורסים״</h2>',
							body:"<h3>״אנחנו מתגעגעים לימים שבהם הזקנה היתה רק במסדרון ולא במחסן, בחדרי השירותים ובחוץ, בשמש״</h3>",
							category:"דמוגרפיה", date:"6 בספטמבר",
						},
						
						{
							weight:1,
							type:"video",
							src:"img/2024-good-video-kendel.jpg",
						}
					]
				}
			],
			
			long_rows:[
				{
					boxes:[
						
						{
							weight:1,
							type:"paragraph",
							body:"<h4>חלקם של המבוגרים באוכלוסיה לא מפסיק לעלות וכבר קרוב ל-14%. אחרי עשרים שנה שבהן חלקם היחסי של המבוגרים נשאר אותו הדבר, <b class='inline' >מספרם של הקשישים באוכלוסיה הישראלית הכפיל את עצמו</b> בחמש עשרה השנים האחרונות. </h4>",
							category:"דמוגרפיה", date:"2 במרץ",
						}
						
					]
				},
				{
					
					boxes:[
					
						{
							weight:2,
							type:"paragraph",
							body:"<h5>המערכות הציבוריות מתחילות לקרוס. בתי החולים והמחלקות הפנימיות כבר מזמן <b class='inline' >לא עומדים בעומס</b>. הממשלה מוציאה לדרך תוכנית חירום לבניית שני בתי חולים חדשים ולהרחבת המחלקות הקיימות, אבל זה ייקח שנים. בינתיים, המחסור ברופאים ואחיות מחריף. התוכנית להוספת תקנים שהושקה לפני חמש שנים טרם נותנת אותותיה, משום שהכשרת רופא אורכת לפחות שבע שנים.</h5>"
							,category:"דמוגרפיה", date:"13 ביוני",
						},
						{
							weight:2,
							type:"chart",
							chartType:"AreaChart",
							csv:"socialSecurity.csv",
							
						}
					]
				}
			]
		},
		
		{
			
			year:2019,
			short_rows:[
				{
					boxes:[
						
						{
							weight:1,
							type:"paragraph",
							title:"<h1>החרדים (בעיקר גברים) והערבים (בעיקר נשים) ממשיכים להצטרף לשוק העבודה, אולם בקצב נמוך יחסית. ובעיקר, נתוני הביטוח הלאומי מעידים כי העובדים שמצטרפים לשוק העבודה נכנסים אליו בשכר נמוך למדי, שעומד לרוב על מחצית מאשר שכרם של עובדים שאינם חרדים או ערבים.</h1>"
						},
						{
							weight:2,
							type:"paragraph",
							body:"<h2>שר האוצר מכריז כי הדבר עלול להביא לכך <b>שבעוד עשור לא יהיו מספיק מסים בקופת המדינה</b> (כי עובדים בשכר נמוך משלמים פחות מסים, או לא משלמים כלל) ומנסה להשיק מחדש את התוכנית להכנסת לימודי הליבה אל תוך מערכת החינוך החרדי., במקביל הוא מקדם תוספות תקציב למגזר הערבי לטובת שיפור רמת ההשכלה ושיפור רמת התשתיות הציבוריות (מעונות יום לנשים, תחבורה ציבורית ועוד).<br/>בתגובה, חברי כנסת מהימין תוקפים אותו על כך שהוא בוגד ברוב היהודי במדינת ישראל ומפלה לטובה את המגזר הערבי, וחברי כנסת חרדים מאיימים במשבר קואליציוני ובפירוק הממשלה. בתוך שלושה ימים ראש הממשלה מורה לשר האוצר <b>לגנוז את התוכניות ואף מבטל את תוכנית התקצוב</b> הדיפרנציאלי למערכת החינוך הערבית שהתחילה חמש שנים קודם לכן.</h2>"
							,category:"כספים", date:"12 בינואר",
						},
						{
							weight:2,
							type:"chart",
							chartType:"PopulationLineChart",
							csv:"populationGroth.csv"
						}
					]
					
				}
			]
		},
		{
			
			year:2016,
			short_rows:[
				{
					boxes:[
						
						{
							weight:1,
							type:"paragraph",
							title:"<h1>נגנזה התוכנית לתמרץ עובדים להישאר בשוק העבודה גם בגיל מבוגר ההמלצה של המועצה הלאומית לכלכלה מ-2013 לגבש תוכנית אסטרטגית להתמודדות עם הזדקנות האוכלוסייה נשארת על הנייר</h1>"
							,category:"כספים", date:"12 בינואר"
						},
						{
							weight:2,
							type:"paragraph",
							title:"<h2>התוכנית לשילוב חרדים וערבים בשוק העבודה מתנהלת בעצלתיים</h2>",
							body:"<h3>התוכנית של משרד הכלכלה לעידוד כניסת חרדים וערבים לשוק העבודה מתקדמת בקצב איטי על בסיס תקציב בינוני, ובמקביל הממשלה מבטלת את החלטת הממשלה הקודמת ומחליטה שלא לחייב לימודי ליבה במערכת החינוך החרדית. במערכת החינוך הערבית נמשכת האפליה לרעה מבחינת תקציבים, על אף ניסיון מצומצם של הממשלה לחלק מחדש את התקציב כך שהתלמידים הערבים יקבלו יותר.</h3>"
							,category:"כספים", date:"12 בינואר"
						},
						{
							weight:2,
							type:"chart",
							chartType:"PopulationLineChart",
							csv:'populationGroth.csv'
						},
						{
							weight:1,
							type:'video',
							src:'img/2015-video-eliau.jpg',
						}
					]
					
				}
			],
			
			long_rows:[
				{
					boxes:[
						
						{
							weight:1,
							type:"paragraph",
							title:"<h4>משרד האוצר ביטל את התוכנית של המשרד לאזרחים ותיקים שהיתה אמורה לתמרץ עובדים להישאר בשוק העבודה עד גילאים מבוגרים יותר - וזאת בשל עלותה: 120 מיליון שקל. בעוד שר האוצר משה כחלון עסוק במשבר מחירי הדיור, והשרה גילה גמליאל משנה את שמו של המשרד לאזרחים ותיקים למשרד לשוויון חברתי, <b>ההמלצה של המועצה הלאומית לכלכלה מ-2013 לגבש תוכנית אסטרטגית להתמודדות עם הזדקנות האוכלוסייה נגנזת</b>. </h4>"
							,category:"כספים", date:"12 בינואר"
						},
						{
							weight:2,
							type:"paragraph",
							title:"<h2>התוכנית לשילוב חרדים וערבים בשוק העבודה מתנהלת בעצלתיים</h2>",
							body:"<h3>התוכנית של משרד הכלכלה לעידוד כניסת חרדים וערבים לשוק העבודה מתקדמת בקצב איטי על בסיס תקציב בינוני, ובמקביל הממשלה מבטלת את החלטת הממשלה הקודמת ומחליטה שלא לחייב לימודי ליבה במערכת החינוך החרדית. במערכת החינוך הערבית נמשכת האפליה לרעה מבחינת תקציבים, על אף ניסיון מצומצם של הממשלה לחלק מחדש את התקציב כך שהתלמידים הערבים יקבלו יותר.</h3>"
							,category:"כספים", date:"12 בינואר"
						},
						{
							weight:2,
							type:"chart",
							chartType:"PopulationLineChart",
							csv:'populationGroth.csv'
						},
						
					]
					
				}
			]
		}
	],
	
	good:[
	
		{
			
			year:2016,
			short_rows:[
				{
					boxes:[
						
						{
							weight:2,
							type:"paragraph",
							title:"<h1>הממשלה מחליטה לשים את האתגר הדמוגרפי בראש סדר העדיפויות</h1><h2>יוקם צוות מיוחד שיציג מתווה אסטרטגי בתוך חצי שנה להתמודדות עם הזדקנות האוכלוסייה ועם שילוב חרדים וערבים בשוק העבודה. חברי הצוות יצאו לבקר באוסטרליה ובמדינות נוספות שגיבשו תוכניות דומות</h2>"+
							'<div class="footer" ><ul><li>14 בינואר</li><li>דמוגרפיה</li><li>שתף</li></ul></div>'
							+"<h3>התוכנית האסטרטגית של הממשלה: גיל הפרישה יועלה בהדרגה ל-69</h3>",
							category:"פנסיה", date:"9 בינואר",
						},
						{
							weight:2,
							type:"chart",
							chartType:"PopulationLineChart",
							csv:'populationGroth.csv'
							
						},
						{
							weight:1,
							type:'video',
							src:'img/2015-video-eliau.jpg',
						}
					]
					
				}
			],
			long_rows:[
			
				{
					total_weight:1,
					boxes:[
						
						{
							
							weight:1,
							type:"paragraph",
							body:"<h4>לאחר ששמעה סקירה של המועצה הלאומית לכלכלה, <b>הממשלה מחליטה לגבש תוכנית אטסטרטגית</b> להתמודדות עם הזדקנות האוכלוסייה ועם השינויים הדמוגרפיים, מתוך הבנה <b>שהשינויים האלה עומדים לשנות לחלוטין את פני החברה</b> בישראל וללחוץ מאוד על מעמד הביניים. ראש הממשלה מקים צוות מיוחד המשותף למשרדו ולמשרד האוצר שיציג בפני הממשלה תוכנית רחבת היקף בתוך חצי שנה. הצוות יבקר באוסטרליה ובמדינות נוספות שגיבשו תוכניות שכאלה, ומגבש מקבילה ישראלית בדגש על המאפיינים הייחודיים של החברה בישראל. </h4>",
							date:"21 יוני",
							category:"דמוגרפיה",
						}
					]
					
				},
				{
					total_weight:4,
					
					boxes:[
				{type:"paragraph", weight:2, category:"אבטלה", date:"13 ביוני", 
				title:'', 
				body:"<h5>חלקה היחסי של שכבת הגיל העובדת הלך והתכווץ, ועומד על כמעט מחצית ממה שהיה ב-2015. אפשר לראות בישראל יותר ויותר מבוגרים, יותר ויותר קשישים. או במלים אחרות, הנטל על מעמד הביניים העובד הפך להיות גדול יותר.  בגלל שבישראל יש גם הרבה ילדים, שגם הם אינם עובדים, יוצא שכל עובד בישראל מפרנס מכספי המסים שלו מישהו שאינו עובד. פעם, הנטל הזה היה מתחלק בין כתפיים רבות יותר</h5>"
				},
						{type:"paragraph", weight:2, 
						title:"", 
						body:"<h6>אחרי חצי שנה של עבודה מאומצת הוצגה לממשלה התוכנית להתמודדות עם הזדקנות האוכלוסייה ולשילוב חרדים וערבים בשוק העבודה. שתי מטרותיה: יצירת תשתיות מתאימות לכמות גדולה יותר של מבוגרים בשביל שהמערכות הציבוריות לא יקרסו, והעלאת ההשכלה והנגישות לעבודה של ערבים וחרדים.<b>המרכיבים המרכזיים של התוכנית:</b> העלאה הדרגתית של גיל הפרישה עד ל-69, פיתוח כלים משלימים לעידוד תעסוקת מבוגרים, שינוי מחדש של הכללים במערכת הפנסיה כך שהמבוגרים יקבלו הגנה גדולה יותר לחסכונותיהם, הכשרת כמויות גדולות יותר של רופאים ואחיות במקצועות הזקנה (גריאטריה, רפואה פנימית ועוד), אימוץ תוכניות של הג׳וינט לעידוד שילוב קשישים בקהילה, שדרוג הכלים שיש לקופות החולים למתן שירותים למבוגרים, השקה הדרגתית של ביטוח סיעודי ממלכתי, הכנסה איטית ובהסכמה של לימודי הליבה למערכת החינוך החרדית, וכן השקעה חסרת תקדים של תקציבים בתשתיות בחברה הערבית (מערכת החינוך, מעונות יום לילדים, כבישים, תחבורה ציבוריות ועוד) ושינוי שיטת התקצוב מכאן והלאה תוך מתן עדיפות למגזר הערבי. עלות התוכנית: 50 מיליארד שקל לעשר שנים.</h6>"},
						
						
					]
				}
			]
		},
		
		{
			
			year:2019,
			short_rows:[
				
				{
					boxes:[
					
						{
							type:"paragraph",
							weight:2,
							title:"<h1>ההשקעה במגזרים החרדי הערבי מתחיל להניב פרי: עלייה בקצב ההצטרפות לשוק העבודה</h1>",
							body:"<h2>גורמים חרדיים מבקשים להקים מתנ״סים נוספים ללימוד מחשבים ומדעים. צוות יישום </h2>",
							date:"3 באפריל",
							category:"כלכלה",
						},
						{
							type:"chart",
							weight:2,
							csv:"enployment.csv",
							chartType:"SunChart"
						},
						{
							type:"paragraph",
							title:"<h3>בדרך ל-69: גיל הפרישה לנשים הועלה ל-65, גיל הפרישה לגברים הועלה ל-68</h3>",
							date:"15 בפברואר",
							category:"פנסיה",
						}
					]
				}
			],
			long_rows:[
			
				{
					boxes:[
					
						{
							type:"paragraph",
							weight:2,
							body:"<p>בחלוף חמש שנים מהשקתה, צוות יישום התוכנית הלאומית להתמודדות עם השינויים הדמוגרפיים הציג לממשלה דו״ח התקדמות. <b>ההשקעה בתשתיות במגזר הערבי מתחילה לתת את אותותיה</b> וקצב ההצטרפות לשוק העבודה, בעיקר של נשים ערביות, גדל. במקביל, יותר ויותר ראשי ערים, רבנים ומחנכים מהמגזר החרדי מבקשים להקים מתנ״סים דוגמת מתנ״ס הפיילוט שהוקם בסבסוד מפעל הפיס במודיעין עילית, שמאפשר לתלמידים ותלמידות ללמוד מחשבים ומדעים בשעות אחר הצהריים בתום הלימודים בבתי הספר והישיבות. בצד התקדמות התוכנית הצוות מציין כי יש להסיט תקציבים לטובת עידוד יזמות במגזר הערבי והחרדי ויצירת חממות הייטק בשני המגזרים, וכן לטובת עידוד מעסיקים (בעיקר מהמגזר היהודי החילוני) לקליטת עובדים ערבים וחרדים. כמו כן הצוות מדווח כי התוכנית להגדלת התקציבים למערכת החינוך הערבית נתקלת בקשיים פוליטיים.</p>",
							date:"3 באפריל",
							category:"כלכלה",
						},
						{
							type:"paragraph",
							weight:2,
							body:"<h5>הצוות ליישום התוכנית הלאומית להתמודדות עם השינויים הדמוגרפיים דיווח לממשלה כי הושלמה הפריסה מחדש של רשת הביטחון לפנסיה, כך <b>שכספי החוסכים המבוגרים פחות חשופים לתנודות בבורסה,</b> וכי הממשלה נותנת הטבות מס לעובדים מבוגרים שנשארים בשוק העבודה, אפילו בעבודות חלקיות. העלאת גיל הפרישה מתקדמת כמתוכנן, וגיל הפרישה לנשים כבר עלה ל-65, בדרך ל-69. גיל הפרישה לגברים כבר עומד על 68, בדרך ל-69. יחד עם זאת צוות התוכנית הזהיר את הממשלה כי התוכנית להכשרת יותר רופאים ואחיות בתחומי הזקנה סובלת מתקצוב לא מספק.</h5>",
							date:"15 בפברואר",
							category:"פנסיה",
						}
					]
				}
			]
			
		},
		{
			
			year:2024,
			short_rows:[
				{
					boxes:[
					
						{
							weight:1,
							type:"paragraph",
							title:"<h1>בתי החולים: מעט הקלה בעומס</h1>",
							body:"<p>חלקם של הקשישים באוכלוסייה הכפיל את עצמו ב-15 השנה האחרונות.</p>",
							date:"11 בנובמבר",
							category:"דמוגרפיה",
						}
					]
				},
				{
					boxes:[
					
						{
							weight:1,
							type:"paragraph",
							title:"<h3>האם התוכנית הלאומית להתמודדות עם השינויים הדמוגרפיים תוארך לעשור נוסף</h3>",
							body:"<h5>?הצוות ליישום התוכנית מבקש 30 מיליארד שקל נוספים להשקעה במגזרים החרדי והערבי</h5>",
							date:"2 בספטמבר",
							category:"דמוגרפיה",
						},
						
						{
							weight:1,
							type:"video",
							src:"img/2024-video-kendel.jpg",
						}
					]
				}
			],
			
			long_rows:[
				{
					boxes:[
						
						{
							weight:1,
							type:"paragraph",
							body:"<h5>חלקם של המבוגרים באוכלוסיה לא מפסיק לעלות וכבר נושק ל-14%. אחרי עשרים שנה שבהן חלקם היחסי של המבוגרים נשאר אותו הדבר, מספרם של הקשישים באוכלוסיה הישראלית הכפיל את עצמו בחמש עשרה השנים האחרונות. בינתיים, התוכנית להכשרת רופאים ואחיות למקצועות הזקנה בוצעה באופן חלקי, אבל אפילו הקצב החלקי מאפשר הקלה מסוימת בקופות ובבתי החולים. <b>תמריצי מס שהממשלה העניקה לפני עשור הביאו לכך שתורמים רבים יותר</b> תרמו כספים להקמת מחלקות פנימיות חדשות ומחלקות אשפוז סיעודי מתקדמות יותר, שבנייתן מסתיימת בשנים אלה.</h5>",
							date:"11 בנובמבר",
							category:"כלכלה",
						}
						
					]
				},
				{
					
					boxes:[
					
						{
							weight:2,
							type:"paragraph",
							body:"<h4>הצוות ליישום התוכנית הלאומית להתמודדות עם השינויים הדמוגרפיים מציג את דוח הסיכום שלו וממליץ לממשלה להאריך את התוכנית לעשר שנים נוספות, הפעם בתקציב צנוע יותר: 30 מיליארד שקל. על הפרק: דגש רב יותר על הסטת תקציבים למערכת החינוך הערבית והתחלת הכנסת חומרי לימודי החול אל תוך מערכת החינוך החרדית, בהסכמה (כשלב ב׳ לפרויקט שהחל עשור קודם לכן).</h4>",
							date:"2 בספטמבר",
							category:"דמוגרפיה",
						},
						{
							weight:2,
							type:"chart",
							chartType:"PopulationLineChart",
							csv:"populationGroth.csv",
							
						}
					]
				}
			]
		},
		
		{
			
			year:2029,
			
			short_rows:[
			
				{
					boxes:[
						
						{
							weight:1,
							title:"<h1>אקזיט היסטורי: סטארט-אפ חרדי נמכר ב-100 מיליון דולר פערי השכר בין חילונים לחרדים הצטמצמו מ-50% ל-30%, כך לפי צוות התוכנית להתמודדות עם שינויים דמוגרפיים",
							body:"<h3>פערי השכר בין חילונים לחרדים הצטמצמו מ-50% ל-30%, כך לפי צוות התוכנית להתמודדות עם שינויים דמוגרפיים</h3>",
							date:"13 באפריל",
							category:"כלכלה",
						}
					]
				},
				
				{
					boxes:[
					
						{
							weight:2,
							title:"<h1>עכשיו זה רשמי: גיל הפרישה הועלה ל-69</h1>",
							date:"5 באפריל",
							category:"פנסיה",
						},
						{
							weight:2,
							type:"chart",
							chartType:"LineDonatChart",
							csv:"contryExpences.csv",
							
						}
					]	
				}
			],
			long_rows:[
				
				{
					boxes:[
						
						{
							weight:1,
							body:"<h2>התוכנית הלאומית להתמודדות עם השינויים הדמוגרפיים נמצאת עמוק בשלב השני שלה. צוות התוכנית מדווח כי <b>עוד ועוד מוסדות חינוך חרדיים משתתפים במבחני המיצ״ב</b> ומעידים על התקדמות ברמת ההישגים של התלמידים בתחומי המדעים, האנגלית והמתמטיקה. במקביל, בוגרי המסלולים המיוחדים לחרדים במכללות ובאוניברסיטאות <b>מתחילים להשתלב בשוק</b> העבודה, ופערי השכר בינם לבין העובדים שאינם חרדים מתחילים להצטמצם (מפער של 50% לפער של 30%). לראשונה, סטארט-אפ חרדי למהדרין נמכר באקזיט של 100 מיליון דולר.</h2>",
							date:"13 באפריל",
							category:"כלכלה",
							
						},
						{
							weight:1,
							body:"<h3>העלאת גיל הפרישה ל-69 מסתיימת, 15 שנים אחרי שהתחילה. התוצאה: גידול בשיעורי התעסוקה של עובדים מבוגרים משני המינים, הקטנה של גירעון הביטוח הלאומי בעשרות אחוזים ושמירה על רמה קבועה של קצבת הזקנה.</h3>",
							date:"5 באפריל",
							category:"פנסיה",
							
						},
						
					]
					
				}
			]
		},
		
		{
			
			year:2036,
			short_rows:[
			
				{
					
					boxes:[
						
						{
							weight:1,
							type:"image",
							src:"img/2036-good-headline.png",
							title:"<h2>ב-20 השנים האחרונות. חיים כאן היום יותר קשישים, יותר חרדים ויותר ערבים - ועדיין אין הכבדה על מעמד הביניים.</h2>",
							date:"23 במאי",
							category:"דמוגרפיה",
						}
					]
				}
			],
			
			long_rows:[
				
				{
					boxes:[
					
						{
							weight:2,
							body:"<p>במדינת ישראל מתגוררים יותר מ-11 מיליון תושבים - המדינה הצפופה ביותר מבין מדינות המערב. הציבור החרדי והערבי מהווים יחד 40% מהאוכלוסייה, אבל העובדים החרדים והערבים <b>משולבים בשוק העבודה בשיעורים דומים מאוד לזה של יתר האוכלוסייה</b>.</p><br/><br/>"
							+"<p>חלקה היחסי של שכבת הגיל העובדת הלך והתכווץ, ועומד על כמעט מחצית. אפשר לראות בישראל יותר ויותר מבוגרים, יותר ויותר קשישים, אבל שיעור גדול מבני ה-65-70 <b>עדיין נמצאים בשוק העבודה</b>, במסלולים מותאמים לעובדים מבוגרים. מגמת הכבדת הנטל על כתפי מעמד הביניים נעצרת. </p>",
							
						},
						
						{
							weight:2,
							body:"<h2><b>פערי השכר בין העובדים החרדים והערבים לבין יתר העובדים הצטמצמו עד כדי 20%,</b> כך שהם עובדים בשכר גבוה יותר ולכן משלמים יותר מסים.<br/>המדינה לא צריכה להעלות את המע״מ ואף לא את מס ההכנסה, "
+"הגירעון נשמר על רמה סבירה של 2% מהתוצר, והיחס בין החובות לתוצר שומר על יציבות."
+"</h2>"
							
						}
					],
					
					date:"23 במאי",
					category:"דמוגרפיה",
					
				}
			]
		}
	
	]
	
	};
	
	$scope.senario = "bad";
	$scope.yearIndex = 0;
	
	$rootScope.setYearIndex = function(index){
		
		$scope.current_year = $scope.years[$scope.senario][index].year;
	};
	
	$scope.flipToGood = function(){
		
		$(".flip-container").addClass("flipped");
		$("body").animate({scrollTop:0}, 400);
		$scope.stage = "goodtimeline";
		$scope.showTransFrame = false;
	};
	
	$scope.startTimeline = function(){
		
		$scope.stage = 'timeline';
			$("body").scrollTop(10);
			$rootScope.setYearIndex(0);	
			
			// setup main graph
			d3.csv('populationGroth.csv', function(data){
					window.mainChart = HeaderChart("#mainGraph",data); 
					window.mainChart.update(2036);
					});
	};
	
	$scope.introFrameIndex=1;
	$scope.nextIntroFrame = function(){
		
		if($scope.introFrameIndex < 3){
			$scope.introFrameIndex++;	
		}else{
			$scope.startTimeline();
		}
	};
	
	$scope.enteredTransFrame = function(){
		return;
		if($scope.lastScrolledYear == 2016 && $scope.stage=='timeline'){
			$scope.stage = 'switchTimeline';
			$("body").scrollTop(0);
		}
	};
	$scope.showTransFrame = false;
	$scope.badYearsScrolled=0;
	$scope.lastScrolledYear = 2036;
	$scope.yearScrolledInto = function(elem){
		
		var y = parseInt(elem.getAttribute('year'));
		
		/**
		 * update main header graph 
		 */
		
		if(y < $scope.lastScrolledYear){
			$scope.badYearsScrolled++;
			
			
			if($scope.badYearsScrolled >= 4){
				
				//$scope.showTransFrame = true;
			}
		}
		
		if(y != $scope.lastScrolledYear){
			
			window.mainChart.update(y);
			$scope.lastScrolledYear = y;
		}
		
		
		
	};
	
	$scope.yearLoaded = function($index){
		
	};
	
	$scope.scrollToYear = function(year){
		
		$('body').scrollTop(parseInt($("#"+year).offset().top)-80);
	};
	
	$scope.getSiteLink = function(){
		
		return String(window.location);
	};
	
	$scope.startTimeline();
	
}]);
