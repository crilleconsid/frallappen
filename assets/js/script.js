/**
 * FRALLAPP
 * SKAPAD AV CHRISTOPHER SÖRNMO
 * VERSION 1.0
**/

/*****************
 ** INNEHÅLL
 ****************
 * 1. MOMENTJS
 * 2. FIREBASE
 ****************
*/


/*******************
// 1. MOMENTJS
********************/

/* Dagens datum */
moment.locale('sv');

//////////////////////////////////////////
//--------- SKRIV UT HÄLSNING ---------//
//////////////////////////////////////////

// God morgon
var startTime1 = moment('04:30', "HH:mm");
var endTime1 = moment('08:59', "HH:mm");
var text1 = 'God morgon!'

// God förmiddag
var startTime2 = moment('09:00', "HH:mm");
var endTime2 = moment('11:59', "HH:mm");
var text2 = 'God förmiddag!'

// God middag
var startTime3 = moment('12:00', "HH:mm");
var endTime3 = moment('13:59', "HH:mm");
var text3 = 'God middag!'

// God eftermiddag
var startTime4 = moment('14:00', "HH:mm");
var endTime4 = moment('16:59', "HH:mm");
var text4 = 'God eftermiddag!'

// God kväll
var startTime5 = moment('17:00', "HH:mm");
var endTime5 = moment('23:59', "HH:mm");
var startTime6 = moment('00:00', "HH:mm");
var endTime6 = moment('04:29', "HH:mm");
var text5 = 'God kväll!'

// Skriv ut en hälsning beroende på tid på dygnet
function checkTimeOfDay() {
	if (moment().isBetween(startTime1, endTime1)) {
		$('#timeOfDay').html(text1);
	} else
	if (moment().isBetween(startTime2, endTime2)) {
		$('#timeOfDay').html(text2);
	} else
	if (moment().isBetween(startTime3, endTime3)) {
		$('#timeOfDay').html(text3);
	} else
	if (moment().isBetween(startTime4, endTime4)) {
		$('#timeOfDay').html(text4);
	} else
	if (moment().isBetween(startTime5, endTime5) || moment().isBetween(startTime6, endTime6)) {
		$('#timeOfDay').html(text5);
	}
}
checkTimeOfDay();

// Ändra hälsningar automatiskt
setInterval(function(){
	checkTimeOfDay();
}, 1000);


/////////////////////////////////////////
//--------- BESTÄLLNINGSTIDER ---------//
/////////////////////////////////////////

function startOrderTime() {
	// Mellan 09:00-23:59 på vardagar beställer man till dagen efter
	var startOrderTime1 = moment('09:00', "HH:mm");
	var endOrderTime1 = moment('23:59', "HH:mm");
	var tomorrow  = moment().add(1, 'days').format('dddd Do MMMM');

	// Mellan 00:00-07:00 på vardagar beställer man till samma dag
	var startOrderTime2 = moment('00:00', "HH:mm");
	var endOrderTime2 = moment('06:59', "HH:mm");

	var today = moment().format('dddd Do MMMM');

	// Från 09:00 på fredag till 23:59 på söndag så beställer man till måndagen veckan efter
	var startFriday = moment('09:00', "HH:mm");
	var endFriday = moment('23:59', "HH:mm");
	var text4 = 'God eftermiddag!'

	if (moment().isBetween(startOrderTime1, endOrderTime1)) {
		$('#orderDay').html(tomorrow);
		var date = moment().format('L');
	}
	if (moment().isBetween(startOrderTime2, endOrderTime2)) {
		$('#orderDay').html(today);
		var date = moment().add(1, 'days').format('L');
	}
	

	// Om det är fredag eftermiddag eller lördag eller söndag
	if ( (moment().isoWeekday() == 5 && moment().isBetween(startFriday, endFriday)) || (moment().isoWeekday() == 6 || moment().isoWeekday() == 7) ) {
		var nextMonday = moment().startOf('week').isoWeekday(1 + 7).format('dddd Do MMMM');
		$('#orderDay').html(nextMonday);
		var date = moment().startOf('week').isoWeekday(1 + 7).format('L');
	}
}


setInterval(function(){
	startOrderTime();
}, 1000);

//////////////////////////////////////////////
//--------- STÄNG AV BESTÄLLNINGAR ---------//
//////////////////////////////////////////////

function startOrderOnOff() {
	// Mellan 07:00-09:00 är knappen avstängd
	var startOrderOFF = moment('07:00', "HH:mm");
	var endOrderOFF = moment('08:59', "HH:mm");
	var isBetweenOnOff = moment().isBetween(startOrderOFF, endOrderOFF);

	if ( (moment().isoWeekday() == 1 && isBetweenOnOff) || (moment().isoWeekday() == 2 && isBetweenOnOff) || (moment().isoWeekday() == 3 && isBetweenOnOff) || (moment().isoWeekday() == 4 && isBetweenOnOff) || (moment().isoWeekday() == 5 && isBetweenOnOff) ) {
	    $('#submitBtn').addClass('off');
	    $('.info-text, .pointer, #submitBtn').hide();
	    $('.heading').html('<div class="icon ion-information-circled"></div>Inga fler beställningar<br>går att göra idag');

	    // COOKIES - Kollar av hur många klick just DU gör
	    var exp = $.cookie('exp', 0);
    	$("#clicks").text('0');

	} else {
	    $('#submitBtn').removeClass('off');
	    $('.info-text, .pointer, #submitBtn').show();
		$('.heading:not(.on)').html('BESTÄLL DIN FRALLA HÄR');
	}
}
startOrderOnOff();

