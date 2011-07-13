var MaximalLadung=10000;
var Maximum=359;
var Minimum=0;
var ZufallsZahl=0;
var imageFolder='images/';
var SequenzCounter=0;


//Konstanten
//nach: zeigt an dass es auf Grad bezogen wird

//+Ausrichtung
//als Vektor
var nachUnten=1;
var nachOben=-1;
var nachLinks=-1;
var nachRechts=1;
//in Grad
var Unten=180;
var Oben=0;
var Links=270;
var Rechts=90;
//-Ausrichtung

//+Position
//als Vektor
var Hoch=-1;
var Runter=1;
var Links=-1;
var Rechts=1;

var zoom=1;

Zoom=function(wert){
zoom+=0.1*wert;
}
FeldGroesse=function(){
	return((window.innerWidth/map[0].length)*zoom);
}
alert(FeldGroesse());
var HavannaP1AnheuernCounter=0;
var HavannaP2AnheuernCounter=0;
var IschtukP1AnheuernCounter=0;
var IschtukP2AnheuernCounter=0;
var ulfne=0;
var Windrichtung=40;
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
	id:'player2',
	dir : 0,		//the direction that the player is turning,either -1 for left or 1 for right.
	rot : 0,		//the current angle of rotation
	speed : 1,		//is the playing moving forward(speed=1) or backwards(speed=-1).
	Beschleunigung: 0.3,
	moveSpeed : 0.06,	//how far(in map units) does the player move each step/update
	rotSpeed : 6,		//how much does the player rotate each step/update(in degrees)

	Kaffee:5,
	Tabak:4,
	Zuckerrohr:4,
	Rum:32,
	Baumwolle:2,
	Perlen:356,
	Segeltuch:9,
	Hanf:4,
	Teer:20,
	Holz:23,
	Pulver:50,
	Kugeln:60,
	Kanonen:8,


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
	KaufKurs:4,
	Kaffee:5,
	Tabak:4,
	Zuckerrohr:4,
	Rum:32,
	Baumwolle:2,
	Perlen:356,
	Segeltuch:9,
	Hanf:4,
	Teer:20,
	Holz:23,
	Pulver:50,
	Kugeln:60,
	Kanonen:414,

}
var HavannaP2={
	Leute:600,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:4,
	Kaffee:5,
	Tabak:4,
	Zuckerrohr:4,
	Rum:32,
	Baumwolle:2,
	Perlen:356,
	Segeltuch:9,
	Hanf:4,
	Teer:20,
	Holz:23,
	Pulver:50,
	Kugeln:60,
	Kanonen:414,

}
var IschtukP2Waren={
	id:'IschtukP2Waren',
	Leute:200,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:5,
	KaufKurs:5,
	Kaffee:5,
	Tabak:4,
	Zuckerrohr:4,
	Rum:32,
	Baumwolle:2,
	Perlen:356,
	Segeltuch:9,
	Hanf:4,
	Teer:20,
	Holz:23,
	Pulver:50,
	Kugeln:60,
	Kanonen:414,

}
var IschtukP2Preise={
	id:'IschtukP2Preise',

	Nahrung:15,
	Kaffee:15,
	Tabak:14,
	Zuckerrohr:14,
	Rum:32,
	Baumwolle:12,
	Perlen:356,
	Segeltuch:9,
	Hanf:4,
	Teer:20,
	Holz:23,
	Pulver:50,
	Kugeln:60,
	Kanonen:414,
	
}
var IschtukP2Gewicht={
	id:'IschtukP2Gewicht',
	Nahrung:5,
	Kaffee:5,
	Tabak:5,
	Zuckerrohr:5,
	Rum:5,
	Baumwolle:5,
	Perlen:1,
	Segeltuch:10,
	Hanf:10,
	Teer:10,
	Holz:10,
	Pulver:50,
	Kugeln:50,
	Kanonen:200,
	
}



var mapWidth=0;
var mapHeight=0;
var miniMapScale=0.0001;



function GroessenCheck(){

}
function Oberinit(){
alert(player2.rot);
window.onresize=moveDiv;
	warenliste=new Array(IschtukP2Waren,player2);
	preisliste=new Array(IschtukP2Preise);
}

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
	if(KielCounter==6){
		Kielwasser();
		updateMiniMap();
	}
	if(KielCounter>6){
		KielCounter=0;
	}
	if(GameCounter==1){
		gameCycle();
	}
	if(GameCounter>=1){
		GameCounter=0;
	}
	if(RefreshCounter==1){
		refresher();
	}
	if(RefreshCounter>=100){
		RefreshCounter=0;
	}
