//+Init
var WasserwechselCounter=0;
var Maximum=0;
var Minimum=0;
var ZufallsZahl=0;
var imageFolder='';
var SequenzCounter=0;
var FeldGroesse=0;
var HavannaAnheuernCounter=0;
var IschtukAnheuernCounter=0;
var WindRichtungNeu=0;
var Windrichtung=0;
var KielCounter=0;
//var InitCounter=0;
//var GameCounter=0;
var RefreshCounter=0;
var KielWasserCounter=0;
var mapWidth=0;
var mapHeight=0;
var miniMapScale=0;
var dirCounter=0;
//-Init
//+Anit
	theWelt=new Welt();
		theWelt.id='theWelt';
		theWelt.zoom=1;
	theMapsBackGround=new Maps();
		theMapsBackGround.id='theMapsBackGround';
		theMapsBackGround.zoom=theWelt.zoom*.1;
	theMapsPlayGround=new Maps();
		theMapsPlayGround.id='theMapsPlayGround';
		theMapsPlayGround.zoom=theWelt.zoom*.1;
	theMapsForeGround=new Maps();
		theMapsForeGround.id='theMapsForeGround';
		theMapsForeGround.zoom=theWelt.zoom*.1;
	player=new User();
		player.xActual=8;//current x,y position
		player.yActual=8;
		player.Scale=2;
		player.width=40;
		player.height=40;
		player.MoveSpeedMax=.04;
		player.dir=0;
		player.rot=0;
		player.speed=1;
		player.moveSpeed=.06;
		player.rotSpeed=6;
		player.id='player';
		player.Kaffee=5;
		player.Tabak=5;
		player.Zuckerrohr=5;
		player.Rum=5;
		player.Baumwolle=5;
		player.Perlen=31;
		player.Segeltuch=10;
		player.Hanf=4;
		player.Teer=10;
		player.Holz=10;
		player.Pulver=50;
		player.Kugeln=50;
		player.Kanonen=8;
		player.Leute=20;
		player.Geld=750;
		player.Nahrung=45;
		player.icon.root='Icon/';
		player.icon.fold='Schiff/';
		player.icon.name='Schiff';
		player.icon.type='gif';
		player.icon.last=60;
		player.icon.load();
		player.maps.id='theMapsPlayGround';
		player.maps.zoom=theWelt.zoom*1;
//G1::Player
	var dieGegnerAnzahl=30;
