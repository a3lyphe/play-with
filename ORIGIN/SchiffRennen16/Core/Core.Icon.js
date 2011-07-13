Icon=function(){
	this.list=new Array();
	this.wide;
	this.tall;
	this.width;
	this.height;
	this.x;
	this.y;
	this.root;
	this.fold;
	this.name;
	this.type;
	this.last;
	this.load=function(){
		for(var i=0;i<this.last;i++){
			var j=i*6;
			this.list[i]=new Image();
			this.list[i].src=''+this.root+this.fold+j.toString()+this.name+'.'+this.type;
		}
	}
}