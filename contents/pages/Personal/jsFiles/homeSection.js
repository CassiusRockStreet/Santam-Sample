//Defining the with and size of sliders
//BuildingSliderLabel
var width = 93/$('ul.BuildingSliderLabel li').length;
	$('ul.BuildingSliderLabel li').width(width+'%');
	$('.BuildingSlider').width('87%');
	$('.BuildingSlider').change(function(){
		//Defined how many are there in total?
		switch($('.BuildingSlider').val()){
					case "2":
						$('.coverAmountBuildingSlider').html("80 000");
						break;
					case "3":
						$('.coverAmountBuildingSlider').html("100 000");
						break;
					case "4":
						$('.coverAmountBuildingSlider').html("150 000");
						break;
					case "5":
						$('.coverAmountBuildingSlider').html("200 000");
						break;
					case "6":
						$('.coverAmountBuildingSlider').html("250 000");
						break;
					case "7":
						$('.coverAmountBuildingSlider').html("370 000");
						break;
					case "8":
						$('.coverAmountBuildingSlider').html("400 000");
						break;
					case "9":
						$('.coverAmountBuildingSlider').html("450 000");
						break;
					case "10":
						$('.coverAmountBuildingSlider').html("500 000");
						break;
					default: 	
						$('.coverAmountBuildingSlider').html("40 000");
			}

	});		
	//GeyserSliderLabel
	var width = 100/$('ul.GeyserSliderLabel li').length;
	$('ul.GeyserSliderLabel li').width(width+'%');
	$('input.rangeSlider.GeyserSlider').width('78%');
	//Geyser do i qualify popover
	$('#geyserQualify').popover({});
	$('.GeyserSlider').change(function(){
		//Defined how many are there in total?
		switch($('.GeyserSlider').val()){
					case "2":
						$('.coverAmountChangeGeyser').html("5 000");
						break;
					case "3":
						$('.coverAmountChangeGeyser').html("7 500");
						break;
					case "4":
						$('.coverAmountChangeGeyser').html("10 000");
						break;
						break;
					default: 	
						$('.coverAmountChangeGeyser').html("0");
			}

	});
	
	//Home LRS Slider
	var width = 100/$('ul.HomeLRSLabel li').length;
	$('ul.HomeLRSLabel li').width(width+'%');
	$('input.rangeSlider.HomeLRSSlider').width('70%');
	//Geyser do i qualify popover
	$('#geyserQualify').popover({});
	$('.HomeLRSSlider').change(function(){
		//Defined how many are there in total?
		switch($('.HomeLRSSlider').val()){
					case "2":
						$('.coverAmountHomeLRSSlider').html("10 000");
						break;
					case "3":
						$('.coverAmountHomeLRSSlider').html("20 000");
						break;
					default: 	
						$('.coverAmountHomeLRSSlider').html("0");
			}

	});
	
	
	//ContentSliderLabel
	var width = 93/$('ul.ContentSliderLabel li').length;
	$('ul.ContentSliderLabel li').width(width+'%');
	$('.ContentSlider').width('87%');
	$('#ContentsQualify').popover({});
	$('.ContentSlider').change(function(){
		//Defined how many are there in total?
		switch($('.ContentSlider').val()){
					case "2":
						$('.coverAmountContentsHome').html("15 000");
						break;
					case "3":
						$('.coverAmountContentsHome').html("20 000");
						break;
					case "4":
						$('.coverAmountContentsHome').html("25 000");
						break;
					case "5":
						$('.coverAmountContentsHome').html("30 000");
						break;
					case "6":
						$('.coverAmountContentsHome').html("40 000");
						break;
					case "7":
						$('.coverAmountContentsHome').html("60 000");
						break;
					case "8":
						$('.coverAmountContentsHome').html("80 000");
						break;
					case "9":
						$('.coverAmountContentsHome').html("100 000");
						break;
					case "10":
						$('.coverAmountContentsHome').html("125 000");
						break;
					case "11":
						$('.coverAmountContentsHome').html("150 000");
						break;
					default: 	
						$('.coverAmountContentsHome').html("0");
			}

	});
	
	
	//PersonalAccidentsLabel
	var width = 93/$('ul.PersonalAccidentsLabel li').length;
	$('ul.PersonalAccidentsLabel li').width(width+'%');
	$('.PersonalAccidentsSlider').width('84%');
	$('#personalAcidentsQualify').popover({});
	$('.PersonalAccidentsSlider').change(function(){
		//Defined how many are there in total?
		switch($('.PersonalAccidentsSlider').val()){
						
						case "2":
						$('.coverAmountpersonalContentSlider').html("5 000");
						break;
					case "3":
						$('.coverAmountpersonalContentSlider').html("10 000");
						break;
					case "4":
						$('.coverAmountpersonalContentSlider').html("15 000");
						break;
					case "5":
						$('.coverAmountpersonalContentSlider').html("20 000");
						break;
					case "6":
						$('.coverAmountpersonalContentSlider').html("50 000");
						break;
					case "7":
						$('.coverAmountpersonalContentSlider').html("100 000");
						break;
					case "8":
						$('.coverAmountpersonalContentSlider').html("150 000");
						break;
					default: 	
						$('.coverAmountpersonalContentSlider').html("0");
			}

	});
	//LegalCoverLabel
	var width = 93/$('ul.LegalCoverLabel li').length;
	$('ul.LegalCoverLabel li').width(width+'%');
	$('.LegalCoverSlider').width('83%');
	$('#LegalQualify').popover({});
	$('.LegalCoverSlider').change(function(){
		//Defined how many are there in total?
		switch($('.LegalCoverSlider').val()){
					case "2":
						$('.coverAmountLegalCoverHome').html("40 000");
						break;
					case "3":
						$('.coverAmountLegalCoverHome').html("60 000");
						break;
					case "4":
						$('.coverAmountLegalCoverHome').html("80 000");
						break;
					case "5":
						$('.coverAmountLegalCoverHome').html("100 000");
						break;
					case "6":
						$('.coverAmountLegalCoverHome').html("120 000");
						break;
					case "7":
						$('.coverAmountLegalCoverHome').html("150 000");
						break;
					default: 	
						$('.coverAmountLegalCoverHome').html("0");
			}

	});

