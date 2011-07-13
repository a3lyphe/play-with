mapsMiniPlayer=function(){
var playerScale=2;
var miniMap=$("minimap");
var miniMapObjects=$("minimapobjects");
var objectCtx=miniMapObjects.getContext("2d");
miniMapObjects.width=miniMapObjects.width;
//player
objectCtx.fillRect( //draw a dot at the current player position
player.xActual*miniMapScale - playerScale,
player.yActual*miniMapScale - playerScale,
playerScale*2,playerScale*2
);
objectCtx.beginPath();
objectCtx.moveTo(player.xActual*miniMapScale,player.yActual*miniMapScale);
objectCtx.lineTo(
(player.xActual+Math.cos(player.rot)*4)*miniMapScale,
(player.yActual+Math.sin(player.rot)*4)*miniMapScale
);
objectCtx.closePath();
objectCtx.stroke();
}