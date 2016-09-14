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
 	// body styling
 	$('body')
 		.css('font-family', 'Helvetica')
 		.css('text-align', 'center')
 		.css('background', 'linear-gradient(to right, blue, white, gold)')

 	// button styling
 	$('button')
 		.css('font-size', '16px')
 		.css('color', 'white')
 		.css('background', 'linear-gradient(to right, green, green, green, green, white)')
 		.css('padding', '5px')
 		.css('font-weight', 'bold');

 	// reset button styling
 	$('button:first')
 		.css('background', 'linear-gradient(to right, red, red, red, red, white)')
 		.css('margin-bottom', '20px')
 		.css('margin-top', '10px');

 	// team heading styling
 	$('h2:nth-child(1)')
 		.css('color', 'blue')
 		.css('border', '1px solid black')
 		.css('background', 'linear-gradient(to right, black, black, black, grey)')
 		.css('border-radius', '5px')
 		.css('width', '200px')
 		.css('margin-left', '20px');

 	// replaces 'Team 1' with 'Washington Capitals'
 	$('h2:nth-child(1)').each(function() {
    	var text = $(this).text();
    	$(this).text(text.replace('Team 1', 'Washington Capitals')); 
	});

 	// team 2 heading styling
 	$('h2:last')
 		.css('color', 'gold');

 	// replaces 'Team 2' with 'Pittsburgh Penguins'
 	$('h2:last').each(function() {
    	var text = $(this).text();
    	$(this).text(text.replace('Team 2', 'Pittsburgh Penguins')); 
	});

	$('h1').text('Welcome to Hockey Game Number One!')
		.css('font-size', '65px');

 	// washington capitals logo
 	$('.hits:first')
 		.prepend('<img src="assets/caps.png"/><br>')
 		.css('mix-blend-mode', 'multiply');

 	// pittsburgh penguins logo
 	$('.hits:last')
 		.prepend('<img src="assets/pens.png"/><br>')
 		.css('mix-blend-mode', 'multiply');

 	// styling for 'shots taken' & 'goals'
 	$('.hits')
 		.css('font-weight', 'bold')
 		.css('font-size', '30px');

 	// syling for 'number of resets'
 	$('div div')
 		.css('font-weight', 'bold');

 	$('h2:first')
 		.hide()
 		.css('font-size', '65px')
 		.css('margin-bottom', '0px')
 		.css('color', 'red')
 		.each(function() {
    		var text = $(this).text();
			$(this).text(text.replace('...the game!', 'GOAL!!!!!')); 
		});

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
   			$('body').css('background', 'linear-gradient(to right, blue, blue, blue, blue, white)');
   			var obj = document.createElement("audio");
       		obj.src= 'assets/foghorn.mp3';
       		obj.play();
       		$('h2:first').show();
   		} else {
   			$('body').css('background', 'linear-gradient(to right, blue, white, gold)');
   			$('h2:first').hide();
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
   			$('body').css('background', 'linear-gradient(to left, gold, gold, gold, gold, white)');
   			var obj = document.createElement("audio");
       		obj.src= 'assets/foghorn.mp3';
       		obj.play();
   			$('h2:first').show();
   		} else {
   			$('body').css('background', 'linear-gradient(to right, blue, white, gold)');
   			$('h2:first').hide();
   		}
	});

 	// reset button function
 	$('#reset').on('click', function() {
 		//increments the number of resets
 		$('#num-resets').html(function(i, val) { return +val+1 });
 		//resets all shots and hits from both teams back to zero
 		$('#teamone-numshots').html(function(i, val) { return 0 });
 		$('#teamone-numhits').html(function(i, val) { return 0 });
 		$('#teamtwo-numshots').html(function(i, val) { return 0 });
 		$('#teamtwo-numhits').html(function(i, val) { return 0 });
 		$('body').css('background', 'linear-gradient(to right, blue, white, gold)');
 		$('h2:first').hide();
 	});