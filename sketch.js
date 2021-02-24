/***********************************************************************************
	Rooms of a House Assignment (modified Simple State Machine with Splash template)
	by Katrina Monje

  Overview:
  This is an assignment that shows a navigation structure of 6 rooms of a house 
  using the mouse and some keyboard functions.

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works
	* arrays of images get loaded at startup
  * drawFunction is a VARIABLE that points to a function variable name
  * drawRoom is set to be the function
  * the keys ‘r, b, t, l, k, g’ will change the drawFunction variable
------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing variables for each of
		images the draw functions, but this is just for illustrative purposes
	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc
	- next step after that would be to put interfaces into an array that maps to
		the functions
***********************************************************************************/

// variable that is a function 
var drawFunction;

// image variables
var bedroomAssets = [];
var bathroomAssets = [];
var theaterRoomAssets = [];
var livingRoomAssets = [];
var kitchenAssets = [];
var gardenAssets = [];
var instructionAssets = [];

// variable setting up array for navigation keys
var navKey = [];

// preload all images into an arrays according to room
function preload() {
  // clipboard
  instructionAssets[0] = loadImage(‘assets/clipboard.png’);

  // bedroom images
  bedroomAssets[0] = loadImage(‘assets/insertImageTitle.png’);
  bedroomAssets[1] = loadImage(‘assets/insertImageTitle.png’);
  bedroomAssets[2] = loadImage(‘assets/insertImageTitle.png’);
  bedroomAssets[3] = loadImage(‘assets/insertImageTitle.png’);
  bedroomAssets[4] = loadImage(‘assets/insertImageTitle.png’);
  bedroomAssets[5] = loadImage(‘assets/insertImageTitle.png’);

  // bathroom images
  bathroomAssets[0] = loadImage(‘assets/insertImageTitle.png’);
  bathroomAssets[1] = loadImage(‘assets/insertImageTitle.png’);
  bathroomAssets[2] = loadImage(‘assets/insertImageTitle.png’);
  bathroomAssets[3] = loadImage(‘assets/insertImageTitle.png’);
  bathroomAssets[4] = loadImage(‘assets/insertImageTitle.png’);
  bathroomAssets[5] = loadImage(‘assets/insertImageTitle.png’);

  // theater room images
  theaterRoomAssets [0] = loadImage(‘assets/insertImageTitle.png’);
  theaterRoomAssets [1] = loadImage(‘assets/insertImageTitle.png’);
  theaterRoomAssets [2] = loadImage(‘assets/insertImageTitle.png’);
  theaterRoomAssets [3] = loadImage(‘assets/insertImageTitle.png’);
  theaterRoomAssets [4] = loadImage(‘assets/insertImageTitle.png’);
  theaterRoomAssets [5] = loadImage(‘assets/insertImageTitle.png’);

  // living room images
  livingRoomAssets [0] = loadImage(‘assets/insertImageTitle.png’);
  livingRoomAssets [1] = loadImage(‘assets/insertImageTitle.png’);
  livingRoomAssets [2] = loadImage(‘assets/insertImageTitle.png’);
  livingRoomAssets [3] = loadImage(‘assets/insertImageTitle.png’);
  livingRoomAssets [4] = loadImage(‘assets/insertImageTitle.png’);
  livingRoomAssets [5] = loadImage(‘assets/insertImageTitle.png’);

  // kitchen images
  kitchenAssets[0] = loadImage(‘assets/insertImageTitle.png’);
  kitchenAssets[1] = loadImage(‘assets/insertImageTitle.png’);
  kitchenAssets[2] = loadImage(‘assets/insertImageTitle.png’);
  kitchenAssets[3] = loadImage(‘assets/insertImageTitle.png’);
  kitchenAssets[4] = loadImage(‘assets/insertImageTitle.png’);
  kitchenAssets[5] = loadImage(‘assets/insertImageTitle.png’);

  // garden images
  gardenAssets[0] = loadImage(‘assets/insertImageTitle.png’);
  gardenAssets[1] = loadImage(‘assets/insertImageTitle.png’);
  gardenAssets[2] = loadImage(‘assets/insertImageTitle.png’);
  gardenAssets[3] = loadImage(‘assets/insertImageTitle.png’);
  gardenAssets[4] = loadImage(‘assets/insertImageTitle.png’);
  gardenAssets[5] = loadImage(‘assets/insertImageTitle.png’);
}

// center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER);
  textSize(24);
  noStroke();

  // setting the array of navigation keys
  navKey[0] = (‘[r]’);
  navKey[1] = (‘[b]’);
  navKey[2] = (‘[t]’);
  navKey[3] = (‘[l]’);
  navKey[4] = (‘[k]’);
  navKey[5] = (‘[g]’);

  // set to one for startup
  drawFunction = drawBedroom;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call the state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

// draws images from bedroomAssets array
drawBedroom = function() {

}

// draws images from bathroommAssets array
drawBathroom = function() {

}

// draws images from theaterRoomAssets array
drawTheaterRoom = function() {

}

// draws images from livingRoomAssets array
drawLivingRoom = function() {

}

// draws images from kitchenAssets array
drawKitchen = function() {

}

// draws images from gardenAssets array
drawGarden = function() {

}

// draws images from instructionAssets array
drawInstructions = function() {

}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }

  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawOne;
  }
}