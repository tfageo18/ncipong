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
<body onload="pointZero();" onkeyup="shortcut();">
	<header>
		<center><h1><img src="img/ncipong.png"/>NCIPONG</h1></center>
		<center><button type="button" class="btn btn-warning btn-lg" onclick="raz();">RAZ (_R_)</button></center>
	</header>
	
	<div class="row" style="width:800px; margin:0 auto;">
		<div class="col-md-6" style="width:425px;">
			<center>
				<h3><span class="glyphicon glyphicon-user"></span> Joueur 1</h3>
		 		<h2><div id="pointJ1"></div></h2>
				<button class="btn btn-success btn-lg" onclick="addPointJ1()">+1 POINT (_A_)</button>
				<button class="btn btn-danger btn-lg" onclick="delPointJ1()">-1 POINT (_Z_)</button>
			</center>
 		</div>
		<div class="col-md-6" style="width:375px;">
  			<center>
  				<h3><span class="glyphicon glyphicon-user"></span> Joueur 2</h3>
  				<h2><div id="pointJ2"></div></h2>
  				<button class="btn btn-success btn-lg" onclick="addPointJ2()">+1 POINT (_O_)</button>
  				<button class="btn btn-danger btn-lg" onclick="delPointJ2()">-1 POINT (_P_)</button>
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