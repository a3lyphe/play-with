var FeldGroesse=17;
var AnheuernHavannaCounter=0;
var AnheuernHavanna2Counter=0;
var AnheuernIschtukCounter=0;
var AnheuernIschtuk2Counter=0;
var ulfne=0;
var Windrichtung=180;
var WindCounter=0;
var KielWasserCounter=0;
var KielWasserbCounter=0;
var bewegungsCounter=0;
var bewegungsCounter2=0;
var $=function(id){ return document.getElementById(id); };
var dc=function(tag){ return document.createElement(tag); };
var map=[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,4,4,3,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,4,4,3,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,4,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var player={
	x : 30,			//current x, y position
	y : 30,
	dir : 0,		//the direction that the player is turning, either -1 for left or 1 for right.
	rot : 0,		//the current angle of rotation
	speed : 1,		//is the playing moving forward(speed=1) or backwards(speed=-1).
	Beschleunigung: 0.3,
	moveSpeed : 0.06,	//how far(in map units) does the player move each step/update
	rotSpeed : 6,		//how much does the player rotate each step/update(in degrees)
	Leute:100,
	Geld:234,
	Nahrung:45
	}
var player2={
	x : 8,			//current x, y position
	y : 8,
	dir : 0,		//the direction that the player is turning, either -1 for left or 1 for right.
	rot : 0,		//the current angle of rotation
	speed : 1,		//is the playing moving forward(speed=1) or backwards(speed=-1).
	Beschleunigung: 0.3,
	moveSpeed : 0.06,	//how far(in map units) does the player move each step/update
	rotSpeed : 6,		//how much does the player rotate each step/update(in degrees)
	Leute:60,
	Geld:734,
	Nahrung:45
}
var Havanna={
	Leute:600,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:0.5,
	KaufKurs:4
}
var Havanna2={
	Leute:600,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:0.5,
	KaufKurs:4
}
var Ischtuk={
	Leute:200,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:0.5,
	KaufKurs:5
}
var Ischtuk2={
	Leute:200,
	Geld:1734,
	Nahrung:1545,
	ReparierKurs:0.5,
	KaufKurs:5
}
var mapWidth=0;
var mapHeight=0;

var miniMapScale=0.01;

var wellenCounter=0;

function WindHoseInit(){
WindCounter+=1;
WindHose();
window.setTimeout(WindHoseInit,1000);
}

function WindHose(){
if(WindCounter=2){
document.getElementById("WindHose").value=Math.random()*36-Math.random()*36;
ulfne=parseInt(document.getElementById("WindHose").value)+parseInt(document.getElementById("WindRichtung").value);
document.getElementById("WindRichtung").value=ulfne;

if(document.getElementById("WindRichtung").value<0){
document.getElementById("WindRichtung").value=359;
}
if(document.getElementById("WindRichtung").value>359){
document.getElementById("WindRichtung").value=0;
}
if(WindCounter=3){
WindCounter=0;
}
}
}
function OberInit(){
document.getElementById("Leute1").value=player.Leute;
document.getElementById("Geld1").value=player.Geld;
document.getElementById("Nahrung1").value=player.Nahrung;
document.getElementById("Leute2").value=player2.Leute;
document.getElementById("Geld2").value=player2.Geld;
document.getElementById("Nahrung2").value=player2.Nahrung;

document.getElementById("LeuteHavanna").value=Havanna.Leute;
document.getElementById("GeldHavanna").value=Havanna.Geld;
document.getElementById("NahrungHavanna").value=Havanna.Nahrung;
document.getElementById("LeuteHavanna2").value=Havanna2.Leute;
document.getElementById("GeldHavanna2").value=Havanna2.Geld;
document.getElementById("NahrungHavanna2").value=Havanna2.Nahrung;

document.getElementById("LeuteIschtuk").value=Ischtuk.Leute;
document.getElementById("GeldIschtuk").value=Ischtuk.Geld;
document.getElementById("NahrungIschtuk").value=Ischtuk.Nahrung;
document.getElementById("LeuteIschtuk2").value=Ischtuk2.Leute;
document.getElementById("GeldIschtuk2").value=Ischtuk2.Geld;
document.getElementById("NahrungIschtuk2").value=Ischtuk2.Nahrung;

KielWasserCounter+=1;
	FootPrint('KielWasser',KielWasserCounter,player);
	if(KielWasserCounter==8){
		KielWasserCounter=0;
	}	

	KielWasserbCounter+=1;
	FootPrint('KielWasserb',KielWasserbCounter,player2);
	if(KielWasserbCounter==8){
		KielWasserbCounter=0;
	}

	window.setTimeout(OberInit,350);
}
/*
function FootPrint(that,much,from){
	var id=that.toString()+much.toString();
	document.getElementById(id).style.left=(from.x*FeldGroesse)+75+'px';//75 entspricht x.offset f�r gewuenschtes zentrum(vorderer Mast des Schiffes)
	document.getElementById(id).style.top=(from.y*FeldGroesse)+70+'px';//70 entspricht y.offset f�r gewuenschtes zentrum(vorderer Mast des Schiffes)
}
*/
//Die haelfte des Players, minus die Haelfte vom Kielwasser::Player(200*161) 2/=100*80.5 Kielwasser(40*40) 2/20*20
function FootPrint(that,much,from){
	var id=that.toString()+much.toString();
	document.getElementById(id).style.left=(from.x*FeldGroesse)+75+'px';//75 entspricht x.offset f�r gewuenschtes zentrum(vorderer Mast des Schiffes)
	document.getElementById(id).style.top=(from.y*FeldGroesse)+70+'px';//70 entspricht y.offset f�r gewuenschtes zentrum(vorderer Mast des Schiffes)
}

/*
KielWasserCounter+=1;
KielWasserbCounter+=1;

KielWasser();
KielWasser2();
KielWasser3();
KielWasser4();
KielWasser5();
KielWasser6();
KielWasser7();
KielWasser8();

KielWasserb();
KielWasserb2();
KielWasserb3();
KielWasserb4();
KielWasserb5();
KielWasserb6();
KielWasserb7();
KielWasserb8();

if(KielWasserCounter==8){
KielWasserCounter=0;
}
if(KielWasserbCounter==8){
KielWasserbCounter=0;
}
window.setTimeout(OberInit,350);
}
function KielWasser(){
if(KielWasserCounter==1){
document.getElementById("KielWasser").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser").style.top=(player.y*17)+70+'px';
}
}
function KielWasser2(){
if(KielWasserCounter==2){
document.getElementById("KielWasser2").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser2").style.top=(player.y*17)+70+'px';
}
}
function KielWasser3(){
if(KielWasserCounter==3){
document.getElementById("KielWasser3").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser3").style.top=(player.y*17)+70+'px';
}
}
function KielWasser4(){
if(KielWasserCounter==4){
document.getElementById("KielWasser4").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser4").style.top=(player.y*17)+70+'px';
}
}
function KielWasser5(){
if(KielWasserCounter==5){
document.getElementById("KielWasser5").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser5").style.top=(player.y*17)+70+'px';
}
}
function KielWasser6(){
if(KielWasserCounter==6){
document.getElementById("KielWasser6").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser6").style.top=(player.y*17)+70+'px';
}
}
function KielWasser7(){
if(KielWasserCounter==7){
document.getElementById("KielWasser7").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser7").style.top=(player.y*17)+70+'px';
}
}
function KielWasser8(){
if(KielWasserCounter==8){
document.getElementById("KielWasser8").style.left=(player.x*17)+75+'px';
document.getElementById("KielWasser8").style.top=(player.y*17)+70+'px';
}
}
function KielWasserb(){
if(KielWasserbCounter==1){
document.getElementById("KielWasserb").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb2(){
if(KielWasserbCounter==2){
document.getElementById("KielWasserb2").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb2").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb3(){
if(KielWasserbCounter==3){
document.getElementById("KielWasserb3").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb3").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb4(){
if(KielWasserbCounter==4){
document.getElementById("KielWasserb4").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb4").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb5(){
if(KielWasserbCounter==5){
document.getElementById("KielWasserb5").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb5").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb6(){
if(KielWasserbCounter==6){
document.getElementById("KielWasserb6").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb6").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb7(){
if(KielWasserbCounter==7){
document.getElementById("KielWasserb7").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb7").style.top=(player2.y*17)+70+'px';
}
}
function KielWasserb8(){
if(KielWasserbCounter==8){
document.getElementById("KielWasserb8").style.left=(player2.x*17)+75+'px';
document.getElementById("KielWasserb8").style.top=(player2.y*17)+70+'px';
}
}
*/

function Background(){
wellenCounter+=1;
}
function init(){

	mapWidth=map[0].length;
	mapHeight=map.length;

	bindKeys();


	drawMiniMap();

	gameCycle();
}
//Move-Div() bersetzt die Werte aus dem javagott-script in die Divs und Inputs im HTM-Bereich
function moveDiv(){

if(ulfne>0&&ulfne<90&&(Math.cos(player.rot)<0)){
player.moveSpeed=0.02;
}
if(ulfne>0&&ulfne<90&&(Math.cos(player.rot)>0)){
player.moveSpeed=0.1;
}
if(ulfne>90&&ulfne<180&&(Math.cos(player.rot)<0)){
player.moveSpeed=0.02;
}
if(ulfne>90&&ulfne<180&&(Math.cos(player.rot)>0)){
player.moveSpeed=0.1;
}

if(ulfne>180&&ulfne<270&&(Math.cos(player.rot)>0)){
player.moveSpeed=0.02;
}
if(ulfne>180&&ulfne<270&&(Math.cos(player.rot)<0)){
player.moveSpeed=0.1;
}
if(ulfne>270&&ulfne<360&&(Math.cos(player.rot)>0)){
player.moveSpeed=0.02;
}
if(ulfne>270&&ulfne<360&&(Math.cos(player.rot)<0)){
player.moveSpeed=0.1;
}
if(ulfne>0&&ulfne<90&&(Math.cos(player2.rot)<0)){
player2.moveSpeed=0.02;
}
if(ulfne>0&&ulfne<90&&(Math.cos(player2.rot)>0)){
player2.moveSpeed=0.1;
}
if(ulfne>90&&ulfne<180&&(Math.cos(player2.rot)<0)){
player2.moveSpeed=0.02;
}
if(ulfne>90&&ulfne<180&&(Math.cos(player2.rot)>0)){
player2.moveSpeed=0.1;
}

if(ulfne>180&&ulfne<270&&(Math.cos(player2.rot)>0)){
player2.moveSpeed=0.02;
}
if(ulfne>180&&ulfne<270&&(Math.cos(player2.rot)<0)){
player2.moveSpeed=0.1;
}
if(ulfne>270&&ulfne<360&&(Math.cos(player2.rot)>0)){
player2.moveSpeed=0.02;
}
if(ulfne>270&&ulfne<360&&(Math.cos(player2.rot)<0)){
player2.moveSpeed=0.1;
}


document.getElementById("MyDiv").style.left=(player.x*17)+'px';
document.getElementById("MyDiv").style.top=(player.y*17)+'px';
document.getElementById("MyDiv2").style.left=(player2.x*17)+'px';
document.getElementById("MyDiv2").style.top=(player2.y*17)+'px';
document.getElementById("bewegungsCounter").value=bewegungsCounter;
document.getElementById("bewegungsCounter2").value=bewegungsCounter2;
if(player.speed==1){
bewegungsCounter+=1;
}
if(player2.speed==1){
bewegungsCounter2+=1;
}
if(wellenCounter>40&&wellenCounter<60){
document.getElementById("Karte").style.visibility="hidden";
document.getElementById("Karte2").style.visibility="hidden";
document.getElementById("Karte3").style.visibility="visible";
}
if(wellenCounter>20&&wellenCounter<40){
document.getElementById("Karte").style.visibility="hidden";
document.getElementById("Karte2").style.visibility="visible";
document.getElementById("Karte3").style.visibility="hidden";
}
if(wellenCounter>60){
wellenCounter=0;
}
if(wellenCounter>0&&wellenCounter<20){
document.getElementById("Karte").style.visibility='visible';
document.getElementById("Karte2").style.visibility='hidden';
document.getElementById("Karte3").style.visibility='hidden';
}
}
//Regelt die Darstellund der Player(in diesem Fall die Autos)
function Animation2(){
var d=new Array();

for(var i=0;i<=60;i++){
	d[i]=new Image();
	var j=i*6;		//durch die Bilderbenennung in sechsGrad Schritten
	d[i].src=''+j.toString()+'.gif';

}


/*
d[0]=new Image(); d[0].src='0.gif';
d[1]=new Image(); d[1].src="6.gif";
d[2]=new Image(); d[2].src="12.gif";
d[3]=new Image(); d[3].src="18.gif";
d[4]=new Image(); d[4].src="24.gif";
d[5]=new Image(); d[5].src="30.gif";
d[6]=new Image(); d[6].src="36.gif";
d[7]=new Image(); d[7].src="42.gif";
d[8]=new Image(); d[8].src="48.gif";
d[9]=new Image(); d[9].src="54.gif";
d[10]=new Image(); d[10].src="60.gif";
d[11]=new Image(); d[11].src="66.gif";
d[12]=new Image(); d[12].src="72.gif";
d[13]=new Image(); d[13].src="78.gif";
d[14]=new Image(); d[14].src="84.gif";
d[15]=new Image(); d[15].src="90.gif";
d[16]=new Image(); d[16].src="96.gif";
d[17]=new Image(); d[17].src="102.gif";
d[18]=new Image(); d[18].src="108.gif";
d[19]=new Image(); d[19].src="114.gif";
d[20]=new Image(); d[20].src="120.gif";
d[21]=new Image(); d[21].src="126.gif";
d[22]=new Image(); d[22].src="132.gif";
d[23]=new Image(); d[23].src="138.gif";
d[24]=new Image(); d[24].src="144.gif";
d[25]=new Image(); d[25].src="150.gif";
d[26]=new Image(); d[26].src="156.gif";
d[27]=new Image(); d[27].src="162.gif";
d[28]=new Image(); d[28].src="168.gif";
d[29]=new Image(); d[29].src="174.gif";
d[30]=new Image(); d[30].src="180.gif";
d[31]=new Image(); d[31].src="186.gif";
d[32]=new Image(); d[32].src="192.gif";
d[33]=new Image(); d[33].src="198.gif";
d[34]=new Image(); d[34].src="204.gif";
d[35]=new Image(); d[35].src="210.gif";
d[36]=new Image(); d[36].src="216.gif";
d[37]=new Image(); d[37].src="222.gif";
d[38]=new Image(); d[38].src="228.gif";
d[39]=new Image(); d[39].src="234.gif";
d[40]=new Image(); d[40].src="240.gif";
d[41]=new Image(); d[41].src="246.gif";
d[42]=new Image(); d[42].src="252.gif";
d[43]=new Image(); d[43].src="258.gif";
d[44]=new Image(); d[44].src="264.gif";
d[45]=new Image(); d[45].src="270.gif";
d[46]=new Image(); d[46].src="276.gif";
d[47]=new Image(); d[47].src="282.gif";
d[48]=new Image(); d[48].src="288.gif";
d[49]=new Image(); d[49].src="294.gif";
d[50]=new Image(); d[50].src="300.gif";
d[51]=new Image(); d[51].src="306.gif";
d[52]=new Image(); d[52].src="312.gif";
d[53]=new Image(); d[53].src="318.gif";
d[54]=new Image(); d[54].src="324.gif";
d[55]=new Image(); d[55].src="330.gif";
d[56]=new Image(); d[56].src="336.gif";
d[57]=new Image(); d[57].src="342.gif";
d[58]=new Image(); d[58].src="348.gif";
d[59]=new Image(); d[59].src="354.gif";
*/

for(var i=0;i<=60;i++){
	var j=i*6;
	var k=(i+1)*6;
	if(ulfne>j&&ulfne<k){
		document.images[2].src=d[i].src;
	}


}


/*
if(ulfne>0&&ulfne<6){
document.images[2].src=d[0].src;
}
if(ulfne>6&&ulfne<12){
document.images[2].src=d[1].src;
}
if(ulfne>12&&ulfne<18){
document.images[2].src=d[2].src;
}
if(ulfne>18&&ulfne<24){
document.images[2].src=d[3].src;
}
if(ulfne>24&&ulfne<30){
document.images[2].src=d[4].src;
}
if(ulfne>30&&ulfne<36){
document.images[2].src=d[5].src;
}
if(ulfne>36&&ulfne<42){
document.images[2].src=d[6].src;
}
if(ulfne>42&&ulfne<48){
document.images[2].src=d[7].src;
}
if(ulfne>48&&ulfne<54){
document.images[2].src=d[8].src;
}
if(ulfne>54&&ulfne<60){
document.images[2].src=d[9].src;
}
if(ulfne>60&&ulfne<66){
document.images[2].src=d[10].src;
}
if(ulfne>66&&ulfne<72){
document.images[2].src=d[11].src;
}
if(ulfne>72&&ulfne<78){
document.images[2].src=d[12].src;
}
if(ulfne>78&&ulfne<84){
document.images[2].src=d[13].src;
}
if(ulfne>84&&ulfne<90){
document.images[2].src=d[14].src;
}
if(ulfne>90&&ulfne<96){
document.images[2].src=d[15].src;
}
if(ulfne>96&&ulfne<104){
document.images[2].src=d[16].src;
}
if(ulfne>104&&ulfne<110){
document.images[2].src=d[17].src;
}
if(ulfne>110&&ulfne<116){
document.images[2].src=d[18].src;
}
if(ulfne>116&&ulfne<120){
document.images[2].src=d[19].src;
}
if(ulfne>120&&ulfne<126){
document.images[2].src=d[20].src;
}
if(ulfne>126&&ulfne<132){
document.images[2].src=d[21].src;
}
if(ulfne>132&&ulfne<138){
document.images[2].src=d[22].src;
}
if(ulfne>138&&ulfne<144){
document.images[2].src=d[23].src;
}
if(ulfne>144&&ulfne<150){
document.images[2].src=d[24].src;
}
if(ulfne>150&&ulfne<156){
document.images[2].src=d[25].src;
}
if(ulfne>156&&ulfne<162){
document.images[2].src=d[26].src;
}
if(ulfne>162&&ulfne<168){
document.images[2].src=d[27].src;
}
if(ulfne>168&&ulfne<174){
document.images[2].src=d[28].src;
}
if(ulfne>174&&ulfne<180){
document.images[2].src=d[29].src;
}
if(ulfne>180&&ulfne<186){
document.images[2].src=d[30].src;
}
if(ulfne>186&&ulfne<192){
document.images[2].src=d[31].src;
}
if(ulfne>192&&ulfne<198){
document.images[2].src=d[32].src;
}
if(ulfne>198&&ulfne<204){
document.images[2].src=d[33].src;
}
if(ulfne>204&&ulfne<210){
document.images[2].src=d[34].src;
}
if(ulfne>210&&ulfne<216){
document.images[2].src=d[35].src;
}
if(ulfne>216&&ulfne<222){
document.images[2].src=d[36].src;
}
if(ulfne>222&&ulfne<228){
document.images[2].src=d[37].src;
}
if(ulfne>228&&ulfne<234){
document.images[2].src=d[38].src;
}
if(ulfne>234&&ulfne<240){
document.images[2].src=d[39].src;
}
if(ulfne>240&&ulfne<246){
document.images[2].src=d[40].src;
}
if(ulfne>246&&ulfne<252){
document.images[2].src=d[41].src;
}
if(ulfne>152&&ulfne<258){
document.images[2].src=d[42].src;
}
if(ulfne>258&&ulfne<264){
document.images[2].src=d[43].src;
}
if(ulfne>264&&ulfne<270){
document.images[2].src=d[44].src;
}
if(ulfne>270&&ulfne<276){
document.images[2].src=d[45].src;
}
if(ulfne>276&&ulfne<282){
document.images[2].src=d[46].src;
}
if(ulfne>282&&ulfne<288){
document.images[2].src=d[47].src;
}
if(ulfne>288&&ulfne<294){
document.images[2].src=d[48].src;
}
if(ulfne>294&&ulfne<300){
document.images[2].src=d[49].src;
}
if(ulfne>300&&ulfne<306){
document.images[2].src=d[50].src;
}
if(ulfne>306&&ulfne<312){
document.images[2].src=d[51].src;
}
if(ulfne>312&&ulfne<318){
document.images[2].src=d[52].src;
}
if(ulfne>318&&ulfne<324){
document.images[2].src=d[53].src;
}
if(ulfne>324&&ulfne<330){
document.images[2].src=d[54].src;
}
if(ulfne>330&&ulfne<336){
document.images[2].src=d[55].src;
}
if(ulfne>336&&ulfne<342){
document.images[2].src=d[56].src;
}
if(ulfne>342&&ulfne<348){
document.images[2].src=d[57].src;
}
if(ulfne>348&&ulfne<354){
document.images[2].src=d[58].src;
}
if(ulfne>354&&ulfne<360){
document.images[2].src=d[59].src;
}
*/


setTimeout(Animation2,1000/10);
}
function Animation(){

//Bilder fuer Waagen 1
var b=new Array();

for(var i=0;i<=60;i++){
	b[i]=new Image();
	var j=i*6;//durch die Bilderbenennung in sechsGrad Schritten
	b[i].src=''+j.toString()+'Schiff'+'.png';
}


/*
b[0]=new Image(); b[0].src="0Schiff.png";
b[1]=new Image(); b[1].src="6Schiff.png";
b[2]=new Image(); b[2].src="12Schiff.png";
b[3]=new Image(); b[3].src="18Schiff.png";
b[4]=new Image(); b[4].src="24Schiff.png";
b[5]=new Image(); b[5].src="30Schiff.png";
b[6]=new Image(); b[6].src="36Schiff.png";
b[7]=new Image(); b[7].src="42Schiff.png";
b[8]=new Image(); b[8].src="48Schiff.png";
b[9]=new Image(); b[9].src="54Schiff.png";
b[10]=new Image(); b[10].src="60Schiff.png";
b[11]=new Image(); b[11].src="66Schiff.png";
b[12]=new Image(); b[12].src="72Schiff.png";
b[13]=new Image(); b[13].src="78Schiff.png";
b[14]=new Image(); b[14].src="84Schiff.png";
b[15]=new Image(); b[15].src="90Schiff.png";
b[16]=new Image(); b[16].src="96Schiff.png";
b[17]=new Image(); b[17].src="102Schiff.png";
b[18]=new Image(); b[18].src="108Schiff.png";
b[19]=new Image(); b[19].src="114Schiff.png";
b[20]=new Image(); b[20].src="120Schiff.png";
b[21]=new Image(); b[21].src="126Schiff.png";
b[22]=new Image(); b[22].src="132Schiff.png";
b[23]=new Image(); b[23].src="138Schiff.png";
b[24]=new Image(); b[24].src="144Schiff.png";
b[25]=new Image(); b[25].src="150Schiff.png";
b[26]=new Image(); b[26].src="156Schiff.png";
b[27]=new Image(); b[27].src="162Schiff.png";
b[28]=new Image(); b[28].src="168Schiff.png";
b[29]=new Image(); b[29].src="174Schiff.png";
b[30]=new Image(); b[30].src="180Schiff.png";
b[31]=new Image(); b[31].src="186Schiff.png";
b[32]=new Image(); b[32].src="192Schiff.png";
b[33]=new Image(); b[33].src="198Schiff.png";
b[34]=new Image(); b[34].src="204Schiff.png";
b[35]=new Image(); b[35].src="210Schiff.png";
b[36]=new Image(); b[36].src="216Schiff.png";
b[37]=new Image(); b[37].src="222Schiff.png";
b[38]=new Image(); b[38].src="228Schiff.png";
b[39]=new Image(); b[39].src="234Schiff.png";
b[40]=new Image(); b[40].src="240Schiff.png";
b[41]=new Image(); b[41].src="246Schiff.png";
b[42]=new Image(); b[42].src="252Schiff.png";
b[43]=new Image(); b[43].src="258Schiff.png";
b[44]=new Image(); b[44].src="264Schiff.png";
b[45]=new Image(); b[45].src="270Schiff.png";
b[46]=new Image(); b[46].src="276Schiff.png";
b[47]=new Image(); b[47].src="282Schiff.png";
b[48]=new Image(); b[48].src="288Schiff.png";
b[49]=new Image(); b[49].src="294Schiff.png";
b[50]=new Image(); b[50].src="300Schiff.png";
b[51]=new Image(); b[51].src="306Schiff.png";
b[52]=new Image(); b[52].src="312Schiff.png";
b[53]=new Image(); b[53].src="318Schiff.png";
b[54]=new Image(); b[54].src="324Schiff.png";
b[55]=new Image(); b[55].src="330Schiff.png";
b[56]=new Image(); b[56].src="336Schiff.png";
b[57]=new Image(); b[57].src="342Schiff.png";
b[58]=new Image(); b[58].src="348Schiff.png";
b[59]=new Image(); b[59].src="354Schiff.png";
*/
//Bilder fr Waagen 1
var c=new Array();

for(var i=0;i<=60;i++){
	c[i]=new Image();
	var j=i*6;
	c[i].src=''+j.toString()+'Schiff'+'.png';
}

/*
c[0]=new Image(); c[0].src="0Schiff.png";
c[1]=new Image(); c[1].src="6Schiff.png";
c[2]=new Image(); c[2].src="12Schiff.png";
c[3]=new Image(); c[3].src="18Schiff.png";
c[4]=new Image(); c[4].src="24Schiff.png";
c[5]=new Image(); c[5].src="30Schiff.png";
c[6]=new Image(); c[6].src="36Schiff.png";
c[7]=new Image(); c[7].src="42Schiff.png";
c[8]=new Image(); c[8].src="48Schiff.png";
c[9]=new Image(); c[9].src="54Schiff.png";
c[10]=new Image(); c[10].src="60Schiff.png";
c[11]=new Image(); c[11].src="66Schiff.png";
c[12]=new Image(); c[12].src="72Schiff.png";
c[13]=new Image(); c[13].src="78Schiff.png";
c[14]=new Image(); c[14].src="84Schiff.png";
c[15]=new Image(); c[15].src="90Schiff.png";
c[16]=new Image(); c[16].src="96Schiff.png";
c[17]=new Image(); c[17].src="102Schiff.png";
c[18]=new Image(); c[18].src="108Schiff.png";
c[19]=new Image(); c[19].src="114Schiff.png";
c[20]=new Image(); c[20].src="120Schiff.png";
c[21]=new Image(); c[21].src="126Schiff.png";
c[22]=new Image(); c[22].src="132Schiff.png";
c[23]=new Image(); c[23].src="138Schiff.png";
c[24]=new Image(); c[24].src="144Schiff.png";
c[25]=new Image(); c[25].src="150Schiff.png";
c[26]=new Image(); c[26].src="156Schiff.png";
c[27]=new Image(); c[27].src="162Schiff.png";
c[28]=new Image(); c[28].src="168Schiff.png";
c[29]=new Image(); c[29].src="174Schiff.png";
c[30]=new Image(); c[30].src="180Schiff.png";
c[31]=new Image(); c[31].src="186Schiff.png";
c[32]=new Image(); c[32].src="192Schiff.png";
c[33]=new Image(); c[33].src="198Schiff.png";
c[34]=new Image(); c[34].src="204Schiff.png";
c[35]=new Image(); c[35].src="210Schiff.png";
c[36]=new Image(); c[36].src="216Schiff.png";
c[37]=new Image(); c[37].src="222Schiff.png";
c[38]=new Image(); c[38].src="228Schiff.png";
c[39]=new Image(); c[39].src="234Schiff.png";
c[40]=new Image(); c[40].src="240Schiff.png";
c[41]=new Image(); c[41].src="246Schiff.png";
c[42]=new Image(); c[42].src="252Schiff.png";
c[43]=new Image(); c[43].src="258Schiff.png";
c[44]=new Image(); c[44].src="264Schiff.png";
c[45]=new Image(); c[45].src="270Schiff.png";
c[46]=new Image(); c[46].src="276Schiff.png";
c[47]=new Image(); c[47].src="282Schiff.png";
c[48]=new Image(); c[48].src="288Schiff.png";
c[49]=new Image(); c[49].src="294Schiff.png";
c[50]=new Image(); c[50].src="300Schiff.png";
c[51]=new Image(); c[51].src="306Schiff.png";
c[52]=new Image(); c[52].src="312Schiff.png";
c[53]=new Image(); c[53].src="318Schiff.png";
c[54]=new Image(); c[54].src="324Schiff.png";
c[55]=new Image(); c[55].src="330Schiff.png";
c[56]=new Image(); c[56].src="336Schiff.png";
c[57]=new Image(); c[57].src="342Schiff.png";
c[58]=new Image(); c[58].src="348Schiff.png";
c[59]=new Image(); c[59].src="354Schiff.png";
*/

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
	setTimeout(Animation,1000/10);
}
//bind keyboard events to game functions(movement, etc)
function bindKeys(){

	document.onkeydown=function(e){
		e=e || window.event;

		switch(e.keyCode){//which key was pressed?
//Player1
			case 73://Curser-up, move player forward, ie. increase speed
				player.speed=1;
				player.moveSpeed=0.02;
				break;
				case 75://Curser-up, move player forward, ie. increase speed
				player.speed=0;
				player.moveSpeed=0;
				break;
			case 74://Curser-left, rotate player left
				player.dir=-1;
				break;

			case 76://Curser-right, rotate player right
				player.dir=1;
				break;
//Player2
			case 87://"W", move player2 forward, ie. increase speed
				player2.speed=1;
				player2.moveSpeed=0.02;
				break;
			case 83://"W", move player2 forward, ie. increase speed
				player2.speed=0;
				player2.moveSpeed=0;
				break;
			case 65://"A", rotate player2 left
				player2.dir=-1;
				break;

			case 68://"D", rotate player2 right
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

	setTimeout(gameCycle,42);
}

function move(){
	var moveStep=player.speed * player.moveSpeed;	//player will move this far along the current direction vector

	player.rot +=player.dir * player.rotSpeed * Math.PI / 180;//add rotation if player is rotating(player.dir !=0)

	var newX=player.x + Math.cos(player.rot) * moveStep;	//calculate new player position with simple trigonometry
	var newY=player.y + Math.sin(player.rot) * moveStep;

	if(isPassing(newX, newY,0)){	//are we allowed to move to the new position?
player.speed=0;
player.moveSpeed=0;
		return;//no, bail out.

	}
	player.x=newX;//set new position
	player.y=newY;

	var moveStep2=player2.speed * player2.moveSpeed;	//player2 will move this far along the current direction vector

	player2.rot +=player2.dir * player2.rotSpeed * Math.PI / 180;//add rotation if player2 is rotating(player2.dir !=0)

	var newX2=player2.x + Math.cos(player2.rot) * moveStep2;	//calculate new player2 position with simple trigonometry
	var newY2=player2.y + Math.sin(player2.rot) * moveStep2;

	if(isPassing(newX2, newY2,0)){	//are we allowed to move to the new position?
player2.speed=0;
player2.moveSpeed=0;
		return;//no, bail out.

	}
	player2.x=newX2;//set new position
	player2.y=newY2;
	
	if(isPassing(newX2, newY2,1)){
	//alert("Meute ist schuld");
	//alert(player2.x);
	//alert(player2.y);
	document.getElementById("Havanna2").style.visibility='visible';
	document.getElementById("ExitHavanna2").style.visibility='visible';
	player2.speed=0;
	player2.moveSpeed=0;
	}
	if(isPassing(newX2, newY2,2)){
	document.getElementById("Ischtuk2").style.visibility='visible';
	document.getElementById("ExitIschtuk2").style.visibility='visible';
	player2.speed=0;
	player2.moveSpeed=0;
	}
	if(isPassing(newX2, newY2,3)){
	document.getElementById("Havanna2").style.visibility='hidden';
	document.getElementById("Ischtuk2").style.visibility='hidden';
	document.getElementById("ExitIschtuk2").style.visibility='hidden';
	document.getElementById("ExitHavanna2").style.visibility='hidden';
	document.getElementById("KontorIschtuk2").style.visibility='hidden';
	document.getElementById("HafenIschtuk2").style.visibility='hidden';
		if(AnheuernIschtuk2Counter>=1){
		AnheuernIschtuk2Counter=0;
		document.getElementById("TaverneIschtuk2").style.visibility='hidden';
		document.getElementById("KontorIschtuk2").style.visibility='hidden';
		document.getElementById("HafenIschtuk2").style.visibility='hidden';
		}
		if(AnheuernHavanna2Counter>=1){
		AnheuernHavanna2Counter=0;
		document.getElementById("TaverneHavanna2").style.visibility='hidden';
		}
}
	if(isPassing(newX2, newY2,4)){
	}
	if(isPassing(newX2, newY2,5)){
		}
	if(isPassing(newX, newY,1)){
	

	document.getElementById("Havanna").style.visibility='visible';
	document.getElementById("ExitHavanna").style.visibility='visible';
	player.speed=0;
	player.moveSpeed=0;

	}
	if(isPassing(newX, newY,2)){
	document.getElementById("Ischtuk").style.visibility='visible';
	document.getElementById("ExitIschtuk").style.visibility='visible';
	player.speed=0;
	player.moveSpeed=0;
	}
	if(isPassing(newX, newY,3)){
	document.getElementById("Ischtuk").style.visibility='hidden';
	document.getElementById("Havanna").style.visibility='hidden';
	document.getElementById("ExitIschtuk").style.visibility='hidden';
	document.getElementById("ExitHavanna").style.visibility='hidden';
	document.getElementById("KontorIschtuk").style.visibility='hidden';
		if(AnheuernIschtukCounter>=1){
		AnheuernIschtukCounter=0;
		document.getElementById("TaverneIschtuk").style.visibility='hidden';
		document.getElementById("KontorIschtuk").style.visibility='hidden';

		}
		if(AnheuernHavannaCounter>=1){
		AnheuernHavannaCounter=0;
		document.getElementById("TaverneHavanna").style.visibility='hidden';
		}
		}
	if(isPassing(newX, newY,4)){
	}
	if(isPassing(newX, newY,5)){
		}
	
	player.x=newX;//set new position
	player.y=newY;
	player2.x=newX2;//set new position
	player2.y=newY2;
//if(player.x>20&&player.x<25&&player.y>0&&player.y<5){
//player.x=10;
//}
}

function isPassing(x,y,wer){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > wer &&map[Math.floor(y)][Math.floor(x)] < (wer+2)); 
}

/*
function isPassing0(x,y){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > 0&&map[Math.floor(y)][Math.floor(x)] < 2); 
}


function isPassing1(x,y){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > 1&&map[Math.floor(y)][Math.floor(x)] < 3); 
}
function isPassing2(x,y){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > 2&&map[Math.floor(y)][Math.floor(x)] < 4); 
}
function isPassing3(x,y){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > 3&&map[Math.floor(y)][Math.floor(x)] < 5); 
}
function isPassing4(x,y){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > 4&&map[Math.floor(y)][Math.floor(x)] < 6); 
}
function isPassing5(x,y){

	//first make sure that we cannot move outside the boundaries of the level
	if(y < 0 || y > mapHeight || x < 0 || x > mapWidth)
		return true;
	//return true if the map block is not 0, ie. if there is a blocking wall.
	return(map[Math.floor(y)][Math.floor(x)] > 5&&map[Math.floor(y)][Math.floor(x)] < 7); 
}
*/

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
		player.x * miniMapScale - playerScale, 
		player.y * miniMapScale - playerScale,
		playerScale*2, playerScale*2
	);
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		(player.x + Math.cos(player.rot) * 4) * miniMapScale,
		(player.y + Math.sin(player.rot) * 4) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
//Player2
	objectCtx.fillRect(		//draw a dot at the current player2 position
		player2.x * miniMapScale - player2Scale, 
		player2.y * miniMapScale - player2Scale,
		player2Scale*2, player2Scale*2
	);
	objectCtx.beginPath();
	objectCtx.moveTo(player2.x * miniMapScale, player2.y * miniMapScale);
	objectCtx.lineTo(
		(player2.x + Math.cos(player2.rot) * 4) * miniMapScale,
		(player2.y + Math.sin(player2.rot) * 4) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
	moveDiv();
	Background();
}

function drawMiniMap(){

	//draw the topdown view minimap
	//document.getElementById("MyDiv").style.left=(player.x*15)+'px';
	//document.getElementById("MyDiv").style.top=(player.y*15)+'px';

	var miniMap=$("minimap");			//the actual map
	var miniMapCtr=$("minimapcontainer");		//the container div element
	var miniMapObjects=$("minimapobjects");	//the canvas used for drawing the objects on the map(player character, etc)

	miniMap.width=mapWidth * miniMapScale;	//resize the internal canvas dimensions 
	miniMap.height=mapHeight * miniMapScale;	//of both the map canvas and the object canvas
	miniMapObjects.width=miniMap.width;
	miniMapObjects.height=miniMap.height;

	var w=(mapWidth * miniMapScale) + "px" 	//minimap CSS dimensions
	var h=(mapHeight * miniMapScale) + "px"
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
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall > 1&&wall < 3){//if there is a wall block at this(x,y) ...
				ctx.fillStyle="rgb(0,210,0)";
				ctx.fillRect(				//... then draw a block on the minimap
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall > 5&&wall < 7){//if there is a wall block at this(x,y) ...

				ctx.fillStyle="rgb(255,0,0)";
				ctx.fillRect(				//... then draw a block on the minimap
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale,miniMapScale
				);
			}
		}
	}
	updateMiniMap();
}

