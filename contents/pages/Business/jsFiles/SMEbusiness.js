//Defining the with and size of sliders
//Administrative Business
var width = 90/$('ul.SMEBusinessSliderLabel li').length;
	$('ul.SMEBusinessSliderLabel li').width(width+'%');
	$('.SMEBusinessSlider').width(84+'%');
	$('.SMEBusinessSlider').change(function(){
		//Defined how many are there in total?
		switch($('.SMEBusinessSlider').val()){
					case "2":
						$('.coverAmountSME').html("217");
						$('.burglaryPercentage').html("20");
						$('.damagePercentage').html("20");
						break;
					case "3":
						$('.coverAmountSME').html("285");
						$('.burglaryPercentage').html("15");
						$('.damagePercentage').html("15");
						break;
					case "4":
						$('.coverAmountSME').html("395");
						$('.burglaryPercentage').html("15");
						$('.damagePercentage').html("15");
						break;
					case "5":
						$('.coverAmountSME').html("530");
						$('.burglaryPercentage').html("10");
						$('.damagePercentage').html("10");
						break;
					case "6":
						$('.coverAmountSME').html("622");
						$('.burglaryPercentage').html("10");
						$('.damagePercentage').html("10");
						break;
					case "7":
						$('.coverAmountSME').html("762");
						$('.burglaryPercentage').html('10');
						$('.damagePercentage').html("10");
						break;
					default: 	
						$('.coverAmountSME').html("160");
						$('.burglaryPercentage').html("20");
						$('.damagePercentage').html("20");
					break;
			}

	});	
	
// 	Retail Business
	var width = 90/$('ul.SMERetailBusinessSliderLabel li').length;
	$('ul.SMERetailBusinessSliderLabel li').width(width+'%');
	$('.SMERetailBusinessSlider').width(84+'%');
	$('.SMERetailBusinessSlider').change(function(){
		//Defined how many are there in total?
		switch($('.SMERetailBusinessSlider').val()){
					case "2":
						$('.coverAmountSMERetailBusiness').html("448");
						$('.SMERetailBusinessburglaryPercentage').html("20");
						$('.RetaildamagePercentage').html("20");
						break;
					case "3":
						$('.coverAmountSMERetailBusiness').html("586");
						$('.SMERetailBusinessburglaryPercentage').html("15");
						$('.RetaildamagePercentage').html("15");
						break;
					case "4":
						$('.coverAmountSMERetailBusiness').html("809");
						$('.SMERetailBusinessburglaryPercentage').html("15");
						$('.RetaildamagePercentage').html("15");
						break;
					case "5":
						$('.coverAmountSMERetailBusiness').html("1088");
						$('.SMERetailBusinessburglaryPercentage').html("10");
						$('.RetaildamagePercentage').html("10");
						break;
					case "6":
						$('.coverAmountSMERetailBusiness').html("1278");
						$('.SMERetailBusinessburglaryPercentage').html("10");
						$('.RetaildamagePercentage').html("10");
						break;
					case "7":
						$('.coverAmountSMERetailBusiness').html("1562");
						$('.SMERetailBusinessburglaryPercentage').html('10');
						$('.RetaildamagePercentage').html('10');
						break;
					default: 	
						$('.coverAmountSMERetailBusiness').html("332");
						$('.SMERetailBusinessburglaryPercentage').html("20");
						$('.RetaildamagePercentage').html("20");
					break;
			}

	});	
// Manufacturing Business
var width = 90/$('ul.SMEManufatureSliderLabel li').length;
	$('ul.SMEManufatureSliderLabel li').width(width+'%');
	$('.SMEManufatureBusinessSlider').width(84+'%');
	$('.SMEManufatureBusinessSlider').change(function(){
		//Defined how many are there in total?
		switch($('.SMEManufatureBusinessSlider').val()){
					case "2":
						$('.coverAmountSMEManufature').html("386");
						$('.SMEManufatureburglaryPercentage').html("20");
						$('.ManufacdamagePercentage').html("20");
						break;
					case "3":
						$('.coverAmountSMEManufature').html("493");
						$('.SMEManufatureburglaryPercentage').html("15");
						$('.ManufacdamagePercentage').html("15");
						break;
					case "4":
						$('.coverAmountSMEManufature').html("665");
						$('.SMEManufatureburglaryPercentage').html("15");
						$('.ManufacdamagePercentage').html("15");
						break;
					case "5":
						$('.coverAmountSMEManufature').html("883");
						$('.SMEManufatureburglaryPercentage').html("10");
						$('.ManufacdamagePercentage').html("10");
						break;
					case "6":
						$('.coverAmountSMEManufature').html("1029");
						$('.SMEManufatureburglaryPercentage').html("10");
						$('.ManufacdamagePercentage').html("10.00");
						break;
					case "7":
						$('.coverAmountSMEManufature').html("1249");
						$('.SMEManufatureburglaryPercentage').html('10');
						$('.ManufacdamagePercentage').html('10');
						break;
					default: 	
						$('.coverAmountSMEManufature').html("297");
						$('.SMEManufatureburglaryPercentage').html("20");
						$('.ManufacdamagePercentage').html("20");
					break;
			}

	});	
	
	$('#businessSME').popover({});
// 	Sasria pop ups
	$('#SasriaMoneyPop').popover({});
	$('#SasriaFirePop').popover({});
	$('#SasriaGoodsPop').popover({});