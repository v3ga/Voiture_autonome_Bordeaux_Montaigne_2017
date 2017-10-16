var table;

function preload()
{
	table = loadTable("data/CI_TRAFI_L.csv", "csv", "header");
}

function setup()
{
	// Imprime le nombre de lignes et de colonnes dans la table sur la console
	print(table.getRowCount() + " lignes dans la table");
	print(table.getColumnCount() + " colonnes dans la table");

	// Imprime toute la colonne qui correspond à TYPEVOIE
	print(table.getColumn("TYPEVOIE"));
}

function draw()
{
}

