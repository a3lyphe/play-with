<?function °($that){echo($that);}?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Schiffrennen.15</title>
		<link rel="shortcut icon" type="image/x-icon" href="Last Reset Favicon.ico"/>
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Face.Ischtuk.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Face.Havanna.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Face.css"/>
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Kompass.css"/>
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Wolken.css"/>
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Maps.Mini.css"/>
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Player.css"/>
		<link rel="stylesheet" type="text/css" media="screen" href="Face/Isle.css"/>
		<!--///* +Core */-->
		<script src="Core/excanvas.js" type="text/javascript"></script>
		<script src="Core/Core.Welt.js" type="text/javascript"></script>
		<script src="Core/Core.Maps.js" type="text/javascript"></script>
		<script src="Core/Core.Icon.js" type="text/javascript"></script>
		<script src="Core/Core.Center.js" type="text/javascript"></script>
		<!--///* -Core */-->
		<!--///* +Maps */-->
		<script src="Maps/Maps2.js" type="text/javascript"></script>
		<!--///* -Maps */-->
		<!--///* +Code.Town */-->
		<script src="Code/Code.Town.Havanna.js" type="text/javascript"></script>
		<script src="Code/Code.Town.Ischtuk.js" type="text/javascript"></script>
		<!--///* -Code.Town */-->
		<script src="Main/Main.js" type="text/javascript"></script>
		<script src="Main/Main.Level.js" type="text/javascript"></script>
		<!--///* +Code */-->
		<script src="Code/script.js" type="text/javascript"></script>
		<script src="Code/Core.js" type="text/javascript"></script>
		<script src="Code/MiniMapExplorer.js" type="text/javascript"></script>
		<script src="Code/Code.Update.js" type="text/javascript"></script>
		<script src="Code/Code.KI.js" type="text/javascript"></script>
		<script src="Code/Player.js" type="text/javascript"></script>
		<script src="Code/User.js" type="text/javascript"></script>
		<script src="Code/Keys.js" type="text/javascript"></script>
		<script src="Code/Waren.js" type="text/javascript"></script>
		<script src="Code/Wolken.js" type="text/javascript"></script>
		<script src="Code/Kompass.js" type="text/javascript"></script>
		<script src="Code/Kanone.js" type="text/javascript"></script>
		<script src="Code/KielWasser.js" type="text/javascript"></script>
		<script src="Code/Windhose.js" type="text/javascript"></script>
		<script src="Code/Log.js" type="text/javascript"></script>
		<script src="Code/Refresher.js" type="text/javascript"></script>
		<!--///* -Code */-->
		<script src="Code/Code.js" type="text/javascript"></script>
	</head>
	<body onLoad="Main()">
	<div id="theWelt" onmouseover="MiniMapExplorer()" onmouseout="MiniMapNormal()">
		<canvas id="theMapsBackGround"></canvas>
		<canvas id="theMapsPlayGround"></canvas>
	</div>
		<div id="Wolke1"></div>
		<div id="Wolke2"></div>
		<div id="Wolke3"></div>
		<div id="GewitterWolke"></div>
	<div id="Kugel1"></div>
	<div id="WasserEinschlag1"></div>
	<div id="Havanna">Havanna
	<div id="HavannaHafenBild"></div>
	<div id="Symbole3"></div>
	<input type="text" id="HavannaLeute" value=""/>
	<input type="text" id="HavannaGeld" value=""/>
	<input type="text" id="HavannaNahrung" value=""/>
	<div id="HavannaTaverneKnopf" onmousedown="HavannaTaverne()"></div>
	<div id="HavannaExit" onmousedown="HavannaExit()"></div>
	<div id="HavannaKontorKnopf" onmousedown="HavannaKontor()"></div>
	<div id="HavannaHafenKnopf" onmousedown="HavannaHafen()"></div>
	<div id="HavannaTaverne">
	<div id="HavannaTaverneAnheuern" onmousedown="HavannaAnheuern()"></div>
	<div id="HavannaTaverneExit" onmousedown="HavannaTaverneExit()"></div>
	</div>
	<div id="HavannaKontor">
	<div id="HavannaKontorExitKnopf" onmousedown="HavannaKontorExit()"></div>
	<div id="HavannaKontorKaufenKnopf" onmousedown="HavannaKontorKaufen()"></div>
	<div id="HavannaKontorVerkaufenKnopf" onmousedown="HavannaKontorVerkaufen()"></div>
	</div>
	<div id="HavannaHafen">
	<div id="HavannaHafenExitKnopf" onmousedown="HavannaHafenExit()"></div>
	<div id="HavannaHafenReparierenKnopf" onmousedown="HavannaHafenReparieren()"></div>
	</div>
	</div>
	<div id="Minigame" style="position:absolute;visibility:hidden;">
		<div id="Wolken" style="position:absolute;left:-136;background-image:url('Icon/Stadt.Ischtuk/Wolken.png');width:1900;height:400;top:0;z-index:7"></div>
		<div id="Kirche" style="position:absolute;left:336;background-image:url('Icon/Stadt.Ischtuk/Kirche.png');width:54;height:250;top:212;z-index:7"></div>
		<div id="Kirche2" style="position:absolute;left:-336;background-image:url('Icon/Stadt.Ischtuk/Kirche2.png');width:84;height:97;top:212;z-index:7"></div>
		<div id="Haueser3" style="position:absolute;left:-136;background-image:url('Icon/Stadt.Ischtuk/Haueser.png');width:1900;height:100;top:244;z-index:7"></div>
		<div id="Haueser2" style="position:absolute;left:-118;background-image:url('Icon/Stadt.Ischtuk/Haueser.png');width:1900;height:100;top:257;z-index:7"></div>
		<div id="Haueser" style="position:absolute;left:-100;background-image:url('Icon/Stadt.Ischtuk/Haueser.png');width:1900;height:100;top:280;z-index:7"></div>
		<div id="KaiWand1" style="position:absolute;left:-100;background-image:url('Icon/Stadt.Ischtuk/Boden.png');width:1900;height:20;top:380;z-index:7"></div>
		<div id="KaiWand1" style="position:absolute;left:-100;background-image:url('Icon/Stadt.Ischtuk/Boden2.png');width:1900;height:60;top:400;z-index:7"></div>
		<div id="Kai" style="position:absolute;left:-100;background-image:url('Icon/Stadt.Ischtuk/Boden.png');width:1900;height:100;top:460;z-index:7"></div>
		<div id="KaiWand2" style="position:absolute;left:-100;background-image:url('Icon/Stadt.Ischtuk/Boden2.png');width:1900;height:50;top:560;z-index:7"></div>
		<div id="Wasser" style="position:absolute;left:-100;background-image:url('Icon/Stadt.Ischtuk/wasser.png');width:1900;height:420;top:610;z-index:7"></div>
		<div id="Kiste1" style="position:absolute;left:100;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:485;z-index:70"></div>
		<div id="Kiste2" style="position:absolute;left:100;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:485;z-index:70"></div>
		<div id="Kiste3" style="position:absolute;left:100;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:485;z-index:70"></div>
		<div id="Kiste4" style="position:absolute;left:100;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:485;z-index:70"></div>
		<div id="Kiste5" style="position:absolute;left:100;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:485;z-index:70"></div>
		<div id="Kiste6" style="position:absolute;left:100;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:485;z-index:70"></div>
		<div id="Inventar" style="position:absolute;left:10;background-image:url('Icon/Stadt.Ischtuk/Inventar.png');width:315;height:130;bottom:-130;z-index:70;visibility:hidden">
			<div id="KisteImSchiff1" style="position:absolute;left:10;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:10;z-index:70;visibility:hidden"></div>
			<div id="KisteImSchiff2" style="position:absolute;left:110;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:10;z-index:70;visibility:hidden"></div>
			<div id="KisteImSchiff3" style="position:absolute;left:210;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:10;z-index:70;visibility:hidden"></div>
			<div id="KisteImSchiff4" style="position:absolute;left:10;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:70;z-index:70;visibility:hidden"></div>
			<div id="KisteImSchiff5" style="position:absolute;left:110;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:70;z-index:70;visibility:hidden"></div>
			<div id="KisteImSchiff6" style="position:absolute;left:210;background-image:url('Icon/Stadt.Ischtuk/Kiste.png');width:90;height:54;top:70;z-index:70;visibility:hidden"></div>
		</div>
		<div id="Bild" style="position:absolute;left:0";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img src="haus1.png" style="position:absolute;left:0;z-index:7";/>
		<img id="Schiff"src="../Icon/Stadt.Ischtuk/SchiffLinks1.png" onmousedown="show()" style="position:absolute;z-index:100;left:336;background-image:url('');width:500;height:260;top:430;";/>
		</div>
		<div id="ZeitBox"style="background-image:url('Icon/Stadt.Ischtuk/Zeit.png');position:absolute;left:500;width:90;height:90;top:0;z-index:110";></div>
			<input type="text" id="Zeit" value="" style="border:transparent;font-size:56;background-Color:transparent;position:absolute;left:527;width:90;height:90;top:0;z-index:110"/>
	</div>
	<div id="Ischtuk">Ischtuk
		<div id="IschtukHafenBild"></div>
		<div id="IschtukHafenBild2"></div>
		<div id="Symbole2"></div>
		<input type="text" id="IschtukLeute" value=""/>
		<input type="text" id="IschtukGeld" value=""/>
		<input type="text" id="IschtukNahrung" value=""/>
		<div id="IschtukTaverneKnopf" onmousedown="IschtukTaverne(),IschtukKontorExit(),IschtukHafenExit(),IschtukGovernourExit()"></div>
		<div id="IschtukKontorKnopf" onmousedown="IschtukKontor(),IschtukHafenExit(),IschtukTaverneExit(),IschtukGovernourExit()"></div>
		<div id="IschtukHafenKnopf" onmousedown="IschtukHafen(),IschtukKontorExit(),IschtukTaverneExit(),IschtukGovernourExit()"></div>
		<div id="IschtukGovernourKnopf" onmousedown="IschtukGovernour(),IschtukKontorExit(),IschtukHafenExit(),IschtukTaverneExit()"></div>
		<div id="IschtukExit" onmousedown="IschtukExit()"></div>
		<div id="IschtukTaverne">
			<div id="IschtukTaverneFenster"></div>
			<div id="IschtukTaverneFenster2"></div>
			<div id="IschtukTaverneTheke"></div>
			<div id="IschtukTaverneBarceeper" onmousedown="IschtukTaverneBarceeper()"></div>
			<div id="IschtukTaverneSchatzkarte" onmousedown="IschtukTaverneSchatzkarte()"></div>
			<div id="IschtukTavernePersonal" onmousedown="IschtukTavernePersonal()"></div>
			<div id="IschtukTaverneLeute" onmousedown="IschtukAnheuern()"></div>
			<div id="IschtukTaverneHund" onmousedown="IschtukTaverneHund()"></div>
			<div id="IschtukTaverneBilderRahmenSchiff" onmousedown="IschtukTaverneBilderRahmenSchiff()"></div>
			<div id="IschtukTaverneBilderRahmenSchiff2" onmousedown="IschtukTaverneBilderRahmenSchiff2()"></div>
			<div id="IschtukTaverneExit" onmousedown="IschtukTaverneExit()"></div>
		</div>
		<div id="IschtukKontor">
			<img src="../Icon/Stadt.Ischtuk/Truhe.png" style="position:absolute;right:150;z-index:12;top:353;width:80;height:50;"/>
			<img src="../Icon/Stadt.Ischtuk/Ladung.png" style="position:absolute;right:150;z-index:12;top:387;width:80;height:50;"/>
			<div id="IschtukKontorExitKnopf" onmousedown="IschtukKontorExit()"></div>
			<div id="Ischtukkontorbild" class="Ischtuk"></button>
				<button class="kaufen1" style="top:40;" id="IschtukKaffeeKaufen1" onMouseUp="kaufen('player','IschtukPreise','Kaffee',1,1.002)"></button>
				<button class="kaufen1" style="top:60;" id="IschtukTabakKaufen1" onMouseUp="kaufen('player','IschtukPreise','Tabak',1,1.002)"></button>
				<button class="kaufen1" style="top:80;" id="IschtukZuckerrohrKaufen1" onMouseUp="kaufen('player','IschtukPreise','Zuckerrohr',1,1.002)"></button>
				<button class="kaufen1" style="top:100;" id="IschtukRumKaufen1" onMouseUp="kaufen('player','IschtukPreise','Rum',1,1.002)"></button>
				<button class="kaufen1" style="top:120;" id="IschtukBaumwolleKaufen1" onMouseUp="kaufen('player','IschtukPreise','Baumwolle',1,1.002)"></button>
				<button class="kaufen1" style="top:140;" id="IschtukPerlenKaufen1" onMouseUp="kaufen('player','IschtukPreise','Perlen',1,1.002)"></button>
				<button class="kaufen1" style="top:160;" id="IschtukSegeltuchKaufen1" onMouseUp="kaufen('player','IschtukPreise','Segeltuch',1,1.002)"></button>
				<button class="kaufen1" style="top:180;" id="IschtukHanfKaufen1" onMouseUp="kaufen('player','IschtukPreise','Hanf',1,1.002)"></button>
				<button class="kaufen1" style="top:200;" id="IschtukTeerKaufen1" onMouseUp="kaufen('player','IschtukPreise','Teer',1,1.002)"></button>
				<button class="kaufen1" style="top:220;" id="IschtukHolzKaufen1" onMouseUp="kaufen('player','IschtukPreise','Holz',1,1.002)"></button>
				<button class="kaufen1" style="top:240;" id="IschtukPulverKaufen1" onMouseUp="kaufen('player','IschtukPreise','Pulver',1,1.002)"></button>
				<button class="kaufen1" style="top:260;" id="IschtukKugelnKaufen1" onMouseUp="kaufen('player','IschtukPreise','Kugeln',1,1.002)"></button>
				<button class="kaufen1" style="top:280;" id="IschtukKanonenKaufen1" onMouseUp="kaufen('player','IschtukPreise','Kanonen',1,1.002)"></button>
				<button class="kaufen1" style="top:300;" id="IschtukNahrungKaufen1" onMouseUp="kaufen('player','IschtukPreise','Nahrung',1,1.002)"></button>

				<button class="kaufen5" style="top:40;" id="IschtukKaffeeKaufen5" onMouseUp="kaufen('player','IschtukPreise','Kaffee',5,1.01)"></button>
				<button class="kaufen5" style="top:60;" id="IschtukTabakKaufen5" onMouseUp="kaufen('player','IschtukPreise','Tabak',5,1.01)"></button>
				<button class="kaufen5" style="top:80;" id="IschtukZuckerrohrKaufen5" onMouseUp="kaufen('player','IschtukPreise','Zuckerrohr',5,1.01)"></button>
				<button class="kaufen5" style="top:100;" id="IschtukRumKaufen5" onMouseUp="kaufen('player','IschtukPreise','Rum',5,1.01)"></button>
				<button class="kaufen5" style="top:120;" id="IschtukBaumwolleKaufen5" onMouseUp="kaufen('player','IschtukPreise','Baumwolle',5,1.01)"></button>
				<button class="kaufen5" style="top:140;" id="IschtukPerlenKaufen5" onMouseUp="kaufen('player','IschtukPreise','Perlen',5,1.01)"></button>
				<button class="kaufen5" style="top:160;" id="IschtukSegeltuchKaufen5" onMouseUp="kaufen('player','IschtukPreise','Segeltuch',5,1.01)"></button>
				<button class="kaufen5" style="top:180;" id="IschtukHanfKaufen5" onMouseUp="kaufen('player','IschtukPreise','Hanf',5,1.01)"></button>
				<button class="kaufen5" style="top:200;" id="IschtukTeerKaufen5" onMouseUp="kaufen('player','IschtukPreise','Teer',5,1.01)"></button>
				<button class="kaufen5" style="top:220;" id="IschtukHolzKaufen5" onMouseUp="kaufen('player','IschtukPreise','Holz',5,1.01)"></button>
				<button class="kaufen5" style="top:240;" id="IschtukPulverKaufen5" onMouseUp="kaufen('player','IschtukPreise','Pulver',5,1.01)"></button>
				<button class="kaufen5" style="top:260;" id="IschtukKugelnKaufen5" onMouseUp="kaufen('player','IschtukPreise','Kugeln',5,1.01)"></button>
				<button class="kaufen5" style="top:280;" id="IschtukKanonenKaufen5" onMouseUp="kaufen('player','IschtukPreise','Kanonen',5,1.01)"></button>
				<button class="kaufen5" style="top:300;" id="IschtukNahrungKaufen5" onMouseUp="kaufen('player','IschtukPreise','Nahrung',5,1.01)"></button>

				<button class="kaufen10" style="top:40;" id="IschtukKaffeeKaufen10" onMouseUp="kaufen('player','IschtukPreise','Kaffee',10,1.02)"></button>
				<button class="kaufen10" style="top:60;" id="IschtukTabakKaufen10" onMouseUp="kaufen('player','IschtukPreise','Tabak',10,1.02)"></button>
				<button class="kaufen10" style="top:80;" id="IschtukZuckerrohrKaufen10" onMouseUp="kaufen('player','IschtukPreise','Zuckerrohr',10,1.02)"></button>
				<button class="kaufen10" style="top:100;" id="IschtukRumKaufen10" onMouseUp="kaufen('player','IschtukPreise','Rum',10,1.02)"></button>
				<button class="kaufen10" style="top:120;" id="IschtukBaumwolleKaufen10" onMouseUp="kaufen('player','IschtukPreise','Baumwolle',10,1.02)"></button>
				<button class="kaufen10" style="top:140;" id="IschtukPerlenKaufen10" onMouseUp="kaufen('player','IschtukPreise','Perlen',10,1.02)"></button>
				<button class="kaufen10" style="top:160;" id="IschtukSegeltuchKaufen10" onMouseUp="kaufen('player','IschtukPreise','Segeltuch',10,1.02)"></button>
				<button class="kaufen10" style="top:180;" id="IschtukHanfKaufen10" onMouseUp="kaufen('player','IschtukPreise','Hanf',10,1.02)"></button>
				<button class="kaufen10" style="top:200;" id="IschtukTeerKaufen10" onMouseUp="kaufen('player','IschtukPreise','Teer',10,1.02)"></button>
				<button class="kaufen10" style="top:220;" id="IschtukHolzKaufen10" onMouseUp="kaufen('player','IschtukPreise','Holz',10,1.02)"></button>
				<button class="kaufen10" style="top:240;" id="IschtukPulverKaufen10" onMouseUp="kaufen('player','IschtukPreise','Pulver',10,1.02)"></button>
				<button class="kaufen10" style="top:260;" id="IschtukKugelnKaufen10" onMouseUp="kaufen('player','IschtukPreise','Kugeln',10,1.02)"></button>
				<button class="kaufen10" style="top:280;" id="IschtukKanonenKaufen10" onMouseUp="kaufen('player','IschtukPreise','Kanonen',10,1.02)"></button>
				<button class="kaufen10" style="top:300;" id="IschtukNahrungKaufen10" onMouseUp="kaufen('player','IschtukPreise','Nahrung',10,1.02)"></button>

				<button class="verkaufen1" style="top:40;" id="IschtukKaffeeverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Kaffee',1,.998)"></button>
				<button class="verkaufen1" style="top:60;" id="IschtukTabakverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Tabak',1,.998)"></button>
				<button class="verkaufen1" style="top:80;" id="IschtukZuckerrohrverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Zuckerrohr',1,.998)"></button>
				<button class="verkaufen1" style="top:100;" id="IschtukRumverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Rum',1,.998)"></button>
				<button class="verkaufen1" style="top:120;" id="IschtukBaumwolleverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Baumwolle',1,.998)"></button>
				<button class="verkaufen1" style="top:140;" id="IschtukPerlenverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Perlen',1,.998)"></button>
				<button class="verkaufen1" style="top:160;" id="IschtukSegeltuchverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Segeltuch',1,.998)"></button>
				<button class="verkaufen1" style="top:180;" id="IschtukHanfverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Hanf',1,.998)"></button>
				<button class="verkaufen1" style="top:200;" id="IschtukTeerverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Teer',1,.998)"></button>
				<button class="verkaufen1" style="top:220;" id="IschtukHolzverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Holz',1,.998)"></button>
				<button class="verkaufen1" style="top:240;" id="IschtukPulververkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Pulver',1,.998)"></button>
				<button class="verkaufen1" style="top:260;" id="IschtukKugelnverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Kugeln',1,.998)"></button>
				<button class="verkaufen1" style="top:280;" id="IschtukKanonenverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Kanonen',1,.998)"></button>
				<button class="verkaufen1" style="top:300;" id="IschtukNahrungverkaufen1" onMouseUp="verkaufen('player','IschtukPreise','Nahrung',1,.998)"></button>

				<button class="verkaufen5" style="top:40;" id="IschtukKaffeeverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Kaffee',5,.99)"></button>
				<button class="verkaufen5" style="top:60;" id="IschtukTabakverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Tabak',5,.99)"></button>
				<button class="verkaufen5" style="top:80;" id="IschtukZuckerrohrverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Zuckerrohr',5,.99)"></button>
				<button class="verkaufen5" style="top:100;" id="IschtukRumverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Rum',5,.99)"></button>
				<button class="verkaufen5" style="top:120;" id="IschtukBaumwolleverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Baumwolle',5,.99)"></button>
				<button class="verkaufen5" style="top:140;" id="IschtukPerlenverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Perlen',5,.99)"></button>
				<button class="verkaufen5" style="top:160;" id="IschtukSegeltuchverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Segeltuch',5,.99)"></button>
				<button class="verkaufen5" style="top:180;" id="IschtukHanfverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Hanf',5,.99)"></button>
				<button class="verkaufen5" style="top:200;" id="IschtukTeerverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Teer',5,.99)"></button>
				<button class="verkaufen5" style="top:220;" id="IschtukHolzverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Holz',5,.99)"></button>
				<button class="verkaufen5" style="top:240;" id="IschtukPulververkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Pulver',5,.99)"></button>
				<button class="verkaufen5" style="top:260;" id="IschtukKugelnverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Kugeln',5,.99)"></button>
				<button class="verkaufen5" style="top:280;" id="IschtukKanonenverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Kanonen',5,.99)"></button>
				<button class="verkaufen5" style="top:300;" id="IschtukNahrungverkaufen5" onMouseUp="verkaufen('player','IschtukPreise','Nahrung',5,.99)"></button>

				<button class="verkaufen10" style="top:40;" id="IschtukKaffeeverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Kaffee',10,.98)"></button>
				<button class="verkaufen10" style="top:60;" id="IschtukTabakverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Tabak',10,.98)"></button>
				<button class="verkaufen10" style="top:80;" id="IschtukZuckerrohrverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Zuckerrohr',10,.98)"></button>
				<button class="verkaufen10" style="top:100;" id="IschtukRumverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Rum',10,.98)"></button>
				<button class="verkaufen10" style="top:120;" id="IschtukBaumwolleverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Baumwolle',10,.98)"></button>
				<button class="verkaufen10" style="top:140;" id="IschtukPerlenverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Perlen',10,.98)"></button>
				<button class="verkaufen10" style="top:160;" id="IschtukSegeltuchverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Segeltuch',10,.98)"></button>
				<button class="verkaufen10" style="top:180;" id="IschtukHanfverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Hanf',10,.98)"></button>
				<button class="verkaufen10" style="top:200;" id="IschtukTeerverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Teer',10,.98)"></button>
				<button class="verkaufen10" style="top:220;" id="IschtukHolzverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Holz',10,.98)"></button>
				<button class="verkaufen10" style="top:240;" id="IschtukPulververkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Pulver',10,.98)"></button>
				<button class="verkaufen10" style="top:260;" id="IschtukKugelnverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Kugeln',10,.98)"></button>
				<button class="verkaufen10" style="top:280;" id="IschtukKanonenverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Kanonen',10,.98)"></button>
				<button class="verkaufen10" style="top:300;" id="IschtukNahrungverkaufen10" onMouseUp="verkaufen('player','IschtukPreise','Nahrung',10,.98)"></button>

				<button class="warenBild" style="top:40;background-image:url('Icon/Stadt.Ischtuk/Kaffee.png');" id="IschtukKaffeewarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Kaffee',10,.998)"></button>
				<button class="warenBild" style="top:60;background-image:url('Icon/Stadt.Ischtuk/Tabak.png');" id="IschtukTabakwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Tabak',10,.998)"></button>
				<button class="warenBild" style="top:80;background-image:url('Icon/Stadt.Ischtuk/Zuckerrohr.png');" id="IschtukZuckerrohrwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Zuckerrohr',10,.998)"></button>
				<button class="warenBild" style="top:100;background-image:url('Icon/Stadt.Ischtuk/Rum.png');" id="IschtukRumwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Rum',10,.998)"></button>
				<button class="warenBild" style="top:120;background-image:url('Icon/Stadt.Ischtuk/Baumwolle.png');" id="IschtukBaumwollewarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Baumwolle',10,.998)"></button>
				<button class="warenBild" style="top:140;background-image:url('Icon/Stadt.Ischtuk/Perlen.png');" id="IschtukPerlenwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Perlen',10,.998)"></button>
				<button class="warenBild" style="top:160;background-image:url('Icon/Stadt.Ischtuk/Segeltuch.png');" id="IschtukSegeltuchwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Segeltuch',10,.998)"></button>
				<button class="warenBild" style="top:180;background-image:url('Icon/Stadt.Ischtuk/Hanf.png');" id="IschtukHanfwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Hanf',10,.998)"></button>
				<button class="warenBild" style="top:200;background-image:url('Icon/Stadt.Ischtuk/Teer.png');" id="IschtukTeerwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Teer',10,.998)"></button>
				<button class="warenBild" style="top:220;background-image:url('Icon/Stadt.Ischtuk/Holz.png');" id="IschtukHolzwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Holz',10,.998)"></button>
				<button class="warenBild" style="top:240;background-image:url('Icon/Stadt.Ischtuk/Pulver.png');" id="IschtukPulverwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Pulver',10,.998)"></button>
				<button class="warenBild" style="top:260;background-image:url('Icon/Stadt.Ischtuk/Kugeln.png');" id="IschtukKugelnwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Kugeln',10,.998)"></button>
				<button class="warenBild" style="top:280;background-image:url('Icon/Stadt.Ischtuk/Kanonen.png');" id="IschtukKanonenwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Kanonen',10,.998)"></button>
				<button class="warenBild" style="top:300;background-image:url('Icon/Stadt.Ischtuk/Nahrung.png');" id="IschtukNahrungwarenBild" onMouseUp="verkaufen('Ischtuk','IschtukPreise','Nahrung',10,.998)"></button>

				<div class="warenName" style="top:40;">Kaffeepreis...........</div>
				<div class="warenName" style="top:60;">Tabakpreis...........</div>
				<div class="warenName" style="top:80;">Zuckerrohrpreis...</div>
				<div class="warenName" style="top:100;">Rumpreis.............</div>
				<div class="warenName" style="top:120;">Baumwollpreis.....</div>
				<div class="warenName" style="top:140;">Perlenpreis..........</div>
				<div class="warenName" style="top:160;">Segeltuchpreis......</div>
				<div class="warenName" style="top:180;">Hanfpreis..............</div>
				<div class="warenName" style="top:200;">Teerpreis..............</div>
				<div class="warenName" style="top:220;">Holzpreis..............</div>
				<div class="warenName" style="top:240;">Pulverpreis..........</div>
				<div class="warenName" style="top:260;">Kugelpreis............</div>
				<div class="warenName" style="top:280;">Kanonenpreis......</div>
				<div class="warenName" style="top:300;">Nahrungspreis.....</div>
				<div  style="position:absolute;left:73;top:340;">Schiffskasse............</div>
				<div  style="position:absolute;left:73;top:380;">Schiffsladung...........</div>

				<input type="text" value='' class="warenMenge" id="playerKaffeeMenge" style="top:40;"/>
				<input type="text" value='' class="warenMenge" id="playerTabakMenge" style="top:60;"/>
				<input type="text" value='' class="warenMenge" id="playerZuckerrohrMenge" style="top:80;"/>
				<input type="text" value='' class="warenMenge" id="playerRumMenge" style="top:100;"/>
				<input type="text" value='' class="warenMenge" id="playerBaumwolleMenge" style="top:120;"/>
				<input type="text" value='' class="warenMenge" id="playerPerlenMenge" style="top:140;"/>
				<input type="text" value='' class="warenMenge" id="playerSegeltuchMenge" style="top:160;"/>
				<input type="text" value='' class="warenMenge" id="playerHanfMenge" style="top:180;"/>
				<input type="text" value='' class="warenMenge" id="playerTeerMenge" style="top:200;"/>
				<input type="text" value='' class="warenMenge" id="playerHolzMenge" style="top:220;"/>
				<input type="text" value='' class="warenMenge" id="playerPulverMenge" style="top:240;"/>
				<input type="text" value='' class="warenMenge" id="playerKugelnMenge" style="top:260;"/>
				<input type="text" value='' class="warenMenge" id="playerKanonenMenge" style="top:280;"/>
				<input type="text" value='' class="warenMenge" id="playerNahrungMenge" style="top:300;"/>
				<input type="text" value='' style="position:absolute;z-index:69;background-color:transparent;border:transparent;top:340;right:64;" id="playerGeldMenge"/>
				<input type="text" value='' style="position:absolute;z-index:69;background-color:transparent;border:transparent;top:380;right:64;" id="playerGesamtGewicht"/>

				<input type="text" value='' class="warenPreis" id="IschtukKaffeePreis" style="top:40;"/>
				<input type="text" value='' class="warenPreis" id="IschtukTabakPreis" style="top:60;"/>
				<input type="text" value='' class="warenPreis" id="IschtukZuckerrohrPreis" style="top:80;"/>
				<input type="text" value='' class="warenPreis" id="IschtukRumPreis" style="top:100;"/>
				<input type="text" value='' class="warenPreis" id="IschtukBaumwollePreis" style="top:120;"/>
				<input type="text" value='' class="warenPreis" id="IschtukPerlenPreis" style="top:140;"/>
				<input type="text" value='' class="warenPreis" id="IschtukSegeltuchPreis" style="top:160;"/>
				<input type="text" value='' class="warenPreis" id="IschtukHanfPreis" style="top:180;"/>
				<input type="text" value='' class="warenPreis" id="IschtukTeerPreis" style="top:200;"/>
				<input type="text" value='' class="warenPreis" id="IschtukHolzPreis" style="top:220;"/>
				<input type="text" value='' class="warenPreis" id="IschtukPulverPreis" style="top:240;"/>
				<input type="text" value='' class="warenPreis" id="IschtukKugelnPreis" style="top:260;"/>
				<input type="text" value='' class="warenPreis" id="IschtukKanonenPreis" style="top:280;"/>
				<input type="text" value='' class="warenPreis" id="IschtukNahrungPreis" style="top:300;"/>
			</div>
		</div>
		<div id="IschtukHafen" style="position:absolute;">
			<div id="ExpeditionsSchiff"onmousedown="IschtukHafenExpeditionsSchiff()"></div>
			<div id="HafenUpgrade" onmousedown="HafenUpgrade()"></div>
			<div id="Angeln" onmousedown="IschtukHafenAngeln()"></div>
			<div id="KistenSammeln" onmousedown="MiniGame()"></div>
			<div id="IschtukHafenUpgradeExitKnopf" onmousedown="IschtukHafenUpgradeExit()"></div>
			<div id="IschtukHafenExitKnopf" onmousedown="IschtukHafenExit()"></div>
			<div id="IschtukHafenReparierenKnopf" onmousedown="IschtukHafenReparieren()"></div>
			<div id="HafenUpgradeFenster" style="position:absolute;visibility:hidden;background-image:url('Icon/Stadt.Ischtuk/HafenUpgradeFenster.png');width:600;height:450;right:0;z-index:55;top:35;">
				<img src="../Icon/Stadt.Ischtuk/Takelage.png" onmousedown="Takelage()" style="position:absolute;left:70;z-index:56;top:160;width:90;height:90;"/>
				<img src="../Icon/Stadt.Ischtuk/Rumpf.png" onmousedown="Rumpf()" style="position:absolute;left:250;z-index:56;top:120;width:90;height:90;"/>
				<img src="../Icon/Stadt.Ischtuk/Service.png" onmousedown="Service()" style="position:absolute;left:410;z-index:56;top:140;width:90;height:90;"/>
			</div>
			<div id="IschtukTakelageFenster" style="position:absolute;visibility:hidden;background-image:url('Icon/Stadt.Ischtuk/IschtukTakelageFenster.png');width:600;height:450;right:0;z-index:65;top:35;">
				<img src="../Icon/Stadt.Ischtuk/TakelageUpgrade.png" onmousedown="TakelageUpgrade()" style="position:absolute;left:70;z-index:56;top:160;width:90;height:90;"/>
				<img src="../Icon/Stadt.Ischtuk/Exit.png" onmousedown="TakelageZu()" style="position:absolute;left:170;z-index:56;top:160;width:90;height:90;"/>
			</div>
			<div id="IschtukRumpfFenster" style="position:absolute;visibility:hidden;background-image:url('Icon/Stadt.Ischtuk/IschtukRumpfFenster.png');width:600;height:450;right:0;z-index:65;top:35;">
				<img src="../Icon/Stadt.Ischtuk/RumpfUpgrade.png" onmousedown="RumpfUpgrade()" style="position:absolute;left:70;z-index:56;top:160;width:90;height:90;"/>
				<img src="../Icon/Stadt.Ischtuk/Exit.png" onmousedown="RumpfZu()" style="position:absolute;left:170;z-index:56;top:160;width:90;height:90;"/>
			</div>
			<div id="IschtukServiceFenster" style="position:absolute;visibility:hidden;background-image:url('Icon/Stadt.Ischtuk/IschtukServiceFenster.png');width:600;height:450;right:0;z-index:65;top:35;">
				<img src="../Icon/Stadt.Ischtuk/ServiceUpgrade.png" onmousedown="SeviceUpgrade()" style="position:absolute;left:70;z-index:56;top:160;width:90;height:90;"/>
				<img src="../Icon/Stadt.Ischtuk/Exit.png" onmousedown="ServiceZu()" style="position:absolute;left:170;z-index:56;top:160;width:90;height:90;"/>
			</div>
		</div>
		<div id="IschtukGovernour">
			<div id="IschtukGovernourExitKnopf" onmousedown="IschtukGovernourExit()"></div>
			<div id="IschtukGovernourInfoKnopf" onmousedown="IschtukGovernourInfo()"></div>
			<div id="IschtukGovernourHomeKnopf" onmousedown="IschtukGovernourHome()"></div>
		</div>
	</div>
	<div id="Log2" onmousedown="schiffZu2()">
	<input type="text" class="LogFeld" style="top:20" id="LogLeute" value="0"/>
	<input type="text" class="LogFeld" style="top:40" id="LogGeld" value="0"/>
	<input type="text" class="LogFeld" style="top:60" id="LogKaffee" value="0"/>
	<input type="text" class="LogFeld" style="top:80" id="LogTabak" value="0"/>
	<input type="text" class="LogFeld" style="top:100" id="LogZuckerrohr" value="0"/>
	<input type="text" class="LogFeld" style="top:120" id="LogRum" value="0"/>
	<input type="text" class="LogFeld" style="top:140" id="LogBaumwolle" value="0"/>
	<input type="text" class="LogFeld" style="top:160" id="LogPerlen" value="0"/>
	<input type="text" class="LogFeld" style="top:180" id="LogSegeltuch" value="0"/>
	<input type="text" class="LogFeld" style="top:200" id="LogHanf" value="0"/>
	<input type="text" class="LogFeld" style="top:220" id="LogTeer" value="0"/>
	<input type="text" class="LogFeld" style="top:240" id="LogHolz" value="0"/>
	<input type="text" class="LogFeld" style="top:260" id="LogPulver" value="0"/>
	<input type="text" class="LogFeld" style="top:280" id="LogKugeln" value="0"/>
	<input type="text" class="LogFeld" style="top:300" id="LogKanonen" value="0"/>
	<input type="text" class="LogFeld" style="top:320" id="LogNahrung" value="0"/>
		<button class="LogwarenBild" style="top:20;background-image:url('Icon/Stadt.Ischtuk/Leute.png');" id="IschtukP2KaffeewarenBild" onMouseOver="info('Kaffee')"></button>
		<button class="LogwarenBild" style="top:40;background-image:url('Icon/Stadt.Ischtuk/Geld.png');" id="IschtukP2KaffeewarenBild" onMouseOver="info('Kaffee')"></button>
		<button class="LogwarenBild" style="top:60;background-image:url('Icon/Stadt.Ischtuk/Kaffee.png');" id="IschtukP2KaffeewarenBild" onMouseOver="info('Kaffee')"></button>
		<button class="LogwarenBild" style="top:80;background-image:url('Icon/Stadt.Ischtuk/Tabak.png');" id="IschtukP2TabakwarenBild" onMouseOver="info('Tabak')"></button>
		<button class="LogwarenBild" style="top:100;background-image:url('Icon/Stadt.Ischtuk/Zuckerrohr.png');" id="IschtukP2ZuckerrohrwarenBild" onMouseOver="info('Zuckerrohr')"></button>
		<button class="LogwarenBild" style="top:120;background-image:url('Icon/Stadt.Ischtuk/Rum.png');" id="IschtukP2RumwarenBild" onMouseOver="info('Rum')"></button>
		<button class="LogwarenBild" style="top:140;background-image:url('Icon/Stadt.Ischtuk/Baumwolle.png');" id="IschtukP2BaumwollewarenBild" onMouseOver="info('Baumwolle')"></button>
		<button class="LogwarenBild" style="top:160;background-image:url('Icon/Stadt.Ischtuk/Perlen.png');" id="IschtukP2PerlenwarenBild" onMouseOver="info('Perlen')"></button>
		<button class="LogwarenBild" style="top:180;background-image:url('Icon/Stadt.Ischtuk/Segeltuch.png');" id="IschtukP2SegeltuchwarenBild" onMouseOver="info('Segeltuch')"></button>
		<button class="LogwarenBild" style="top:200;background-image:url('Icon/Stadt.Ischtuk/Hanf.png');" id="IschtukP2HanfwarenBild" onMouseOver="info('Hanf')"></button>
		<button class="LogwarenBild" style="top:220;background-image:url('Icon/Stadt.Ischtuk/Teer.png');" id="IschtukP2TeerwarenBild" onMouseOver="info('Teer')"></button>
		<button class="LogwarenBild" style="top:240;background-image:url('Icon/Stadt.Ischtuk/Holz.png');" id="IschtukP2HolzwarenBild" onMouseOver="info('Holz')"></button>
		<button class="LogwarenBild" style="top:260;background-image:url('Icon/Stadt.Ischtuk/Pulver.png');" id="IschtukP2PulverwarenBild" onMouseOver="info('Pulver')"></button>
		<button class="LogwarenBild" style="top:280;background-image:url('Icon/Stadt.Ischtuk/Kugeln.png');" id="IschtukP2KugelnwarenBild" onMouseOver="info('Kugeln')"></button>
		<button class="LogwarenBild" style="top:300;background-image:url('Icon/Stadt.Ischtuk/Kanonen.png');" id="IschtukP2KanonenwarenBild" onMouseOver="info('Kanonen')"></button>
		<button class="LogwarenBild" style="top:320;background-image:url('Icon/Stadt.Ischtuk/Nahrung.png');" id="IschtukP2NahrungwarenBild" onMouseOver="info('Nahrung')"></button>
	</div>
	<input id="Takelage" value="" style="position:absolute;top:800;left:100"/>
	<input id="Rumpf" value="" style="position:absolute;top:800;left:200"/>
	<input id="Service" value="" style="position:absolute;top:800;left:300"/>
	<input id="SchiffZustand" value="" style="position:absolute;top:800;left:400"/>
	<div id="Erde" style="position:absolute;left:100;width:400;height:400">
		<div id="Karte">
		<img id="player" onmousedown="schiff2()" src="" style="position:absolute;top:50;left:50"/>
	<div id="WindHosenBild">
	<img src="Icon/0.gif"/>
	</div>
	<div id="Kompass"></div>
	<div id="theGegner" style="display:block;"></div>
	<div id="theinseln" style="display:block;"></div>
	<div id="theKielWasser" style="display:block;"></div>
	<div id="theWolken" style="display:block;"></div>
	<!--<object width="1" height="1">
	<param name="musik" value="sound/MEERSFX.swf">
	<embed src="sound/MEERSFX.swf" width="1" height="1">
	</embed>
	</object>-->
	<input id="Info" type="text" value="" style="width:400px"/>
