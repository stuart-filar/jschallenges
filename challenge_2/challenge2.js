$(function(){

	$('h1').on('click', function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(this).css('color', 'black')
		} else {
			$(this).attr('data-click-state', 1)
			$(this).css('color', 'red')
		}
	});

	$("h5:odd").hide();
	
	$('body, body *')
    	.contents()
    	.filter(function() {
     	   return this.nodeType == Node.TEXT_NODE&& this.nodeValue.indexOf('Bacon') >= 0;
   			}).each(function() {
      			this.nodeValue = this.nodeValue.replace(/\bBacon\b/g, 'Because, aliens');
    	});

   	$('.post').slice(-2).remove();

   	$("aside, aside *").remove();
});