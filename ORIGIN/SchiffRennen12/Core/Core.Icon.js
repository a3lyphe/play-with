//Core.Icon.js
Icon=function(){
	this.list=new Array();
	this.wide;
	this.tall;
	this.width;
	this.height;
	this.x;	
	this.y;
	this.root;				//Oberste OrdnerEbene f�r Icon�s
	this.fold;				//PfadAngabe f�r UnterOrdner  ../Schiff/Segel/..
	this.name;				//NamensAngabe f�r das spezielle Bild
	this.type;				//DateiTyp|Endung
	this.last;
	this.load=function(){
			for(var i=0;i<this.last;i++){
				var j=i*6;
				this.list[i]=new Image();
				this.list[i].src=''+this.root+this.fold+j.toString()+this.name+'.'+this.type;
			}
	};
	//this.face=new Face();
}