/**
 * Remet les points à Zéro pour les deux joueurs
 */
function pointZero() {
	var pointJ1 = 0;
	var pointJ2 = 0;
				
	document.getElementById('pointJ1').innerHTML = pointJ1;
	document.getElementById('pointJ2').innerHTML = pointJ2;
}

/**
 * Ajoute un point au Joueur 1. Si le Joueur 1 atteint 21 alors il a un message de félication 
 * et on lui propose une nouvelle partie
 */
function addPointJ1() {
	pointJ1Avant 	= document.getElementById('pointJ1').innerHTML;
	pointJ1 		= parseInt(pointJ1Avant)+1;
	if (pointJ1 <= 21) {
		document.getElementById('pointJ1').innerHTML = pointJ1;
	} 
	else { 
		if (confirm("GG TU AS GAGNE JOUEUR1, une nouvelle partie pour ridiculiser Joueur 2?")){
			document.location.href="index.php";
		}
	}			
}

/**
 * Supprime un point au Joueur 1 cela permet de rectifier une erreur d'arbitrage
 * Le joueur 1 ne peut être en dessous de 0
 */
function delPointJ1() {
	pointJ1Avant 	= document.getElementById('pointJ1').innerHTML;
	pointJ1 		= parseInt(pointJ1Avant)-1;
	if (pointJ1 < 0) {
		alert ("Il est déjà à zéro, ne l'enfonce pas plus !!!");
		pointJ1 = 0; 
	}
	document.getElementById('pointJ1').innerHTML = pointJ1;
}
			
/**
 * Ajoute un point au Joueur 2. Si le Joueur 2 atteint 21 alors il a un message de félication 
 * et on lui propose une nouvelle partie
 */
function addPointJ2() {
	pointJ2Avant 	= document.getElementById('pointJ2').innerHTML;
	pointJ2 		= parseInt(pointJ2Avant)+1;
	if (pointJ2 <= 21) {
		document.getElementById('pointJ2').innerHTML = pointJ2;
	} 
	else { 
		if (confirm("GG TU AS GAGNE JOUEUR2, une nouvelle partie pour ridiculiser Joueur 1?")){
			document.location.href="index.php";
		}
	}		
}

/**
 * Supprime un point au Joueur 2 cela permet de rectifier une erreur d'arbitrage
 * Le joueur 2 ne peut être en dessous de 0
 */
function delPointJ2() {
	pointJ2Avant 	= document.getElementById('pointJ2').innerHTML;
	pointJ2 		= parseInt(pointJ2Avant)-1;
	if (pointJ2 < 0) {
		alert ("Il est déjà à zéro, ne l'enfonce pas plus !!!");
		pointJ2 = 0; 
	}
	document.getElementById('pointJ2').innerHTML = pointJ2;
}

/**
 * Function qui permet de reload la page et donc de remettre la partie à Zéro
 */
function raz() {
	document.location.href="index.php";
}