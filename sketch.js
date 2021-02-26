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
  instructionAssets[1] = loadImage(‘assets/button.png’);

  // bedroom images
  bedroomAssets[0] = loadImage(‘assets/beigeWall.png’);
  bedroomAssets[1] = loadImage(‘assets/bedroomFloor.png’);
  bedroomAssets[2] = loadImage(‘assets/bedroomGarden.jpeg’);
  bedroomAssets[3] = loadImage(‘assets/bedroomCeiling.png’);
  bedroomAssets[4] = loadImage(‘assets/slidingDoors.png’);
  bedroomAssets[5] = loadImage(‘assets/rightCurtains.png’);
  bedroomAssets[6] = loadImage(‘assets/leftCurtains.png’);
  bedroomAssets[7] = loadImage(‘assets/bed.png’);
  bedroomAssets[8] = loadImage(‘assets/floorLamp.png’);
  bedroomAssets[9] = loadImage(‘assets/terracottaChairs.png’);
  bedroomAssets[10] = loadImage(‘assets/bedroomPlant.png’);


  // bathroom images
  bathroomAssets[0] = loadImage(‘assets/blackWall.png’);
  bathroomAssets[1] = loadImage(‘assets/concreteWall.jpeg’);
  bathroomAssets[2] = loadImage(‘assets/mirror.png’);
  bathroomAssets[3] = loadImage(‘assets/showerHead.png’);
  bathroomAssets[4] = loadImage(‘assets/marbleWallpaper.jpeg’);
  bathroomAssets[5] = loadImage(‘assets/bathroomFloor.png’);
  bathroomAssets[6] = loadImage(‘assets/showerFaucet.png’);
  bathroomAssets[7] = loadImage(‘assets/bathroomPlant.png’);
  bathroomAssets[9] = loadImage(‘assets/sinkBottom.png’);
  bathroomAssets[10] = loadImage(‘assets/sinkTop.png’);
  bathroomAssets[11] = loadImage(‘assets/showerEnclosure.png’);
  bathroomAssets[12] = loadImage(‘assets/bathroomLight.png’);
  bathroomAssets[13] = loadImage(‘assets/toilet.png’);

  // theater room images
  theaterRoomAssets [0] = loadImage(‘assets/theaterRoomFloor.png’);
  theaterRoomAssets [1] = loadImage(‘assets/woodenWallpaper.png’);
  theaterRoomAssets [2] = loadImage(‘assets/cocktailBar.png’);
  theaterRoomAssets [3] = loadImage(‘assets/recliningChairTopRight.png’);
  theaterRoomAssets [4] = loadImage(‘assets/recliningChairBottomLeft.png’);
  theaterRoomAssets [5] = loadImage(‘assets/moviePoster.png’);
  theaterRoomAssets [6] = loadImage(‘assets/recliningChairBoottomRight.png’);
  theaterRoomAssets [7] = loadImage(‘assets/recliningChairBottomMiddle.png’);
  theaterRoomAssets [8] = loadImage(‘assets/recliningChairBottomLeft.png’);
  theaterRoomAssets [9] = loadImage(‘assets/projectorScreen.png’);
  theaterRoomAssets [10] = loadImage(‘assets/leftSpotlight.png’);
  theaterRoomAssets [11] = loadImage(‘assets/rightSpotlight.png’);

  // living room images
  livingRoomAssets [0] = loadImage(‘assets/livingRoom.png’);
  livingRoomAssets [1] = loadImage(‘assets/hangingDecor.png’);
  livingRoomAssets [2] = loadImage(‘assets/pottedPlant.png’);
  livingRoomAssets [3] = loadImage(‘assets/beanbagChair.png’);
  livingRoomAssets [4] = loadImage(‘assets/couch.png’);
  livingRoomAssets [5] = loadImage(‘assets/centerTable.png’);
  livingRoomAssets [6] = loadImage(‘assets/sideSofa.png’);
  livingRoomAssets [7] = loadImage(‘assets/hangingBookshelves.png’);

  // kitchen images
  kitchenAssets[0] = loadImage(‘assets/grayWall.png’);
  kitchenAssets[1] = loadImage(‘assets/backsplashLeft.jpeg’);
  kitchenAssets[2] = loadImage(‘assets/backsplashRight.jpeg’);
  kitchenAssets[3] = loadImage(‘assets/kitchenFloor.png’);
  kitchenAssets[4] = loadImage(‘assets/smartFridge.png’);
  kitchenAssets[5] = loadImage(‘assets/kitchenCountertops.png’);
  kitchenAssets[6] = loadImage(‘assets/kitchenIsland.png’);
  kitchenAssets[7] = loadImage(‘assets/gardenDoor.png’);
  kitchenAssets[8] = loadImage(‘assets/kitchenCeiling.png’);
  kitchenAssets[9] = loadImage(‘assets/pendantLamp.png’);
  kitchenAssets[10] = loadImage(‘assets/kitchenPlant.png’);
  
  // garden images
  gardenAssets[0] = loadImage(‘assets/garden.png’);
  gardenAssets[1] = loadImage(‘assets/hammock.png’);
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

