// ----------------------------------------------
var widthSketch = 500;
var heightSketch = 500;
var reconnaissance;

// ----------------------------------------------
function setup() 
{
	// Démarre la reconnaissance vocale
	reconnaissance = new p5.SpeechRec();
	// L'algorithme appelera la fonction onSpeech si elle détecte quelque chose
	// Voir tout en bas de la page pour l'implémentation de la fonction
	reconnaissance.onResult = onSpeech;
	// La reconnaissance donne des résultats au fur et à mesure (true) ou non (false)
	reconnaissance.continuous = true;
	// La reconnaissance donne des résultats au fur et à mesure, en continu (valeur true ou false)
	reconnaissance.interimResults = false;
	// Démarrage 
	reconnaissance.start();


 	// Crée le canvas dans le bloc dont l'id est sketchp5
  	var myCanvas = createCanvas(600, heightSketch);
  	myCanvas.parent("sketchp5");

  	// Appelle la fonction resize()
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
	// Cale la largeur du sketch à la largeur du bloc sketchp5 qui est responsive
	widthSketch = select("#sketchp5").elt.getBoundingClientRect().width;
	resizeCanvas(widthSketch,heightSketch);
}

// ----------------------------------------------
// voir : https://github.com/processing/p5.js/wiki/p5.js-overview
function touchMoved() 
{
  return false;
}

// --------------------------------------
// Gestionnaire de résultats de la 
// reconnaissance vocale
function onSpeech()
{
	// On décide d'afficher le résultat (contenu dans la variable reconnaissance.resultString) 
	// dans le bloc dont l'identiant est speech dans la page index.html
	// Le tag <br /> veut dire qu'une fois que l'on a inscrit le résultat dans le paragraphe, on saute une ligne
	select("#speech").html(reconnaissance.resultString + " <br />",true);
}


