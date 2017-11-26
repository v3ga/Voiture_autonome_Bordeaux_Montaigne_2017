// ----------------------------------------------
var widthSketch = 500;
var heightSketch = 500;

var nb = 60;
var x = new Array(nb);
var y = new Array(nb);
var vx = new Array(nb);
var vy = new Array(nb);

// ----------------------------------------------
function setup() 
{
  	var myCanvas = createCanvas(600, heightSketch);
  	myCanvas.parent("sketchp5");
	resize();

	for ( var i=0; i<nb; i=i+1 )
	{
		x[i] = width / 2 ;
		y[i] = height / 2;
		vx[i] = random(-2,2);
		vy[i] = random(-2,2);
	}
}


// ----------------------------------------------
function draw()
{
	background(200,200,200)
	noStroke();
	fill(0,40)
	for ( var i=0; i<nb; i=i+1 )
	{
		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i];

		if (x[i]+25 >= width)
		{
			vx[i] = -vx[i];	
		}

		if (x[i]-25 <= 0)
		{
			vx[i] = -vx[i];	
		}

		if (y[i]+25 >= height)
		{
			vy[i] = -vy[i];	
		}

		if (y[i]-25 <= 0)
		{
			vy[i] = -vy[i];	
		}		



		ellipse( x[i], y[i], 50 );
	}
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
/*
function touchMoved() 
{
  return false;
}
*/
