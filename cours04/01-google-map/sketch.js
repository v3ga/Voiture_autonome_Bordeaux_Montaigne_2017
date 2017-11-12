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
	console.log("initMap()");

	// Création de l'objet map
	// Et sauvegarde dans la variable associée
	map = new google.maps.Map(document.getElementById("carte"), 
	{
    	center: {lat: 44.8404400, lng: -0.5805000},
        zoom: 14
    });	
}

