var player={
x : 8, //current x,y position
y : 8,
dir : 0, //the direction that the player is turning,either -1 for left or 1 for right.
rot : 0, //the current angle of rotation
speed : 1, //is the playing moving forward(speed=1) or backwards(speed=-1).
moveSpeed : 0.06, //how far(in map units) does the player move each step/update
rotSpeed : 6, //how much does the player rotate each step/update(in degrees)
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
playerSpeedBerechnung=function(){
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
if(isPassing(newX,newY,1)){
$("Havanna").style.visibility='visible';
player.speed=0;
player.moveSpeed=0;
}
if(isPassing(newX,newY,2)){
$("Ischtuk").style.visibility='visible';
player.speed=0;
player.moveSpeed=0;
}
if(isPassing(newX,newY,3)){
$("Ischtuk").style.visibility='hidden';
$("Havanna").style.visibility='hidden';
$("IschtukKontor").style.visibility='hidden';
$("IschtukHafen").style.visibility='hidden';
$("IschtukTaverne").style.visibility='hidden';
$("IschtukTaverneAnheuern").style.visibility='hidden';
$("HavannaKontor").style.visibility='hidden';
$("HavannaHafen").style.visibility='hidden';
$("HavannaTaverne").style.visibility='hidden';
$("HavannaTaverneAnheuern").style.visibility='hidden';
if(IschtukAnheuernCounter>=1){
IschtukAnheuernCounter=0;}
}
player.x=newX;
player.y=newY;
}