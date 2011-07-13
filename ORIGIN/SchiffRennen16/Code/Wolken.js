for(var k=1;k<5;k++){
	eval(''+'var '+'Wolke'+k.toString()+'Max'+'=Math.random()*2+1;');
}
moveWolken=function(){
	var GewitterWolkeMax=5;
	for(var i=1;i<4;i++){
		var Wolke=''+'Wolke'+i.toString();
		var WolkeMax=eval(''+'Wolke'+i.toString()+'Max');
		var WolkeHalb=WolkeMax/2;
		var WolkeEinviertel=WolkeMax/4;
		var WolkeDreiviertel=(WolkeMax/4)*3;
		var WolkeDreiachtel=(WolkeMax/8)*3;
		var WolkeFuenfachtel=(WolkeMax/8)*5;
		var WolkeSiebenachtel=(WolkeMax/8)*7;
		for(var j=0;j<7;j++){
			switch(Windrichtung){
				case j:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					break;
				case j+6:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeEinviertel+'px';
					break;
				case j+12:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeDreiachtel+'px';
					break;
				case j+18:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeHalb+'px';
					break;
				case j+24:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeFuenfachtel+'px';
					break;
				case j+30:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeDreiviertel+'px';
					break;
				case j+36:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeSiebenachtel+'px';
					break;
				case j+42:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+48:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeSiebenachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+54:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeDreiviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+60:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeFuenfachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+66:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeHalb+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+72:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeDreiachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+78:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeEinviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+84:
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+90:
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+96:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeEinviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+102:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeDreiachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+108:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeHalb+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+114:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeFuenfachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+120:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeDreiviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+126:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeSiebenachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+132:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeMax+'px';
					break;
				case j+138:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeSiebenachtel+'px';
					break;
				case j+144:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeDreiviertel+'px';
					break;
				case j+150:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeFuenfachtel+'px';
					break;
				case j+156:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeHalb+'px';
					break;
				case j+162:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeDreiachtel+'px';
					break;
				case j+168:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft+WolkeEinviertel+'px';
					break;
				case j+174:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					break;
				case j+180:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					break;
				case j+186:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeEinviertel+'px';
					break;
				case j+192:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeDreiachtel+'px';
					break;
				case j+198:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeHalb+'px';
					break;
				case j+204:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeFuenfachtel+'px';
					break;
				case j+210:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeDreiviertel+'px';
					break;
				case j+216:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeSiebenachtel+'px';
					break;
				case j+222:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+228:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeSiebenachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+234:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeDreiviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+240:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeFuenfachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+246:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeHalb+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+252:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeDreiachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+258:
					$(Wolke).style.top=$(Wolke).offsetTop+WolkeEinviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+264:
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+270:
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+276:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeEinviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+282:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeDreiachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+288:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeHalb+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+294:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeFuenfachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+300:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeDreiviertel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+306:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeSiebenachtel+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+312:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeMax+'px';
					break;
				case j+318:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeSiebenachtel+'px';
					break;
				case j+324:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeDreiviertel+'px';
					break;
				case j+330:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeFuenfachtel+'px';
					break;
				case j+336:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeHalb+'px';
					break;
				case j+342:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeDreiachtel+'px';
					break;
				case j+348:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					$(Wolke).style.left=$(Wolke).offsetLeft-WolkeEinviertel+'px';
					break;
				case j+354:
					$(Wolke).style.top=$(Wolke).offsetTop-WolkeMax+'px';
					break;
			}
		}
	//Die Wolke wird auf die Karte zurueckgesetzt
		if($(Wolke).offsetTop<-80){
			$(Wolke).style.top=map.length*FeldGroesse+'px';
		}
		if($(Wolke).offsetTop>map.length*FeldGroesse){
			$(Wolke).style.top=-80+'px';
		}
		if($(Wolke).offsetLeft<-80){
			$(Wolke).style.left=map[0].length*FeldGroesse+'px';
		}
		if($(Wolke).offsetLeft>map[0].length*FeldGroesse){
			$(Wolke).style.left=-80+'px';
		}
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
		$("GewitterWolke").style.top=map.length*FeldGroesse+'px';
	}
	if($("GewitterWolke").offsetTop>map.length*FeldGroesse){
		$("GewitterWolke").style.top=-80+'px';
	}
	if($("GewitterWolke").offsetLeft<-80){
		$("GewitterWolke").style.left=map[0].length*FeldGroesse+'px';
	}
	if($("GewitterWolke").offsetLeft>map[0].length*FeldGroesse){
		$("GewitterWolke").style.left=-80+'px';
	}
	//Wird ein Player vom Gewitter getroffen?
	if($("GewitterWolke").offsetLeft>=player.x*(FeldGroesse-2)&&$("GewitterWolke").offsetLeft<=player.x*(FeldGroesse+2)&&$("GewitterWolke").offsetTop>=player.y*(FeldGroesse-2)&&$("GewitterWolke").offsetTop<=player.y*(FeldGroesse+2)){
		player.Leute-=parseInt(player.Leute/10);
	}
}