// 	Hide sections that done exist or should not show on default
	$('.HomeGeyser').hide();
	$('.HomeContentsSections').hide();
	$('.personalContentsHome').hide();
	$('.legalContentsHome').hide();

	
	
	$('.addonsHomeGeyser').show();
	$('.addonsHomeContentsSections').hide();
	$('.addonspersonalContentsHome').hide();
	$('.addonslegalContentsHome').hide();




// 	Check if Home geyser is added
	$('#addGeyser').click(function(){
		$('.HomeGeyser').show('slideDown');
		$('.addonsHomeGeyser').hide();
		$('.addonsHomeContentsSections').show('slideDown');
	
		$('html, body').animate({
        			scrollTop: $(".addonsHomeContentsSections").offset().top
    			}, 1500);
		
		//When you wanna add geyser show add contents
	});
	
	//Skip The gyser add
	
	$('#SkipaddGeyser').click(function(){
		$('.HomeGeyser').hide('slideDown');
		$('.addonsHomeGeyser').hide();
		$('.addonsHomeContentsSections').show('slideDown');
		
			$('html, body').animate({
        			scrollTop: $(".addonsHomeContentsSections").offset().top
    			}, 1500);	
		//When you wanna add geyser show add contents
	});
	
	
	
	// 	Check if Home Contents is added
	$('#addContentsHome').click(function(){
		$('.HomeContentsSections').show('slideDown');
		$('.addonsHomeContentsSections').hide();
		$('.addonspersonalContentsHome').show('slideDown');
		
		$('html, body').animate({
        			scrollTop: $(".addonspersonalContentsHome").offset().top
    			}, 1500);
		
		//When you wanna add geyser show add contents
	});
	
	//Skip Add contnets
	
	$('#SkipaddContentsHome').click(function(){
		$('.HomeContentsSections').hide('slideDown');
		$('.addonsHomeContentsSections').hide();
		$('.addonspersonalContentsHome').show('slideDown');
		
		
			$('html, body').animate({
        			scrollTop: $(".addonspersonalContentsHome").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
	// 	Check if Home PersonalAccidents is added
	$('#addPersonalAccidentHome').click(function(){
		$('.personalContentsHome').show('slideDown');
		$('.addonspersonalContentsHome').hide();
		$('.addonslegalContentsHome').show('slideDown');
		
			$('html, body').animate({
        			scrollTop: $(".addonslegalContentsHome").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
	//Skip Add personla accidents
	
	$('#SkipaddPersonalAccidentHome').click(function(){
		$('.personalContentsHome').hide('slideDown');
		$('.addonspersonalContentsHome').hide();
		$('.addonslegalContentsHome').show('slideDown');
		
		$('html, body').animate({
        			scrollTop: $(".addonslegalContentsHome").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
	// 	Check if HomeLegal is added
	$('#addLegalCoverHome').click(function(){
		$('.legalContentsHome').show('slideDown');
		$('.addonslegalContentsHome').hide();
		
		$('html, body').animate({
        			scrollTop: $(".legalContentsHome").offset().top
    			}, 1500);
    			
    	$('.addonsLRSHome').show('1000');
		//When you wanna add geyser show add contents
	});
	
	//Skip adding legal
	
	$('#SkipaddLegalCoverHome').click(function(){
		$('.legalContentsHome').hide('slideDown');
		$('.addonslegalContentsHome').hide('1000');
		$('.addonsLRSHome').show('1000');
		//When you wanna add geyser show add contents
	});
	
	
	
	
	$('#addLRSHome').click(function(){
		$('.HomeLRSContent').show('slideDown');
		$('.addonslegalContentsHome').hide();
		
		$('html, body').animate({
        			scrollTop: $(".HomeLRSContent").offset().top
    			}, 1500);
    			
    	$('.addonsLRSHome').hide('1000');
		//When you wanna add geyser show add contents
	});
	
	$('#SkipaddLRSHome').click(function(){
		$('.addonslegalContentsHome').hide();
		$('.addonsLRSHome').hide('1000');
		//When you wanna add geyser show add contents
	});
	