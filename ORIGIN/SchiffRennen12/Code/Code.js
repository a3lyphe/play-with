//+Init
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
	var InitCounter=0;
	var GameCounter=0;
	var RefreshCounter=0;
	var KielWasserCounter=0;
	var mapWidth=0;
	var mapHeight=0;
	var miniMapScale=0;
	var dirCounter=0;
//-Init
//+Anit
	//theWelt::Welt
		theWelt=new Welt();
			theWelt.id='theWelt';
			theWelt.zoom=1;
	//theMaps::Maps
		theMapsBackGround=new Maps();
			theMapsBackGround.id='theMapsBackGround';
			theMapsBackGround.zoom=theWelt.zoom*1;
		theMapsPlayGround=new Maps();
			theMapsPlayGround.id='theMapsPlayGround';
			theMapsPlayGround.zoom=theWelt.zoom*1;
		theMapsForeGround=new Maps();
			theMapsForeGround.id='theMapsForeGround';
			theMapsForeGround.zoom=theWelt.zoom*1;
	//thePlayer::Player
		player=new Player();
			player.xActual=8;//current x,y position
			player.yActual=8;
			player.Scale=2;
			player.width=80;
			player.height=80;
			player.MoveSpeedMax=.2;
			player.dir=0;//the direction that the player is turning,either -1 for left or 1 for right.
			player.rot=0;//the current angle of rotation
			player.speed=1;//is the playing moving forward(speed=1) or backwards(speed=-1).
			player.moveSpeed=.06;//how far(in map units) does the player move each step/update
			player.rotSpeed=6;
			player.id='thePlayer';
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
			player.icon.type='png';
			player.icon.last=60;
			player.icon.load();
			player.maps.id='theMapsPlayGround';
			player.maps.zoom=theWelt.zoom*1;
	//G1::Player
		G1=new Player();
			G1.id='theGegner1';
			G1.xActual=5;
			G1.yActual=5;
			G1.Scale=2;
			G1.width=80;
			G1.height=80;
			G1.MoveSpeedMax=.2;
			G1.dir=0;
			G1.rot=0;
			G1.speed=1;
			G1.moveSpeed=.02;//hier kommt noch eine funktion hin.in dieser wird der wind etc. mit einberechnet
			G1.rotSpeed=6;
			G1.Pulver=50;
			G1.Kugeln=50;
			G1.Kanonen=20;
			G1.icon.root='Icon/';
			G1.icon.fold='Schiff/';
			G1.icon.name='Schiff';
			G1.icon.type='png';
			G1.icon.last=60;
			G1.icon.load();
			G1.maps.id='theMapsPlayGround';
			G1.maps.zoom=theWelt.zoom*1;
	//G2::Player
		G2=new Player();
			G2.id='theGegner2';
			G2.xActual=32;
			G2.yActual=32;
			G2.Scale=2;
			G2.width=80;
			G2.height=80;
			G2.MoveSpeedMax=.2;
			G2.dir=0;
			G2.rot=0;
			G2.speed=1;
			G2.moveSpeed=.02;//hier kommt noch eine funktion hin.in dieser wird der wind etc. mit einberechnet
			G2.rotSpeed=6;
			G2.Pulver=50;
			G2.Kugeln=50;
			G2.Kanonen=20;
			G2.icon.root='Icon/';
			G2.icon.fold='Schiff/';
			G2.icon.name='Schiff';
			G2.icon.type='png';
			G2.icon.last=60;
			G2.icon.load();
			G2.maps.id='theMapsPlayGround';
			G2.maps.zoom=theWelt.zoom*1;
//-Anit
//+Main
Main=function(){
	//+Main.init
		Maximum=359;
		Minimum=0;
		ZufallsZahl=0;
		imageFolder='Icon/';
		SequenzCounter=0;
		FeldGroesse=17;
		HavannaAnheuernCounter=0;
		IschtukAnheuernCounter=0;
		WindRichtungNeu=0;
		Windrichtung=145;
		KielCounter=0;
		InitCounter=0;
		GameCounter=0;
		RefreshCounter=0;
		KielWasserCounter=0;
		bewegungsCounter=0;
		mapWidth=0;
		mapHeight=0;
		miniMapScale=0;
		miniMapScale=theWelt.zoom*.5
		mapWidth=map[0].length;
		mapHeight=map.length;
	//-Main.init
	bindKeys();
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
	//G1.isFollowing(player);
	//G2.isEscaping(player);
	player.SpeedBerechnung(Windrichtung);
	player.mind();
	G1.mind();
	window.setTimeout(Mind,6);
}
//-Mind
//+Wind
Wind=function(){
	Kielwasser();
	player.roto(19);
	G1.roto(21);
	G2.roto(22);
	moveWolken();
	//moveDiv();
	player.wind();
	G1.wind();
	if(SequenzCounter>10){
		
		Kompass();
		WindHose();
		SequenzCounter=0;
	}
	SequenzCounter+=1;
	window.setTimeout(Wind,42);
}
//-Wind
//+KI
KI=function(){
window.setInterval('G1.KI()',3000);
window.setInterval('G1.KIdir()',200);
}

//-KI

//+Wain
	
//-Wain


	