setTimeout(init,1);
function ExitHavanna(){
document.getElementById('Havanna').style.visibility='hidden';
document.getElementById('ExitHavanna').style.visibility='hidden';
document.getElementById('TaverneHavanna').style.visibility='hidden';
	player.x=22;
	player.y=19;
	player.rot=0;
	player.dir=0;
}
function ExitHavanna2(){
document.getElementById('Havanna2').style.visibility='hidden';
document.getElementById('ExitHavanna2').style.visibility='hidden';
	player2.x=22;
	player2.y=19;
	player2.rot=0;
	player2.dir=0;
}
function ExitIschtuk(){
document.getElementById('Ischtuk').style.visibility='hidden';
document.getElementById('ExitIschtuk').style.visibility='hidden';
	player.x=13;
	player.y=13;
	player.rot=0;
	player.dir=0;
}
function ExitIschtuk2(){
document.getElementById('Ischtuk2').style.visibility='hidden';
document.getElementById('ExitIschtuk2').style.visibility='hidden';
	player2.x=13;
	player2.y=13;
	player2.rot=0;
	player2.dir=0;
}
function schiff1(){
document.getElementById("Log1").style.visibility='visible';
}
function schiffZu1(){
document.getElementById("Log1").style.visibility='hidden';
}
function schiff2(){
document.getElementById("Log2").style.visibility='visible';
}
function schiffZu2(){
document.getElementById("Log2").style.visibility='hidden';
}
function TaverneHavanna(){
document.getElementById("TaverneHavanna").style.visibility='visible';
if(AnheuernHavannaCounter<1){
document.getElementById("TaverneHavannaAnheuern").style.visibility='visible';
}
}

