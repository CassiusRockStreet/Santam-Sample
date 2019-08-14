//Defining the with and size of sliders
//BuildingSliderLabel
	var width = 93/$('ul.ContentsInsuranceLabel li').length;
	$('ul.ContentsInsuranceLabel li').width(width+'%');
	$('input.rangeSlider.ContentsInsuranceSlider').width('65%');
	$('.ContentsInsuranceSlider').change(function(){
		//Defined how many are there in total?
		switch($('.ContentsInsuranceSlider').val()){
					case "2":
						$('.coverAmountContentsInsureSlider').html("100 000");
						break;
					case "3":
						$('.coverAmountContentsInsureSlider').html("150 000");
						break;
					default: 	
						$('.coverAmountContentsInsureSlider').html("50 000");
			}

	});		
	
	//ContentSliderLabel
	var width = 98/$('ul.LegalContentInsuranceLabel li').length;
	$('ul.LegalContentInsuranceLabel li').width(width+'%');
	$('.LegalContentInsuranceSlider').width(87+'%');
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
	
// 	Skip Add contents
	
	$('#SkipaddLegalContentsInsure').click(function(){
		$('.contentsInsuranceLegal').hide('1000');
		$('.LegalContentsInsuranceAdd').hide('1000');
// 		$('.LegalContentsadd').show('slideDown');
	
		//When you wanna add geyser show add contents
	});