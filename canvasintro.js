// spara som canvasintro.js
"use strict";   // Morsats loose

var draw = startCanvas("maincanvas")

//Japans flagga
draw.circle(400, 225, 100, "red")

// spara och ladda om webbläsaren
//CTRL Shift J (felkonsollen)
//lime, fuchia, navajowhite, #FFDEAD, maroon, silver


for (var i=0; i<100; i +=1) {
    // loop body
    draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor ());
}

draw.clearScreen();

function drawRandomCircleTimeOut() {
     draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor ());
     if (drawRandomCircleTimeOut.count <100 ) {
         drawRandomCircleTimeOut.count += 1;
         window.setTimeout(drawRandomCircleTimeOut, 250);
     }
}

 drawRandomCircleTimeOut.count=0;
// drawRandomCircleTimeOut();

 function drawRandomCircle()    {
 draw.circle(draw.randomX(), draw.randomY(),
 draw.randomInteger(100), draw. randomColor());
 }
// draw.canvas().onclick=drawRandomCircle;

function drawPositionedCircle(evt) {
    //Must get position relative to the canvas...
    draw.circle(evt.pageX-draw.canvasX(), evt.pageY-draw.canvasY(),
    10+draw.randomInteger(50), draw.randomColor(), true);
}
draw.canvas().onclick=drawPositionedCircle;

//CTRL SHIFT K
// Debug

