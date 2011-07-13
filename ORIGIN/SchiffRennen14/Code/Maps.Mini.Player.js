mapsMiniPlayer=function(){
var playerScale=2;
var miniMap=$("minimap");
var miniMapObjects=$("minimapobjects");
var objectCtx=miniMapObjects.getContext("2d");
miniMapObjects.width=miniMapObjects.width;
//player
objectCtx.fillRect( //draw a dot at the current player position
player.x*miniMapScale - playerScale,
player.y*miniMapScale - playerScale,
playerScale*2,playerScale*2
);
objectCtx.beginPath();
objectCtx.moveTo(player.x*miniMapScale,player.y*miniMapScale);
objectCtx.lineTo(
(player.x+Math.cos(player.rot)*4)*miniMapScale,
(player.y+Math.sin(player.rot)*4)*miniMapScale
);
objectCtx.closePath();
objectCtx.stroke();
}