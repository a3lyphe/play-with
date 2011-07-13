Player=function(){
	this.xActual=0;
	this.yActual=0;
	this.Scale=0;
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
	this.SpeedBerechnung=function(WR){//WR::Windrichtung
		var playerMoveSpeedHalb=this.MoveSpeedMax/2;
		var playerMoveSpeedEinzehntel=this.MoveSpeedMax/10;
		var OR=((Math.cos(this.rot)>0)&&(Math.sin(this.rot)<0));
		var OL=((Math.cos(this.rot)<0)&&(Math.sin(this.rot)<0));
		var UR=((Math.cos(this.rot)>0)&&(Math.sin(this.rot)>0));
		var UL=((Math.cos(this.rot)<0)&&(Math.sin(this.rot)>0));
		for(var i=0;i<91;i++){
		switch(WR){
			//player1
			case i:
			if (OL){
				this.moveSpeed=playerMoveSpeedHalb;
			}
			if(OR){
				this.moveSpeed=this.MoveSpeedMax;
			}
			if(UL){
				this.moveSpeed=playerMoveSpeedEinzehntel;
			}
			if(UR){
				this.moveSpeed=playerMoveSpeedHalb;
			}
			break;
			}
		}
		if(WR>=90&&WR<180&&OL){
			this.moveSpeed=playerMoveSpeedEinzehntel;
		}
		if(WR>=90&&WR<180&&OR){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		if(WR>=90&&WR<180&&UL){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		if(WR>=90&&WR<180&&UR){
			this.moveSpeed=this.MoveSpeedMax;
		}
		if(WR>=180&&WR<270&&OL){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		if(WR>=180&&WR<270&&OR){
			this.moveSpeed=playerMoveSpeedEinzehntel;
		}
		if(WR>=180&&WR<270&&UL){
			this.moveSpeed=this.MoveSpeedMax;
		}
		if(WR>=180&&WR<270&&UR){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		if(WR>=270&&WR<360&&OL){
			this.moveSpeed=this.MoveSpeedMax;
		}
		if(WR>=270&&WR<360&&OR){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		if(WR>=270&&WR<360&&UL){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		if(WR>=270&&WR<360&&UR){
			this.moveSpeed=playerMoveSpeedEinzehntel;
		}
	}
	this.icon=new Icon();
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
$('Havanna').style.visibility='visible';
player.speed=0;
player.moveSpeed=0;
}
if(player.isPassing(2)){
$('Ischtuk').style.visibility='visible';
player.speed=0;
player.moveSpeed=0;
}
if(player.isPassing(3)){
$('Ischtuk').style.visibility='hidden';
$('Havanna').style.visibility='hidden';
$('IschtukKontor').style.visibility='hidden';
$('IschtukHafen').style.visibility='hidden';
$('IschtukTaverne').style.visibility='hidden';
$('IschtukTaverneLeute').style.visibility='hidden';
$('HavannaKontor').style.visibility='hidden';
$('HavannaHafen').style.visibility='hidden';
$('HavannaTaverne').style.visibility='hidden';
$('HavannaTaverneAnheuern').style.visibility='hidden';
if(IschtukAnheuernCounter>=1){
IschtukAnheuernCounter=0;}
}
player.xActual=newX;
player.yActual=newY;
}