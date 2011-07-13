var WasserEinschlagCounter2=0;

function WasserEinschlag1(p,q){
$("WasserEinschlag1").style.left=(p*FeldGroesse()())+'px';
$("WasserEinschlag1").style.top=(q*FeldGroesse()())+'px';
if($("WasserEinschlag1").offsetLeft>(Pirat1.x-2)*FeldGroesse()()&&$("WasserEinschlag1").offsetLeft<(Pirat1.x+0)*FeldGroesse()&&$("WasserEinschlag1").offsetTop>(Pirat1.y-2)*FeldGroesse()&&$("WasserEinschlag1").offsetTop<(Pirat1.y+0)*FeldGroesse()){
alert("TrefferXy");
Pirat1.x=Math.random()*40;
Pirat1.y=Math.random()*40;
player.Geld+=300;
}
}


function WasserEinschlag2(p,q){
//alert(WasserEinschlagCounter2);

if(WasserEinschlagCounter2<1){
	$("WasserEinschlagb1").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb1").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb2").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb2").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb3").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb3").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb4").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb4").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb5").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb5").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb6").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb6").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb7").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb7").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb8").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb8").style.top=(q*FeldGroesse())+'px';
	$("WasserEinschlagb9").style.left=(p*FeldGroesse())+'px';
	$("WasserEinschlagb9").style.top=(q*FeldGroesse())+'px';
}
	if(WasserEinschlagCounter2==1){
	$("WasserEinschlagb1").style.left=1065+'px';
	$("WasserEinschlagb1").style.top=1060+'px';
	
	}

	if(WasserEinschlagCounter2==2){
	$("WasserEinschlagb2").style.left=1065+'px';
	$("WasserEinschlagb2").style.top=1060+'px';
	}


	if(WasserEinschlagCounter2==3){
	$("WasserEinschlagb3").style.left=1065+'px';
	$("WasserEinschlagb3").style.top=1060+'px';
	}


	if(WasserEinschlagCounter2==4){
	$("WasserEinschlagb4").style.left=1065+'px';
	$("WasserEinschlagb4").style.top=1060+'px';
	}


	if(WasserEinschlagCounter2==5){
	$("WasserEinschlagb5").style.left=1065+'px';
	$("WasserEinschlagb5").style.top=1060+'px';
	}


	if(WasserEinschlagCounter2==6){
	$("WasserEinschlagb6").style.left=1065+'px';
	$("WasserEinschlagb6").style.top=1060+'px';
	}


	if(WasserEinschlagCounter2==7){
	$("WasserEinschlagb7").style.left=1065+'px';
	$("WasserEinschlagb7").style.top=1060+'px';
	}


	if(WasserEinschlagCounter2==8){
	$("WasserEinschlagb8").style.left=1065+'px';
	$("WasserEinschlagb8").style.top=1060+'px';
	}

	if(WasserEinschlagCounter2==9){
	$("WasserEinschlagb9").style.left=1065+'px';
	$("WasserEinschlagb9").style.top=1060+'px';
	}


	if($("WasserEinschlagb1").offsetLeft>(Pirat1.x-2)*FeldGroesse()&&$("WasserEinschlagb1").offsetLeft<(Pirat1.x+0)*FeldGroesse()&&$("WasserEinschlagb1").offsetTop>(Pirat1.y-2)*FeldGroesse()&&$("WasserEinschlagb1").offsetTop<(Pirat1.y+0)*FeldGroesse()){
		alert("TrefferXy");
		Pirat1.x=Math.random()*40;
		Pirat1.y=Math.random()*40;
		player2.Geld+=300;
	}

	WasserEinschlagCounter2+=1;
	if(WasserEinschlagCounter2<10){
		window.setTimeout(WasserEinschlag2,12);
		
	}
	if(WasserEinschlagCounter2>9){
		WasserEinschlagCounter2=0;
	}
}
var kanonenCounter1=0;

function Kanone1(){

		kanonenCounter1=0;
		Schuss();

}
function Schuss(){
if(WasserEinschlagCounter1=0){
//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
	var SinRot=Math.sin(player.rot);

//0
if(SinRot==-1){
	var ix=kanonenCounter1+player.x;
	var iy=player.y;
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px'
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
	$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag1(ix,iy);
	}
	if(kanonenCounter1<7){
		window.setTimeout(Schuss,100);
}
};
//90
if(Math.cos(player.rot)==1){
	var ix=player.x;
	var iy=kanonenCounter1+player.y;
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
	$("Kugel1").style.left=(ix*FeldGroesse())+'px';
	$("Kugel1").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter1+=1;
	if(kanonenCounter1>6){
		$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';
kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel1").style.left=(ix*FeldGroesse())+'px';
$("Kugel1").style.top=(iy*FeldGroesse())+'px';


kanonenCounter1+=1;
if(kanonenCounter1>6){
$("Kugel1").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag1(ix,iy);
}
if(kanonenCounter1<7){
window.setTimeout(Schuss,100);
};
};

}
}
var kanonenCounter2=0;

