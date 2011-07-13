// Maps
Maps=function(){
	this.id='';
	this.link=function(){
		return($(this.id));
	}
	this.says=function(){
		return(this.link().getContext('2d'));
	}
	this.xActual;
	this.yActual;
	this.Width;
	this.Height;
	this.zoom;
	this.mini=function(xActual,yActual,rActual){
		var weltPlay=this.link();
		//var weltSays=weltPlay.getContext("2d");
		weltPlay.width=weltPlay.width;
		//player
		this.says().fillRect(//draw a dot at the current player position
			xActual*miniMapScale-this.zoom,
			yActual*miniMapScale-this.zoom,
			this.zoom*2,this.zoom*2
		);
		this.says().beginPath();
			this.says().moveTo(xActual*miniMapScale,yActual*miniMapScale);
			this.says().lineTo(
				(xActual+Math.cos(rActual)*4)*miniMapScale,
				(yActual+Math.sin(rActual)*4)*miniMapScale
			);
		this.says().closePath();
		this.says().stroke();
	}
}
