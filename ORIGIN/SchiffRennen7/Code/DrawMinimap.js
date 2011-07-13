function drawMiniMap(){
var miniMap=$("minimap");//the actual map
var miniMapCtr=$("minimapcontainer");//the container div element
var miniMapObjects=$("minimapobjects");//the canvas used for drawing the objects on the map(player character,etc)
miniMap.width=mapWidth*miniMapScale;//resize the internal canvas dimensions
miniMap.height=mapHeight*miniMapScale;//of both the map canvas and the object canvas
miniMapObjects.width=miniMap.width;
miniMapObjects.height=miniMap.height;
var w=(mapWidth*miniMapScale)+"px"//minimap CSS dimensions
var h=(mapHeight*miniMapScale)+"px"
miniMap.style.width=miniMapObjects.style.width=miniMapCtr.style.width=w;
miniMap.style.height=miniMapObjects.style.height=miniMapCtr.style.height=h;
var ctx=miniMap.getContext("2d");
ctx.fillStyle="#1587C4";
ctx.fillRect(0,0,miniMap.width,miniMap.height);
//loop through all blocks on the map
for(var y=0;y<mapHeight;y++){
for(var x=0;x<mapWidth;x++){
var wall=map[y][x];
if(wall>0&&wall<2){//if there is a wall block at this(x,y) ...
ctx.fillStyle="rgb(0,150,0)";
ctx.fillRect(//... then draw a block on the minimap
x*miniMapScale,
y*miniMapScale,
miniMapScale,miniMapScale
);
}
if(wall>1&&wall<3){//if there is a wall block at this(x,y) ...
ctx.fillStyle="rgb(156,0,0)";
ctx.fillRect(//... then draw a block on the minimap
x*miniMapScale,
y*miniMapScale,
miniMapScale,miniMapScale
);
}
if(wall>2&&wall<4){//if there is a wall block at this(x,y) ...
ctx.fillStyle="rgb(156,0,0)";
ctx.fillRect(//... then draw a block on the minimap
x*miniMapScale,
y*miniMapScale,
miniMapScale,miniMapScale
);
}
if(wall>5&&wall<7){//if there is a wall block at this(x,y) ...
ctx.fillStyle="rgb(255,0,0)";
ctx.fillRect(//... then draw a block on the minimap
x*miniMapScale,
y*miniMapScale,
miniMapScale,miniMapScale
);
}
}
}
updateMiniMap();
}