/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */
 	// washington capitals logo
 	$('.hits:first').prepend('<img src="caps.png"/><br><br>');

 	// pittsburgh penguins logo
 	$('.hits:last').prepend('<img src="pens.png"/><br><br>');

 	// math randomizer to determine the number associated with the shit
 	function shot() {
 		return Math.random();
 	};

 	// team 1's shoot function on button click
 	$('#teamone-shoot').on('click', function() {
 		//increments the number of shots for each click
   		$('#teamone-numshots').html(function(i, val) { return +val+1 });
   		//increments the number of hits based on math randomizer
   		//changes background color based on if it was a goal or not
   		if (shot() > .85) {
   			$('#teamone-numhits').html(function(i, val) { return +val+1 });
   			$('body').css('background-color', 'blue');
   		} else {
   			$('body').css('background-color', 'white');
   		}
	});

 	// team 2's shoot function on button click
 	$('#teamtwo-shoot').on('click', function() {
 		//increments the number of shots for each click
   		$('#teamtwo-numshots').html(function(i, val) { return +val+1 });
   		//increments the number of hits based on math randomizer
   		//changes background color based on if it was a goal or not
   		if (shot() > .85) {
   			$('#teamtwo-numhits').html(function(i, val) { return +val+1 });
   			$('body').css('background-color', 'yellow');
   		} else {
   			$('body').css('background-color', 'white');
   		}
	});

 	// reset button function
 	$('#reset').on('click', function() {
 		//increments the number of resets
 		$('#num-resets').html(function(i, val) { return +val+1 });
 		//resets all shots and hits from both teams back to zero
 		$('#teamone-numshots').html(function(i, val) { return 0});
 		$('#teamone-numhits').html(function(i, val) { return 0});
 		$('#teamtwo-numshots').html(function(i, val) { return 0});
 		$('#teamtwo-numhits').html(function(i, val) { return 0});
 		$('body').css('background-color', 'white');
 	});