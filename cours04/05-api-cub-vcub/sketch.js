// --------------------------------------
// Variables
//
// Voir ici -> lien en webservice OGC WPS
// https://data.bordeaux-metropole.fr/data.php?themes=10
 var vcub;
// --------------------------------------
function setup()
{
	CUB.ready(CUBready);
}

// --------------------------------------
function CUBready()
{
	CUB.init("carte");

 	vcub = new CUB.Layer.Dynamic('Station VCUB', '//data.bordeaux-metropole.fr/wfs?key=R6FIXU1Q5B', 
 	{
				layerName: 'CI_VCUB_P',
				selectable: true, // Les objets sont sélectionnables
				attributes: ['NOM', 'NBPLACES', 'NBVELOS', 'HEURE', 'TYPE'], // Liste des attributs souhaités (réduit la taille des échanges WFS)
				style: new CUB.Style({ // Style par défaut
					opacity: 100,
					size: 10,
					symbol: 'data/vcub.png'
				}),
				styleOver: new CUB.Style({ // Style des entités lorsqu'elles sont survolées par la souris
					opacity: 100,
					size: 15,
					symbol: 'data/vcub.png'
				}),
				styleSelected: new CUB.Style({ // Style des entités lorsqu'elle sont sélectionnées
					opacity: 100,
					size: 15,
					symbol: 'data/vcub.png'
				})
				
			});
}


