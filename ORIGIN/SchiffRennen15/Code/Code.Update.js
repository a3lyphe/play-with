Update=function(){
	for(var i=0;i<dieGegnerAnzahl;i++){
		var vari=''+'var G'+(i+1).toString()+'Scale'+'='+'2';
			eval(vari);
	}
	var playerScale=2;
	var miniMap = $("theMapsBackGround");
	var miniMapObjects = $("theMapsPlayGround");
	var userCtx = miniMapObjects.getContext("2d");
	var objectCtx = miniMapObjects.getContext("2d");
	miniMapObjects.width = miniMapObjects.width;
	userCtx.fillStyle="rgb(250,0,0)";
	userCtx.fillRect(
		player.xActual * miniMapScale - player.Scale, 
		player.yActual * miniMapScale - player.Scale,
		player.Scale*4, player.Scale*4
	);
	userCtx.beginPath();
	userCtx.moveTo(player.xActual * miniMapScale, player.yActual * miniMapScale);
	userCtx.lineTo(
		(player.xActual + Math.cos(player.rot) * 4) * miniMapScale,
		(player.yActual + Math.sin(player.rot) * 4) * miniMapScale
	);
	userCtx.closePath();
	userCtx.stroke();
	
	for(var i=0;i<dieGegnerAnzahl;i++){
		var vari=eval(''+'G'+(i+1).toString());
			objectCtx.fillStyle="rgb(0,156,156)";
			objectCtx.fillRect(
			dieGegner[i].xActual * miniMapScale - dieGegner[i].Scale, 
			dieGegner[i].yActual * miniMapScale - dieGegner[i].Scale,
			dieGegner[i].Scale*1, dieGegner[i].Scale*1
		);
		objectCtx.beginPath();
		objectCtx.moveTo(dieGegner[i].xActual * miniMapScale, dieGegner[i].yActual * miniMapScale);
		objectCtx.lineTo(
			(dieGegner[i].xActual + Math.cos(dieGegner[i].rot) * 2) * miniMapScale,
			(dieGegner[i].yActual + Math.sin(dieGegner[i].rot) * 2) * miniMapScale
		);
		objectCtx.closePath();
		objectCtx.stroke();
	}
}