function AnheuernHavanna(){
AnheuernHavannaCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(AnheuernHavannaCounter>0){
document.getElementById("TaverneHavannaAnheuern").style.visibility='hidden';
}
}
function TaverneHavanna2(){
document.getElementById("TaverneHavanna2").style.visibility='visible';
if(AnheuernHavanna2Counter<1){
document.getElementById("TaverneHavanna2Anheuern").style.visibility='visible';
}
}

function AnheuernHavanna2(){
AnheuernHavanna2Counter+=1;
player2.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player2.Leute+'in deiner Crew');
if(AnheuernHavanna2Counter>0){
document.getElementById("TaverneHavanna2Anheuern").style.visibility='hidden';
}
}
function TaverneIschtuk(){
document.getElementById("TaverneIschtuk").style.visibility='visible';
if(AnheuernIschtukCounter<1){
document.getElementById("TaverneIschtukAnheuern").style.visibility='visible';
}
}

function AnheuernIschtuk(){
AnheuernIschtukCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(AnheuernIschtukCounter>0){
document.getElementById("TaverneIschtukAnheuern").style.visibility='hidden';
}
}
function TaverneIschtuk2(){
document.getElementById("TaverneIschtuk2").style.visibility='visible';
if(AnheuernIschtuk2Counter<1){
document.getElementById("TaverneIschtuk2Anheuern").style.visibility='visible';
}
}

