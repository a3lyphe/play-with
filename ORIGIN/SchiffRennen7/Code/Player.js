Player=function(){
	this.xActual=0;
	this.yActual=0;
	this.width;
	this.height;
	this.MoveSpeedMax;
	this.MoveStep=0;
	this.dir;
	this.rot=0;
	this.speed;
	this.moveSpeed;
	this.rotSpeed;
	this.id;
	this.Leute;
	this.Geld;
	this.Nahrung;
	this.Kaffee;
	this.Tabak;
	this.Zuckerrohr;
	this.Rum;
	this.Baumwolle;
	this.Perlen;
	this.Segeltuch;
	this.Hanf;
	this.Teer;
	this.Holz;
	this.Pulver;
	this.Kugeln;
	this.Kanonen;
	this.xActualFuture;
	this.yActualFuture;
	this.isPassing=function (wer){
		this.moveStep=player.speed*player.moveSpeed;
		this.xActualFuture=this.xActual+Math.cos(this.rot)*this.moveStep;
		this.yActualFuture=this.yActual+Math.sin(this.rot)*this.moveStep;
		//alert(this.xActual+Math.cos(this.rot)*this.moveStep);
		//first make sure that we cannot move outside the boundaries of the level
		if(this.yActualFuture < 0 || this.yActualFuture > mapHeight ||this.xActualFuture < 0 || this.xActualFuture > mapWidth){
			return true;
		}
		//return true if the map block is not 0,ie. if there is a blocking wall.
		return(map[Math.floor(this.yActualFuture)][Math.floor(this.xActualFuture)] > wer &&map[Math.floor(this.yActualFuture)][Math.floor(this.xActualFuture)] < (wer+2));
	}
	this.isFollowing=function(whom){//Who=wer Folgt;whom=wem wird Gefolgt
		if(this.xActual<whom.xActual){
			this.xActual+=this.moveSpeed*this.speed;
		}
		if(this.xActual>whom.xActual){
			this.xActual-=this.moveSpeed*this.speed;
		}
		if(this.yActual<whom.yActual){
			this.yActual+=this.moveSpeed*this.speed;
		}
		if(this.yActual>whom.yActual){
			this.yActual-=this.moveSpeed*this.speed;
		}
		if(this.isPassing(0)){
			if(this.xActual>whom.xActual){
				this.xActual+=this.moveSpeed*this.speed;
			}
			if(this.xActual<whom.xActual){
				this.xActual-=this.moveSpeed*this.speed;
			}
			if(this.yActual>whom.yActual){
				this.yActual+=this.moveSpeed*this.speed;
			}
			if(this.yActual<whom.yActual){
				this.yActual-=this.moveSpeed*this.speed;
			}
		}
	}
	this.isEscaping=function(whom){//Who=wer Folgt;whom=wem wird Gefolgt
		if(this.xActual>whom.xActual){
			this.xActual+=this.moveSpeed*this.speed;
		}
		if(this.xActual<whom.xActual){
			this.xActual-=this.moveSpeed*this.speed;
		}
		if(this.yActual>whom.yActual){
			this.yActual+=this.moveSpeed*this.speed;
		}
		if(this.yActual<whom.yActual){
			this.yActual-=this.moveSpeed*this.speed;
		}
		if(this.isPassing(0)){
			if(this.xActual>whom.xActual){
				this.xActual+=this.moveSpeed*this.speed;
			}
			if(this.xActual<whom.xActual){
				this.xActual-=this.moveSpeed*this.speed;
			}
			if(this.yActual>whom.yActual){
				this.yActual+=this.moveSpeed*this.speed;
			}
			if(this.yActual<whom.yActual){
				this.yActual-=this.moveSpeed*this.speed;
			}
		}
	}
}
playerSpeedBerechnung=function(){
var playerMoveSpeedHalb=player.MoveSpeedMax/2;
var playerMoveSpeedEinzehntel=player.MoveSpeedMax/10;
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
player.moveSpeed=player.MoveSpeedMax;
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
player.moveSpeed=player.MoveSpeedMax;
}
if(Windrichtung>=180&&Windrichtung<270&&playerObenLinks){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=180&&Windrichtung<270&&playerObenRechts){
player.moveSpeed=playerMoveSpeedEinzehntel;
}
if(Windrichtung>=180&&Windrichtung<270&&playerUntenLinks){
player.moveSpeed=player.MoveSpeedMax;
}
if(Windrichtung>=180&&Windrichtung<270&&playerUntenRechts){
player.moveSpeed=playerMoveSpeedHalb;
}
if(Windrichtung>=270&&Windrichtung<360&&playerObenLinks){
player.moveSpeed=player.MoveSpeedMax;
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
this.moveStep=player.speed*player.moveSpeed;
player.rot +=player.dir*player.rotSpeed*Math.PI/180;
var newX=player.xActual+Math.cos(player.rot)*this.moveStep;
var newY=player.yActual+Math.sin(player.rot)*this.moveStep;
if(player.isPassing(0)){
player.speed=0;
player.moveSpeed=0;
return;
}
if(player.isPassing(1)){
$("Havanna").style.visibility='visible';
player.speed=0;
player.moveSpeed=0;
}
if(player.isPassing(2)){
$("Ischtuk").style.visibility='visible';
player.speed=0;
player.moveSpeed=0;
}
if(player.isPassing(3)){
$("Ischtuk").style.visibility='hidden';
$("Havanna").style.visibility='hidden';
$("IschtukKontor").style.visibility='hidden';
$("IschtukHafen").style.visibility='hidden';
$("IschtukTaverne").style.visibility='hidden';
$("IschtukTaverneLeute").style.visibility='hidden';
$("HavannaKontor").style.visibility='hidden';
$("HavannaHafen").style.visibility='hidden';
$("HavannaTaverne").style.visibility='hidden';
$("HavannaTaverneAnheuern").style.visibility='hidden';
if(IschtukAnheuernCounter>=1){
IschtukAnheuernCounter=0;}
}
player.xActual=newX;
player.yActual=newY;
}