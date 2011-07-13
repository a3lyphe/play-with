MiniMapExplorer=function(){
	miniMapScale=theWelt.zoom*2;
	trauminselCounter=0;
	iZahl=0;
	
	theWelt.MiniUpdate();Update();
}
MiniMapNormal=function(){
	miniMapScale=theWelt.zoom*.4;
	iZahl=0;
	trauminselCounter=0;
	
	theWelt.MiniUpdate();Update();
}