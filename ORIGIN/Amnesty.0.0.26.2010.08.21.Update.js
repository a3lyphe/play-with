//Amnesty.0.0.26.2010.08.21.Update.js
alert((
	'°Amnesty.0.0.26.2010.08.21.Update.js°:'
	+'\n++\t'
	+'\n++\t'
	+'\n++\t'
));

Update
=
function()
{
	for
	(
		dieser
		in
		dieGegner
	)
	{
		/*
		var vari=''+'var G'+(i+1).toString()+'Scale'+'='+'2';
		eval(vari);
		*/
		dieGegner[dieser].Scale=2;
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
		player.Scale*2, player.Scale*2
	);
	userCtx.beginPath();
	userCtx.moveTo(player.xActual * miniMapScale, player.yActual * miniMapScale);
	userCtx.lineTo(
		(player.xActual + Math.cos(player.rot) * 2) * miniMapScale,
		(player.yActual + Math.sin(player.rot) * 2) * miniMapScale
	);
	userCtx.closePath();
	userCtx.stroke();
	
	for
	(
		dieser
		in
		dieGegner
	)
	{
		/*
		var vari=eval(''+'G'+(i+1).toString());
		*/
			objectCtx.fillStyle="rgb(0,156,156)";
			objectCtx.fillRect(
			dieGegner[dieser].xActual * miniMapScale - dieGegner[dieser].Scale, 
			dieGegner[dieser].yActual * miniMapScale - dieGegner[dieser].Scale,
			dieGegner[dieser].Scale*1, dieGegner[dieser].Scale*1
		);
		objectCtx.beginPath();
		objectCtx.moveTo(dieGegner[dieser].xActual * miniMapScale, dieGegner[dieser].yActual * miniMapScale);
		objectCtx.lineTo(
			(dieGegner[dieser].xActual + Math.cos(dieGegner[dieser].rot) * 2) * miniMapScale,
			(dieGegner[dieser].yActual + Math.sin(dieGegner[dieser].rot) * 2) * miniMapScale
		);
		objectCtx.closePath();
		objectCtx.stroke();
	}
}