function Kanone2(){
var kanonenKill=Math.random();
	if(player2.Kanonen>0&&player2.Kugeln&&player2.Pulver){
		kanonenCounter2=0;
		Schuss2();
		if(kanonenKill>0.96){
			alert(kanonenKill);
			player2.Kanonen-=1;
		}
		player2.Kugeln-=1;
		player2.Pulver-=1;
	}
}
function Schuss2(){
WasserEinschlagCounter2=0;
//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
	var SinRot=Math.sin(player2.rot);

//0
if(SinRot==-1){
	var ix=kanonenCounter2+player2.x;
	var iy=player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//6
if((Math.cos(player2.rot)<0.105&&Math.cos(player2.rot)>0.103)&&(SinRot<(-0.993)&&SinRot>(-0.995))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.125)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px'
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//12
if((Math.cos(player2.rot)<0.208&&Math.cos(player2.rot)>0.206)&&(SinRot<(-0.977)&&SinRot>(-0.979))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.25)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//18
if((Math.cos(player2.rot)<0.310&&Math.cos(player2.rot)>0.308)&&(SinRot<(-0.950)&&SinRot>(-0.952))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.375)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//24
if((Math.cos(player2.rot)<0.407&&Math.cos(player2.rot)>0.405)&&(SinRot<(-0.912)&&SinRot>(-0.914))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.500)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
}
};
//30
if((Math.cos(player2.rot)<0.500&&Math.cos(player2.rot)>0.498)&&(SinRot<(-0.865)&&SinRot>(-0.867))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.625)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//36
if((Math.cos(player2.rot)<0.588&&Math.cos(player2.rot)>0.586)&&(SinRot<(-0.808)&&SinRot>(-0.810))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.75)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
}
};
//42
if((Math.cos(player2.rot)<0.670&&Math.cos(player2.rot)>0.668)&&(SinRot<(-0.742)&&SinRot>(-0.744))){
	var ix=kanonenCounter2+player2.x;
	var iy=parseInt(kanonenCounter2*0.875)+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
}
};
//48
if((Math.cos(player2.rot)<0.744&&Math.cos(player2.rot)>0.742)&&(SinRot<(-0.668)&&SinRot>(-0.670))){
	var ix=kanonenCounter2+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//54
if((Math.cos(player2.rot)<0.810&&Math.cos(player2.rot)>0.808)&&(SinRot<(-0.586)&&SinRot>(-0.588))){
	var ix=parseInt(kanonenCounter2*0.75)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//60
if((Math.cos(player2.rot)<0.867&&Math.cos(player2.rot)>0.865)&&(SinRot<(-0.498)&&SinRot>(-0.500))){
	var ix=parseInt(kanonenCounter2*0.625)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//66
if((Math.cos(player2.rot)<0.914&&Math.cos(player2.rot)>0.912)&&(SinRot<(-0.405)&&SinRot>(-0.407))){
	var ix=parseInt(kanonenCounter2*0.5)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//72
if((Math.cos(player2.rot)<0.952&&Math.cos(player2.rot)>0.950)&&(SinRot<(-0.308)&&SinRot>(-0.310))){
	var ix=parseInt(kanonenCounter2*0.375)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
	$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
	WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//78
if((Math.cos(player2.rot)<0.979&&Math.cos(player2.rot)>0.977)&&(SinRot<(-0.206)&&SinRot>(-0.208))){
	var ix=parseInt(kanonenCounter2*0.25)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//84
if((Math.cos(player2.rot)<0.995&&Math.cos(player2.rot)>0.993)&&(SinRot<(-0.103)&&SinRot>(-0.105))){
	var ix=parseInt(kanonenCounter2*0.125)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
}
};
//90
if(Math.cos(player2.rot)==1){
	var ix=player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
	}
};
//96
if((SinRot<0.105&&SinRot>0.103)&&(Math.cos(player2.rot)>(0.993)&&Math.cos(player2.rot)<(0.995))){
	var ix=parseInt(-kanonenCounter2*0.125)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
}
};
//102
if((SinRot<0.208&&SinRot>0.206)&&(Math.cos(player2.rot)>(0.977)&&Math.cos(player2.rot)<(0.979))){
	var ix=parseInt(-kanonenCounter2*0.25)+player2.x;
	var iy=kanonenCounter2+player2.y;
	$("Kugel2").style.left=(ix*FeldGroesse())+'px';
	$("Kugel2").style.top=(iy*FeldGroesse())+'px';
	kanonenCounter2+=1;
	if(kanonenCounter2>6){
		$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
		WasserEinschlag2(ix,iy);
	}
	if(kanonenCounter2<7){
		window.setTimeout(Schuss2,100);
}
};
//108
if((SinRot<0.310&&SinRot>0.308)&&(Math.cos(player2.rot)>(0.950)&&Math.cos(player2.rot)<(0.952))){
var ix=parseInt(-kanonenCounter2*0.375)+player2.x;
var iy=kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//114
if((SinRot<0.407&&SinRot>0.405)&&(Math.cos(player2.rot)>(0.912)&&Math.cos(player2.rot)<(0.914))){
var ix=parseInt(-kanonenCounter2*0.5)+player2.x;
var iy=kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//120
if((SinRot<0.500&&SinRot>0.498)&&(Math.cos(player2.rot)>(0.865)&&Math.cos(player2.rot)<(0.867))){
var ix=parseInt(-kanonenCounter2*0.625)+player2.x;
var iy=kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//126
if((SinRot<0.588&&SinRot>0.586)&&(Math.cos(player2.rot)>(0.808)&&Math.cos(player2.rot)<(0.810))){
var ix=parseInt(-kanonenCounter2*0.75)+player2.x;
var iy=kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//132
if((SinRot<0.670&&SinRot>0.668)&&(Math.cos(player2.rot)>(0.742)&&Math.cos(player2.rot)<(0.744))){
var ix=parseInt(-kanonenCounter2*0.875)+player2.x;
var iy=kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
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
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//144
if((SinRot<0.810&&SinRot>0.808)&&(Math.cos(player2.rot)>(0.586)&&Math.cos(player2.rot)<(0.588))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(kanonenCounter2*0.875)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//150
if((SinRot<0.867&&SinRot>0.865)&&(Math.cos(player2.rot)>(0.498)&&Math.cos(player2.rot)<(0.500))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(kanonenCounter2*0.75)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//156
if((SinRot<0.914&&SinRot>0.912)&&(Math.cos(player2.rot)>(0.405)&&Math.cos(player2.rot)<(0.407))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(kanonenCounter2*0.625)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//162
if((SinRot<0.952&&SinRot>0.950)&&(Math.cos(player2.rot)>(0.308)&&Math.cos(player2.rot)<(0.310))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(kanonenCounter2*0.5)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//168
if((SinRot<0.979&&SinRot>0.977)&&(Math.cos(player2.rot)>(0.206)&&Math.cos(player2.rot)<(0.208))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(kanonenCounter2*0.375)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//174
if((SinRot<0.995&&SinRot>0.993)&&(Math.cos(player2.rot)>(0.103)&&Math.cos(player2.rot)<(0.105))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(kanonenCounter2*0.25)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//180
if(SinRot==1){
var ix=-kanonenCounter2+player2.x;
var iy=player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//186
if((Math.cos(player2.rot)>(-0.105)&&Math.cos(player2.rot)<(-0.103))&&(SinRot>(0.993)&&SinRot<(0.995))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.125)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//192
if((Math.cos(player2.rot)>(-0.208)&&Math.cos(player2.rot)<(-0.206))&&(SinRot>(0.977)&&SinRot<(0.979))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.25)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//198
if((Math.cos(player2.rot)>(-0.310)&&Math.cos(player2.rot)<(-0.308))&&(SinRot>(0.950)&&SinRot<(0.952))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.375)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//204
if((Math.cos(player2.rot)>(-0.407)&&Math.cos(player2.rot)<(-0.405))&&(SinRot>(0.912)&&SinRot<(0.914))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.5)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//210
if((Math.cos(player2.rot)>(-0.500)&&Math.cos(player2.rot)<(-0.498))&&(SinRot>(0.865)&&SinRot<(0.867))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.625)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//216
if((Math.cos(player2.rot)>(-0.588)&&Math.cos(player2.rot)<(-0.586))&&(SinRot>(0.808)&&SinRot<(0.810))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.75)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//222
if((Math.cos(player2.rot)>(-0.670)&&Math.cos(player2.rot)<(-0.668))&&(SinRot>(0.742)&&SinRot<(0.744))){
var ix=-kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.875)+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//228
if((Math.cos(player2.rot)>(-0.744)&&Math.cos(player2.rot)<(-0.742))&&(SinRot>(0.668)&&SinRot<(0.670))){
var ix=-kanonenCounter2+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//234
if((Math.cos(player2.rot)>(-0.810)&&Math.cos(player2.rot)<(-0.808))&&(SinRot>(0.586)&&SinRot<(0.588))){
var ix=parseInt(-kanonenCounter2*0.875)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//240
if((Math.cos(player2.rot)>(-0.867)&&Math.cos(player2.rot)<(-0.865))&&(SinRot>(0.498)&&SinRot<(0.500))){
var ix=parseInt(-kanonenCounter2*0.75)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//246
if((Math.cos(player2.rot)>(-0.914)&&Math.cos(player2.rot)<(-0.912))&&(SinRot>(0.405)&&SinRot<(0.407))){
var ix=parseInt(-kanonenCounter2*0.5)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//252
if((Math.cos(player2.rot)>(-0.952)&&Math.cos(player2.rot)<(-0.950))&&(SinRot>(0.308)&&SinRot<(0.310))){
var ix=parseInt(-kanonenCounter2*0.375)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//258
if((Math.cos(player2.rot)>(-0.979)&&Math.cos(player2.rot)<(-0.977))&&(SinRot>(0.206)&&SinRot<(0.208))){
var ix=parseInt(-kanonenCounter2*0.25)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//264
if((Math.cos(player2.rot)>(-0.995)&&Math.cos(player2.rot)<(-0.993))&&(SinRot>(0.103)&&SinRot<(0.105))){
var ix=parseInt(-kanonenCounter2*0.125)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//270
if(Math.cos(player2.rot)==-1){
var ix=player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
}
};
//276
if((SinRot>(-0.105)&&SinRot<(-0.103))&&(Math.cos(player2.rot)<(-0.993)&&Math.cos(player2.rot)>(-0.995))){
var ix=parseInt(kanonenCounter2*0.125)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//282
if((SinRot>(-0.208)&&SinRot<(-0.206))&&(Math.cos(player2.rot)<(-0.977)&&Math.cos(player2.rot)>(-0.979))){
var ix=parseInt(kanonenCounter2*0.25)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//288
if((SinRot>(-0.310)&&SinRot<(-0.308))&&(Math.cos(player2.rot)<(-0.950)&&Math.cos(player2.rot)>(-0.952))){
var ix=parseInt(kanonenCounter2*0.375)+player2.x;
var iy=-kanonenCounter2+player2.y;
$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';
kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//294
if((SinRot>(-0.407)&&SinRot<(-0.405))&&(Math.cos(player2.rot)<(-0.912)&&Math.cos(player2.rot)>(-0.914))){
var ix=parseInt(kanonenCounter2*0.5)+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//300
if((SinRot>(-0.500)&&SinRot<(-0.498))&&(Math.cos(player2.rot)<(-0.865)&&Math.cos(player2.rot)>(-0.867))){
var ix=parseInt(kanonenCounter2*0.625)+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//306
if((SinRot>(-0.588)&&SinRot<(-0.586))&&(Math.cos(player2.rot)<(-0.808)&&Math.cos(player2.rot)>(-0.810))){
var ix=parseInt(kanonenCounter2*0.75)+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//312
if((SinRot>(-0.670)&&SinRot<(-0.668))&&(Math.cos(player2.rot)<(-0.742)&&Math.cos(player2.rot)>(-0.744))){
var ix=parseInt(kanonenCounter2*0.875)+player2.x;
var iy=-kanonenCounter2+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
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

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//324
if((SinRot>(-0.810)&&SinRot<(-0.808))&&(Math.cos(player2.rot)<(-0.586)&&Math.cos(player2.rot)>(-0.588))){
var ix=kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.75)+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//330
if((SinRot>(-0.867)&&SinRot<(-0.865))&&(Math.cos(player2.rot)<(-0.498)&&Math.cos(player2.rot)>(-0.500))){
var ix=kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.625)+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//336
if((SinRot>(-0.914)&&SinRot<(-0.912))&&(Math.cos(player2.rot)<(-0.405)&&Math.cos(player2.rot)>(-0.407))){
var ix=kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.5)+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//342
if((SinRot>(-0.952)&&SinRot<(-0.950))&&(Math.cos(player2.rot)<(-0.308)&&Math.cos(player2.rot)>(-0.310))){
var ix=kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.375)+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//348
if((SinRot>(-0.979)&&SinRot<(-0.977))&&(Math.cos(player2.rot)<(-0.206)&&Math.cos(player2.rot)>(-0.208))){
var ix=kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.25)+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};
//354
if((SinRot>(-0.995)&&SinRot<(-0.993))&&(Math.cos(player2.rot)<(-0.103)&&Math.cos(player2.rot)>(-0.105))){
var ix=kanonenCounter2+player2.x;
var iy=parseInt(-kanonenCounter2*0.125)+player2.y;

$("Kugel2").style.left=(ix*FeldGroesse())+'px';
$("Kugel2").style.top=(iy*FeldGroesse())+'px';


kanonenCounter2+=1;
if(kanonenCounter2>6){
$("Kugel2").style.left=(ix*FeldGroesse())+1265+'px';
WasserEinschlag2(ix,iy);
}
if(kanonenCounter2<7){
window.setTimeout(Schuss2,100);
};
};

}
