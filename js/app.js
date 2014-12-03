$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		//Goes into to ready mode
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		//Goes back to being still
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		//Shoots Hadouken across the screen
		.animate(
			{'left': '300px'}, 500, function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	})
	.mouseup(function(){
		//ryu goes back to the ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.hadouken').hide();
	});

	$('body').on('keydown', function(event){
if (event.which==88) {
$('.ryu-still').hide();
$('.ryu-ready').hide();
$('.ryu-cool').show();
}
})

.on('keyup', function(event) {
if (event.which==88) {
	$('.ryu-cool').hide();
	$('.ryu-still').show();
}
})
	
})


function playHadouken() {
	$('#hadouken-sound')[0].volume - 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}