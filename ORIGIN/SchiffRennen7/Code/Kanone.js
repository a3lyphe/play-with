
var Schussix=0;
var Schussiy=0;
var meinSchuss;
var SchussWeite=7;
function Kanone1(){

$("Kugel1").style.top=parseInt(player.yActual*FeldGroesse)+'px'
$("Kugel1").style.left=parseInt(player.xActual*FeldGroesse)+'px';
$("Kugel1").style.visibility='visible';
meinSchuss=window.setInterval('Schuss()',100);
window.setTimeout('Aufschlagen()',700);
}
Aufschlagen=function(){

window.clearInterval(meinSchuss);


$("Kugel1").style.visibility='hidden';
WasserEinschlag1(Schussix,Schussiy);
}
function WasserEinschlag1(p,q){
$("WasserEinschlag1").style.left=(p*FeldGroesse)+65+'px';
$("WasserEinschlag1").style.top=(q*FeldGroesse)+60+'px';
if($("WasserEinschlag1").offsetLeft>(Pirat1.xActual-2)*FeldGroesse&&$("WasserEinschlag1").offsetLeft<(Pirat1.xActual+0)*FeldGroesse&&$("WasserEinschlag1").offsetTop>(Pirat1.yActual-2)*FeldGroesse&&$("WasserEinschlag1").offsetTop<(Pirat1.yActual+0)*FeldGroesse){
alert("TrefferXy");
Pirat1.xActual=Math.random()*40;
Pirat1.yActual=Math.random()*40;
player.Geld+=300;
}
}/*

		
		
		if(Aufschlag){
		$("Kugel1").style.left=(Schussix*FeldGroesse)+1265+'px';
		WasserEinschlag1(Schussix,Schussiy);
		}
		if(SchussWeite<7){
		window.setTimeout(Schuss,100);
		};
	};
$("Kugel1").style.left=(Schussix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(Schussiy*FeldGroesse)+60+'px'
}
*/
function Schuss(){

//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
var SinRot=Math.sin(player.rot);
//0
if(SinRot==-1){
Schussix=SchussWeite+player.xActual;
Schussiy=player.yActual;

//6
if((Math.cos(player.rot)<0.105&&Math.cos(player.rot)>0.103)&&(SinRot<(-0.993)&&SinRot>(-0.995))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.125)+player.yActual;

//12
if((Math.cos(player.rot)<0.208&&Math.cos(player.rot)>0.206)&&(SinRot<(-0.977)&&SinRot>(-0.979))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.25)+player.yActual;

};
//18
if((Math.cos(player.rot)<0.310&&Math.cos(player.rot)>0.308)&&(SinRot<(-0.950)&&SinRot>(-0.952))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.375)+player.yActual;

};
//24
if((Math.cos(player.rot)<0.407&&Math.cos(player.rot)>0.405)&&(SinRot<(-0.912)&&SinRot>(-0.914))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.500)+player.yActual;

};
//30
if((Math.cos(player.rot)<0.500&&Math.cos(player.rot)>0.498)&&(SinRot<(-0.865)&&SinRot>(-0.867))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.625)+player.yActual;

};
//36
if((Math.cos(player.rot)<0.588&&Math.cos(player.rot)>0.586)&&(SinRot<(-0.808)&&SinRot>(-0.810))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.75)+player.yActual;

};
//42
if((Math.cos(player.rot)<0.670&&Math.cos(player.rot)>0.668)&&(SinRot<(-0.742)&&SinRot>(-0.744))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.875)+player.yActual;

};
//48
if((Math.cos(player.rot)<0.744&&Math.cos(player.rot)>0.742)&&(SinRot<(-0.668)&&SinRot>(-0.670))){
Schussix=SchussWeite+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//54
if((Math.cos(player.rot)<0.810&&Math.cos(player.rot)>0.808)&&(SinRot<(-0.586)&&SinRot>(-0.588))){
Schussix=parseInt(SchussWeite*0.75)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//60
if((Math.cos(player.rot)<0.867&&Math.cos(player.rot)>0.865)&&(SinRot<(-0.498)&&SinRot>(-0.500))){
Schussix=parseInt(SchussWeite*0.625)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//66
if((Math.cos(player.rot)<0.914&&Math.cos(player.rot)>0.912)&&(SinRot<(-0.405)&&SinRot>(-0.407))){
Schussix=parseInt(SchussWeite*0.5)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//72
if((Math.cos(player.rot)<0.952&&Math.cos(player.rot)>0.950)&&(SinRot<(-0.308)&&SinRot>(-0.310))){
Schussix=parseInt(SchussWeite*0.375)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//78
if((Math.cos(player.rot)<0.979&&Math.cos(player.rot)>0.977)&&(SinRot<(-0.206)&&SinRot>(-0.208))){
Schussix=parseInt(SchussWeite*0.25)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//84
if((Math.cos(player.rot)<0.995&&Math.cos(player.rot)>0.993)&&(SinRot<(-0.103)&&SinRot>(-0.105))){
Schussix=parseInt(SchussWeite*0.125)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};

//90
if(Math.cos(player.rot)==1){
Schussix=player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//96
if((SinRot<0.105&&SinRot>0.103)&&(Math.cos(player.rot)>(0.993)&&Math.cos(player.rot)<(0.995))){
Schussix=parseInt(-SchussWeite*0.125)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//102
if((SinRot<0.208&&SinRot>0.206)&&(Math.cos(player.rot)>(0.977)&&Math.cos(player.rot)<(0.979))){
Schussix=parseInt(-SchussWeite*0.25)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//108
if((SinRot<0.310&&SinRot>0.308)&&(Math.cos(player.rot)>(0.950)&&Math.cos(player.rot)<(0.952))){
Schussix=parseInt(-SchussWeite*0.375)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//114
if((SinRot<0.407&&SinRot>0.405)&&(Math.cos(player.rot)>(0.912)&&Math.cos(player.rot)<(0.914))){
Schussix=parseInt(-SchussWeite*0.5)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//120
if((SinRot<0.500&&SinRot>0.498)&&(Math.cos(player.rot)>(0.865)&&Math.cos(player.rot)<(0.867))){
Schussix=parseInt(-SchussWeite*0.625)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//126
if((SinRot<0.588&&SinRot>0.586)&&(Math.cos(player.rot)>(0.808)&&Math.cos(player.rot)<(0.810))){
Schussix=parseInt(-SchussWeite*0.75)+player.xActual;
Schussiy=SchussWeite+player.yActual;

};
//132
if((SinRot<0.670&&SinRot>0.668)&&(Math.cos(player.rot)>(0.742)&&Math.cos(player.rot)<(0.744))){
Schussix=parseInt(-SchussWeite*0.875)+player.xActual;
Schussiy=SchussWeite+player.yActual;

;
};
//138
if((SinRot<0.744&&SinRot>0.742)&&(Math.cos(player.rot)>(0.668)&&Math.cos(player.rot)<(0.670))){
Schussix=-SchussWeite+player.xActual;
Schussiy=SchussWeite+player.yActual;

;
};
//144
if((SinRot<0.810&&SinRot>0.808)&&(Math.cos(player.rot)>(0.586)&&Math.cos(player.rot)<(0.588))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.875)+player.yActual;

;
};
//150
if((SinRot<0.867&&SinRot>0.865)&&(Math.cos(player.rot)>(0.498)&&Math.cos(player.rot)<(0.500))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.75)+player.yActual;

;
};
//156
if((SinRot<0.914&&SinRot>0.912)&&(Math.cos(player.rot)>(0.405)&&Math.cos(player.rot)<(0.407))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.625)+player.yActual;

;
};
//162
if((SinRot<0.952&&SinRot>0.950)&&(Math.cos(player.rot)>(0.308)&&Math.cos(player.rot)<(0.310))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.5)+player.yActual;

;
};
//168
if((SinRot<0.979&&SinRot>0.977)&&(Math.cos(player.rot)>(0.206)&&Math.cos(player.rot)<(0.208))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.375)+player.yActual;

;
};
//174
if((SinRot<0.995&&SinRot>0.993)&&(Math.cos(player.rot)>(0.103)&&Math.cos(player.rot)<(0.105))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(SchussWeite*0.25)+player.yActual;

;
};
//180
if(SinRot==1){
Schussix=-SchussWeite+player.xActual;
Schussiy=player.yActual;

};
//186
if((Math.cos(player.rot)>(-0.105)&&Math.cos(player.rot)<(-0.103))&&(SinRot>(0.993)&&SinRot<(0.995))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.125)+player.yActual;

;
};
//192
if((Math.cos(player.rot)>(-0.208)&&Math.cos(player.rot)<(-0.206))&&(SinRot>(0.977)&&SinRot<(0.979))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.25)+player.yActual;

;
};
//198
if((Math.cos(player.rot)>(-0.310)&&Math.cos(player.rot)<(-0.308))&&(SinRot>(0.950)&&SinRot<(0.952))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.375)+player.yActual;

;
};
//204
if((Math.cos(player.rot)>(-0.407)&&Math.cos(player.rot)<(-0.405))&&(SinRot>(0.912)&&SinRot<(0.914))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.5)+player.yActual;

;
};
//210
if((Math.cos(player.rot)>(-0.500)&&Math.cos(player.rot)<(-0.498))&&(SinRot>(0.865)&&SinRot<(0.867))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.625)+player.yActual;

;
};
//216
if((Math.cos(player.rot)>(-0.588)&&Math.cos(player.rot)<(-0.586))&&(SinRot>(0.808)&&SinRot<(0.810))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.75)+player.yActual;

;
};
//222
if((Math.cos(player.rot)>(-0.670)&&Math.cos(player.rot)<(-0.668))&&(SinRot>(0.742)&&SinRot<(0.744))){
Schussix=-SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.875)+player.yActual;

;
};
//228
if((Math.cos(player.rot)>(-0.744)&&Math.cos(player.rot)<(-0.742))&&(SinRot>(0.668)&&SinRot<(0.670))){
Schussix=-SchussWeite+player.xActual;
Schussiy=-SchussWeite+player.yActual;

};
//234
if((Math.cos(player.rot)>(-0.810)&&Math.cos(player.rot)<(-0.808))&&(SinRot>(0.586)&&SinRot<(0.588))){
Schussix=parseInt(-SchussWeite*0.875)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//240
if((Math.cos(player.rot)>(-0.867)&&Math.cos(player.rot)<(-0.865))&&(SinRot>(0.498)&&SinRot<(0.500))){
Schussix=parseInt(-SchussWeite*0.75)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//246
if((Math.cos(player.rot)>(-0.914)&&Math.cos(player.rot)<(-0.912))&&(SinRot>(0.405)&&SinRot<(0.407))){
Schussix=parseInt(-SchussWeite*0.5)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//252
if((Math.cos(player.rot)>(-0.952)&&Math.cos(player.rot)<(-0.950))&&(SinRot>(0.308)&&SinRot<(0.310))){
Schussix=parseInt(-SchussWeite*0.375)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//258
if((Math.cos(player.rot)>(-0.979)&&Math.cos(player.rot)<(-0.977))&&(SinRot>(0.206)&&SinRot<(0.208))){
Schussix=parseInt(-SchussWeite*0.25)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//264
if((Math.cos(player.rot)>(-0.995)&&Math.cos(player.rot)<(-0.993))&&(SinRot>(0.103)&&SinRot<(0.105))){
Schussix=parseInt(-SchussWeite*0.125)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//270
if(Math.cos(player.rot)==-1){
Schussix=player.xActual;
Schussiy=-SchussWeite+player.yActual;

};
//276
if((SinRot>(-0.105)&&SinRot<(-0.103))&&(Math.cos(player.rot)<(-0.993)&&Math.cos(player.rot)>(-0.995))){
Schussix=parseInt(SchussWeite*0.125)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//282
if((SinRot>(-0.208)&&SinRot<(-0.206))&&(Math.cos(player.rot)<(-0.977)&&Math.cos(player.rot)>(-0.979))){
Schussix=parseInt(SchussWeite*0.25)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//288
if((SinRot>(-0.310)&&SinRot<(-0.308))&&(Math.cos(player.rot)<(-0.950)&&Math.cos(player.rot)>(-0.952))){
Schussix=parseInt(SchussWeite*0.375)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//294
if((SinRot>(-0.407)&&SinRot<(-0.405))&&(Math.cos(player.rot)<(-0.912)&&Math.cos(player.rot)>(-0.914))){
Schussix=parseInt(SchussWeite*0.5)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//300
if((SinRot>(-0.500)&&SinRot<(-0.498))&&(Math.cos(player.rot)<(-0.865)&&Math.cos(player.rot)>(-0.867))){
Schussix=parseInt(SchussWeite*0.625)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//306
if((SinRot>(-0.588)&&SinRot<(-0.586))&&(Math.cos(player.rot)<(-0.808)&&Math.cos(player.rot)>(-0.810))){
Schussix=parseInt(SchussWeite*0.75)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//312
if((SinRot>(-0.670)&&SinRot<(-0.668))&&(Math.cos(player.rot)<(-0.742)&&Math.cos(player.rot)>(-0.744))){
Schussix=parseInt(SchussWeite*0.875)+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//318
if((SinRot>(-0.744)&&SinRot<(-0.742))&&(Math.cos(player.rot)<(-0.668)&&Math.cos(player.rot)>(-0.670))){
Schussix=SchussWeite+player.xActual;
Schussiy=-SchussWeite+player.yActual;

;
};
//324
if((SinRot>(-0.810)&&SinRot<(-0.808))&&(Math.cos(player.rot)<(-0.586)&&Math.cos(player.rot)>(-0.588))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.75)+player.yActual;

;
};
//330
if((SinRot>(-0.867)&&SinRot<(-0.865))&&(Math.cos(player.rot)<(-0.498)&&Math.cos(player.rot)>(-0.500))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.625)+player.yActual;

;
};
//336
if((SinRot>(-0.914)&&SinRot<(-0.912))&&(Math.cos(player.rot)<(-0.405)&&Math.cos(player.rot)>(-0.407))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.5)+player.yActual;

;
};
//342
if((SinRot>(-0.952)&&SinRot<(-0.950))&&(Math.cos(player.rot)<(-0.308)&&Math.cos(player.rot)>(-0.310))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.375)+player.yActual;

;
};
//348
if((SinRot>(-0.979)&&SinRot<(-0.977))&&(Math.cos(player.rot)<(-0.206)&&Math.cos(player.rot)>(-0.208))){
Schussix=SchussWeite+player.xActual;
Schussiy=parseInt(-SchussWeite*0.25)+player.yActual;

;
};
//354
	if((SinRot>(-0.995)&&SinRot<(-0.993))&&(Math.cos(player.rot)<(-0.103)&&Math.cos(player.rot)>(-0.105))){
		Schussix=SchussWeite+player.xActual;
		Schussiy=parseInt(-SchussWeite*0.125)+player.yActual;
		

}
}}
$("Kugel1").style.left=(Schussix*FeldGroesse)+65+'px';
$("Kugel1").style.top=(Schussiy*FeldGroesse)+60+'px';

}