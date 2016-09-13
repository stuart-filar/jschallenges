$(function(){

	$('.panel h1').on('click', function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(this).css('color', 'black')
		} else {
			$(this).attr('data-click-state', 1)
			$(this).css('color', 'red')
		}
	});

});