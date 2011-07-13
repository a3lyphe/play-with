var Maximum=359;
var Minimum=0;
var ZufallsZahl=0;
var Windrichtung=0;
var imageFolder='images/';
var SequenzCounter=0;
var FeldGroesse=17;
var HavannaP1AnheuernCounter=0;
var HavannaP2AnheuernCounter=0;
var IschtukP1AnheuernCounter=0;
var IschtukP2AnheuernCounter=0;
var ulfne=0;
var Windrichtung=0;
var KielWasserCounter=0;
var KielCounter=0;
var InitCounter=0;
var GameCounter=0;
var RefreshCounter=0;
var KielWasserbCounter=0;
var bewegungsCounter=0;
var bewegungsCounter2=0;
var $=function(id){ return document.getElementById(id); };
var dc=function(tag){ return document.createElement(tag); };
var player={
	x : 30,			//current x,y position
	y : 30,
	dir : 0,		//the direction that the player is turning,either -1 for left or 1 for right.
	rot : 0,		//the current angle of rotation
	speed : 1,		//is the playing moving forward(speed=1) or backwards(speed=-1).
	Beschleunigung: 0.3,
	moveSpeed : 0.06,	//how far(in map units) does the player move each step/update
	rotSpeed : 6,		//how much does the player rotate each step/update(in degrees)
	Leute:29,
	Geld:234,
	Nahrung:45
	}
var player2={
	x : 8,			//current x,y position
	y : 8,
	dir : 0,		//the direction that the player is turning,either -1 for left or 1 for right.
	rot : 0,		//the current angle of rotation
	speed : 1,		//is the playing moving forward(speed=1) or backwards(speed=-1).
	Beschleunigung: 0.3,
	moveSpeed : 0.06,	//how far(in map units) does the player move each step/update
	rotSpeed : 6,		//how much does the player rotate each step/update(in degrees)
	
	Kaffee:0,
	Tabak:0,
	Zuckerrohr:0,
	Rum:0,
	Baumwolle:0,
	Perlen:0,
	
	Segeltuch:0,
	Hanf:0,
	Teer:0,
	Holz:0,
	
	Pulver:0,
	Kugeln:0,
	Kanonen:0,
	
	Leute:29,
	Geld:734,
	Nahrung:45
}
Waren=function(){
		this.id;//Rufname
		//position
		this.x;//in Prozent
		this.y;//in Prozent
		//size
		this.width;//in Prozent
		this.height;//in Prozent
		this.reputation;//fragt Meute
		//color
		this.color;
		//movement
		this.speedBoost;
		this.speedLimit;
		this.speed;
		this.movable;
	}
/*
var Stadt={
	position,
	Leute:0,
	Geld:0,
	Nahrung:0,

	ReparierKurs:0,
	KaufKurs:0
}
var player={
	this.position=new Array(this.x,this.y);
	this.x:0,
	this.y:0
	}
	Leute:0,
	Geld:0,
	Nahrung:0,
	Movement={
	dir : 0,		//the direction that the player is turning,either -1 for left or 1 for right.
	rot : 0,		//the current angle of rotation
	speed : 0,		//is the playing moving forward(speed=1) or backwards(speed=-1).
	Beschleunigung: 0.0,
	moveSpeed : 0.00,	//how far(in map units) does the player move each step/update
	rotSpeed : 0		//how much does the player rotate each step/update(in degrees)
	}
}
var position={
	x : 0,			//current x,y position
	y : 0,
}
*/
var Pirat1={
	x:30,
	y:30,
	Leute:600,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:4
}
var HavannaP1={
	
	
	Leute:600,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:4
}
var HavannaP2={
	Leute:600,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:4
}
var IschtukP1={
	Leute:200,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:5
}
var IschtukP2={
	Kaffee:0,
	Tabak:0,
	Zuckerrohr:0,
	Rum:0,
	Baumwolle:0,
	Perlen:0,
	
	Segeltuch:0,
	Hanf:0,
	Teer:0,
	Holz:0,
	
	Pulver:0,
	Kugeln:0,
	Kanonen:0,
	
	Leute:200,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:5
}
var mapWidth=0;
var mapHeight=0;
var miniMapScale=0.01;

