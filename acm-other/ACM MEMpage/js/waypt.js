var $dipper = $('.col2-left,.col2-center,.col2-right');

$dipper.waypoint(function(direction) {
	if (direction == 'down') {
		$dipper.addClass('js-col2-left-animate');
	}
	else {
		$dipper.removeClass('js-col2-left-animate');
	}
}, {offset: '85%' }); 


var $dipper2 = $('.col3-left,.col3-center,.col3-right');
$dipper2.waypoint(function(direction) {
	if (direction == 'down') {
		$dipper2.addClass('js-col3-left-animate');
	}
	else {
		$dipper2.removeClass('js-col3-left-animate');
	}
}, {offset: '85%' }); 

var $dipper3 = $('.col4-left,.col4-center,.col4-right');
$dipper3.waypoint(function(direction) {
	if (direction == 'down') {
		$dipper3.addClass('js-col4-left-animate');
	}
	else {
		$dipper3.removeClass('js-col4-left-animate');
	}
}, {offset: '85%' });


var $dipper5 = $('.col5-left,.col5-center,.col5-right');
$dipper5.waypoint(function(direction) {
	if (direction == 'down') {
		$dipper5.addClass('js-col5-left-animate');
	}
	else {
		$dipper5.removeClass('js-col5-left-animate');
	}
}, {offset: '85%' });


var $dipper6 = $('.col6-left,.col6-right');
$dipper6.waypoint(function(direction) {
	if (direction == 'down') {
		$dipper6.addClass('js-col6-left-animate');
	}
	else {
		$dipper6.removeClass('js-col6-left-animate');
	}
}, {offset: '85%' });
