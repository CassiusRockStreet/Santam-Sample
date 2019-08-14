//Defining the with and size of sliders
//BuildingSliderLabel
	var width = 99/$('ul.LegalInsuranceLabel li').length;
	$('ul.LegalInsuranceLabel li').width(width+'%');
	$('.LegalInsuranceSlider').width('86%');
	$('.LegalInsuranceSlider').change(function(){
		//Defined how many are there in total?
		switch($('.LegalInsuranceSlider').val()){
					case "2":
						$('.coverAmountLegalInsuranceslider').html("60 000");
						break;
					case "3":
						$('.coverAmountLegalInsuranceslider').html("80 000");
						break;
					case "4":
						$('.coverAmountLegalInsuranceslider').html("100 000");
						break;
					case "5":
						$('.coverAmountLegalInsuranceslider').html("120 000");
						break;
					case "6":
						$('.coverAmountLegalInsuranceslider').html("150 000");
						break;
					default: 	
						$('.coverAmountLegalInsuranceslider').html("40 000");
			}

	});		
	//GeyserSliderLabel
	var width = 100/$('ul.LRSLabel li').length;
	$('ul.LRSLabel li').width(width+'%');
	$('input.rangeSlider.LRSSlider').width('69%');
// 	$('ul.LRSLabel li').css('text-align','%');
	
	//Geyser do i qualify popover
	$('#LRSQualify').popover({});
	$('.LRSSlider').change(function(){
		//Defined how many are there in total?
		switch($('.LRSSlider').val()){
					case "2":
						$('.coverAmountLRSSlider').html("10 000");
						break;
					case "3":
						$('.coverAmountLRSSlider').html("20 000");
						break;
					default: 	
						$('.coverAmountLRSSlider').html("0");
			}

	});
	
	//ContentSliderLabel
	var width = 93/$('ul.personalAccidentLabel li').length;
	$('ul.personalAccidentLabel li').width(width+'%');
	$('#LRSpersonalAcidentsQualify').popover({});
	$('.personalAccidentSlider').width('84%');
	$('.personalAccidentSlider').change(function(){
		//Defined how many are there in total?
		switch($('.personalAccidentSlider').val()){
						case "2":
						$('.coverAmountPersonalAccidents').html("5 000");
						break;
					case "3":
						$('.coverAmountPersonalAccidents').html("10 000");
						break;
					case "4":
						$('.coverAmountPersonalAccidents').html("15 000");
						break;
					case "5":
						$('.coverAmountPersonalAccidents').html("20 000");
						break;
					case "6":
						$('.coverAmountPersonalAccidents').html("50 000");
						break;
					case "7":
						$('.coverAmountPersonalAccidents').html("100 000");
						break;
					case "8":
						$('.coverAmountPersonalAccidents').html("150 000");
						break;
					default: 	
						$('.coverAmountPersonalAccidents').html("0");
			}

	});

// 	Hide sections that done exist or should not show on default
	$('.addLRSContent').show();
// 	$('.contents').hide();
	$('.LRSContent').hide();
	$('.PersonalAccidentsLRS').hide();
	$('.addPersonalAccidentsLRS').hide();

// 	Check if Home geyser is added
	$('#addLRS').click(function(){
		$('.LRSContent').show('slideDown');
		$('.addLRSContent').hide();
		$('.addPersonalAccidentsLRS').show('slideDown');
		
		$('html, body').animate({
        			scrollTop: $(".LRSContent").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
	
// 	Skip Adding LRS
	$('#SkipaddLRS').click(function(){
		$('.LRSContent').hide('slideDown');
		$('.addLRSContent').hide();
		$('.addPersonalAccidentsLRS').show('slideDown');
		
		$('html, body').animate({
        			scrollTop: $(".addPersonalAccidentsLRS").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
	
	
	// 	Check if Home Contents is added
	$('#addPersonalAccident').click(function(){
		$('.PersonalAccidentsLRS').show('slideDown');
		$('.addPersonalAccidentsLRS').hide();
		
		$('html, body').animate({
        			scrollTop: $(".PersonalAccidentsLRS").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
// 	Skip Personal addon
	
		$('#SkipaddPersonalAccident').click(function(){
		$('.PersonalAccidentsLRS').hide('slideDown');
		$('.addPersonalAccidentsLRS').hide('1000');
		//When you wanna add geyser show add contents
	});
	