//Defining the with and size of sliders
//BuildingSliderLabel
	var width = 93/$('ul.ContentsInsuranceLabel li').length;
	$('ul.ContentsInsuranceLabel li').width(width+'%');
	$('.ContentsInsuranceSlider').change(function(){
		//Defined how many are there in total?
		switch($('.ContentsInsuranceSlider').val()){
					case "2":
						$('.coverAmountContentsInsureSlider').html("6 000");
						break;
					case "3":
						$('.coverAmountContentsInsureSlider').html("7 000");
						break;
					case "4":
						$('.coverAmountContentsInsureSlider').html("8 000");
						break;
					case "5":
						$('.coverAmountContentsInsureSlider').html("9 000");
						break;
					case "6":
						$('.coverAmountContentsInsureSlider').html("10 000");
						break;
					case "7":
						$('.coverAmountContentsInsureSlider').html("11 000");
						break;
					case "8":
						$('.coverAmountContentsInsureSlider').html("12 000");
						break;
					case "9":
						$('.coverAmountContentsInsureSlider').html("13 000");
						break;
					case "10":
						$('.coverAmountContentsInsureSlider').html("14 000");
						break;
					default: 	
						$('.coverAmountContentsInsureSlider').html("5 000");
			}

	});		
	
	//ContentSliderLabel
	var width = 98/$('ul.LegalContentInsuranceLabel li').length;
	$('ul.LegalContentInsuranceLabel li').width(width+'%');
	$('#ContentsInsuranceLegalQualify').popover({});
	$('.LegalContentInsuranceSlider').change(function(){
		//Defined how many are there in total?
		switch($('.LegalContentInsuranceSlider').val()){
					case "2":
						$('.coverAmountLegalContentInsuranceSlider').html("40 000");
						break;
					case "3":
						$('.coverAmountLegalContentInsuranceSlider').html("60 000");
						break;
					case "4":
						$('.coverAmountLegalContentInsuranceSlider').html("80 000");
						break;
					case "5":
						$('.coverAmountLegalContentInsuranceSlider').html("100 000");
						break;
					case "6":
						$('.coverAmountLegalContentInsuranceSlider').html("120 000");
						break;
					case "7":
						$('.coverAmountLegalContentInsuranceSlider').html("150 000");
						break;
					default: 	
						$('.coverAmountLegalContentInsuranceSlider').html("0");
			}

	});

// 	Hide sections that done exist or should not show on default
	$('.contentsInsuranceLegal').hide();
	$('.LegalContentsInsuranceAdd').show();
// 	Check if Home geyser is added
	$('#addLegalContentsInsure').click(function(){
		$('.contentsInsuranceLegal').show('slideDown');
		$('.LegalContentsInsuranceAdd').hide();
// 		$('.LegalContentsadd').show('slideDown');
	
		//When you wanna add geyser show add contents
	});