<img id="land" class="Isle" src="Icon/Isle/land80.png"/>
<img id="landUntenWasser" class="Isle" src="Icon/Isle/land80UntenWasser.png"/>
<img id="landObenWasser" class="Isle" src="Icon/Isle/land80ObenWasser.png"/>
<img id="landRechtsWasser" class="Isle" src="Icon/Isle/land80RechtsWasser.png"/>
<img id="landLinksWasser" class="Isle" src="Icon/Isle/land80LinksWasser.png"/>
<img id="landObenUndLinksWasser" class="Isle" src="Icon/Isle/land80ObenUndLinksWasser.png"/>
<img id="landObenUndRechtsWasser" class="Isle" src="Icon/Isle/land80ObenUndRechtsWasser.png"/>
<img id="landUntenUndLinksWasser" class="Isle" src="Icon/Isle/land80UntenUndLinksWasser.png"/>
<img id="landUntenUndRechtsWasser" class="Isle" src="Icon/Isle/land80UntenUndRechtsWasser.png"/>
<img id="landObenLinksWasser" class="Isle" src="Icon/Isle/land80ObenLinksWasser.png"/>
<img id="landObenRechtsWasser" class="Isle" src="Icon/Isle/land80ObenRechtsWasser.png"/>
<img id="landUntenLinksWasser" class="Isle" src="Icon/Isle/land80UntenLinksWasser.png"/>
<img id="landUntenRechtsWasser" class="Isle" src="Icon/Isle/land80UntenRechtsWasser.png"/>
<img id="landBerg01" class="Isle" src="Icon/Isle/land80Berg01.png"/>
<img id="landBerg02" class="Isle" src="Icon/Isle/land80Berg02.png"/>
<img id="landBerg03" class="Isle" src="Icon/Isle/land80Berg03.png"/>
<img id="landBerg04" class="Isle" src="Icon/Isle/land80Berg04.png"/>
<img id="landBerg05" class="Isle" src="Icon/Isle/land80Berg10.png"/>
<img id="landflat02" class="Isle" src="Icon/Isle/land80flat02.png"/>
<img id="landflat03" class="Isle" src="Icon/Isle/land80flat03.png"/>
<img id="landflat04" class="Isle" src="Icon/Isle/land80flat04.png"/>
<img id="landflat05" class="Isle" src="Icon/Isle/land80flat05.png"/>
	</div>
	</div>
	</body>
</html>