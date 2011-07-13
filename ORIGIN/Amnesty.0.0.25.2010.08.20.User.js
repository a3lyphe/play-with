//Amnesty.0.0.23.2010.06.21.User.js
alert((
	'°Amnesty.0.0.23.2010.06.21.Welt.js°:'
	+'\n++\t'
	+'\n++\t'
	+'\n++\t'
));

User
=function()
{
	this.id;
	this.link
	=function()
	{
		return($(this.id));
	}
	this.xActual
	=
		0
	;
	this.yActual
	=
		0
	;
	this.Scale
	=
		0
	;
	this.width;
	this.height;
	this.MoveSpeedMax;
	this.MoveStep
	=
		0
	;
	this.dir;
	this.rot
	=
		0
	;
	this.speed;
	this.moveSpeed;
	this.rotSpeed;
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
	this.isPassing
	=function(wer)
	{
		this.moveStep
		=
			player.speed
			*
			player.moveSpeed
		;
		this.xFuture
		=
			this.xActual
			+
			Math.cos(this.rot)
			*
			this.moveStep
		;
		this.yFuture
		=
			this.yActual
			+
			Math.sin(this.rot)
			*
			this.moveStep
		;
		//first make sure that we cannot move outside the boundaries of the level
		if((
			this.yFuture<0
			||
			this.yFuture>mapHeight
			||
			this.xFuture<0
			||
			this.xFuture>mapWidth
		))
		{
			return((
				true
			));
		}
		//return true if the map block is not 0,ie. if there is a blocking wall.
		return((
			map[Math.floor(this.yFuture)][Math.floor(this.xFuture)]>wer
			&&
			map[Math.floor(this.yFuture)][Math.floor(this.xFuture)]<(wer+19)
		));
	}
	this.isFollowing
	=
	function(whom)
	{//Who=wer Folgt;whom=wem wird Gefolgt
		if
		(this.xActual<whom.xActual)
		{
			this.xActual
			+=
				this.moveSpeed
				*
				this.speed
			;
		}
		if
		(this.xActual>whom.xActual)
		{
			this.xActual
			-=
				this.moveSpeed
				*
				this.speed
			;
		}
		if
		(this.yActual<whom.yActual){
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
	this.NahrungsVerbrauch=0.1;
	this.eats=function()
	{
		var NahrungsVerbrauch=this.Leute*this.NahrungsVerbrauch;
		if(NahrungsVerbrauch>this.Nahrung)
		{
			
		}
		else
		if(NahrungsVerbrauch<this.Nahrung)
		{
			this.Nahrung-=NahrungsVerbrauch.toFixed(3);
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
			case i:
			if (OL){
				this.moveSpeed=playerMoveSpeedHalb;
			}
			else
			if(OR){
				this.moveSpeed=this.MoveSpeedMax;
			}
			else
			if(UL){
				this.moveSpeed=playerMoveSpeedEinzehntel;
			}
			else
			if(UR){
				this.moveSpeed=playerMoveSpeedHalb;
			}
			break;
			}
		}
		if(WR>=90&&WR<180&&OL){
			this.moveSpeed=playerMoveSpeedEinzehntel;
		}
		else
		if(WR>=90&&WR<180&&OR){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		else
		if(WR>=90&&WR<180&&UL){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		else
		if(WR>=90&&WR<180&&UR){
			this.moveSpeed=this.MoveSpeedMax;
		}
		else
		if(WR>=180&&WR<270&&OL){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		else
		if(WR>=180&&WR<270&&OR){
			this.moveSpeed=playerMoveSpeedEinzehntel;
		}
		else
		if(WR>=180&&WR<270&&UL){
			this.moveSpeed=this.MoveSpeedMax;
		}
		else
		if(WR>=180&&WR<270&&UR){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		else
		if(WR>=270&&WR<360&&OL){
			this.moveSpeed=this.MoveSpeedMax;
		}
		else
		if(WR>=270&&WR<360&&OR){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		else
		if(WR>=270&&WR<360&&UL){
			this.moveSpeed=playerMoveSpeedHalb;
		}
		else
		if(WR>=270&&WR<360&&UR){
			this.moveSpeed=playerMoveSpeedEinzehntel;
		}
	}
	this.icon=new Icon();
	this.maps=new Maps();
	this.KI=function(){
		this.rotSpeed=6;
		$('Info').value=this.dir;
	}
	this.KIdir=function(){
		dirCounter+=1;
		if(dirCounter==1){
			this.dir=(parseInt(Math.random()*2.3)-1);
		}
		if(dirCounter>1){
			this.dir=0;
		}
		if(dirCounter>18){
		dirCounter=0;
		}
	}
	this.mind=function()
	{
		this.moveStep=this.speed*this.moveSpeed;
		this.rot +=this.dir*this.rotSpeed*Math.PI/180;
		var newX=this.xActual+Math.cos(this.rot)*this.moveStep;
		var newY=this.yActual+Math.sin(this.rot)*this.moveStep;
		if(this.isPassing(0))
		{
			this.speed=0;
			this.moveSpeed=0;
			return;
		}
		else
		if
		(this.isPassing(1))
		{
			$('Havanna').style.visibility='visible';
			this.speed=0;
			this.moveSpeed=0;
		}
		else
		if
		(this.isPassing(25))
		{
			$('Ischtuk').style.visibility='visible';
			this.speed=0;
			this.moveSpeed=0;
		}
		else
		if
		(this.isPassing(98))
		{
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
				IschtukAnheuernCounter=0;
			}
		}
		if(newX+2>map[0].length)
		{
			newX=2;
		}
		if(newX<2){
			newX=map[0].length-2;
		}
		if(newY+2>map.length){
			newY=2;
		}
		if(newY<2){
			newY=map.length-2;
		}
		this.xActual=newX;
		this.yActual=newY;
	}
	this.wind=function(){
		this.link().style.left=(this.xActual*FeldGroesse)+'px';
		this.link().style.top=(this.yActual*FeldGroesse)+'px';
	}
	this.roto=function(NR){
		var SinRot=Math.sin(this.rot);
		//Sektor: NORD-OST
		if(SinRot<0){
		var checker=Math.cos(this.rot).toFixed(3)*1000;
			switch(checker){
				case 105:
					document.images[NR].src=this.icon.list[1].src;
					break;
				case 208:
					document.images[NR].src=this.icon.list[2].src;
					break;
//18
				case 309:
					document.images[NR].src=this.icon.list[3].src;
					break;
//24
				case 407:
					document.images[NR].src=this.icon.list[4].src;
					break;
//30
				case 500:
					document.images[NR].src=this.icon.list[5].src;
					break;
//36
				case 588:
					document.images[NR].src=this.icon.list[6].src;
					break;
//42
				case 699:
					document.images[NR].src=this.icon.list[7].src;
					break;
//48
				case 743:
					document.images[NR].src=this.icon.list[8].src;
					break;
//54
				case 809:
					document.images[NR].src=this.icon.list[9].src;
					break;
//60
				case 866:
					document.images[NR].src=this.icon.list[10].src;
					break;
//66
				case 914:
					document.images[NR].src=this.icon.list[11].src;
					break;
//72
				case 951:
					document.images[NR].src=this.icon.list[12].src;
					break;
//78
				case 978:
					document.images[NR].src=this.icon.list[13].src;
					break;
//84
				case 995:
					document.images[NR].src=this.icon.list[14].src;
					break;
			}
		}
		//Sektor: Sued-Ost
		if(SinRot>0){
		var checker=Math.cos(this.rot).toFixed(3)*1000;
			switch(checker){
				case 995:
					document.images[NR].src=this.icon.list[16].src;
					break;
				case 978:
					document.images[NR].src=this.icon.list[17].src;
					break;
//18
				case 951:
					document.images[NR].src=this.icon.list[18].src;
					break;
//24
				case 914:
					document.images[NR].src=this.icon.list[19].src;
					break;
//30
				case 866:
					document.images[NR].src=this.icon.list[20].src;
					break;
//36
				case 809:
					document.images[NR].src=this.icon.list[21].src;
					break;
//42
				case 743:
					document.images[NR].src=this.icon.list[22].src;
					break;
//48
				case 669:
					document.images[NR].src=this.icon.list[23].src;
					break;
//54
				case 588:
					document.images[NR].src=this.icon.list[24].src;
					break;
//60
				case 500:
					document.images[NR].src=this.icon.list[25].src;
					break;
//66
				case 407:
					document.images[NR].src=this.icon.list[26].src;
					break;
//72
				case 309:
					document.images[NR].src=this.icon.list[27].src;
					break;
//78
				case 208:
					document.images[NR].src=this.icon.list[28].src;
					break;
//84
				case 105:
					document.images[NR].src=this.icon.list[29].src;
					break;
			}
		}
		//Sektor: Sued-West
		if(SinRot>0){
		var checker=Math.cos(this.rot).toFixed(3)*1000*-1;
			switch(checker){
				case 105:
					document.images[NR].src=this.icon.list[31].src;
					break;
				case 208:
					document.images[NR].src=this.icon.list[32].src;
					break;
//18
				case 309:
					document.images[NR].src=this.icon.list[33].src;
					break;
//24
				case 407:
					document.images[NR].src=this.icon.list[34].src;
					break;
//30
				case 500:
					document.images[NR].src=this.icon.list[35].src;
					break;
//36
				case 588:
					document.images[NR].src=this.icon.list[36].src;
					break;
//42
				case 699:
					document.images[NR].src=this.icon.list[37].src;
					break;
//48
				case 743:
					document.images[NR].src=this.icon.list[38].src;
					break;
//54
				case 809:
					document.images[NR].src=this.icon.list[39].src;
					break;
//60
				case 866:
					document.images[NR].src=this.icon.list[40].src;
					break;
//66
				case 914:
					document.images[NR].src=this.icon.list[41].src;
					break;
//72
				case 951:
					document.images[NR].src=this.icon.list[42].src;
					break;
//78
				case 978:
					document.images[NR].src=this.icon.list[43].src;
					break;
//84
				case 995:
					document.images[NR].src=this.icon.list[44].src;
					break;
			}
		}
		//Sektor: Sued-West
		if(SinRot<0){
		var checker=Math.cos(this.rot).toFixed(3)*1000*-1;
			switch(checker){
				case 995:
					document.images[NR].src=this.icon.list[46].src;
					break;
				case 978:
					document.images[NR].src=this.icon.list[47].src;
					break;
//18
				case 951:
					document.images[NR].src=this.icon.list[48].src;
					break;
//24
				case 914:
					document.images[NR].src=this.icon.list[49].src;
					break;
//30
				case 866:
					document.images[NR].src=this.icon.list[50].src;
					break;
//36
				case 809:
					document.images[NR].src=this.icon.list[51].src;
					break;
//42
				case 743:
					document.images[NR].src=this.icon.list[52].src;
					break;
//48
				case 699:
					document.images[NR].src=this.icon.list[53].src;
					break;
//54
				case 588:
					document.images[NR].src=this.icon.list[54].src;
					break;
//60
				case 500:
					document.images[NR].src=this.icon.list[55].src;
					break;
//66
				case 407:
					document.images[NR].src=this.icon.list[56].src;
					break;
//72
				case 309:
					document.images[NR].src=this.icon.list[57].src;
					break;
//78
				case 208:
					document.images[NR].src=this.icon.list[58].src;
					break;
//84
				case 105:
					document.images[NR].src=this.icon.list[59].src;
					break;
			}
		}
//90
		if(Math.cos(this.rot)==1){
			document.images[NR].src=this.icon.list[15].src;
		}
//0
		else
		if(SinRot==-1){
			document.images[NR].src=this.icon.list[0].src;
		}
//180
		else
		if(SinRot==1){
			document.images[NR].src=this.icon.list[30].src;
		}
//270
		else
		if(Math.cos(this.rot)==-1){
			document.images[NR].src=this.icon.list[45].src;
		}
	}
}