window.setTimeout(Sequenzer,1);
}

kaufen=function(that,what,ware,menge,wertenderung){

var IschtukP2GesamtGewicht=((player2.Kaffee*IschtukP2Gewicht.Kaffee)+(player2.Tabak*IschtukP2Gewicht.Tabak)+(player2.Zuckerrohr*IschtukP2Gewicht.Zuckerrohr)+(player2.Rum*IschtukP2Gewicht.Rum)+(player2.Baumwolle*IschtukP2Gewicht.Baumwolle)+(player2.Perlen*IschtukP2Gewicht.Perlen)+(player2.Segeltuch*IschtukP2Gewicht.Segeltuch)+(player2.Hanf*IschtukP2Gewicht.Hanf)+(player2.Teer*IschtukP2Gewicht.Teer)+(player2.Holz*IschtukP2Gewicht.Holz)+(player2.Pulver*IschtukP2Gewicht.Pulver)+(player2.Kugeln*IschtukP2Gewicht.Kugeln)+(player2.Kanonen*IschtukP2Gewicht.Kanonen)+(player2.Nahrung*IschtukP2Gewicht.Nahrung));

	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
					
					if(ware=='Kaffee'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Kaffee*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kaffee*menge>=0){
						alert(ware);
						warenliste[i].Kaffee+=menge;
						warenliste[i].Geld-=preisliste[j].Kaffee*menge;
						preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Tabak'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Tabak*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Tabak*menge>=0){
							warenliste[i].Tabak+=menge;
							warenliste[i].Geld-=preisliste[j].Tabak*menge;
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Zuckerrohr*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Zuckerrohr*menge>=0){
							warenliste[i].Zuckerrohr+=menge;
							warenliste[i].Geld-=preisliste[j].Zuckerrohr*menge;
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Rum'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Rum*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Rum*menge>=0){
							warenliste[i].Rum+=menge;
							warenliste[i].Geld-=preisliste[j].Rum*menge;
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Baumwolle*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Baumwolle*menge>=0){
							warenliste[i].Baumwolle+=menge;
							warenliste[i].Geld-=preisliste[j].Baumwolle*menge;
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Perlen'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Perlen*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Perlen*menge>=0){
							warenliste[i].Perlen+=menge;
							warenliste[i].Geld-=preisliste[j].Perlen*menge;
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Segeltuch*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Segeltuch*menge>=0){
							warenliste[i].Segeltuch+=menge;
							warenliste[i].Geld-=preisliste[j].Segeltuch*menge;
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Hanf'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Hanf*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Hanf*menge>=0){
							warenliste[i].Hanf+=menge;
							warenliste[i].Geld-=preisliste[j].Hanf*menge;
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Teer'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Teer*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Teer*menge>=0){
							warenliste[i].Teer+=menge;
							warenliste[i].Geld-=preisliste[j].Teer*menge;
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Holz'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Holz*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Holz*menge>=0){
							warenliste[i].Holz+=menge;
							warenliste[i].Geld-=preisliste[j].Holz*menge;
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Pulver'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Pulver*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Pulver*menge>=0){
							warenliste[i].Pulver+=menge;
							warenliste[i].Geld-=preisliste[j].Pulver*menge;
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Kugeln'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Kugeln*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kugeln*menge>=0){
							warenliste[i].Kugeln+=menge;
							warenliste[i].Geld-=preisliste[j].Kugeln*menge;
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(3);
						}
						}
					}
					if(ware=='Kanonen'){
						if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Kanonen*menge)<=MaximalLadung){
							if(warenliste[i].Geld-preisliste[j].Kanonen*menge>=0){
								warenliste[i].Kanonen+=menge;
								warenliste[i].Geld-=preisliste[j].Kanonen*menge;
								preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(3);
							}
						}
					}
					if(ware=='Nahrung'){
					if(IschtukP2GesamtGewicht+(IschtukP2Gewicht.Nahrung*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Nahrung*menge>=0){
							warenliste[i].Nahrung+=menge;
							warenliste[i].Geld-=preisliste[j].Nahrung*menge;
							preisliste[j].Nahrung=(preisliste[j].Nahrung*wertenderung).toFixed(3);
						}
						}
					}
				}
			}
		}
	}
}

