// --------------------------------------
// Variables
var map;
var reconnaissance;
var niveauZoom = 17;
var positionIci;

// --------------------------------------
function setup()
{
	reconnaissance = new p5.SpeechRec();
	reconnaissance.onResult = onSpeech;
	reconnaissance.continuous = true;
	reconnaissance.interimResults = false;
	reconnaissance.start();
}

// --------------------------------------
// Gestionnaire de résultats de la 
// reconnaissance vocale
function onSpeech()
{
	console.log( reconnaissance.resultString );
	var dernierMot = reconnaissance.resultString.split(' ').pop();

	if (dernierMot == "ici")
	{
		map.setCenter(positionIci);
	}
	else if (dernierMot == "avance")
	{
		niveauZoom = niveauZoom + 1;
		map.setZoom(niveauZoom);
	}
	else if (dernierMot == "recule")
	{
		niveauZoom = niveauZoom - 1;
		map.setZoom(niveauZoom);
	}}

// --------------------------------------
// Création de la carte google maps
// Voir > https://developers.google.com/maps/documentation/javascript/examples/map-simple
function initMap()
{
	// Affiche sur la console 
	console.log("initMap");

	// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition
	// Cette fonction va demander à l'utilisateur s'il souhaite partager à notre page
	// sa position. Si la réponse est favorable, alors le gestionnaire "onGetGeoPosition" est appelé
	// avec en paramètre la position courante
	navigator.geolocation.getCurrentPosition(onGetGeoPosition)

}

// --------------------------------------
function onGetGeoPosition(pos)
{
	var crd = pos.coords;

	console.log('Votre position actuelle est :');
  	console.log(`Latitude : ${crd.latitude}`);
  	console.log(`Longitude: ${crd.longitude}`);
  	console.log(`Plus ou moins ${crd.accuracy} mètres.`);

	positionIci = {lat: crd.latitude, lng: crd.longitude};


	// Création de l'objet map
	// et sauvegarde dans la variable associée
	// en utilisant les coordonnées de l'utilisateur
	map = new google.maps.Map(document.getElementById("carte"), 
	{
    	center: positionIci,
        zoom: niveauZoom
    });
}