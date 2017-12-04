Voiture autonome
===============================================

### Méthodes de travail

(En référence à [la notice d'installation](https://github.com/processing/p5.js/wiki/Local-server) sur le wiki de p5.js)

1. Ouvrir le terminal
 - :point_right: Mac /  cmd + barre espace et taper « terminal »
 - :point_right: PC /  windows puis rechercher et taper « cmd »

2. Se déplacer dans le dossier de travail avec la commande **cd** (change directory). Vous pouvez taper **cd** puis **glisser déposer le dossier** dans le terminal, son chemin entier va s'inscrire. 

3. Démarrer le serveur avec la commande 
```
http-server -c-1
```

4. Copier-coller une des deux adresses dans votre navigateur pour accéder à l'arborescence de vos dossiers de sketchs. Ne fermez pas la fenêtre du terminal, sinon le serveur s'arrêtera.
```
http://127.0.0.1:8080
```

![terminal avec les commandes cd et http-server](cours03/img/terminal.png)


## Cours #01 — lundi 16 octobre 2017 (M2) + vendredi 20 octobre (M1)

* notions de HTML + CSS + Javascript
  * structure d'une page web (head + body)
  * mise en forme avec les [styles CSS](https://www.w3schools.com/html/html_css.asp)
* Introduction à [p5js](https://p5js.org/) (« Processing pour le web »)
  * [anatomie d'un projet p5js](https://p5js.org/get-started/), différences avec un projet Processing ou Arduino.
  * révisions des bases de programmation vues avec [Processing](https://processing.org/)
     * gestionnaires [setup()](https://p5js.org/reference/#/p5/setup) et [draw()](https://p5js.org/reference/#/p5/draw)
     * variables / fonctions / boucles / conditions
  * notions de [DOM](https://fr.wikipedia.org/wiki/Document_Object_Model) pour manipuler les éléments du HTML.
  * présentation des outils de développements : 
    * inspection de la structure d'une page
    * console javascript
    * outils de développements pour mobile

# Liens
* [p5js](https://p5js.org/)
* Béranger Recoules - [Introduction à p5js](https://b2renger.github.io/Introduction_p5js/)
* Daniel Shiffman - [1.1: Introduction - p5.js Tutorial](https://www.youtube.com/watch?v=8j0UDiN7my4)
* Daniel Shiffman - [10.5: Working with APIs in Javascript - p5.js Tutorial](https://www.youtube.com/watch?v=ecT42O6I_WI)
* [OpenData Bordeaux Métropole](https://data.bordeaux-metropole.fr/)

## Cours #02 - vendredi 20 octobre
À rattraper

## Cours #03 - lundi 6 novembre
* Installation d'un serveur en local 
  * avec node http-server ( [instructions avec p5js, voir la deuxième option](https://github.com/processing/p5.js/wiki/Local-server) )
* Récupération de données : 
  * formats de données : texte, CSV, XML, JSON
  * chargement de données « statiques » : [fichier CSV de la quantité de co2 émis depuis 1751](https://datahub.io/core/co2-fossil-global)
    * chargement avec p5js
    * lecture des données, interaction canvas <-> dom via [p5.dom](https://p5js.org/reference/#/libraries/p5.dom)
    * dessin des données et interaction souris
    
![Capture d'écran du sketch cours03/04-data-csv-co2-load-draw-interactive](cours03/04-data-csv-co2-load-draw-interactive/img/04-data-csv-co2-load-draw-interactive_capture.jpg)

## Cours #04 - lundi 13 novembre
* Retour sur les notions abordées la semaine précédente : 
  * [boucles for](https://www.youtube.com/watch?v=cnRD9o6odjk), [conditions](https://www.youtube.com/watch?v=r2S7j54I68c), [variables](https://www.youtube.com/watch?v=Bn_B3T_Vbxs).
* Intégration de cartes avec des données dans une page 
  * exemples avec [Google Maps](https://developers.google.com/maps/?hl=fr) — [lien pour obtenir une clé API](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=Fr)
  * exemples avec le système de [cartographie et de données de Bordeaux Métropole.](https://data.bordeaux-metropole.fr/apicub) — [lien pour obtenir une clé API](https://data.bordeaux-metropole.fr/key.php)
* Fun : commande vocale avec une carte 

# Liens
* [sketch p5.js en plein écran](http://gildasp.fr/exp/P5js-fullscreen/)
* [New York Times : Life after driving](https://www.nytimes.com/interactive/2017/11/08/magazine/tech-design-future-autonomous-car-20-percent-sex-death-liability.html) « road rage against the machine will boil over »

## Cours #05 - lundi 27 novembre
* Mise en ligne d'un sketch sur un serveur FTP
  * téléchargement de [FileZilla](https://filezilla-project.org/download.php?type=client) (client FTP)
    * configuration pour se connecter au ftp et déposer des fichiers (html/css/js) :point_right: voir la capture d'écran
    * connexion à l'adresse :point_right: [www.v3ga.net/~bplv_masterdis](http://www.v3ga.net/~bplv_masterdis/)
* Mise en page **responsive** pour mobile + desktop à traver les [CSS media queries](https://www.w3schools.com/css/css3_mediaqueries.asp).
  * voir aussi ce lien sur [alsa creations](https://www.alsacreations.com/article/lire/930-css3-media-queries.html)
  * adaptation du sketch *particules* à ce contexte, cela nécéssite de tenir compte du redimensionnement dynamique de l'élément canvas.
  
![Capture d'écran FileZilla](cours05/img/filezilla_ftp_config.png)

## Cours #06 - 5 décembre 
* Atelier autour du projet à remettre pour le **8 janvier 2017**

