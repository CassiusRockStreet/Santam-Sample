/*This is the section for Contents ContentsControlTrigger*/

//Defining the with and size of sliders
//BuildingSliderLabel
	var width = 93/$('ul.ContentsLabel li').length;
	$('ul.ContentsLabel li').width(width+'%');
	$('.ContentsSlider').width('87%');
	$('.ContentsSlider').change(function(){
		//Defined how many are there in total?
		switch($('.ContentsSlider').val()){
					case "2":
						$('.coverAmountContentslider').html("20 000");
						break;
					case "3":
						$('.coverAmountContentslider').html("25 000");
						break;
					case "4":
						$('.coverAmountContentslider').html("30 000");
						break;
					case "5":
						$('.coverAmountContentslider').html("40 000");
						break;
					case "6":
						$('.coverAmountContentslider').html("60 000");
						break;
					case "7":
						$('.coverAmountContentslider').html("80 000");
						break;
					case "8":
						$('.coverAmountContentslider').html("100 000");
						break;
					case "9":
						$('.coverAmountContentslider').html("125 000");
						break;
					case "10":
						$('.coverAmountContentslider').html("150 000");
						break;
					default: 	
						$('.coverAmountContentslider').html("15 000");
			}

	});		
	//GeyserSliderLabel
	var width = 93/$('ul.personalAccidentContentsLabel li').length;
	$('ul.personalAccidentContentsLabel li').width(width+'%');
// 	$('ul.LRSLabel li').css('text-align','%');
	$('.personalAccidentContentsSlider').width('84%');
	//Geyser do i qualify popover
	$('#ITSpersonalAcidentsQualify').popover({});
	$('.personalAccidentContentsSlider').change(function(){
		//Defined how many are there in total?
		switch($('.personalAccidentContentsSlider').val()){
					case "2":
						$('.coverAmountPersonalAccidentsContents').html("5 000");
						break;
					case "3":
						$('.coverAmountPersonalAccidentsContents').html("10 000");
						break;
					case "4":
						$('.coverAmountPersonalAccidentsContents').html("15 000");
						break;
					case "5":
						$('.coverAmountPersonalAccidentsContents').html("20 000");
						break;
					case "6":
						$('.coverAmountPersonalAccidentsContents').html("50 000");
						break;
					case "7":
						$('.coverAmountPersonalAccidentsContents').html("100 000");
						break;
					case "8":
						$('.coverAmountPersonalAccidentsContents').html("150 000");
						break;
					default: 	
						$('.coverAmountPersonalAccidentsContents').html("0");
			}

	});
	
	//ContentSliderLabel
	var width = 98/$('ul.LegalContentLabel li').length;
	$('ul.LegalContentLabel li').width(width+'%');
	$('.LegalContentSlider').width('87%');
	$('#ITSLegalQualify').popover({});
	$('.LegalContentSlider').change(function(){
		//Defined how many are there in total?
		switch($('.LegalContentSlider').val()){
					case "2":
						$('.coverAmountLegalContentlider').html("40 000");
						break;
					case "3":
						$('.coverAmountLegalContentlider').html("60 000");
						break;
					case "4":
						$('.coverAmountLegalContentlider').html("80 000");
						break;
					case "5":
						$('.coverAmountLegalContentlider').html("100 000");
						break;
					case "6":
						$('.coverAmountLegalContentlider').html("120 000");
						break;
					case "7":
						$('.coverAmountLegalContentlider').html("150 000");
						break;
					default: 	
						$('.coverAmountLegalContentlider').html("0");
			}

	});

// 	Hide sections that done exist or should not show on default
	$('.PersonalCoversITSContents').hide();
	$('.personalAccidentAddonContents').show();
	$('.addcontentsLegalITS').hide();
	$('.contentsLegalITS').hide();
// 	Check if Home geyser is added
	$('#addPersonalAccidentContents').click(function(){
		$('.PersonalCoversITSContents').show('slideDown');
		$('.addPersonalCoversITSContents').hide();
		$('.addcontentsLegalITS').show('slideDown');
	
		
		$('html, body').animate({
        			scrollTop: $(".addcontentsLegalITS").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
// 	Skip Persona accidents

	$('#SkipaddPersonalAccidentContents').click(function(){
		$('.PersonalCoversITSContents').hide('slideDown');
		$('.addPersonalCoversITSContents').hide();
		$('.addcontentsLegalITS').show('slideDown');
		
			$('html, body').animate({
        			scrollTop: $(".addcontentsLegalITS").offset().top
    			}, 1500);
	
		//When you wanna add geyser show add contents
	});
	// 	Check if Home Contents is added
	$('#addLegal').click(function(){
		$('.contentsLegalITS').show('slideDown');
		$('.addcontentsLegalITS').hide();
		
		$('html, body').animate({
        			scrollTop: $(".contentsLegalITS").offset().top
    			}, 1500);
		//When you wanna add geyser show add contents
	});
	
	
// 	Skip Add legal

	$('#SkipaddLegal').click(function(){
		$('.contentsLegalITS').hide('slideDown');
		$('.addcontentsLegalITS').hide('1000');
		//When you wanna add geyser show add contents
	});



