// ----------------------------------------------
var widthSketch = 500;
var heightSketch = 500;

// ----------------------------------------------
function setup() 
{
  	var myCanvas = createCanvas(600, heightSketch);
  	myCanvas.parent("sketchp5");
	resize();
}


// ----------------------------------------------
function draw()
{
	ellipse( mouseX, mouseY, 50 );
}

// ----------------------------------------------
function windowResized() 
{
	resize();
}

// ----------------------------------------------
function resize()
{
	widthSketch = select("#sketchp5").elt.getBoundingClientRect().width;
	resizeCanvas(widthSketch,heightSketch);
}

// ----------------------------------------------
// voir : https://github.com/processing/p5.js/wiki/p5.js-overview
function touchMoved() 
{
  return false;
}

