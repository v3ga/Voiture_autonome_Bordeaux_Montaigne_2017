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

	// Les données ont été trouvées ici : 
	// http://data.bordeaux-metropole.fr/data.php?layer=TB_CHEM_L
	// et converti du format kmz vers geojson avec ce site
	// https://mygeodata.cloud/converter/
	map.data.loadGeoJson('data/TB_CHEM_L.geojson', null, function(features){

		console.log( features[0] );
	});    

	// Styles
	// https://developers.google.com/maps/documentation/javascript/datalayer?hl=fr#style_geojson_data
	map.data.setStyle({strokeColor:"#F00", strokeOpacity : 0.5, strokeWeight: 1});
}