verkaufen=function(that,what,ware,menge,wertenderung){
	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
				
					if(ware=='Kaffee'){
						if(warenliste[i].Kaffee-menge>=0){
							warenliste[i].Kaffee-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kaffee*menge);
							preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(3);
							
						}
					}
					if(ware=='Tabak'){
						if(warenliste[i].Tabak-menge>=0){
							warenliste[i].Tabak-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Tabak*menge);
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(3);
						}
					}
					if(ware=='Zuckerrohr'){
						if(warenliste[i].Zuckerrohr-menge>=0){
							warenliste[i].Zuckerrohr-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Zuckerrohr*menge);
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(3);
						}
					}
					if(ware=='Rum'){
						if(warenliste[i].Rum-menge>=0){
							warenliste[i].Rum-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Rum*menge);
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(3);
						}
					}
					if(ware=='Baumwolle'){
						if(warenliste[i].Baumwolle-menge>=0){
							warenliste[i].Baumwolle-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Baumwolle*menge);
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(3);
						}
					}
					if(ware=='Perlen'){
						if(warenliste[i].Perlen-menge>=0){
							warenliste[i].Perlen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Perlen*menge);
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(3);
						}
					}
					if(ware=='Segeltuch'){
						if(warenliste[i].Segeltuch-menge>=0){
							warenliste[i].Segeltuch-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Segeltuch*menge);
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(3);
						}
					}
					if(ware=='Hanf'){
						if(warenliste[i].Hanf-menge>=0){
							warenliste[i].Hanf-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Hanf*menge);
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(3);
						}
					}
					if(ware=='Teer'){
						if(warenliste[i].Teer-menge>=0){
							warenliste[i].Teer-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Teer*menge);
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(3);
						}
					}
					if(ware=='Holz'){
						if(warenliste[i].Holz-menge>=0){
							warenliste[i].Holz-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Holz*menge);
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(3);
						}
					}
					if(ware=='Pulver'){
						if(warenliste[i].Pulver-menge>=0){
							warenliste[i].Pulver-=menge;
							warenliste[i].Geld=eval(preisliste[j].Pulver*menge);
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(3);
						}
					}
					if(ware=='Kugeln'){
						if(warenliste[i].Kugeln-menge>=0){
							warenliste[i].Kugeln-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kugeln*menge);
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(3);
						}
					}
					if(ware=='Kanonen'){
						if(warenliste[i].Kanonen-menge>=0){
							warenliste[i].Kanonen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kanonen*menge);
							preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(3);
						}
					}
					if(ware=='Nahrung'){
						if(warenliste[i].Nahrung-menge>=0){
							warenliste[i].Nahrung-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Nahrung*menge);
							preisliste[j].Nahrung=(preisliste[j].Nahrung*wertenderung).toFixed(3);
						}
					}
				}
			}
		}
	}
}
/*$("player2KaffeeMenge").value=player2.Kaffee;
$("player2TabakMenge").value=player2.Tabak;
$("player2ZuckerrohrMenge").value=player2.Zuckerrohr;
$("player2RumMenge").value=player2.Rum;
$("player2BaumwolleMenge").value=player2.Baumwolle;
$("player2PerlenMenge").value=player2.Perlen;
$("player2SegeltuchMenge").value=player2.Segeltuch;
$("player2HanfMenge").value=player2.Hanf;
$("player2TeerMenge").value=player2.Teer;
$("player2HolzMenge").value=player2.Holz;
$("player2PulverMenge").value=player2.Pulver;
$("player2KugelnMenge").value=player2.Kugeln;
$("player2KanonenMenge").value=player2.Kanonen;
$("player2NahrungMenge").value=player2.Nahrung;
$("player2GeldMenge").value=player2.Geld;
*/

