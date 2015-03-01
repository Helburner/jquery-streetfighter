$(document).ready(function() {
	intro ();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').finish().show();
		$('.hadouken').show().animate(
			{'left': '1120px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '600px');
			});

	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
		
	});


});

$(document).ready().keydown(function(e) {
	if (e.keyCode == 88) {
		playCool();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
	}
})

.keyup(function(e) {
	if (e.keyCode == 88) {
		$('#cool')[0].pause();
		$('#cool')[0].load();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

var coolSound = false
function playCool () {
	coolSound = !coolSound;
	if (coolSound) {
		$('#theme')[0].pause();
		// $('#cool')[0].load();
		$('#cool')[0].play();
	}
	
}

function intro() {
	$('#theme')[0].volume = 0.3;
	$('#theme')[0].play();
	$('.instructions').fadeIn(2000);
}




