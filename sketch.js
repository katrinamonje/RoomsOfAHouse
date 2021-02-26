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
  bathroomAssets[8] = loadImage(‘assets/sinkBottom.png’);
  bathroomAssets[9] = loadImage(‘assets/sinkTop.png’);
  bathroomAssets[10] = loadImage(‘assets/showerEnclosure.png’);
  bathroomAssets[11] = loadImage(‘assets/bathroomLight.png’);
  bathroomAssets[12] = loadImage(‘assets/toilet.png’);

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
  imageMode(CENTER);
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
image(bathroomAssets[0], x, y);  // wall
image(bathroomAssets[1], x, y);  // concrete wall
image(bathroomAssets[2], x, y);  // mirror
image(bathroomAssets[3], x, y);  // shower head
image(bathroomAssets[4], x, y);  // marble wallpaper
image(bathroomAssets[5], x, y);  // floor
image(bathroomAssets[6], x, y);  // shower faucet
image(bathroomAssets[7], x, y);  // plant
image(bathroomAssets[8], x, y);  // sink bottom
image(bathroomAssets[9], x, y);  // sink top
image(bathroomAssets[10], x, y); // shower enclosure
image(bathroomAssets[11], x, y); // light
image(bathroomAssets[12], x, y); // toilet

}

// draws images from theaterRoomAssets array
drawTheaterRoom = function() {

//images in array
image(theaterRoomAssets[0], x, y);  // floor
image(theaterRoomAssets[1], x, y);  // wallpaper
image(theaterRoomAssets[3], x, y);  // cocktail bar
image(theaterRoomAssets[4], x, y);  // reclining chair top right
image(theaterRoomAssets[5], x, y);  // reclining chair top left
image(theaterRoomAssets[6], x, y);  // reclining chair bottoom right
image(theaterRoomAssets[7], x, y);  // reclining chair botttom middle
image(theaterRoomAssets[8], x, y);  // reclining chair bottom left
image(theaterRoomAssets[8], x, y);  // projector screen
image(theaterRoomAssets[10], x, y); // left spotlight
image(theaterRoomAssets[11], x, y); // right spotlight

}

// draws images from livingRoomAssets array
drawLivingRoom = function() {

//images in array
image(livingRoomAssets[0], x, y);   // living room
image(livingRoomAssets[1], x, y);   // hanging deecor
image(livingRoomAssets[2], x, y);   // plant
image(livingRoomAssets[3], x, y);   // beanbag chair
image(livingRoomAssets[4], x, y);   // couch
image(livingRoomAssets[5], x, y);   // center table
image(livingRoomAssets[6], x, y);   // side sofa
image(livingRoomAssets[7], x, y);   // bookshelves

}

// draws images from kitchenAssets array
drawKitchen = function() {

//images in array
image(kitchenRoomAssets[0], x, y);   // wall
image(kitchenRoomAssets[1], x, y);   // backsplash 1
image(kitchenRoomAssets[2], x, y);   // backsplaash 2
image(kitchenRoomAssets[3], x, y);   // floor
image(kitchenRoomAssets[4], x, y);   // fridge
image(kitchenRoomAssets[5], x, y);   // countertops
image(kitchenRoomAssets[6], x, y);   // island
image(kitchenRoomAssets[7], x, y);   // door
image(kitchenRoomAssets[8], x, y);   // ceiling
image(kitchenRoomAssets[9], x, y);   // lamp
image(kitchenRoomAssets[10], x, y);   // plant

}

// draws images from gardenAssets array
drawGarden = function() {

//images in array
image(gardenAssets[0], x, y);  // garden
image(gardenAssets[0], x, y);  // hammock

}

// draws images from instructionAssets array
drawInstructions = function() {

//images in array
image(instructionAssets[0], x, y);  // clipboard
image(instructionAssets[1], x, y);  // button

}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyPressed() {

  print(keyCode);

  //draw bedroom
  if( drawFunction === drawBedroom ) {
    if( key === 'r' ) {
  	   drawFunction = drawBedroom;
    }
    else if( key === 'b' ) {
  	 drawFunction = drawBathroom;
    }
    else if( key === 't' ) {
  	 drawFunction = drawTheaterRoom;
    }
    else if( key === 'l' ) {
  	 drawFunction = drawLivingRoom;
    }
    else if( key === 'k' ) {
  	 drawFunction = drawKitchen;
    }

    else if( key === 'g' ) {
      drawFunction = drawGarden;
    }
}

// help icon --> instructions screen
function mousePressed() {
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}