var dieGegner=new Array(dieGegnerAnzahl);
var dieGegnerHTML='';
for(var i=0;i<dieGegnerAnzahl;i++){
	var xxx=Math.random()*map[0].length;//12
	var yyy=Math.random()*map.length;//12
	var j=i+1;
	var Scale=2;
	var width=1;
	var height=1;
	var wActual=1;
	var hActual=1;
	var MoveSpeedMax=.02;
	var dir=0;
	var rot=0;
	var speed=1;
	var moveSpeed=.02;
	var rotSpeed=6;
	var Pulver=50;
	var Kugeln=50;
	var Kanonen=20;
	var newPlayer=new Player();
	eval(''+'G'+j+'='+'newPlayer');
	eval(''+'G'+j+'.id'+'=\''+'theGegner'+j.toString()+'\'');
	eval(''+'G'+j+'.xActual='+xxx.toString());
	eval(''+'G'+j+'.yActual='+yyy.toString());
	eval(''+'G'+j+'.Scale='+Scale.toString());
	eval(''+'G'+j+'.width='+width.toString());
	eval(''+'G'+j+'.height='+height.toString());
	eval(''+'G'+j+'.wActual='+wActual.toString());
	eval(''+'G'+j+'.hActual='+hActual.toString());
	eval(''+'G'+j+'.MoveSpeedMax='+MoveSpeedMax);
	eval(''+'G'+j+'.dir='+dir);
	eval(''+'G'+j+'.rot='+rot);
	eval(''+'G'+j+'.speed='+speed);
	eval(''+'G'+j+'.moveSpeed='+moveSpeed);
	eval(''+'G'+j+'.rotSpeed='+rotSpeed);
	eval(''+'G'+j+'.Pulver='+Pulver);
	eval(''+'G'+j+'.Kugeln='+Kugeln);
	eval(''+'G'+j+'.Kanonen='+Kanonen);
	eval(''+'G'+j+'.icon.root'+'=\'Icon/\'');
	eval(''+'G'+j+'.icon.fold'+'=\'Schiff/\'');
	eval(''+'G'+j+'.icon.name'+'=\'Schiff\'');
	eval(''+'G'+j+'.icon.type'+'=\'gif\'');
	eval(''+'G'+j+'.icon.last'+'=60');
	eval(''+'G'+j+'.icon.load'+'()');
	eval(''+'G'+j+'.maps.id'+'=\'theMapsPlayGround\'');
	eval(''+'G'+j+'.maps.zoom'+'=theWelt.zoom*1');
	dieGegner[i]=eval(''+'G'+j);
	dieGegnerHTML+='<img id="theGegner'+j.toString()+'" class="Gegner" src="" />';
}
//InselTeile
var dieInselnHTML='';
for(var i=1;i<600;i++){
	dieInselnHTML+=''+'<div id='+'\"TestInsel'+i+'\"'+' style='+'\"position:absolute;\"'+'></div>';
}
var dasKielwasserHTML='';
for(var i=1;i<dieGegnerAnzahl+2;i++){
	for(var j=1;j<20;j++){
	dasKielwasserHTML+=''+'<div id='+'\"KielWasser'+i.toString()+j.toString()+'\"'+' class='+'\"KielWasser\"'+'></div>';
	}
}
//-Anit
//+Main
Main=function(){
	//+Main.init
		Maximum=359;
		Minimum=0;
		ZufallsZahl=0;
		imageFolder='Icon/';
		SequenzCounter=0;
		FeldGroesse=80;
		HavannaAnheuernCounter=0;
		IschtukAnheuernCounter=0;
		WindRichtungNeu=0;
		Windrichtung=145;
		KielCounter=0;
		//InitCounter=0;
		//GameCounter=0;
		RefreshCounter=0;
		KielWasserCounter=0;
		bewegungsCounter=0;
		mapWidth=0;
		mapHeight=0;
		miniMapScale=theWelt.zoom*.5;
		mapWidth=map[0].length;
		mapHeight=map.length;
		$('theGegner').innerHTML=dieGegnerHTML;
		$('theinseln').innerHTML=dieInselnHTML;
		$('theKielWasser').innerHTML=dasKielwasserHTML;
	//-Main.init
	Oberinit();
	bindKeys();
	MainSequenzer();
	theWelt.mini();
	Oberinit();
		Mind();
		Wind();
		KI();
}
//-Main
//+Mind
Mind=function(){
	player.maps.mini(player.xActual,player.yActual,player.rot);
	refresher();
	player.mind();
	Update();
	for(var i=0;i<dieGegnerAnzahl;i++){
		dieGegner[i].mind();
	}
	window.setTimeout(Mind,1);
}
//-Mind
//+Wind
Wind=function(){
	player.roto(19);
	moveWolken();
	center('Karte',player);
	player.wind();
	for(var i=0;i<dieGegnerAnzahl;i++){
		dieGegner[i].roto(i+21);
	}
	for(var i=0;i<dieGegnerAnzahl;i++){
		dieGegner[i].wind();
	}
	if(SequenzCounter==1||SequenzCounter==6||SequenzCounter==9){
		Kielwasser();
	}
	if(SequenzCounter>10){
		for(var i=0;i<dieGegnerAnzahl;i++){
			dieGegner[i].SpeedBerechnung(Windrichtung);
		}
		player.SpeedBerechnung(Windrichtung);
		Kompass();
		WindHose();
		SequenzCounter=0;
		//Wasserwechsel();
	}
	SequenzCounter+=1;
	window.setTimeout(Wind,42);
}
//-Wind