function Sequenzer(){
	SequenzCounter+=1;
	KielCounter+=1;
	GameCounter+=1;
	RefreshCounter+=1;
	if(SequenzCounter==1||SequenzCounter==100||SequenzCounter==200||SequenzCounter==300||SequenzCounter==400||SequenzCounter==500||SequenzCounter==600||SequenzCounter==700||SequenzCounter==800||SequenzCounter==900||SequenzCounter==1000){
		WindHose();
	}
	if(SequenzCounter==1){
		WerteChecker();
	}
	if(SequenzCounter>1000){
		SequenzCounter=0;
	}
	if(KielCounter==5){
		Kielwasser();
	}
	if(KielCounter>6){
		KielCounter=0;
	}
	if(GameCounter==3){
		gameCycle();
	}
	if(GameCounter>=3){
		GameCounter=0;
	}
	if(RefreshCounter==1){
		refresher();
	}
	if(RefreshCounter>=4){
		RefreshCounter=0;
	}
window.setTimeout(Sequenzer,1);
}
function refresher(){
	$("Leute1").value=player.Leute;
	$("Geld1").value=player.Geld;
	$("Nahrung1").value=player.Nahrung;
	$("Leute2").value=player2.Leute;
	$("Geld2").value=player2.Geld;
	$("Nahrung2").value=player2.Nahrung;

	$("HavannaP1Leute").value=HavannaP1.Leute;
	$("HavannaP1Geld").value=HavannaP1.Geld;
	$("HavannaP1Nahrung").value=HavannaP1.Nahrung;
	$("HavannaP2Leute").value=HavannaP2.Leute;
	$("HavannaP2Geld").value=HavannaP2.Geld;
	$("HavannaP2Nahrung").value=HavannaP2.Nahrung;

	$("IschtukP1Leute").value=IschtukP1.Leute;
	$("IschtukP1Geld").value=IschtukP1.Geld;
	$("IschtukP1Nahrung").value=IschtukP1.Nahrung;
	$("IschtukP2Leute").value=IschtukP2.Leute;
	$("IschtukP2Geld").value=IschtukP2.Geld;
	$("IschtukP2Nahrung").value=IschtukP2.Nahrung;
}
function WerteChecker(){
	player.Nahrung-=parseInt(player.Leute/10);
	player2.Nahrung-=parseInt(player2.Leute/10);
	if(player.Nahrung<0){
		player.Nahrung=0;
	}
	if(player2.Nahrung<0){
		player2.Nahrung=0;
	}
	if(player.Nahrung==0){
		player.Leute-=parseInt(player.Leute/10);
	}
	if(player2.Nahrung==0){
		player2.Leute-=parseInt(player2.Leute/10);
	}
}
function WindHose(){
	ZufallsZahl=(Math.random()*12)-6;
	ulfne=parseInt(ZufallsZahl)+parseInt(Windrichtung);
		for(var i=0;i<=12;i++){
			if(ulfne==Maximum+i){
				ulfne=0+i;
			}
			if(ulfne==-i){
				ulfne=Maximum-i;
			}
		}
	Windrichtung=ulfne;
}
function Kielwasser(){
KielWasserCounter+=1;
	FootPrint('KielWasser',KielWasserCounter,player);
	if(KielWasserCounter==19){
		KielWasserCounter=0;
	}	
	KielWasserbCounter+=1;
	FootPrint('KielWasserb',KielWasserbCounter,player2);
	if(KielWasserbCounter==19){
		KielWasserbCounter=0;
	}
}
function FootPrint(that,much,from){
	var id=that.toString()+much.toString();
	$(id).style.left=(from.x*FeldGroesse)+65+'px';//75 entspricht x.offset für gewuenschtes zentrum(vorderer Mast des Schiffes)
	$(id).style.top=(from.y*FeldGroesse)+60+'px';//70 entspricht y.offset für gewuenschtes zentrum(vorderer Mast des Schiffes)
}
function init(){
	mapWidth=map[0].length;
	mapHeight=map.length;
	bindKeys();
	drawMiniMap();
}
//Move-Div() bersetzt die Werte aus dem javagott-script in die Divs und Inputs im HTM-Bereich
function moveDiv(){
/*
switch(theScreen.backgroundColor){
		case 'green':
			theScreen.backgroundColor='apple';
			break;
		case 'apple':
			theScreen.backgroundColor='lime';
			break;
		case 'lime':
			theScreen.backgroundColor='green';
			break;
*/
//wolke1
var Wolke1Max=2;
var Wolke1Halb=Wolke1Max/2;
var Wolke1Einviertel=Wolke1Max/4;
var Wolke1Dreiviertel=(Wolke1Max/4)*3;
var Wolke1Dreiachtel=(Wolke1Max/8)*3;
var Wolke1Fuenfachtel=(Wolke1Max/8)*5;
var Wolke1Siebenachtel=(Wolke1Max/8)*7;
//wolke2
var Wolke2Max=3;//WolkenGeschwindigkeit
var Wolke2Halb=Wolke2Max/2;
var Wolke2Einviertel=Wolke2Max/4;
var Wolke2Dreiviertel=(Wolke2Max/4)*3;
var Wolke2Dreiachtel=(Wolke2Max/8)*3;
var Wolke2Fuenfachtel=(Wolke2Max/8)*5;
var Wolke2Siebenachtel=(Wolke2Max/8)*7;
//wolke3
var Wolke3Max=4;
var Wolke3Halb=Wolke3Max/2;
var Wolke3Einviertel=Wolke3Max/4;
var Wolke3Dreiviertel=(Wolke3Max/4)*3;
var Wolke3Dreiachtel=(Wolke3Max/8)*3;
var Wolke3Fuenfachtel=(Wolke3Max/8)*5;
var Wolke3Siebenachtel=(Wolke3Max/8)*7;
// GewitterWolke
var GewitterWolkeMax=5;

//Wolke1
for(var i=0;i<7;i++){
switch(Windrichtung){
	
	case i:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		break;

	case i+6:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Einviertel+'px';
		break;
	case i+12:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiachtel+'px';
		break;

	case i+18:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Halb+'px';
		break;
	case i+24:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Fuenfachtel+'px';
		break;
	case i+30:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiviertel+'px';
		break;
	case i+36:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Siebenachtel+'px';
		break;


	case i+42:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;


	case i+48:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Siebenachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+54:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+60:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Fuenfachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+66:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Halb+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
	break;
		case i+72:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+78:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Einviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;


	case i+84:
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+90:
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;

	case i+96:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Einviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+102:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+108:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Halb+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+114:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Fuenfachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+120:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;
	case i+126:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Siebenachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;


	case i+132:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
		break;

	case i+138:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Siebenachtel+'px';
		break;
	case i+144:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiviertel+'px';
		break;
	case i+150:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Fuenfachtel+'px';
		break;
	case i+156:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Halb+'px';
		break;
	case i+162:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiachtel+'px';
		break;
	case i+168:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Einviertel+'px';
		break;


	case i+174:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		break;
	case i+180:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		break;


	case i+186:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Einviertel+'px';
		break;
	case i+192:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiachtel+'px';
		break;
	case i+198:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Halb+'px';
		break;
	case i+204:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Fuenfachtel+'px';
		break;
	case i+210:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiviertel+'px';
		break;
	case i+216:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Siebenachtel+'px';
		break;


	case i+222:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;



	case i+228:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Siebenachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+234:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+240:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Fuenfachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+246:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Halb+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+252:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+258:
		$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Einviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;


	case i+264:
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+270:
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;


	case i+276:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Einviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+282:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+288:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Halb+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+294:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Fuenfachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+300:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiviertel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;
	case i+306:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Siebenachtel+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;


	case i+312:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
		break;


	case i+318:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Siebenachtel+'px';
		break;
	case i+324:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiviertel+'px';
		break;
	case i+330:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Fuenfachtel+'px';
		break;
	case i+336:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Halb+'px';
		break;
	case i+342:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiachtel+'px';
		break;
	case i+348:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Einviertel+'px';
		break;


	case i+354:
		$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
		break;
	}
}


//Die Wolke wird auf die Karte zurueckgesetzt
if($("Wolke1").offsetTop<-150){
$("Wolke1").style.top=900+'px';
}
if($("Wolke1").offsetTop>900){
$("Wolke1").style.top=-140+'px';
}
if($("Wolke1").offsetLeft<-200){
$("Wolke1").style.left=1300+'px';
}
if($("Wolke1").offsetLeft>1300){
$("Wolke1").style.left=-200+'px';
}
//Wolke2
for(var i=0;i<7;i++){
switch(Windrichtung){
	
	case i:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		break;

	case i+6:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Einviertel+'px';
		break;
	case i+12:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiachtel+'px';
		break;

	case i+18:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Halb+'px';
		break;
	case i+24:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Fuenfachtel+'px';
		break;
	case i+30:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiviertel+'px';
		break;
	case i+36:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Siebenachtel+'px';
		break;


	case i+42:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;


	case i+48:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Siebenachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+54:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+60:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Fuenfachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+66:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Halb+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
	break;
		case i+72:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+78:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Einviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;


	case i+84:
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+90:
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;

	case i+96:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Einviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+102:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+108:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Halb+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+114:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Fuenfachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+120:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;
	case i+126:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Siebenachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;


	case i+132:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
		break;

	case i+138:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Siebenachtel+'px';
		break;
	case i+144:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiviertel+'px';
		break;
	case i+150:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Fuenfachtel+'px';
		break;
	case i+156:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Halb+'px';
		break;
	case i+162:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiachtel+'px';
		break;
	case i+168:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Einviertel+'px';
		break;


	case i+174:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		break;
	case i+180:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		break;


	case i+186:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Einviertel+'px';
		break;
	case i+192:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiachtel+'px';
		break;
	case i+198:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Halb+'px';
		break;
	case i+204:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Fuenfachtel+'px';
		break;
	case i+210:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiviertel+'px';
		break;
	case i+216:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Siebenachtel+'px';
		break;


	case i+222:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;



	case i+228:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Siebenachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+234:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+240:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Fuenfachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+246:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Halb+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+252:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+258:
		$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Einviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;


	case i+264:
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+270:
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;


	case i+276:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Einviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+282:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+288:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Halb+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+294:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Fuenfachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+300:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiviertel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;
	case i+306:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Siebenachtel+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;


	case i+312:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
		break;


	case i+318:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Siebenachtel+'px';
		break;
	case i+324:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiviertel+'px';
		break;
	case i+330:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Fuenfachtel+'px';
		break;
	case i+336:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Halb+'px';
		break;
	case i+342:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiachtel+'px';
		break;
	case i+348:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Einviertel+'px';
		break;


	case i+354:
		$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
		break;
	}
}


//Die Wolke wird auf die Karte zurueckgesetzt
if($("Wolke2").offsetTop<-150){
$("Wolke2").style.top=900+'px';
}
if($("Wolke2").offsetTop>900){
$("Wolke2").style.top=-140+'px';
}
if($("Wolke2").offsetLeft<-200){
$("Wolke2").style.left=1300+'px';
}
if($("Wolke2").offsetLeft>1300){
$("Wolke2").style.left=-200+'px';
}
//Wolke3
for(var i=0;i<7;i++){
switch(Windrichtung){
	
	case i:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		break;

	case i+6:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Einviertel+'px';
		break;
	case i+12:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiachtel+'px';
		break;

	case i+18:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Halb+'px';
		break;
	case i+24:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Fuenfachtel+'px';
		break;
	case i+30:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiviertel+'px';
		break;
	case i+36:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Siebenachtel+'px';
		break;


	case i+42:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;


	case i+48:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Siebenachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+54:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+60:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Fuenfachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+66:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Halb+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
	break;
		case i+72:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+78:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Einviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;


	case i+84:
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+90:
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;

	case i+96:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Einviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+102:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+108:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Halb+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+114:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Fuenfachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+120:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;
	case i+126:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Siebenachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;


	case i+132:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
		break;

	case i+138:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Siebenachtel+'px';
		break;
	case i+144:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiviertel+'px';
		break;
	case i+150:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Fuenfachtel+'px';
		break;
	case i+156:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Halb+'px';
		break;
	case i+162:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiachtel+'px';
		break;
	case i+168:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Einviertel+'px';
		break;


	case i+174:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		break;
	case i+180:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		break;


	case i+186:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Einviertel+'px';
		break;
	case i+192:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiachtel+'px';
		break;
	case i+198:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Halb+'px';
		break;
	case i+204:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Fuenfachtel+'px';
		break;
	case i+210:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiviertel+'px';
		break;
	case i+216:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Siebenachtel+'px';
		break;


	case i+222:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;



	case i+228:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Siebenachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+234:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+240:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Fuenfachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+246:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Halb+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+252:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+258:
		$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Einviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;


	case i+264:
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+270:
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;


	case i+276:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Einviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+282:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+288:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Halb+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+294:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Fuenfachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+300:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiviertel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;
	case i+306:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Siebenachtel+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;


	case i+312:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
		break;


	case i+318:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Siebenachtel+'px';
		break;
	case i+324:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiviertel+'px';
		break;
	case i+330:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Fuenfachtel+'px';
		break;
	case i+336:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Halb+'px';
		break;
	case i+342:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiachtel+'px';
		break;
	case i+348:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Einviertel+'px';
		break;


	case i+354:
		$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
		break;
	}
}


//Die Wolke wird auf die Karte zurueckgesetzt
if($("Wolke3").offsetTop<-150){
$("Wolke3").style.top=900+'px';
}
if($("Wolke3").offsetTop>900){
$("Wolke3").style.top=-140+'px';
}
if($("Wolke3").offsetLeft<-200){
$("Wolke3").style.left=1300+'px';
}
if($("Wolke3").offsetLeft>1300){
$("Wolke3").style.left=-200+'px';
}

//GewitterWolke
for(var i=0;i<91;i++){
switch(Windrichtung){
	
	case i:
		$("GewitterWolke").style.top=$("GewitterWolke").offsetTop-GewitterWolkeMax+'px';
		$("GewitterWolke").style.left=$("GewitterWolke").offsetLeft+GewitterWolkeMax+'px';
		break;
	case i+90:
		$("GewitterWolke").style.top=$("GewitterWolke").offsetTop+GewitterWolkeMax+'px';
		$("GewitterWolke").style.left=$("GewitterWolke").offsetLeft+GewitterWolkeMax+'px';
		break;
	case i+180:
		$("GewitterWolke").style.top=$("GewitterWolke").offsetTop+GewitterWolkeMax+'px';
		$("GewitterWolke").style.left=$("GewitterWolke").offsetLeft-GewitterWolkeMax+'px';
		break;
	case i+270:
		$("GewitterWolke").style.top=$("GewitterWolke").offsetTop-GewitterWolkeMax+'px';
		$("GewitterWolke").style.left=$("GewitterWolke").offsetLeft-GewitterWolkeMax+'px';
		break;
		}
}

//Die Wolke wird auf die Karte zurueckgesetzt
if($("GewitterWolke").offsetTop<-80){
$("GewitterWolke").style.top=900+'px';
}
if($("GewitterWolke").offsetTop>900){
$("GewitterWolke").style.top=-80+'px';
}
if($("GewitterWolke").offsetLeft<-80){
$("GewitterWolke").style.left=1300+'px';
}
if($("GewitterWolke").offsetLeft>1300){
$("GewitterWolke").style.left=-80+'px';
}
//Wird ein Player vom Gewitter getroffen?
if($("GewitterWolke").offsetLeft>=player.x*(FeldGroesse-2)&&$("GewitterWolke").offsetLeft<=player.x*(FeldGroesse+2)&&$("GewitterWolke").offsetTop>=player.y*(FeldGroesse-2)&&$("GewitterWolke").offsetTop<=player.y*(FeldGroesse+2)){
player.Leute-=parseInt(player.Leute/10);
}
if($("GewitterWolke").offsetLeft>=player2.x*(FeldGroesse-2)&&$("GewitterWolke").offsetLeft<=player2.x*(FeldGroesse+2)&&$("GewitterWolke").offsetTop>=player2.y*(FeldGroesse-2)&&$("GewitterWolke").offsetTop<=player2.y*(FeldGroesse+2)){
player2.Leute-=parseInt(player2.Leute/10);
}
var playerMoveSpeedMax=0.2;
var playerMoveSpeedHalb=playerMoveSpeedMax/2;
var playerMoveSpeedEinzehntel=playerMoveSpeedMax/10;
var playerObenRechts=((Math.cos(player.rot)>0)&&(Math.sin(player.rot)<0));
var playerObenLinks=((Math.cos(player.rot)<0)&&(Math.sin(player.rot)<0));
var playerUntenRechts=((Math.cos(player.rot)>0)&&(Math.sin(player.rot)>0));
var playerUntenLinks=((Math.cos(player.rot)<0)&&(Math.sin(player.rot)>0));


for(var i=0;i<91;i++){
switch(Windrichtung){
//player1
case i:
	if (playerObenLinks){
		player.moveSpeed=playerMoveSpeedHalb;
	}
	
	if(playerObenRechts){
	player.moveSpeed=playerMoveSpeedMax;
	}
	
	if(playerUntenLinks){
	player.moveSpeed=playerMoveSpeedEinzehntel;
	}
	
	if(playerUntenRechts){
	player.moveSpeed=playerMoveSpeedHalb;
	}
break;
}
}
/*
for(var i=0;i<91;i++){
switch(Windrichtung){
//player1
case i:
	if (playerObenLinks){
		player.moveSpeed=playerMoveSpeedHalb;
	}
	
	if(playerObenRechts){
	player.moveSpeed=playerMoveSpeedMax;
	}
	
	if(playerUntenLinks){
	player.moveSpeed=playerMoveSpeedEinzehntel;
	}
	
	if(playerUntenRechts){
	player.moveSpeed=playerMoveSpeedHalb;
	}
break;
}
}
if(Windrichtung>=0&&Windrichtung<90&&playerObenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=0&&Windrichtung<90&&playerObenRechts){
player.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=0&&Windrichtung<90&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=0&&Windrichtung<90&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}
*/
if(Windrichtung>=90&&Windrichtung<180&&playerObenLinks){
player.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=90&&Windrichtung<180&&playerObenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=90&&Windrichtung<180&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=90&&Windrichtung<180&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedMax;
}


if(Windrichtung>=180&&Windrichtung<270&&playerObenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=180&&Windrichtung<270&&playerObenRechts){
player.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=180&&Windrichtung<270&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=180&&Windrichtung<270&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}


if(Windrichtung>=270&&Windrichtung<360&&playerObenLinks){
player.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=270&&Windrichtung<360&&playerObenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=270&&Windrichtung<360&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=270&&Windrichtung<360&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedEinzehntel;
}

//player2
if(Windrichtung>=0&&Windrichtung<90&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=0&&Windrichtung<90&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedEinzehntel;
}

if(Windrichtung>=90&&Windrichtung<180&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=90&&Windrichtung<180&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedHalb;
}

if(Windrichtung>=0&&Windrichtung<90&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=0&&Windrichtung<90&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedHalb;
}

if(Windrichtung>=90&&Windrichtung<180&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=90&&Windrichtung<180&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedMax;
}

if(Windrichtung>=180&&Windrichtung<270&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=180&&Windrichtung<270&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedMax;
}

if(Windrichtung>=270&&Windrichtung<360&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=270&&Windrichtung<360&&(Math.cos(player2.rot)<0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedHalb;
}

if(Windrichtung>=180&&Windrichtung<270&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=180&&Windrichtung<270&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedHalb;
}

if(Windrichtung>=270&&Windrichtung<360&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)<0)){
player2.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=270&&Windrichtung<360&&(Math.cos(player2.rot)>0)&&(Math.sin(player2.rot)>0)){
player2.moveSpeed=playerMoveSpeedEinzehntel;
}
$("MyDiv").style.left=(player.x*FeldGroesse)+'px';
$("MyDiv").style.top=(player.y*FeldGroesse)+'px';
$("Pirat1").style.left=(Pirat1.x*FeldGroesse)+'px';
$("Pirat1").style.top=(Pirat1.y*FeldGroesse)+'px';
$("MyDiv2").style.left=(player2.x*FeldGroesse)+'px';
$("MyDiv2").style.top=(player2.y*FeldGroesse)+'px';
$("bewegungsCounter").value=bewegungsCounter;
$("bewegungsCounter2").value=bewegungsCounter2;
if(player.speed==1){
bewegungsCounter+=1;
}
if(player2.speed==1){
bewegungsCounter2+=1;
}
}
//Regelt die Darstellund der Player(in diesem Fall die Autos)

