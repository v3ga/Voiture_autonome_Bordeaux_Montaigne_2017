// --------------------------------------
// Variables
//
// Voir ici -> lien en webservice OGC WPS
// https://data.bordeaux-metropole.fr/data.php?themes=10
// var nomCouche = "FV_COMMU_S"; // http://data.bordeaux-metropole.fr/data.php?layer=FV_COMMU_S
 var nomCouche = "CI_TRAFI_L"; // http://data.bordeaux-metropole.fr/data.php?layer=CI_TRAFI_L

// --------------------------------------
function setup()
{
	CUB.ready(CUBready);
}

// --------------------------------------
function CUBready()
{
	CUB.init("carte");
	new CUB.Layer.Static('', 'http://data.bordeaux-metropole.fr//wms?key=R6FIXU1Q5B', nomCouche);
}


