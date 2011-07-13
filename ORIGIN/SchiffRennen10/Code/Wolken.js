moveWolken=function(){

//wolke1
var Wolke1Max=1;
var Wolke1Halb=Wolke1Max/2;
var Wolke1Einviertel=Wolke1Max/4;
var Wolke1Dreiviertel=(Wolke1Max/4)*3;
var Wolke1Dreiachtel=(Wolke1Max/8)*3;
var Wolke1Fuenfachtel=(Wolke1Max/8)*5;
var Wolke1Siebenachtel=(Wolke1Max/8)*7;
//wolke2
var Wolke2Max=2;//WolkenGeschwindigkeit
var Wolke2Halb=Wolke2Max/2;
var Wolke2Einviertel=Wolke2Max/4;
var Wolke2Dreiviertel=(Wolke2Max/4)*3;
var Wolke2Dreiachtel=(Wolke2Max/8)*3;
var Wolke2Fuenfachtel=(Wolke2Max/8)*5;
var Wolke2Siebenachtel=(Wolke2Max/8)*7;
//wolke3
var Wolke3Max=3;
var Wolke3Halb=Wolke3Max/2;
var Wolke3Einviertel=Wolke3Max/4;
var Wolke3Dreiviertel=(Wolke3Max/4)*3;
var Wolke3Dreiachtel=(Wolke3Max/8)*3;
var Wolke3Fuenfachtel=(Wolke3Max/8)*5;
var Wolke3Siebenachtel=(Wolke3Max/8)*7;

// GewitterWolke
var GewitterWolkeMax=5;
//Wolke1
for(var i=0;i<7;i++){
switch(Windrichtung){
case i:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
break;
case i+6:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Einviertel+'px';
break;
case i+12:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiachtel+'px';
break;
case i+18:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Halb+'px';
break;
case i+24:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Fuenfachtel+'px';
break;
case i+30:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiviertel+'px';
break;
case i+36:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Siebenachtel+'px';
break;
case i+42:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+48:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Siebenachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+54:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+60:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Fuenfachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+66:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Halb+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+72:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+78:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Einviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+84:
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+90:
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+96:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Einviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+102:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+108:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Halb+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+114:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Fuenfachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+120:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+126:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Siebenachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+132:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Max+'px';
break;
case i+138:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Siebenachtel+'px';
break;
case i+144:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiviertel+'px';
break;
case i+150:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Fuenfachtel+'px';
break;
case i+156:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Halb+'px';
break;
case i+162:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Dreiachtel+'px';
break;
case i+168:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft+Wolke1Einviertel+'px';
break;
case i+174:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
break;
case i+180:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
break;
case i+186:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Einviertel+'px';
break;
case i+192:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiachtel+'px';
break;
case i+198:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Halb+'px';
break;
case i+204:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Fuenfachtel+'px';
break;
case i+210:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiviertel+'px';
break;
case i+216:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Siebenachtel+'px';
break;
case i+222:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+228:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Siebenachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+234:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+240:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Fuenfachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+246:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Halb+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+252:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Dreiachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+258:
$("Wolke1").style.top=$("Wolke1").offsetTop+Wolke1Einviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+264:
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+270:
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+276:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Einviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+282:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+288:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Halb+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+294:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Fuenfachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+300:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Dreiviertel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+306:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Siebenachtel+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+312:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Max+'px';
break;
case i+318:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Siebenachtel+'px';
break;
case i+324:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiviertel+'px';
break;
case i+330:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Fuenfachtel+'px';
break;
case i+336:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Halb+'px';
break;
case i+342:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Dreiachtel+'px';
break;
case i+348:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
$("Wolke1").style.left=$("Wolke1").offsetLeft-Wolke1Einviertel+'px';
break;
case i+354:
$("Wolke1").style.top=$("Wolke1").offsetTop-Wolke1Max+'px';
break;
}
}
//Die Wolke wird auf die Karte zurueckgesetzt
if($("Wolke1").offsetTop<-150){
$("Wolke1").style.top=900+'px';
}
if($("Wolke1").offsetTop>900){
$("Wolke1").style.top=-140+'px';
}
if($("Wolke1").offsetLeft<-200){
$("Wolke1").style.left=1300+'px';
}
if($("Wolke1").offsetLeft>1300){
$("Wolke1").style.left=-200+'px';
}
//Wolke2
for(var i=0;i<7;i++){
switch(Windrichtung){
case i:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
break;
case i+6:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Einviertel+'px';
break;
case i+12:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiachtel+'px';
break;
case i+18:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Halb+'px';
break;
case i+24:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Fuenfachtel+'px';
break;
case i+30:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiviertel+'px';
break;
case i+36:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Siebenachtel+'px';
break;
case i+42:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+48:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Siebenachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+54:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+60:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Fuenfachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+66:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Halb+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+72:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+78:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Einviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+84:
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+90:
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+96:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Einviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+102:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+108:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Halb+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+114:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Fuenfachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+120:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+126:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Siebenachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+132:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Max+'px';
break;
case i+138:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Siebenachtel+'px';
break;
case i+144:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiviertel+'px';
break;
case i+150:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Fuenfachtel+'px';
break;
case i+156:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Halb+'px';
break;
case i+162:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Dreiachtel+'px';
break;
case i+168:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft+Wolke2Einviertel+'px';
break;
case i+174:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
break;
case i+180:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
break;
case i+186:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Einviertel+'px';
break;
case i+192:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiachtel+'px';
break;
case i+198:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Halb+'px';
break;
case i+204:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Fuenfachtel+'px';
break;
case i+210:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiviertel+'px';
break;
case i+216:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Siebenachtel+'px';
break;
case i+222:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+228:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Siebenachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+234:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+240:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Fuenfachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+246:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Halb+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+252:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Dreiachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+258:
$("Wolke2").style.top=$("Wolke2").offsetTop+Wolke2Einviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+264:
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+270:
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+276:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Einviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+282:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+288:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Halb+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+294:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Fuenfachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+300:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Dreiviertel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+306:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Siebenachtel+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+312:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Max+'px';
break;
case i+318:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Siebenachtel+'px';
break;
case i+324:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiviertel+'px';
break;
case i+330:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Fuenfachtel+'px';
break;
case i+336:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Halb+'px';
break;
case i+342:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Dreiachtel+'px';
break;
case i+348:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
$("Wolke2").style.left=$("Wolke2").offsetLeft-Wolke2Einviertel+'px';
break;
case i+354:
$("Wolke2").style.top=$("Wolke2").offsetTop-Wolke2Max+'px';
break;
}
}
//Die Wolke wird auf die Karte zurueckgesetzt
if($("Wolke2").offsetTop<-150){
$("Wolke2").style.top=900+'px';
}
if($("Wolke2").offsetTop>900){
$("Wolke2").style.top=-140+'px';
}
if($("Wolke2").offsetLeft<-200){
$("Wolke2").style.left=1300+'px';
}
if($("Wolke2").offsetLeft>1300){
$("Wolke2").style.left=-200+'px';
}
//Wolke3
for(var i=0;i<7;i++){
switch(Windrichtung){
case i:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
break;
case i+6:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Einviertel+'px';
break;
case i+12:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiachtel+'px';
break;
case i+18:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Halb+'px';
break;
case i+24:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Fuenfachtel+'px';
break;
case i+30:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiviertel+'px';
break;
case i+36:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Siebenachtel+'px';
break;
case i+42:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+48:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Siebenachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+54:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+60:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Fuenfachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+66:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Halb+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+72:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+78:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Einviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+84:
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+90:
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+96:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Einviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+102:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+108:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Halb+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+114:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Fuenfachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+120:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+126:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Siebenachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+132:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Max+'px';
break;
case i+138:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Siebenachtel+'px';
break;
case i+144:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiviertel+'px';
break;
case i+150:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Fuenfachtel+'px';
break;
case i+156:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Halb+'px';
break;
case i+162:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Dreiachtel+'px';
break;
case i+168:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft+Wolke3Einviertel+'px';
break;
case i+174:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
break;
case i+180:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
break;
case i+186:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Einviertel+'px';
break;
case i+192:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiachtel+'px';
break;
case i+198:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Halb+'px';
break;
case i+204:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Fuenfachtel+'px';
break;
case i+210:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiviertel+'px';
break;
case i+216:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Siebenachtel+'px';
break;
case i+222:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+228:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Siebenachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+234:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+240:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Fuenfachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+246:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Halb+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+252:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Dreiachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+258:
$("Wolke3").style.top=$("Wolke3").offsetTop+Wolke3Einviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+264:
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+270:
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+276:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Einviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+282:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+288:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Halb+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+294:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Fuenfachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+300:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Dreiviertel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+306:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Siebenachtel+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+312:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Max+'px';
break;
case i+318:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Siebenachtel+'px';
break;
case i+324:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiviertel+'px';
break;
case i+330:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Fuenfachtel+'px';
break;
case i+336:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Halb+'px';
break;
case i+342:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Dreiachtel+'px';
break;
case i+348:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
$("Wolke3").style.left=$("Wolke3").offsetLeft-Wolke3Einviertel+'px';
break;
case i+354:
$("Wolke3").style.top=$("Wolke3").offsetTop-Wolke3Max+'px';
break;
}
}
//Die Wolke wird auf die Karte zurueckgesetzt
if($("Wolke3").offsetTop<-150){
$("Wolke3").style.top=900+'px';
}
if($("Wolke3").offsetTop>900){
$("Wolke3").style.top=-140+'px';
}
if($("Wolke3").offsetLeft<-200){
$("Wolke3").style.left=1300+'px';
}
if($("Wolke3").offsetLeft>1300){
$("Wolke3").style.left=-200+'px';
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
$("GewitterWolke").style.top=900+'px';
}
if($("GewitterWolke").offsetTop>900){
$("GewitterWolke").style.top=-80+'px';
}
if($("GewitterWolke").offsetLeft<-80){
$("GewitterWolke").style.left=1300+'px';
}
if($("GewitterWolke").offsetLeft>1300){
$("GewitterWolke").style.left=-80+'px';
}
//Wird ein Player vom Gewitter getroffen?
if($("GewitterWolke").offsetLeft>=player.x*(FeldGroesse-2)&&$("GewitterWolke").offsetLeft<=player.x*(FeldGroesse+2)&&$("GewitterWolke").offsetTop>=player.y*(FeldGroesse-2)&&$("GewitterWolke").offsetTop<=player.y*(FeldGroesse+2)){
player.Leute-=parseInt(player.Leute/10);
}
}