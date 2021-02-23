## Rooms of a House
#### by Katrina Monje
February 23, 2021


### Overview
This is a modified version of the "Simple State Machine Template" provided by Scott Kildall, for the Rooms of the House Assignment. It explores state machines, keyboard functions, preload(), and array-indexing through a "Dream House" navigation.

### My AdobeXD Project Link
https://xd.adobe.com/view/5faed1c4-8abe-4753-9d03-7e64bcdea159-0afd/?fullscreen


### Modifying the Template

(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.

(2) Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()

(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

(4) You can add new states with their own drawing functions.

Don't change anything else! 


### How it works
array of images gets loaded at startup

drawFunction is a VARIABLE that points to a function varible name

drawOne(), drawTwo(), etc. are set to be functions.

the the keys 1-5 and 's' key will change the drawFunction variable

starts with drawSplash and waits for a mousePressed event
  