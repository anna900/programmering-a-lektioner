var draw = startCanvas("maincanvas");

function paint(evt) {
    //Must get position relative to the canvas...
    //Ugly and non X-browser
    draw.circle(evt.pageX - draw.canvasX(), evt.pageY - draw.canvasY(), 30);
}

//Rita ruta som markerar ritytan
//Exempel på "chaning"
draw.setCurColor("teal").strokeRect(100, 50, 600, 350).setCurColor("white");
//Osynlig från början

//Överkurs: clip() gör att inget hamnar utanför rutan
draw.raw().beginPath();
draw.raw().rect(100, 50, 600, 350);
draw.raw().clip();
//clip() är en smart funktion 

draw.canvas().onmousedown = function() {
    draw.canvas().onmousemove = paint; // OK med clip
};


//Sluta rita
draw.canvas().onmouseup = function() {
   draw.canvas().onmousemove = null;
}

//Välja färg, bryter mot DRY
document.getElementById("black").onclick = function () {
    draw.setCurColor("black");
};

document.getElementById("white").onclick = function () {
    draw.setCurColor("white");
};

document.getElementById("green").onclick = function () {
    draw.setCurColor("green");
};

document.getElementById("blue").onclick = function () {
    draw.setCurColor("blue");
};

document.getElementById("red").onclick = function () {
    draw.setCurColor("red");
};

document.getElementById("yellow").onclick = function () {
    draw.setCurColor("yellow");
};




