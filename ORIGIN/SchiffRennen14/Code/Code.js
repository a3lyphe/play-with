var Maximum=359;
var Minimum=0;
var ZufallsZahl=0;
var imageFolder='Icon/';
var SequenzCounter=0;
var FeldGroesse=17;
var HavannaAnheuernCounter=0;
var IschtukAnheuernCounter=0;
var WindRichtungNeu=0;
var Windrichtung=145;
var KielCounter=0;
var InitCounter=0;
var GameCounter=0;
var RefreshCounter=0;
var KielWasserCounter=0;
var bewegungsCounter=0;
var mapWidth=0;
var mapHeight=0;
var miniMapScale=3;
init=function(){
mapWidth=map[0].length;
mapHeight=map.length;
bindKeys();
drawMiniMap();
setInterval('WindHose()',1000);
setInterval('moveWolken()',1000);

Sequenzer();
}
Sequenzer=function(){
SequenzCounter+=1;
GameCounter+=1;
if(SequenzCounter>100){
refresher();
SequenzCounter=0;
}
if(GameCounter>3){
gameCycle();

Kielwasser();
GameCounter=0;
}
window.setTimeout(Sequenzer,1);
}
gameCycle=function(){
move();
updateMiniMap();
}
updateMiniMap=function(){
mapsMiniPlayer();
moveDiv();
SchiffBilderRoto();
Kompass()
}