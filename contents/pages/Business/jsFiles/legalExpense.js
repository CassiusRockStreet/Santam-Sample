//Defining the with and size of sliders
	var width = 99/$('ul.BusinessLegalCoverSliderLabel li').length;
	$('ul.BusinessLegalCoverSliderLabel li').width(width+'%');
	$('.BusinessLegalCoverSlider').width(55+'%');
	$('.BusinessLegalCoverSlider').change(function(){
		//Defined how many are there in total?
		switch($('.BusinessLegalCoverSlider').val()){
					case "2":
						$('.coverMill').html("250 000");
						break;
					default: 	
						$('.coverMill').html("150 000");
			}
		
		var B_Legal_Cover = $('.coverMill').html();
		var B_Legal_Empployees = $('.employees').html();
		var B_Legal_Turnover = $('.TurnOverAmount').html();
		
		var CalcFunda = CalBusinessLegal(B_Legal_Cover,B_Legal_Empployees,B_Legal_Turnover);
		$('.businessamountPremium').html(CalcFunda);
		$('.businessamountAnnualPremium').html(parseInt(CalcFunda) *12);
// 		alert(CalcFunda);
		
	});		
	
	var width = 100/$('ul.EmplopyeeSliderLabel li').length;
	$('ul.EmplopyeeSliderLabel li').width(width+'%');
	$('.EmplopyeeSlider').width(70+'%');
	
	$('.EmplopyeeSlider').change(function(){
		//Defined how many are there in total?
		switch($('.EmplopyeeSlider').val()){
					case "2":
						$('.employees').html("31-100");
						$('.messageAlertEmployees').html("");
						break;
					case "3":
						$('.employees').html("100+");
						$('.messageAlertEmployees').html("Over 100 employees requires special underwriting Please contact, <a href='mailto:legal@santam.co.za' style='color:#fff'>legal@santam.co.za</a>");
						break;
					default: 	
						$('.employees').html("1-30");
						$('.messageAlertEmployees').html("");
			}
			
		
		var B_Legal_Cover = $('.coverMill').html();
		var B_Legal_Empployees = $('.employees').html();
		var B_Legal_Turnover = $('.TurnOverAmount').html();
		
		var CalcFunda = CalBusinessLegal(B_Legal_Cover,B_Legal_Empployees,B_Legal_Turnover);
		$('.businessamountPremium').html(CalcFunda);
		$('.businessamountAnnualPremium').html(parseInt(CalcFunda) *12);
// 		alert(CalcFunda);
		
	});
	
	//ContentSliderLabel
	var width = 93/$('ul.TurnoverSliderLabel li').length;
	$('ul.TurnoverSliderLabel li').width(width+'%');
	$('.TurnoverSlider').width(80+'%');
	$('.TurnoverSlider').change(function(){
		//Defined how many are there in total?
		switch($('.TurnoverSlider').val()){
					case "2":
						$('.TurnOverAmount').html("2-5");
						$('.messageAlertTurnover').html("");
						break;
					case "3":
						$('.TurnOverAmount').html("5-12");
						$('.messageAlertTurnover').html("");
						break;
					case "4":
						$('.TurnOverAmount').html("12-24");
						$('.messageAlertTurnover').html("");
						break;
					case "5":
						$('.TurnOverAmount').html("24-32");
						$('.messageAlertTurnover').html("");
						break;
					case "6":
						$('.TurnOverAmount').html("32+");
						$('.messageAlertTurnover').html("Over R32 million requires special underwriting Please contact, <a href='mailto:legal@santam.co.za' style='color:#fff'>legal@santam.co.za</a>");
						break;
					default: 	
						$('.TurnOverAmount').html("0-2");
						$('.messageAlertTurnover').html("");
			}
		
		var B_Legal_Cover = $('.coverMill').html();
		var B_Legal_Empployees = $('.employees').html();
		var B_Legal_Turnover = $('.TurnOverAmount').html();
		
		var CalcFunda = CalBusinessLegal(B_Legal_Cover,B_Legal_Empployees,B_Legal_Turnover);
			$('.businessamountPremium').html(CalcFunda);
			$('.businessamountAnnualPremium').html(parseInt(CalcFunda) *12);
// 		alert(CalcFunda);
		
	});
	
	function CalBusinessLegal(cover,employees,turnover){
			var monthlyPremium;
			switch(cover){
				case "250 000":
					switch(employees){
						case "31-100":
							switch(turnover){
								case "2-5":
									monthlyPremium = "444";
								break;
								case "5-12":
									monthlyPremium = "808";
								break;
								case "12-24":
									monthlyPremium = "1090";
								break;
								case "24-32":
									monthlyPremium = "1206";
								break;
								case "32+":
									monthlyPremium = "0";
								break;
								default:
									monthlyPremium = "323";
								break;
							}
						break;
						case "100+":
							switch(turnover){
								case "2-5":
									monthlyPremium = "0";
								break;
								case "5-12":
									monthlyPremium = "0";
								break;
								case "24-32":
									monthlyPremium = "0";
								break;
								case "32+":
									monthlyPremium = "0";
								break;
								default:
									monthlyPremium = "0";
								break;
							}
						break;
						default:
							switch(turnover){
								case "2-5":
									monthlyPremium = "404";
								break;
								case "5-12":
									monthlyPremium = "775";
								break;
								case "12-24":
									monthlyPremium = "1050";
								break;
								case "24-32":
									monthlyPremium = "1163";
								break;
								case "32+":
									monthlyPremium = "0";
								break;
								default:
									monthlyPremium = "291";
								break;
							}
						break;
					}
				break;
				default:
					switch(employees){
						case "31-100":
							switch(turnover){
								case "2-5":
									monthlyPremium = "278";
								break;
								case "5-12":
									monthlyPremium = "505";
								break;
								case "12-24":
									monthlyPremium = "676";
								break;
								case "24-32":
									monthlyPremium = "747";
								break;
								case "32+":
									monthlyPremium = "0";
								break;
								default:
									monthlyPremium = "207";
								break;
							}
						break;
						case "100+":
							switch(turnover){
								case "2-5":
									monthlyPremium = "0";
								break;
								case "5-12":
									monthlyPremium = "0";
								break;
								case "24-32":
									monthlyPremium = "0";
								break;
								case "32+":
									monthlyPremium = "0";
								break;
								default:
									monthlyPremium = "0";
								break;	
							}
						break;
						default:
							switch(turnover){
								case "2-5":
									monthlyPremium = "253";
								break;
								case "5-12":
									monthlyPremium = "485";
								break;
								case "12-24":
									monthlyPremium = "656";
								break;
								case "24-32":
									monthlyPremium = "727";
								break;
								case "32+":
									monthlyPremium = "0";
								break;
								default:
									monthlyPremium = "182";
								break;
							}
						break;
					}
				break; 
			}
		return monthlyPremium;
	}
	
	
// 
// // 	Hide sections that done exist or should not show on default
// 	$('.addLRSContent').show();
// // 	$('.contents').hide();
// 	$('.LRSContent').hide();
// 	$('.PersonalAccidentsLRS').hide();
// 	$('.addPersonalAccidentsLRS').hide();
// 
// // 	Check if Home geyser is added
// 	$('#addLRS').click(function(){
// 		$('.LRSContent').show('slideDown');
// 		$('.addLRSContent').hide();
// 		$('.addPersonalAccidentsLRS').show('slideDown');
// 	
// 		//When you wanna add geyser show add contents
// 	});
// 	// 	Check if Home Contents is added
// 	$('#addPersonalAccident').click(function(){
// 		$('.PersonalAccidentsLRS').show('slideDown');
// 		$('.addPersonalAccidentsLRS').hide();
// 		//When you wanna add geyser show add contents
// 	});
