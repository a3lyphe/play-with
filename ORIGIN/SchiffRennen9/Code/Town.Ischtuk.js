var Ischtuk={
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
Leute:200,
Geld:1734,
Nahrung:1545,
ReparierKurs:5,
KaufKurs:5
}
//Ischtuk
function IschtukExit(){
$('Ischtuk').style.visibility='hidden';
player.x=13;
player.y=13;
player.rot=0;
player.dir=0;
}
function IschtukTaverne(){
$("IschtukTaverne").style.visibility='visible';
if(IschtukAnheuernCounter<1){
$("IschtukTaverneAnheuern").style.visibility='visible';
}
}
function IschtukAnheuern(){
IschtukAnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(IschtukAnheuernCounter>0){
$("IschtukTaverneAnheuern").style.visibility='hidden';
}
}
function IschtukTaverneExit(){
$("IschtukTaverne").style.visibility='hidden';
}
function IschtukKontor(){
$("IschtukKontor").style.visibility='visible';
}
function IschtukKontorExit(){
$("IschtukKontor").style.visibility='hidden';
}
function IschtukKontorKaufen(){
if((player.Geld-(Ischtuk.KaufKurs*10))>=0){
Ischtuk.Geld+=Ischtuk.KaufKurs*10;
Ischtuk.Nahrung-=10;
player.Nahrung+=10;
player.Geld-=Ischtuk.KaufKurs*10;
}
}
function IschtukKontorVerkaufen(){
if(player.Nahrung-10>=0){
Ischtuk.Geld-=(Ischtuk.KaufKurs*.9)*10;
Ischtuk.Nahrung+=10;
player.Nahrung-=10;
player.Geld+=(Ischtuk.KaufKurs*.9)*10;
}
}
function IschtukHafen(){
$("IschtukHafen").style.visibility='visible';
}
function IschtukHafenExit(){
$("IschtukHafen").style.visibility='hidden';
}
function IschtukHafenReparieren(){
if((player.Geld-Ischtuk.ReparierKurs)>=0){
Ischtuk.Geld+=Ischtuk.ReparierKurs;
player.Geld-=Ischtuk.ReparierKurs;
bewegungsCounter-=500;
}
}