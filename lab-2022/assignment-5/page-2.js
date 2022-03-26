$("#button").on('click', function() {
	$("#parent").css({ transform: 'rotate(120deg)' });
	$("#child").css({ transform: 'rotate(-120deg)' });
});

var _CURRENT_ANGLE = 0;

$("#button").on('click', function() {
	_CURRENT_ANGLE += 120;

	$("#parent-2").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
	$("#child-2").css({ transform: 'rotate(-' + _CURRENT_ANGLE + 'deg)' });
});