function refresher(){
	$("Leute1").value=player.Leute;
	$("Geld1").value=player.Geld;
	$("Nahrung1").value=player.Nahrung;
	$("LogLeute").value=player2.Leute;
	$("LogGeld").value=player2.Geld;
	$("LogNahrung").value=player2.Nahrung;
	$("LogKaffee").value=player2.Kaffee;
	$("LogTabak").value=player2.Tabak;
	$("LogZuckerrohr").value=player2.Zuckerrohr;
	$("LogRum").value=player2.Rum;
	$("LogBaumwolle").value=player2.Baumwolle;
	$("LogPerlen").value=player2.Perlen;
	$("LogSegeltuch").value=player2.Segeltuch;
	$("LogHanf").value=player2.Hanf;
	$("LogTeer").value=player2.Teer;
	$("LogHolz").value=player2.Holz;
	$("LogPulver").value=player2.Pulver;
	$("LogKugeln").value=player2.Kugeln;
	$("LogKanonen").value=player2.Kanonen;

	$("HavannaP1Leute").value=HavannaP1.Leute;
	$("HavannaP1Geld").value=HavannaP1.Geld;
	$("HavannaP1Nahrung").value=HavannaP1.Nahrung;
	$("HavannaP2Leute").value=HavannaP2.Leute;
	$("HavannaP2Geld").value=HavannaP2.Geld;
	$("HavannaP2Nahrung").value=HavannaP2.Nahrung;

	$("IschtukP1Leute").value=IschtukP1.Leute;
	$("IschtukP1Geld").value=IschtukP1.Geld;
	$("IschtukP1Nahrung").value=IschtukP1.Nahrung;
	$("IschtukP2Leute").value=IschtukP2Waren.Leute;
	$("IschtukP2Geld").value=IschtukP2Waren.Geld;
	$("IschtukP2Nahrung").value=IschtukP2Waren.Nahrung;
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
	$(id).style.left=(from.x*FeldGroesse())+'px';//75 entspricht x.offset für gewuenschtes zentrum(vorderer Mast des Schiffes)
	$(id).style.top=(from.y*FeldGroesse())+'px';//70 entspricht y.offset für gewuenschtes zentrum(vorderer Mast des Schiffes)
}
function init(){
	mapWidth=map[0].length;
	mapHeight=map.length;
	bindKeys();
	drawMiniMap();
}
//Move-Div() bersetzt die Werte aus dem javagott-script in die Divs und Inputs im HTM-Bereich



