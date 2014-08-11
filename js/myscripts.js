$(document).ready(function(){

// button clicks 1
//1

$('#next1').click(function(){
	$('#form1').fadeOut(10);
	$('#form2').fadeIn(10);
		$('#prev2').click(function(){
			$('#form1').fadeIn(10);
			$('#form2').fadeOut(10);
		});
});

//2

$('#next2').click(function(){
	$('#form2').fadeOut(10);
	$('#form3').fadeIn(10);
		$('#prev3').click(function(){
			$('#form2').fadeIn(10);
			$('#form3').fadeOut(10);
		});
});

//3

$('#next3').click(function(){
	$('#form3').fadeOut(10);
	$('#form4').fadeIn(10);
		$('#prev4').click(function(){
			$('#form3').fadeIn(10);
			$('#form4').fadeOut(10);
		});
});

//4

$('#next4').click(function(){
	$('#form4').fadeOut(10);
	$('#form5').fadeIn(10);
		$('#prev5').click(function(){
			$('#form4').fadeIn(10);
			$('#form5').fadeOut(10);
		});
});

//5

$('#next5').click(function(){
	$('#form5').fadeOut(10);
	$('#form6').fadeIn(10);
		$('#prev6').click(function(){
			$('#form5').fadeIn(10);
			$('#form6').fadeOut(10);
		});
});

//6

$('#next6').click(function(){
	$('#form6').fadeOut(10);
	$('#form7').fadeIn(10);
		$('#prev7').click(function(){
			$('#form6').fadeIn(10);
			$('#form7').fadeOut(10);
		});
});

//7

$('#next7').click(function(){
	$('#form7').fadeOut(10);
	$('#form8').fadeIn(10);
		$('#prev8').click(function(){
			$('#form7').fadeIn(10);
			$('#form8').fadeOut(10);
		});
});

//9

$('#prev9').click(function(){
			$('#form8').fadeIn(10);
			$('#resultDiv').fadeOut(10);
			$('#textD').hide();
			$('#textI').hide();
			$('#textS').hide();
			$('#textC').hide();
		});

//borderAdd

$('table').mouseover(function(){
	$(this).css({'border':'1px solid grey'});
});
$('table').mouseout(function(){
	$(this).css({'border':'1px solid #fffff0'});
});


$('#submitButtom').click(function(){

	$('#resultDiv').fadeIn(10);
	$('#form8').fadeOut(10);

	//counting function

	var classCount = function(className){
		
		return $('#mainDiv :checked').filter('.' + className).length;
	}

	//count of maj D

	var sumMajD = classCount('majD');
	$('#resultMajD').val(sumMajD);
	
	//count of maj I

	var sumMajI = classCount('majI');
	$('#resultMajI').val(sumMajI);

	//count of maj C

	var sumMajC = classCount('majC');
	$('#resultMajC').val(sumMajC);

	//count of maj S

	var sumMajS = classCount('majS');
	$('#resultMajS').val(sumMajS);

	//count of min D

	var sumMinD = classCount('minD');
	$('#resultMinD').val(sumMinD);

	//count of min I

	var sumMinI = classCount('minI');
	$('#resultMinI').val(sumMinI);

	//count of min C

	var sumMinC = classCount('minC');
	$('#resultMinC').val(sumMinC);

	//count of min S

	var sumMinS = classCount('minS');
	$('#resultMinS').val(sumMinS);

	// total D

	var totalD = sumMajD - sumMinD;
	$('#totalD').val(totalD)

	// total I

	var totalI = sumMajI - sumMinI;
	$('#totalI').val(totalI)

	// total S

	var totalS = sumMajS - sumMinS;
	$('#totalS').val(totalS)

	// total C

	var totalC = sumMajC - sumMinC;
	$('#totalC').val(totalC)

	if (totalD > totalI || totalD > totalS || totalD > totalC){
		$('#textD').fadeIn(100);
	} else if (totalI > totalD || totalI > totalS || totalI > totalC){
		$('#textI').fadeIn(100);
	} else if (totalS > totalD || totalS > totalI || totalS > totalC){
		$('#textS').fadeIn(100);
	} else if (totalC > totalD || totalC > totalI || totalC > totalS){
		$('#textC').fadeIn(100);
	}

	


	
});



}); //ready end

