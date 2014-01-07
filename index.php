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
		<link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
	</head>
<body onload="pointZero();">
	<header>
		<center><h1><img src="img/ncipong.png"/>NCIPONG</h1></center>
		<center><button type="button" class="btn btn-warning btn-lg" onclick="raz();">RAZ</button></center>
	</header>
	
	<div class="row" style="width:800px; margin:0 auto;">
		<div class="col-md-6" style="width:425px;">
			<center>
				<h3><span class="glyphicon glyphicon-user"></span> Joueur 1</h3>
		 		<h2><div id="pointJ1"></div></h2>
				<button class="btn btn-success btn-lg" onclick="addPointJ1()">+1 POINT</button>
				<button class="btn btn-danger btn-lg" onclick="delPointJ1()">-1 POINT</button>
			</center>
 		</div>
		<div class="col-md-6" style="width:300px;">
  			<center>
  				<h3><span class="glyphicon glyphicon-user"></span> Joueur 2</h3>
  				<h2><div id="pointJ2"></div></h2>
  				<button class="btn btn-success btn-lg" onclick="addPointJ2()">+1 POINT</button>
  				<button class="btn btn-danger btn-lg" onclick="delPointJ2()">-1 POINT</button>
  			</center>
  		</div>
	</div>
</body>
</html>