setInterval(function(){
	startOrderOnOff();
}, 1000);


/*******************
// 2. FIREBASE
********************/

/*
** IMPORT MOMENTJS--> BESTÄLLNINGSTIDER
*/

// Mellan 09:00-23:59 på vardagar beställer man till dagen efter
var startOrderTime1 = moment('09:00', "HH:mm");
var endOrderTime1 = moment('23:59', "HH:mm");
var tomorrow  = moment().add(1, 'days').format('dddd Do MMMM');

// Mellan 00:00-07:00 på vardagar beställer man till samma dag
var startOrderTime2 = moment('00:00', "HH:mm");
var endOrderTime2 = moment('06:59', "HH:mm");
var today = moment().format('dddd Do MMMM');

// Från 09:00 på fredag till 23:59 på söndag så beställer man till måndagen veckan efter
var startFriday = moment('09:00', "HH:mm");
var endFriday = moment('23:59', "HH:mm");

if (moment().isBetween(startOrderTime1, endOrderTime1)) {
	var date = moment().add(1, 'days').format('L');
}
if (moment().isBetween(startOrderTime2, endOrderTime2)) {
	var date = moment().format('L');
}
// Om det är fredag eftermiddag eller lördag eller söndag
if ( (moment().isoWeekday() == 5 && moment().isBetween(startFriday, endFriday)) || (moment().isoWeekday() == 6 || moment().isoWeekday() == 7) ) {
	var nextMonday = moment().startOf('week').isoWeekday(1 + 7).format('dddd Do MMMM');
	$('#orderDay').html(nextMonday);
	var date = moment().startOf('week').isoWeekday(1 + 7).format('L');
}

// Get a reference to the database service
var database = firebase.database();

dbRef = firebase.database().ref().child('date').child(date);

dbRef.on('value', snapshot => {
	if (snapshot.val() === null) {
		$('#quantity').html('0');
	} else {
		var key = Object.keys(snapshot.val());

		$('#quantity').removeClass('loading');
		//$('#quantity').html( key.length );
		$('#quantity').html( snapshot.val() );
	}
});

// COOKIES - Kollar av hur många klick just DU gör
function showExp(exp) {
	$("#clicks").text(exp);
}
var exp = $.cookie("exp");
exp = (exp)?parseInt(exp,10):0;
showExp(exp);


$( "#submitBtn" ).click(function() {

	/*
	** IMPORT MOMENTJS--> BESTÄLLNINGSTIDER
	*/

	// Mellan 09:00-23:59 på vardagar beställer man till dagen efter
	var startOrderTime1 = moment('09:00', "HH:mm");
	var endOrderTime1 = moment('23:59', "HH:mm");
	var tomorrow  = moment().add(1, 'days').format('dddd Do MMMM');

	// Mellan 00:00-07:00 på vardagar beställer man till samma dag
	var startOrderTime2 = moment('00:00', "HH:mm");
	var endOrderTime2 = moment('06:59', "HH:mm");
	var today = moment().format('dddd Do MMMM');

	// Från 09:00 på fredag till 23:59 på söndag så beställer man till måndagen veckan efter
	var startFriday = moment('09:00', "HH:mm");
	var endFriday = moment('23:59', "HH:mm");

	if (moment().isBetween(startOrderTime1, endOrderTime1)) {
		var date = moment().add( 1, 'days').format('L');
	}
	if (moment().isBetween(startOrderTime2, endOrderTime2)) {
		var date = moment().format('L');
	}
	// Om det är fredag eftermiddag eller lördag eller söndag
	if ( (moment().isoWeekday() == 5 && moment().isBetween(startFriday, endFriday)) || (moment().isoWeekday() == 6 || moment().isoWeekday() == 7) ) {
		var nextMonday = moment().startOf('week').isoWeekday(1 + 7).format('dddd Do MMMM');
		$('#orderDay').html(nextMonday);
		var date = moment().startOf('week').isoWeekday(1 + 7).format('L');
	}

	var quantityText = parseInt($('#quantity').text());

	//var quantity = firebase.database().ref().child('Quantity').push(1);
	var quantity = firebase.database().ref().child('date').child(date).set(1 + quantityText);
	

	$(this).parent('.btn-order').addClass('checked');
	if ($('#clicks').html() === '0' ) {
		$('.heading').addClass('on').hide().html('DIN FRALLA ÄR BESTÄLLD!').fadeIn('slow');
	} else {
		$('.heading').addClass('on').hide().html('EN TILL FRALLA ÄR BESTÄLLD!').fadeIn('slow');
	}
	$('.pointer').addClass('active');
	setTimeout(function(){
		$('#submitBtn').parent('.btn-order').removeClass('checked');
		$('.heading').removeClass('on').hide().html('BESTÄLL DIN FRALLA HÄR').fadeIn('slow');
		$('.pointer').removeClass('active');
	}, 2500);


	// Kollar av hur många klick just DU gör
	exp++;
    $.cookie("exp",exp);
    showExp(exp);
});