function AnheuernIschtuk2(){
AnheuernIschtuk2Counter+=1;
player2.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player2.Leute+'in deiner Crew');
if(AnheuernIschtuk2Counter>0){
document.getElementById("TaverneIschtuk2Anheuern").style.visibility='hidden';
}
}

function ExitTaverneHavanna2(){
document.getElementById("TaverneHavanna2").style.visibility='hidden';
document.getElementById("TaverneHavanna2Anheuern").style.visibility='hidden';
}

function ExitTaverneHavanna(){
document.getElementById("TaverneHavanna").style.visibility='hidden';
document.getElementById("TaverneHavannaAnheuern").style.visibility='hidden';

}
function ExitTaverneIschtuk(){
document.getElementById("TaverneIschtuk").style.visibility='hidden';
document.getElementById("TaverneIschtukAnheuern").style.visibility='hidden';

}
function ExitTaverneIschtuk2(){
document.getElementById("TaverneIschtuk2").style.visibility='hidden';
document.getElementById("TaverneIschtuk2Anheuern").style.visibility='hidden';

}
function KontorIschtuk2(){
document.getElementById("KontorIschtuk2").style.visibility='visible';
}
function ExitKontorIschtuk2(){
document.getElementById("KontorIschtuk2").style.visibility='hidden';
}
function KaufenKontorIschtuk2(){
Ischtuk2.Geld+=Ischtuk2.KaufKurs*10;
Ischtuk2.Nahrung-=10;
player2.Nahrung+=10;
player2.Geld-=Ischtuk2.KaufKurs*10;
}
function VerkaufenKontorIschtuk2(){
Ischtuk2.Geld-=(Ischtuk2.KaufKurs*.9)*10;
Ischtuk2.Nahrung+=10;
player2.Nahrung-=10;
player2.Geld+=(Ischtuk2.KaufKurs*.9)*10;
}
function KontorIschtuk(){
document.getElementById("KontorIschtuk").style.visibility='visible';
}
function ExitKontorIschtuk(){
document.getElementById("KontorIschtuk").style.visibility='hidden';
}
function KaufenKontorIschtuk(){
Ischtuk.Geld+=Ischtuk.KaufKurs*10;
Ischtuk.Nahrung-=10;
player.Nahrung+=10;
player.Geld-=Ischtuk.KaufKurs*10;
}
function VerkaufenKontorIschtuk(){
Ischtuk.Geld-=(Ischtuk.KaufKurs*.9)*10;
Ischtuk.Nahrung+=10;
player.Nahrung-=10;
player.Geld+=(Ischtuk.KaufKurs*.9)*10;
}
function HafenIschtuk2(){
document.getElementById("HafenIschtuk2").style.visibility='visible';
}
function ExitHafenIschtuk2(){
document.getElementById("HafenIschtuk2").style.visibility='hidden';
}
function ReparierenHafenIschtuk2(){
alert("huztz");
Ischtuk2.Geld+=Ischtuk.ReparierKurs*10;
player2.Geld-=Ischtuk.ReparierKurs*10;
bewegungsCounter2-=500;
}