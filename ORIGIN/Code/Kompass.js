var KompassBilderOrdner='Icon/Kompass/Pfeil/';
function Kompass(){
var KompassBilder=new Array();
for(var i=0;i<=60;i++){
KompassBilder[i]=new Image();
var j=i*6;
KompassBilder[i].src=''+KompassBilderOrdner+j.toString()+'.gif';
}
for(var i=0;i<=60;i++){
var j=i*6;
var k=(i+1)*6;
if(WindRichtungNeu>j&&WindRichtungNeu<k){
document.images[20].src=KompassBilder[i].src;
}
}
}