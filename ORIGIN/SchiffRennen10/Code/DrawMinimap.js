function drawMiniMap(){
	var welt=theWelt.link();
	var weltBack=theMapsBackGround.link();
	var weltPlay=theMapsPlayGround.link();

	weltBack.width=mapWidth*miniMapScale;//resize the internal canvas dimensions
	weltBack.height=mapHeight*miniMapScale;//of both the map canvas and the object canvas
	weltPlay.width=weltBack.width;
	weltPlay.height=weltBack.height;

	var w=(mapWidth*miniMapScale)+"px"//minimap CSS dimensions
	var h=(mapHeight*miniMapScale)+"px"

	weltBack.style.width=weltPlay.style.width=welt.style.width=w;
	weltBack.style.height=weltPlay.style.height=welt.style.height=h;


	var weltSays=theMapsBackGround.says();
	weltSays.fillStyle="#1587C4";
	weltSays.fillRect(0,0,weltBack.width,weltBack.height);
$('Info').value=weltSays;
//loop through all blocks on the map
	for(var y=0;y<mapHeight;y++){
		for(var x=0;x<mapWidth;x++){
			var wall=map[y][x];
			if(wall>0&&wall<2){//if there is a wall block at this(x,y) ...
				weltSays.fillStyle="rgb(0,150,0)";
				weltSays.fillRect(//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall>1&&wall<3){//if there is a wall block at this(x,y) ...
				weltSays.fillStyle="rgb(156,0,0)";
				weltSays.fillRect(//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall>2&&wall<4){//if there is a wall block at this(x,y) ...
				weltSays.fillStyle="rgb(156,0,0)";
				weltSays.fillRect(//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall>5&&wall<7){//if there is a wall block at this(x,y) ...
				weltSays.fillStyle="rgb(255,0,0)";
				weltSays.fillRect(//... then draw a block on the minimap
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
		}
	}
	updateMiniMap();
}