//images in array
image(bedroomAssets[0], x, y);   // wall
image(bedroomAssets[1], x, y);   // floor
image(bedroomAssets[2], x, y);   // garden
image(bedroomAssets[3], x, y);   // ceiling
image(bedroomAssets[4], x, y);   // sliding doors
image(bedroomAssets[5], x, y);   // right curtains
image(bedroomAssets[6], x, y);   // left curtains
image(bedroomAssets[7], x, y);   // bed
image(bedroomAssets[8], x, y);   // floor lamp
image(bedroomAssets[9], x, y);   // chairs
image(bedroomAssets[10], x, y);   // plant

}

// draws images from bathroommAssets array
drawBathroom = function() {

//images in array
image(bathroomAssets[0], x, y);  //
image(bathroomAssets[1], x, y);  //
image(bathroomAssets[2], x, y);  //
image(bathroomAssets[3], x, y);  //
image(bathroomAssets[4], x, y);  //
image(bathroomAssets[5], x, y);  //
image(bathroomAssets[6], x, y);  //
image(bathroomAssets[7], x, y);  //
image(bathroomAssets[8], x, y);  //
image(bathroomAssets[9], x, y);  //
image(bathroomAssets[10], x, y); //
image(bathroomAssets[11], x, y); //
image(bathroomAssets[12], x, y); //
image(bathroomAssets[13], x, y); //

}

// draws images from theaterRoomAssets array
drawTheaterRoom = function() {

//images in array
image(theaterRoomAssets[0], x, y);  //
image(theaterRoomAssets[1], x, y);  //
image(theaterRoomAssets[3], x, y);  //
image(theaterRoomAssets[4], x, y);  //
image(theaterRoomAssets[5], x, y);  //
image(theaterRoomAssets[6], x, y);  //
image(theaterRoomAssets[7], x, y);  //
image(theaterRoomAssets[8], x, y);  //
image(theaterRoomAssets[8], x, y);  //
image(theaterRoomAssets[10], x, y); //
image(theaterRoomAssets[11], x, y); //

}

// draws images from livingRoomAssets array
drawLivingRoom = function() {

//images in array
image(livingRoomAssets[0], x, y);   //
image(livingRoomAssets[1], x, y);   //
image(livingRoomAssets[2], x, y);   //
image(livingRoomAssets[3], x, y);   //
image(livingRoomAssets[4], x, y);   //
image(livingRoomAssets[5], x, y);   //
image(livingRoomAssets[6], x, y);   //
image(livingRoomAssets[7], x, y);   //

}

// draws images from kitchenAssets array
drawKitchen = function() {

//images in array
image(kitchenRoomAssets[0], x, y);   //
image(kitchenRoomAssets[1], x, y);   //
image(kitchenRoomAssets[2], x, y);   //
image(kitchenRoomAssets[3], x, y);   //
image(kitchenRoomAssets[4], x, y);   //
image(kitchenRoomAssets[5], x, y);   //
image(kitchenRoomAssets[6], x, y);   //
image(kitchenRoomAssets[7], x, y);   //
image(kitchenRoomAssets[8], x, y);   //
image(kitchenRoomAssets[9], x, y);   //
image(kitchenRoomAssets[10], x, y);   //

}

// draws images from gardenAssets array
drawGarden = function() {

//images in array
image(gardenAssets[0], x, y);  //
image(gardenAssets[0], x, y);  //

}

// draws images from instructionAssets array
drawInstructions = function() {

//images in array
image(instructionAssets[0], x, y);  //
image(instructionAssets[1], x, y);  //

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