function Animation2(){
	var d=new Array();

for(var i=0;i<=60;i++){
	d[i]=new Image();
	var j=i*6;		//durch die Bilderbenennung in sechsGrad Schritten
	d[i].src=''+imageFolder+j.toString()+'.gif';

}
for(var i=0;i<=60;i++){
	var j=i*6;
	var k=(i+1)*6;
	if(ulfne>j&&ulfne<k){
		document.images[2].src=d[i].src;
	}
}
}

function Animation(){

//Bilder fuer Waagen 1
	var b=new Array();

for(var i=0;i<=60;i++){
	b[i]=new Image();
	var j=i*6;//durch die Bilderbenennung in sechsGrad Schritten
	b[i].src=''+imageFolder+j.toString()+'Schiff'+'.png';
}
//Bilder fr Waagen 1
	var c=new Array();

for(var i=0;i<=60;i++){
	c[i]=new Image();
	var j=i*6;
	c[i].src=''+imageFolder+j.toString()+'Schiff'+'.png';
}
//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
	var SinRot=Math.sin(player.rot);

//0
if(SinRot==-1){
document.images[0].src=b[0].src;
};
//6
if((Math.cos(player.rot)<0.105&&Math.cos(player.rot)>0.103)&&(SinRot<(-0.993)&&SinRot>(-0.995))){
document.images[0].src=b[1].src;
};
//12
if((Math.cos(player.rot)<0.208&&Math.cos(player.rot)>0.206)&&(SinRot<(-0.977)&&SinRot>(-0.979))){
document.images[0].src=b[2].src;
};
//18
if((Math.cos(player.rot)<0.310&&Math.cos(player.rot)>0.308)&&(SinRot<(-0.950)&&SinRot>(-0.952))){
document.images[0].src=b[3].src;
};
//24
if((Math.cos(player.rot)<0.407&&Math.cos(player.rot)>0.405)&&(SinRot<(-0.912)&&SinRot>(-0.914))){
document.images[0].src=b[4].src;
};
//30
if((Math.cos(player.rot)<0.500&&Math.cos(player.rot)>0.498)&&(SinRot<(-0.865)&&SinRot>(-0.867))){
document.images[0].src=b[5].src;
};
//36
if((Math.cos(player.rot)<0.588&&Math.cos(player.rot)>0.586)&&(SinRot<(-0.808)&&SinRot>(-0.810))){
document.images[0].src=b[6].src;
};
//42
if((Math.cos(player.rot)<0.670&&Math.cos(player.rot)>0.668)&&(SinRot<(-0.742)&&SinRot>(-0.744))){
document.images[0].src=b[7].src;
};
//48
if((Math.cos(player.rot)<0.744&&Math.cos(player.rot)>0.742)&&(SinRot<(-0.668)&&SinRot>(-0.670))){
document.images[0].src=b[8].src;
};
//54
if((Math.cos(player.rot)<0.810&&Math.cos(player.rot)>0.808)&&(SinRot<(-0.586)&&SinRot>(-0.588))){
document.images[0].src=b[9].src;
};
//60
if((Math.cos(player.rot)<0.867&&Math.cos(player.rot)>0.865)&&(SinRot<(-0.498)&&SinRot>(-0.500))){
document.images[0].src=b[10].src;
};
//66
if((Math.cos(player.rot)<0.914&&Math.cos(player.rot)>0.912)&&(SinRot<(-0.405)&&SinRot>(-0.407))){
document.images[0].src=b[11].src;
};
//72
if((Math.cos(player.rot)<0.952&&Math.cos(player.rot)>0.950)&&(SinRot<(-0.308)&&SinRot>(-0.310))){
document.images[0].src=b[12].src;
};
//78
if((Math.cos(player.rot)<0.979&&Math.cos(player.rot)>0.977)&&(SinRot<(-0.206)&&SinRot>(-0.208))){
document.images[0].src=b[13].src;
};
//84
if((Math.cos(player.rot)<0.995&&Math.cos(player.rot)>0.993)&&(SinRot<(-0.103)&&SinRot>(-0.105))){
document.images[0].src=b[14].src;
};
//90
if(Math.cos(player.rot)==1){
document.images[0].src=b[15].src;
};
//96
if((SinRot<0.105&&SinRot>0.103)&&(Math.cos(player.rot)>(0.993)&&Math.cos(player.rot)<(0.995))){
document.images[0].src=b[16].src;
};
//102
if((SinRot<0.208&&SinRot>0.206)&&(Math.cos(player.rot)>(0.977)&&Math.cos(player.rot)<(0.979))){
document.images[0].src=b[17].src;
};
//108
if((SinRot<0.310&&SinRot>0.308)&&(Math.cos(player.rot)>(0.950)&&Math.cos(player.rot)<(0.952))){
document.images[0].src=b[18].src;
};
//114
if((SinRot<0.407&&SinRot>0.405)&&(Math.cos(player.rot)>(0.912)&&Math.cos(player.rot)<(0.914))){
document.images[0].src=b[19].src;
};
//120
if((SinRot<0.500&&SinRot>0.498)&&(Math.cos(player.rot)>(0.865)&&Math.cos(player.rot)<(0.867))){
document.images[0].src=b[20].src;
};
//126
if((SinRot<0.588&&SinRot>0.586)&&(Math.cos(player.rot)>(0.808)&&Math.cos(player.rot)<(0.810))){
document.images[0].src=b[21].src;
};
//132
if((SinRot<0.670&&SinRot>0.668)&&(Math.cos(player.rot)>(0.742)&&Math.cos(player.rot)<(0.744))){
document.images[0].src=b[22].src;
};
//138
if((SinRot<0.744&&SinRot>0.742)&&(Math.cos(player.rot)>(0.668)&&Math.cos(player.rot)<(0.670))){
document.images[0].src=b[23].src;
};
//144
if((SinRot<0.810&&SinRot>0.808)&&(Math.cos(player.rot)>(0.586)&&Math.cos(player.rot)<(0.588))){
document.images[0].src=b[24].src;
};
//150
if((SinRot<0.867&&SinRot>0.865)&&(Math.cos(player.rot)>(0.498)&&Math.cos(player.rot)<(0.500))){
document.images[0].src=b[25].src;
};
//156
if((SinRot<0.914&&SinRot>0.912)&&(Math.cos(player.rot)>(0.405)&&Math.cos(player.rot)<(0.407))){
document.images[0].src=b[26].src;
};
//162
if((SinRot<0.952&&SinRot>0.950)&&(Math.cos(player.rot)>(0.308)&&Math.cos(player.rot)<(0.310))){
document.images[0].src=b[27].src;
};
//168
if((SinRot<0.979&&SinRot>0.977)&&(Math.cos(player.rot)>(0.206)&&Math.cos(player.rot)<(0.208))){
document.images[0].src=b[28].src;
};
//174
if((SinRot<0.995&&SinRot>0.993)&&(Math.cos(player.rot)>(0.103)&&Math.cos(player.rot)<(0.105))){
document.images[0].src=b[29].src;
};
//180
if(SinRot==1){
document.images[0].src=b[30].src;
};
//186
if((Math.cos(player.rot)>(-0.105)&&Math.cos(player.rot)<(-0.103))&&(SinRot>(0.993)&&SinRot<(0.995))){
document.images[0].src=b[31].src;
};
//192
if((Math.cos(player.rot)>(-0.208)&&Math.cos(player.rot)<(-0.206))&&(SinRot>(0.977)&&SinRot<(0.979))){
document.images[0].src=b[32].src;
};
//198
if((Math.cos(player.rot)>(-0.310)&&Math.cos(player.rot)<(-0.308))&&(SinRot>(0.950)&&SinRot<(0.952))){
document.images[0].src=b[33].src;
};
//204
if((Math.cos(player.rot)>(-0.407)&&Math.cos(player.rot)<(-0.405))&&(SinRot>(0.912)&&SinRot<(0.914))){
document.images[0].src=b[34].src;
};
//210
if((Math.cos(player.rot)>(-0.500)&&Math.cos(player.rot)<(-0.498))&&(SinRot>(0.865)&&SinRot<(0.867))){
document.images[0].src=b[35].src;
};
//216
if((Math.cos(player.rot)>(-0.588)&&Math.cos(player.rot)<(-0.586))&&(SinRot>(0.808)&&SinRot<(0.810))){
document.images[0].src=b[36].src;
};
//222
if((Math.cos(player.rot)>(-0.670)&&Math.cos(player.rot)<(-0.668))&&(SinRot>(0.742)&&SinRot<(0.744))){
document.images[0].src=b[37].src;
};
//228
if((Math.cos(player.rot)>(-0.744)&&Math.cos(player.rot)<(-0.742))&&(SinRot>(0.668)&&SinRot<(0.670))){
document.images[0].src=b[38].src;
};
//234
if((Math.cos(player.rot)>(-0.810)&&Math.cos(player.rot)<(-0.808))&&(SinRot>(0.586)&&SinRot<(0.588))){
document.images[0].src=b[39].src;
};
//240
if((Math.cos(player.rot)>(-0.867)&&Math.cos(player.rot)<(-0.865))&&(SinRot>(0.498)&&SinRot<(0.500))){
document.images[0].src=b[40].src;
};
//246
if((Math.cos(player.rot)>(-0.914)&&Math.cos(player.rot)<(-0.912))&&(SinRot>(0.405)&&SinRot<(0.407))){
document.images[0].src=b[41].src;
};
//252
if((Math.cos(player.rot)>(-0.952)&&Math.cos(player.rot)<(-0.950))&&(SinRot>(0.308)&&SinRot<(0.310))){
document.images[0].src=b[42].src;
};
//258
if((Math.cos(player.rot)>(-0.979)&&Math.cos(player.rot)<(-0.977))&&(SinRot>(0.206)&&SinRot<(0.208))){
document.images[0].src=b[43].src;
};
//264
if((Math.cos(player.rot)>(-0.995)&&Math.cos(player.rot)<(-0.993))&&(SinRot>(0.103)&&SinRot<(0.105))){
document.images[0].src=b[44].src;
};
//270
if(Math.cos(player.rot)==-1){
document.images[0].src=b[45].src;
};
//276
if((SinRot>(-0.105)&&SinRot<(-0.103))&&(Math.cos(player.rot)<(-0.993)&&Math.cos(player.rot)>(-0.995))){
document.images[0].src=b[46].src;
};
//282
if((SinRot>(-0.208)&&SinRot<(-0.206))&&(Math.cos(player.rot)<(-0.977)&&Math.cos(player.rot)>(-0.979))){
document.images[0].src=b[47].src;
};
//288
if((SinRot>(-0.310)&&SinRot<(-0.308))&&(Math.cos(player.rot)<(-0.950)&&Math.cos(player.rot)>(-0.952))){
document.images[0].src=b[48].src;
};
//294
if((SinRot>(-0.407)&&SinRot<(-0.405))&&(Math.cos(player.rot)<(-0.912)&&Math.cos(player.rot)>(-0.914))){
document.images[0].src=b[49].src;
};
//300
if((SinRot>(-0.500)&&SinRot<(-0.498))&&(Math.cos(player.rot)<(-0.865)&&Math.cos(player.rot)>(-0.867))){
document.images[0].src=b[50].src;
};
//306
if((SinRot>(-0.588)&&SinRot<(-0.586))&&(Math.cos(player.rot)<(-0.808)&&Math.cos(player.rot)>(-0.810))){
document.images[0].src=b[51].src;
};
//312
if((SinRot>(-0.670)&&SinRot<(-0.668))&&(Math.cos(player.rot)<(-0.742)&&Math.cos(player.rot)>(-0.744))){
document.images[0].src=b[52].src;
};
//318
if((SinRot>(-0.744)&&SinRot<(-0.742))&&(Math.cos(player.rot)<(-0.668)&&Math.cos(player.rot)>(-0.670))){
document.images[0].src=b[53].src;
};
//324
if((SinRot>(-0.810)&&SinRot<(-0.808))&&(Math.cos(player.rot)<(-0.586)&&Math.cos(player.rot)>(-0.588))){
document.images[0].src=b[54].src;
};
//330
if((SinRot>(-0.867)&&SinRot<(-0.865))&&(Math.cos(player.rot)<(-0.498)&&Math.cos(player.rot)>(-0.500))){
document.images[0].src=b[55].src;
};
//336
if((SinRot>(-0.914)&&SinRot<(-0.912))&&(Math.cos(player.rot)<(-0.405)&&Math.cos(player.rot)>(-0.407))){
document.images[0].src=b[56].src;
};
//342
if((SinRot>(-0.952)&&SinRot<(-0.950))&&(Math.cos(player.rot)<(-0.308)&&Math.cos(player.rot)>(-0.310))){
document.images[0].src=b[57].src;
};
//348
if((SinRot>(-0.979)&&SinRot<(-0.977))&&(Math.cos(player.rot)<(-0.206)&&Math.cos(player.rot)>(-0.208))){
document.images[0].src=b[58].src;
};
//354
if((SinRot>(-0.995)&&SinRot<(-0.993))&&(Math.cos(player.rot)<(-0.103)&&Math.cos(player.rot)>(-0.105))){
document.images[0].src=b[59].src;
};

var SinRot2=Math.sin(player2.rot);

//0
if(SinRot2==-1){
document.images[1].src=c[0].src;
};
//6
if((Math.cos(player2.rot)<0.105&&Math.cos(player2.rot)>0.103)&&(SinRot2<(-0.993)&&SinRot2>(-0.995))){
document.images[1].src=c[1].src;
};
//12
if((Math.cos(player2.rot)<0.208&&Math.cos(player2.rot)>0.206)&&(SinRot2<(-0.977)&&SinRot2>(-0.979))){
document.images[1].src=c[2].src;
};
//18
if((Math.cos(player2.rot)<0.310&&Math.cos(player2.rot)>0.308)&&(SinRot2<(-0.950)&&SinRot2>(-0.952))){
document.images[1].src=c[3].src;
};
//24
if((Math.cos(player2.rot)<0.407&&Math.cos(player2.rot)>0.405)&&(SinRot2<(-0.912)&&SinRot2>(-0.914))){
document.images[1].src=c[4].src;
};
//30
if((Math.cos(player2.rot)<0.500&&Math.cos(player2.rot)>0.498)&&(SinRot2<(-0.865)&&SinRot2>(-0.867))){
document.images[1].src=c[5].src;
};
//36
if((Math.cos(player2.rot)<0.588&&Math.cos(player2.rot)>0.586)&&(SinRot2<(-0.808)&&SinRot2>(-0.810))){
document.images[1].src=c[6].src;
};
//42
if((Math.cos(player2.rot)<0.670&&Math.cos(player2.rot)>0.668)&&(SinRot2<(-0.742)&&SinRot2>(-0.744))){
document.images[1].src=c[7].src;
};
//48
if((Math.cos(player2.rot)<0.744&&Math.cos(player2.rot)>0.742)&&(SinRot2<(-0.668)&&SinRot2>(-0.670))){
document.images[1].src=c[8].src;
};
//54
if((Math.cos(player2.rot)<0.810&&Math.cos(player2.rot)>0.808)&&(SinRot2<(-0.586)&&SinRot2>(-0.588))){
document.images[1].src=c[9].src;
};
//60
if((Math.cos(player2.rot)<0.867&&Math.cos(player2.rot)>0.865)&&(SinRot2<(-0.498)&&SinRot2>(-0.500))){
document.images[1].src=c[10].src;
};
//66
if((Math.cos(player2.rot)<0.914&&Math.cos(player2.rot)>0.912)&&(SinRot2<(-0.405)&&SinRot2>(-0.407))){
document.images[1].src=c[11].src;
};
//72
if((Math.cos(player2.rot)<0.952&&Math.cos(player2.rot)>0.950)&&(SinRot2<(-0.308)&&SinRot2>(-0.310))){
document.images[1].src=c[12].src;
};
//78
if((Math.cos(player2.rot)<0.979&&Math.cos(player2.rot)>0.977)&&(SinRot2<(-0.206)&&SinRot2>(-0.208))){
document.images[1].src=c[13].src;
};
//84
if((Math.cos(player2.rot)<0.995&&Math.cos(player2.rot)>0.993)&&(SinRot2<(-0.103)&&SinRot2>(-0.105))){
document.images[1].src=c[14].src;
};
//90
if(Math.cos(player2.rot)==1){
document.images[1].src=c[15].src;
};
//96
if((SinRot2<0.105&&SinRot2>0.103)&&(Math.cos(player2.rot)>(0.993)&&Math.cos(player2.rot)<(0.995))){
document.images[1].src=c[16].src;
};
//102
if((SinRot2<0.208&&SinRot2>0.206)&&(Math.cos(player2.rot)>(0.977)&&Math.cos(player2.rot)<(0.979))){
document.images[1].src=c[17].src;
};
//108
if((SinRot2<0.310&&SinRot2>0.308)&&(Math.cos(player2.rot)>(0.950)&&Math.cos(player2.rot)<(0.952))){
document.images[1].src=c[18].src;
};
//114
if((SinRot2<0.407&&SinRot2>0.405)&&(Math.cos(player2.rot)>(0.912)&&Math.cos(player2.rot)<(0.914))){
document.images[1].src=c[19].src;
};
//120
if((SinRot2<0.500&&SinRot2>0.498)&&(Math.cos(player2.rot)>(0.865)&&Math.cos(player2.rot)<(0.867))){
document.images[1].src=c[20].src;
};
//126
if((SinRot2<0.588&&SinRot2>0.586)&&(Math.cos(player2.rot)>(0.808)&&Math.cos(player2.rot)<(0.810))){
document.images[1].src=c[21].src;
};
//132
if((SinRot2<0.670&&SinRot2>0.668)&&(Math.cos(player2.rot)>(0.742)&&Math.cos(player2.rot)<(0.744))){
document.images[1].src=c[22].src;
};
//138
if((SinRot2<0.744&&SinRot2>0.742)&&(Math.cos(player2.rot)>(0.668)&&Math.cos(player2.rot)<(0.670))){
document.images[1].src=c[23].src;
};
//144
if((SinRot2<0.810&&SinRot2>0.808)&&(Math.cos(player2.rot)>(0.586)&&Math.cos(player2.rot)<(0.588))){
document.images[1].src=c[24].src;
};
//150
if((SinRot2<0.867&&SinRot2>0.865)&&(Math.cos(player2.rot)>(0.498)&&Math.cos(player2.rot)<(0.500))){
document.images[1].src=c[25].src;
};
//156
if((SinRot2<0.914&&SinRot2>0.912)&&(Math.cos(player2.rot)>(0.405)&&Math.cos(player2.rot)<(0.407))){
document.images[1].src=c[26].src;
};
//162
if((SinRot2<0.952&&SinRot2>0.950)&&(Math.cos(player2.rot)>(0.308)&&Math.cos(player2.rot)<(0.310))){
document.images[1].src=c[27].src;
};
//168
if((SinRot2<0.979&&SinRot2>0.977)&&(Math.cos(player2.rot)>(0.206)&&Math.cos(player2.rot)<(0.208))){
document.images[1].src=c[28].src;
};
//174
if((SinRot2<0.995&&SinRot2>0.993)&&(Math.cos(player2.rot)>(0.103)&&Math.cos(player2.rot)<(0.105))){
document.images[1].src=c[29].src;
};
//180
if(SinRot2==1){
document.images[1].src=c[30].src;
};
//186
if((Math.cos(player2.rot)>(-0.105)&&Math.cos(player2.rot)<(-0.103))&&(SinRot2>(0.993)&&SinRot2<(0.995))){
document.images[1].src=c[31].src;
};
//192
if((Math.cos(player2.rot)>(-0.208)&&Math.cos(player2.rot)<(-0.206))&&(SinRot2>(0.977)&&SinRot2<(0.979))){
document.images[1].src=c[32].src;
};
//198
if((Math.cos(player2.rot)>(-0.310)&&Math.cos(player2.rot)<(-0.308))&&(SinRot2>(0.950)&&SinRot2<(0.952))){
document.images[1].src=c[33].src;
};
//204
if((Math.cos(player2.rot)>(-0.407)&&Math.cos(player2.rot)<(-0.405))&&(SinRot2>(0.912)&&SinRot2<(0.914))){
document.images[1].src=c[34].src;
};
//210
if((Math.cos(player2.rot)>(-0.500)&&Math.cos(player2.rot)<(-0.498))&&(SinRot2>(0.865)&&SinRot2<(0.867))){
document.images[1].src=c[35].src;
};
//216
if((Math.cos(player2.rot)>(-0.588)&&Math.cos(player2.rot)<(-0.586))&&(SinRot2>(0.808)&&SinRot2<(0.810))){
document.images[1].src=c[36].src;
};
//222
if((Math.cos(player2.rot)>(-0.670)&&Math.cos(player2.rot)<(-0.668))&&(SinRot2>(0.742)&&SinRot2<(0.744))){
document.images[1].src=c[37].src;
};
//228
if((Math.cos(player2.rot)>(-0.744)&&Math.cos(player2.rot)<(-0.742))&&(SinRot2>(0.668)&&SinRot2<(0.670))){
document.images[1].src=c[38].src;
};
//234
if((Math.cos(player2.rot)>(-0.810)&&Math.cos(player2.rot)<(-0.808))&&(SinRot2>(0.586)&&SinRot2<(0.588))){
document.images[1].src=c[39].src;
};
//240
if((Math.cos(player2.rot)>(-0.867)&&Math.cos(player2.rot)<(-0.865))&&(SinRot2>(0.498)&&SinRot2<(0.500))){
document.images[1].src=c[40].src;
};
//246
if((Math.cos(player2.rot)>(-0.914)&&Math.cos(player2.rot)<(-0.912))&&(SinRot2>(0.405)&&SinRot2<(0.407))){
document.images[1].src=c[41].src;
};
//252
if((Math.cos(player2.rot)>(-0.952)&&Math.cos(player2.rot)<(-0.950))&&(SinRot2>(0.308)&&SinRot2<(0.310))){
document.images[1].src=c[42].src;
};
//258
if((Math.cos(player2.rot)>(-0.979)&&Math.cos(player2.rot)<(-0.977))&&(SinRot2>(0.206)&&SinRot2<(0.208))){
document.images[1].src=c[43].src;
};
//264
if((Math.cos(player2.rot)>(-0.995)&&Math.cos(player2.rot)<(-0.993))&&(SinRot2>(0.103)&&SinRot2<(0.105))){
document.images[1].src=c[44].src;
};
//270
if(Math.cos(player2.rot)==-1){
document.images[1].src=c[45].src;
};
//276
if((SinRot2>(-0.105)&&SinRot2<(-0.103))&&(Math.cos(player2.rot)<(-0.993)&&Math.cos(player2.rot)>(-0.995))){
document.images[1].src=c[46].src;
};
//282
if((SinRot2>(-0.208)&&SinRot2<(-0.206))&&(Math.cos(player2.rot)<(-0.977)&&Math.cos(player2.rot)>(-0.979))){
document.images[1].src=c[47].src;
};
//288
if((SinRot2>(-0.310)&&SinRot2<(-0.308))&&(Math.cos(player2.rot)<(-0.950)&&Math.cos(player2.rot)>(-0.952))){
document.images[1].src=c[48].src;
};
//294
if((SinRot2>(-0.407)&&SinRot2<(-0.405))&&(Math.cos(player2.rot)<(-0.912)&&Math.cos(player2.rot)>(-0.914))){
document.images[1].src=c[49].src;
};
//300
if((SinRot2>(-0.500)&&SinRot2<(-0.498))&&(Math.cos(player2.rot)<(-0.865)&&Math.cos(player2.rot)>(-0.867))){
document.images[1].src=c[50].src;
};
//306
if((SinRot2>(-0.588)&&SinRot2<(-0.586))&&(Math.cos(player2.rot)<(-0.808)&&Math.cos(player2.rot)>(-0.810))){
document.images[1].src=c[51].src;
};
//312
if((SinRot2>(-0.670)&&SinRot2<(-0.668))&&(Math.cos(player2.rot)<(-0.742)&&Math.cos(player2.rot)>(-0.744))){
document.images[1].src=c[52].src;
};
//318
if((SinRot2>(-0.744)&&SinRot2<(-0.742))&&(Math.cos(player2.rot)<(-0.668)&&Math.cos(player2.rot)>(-0.670))){
document.images[1].src=c[53].src;
};
//324
if((SinRot2>(-0.810)&&SinRot2<(-0.808))&&(Math.cos(player2.rot)<(-0.586)&&Math.cos(player2.rot)>(-0.588))){
document.images[1].src=c[54].src;
};
//330
if((SinRot2>(-0.867)&&SinRot2<(-0.865))&&(Math.cos(player2.rot)<(-0.498)&&Math.cos(player2.rot)>(-0.500))){
document.images[1].src=c[55].src;
};
//336
if((SinRot2>(-0.914)&&SinRot2<(-0.912))&&(Math.cos(player2.rot)<(-0.405)&&Math.cos(player2.rot)>(-0.407))){
document.images[1].src=c[56].src;
};
//342
if((SinRot2>(-0.952)&&SinRot2<(-0.950))&&(Math.cos(player2.rot)<(-0.308)&&Math.cos(player2.rot)>(-0.310))){
document.images[1].src=c[57].src;
};
//348
if((SinRot2>(-0.979)&&SinRot2<(-0.977))&&(Math.cos(player2.rot)<(-0.206)&&Math.cos(player2.rot)>(-0.208))){
document.images[1].src=c[58].src;
};
//354
if((SinRot2>(-0.995)&&SinRot2<(-0.993))&&(Math.cos(player2.rot)<(-0.103)&&Math.cos(player2.rot)>(-0.105))){
document.images[1].src=c[59].src;
};
}
function WasserEinschlag1(p,q){
$("WasserEinschlag1").style.left=(p*FeldGroesse)+65+'px';
$("WasserEinschlag1").style.top=(q*FeldGroesse)+60+'px';
if($("WasserEinschlag1").offsetLeft>(Pirat1.x-2)*FeldGroesse&&$("WasserEinschlag1").offsetLeft<(Pirat1.x+0)*FeldGroesse&&$("WasserEinschlag1").offsetTop>(Pirat1.y-2)*FeldGroesse&&$("WasserEinschlag1").offsetTop<(Pirat1.y+0)*FeldGroesse){
alert("TrefferXy");
Pirat1.x=Math.random()*40;
Pirat1.y=Math.random()*40;
player.Geld+=300;
}
}
function WasserEinschlag2(p,q){
	$("WasserEinschlag2").style.left=(p*FeldGroesse)+65+'px';
	$("WasserEinschlag2").style.top=(q*FeldGroesse)+60+'px';
	if($("WasserEinschlag2").offsetLeft>(Pirat1.x-2)*FeldGroesse&&$("WasserEinschlag2").offsetLeft<(Pirat1.x+0)*FeldGroesse&&$("WasserEinschlag2").offsetTop>(Pirat1.y-2)*FeldGroesse&&$("WasserEinschlag2").offsetTop<(Pirat1.y+0)*FeldGroesse){
		alert("TrefferXy");
		Pirat1.x=Math.random()*40;
		Pirat1.y=Math.random()*40;
		player2.Geld+=300;
	}
}
var kanonenCounter1=0;

