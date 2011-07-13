var SchiffBilderOrdner='icon/Schiff/';
var SchiffBilder=new Array();
for(var i=0;i<=60;i++){
SchiffBilder[i]=new Image();
var j=i*6;//durch die Bilderbenennung in sechsGrad Schritten
SchiffBilder[i].src=''+SchiffBilderOrdner+j.toString()+'Schiff'+'.png';
}