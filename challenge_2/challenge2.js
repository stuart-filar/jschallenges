$(function(){

	// #1: changes the 'feed template' from red to black on click
	$('h1').on('click', function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(this).css('color', 'black')
		} else {
			$(this).attr('data-click-state', 1)
			$(this).css('color', 'red')
		}
	});

	// #2: hides the odd numbered links on the side
	$("h5:odd").hide();
	
	// #3: replaces all instances of 'Bacon' with 'Because, aliens'
	$('body, body *')
    	.contents()
    	.filter(function() {
     	   return this.nodeType == Node.TEXT_NODE&& this.nodeValue.indexOf('Bacon') >= 0;
   			}).each(function() {
      			this.nodeValue = this.nodeValue.replace(/\bBacon\b/g, 'Because, aliens');
    	});

   	// #4: removes the last 2 'post' class elements
   	$('.post').slice(-2).remove();

   	// #5: removes the images in the aside
   	$("aside img").remove();
});