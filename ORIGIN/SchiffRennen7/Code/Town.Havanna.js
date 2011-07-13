var Havanna={
Leute:600,
Geld:1734,
Nahrung:1545,
ReparierKurs:5,
KaufKurs:4
}
//Havanna
function HavannaExit(){
$('Havanna').style.visibility='hidden';
player.x=22;
player.y=19;
player.rot=0;
player.dir=0;
}
function HavannaTaverne(){
$("HavannaTaverne").style.visibility='visible';
if(HavannaAnheuernCounter<1){
$("HavannaTaverneAnheuern").style.visibility='visible';
}
}
function HavannaAnheuern(){
HavannaAnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(HavannaAnheuernCounter>0){
$("HavannaTaverneAnheuern").style.visibility='hidden';
}
}
function HavannaTaverneExit(){
$("HavannaTaverne").style.visibility='hidden';
$("HavannaTaverneAnheuern").style.visibility='hidden';
}
function HavannaKontor(){
$("HavannaKontor").style.visibility='visible';
}
function HavannaKontorExit(){
$("HavannaKontor").style.visibility='hidden';
}
function HavannaKontorKaufen(){
if((player.Geld-(Havanna.KaufKurs*10))>=0){
Havanna.Geld+=Havanna.KaufKurs*10;
Havanna.Nahrung-=10;
player.Nahrung+=10;
player.Geld-=Havanna.KaufKurs*10;
}
}
function HavannaKontorVerkaufen(){
if(player.Nahrung-10>=0){
Havanna.Geld-=(Havanna.KaufKurs*.9)*10;
Havanna.Nahrung+=10;
player.Nahrung-=10;
player.Geld+=(Havanna.KaufKurs*.9)*10;
}
}
function HavannaHafen(){
$("HavannaHafen").style.visibility='visible';
}
function HavannaHafenExit(){
$("HavannaHafen").style.visibility='hidden';
}
function HavannaHafenReparieren(){
if((player.Geld-Havanna.ReparierKurs)>=0){
Havanna.Geld+=Havanna.ReparierKurs;
player.Geld-=Havanna.ReparierKurs;
bewegungsCounter-=500;
}
}