function Kanone1(){
	kanonenCounter1=0;
	Schuss();
}
function Schuss(){
//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
	var SinRot=Math.sin(player.rot);

//0
if(SinRot==-1){
	var ix=kanonenCounter1+player.x;
	var iy=player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//6
if((Math.cos(player.rot)<0.105&&Math.cos(player.rot)>0.103)&&(SinRot<(-0.993)&&SinRot>(-0.995))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.125)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px'
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//12
if((Math.cos(player.rot)<0.208&&Math.cos(player.rot)>0.206)&&(SinRot<(-0.977)&&SinRot>(-0.979))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.25)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//18
if((Math.cos(player.rot)<0.310&&Math.cos(player.rot)>0.308)&&(SinRot<(-0.950)&&SinRot>(-0.952))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.375)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//24
if((Math.cos(player.rot)<0.407&&Math.cos(player.rot)>0.405)&&(SinRot<(-0.912)&&SinRot>(-0.914))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.500)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
//30
if((Math.cos(player.rot)<0.500&&Math.cos(player.rot)>0.498)&&(SinRot<(-0.865)&&SinRot>(-0.867))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.625)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//36
if((Math.cos(player.rot)<0.588&&Math.cos(player.rot)>0.586)&&(SinRot<(-0.808)&&SinRot>(-0.810))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.75)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
//42
if((Math.cos(player.rot)<0.670&&Math.cos(player.rot)>0.668)&&(SinRot<(-0.742)&&SinRot>(-0.744))){
	var ix=kanonenCounter1+player.x;
	var iy=parseInt(kanonenCounter1*0.875)+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
//48
if((Math.cos(player.rot)<0.744&&Math.cos(player.rot)>0.742)&&(SinRot<(-0.668)&&SinRot>(-0.670))){
	var ix=kanonenCounter1+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//54
if((Math.cos(player.rot)<0.810&&Math.cos(player.rot)>0.808)&&(SinRot<(-0.586)&&SinRot>(-0.588))){
	var ix=parseInt(kanonenCounter1*0.75)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//60
if((Math.cos(player.rot)<0.867&&Math.cos(player.rot)>0.865)&&(SinRot<(-0.498)&&SinRot>(-0.500))){
	var ix=parseInt(kanonenCounter1*0.625)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//66
if((Math.cos(player.rot)<0.914&&Math.cos(player.rot)>0.912)&&(SinRot<(-0.405)&&SinRot>(-0.407))){
	var ix=parseInt(kanonenCounter1*0.5)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//72
if((Math.cos(player.rot)<0.952&&Math.cos(player.rot)>0.950)&&(SinRot<(-0.308)&&SinRot>(-0.310))){
	var ix=parseInt(kanonenCounter1*0.375)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
	$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
	WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//78
if((Math.cos(player.rot)<0.979&&Math.cos(player.rot)>0.977)&&(SinRot<(-0.206)&&SinRot>(-0.208))){
	var ix=parseInt(kanonenCounter1*0.25)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//84
if((Math.cos(player.rot)<0.995&&Math.cos(player.rot)>0.993)&&(SinRot<(-0.103)&&SinRot>(-0.105))){
	var ix=parseInt(kanonenCounter1*0.125)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
/*
//90
if(Math.cos(player.rot)==1){
	var ix=player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};*/
//90
if(Math.cos(player.rot)==1){
	var ix=player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
	}
};
//96
if((SinRot<0.105&&SinRot>0.103)&&(Math.cos(player.rot)>(0.993)&&Math.cos(player.rot)<(0.995))){
	var ix=parseInt(-kanonenCounter1*0.125)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
//102
if((SinRot<0.208&&SinRot>0.206)&&(Math.cos(player.rot)>(0.977)&&Math.cos(player.rot)<(0.979))){
	var ix=parseInt(-kanonenCounter1*0.25)+player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
	$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
//108
if((SinRot<0.310&&SinRot>0.308)&&(Math.cos(player.rot)>(0.950)&&Math.cos(player.rot)<(0.952))){
var ix=parseInt(-kanonenCounter1*0.375)+player.x;
var iy=kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//114
if((SinRot<0.407&&SinRot>0.405)&&(Math.cos(player.rot)>(0.912)&&Math.cos(player.rot)<(0.914))){
var ix=parseInt(-kanonenCounter1*0.5)+player.x;
var iy=kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//120
if((SinRot<0.500&&SinRot>0.498)&&(Math.cos(player.rot)>(0.865)&&Math.cos(player.rot)<(0.867))){
var ix=parseInt(-kanonenCounter1*0.625)+player.x;
var iy=kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//126
if((SinRot<0.588&&SinRot>0.586)&&(Math.cos(player.rot)>(0.808)&&Math.cos(player.rot)<(0.810))){
var ix=parseInt(-kanonenCounter1*0.75)+player.x;
var iy=kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//132
if((SinRot<0.670&&SinRot>0.668)&&(Math.cos(player.rot)>(0.742)&&Math.cos(player.rot)<(0.744))){
var ix=parseInt(-kanonenCounter1*0.875)+player.x;
var iy=kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//138
if((SinRot<0.744&&SinRot>0.742)&&(Math.cos(player.rot)>(0.668)&&Math.cos(player.rot)<(0.670))){
var ix=-kanonenCounter1+player.x;
var iy=kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//144
if((SinRot<0.810&&SinRot>0.808)&&(Math.cos(player.rot)>(0.586)&&Math.cos(player.rot)<(0.588))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(kanonenCounter1*0.875)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//150
if((SinRot<0.867&&SinRot>0.865)&&(Math.cos(player.rot)>(0.498)&&Math.cos(player.rot)<(0.500))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(kanonenCounter1*0.75)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//156
if((SinRot<0.914&&SinRot>0.912)&&(Math.cos(player.rot)>(0.405)&&Math.cos(player.rot)<(0.407))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(kanonenCounter1*0.625)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//162
if((SinRot<0.952&&SinRot>0.950)&&(Math.cos(player.rot)>(0.308)&&Math.cos(player.rot)<(0.310))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(kanonenCounter1*0.5)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//168
if((SinRot<0.979&&SinRot>0.977)&&(Math.cos(player.rot)>(0.206)&&Math.cos(player.rot)<(0.208))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(kanonenCounter1*0.375)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//174
if((SinRot<0.995&&SinRot>0.993)&&(Math.cos(player.rot)>(0.103)&&Math.cos(player.rot)<(0.105))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(kanonenCounter1*0.25)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//180
if(SinRot==1){
var ix=-kanonenCounter1+player.x;
var iy=player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//186
if((Math.cos(player.rot)>(-0.105)&&Math.cos(player.rot)<(-0.103))&&(SinRot>(0.993)&&SinRot<(0.995))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.125)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//192
if((Math.cos(player.rot)>(-0.208)&&Math.cos(player.rot)<(-0.206))&&(SinRot>(0.977)&&SinRot<(0.979))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.25)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//198
if((Math.cos(player.rot)>(-0.310)&&Math.cos(player.rot)<(-0.308))&&(SinRot>(0.950)&&SinRot<(0.952))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.375)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//204
if((Math.cos(player.rot)>(-0.407)&&Math.cos(player.rot)<(-0.405))&&(SinRot>(0.912)&&SinRot<(0.914))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.5)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//210
if((Math.cos(player.rot)>(-0.500)&&Math.cos(player.rot)<(-0.498))&&(SinRot>(0.865)&&SinRot<(0.867))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.625)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//216
if((Math.cos(player.rot)>(-0.588)&&Math.cos(player.rot)<(-0.586))&&(SinRot>(0.808)&&SinRot<(0.810))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.75)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//222
if((Math.cos(player.rot)>(-0.670)&&Math.cos(player.rot)<(-0.668))&&(SinRot>(0.742)&&SinRot<(0.744))){
var ix=-kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.875)+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//228
if((Math.cos(player.rot)>(-0.744)&&Math.cos(player.rot)<(-0.742))&&(SinRot>(0.668)&&SinRot<(0.670))){
var ix=-kanonenCounter1+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//234
if((Math.cos(player.rot)>(-0.810)&&Math.cos(player.rot)<(-0.808))&&(SinRot>(0.586)&&SinRot<(0.588))){
var ix=parseInt(-kanonenCounter1*0.875)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//240
if((Math.cos(player.rot)>(-0.867)&&Math.cos(player.rot)<(-0.865))&&(SinRot>(0.498)&&SinRot<(0.500))){
var ix=parseInt(-kanonenCounter1*0.75)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//246
if((Math.cos(player.rot)>(-0.914)&&Math.cos(player.rot)<(-0.912))&&(SinRot>(0.405)&&SinRot<(0.407))){
var ix=parseInt(-kanonenCounter1*0.5)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//252
if((Math.cos(player.rot)>(-0.952)&&Math.cos(player.rot)<(-0.950))&&(SinRot>(0.308)&&SinRot<(0.310))){
var ix=parseInt(-kanonenCounter1*0.375)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//258
if((Math.cos(player.rot)>(-0.979)&&Math.cos(player.rot)<(-0.977))&&(SinRot>(0.206)&&SinRot<(0.208))){
var ix=parseInt(-kanonenCounter1*0.25)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//264
if((Math.cos(player.rot)>(-0.995)&&Math.cos(player.rot)<(-0.993))&&(SinRot>(0.103)&&SinRot<(0.105))){
var ix=parseInt(-kanonenCounter1*0.125)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//270
if(Math.cos(player.rot)==-1){
var ix=player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
}
};
//276
if((SinRot>(-0.105)&&SinRot<(-0.103))&&(Math.cos(player.rot)<(-0.993)&&Math.cos(player.rot)>(-0.995))){
var ix=parseInt(kanonenCounter1*0.125)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//282
if((SinRot>(-0.208)&&SinRot<(-0.206))&&(Math.cos(player.rot)<(-0.977)&&Math.cos(player.rot)>(-0.979))){
var ix=parseInt(kanonenCounter1*0.25)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//288
if((SinRot>(-0.310)&&SinRot<(-0.308))&&(Math.cos(player.rot)<(-0.950)&&Math.cos(player.rot)>(-0.952))){
var ix=parseInt(kanonenCounter1*0.375)+player.x;
var iy=-kanonenCounter1+player.y;
$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//294
if((SinRot>(-0.407)&&SinRot<(-0.405))&&(Math.cos(player.rot)<(-0.912)&&Math.cos(player.rot)>(-0.914))){
var ix=parseInt(kanonenCounter1*0.5)+player.x;
var iy=-kanonenCounter1+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//300
if((SinRot>(-0.500)&&SinRot<(-0.498))&&(Math.cos(player.rot)<(-0.865)&&Math.cos(player.rot)>(-0.867))){
var ix=parseInt(kanonenCounter1*0.625)+player.x;
var iy=-kanonenCounter1+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//306
if((SinRot>(-0.588)&&SinRot<(-0.586))&&(Math.cos(player.rot)<(-0.808)&&Math.cos(player.rot)>(-0.810))){
var ix=parseInt(kanonenCounter1*0.75)+player.x;
var iy=-kanonenCounter1+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//312
if((SinRot>(-0.670)&&SinRot<(-0.668))&&(Math.cos(player.rot)<(-0.742)&&Math.cos(player.rot)>(-0.744))){
var ix=parseInt(kanonenCounter1*0.875)+player.x;
var iy=-kanonenCounter1+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//318
if((SinRot>(-0.744)&&SinRot<(-0.742))&&(Math.cos(player.rot)<(-0.668)&&Math.cos(player.rot)>(-0.670))){
var ix=kanonenCounter1+player.x;
var iy=-kanonenCounter1+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//324
if((SinRot>(-0.810)&&SinRot<(-0.808))&&(Math.cos(player.rot)<(-0.586)&&Math.cos(player.rot)>(-0.588))){
var ix=kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.75)+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//330
if((SinRot>(-0.867)&&SinRot<(-0.865))&&(Math.cos(player.rot)<(-0.498)&&Math.cos(player.rot)>(-0.500))){
var ix=kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.625)+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//336
if((SinRot>(-0.914)&&SinRot<(-0.912))&&(Math.cos(player.rot)<(-0.405)&&Math.cos(player.rot)>(-0.407))){
var ix=kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.5)+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//342
if((SinRot>(-0.952)&&SinRot<(-0.950))&&(Math.cos(player.rot)<(-0.308)&&Math.cos(player.rot)>(-0.310))){
var ix=kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.375)+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//348
if((SinRot>(-0.979)&&SinRot<(-0.977))&&(Math.cos(player.rot)<(-0.206)&&Math.cos(player.rot)>(-0.208))){
var ix=kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.25)+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};
//354
if((SinRot>(-0.995)&&SinRot<(-0.993))&&(Math.cos(player.rot)<(-0.103)&&Math.cos(player.rot)>(-0.105))){
var ix=kanonenCounter1+player.x;
var iy=parseInt(-kanonenCounter1*0.125)+player.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};

}
var kanonenCounter2=0;

function Kanone2(){
kanonenCounter2=0;
Schuss2();
}
function Schuss2(){
//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
	var SinRot=Math.sin(player2.rot);

//0
if(SinRot==-1){
var ix=kanonenCounter2+player2.x;
var iy=player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;

if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}

};
//6
if((Math.cos(player2.rot)<0.105&&Math.cos(player2.rot)>0.103)&&(SinRot<(-0.993)&&SinRot>(-0.995))){
document.images[0].src=b[1].src;
};
//12
if((Math.cos(player2.rot)<0.208&&Math.cos(player2.rot)>0.206)&&(SinRot<(-0.977)&&SinRot>(-0.979))){
document.images[0].src=b[2].src;
};
//18
if((Math.cos(player2.rot)<0.310&&Math.cos(player2.rot)>0.308)&&(SinRot<(-0.950)&&SinRot>(-0.952))){
document.images[0].src=b[3].src;
};
//24
if((Math.cos(player2.rot)<0.407&&Math.cos(player2.rot)>0.405)&&(SinRot<(-0.912)&&SinRot>(-0.914))){
document.images[0].src=b[4].src;
};
//30
if((Math.cos(player2.rot)<0.500&&Math.cos(player2.rot)>0.498)&&(SinRot<(-0.865)&&SinRot>(-0.867))){
document.images[0].src=b[5].src;
};
//36
if((Math.cos(player2.rot)<0.588&&Math.cos(player2.rot)>0.586)&&(SinRot<(-0.808)&&SinRot>(-0.810))){
document.images[0].src=b[6].src;
};
//42
if((Math.cos(player2.rot)<0.670&&Math.cos(player2.rot)>0.668)&&(SinRot<(-0.742)&&SinRot>(-0.744))){
document.images[0].src=b[7].src;
};
//48
if((Math.cos(player2.rot)<0.744&&Math.cos(player2.rot)>0.742)&&(SinRot<(-0.668)&&SinRot>(-0.670))){
var ix=kanonenCounter2+player2.x;
var iy=kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//54
if((Math.cos(player2.rot)<0.810&&Math.cos(player2.rot)>0.808)&&(SinRot<(-0.586)&&SinRot>(-0.588))){
var ix=kanonenCounter2+player2.x;
var iy=kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//60
if((Math.cos(player2.rot)<0.867&&Math.cos(player2.rot)>0.865)&&(SinRot<(-0.498)&&SinRot>(-0.500))){
document.images[0].src=b[10].src;
};
//66
if((Math.cos(player2.rot)<0.914&&Math.cos(player2.rot)>0.912)&&(SinRot<(-0.405)&&SinRot>(-0.407))){
document.images[0].src=b[11].src;
};
//72
if((Math.cos(player2.rot)<0.952&&Math.cos(player2.rot)>0.950)&&(SinRot<(-0.308)&&SinRot>(-0.310))){
document.images[0].src=b[12].src;
};
//78
if((Math.cos(player2.rot)<0.979&&Math.cos(player2.rot)>0.977)&&(SinRot<(-0.206)&&SinRot>(-0.208))){
document.images[0].src=b[13].src;
};
//84
if((Math.cos(player2.rot)<0.995&&Math.cos(player2.rot)>0.993)&&(SinRot<(-0.103)&&SinRot>(-0.105))){
document.images[0].src=b[14].src;
};
//90
if(Math.cos(player2.rot)==1){
var ix=player2.x;
var iy=kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//96
if((SinRot<0.105&&SinRot>0.103)&&(Math.cos(player2.rot)>(0.993)&&Math.cos(player2.rot)<(0.995))){
document.images[0].src=b[16].src;
};
//102
if((SinRot<0.208&&SinRot>0.206)&&(Math.cos(player2.rot)>(0.977)&&Math.cos(player2.rot)<(0.979))){
document.images[0].src=b[17].src;
};
//108
if((SinRot<0.310&&SinRot>0.308)&&(Math.cos(player2.rot)>(0.950)&&Math.cos(player2.rot)<(0.952))){
document.images[0].src=b[18].src;
};
//114
if((SinRot<0.407&&SinRot>0.405)&&(Math.cos(player2.rot)>(0.912)&&Math.cos(player2.rot)<(0.914))){
document.images[0].src=b[19].src;
};
//120
if((SinRot<0.500&&SinRot>0.498)&&(Math.cos(player2.rot)>(0.865)&&Math.cos(player2.rot)<(0.867))){
document.images[0].src=b[20].src;
};
//126
if((SinRot<0.588&&SinRot>0.586)&&(Math.cos(player2.rot)>(0.808)&&Math.cos(player2.rot)<(0.810))){
document.images[0].src=b[21].src;
};
//132
if((SinRot<0.670&&SinRot>0.668)&&(Math.cos(player2.rot)>(0.742)&&Math.cos(player2.rot)<(0.744))){
var ix=-kanonenCounter2+player2.x;
var iy=kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//138
if((SinRot<0.744&&SinRot>0.742)&&(Math.cos(player2.rot)>(0.668)&&Math.cos(player2.rot)<(0.670))){
var ix=-kanonenCounter2+player2.x;
var iy=kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//144
if((SinRot<0.810&&SinRot>0.808)&&(Math.cos(player2.rot)>(0.586)&&Math.cos(player2.rot)<(0.588))){
document.images[0].src=b[24].src;
};
//150
if((SinRot<0.867&&SinRot>0.865)&&(Math.cos(player2.rot)>(0.498)&&Math.cos(player2.rot)<(0.500))){
document.images[0].src=b[25].src;
};
//156
if((SinRot<0.914&&SinRot>0.912)&&(Math.cos(player2.rot)>(0.405)&&Math.cos(player2.rot)<(0.407))){
document.images[0].src=b[26].src;
};
//162
if((SinRot<0.952&&SinRot>0.950)&&(Math.cos(player2.rot)>(0.308)&&Math.cos(player2.rot)<(0.310))){
document.images[0].src=b[27].src;
};
//168
if((SinRot<0.979&&SinRot>0.977)&&(Math.cos(player2.rot)>(0.206)&&Math.cos(player2.rot)<(0.208))){
document.images[0].src=b[28].src;
};
//174
if((SinRot<0.995&&SinRot>0.993)&&(Math.cos(player2.rot)>(0.103)&&Math.cos(player2.rot)<(0.105))){
document.images[0].src=b[29].src;
};
//180
if(SinRot==1){
var ix=-kanonenCounter2+player2.x;
var iy=player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//186
if((Math.cos(player2.rot)>(-0.105)&&Math.cos(player2.rot)<(-0.103))&&(SinRot>(0.993)&&SinRot<(0.995))){
document.images[0].src=b[31].src;
};
//192
if((Math.cos(player2.rot)>(-0.208)&&Math.cos(player2.rot)<(-0.206))&&(SinRot>(0.977)&&SinRot<(0.979))){
document.images[0].src=b[32].src;
};
//198
if((Math.cos(player2.rot)>(-0.310)&&Math.cos(player2.rot)<(-0.308))&&(SinRot>(0.950)&&SinRot<(0.952))){
document.images[0].src=b[33].src;
};
//204
if((Math.cos(player2.rot)>(-0.407)&&Math.cos(player2.rot)<(-0.405))&&(SinRot>(0.912)&&SinRot<(0.914))){
document.images[0].src=b[34].src;
};
//210
if((Math.cos(player2.rot)>(-0.500)&&Math.cos(player2.rot)<(-0.498))&&(SinRot>(0.865)&&SinRot<(0.867))){
document.images[0].src=b[35].src;
};
//216
if((Math.cos(player2.rot)>(-0.588)&&Math.cos(player2.rot)<(-0.586))&&(SinRot>(0.808)&&SinRot<(0.810))){
document.images[0].src=b[36].src;
};
//222
if((Math.cos(player2.rot)>(-0.670)&&Math.cos(player2.rot)<(-0.668))&&(SinRot>(0.742)&&SinRot<(0.744))){
var ix=-kanonenCounter2+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//228
if((Math.cos(player2.rot)>(-0.744)&&Math.cos(player2.rot)<(-0.742))&&(SinRot>(0.668)&&SinRot<(0.670))){
var ix=-kanonenCounter2+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//234
if((Math.cos(player2.rot)>(-0.810)&&Math.cos(player2.rot)<(-0.808))&&(SinRot>(0.586)&&SinRot<(0.588))){
document.images[0].src=b[39].src;
};
//240
if((Math.cos(player2.rot)>(-0.867)&&Math.cos(player2.rot)<(-0.865))&&(SinRot>(0.498)&&SinRot<(0.500))){
document.images[0].src=b[40].src;
};
//246
if((Math.cos(player2.rot)>(-0.914)&&Math.cos(player2.rot)<(-0.912))&&(SinRot>(0.405)&&SinRot<(0.407))){
document.images[0].src=b[41].src;
};
//252
if((Math.cos(player2.rot)>(-0.952)&&Math.cos(player2.rot)<(-0.950))&&(SinRot>(0.308)&&SinRot<(0.310))){
document.images[0].src=b[42].src;
};
//258
if((Math.cos(player2.rot)>(-0.979)&&Math.cos(player2.rot)<(-0.977))&&(SinRot>(0.206)&&SinRot<(0.208))){
document.images[0].src=b[43].src;
};
//264
if((Math.cos(player2.rot)>(-0.995)&&Math.cos(player2.rot)<(-0.993))&&(SinRot>(0.103)&&SinRot<(0.105))){
document.images[0].src=b[44].src;
};
//270
if(Math.cos(player2.rot)==-1){
var ix=player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//276
if((SinRot>(-0.105)&&SinRot<(-0.103))&&(Math.cos(player2.rot)<(-0.993)&&Math.cos(player2.rot)>(-0.995))){
document.images[0].src=b[46].src;
};
//282
if((SinRot>(-0.208)&&SinRot<(-0.206))&&(Math.cos(player2.rot)<(-0.977)&&Math.cos(player2.rot)>(-0.979))){
document.images[0].src=b[47].src;
};
//288
if((SinRot>(-0.310)&&SinRot<(-0.308))&&(Math.cos(player2.rot)<(-0.950)&&Math.cos(player2.rot)>(-0.952))){
document.images[0].src=b[48].src;
};
//294
if((SinRot>(-0.407)&&SinRot<(-0.405))&&(Math.cos(player2.rot)<(-0.912)&&Math.cos(player2.rot)>(-0.914))){
document.images[0].src=b[49].src;
};
//300
if((SinRot>(-0.500)&&SinRot<(-0.498))&&(Math.cos(player2.rot)<(-0.865)&&Math.cos(player2.rot)>(-0.867))){
document.images[0].src=b[50].src;
};
//306
if((SinRot>(-0.588)&&SinRot<(-0.586))&&(Math.cos(player2.rot)<(-0.808)&&Math.cos(player2.rot)>(-0.810))){
document.images[0].src=b[51].src;
};
//312
if((SinRot>(-0.670)&&SinRot<(-0.668))&&(Math.cos(player2.rot)<(-0.742)&&Math.cos(player2.rot)>(-0.744))){
var ix=kanonenCounter2+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//318
if((SinRot>(-0.744)&&SinRot<(-0.742))&&(Math.cos(player2.rot)<(-0.668)&&Math.cos(player2.rot)>(-0.670))){
var ix=kanonenCounter2+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel1").style.left=(ix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(iy*FeldGroesse)+60+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel1").style.left=(ix*FeldGroesse)+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//324
if((SinRot>(-0.810)&&SinRot<(-0.808))&&(Math.cos(player2.rot)<(-0.586)&&Math.cos(player2.rot)>(-0.588))){
document.images[0].src=b[54].src;
};
//330
if((SinRot>(-0.867)&&SinRot<(-0.865))&&(Math.cos(player2.rot)<(-0.498)&&Math.cos(player2.rot)>(-0.500))){
document.images[0].src=b[55].src;
};
//336
if((SinRot>(-0.914)&&SinRot<(-0.912))&&(Math.cos(player2.rot)<(-0.405)&&Math.cos(player2.rot)>(-0.407))){
document.images[0].src=b[56].src;
};
//342
if((SinRot>(-0.952)&&SinRot<(-0.950))&&(Math.cos(player2.rot)<(-0.308)&&Math.cos(player2.rot)>(-0.310))){
document.images[0].src=b[57].src;
};
//348
if((SinRot>(-0.979)&&SinRot<(-0.977))&&(Math.cos(player2.rot)<(-0.206)&&Math.cos(player2.rot)>(-0.208))){
document.images[0].src=b[58].src;
};
//354
if((SinRot>(-0.995)&&SinRot<(-0.993))&&(Math.cos(player2.rot)<(-0.103)&&Math.cos(player2.rot)>(-0.105))){
document.images[0].src=b[59].src;
};


}
//bind keyboard events to game functions(movement,etc)
function bindKeys(){

	document.onkeydown=function(e){
		e=e || window.event;

		switch(e.keyCode){//which key was pressed?
//Player1
				case 78://"N",move player2 forward,ie. increase speed
				Kanone1();
				break;
				case 73://Curser-up,move player forward,ie. increase speed
				player.speed=1;
				player.moveSpeed=0.02;
				break;
				case 75://Curser-up,move player forward,ie. increase speed
				player.speed=0;
				player.moveSpeed=0;
				break;
			case 74://Curser-left,rotate player left
				player.dir=-1;
				break;

			case 76://Curser-right,rotate player right
				player.dir=1;
				break;
//Player2
				case 81://"Q",move player2 forward,ie. increase speed
				Kanone2();
				break;
				case 87://"W",move player2 forward,ie. increase speed
				player2.speed=1;
				player2.moveSpeed=0.02;
				break;
			case 83://"W",move player2 forward,ie. increase speed
				player2.speed=0;
				player2.moveSpeed=0;
				break;
			case 65://"A",rotate player2 left
				player2.dir=-1;
				break;

			case 68://"D",rotate player2 right
				player2.dir=1;
				break;
		}
	}
	document.onkeyup=function(e){
		e=e || window.event;

		switch(e.keyCode){
			case 65:
			case 68:
				player2.dir=0;////stop the player2 rotation when up/down key is released
				break;
		}
				switch(e.keyCode){
			case 74:
			case 76:
				player.dir=0;//stop the player rotation when up/down key is released
				break;
		}
	}
}
function gameCycle(){
	move();
	updateMiniMap();
}

function move(){

	var moveStep=player.speed*player.moveSpeed;
	player.rot +=player.dir*player.rotSpeed*Math.PI/180;
	var newX=player.x+Math.cos(player.rot)*moveStep;
	var newY=player.y+Math.sin(player.rot)*moveStep;
	if(isPassing(newX,newY,0)){
		player.speed=0;
		player.moveSpeed=0;
		return;
	}
	var moveStep2=player2.speed*player2.moveSpeed;
	player2.rot +=player2.dir*player2.rotSpeed*Math.PI/180;
	var newX2=player2.x+Math.cos(player2.rot)*moveStep2;
	var newY2=player2.y+Math.sin(player2.rot)*moveStep2;
	if(isPassing(newX2,newY2,0)){
		player2.speed=0;
		player2.moveSpeed=0;
		return;
	}
	if(isPassing(newX2,newY2,1)){
		$("HavannaP2").style.visibility='visible';
		player2.speed=0;
		player2.moveSpeed=0;
	}
	if(isPassing(newX2,newY2,2)){
		$("IschtukP2").style.visibility='visible';
		player2.speed=0;
		player2.moveSpeed=0;
	}
	if(isPassing(newX2,newY2,3)){
		$("HavannaP2").style.visibility='hidden';
		$("IschtukP2").style.visibility='hidden';
		$("IschtukP2Kontor").style.visibility='hidden';
		$("IschtukP2Hafen").style.visibility='hidden';
		$("IschtukP2Taverne").style.visibility='hidden';
		$("IschtukP2TaverneAnheuern").style.visibility='hidden';
		$("HavannaP2Kontor").style.visibility='hidden';
		$("HavannaP2Hafen").style.visibility='hidden';
		$("HavannaP2Taverne").style.visibility='hidden';
		$("HavannaP2TaverneAnheuern").style.visibility='hidden';
				if(IschtukP2AnheuernCounter>=1){
			IschtukP2AnheuernCounter=0;
//			$("IschtukP2Taverne").style.visibility='hidden';
//			$("IschtukP2Kontor").style.visibility='hidden';
//			$("IschtukP2Hafen").style.visibility='hidden';
			}
//			if(HavannaP2AnheuernCounter>=1){
//			HavannaP2AnheuernCounter=0;
//			$("HavannaP2Taverne").style.visibility='hidden';
//			}
}
	if(isPassing(newX2,newY2,4)){
	}
	if(isPassing(newX2,newY2,5)){
	}
	if(isPassing(newX,newY,1)){
		$("HavannaP1").style.visibility='visible';
		player.speed=0;
		player.moveSpeed=0;
	}
	if(isPassing(newX,newY,2)){
		$("IschtukP1").style.visibility='visible';
		player.speed=0;
		player.moveSpeed=0;
	}
	if(isPassing(newX,newY,3)){
		$("IschtukP1").style.visibility='hidden';
		$("HavannaP1").style.visibility='hidden';
		$("IschtukP1Kontor").style.visibility='hidden';
		$("IschtukP1Hafen").style.visibility='hidden';
		$("IschtukP1Taverne").style.visibility='hidden';
		$("IschtukP1TaverneAnheuern").style.visibility='hidden';
		$("HavannaP1Kontor").style.visibility='hidden';
		$("HavannaP1Hafen").style.visibility='hidden';
		$("HavannaP1Taverne").style.visibility='hidden';
		$("HavannaP1TaverneAnheuern").style.visibility='hidden';
			if(IschtukP1AnheuernCounter>=1){
		IschtukP1AnheuernCounter=0;
//		$("IschtukP1Taverne").style.visibility='hidden';
//		$("IschtukP1Kontor").style.visibility='hidden';

		}
//		if(HavannaP1AnheuernCounter>=1){
//		HavannaP1AnheuernCounter=0;
//		$("HavannaP1Taverne").style.visibility='hidden';
//		}
		}
	if(isPassing(newX,newY,4)){
	}
	if(isPassing(newX,newY,5)){
		}
	player.x=newX;
	player.y=newY;
	player2.x=newX2;
	player2.y=newY2;
}

function isPassing(x,y,wer){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0,ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > wer &&map[Math.floor(y)][Math.floor(x)] < (wer+2)); 
}
function updateMiniMap(){
	var playerScale=2;
	var player2Scale=2;
	var miniMap=$("minimap");
	var miniMapObjects=$("minimapobjects");

	var objectCtx=miniMapObjects.getContext("2d");
	miniMapObjects.width=miniMapObjects.width;
	//objectCtx.clearRect(0,0,miniMap.width,miniMap.height);
//Player1
	objectCtx.fillRect(		//draw a dot at the current player position
		player.x*miniMapScale - playerScale,
		player.y*miniMapScale - playerScale,
		playerScale*2,playerScale*2
	);
	objectCtx.beginPath();
	objectCtx.moveTo(player.x*miniMapScale,player.y*miniMapScale);
	objectCtx.lineTo(
		(player.x+Math.cos(player.rot)*4)*miniMapScale,
		(player.y+Math.sin(player.rot)*4)*miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
//Player2
	objectCtx.fillRect(		//draw a dot at the current player2 position
		player2.x*miniMapScale - player2Scale,
		player2.y*miniMapScale - player2Scale,
		player2Scale*2,player2Scale*2
	);
	objectCtx.beginPath();
	objectCtx.moveTo(player2.x*miniMapScale,player2.y*miniMapScale);
	objectCtx.lineTo(
		(player2.x+Math.cos(player2.rot)*4)*miniMapScale,
		(player2.y+Math.sin(player2.rot)*4)*miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
	moveDiv();
	Animation();
	Animation2()
}

function drawMiniMap(){

	//draw the topdown view minimap
	//$("MyDiv").style.left=(player.x*15)+'px';
	//$("MyDiv").style.top=(player.y*15)+'px';

	var miniMap=$("minimap");			//the actual map
	var miniMapCtr=$("minimapcontainer");		//the container div element
	var miniMapObjects=$("minimapobjects");	//the canvas used for drawing the objects on the map(player character,etc)

	miniMap.width=mapWidth*miniMapScale;	//resize the internal canvas dimensions 
	miniMap.height=mapHeight*miniMapScale;	//of both the map canvas and the object canvas
	miniMapObjects.width=miniMap.width;
	miniMapObjects.height=miniMap.height;

	var w=(mapWidth*miniMapScale)+"px" 	//minimap CSS dimensions
	var h=(mapHeight*miniMapScale)+"px"
	miniMap.style.width=miniMapObjects.style.width=miniMapCtr.style.width=w;
	miniMap.style.height=miniMapObjects.style.height=miniMapCtr.style.height=h;

	var ctx=miniMap.getContext("2d");

	ctx.fillStyle="white";
	ctx.fillRect(0,0,miniMap.width,miniMap.height);

	//loop through all blocks on the map
	for(var y=0;y<mapHeight;y++){
		for(var x=0;x<mapWidth;x++){

			var wall=map[y][x];

			if(wall > 0&&wall < 2){//if there is a wall block at this(x,y) ...
				ctx.fillStyle="rgb(120,210,240)";
				ctx.fillRect(				//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall > 1&&wall < 3){//if there is a wall block at this(x,y) ...
				ctx.fillStyle="rgb(0,210,0)";
				ctx.fillRect(				//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall > 5&&wall < 7){//if there is a wall block at this(x,y) ...

				ctx.fillStyle="rgb(255,0,0)";
				ctx.fillRect(				//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
		}
	}
	updateMiniMap();
}


function schiff1(){
$("Log1").style.visibility='visible';
}
function schiffZu1(){
$("Log1").style.visibility='hidden';
}
function schiff2(){
$("Log2").style.visibility='visible';
}
function schiffZu2(){
$("Log2").style.visibility='hidden';
}
//HavannaP1
function HavannaP1Exit(){
$('HavannaP1').style.visibility='hidden';
	player.x=22;
	player.y=19;
	player.rot=0;
	player.dir=0;
}
function HavannaP1Taverne(){
$("HavannaP1Taverne").style.visibility='visible';
if(HavannaP1AnheuernCounter<1){
$("HavannaP1TaverneAnheuern").style.visibility='visible';
}
}
function HavannaP1Anheuern(){
HavannaP1AnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(HavannaP1AnheuernCounter>0){
$("HavannaP1TaverneAnheuern").style.visibility='hidden';
}
}
function HavannaP1TaverneExit(){
$("HavannaP1Taverne").style.visibility='hidden';
$("HavannaP1TaverneAnheuern").style.visibility='hidden';

}
function HavannaP1Kontor(){
$("HavannaP1Kontor").style.visibility='visible';
}
function HavannaP1KontorExit(){
$("HavannaP1Kontor").style.visibility='hidden';
}
function HavannaP1KontorKaufen(){
	if((player.Geld-(HavannaP1.KaufKurs*10))>=0){
		HavannaP1.Geld+=HavannaP1.KaufKurs*10;
		HavannaP1.Nahrung-=10;
		player.Nahrung+=10;
		player.Geld-=HavannaP1.KaufKurs*10;
	}
}
function HavannaP1KontorVerkaufen(){
	if(player.Nahrung-10>=0){
		HavannaP1.Geld-=(HavannaP1.KaufKurs*.9)*10;
		HavannaP1.Nahrung+=10;
		player.Nahrung-=10;
		player.Geld+=(HavannaP1.KaufKurs*.9)*10;
	}
}

function HavannaP1Hafen(){
$("HavannaP1Hafen").style.visibility='visible';
}
function HavannaP1HafenExit(){
$("HavannaP1Hafen").style.visibility='hidden';
}
function HavannaP1HafenReparieren(){
	if((player.Geld-HavannaP1.ReparierKurs)>=0){
HavannaP1.Geld+=HavannaP1.ReparierKurs;
player.Geld-=HavannaP1.ReparierKurs;
bewegungsCounter-=500;
}
}
//HavannaP2
function HavannaP2Exit(){
$('HavannaP2').style.visibility='hidden';
	player2.x=22;
	player2.y=19;
	player2.rot=0;
	player2.dir=0;
}
function HavannaP2Taverne(){
$("HavannaP2Taverne").style.visibility='visible';
if(HavannaP2AnheuernCounter<1){
$("HavannaP2TaverneAnheuern").style.visibility='visible';
}
}

function HavannaP2Anheuern(){
HavannaP2AnheuernCounter+=1;
player2.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player2.Leute+'in deiner Crew');
if(HavannaP2AnheuernCounter>0){
$("HavannaP2TaverneAnheuern").style.visibility='hidden';
}
}
function HavannaP2TaverneExit(){
$("HavannaP2Taverne").style.visibility='hidden';
$("HavannaP2TaverneAnheuern").style.visibility='hidden';
}
function HavannaP2Kontor(){
$("HavannaP2Kontor").style.visibility='visible';
}
function HavannaP2KontorExit(){
$("HavannaP2Kontor").style.visibility='hidden';
}
function HavannaP2KontorKaufen(){
	if((player2.Geld-(HavannaP2.KaufKurs*10))>=0){
		HavannaP2.Geld+=HavannaP2.KaufKurs*10;
		HavannaP2.Nahrung-=10;
		player2.Nahrung+=10;
		player2.Geld-=HavannaP2.KaufKurs*10;
	}
}
function HavannaP2KontorVerkaufen(){
	if(player2.Nahrung-10>=0){
		HavannaP2.Geld-=(HavannaP2.KaufKurs*.9)*10;
		HavannaP2.Nahrung+=10;
		player2.Nahrung-=10;
		player2.Geld+=(HavannaP2.KaufKurs*.9)*10;
	}
}

function HavannaP2Hafen(){
$("HavannaP2Hafen").style.visibility='visible';
}
function HavannaP2HafenExit(){
$("HavannaP2Hafen").style.visibility='hidden';
}
function HavannaP2HafenReparieren(){
	if((player2.Geld-HavannaP2.ReparierKurs)>=0){
		HavannaP2.Geld+=HavannaP2.ReparierKurs;
		player2.Geld-=HavannaP2.ReparierKurs;
		bewegungsCounter2-=500;
}
}
//IschtukP1
function IschtukP1Exit(){
$('IschtukP1').style.visibility='hidden';
	player.x=13;
	player.y=13;
	player.rot=0;
	player.dir=0;
}
function IschtukP1Taverne(){
$("IschtukP1Taverne").style.visibility='visible';
if(IschtukP1AnheuernCounter<1){
$("IschtukP1TaverneAnheuern").style.visibility='visible';
}
}
function IschtukP1Anheuern(){
IschtukP1AnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(IschtukP1AnheuernCounter>0){
$("IschtukP1TaverneAnheuern").style.visibility='hidden';
}
}
function IschtukP1TaverneExit(){
$("IschtukP1Taverne").style.visibility='hidden';
}
function IschtukP1Kontor(){
$("IschtukP1Kontor").style.visibility='visible';
}
function IschtukP1KontorExit(){
$("IschtukP1Kontor").style.visibility='hidden';
}
function IschtukP1KontorKaufen(){
	if((player.Geld-(IschtukP1.KaufKurs*10))>=0){
		IschtukP1.Geld+=IschtukP1.KaufKurs*10;
		IschtukP1.Nahrung-=10;
		player.Nahrung+=10;
		player.Geld-=IschtukP1.KaufKurs*10;
	}
}
function IschtukP1KontorVerkaufen(){
if(player.Nahrung-10>=0){
	IschtukP1.Geld-=(IschtukP1.KaufKurs*.9)*10;
	IschtukP1.Nahrung+=10;
	player.Nahrung-=10;
	player.Geld+=(IschtukP1.KaufKurs*.9)*10;
}
}
function IschtukP1Hafen(){
$("IschtukP1Hafen").style.visibility='visible';
}
function IschtukP1HafenExit(){
$("IschtukP1Hafen").style.visibility='hidden';
}
function IschtukP1HafenReparieren(){
	if((player.Geld-IschtukP1.ReparierKurs)>=0){
		IschtukP1.Geld+=IschtukP1.ReparierKurs;
		player.Geld-=IschtukP1.ReparierKurs;
		bewegungsCounter-=500;
	}
}
//IschtukP2
function IschtukP2Exit(){
$('IschtukP2').style.visibility='hidden';
	player2.x=13;
	player2.y=13;
	player2.rot=0;
	player2.dir=0;
}
function IschtukP2Taverne(){
$("IschtukP2Taverne").style.visibility='visible';
if(IschtukP2AnheuernCounter<1){
$("IschtukP2TaverneAnheuern").style.visibility='visible';
}
}
function IschtukP2Anheuern(){
IschtukP2AnheuernCounter+=1;
player2.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player2.Leute+'in deiner Crew');
if(IschtukP2AnheuernCounter>0){
$("IschtukP2TaverneAnheuern").style.visibility='hidden';
}
}
function IschtukP2TaverneExit(){
$("IschtukP2Taverne").style.visibility='hidden';
$("IschtukP2TaverneAnheuern").style.visibility='hidden';
}
function IschtukP2Kontor(){
$("IschtukP2Kontor").style.visibility='visible';
}
function IschtukP2KontorExit(){
$("IschtukP2Kontor").style.visibility='hidden';
}
function IschtukP2KontorKaufen(){
	if((player2.Geld-(IschtukP2.KaufKurs*10))>=0){
		IschtukP2.Geld+=IschtukP2.KaufKurs*10;
		IschtukP2.Nahrung-=10;
		player2.Nahrung+=10;
		player2.Geld-=IschtukP2.KaufKurs*10;
	}
}
function IschtukP2KontorVerkaufen(){
	if(player2.Nahrung-10>=0){
		IschtukP2.Geld-=(IschtukP2.KaufKurs*.9)*10;
		IschtukP2.Nahrung+=10;
		player2.Nahrung-=10;
		player2.Geld+=(IschtukP2.KaufKurs*.9)*10;
	}
}

function IschtukP2Hafen(){
$("IschtukP2Hafen").style.visibility='visible';
}
function IschtukP2HafenExit(){
$("IschtukP2Hafen").style.visibility='hidden';
}
function IschtukP2HafenReparieren(){
	if((player2.Geld-IschtukP2.ReparierKurs)>=0){
IschtukP2.Geld+=IschtukP2.ReparierKurs;
player2.Geld-=IschtukP2.ReparierKurs;
bewegungsCounter2-=500;
}
}
function IschtukP2Governour(){
$("IschtukP2Governour").style.visibility='visible';
}
function IschtukP2GovernourExit(){
$("IschtukP2Governour").style.visibility='hidden';
}
function IschtukP2GovernourInfo(){
}
function IschtukP2GovernourHome(){
}

