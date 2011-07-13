/*mapsMiniPlayer=function(){
	var weltPlay=theMapsPlayGround.link();
	var weltSays=weltPlay.getContext("2d");
	weltPlay.width=weltPlay.width;
	//player
	weltSays.fillRect(//draw a dot at the current player position
		player.xActual*miniMapScale-player.Scale,
		player.yActual*miniMapScale-player.Scale,
		player.Scale*2,player.Scale*2
	);
	weltSays.beginPath();
		weltSays.moveTo(player.xActual*miniMapScale,player.yActual*miniMapScale);
		weltSays.lineTo(
			(player.xActual+Math.cos(player.rot)*4)*miniMapScale,
			(player.yActual+Math.sin(player.rot)*4)*miniMapScale
		);
	weltSays.closePath();
	weltSays.stroke();
}*/