function moveDiv(){

//wolken();

$('MyDiv').style.width=FeldGroesse()+'px';
$('MyDiv').style.height=FeldGroesse()+'px';
$('MyDiv2').style.width=FeldGroesse()+'px';
$('MyDiv2').style.height=FeldGroesse()+'px';


$('Insel').style.top=13*FeldGroesse()+'px';
$('Insel').style.left=11*FeldGroesse()+'px';

$('Insel').style.height=10*FeldGroesse()+'px';
$('Insel').style.width=10*FeldGroesse()+'px';

$('Karte').style.height=48*FeldGroesse()+'px';
$('Karte').style.width=70*FeldGroesse()+'px';

$('Karte').style.top=0*FeldGroesse()+'px';
$('Karte').style.left=0*FeldGroesse()+'px';

$('Wolke1').style.height=10*FeldGroesse()+'px';
$('Wolke1').style.width=10*FeldGroesse()+'px';

$('Wolke2').style.height=10*FeldGroesse()+'px';
$('Wolke2').style.width=10*FeldGroesse()+'px';

$('Wolke3').style.height=10*FeldGroesse()+'px';
$('Wolke3').style.width=10*FeldGroesse()+'px';

$('GewitterWolke').style.height=10*FeldGroesse()+'px';
$('GewitterWolke').style.width=10*FeldGroesse()+'px';

$('Kugel2').style.height=1*FeldGroesse()+'px';
$('Kugel2').style.width=1*FeldGroesse()+'px';

$('KompassNadel').style.top=10*FeldGroesse()+'px';
$('KompassNadel').style.left=10*FeldGroesse()+'px';

$('KompassNadel').style.height=10*FeldGroesse()+'px';
$('KompassNadel').style.width=10*FeldGroesse()+'px';

for(var i=1;i<10;i++){
	var id='WasserEinschlagb'+i.toString();
$(id).style.height=1*FeldGroesse()+'px';
$(id).style.width=1*FeldGroesse()+'px';
}


for(var i=1;i<20;i++){
	var id='KielWasser'+i.toString();
	$(id).style.height=parseInt(FeldGroesse())+'px';
	$(id).style.width=parseInt(FeldGroesse())+'px';
	var id='KielWasser'+'b'+i.toString();
	$(id).style.height=parseInt(1*FeldGroesse())+'px';
	$(id).style.width=parseInt(1*FeldGroesse())+'px';
}

var IschtukP2GesamtGewicht=((player2.Kaffee*IschtukP2Gewicht.Kaffee)+(player2.Tabak*IschtukP2Gewicht.Tabak)+(player2.Zuckerrohr*IschtukP2Gewicht.Zuckerrohr)+(player2.Rum*IschtukP2Gewicht.Rum)+(player2.Baumwolle*IschtukP2Gewicht.Baumwolle)+(player2.Perlen*IschtukP2Gewicht.Perlen)+(player2.Segeltuch*IschtukP2Gewicht.Segeltuch)+(player2.Hanf*IschtukP2Gewicht.Hanf)+(player2.Teer*IschtukP2Gewicht.Teer)+(player2.Holz*IschtukP2Gewicht.Holz)+(player2.Pulver*IschtukP2Gewicht.Pulver)+(player2.Kugeln*IschtukP2Gewicht.Kugeln)+(player2.Kanonen*IschtukP2Gewicht.Kanonen)+(player2.Nahrung*IschtukP2Gewicht.Nahrung));

$("player2GesamtGewicht").value=IschtukP2GesamtGewicht;


$("player2KaffeeMenge").value=player2.Kaffee;
$("player2TabakMenge").value=player2.Tabak;
$("player2ZuckerrohrMenge").value=player2.Zuckerrohr;
$("player2RumMenge").value=player2.Rum;
$("player2BaumwolleMenge").value=player2.Baumwolle;
$("player2PerlenMenge").value=player2.Perlen;
$("player2SegeltuchMenge").value=player2.Segeltuch;
$("player2HanfMenge").value=player2.Hanf;
$("player2TeerMenge").value=player2.Teer;
$("player2HolzMenge").value=player2.Holz;
$("player2PulverMenge").value=player2.Pulver;
$("player2KugelnMenge").value=player2.Kugeln;
$("player2KanonenMenge").value=player2.Kanonen;
$("player2NahrungMenge").value=player2.Nahrung;
$("player2GeldMenge").value=player2.Geld.toFixed(3);

$("IschtukP2KaffeePreis").value=IschtukP2Preise.Kaffee;
$("IschtukP2TabakPreis").value=IschtukP2Preise.Tabak;
$("IschtukP2ZuckerrohrPreis").value=IschtukP2Preise.Zuckerrohr;
$("IschtukP2RumPreis").value=IschtukP2Preise.Rum;
$("IschtukP2BaumwollePreis").value=IschtukP2Preise.Baumwolle;
$("IschtukP2PerlenPreis").value=IschtukP2Preise.Perlen;
$("IschtukP2SegeltuchPreis").value=IschtukP2Preise.Segeltuch;
$("IschtukP2HanfPreis").value=IschtukP2Preise.Hanf;
$("IschtukP2TeerPreis").value=IschtukP2Preise.Teer;
$("IschtukP2HolzPreis").value=IschtukP2Preise.Holz;
$("IschtukP2PulverPreis").value=IschtukP2Preise.Pulver;
$("IschtukP2KugelnPreis").value=IschtukP2Preise.Kugeln;
$("IschtukP2KanonenPreis").value=IschtukP2Preise.Kanonen;
$("IschtukP2NahrungPreis").value=IschtukP2Preise.Nahrung;

var playerMoveSpeedMax=0.04;
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

if(Windrichtung>=nachRechts&&Windrichtung<nachUnten&&playerObenLinks){
player.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=nachRechts&&Windrichtung<nachUnten&&playerObenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=nachRechts&&Windrichtung<nachUnten&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=nachRechts&&Windrichtung<nachUnten&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedMax;
}


if(Windrichtung>=nachUnten&&Windrichtung<nachLinks&&playerObenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=nachUnten&&Windrichtung<nachLinks&&playerObenRechts){
player.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=nachUnten&&Windrichtung<nachLinks&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=nachUnten&&Windrichtung<nachLinks&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}


if(Windrichtung>=nachLinks&&Windrichtung<360&&playerObenLinks){
player.moveSpeed=playerMoveSpeedMax;
}
if(Windrichtung>=nachLinks&&Windrichtung<360&&playerObenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=nachLinks&&Windrichtung<360&&playerUntenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=nachLinks&&Windrichtung<360&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedEinzehntel;
}

//player2
var cosi=Math.cos(player2.rot);
var sini=Math.sin(player2.rot);
for(var i=0;i<91;i++){
switch(Windrichtung){

case i:
	if (cosi<0&&sini<0){
		player2.moveSpeed=playerMoveSpeedHalb;
	}
	
	if(cosi<0&&sini>0){
	player2.moveSpeed=playerMoveSpeedEinzehntel;
	}

	if(cosi>0&&sini<0){
	player2.moveSpeed=playerMoveSpeedMax;
	}

	if(cosi>0&&sini>0){
	player2.moveSpeed=playerMoveSpeedHalb;
	}
case i:
	if (cosi<0&&sini<0){
		player2.moveSpeed=playerMoveSpeedEinzehntel;
	}
	
	if(cosi<0&&sini>0){
	player2.moveSpeed=playerMoveSpeedHalb;
	}

	if(cosi>0&&sini<0){
	player2.moveSpeed=playerMoveSpeedHalb;
	}

	if(cosi>0&&sini>0){
	player2.moveSpeed=playerMoveSpeedMax;
	}
case i:
	if (cosi<0&&sini<0){
		player2.moveSpeed=playerMoveSpeedHalb;
	}
	
	if(cosi<0&&sini>0){
	player2.moveSpeed=playerMoveSpeedMax;
	}

	if(cosi>0&&sini<0){
	player2.moveSpeed=playerMoveSpeedEinzehntel;
	}

	if(cosi>0&&sini>0){
	player2.moveSpeed=playerMoveSpeedHalb;
	}
case i:
	if (cosi<0&&sini<0){
		player2.moveSpeed=playerMoveSpeedMax
	}
	
	if(cosi<0&&sini>0){
	player2.moveSpeed=playerMoveSpeedHalb;
	}

	if(cosi>0&&sini<0){
	player2.moveSpeed=playerMoveSpeedHalb;
	}

	if(cosi>0&&sini>0){
	player2.moveSpeed=playerMoveSpeedEinzehntel;
	}

break;
}
}
$("MyDiv").style.left=(player.x*FeldGroesse())+'px';
$("MyDiv").style.top=(player.y*FeldGroesse())+'px';
$("Pirat1").style.left=(Pirat1.x*FeldGroesse())+'px';
$("Pirat1").style.top=(Pirat1.y*FeldGroesse())+'px';
$("MyDiv2").style.left=(player2.x*FeldGroesse())+'px';
$("MyDiv2").style.top=(player2.y*FeldGroesse())+'px';
$("bewegungsCounter").value=bewegungsCounter;
$("bewegungsCounter2").value=bewegungsCounter2;
if(player.speed==1){
bewegungsCounter+=1;
}
if(player2.speed==1){
bewegungsCounter2+=1;
}

var weltpuffery=0;
var weltpufferx=0;

	weltpuffery=parseInt((window.innerWidth/2)-(player2.y*FeldGroesse()));
	weltpufferx=parseInt((window.innerHeight/2)-(player2.x*FeldGroesse()));
$('Welt').style.top=weltpuffery+'px';
$('Welt').style.left=weltpufferx+'px';
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

//bind keyboard events to game functions(movement,etc)
function bindKeys(){

	document.onkeydown=function(e){
		e=e || window.event;

		switch(e.keyCode){//which key was pressed?

				case 88://"X",move player2 forward,ie. increase speed
				Zoom(1);
				
				
				
				break;
				case 89://"Y",move player2 forward,ie. increase speed
				Zoom(-1);
				
				
				break;

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
		//$("IschtukP2TaverneLeute").style.visibility='hidden';
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
$("IschtukP2TaverneLeute").style.visibility='visible';
}
}
function IschtukP2Anheuern(){
IschtukP2AnheuernCounter+=1;
player2.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player2.Leute+'in deiner Crew');
if(IschtukP2AnheuernCounter>0){
$("IschtukP2TaverneLeute").style.visibility='hidden';
}
}
function IschtukP2TaverneExit(){
$("IschtukP2Taverne").style.visibility='hidden';
$("IschtukP2TaverneLeute").style.visibility='hidden';
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

