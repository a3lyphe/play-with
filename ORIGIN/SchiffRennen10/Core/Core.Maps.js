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
}
