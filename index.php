<!DOCTYPE HTML>
<html>
	<head>
		<title>NCIPONG</title>
		<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<style type="text/css">
  			html, body {
    			margin:0 auto;
    		}
  		</style>
  		<script language="Javascript" src="js/compta.js"></script>
  		<script language="Javascript">
  			
  		</script>
		<link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
	</head>
<!-- <body onload="pointZero();" onkeyup="shortcut();" onmouseup="clique();"> -->
<body onload="pointZero();" onkeyup="shortcut();" >
	<header>
		<center><h1><img src="img/ncipong.png"/>NCIPONG</h1></center>
		<center><button type="button" class="btn btn-warning btn-lg" onclick="raz();">RAZ (_R_)</button></center>
	</header>
	<div class="row" style="width:800px; margin:0 auto;">
		<div class="col-md-12">
			<center><SCRIPT type="text/javascript" SRC="http://www.toutimages.com/horloge_flash/10.js"></SCRIPT></center>
		</div>
	</div>
	<div class="row" style="width:800px; margin:0 auto;">
		<div class="col-md-12">
			<center>
				<h4 class="text-info">ETAPE 1 : Choisir le nombre de point du match (de base 21 points)</h4>
				<select id="selectPoints" onchange="updatePoint()">
					<option selected>--- Choisir ---</option>
					<option value="11">11 points</option>
					<option value="21">21 points</option>
				</select>
			</center>
		</div>
	</div>
	<div class="row" style="width:800px; margin:0 auto;">		
		<div class="col-md-6" style="width:425px;">		
			<center>					
				<h3><span class="glyphicon glyphicon-user"></span> Joueur 1<span id="iconServiceJ1" class="glyphicon glyphicon-hand-left" style="position:absolute;top: 20px; right: 105px;"></span></h3>

										 
				<h2><div id="pointJ1" class="text-center"></div></h2>
				<div id="pointJ1Btn">
					<button class="btn btn-success btn-lg" onclick="addPointJ1()">+1 POINT (_A_)</button>
					<button class="btn btn-danger btn-lg" onclick="delPointJ1()">-1 POINT (_Z_)</button>
				</div>
				<p id="textJ1Srv" class="text-info">ETAPE 2 : Choisir qui commence à servir</p>
				<button id="pointJ1Srv" class="btn btn-lg" onclick="setService(1)">ChoiJoueur 1 commence</button>
			</center>
 		</div>
		<div class="col-md-6" style="width:375px;">
  			<center>
  				<h3 style="color:BLUE;"><span class="glyphicon glyphicon-user"></span> Joueur 2<span id="iconServiceJ2" class="glyphicon glyphicon-hand-left" style="position:absolute;top: 20px; right: 80px;"></span></h3>
  				<h2 style="color:BLUE;"><div id="pointJ2"></div></h2>
				<div id="pointJ2Btn">
  				<button class="btn btn-success btn-lg" onclick="addPointJ2()">+1 POINT (_O_)</button>
  				<button class="btn btn-danger btn-lg" onclick="delPointJ2()">-1 POINT (_P_)</button>
				</div>
				<p id="textJ2Srv" class="text-info">ETAPE 2 : Choisir qui commence à servir</p>
				<button id="pointJ2Srv" class="btn btn-lg" onclick="setService(2)">Joueur 2 commence</button>
  			</center>
  		</div>
	</div>
	
	<div class="row" style="width:800px; margin:0 auto;">
		<div class="col-md-12">
			<center><h2>LES REGLES</h2></center>
			<ul>
				<li>Un seul set gagnant</li>
				<li>Pas de let au service (eh ouai fait attention !)</li>
				<li>Pas de second service c'est pas du tennis!</li>
				<li>Deux poins si tu touches la table + la teub</li>
				<li>Un seul rebond et sur la table s'il vous plait!</li>
			</ul>
		</div>
	</div>
</body>
</html>
