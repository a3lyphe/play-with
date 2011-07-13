var KompassBilderOrdner='Icon/Kompass/Pfeil/';
function Kompass(){
var KompassBilder=new Array();
for(var i=0;i<=60;i++){
KompassBilder[i]=new Image();
var j=i*6; //durch die Bilderbenennung in sechsGrad Schritten
KompassBilder[i].src=''+KompassBilderOrdner+j.toString()+'.gif';
}
for(var i=0;i<=60;i++){
var j=i*6;
var k=(i+1)*6;
if(WindRichtungNeu>j&&WindRichtungNeu<k){
document.images[1].src=KompassBilder[i].src;
}
}
}