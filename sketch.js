/***********************************************************************************
	Rooms of a House Assignment (modified Simple State Machine with Splash template)
	by Katrina Monje

  Overview:
  This is an assignment that shows a navigation structure of 6 rooms of a house 
  using the mouse and some keyboard functions.

------------------------------------------------------------------------------------
	The way it works
	* arrays of images get loaded at startup
  * drawFunction is a VARIABLE that points to a function variable name
  * drawRoom is set to be the function
  * the keys ‘r, b, t, l, k, g’ will change the drawFunction variable

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
var instructions = [];

// preload all images into an arrays according to room
function preload() {

  // bedroom images
  bedroomAssets[0] = loadImage("assets/beigeWall.png");
  bedroomAssets[1] = loadImage("assets/bedroomFloor.png");
  bedroomAssets[2] = loadImage("assets/bedroomGarden.jpeg");
  bedroomAssets[3] = loadImage("assets/bedroomCeiling.png");
  bedroomAssets[4] = loadImage("assets/slidingDoors.png");
  bedroomAssets[5] = loadImage("assets/rightCurtains.png");
  bedroomAssets[6] = loadImage("assets/leftCurtains.png");
  bedroomAssets[7] = loadImage("assets/bed.png");
  bedroomAssets[8] = loadImage("assets/floorLamp.png");
  bedroomAssets[9] = loadImage("assets/terracottaChairs.png");
  bedroomAssets[10] = loadImage("assets/bedroomPlant.png");


  // bathroom images
  bathroomAssets[0] = loadImage("assets/blackWall.png");
  bathroomAssets[1] = loadImage("assets/concreteWall.jpeg");
  bathroomAssets[2] = loadImage("assets/mirror.png");
  bathroomAssets[3] = loadImage("assets/showerHead.png");
  bathroomAssets[4] = loadImage("assets/marbleWallpaper.jpeg");
  bathroomAssets[5] = loadImage("assets/bathroomFloor.png");
  bathroomAssets[6] = loadImage("assets/showerFaucet.png");
  bathroomAssets[7] = loadImage("assets/bathroomPlant.png");
  bathroomAssets[8] = loadImage("assets/sinkBottom.png");
  bathroomAssets[9] = loadImage("assets/sinkTop.png");
  bathroomAssets[10] = loadImage("assets/showerEnclosure.png");
  bathroomAssets[11] = loadImage("assets/bathroomLight.png");
  bathroomAssets[12] = loadImage("assets/toilet.png");

  // theater room images
  theaterRoomAssets [0] = loadImage("assets/theaterRoomFloor.png");
  theaterRoomAssets [1] = loadImage("assets/woodenWallpaper.png");
  theaterRoomAssets [2] = loadImage("assets/cocktailBar.png");
  theaterRoomAssets [3] = loadImage("assets/recliningChairTopRight.png");
  theaterRoomAssets [4] = loadImage("assets/recliningChairTopLeft.png");
  theaterRoomAssets [5] = loadImage("assets/moviePoster.png");
  theaterRoomAssets [6] = loadImage("assets/recliningChairBoottomRight.png");
  theaterRoomAssets [7] = loadImage("assets/recliningChairBottomMiddle.png");
  theaterRoomAssets [8] = loadImage("assets/recliningChairBottomLeft.png");
  theaterRoomAssets [9] = loadImage("assets/projectorScreen.png");
  theaterRoomAssets [10] = loadImage("assets/leftSpotlight.png");
  theaterRoomAssets [11] = loadImage("assets/rightSpotlight.png");

  // living room images
  livingRoomAssets [0] = loadImage("assets/livingRoom.jpeg");
  livingRoomAssets [1] = loadImage("assets/hangingDecor.png");
  livingRoomAssets [2] = loadImage("assets/pottedPlant.png");
  livingRoomAssets [3] = loadImage("assets/beanbagChair.png");
  livingRoomAssets [4] = loadImage("assets/couch.png");
  livingRoomAssets [5] = loadImage("assets/centerTable.png");
  livingRoomAssets [6] = loadImage("assets/sideSofa.png");
  livingRoomAssets [7] = loadImage("assets/hangingBookshelves.png");

  // kitchen images
  kitchenAssets[0] = loadImage("assets/grayWall.png");
  kitchenAssets[1] = loadImage("assets/backsplashLeft.jpeg");
  kitchenAssets[2] = loadImage("assets/backsplashRight.jpeg");
  kitchenAssets[3] = loadImage("assets/kitchenFloor.png");
  kitchenAssets[4] = loadImage("assets/smartFridge.png");
  kitchenAssets[5] = loadImage("assets/kitchenCountertops.png");
  kitchenAssets[6] = loadImage("assets/kitchenIsland.png");
  kitchenAssets[7] = loadImage("assets/gardenDoor.png");
  kitchenAssets[8] = loadImage("assets/kitchenCeiling.png");
  kitchenAssets[9] = loadImage("assets/pendantLamp.png");
  kitchenAssets[10] = loadImage("assets/kitchenPlant.png");
  
  // garden images
  gardenAssets[0] = loadImage("assets/garden.jpeg");
  gardenAssets[1] = loadImage("assets/hammock.png");

  //clipboard
  instructionAssets[0] = loadImage("assets/clipboard.png");
  instructionAssets[1] = loadImage("assets/button.png");
  instructions[0] = "Welcome to my house!";
  instructions[1] = "Press R to sleep!!!!!";
  instructions[2] = "Press K to get something to eat";
  instructions[3] = "Prress B to take a shower";
  instructions[4] = "Press T to watch a movie";
  instructions[5] = "Press G to feed the fish and water the plants";
  instructions[6] = "Press L to read a book";
}

// center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1920, 1080);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);
  noStroke();

  centerWidth = width/2;
  centerHeight = height/2

  // set to one for startup
  drawFunction = drawBedroom;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(170, 158, 169);

  // will call the state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

// draws images from bedroomAssets array
drawBedroom = function() {

//images in array
image(bedroomAssets[0], 1129, 153);   // wall
image(bedroomAssets[1], 0, 220);      // floor
image(bedroomAssets[2], 251, 58);     // garden
image(bedroomAssets[3], 0, -117);     // ceiling
image(bedroomAssets[4], -14, 58);     // sliding doors
image(bedroomAssets[5], 734, 140);    // right curtains
image(bedroomAssets[6], -321, 48);    // left curtains
image(bedroomAssets[7], 57, 607);     // bed
image(bedroomAssets[8], -301, 85);    // floor lamp
image(bedroomAssets[9], 1147, 558);   // chairs
image(bedroomAssets[10], 1474, -31);  // plant

}

// draws images from bathroommAssets array
drawBathroom = function() {

//images in array
image(bathroomAssets[0], 0, 0);       // wall
image(bathroomAssets[1], 1009, 0);    // concrete wall
image(bathroomAssets[2], 552, 86);    // mirror
image(bathroomAssets[3], -1400, 10);  // shower head
image(bathroomAssets[4], -33, 5);     // marble wallpaper
image(bathroomAssets[5], 0, 252);     // floor
image(bathroomAssets[6], 880, 375);   // shower faucet
image(bathroomAssets[7], 14, -15);    // plant
image(bathroomAssets[8], 535, 522);   // sink bottom
image(bathroomAssets[9], 595, 390);   // sink top
image(bathroomAssets[10], 1009, -12); // shower enclosure
image(bathroomAssets[11], 627, -15);  // light
image(bathroomAssets[12], 29, 434);   // toilet

}

// draws images from theaterRoomAssets array
drawTheaterRoom = function() {

//images in array
image(theaterRoomAssets[0], -1, 657);     // floor
image(theaterRoomAssets[1], -31, -3);     // wallpaper
image(theaterRoomAssets[2], 1453, 403);   // cocktail bar
image(theaterRoomAssets[3], 581, 540);    // reclining chair top right
image(theaterRoomAssets[3], 146, 583);    // reclining chair top left
image(theaterRoomAssets[5], 612, 173);    // movie poster
image(theaterRoomAssets[6], 895, 616);    // reclining chair bottoom right
image(theaterRoomAssets[7], 505, 682);    // reclining chair botttom middle
image(theaterRoomAssets[8], 49, 716);     // reclining chair bottom left
image(theaterRoomAssets[8], -715, 323);   // projector screen
image(theaterRoomAssets[10], 562, 0);     // left spotlight
image(theaterRoomAssets[11], 1193, 0);    // right spotlight

}

// draws images from livingRoomAssets array
drawLivingRoom = function() {

//images in array
image(livingRoomAssets[0], 0, -43);   // living room
image(livingRoomAssets[1], 202, -249);   // hanging deecor
image(livingRoomAssets[2], 1628, 294);   // plant
image(livingRoomAssets[3], 372, 540);   // beanbag chair
image(livingRoomAssets[4], 784, -202);   // couch
image(livingRoomAssets[5], 764, 383);   // center table
image(livingRoomAssets[6], -35, 306);   // side sofa
image(livingRoomAssets[7], 899, 136);   // bookshelves

}

// draws images from kitchenAssets array
drawKitchen = function() {

//images in array
image(kitchenRoomAssets[0], 0, 0);   // wall
image(kitchenRoomAssets[1], 320, -5);   // backsplash 1
image(kitchenRoomAssets[2], 1308, -5);   // backsplaash 2
image(kitchenRoomAssets[3], 0, 673);   // floor
image(kitchenRoomAssets[4], 859, 316);   // fridge
image(kitchenRoomAssets[5], -93, -106);   // countertops
image(kitchenRoomAssets[6], 512, 730);   // island
image(kitchenRoomAssets[7], 1451, 168);   // door
image(kitchenRoomAssets[8], 132, -5);   // ceiling
image(kitchenRoomAssets[9], 625, 21);   // lamp
image(kitchenRoomAssets[10], 276, 378);   // plant

}

// draws images from gardenAssets array
drawGarden = function() {

//images in array
image(gardenAssets[0], 0, 0);  // garden
image(gardenAssets[1], 683, 324);  // hammock

}

// draws images from instructionAssets array
drawInstructions = function() {

//images in array
image(instructionAssets[0], 415, 44);  // clipboard
image(instructionAssets[1], 1687, 981);  // button

//instructions
fill(0);
textSize(52);
text(instructions[0], centerWidth, centerHeight);

textSize(26);
text(instructions[1], centerWidth, centerHeight)
text(instructions[2], centerWidth, centerHeight)
text(instructions[3], centerWidth, centerHeight)
text(instructions[4], centerWidth, centerHeight)
text(instructions[5], centerWidth, centerHeight)
text(instructions[6], centerWidth, centerHeight)

}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyPressed() {

  print(keyCode);

  //draw bedroom
  if( drawFunction === drawBedroom ) {
    if( key === 'b' ) {
  	   drawFunction = drawBathroom;
    }
    else if( key === 'g' ) {
  	 drawFunction = drawGarden;
    }
    else if( key === 'l' ) {
  	 drawFunction = drawLivingRoom;
    }
}

else if( drawFunction === drawBathroom) {
    if( key === 'r' ) {
       drawFunction = drawBedroom;
    }
    else if( key === 'k' ) {
     drawFunction = drawKitchen;
    }
    else if( key === 'l' ) {
     drawFunction = drawLivingRoom;
    }
    else if( key === 't' ) {
     drawFunction = drawTheaterRoom;
    }
}

else if( drawFunction === drawTheaterRoom) {
    if( key === 'k' ) {
       drawFunction = drawKitchen;
    }
    else if( key === 'l' ) {
     drawFunction = drawLivingRoom;
    }
    else if( key === 'b' ) {
     drawFunction = drawBathroom;
    }
}

else if( drawFunction === drawKitchen) {
    if( key === 'b' ) {
       drawFunction = drawBathroom;
    }
    else if( key === 'g' ) {
     drawFunction = drawGarden;
    }
    else if( key === 'l' ) {
     drawFunction = drawLivingRoom;
    }
}

else if( drawFunction === drawGarden) {
    if( key === 'k' ) {
       drawFunction = drawKitchen;
    }
    else if( key === 'b' ) {
     drawFunction = drawBedroom;
    }
}
}

// help icon --> instructions screen
function mousePressed() {
  if( drawFunction === drawBedroom ) {
    drawFunction = drawInstructions;
  }
}