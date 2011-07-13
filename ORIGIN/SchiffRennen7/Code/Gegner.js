Gegner=function(){
	this.id;
	this.xActual;
	this.yActual;
	this.width;
	this.height;
	this.MoveSpeedMax;
	this.dir;
	this.rot;
	this.speed;
	this.moveSpeed;
	this.rotSpeed;
	this.Leute;
	this.Pulver;
	this.Kugeln;
	this.Kanonen;
	this.isPassing=function (wer){
		//first make sure that we cannot move outside the boundaries of the level
		if(this.yActual < 0 || this.yActual > mapHeight || this.xActual < 0 || this.xActual > mapWidth){
			return true;
		}
		//return true if the map block is not 0,ie. if there is a blocking wall.
		return(map[Math.floor(this.yActual)][Math.floor(this.xActual)] > wer &&map[Math.floor(this.yActual)][Math.floor(this.xActual)] < (wer+2));
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

function moveGegner(){
G1.isFollowing(player);
G2.isEscaping(player);
}
/*var newX=G1.xActual;
var newY=G1.yActual;
var moveStep=G1.speed*G1.moveSpeed;
G1.rot +=G1.dir*G1.rotSpeed*Math.PI/180;
var newX=G1.xActual+Math.cos(G1.rot)*moveStep;
var newY=G1.yActual+Math.sin(G1.rot)*moveStep;
if(isPassing(newX,newY,0)){
G1.speed=0;
G1.moveSpeed=0;
return;
}

if(isPassing(newX,newY,2)){
$("Ischtuk").style.visibility='visible';
G1.speed=0;
G1.moveSpeed=0;
}
if(isPassing(newX,newY,3)){

if(IschtukAnheuernCounter>=1){
IschtukAnheuernCounter=0;}
}
G1.xActual=newX;
G1.yActual=newY;*/
