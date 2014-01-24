/**
 * Variables
 */
var score2Win  = 21;
var service    = null;
var pointJ1    = 0;
var pointJ2    = 0;

/**
 * Fonction qui permet de choisir le premier joueur qui sert.
 * @param joueur
 */
function setService(joueur) {
	service = joueur;
	updateService();
}

/**
 * Fonction qui permet de choisir le nombre de point du match (11 ou 21).
 */
function updatePoint() {
	score2Win = document.getElementById('selectPoints').options[document.getElementById('selectPoints').selectedIndex].value;
}

/**
 * Mets à jour les div après le choix du premier serveur.
 */
function updateService() {
	if(service == null) {
		document.getElementById('pointJ1Srv').style.display 	= 'block';
		document.getElementById('textJ1Srv').style.display 		= 'block';
		document.getElementById('pointJ2Srv').style.display 	= 'block';
		document.getElementById('textJ2Srv').style.display 		= 'block';
		document.getElementById('pointJ1Btn').style.display 	= 'none';
		document.getElementById('pointJ2Btn').style.display 	= 'none';
		document.getElementById('iconServiceJ1').style.display 	= 'none';
		document.getElementById('iconServiceJ2').style.display 	= 'none';
	}	
	else {
		document.getElementById('pointJ1Srv').style.display 			= 'none';
		document.getElementById('textJ1Srv').style.display 				= 'none';
		document.getElementById('pointJ2Srv').style.display 			= 'none';
		document.getElementById('textJ2Srv').style.display 				= 'none';
		document.getElementById('pointJ1Btn').style.display 			= 'block';
		document.getElementById('pointJ2Btn').style.display 			= 'block';
		document.getElementById('iconServiceJ1').style.display 			= 'none';
		document.getElementById('iconServiceJ2').style.display 			= 'none';
		document.getElementById('iconServiceJ'+service).style.display 	= 'block';		
	}
}

/**
 * Remet les points à Zéro pour les deux joueurs
 */
function pointZero() {
	pointJ1 = 0;
	pointJ2 = 0;
	service = null;
				
	document.getElementById('pointJ1').innerHTML = pointJ1;
	document.getElementById('pointJ2').innerHTML = pointJ2;
	
	updateService();
}

/**
 * Ajoute un point au Joueur 1. Si le Joueur 1 atteint 21 alors il a un message de félication 
 * et on lui propose une nouvelle partie
 */
function addPointJ1() {
	pointJ1 	= parseInt(pointJ1)+1;
	if (pointJ1 <= score2Win) {
		document.getElementById('pointJ1').innerHTML = pointJ1;
		var change = ((pointJ1 + pointJ2)%2) == 0;
		setService(((change) ? ((service == 1) ? 2 : 1) : service));
	} 			
	
	if (pointJ1 >= score2Win && confirm("GG TU AS GAGNE JOUEUR1, une nouvelle partie pour ridiculiser Joueur 2?")){
		document.location.href="index.php";
	}
}

/**
 * Supprime un point au Joueur 1 cela permet de rectifier une erreur d'arbitrage
 * Le joueur 1 ne peut être en dessous de 0
 */
function delPointJ1() {
	pointJ1 	= parseInt(pointJ1)-1;
	if (pointJ1 < 0) {
		alert ("Il est déjà à zéro, ne l'enfonce pas plus !!!");
		pointJ1 = 0; 
	}
	document.getElementById('pointJ1').innerHTML = pointJ1;
	
	var change = ((pointJ1 + pointJ2)%2) != 0;
	setService(((change) ? ((service == 1) ? 2 : 1) : service));
}
			
/**
 * Ajoute un point au Joueur 2. Si le Joueur 2 atteint 21 alors il a un message de félication 
 * et on lui propose une nouvelle partie
 */
function addPointJ2() {	
	pointJ2 	= parseInt(pointJ2)+1;
	if (pointJ2 <= score2Win) {
		document.getElementById('pointJ2').innerHTML = pointJ2;		
		var change = ((pointJ1 + pointJ2)%2) == 0;
		setService(((change) ? ((service == 1) ? 2 : 1) : service));
	} 	
	
	if (pointJ2 >= score2Win && confirm("GG TU AS GAGNE JOUEUR2, une nouvelle partie pour ridiculiser Joueur 1?")){
		document.location.href="index.php";
	}	
}

/**
 * Supprime un point au Joueur 2 cela permet de rectifier une erreur d'arbitrage
 * Le joueur 2 ne peut être en dessous de 0
 */
function delPointJ2() {
	pointJ2 	= parseInt(pointJ2)-1;
	if (pointJ2 < 0) {
		alert ("Il est déjà à zéro, ne l'enfonce pas plus !!!");
		pointJ2 = 0; 
	}
	document.getElementById('pointJ2').innerHTML = pointJ2;
		
	var change = ((pointJ1 + pointJ2)%2) != 0;
	setService(((change) ? ((service == 1) ? 2 : 1) : service));
}

/**
 * Function qui permet de reload la page et donc de remettre la partie à Zéro
 */
function raz() {
	document.location.href="index.php";
}

/**
 * Function qui permet de retourner l'évenement de la pression d'une touche 
 * @param _event_
 * @returns
 */
function checkEventObj ( _event_ ){
	// --- IE explorer
	if ( window.event )
		return window.event;
	// --- Autre
	else
		return _event_;
}

/**
 * En fonction de la touche appuyer permet d'ajouter ou de supprimer des points à un Joueur
 */
function shortcut() {
	var winObj 	= checkEventObj(window.event);
	var intKeyCode 	= winObj.keyCode;
	// TOUCHE A 		: 65
	// TOUCHE Z 		: 90
	// TOUCHE O 		: 79
	// TOUCHE P			: 80
	// TOUCHE R 		: 82
	// TOUCHE 0 PAVE 	: 96
	// TOUCHE 1 PAVE 	: 97
	// TOUCHE 2 PAVE 	: 98
	// TOUCHE 7 PAVE 	: 103
	// TOUCHE 8 PAVE 	: 104
	if (intKeyCode == 65 || intKeyCode == 97) {
		addPointJ1();
	}
	if (intKeyCode == 90 || intKeyCode == 98 ) {
		delPointJ1();
	}
	if (intKeyCode == 79 || intKeyCode == 103) {
		addPointJ2();
	}
	if (intKeyCode == 80 || intKeyCode == 104) {
		delPointJ2();
	}
	if (intKeyCode == 82 || intKeyCode == 96) {
		raz();
	}
}

/**
 * En fonction du clique de la souris permet d'ajouter des points à un Joueur
 */
function clique() {
	var winObj 		= checkEventObj(window.event);
	// Clique gauche 	: 1
	// Clique droit 	: 2
	if (winObj.which == 1) addPointJ1();
	if (winObj.which == 3) addPointJ2();
}
