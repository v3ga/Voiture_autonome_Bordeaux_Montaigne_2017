// --------------------------------------
// Variables
var map;

// Note importante ! 
// Nous ne définissons pas les gestionnaires setup et draw
// car aucun élément canvas n'est nécessaire.

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


	// Création de l'objet map
	// et sauvegarde dans la variable associée
	// en utilisant les coordonnées de l'utilisateur
	map = new google.maps.Map(document.getElementById("carte"), 
	{
    	center: {lat: crd.latitude, lng: crd.longitude},
        zoom: 17
    });
}