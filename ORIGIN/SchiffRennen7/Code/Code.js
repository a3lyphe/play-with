var Maximum=359;
var Minimum=0;
var ZufallsZahl=0;
var imageFolder='Icon/';
var SequenzCounter=0;
var FeldGroesse=17;
var HavannaAnheuernCounter=0;
var IschtukAnheuernCounter=0;
var WindRichtungNeu=0;
var Windrichtung=145;
var KielCounter=0;
var InitCounter=0;
var GameCounter=0;
var RefreshCounter=0;
var KielWasserCounter=0;
var bewegungsCounter=0;
var mapWidth=0;
var mapHeight=0;
var miniMapScale=.5;
player=new Player();
	player.xActual=8;//current x,y position
	player.yActual=8;
	player.width=80;
	player.height=80;
	player.MoveSpeedMax=.2;
	player.dir=0;//the direction that the player is turning,either -1 for left or 1 for right.
	player.rot=0;//the current angle of rotation
	player.speed=1;//is the playing moving forward(speed=1) or backwards(speed=-1).
	player.moveSpeed=.06;//how far(in map units) does the player move each step/update
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
G1=new Player();
	G1.id='Gegner1';
	G1.xActual=5;
	G1.yActual=5;
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
G2=new Player();
	G2.id='Gegner2';
	G2.xActual=12;
	G2.yActual=12;
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
alert(G1);
init=function(){
mapWidth=map[0].length;
mapHeight=map.length;
bindKeys();
drawMiniMap();
Oberinit();
Sequenzer();
gameCycle();

}
gameCycle=function(){

updateMiniMap();
refresher();
window.setTimeout(gameCycle,1);
}


Sequenzer=function(){
Kielwasser();
move();
moveGegner();
SchiffBilderRoto();
moveWolken();
moveDiv();
if(SequenzCounter>10){
playerSpeedBerechnung();
Kompass();
WindHose();
SequenzCounter=0;
}
SequenzCounter+=1;
window.setTimeout(Sequenzer,42);
}

updateMiniMap=function(){
mapsMiniPlayer();

}